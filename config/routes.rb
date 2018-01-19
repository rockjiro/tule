Rails.application.routes.draw do
  get '/' => 'home#top'
  post '/create' => 'home#create'
  resources :posts
end
