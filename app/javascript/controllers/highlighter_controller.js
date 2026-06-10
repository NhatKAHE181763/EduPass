import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { attemptId: String }
  static targets = ["toolbar", "sidebar", "noteFormPanel", "noteInput", "notesList", "highlightBtn", "clearBtn", "noteBtn", "divider"]

  connect() {
    this.hideToolbar = this.hideToolbar.bind(this)
    document.addEventListener("mousedown", this.hideToolbar)
  }

  disconnect() {
    document.removeEventListener("mousedown", this.hideToolbar)
  }

  toggleSidebar() {
    this.sidebarTarget.classList.toggle("d-none")
  }

  openSidebar() {
    this.sidebarTarget.classList.remove("d-none")
  }

  closeSidebar() {
    this.sidebarTarget.classList.add("d-none")
    this.noteFormPanelTarget.classList.add("d-none")
  }

  handleSelection(event) {
    if (this.toolbarTarget.contains(event.target)) return

    // Bấm vào cục highlight đã có => Hiện toolbar để đổi màu hoặc xoá
    if (event.target.tagName === 'MARK') {
      this.currentMark = event.target
      this.currentRange = null
      this.currentSelectionText = this.currentMark.textContent
      const sectionEl = this.currentMark.closest('[data-section-id]')
      this.currentSectionId = sectionEl ? sectionEl.dataset.sectionId : null

      this.clearBtnTarget.classList.remove("d-none")
      this.highlightBtnTarget.classList.add("d-none")
      this.noteBtnTarget.classList.add("d-none")
      this.dividerTarget.classList.add("d-none")

      const rect = this.currentMark.getBoundingClientRect()
      // Toolbar nổi lên giữa thẻ Mark
      this.toolbarTarget.style.top = `${rect.top + window.scrollY - 55}px`
      this.toolbarTarget.style.left = `${rect.left + window.scrollX + (rect.width / 2)}px`
      this.toolbarTarget.classList.remove("d-none")
      return
    }

    // Bôi đen văn bản mới
    setTimeout(() => {
      const selection = window.getSelection()
      if (!selection || selection.isCollapsed) {
        this.toolbarTarget.classList.add("d-none")
        return
      }

      const text = selection.toString().trim()
      if (text.length === 0) {
        this.toolbarTarget.classList.add("d-none")
        return
      }

      this.currentMark = null // Đặt lại nếu đang thao tác bôi đen
      const range = selection.getRangeAt(0)
      const rect = range.getBoundingClientRect()

      let container = range.startContainer
      if (container.nodeType === Node.TEXT_NODE) {
        container = container.parentElement
      }
      const sectionEl = container.closest('[data-section-id]')
      this.currentSectionId = sectionEl ? sectionEl.dataset.sectionId : null
      this.currentSelectionText = text
      this.currentRange = range

      if (!container.closest('.section-passage') && !container.closest('.section-questions')) {
        this.toolbarTarget.classList.add("d-none")
        return
      }

      this.clearBtnTarget.classList.add("d-none")
      this.highlightBtnTarget.classList.remove("d-none")
      this.noteBtnTarget.classList.remove("d-none")
      this.dividerTarget.classList.remove("d-none")

      this.toolbarTarget.style.top = `${rect.top + window.scrollY - 55}px`
      this.toolbarTarget.style.left = `${rect.left + window.scrollX + (rect.width / 2)}px`
      this.toolbarTarget.classList.remove("d-none")
    }, 10)
  }

  hideToolbar(event) {
    if (this.toolbarTarget.contains(event.target)) return
    // Bỏ qua nếu click vào sidebar
    if (this.hasSidebarTarget && this.sidebarTarget.contains(event.target)) return

    setTimeout(() => {
      const selection = window.getSelection()
      // Nếu click ra ngoài mà không có selection, và cũng không bấm vào Mark
      if ((!selection || selection.isCollapsed) && event.target.tagName !== 'MARK') {
        this.toolbarTarget.classList.add("d-none")
      }
    }, 10)
  }

  highlight(event) {
    event.preventDefault()
    event.stopPropagation()

    const color = event.currentTarget.dataset.color

    if (color === "clear") {
      if (this.currentMark) {
        this.unwrapMark(this.currentMark)
        this.toolbarTarget.classList.add("d-none")
      } else if (this.currentRange) {
        const content = this.currentRange.extractContents()
        this.removeNestedMarks(content)
        this.currentRange.insertNode(content)
        window.getSelection().removeAllRanges()
        this.toolbarTarget.classList.add("d-none")
      }
      // Bạn có thể gửi API xoá note nếu muốn
      return
    }

    if (this.currentMark) {
      // Đổi màu mark cũ
      this.currentMark.className = `bg-${color} rounded`
      this.currentMark.style.backgroundColor = this.getColorHex(color) + " !important"
      this.currentMark.style.cursor = "pointer"
      this.toolbarTarget.classList.add("d-none")
      this.saveNote(color, this.currentMark.title || "")

    } else if (this.currentRange) {
      // Bôi đen mới
      const mark = document.createElement("mark")
      mark.className = `bg-${color} rounded`
      mark.style.backgroundColor = this.getColorHex(color) + " !important"
      mark.style.cursor = "pointer"

      try {
        const content = this.currentRange.extractContents()
        // Xoá các mark cũ nằm bên trong vùng bôi đen mới để đè màu
        this.removeNestedMarks(content)
        mark.appendChild(content)
        this.currentRange.insertNode(mark)
      } catch (e) {
        console.error("Lỗi khi bọc highlight:", e)
      }

      window.getSelection().removeAllRanges()
      this.toolbarTarget.classList.add("d-none")

      this.saveNote(color, "")
    }
  }

  openNoteForm(event) {
    event.preventDefault()
    event.stopPropagation()
    
    let defaultText = ""
    if (this.currentMark && this.currentMark.title) {
      defaultText = this.currentMark.title
    }
    
    this.openSidebar()
    this.noteFormPanelTarget.classList.remove("d-none")
    this.noteInputTarget.value = defaultText
    this.noteInputTarget.focus()
    this.toolbarTarget.classList.add("d-none")
  }

  cancelNote(event) {
    event.preventDefault()
    this.noteFormPanelTarget.classList.add("d-none")
    this.noteInputTarget.value = ""
  }

  submitNote(event) {
    event.preventDefault()
    const noteText = this.noteInputTarget.value.trim()
    const color = "warning"
    
    if (this.currentMark) {
      this.currentMark.title = noteText
      this.currentMark.style.cursor = "help"
      this.saveNote('warning', noteText)
    } else if (this.currentRange) {
      const mark = document.createElement("mark")
      mark.className = `bg-${color} rounded`
      mark.style.backgroundColor = this.getColorHex(color) + " !important"
      mark.title = noteText
      mark.style.cursor = "help"
      
      try {
        const content = this.currentRange.extractContents()
        this.removeNestedMarks(content)
        mark.appendChild(content)
        this.currentRange.insertNode(mark)
      } catch (e) {
        console.error("Lỗi khi bọc note:", e)
      }
      
      window.getSelection().removeAllRanges()
      this.saveNote(color, noteText)
    }

    this.cancelNote(event)
  }

  // Tiện ích: Xoá thẻ bọc mark
  unwrapMark(mark) {
    const parent = mark.parentNode
    while (mark.firstChild) {
      parent.insertBefore(mark.firstChild, mark)
    }
    parent.removeChild(mark)
  }

  // Tiện ích: Xoá các thẻ mark con nằm trong nội dung đang extract
  removeNestedMarks(content) {
    const marks = content.querySelectorAll('mark')
    marks.forEach(m => this.unwrapMark(m))
  }

  getColorHex(bootstrapColor) {
    if (bootstrapColor === "warning") return "#ffc107"
    if (bootstrapColor === "success") return "#198754"
    if (bootstrapColor === "danger") return "#d63384"
    return "yellow"
  }

  saveNote(color, content) {
    const csrfToken = document.querySelector("[name='csrf-token']").content

    fetch(`/exam_attempts/${this.attemptIdValue}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken,
        "Accept": "application/json"
      },
      body: JSON.stringify({
        note: {
          section_id: this.currentSectionId,
          selected_text: this.currentSelectionText,
          color: color,
          content: content
        }
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log("Saved note", data)
      if (data.success && data.note) {
        this.appendNoteToSidebar(data.note)
      }
    })
    .catch(err => {
      console.error("Error saving note:", err)
    })
  }

  appendNoteToSidebar(note) {
    if (!this.hasNotesListTarget) return
    const contentHtml = note.content ? `<div class="fw-medium">${note.content}</div>` : ''
    const html = `
      <div class="p-2 border rounded border-${note.color} bg-${note.color} bg-opacity-10" style="font-size: 0.85rem;">
        <div class="fst-italic text-muted mb-1 text-truncate border-start border-3 border-${note.color} ps-2">"${note.selected_text}"</div>
        ${contentHtml}
      </div>
    `
    this.notesListTarget.insertAdjacentHTML('afterbegin', html)
  }
}
