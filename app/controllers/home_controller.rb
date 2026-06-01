class HomeController < ApplicationController
  # skip_after_action :verify_authorized
  def index
    skip_authorization
  end
end
