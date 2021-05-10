Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace   :api, defaults: { format: :json } do
    resources :users,   only: [ :create, :destroy ] do
      resources :follows, only: [ :create, :destroy, :index ]
    end
    resource  :session, only: [ :create, :destroy, :show ]
    get "/posts/feed", to: "posts#feed"
    resources :posts, except: [ :index, :edit, :new ] do
      resources :likes, only: [ :create, :destroy, :index]
    end
  end
end
