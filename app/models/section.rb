class Section < ApplicationRecord
  belongs_to :exam
  has_many :questions, dependent: :destroy

  enum :section_type, { reading: 0, listening: 1 }

  has_rich_text :passage
  has_one_attached :audio_file

  validates :title, presence: true
  validates :passage, presence: true, if: -> { reading? }

  default_scope { order(order_index: :asc) }
end
