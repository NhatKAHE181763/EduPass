class Admin::SectionsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_exam
  before_action :set_section, only: %i[edit update destroy]

  def new
    @section = @exam.sections.build(section_type: :reading)
  end

  def create
    @section = @exam.sections.build(section_params)

    @section.order_index = (@exam.sections.maximum(:order_index) || 0) + 1

    if @section.save
      redirect_to edit_admin_exam_path(@exam), notice: "Section created successfully"
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @section.update(section_params)
      redirect_to edit_admin_exam_path(@exam), notice: "Section updated successfully"
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @section.destroy
    redirect_to edit_admin_exam_path(@exam), notice: "Section deleted successfully"
  end

  def reorder
    if params[:section_ids].present?
      params[:section_ids].each_with_index do |id, index|
        # @exam.sections.where(id: id).update_all(order_index: index + 1)
        @exam.sections.find(id).update!(order_index: index + 1)
      end
    end

    head :ok
  end

  private

  def set_exam
    @exam = Exam.find_by!(slug: params[:exam_id])
    authorize [ :admin, @exam ], :edit?
  end

  def set_section
    @section = @exam.sections.find(params[:id])
  end

  def section_params
    params.require(:section).permit(:title, :instruction, :passage, :audio_file, :section_type)
  end
end
