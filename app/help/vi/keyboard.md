---
title: Bàn phím và chuột
summary: Mọi thao tác phím, chuột, bàn di chuột và cảm ứng trong TakeoffCraft, được nhóm lại, kèm sự khác biệt giữa các nền tảng.
keywords: phím, phím tắt, phím nóng, bàn phím, chuột, bàn di chuột, cảm ứng, di chuyển khung nhìn, thu phóng, con lăn, nhấp chuột phải, nhấp đúp, Space, Shift, sao chép, dán, cắt, nhân bản, chọn tất cả
from: 6f2c441d
---

Các phím chữ hoạt động khi con trỏ ở bất kỳ đâu trên trang và bạn không đang gõ trong một ô nhập. Khi một hộp thoại đang mở, các phím của hộp thoại đó được áp dụng. Phím chữ hoạt động có hoặc không giữ {{key:Shift}}.

## Công cụ

| Phím | Công cụ |
|---|---|
| {{key:V}} | {{ui:Chọn}} |
| {{key:L}} | {{ui:Tuyến tính}} |
| {{key:A}} | {{ui:Diện tích}} |
| {{key:O}} | {{ui:Vòng tròn}} |
| {{key:B}} | {{ui:Phòng}} (lấp đầy một phòng bằng một lần nhấp) |
| {{key:R}} | {{ui:Cung tròn}} bật hoặc tắt (trong Tuyến tính, Diện tích và Lỗ khoét) |
| {{key:E}} | {{ui:Khấu trừ}} bật hoặc tắt: các đoạn thẳng tiếp theo của một đoạn được vẽ nhưng không được tính |
| Một chữ số, `@` hoặc `#` khi đang vẽ | Mở hộp {{ui:Nhập}}: gõ độ dài hoặc tọa độ, {{key:Enter}} đặt điểm ([Đo các đoạn tuyến tính](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Lỗ khoét}} (chọn một vùng trước) |
| {{key:C}} | {{ui:Đếm}} |
| {{key:S}} | {{ui:Đếm tự động}} |
| {{key:K}} | {{ui:Hiệu chuẩn}} |
| {{key:D}} | {{ui:Kiểm tra}} tỷ lệ |

## Khi đang vẽ

| Phím hoặc thao tác | Tác dụng |
|---|---|
| Nhấp | Đặt một điểm (một chấm, khi dùng Đếm). |
| {{key:P}} | Đường dẫn: chọn toàn bộ đường nối liền của một đường PDF, hoặc đường bao quanh chỗ nhấp ([Chọn các đường của PDF](topic:pick-the-lines)). |
| {{key:F3}} | Bật hoặc tắt bắt điểm vào các đường của bản vẽ ([Bắt điểm vào các đường của bản vẽ](topic:snap-to-the-drawing)). |
| Giữ {{key:Shift}} khi nhấp | Bắt đoạn thẳng về 0°, 45°, 90° hoặc 135° so với điểm trước. Không áp dụng cho điểm cung tròn hoặc vòng tròn. |
| Nhấp đúp | Kết thúc một đoạn, hoặc đóng một diện tích hay lỗ khoét. |
| {{key:Enter}} | Kết thúc một đoạn, hoặc đóng một diện tích hay lỗ khoét. |
| Nhấp chuột phải (không di chuyển) | Kết thúc một đoạn, hoặc đóng một diện tích hay lỗ khoét. |
| Nhấp điểm đầu tiên | Đóng một diện tích hay lỗ khoét (từ điểm thứ ba trở đi). |
| {{key:Backspace}} hoặc {{key:Delete}} | Xóa điểm cuối cùng (trước hết là điểm cung tròn đang chờ). |
| {{key:Esc}} | Bỏ điểm cung tròn đang chờ; sau đó hủy dấu chưa hoàn tất; sau đó quay về {{ui:Chọn}}. |

## Chọn và chỉnh sửa

| Phím hoặc thao tác | Tác dụng |
|---|---|
| Nhấp một dấu (công cụ Chọn) | Chọn dấu đó và đưa hạng mục của nó thành hiện hành. |
| {{key:Shift}} + nhấp một dấu | Thêm vào vùng chọn, hoặc bỏ ra khỏi vùng chọn. |
| {{key:Mod+A}} | Chọn mọi dấu trên tờ đang mở. |
| Kéo một núm góc | Di chuyển điểm đó ({{key:Shift}} bắt về 45°). Hoạt động khi chọn một dấu. |
| {{key:Delete}} hoặc {{key:Backspace}} | Xóa các dấu đã chọn (khi bạn không đang vẽ). |
| {{key:Esc}} | Bỏ chọn tất cả: xóa vùng chọn và đường kiểm tra. |
| {{key:Mod+Z}} | Hoàn tác. |
| {{key:Mod+Y}} hoặc {{key:Mod+Shift+Z}} | Làm lại. |

