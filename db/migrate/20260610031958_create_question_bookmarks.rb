class CreateQuestionBookmarks < ActiveRecord::Migration[8.1]
  def change
    create_table :question_bookmarks do |t|
      t.references :exam_attempt, null: false, foreign_key: true
      t.references :question, null: false, foreign_key: true

      t.timestamps
    end
    add_index :question_bookmarks, [ :exam_attempt_id, :question_id ], unique: true
  end
end
