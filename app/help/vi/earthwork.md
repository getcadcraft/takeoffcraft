---
title: Đào đắp và cao độ điểm
summary: Đánh dấu cao độ điểm trên mặt bằng công trường, chuyển cho CivilCraft để tạo bề mặt và tính đào đắp, và tính khối lượng đào đơn giản tại đây.
keywords: đào đắp, đào, đắp, đào và đắp, san nền, cao độ điểm, cao độ, địa hình, bề mặt, tam giác hóa, civilcraft, điểm, pnezd, rãnh
from: a898e508
---

TakeoffCraft đo những gì được vẽ trên tờ bản vẽ. Đào đắp cần một bề mặt đất, nên tính năng này dùng chung với CivilCraft, ứng dụng tạo bề mặt từ các điểm, san nền và tính đào, đắp và biểu đồ khối lượng đất.

## Đào đơn giản tại đây

Với một diện tích móng đào đến một độ sâu, một hạng mục diện tích có **chiều sâu** là đủ: khối lượng = diện tích × chiều sâu. [Gói công việc](topic:trade-packs) tổng thầu có một hạng mục đào khối lớn (khối lượng nguyên thổ, khối lượng đất rời và số chuyến xe tải) và một hạng mục rãnh tiện ích (đào, lót nền và lấp đất theo chiều dài và chiều sâu).

## Cao độ điểm cho CivilCraft

1. Đặt tỷ lệ cho tờ mặt bằng công trường.
2. Tạo một hạng mục **Đếm**, ví dụ "Cao độ hiện trạng", rồi nhấp vào từng cao độ điểm trên tờ.
3. Chọn một dấu và nhập {{ui:Cao độ}} của nó trong bảng Dấu đã chọn: `102.5`, `102'-6"` hoặc `31.24 m`. Cao độ âm và bằng không đều được.
4. Mở menu {{ui:Xuất}} và chọn {{ui:Cao độ điểm}}. Bạn nhận được tệp điểm (`.csv`) có các cột Point, Northing, Easting, Elevation và Description, mỗi dấu điểm trên tờ đang mở một hàng.
5. Mở tệp đó trong CivilCraft (xem [Nhập điểm](app:civilcraft/import-points)). Ứng dụng tạo bề mặt từ các điểm ([Tạo bề mặt](app:civilcraft/build-surface)); từ đó nó so sánh các bề mặt và cho ra đào, đắp ([Khối lượng](app:civilcraft/volumes)).

Northing và easting là tọa độ riêng của tờ, tính bằng feet, đo từ góc trang theo tỷ lệ của tờ: khoảng cách và khối lượng giữa các điểm là đúng, nhưng đó không phải tọa độ khảo sát của công trường. Khi cần, hãy chuyển chúng sang tọa độ công trường trong CivilCraft.

:::note
Các điểm từ các tờ khác nhau không dùng chung tọa độ, nên khi xuất chỉ lấy tờ đang mở. Cao độ được lưu cùng bóc tách và được giữ nguyên khi sao chép và dán.
:::

## Đào và đắp từ CivilCraft

Khối lượng đào đắp của CivilCraft trả về dưới dạng hai hạng mục để bạn định giá:

1. Trong CivilCraft, san nền các nền và hành lang, rồi chọn {{ui:Gửi sang TakeoffCraft}} dưới **Đào đắp** ([Khối lượng đào đắp](app:civilcraft/volumes)). Ứng dụng lưu một tệp khối lượng (`.quantities.json`).
2. Trong TakeoffCraft, mở tệp bằng {{ui:Mở bóc tách}}, hoặc kéo thả tệp vào ứng dụng. Bóc tách của bạn vẫn mở: tệp thêm **Đào đắp: đào** và **Đào đắp: đắp** dưới dạng [khối lượng nhập tay](topic:create-items#typed-quantities-no-drawing), tính bằng yard khối (CY) với dự án theo feet, hoặc mét khối (m³) với dự án theo mét. Đây là một bước: {{key:Mod+Z}} sẽ hoàn tác.
3. Đổi tên chúng, đặt hao hụt, đơn giá và định mức theo ý bạn.

Khi thiết kế thay đổi, gửi lại từ CivilCraft và mở tệp mới: hai hạng mục cũ sẽ nhận khối lượng mới. Tên, đơn giá, hao hụt và định mức của chúng được giữ nguyên như bạn đã đặt. Nếu đơn vị của dự án đã thay đổi, thanh trạng thái sẽ báo: hãy kiểm tra đơn giá. Tệp từ một dự án CivilCraft khác sẽ thêm hai hạng mục riêng của nó.

Khối lượng là khối lượng nguyên thổ, như CivilCraft đo (phương pháp lưới): không có co ngót hay nở rời. Hãy thêm chúng vào hao hụt, hoặc dùng công thức như `Q * 1.25` để có khối lượng đất rời. Trình chỉnh sửa hạng mục cho biết mỗi khối lượng đến từ đâu và khi nào; cột ghi chú của dự toán cũng ghi điều đó.

:::note
Tệp khối lượng là JSON thuần (`"format": "cadcraft-quantities"`), nên một tập lệnh hoặc chương trình khác cũng có thể ghi tệp này: tên ứng dụng, một dự án, và các hạng mục gồm khóa, tên, đơn vị và khối lượng.
:::
