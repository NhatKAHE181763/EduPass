FactoryBot.define do
  factory :question do
    content { Faker::Lorem.question }
    question_type { :multiple_choice }
    section
  end
end
