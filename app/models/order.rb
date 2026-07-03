class Order < ApplicationRecord
  belongs_to :user

  validates :amount, presence: true
  validates :transaction_id, presence: true, uniqueness: true, allow_nil: true

  def self.ransackable_attributes(auth_object = nil)
    %w[payment_status created_at amount]
  end

  def self.ransackable_associations(auth_object = nil)
    %w[user]
  end
end
