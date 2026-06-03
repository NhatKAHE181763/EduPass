class CreateCourses < ActiveRecord::Migration[8.1]
  def change
    create_table :courses do |t|
      t.string :title
      t.string :slug
      t.integer :course_type
      t.integer :level
      t.boolean :is_premium
      t.references :created_by, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
    add_index :courses, :slug, unique: true
  end
end
