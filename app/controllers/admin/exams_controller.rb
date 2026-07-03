class Admin::ExamsController < AdminController
  before_action :authenticate_user!
  before_action :set_exam, only: %i[ show edit update destroy toggle_status ]

  def index
    @skills = Tag.skill
    @parts = Tag.part
    @question_types = Tag.question_type
    @q = Exam.ransack(params[:q])


    @exams = @q.result.includes(:course, :tags)

    case params[:sort_by]
    when "most_attempts"
      @exams = @exams.left_joins(:exam_attempts)
      .group("exams.id", "courses.id")
      .order("COUNT(exam_attempts.id) DESC")
    when "avg_score"
      @exams = @exams.left_joins(:exam_attempts)
      .group("exams.id", "courses.id")
      .order("AVG(exam_attempts.score) DESC NULLS LAST")
    else
      @exams = @exams.order(created_at: :desc)
    end

    @exams = @exams.page(params[:page]).per(10)
    authorize [ :admin, Exam ]
  end

  def show
  end

  def new
    @exam = Exam.new
    # Tự động gán sẵn course_id nếu truyền từ params (VD: Tạo bài thi từ trang chi tiết khóa học)
    @exam.course_id = params[:course_id] if params[:course_id].present?
    authorize [ :admin, @exam ]
  end

  def edit
  end

  def create
    @exam = Exam.new(exam_params)
    @exam.created_by = current_user # Gán người tạo là user đang đăng nhập
    authorize [ :admin, @exam ]

    if @exam.save
      redirect_to admin_exam_path(@exam), notice: "Bài thi đã được tạo thành công."
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    if @exam.update(exam_params)
      redirect_to admin_exam_path(@exam), notice: "Cập nhật bài thi thành công."
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @exam.destroy
    redirect_to admin_exams_path, notice: "Bài thi đã bị xóa."
  end

  def toggle_status
    if @exam.draft?
      @exam.published!
      notice = "Đã phát hành bài thi."
    else
      @exam.draft!
      notice = "Đã chuyển bài thi về trạng thái nháp."
    end

    # Reload lại trang trước đó (hoặc về trang danh sách nếu lỗi)
    redirect_back fallback_location: admin_exams_path, notice: notice
  end

  def preview
    @exam = Exam.includes(sections: { questions: [ :answers, :matching_pairs ] }).find_by!(slug: params[:id])
    authorize [ :admin, @exam ], :show?
  end

  private

  def set_exam
    @exam = Exam.find_by!(slug: params[:id])
    authorize [ :admin, @exam ]
  end

  def exam_params
    params.require(:exam).permit(
      :title, :slug, :course_id, :duration_minutes, tag_ids: [])
  end
end
