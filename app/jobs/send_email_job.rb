class SendEmailJob < ActionMailer::MailDeliveryJob
  queue_as :default

  retry_on StandardError, wait: 5.minutes, attempts: 3
end
