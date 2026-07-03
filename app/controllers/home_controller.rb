class HomeController < ApplicationController
  # skip_after_action :verify_authorized
  def index
    skip_authorization
  end

  def sitemap
    @courses = Course.all
    @exams = Exam.published
    respond_to do |format|
      format.xml
    end
    skip_authorization
  end
end
