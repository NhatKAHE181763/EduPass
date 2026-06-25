class RemoveContentAndExplanationFromQuestions < ActiveRecord::Migration[8.1]
  def change
    remove_column :questions, :content, :text
    remove_column :questions, :explanation, :text
  end
end
