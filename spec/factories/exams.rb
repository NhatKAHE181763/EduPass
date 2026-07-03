FactoryBot.define do
  factory :exam do
    sequence(:title) { |n| "Bài thi thử #{Faker::Educator.subject} #{n}" }
    duration_minutes { 60 }
    course
    created_by { association :user }
  end
end
