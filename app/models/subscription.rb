class Subscription < ApplicationRecord
  belongs_to :user

  enum :plan, { monthly: 0, quarterly: 1, yearly: 2 }
  enum :status, { pending: 0, active: 1, canceled: 2, expired: 3 }

  validates :stripe_subscription_id, presence: true, uniqueness: true, allow_nil: true

  def self.ransackable_attributes(auth_object = nil)
    %w[plan status started_at expired_at]
  end

  def self.ransackable_associations(auth_object = nil)
    %w[user]
  end
end
