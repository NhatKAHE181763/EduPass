class Admin::QuestionsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_exam_and_section
  before_action :set_question, only: %i[edit update destroy]

  def new
    q_type = params[:type] || :multiple_choice

    @question = QuestionBuilder.build(@section, q_type)
  end

  def create
    @question = @section.questions.build(question_params)

    @question.order_index = (@section.questions.maximum(:order_index) || 0) + 1

    if @question.save
      redirect_to admin_exam_section_path(@exam, @section), notice: "Question created successfully"
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @question.update(question_params)
      redirect_to admin_exam_section_path(@exam, @section), notice: "Question updated successfully"
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @question.destroy
    redirect_to admin_exam_section_path(@exam, @section), notice: "Question deleted successfully"
  end

  def reorder
    if params[:item_ids].present?
      items = params[:item_ids].map.with_index do |id, index|
        { id: id.to_i, order_index: index + 1 }
      end
      @section.questions.upsert_all(items, update_only: [ :order_index ])
    end

    head :ok
  end

  private

  def set_exam_and_section
    @exam = Exam.find_by!(slug: params[:exam_id])
    @section = @exam.sections.find(params[:section_id])

    authorize [ :admin, @exam ], :edit?
  end

  def set_question
    @question = @section.questions.find(params[:id])
  end

  def question_params
    params.require(:question).permit(:question_type, :content, :explanation, :allow_multiple,
    answers_attributes: [ :id, :content, :is_correct, :explanation, :_destroy ],
    matching_pairs_attributes: [ :id, :left_content, :right_content, :explanation, :order_index, :_destroy ])
  end
end
