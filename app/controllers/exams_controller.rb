class ExamsController < ApplicationController
  def show
    @exam = Exam.find_by!(slug: params[:id])
    authorize @exam

    # Kiểm tra xem bài thi này có bị khóa đối với user hiện tại không
    @is_locked = @exam.course.is_premium? && (!user_signed_in? || !current_user.has_active_subscription?)
  end
end
