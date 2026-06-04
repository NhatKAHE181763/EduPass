class CreateQuestions < ActiveRecord::Migration[8.1]
  def change
    create_table :questions do |t|
      t.references :section, null: false, foreign_key: true
      t.integer :question_type
      t.text :content
      t.text :explanation
      t.boolean :allow_multiple, default: false
      t.integer :order_index

      t.timestamps
    end
  end
end
