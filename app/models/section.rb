class Section < ApplicationRecord
  belongs_to :exam
  has_many :questions, dependent: :destroy

  enum :section_type, { reading: 0, listening: 1 }

  has_rich_text :passage
  has_one_attached :audio_file

  validates :title, presence: true
  validates :passage, presence: true, if: -> { reading? }
  validate :acceptable_audio_files, if: :listening?

  default_scope { order(order_index: :asc) }

  private

  def acceptable_audio_files
    unless audio_file.attached?
      errors.add(:audio_file, "Vui lòng tải lên một file âm thanh")
      return
    end

    unless audio_file.byte_size <= 20.megabytes
      errors.add(:audio_file, "Dung lượng file không được vượt quá 20MB")
    end

    acceptable_types = %w[audio/mpeg audio/wav audio/mp3 audio/x-wav]
    unless acceptable_types.include?(audio_file.content_type)
      errors.add(:audio_file, "chỉ chấp nhận file định dạng MP3 hoặc WAV.")
    end
  end
end
