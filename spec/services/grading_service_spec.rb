require 'rails_helper'

RSpec.describe GradingService do
  let(:user) { create(:user) }
  let(:course) { create(:course, course_type: :ielts) }
  let(:exam) { create(:exam, course: course) }
  let(:section) { create(:section, exam: exam, section_type: :reading, passage: "Đây là bài đọc để test") }


  let(:exam_attempt) { ExamAttempt.create!(user: user, exam: exam, started_at: Time.current) }

  describe "Chấm điểm từng loại câu hỏi" do
    context "1. Trắc nghiệm 1 đáp án" do
      let(:question) do
        create(:question, section: section, question_type: :multiple_choice, answers_attributes: [
          { content: "A", is_correct: false },
          { content: "B", is_correct: true }
        ])
      end

      let(:wrong_ans) { question.answers.find_by(content: "A") }
      let(:correct_ans) { question.answers.find_by(content: "B") }

      it "chấm đúng khi thí sinh chọn đúng đáp án" do
        service = GradingService.new(exam_attempt, { question.id.to_s => correct_ans.id.to_s })
        service.call

        user_answer = exam_attempt.user_answers.find_by(question: question)

        expect(user_answer.is_correct).to be_truthy
        expect(user_answer.answer_id).to eq(correct_ans.id)
      end

      it "Chấm sai khi thí sinh chọn sai đáp án" do
        service = GradingService.new(exam_attempt, { question.id.to_s => wrong_ans.id.to_s })
        service.call

        expect(exam_attempt.user_answers.first.is_correct).to be_falsey
      end
    end

    context "2. Trắc nghiệm nhiều đáp án" do
      let(:question) do
        create(:question, section: section, question_type: :multiple_choice, allow_multiple: true, answers_attributes: [
          { content: "A", is_correct: true },
          { content: "B", is_correct: true },
          { content: "C", is_correct: false }
        ])
      end

      let(:ans_1) { question.answers.find_by(content: "A") }
      let(:ans_2) { question.answers.find_by(content: "B") }

      it "chấm đúng khi chọn đúng cả 2 đáp án" do
        service = GradingService.new(exam_attempt, { question.id.to_s => [ ans_1.id, ans_2.id ] })
        service.call

        expect(exam_attempt.user_answers.first.is_correct).to be_truthy
      end

      it "Chấm sai khi chọn thiếu đáp án" do
        service = GradingService.new(exam_attempt, { question.id.to_s => [ ans_1.id ] })
        service.call

        expect(exam_attempt.user_answers.first.is_correct).to be_falsey
      end
    end

    context "3. Điền vào chỗ trống (fill blank)" do
      let(:question) do
        create(:question, section: section, question_type: :fill_blank, answers_attributes: [
          { content: "Hello World", is_correct: true }
        ])
      end

      it "Chấm đúng: ko phân biệt chữ hoa và dấu cách thừa (strip whitespace)" do
        service = GradingService.new(exam_attempt, { question.id.to_s => "   hEllo WoRlD     " })
        service.call

        user_answer = exam_attempt.user_answers.first
        expect(user_answer.is_correct).to be_truthy
        expect(user_answer.text_answer).to eq("   hEllo WoRlD     ")
      end

      it "Chấm sai khi sai chính tả" do
        service = GradingService.new(exam_attempt, { question.id.to_s => "Hello Worl" })
        service.call

        expect(exam_attempt.user_answers.first.is_correct).to be_falsey
      end
    end

    context "4. Ghép nối (Matching pairs)" do
      let(:question) do
        create(:question, section: section, question_type: :matching, matching_pairs_attributes: [
          { left_content: "Apple", right_content: "Fruit" },
          { left_content: "Car", right_content: "Vehicle" }
        ])
      end

      let(:pair1) { question.matching_pairs.find_by(left_content: "Apple") }
      let(:pair2) { question.matching_pairs.find_by(left_content: "Car") }

      it "Chấm đúng khi tất cả các cặp đều khớp" do
        submitted_data = {
          pair1.id.to_s => "Fruit",
          pair2.id.to_s => "Vehicle"
        }
        service = GradingService.new(exam_attempt, { question.id.to_s => submitted_data })
        service.call

        user_answer = exam_attempt.user_answers.first
        expect(user_answer.is_correct).to be_truthy
        expect(user_answer.matched_pairs).to eq(submitted_data)
      end

      it "Chấm sai nếu có ít nhất 1 cặp bị sai" do
        submitted_data = {
          pair1.id.to_s => "Fruit",
          pair2.id.to_s => "Food"
        }
        service = GradingService.new(exam_attempt, { question.id.to_s => submitted_data })
        service.call

        user_answer = exam_attempt.user_answers.first
        expect(user_answer.is_correct).to be_falsey
      end
    end
  end
end
