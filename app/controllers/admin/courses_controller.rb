class Admin::CoursesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_course, only: %i[ show edit update destroy ]

  def index
    @courses = Course.all
    authorize [ :admin, Course ]
  end

  def show
  end

  def new
    @course = current_user.created_courses.build
    authorize [ :admin, @course ]
  end

  def create
    @course = current_user.created_courses.build(course_params)
    authorize [ :admin, @course ]

    if @course.save
      redirect_to admin_course_path(@course), notice: "Course was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @course.update(course_params)
      redirect_to admin_course_path(@course), notice: "Course was successfully updated."
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @course.destroy
    redirect_to admin_courses_path, notice: "Course was successfully deleted."
  end

  private

  def course_params
    params.require(:course).permit(
      :title,
      :description,
      :slug,
      :course_type,
      :level,
      :is_premium,
      :thumbnail
    )
  end

  def set_course
    @course = Course.find_by!(slug: params[:id])
    authorize [ :admin, @course ]
  end
end
