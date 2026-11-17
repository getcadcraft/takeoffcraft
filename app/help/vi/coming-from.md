---
title: Chuyển từ phần mềm bóc tách khác
summary: Thói quen của các phần mềm bóc tách chuyên dụng và công cụ đánh dấu PDF được ánh xạ sang TakeoffCraft thế nào, và những khác biệt dễ gây vướng.
keywords: chuyển đổi, di chuyển, điều kiện, chi tiết, công cụ đo, danh sách đánh dấu, liên kết khối lượng, thói quen bóc tách, khác biệt, so sánh
from: 12004ce5
---

Nếu bạn đã bóc tách bằng PlanSwift hoặc bằng các công cụ đo trong Bluebeam Revu, phần lớn TakeoffCraft sẽ quen thuộc: một bộ bản vẽ, một tỷ lệ cho mỗi tờ, những thứ bạn đo, và một tổng đã định giá. Cách các phần ghép lại với nhau có khác ở một số chỗ, và những chỗ đó được nêu bên dưới.

Nếu bạn biết PlanSwift hoặc On-Screen Takeoff, hãy chọn kiểu menu {{ui:Takeoff desk}} trong {{ui:Settings}} › {{ui:TakeoffCraft}} › {{ui:Menus, keys and mouse}}: một thanh menu gồm Tệp, Chỉnh sửa, Xem, Tỷ lệ, Bóc tách, {{ui:Items}}, {{ui:Markup}} và {{ui:Export}}, phía trên là một hàng công cụ bóc tách, với các mức tỷ lệ đặt sẵn trên thanh tờ. Xem [Menu, phím và chuột](topic:menus-keys-and-mouse).

## Thói quen được ánh xạ

| Bạn quen với | Trong TakeoffCraft |
|---|---|
| Mở một công việc hoặc dự án có lưu các bản vẽ (PlanSwift) | Mở các PDF và dự án `.takeoff.json` cạnh nhau. Dự án chỉ lưu phần bóc tách; các PDF vẫn là tệp riêng của bạn. |
| Danh sách đánh dấu với ghi chú, đám mây và tô sáng (Bluebeam) | {{ui:Markup}} trên thanh tờ: ghi chú, đám mây và tô sáng có trạng thái (Mở, Đã trả lời, Đã đóng), liệt kê dưới **Đánh dấu** và được vẽ trong PDF đã đánh dấu. Xem [Ghi chú, đám mây và tô sáng](topic:markups). |
| Số đo lưu thành đánh dấu bên trong PDF (Bluebeam) | Phần bóc tách nằm trong tệp `.takeoff.json`. {{ui:Marked PDF}} ghi một bản sao có vẽ sẵn phần bóc tách để chia sẻ; {{ui:PDF with the takeoff inside}} ghi một bản sao có kèm phần bóc tách, để mở lại trong TakeoffCraft. |
| Hạng mục bóc tách (PlanSwift), công cụ đo tùy chỉnh lưu trong hộp dụng cụ (Bluebeam) | **Hạng mục** dưới {{ui:Items}}: tên, loại, màu, đơn vị, chiều cao hoặc chiều sâu, hao hụt, đơn giá. |
| Chi tiết và định mức với công thức (PlanSwift) | {{ui:Assembly}} của hạng mục: các cấu kiện với công thức dùng `L H A N P`. |
| Đặt tỷ lệ trang, hoặc hiệu chuẩn (cả hai) | Danh sách {{ui:Preset}} hoặc {{ui:Calibrate}} trong nhóm {{ui:Scale}}, theo từng tờ. {{ui:Check}} đo một kích thước đã biết. |
| Áp dụng một tỷ lệ cho một dải trang | Chưa có: đặt từng tờ. |
| Các khung nhìn với tỷ lệ khác nhau trên cùng một tờ (Bluebeam) | Chưa có: một tỷ lệ cho mỗi tờ. |
| Công cụ đo đa tuyến và diện tích (Bluebeam), bóc tách tuyến tính và diện tích (PlanSwift) | {{ui:Linear}} ({{key:L}}) và {{ui:Area}} ({{key:A}}). |
| Giữ Shift để vẽ đường thẳng | {{key:Shift}} bắt theo bước 45°, cùng ý tưởng. |
| Bắt điểm vào các đường của bản vẽ | Bật sẵn: đầu mút, trung điểm, giao điểm và điểm gần nhất trên đường, với {{key:F3}} để tắt, như trong các chương trình CAD. |
| Công cụ đếm (cả hai) | {{ui:Count}} ({{key:C}}). |
| Tìm kiếm trực quan ký hiệu (Bluebeam) | {{ui:Auto count}} ({{key:S}}): khoanh một ký hiệu, xem lại, rồi thêm. |
| Lỗ khoét hoặc khấu trừ trong diện tích | {{ui:Cut-out}} ({{key:X}}) trên một diện tích đã chọn, và lỗ khoét tròn. |
| Khấu trừ trên các đoạn tuyến tính | Vẽ đoạn đi thẳng qua và nhấn {{key:E}} ({{ui:Deduct}}) cho lỗ mở. Xem [Đo các đoạn tuyến tính](topic:measure-linear). |
| Đoạn cung trong đa tuyến | {{ui:Arc}} ({{key:R}}): nhấp một điểm trên đường cong, rồi đến điểm cuối. |
| Danh sách Đánh dấu với các cột khối lượng (Bluebeam) | Bảng {{ui:Quantities}}, {{ui:By item}} hoặc {{ui:By sheet}}. |
| Bảng dự toán có đơn giá (PlanSwift) | Cùng bảng đó: hao hụt, vật liệu và nhân công cho mỗi đơn vị, tổng thành tiền, {{ui:Job total}}. |
| Xuất ra Excel | {{ui:XLSX}} với công thức trực tiếp, hoặc {{ui:CSV}}. |
| Esc để dừng công cụ | {{key:Esc}} hủy và quay về {{ui:Select}}. |
| Nhấp chuột phải để kết thúc | Ở đây nhấp chuột phải cũng kết thúc một đoạn hoặc đóng một diện tích. Không có menu chuột phải. |

