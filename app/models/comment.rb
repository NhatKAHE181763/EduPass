class Comment < ApplicationRecord
  default_scope { order(is_pinned: :desc, created_at: :desc) }

  belongs_to :user
  belongs_to :commentable, polymorphic: true

  belongs_to :parent, class_name: "Comment", optional: true
  belongs_to :pinned_by, class_name: "User", optional: true

  has_many :replies, class_name: "Comment", foreign_key: "parent_id", dependent: :destroy

  has_many :likers, through: :comment_likes, source: :user
  has_many :comment_likes, dependent: :destroy

  validates :body, presence: true

  def soft_delete!
    update!(is_deleted: true)
  end

  def toggle_pin!(user)
    if is_pinned
      update!(is_pinned: false, pinned_by_id: nil, pinned_at: nil)
    else
      update!(is_pinned: true, pinned_by_id: user.id, pinned_at: Time.current)
    end
  end

  scope :root_comments, -> { where(parent_id: nil) }
end
