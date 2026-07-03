class Admin::OrdersController < AdminController
  def index
    @q = Order.includes(:user).order(created_at: :desc).ransack(params[:q])
    @orders = @q.result.page(params[:page]).per(10)

    @active_subscriptions = Subscription.includes(:user).where(status: :active)
      .where("expired_at >= ?", Time.current)
      .order(created_at: :desc)
      .page(params[:sub_page])
      .per(5)

    @revenue_by_month = Order.where(payment_status: :paid)
      .group("TO_CHAR(created_at, 'YYYY-MM')").sum(:amount)
  end
end
