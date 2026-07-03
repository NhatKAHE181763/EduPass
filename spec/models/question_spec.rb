require 'rails_helper'

RSpec.describe Question, type: :model do
  describe "1. Associations" do
    it { should belong_to(:section) }
    it { should have_many(:answers).dependent(:destroy) }
    it { should have_many(:matching_pairs).dependent(:destroy) }
  end

  describe "2. Nested Attributes" do
    it { should accept_nested_attributes_for(:answers).allow_destroy(true) }
    it { should accept_nested_attributes_for(:matching_pairs).allow_destroy(true) }
  end

  describe "3. Enums" do
    it { should define_enum_for(:question_type).with_values(multiple_choice: 0, fill_blank: 1, matching: 2) }
  end

  describe "4. Validations" do
    it { should validate_presence_of(:question_type) }
    it { should validate_presence_of(:content) }
  end
end
