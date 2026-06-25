class CreateComments < ActiveRecord::Migration[8.1]
  def change
    create_table :comments do |t|
      t.references :user, null: false, foreign_key: true
      t.references :commentable, polymorphic: true, null: false
      t.integer :parent_id
      t.text :body, null: false
      t.boolean :is_pinned, default: false
      t.references :pinned_by, foreign_key: { to_table: :users }
      t.datetime :pinned_at
      t.boolean :is_deleted, default: false

      t.timestamps
    end

    add_index :comments, :parent_id
    add_index :comments, :is_pinned
  end
end
