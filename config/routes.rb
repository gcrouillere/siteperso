Rails.application.routes.draw do
  root to: 'pages#home'

  get "/parallax", to: "pages#parallax"
  get "/home_parallax", to: "pages#home_parallax"

end
