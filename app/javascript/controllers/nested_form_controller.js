import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="nested-form"
export default class extends Controller {
    static targets = ["target", "template"]

    add(e) {
        e.preventDefault()

        // Lấy nội dung template HTML bị ẩn
        let content = this.templateTarget.innerHTML

        // Thay thế chữ NEW_RECORD bằng một timestamp (thời gian thực) để tạo ID duy nhất cho các thẻ input
        content = content.replace(/NEW_RECORD/g, new Date().getTime())

        // Chèn HTML mới vào cuối danh sách các đáp án hiện có
        this.targetTarget.insertAdjacentHTML('beforeend', content)
    }

    remove(e) {
        e.preventDefault()

        // Tìm phần tử bao bọc bên ngoài của đáp án đang thao tác
        const wrapper = e.target.closest('.nested-fields')

        // Tìm thẻ input hidden mang tên '_destroy' và gán value = 1
        const destroyInput = wrapper.querySelector("input[name*='_destroy']")
        if (destroyInput) {
            destroyInput.value = '1'
        }

        // Ẩn đáp án đó khỏi màn hình (khi submit form, Rails sẽ tự động xóa trong DB)
        wrapper.style.display = 'none'
    }
}
