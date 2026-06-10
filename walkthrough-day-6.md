# Tổng kết Kiến thức và Tiến độ Ngày hôm nay

Chúc mừng bạn đã có một ngày code cực kỳ hiệu quả! Chúng ta đã hoàn thành một khối lượng công việc lớn của Module 6 & 7 (Section Builder & Question Builder). Dưới đây là tổng hợp chi tiết những tính năng đã làm và các kiến thức cốt lõi bạn đã lĩnh hội được.

## 1. Những tính năng đã hoàn thành

- **Quản lý Phần thi (Section)**: 
  - Tạo model `Section` hỗ trợ lưu văn bản phong phú (ActionText Trix Editor) và file âm thanh (ActiveStorage).
  - Tích hợp giao diện **Inline Edit (Sửa tại chỗ)** ngay bên trong trang quản lý Bài thi.
- **Kéo thả sắp xếp (Drag & Drop)**: 
  - Tích hợp SortableJS để kéo thả thay đổi vị trí (`order_index`) của các Section. Dữ liệu được cập nhật ngầm qua AJAX.
- **Quản lý Câu hỏi & Đáp án (Question & Answer)**:
  - Tạo trang giao diện (Show) riêng biệt để quản lý danh sách Câu hỏi của một Section, giúp giao diện không bị quá tải.
  - Xây dựng form nhập liệu lồng nhau **(Dynamic Nested Form)** cho phép thêm/xóa Đáp án động không giới hạn nhờ Stimulus JS.
  - Cấu hình `is_correct` (đáp án đúng) và `explanation` (giải thích).

---

## 2. Các kiến thức Công nghệ Cốt lõi đã học

### A. Hotwire: Turbo Frames
Đây là "ngôi sao" của ngày hôm nay, giúp biến Rails thành ứng dụng SPA (Single Page Application) mà không cần code React/Vue.
- **Nguyên lý**: Thẻ `<%= turbo_frame_tag "id_khung" %>` tạo ra một ranh giới. Mọi thao tác click link hay submit form bên trong ranh giới này đều sẽ chỉ cập nhật đúng nội dung bên trong ranh giới đó, không làm tải lại toàn trang.
- **`dom_id` Helper**: Giúp tự động tạo ID duy nhất cho từng record (VD: `dom_id(@section)` sẽ ra `section_15`). Rất hữu ích để quản lý danh sách.
- **Phá vỡ khung (Break-out)**: Khi muốn một nút bấm nằm trong Frame nhưng lại bắt trình duyệt tải lại toàn trang (hoặc chuyển hướng sang trang khác), ta thêm `data: { turbo_frame: "_top" }` vào thẻ form hoặc link. Nếu quên cái này, Turbo sẽ báo lỗi `Content missing`.

### B. Hotwire: Stimulus JS
Khung làm việc Javascript siêu nhẹ của Rails để rắc thêm "gia vị" tương tác.
- **Kết nối HTML và JS**: Dùng `data-controller="tên-controller"` để nhúng logic JS vào thẻ HTML.
- **Bắt sự kiện**: Dùng `data-action="click->ten-controller#ham_xu_ly"`.
- **Định vị phần tử (Targets)**: Dùng `data-ten-controller-target="ten_target"` ở HTML và `static targets = ["ten_target"]` ở JS để JS có thể tóm lấy thẻ HTML một cách dễ dàng thay vì dùng `document.getElementById`.
- **Dynamic Nested Form**: Dùng `<template>` HTML để chứa sẵn form đáp án. Stimulus sẽ lấy template này, đổi chuỗi `NEW_RECORD` thành ID độc nhất (bằng Javascript `new Date().getTime()`), sau đó chèn (append) vào giao diện.
- **Xóa bản ghi lồng nhau**: Stimulus chỉ cần đánh dấu `<input type="hidden" name="...[_destroy]" value="1">` và ẩn giao diện đi bằng CSS `display: none`. Rails nhận được tham số này sẽ tự động xóa record ở Database.

### C. Kéo thả với SortableJS
- Gặp bài học về xung đột DOM: SortableJS chỉ nhận diện được **con trực tiếp** để kéo thả. Khi dùng Turbo Frames lồng vào thẻ `<ul> <li>`, ta phải điều chỉnh cấu trúc HTML sao cho thẻ `<turbo-frame>` chính là khối hộp `div` chứa luôn class CSS `list-group-item` và `data-id`.
- Tự động gọi API cập nhật Database qua Fetch API khi kéo thả xong (`onEnd` event).

### D. Ruby on Rails Tricks
- **Nested Attributes**: Câu lệnh `accepts_nested_attributes_for :answers, allow_destroy: true` trong Model Question cho phép ta submit 1 cái form bự chứa cả Question lẫn mảng Answers, Rails sẽ tự bóc tách và lưu vào 2 bảng Database khác nhau.
- **Pundit Authorization Dây chuyền**: Bằng cách gọi `authorize [:admin, @exam], :edit?` bên trong một hàm `before_action` chạy chung cho toàn bộ Controller (không có chữ `only:`), ta đã gián tiếp bảo vệ toàn bộ các action (như `new`, `create`, `edit`...) khỏi việc truy cập trái phép.
- **Routing 3 cấp lồng nhau**: Ghi nhớ cấu trúc `@exam` -> `@section` -> `@question`.

---

> [!TIP]
> **Kinh nghiệm chốt lại:**
> Khi làm việc với Rails 8, hãy luôn ưu tiên tư duy HTML-first (nghĩ về HTML trước). Thay vì dùng Javascript nặng nề để render dữ liệu, hãy để Server render ra HTML, dùng **Turbo Frames** để cắt ghép HTML tự động, và dùng **Stimulus** để xử lý các logic tương tác nhỏ lẻ trên màn hình (như ẩn/hiện, nhân bản HTML template). Điều này giúp code cực kỳ sạch và dễ bảo trì!
