require 'rails_helper'

RSpec.describe User, type: :model do
  # Khởi tạo một bản ghi mẫu (chưa lưu vào DB) bằng FactoryBot
  # subject là đối tượng mặc định mà các dòng "it { should ... }" sẽ nhắm tới
  subject { build(:user) }

  describe "1. Validations" do
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email).case_insensitive }
  end

  describe "2. Enums" do
    it { should define_enum_for(:role).with_values(admin: 0, student: 1, teacher: 2) }
  end

  describe "3. Associations" do
    it { should have_many(:exam_plans).dependent(:destroy) }
    it { should have_many(:study_activities).dependent(:destroy) }
    it { should have_many(:exam_attempts).dependent(:destroy) }
    it { should have_many(:comments).dependent(:destroy) }
    it { should have_many(:subscriptions).dependent(:destroy) }
    it { should have_many(:orders).dependent(:destroy) }
    it do
      should have_many(:created_courses).class_name('Course')
        .with_foreign_key('created_by_id')
        .dependent(:nullify)
    end

    it 'has one attached avatar' do
      expect(subject.avatar).to be_an_instance_of(ActiveStorage::Attached::One)
    end
  end

  describe "4. Soft Delete (Discard)" do
    it "has discard_column configured as :deleted_at" do
      expect(User.discard_column).to eq(:deleted_at)
    end
    it "can be soft deleted" do
      user = create(:user) # Lưu thực sự vào Test DB
      expect(user.discarded?).to be_falsey

      user.discard
      expect(user.reload.discarded?).to be_truthy
      expect(user.deleted_at).not_to be_nil
    end
  end
  describe "5. Devise JWT & JTI" do
    it "generates a new JTI upon creation" do
      user = create(:user)
      expect(user.jti).to be_present
    end
  end
  describe "6. Custom Devise Methods (Banning Logic)" do
    let(:user) { create(:user) }
    it "allows active users to authenticate" do
      expect(user.active_for_authentication?).to be_truthy
    end
    it "prevents discarded (banned) users from authenticating" do
      user.discard

      expect(user.active_for_authentication?).to be_falsey
      expect(user.inactive_message).to eq(:deleted_account)
    end
  end
end
