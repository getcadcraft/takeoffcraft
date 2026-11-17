---
title: Ghi chú, đám mây và tô sáng
summary: Đánh dấu câu hỏi và thay đổi trên các tờ bằng ghi chú, đám mây sửa đổi và tô sáng; theo dõi từng mục là đang mở, đã trả lời hoặc đã đóng; và gửi chúng trong PDF đã đánh dấu.
keywords: đánh dấu, ghi chú, bình luận, câu hỏi, rfi, đám mây, đám mây sửa đổi, tô sáng, trạng thái, đang mở, đã trả lời, đã đóng, xem lại, danh sách đánh dấu
from: 2b395c13
---

Đánh dấu dùng để ghi nhớ hoặc hỏi những điều cần lưu ý khi bóc tách: "xác nhận loại tường nền", một đám mây sửa đổi quanh bức tường đã thay đổi, một ghi chú được tô sáng trên mặt bằng. Chúng nằm trên tờ với một trạng thái, được liệt kê ở một nơi, và được in trong PDF đã đánh dấu. Chúng **không bao giờ được tính**: không có khối lượng, không có chi phí.

## Thêm một đánh dấu

Mở {{ui:Đánh dấu}} trên thanh phía trên tờ và chọn:

| Đánh dấu | Cách làm |
|---|---|
| {{ui:Ghi chú}} | Nhấp chỗ cần đặt, gõ ghi chú, chọn {{ui:Thêm}}. Nó hiển thị như một ghim tròn với dòng đầu tiên bên cạnh. |
| {{ui:Đám mây}} | Nhấp một góc, rồi góc đối diện, và gõ ghi chú (hoặc để trống). Một đám mây sửa đổi hình răng cưa sẽ bao quanh hộp. |
| {{ui:Tô sáng}} | Nhấp hai góc: một hộp vàng trong suốt, kèm ghi chú nếu bạn muốn. |

{{key:Esc}} sau góc đầu tiên sẽ hủy. Công cụ vẫn bật cho lần tiếp theo; {{key:V}} quay về {{ui:Chọn}}.

## Trạng thái và chỉnh sửa

Nhấp một đánh dấu bằng {{ui:Chọn}} để chọn nó. Bảng bên phải hiển thị **Đánh dấu**: loại và tờ của nó, **Trạng thái** của nó — Đang mở, Đã trả lời hoặc Đã đóng — và nội dung văn bản, bạn có thể thay đổi. {{key:Delete}} (hoặc {{ui:Xóa}}) sẽ gỡ nó; {{key:Mod+Z}} sẽ khôi phục lại.

Ghim của ghi chú có màu cam khi đang mở, màu xanh dương khi đã trả lời và màu xám khi đã đóng; một đám mây đã đóng chuyển sang màu xám.

## Danh sách

**Các đánh dấu** trong bảng bên phải liệt kê mọi đánh dấu của bóc tách cùng trạng thái của chúng, và cho biết còn bao nhiêu cái đang mở. Đánh dấu **Chỉ đang mở** để xem những gì còn phải giải quyết. Nhấp một hàng để chuyển đến tờ của nó và chọn nó.

## Chia sẻ

- {{ui:PDF đã đánh dấu}} vẽ chúng lên các trang: tô sáng, đám mây và ghim, mỗi cái kèm một hộp ghi trạng thái bằng chữ hoa (ĐANG MỞ, ĐÃ TRẢ LỜI, ĐÃ ĐÓNG) và nội dung văn bản. Một trang có đánh dấu nhưng không có dấu bóc tách vẫn được đưa vào.
- {{ui:XLSX}} thêm một bảng tính **Đánh dấu**: tờ, loại, trạng thái và văn bản, mỗi đánh dấu một hàng.
- Chúng được lưu trong `.takeoff.json` và trong [PDF có chứa bóc tách bên trong](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
