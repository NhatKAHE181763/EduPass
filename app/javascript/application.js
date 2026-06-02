// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import { Turbo } from "@hotwired/turbo-rails"
import "controllers"

import "trix"
import "@rails/actiontext"
import "bootstrap"
import Swal from "sweetalert2"

// Cấu hình SweetAlert2 làm trình xác nhận mặc định cho Turbo
Turbo.setConfirmMethod((message, element) => {
  const title = element.dataset.turboConfirmTitle || "Xác nhận hành động"
  const iconRaw = element.dataset.turboConfirmIcon || "warning"
  
  const iconMap = {
    danger: "error",
    warning: "warning",
    success: "success",
    info: "info",
    question: "question"
  }
  const icon = iconMap[iconRaw] || iconRaw

  const confirmText = element.dataset.turboConfirmText || "Xác nhận"
  const cancelText = element.dataset.turboConfirmCancel || "Hủy bỏ"
  const confirmClass = element.dataset.turboConfirmClass || "btn btn-danger px-4 mx-2"
  const cancelClass = element.dataset.turboConfirmClassCancel || "btn btn-outline-secondary px-4 mx-2"

  return new Promise((resolve) => {
    Swal.fire({
      title: title,
      html: message,
      icon: icon,
      showCancelButton: true,
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
      customClass: {
        confirmButton: confirmClass,
        cancelButton: cancelClass,
        popup: 'rounded-4 shadow-lg border-0',
        actions: 'gap-2 d-flex justify-content-center'
      },
      buttonsStyling: false
    }).then((result) => {
      resolve(result.isConfirmed)
    })
  })
})

