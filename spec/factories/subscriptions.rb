FactoryBot.define do
  factory :subscription do
    user
    plan { :monthly }
    status { :active }
    sequence(:stripe_subscription_id) { |n| "sub_#{n}" }
    started_at { Time.current }
    expired_at { 1.month.from_now }
  end
end
