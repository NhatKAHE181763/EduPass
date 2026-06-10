class CoursesController < ApplicationController
  def index
    authorize Course
    @q = policy_scope(Course).ransack(params[:q])
    @courses = @q.result.order(created_at: :asc).page(params[:page]).per(6)
  end

  def show
    @course = Course.find_by!(slug: params[:id])
    authorize @course
    @skills = Tag.skill
    @parts = Tag.part
    @question_types = Tag.question_type
    base_exams = @course.exams.published

    @q = base_exams.ransack(params[:q])

    @exams = @q.result.includes(:tags).order(created_at: :asc)

    @exams = @exams.page(params[:page]).per(params[:per_page] || 5)
  end
end
