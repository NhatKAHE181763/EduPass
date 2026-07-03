require 'rails_helper'

RSpec.describe "Exam Taking Flow", type: :system do
  let(:user) { create(:user) }
  let(:course) { create(:course) }
  let(:exam) { create(:exam, course: course, duration_minutes: 60, status: :published) }
  let(:section) { create(:section, exam: exam, section_type: :reading, passage: "Đoạn văn đọc hiểu...") }

  let!(:question) do
    create(:question, section: section, question_type: :multiple_choice, answers_attributes: [
      { content: "Đáp án A", is_correct: false },
      { content: "Đáp án B", is_correct: true }
    ])
  end

  before do
    driven_by(:rack_test)
    sign_in user
  end

  it "1. Bắt đầu làm bài, nộp bài và chấm điểm chính xác" do
    visit exam_path(exam)
    click_button "Làm bài"

    expect(page).to have_current_path(/exam_attempts\/\d+/)
    choose "Đáp án B"
    click_button "Nộp Bài"

    expect(page).to have_content("Band score")

    attempt = ExamAttempt.last
    expect(attempt.status).to eq("submitted")
    expect(attempt.correct_count).to eq(1)
  end

  it "2. Ngăn chặn Duplicate Attempt (Tự động mở tiếp bài làm cũ)" do
    existing_attempt = ExamAttempt.create!(user: user, exam: exam, status: :in_progress, started_at: Time.current)

    visit exam_path(exam)
    click_link "Tiếp tục"

    expect(page).to have_current_path(exam_attempt_path(existing_attempt))
    expect(ExamAttempt.where(user: user, exam: exam, status: :in_progress).count).to eq(1)
  end

  it "3. Auto-submit Timed Out (Xử lý backend khi bỏ thi quá giờ)" do
    old_attempt = ExamAttempt.create!(user: user, exam: exam, status: :in_progress, started_at: 61.minutes.ago)
    visit exam_path(exam)

    click_button "Làm bài"
    old_attempt.reload

    expect(old_attempt.reload.status).to eq("timed_out")
    expect(ExamAttempt.where(user: user, exam: exam).count).to eq(2)
  end
end
