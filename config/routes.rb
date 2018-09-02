Rails.application.routes.draw do
  root to: 'pages#home'

  get "/parallax", to: "pages#parallax"

end
