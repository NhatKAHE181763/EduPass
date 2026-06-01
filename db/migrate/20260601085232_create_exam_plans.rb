class CreateExamPlans < ActiveRecord::Migration[8.1]
  def change
    create_table :exam_plans do |t|
      t.references :user, null: false, foreign_key: true
      t.string :plan_name
      t.integer :exam_type
      t.decimal :target_score, precision: 4, scale: 1
      t.date :exam_date
      t.text :notes
      t.boolean :is_active, default: true, null: false

      t.timestamps
    end
  end
end
