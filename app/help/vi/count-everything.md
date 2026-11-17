---
title: Đếm tất cả trong bộ bản vẽ
summary: Khoanh một lần bảng chú giải ký hiệu và TakeoffCraft đếm mọi ký hiệu trong đó trên mọi tờ đang mở trong một lượt chạy. Mỗi số đếm là một liên kết đến tờ của nó, và bạn xem lại trước khi thêm vào.
keywords: đếm tất cả, chú giải, bảng chú giải ký hiệu, toàn bộ bộ bản vẽ, mọi tờ, tất cả các tờ, mọi cửa, mọi thiết bị, thiết bị, bảng thống kê, ký hiệu, đếm tự động, đếm tất cả, bộ bản vẽ, 200 tờ, mức khớp, giống nhau
from: adc99744
---

{{ui:Count everything}} đọc một bảng chú giải ký hiệu rồi đếm từng ký hiệu trong đó trên mọi tờ đang mở. Đây là {{ui:Auto count}} cho cả một bảng chú giải cùng lúc. Đây là đối chiếu ký hiệu đơn thuần trên các tờ của bạn, không phải mô hình đã được huấn luyện, và không có gì rời khỏi máy tính của bạn. Hãy xem lại số đếm trước khi thêm chúng: đây là công cụ hỗ trợ, không phải sự đảm bảo.

## Đếm một bảng chú giải

1. Mở bản vẽ. Một bảng chú giải trên bất kỳ tờ nào cũng được: các ký hiệu với tên của chúng bên cạnh.
2. Chọn {{ui:Count everything}} trên thanh công cụ.
3. Kéo một khung bao quanh bảng chú giải, gồm ký hiệu và tên. Một tiêu đề không có ký hiệu bên cạnh (SYMBOL LEGEND) sẽ bị bỏ ra riêng.
   Bảng liệt kê từng ký hiệu với hình của nó và tên được in bên cạnh. Tên trở thành tên của hạng mục, nên bạn có thể đổi tên ở đây nếu muốn.
4. Bỏ chọn các ký hiệu bạn không muốn đếm. Một ký hiệu không thể tìm kiếm (quá nhỏ, hoặc trống) sẽ nêu lý do.
5. Chọn {{ui:Count on N sheets}}. Một thanh hiển thị tờ đang được tìm; {{ui:Cancel}} dừng lượt chạy. Trang vẫn dùng được.

Các ký hiệu của chính bảng chú giải không được đếm trên tờ của nó. Một tờ vẽ ở tỷ lệ khác sẽ được tìm ở tỷ lệ đó, và các ký hiệu được tìm dù xoay theo bất kỳ góc vuông nào.

## Xem lại số đếm

- Mỗi ký hiệu hiển thị tổng số của nó và, ngay bên dưới, một liên kết cho mỗi tờ có ký hiệu ("E-103: 4"). Nhấp để chuyển đến tờ đó. Các kết quả tìm được được khoanh bằng màu của hạng mục.
- **Nhấp một khung** để loại kết quả đó ra. Nó chuyển thành nét đứt và gạch chéo; nhấp lại để đưa nó về.
- **Di chuyển mức khớp** (50% đến 100%, bắt đầu từ mức trong Cài đặt của bạn). Mức cao hơn chỉ giữ các khớp gần. Thanh trượt chỉ lọc những gì đã tìm thấy; không có tìm kiếm lại nào.
- Hai ký hiệu trông giống nhau (ổ đôi và ổ bốn) có thể khớp cùng một vị trí. Khớp tốt hơn sẽ nhận nó, và bảng cho biết có bao nhiêu vị trí như vậy, để bạn kiểm tra.
- Một tờ quá lớn để tìm ở kích thước của ký hiệu sẽ bị bỏ qua, và bảng nói rõ điều đó.

## Thêm chúng

Chọn {{ui:Add N marks}}. Mỗi ký hiệu thành một hạng mục đếm với một dấu tại mỗi kết quả tìm được. Một tên đã là hạng mục đếm của bạn sẽ được dùng lại (không có gì bị nhân đôi ở nơi bạn đã đánh dấu bằng tay). Toàn bộ lượt chạy là một bước: {{key:Ctrl+Z}} lấy lại mọi hạng mục và dấu.

Những gì bạn chấp nhận cũng đưa vào {{ui:Learned}}: các ký hiệu được ghi nhớ trong tệp bóc tách cho lần sau.

## Với trợ lý của bạn

Nếu bạn cho phép trợ lý trong Cài đặt, họ có thể đọc bảng chú giải (legend_open), chạy đếm ở nền (legend_count_start, rồi legend_count_status), đọc kết quả đếm (legend_count_result) và thêm chúng (legend_count_add, có thể xem trước những gì sẽ được thêm trước). Đó là cùng lượt chạy bạn thấy trong bảng.

## Ký hiệu ở mọi góc

Đánh dấu {{ui:Symbols at any angle}} trước khi đếm để cũng tìm các ký hiệu vẽ ở góc không phải góc vuông (một tắc kê chéo, một thiết bị xoay theo mái). Khi đó việc tìm kiếm xoay mỗi ký hiệu mỗi 15 độ; một ký hiệu tròn vẫn chỉ cần một lần tìm, và ký hiệu không tròn có thể mất gấp sáu lần thời gian. Hãy tắt tùy chọn này khi bản vẽ vẽ theo góc vuông.

## Cần biết

- Cần các ký hiệu được vẽ giống cách trong bảng chú giải. Bảng chú giải vẽ ở kích thước khác với các tờ vẫn được, khi tỷ lệ của các tờ đã đặt; không có tỷ lệ thì các ký hiệu được tìm theo kích thước của bảng chú giải.
- Một ký hiệu có tường hoặc đường dài đi xuyên qua có thể bị bỏ sót, vì nó không còn giống hình trong bảng chú giải. Hãy kiểm tra các kết quả trên tờ đầu tiên trước khi tin các tờ còn lại.
- Bản quét không có chữ vẫn hoạt động: các ký hiệu được tìm theo hàng của chúng, và bạn tự gõ tên.
