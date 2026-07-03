class CreateOrders < ActiveRecord::Migration[8.1]
  def change
    create_table :orders do |t|
      t.references :user, null: false, foreign_key: true
      t.decimal :amount
      t.string :currency
      t.string :payment_method
      t.string :payment_status
      t.string :transaction_id

      t.timestamps
    end
  end
end
