class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
  include Discard::Model
  self.discard_column = :deleted_at

  enum :role, admin: 0, student: 1, teacher: 2

  # enum status: { draft: 0, published: 1 } # Thêm vào model Exam

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
      :confirmable, :omniauthable, :jwt_authenticatable,
      omniauth_providers: [ :google_oauth2 ], jwt_revocation_strategy: self

  has_one_attached :avatar
  has_many :exam_plans, dependent: :destroy
  has_many :study_activities, dependent: :destroy
  has_many :exam_attempts, dependent: :destroy

  # Hàm xử lý logic khi nhận data từ Google trả về
  def self.from_omniauth(auth)
    # Tìm user theo provider và uid, nếu chưa có thì tạo mới
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      # Tạo mật khẩu ngẫu nhiên cho user đăng nhập bằng Google
      user.password = Devise.friendly_token[0, 20]
      user.full_name = auth.info.name   # Lưu tên từ Google
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

  def active_streak
    # descending
    activities = study_activities.has_content.recent.pluck(:activity_date).uniq
    0 if activities.empty?
    streak = 0
    current_date = Date.current

    if activities.first == current_date
      streak = 1
      start_idx = 1
      check_date = current_date - 1.day
    elsif activities.first == current_date - 1.day
      streak = 1
      start_idx = 1
      check_date = current_date - 2.days
    else
      0
    end

    activities[start_idx..-1].each do |date|
      if date == check_date
        streak += 1
        check_date -= 1.day
      else
        break
      end
    end
    streak
  end
end
