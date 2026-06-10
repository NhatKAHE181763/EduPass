class CreateNotes < ActiveRecord::Migration[8.1]
  def change
    create_table :notes do |t|
      t.references :exam_attempt, null: false, foreign_key: true
      t.references :section, null: false, foreign_key: true
      t.integer :start_offset
      t.integer :end_offset
      t.string :selected_text
      t.text :content
      t.string :color

      t.timestamps
    end
  end
end
