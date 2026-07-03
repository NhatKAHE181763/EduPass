class CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_comment, only: [ :destroy, :pin, :like, :dislike ]

  def create
    @comment = current_user.comments.build(comment_params)
    authorize @comment

    if @comment.save
      respond_to do |format|
        format.turbo_stream
      end
    else
      redirect_back fallback_location: root_path, alert: "Có lỗi xảy ra: #{@comment.errors.full_messages.join(', ')}"
    end
  end

  def destroy
    @comment.soft_delete!
    respond_to do |format|
      format.turbo_stream
    end
  end

  def pin
    @comment.toggle_pin!(current_user)
    msg = @comment.is_pinned ? "Đã ghim bình luận lên đầu." : "Đã bỏ ghim bình luận."

    redirect_back fallback_location: root_path, notice: msg
  end

  def like
    @comment.comment_likes.create(user: current_user)

    respond_to do |format|
      format.turbo_stream { render "toggle_like" }
    end
  end

  def dislike
    like = @comment.comment_likes.find_by(user_id: current_user.id)
    like&.destroy

    respond_to do |format|
      format.turbo_stream { render "toggle_like" }
    end
  end
  private

  def set_comment
    @comment = Comment.find(params[:id])

    authorize @comment
  end

  def comment_params
    params.require(:comment).permit(:body, :commentable_type, :commentable_id, :parent_id)
  end
end
