class ExamPlanMailer < ApplicationMailer
  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.exam_plan_mailer.reminder_email.subject
  #
  def reminder_email
    @user = params[:user]
    @plan = params[:plan]
    @days_left = params[:days_left]

    mail to: @user.email, subject: "⏰ Nhắc nhở: Chỉ còn #{@days_left} ngày nữa là đến kỳ thi #{@plan.plan_name}!"
  end
end
