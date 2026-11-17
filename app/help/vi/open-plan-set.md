---
title: Bắt đầu bóc tách và mở bộ bản vẽ
summary: Mở một hoặc nhiều PDF như một bộ bản vẽ, tìm đường trong các tờ và di chuyển giữa chúng.
keywords: mở, bộ bản vẽ, nhiều pdf, nhiều tệp, tờ, bản vẽ, nhãn trang, danh sách tờ, điều hướng, thả, bàn giao, mở trong ứng dụng khác, đánh dấu
from: ed434468
---

Một bộ bản vẽ thường gồm nhiều PDF: kiến trúc, kết cấu, cơ điện. TakeoffCraft mở chúng cạnh nhau thành một danh sách tờ duy nhất, và một bóc tách có thể bao gồm tất cả.

## Mở các PDF

1. Chọn {{ui:Mở bản vẽ}} trong nhóm {{ui:Tệp}}, hoặc nhấn {{key:Mod+O}}. (Các kiểu menu khác gọi nó là {{ui:Mở PDF…}}.)
2. Trong hộp thoại tệp, chọn mọi PDF của bộ. Giữ {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} để chọn nhiều tệp, hoặc {{key:Shift}} để chọn một dải.
3. Chọn Mở.
   Thông báo "Đang mở (tên)…" hiện trong khi mỗi tệp được đọc. Sau đó mọi trang xuất hiện dưới {{ui:Tờ}}, và trang đầu tiên của PDF mới đầu tiên được mở.

Bạn cũng có thể kéo các PDF từ {{pick:mac=Finder|windows=File Explorer|linux=trình quản lý tệp của bạn}} và thả vào bất kỳ đâu trên TakeoffCraft. Khung "Thả PDF, bản vẽ DWG hoặc DXF, hoặc một tệp .takeoff.json" hiện lên khi bạn đang kéo.

Để thêm PDF sau này, làm lại như vậy. Các PDF đã mở sẽ được bỏ qua.

Màn hình bắt đầu cũng liệt kê các PDF và bóc tách bạn đã mở gần đây, trong các trình duyệt cho phép trang mở lại tệp (Chrome và Edge). Nhấp vào một mục để mở; trình duyệt có thể hỏi quyền trước. Xem [Tệp của bạn](common:your-files).

:::note
Không có gì được tải lên. Trình duyệt đọc các PDF trên máy tính của bạn, và chúng biến mất khỏi TakeoffCraft khi bạn đóng thẻ hoặc chọn {{ui:Mới}}.
:::

## Bản vẽ bên cạnh PDF

{{ui:Mở bản vẽ}} cũng nhận bản vẽ DWG và DXF, đi một mình hoặc cùng với PDF: không gian mô hình và các bố cục của mỗi bản vẽ trở thành tờ trong cùng danh sách. Xem [Mở bản vẽ DWG hoặc DXF](topic:open-a-drawing), rồi [Đếm từ bản vẽ](topic:count-from-a-drawing).

## PDF được bàn giao từ ứng dụng khác

Một ứng dụng khác trong bộ có thể giao cho bạn PDF mà nó đang mở: nó mở TakeoffCraft trong thẻ mới và PDF mở ra ở đó như thể bạn đã thả nó vào. Thanh trạng thái hiển thị "Đã mở (tên), được bàn giao từ (ứng dụng). Tệp gốc không thay đổi." Không có gì được tải lên; tệp đi qua bộ nhớ riêng của trình duyệt này và biến mất khỏi đó khi đã mở xong.

Nếu thanh trạng thái báo PDF "chưa đến", thẻ đã chờ quá lâu, hoặc PDF đã được mở trong thẻ khác: hãy mở nó bằng {{ui:Mở bản vẽ}}.

Chiều ngược lại: khi MarkupCraft chạy trên máy bạn và có thể nhận tệp, thanh tờ dưới bản vẽ có nút {{ui:MarkupCraft}}: nó mở PDF của tờ trên màn hình trong MarkupCraft, trong thẻ mới, để xem xét và đánh dấu.

## Tìm tờ

- Cuộn danh sách {{ui:Tờ}} bên trái và nhấp vào một tờ.
- Gõ vào **Tìm tờ** ở đầu danh sách để lọc theo số tờ, tên tệp hoặc nhãn trang. Số đếm cạnh {{ui:Tờ}} hiển thị "3 trên 40" khi bộ lọc đang bật.
- Nhấn {{key:PageDown}} để sang tờ kế tiếp và {{key:PageUp}} để về tờ trước. Chúng theo danh sách đã lọc.

:::mac
Trên bàn phím Mac không có phím Page Up và Page Down, hãy nhấn fn cùng phím mũi tên lên hoặc xuống.
:::

## Cách đặt tên tờ

- Trang mà PDF gán cho nhãn, như `A-101`, được đặt tên theo nhãn đó.
- Trang không có nhãn (hoặc nhãn chỉ là số trang) được đặt tên "(tên tệp), trang (n)".
- Khi mở nhiều PDF, các tờ có nhãn cũng mang tên tệp: "A-101 — Architectural".

Tên tờ chưa thể nhập bằng tay.

## Xem quanh tờ

- Lăn chuột để thu phóng tại con trỏ.
- Kéo bằng nút trái hoặc nút giữa để di chuyển khung nhìn. Với {{ui:Đếm tự động}}, hoặc khi bạn bắt đầu tại góc của một dấu, giữ {{key:Space}} khi kéo, hoặc kéo bằng nút giữa.
- Nhấn {{key:F}} hoặc chọn {{ui:Vừa trang}} để thấy toàn bộ tờ; {{key:W}} hoặc {{ui:Vừa chiều rộng}} để vừa chiều rộng của tờ.
- Nhấn {{key:Plus}} hoặc {{key:=}} để phóng to và {{key:Minus}} để thu nhỏ, quanh giữa khung nhìn.

Mỗi tờ nhớ mức thu phóng và vị trí riêng của nó trong khi tờ vẫn mở.

## Tiếp theo

Trước khi đo một tờ, tờ cần có tỷ lệ: [Đặt tỷ lệ](topic:set-the-scale).
