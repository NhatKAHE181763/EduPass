class Students::DashboardController < ApplicationController
    before_action :authenticate_user!

    def show
        authorize :dashboard

        @total_exam_attempts = current_user.total_exam_attempts
        @total_study_hours = current_user.total_study_hours
        @active_streak = current_user.active_streak

        @exam_plans = current_user.exam_plans.order(created_at: :desc)

        # countdown
        @upcoming_exam = current_user.exam_plans.active.order(exam_date: :asc).first

        @q = current_user.exam_attempts.includes(exam: :course).order(submitted_at: :desc).ransack(params[:q])
        @exam_attempts = @q.result.page(params[:page]).per(5)
    end

    def weekly_activity
        authorize :dashboard
        if params[:year].present?
            start_date = Date.new(params[:year].to_i, 1, 1)
            end_date = start_date.end_of_year
            activities = current_user.study_activities.where(activity_date: start_date..end_date)
        else
            activities = current_user.study_activities.where("activity_date >= ?", 1.year.ago.to_date)
        end

        data = activities.map do |a|
            {
                date: a.activity_date.strftime("%Y-%m-%d"),
                value: a.exam_attempts_count
            }
        end
        render json: data
    end
end
