# Preview all emails at http://localhost:3000/rails/mailers/exam_plan_mailer
class ExamPlanMailerPreview < ActionMailer::Preview
  # Preview this email at http://localhost:3000/rails/mailers/exam_plan_mailer/reminder_email
  def reminder_email
    ExamPlanMailer.reminder_email
  end
end
