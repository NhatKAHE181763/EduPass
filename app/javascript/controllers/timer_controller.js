import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="timer"
export default class extends Controller {
  static targets = ["display", "warningToast", "form"]
  static values = {
    attemptId: Number,
    duration: Number
  }
  connect() {
    this.storageKey = `exam_timer_${this.attemptIdValue}_time`;

    const savedTime = localStorage.getItem(this.storageKey);
    this.timeRemaining = savedTime ? parseInt(savedTime, 10) : this.durationValue;
    if (this.durationValue <= 0) this.timeRemaining = 0;

    this.hasWarned = false;
    this.updateDisplay();
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  disconnect() {
    clearInterval(this.timer);
  }

  tick() {
    if (this.timeRemaining <= 0) {
      this.timeUp();
      return;
    }

    this.timeRemaining--;
    localStorage.setItem(this.storageKey, this.timeRemaining);
    this.updateDisplay();

    // 3. Show warning 5 minutes (10% cuối)
    if (this.timeRemaining <= 300 && !this.hasWarned) {
      this.hasWarned = true;
      this.showWarning();
    }
  }

  showWarning() {
    if (this.hasWarningToastTarget) {
      const toast = new bootstrap.Toast(this.warningToastTarget);
      toast.show();
    }
  }

  timeUp() {
    clearInterval(this.timer);
    this.displayTarget.innerHTML = "00:00";
    localStorage.removeItem(this.storageKey);
    alert("Đã hết thời gian làm bài! Hệ thống sẽ tự động nộp bài.");

    if (this.hasFormTarget) {
      const inputs = this.formTarget.querySelectorAll("input, textarea, button");
      inputs.forEach(input => input.disabled = true);

      const statusInput = document.createElement("input");
      statusInput.type = "hidden";
      statusInput.name = "exam_attempt[status]";
      statusInput.value = "timed_out";

      inputs.forEach(input => input.disabled = false);
      this.formTarget.appendChild(statusInput);
      this.formTarget.submit();
    }
  }

  updateDisplay() {
    const minutes = Math.floor(this.timeRemaining / 60);
    const seconds = this.timeRemaining % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    this.displayTarget.textContent = `${formattedMinutes}:${formattedSeconds}`;

    if (this.timeRemaining <= 300) {
      this.displayTarget.parentElement.classList.add("bg-danger", "text-white");
    }
  }
}
