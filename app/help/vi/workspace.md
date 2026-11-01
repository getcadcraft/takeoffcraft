---
title: Màn hình TakeoffCraft
summary: Tham quan cửa sổ theo tên hiển thị trên màn hình - thanh công cụ, danh sách tờ, tờ bản vẽ, bảng Hạng mục, bảng Khối lượng và thanh trạng thái.
keywords: màn hình, bố cục, các bố cục, dải lệnh, trình duyệt dự án, hộp công cụ, hộp thông tin, thanh công cụ, bảng, danh sách tờ, bảng hạng mục, khối lượng, thanh trạng thái, tham quan, giao diện
from: ab1115e0
---

TakeoffCraft lấp đầy cửa sổ trình duyệt dưới thanh ứng dụng CadCraft. Từ trên xuống dưới và từ trái sang phải:

| Phần | Vị trí | Dùng để làm gì |
|---|---|---|
| Thanh ứng dụng | Trên cùng | Tên ứng dụng, phiên bản, {{ui:Giới thiệu TakeoffCraft}}, {{ui:Trợ giúp}} ({{key:F1}}), {{ui:Lưu để dùng ngoại tuyến}}, {{ui:Cài đặt}} ({{key:Mod+,}}), nút {{ui:Toàn màn hình}} và công tắc giao diện {{ui:Giấy}} / {{ui:Mô hình}}. |
| Thanh công cụ | Dưới thanh ứng dụng | Mọi lệnh, theo nhóm: {{ui:Tệp}}, {{ui:Xuất}}, {{ui:Tỷ lệ}}, {{ui:Bóc tách}}, {{ui:Chỉnh sửa}}, {{ui:Khung nhìn}}. |
| Tờ | Bên trái | Mọi trang của mọi PDF đang mở, kèm ảnh thu nhỏ, tỷ lệ và số dấu của nó. |
| Tờ bản vẽ | Ở giữa | Trang đang mở. Bạn đo ở đây. |
| Hạng mục | Bên phải | Các hạng mục bóc tách của bạn, cài đặt của hạng mục đang chọn, và dấu đang chọn. |
| Khối lượng | Dưới cùng | Khối lượng và chi phí theo hạng mục hoặc theo tờ, và tổng công trình. |
| Thanh trạng thái | Dưới cùng nhất | Số đo trực tiếp, thông báo, gợi ý 45° và mức thu phóng. |

## Thanh công cụ

Rê chuột lên bất kỳ nút nào để xem nó làm gì và phím của nó.

| Nhóm | Các nút |
|---|---|
| {{ui:Tệp}} | {{ui:Mới}} (bóc tách trống), {{ui:Mở bản vẽ}} ({{key:Mod+O}}), {{ui:Mở bóc tách}} (một dự án `.takeoff.json`), {{ui:Lưu bóc tách}} ({{key:Mod+S}}) |
| {{ui:Xuất}} | Một menu: {{ui:XLSX}}, {{ui:CSV}}, {{ui:PDF đã đánh dấu}} |
| {{ui:Tỷ lệ}} | {{ui:Hiệu chuẩn}} ({{key:K}}), {{ui:Kiểm tra}} ({{key:D}}), và danh sách {{ui:Đặt sẵn}} |
| {{ui:Bóc tách}} | {{ui:Chọn}} ({{key:V}}), {{ui:Tuyến tính}} ({{key:L}}), {{ui:Diện tích}} ({{key:A}}), {{ui:Vòng tròn}} ({{key:O}}), {{ui:Cung tròn}} ({{key:R}}, công tắc bật/tắt), {{ui:Khấu trừ}} ({{key:E}}, công tắc bật/tắt), {{ui:Lỗ khoét}} ({{key:X}}), {{ui:Đếm}} ({{key:C}}), {{ui:Đếm tự động}} ({{key:S}}) |
| {{ui:Chỉnh sửa}} | {{ui:Hoàn tác}} ({{key:Mod+Z}}), {{ui:Làm lại}} ({{key:Mod+Y}}), {{ui:Sao chép}} ({{key:Mod+C}}), {{ui:Dán}} ({{key:Mod+V}}), và {{ui:Thêm}}: {{ui:Cắt}}, {{ui:Sao chép}}, {{ui:Dán}}, {{ui:Dán tại chỗ}}, {{ui:Nhân bản}}, {{ui:Xóa}}, {{ui:Chọn tất cả}}, {{ui:Bỏ chọn}} |
| {{ui:Khung nhìn}} | {{ui:Vừa trang}} ({{key:F}}), {{ui:Vừa chiều rộng}} ({{key:W}}) |

