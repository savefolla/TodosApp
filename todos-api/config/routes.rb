Rails.application.routes.draw do
  resource :todos do
    resource :items
  end
end
