class CreateUserAnswers < ActiveRecord::Migration[8.1]
  def change
    create_table :user_answers do |t|
      t.references :exam_attempt, null: false, foreign_key: true
      t.references :question, null: false, foreign_key: true
      t.references :answer, null: false, foreign_key: true
      t.string :text_answer
      t.jsonb :matched_pairs
      t.boolean :is_correct

      t.timestamps
    end
  end
end
