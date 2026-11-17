---
title: Đưa khối lượng từ tệp IFC 4.3
summary: Mở tệp IFC 4.3 của đường, đường sắt, cầu hoặc công tác đất và nhận số đếm theo lớp, cùng chiều dài, diện tích và thể tích mà tệp nêu, dưới dạng khối lượng định kiểu.
keywords: ifc, ifc4x3, ifc 4.3, đường, đường sắt, cầu, mặt đường, bó vỉa, lớp kết cấu, đào đắp, gối cầu, hạ tầng, khối lượng, bim, dân dụng, khối lượng định kiểu
from: 6b08c2c4
---

Một tệp IFC 4.3 có thể chứa đường, đường sắt, cầu, công trình thủy và các bộ phận của chúng: mặt đường, các lớp kết cấu, bó vỉa, ray, công tác đất, gối cầu, cọc và nhiều hơn nữa. TakeoffCraft đọc những thứ đó và biến chúng thành khối lượng định kiểu mà bạn có thể định giá.

## Mở tệp

1. Chọn {{ui:Mở bản vẽ}} trong nhóm {{ui:Tệp}}, hoặc nhấn {{key:Mod+O}}.
2. Chọn tệp IFC (bạn có thể chọn cùng với PDF), hoặc thả tệp lên TakeoffCraft.

Một khối lượng định kiểu được tạo cho mỗi lớp và mỗi kiểu đã định nghĩa, ví dụ "Pavement (flexible): đếm", và, khi tệp có nêu, "chiều dài" tính bằng m, "diện tích" tính bằng m² và "thể tích" tính bằng m³. Ghi chú của mỗi hạng mục cho biết có bao nhiêu cấu kiện đã được đếm và bao nhiêu cấu kiện không nêu khối lượng. Mở một tệp mới hơn cùng tên sẽ cập nhật các khối lượng đó thay vì thêm mới.

## Không làm gì

- Đọc các bộ khối lượng (IfcElementQuantity) mà tệp mang theo. Nó không đo hình dạng 3D, nên một cấu kiện không có bộ khối lượng vẫn được đếm nhưng không thêm chiều dài, diện tích hay thể tích.
- Chỉ đọc các lớp hạ tầng của IFC 4.3. Tệp công trình dân dụng (tường, cửa, sàn) không được chuyển thành khối lượng ở đây; tệp không phải IFC 4.3 sẽ thông báo như vậy và không đưa gì vào.
- Đơn vị là đơn vị riêng của tệp, được đổi sang mét.
