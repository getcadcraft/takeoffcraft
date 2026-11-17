---
title: Đếm bằng tay
summary: Nhấp từng cửa, thiết bị hoặc đầu thu để đếm, kiểm tra số đếm và sửa lỗi.
keywords: đếm, mỗi, ea, thiết bị, cửa, đầu thu, ký hiệu, đếm dấu, nhấp để đếm, đếm thủ công
from: 594f2980
---

Một hạng mục đếm dùng để đếm các thứ: cửa, đèn chiếu sáng, ổ cắm, thiết bị cấp thoát nước. Mỗi lần nhấp lên tờ thêm một dấu đếm. Đếm không cần tỷ lệ.

## Đếm

1. Tạo hoặc nhấp một hạng mục đếm dưới {{ui:Items}} (loại {{ui:Count}}).
2. Chọn {{ui:Count}} trên thanh công cụ, hoặc nhấn {{key:C}}.
3. Nhấp từng cái trên tờ.
   Mỗi lần nhấp đặt một chấm có màu của hạng mục, và số đếm của hạng mục tăng thêm một.
4. Chuyển sang tờ tiếp theo ({{key:PageDown}}) và tiếp tục đếm. Công cụ vẫn ở {{ui:Count}}.
5. Nhấn {{key:Esc}} khi xong. TakeoffCraft quay về {{ui:Select}}.

Kéo vẫn di chuyển khung nhìn và con lăn vẫn thu phóng khi bạn đang đếm, nên bạn có thể di chuyển quanh tờ mà không thêm chấm nào.

:::tip
Nhấp hạng mục đếm để làm nổi bật các chấm của nó trên mọi tờ. Danh sách tờ khi đó hiển thị số chấm trên mỗi tờ, giúp bạn tìm các tờ chưa đếm.
:::

## Sửa một số đếm

- **Xóa một chấm**: chọn {{ui:Select}} ({{key:V}}), nhấp chấm, rồi nhấn {{key:Delete}} hoặc chọn {{ui:Delete mark}}. Hoặc nhấn {{key:Mod+Z}} ngay sau một lần nhấp sai.
- **Di chuyển một chấm**: chọn nó, rồi kéo.
- **Đếm nhầm hạng mục**: chọn chấm và chọn đúng hạng mục đếm trong danh sách **Hạng mục** dưới **Dấu đã chọn**.

## Kích thước chấm, trên màn hình và trong PDF

Các chấm giữ một kích thước trên màn hình dù bạn phóng to thế nào. Để đổi, mở {{ui:Settings}}, thẻ TakeoffCraft, và chọn **Kích thước dấu đếm**: Rất nhỏ, Nhỏ, Vừa (mặc định) hoặc Lớn.

Xuất PDF ({{ui:Export}} › PDF đã đánh dấu) vẽ mỗi chấm với cùng kích thước trên giấy, bất kể kích thước tờ: trình xem PDF ở 100% hiển thị các chấm lớn bằng trên màn hình. Nếu các chấm trên một tờ vẫn chạm nhau, khi xuất, tờ đó sẽ làm chấm nhỏ hơn để mỗi chấm đọc được.

## Nhiều ký hiệu giống nhau

Với một ký hiệu lặp lại nhiều lần trên một tờ, hãy thử [Đếm tự động](topic:auto-count): khoanh một cái, xem lại những gì nó tìm thấy, và thêm tất cả chỉ trong một bước.

## Dùng số đếm trong công thức

Số lượng của một hạng mục đếm là **N**. Các cấu kiện định mức có thể dùng nó, ví dụ bản lề `N * 3` cho cửa. Xem [Định mức và công thức](topic:assemblies).
