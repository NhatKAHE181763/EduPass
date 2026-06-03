class Exam < ApplicationRecord
  enum :status, draft: 0, published: 1

  belongs_to :course
  belongs_to :created_by, class_name: "User"
  has_many :exam_attempts, dependent: :destroy

  def self.ransackable_attributes(auth_object = nil)
    [ "course_id", "created_at", "created_by_id", "duration_minutes", "id", "slug", "status", "title", "updated_at" ]
  end

  def self.ransackable_associations(auth_object = nil)
    [ "course", "created_by", "exam_attempts" ]
  end
end
