class Student::DashboardController < ApplicationController
    before_action :authenticate_user!

    def show
        authorize :dashboard

        @exam_plans = current_user.exam_plans.order(created_at: :desc)

        # countdown
        @upcoming_exam = current_user.exam_plans.active.order(exam_date: :asc).first

        @q = current_user.exam_attempts.includes(exam: :course).order(submitted_at: :desc).ransack(params[:q])
        @exam_attempts = @q.result.page(params[:page]).per(5)
    end
end
