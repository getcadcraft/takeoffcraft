---
title: Đặt tỷ lệ
summary: Đặt tỷ lệ cho mỗi tờ bằng một tỷ lệ đặt sẵn hoặc bằng cách hiệu chuẩn trên một kích thước đã biết, kiểm tra nó, và hiểu vì sao các tờ chưa có tỷ lệ bị loại khỏi tổng.
keywords: nhận diện tỷ lệ, đọc tỷ lệ, tỷ lệ từ văn bản, tất cả các tờ, tỷ lệ, hiệu chuẩn, đặt sẵn, kiểm tra tỷ lệ, xác minh, kích thước đã biết, chưa có tỷ lệ, không có tỷ lệ, tỷ số, đặt tỷ lệ
from: 8f0148e6
---

Mỗi tờ có tỷ lệ riêng. Bạn đặt nó, hoặc để TakeoffCraft đọc từ văn bản của các tờ (bên dưới), rồi kiểm tra nó. Cho đến khi một tờ có tỷ lệ, {{ui:Tuyến tính}}, {{ui:Diện tích}}, {{ui:Vòng tròn}} và {{ui:Lỗ khoét}} sẽ từ chối đo trên tờ đó. {{ui:Đếm}} và {{ui:Đếm tự động}} hoạt động mà không cần tỷ lệ.

Danh sách tờ hiển thị tỷ lệ của mỗi tờ, hoặc **Chưa có tỷ lệ**. Thanh bên dưới tờ đang mở cũng nói điều tương tự.

## Dùng một tỷ lệ đặt sẵn (khi PDF được in ở kích thước thật)

1. Mở tờ.
2. Mở danh sách {{ui:Đặt sẵn}} trong nhóm {{ui:Tỷ lệ}}.
3. Chọn tỷ lệ được in trên bản vẽ, ví dụ `1/8" = 1'-0"` trong nhóm Kiến trúc.
   Thanh trạng thái hiển thị "Tỷ lệ cho tờ này: 1/8" = 1'-0"."
4. Kiểm tra nó (bên dưới).

Một tỷ lệ đặt sẵn giả định PDF có kích thước giấy thật mà bản vẽ được làm cho. Nếu ai đó tạo PDF với "vừa với trang", hoặc đó là một bộ bản vẽ thu nhỏ một nửa, tỷ lệ đặt sẵn sẽ sai. Hãy hiệu chuẩn thay thế.

Danh sách đầy đủ có trong [Các tỷ lệ đặt sẵn](topic:scale-presets).

## Đọc tỷ lệ từ văn bản của các tờ

Hầu hết bản vẽ ghi tỷ lệ của chúng: `SCALE: 1/4" = 1'-0"` trong khung tên, `1:100` dưới một hình chiếu. TakeoffCraft có thể đọc và đặt mọi tờ cùng một lúc.

1. Mở danh sách {{ui:Đặt sẵn}} và chọn {{ui:Từ văn bản của các tờ…}} (ở trên cùng).
2. Danh sách hiển thị mọi tờ: tỷ lệ hiện tại của nó, và văn bản của nó nói gì — **Ghi 1/4" = 1'-0"**, **Không có tỷ lệ trong văn bản**, hoặc **Ghi không theo tỷ lệ** (NTS).
3. Các tờ chưa có tỷ lệ mà có ghi một tỷ lệ sẽ được đánh dấu. Đánh dấu hoặc bỏ đánh dấu bất kỳ tờ nào, rồi chọn {{ui:Đặt các tỷ lệ đã đánh dấu}}. Một lần {{key:Mod+Z}} sẽ hoàn lại tất cả.
4. Kiểm tra một kích thước trên mỗi tờ bằng {{ui:Kiểm tra}} (bên dưới): một tỷ lệ đặt sẵn chỉ đúng khi PDF được in ở kích thước thật.

Nó đọc các ký hiệu kiến trúc (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), kỹ thuật (`1" = 20'`) và mét (`1:50`) khớp với một [tỷ lệ đặt sẵn](topic:scale-presets). Khi một tờ ghi nhiều hơn một tỷ lệ (một bản vẽ mặt bằng có các chi tiết phóng to), nó lấy tỷ lệ được ghi nhiều lần nhất, và tỷ lệ được viết sau chữ SCALE được tính gấp đôi; các tỷ lệ khác được hiển thị màu đỏ để bạn kiểm tra. Một tờ được quét không có văn bản: hãy tự đặt tỷ lệ của nó.

## Hiệu chuẩn trên một kích thước đã biết

Dùng khi không có tỷ lệ in nào mà bạn tin cậy, bộ bản vẽ đã bị đổi kích thước, hoặc tờ ghi "không theo tỷ lệ" nhưng vẫn có các kích thước.

