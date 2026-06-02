class StudyActivity < ApplicationRecord
  belongs_to :user

  validates :activity_date, presence: true, uniqueness: {scope: :user_id} 
  validates :exam_attempts_count, :total_duration_seconds, presence: true, 
            numericality: { greater_than_or_equal_to: 0 }
  
end
