class ExamAttemptsController < ApplicationController
  before_action :authenticate_user!
  layout "exam_taking"

  def show
    # Chỉ được xem bài làm của chính mình
    @attempt = current_user.exam_attempts.find(params[:id])
    authorize @attempt

    @exam = @attempt.exam
    @sections = @exam.sections.includes(:questions).order(:order_index)
    @notes = @attempt.notes.order(created_at: :desc)

    if @attempt.submitted?
      @user_answers_hash = @attempt.user_answers.index_by(&:question_id)
    end
  end

  def update
    @attempt = current_user.exam_attempts.find(params[:id])
    authorize @attempt

    GradingService.new(@attempt, params[:answers]).call
    redirect_to exam_attempt_path(@attempt)
  end
end