## Sao chép và dán

| Phím | Tác dụng |
|---|---|
| {{key:Mod+C}} | Sao chép các dấu đã chọn, cùng với hạng mục của chúng. |
| {{key:Mod+X}} | Cắt: sao chép các dấu đã chọn, rồi xóa chúng. |
| {{key:Mod+V}} | Dán: bản sao đi theo con trỏ; nhấp chỗ bạn muốn đặt. |
| {{key:Mod+Shift+V}} | Dán tại chỗ: cùng vị trí trên tờ đang mở. |
| {{key:Mod+D}} | Nhân bản các dấu đã chọn: bản sao đi theo con trỏ; nhấp chỗ bạn muốn đặt. |
| {{key:Esc}} | Không đặt gì: hủy việc dán hoặc nhân bản đang nằm theo con trỏ. |

Các phím chữ đứng riêng vẫn chọn công cụ ({{key:C}} là {{ui:Đếm}}, {{key:D}} là {{ui:Kiểm tra}}, {{key:X}} là {{ui:Lỗ khoét}}, {{key:V}} là {{ui:Chọn}}, {{key:A}} là {{ui:Diện tích}}); chỉ {{key:Mod}} kết hợp với chúng mới sao chép và dán. Trong ô nhập văn bản, các phím này sao chép và dán văn bản như thường lệ. Xem [Sao chép, dán và nhân bản dấu](topic:copy-paste).

:::warning
{{key:Backspace}} xóa dấu đã chọn khi bạn không đang vẽ. Nếu điều đó xảy ra do nhầm lẫn, {{key:Mod+Z}} sẽ khôi phục nó.
:::

## Tệp

| Phím | Tác dụng |
|---|---|
| {{key:Mod+O}} | {{ui:Mở bản vẽ}} |
| {{key:Mod+S}} | {{ui:Lưu bóc tách}} |

Hai phím này vẫn hoạt động ngay cả khi bạn đang gõ trong một ô nhập.

## Khung nhìn và tờ

| Phím hoặc thao tác | Tác dụng |
|---|---|
| Con lăn chuột | Phóng to và thu nhỏ tại con trỏ. |
| Kéo (nút trái, nút giữa hoặc nút phải) | Di chuyển khung nhìn. Trong {{ui:Đếm tự động}}, kéo bằng nút trái sẽ vẽ hộp tìm kiếm thay thế. |
| Giữ {{key:Space}} + kéo | Di chuyển khung nhìn, ở mọi công cụ. |
| {{key:F}} | {{ui:Vừa trang}} |
| {{key:W}} | {{ui:Vừa chiều rộng}} |
| {{key:Plus}} hoặc {{key:=}} | Phóng to tại giữa khung nhìn. |
| {{key:Minus}} | Thu nhỏ tại giữa khung nhìn. |
| {{key:PageDown}} / {{key:PageUp}} | Tờ tiếp theo hoặc tờ trước trong danh sách tờ. |
| {{key:Ctrl+Shift+F}} | Chuyển vòng qua các chế độ toàn màn hình (Control trên mọi nền tảng, kể cả Mac). |
| {{key:F1}} | Mở hoặc đóng trợ giúp này, một bảng ở cạnh màn hình. |
| {{key:3}} | Chế độ xem kiểm tra 3D của tờ, bật hoặc tắt. |

## Khung nhìn 3D

| Phím hoặc thao tác | Tác dụng |
|---|---|
| Kéo, hoặc kéo bằng nút giữa | Xoay quanh. |
| {{key:Shift}} + kéo, hoặc kéo bằng nút phải | Di chuyển khung nhìn. |
| Con lăn chuột | Phóng to tại con trỏ. Trên bàn di chuột, vuốt hai ngón để xoay quanh và chụm để phóng to. |
| Nhấp | Chọn dấu dưới con trỏ ({{key:Shift}} + nhấp để thêm hoặc bỏ ra). |
| {{key:F}} hoặc {{key:W}} | Thu phóng phạm vi. |
| {{key:3}} | Quay lại tờ phẳng. |

Xem [Kiểm tra bóc tách trong 3D](topic:check-in-3d).

## Đếm tự động

| Phím hoặc thao tác | Tác dụng |
|---|---|
| Kéo một hộp | Khoanh ký hiệu cần tìm (bắt đầu tìm kiếm). |
| Nhấp một hộp khớp | Loại bỏ nó, hoặc khôi phục lại. |
| {{key:Esc}} | Hủy một tìm kiếm đang chạy, hoặc bỏ phần xem lại. |

## Trợ giúp

