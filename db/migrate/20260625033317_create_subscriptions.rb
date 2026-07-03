class CreateSubscriptions < ActiveRecord::Migration[8.1]
  def change
    create_table :subscriptions do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :plan
      t.integer :status
      t.string :stripe_subscription_id
      t.datetime :started_at
      t.datetime :expired_at

      t.timestamps
    end
  end
end
