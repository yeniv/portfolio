Rails.application.routes.draw do
  devise_for :users

  root to: 'pages#home'
  get '/about', to: 'pages#about'
  get '/contact', to: 'pages#contact'
  get '/forrest', to: 'pages#forrest'
  get '/hiive', to: 'pages#hiive'
  get '/fetch', to: 'pages#fetch'
end
