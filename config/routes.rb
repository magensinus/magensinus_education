# frozen_string_literal: true

Rails.application.routes.draw do
  root to: "home#index"
  resources :home, only: [:index], controller: :home
  resources :courses, only: [:index, :show], controller: :courses
end
