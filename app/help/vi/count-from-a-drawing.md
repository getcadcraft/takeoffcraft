---
title: Đếm từ bản vẽ
summary: Đếm khối, đối tượng trên một lớp hoặc văn bản trực tiếp từ DWG hoặc DXF: chính xác, xử lý khối lồng nhau, biến thể khối động và mảng khối, trong một bước hoàn tác.
keywords: đếm từ bản vẽ, đếm CAD, đếm khối, đếm khối, chèn, tên khối, khối lồng nhau, khối động, biến thể, minsert, mảng, lớp, loại đối tượng, đường tròn, văn bản, thuộc tính, thẻ, lớp ẩn, đếm chính xác, cách làm, cửa, thiết bị
from: 5060e24e
---

{{ui:CAD count}} trên thanh tờ (lệnh **Đếm từ bản vẽ** trong các kiểu menu khác) đếm những gì một DWG hoặc DXF khai báo là có. Trong khi {{ui:Auto count}} tìm hình ảnh của một ký hiệu và có thể bỏ sót hoặc tìm nhầm, công cụ này đếm các đối tượng: mỗi tham chiếu của khối có tên `DOOR-36` là một cửa. Hãy mở bản vẽ trước: [Mở bản vẽ DWG hoặc DXF](topic:open-a-drawing).

## Đếm một khối

1. Mở một tờ của bản vẽ. {{ui:CAD count}} nằm trên thanh tờ.
2. Chọn nó. Cửa sổ liệt kê các khối cùng số lượng của mỗi khối. Tìm theo tên, rồi chọn một khối.
3. Kiểm tra dòng dưới danh sách: "22 tìm thấy, 22 sẽ thêm."
4. Dưới {{ui:Add to}}, chọn một hạng mục đếm, hoặc giữ {{ui:A new count item}} và đặt tên.
5. Chọn nút thêm, nút này ghi rõ số lượng: {{ui:Add 22 marks}}. Các dấu xuất hiện tại điểm chèn của khối, và số lượng của hạng mục chính là số đếm.

Đây là một bước hoàn tác: {{key:Mod+Z}} lấy các dấu (và một hạng mục mới) đi cùng lúc. Bảng dự toán, bảng tính và PDF đã đánh dấu coi hạng mục như mọi hạng mục đếm khác.

### Được đếm những gì

- **Mọi tham chiếu của tên khối**, bất kể tỷ lệ và góc, trong không gian mô hình hay không gian Giấy. Tên khối không phân biệt chữ hoa, chữ thường.
- **Mảng khối** (MINSERT): mỗi bản sao trong mảng là một.
- **Khối lồng nhau.** Một khối đặt bên trong khối khác được đếm ở mọi độ sâu. Danh sách ghi "6 bên trong các khối khác"; bỏ chọn {{ui:Count blocks inside other blocks too}} để chỉ đếm các tham chiếu đặt trực tiếp trong bản vẽ.
- **Khối động.** Một khối động được đếm dưới tên riêng của nó, không dưới các bản sao vô danh (`*U12`) mà tệp giữ lại. Các trạng thái của nó được liệt kê riêng ("Single 12, Double 4"): chọn một trạng thái để chỉ đếm những cái đó, hoặc {{ui:Every variant}}. Khi tệp không cho biết một bản sao hiển thị trạng thái nào, các bản sao đó được liệt kê là "(không rõ trạng thái)".
- **Lọc theo lớp.** Một khối nằm trên nhiều lớp: chọn một lớp dưới {{ui:On layer}}.

### Những gì không được đếm

- **Lớp ẩn.** Đối tượng trên một lớp đang tắt hoặc bị đóng băng trong tệp (hoặc bạn đã ẩn trong {{ui:Layers}}) sẽ bị bỏ ra, và dòng đó cho biết có bao nhiêu: "3 trên lớp ẩn bị bỏ ra". Đánh dấu Đếm cả chúng để đưa chúng vào.
- **Bản vẽ liên kết chưa mở** không được đếm; cửa sổ nói rõ điều đó.
- **Đối tượng chồng khít lên một đối tượng cùng loại** được đếm là hai (chúng là hai đối tượng) và cửa sổ nói rõ điều này: thường là một sơ suất bản vẽ đáng xem lại.

## Tờ này hiển thị, hoặc toàn bộ bản vẽ

- **Những gì tờ này hiển thị** đếm các đối tượng mà tờ thể hiện: trên một bố cục (layout), các đối tượng mô hình bên trong các khung nhìn (viewport) của nó (một lớp bị đóng băng trong khung nhìn sẽ không được đếm ở đó), cộng với các đối tượng riêng của bố cục.
- **Toàn bộ bản vẽ, mỗi đối tượng một lần** đếm không gian mô hình một lần, với các dấu trên tờ Mô hình, và không đếm lại những gì nhiều bố cục hiển thị.

Đếm những gì một bố cục hiển thị và đếm những gì Mô hình hiển thị cho cùng một số lượng với cùng các đối tượng; đừng cộng cả hai vào một hạng mục.

## Đếm lại số đếm

Đếm lại cùng khối với cùng hạng mục chỉ thêm những gì mới: "22 đã đếm rồi." Mỗi dấu đại diện cho một đối tượng.

## Theo lớp và loại

Ở {{ui:By layer and type}}, chọn một lớp và một loại đối tượng (đường tròn, đa tuyến, tô bóng…): "mọi đường tròn trên E-LITE". Đánh dấu {{ui:Also count objects inside blocks}} để đưa vào các đối tượng bên trong định nghĩa khối, tại mỗi nơi khối được chèn.

## Theo văn bản

Ở {{ui:By text}}, gõ văn bản, như `A3`, và chọn xem nó khớp đúng như vậy, có chứa nó, hay khớp như một từ nguyên vẹn. Đối tượng văn bản, văn bản đường dẫn nhiều (multileader) và **giá trị thuộc tính** của khối đều được đếm (một thuộc tính thẻ `ITEM = A3` sẽ được tìm thấy); chọn {{ui:In attribute}} để chỉ đếm một thuộc tính. Các văn bản phổ biến nhất được liệt kê để nhấp.

## Khi nào dùng Đếm tự động thay thế

Dùng {{ui:Auto count}} cho các PDF và cho các ký hiệu trong bản vẽ không phải là khối (vẽ rời, hoặc đã phân rã). Ký hiệu vẽ dưới dạng khối thì đếm ở đây.
