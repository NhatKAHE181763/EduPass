class CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_comment, only: [ :destroy, :pin, :like, :dislike ]


  def create
    @comment = current_user.comments.build(comment_params)
    authorize @comment

    if @comment.save
      redirect_back fallback_location: root_path, notice: "Bình luận đã được đăng"
    else
      redirect_back fallback_location: root_path, alert: "Có lỗi xảy ra: #{@comment.errors.full_messages.join(', ')}"
    end
  end

  def destroy
    authorize @comment
    @comment.soft_delete!
    redirect_back fallback_location: root_path, notice: "Đã xóa bình luận"
  end

  def pin
    authorize @comment
    @comment.toggle_pin!(current_user)
    msg = @comment.is_pinned ? "Đã ghim bình luận lên đầu." : "Đã bỏ ghim bình luận."

    redirect_back fallback_location: root_path, notice: msg
  end

  def like
    authorize @comment
    @comment.comment_likes.create(user: current_user)

    respond_to do |format|
      format.turbo_stream { render "toggle_like" }
    end
  end

  def dislike
    authorize @comment
    like = @comment.comment_likes.find_by(user_id: current_user.id)
    like&.destroy

    respond_to do |format|
      format.turbo_stream { render "toggle_like" }
    end
  end
  private

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:body, :commentable_type, :commentable_id, :parent_id)
  end
end
