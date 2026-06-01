class Users::ProfilesController < ApplicationController
  before_action :authenticate_user!

  def edit
    @user = current_user
    authorize @user
  end

  def update
    @user = current_user
    authorize @user

    if @user.update(user_params)
      flash[:notice] = "Profile updated successfully."
      redirect_to edit_users_profile_path
    else
      render :edit, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:full_name, :email, :avatar)
  end
end
