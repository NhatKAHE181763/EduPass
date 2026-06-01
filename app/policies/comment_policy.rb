class CommentPolicy < ApplicationPolicy
  def index?
    true
  end

  def show?
    true
  end

  def create?
    user.admin? || user.teacher? || user.student?
  end

  def update?
    record.user_id == user.id || user.admin?
  end

  def destroy?
    record.user_id == user.id || user.admin?
  end

  def pin?
    user.admin?
  end
  class Scope < ApplicationPolicy::Scope
    # NOTE: Be explicit about which records you allow access to!
    # def resolve
    #   scope.all
    # end
  end
end
