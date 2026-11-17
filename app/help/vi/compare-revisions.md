---
title: So sánh một tờ đã sửa và chuyển bóc tách
summary: Đặt bản cũ chồng lên bản đã sửa, căn chỉnh chúng, xem điều gì đã thay đổi, và chuyển bóc tách sang tờ mới, với các dấu cần kiểm tra được đánh cờ.
keywords: sửa đổi, đã sửa, so sánh, chồng lớp, cũ, mới, thay đổi, phụ lục, thông báo, phát hành lại, chuyển bóc tách, chuyển, mang sang, căn chỉnh, được đánh cờ, kiểm tra
from: 3a1d9fe0
---

Khi một tờ được phát hành lại, bạn không phải bóc tách lại từ đầu. Mở PDF cũ và PDF mới, so sánh hai tờ, và chuyển bóc tách sang. TakeoffCraft đánh cờ mọi dấu mà bản vẽ đã thay đổi, để bạn kiểm tra những dấu đó và giữ phần còn lại.

## So sánh

1. Mở cả hai PDF: bộ cũ và bộ đã sửa ({{ui:Open plans}}; chúng có thể nằm trong một tệp hoặc nhiều tệp).
2. Hiển thị tờ **mới**.
3. Chọn {{ui:Compare}} trên thanh tờ dưới bản vẽ.
4. Chọn tờ cũ trong danh sách. TakeoffCraft gợi ý tờ có cùng số trong PDF kia, hoặc cùng trang. Chọn **So sánh**.

Bản vẽ cũ giờ nằm chồng lên bản mới bằng màu đỏ. Nơi hai bản trùng nhau, các đường đỏ nằm trên các đường đen; nơi chúng khác nhau, bạn thấy các đường đỏ đơn độc (đã xóa) và các đường đen đơn độc (đã thêm). Một thanh ở cuối tờ chứa các bước bên dưới; {{key:Esc}} hoặc {{ui:Close}} kết thúc việc so sánh.

## Căn chỉnh

Các tờ phát hành lại thường được in hơi lệch: bị dịch chuyển trên trang, hoặc có kích thước hơi khác. Nếu bản vẽ đỏ không khớp với bản đen, hãy chọn **Căn theo hai điểm** và nhấp bốn lần:

1. một điểm trên bản vẽ cũ (đỏ), như tâm cột hoặc góc công trình,
2. cùng điểm đó trên bản vẽ mới (đen),
3. một điểm thứ hai trên bản vẽ đỏ, cách xa điểm đầu,
4. cùng điểm đó trên bản vẽ đen.

Bản vẽ đỏ dịch chuyển, xoay và co giãn để khớp với bản đen. Thanh trạng thái cho biết bản vẽ mới lớn hơn bao nhiêu ("kích thước × 1.000" khi giống nhau). Hãy phóng to khi chọn điểm: nhấp càng gần, khớp càng tốt.

## Tìm thay đổi

Chọn **Tìm thay đổi**. TakeoffCraft so sánh nét vẽ của hai bản: nét chỉ có trên tờ cũ chuyển thành màu đỏ, nét chỉ có trên tờ mới chuyển thành màu xanh dương, và thanh trạng thái đếm chúng. Các đường chỉ dịch chuyển một chút (do in lại) không được tính là thay đổi.

Công cụ cũng xem từng dấu trên tờ cũ và đếm những dấu nằm ở chỗ bản vẽ đã thay đổi:

- một đoạn hoặc một diện tích khi bản vẽ thay đổi tại một đầu hoặc một góc của nó, hoặc dọc theo ít nhất khoảng một phần sáu chiều dài;
- một số đếm khi có thứ gì đó thay đổi ngay cạnh nó.

## Chuyển bóc tách

Chọn **Chuyển bóc tách vào đây**. Mọi dấu trên tờ cũ được chuyển sang tờ mới, qua phép căn chỉnh, trong một bước hoàn tác. Các dấu nằm cạnh một thay đổi được đánh cờ: chúng được vẽ với viền cam, và thanh tờ hiển thị "(n) cần kiểm tra".

Nếu tờ mới chưa có tỷ lệ, nó lấy tỷ lệ của tờ cũ (được điều chỉnh khi các bản vẽ phải co giãn để khớp). Nếu nó đã có một tỷ lệ khác, TakeoffCraft hỏi trước: các dấu được chuyển sẽ được đo theo tỷ lệ của tờ mới.

## Kiểm tra các dấu được đánh cờ

1. Chọn "(n) cần kiểm tra" trên thanh tờ. Công cụ phóng đến dấu được đánh cờ tiếp theo và chọn nó; bảng của nó cho biết lý do bị đánh cờ.
2. Sửa dấu nếu bản vẽ đã thay đổi bên dưới nó (kéo các góc, thêm hoặc xóa dấu, hoặc bỏ đi và đánh dấu lại).
3. Chọn **Đã kiểm tra** trong bảng của nó. Cờ được gỡ, và số trên thanh tờ giảm xuống.

Các cờ được lưu cùng với bóc tách, nên bạn có thể kiểm tra chúng sau.

:::note
So sánh hoạt động với PDF vector cũng như với bản quét, vì nó so sánh những gì được vẽ. Một bản quét bị nghiêng hoặc kéo giãn có thể chỉ khớp tương đối bằng hai điểm; khi đó hãy kiểm tra thêm các dấu bằng mắt.
:::