| Phím | Tác dụng |
|---|---|
| {{key:F1}} | Mở hoặc đóng bảng trợ giúp (cũng là nút {{ui:Trợ giúp}} trên thanh ứng dụng). Phím này hoạt động trong mọi công cụ, kể cả khi đang gõ trong một ô nhập. |
| {{key:Esc}} | Đóng bảng trợ giúp. Trong ô tìm kiếm của bảng, Esc đầu tiên xóa nội dung tìm kiếm. Khi bảng đang mở, Esc được nhấn sau khi nhấp vào tờ sẽ đóng bảng trước; nhấn lại để hủy trong TakeoffCraft. |

:::mac
Trên nhiều bàn phím Mac, hàng phím trên cùng điều khiển độ sáng và âm thanh. Nhấn fn cùng F1, hoặc bật "Use F1, F2, etc. keys as standard function keys" trong System Settings, mục Keyboard.
:::

## Hộp thoại và ô nhập

| Phím | Tác dụng |
|---|---|
| {{key:Enter}} | Trong ô nhập: áp dụng giá trị. Trong hộp thoại hiệu chuẩn: {{ui:Đặt tỷ lệ}}. |
| {{key:Esc}} | Đóng hộp thoại (như {{ui:Hủy}}); đóng biểu mẫu {{ui:Hạng mục mới}}. |
| {{key:Tab}} | Chuyển đến ô nhập tiếp theo. |

## Ghi chú theo nền tảng

:::mac
- {{key:Mod}} là phím Command: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Toàn màn hình là ngoại lệ: Control+Shift+F.
- Nhấp chuột phải là chạm bằng hai ngón trên bàn di chuột, khi đã bật nhấp phụ trong System Settings, mục Trackpad. TakeoffCraft chỉ đọc nút phụ; một lần Control-click có thể được tính là nhấp thường và thêm một điểm.
- Cuộn bằng hai ngón trên bàn di chuột sẽ phóng to tờ (không cuộn tờ). Để di chuyển khung nhìn, nhấn và kéo, hoặc giữ Space và kéo.
- Page Up và Page Down là fn cùng với mũi tên lên và xuống trên bàn phím không có các phím này.
- Backspace là phím có ghi Delete.
:::

:::windows
- {{key:Mod}} là Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Trên bàn di chuột của máy tính xách tay, cuộn bằng hai ngón sẽ phóng to tờ. Để di chuyển khung nhìn, nhấn và kéo.
:::

:::linux
- {{key:Mod}} là Ctrl. Một số màn hình nền dùng các phím tắt Ctrl+Alt hoặc Super riêng; TakeoffCraft không dùng phím nào trong số đó.
- Trên bàn di chuột, cuộn bằng hai ngón sẽ phóng to tờ. Để di chuyển khung nhìn, nhấn và kéo.
:::

:::touch
TakeoffCraft đọc cảm ứng như một con trỏ duy nhất:

- Chạm để đặt điểm, chọn một dấu hoặc thêm một chấm đếm.
- Kéo bằng một ngón để di chuyển tờ (trong {{ui:Đếm tự động}} thì vẽ hộp tìm kiếm).
- Chụm để phóng to chưa được hỗ trợ. Dùng {{ui:Vừa trang}} và {{ui:Vừa chiều rộng}}, hoặc {{key:Plus}} và {{key:Minus}} trên bàn phím.
- Để đóng một diện tích, chạm vào điểm đầu tiên của nó. Để kết thúc một đoạn, chạm đúp chỗ trình duyệt của bạn coi là nhấp đúp, hoặc nhấn {{key:Enter}} trên bàn phím.
- Không có số đo chiều dài trực tiếp cho đến khi bạn chạm, vì không có thao tác rê chuột.

Hiện nay, bàn phím cùng chuột hoặc bàn di chuột là cách bóc tách tốt hơn.
:::

## Phím trình duyệt giữ lại

Trình duyệt giữ một số phím tắt cho riêng mình, và trang web không thể dùng chúng: đóng thẻ ({{key:Mod+W}}), thẻ hoặc cửa sổ mới ({{key:Mod+T}}, {{key:Mod+N}}), và thu phóng trình duyệt ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Vì vậy TakeoffCraft phóng to tờ bằng con lăn và các phím {{key:Plus}} và {{key:Minus}} đứng riêng. Nếu bạn nhấn {{key:Mod+Plus}} nhầm, toàn bộ trang sẽ lớn lên; {{key:Mod+0}} sẽ đưa nó về như cũ. Xem [Phím, chuột và bàn di chuột](common:keys).

## Lệnh Di chuyển nằm ở đâu

Không có lệnh Di chuyển: chọn một chấm đếm rồi kéo nó, hoặc chọn một diện tích hay một đường rồi kéo các núm góc của nó.
