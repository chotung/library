Rails.application.routes.draw do
	root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
	namespace :api do
		namespace :v1 do
			resources :author do
				resources :book
			end
			resources :book do
				resources :author
			end
		end
	end
end
