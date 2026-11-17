---
title: Ngôn ngữ công thức
summary: Quy tắc cho công thức khối lượng định mức - biến, toán tử, hàm, làm tròn và mọi thông báo lỗi.
keywords: công thức, biểu thức, cú pháp, hàm, ceil, floor, round, min, max, abs, biến, toán tử, phép tính
from: 4da14575
---

Cấu kiện định mức lấy khối lượng từ một công thức. Công thức là một biểu thức số học nhỏ trên các giá trị đo của hạng mục. Xem [Định mức và công thức](topic:assemblies) để có ví dụ minh họa.

## Biến

| Loại hạng mục | Biến | Nghĩa |
|---|---|---|
| Tuyến | `L` | Tổng chiều dài |
| Tuyến | `H` | Chiều cao của hạng mục |
| Tuyến | `A` | Diện tích tường, L × H, trừ các lỗ mở của những đoạn có lỗ mở (bóc tách từ BimCraft). Khi bóc tách đó nêu một phương pháp đo, `A` được đo theo phương pháp ấy: các lỗ mở không lớn hơn kích thước nhỏ nhất của phương pháp vẫn được giữ lại, và phần mà phương pháp trừ đi tại nơi các tường giao nhau được bỏ qua. Ghi chú dưới hạng mục nêu tên phương pháp |
| Tuyến | `N` | Số đoạn |
| Diện tích | `A` | Tổng diện tích thực (đường bao trừ phần khoét) |
| Diện tích | `P` | Tổng chu vi, kể cả cạnh của phần khoét |
| Diện tích | `H` | Chiều sâu hoặc độ dày của hạng mục |
| Diện tích | `N` | Số vùng |
| Đếm | `N` | Số đếm |

- Biến tính theo đơn vị của hạng mục: xem [Đơn vị](topic:units).
- Chữ hoa và chữ thường như nhau: `l` là `L`.
- Chỉ các biến thuộc loại của hạng mục đó mới dùng được. `P` trên hạng mục tuyến cho ra `"P" không phải là giá trị đo được ở đây. Dùng L, H, A, N.`
- Chiều cao hoặc chiều sâu để trống được tính là 0.

## Toán tử

| Viết | Nghĩa |
|---|---|
| `+` | Cộng |
| `-` hoặc `−` | Trừ, hoặc giá trị âm |
| `*` hoặc `×` | Nhân |
| `/` hoặc `÷` | Chia |
| `( )` | Nhóm |

Nhân và chia được thực hiện trước cộng và trừ: `L * 2 + 4` là (L × 2) + 4. Khi phân vân, hãy dùng dấu ngoặc.

Số có thể có phần thập phân (`1.333`, `.5`) và số mũ (`1e3` = 1000). Khoảng trắng bị bỏ qua.

## Hàm

| Hàm | Kết quả | Ví dụ |
|---|---|---|
| `ceil(x)` | Làm tròn lên số nguyên | `ceil(67.5)` = 68 |
| `floor(x)` | Làm tròn xuống số nguyên | `floor(67.5)` = 67 |
| `round(x)` | Làm tròn đến số nguyên gần nhất, nửa thì ra xa số không | `round(2.5)` = 3 |
| `round(x, d)` | Làm tròn đến d chữ số thập phân (0 đến 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Giá trị nhỏ nhất | `min(N, 10)` |
| `max(a, b, …)` | Giá trị lớn nhất | `max(1, ceil(N / 12))` |
| `abs(x)` | Giá trị không kèm dấu | `abs(-3)` = 3 |

`ceil` và `floor` bỏ qua sai số làm tròn nhỏ của máy tính, nên một giá trị lẽ ra đúng bằng 1 sẽ không bao giờ bị làm tròn lên thành 2.

## Lỗi

Công thức không đọc được hoặc không tính được sẽ hiển thị lỗi dưới ô nhập, và cấu kiện bị bỏ khỏi các tổng (tiêu đề {{ui:Khối lượng}} ghi "Chưa đầy đủ"). Thông báo:

| Thông báo | Cách sửa |
|---|---|
| Nhập công thức, ví dụ L hoặc ceil(L / 1.333) + 1. | Công thức để trống. |
| "X" không phải là giá trị đo được ở đây. Dùng … | Dùng một trong các biến đã liệt kê. |
| "X" không phải là hàm ở đây. Dùng ceil, floor, round, min, max, abs. | Dùng một trong các hàm đó. |
| "#" không được dùng trong công thức. | Xóa ký tự đó (đơn vị, `%`, `$` và `=` không được dùng). |
| Thiếu ")". / Có ")" không có "(" tương ứng. | Cân bằng dấu ngoặc. |
| Thiếu giá trị trước ")". | Ví dụ như `max(1, )`: điền giá trị vào. |
| Công thức kết thúc quá sớm. | Ví dụ như `L *`: hoàn thành nó. |
| Không mong đợi "…". Thiếu toán tử? | Hai giá trị đặt cạnh nhau, như `2L`: viết `2 * L`. |
| ceil() nhận 1 giá trị. | Đưa cho hàm đúng số giá trị. |
| round(x, digits) cần số chữ số nguyên từ 0 đến 10. | Dùng số nguyên các chữ số thập phân. |
| Công thức chia cho không. | Thường H bằng 0: đặt chiều cao hoặc chiều sâu của hạng mục. |
| Công thức không cho ra một số. | Kết quả quá lớn để là một số. |
| Công thức đó quá dài (tối đa 500 ký tự). | Rút ngắn nó. |

## An toàn theo thiết kế

Công thức chỉ có thể thực hiện phép tính số học với các biến và hàm nêu trên. Nó không thể chạy mã hay đọc bất cứ thứ gì khác, nên công thức trong tệp dự án mà ai đó gửi cho bạn là vô hại.
