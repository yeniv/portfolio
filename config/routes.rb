Rails.application.routes.draw do
  devise_for :users

  root to: 'pages#home'
  get '/resume', to: 'pages#resume'
  get '/about', to: 'pages#about'
  get '/contact', to: 'pages#contact'
end
