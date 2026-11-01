---
title: Các tệp TakeoffCraft mở và lưu
summary: PDF vào, tệp dự án bóc tách, bảng tính và PDF đã đánh dấu ra - mỗi loại chứa gì, đi đâu, và điều gì thay đổi khi trực tuyến, ngoại tuyến và giữa các trình duyệt.
keywords: tệp, định dạng, pdf, takeoff.json, tệp dự án, xlsx, csv, pdf đã đánh dấu, tải xuống, lưu, mở, ngoại tuyến
from: 1bf9be65
---

## Nó mở những gì

| Tệp | Cách làm | Ghi chú |
|---|---|---|
| PDF (`.pdf`) | {{ui:Mở bản vẽ}}, {{key:Mod+O}}, hoặc thả lên trang | Mở nhiều tệp cùng lúc. Mỗi trang trở thành một tờ. |
| Dự án bóc tách (`.takeoff.json`) | {{ui:Mở bóc tách}}, hoặc thả lên trang | Các hạng mục, tỷ lệ và dấu của bạn. Bạn có thể thả nó cùng các PDF của nó. |

Các tệp khác thả lên trang sẽ bị bỏ qua, và thanh trạng thái nêu tên chúng.

- **PDF được bảo vệ bằng mật khẩu** không mở được: "(name) được bảo vệ bằng mật khẩu. Hãy mở một bản sao không có mật khẩu."
- **Cùng một PDF hai lần** chỉ được mở một lần: "(name) đã được mở." TakeoffCraft nhận biết tệp theo nội dung, không theo tên.
- **PDF quét** mở và đo như mọi PDF khác; TakeoffCraft không cần văn bản trong PDF.
- **Các bộ bản vẽ lớn**: mọi PDF được đọc đầy đủ khi mở (để lấy dấu vân tay), nên một tệp rất lớn mất một lúc. Ảnh thu nhỏ được vẽ từng cái một khi bạn cuộn.

## Nó lưu những gì

Mỗi lần lưu là một lần tải xuống. Không có gì được ghi ngược vào PDF của bạn.

| Bạn chọn | Bạn nhận được | Có gì trong đó |
|---|---|---|
| {{ui:Lưu bóc tách}} | `(name).takeoff.json` | Hạng mục, định mức, đơn giá, tỷ lệ tờ và mọi dấu, gắn với từng PDF theo nội dung của nó. Không có trang PDF. |
| {{ui:XLSX}} | `(name).xlsx` | Bốn trang tính: Dự toán (có công thức sống), Theo tờ, Dấu, Tỷ lệ. |
| {{ui:CSV}} | `(name).csv` | Dự toán dưới dạng giá trị thuần, mỗi hạng mục và thành phần một hàng. |
| {{ui:PDF đã đánh dấu}} | `(PDF name) (takeoff).pdf` | Một bản sao của mỗi PDF đang mở có dấu, với bóc tách được vẽ trên các trang của nó và một chú giải. Mỗi PDF một tệp. |

Tên lấy từ PDF đầu tiên bạn mở trong bóc tách này. Chưa có ô đổi tên: hãy đổi tên tệp đã tải xuống nếu bạn muốn tên khác.

Xem [Xuất dự toán và PDF đã đánh dấu](topic:export-estimate) và [Các cột xuất](topic:export-columns).

## Các tệp tải xuống đi đâu

Trình duyệt lưu chúng ở nơi nó lưu mọi tệp tải xuống, thường là thư mục Tải xuống. Tìm nó trong {{pick:mac=Finder|windows=File Explorer|linux=trình quản lý tệp của bạn}}. Nếu trình duyệt của bạn được đặt để hỏi nơi lưu từng tệp, nó sẽ hỏi.

:::chromium
{{ui:PDF đã đánh dấu}} với nhiều PDF có dấu tải xuống nhiều tệp cùng lúc. Chrome và Edge có thể hỏi một lần liệu trang này có được tải xuống nhiều tệp hay không. Hãy chọn Cho phép.
:::

:::safari
Safari lưu vào Tải xuống trừ khi bạn đã đổi vị trí tải xuống trong Cài đặt Safari, ở mục Chung.
:::

## Vì sao tệp dự án và các PDF tách riêng

Tệp `.takeoff.json` chỉ chứa bóc tách của bạn. Nó tìm lại các PDF của mình theo nội dung (một dấu vân tay của mỗi tệp), nên:

