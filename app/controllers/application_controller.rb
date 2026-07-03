class ApplicationController < ActionController::Base
  include Pundit::Authorization

  before_action :set_jwt_from_cookie
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  # Changes to the importmap will invalidate the etag for HTML responses
  stale_when_importmap_changes

  after_action :verify_authorized, unless: :devise_controller?

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  def after_sign_in_path_for(resource)
    stored_location_for(resource) || root_path
  end

  private

  def set_jwt_from_cookie
    if cookies.signed[:jwt].present?
      request.headers["Authorization"] = "Bearer #{cookies.signed[:jwt]}"
    end
  end

  # 403 - Forbidden
  def user_not_authorized(exception)
    Rails.logger.warn("Pundit Authorization Failed: #{exception.message} by User: #{current_user&.id}")

    flash[:alert] = "Bạn không có quyền thực hiện hành động này."
    redirect_back_or_to(root_path)
  end

  # 404 - Not Found
  def record_not_found(exception)
    Rails.logger.warn("Record Not Found: #{exception.message}")

    redirect_to root_path, alert: "Đường dẫn hoặc dữ liệu không tồn tại."
  end

  # 422 - Unprocessable Entity - Validate Model failed
  def record_invalid(exception)
    Rails.logger.warn("Validation Failed: #{exception.record.errors.full_messages.join(',')}")

    redirect_to root_path, alert: "Resource invalid"
  end
end
