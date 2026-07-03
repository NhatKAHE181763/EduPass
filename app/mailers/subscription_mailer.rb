class SubscriptionMailer < ApplicationMailer
  def confirmation_email
    @user = params[:user]
    @subscription = params[:subscription]

    mail(
      to: @user.email,
      subject: "🎉 Chúc mừng bạn đã nâng cấp EduPass Premium thành công!"
    )
  end
end
