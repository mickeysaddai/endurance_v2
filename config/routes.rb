Rails.application.routes.draw do
   root "static_pages#root"
    namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :index, :show, :update]
      resource :session, only: [:create, :destroy]
      resources :activities

    
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end