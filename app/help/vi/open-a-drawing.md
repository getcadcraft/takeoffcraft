---
title: Mở bản vẽ DWG hoặc DXF
summary: Mở tệp bản vẽ dưới dạng các tờ (không gian mô hình và mọi bố cục), bắt đầu với tỷ lệ mà bản vẽ cung cấp, hiện hoặc ẩn các lớp, và đưa các bản vẽ liên kết vào.
keywords: dwg, dxf, cad, bản vẽ, mở bản vẽ, bố cục, không gian mô hình, không gian giấy, tờ, đơn vị, insunits, tỷ lệ khung nhìn, xref, bản vẽ liên kết, lớp, đóng băng, không có pdf, in, không in
from: d8c3f504
---

TakeoffCraft mở bản vẽ DWG hoặc DXF như cách nó mở PDF: bạn không cần in ra PDF trước. Đếm trực tiếp từ bản vẽ là chính xác, vì bản vẽ biết mỗi đối tượng là gì. Xem [Đếm từ bản vẽ](topic:count-from-a-drawing).

## Mở bản vẽ

1. Chọn {{ui:Mở bản vẽ}} trong nhóm {{ui:Tệp}}, hoặc nhấn {{key:Mod+O}}.
2. Chọn tệp DWG hoặc DXF. Bạn có thể chọn nhiều tệp, và chọn cả PDF cùng lúc.
3. Chọn Mở.

Bạn cũng có thể thả tệp bản vẽ lên TakeoffCraft, như với PDF. Không có gì được tải lên: trình duyệt đọc tệp trên máy tính của bạn.

TakeoffCraft đọc DWG từ AutoCAD 2000 đến 2018 và DXF ASCII từ R12 đến 2018. Nó từ chối DXF nhị phân (hãy lưu thành ASCII, hoặc thành DWG) và tệp không thuộc hai loại trên, rồi cho biết lý do. Tệp bị hỏng vẫn mở với phần đọc được, và có thông báo cho biết; số đếm có thể không đầy đủ.

## Tờ

- **Mô hình** là không gian mô hình của bản vẽ.
- **Mỗi bố cục** (thẻ không gian giấy) là một tờ, được đặt tên theo thẻ của nó, theo thứ tự thẻ. Một bố cục hiển thị mô hình qua các khung nhìn của nó, như khi in.

Thu phóng, di chuyển khung nhìn, bắt điểm vào các đường riêng của bản vẽ, dấu, ghi chú, {{ui:Hiệu chuẩn}} và phần còn lại hoạt động như trên PDF. Các tờ của bản vẽ được lưu trong bóc tách theo tên tệp và dấu vân tay nội dung của nó, như PDF: mở lại cùng tệp và các dấu vẫn nằm trên các tờ của nó.

## Tỷ lệ

Một tờ bắt đầu với tỷ lệ mà bản vẽ cung cấp:

- **Một bố cục** lấy tỷ lệ của khung nhìn lớn nhất. Tỷ lệ như 1/2" = 1'-0" được gọi theo đúng tên đặt sẵn của nó; mọi tỷ lệ khác được hiển thị là "Từ khung nhìn của bản vẽ: 1" = 2.5'". Nếu một bố cục có khung nhìn ở tỷ lệ khác, khung lớn nhất quyết định tỷ lệ của tờ: hãy kiểm tra các khung khác bằng {{ui:Kiểm tra}}.
- **Mô hình** lấy đơn vị của bản vẽ (inch, mm, ft…) làm tỷ lệ, "Đơn vị bản vẽ (inch)".
- **Bản vẽ không có đơn vị** (bản vẽ không cho biết một đơn vị là inch hay milimét) không có tỷ lệ: tờ ghi "Không có tỷ lệ", và việc đo trên đó bị từ chối, như với PDF không có tỷ lệ. Đếm không cần tỷ lệ. Hãy đặt tỷ lệ bằng {{ui:Hiệu chuẩn}}.

{{ui:Hiệu chuẩn}}, {{ui:Kiểm tra}} và danh sách {{ui:Đặt sẵn}} thay đổi tỷ lệ bất cứ lúc nào và được ưu tiên hơn tỷ lệ của bản vẽ. Danh sách đặt sẵn tắt trên Mô hình, vì Mô hình không có khổ giấy.

## Lớp

{{ui:Lớp}} trên thanh tờ liệt kê các lớp của bản vẽ, cùng số đối tượng mỗi lớp có trên tờ này. Các lớp mà tệp đã tắt hoặc đóng băng sẽ ẩn ngay từ đầu. Bỏ chọn một lớp để ẩn nó, hoặc chọn một lớp đang ẩn để hiện: tờ vẽ lại, và phần bị ẩn không được tính trong số đếm hoặc trong các đối tượng được đưa cho {{ui:Đo bản vẽ}}, trừ khi bạn yêu cầu đếm cả các lớp ẩn. {{ui:Hiện tất cả}} hiện mọi lớp; {{ui:Về lớp của tệp}} hoàn tác các thay đổi của bạn. Lựa chọn lớp thuộc phiên làm việc này, không thuộc tệp bóc tách.

## Bản vẽ liên kết (xref)

Bản vẽ có liên kết các bản vẽ khác sẽ hiển thị chúng ở vị trí chèn. TakeoffCraft tìm bản vẽ liên kết trong các **tệp đang mở**, theo tên tệp: hãy mở bản vẽ chủ và bản vẽ liên kết cùng nhau (hoặc lần lượt). Cho đến khi đó, thanh trạng thái cho biết có bao nhiêu bản vẽ liên kết chưa tìm thấy, phần chúng vẽ đang thiếu, và số đếm sẽ nêu điều đó.

## Giới hạn

- Các đối tượng mà TakeoffCraft không đọc hoặc đặt được (đối tượng proxy, lớp không rõ) được liệt kê theo loại trong cửa sổ đếm; chúng không bao giờ bị bỏ đi mà không có thông báo.
- Bản vẽ rất lớn được vẽ một phần, và số đếm dừng ở một giới hạn, có thông báo. Hãy mở bản in PDF của bản vẽ như vậy.
- Bản vẽ được vẽ bằng màu đen và màu riêng của nó, làm tối cho giấy trắng. Bảng kiểu nét in và gán bút không được áp dụng.
