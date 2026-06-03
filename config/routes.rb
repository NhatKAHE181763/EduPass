Rails.application.routes.draw do
  get "home/index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  devise_for :users, controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations",
    omniauth_callbacks: "users/omniauth_callbacks"
  }

  namespace :users do
    resource :profile, only: [ :edit, :update ]
    resource :password, only: [ :edit, :update ], path: "change_password"
  end

  resources :exam_plans, except: [ :show ]

  namespace :students do
    resource :dashboard, only: [ :show ], controller: "dashboard"
    get "dashboard/weekly_activity", to: "dashboard#weekly_activity"
  end

  root "home#index"

  # Solid Queue dashboard
  # mount MissionControl::Jobs::Engine => "/jobs"
end
