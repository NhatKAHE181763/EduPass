class CoursesController < ApplicationController
  def index
    authorize Course
    @q = policy_scope(Course).ransack(params[:q])
    @courses = @q.result.order(created_at: :desc).page(params[:page]).per(9)
  end

  def show
    @course = Course.find_by!(slug: params[:id])
    authorize @course

    @exams = @course.exams.published.order(:title)
  end
end
