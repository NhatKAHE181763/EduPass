class CreateExamAttempts < ActiveRecord::Migration[8.1]
  def change
    create_table :exam_attempts do |t|
      t.references :user, null: false, foreign_key: true
      t.references :exam, null: false, foreign_key: true
      t.integer :status
      t.decimal :score, precision: 5, scale: 2
      t.integer :total_questions
      t.integer :correct_count
      t.datetime :started_at
      t.datetime :submitted_at
      t.integer :actual_duration_seconds

      t.timestamps
    end
  end
end
