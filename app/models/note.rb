class Note < ApplicationRecord
  belongs_to :exam_attempt
  belongs_to :section
end
