class NotesController < ApplicationController
  before_action :authenticate_user!

  def create
    @attempt = current_user.exam_attempts.find(params[:exam_attempt_id])
    authorize @attempt, :update?
    
    @note = @attempt.notes.build(note_params)
    
    if @note.save
      render json: { success: true, note: @note }
    else
      render json: { success: false, errors: @note.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def note_params
    params.require(:note).permit(:section_id, :start_offset, :end_offset, :selected_text, :content, :color)
  end
end
