class ExamPlan < ApplicationRecord
  belongs_to :user
  enum :exam_type, { ielts_academic: 0, toeic: 1 }

  validates :plan_name, presence: true
  validates :exam_type, presence: true
  validates :target_score, numericality: { greater_than_or_equal_to: 0, less_than: 1000, allow_nil: true }

  scope :active, -> { where(is_active: true) }
end
