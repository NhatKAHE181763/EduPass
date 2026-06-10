import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="split-screen"
export default class extends Controller {
  static targets = ["leftPanel", "divider", "rightPanel"]

  connect() {
    this.isDragging = false;
    this.dragBound = this.drag.bind(this)
    this.stopDragBound = this.stopDrag.bind(this)
  }

  startDrag(event) {
    event.preventDefault();
    this.isDragging = true;
    this.dividerTarget.classList.add("bg-primary", "bg-opacity-50")
    document.addEventListener("mousemove", this.dragBound)
    document.addEventListener("mouseup", this.stopDragBound)
    document.body.style.userSelect = "none";
  }

  stopDrag() {
    this.isDragging = false;
    this.dividerTarget.classList.remove("bg-primary", "bg-opacity-50")
    document.removeEventListener("mousemove", this.dragBound)
    document.removeEventListener("mouseup", this.stopDragBound)
    document.body.style.userSelect = "";
  }

  drag(event) {
    if (!this.isDragging) return;

    const rect = this.element.getBoundingClientRect();
    let newWidth = event.clientX - rect.left;
    const minWidth = rect.width * 0.2;
    const maxWidth = rect.width * 0.8;

    if (newWidth < minWidth) newWidth = minWidth;
    if (newWidth > maxWidth) newWidth = maxWidth;

    this.leftPanelTarget.style.flexBasis = `${newWidth}px`;
  }
}
