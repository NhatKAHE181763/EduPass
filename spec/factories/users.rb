FactoryBot.define do
  factory :user do
    email { Faker::Internet.unique.email }
    password { "password" }
    password_confirmation { "password" }
    full_name { Faker::Name.name }
    role { :student }
    confirmed_at { Time.current } # Bypass Devise confirmable

    trait :admin do
      role { :admin }
    end

    trait :teacher do
      role { :teacher }
    end
  end
end
