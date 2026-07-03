require 'rails_helper'

RSpec.describe CommentPolicy, type: :policy do
  subject { described_class }

  let(:admin) { create(:user, :admin) }
  let(:student) { create(:user, :student) }
  let(:guest) { nil }

  let(:comment) { Comment.new }

  permissions :index? do
    it "cho phép tất cả mọi người" do
      expect(subject).to permit(admin, comment)
      expect(subject).to permit(student, comment)
      expect(subject).to permit(guest, comment)
    end
  end

  permissions :create?, :like?, :dislike? do
    it "cho phép User đã đăng nhập" do
      expect(subject).to permit(admin, comment)
      expect(subject).to permit(student, comment)
    end

    it "từ chối Guest" do
      expect(subject).not_to permit(guest, comment)
    end
  end

  permissions :destroy?, :pin? do
    it "cho phép Admin" do
      expect(subject).to permit(admin, comment)
    end

    it "từ chối Student và Guest" do
      expect(subject).not_to permit(student, comment)
      expect(subject).not_to permit(guest, comment)
    end
  end
end
