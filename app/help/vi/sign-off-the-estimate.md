---
title: Thiếu đơn giá và ký xác nhận dự toán
summary: Xem dòng nào của dự toán có khối lượng nhưng chưa có đơn giá, ký xác nhận dự toán dưới tên bạn để tệp ghi lại ai, khi nào và tổng là bao nhiêu, và bấm một con số để chọn các dấu mà nó được đo từ đó.
keywords: dự toán, ký xác nhận, ký duyệt, đã ký, phê duyệt, thiếu đơn giá, chưa có đơn giá, không có đơn giá, chưa định giá, đơn giá, tổng, kỹ sư dự toán, bản ghi, kiểm toán, chọn dấu, con số, truy vết
from: 9acf71ef
---

## Bạn sẽ làm gì

Kiểm tra rằng mọi dòng của dự toán đã có giá, rồi ký tên xác nhận. Tệp bóc tách ghi lại ai đã ký, khi nào, và cho tổng nào.

## Các dòng chưa có đơn giá

Trong {{ui:Khối lượng}} › {{ui:Theo hạng mục}}, một dòng có khối lượng nhưng không có đơn giá vật liệu hoặc nhân công sẽ ghi **Chưa có đơn giá**, và thanh phía trên bảng cho biết có bao nhiêu dòng như vậy. Dòng đó không cộng gì vào tổng. Một hạng mục không có đơn giá riêng sẽ không bị đánh dấu khi một trong các cấu kiện của nó đã được định giá: một cấu kiện được định giá thông qua các phần của nó. Bản dự toán xuất ra ghi **Chưa có đơn giá** trong cột Ghi chú của mỗi dòng như vậy và đếm chúng.

## Ký xác nhận dự toán

1. Bấm **Ký xác nhận dự toán** phía trên bảng Khối lượng.
2. Hộp thoại nêu tổng bạn đang ký và liệt kê các dòng chưa có đơn giá. Nhập tên của bạn và, nếu muốn, vai trò của bạn.
3. Bấm **Ký xác nhận**. Thanh bây giờ ghi "Đã ký xác nhận bởi … vào …" cùng với tổng. Lưu bóc tách để giữ nó trong tệp.

Chữ ký xác nhận gắn với các con số bạn đã ký. Mọi thay đổi sau đó đối với khối lượng, đơn giá hoặc một dòng đều xóa nó, và TakeoffCraft sẽ thông báo cho bạn. Hoàn tác sẽ đưa lại dự toán bạn đã ký, cùng với chữ ký xác nhận của nó. Đổi tên một dòng không phải là thay đổi một con số. **Gỡ bỏ chữ ký xác nhận** sẽ xóa nó đi.

Một tệp bóc tách được sửa bên ngoài TakeoffCraft sau khi đã ký sẽ mở ra mà không có chữ ký xác nhận, kèm một ghi chú nói rõ điều đó. Bản dự toán xuất ra (CSV và XLSX) ghi chữ ký xác nhận ở dưới các tổng.

Chỉ người mới được ký. Trợ lý AI có thể đọc xem dự toán đã được ký xác nhận hay chưa và đơn giá nào còn thiếu; nó không có cách nào để ký.

## Bấm một con số để xem nó từ đâu ra

Bấm một khối lượng hoặc một số tiền của một dòng để chọn các dấu mà nó được đo từ đó. Khi các dấu nằm trên tờ khác, tờ đó sẽ mở ra. Bấm một con số của dòng **Tổng công trình** để chọn mọi dấu trên tờ. Khối lượng nhập tay thì không có dấu nào.

## Điều nên biết

- Chữ ký xác nhận ghi lại tên như bạn đã gõ. Nó là một bản ghi trong tệp, không phải chữ ký điện tử.
- Khi các gói thầu được trao cho nhà thầu phụ hoặc có phương án thay thế trong bóc tách, tổng được ký là tổng thầu cơ bản hiển thị là **Tổng công trình**.
