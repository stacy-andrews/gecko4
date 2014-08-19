Rails.application.routes.draw do

  namespace :api do
    resources :diary_days, except: [:new, :edit], shallow: false do
      resources :exercises
      resources :foods
    end
  end

  get 'spa/index'

  root 'spa#index'

end
