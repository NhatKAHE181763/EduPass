class WebhooksController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_after_action :verify_authorized

  def stripe
    payload = request.body.read
    sig_header = request.env["HTTP_STRIPE_SIGNATURE"]
    endpoint_secret = ENV["STRIPE_WEBHOOK_SECRET"]

    begin
      event = Stripe::Webhook.construct_event(payload, sig_header, endpoint_secret)
    rescue JSON::ParserError => e
      render json: { error: "Invalid payload" }, status: 400
      return
    rescue Stripe::SignatureVerificationError => e
      render json: { error: "Invalid signature" }, status: 400
      return
    end

    case event.type
    when "checkout.session.completed"
      EnrollmentService.new(event.data.object).call

    when "invoice.payment_failed"
      ###########
    end

    render json: { success: true }, status: 200
  end
end


# Done! The Stripe CLI is configured for NhatKhuat sandbox with account id acct_1Tm4Gq1ydHNKlmHa
# stripe listen --forward-to localhost:3000/webhooks/stripe
# rake solid_queue:start