## Những khác biệt dễ gây vướng

**Bóc tách không nằm trong PDF của bạn.** Không có thao tác nào làm thay đổi PDF của bạn. Hãy lưu tệp `.takeoff.json` và giữ nó cùng với bản vẽ. Gửi cho ai đó PDF đã đánh dấu không có nghĩa là gửi bóc tách có thể chỉnh sửa: hãy gửi tệp dự án và các PDF gốc, hoặc một [PDF có kèm bóc tách](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDF được khớp theo nội dung, không theo tên.** Một tờ đã sửa được lưu đè lên tên tệp cũ là một tệp mới đối với TakeoffCraft, không có tỷ lệ và không có dấu. Các dấu cũ vẫn nằm ở phiên bản cũ và tiếp tục được đếm. Xem [Lưu và mở lại bóc tách](topic:save-and-reopen#when-a-pdf-has-changed).

**Dấu chưa có tỷ lệ bị bỏ qua, không được tính là 0.** Nếu một tờ chưa có tỷ lệ, các đoạn và diện tích của nó không được tính, và bảng ghi "Chưa đủ". Nhiều chương trình khác bạn sẽ chỉ thấy số 0. Xem [Đặt tỷ lệ](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Không đoán kích thước trang.** Các mức đặt sẵn giả định PDF được in đúng kích thước thật. Một PDF thu nhỏ một nửa hoặc "vừa trang" cần {{ui:Calibrate}}. Luôn dùng {{ui:Check}}.

**Một hạng mục, một loại chính, thêm nếu bạn muốn.** Hạng mục là tuyến tính, diện tích hoặc đếm, và loại của nó bị khóa khi đã có dấu. Một điều kiện cho cả diện tích và chu vi của nó là một hạng mục diện tích: chu vi là biến `P`. Một bức tường có cả chiều dài và diện tích là một hạng mục tuyến tính có chiều cao. Với hạng mục nhiều điều kiện, như một phòng có sàn, chân tường và cửa, hãy đánh dấu các loại khác dưới **Đo thêm**: mỗi loại được định giá trên dòng riêng. Xem [Một hạng mục, nhiều loại dấu](topic:create-items#one-item-several-kinds-of-marks).

**Công thức tính trên tổng.** Công thức định mức dùng tổng của hạng mục trên mọi tờ, không tính riêng từng đoạn. `N` (số đoạn hoặc số diện tích) dành cho các phần thêm theo từng đoạn, như một thanh đứng thêm cho mỗi bức tường.

**Chu vi bao gồm lỗ khoét.** `P` của một diện tích cộng thêm các cạnh của lỗ trong nó. Xem [Đo diện tích có lỗ khoét](topic:measure-areas#read-the-area).

**Kéo để di chuyển khung nhìn.** Kéo bằng nút chuột trái trên tờ sẽ di chuyển khung nhìn, trong mọi công cụ trừ {{ui:Auto count}}. Bạn không bao giờ cần chuyển sang công cụ di chuyển. Con lăn chuột dùng để thu phóng; nó không cuộn.

**Bản sao khôi phục, không phải đám mây.** TakeoffCraft giữ một bản sao công việc của bạn trong trình duyệt này và đề nghị khôi phục sau khi sự cố ([Nếu thẻ hoặc trình duyệt dừng](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), nhưng bóc tách là do bạn tự lưu: {{key:Mod+S}}. Lưu trữ đám mây hiện chưa có sẵn.

**Mọi thứ nằm trong trình duyệt.** Không cần cài đặt, và các bản vẽ không bao giờ được tải lên. Với ứng dụng máy tính để bàn, TakeoffCraft có trong CadCraft Studio, cùng với bảy ứng dụng khác.

## Chưa có ở đây

Các vùng tỷ lệ theo từng tờ chưa được xây dựng. Xem [Chưa xây dựng](topic:not-built-yet) để có danh sách đầy đủ và những gì nên làm thay thế.
