class Admin::UsersController < AdminController
  before_action :authenticate_user!
  before_action :set_user, only: [ :show, :toggle_role, :toggle_status ]

  def index
    @q = User.with_discarded.ransack(params[:q])

    @users = @q.result(distinct: true).order(created_at: :desc)
    .page(params[:page]).per(20)
  end

  def show
  end

  def toggle_role
    if @user.student?
      @user.teacher!
      flash[:notice] = "Đã thăng cấp #{@user.full_name} thành Teacher"
    elsif @user.teacher?
      @user.student!
      flash[:notice] = "Đã giáng cấp #{@user.full_name} thành Student"
    else
      flash[:alert] = "Không thể thay đổi vai trò của admin"
    end

    redirect_back_or_to admin_users_path
  end

  def toggle_status
    if @user.admin?
      flash[:alert] = "Không thể khóa tài khoản admin"
    elsif @user.discarded?
      @user.undiscard
      flash[:notice] = "Đã mở khóa tài khoản #{@user.full_name}"
    else
      @user.discard
      flash[:notice] = "Đã khóa tài khoản #{@user.full_name}"
    end

    redirect_back_or_to admin_users_path
  end

  private

  def set_user
    @user = User.with_discarded.find(params[:id])
  end
end
