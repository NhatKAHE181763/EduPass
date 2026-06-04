class QuestionPolicy < ApplicationPolicy
  def show?
    exam = record.section.exam
    Pundit.policy!(user, exam).show?
  end

  def create?
    manage_questions?
  end

  def update?
    manage_question?
  end

  def destroy?
    manage_question?
  end

  private

  def manage_question?
    exam = record.section.exam
    user&.admin? || (user&.teacher? && exam.created_by_id == user&.id)
  end

  class Scope < ApplicationPolicy::Scope
    def resolve
      if user&.admin?
        scope.all
      elsif user&.teacher?
        scope.joins(section: :exam).where(exams: { created_by_id: user&.id })
      else
        scope.joins(section: :exam).where(exams: { status: Exam.statuses[:published] })
        # thêm điều kiện để chỉ hiển thị câu hỏi của exam đã được mua hoặc exam miễn phí
      end
    end
  end
end
