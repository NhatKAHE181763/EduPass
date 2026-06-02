class Students::DashboardController < ApplicationController
    before_action :authenticate_user!

    def show
        authorize :dashboard

        @total_exam_attempts = current_user.total_exam_attempts
        @total_study_hours = current_user.total_study_hours
        @active_streak = current_user.active_streak

        @exam_plans = current_user.exam_plans.order(created_at: :desc)
    end
end
