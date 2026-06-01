class ExamPlan < ApplicationRecord
  belongs_to :user
  enum :exam_type, { ielts_academic: 0, toeic: 1 }

  validates :plan_name, presence: true
  validates :exam_type, presence: true

  scope :active, -> { where(is_active: true) }
end
