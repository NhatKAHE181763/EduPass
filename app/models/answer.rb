class Answer < ApplicationRecord
  belongs_to :question

  validates :content, presence: true, if: -> { question&.multiple_choice? }
end
