class ExamAttemptsController < ApplicationController
  before_action :authenticate_user!
  layout "exam_taking" # Sẽ dùng giao diện riêng cho trang làm bài (ẩn navbar/footer)

  def show
    # Chỉ được xem bài làm của chính mình
    @attempt = current_user.exam_attempts.find(params[:id])
    authorize @attempt

    @exam = @attempt.exam
    @sections = @exam.sections.includes(:questions).order(:order_index)
  end

  def update
    @attempt = current_user.exam_attempts.find(params[:id])
    authorize @attempt

    # Cập nhật trạng thái thành submitted hoặc timed_out
    @attempt.update(status: params.dig(:exam_attempt, :status) || :submitted)

    # Tạm thời quay lại trang danh sách bài thi với thông báo thành công
    flash[:notice] = "Đã nộp bài thành công!"
    redirect_to course_path(@attempt.exam.course)
  end
end
