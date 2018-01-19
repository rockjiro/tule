Rails.application.routes.draw do
  get '/' => 'home#top'
  post '/' => 'home#create'
  resources :posts
end
