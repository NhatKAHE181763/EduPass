class Exam < ApplicationRecord
  enum :status, draft: 0, published: 1

  belongs_to :course
  belongs_to :created_by, class_name: "User"
  has_many :exam_attempts, dependent: :destroy
  has_many :taggings, as: :taggable, dependent: :destroy
  has_many :tags, through: :taggings
  has_many :sections, dependent: :destroy

  validates :title, presence: true
  validates :slug, presence: true, uniqueness: true
  validates :course_id, presence: true
  validates :duration_minutes, presence: true, numericality: { greater_than: 0 }


  def self.ransackable_attributes(auth_object = nil)
    [ "course_id", "created_at", "created_by_id", "duration_minutes", "id", "slug", "status", "title", "updated_at" ]
  end

  def self.ransackable_associations(auth_object = nil)
    [ "course", "created_by", "exam_attempts" ]
  end

  before_validation :generate_slug, on: :create
  scope :published, -> { where(status: :published) }

  def to_param
    slug
  end

  private

  def generate_slug
    self.slug = title.to_s.parameterize if slug.blank?
  end
end
