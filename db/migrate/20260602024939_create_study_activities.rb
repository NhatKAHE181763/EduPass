class CreateStudyActivities < ActiveRecord::Migration[8.1]
  def change
    create_table :study_activities do |t|
      t.references :user, null: false, foreign_key: true
      t.date :activity_date, null: false
      t.integer :exam_attempts_count, default: 0, null: false
      t.integer :total_duration_seconds, default: 0, null: false

      t.timestamps
    end

    add_index :study_activities, [ :user_id, :activity_date ], unique: true
  end
end
