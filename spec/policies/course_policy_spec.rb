require 'rails_helper'

RSpec.describe CoursePolicy, type: :policy do
  subject { described_class }

  let(:admin) { create(:user, :admin) }
  let(:teacher) { create(:user, :teacher) }
  let(:other_teacher) { create(:user, :teacher) }
  let(:student) { create(:user, :student) }
  let(:guest) { nil }

  let(:course) { create(:course, created_by: teacher) }

  permissions :index?, :show? do
    it "cho phép tất cả mọi người (kể cả khách chưa đăng nhập)" do
      expect(subject).to permit(admin, course)
      expect(subject).to permit(teacher, course)
      expect(subject).to permit(student, course)
      expect(subject).to permit(guest, course)
    end
  end

  permissions :create? do
    it "cho phép Admin và Teacher" do
      expect(subject).to permit(admin, Course.new)
      expect(subject).to permit(teacher, Course.new)
    end

    it "từ chối Student và Guest" do
      expect(subject).not_to permit(student, Course.new)
      expect(subject).not_to permit(guest, Course.new)
    end
  end

  permissions :update?, :destroy? do
    it "cho phép Admin" do
      expect(subject).to permit(admin, course)
    end

    it "cho phép Teacher là người tạo ra khóa học" do
      expect(subject).to permit(teacher, course)
    end

    it "từ chối Teacher khác" do
      expect(subject).not_to permit(other_teacher, course)
    end

    it "từ chối Student và Guest" do
      expect(subject).not_to permit(student, course)
      expect(subject).not_to permit(guest, course)
    end
  end

  describe "Scope" do
    let!(:course1) { create(:course) }
    let!(:course2) { create(:course) }

    it "trả về toàn bộ khóa học cho tất cả user (hiện tại)" do
      expect(Pundit.policy_scope(admin, Course).to_a).to match_array([ course1, course2 ])
      expect(Pundit.policy_scope(student, Course).to_a).to match_array([ course1, course2 ])
      expect(Pundit.policy_scope(guest, Course).to_a).to match_array([ course1, course2 ])
    end
  end
end
