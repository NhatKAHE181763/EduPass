class SubscriptionsController < ApplicationController
  before_action :authenticate_user!

  def index
    authorize :subscription
  end

  def create
    authorize :subscription

    price_id = case params[:plan]
    when "monthly" then ENV["STRIPE_PRICE_MONTHLY"]
    when "quarterly" then ENV["STRIPE_PRICE_QUARTERLY"]
    when "yearly"  then ENV["STRIPE_PRICE_YEARLY"]
    else nil
    end

    if price_id.blank?
      redirect_to subscriptions_path, alert: "Gói cước không hợp lệ hoặc chưa được cấu hình."
      return
    end

    session = Stripe::Checkout::Session.create({
      payment_method_types: [ "card" ],
      line_items: [ {
        price: price_id,
        quantity: 1
      } ],
      mode: "subscription",
      success_url: success_subscriptions_url + "?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: cancel_subscriptions_url,
      metadata: {
        user_id: current_user.id,
        plan: params[:plan]
      }
    })

    redirect_to session.url, allow_other_host: true, status: :see_other
  end

  def success
    authorize :subscription
  end

  def cancel
    authorize :subscription
  end
end
