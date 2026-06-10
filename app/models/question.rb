class Question < ApplicationRecord
  belongs_to :section
  has_many :answers, dependent: :destroy

  accepts_nested_attributes_for :answers, allow_destroy: true

  enum :question_type, { multiple_choice: 0, fill_blank: 1, matching: 2 }

  has_rich_text :content
  has_rich_text :explanation

  has_many :answers, dependent: :destroy
  has_many :matching_pairs, dependent: :destroy

  accepts_nested_attributes_for :answers, allow_destroy: true
  accepts_nested_attributes_for :matching_pairs, allow_destroy: true

  validates :question_type, presence: true
  validates :content, presence: true
  validate :validate_multiple_choice_answers, if: :multiple_choice?
  validate :validate_fill_blank_answers, if: :fill_blank?
  validate :validate_matching_pairs, if: :matching?

  default_scope { order(order_index: :asc) }

  private

  def validate_multiple_choice_answers
    active_answers = answers.reject(&:marked_for_destruction?)
    correct_answers = active_answers.select(&:is_correct?)

    if active_answers.empty?
      errors.add(:base, "Trắc nghiệm: Vui lòng nhập ít nhất một đáp án.")
    end

    if correct_answers.empty?
      errors.add(:base, "Trắc nghiệm: Vui lòng đánh dấu check (✓) ít nhất MỘT đáp án đúng.")
    elsif correct_answers.size > 1 && !allow_multiple
      errors.add(:base, "Trắc nghiệm: Bạn đã chọn #{correct_answers.size} đáp án đúng, nhưng chưa check vào ô 'Cho phép chọn nhiều đáp án đúng'.")
    end
  end

  def validate_fill_blank_answers
    if answers.reject(&:marked_for_destruction?).empty?
      errors.add(:base, "Điền từ: Vui lòng cung cấp ít nhất một đáp án chấp nhận được.")
    end
  end

  def validate_matching_pairs
    if matching_pairs.reject(&:marked_for_destruction?).empty?
      errors.add(:base, "Ghép đôi: Vui lòng cung cấp ít nhất một cặp ghép đôi.")
    end
  end
end
