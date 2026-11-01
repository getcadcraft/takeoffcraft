---
title: Bắt đầu với TakeoffCraft
summary: TakeoffCraft làm gì, chạy ở đâu, và hạng mục đầu tiên của bạn được đo và tính giá từ một bộ bản vẽ PDF.
keywords: bắt đầu, bóc tách đầu tiên, khởi đầu nhanh, giới thiệu, dự toán, bóc tách khối lượng, bộ bản vẽ, pdf
from: 3b9da1fb
---

TakeoffCraft đo các bộ bản vẽ, PDF và bản vẽ DWG hoặc DXF, và biến các số đo thành một dự toán có giá. Bạn mở các tệp (một bản vẽ đếm thẳng từ các khối của nó: xem [Mở một bản vẽ DWG hoặc DXF](topic:open-a-drawing)), đặt tỷ lệ cho mỗi tờ (bản vẽ tự mang tỷ lệ riêng), tạo các **hạng mục** (một loại tường, một lớp hoàn thiện sàn, một thiết bị), và bấm lên các tờ để bóc tách chúng. Khối lượng, chi phí và tổng công trình cập nhật khi bạn làm. Bạn có thể xuất dự toán thành bảng tính và một bản sao các PDF có bóc tách của bạn được vẽ vào.

Nếu bạn đã bóc tách khối lượng trong các chương trình khác, hãy đọc tiếp [Chuyển từ phần mềm bóc tách khác sang](topic:coming-from). Một số thứ hoạt động khác ở đây.

## Nó chạy ở đâu

TakeoffCraft chạy trong trình duyệt web của bạn. Mở TakeoffCraft và màn hình sẵn sàng ngay; không có gì để cài đặt.

- **PDF của bạn ở lại trên máy tính của bạn.** Chúng được trình duyệt mở và không bao giờ được tải lên. Lưu là một lần tải xuống.
- Nó chạy trong Chrome, Edge, Firefox và Safari hiện hành. Xem [Trình duyệt và máy tính](common:browsers).
- Nó chạy không cần kết nối Internet sau khi bạn chọn {{ui:Lưu để dùng ngoại tuyến}} trên thanh ứng dụng và nó ghi {{ui:Sẵn sàng ngoại tuyến}}. Xem [Làm việc ngoại tuyến](common:offline).
- Lưu lên đám mây chưa có. Với ứng dụng máy tính để bàn, TakeoffCraft nằm trong CadCraft Studio, cùng bảy ứng dụng khác.

## Bóc tách đầu tiên của bạn trong mười bước

Hướng dẫn này đo một loại tường và tính giá. Mất vài phút với bất kỳ bản vẽ nào bạn có.

1. Chọn {{ui:Mở bản vẽ}} trong nhóm {{ui:Tệp}} của thanh công cụ (hoặc nhấn {{key:Mod+O}}), chọn một hoặc nhiều PDF, và chọn Mở. Bạn cũng có thể thả các PDF vào bất kỳ đâu trên trang.
   Các tờ xuất hiện ở bên trái và tờ đầu tiên mở ở giữa.
2. Tìm tỷ lệ in của tờ trong khung tên hoặc dưới tiêu đề hình vẽ.
3. Mở danh sách {{ui:Đặt sẵn}} trong nhóm {{ui:Tỷ lệ}} và chọn tỷ lệ đó, ví dụ `1/4" = 1'-0"`.
   Thanh ở dưới tờ giờ ghi "Tỷ lệ 1/4" = 1'-0"".
4. Chọn {{ui:Kiểm tra}} (hoặc nhấn {{key:D}}) và bấm hai đầu của một kích thước được in trên bản vẽ.
   Số đọc trong thanh trạng thái ở dưới bên trái phải khớp với kích thước in. Nếu không, hãy xem [Đặt tỷ lệ](topic:set-the-scale).
5. Trong bảng {{ui:Hạng mục}} bên phải, chọn {{ui:Hạng mục mới}}, gõ một tên như `Interior wall type A`, để loại ở {{ui:Tuyến tính (chiều dài)}}, và chọn {{ui:Thêm}}.
6. Chọn {{ui:Tuyến tính}} trên thanh công cụ (hoặc nhấn {{key:L}}).
7. Bấm vào điểm đầu của một bức tường, rồi từng góc dọc theo nó. Bấm đúp, nhấn {{key:Enter}} hoặc bấm chuột phải để kết thúc đoạn.
   Đoạn được vẽ bằng màu của hạng mục và chiều dài của nó hiện bên cạnh hạng mục.
8. Trong trình sửa hạng mục dưới {{ui:Hạng mục}}, gõ `9'-0"` vào {{ui:Chiều cao}}, `0.85` vào {{ui:Vật liệu $/LF}} và `1.20` vào {{ui:Nhân công $/LF}}.
   Bảng {{ui:Khối lượng}} ở dưới cùng hiện chiều dài, vật liệu và nhân công thành tiền, và {{ui:Tổng công trình}}.
9. Chọn {{ui:Lưu bóc tách}} (hoặc nhấn {{key:Mod+S}}).
   Trình duyệt của bạn tải xuống một tệp `.takeoff.json`. Nó chứa các hạng mục, tỷ lệ và dấu của bạn, và mở lại trên đúng các PDF đó.
10. Mở menu {{ui:Xuất}} trên thanh công cụ và chọn {{ui:XLSX}} để tải xuống dự toán dưới dạng bảng tính.

:::tip
Nhấn {{key:Esc}} để dừng bất cứ việc gì bạn đang làm và quay lại công cụ {{ui:Chọn}}. {{key:Mod+Z}} hoàn tác mọi thay đổi.
:::

## Nên đọc gì tiếp theo

- [Màn hình TakeoffCraft](topic:workspace) nêu tên mọi phần của cửa sổ.
- [Bắt đầu một bóc tách và mở bộ bản vẽ](topic:open-plan-set) nói về nhiều PDF và danh sách tờ.
- [Tạo các hạng mục bóc tách](topic:create-items) giải thích loại, đơn vị, hao hụt và đơn giá.
- [Định mức và công thức](topic:assemblies) biến một số đo thành cột, tấm ván và hơn nữa.
- [Bàn phím và chuột](topic:keyboard) liệt kê mọi phím.
