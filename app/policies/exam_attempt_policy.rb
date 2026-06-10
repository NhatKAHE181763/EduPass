class ExamAttemptPolicy < ApplicationPolicy
  def show?
    user.admin? || user.teacher? || record.user_id == user.id
  end

  def update?
    user.admin? || user.teacher? || record.user_id == user.id
  end
end
