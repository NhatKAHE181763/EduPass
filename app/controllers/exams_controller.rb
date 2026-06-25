class ExamsController < ApplicationController
  before_action :authenticate_user!, only: [ :start ]
  def show
    @exam = Exam.find_by!(slug: params[:id])
    authorize @exam
    @is_locked = @exam.course.is_premium? &&
      (!user_signed_in? || !current_user.has_active_subscription?)

    if user_signed_in?
      @attempts = current_user.exam_attempts.where(exam: @exam).order(created_at: :desc)
    end
  end

  def start
    @exam = Exam.find_by!(slug: params[:id])
    authorize @exam
    @attempt = current_user.exam_attempts.find_by(exam: @exam, status: :in_progress)

    if @attempt && (Time.current - @attempt.started_at).to_i > (@exam.duration_minutes * 60)
      @attempt.update(status: :timed_out)
      @attempt = nil
    end

    unless @attempt
      @attempt = current_user.exam_attempts.create!(
        exam: @exam,
        status: :in_progress,
        started_at: Time.current,
        total_questions: Question.where(section_id: @exam.sections.select(:id)).count
      )
    end
    redirect_to exam_attempt_path(@attempt)
  end
end
