# frozen_string_literal: true

Rails.application.routes.draw do
  root to: "home#index"
  resources :home, only: [:index], controller: :home
  resources :default, only: [:index], controller: :default
  resources :courses, only: [:index, :show], controller: :courses
end