- Đổi tên hoặc di chuyển một PDF không sao cả.
- Một PDF đã bị chương trình khác thay đổi hoặc lưu lại được tính là một tệp khác, dù cùng tên.
- Các dấu trên PDF chưa mở vẫn được tính vào tổng.

Xem [Lưu và mở lại một bóc tách](topic:save-and-reopen).

## Trực tuyến và ngoại tuyến

PDF và bóc tách của bạn không bao giờ rời khỏi máy tính, dù trực tuyến hay ngoại tuyến. Kết nối chỉ quan trọng khi tải chính TakeoffCraft.

Để làm việc khi không có kết nối, hãy lưu ứng dụng trước, khi bạn đang trực tuyến:

1. Chọn {{ui:Lưu để dùng ngoại tuyến}} trên thanh ứng dụng ở trên cùng.
   Nút đếm lên, "Đang lưu 12 trên 40", trong khi lưu.
2. Đợi {{ui:Sẵn sàng ngoại tuyến}}.

Lưu TakeoffCraft giữ ứng dụng, phần trợ giúp này, trình đọc PDF, bộ ghi PDF dùng cho {{ui:PDF đã đánh dấu}} và tiến trình đếm tự động trong trình duyệt của bạn, khoảng 6 MB. Khi nó ghi {{ui:Sẵn sàng ngoại tuyến}}, mọi thứ chạy được ngoại tuyến: mở PDF, đo, {{ui:Đếm tự động}}, {{ui:Lưu bóc tách}}, {{ui:XLSX}}, {{ui:CSV}} và {{ui:PDF đã đánh dấu}}.

| Nút ghi | Ý nghĩa |
|---|---|
| {{ui:Lưu để dùng ngoại tuyến}} | Chưa được lưu trong trình duyệt này. Chọn nó để lưu. |
| Đang lưu (n) trên (m) | Đang lưu. |
| {{ui:Sẵn sàng ngoại tuyến}} | Đã lưu. Chọn nó để có {{ui:Lưu lại (lấy bản mới nhất)}} hoặc {{ui:Xóa bản ngoại tuyến}}. |
| {{ui:Không thể lưu}} | Một số tệp chưa tải xuống được. Kiểm tra kết nối và chọn lại. |
| {{ui:Không dùng được chế độ ngoại tuyến}} | Cửa sổ trình duyệt này không giữ được bản sao ngoại tuyến (cửa sổ riêng tư và một số máy tính được quản lý chặn việc này). |

Thêm, gồm cả bản đã lưu tồn tại bao lâu trong từng trình duyệt: [Làm việc ngoại tuyến](common:offline).

:::offline
Bạn đang ngoại tuyến. Nếu thanh ứng dụng hiện {{ui:Sẵn sàng ngoại tuyến}}, mọi thứ đều chạy. Nếu không, những phần TakeoffCraft chưa tải trong thẻ này (bộ ghi PDF cho {{ui:PDF đã đánh dấu}}, tiến trình đếm tự động) không thể tải lúc này, và {{ui:PDF đã đánh dấu}} dừng với thông báo "Không thể ghi PDF đã đánh dấu". Dù thế nào, bóc tách của bạn vẫn an toàn: {{ui:Lưu bóc tách}}, {{ui:XLSX}} và {{ui:CSV}} không cần kết nối. Đừng tải lại thẻ cho đến khi bạn trực tuyến trở lại.
:::

:::online
Bạn đang trực tuyến. Trước một chuyến đi công trường hay một chuyến bay, hãy chọn {{ui:Lưu để dùng ngoại tuyến}} và đợi {{ui:Sẵn sàng ngoại tuyến}}.
:::

## Bảng tính

XLSX giữ các công thức sống, nên một chương trình bảng tính tính lại dự toán khi mở tệp và giữ nó đúng khi bạn đổi đơn giá hay hao hụt tại đó. Sổ làm việc đã được kiểm tra trong LibreOffice Calc, nơi mọi tổng được tính lại đến từng xu giống nhau. Nó chưa được mở trong Excel.

CSV là giá trị thuần kèm dấu thứ tự byte, nên các chương trình bảng tính đọc đúng các ký tự như m².

## Máy tính để bàn và đám mây

:::desktop
Từ 0.5, ứng dụng máy tính để bàn là CadCraft Studio: TakeoffCraft và bảy ứng dụng khác trong một lần cài. Không có trình cài đặt TakeoffCraft riêng.
:::

Lưu lên đám mây chưa có. Hãy giữ các tệp `.takeoff.json` cùng các PDF của công việc, và sao lưu chúng như mọi tệp khác. Xem [Tệp của bạn đi đâu](common:your-files).
