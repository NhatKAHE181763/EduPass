class User::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  # Bỏ qua kiểm tra CSRF token thủ công vì request này trả về từ Server của Google
  skip_before_action :verify_authenticity_token, only: :google_oauth2

  def google_oauth2
    @user = User.from_omniauth(request.env["omniauth.auth"])

    if @user.persisted?
      # Sinh JWT
      if (token = Warden::JWTAuth::UserEncoder.new.call(@user, :user, nil).first)
        cookies.signed[:jwt] = {
          value: token,
          httponly: true,
          secure: Rails.env.production?
        }
      end

      sign_in_and_redirect @user, event: :authentication
      set_flash_message(:notice, :success, kind: "Google") if is_navigational_format?
    else
      session["devise.google_data"] = request.env["omniauth.auth"].except(:extra)
      redirect_to new_user_registration_url, alert: @user.errors.full_messages.join("\n")
    end
  end

  def failure
    redirect_to root_path
  end
end
