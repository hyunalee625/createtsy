Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    get '/products/search', to: 'products#search'
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show] do 
      resources :reviews, only: [:index, :create, :edit, :update, :destroy]
    end
    resources :shopping_cart_items, only: [:index, :create, :update, :destroy]

  end
  

  root "static_pages#root"
end
