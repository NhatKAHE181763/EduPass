class GradingService
  attr_reader :exam_attempt, :submitted_answers, :exam

  def initialize(exam_attempt, submitted_answers = {})
    @exam_attempt = exam_attempt
    @exam = exam_attempt.exam
    @submitted_answers = submitted_answers
  end

  def call
    ActiveRecord::Base.transaction do
      process_answers
      finalize_attempt
      update_study_activity
    end

    exam_attempt
  end

  private

  def process_answers
    exam.sections.includes(questions: [ :answers, :matching_pairs ]).each do |section|
      section.questions.each do |question|
        user_input = submitted_answers[question.id.to_s]
        user_answer = exam_attempt.user_answers.build(question: question)
        user_answer.is_correct = grade_question(question, user_answer, user_input)
        user_answer.save!
      end
    end
  end

  def grade_question(question, user_answer, user_input)
    case question.question_type.to_sym
    when :multiple_choice
      grade_multiple_choice(question, user_answer, user_input)
    when :fill_blank
      grade_fill_blank(question, user_answer, user_input)
    when :matching
      grade_matching(question, user_answer, user_input)
    else
      false
    end
  end

  def grade_multiple_choice(question, user_answer, user_input)
    if question.allow_multiple
      selected_ids = Array(user_input).map(&:to_i)
      correct_ids = question.answers.where(is_correct: true).pluck(:id)

      user_answer.text_answer = selected_ids.to_json
      selected_ids.sort == correct_ids.sort
    else
      selected_id = user_input.to_i
      correct_id = question.answers.find_by(is_correct: true).id

      user_answer.answer_id = selected_id > 0 ? selected_id : nil
      selected_id == correct_id
    end
  end

  def grade_fill_blank(question, user_answer, user_input)
    user_answer.text_answer = user_input
    correct_answers = question.answers.where(is_correct: true).map { |a| a.content.to_s.strip.downcase }
    correct_answers.include?(user_input.to_s.strip.downcase)
  end

  def grade_matching(question, user_answer, user_input)
    user_pairs = user_input || {}
    user_answer.matched_pairs = user_pairs

    question.matching_pairs.all? do |pair|
      user_right_content = user_pairs[pair.id.to_s]
      user_right_content.to_s == pair.right_content.to_s
    end
  end

  def finalize_attempt
    correct_count = exam_attempt.user_answers.where(is_correct: true).count
    total_questions = exam.sections.joins(:questions).count
    course_type = exam.course.course_type.to_sym

    score = if course_type == :ielts
              ScoreCalculator.calculate_ielts(correct_count, :reading)
    elsif course_type == :toeic
              ScoreCalculator.calculate_toeic_reading(correct_count / 2) + ScoreCalculator.calculate_toeic_listening(correct_count / 2)
    else
              total_questions > 0 ? (correct_count.to_f * 100 / total_questions).round(2) : 0
    end

    duration = exam_attempt.started_at ? (Time.current - exam_attempt.started_at).to_i : 0

    exam_attempt.update!(
      correct_count: correct_count,
      total_questions: total_questions,
      score: score,
      actual_duration_seconds: duration,
      submitted_at: Time.current,
      status: :submitted
    )
  end

  def update_study_activity
    activity_date = (exam_attempt.started_at || Time.current).to_date
    study_activity = exam_attempt.user.study_activities.find_or_create_by!(activity_date: activity_date)
    duration = exam_attempt.actual_duration_seconds || 0

    study_activity.update!(
      exam_attempts_count: study_activity.exam_attempts_count + 1,
      total_duration_seconds: study_activity.total_duration_seconds + duration
    )
  end
end
