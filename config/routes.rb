Rails.application.routes.draw do

  resources :user_settings

  resources :catalogue_foods

  namespace :api do
    resources :diary_days, except: [:new, :edit], shallow: false do
      resources :exercises, :foods, :measurements
    end
  end

  resources :food_catalogues

  get 'scratch/index'
  
  get 'spa/index'

  root 'spa#index'

end
