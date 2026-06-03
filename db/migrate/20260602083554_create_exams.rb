class CreateExams < ActiveRecord::Migration[8.1]
  def change
    create_table :exams do |t|
      t.string :title
      t.string :slug
      t.references :course, null: false, foreign_key: true
      t.integer :status
      t.integer :duration_minutes
      t.references :created_by, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
    add_index :exams, :slug, unique: true
  end
end
