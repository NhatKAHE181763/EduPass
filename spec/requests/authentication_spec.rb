require 'rails_helper'

RSpec.describe "Authentication Flows", type: :request do
  let(:user) { create(:user, password: "password123", password_confirmation: "password123") }

  describe "1. Sign Up (Đăng ký)" do
    it "tạo user mới thành công" do
      expect {
        post user_registration_path, params: {
          user: {
            email: "newuser@example.com",
            password: "password123",
            password_confirmation: "password123",
            full_name: "New User"
          }
        }
      }.to change(User, :count).by(1)

      expect(response).to have_http_status(:redirect)
      expect(User.last.email).to eq("newuser@example.com")
    end
  end

  describe "2. Sign In & JWT Cookie Set" do
    it "Đăng nhập thành công và set cookie JWT" do
      post user_session_path, params: {
        user: {
          email: user.email,
          password: "password123"
        }
      }

      expect(response).to have_http_status(:redirect)
      expect(response).to redirect_to(root_path)

      expect(response.cookies["jwt"]).to be_present
    end
  end

  describe "3. Logout" do
    before do
      sign_in user
    end

    it "Xóa jwt cookie và đăng xuất thành công" do
      delete destroy_user_session_path
      expect(response).to have_http_status(:redirect)
      expect(response).to redirect_to(root_path)

      expect(response.cookies["jwt"]).to be_nil.or be_empty
    end
  end

  describe "4. Google OAuth Callback" do
    before do
      OmniAuth.config.test_mode = true
      OmniAuth.config.mock_auth[:google_oauth2] = OmniAuth::AuthHash.new({
        provider: 'google_oauth2',
        uid: '123456789',
        info: {
          email: "googleuser@example.com",
          name: "Google User"
        }
      })
    end

    after do
      OmniAuth.config.test_mode = false
    end

    it "tạo user mới nếu chưa tồn tại và đăng nhập thành công qua google" do
      expect {
        post user_google_oauth2_omniauth_callback_path
    }.to change(User, :count).by(1)

    expect(response).to have_http_status(:redirect)
    expect(response.cookies["jwt"]).to be_present
    end
  end

  describe "5. Unauthorized Access" do
    it "Chặn user chưa đăng nhập vào trang admin" do
      get admin_dashboard_path
      expect(response).to have_http_status(:redirect)
      expect(response).to redirect_to(root_path)
    end

    it "Chặn User thường (student) vào trang admin" do
      student = create(:user, role: :student)
      sign_in student

      get admin_dashboard_path

      expect(response).to redirect_to(root_path)
      expect(flash[:alert]).to be_present
    end

    it "Cho phép admin truy cập vào trang admin" do
      admin = create(:user, role: :admin)
      sign_in admin
      get admin_dashboard_path
      expect(response).to have_http_status(:success)
    end
  end
end
