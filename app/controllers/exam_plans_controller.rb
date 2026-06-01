class ExamPlansController < ApplicationController
  before_action :set_exam_plan, only: %i[ show edit update destroy ]
  before_action :authenticate_user!

  def index
    authorize ExamPlan
    @exam_plans = policy_scope(ExamPlan).order(exam_date: :asc)
  end

  def show
  end

  def new
    @exam_plan = current_user.exam_plans.build
    authorize @exam_plan
  end

  def edit
  end

  def create
    @exam_plan = current_user.exam_plans.build(exam_plan_params)
    authorize @exam_plan

    if @exam_plan.save
      redirect_to exam_plans_path, notice: "Exam plan was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    if @exam_plan.update(exam_plan_params)
      redirect_to exam_plans_path, notice: "Exam plan was successfully updated."
    else
      render :edit, status: :unprocessable_entity
    end
  end


  def destroy
    @exam_plan.destroy
    redirect_to exam_plans_path, notice: "Exam plan was successfully deleted."
  end

  private

  def set_exam_plan
    @exam_plan = ExamPlan.find(params[:id])
    authorize @exam_plan
  end

  def exam_plan_params
    params.require(:exam_plan).permit(:plan_name, :exam_type, :target_score, :exam_date, :notes, :is_active)
  end
end
