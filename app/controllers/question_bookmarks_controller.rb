class QuestionBookmarksController < ApplicationController
  before_action :authenticate_user!

  def toggle
    @attempt = current_user.exam_attempts.find(params[:exam_attempt_id])
    authorize @attempt, :update?
    @question = Question.find(params[:question_id])

    bookmark = @attempt.question_bookmarks.find_by(question: @question)

    if bookmark
      bookmark.destroy
      @is_bookmarked = false
    else
      @attempt.question_bookmarks.create!(question: @question)
      @is_bookmarked = true
    end

    respond_to do |format|
      format.turbo_stream
    end
  end
end
