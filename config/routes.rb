Rails.application.routes.draw do
  root :to => 'pages#index'
  get '/emissions' => 'pages#emissions'
end
