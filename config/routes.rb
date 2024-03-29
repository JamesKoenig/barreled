Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace   :api, defaults: { format: :json } do
    resources :users,   only: [ :create, :destroy ] do
      resource :follow, only: [ :create, :destroy, :show ]
    end
    get 'users/featured', to: 'users#featured'
    resources :notifications, only: :index
    resources :feed, only: :index
    resource  :session, only: [ :create, :destroy, :show ]
    resources :posts, except: [ :edit, :new ] do
      resource :like, only: [ :create, :destroy ]
    end
    resources :likes, only: [ :index ]
  end
end
