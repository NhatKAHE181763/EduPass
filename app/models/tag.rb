class Tag < ApplicationRecord
  enum :category, { skill: 0, part: 1, question_type: 2, topic: 3, level: 4, exam_type: 5 }

  validates :name, presence: true
  validates :slug, presence: true, uniqueness: true
  has_many :taggings, dependent: :destroy

  before_validation :generate_slug, on: :create

  def to_param
    slug
  end

  private

  def generate_slug
    self.slug = name.to_s.parameterize if slug.blank?
  end
end
