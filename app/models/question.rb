class Question < ApplicationRecord
  belongs_to :section
  has_many :answers, dependent: :destroy

  accepts_nested_attributes_for :answers, allow_destroy: true

  enum :question_type, { multiple_choice: 0, fill_blank: 1, matching: 2 }

  has_rich_text :content
  has_rich_text :explanation

  has_many :answers, dependent: :destroy
  accepts_nested_attributes_for :answers, allow_destroy: true

  validates :question_type, presence: true
  validates :content, presence: true

  default_scope { order(order_index: :asc) }
end
