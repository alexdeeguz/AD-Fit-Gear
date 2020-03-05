Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :sessions, only: [:create, :destroy]
    resources :cart_items, only: [:index, :destroy, :create]
    resources :cart, only: [:create, :show]
    resources :categories, only: [:index, :show] do
      resources :products, only: [:index, :show]
    end 
    resources :products, only: [:show]
  end
end