Công cụ bạn đang dùng hiển thị như đang được nhấn. Các nút {{ui:Cung tròn}} và {{ui:Khấu trừ}} vẫn ở trạng thái nhấn khi chúng đang bật.

## Tờ (bên trái)

- **Tìm tờ** lọc danh sách theo tên tờ, tên tệp hoặc nhãn trang.
- Mỗi tờ hiện một ảnh thu nhỏ (vẽ khi bạn cuộn), tên của nó, và tỷ lệ hoặc **Không có tỷ lệ**.
- Phía bên phải của mỗi hàng cho biết tờ có bao nhiêu dấu. Khi một hạng mục đang được tô sáng, nó hiện số dấu của hạng mục đó trên tờ thay vào.
- Bấm một tờ để mở nó. {{key:PageDown}} và {{key:PageUp}} chuyển đến tờ kế tiếp và tờ trước trong danh sách.
- Khi một bóc tách bao gồm các PDF chưa mở, một ghi chú dưới danh sách nêu tên chúng. Xem [Lưu và mở lại một bóc tách](topic:save-and-reopen).

Tên tờ lấy từ PDF: một nhãn trang như `A-101` trở thành tên tờ. Một trang không có nhãn được đặt tên theo tệp và số trang của nó, như "Plans, page 3". Khi mở nhiều PDF, các tờ có nhãn cũng hiện tên tệp.

## Tờ bản vẽ (ở giữa)

- Thanh dưới tờ hiện tên tờ và tỷ lệ của nó, hoặc "Chưa có tỷ lệ: chọn một đặt sẵn hoặc hiệu chuẩn". Các nút của nó: {{ui:MarkupCraft}} (khi ứng dụng đó nhận được PDF; xem [Bắt đầu một bóc tách và mở bộ bản vẽ](topic:open-plan-set)), {{ui:So sánh}} (một phiên bản cũ hơn của tờ chồng lên tờ này: [So sánh một tờ đã sửa đổi](topic:compare-revisions)), "(n) cần kiểm tra" (các dấu bị gắn cờ, khi có) và {{ui:3D}} ([khung nhìn kiểm tra 3D](topic:check-in-3d)).
- Khi chưa mở PDF nào, phần giữa hiện một hướng dẫn ngắn năm bước.
- Con lăn thu phóng tại con trỏ. Kéo để di chuyển khung nhìn. Xem [Bàn phím và chuột](topic:keyboard).
- Khi bạn dùng {{ui:Đếm tự động}}, một thanh điều khiển của nó xuất hiện ở trên cùng tờ.

## Hạng mục (bên phải)

Ở trên cùng là danh sách {{ui:Khu vực dự thầu}}: tòa nhà, tầng hoặc giai đoạn mà các dấu mới được đưa vào ([Khu vực dự thầu](topic:bid-areas)).

- {{ui:Hạng mục mới}} mở một biểu mẫu nhỏ: tên, loại ({{ui:Tuyến tính (chiều dài)}}, {{ui:Diện tích}} hoặc {{ui:Đếm}}) và {{ui:Thêm}}.
- Danh sách hiện màu, biểu tượng loại, tên và khối lượng của từng hạng mục. Bấm một hạng mục để vẽ bằng nó và tô sáng các dấu của nó trên mọi tờ. Bấm lần nữa để thôi tô sáng.
- Dưới danh sách, **Hạng mục: (tên)** là trình sửa hạng mục: tên, loại, màu, đơn vị, chiều cao hoặc độ sâu, hao hụt, đơn giá vật liệu và nhân công, các giá trị đã đo, và {{ui:Định mức}}. Xem [Tạo các hạng mục bóc tách](topic:create-items).
- **Dấu đang chọn** xuất hiện khi bạn chọn một dấu: nó thuộc hạng mục nào, tờ của nó, các số đo của nó, và các nút như {{ui:Thêm một lỗ khoét}} và {{ui:Xóa dấu}}. Khi chọn nhiều dấu, nó thành **Các dấu đang chọn**: số lượng của mỗi hạng mục, và {{ui:Sao chép}}, {{ui:Nhân bản}}, {{ui:Cắt}} và {{ui:Xóa các dấu}}.
- Trình sửa hạng mục kết thúc bằng {{ui:Sao chép hạng mục}} và {{ui:Nhân bản hạng mục}}: một hạng mục cùng định mức và chi phí của nó, không có dấu. Xem [Sao chép, dán và nhân bản dấu](topic:copy-paste).

## Khối lượng (dưới cùng)

