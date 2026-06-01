class ExamPlanPolicy < ApplicationPolicy
  def index?
    true
  end

  def new?
    true
  end

  def show?
    record.user == user
  end

  def create?
    true
  end

  def update?
    record.user == user
  end

  def edit?
    record.user == user
  end

  def destroy?
    record.user == user
  end

  class Scope < ApplicationPolicy::Scope
    # NOTE: Be explicit about which records you allow access to!
    def resolve
      scope.where(user: user)
    end
  end
end
