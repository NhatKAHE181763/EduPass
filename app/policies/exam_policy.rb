class ExamPolicy < ApplicationPolicy
  def index?
    true
  end

  def show?
    return true if user&.admin? || user&.teacher?
    record.published?
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

  def start?
    return true if user&.admin? || user&.teacher?
    record.published?
  end

  class Scope < ApplicationPolicy::Scope
    # NOTE: Be explicit about which records you allow access to!
    def resolve
      if user&.admin?
        scope.all
      elsif user&.teacher?
        scope.where(created_by_id: user&.id).or(scope.where(status: :published))
      else
        scope.where(status: :published)
      end
    end
  end
end
