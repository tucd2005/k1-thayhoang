# Tất Cả Các Thuộc Tính Trong HTML & CSS

## I. HTML Attributes (Thuộc tính trong HTML)
### 1. Thuộc tính chung (Global Attributes)
- `class` - Định nghĩa tên lớp CSS.
- `id` - Định danh duy nhất cho phần tử.
- `style` - Thêm CSS trực tiếp vào phần tử.
- `title` - Chú thích khi di chuột vào phần tử.
- `data-*` - Lưu trữ dữ liệu tùy chỉnh.
- `hidden` - Ẩn phần tử.
- `tabindex` - Định thứ tự tab di chuyển.
- `contenteditable` - Cho phép chỉnh sửa nội dung.

### 2. Thuộc tính phổ biến của từng thẻ
#### a) Thuộc tính của thẻ `<a>`
- `href` - Đường dẫn liên kết.
- `target` - Mở trong cửa sổ mới (`_blank`) hoặc hiện tại (`_self`).
- `rel` - Quan hệ với tài liệu liên kết (`nofollow`, `noopener`).
- `download` - Tải tệp xuống khi bấm vào.

#### b) Thuộc tính của thẻ `<img>`
- `src` - Đường dẫn ảnh.
- `alt` - Văn bản thay thế khi ảnh không hiển thị.
- `width`, `height` - Kích thước ảnh.

#### c) Thuộc tính của thẻ `<input>`
- `type` - Kiểu nhập liệu (`text`, `password`, `email`, `number`, `date`...).
- `name` - Tên trường dữ liệu.
- `value` - Giá trị mặc định.
- `placeholder` - Văn bản gợi ý.
- `required` - Bắt buộc nhập dữ liệu.
- `disabled` - Vô hiệu hóa.
- `readonly` - Chỉ đọc.
- `maxlength`, `minlength` - Độ dài tối đa và tối thiểu.

#### d) Thuộc tính của thẻ `<form>`
- `action` - URL xử lý dữ liệu form.
- `method` - Phương thức gửi (`GET`, `POST`).
- `autocomplete` - Bật/tắt tự động điền (`on`, `off`).
- `enctype` - Kiểu mã hóa (`multipart/form-data` khi tải file).

#### e) Thuộc tính của thẻ `<table>`
- `border` - Độ dày viền.
- `cellspacing` - Khoảng cách giữa các ô.
- `cellpadding` - Khoảng cách giữa nội dung và viền ô.

---

## II. CSS Properties (Thuộc tính trong CSS)
### 1. Nhóm thuộc tính liên quan đến văn bản
- `color` - Màu chữ.
- `font-size` - Kích thước chữ.
- `font-family` - Phông chữ.
- `font-weight` - Độ đậm chữ (`normal`, `bold`, `bolder`, `lighter`).
- `text-align` - Căn lề chữ (`left`, `center`, `right`, `justify`).
- `text-decoration` - Trang trí chữ (`underline`, `overline`, `none`).
- `letter-spacing` - Khoảng cách giữa các ký tự.
- `line-height` - Độ cao dòng chữ.
- `word-spacing` - Khoảng cách giữa các từ.
- `text-transform` - Định dạng chữ (`uppercase`, `lowercase`, `capitalize`).
- `white-space` - Xử lý khoảng trắng (`nowrap`, `pre`, `pre-wrap`).

### 2. Nhóm thuộc tính liên quan đến kích thước và bố cục
- `width`, `height` - Chiều rộng, chiều cao.
- `max-width`, `max-height` - Kích thước tối đa.
- `min-width`, `min-height` - Kích thước tối thiểu.
- `margin` - Khoảng cách bên ngoài.
- `padding` - Khoảng cách bên trong.
- `border` - Viền (`border: 1px solid black`).
- `border-radius` - Bo góc viền.
- `box-sizing` - Cách tính kích thước (`content-box`, `border-box`).
- `overflow` - Xử lý tràn nội dung (`hidden`, `scroll`, `auto`).

### 3. Nhóm thuộc tính hiển thị và định vị
- `display` - Kiểu hiển thị (`block`, `inline`, `flex`, `grid`, `none`).
- `position` - Vị trí phần tử (`static`, `relative`, `absolute`, `fixed`, `sticky`).
- `top`, `left`, `right`, `bottom` - Khoảng cách so với vị trí cha.
- `z-index` - Thứ tự hiển thị (cao hơn hiển thị trước).
- `visibility` - Ẩn/hiện (`visible`, `hidden`).

### 4. Nhóm thuộc tính nền (Background)
- `background-color` - Màu nền.
- `background-image` - Ảnh nền.
- `background-size` - Kích thước ảnh nền (`cover`, `contain`).
- `background-repeat` - Lặp ảnh nền (`repeat`, `no-repeat`).
- `background-position` - Vị trí ảnh nền.
- `background-attachment` - Cuộn theo trang hoặc cố định (`scroll`, `fixed`).

### 5. Nhóm thuộc tính liên quan đến hiệu ứng
- `opacity` - Độ trong suốt (`0` là trong suốt, `1` là không trong suốt).
- `transition` - Hiệu ứng chuyển đổi (`ease`, `linear`, `ease-in-out`).
- `animation` - Hiệu ứng hoạt hình.
- `box-shadow` - Đổ bóng hộp.
- `text-shadow` - Đổ bóng chữ.
- `transform` - Biến đổi phần tử (`rotate`, `scale`, `translate`).

### 6. Nhóm thuộc tính liên quan đến Flexbox
- `display: flex` - Kích hoạt Flexbox.
- `flex-direction` - Hướng chính (`row`, `column`).
- `justify-content` - Căn chỉnh ngang (`center`, `space-between`).
- `align-items` - Căn chỉnh dọc (`center`, `stretch`).
- `flex-wrap` - Cho phép xuống dòng (`nowrap`, `wrap`).
- `align-content` - Căn chỉnh khi có nhiều dòng (`space-between`, `space-around`).
- `order` - Thay đổi thứ tự phần tử.

### 7. Nhóm thuộc tính liên quan đến Grid
- `display: grid` - Kích hoạt Grid.
- `grid-template-columns` - Số cột trong Grid.
- `grid-template-rows` - Số hàng trong Grid.
- `gap` - Khoảng cách giữa các ô.
- `grid-auto-flow` - Hướng sắp xếp tự động (`row`, `column`).
- `grid-column` - Vị trí cột.
- `grid-row` - Vị trí hàng.

---

## **Tóm tắt**
- **HTML** có nhiều thuộc tính quan trọng như `id`, `class`, `style`, `href`, `src`, `alt`, `type`, `name`, `value`, `required`, `disabled`, `method`, `action`,...
- **CSS** có nhiều thuộc tính quan trọng như `color`, `font-size`, `margin`, `padding`, `display`, `position`, `flex`, `grid`, `background`, `animation`, `transform`,...

Bạn có thể tham khảo tài liệu chính thức tại:
- [MDN HTML Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
- [MDN CSS Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)