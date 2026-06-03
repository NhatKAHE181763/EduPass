user = User.first

course_ielts = Course.create!(
  title: "IELTS Master",
  slug: "ielts-master",
  course_type: :ielts,
  level: :advanced,
  is_premium: true,
  created_by: user
)

course_toeic = Course.create!(
  title: "TOEIC 800",
  slug: "toeic-800",
  course_type: :toeic,
  level: :intermediate,
  is_premium: false,
  created_by: user
)

exam1 = Exam.create!(
  title: "IELTS Mock Test 1",
  slug: "ielts-mock-1",
  course: course_ielts,
  status: :published,
  duration_minutes: 120,
  created_by: user
)

exam2 = Exam.create!(
  title: "TOEIC Mini Test",
  slug: "toeic-mini-1",
  course: course_toeic,
  status: :published,
  duration_minutes: 45,
  created_by: user
)

15.times do |i|
  ExamAttempt.create!(
    user: user,
    exam: i.even? ? exam1 : exam2,
    status: :submitted,
    score: i.even? ? rand(5.0..8.5).round(1) : rand(500..950),
    total_questions: 40,
    correct_count: rand(20..40),
    started_at: i.days.ago,
    submitted_at: i.days.ago + rand(30..120).minutes,
    actual_duration_seconds: rand(1800..7200)
  )
end

puts "Dummy data for ExamAttempts created successfully!"
