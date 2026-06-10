class GradingService
  attr_reader :exam_attempt, :submitted_answers, :exam

  # submitted_answers là hash gom tất cả đáp án từ form. Ví dụ: { "question_1_id" => "A", "question_2_id" => ["A", "B"] }
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
    exam.sections.includes(questions: [ :answers, :matching_pairs ]).find_each do |section|
      section.questions.each do |question|
        # Lấy value từ payload dựa vào question.id
        user_input = submitted_answers[question.id.to_s] || submitted_answers[question.id]

        user_answer = exam_attempt.user_answers.find_or_initialize_by(question: question)
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
      # user_input là mảng [1, 2] do form gửi lên
      selected_ids = Array(user_input).map(&:to_i).reject(&:zero?)
      correct_ids = question.answers.where(is_correct: true).pluck(:id)

      # Lưu mảng này vào cột text_answer
      user_answer.text_answer = selected_ids.to_json

      selected_ids.sort == correct_ids.sort
    else
      selected_id = user_input.to_i
      correct_id = question.answers.find_by(is_correct: true)&.id

      user_answer.answer_id = selected_id > 0 ? selected_id : nil
      selected_id == correct_id
    end
  end


  def grade_fill_blank(question, user_answer, user_input)
    user_text = user_input.to_s.strip.downcase
    user_answer.text_answer = user_input

    # Lấy các đáp án được cấu hình là "is_correct" ra để so sánh text
    correct_answers = question.answers.where(is_correct: true).map { |a| a.content.to_s.strip.downcase }
    correct_answers.include?(user_text)
  end

  def grade_matching(question, user_answer, user_input)
    # Payload matching mong muốn: { left_id => right_id }
    user_pairs = user_input || {}
    user_answer.matched_pairs = user_pairs

    correct_pairs_count = 0
    question.matching_pairs.each do |pair|
      # Lấy right_id mà user đã nối với pair.id này
      user_right_id = user_pairs[pair.id.to_s] || user_pairs[pair.id]

      # Giả định right_content đang lưu ID của item đúng, hoặc bạn đang lưu chuỗi text
      if user_right_id.to_s == pair.right_content.to_s
        correct_pairs_count += 1
      end
    end

    question.matching_pairs.count > 0 && correct_pairs_count == question.matching_pairs.count
  end

  def finalize_attempt
    correct_count = exam_attempt.user_answers.where(is_correct: true).count
    total_questions = exam.sections.joins(:questions).count
    course_type = exam.course.course_type.to_sym

    # Quy đổi điểm
    score = if course_type == :ielts
              # Có thể truyền section_type để phân biệt R/L
              ScoreCalculator.calculate_ielts(correct_count, :reading)
    elsif course_type == :toeic
              # TOEIC chia câu R/L để scale điểm chuẩn nhất, nhưng demo ta scale tổng:
              ScoreCalculator.calculate_toeic_reading(correct_count / 2) + ScoreCalculator.calculate_toeic_listening(correct_count / 2)
    else
              total_questions > 0 ? (correct_count.to_f / total_questions * 100).round(2) : 0
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
    # Lấy ngày của bài làm (nếu started_at nil thì lấy ngày hiện tại)
    activity_date = (exam_attempt.started_at || Time.current).to_date

    # Tìm hoặc tạo mới StudyActivity của user trong ngày đó
    activity = exam_attempt.user.study_activities.find_or_create_by!(
      activity_date: activity_date
    )

    # Cộng dồn số lần làm bài và tổng thời gian
    duration = exam_attempt.actual_duration_seconds || 0

    activity.update!(
      exam_attempts_count: activity.exam_attempts_count + 1,
      total_duration_seconds: activity.total_duration_seconds + duration
    )
  end
end
