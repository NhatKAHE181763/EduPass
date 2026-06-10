class UserAnswer < ApplicationRecord
  belongs_to :exam_attempt
  belongs_to :question
  belongs_to :answer
end