- {{ui:Theo hạng mục}} liệt kê mọi hạng mục và các thành phần định mức của nó với khối lượng, hao hụt, đơn giá và chi phí thành tiền. Bạn có thể gõ hao hụt và đơn giá thẳng vào bảng.
- {{ui:Theo tờ}} liệt kê khối lượng của từng hạng mục trên từng tờ.
- Một cảnh báo bắt đầu bằng **Chưa đầy đủ:** xuất hiện khi có thứ bị bỏ ra khỏi tổng.
- {{ui:Tổng công trình}} ở bên phải của tiêu đề.
- Nút mũi tên ở góc phải xa nhất ẩn hoặc hiện bảng để tờ có thêm chỗ.

Xem [Đọc khối lượng và dự toán](topic:read-quantities).

## Thanh trạng thái (dưới cùng)

Từ trái sang phải: số đo trực tiếp khi bạn vẽ (chiều dài, diện tích, bán kính hoặc kết quả kiểm tra), ô {{ui:Nhập}} khi bạn gõ một chiều dài, các thông báo từ TakeoffCraft, lời nhắc "Shift bắt góc 45°" (hoặc "Bắt 45°; Shift để tự do góc" khi mục đó được bật trong [Cài đặt](topic:settings)), nút {{ui:Bắt điểm}} (bắt vào các đường của bản vẽ, bật khi được tô sáng; {{key:F3}}), và tỷ lệ phần trăm thu phóng.

:::tip
Hãy đọc thanh trạng thái khi có việc không xảy ra. TakeoffCraft giải thích ở đó vì sao nó từ chối một cú bấm, ví dụ "Tờ này chưa có tỷ lệ".
:::

## Các bố cục khác

Mọi thứ ở trên là bố cục {{ui:CadCraft cổ điển}}, bố cục lúc đầu. {{ui:Cài đặt}} ({{key:Mod+,}}) › {{ui:Chung toàn cục}} › {{ui:Bố cục}} cung cấp thêm hai bố cục; cùng các công cụ và phím chạy trong cả ba, và chọn lại {{ui:CadCraft cổ điển}} sẽ đưa mọi điều khiển về chỗ cũ.

| Bố cục | Trong TakeoffCraft |
|---|---|
| {{ui:Dải lệnh và trình duyệt dự án}} | {{ui:Dải lệnh takeoff}} ở trên cùng ([Menu, phím và chuột](topic:menus-keys-and-mouse)), một thanh cho công cụ đang chạy, một thẻ cho mỗi tờ bạn mở (Mô hình và các bố cục của bản vẽ cũng là tờ) cùng các tỷ lệ đặt sẵn và {{ui:Vừa trang}} dưới tờ. Bảng bên trái chứa {{ui:Thuộc tính}} (hạng mục, ghi chú hoặc dấu đang chọn) phía trên {{ui:Trình duyệt takeoff}}: {{ui:Các tờ}} (bấm một tờ để mở nó trong một thẻ), {{ui:Điều kiện}} (bấm một cái để vẽ bằng nó) và {{ui:Dự toán}} (tổng của từng hạng mục và tổng công trình); ảnh thu nhỏ là thẻ thứ hai của nó. |
| {{ui:Hộp công cụ và hộp thông tin}} | Thanh công cụ phía trên tờ, một hộp thông tin với {{ui:Khu vực dự thầu}}, công cụ đang chạy hoặc vùng chọn và thanh tờ, một cột các công cụ bóc tách ở bên trái, một thẻ cho mỗi tờ, và {{ui:Bắt điểm}} cùng mức thu phóng dưới tờ. |

Khi [khung nhìn kiểm tra 3D](topic:check-in-3d) đang mở, các thẻ tờ và thanh dưới tờ nhường chỗ; hãy đóng khung nhìn 3D để đo lại. Trên điện thoại, bố cục điện thoại luôn được dùng.

## Toàn màn hình và giao diện

Nút {{ui:Toàn màn hình}} trên thanh ứng dụng, hoặc {{key:Ctrl+Shift+F}} (Control trên mọi nền tảng, cả Mac), chuyển lần lượt qua bình thường, toàn màn hình, và toàn màn hình với các thanh được ẩn. Khi các thanh bị ẩn, hãy đưa con trỏ lên mép trên để hiện lại chúng.

{{ui:Giấy}} là giao diện sáng và {{ui:Mô hình}} là giao diện tối. Trong {{ui:Mô hình}}, bản vẽ được hiển thị đảo màu (nét sáng trên nền tối) chỉ trên màn hình; các bản xuất không bao giờ bị thay đổi.
