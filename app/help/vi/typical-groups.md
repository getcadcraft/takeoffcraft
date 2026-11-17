---
title: Nhóm điển hình
summary: Bóc tách một căn, phòng hoặc tầng điển hình một lần rồi đếm nó theo số lần nó lặp lại, thay đổi số đếm sau này, và xem dấu nào là điển hình.
keywords: điển hình, nhóm điển hình, typical group, lặp lại, repeat, số lần lặp, nhân, đơn vị, phòng khách sạn, căn hộ, tầng điển hình, x24, bản sao
from: 42c3a372
---

Một tòa nhà thường lặp lại: 24 phòng khách sạn giống hệt nhau, 6 tầng điển hình, 40 ô đỗ xe có cùng vạch kẻ. Một **nhóm điển hình** cho phép bạn bóc tách một trong số đó và đếm nó theo số lần nó lặp lại, mà không cần vẽ các bản sao.

## Tạo nhóm điển hình

1. Bóc tách một đơn vị: tường, sàn, ổ cắm của nó — bất kỳ hạng mục nào.
2. Chọn các dấu của nó bằng công cụ {{ui:Chọn}}: nhấp một dấu, rồi {{key:Shift}} + nhấp các dấu còn lại ([Chọn dấu](topic:copy-paste#select-the-marks)).
3. Dưới **Dấu đã chọn**, mở {{ui:Điển hình}} và chọn {{ui:Nhóm điển hình mới…}}.
4. Đặt tên (`Căn A`) và số lần nó lặp lại (`24`), rồi chọn {{ui:Tạo nhóm}}.

Mọi khối lượng của các dấu đó giờ được tính 24 lần: một đoạn tường 10 ft cho 240 ft, sàn 80 SF cho 1,920 SF, hai ổ cắm cho 48. Chi phí theo đó, và công thức định mức thấy tổng đã lặp lại (`N` cũng tính mỗi đoạn 24 lần).

Trên tờ, một khung nét đứt bao quanh các dấu của nhóm, kèm tên và số đếm, như **Căn A ×24**.

## Thay đổi sau

Các nhóm được liệt kê dưới **Nhóm điển hình** trong bảng bên phải:

- Đổi số sau **×** để thay đổi số lần nó được tính (từ 1 đến 10,000). Mọi khối lượng được cập nhật.
- Đổi tên trong ô tên của nó.
- Biểu tượng hộp chọn các dấu của nó (và hiện tờ của chúng).
- Thùng rác xóa nhóm. Các dấu của nó vẫn còn, được đếm một lần.

Để thêm dấu vào nhóm hoặc bỏ ra, chọn chúng và chọn nhóm (hoặc {{ui:Không điển hình (×1)}}) dưới {{ui:Điển hình}}.

## Điều cần biết

- Các dấu của một nhóm có thể nằm trên nhiều tờ, và thuộc bất kỳ hạng mục nào. Mỗi dấu thuộc nhiều nhất một nhóm.
- Các bản sao bạn dán không nằm trong nhóm: nếu không, một bản sao đã dán của một đơn vị điển hình sẽ lại được đếm 24 lần. Dùng nhóm cho "cùng một thứ N lần", và sao chép rồi dán cho các bản sao bạn vẽ.
- Các dấu chỉ được vẽ một lần, nên chế độ xem 3D và PDF đã đánh dấu chỉ hiện một đơn vị; khối lượng, các bản xuất và bảng theo tờ đếm nó ×N. Trang tính Dấu của bản xuất Excel cho biết dấu nào là điển hình và chúng được đếm bao nhiêu lần.
- Với các khu vực dự thầu, các dấu của một nhóm được đếm ×N trong khu vực dự thầu của chính nó.
