class Course < ApplicationRecord
  enum :course_type, { ielts: 0, toeic: 1, toefl: 2, sat: 3, tesol: 4, pte: 5, aptis: 6, cefr: 7, vstep: 8, cambridge: 9 }
  enum :level, { beginner: 0, intermediate: 1, advanced: 2 }

  belongs_to :created_by, class_name: "User"
  has_many :exams, dependent: :destroy
  has_one_attached :thumbnail

  validates :title, presence: true
  validates :slug, presence: true, uniqueness: true
  validates :course_type, presence: true
  validates :level, presence: true

  before_validation :generate_slug, on: :create

  def self.ransackable_attributes(auth_object = nil)
    [ "course_type", "created_at", "created_by_id", "id", "is_premium", "level", "slug", "title", "updated_at" ]
  end

  def self.ransackable_associations(auth_object = nil)
    [ "created_by", "exams" ]
  end

  def to_param
    slug
  end

  private

  def generate_slug
    self.slug = title.to_s.parameterize if slug.blank?
  end
end
