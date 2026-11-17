---
title: Đơn vị
summary: Các đơn vị mà một hạng mục có thể báo cáo, các đơn vị mà biến công thức của nó dùng, và cách hệ Anh và hệ mét kết hợp với nhau.
keywords: đơn vị, units, lf, sf, sy, sq, yard vuông, ô lợp mái, squares, mẫu Anh, acres, héc-ta, hectares, mét, mét vuông, ea, mỗi cái, hệ mét, hệ Anh, chuyển đổi, đơn vị mặc định
from: b7bf0528
---

## Đơn vị hạng mục

| Loại hạng mục | Đơn vị | Tên |
|---|---|---|
| Tuyến tính | LF | linear feet (mặc định) |
| Tuyến tính | m | mét |
| Diện tích | SF | square feet (mặc định) |
| Diện tích | SY | yard vuông |
| Diện tích | SQ | ô lợp mái (100 feet vuông) |
| Diện tích | ac | mẫu Anh |
| Diện tích | m² | mét vuông |
| Diện tích | ha | héc-ta |
| Đếm | EA | mỗi cái |

Đổi bằng {{ui:Đơn vị}} trong trình chỉnh sửa hạng mục bất cứ lúc nào, kể cả sau khi đo; khối lượng được chuyển đổi ngay.

Danh sách {{ui:Đơn vị}} hiện các đơn vị được bật trong {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Đơn vị}}, và luôn có đơn vị riêng của hạng mục. Hạng mục mới bắt đầu với đơn vị chiều dài hoặc diện tích được đánh dấu sao ở đó, khi nó là một trong các đơn vị của hạng mục; nếu không thì bắt đầu với LF hoặc SF. Xem [Đơn vị, giá trị nhập và danh sách đơn vị](common:unit-lists).

## Đơn vị của biến công thức

| Đơn vị hạng mục | L, P, H | A |
|---|---|---|
| LF | feet | feet vuông (diện tích tường) |
| m | mét | mét vuông (diện tích tường) |
| SF | feet | feet vuông |
| SY | feet | yard vuông |
| SQ | feet | ô |
| ac | feet | mẫu Anh |
| m² | mét | mét vuông |
| ha | mét | héc-ta |

Với hạng mục SY, `A` tính bằng yard vuông trong khi `P` và `H` vẫn bằng feet. Thể tích từ hạng mục SY là `A * 9 * H / 27` yard khối; dùng SF cho sàn sẽ đơn giản hơn.

## Nơi đơn vị được cố định

Một số chỉ số luôn dùng feet:

- chỉ số trực tiếp trên thanh trạng thái khi đang vẽ (feet-inches, SF),
- **Dấu đã chọn** (feet-inches, LF và SF),
- kết quả kiểm tra (feet-inches, với feet thập phân và mét),
- chiều dài đoạn và chu vi trong trang tính Dấu của bảng tính (feet-inches).

Tổng hạng mục, bảng {{ui:Khối lượng}}, công thức và trang tính Dự toán dùng đơn vị riêng của hạng mục.

## Tỷ lệ và đơn vị là riêng biệt

Tỷ lệ của tờ cho biết bản vẽ lớn cỡ nào; đơn vị của hạng mục cho biết cách báo cáo nó. Một bản vẽ hệ mét ở 1:100 có thể bóc tách bằng LF, và một bản vẽ hệ Anh bằng m². Hiệu chuẩn chấp nhận mọi đơn vị: 24'-6", 7.5 m, 7500 mm.

## Độ chính xác

TakeoffCraft đo chính xác từ các điểm bạn nhấp, kể cả chiều dài và diện tích cung thực, và không làm tròn khối lượng. Hiển thị làm tròn chiều dài đến 1/16 inch và số thập phân đến hai chữ số. Tiền chỉ được làm tròn ở các thành tiền, đến xu.
