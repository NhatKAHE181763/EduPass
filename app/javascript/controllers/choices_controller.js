import { Controller } from "@hotwired/stimulus"
import Choices from "choices.js"

// Connects to data-controller="choices"
export default class extends Controller {
  static targets = ["select"]

  connect() {
    const selectEl = this.hasSelectTarget ? this.selectTarget : this.element.querySelector("select")
    if (!selectEl) return
    if (selectEl.dataset.choicesInitialized) return

    this.choices = new Choices(selectEl, {
      removeItemButton: true,
      searchEnabled: true,
      placeholder: true,
      placeholderValue: "Tìm hoặc chọn Tag...",
      noChoicesText: "Không còn tag nào khác",
      itemSelectText: "",
      allowHTML: true
    })

    selectEl.dataset.choicesInitialized = "true"

    // Destroy trước khi Turbo lưu cache trang để tránh bị freeze khi back
    this.turboBeforeCacheHandler = () => this.destroyChoices()
    document.addEventListener("turbo:before-cache", this.turboBeforeCacheHandler)
  }

  disconnect() {
    document.removeEventListener("turbo:before-cache", this.turboBeforeCacheHandler)
    this.destroyChoices()
  }

  destroyChoices() {
    const selectEl = this.hasSelectTarget ? this.selectTarget : this.element.querySelector("select")
    if (this.choices && selectEl) {
      this.choices.destroy()
      this.choices = null
      delete selectEl.dataset.choicesInitialized
    }
  }
}

