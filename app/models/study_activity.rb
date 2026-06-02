class StudyActivity < ApplicationRecord
  belongs_to :user

  validates :activity_date, presence: true, uniqueness: { scope: :user_id }
  validates :exam_attempts_count, :total_duration_seconds, presence: true,
            numericality: { greater_than_or_equal_to: 0 }

  scope :has_content, -> { where("exam_attempts_count > 0 OR total_duration_seconds > 0") }
  scope :recent, -> { order(activity_date: :desc) }
end
