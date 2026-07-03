class Student::OrdersController < ApplicationController
  before_action :authenticate_user!

  def index
    authorize :order
    @current_subscription = current_user.subscriptions.where(status: :active).where("expired_at > ?", Time.current)
    .order(expired_at: :desc).first

    @orders = current_user.orders.order(created_at: :desc)
  end
end
