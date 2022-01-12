Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace   :api, defaults: { format: :json } do
    resources :users,   only: [ :create, :destroy ] do
      resource :follow, only: [ :create, :destroy, :show ]
    end
    resources :notifications, only: :index
    resources :feed, only: :index
    resource  :session, only: [ :create, :destroy, :show ]
    resources :posts, except: [ :edit, :new ] do
      resource :like, only: [ :create, :destroy ]
    end
  end
end
