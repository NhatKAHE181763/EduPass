class CreateMatchingPairs < ActiveRecord::Migration[8.1]
  def change
    create_table :matching_pairs do |t|
      t.references :question, null: false, foreign_key: true
      t.string :left_content
      t.string :right_content
      t.text :explanation
      t.integer :order_index

      t.timestamps
    end
  end
end
