Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show, :create] do 
      resources :reviews, only: [:index, :show, :create, :destroy]
    end
    resources :shopping_cart_items, only: [:index, :create, :update, :destroy]
  end
  

  root "static_pages#root"
end
