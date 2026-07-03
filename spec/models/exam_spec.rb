require 'rails_helper'

RSpec.describe Exam, type: :model do
  subject { create(:exam) }

  describe "1. Associations" do
    it { should belong_to(:course) }
    it { should belong_to(:created_by).class_name('User') }

    it { should have_many(:exam_attempts).dependent(:destroy) }
    it { should have_many(:taggings).dependent(:destroy) }
    it { should have_many(:tags).through(:taggings) }
    it { should have_many(:sections).dependent(:destroy) }
  end

  describe "2. Enums" do
    it { should define_enum_for(:status).with_values(draft: 0, published: 1) }
  end

  describe "3. Validations" do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:course_id) }
    it { should validate_uniqueness_of(:slug) }

    it { should validate_numericality_of(:duration_minutes).is_greater_than(0) }
  end

  describe "4. Scopes" do
    let!(:published_exam) { create(:exam, status: :published) }
    let!(:draft_exam) { create(:exam, status: :draft) }

    it { expect(Exam.published).to include(published_exam) }
    it { expect(Exam.published).not_to include(draft_exam) }

    it { expect(Exam.draft).to include(draft_exam) }
    it { expect(Exam.draft).not_to include(published_exam) }
  end

  describe "5. Callbacks" do
    it "generates a slug automatically before validation" do
      exam = build(:exam, title: "Test Exam 2024", slug: nil)
      exam.valid?
      expect(exam.slug).to eq("test-exam-2024")
    end
  end
end
