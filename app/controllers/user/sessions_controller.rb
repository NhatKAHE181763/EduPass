# frozen_string_literal: true

class User::SessionsController < Devise::SessionsController
  respond_to :html
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  def new
    super
  end

  # POST /resource/sign_in
  def create
    super do |resource|
      token = request.env["warden-jwt_auth.token"]
      if token.present?
        cookies.signed[:jwt] = {
          value: token,
          httponly: true,
          secure: Rails.env.production?
        }
      end
    end
  end

  # DELETE /resource/sign_out
  def destroy
    cookies.delete(:jwt)
    super
  end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
