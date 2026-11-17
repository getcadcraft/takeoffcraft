---
title: Đưa bảng thống kê thẻ vào làm khối lượng
summary: Bảng thống kê thẻ xuất từ mô hình công trình (CSV) trở thành các khối lượng có kiểu trong bóc tách, mỗi thẻ một khối lượng, để số đếm và diện tích của mô hình nằm cạnh những gì bạn đã đo.
keywords: thẻ, bảng thống kê thẻ, tag schedule, mô hình công trình, building model, bimcraft, ifc, khối lượng, quantities, csv, bảng thống kê, nhập, khối lượng có kiểu
from: a60c19b6
---

{{ui:Thẻ gắn}} trên thanh công cụ đưa vào một bảng thống kê thẻ mà BimCraft đã lưu dưới dạng tệp CSV. Mỗi thẻ riêng biệt trở thành một khối lượng có kiểu, cùng loại với khối đào và đắp mà CivilCraft tạo ra.

1. Trong BimCraft, tạo bảng thống kê thẻ bạn cần và lưu thành CSV.
2. Chọn {{ui:Thẻ gắn}} và chọn tệp.
3. Chỉ định cột đặt tên cho dòng ({{ui:Đặt tên dòng theo}}, thường là thẻ) và cột chứa số ({{ui:Khối lượng lấy từ}}). Với {{ui:Đếm số hàng}}, mỗi dòng được tính là một.
4. Chọn đơn vị. Chiều dài tính bằng milimét được đổi thành mét khi {{ui:Nhân với}} 0.001.
5. {{ui:Thêm các khối lượng}}.

Các dòng cùng thẻ được cộng lại với nhau. Ô không phải là số bị bỏ qua và được đếm trong phần tóm tắt. Đưa cùng bảng thống kê vào lần nữa sẽ cập nhật các khối lượng bạn đã có thay vì thêm mới; tên, đơn giá và hao hụt của chúng vẫn thuộc về bạn.

## Điều cần biết

Khối lượng có kiểu không được đo trên tờ bản vẽ nên không có dấu. Không có gì được gửi đi đâu; tệp được đọc ngay tại đây.
