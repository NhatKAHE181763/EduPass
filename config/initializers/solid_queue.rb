# frozen_string_literal: true

# Log Solid Queue output to STDOUT in development for easier visibility.
if Rails.env.development?
  Rails.application.config.solid_queue.logger = ActiveSupport::Logger.new($stdout)
end
