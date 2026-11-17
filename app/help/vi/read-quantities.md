---
title: Đọc khối lượng và dự toán
summary: Dùng bảng Khối lượng theo hạng mục và theo tờ, tổng công trình, tô sáng và cảnh báo Chưa đầy đủ.
keywords: khối lượng, tổng, theo hạng mục, theo tờ, tổng công trình, dự toán, tóm tắt, báo cáo, tô sáng, chưa đầy đủ, chi phí
from: 069d41f1
---

Bảng {{ui:Khối lượng}} ở cuối cửa sổ là dự toán trực tiếp của bạn. Bảng thay đổi ngay khi bạn vẽ, xóa, đổi tỷ lệ hoặc sửa đơn giá. Khối lượng không bao giờ được lưu; chúng được đo lại từ các dấu mỗi lần, nên không thể bị lỗi thời.

## Theo hạng mục

Chọn {{ui:Theo hạng mục}} (mặc định). Mỗi hạng mục có một hàng, và mỗi cấu kiện của nó có một hàng bên dưới.

| Cột | Ý nghĩa |
|---|---|
| Hạng mục | Tên, kèm màu của hạng mục. "+(n) chưa có tỷ lệ" nghĩa là một số dấu nằm trên tờ chưa có tỷ lệ. |
| Khối lượng | Tổng đo được theo đơn vị của hạng mục (cấu kiện: kết quả của công thức). |
| Đơn vị | LF, m, SF, SY, m2, EA, hoặc đơn vị của cấu kiện. |
| Hao hụt % | Nhập tại đây hoặc trong trình chỉnh sửa hạng mục. |
| Có hao hụt | Khối lượng × (1 + hao hụt). |
| Vật liệu/đơn vị, Nhân công/đơn vị | Đơn giá; bạn có thể nhập tại đây. |
| Vật liệu, Nhân công | Có hao hụt × đơn giá, làm tròn đến cent. |
| Tổng | Vật liệu + nhân công. |

Hàng cuối cùng, **Tổng công trình**, cộng các cột vật liệu, nhân công và tổng. Cùng một tổng cũng hiển thị ở bên phải tiêu đề của bảng.

Nhập vào ô hao hụt hoặc ô đơn giá rồi nhấn {{key:Enter}} hoặc bấm ra ngoài để áp dụng. Giá trị mà TakeoffCraft không đọc được sẽ có viền đỏ và thanh trạng thái nêu lý do, ví dụ "Nhập một số tiền như 12.50."

Bấm hàng của một hạng mục để tô sáng các dấu của nó trên mọi tờ và chuyển đến một tờ có các dấu đó (giống như bấm nó dưới {{ui:Hạng mục}}).

## Theo tờ

Chọn {{ui:Theo tờ}} để xem khối lượng của mỗi hạng mục trên từng tờ, cùng với số dấu. Bấm một hàng để mở tờ đó với hạng mục được tô sáng. Dùng nó để kiểm tra xem mọi tờ đã được bóc tách chưa, hoặc để tách khối lượng theo tầng hay theo khu vực thi công.

## Theo khu vực

Khi bóc tách có các khu vực dự thầu, {{ui:Theo khu vực}} liệt kê các hạng mục của từng khu vực và tổng phụ. Xem [Khu vực dự thầu](topic:bid-areas).

## Cảnh báo Chưa đầy đủ

Khi có thứ bị bỏ khỏi các tổng, tiêu đề hiển thị một cảnh báo, ví dụ:

"Chưa đầy đủ: 1 lỗi công thức, 6 dấu trên tờ chưa có tỷ lệ (không tính vào tổng)"

- **Lỗi công thức**: công thức của một cấu kiện không tính được. Hàng của nó ghi "Lỗi công thức: …". Xem [Cấu kiện và công thức](topic:assemblies#when-a-formula-is-wrong).
- **Dấu trên tờ chưa có tỷ lệ**: đặt tỷ lệ cho các tờ đó. Xem [Đặt tỷ lệ](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Cùng các ghi chú này được đưa vào bảng tính xuất ra, nên một dự toán chưa đầy đủ không bao giờ trông như đã hoàn chỉnh.

## Tô sáng một hạng mục

Bấm một hạng mục dưới {{ui:Hạng mục}} hoặc trong bảng. Các dấu của nó giữ độ đậm đầy đủ trên mọi tờ, và phần còn lại mờ đi. Danh sách tờ hiển thị "(n) đang tô sáng" trên mỗi tờ có dấu. Bấm lại hạng mục để ngừng tô sáng.

## Tổng hạng mục trong bảng bên

Mỗi hạng mục trong danh sách {{ui:Hạng mục}} cũng hiển thị khối lượng của nó. Khối **Đo được** trong trình chỉnh sửa hạng mục hiển thị các giá trị mà công thức của nó dùng: chiều dài, số đoạn và diện tích tường; diện tích, chu vi và số khu vực; hoặc số đếm.

## Dấu trên các PDF chưa mở

Một bóc tách có thể gồm các dấu trên PDF mà bạn chưa mở lần này. Chúng vẫn được tính trong mọi tổng; danh sách tờ nêu tên các PDF đó. Xem [Lưu và mở lại bóc tách](topic:save-and-reopen).

## Thêm không gian

Nút mũi tên ở bên phải tiêu đề {{ui:Khối lượng}} ẩn bảng để tờ có thêm chỗ. Bấm lại để hiện bảng.
