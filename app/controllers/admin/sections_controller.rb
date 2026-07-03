class Admin::SectionsController < AdminController
  before_action :authenticate_user!
  before_action :set_exam
  before_action :set_section, only: %i[show edit update destroy]

  def new
    type = params[:section_type] || :reading
    @section = @exam.sections.build(section_type: type)
  end

  def show
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
    if params[:item_ids].present?

      items = params[:item_ids].map.with_index do |id, index|
        { id: id.to_i, order_index: index + 1 }
      end
      @exam.sections.upsert_all(items, update_only: [ :order_index ])
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
