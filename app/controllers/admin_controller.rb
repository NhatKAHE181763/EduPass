class AdminController < ApplicationController
  layout "admin"

  before_action :authenticate_user!
  before_action :require_admin!

  skip_after_action :verify_authorized

  private

  def require_admin!
    unless current_user&.admin? || current_user&.teacher?
      flash[:alert] = "Bạn không có quyền truy cập khu vực này."
      redirect_to root_path
    end
  end
end
