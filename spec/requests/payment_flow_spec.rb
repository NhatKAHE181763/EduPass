require 'rails_helper'


RSpec.describe "Payment Flow Integration", type: :request do
  let(:user) { create(:user) }
  let(:free_course) { create(:course, is_premium: false) }
  let(:premium_course) { create(:course, is_premium: true) }

  let(:free_exam) { create(:exam, course: free_course, status: :published) }
  let(:premium_exam) { create(:exam, course: premium_course, status: :published) }

  describe "1. Premium Gate (Bảo vệ bài thi Premium)" do
    before do
      sign_in user
    end

    it "cho phép user làm bài thi miễn phí" do
      post start_exam_path(free_exam)
      expect(response).to have_http_status(:redirect)
      expect(response).not_to redirect_to(subscriptions_path)
    end

    it "chặn user chưa mua gói truy cập bài thi Premium" do
      post start_exam_path(premium_exam)
      expect(response).to redirect_to(subscriptions_path)
      expect(flash[:alert]).to eq("Bạn cần đăng ký gói Premium để truy cập bài thi này.")
    end

    it "cho phép user ĐÃ MUA gói truy cập bài thi Premium" do
      # Giả lập user đã nạp tiền và mua gói
      create(:subscription, user: user, status: :active, expired_at: 1.month.from_now)

      post start_exam_path(premium_exam)
      expect(response).to have_http_status(:redirect)
      expect(response).not_to redirect_to(subscriptions_path)
    end
  end

  describe "2. Stripe Webhook Handler (Giao dịch thành công)" do
    let(:event) do
      double('StripeEvent', type: 'checkout.session.completed', data: double('Data', object: stripe_object))
    end

    let(:stripe_object) do
      double('StripeObject', 
        metadata: double('Metadata', user_id: user.id.to_s, plan: 'monthly'),
        amount_total: 150000,
        currency: 'vnd',
        payment_status: 'paid',
        subscription: 'sub_123',
        payment_intent: 'pi_123'
      )
    end

    before do
      # Bypass bước check Chữ ký xác thực của Stripe
      allow(Stripe::Webhook).to receive(:construct_event).and_return(event)
    end

    it "Tạo Subscription và Order cho User khi Webhook báo thanh toán thành công" do
      expect {
        post webhooks_stripe_path, params: { type: 'checkout.session.completed' }.to_json, headers: {
          'HTTP_STRIPE_SIGNATURE' => 'dummy_signature'
        }
      }.to change(Subscription, :count).by(1).and change(Order, :count).by(1)

      expect(response).to have_http_status(200)

      order = Order.last
      expect(order.amount).to eq(150000)
      expect(order.currency).to eq('vnd')
      expect(order.payment_status).to eq('paid')

      sub = Subscription.last
      expect(sub.user).to eq(user)
      expect(sub.plan).to eq('monthly')
      expect(sub.status).to eq('active')
      expect(sub.expired_at).to be_within(1.minute).of(1.month.from_now)
    end

    it "Bỏ qua giao dịch rác (Không có User ID khớp trong hệ thống)" do
      allow(stripe_object.metadata).to receive(:user_id).and_return("99999999")

      expect {
        post webhooks_stripe_path, params: { type: 'checkout.session.completed' }.to_json, headers: {
          'HTTP_STRIPE_SIGNATURE' => 'dummy_signature'
        }
      }.not_to change(Subscription, :count)

      expect(response).to have_http_status(200)
    end
  end
end
