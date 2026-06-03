class DashboardPolicy < ApplicationPolicy
  def show?
    user.student? || user.admin?
  end

  def weekly_activity?
    user.student? || user.admin?
  end
end
