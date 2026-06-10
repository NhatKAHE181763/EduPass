import { Controller } from "@hotwired/stimulus"
import Sortable from "sortablejs"

// Connects to data-controller="sortable"
export default class extends Controller {
    static values = {
        url: String
    }

    connect() {
        this.sortable = Sortable.create(this.element, {
            animation: 150,
            handle: ".drag-handle", // Chỉ cho phép kéo thả khi nắm vào phần tử có class này
            ghostClass: "bg-light",
            onEnd: this.onEnd.bind(this)
        })
    }

    disconnect() {
        if (this.sortable) {
            this.sortable.destroy()
        }
    }

    onEnd(event) {
        if (event.oldIndex === event.newIndex) return

        // Lấy mảng ID theo thứ tự mới từ thuộc tính data-id của mỗi thẻ con
        const itemIds = Array.from(this.element.children).map(child => child.dataset.id)

        // Gửi PATCH request để lưu thứ tự
        fetch(this.urlValue, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content
            },
            body: JSON.stringify({ item_ids: itemIds })
        }).then(response => {
            if (!response.ok) {
                alert("Có lỗi xảy ra khi lưu vị trí!")
            }
        })
    }
}
