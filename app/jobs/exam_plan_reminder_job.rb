class ExamPlanReminderJob < ApplicationJob
  queue_as :default

  def perform
    target_dates = [ Date.tomorrow, 7.days.from_now.to_date, 30.days.from_now.to_date ]

    plans = ExamPlan.where(exam_date: target_dates)

    plans.each do |plan|
      days_left = (plan.exam_date - Date.today).to_i
      ExamPlanMailer.with(user: plan.user, plan: plan, days_left: days_left)
      .reminder_email.deliver_later
    end
  end
end
