class QuestionBookmark < ApplicationRecord
  belongs_to :exam_attempt
  belongs_to :question
end
