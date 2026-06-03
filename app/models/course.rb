class Course < ApplicationRecord
  enum :course_type, { ielts: 0, toeic: 1 }
  enum :level, { beginner: 0, intermediate: 1, advanced: 2 }

  belongs_to :created_by, class_name: "User"
  has_many :exams, dependent: :destroy

  def self.ransackable_attributes(auth_object = nil)
    [ "course_type", "created_at", "created_by_id", "id", "is_premium", "level", "slug", "title", "updated_at" ]
  end

  def self.ransackable_associations(auth_object = nil)
    [ "created_by", "exams" ]
  end
end
