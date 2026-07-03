class EnrollmentService
  def initialize(session)
    @session = session
  end

  def call
    user_id = @session.metadata.user_id
    plan = @session.metadata.plan
    user = User.find_by(id: user_id)

    return unless user

    subscription = Subscription.create!(
      user: user,
      plan: plan,
      status: :active,
      stripe_subscription_id: @session.subscription,
      started_at: Time.current,
      expired_at: case plan
                  when "monthly" then 1.month.from_now
                  when "quarterly" then 3.months.from_now
                  when "yearly" then 1.year.from_now
                  end
    )

    Order.create!(
      user: user,
      amount: @session.amount_total,
      currency: @session.currency,
      payment_method: "Stripe checkout",
      payment_status: @session.payment_status,
      transaction_id: @session.payment_intent || @session.id
    )

    SubscriptionMailer.with(user: user, subscription: subscription)
                      .confirmation_email.deliver_later
  end
end
