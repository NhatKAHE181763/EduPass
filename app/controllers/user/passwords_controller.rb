class User::PasswordsController < ApplicationController
  before_action :authenticate_user!

  def edit
    @user = current_user
    authorize @user
  end

  def update
    @user = current_user
    authorize @user

    if @user.update_with_password(password_params)
      # Khi đổi mật khẩu thành công, Devise sẽ làm mất session hiện tại và văng ra ngoài.
      # Hàm bypass_sign_in giúp giữ user tiếp tục đăng nhập sau khi đổi.
      bypass_sign_in(@user)
      flash[:notice] = "Password updated successfully."
      redirect_to edit_user_password_path
    else
      render :edit, status: :unprocessable_entity
    end
  end

  private

  def password_params
    params.require(:user).permit(:current_password, :password, :password_confirmation)
  end
end
