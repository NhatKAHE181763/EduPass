FactoryBot.define do
  factory :course do
    sequence(:title) { |n| "#{Faker::Educator.course_name} #{n}" }
    description { Faker::Lorem.paragraph }
    course_type { :ielts }
    level { :beginner }
    created_by { association :user }
  end
end
