class Admin::CommentsController < AdminController
  before_action :authenticate_user!
  before_action :set_comment, only: [ :destroy, :toggle_pin ]

  def index
    @q = Comment.includes(:user, :commentable)
                .where(is_deleted: false)
                .order(created_at: :desc)
                .ransack(params[:q])

    @comments = @q.result.page(params[:page]).per(20)
  end

  def destroy
    @comment.soft_delete!
    respond_to do |format|
      format.turbo_stream
    end
  end

  def toggle_pin
    @comment.toggle_pin!(current_user)

    respond_to do |format|
      format.turbo_stream
    end
  end


  private

  def set_comment
    @comment = Comment.find(params[:id])
  end
end
