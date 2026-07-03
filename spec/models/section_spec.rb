require 'rails_helper'
RSpec.describe Section, type: :model do
  describe "1. Associations" do
    it { should belong_to(:exam) }
    it { should have_many(:questions).dependent(:destroy) }

    it "has one attached audio_file" do
      expect(subject.audio_file).to be_an_instance_of(ActiveStorage::Attached::One)
    end
  end

  describe "2. Enums" do
    it { should define_enum_for(:section_type).with_values(listening: 1, reading: 0) }
  end

  describe "3. Validations" do
    it { should validate_presence_of(:title) }

    context "when section is reading" do
      subject { build(:section, section_type: :reading) }
      it { should validate_presence_of(:passage) }
    end
  end
end
