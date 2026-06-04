# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

puts "Đang tạo dữ liệu mẫu cho Tag..."

tags_data = [
  { name: "Reading", category: :skill, color: "primary" },
  { name: "Listening", category: :skill, color: "info" },
  { name: "Part 1", category: :part, color: "secondary" },
  { name: "Part 2", category: :part, color: "secondary" },
  { name: "Multiple Choice", category: :question_type, color: "warning" },
  { name: "Fill in the Blank", category: :question_type, color: "success" },
  { name: "Beginner", category: :level, color: "success" },
  { name: "Advanced", category: :level, color: "danger" },
  { name: "IELTS Academic", category: :exam_type, color: "primary" },
  { name: "TOEIC", category: :exam_type, color: "info" }
]

tags_data.each do |data|
  Tag.find_or_create_by!(name: data[:name]) do |t|
    t.category = data[:category]
    t.color = data[:color]
  end
end

puts "Đã tạo thành công #{Tag.count} tags!"