1. Mở tờ và phóng to một kích thước dài mà bạn biết, như khoảng cách giữa các trục lưới hoặc kích thước tổng thể của công trình. Kích thước càng dài càng chính xác.
2. Chọn {{ui:Hiệu chuẩn}} trong nhóm {{ui:Tỷ lệ}}, hoặc nhấn {{key:K}}.
3. Bấm một đầu của kích thước. Phóng to từng đầu để chính xác; bạn có thể phóng to và di chuyển khung nhìn giữa các lần bấm.
4. Bấm đầu kia. Giữ {{key:Shift}} để giữ đường thẳng ở 0°, 45° hoặc 90°.
   Hộp thoại **Hiệu chuẩn tờ này** mở ra.
5. Nhập khoảng cách thực vào **Khoảng cách thực**, ví dụ `24'-6 1/2"`, `24.5` (feet thập phân), `30"` hoặc `7.5 m`. Xem [Nhập chiều dài, đơn giá và phần trăm](topic:entry-formats).
6. Chọn {{ui:Đặt tỷ lệ}}.
   Thanh trạng thái hiển thị tỷ lệ là "1" = (n)'", và khi nó nằm trong 0.5% của một tỷ lệ đặt sẵn, nó nói rõ là tỷ lệ nào, ví dụ "khớp với 1/4" = 1'-0" (chọn tỷ lệ đặt sẵn đó để có tỷ lệ chính xác)".
   TakeoffCraft quay lại công cụ {{ui:Chọn}}.

Khi kết quả hiệu chuẩn khớp với một tỷ lệ đặt sẵn, chọn tỷ lệ đặt sẵn đó sẽ cho một tỷ lệ chính xác, thay vì một tỷ lệ phụ thuộc vào vị trí bạn đã bấm.

## Kiểm tra tỷ lệ

Luôn kiểm tra một tỷ lệ mới trên một kích thước thứ hai.

1. Chọn {{ui:Kiểm tra}} trong nhóm {{ui:Tỷ lệ}}, hoặc nhấn {{key:D}}.
2. Bấm cả hai đầu của một kích thước được in trên bản vẽ.
   Thanh trạng thái hiển thị "Kiểm tra: 12'-6"" với cùng chiều dài bằng feet thập phân và mét, và đường kiểm tra vẫn nằm trên tờ cùng chiều dài của nó.
3. So với kích thước đã in. Nếu lệch, hãy hiệu chuẩn trên một kích thước dài hơn.

Nhấn {{key:Esc}} để xóa đường kiểm tra.

## Đổi tỷ lệ

Chọn một tỷ lệ đặt sẵn khác hoặc hiệu chuẩn lại. Nếu tờ đã có các phép đo, TakeoffCraft hỏi **Đổi tỷ lệ của tờ này?** và cho biết có bao nhiêu phép đo sẽ được đo lại. Chọn {{ui:Đổi tỷ lệ}}. Mọi đoạn và khu vực trên tờ được đo lại theo tỷ lệ mới. Bạn có thể hoàn tác bằng {{key:Mod+Z}}.

## Vì sao các tờ chưa có tỷ lệ không được tính là không

Một dấu trên tờ chưa có tỷ lệ không có chiều dài hay diện tích thật. TakeoffCraft không bao giờ tính nó là không, vì điều đó sẽ làm dự toán của bạn thấp đi một cách lặng lẽ. Thay vào đó, nó:

- để các dấu đó ra khỏi các tổng,
- hiển thị "+(n) chưa có tỷ lệ" bên cạnh hạng mục trong {{ui:Khối lượng}},
- hiển thị "Chưa đầy đủ: (n) dấu trên tờ chưa có tỷ lệ (không tính vào tổng)" trong tiêu đề bảng,
- ghi số lượng vào cột ghi chú của bản xuất bảng tính.

Điều này có thể xảy ra khi bạn mở một dự án có tỷ lệ chưa từng được đặt. Đặt tỷ lệ cho tờ và các dấu được tính ngay. Dấu đếm luôn được tính; chúng không cần tỷ lệ.

## Mẹo

- Đặt tỷ lệ cho mọi tờ bạn sẽ đo trước khi bắt đầu. Quét danh sách tờ để tìm **Chưa có tỷ lệ** (ô tìm kiếm chỉ xem tên tờ, không xem tỷ lệ).
- Các chi tiết và mặt bằng phóng to trên cùng một tờ thường dùng tỷ lệ khác. TakeoffCraft chỉ có một tỷ lệ cho mỗi tờ; xem [Chưa được xây dựng](topic:not-built-yet).
- Bản vẽ hệ mét: chọn một tỷ lệ mét đặt sẵn như `1:100`, hoặc hiệu chuẩn bằng một khoảng cách mét như `6000 mm`.
