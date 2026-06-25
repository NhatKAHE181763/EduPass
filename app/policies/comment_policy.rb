class CommentPolicy < ApplicationPolicy
  def index?
    true
  end

  def create?
    user.present?
  end

  def destroy?
    user&.admin?
  end

  def pin?
    user&.admin?
  end

  def like?
    user.present?
  end

  def dislike?
    user.present?
  end

  class Scope < ApplicationPolicy::Scope
    # NOTE: Be explicit about which records you allow access to!
    # def resolve
    #   scope.all
    # end
  end
end
