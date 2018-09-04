class ApplicationController < ActionController::Base
  before_action :set_locale

  def default_url_options
    { host: ENV["HOST"] || "localhost:3000", locale: I18n.locale }
  end

  def set_locale
    if params[:change].present? || params[:locale].present?
      I18n.locale = params[:locale]
    else
      locale_trial = extract_locale_from_accept_language_header
      ["fr", "en"].include? locale_trial ? I18n.locale = locale_trial : I18n.locale = "fr"
    end
  end

  private

  def extract_locale_from_accept_language_header
    request.env['HTTP_ACCEPT_LANGUAGE'].scan(/^[a-z]{2}/).first if request.env['HTTP_ACCEPT_LANGUAGE']
  end
end
