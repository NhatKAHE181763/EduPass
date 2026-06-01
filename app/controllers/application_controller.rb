class ApplicationController < ActionController::Base
  include Pundit::Authorization

  before_action :set_jwt_from_cookie
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  # Changes to the importmap will invalidate the etag for HTML responses
  stale_when_importmap_changes

  after_action :verify_authorized, unless: :devise_controller?

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
  rescue_from ActiveRecord::RecordNotFound do
    redirect_to root_path, alert: "Resource not found"
  end

  def after_sign_in_path_for(resource)
    stored_location_for(resource) || root_path
  end

  private

  def set_jwt_from_cookie
    if cookies.signed[:jwt].present?
      request.headers["Authorization"] = "Bearer #{cookies.signed[:jwt]}"
    end
  end

  def user_not_authorized
    flash[:alert] = "You are not authorized to perform this action."
    redirect_back_or_to(root_path)
  end
end
