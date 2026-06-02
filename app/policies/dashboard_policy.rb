class DashboardPolicy < ApplicationPolicy
  def show?
    user.student? || user.admin?
  end
end
