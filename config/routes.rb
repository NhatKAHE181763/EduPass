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

  mount MissionControl::Jobs::Engine, at: "/admin/solid_queue"

  namespace :user do
    resource :profile, only: [ :edit, :update ]
    resource :security, only: [ :edit, :update ], controller: "passwords"
  end

  resources :exam_plans, except: [ :show ]
  resources :courses, only: [ :index, :show ]
  resources :comments, only: [ :create, :destroy ] do
    member do
      patch :pin
      post :like
      post :dislike
    end
  end
  resources :exams, only: [ :index, :show ] do
    member do
      post :start
      post :submit
    end
  end

  resources :exam_attempts, only: [ :show, :update ] do
    resources :question_bookmarks, only: [] do
      collection do
        post :toggle
      end
    end
    resources :notes, only: [ :create ]
  end

  resources :subscriptions, only: [ :index, :create ] do
    collection do
      get :success
      get :cancel
    end
  end

  namespace :student do
    resource :dashboard, only: [ :show ], controller: "dashboard"
    resources :orders, only: [ :index ]
  end

  namespace :admin do
    get "dashboard", to: "dashboards#index"
    resources :courses
    resources :orders, only: [ :index ]
    resources :comments, only: [ :index, :destroy ] do
      member do
        patch :toggle_pin
      end
    end
    resources :users, only: [ :index, :show ] do
      member do
        patch :toggle_role
        patch :toggle_status
      end
    end
    resources :exams do
      member do
        patch :toggle_status
        get :preview
      end

      resources :sections, except: [ :index ] do
        collection do
          patch :reorder
        end
        resources :questions, except: [ :index, :show ] do
          collection do
            patch :reorder
          end
        end
      end
    end
  end

  post "webhooks/stripe", to: "webhooks#stripe"
  get "/sitemap.xml", to: "home#sitemap", format: "xml", as: :sitemap
  root "home#index"

  # Solid Queue dashboard
  # mount MissionControl::Jobs::Engine => "/jobs"
end
