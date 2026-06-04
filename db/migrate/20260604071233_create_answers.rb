class CreateAnswers < ActiveRecord::Migration[8.1]
  def change
    create_table :answers do |t|
      t.references :question, null: false, foreign_key: true
      t.text :content
      t.boolean :is_correct, default: false
      t.string :match_key
      t.text :explanation

      t.timestamps
    end
  end
end
