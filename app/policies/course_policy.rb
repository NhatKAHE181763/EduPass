class CoursePolicy < ApplicationPolicy
  def index?
    true
  end

  def show?
    true
  end

  def create?
    user&.admin? || user&.teacher?
  end

  def update?
    user&.admin? || (user&.teacher? && record.created_by_id == user&.id)
  end

  def destroy?
    user&.admin? || (user&.teacher? && record.created_by_id == user&.id)
  end

  class Scope < ApplicationPolicy::Scope
    # NOTE: Be explicit about which records you allow access to!
    def resolve
      if user&.admin? || user&.teacher?
        scope.all
      else
        scope.all
      end
    end
  end
end
