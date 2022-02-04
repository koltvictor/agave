Rails.application.routes.draw do


  namespace :api do

    resources :products
    resources :users
 
  end

  get '/hello', to: 'application#hello_world'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end