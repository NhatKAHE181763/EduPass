class CreateSections < ActiveRecord::Migration[8.1]
  def change
    create_table :sections do |t|
      t.references :exam, null: false, foreign_key: true
      t.integer :section_type
      t.string :title
      t.string :instruction
      t.integer :order_index

      t.timestamps
    end
  end
end
