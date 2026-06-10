import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["navBtn", "passage", "questionGroup", "submitWrapper", "prevBtn", "nextBtn"]

  connect() {
    this.currentSectionValue = 0;
    this.totalSectionsValue = this.passageTargets.length;
    this.updateSectionVisibility();
  }

  // 1. Đổi màu XANH LÁ khi user điền/chọn đáp án
  markAnswered(event) {
    const match = event.target.name.match(/\[(\d+)\]/);
    if (!match) return;

    const questionId = match[1];
    const btn = this.navBtnTargets.find(b => b.dataset.questionId === questionId);

    if (!btn) return;
    let isAnswered = false;
    const inputType = event.target.type;
    // Nếu là checkbox/radio, ta đếm xem có cái nào cùng name đang được check không
    if (inputType === "checkbox" || inputType === "radio") {
      // Chú ý dùng CSS.escape để tránh lỗi ngoặc vuông [] trong selector
      const safeName = CSS.escape(event.target.name);
      const checkedInputs = document.querySelectorAll(`input[name="${safeName}"]:checked`);
      isAnswered = checkedInputs.length > 0;
    } else {
      // Text input hoặc Select box
      isAnswered = event.target.value.trim() !== "";
    }
    if (isAnswered) {
      btn.classList.remove("btn-outline-secondary");
      btn.classList.add("btn-success", "text-white");
    } else {
      btn.classList.remove("btn-success", "text-white");
      btn.classList.add("btn-outline-secondary");
    }
  }

  // 2. Chuyển sang phần tiếp theo
  nextSection() {
    if (this.currentSectionValue < this.totalSectionsValue - 1) {
      this.currentSectionValue++;
      this.updateSectionVisibility();
    }
  }

  // 3. Quay lại phần trước
  prevSection() {
    if (this.currentSectionValue > 0) {
      this.currentSectionValue--;
      this.updateSectionVisibility();
    }
  }

  // 4. Click Mini-map để cuộn mượt mà tới câu hỏi
  goToQuestion(event) {
    const btn = event.currentTarget;
    const targetSection = parseInt(btn.dataset.sectionIndex, 10);
    const questionId = btn.dataset.questionId;

    // Nếu câu đó nằm ở phần khác, tự động nhảy sang phần đó trước
    if (targetSection !== this.currentSectionValue) {
      this.currentSectionValue = targetSection;
      this.updateSectionVisibility();
    }

    // Cuộn màn hình tới câu hỏi
    const questionElement = document.getElementById(`question-${questionId}`);
    if (questionElement) {
      questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Thêm hiệu ứng nháy viền để báo hiệu câu đang xem
      questionElement.classList.add('border', 'border-primary', 'border-2');
      setTimeout(() => {
        questionElement.classList.remove('border', 'border-primary', 'border-2');
      }, 1500);
    }
  }

  // Cập nhật ẩn/hiện UI mỗi khi đổi Section
  updateSectionVisibility() {
    this.passageTargets.forEach((el, idx) => el.classList.toggle("d-none", idx !== this.currentSectionValue));
    this.questionGroupTargets.forEach((el, idx) => el.classList.toggle("d-none", idx !== this.currentSectionValue));

    // Khóa nút Prev nếu đang ở đầu
    this.prevBtnTarget.disabled = (this.currentSectionValue === 0);

    // Khóa nút Next và hiện nút Nộp Bài nếu đang ở cuối
    if (this.currentSectionValue === this.totalSectionsValue - 1) {
      this.nextBtnTarget.disabled = true;
      this.submitWrapperTarget.classList.remove("d-none");
    } else {
      this.nextBtnTarget.disabled = false;
      this.submitWrapperTarget.classList.add("d-none");
    }
  }
}
