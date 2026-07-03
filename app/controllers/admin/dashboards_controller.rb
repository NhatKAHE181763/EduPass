class Admin::DashboardsController < AdminController
  before_action :authenticate_user!

  def index
    @total_users = User.count
    @new_users_this_week = User.where("created_at >= ?", 1.week.ago.beginning_of_week).count

    @total_courses = Course.count
    @total_exams = Exam.count

    @attempts_today = ExamAttempt.where("created_at >= ?", Time.current.beginning_of_day).count
    @revenue_this_month = Order.where(payment_status: :paid, created_at: Time.current.beginning_of_month..Time.current.end_of_month).sum(:amount)
  end
end
