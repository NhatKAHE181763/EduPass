class ExamsController < ApplicationController
  before_action :authenticate_user!, only: [ :start ]
  before_action :check_premium_access, only: [ :show, :start ]
  def show
    if user_signed_in?
      @attempts = current_user.exam_attempts.where(exam: @exam).order(created_at: :desc)
    end
  end

  def start
    if @is_locked
      redirect_to subscriptions_path, alert: "Bạn cần đăng ký gói Premium để truy cập bài thi này."
      return
    end

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

  private

  def check_premium_access
    @exam = Exam.find_by!(slug: params[:id])
    authorize @exam

    @is_locked = @exam.course.is_premium? &&
      (!user_signed_in? || !current_user.has_active_subscription?)
  end
end
