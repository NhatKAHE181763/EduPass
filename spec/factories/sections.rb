FactoryBot.define do
  factory :section do
    title { "Section 1" }
    section_type { :reading }
    exam
  end
end
