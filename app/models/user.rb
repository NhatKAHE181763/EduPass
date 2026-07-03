class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
  include Discard::Model
  self.discard_column = :deleted_at

  enum :role, admin: 0, student: 1, teacher: 2

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
      :confirmable, :omniauthable, :jwt_authenticatable,
      omniauth_providers: [ :google_oauth2 ], jwt_revocation_strategy: self

  has_one_attached :avatar
  has_many :exam_plans, dependent: :destroy
  has_many :study_activities, dependent: :destroy
  has_many :exam_attempts, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :created_courses, class_name: "Course", foreign_key: "created_by_id", dependent: :nullify
  has_many :subscriptions, dependent: :destroy
  has_many :orders, dependent: :destroy
  # Hàm xử lý logic khi nhận data từ Google trả về
  def self.from_omniauth(auth)
    # Tìm user theo provider và uid, nếu chưa có thì tạo mới
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      # Tạo mật khẩu ngẫu nhiên
      user.password = Devise.friendly_token[0, 20]
      user.full_name = auth.info.name
      user.skip_confirmation!           # Tự động xác thực email (vì đã tin tưởng Google)
    end
  end

  def active_for_authentication?
    super && !discarded?
  end

  def inactive_message
    discarded? ? :deleted_account : super
  end

  def total_study_hours
    (study_activities.sum(:total_duration_seconds) / 3600.0).round(1)
  end

  def total_exam_attempts
    study_activities.sum(:exam_attempts_count)
  end

  def has_active_subscription?
    return true if admin? || teacher?

    subscriptions.where(status: :active)
    .where("expired_at > ?", Time.current)
    .exists?
  end

  def self.ransackable_attributes(auth_object = nil)
    %w[email full_name role status]
  end

  def self.ransackable_associations(auth_object = nil)
    %w[avatar comments created_courses exam_attempts exam_plans orders subscriptions study_activities]
  end
end
