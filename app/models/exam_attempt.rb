class ExamAttempt < ApplicationRecord
  enum :status, { in_progress: 0, submitted: 1, timed_out: 2 }

  belongs_to :user
  belongs_to :exam
  has_many :user_answers, dependent: :destroy
  has_many :question_bookmarks, dependent: :destroy
  has_many :notes, dependent: :destroy

  def self.ransackable_attributes(auth_object = nil)
    [ "actual_duration_seconds", "correct_count", "created_at", "exam_id", "id", "score", "started_at", "status", "submitted_at", "total_questions", "updated_at", "user_id" ]
  end

  def self.ransackable_associations(auth_object = nil)
    [ "exam", "user" ]
  end
end
