class ChangeAnswerIdNullOnUserAnswers < ActiveRecord::Migration[8.1]
  def change
    change_column_null :user_answers, :answer_id, true
  end
end
