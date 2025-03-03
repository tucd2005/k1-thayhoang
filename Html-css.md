# 📌 Nhóm Box Model (Mô hình hộp)
- `width` / `height` → Định kích thước chiều rộng & chiều cao của phần tử.
- `max-width` / `max-height` → Giới hạn kích thước tối đa của phần tử.
- `min-width` / `min-height` → Định kích thước tối thiểu.
- `margin` → Tạo khoảng cách bên ngoài phần tử.
- `padding` → Tạo khoảng cách bên trong phần tử.
- `border` → Tạo viền cho phần tử.

# 🎨 Nhóm Màu Sắc & Nền
- `color` → Màu chữ.
- `background` → Định dạng nền (màu, ảnh, gradient...).
- `opacity` → Độ trong suốt của phần tử.

# 🏗 Nhóm Hiển Thị & Vị Trí
- `display` → Điều khiển cách hiển thị của phần tử (`block`, `inline`, `flex`...).
- `visibility` → Ẩn (`hidden`) hoặc hiển thị (`visible`) phần tử nhưng vẫn giữ không gian.
- `position` → Xác định vị trí của phần tử (`relative`, `absolute`, `fixed`, `sticky`).
- `z-index` → Xác định thứ tự chồng lớp của phần tử.

# 📏 Nhóm Khoảng Cách & Bố Cục
- `gap` → Tạo khoảng cách giữa các phần tử con trong **Flexbox/Grid**.
- `line-height` → Độ cao dòng chữ.
- `letter-spacing` → Khoảng cách giữa các chữ cái.
- `word-spacing` → Khoảng cách giữa các từ.

# ✨ Nhóm Hiệu Ứng & Hoạt Ảnh
- `box-shadow` → Tạo bóng cho phần tử.
- `text-shadow` → Tạo bóng cho chữ.
- `transition` → Tạo hiệu ứng chuyển đổi mượt mà.
- `transform` → Xoay, phóng to, thu nhỏ, nghiêng phần tử.
- `animation` → Tạo hoạt ảnh CSS.

# 📱 Nhóm Responsive (Phản hồi)
- `@media` → Tạo giao diện phù hợp với từng kích thước màn hình.
- `flex-wrap` → Cho phép các phần tử con của **Flexbox** xuống dòng khi không đủ chỗ.
- `object-fit` → Điều chỉnh cách hình ảnh hiển thị trong thẻ `<img>`.


# 🎨 Nhóm Màu Sắc & Nền
- `color` → Xác định màu chữ.
  ```css
  p {
    color: red; /* Màu đỏ */
  }
  ```
- `font-size` → Xác định kích thước chữ.
  ```css
  p {
    font-size: 16px; /* Kích thước chữ 16px */
  }
  ```
- `background` → Xác định nền cho phần tử (màu, ảnh, gradient...).
  ```css
  div {
    background: #f0f0f0; /* Nền màu xám nhạt */
  }
  ```
- `background-color` → Xác định màu nền.
  ```css
  div {
    background-color: blue; /* Nền màu xanh */
  }
  ```
- `background-image` → Thiết lập ảnh nền.
  ```css
  body {
    background-image: url('image.jpg'); /* Ảnh nền */
  }
  ```
- `background-repeat` → Kiểm soát việc lặp lại ảnh nền.
  ```css
  body {
    background-repeat: no-repeat; /* Không lặp ảnh nền */
  }
  ```
- `background-position` → Căn chỉnh vị trí ảnh nền.
  ```css
  body {
    background-position: center; /* Ảnh nền ở giữa */
  }
  ```
- `background-size` → Xác định kích thước ảnh nền.
  ```css
  body {
    background-size: cover; /* Ảnh nền phủ toàn bộ màn hình */
  }
  ```
- `opacity` → Độ trong suốt của phần tử.
  ```css
  div {
    opacity: 0.5; /* Phần tử trong suốt 50% */
  }
  ```