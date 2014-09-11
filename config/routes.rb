Rails.application.routes.draw do

  resources :catalogue_foods

  namespace :api do
    resources :diary_days, except: [:new, :edit], shallow: false do
      resources :exercises, :foods
    end
  end

  resources :food_catalogues
  
  get 'spa/index'

  root 'spa#index'

end
