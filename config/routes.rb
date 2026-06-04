Rails.application.routes.draw do
  get "home/index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  devise_for :user, controllers: {
    sessions: "user/sessions",
    registrations: "user/registrations",
    omniauth_callbacks: "user/omniauth_callbacks"
  }

  namespace :user do
    resource :profile, only: [ :edit, :update ]
    resource :password, only: [ :edit, :update ], path: "change_password"
  end

  resources :exam_plans, except: [ :show ]
  resources :courses, only: [ :index, :show ]
  resources :exams, only: [ :index, :show ]

  namespace :student do
    resource :dashboard, only: [ :show ], controller: "dashboard"
    get "dashboard/weekly_activity", to: "dashboard#weekly_activity"
  end

  namespace :admin do
    resources :courses
    resources :exams do
      member do
        patch :toggle_status
      end

      resources :sections, except: [ :index ] do
        collection do
          patch :reorder
        end
        resources :questions, except: [ :index, :show ]
      end
    end
  end

  root "home#index"

  # Solid Queue dashboard
  # mount MissionControl::Jobs::Engine => "/jobs"
end
