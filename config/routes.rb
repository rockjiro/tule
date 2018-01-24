Rails.application.routes.draw do
  get '/' => 'home#top'
  post '/create' => 'home#create'
  delete '/posts/:id' => 'home#destroy'
  resources :posts
end
