---
title: Các cột khi xuất
summary: Mọi trang tính và cột của tệp XLSX và CSV, cùng các công thức mà trang Dự toán sử dụng.
keywords: xuất, cột, xlsx, csv, trang tính, dự toán, theo tờ, dấu, tỷ lệ, công thức, trường
from: fed07851
---

## Dự toán (trang tính XLSX và CSV)

Mỗi hạng mục một hàng, tiếp theo là một hàng cho mỗi cấu kiện trong định mức của nó (thụt lề). Sau đó là một hàng trống và tổng công việc.

| Cột | Nội dung | Trong XLSX |
|---|---|---|
| A Hạng mục | Tên hạng mục (in đậm) hoặc tên cấu kiện (thụt lề) | Văn bản |
| B Loại | Tuyến, Diện tích, Đếm hoặc Cấu kiện | Văn bản |
| C Đơn vị | LF, m, SF, SY, m², EA, hoặc đơn vị của cấu kiện | Văn bản |
| D Khối lượng | Tổng đo được, hoặc kết quả công thức | Số |
| E Hao hụt % | Hao hụt | Phần trăm (0.10 = 10%) |
| F Khối lượng kể cả hao hụt | Khối lượng × (1 + hao hụt) | Công thức `D*(1+E)` |
| G Vật liệu/đơn vị | Đơn giá vật liệu | Số |
| H Nhân công/đơn vị | Đơn giá nhân công | Số |
| I Vật liệu | Thành tiền vật liệu | Công thức `ROUND(F*G,2)` |
| J Nhân công | Thành tiền nhân công | Công thức `ROUND(F*H,2)` |
| K Tổng | Vật liệu + nhân công | Công thức `I+J` |
| L Ghi chú | Công thức đã dùng, lỗi công thức, dấu trên tờ không có tỷ lệ, diện tích tường, chu vi | Văn bản |

Hàng tổng công việc: `SUM` của các cột I, J và K trên mọi hàng phía trên, và "Chưa đầy đủ: xem các ghi chú phía trên" trong Ghi chú khi có mục bị bỏ sót.

Hàng có lỗi công thức không có khối lượng hay số tiền; ghi chú của nó nêu lỗi. Hàng tiêu đề được cố định.

Trong CSV, các cột này chứa giá trị thuần; Hao hụt % là số phần trăm (10 cho 10%), và tiền tính bằng đô la với hai chữ số thập phân. Văn bản mà bảng tính có thể hiểu là công thức (bắt đầu bằng `=`, `+`, `-` hoặc `@`) được thêm `'` ở đầu để giữ nguyên là văn bản.

## Theo tờ (chỉ XLSX)

| Cột | Nội dung |
|---|---|
| Tờ | Tên tờ (kèm tên PDF khi tệp không mở) |
| Hạng mục | Tên hạng mục |
| Khối lượng | Khối lượng của hạng mục đó trên tờ đó, theo đơn vị của nó |
| Đơn vị | Đơn vị của hạng mục |
| Dấu | Số lượng dấu |

## Dấu (chỉ XLSX)

Mỗi dấu một hàng.

| Cột | Nội dung |
|---|---|
| Tờ | Tên tờ |
| Hạng mục | Tên hạng mục |
| Loại | Tuyến, Diện tích hoặc Đếm |
| Khối lượng | Chiều dài, diện tích thực, hoặc 1 |
| Đơn vị | LF hoặc m; SF, SY hoặc m²; EA |
| Chi tiết | Tuyến: độ dài các đoạn, các đoạn bị trừ được đánh dấu "(trừ)", và "trừ (chiều dài) trên (chiều dài) đã vẽ". Diện tích: diện tích gộp và diện tích khoét khi có khoét, và chu vi. "Tờ không có tỷ lệ" cho dấu không có tỷ lệ. |
| Khu vực dự thầu | Chỉ khi bóc tách có khu vực dự thầu: diện tích của dấu, hoặc "Không có khu vực dự thầu" |

## Theo khu vực dự thầu (chỉ XLSX, khi bóc tách có khu vực dự thầu)

| Cột | Nội dung |
|---|---|
| Khu vực dự thầu | Tên khu vực, hoặc "Không có khu vực dự thầu" |
| Hạng mục | Hạng mục, hoặc cấu kiện thụt lề bên dưới |
| Đơn vị | Đơn vị của hạng mục hoặc cấu kiện |
| Khối lượng | Đo trong khu vực đó (cấu kiện: công thức trên tổng của khu vực) |
| Khối lượng kể cả hao hụt | Khối lượng × (1 + hao hụt) |
| Vật liệu, Nhân công, Tổng | Thành tiền đến từng xu, như trên Dự toán |
| Ghi chú | Công thức, lỗi và dấu không có tỷ lệ, như trên Dự toán |

Mỗi khu vực kết thúc bằng một hàng "tiểu tổng (tên)" có chi phí là công thức `SUM` trên các hàng của nó; hàng cuối cùng, **Tất cả khu vực dự thầu**, cộng các tiểu tổng. Trang tính **Dấu** khi đó có cột thứ bảy, **Khu vực dự thầu**.

## Tỷ lệ (chỉ XLSX)

Mỗi tờ có tỷ lệ hoặc dấu một hàng.

| Cột | Nội dung |
|---|---|
| Tờ | Tên tờ |
| Tỷ lệ | Tên tỷ lệ đặt sẵn, hoặc tỷ lệ đã hiệu chuẩn, hoặc "Không có tỷ lệ" |
| Cách đặt | "Đặt sẵn", hoặc "Hiệu chuẩn theo (khoảng cách bạn đã nhập)" |
| Feet trên mỗi đơn vị PDF | Hệ số tỷ lệ chính xác mà TakeoffCraft dùng |

## Tên tệp

- `(name).xlsx` và `(name).csv`, trong đó tên lấy từ PDF đầu tiên được mở trong bóc tách.
- CSV là UTF-8 có dấu thứ tự byte và kết thúc dòng kiểu Windows, mà các chương trình bảng tính trên mọi nền tảng đều đọc được.
