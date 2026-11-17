---
title: Đo các đoạn tuyến tính
summary: Đo tường, đường ống, khung cửa và các chiều dài khác dưới dạng đoạn, với các đoạn thẳng, cung tròn và bắt 45 độ bằng Shift.
keywords: tuyến tính, chiều dài, đoạn, đa tuyến, tường, lf, feet dài, cung tròn, đường cong, 45 độ, ortho, bắt điểm, đoạn thẳng, polylength, khấu trừ, lỗ mở, cửa, khe hở, nhập, đã nhập, tọa độ, khoảng cách, khoảng cách trực tiếp, polar
from: c669deff
---

Một hạng mục tuyến tính đo chiều dài. Mỗi đoạn là một chuỗi điểm: các đoạn thẳng, và các cung khi bạn bật chế độ cung tròn. Một hạng mục có thể có bao nhiêu đoạn cũng được, trên bao nhiêu tờ cũng được.

Trước khi bắt đầu: tờ cần có tỷ lệ ([Đặt tỷ lệ](topic:set-the-scale)) và bạn cần một hạng mục tuyến tính ([Tạo hạng mục bóc tách](topic:create-items)).

Trên một PDF vector, các lần nhấp của bạn sẽ bắt vào chính các đường của bản vẽ: đầu mút, trung điểm và giao điểm ([Bắt điểm vào các đường của bản vẽ](topic:snap-to-the-drawing); {{key:F3}} sẽ tắt chế độ này).

## Vẽ một đoạn

1. Nhấp hạng mục tuyến tính dưới {{ui:Hạng mục}}.
2. Chọn {{ui:Tuyến tính}} trên thanh công cụ, hoặc nhấn {{key:L}}.
3. Nhấp điểm bắt đầu của đoạn.
4. Nhấp từng góc dọc theo nó.
   Thanh trạng thái hiển thị "Chiều dài" (đoạn đã vẽ đến con trỏ) và "đoạn" (đoạn thẳng bạn đang vẽ), theo feet và inch.
5. Kết thúc đoạn: nhấp đúp điểm cuối cùng, nhấn {{key:Enter}}, hoặc nhấp chuột phải.
   Đoạn được vẽ theo màu của hạng mục và trở thành dấu đang được chọn. Chiều dài của hạng mục trong danh sách {{ui:Hạng mục}} và bảng {{ui:Khối lượng}} sẽ tăng lên.

Công cụ vẫn ở {{ui:Tuyến tính}}, nên bạn có thể bắt đầu đoạn tiếp theo ngay. Nhấn {{key:Esc}} để quay về {{ui:Chọn}}.

Khi đang vẽ:

- {{key:Backspace}} (hoặc {{key:Delete}}) xóa điểm cuối cùng.
- {{key:Esc}} bỏ đoạn chưa hoàn tất.
- Kéo sẽ di chuyển tờ và con lăn sẽ phóng to, mà không thêm điểm nào.

:::mac
Trên bàn di chuột Mac, nhấp chuột phải là chạm bằng hai ngón (bật nhấp phụ trong System Settings, mục Trackpad). TakeoffCraft chỉ đọc nút phụ, nên một Control-click có thể được coi là nhấp thường và thêm một điểm. Nhấp đúp hoặc {{key:Enter}} luôn kết thúc.
:::

:::touch
Trên màn hình cảm ứng, chạm để đặt điểm, kéo một ngón để di chuyển tờ và chụm hai ngón để phóng to. Kết thúc bằng một lần nhấn giữ, một lần chạm đúp, hoặc {{ui:Xong}} trên thanh dưới tờ ({{ui:Sau}} sẽ lấy lại điểm cuối cùng). Xem [Khắc phục sự cố](topic:troubleshooting#touch-screens).
:::

## Đường thẳng theo bước 45°

Giữ {{key:Shift}} khi bạn đặt một điểm. Đoạn từ điểm cuối cùng sẽ bắt về hướng 0°, 45°, 90° hoặc 135° gần nhất, giữ chiều dài bạn đã kéo dọc theo nó. Thanh trạng thái nhắc bạn: "Shift bắt về 45°".

Trong chế độ cung tròn, điều này áp dụng cho chỗ cung kết thúc: dây cung của cung đi theo bước 45° tính từ chỗ nó bắt đầu. Điểm bạn nhấp trên đường cong không bao giờ bị bắt.

## Cung tròn và tường cong

1. Khi đang vẽ một đoạn, đặt điểm nơi đường cong bắt đầu.
2. Bật chế độ cung tròn: chọn {{ui:Cung tròn}} trên thanh công cụ hoặc nhấn {{key:R}}. Nút sẽ được giữ bật.
3. Nhấp một điểm bất kỳ trên đường cong, ở khoảng giữa của nó.
   Thanh trạng thái thêm "(cung tròn: nhấp chỗ nó kết thúc)" và bản xem trước uốn cong qua điểm bạn đã nhấp.
4. Nhấp chỗ đường cong kết thúc.
   Cung được thêm vào. Chiều dài của nó là chiều dài cung chính xác, không phải một chuỗi các dây ngắn.
5. Nhấp một điểm khác trên đường cong tiếp theo và điểm kết thúc của nó để tiếp tục vẽ cung, hoặc nhấn {{key:R}} lần nữa để quay về các đoạn thẳng.

{{key:Backspace}} hoặc {{key:Esc}} trước hết bỏ điểm đang chờ trên đường cong; nhấn lại để xóa điểm như bình thường.

## Nhập chiều dài và tọa độ

Sau điểm đầu tiên, bạn có thể gõ vị trí của điểm tiếp theo thay vì nhấp. Gõ một chữ số, `@` hoặc `#`: một hộp {{ui:Nhập}} sẽ mở trên thanh trạng thái với những gì bạn đã gõ. Nhấn {{key:Enter}} để đặt điểm; hộp vẫn mở cho điểm tiếp theo.

| Gõ | Điểm tiếp theo nằm ở |
|---|---|
| `12'6"` | Cách điểm cuối cùng 12'-6", về phía con trỏ (chỉ hướng, rồi gõ chiều dài) |
| `12'6"<45` | Cách 12'-6" ở góc 45°, đo ngược chiều kim đồng hồ từ bên phải màn hình (`<90` là lên, `<-90` là xuống) |
| `@6',-4'` | Cách điểm cuối cùng 6' sang phải và 4' xuống dưới |
| `6',4'` (hoặc `#6',4'`) | Cách điểm đầu tiên của đoạn này 6' sang phải và 4' lên trên |

Chiều dài được gõ như mọi nơi trong TakeoffCraft ([Định dạng nhập liệu](topic:entry-formats)): `12'-6 1/2"`, `12.5` (feet), `30"`, `3.2 m`. "Phải" và "lên" là theo cách bạn nhìn tờ, kể cả khi trang PDF đã được xoay.

{{key:Enter}} trên hộp trống sẽ kết thúc đoạn, giống như {{key:Enter}} trên tờ; {{key:Esc}} đóng hộp và giữ đoạn tiếp tục. Các điểm được gõ đi qua cùng quy tắc như các lần nhấp: khấu trừ, cung và đóng một diện tích đều hoạt động. Hộp này cũng dùng được trong {{ui:Diện tích}} và {{ui:Lỗ khoét}}; sau tâm của một vòng tròn, nó nhận bán kính.

## Khấu trừ một phần của đoạn

Một đoạn tường đi qua một cửa đi hay một mặt tiền cửa hàng có thể được vẽ thẳng qua và vẫn chỉ tính phần tường: các đoạn băng qua ô mở là **khấu trừ**. Chúng được vẽ bằng nét đứt và mảnh, và không được tính.

Khi đang vẽ:

1. Đặt điểm nơi ô mở bắt đầu.
2. Chọn {{ui:Khấu trừ}} trên thanh công cụ hoặc nhấn {{key:E}}. Nút sẽ được giữ bật và thanh trạng thái ghi rằng các đoạn tiếp theo là khấu trừ.
3. Nhấp chỗ ô mở kết thúc. Đoạn được vẽ bằng nét đứt; "Chiều dài" trên thanh trạng thái loại nó ra.
4. Nhấn {{key:E}} lần nữa và tiếp tục theo tường.

Sau khi vẽ: chọn đoạn. Dưới **Dấu đã chọn**, mỗi đoạn có một hộp {{ui:Khấu trừ}}: đánh dấu để khấu trừ đoạn đó, bỏ đánh dấu để tính lại. Mỗi thay đổi là một bước hoàn tác.

Một đoạn luôn giữ lại ít nhất một đoạn được tính. Khi đó bảng hiển thị **Khấu trừ** (chiều dài đã khấu trừ) và **Đã vẽ** (toàn bộ đoạn); **Chiều dài**, khối lượng của hạng mục, diện tích tường và chi phí đều dùng chiều dài không tính khấu trừ. Chế độ xem kiểm tra 3D để một khe hở trên tường, PDF đã đánh dấu vẽ các khấu trừ bằng nét đứt, và trang **Dấu** khi xuất sẽ liệt kê chúng.

Di chuyển một góc sẽ giữ lại các khấu trừ. Thêm hoặc bớt điểm (bằng cách vẽ lại đoạn) sẽ bắt đầu không có khấu trừ.

## Xem chi tiết của một đoạn

Chọn {{ui:Chọn}} ({{key:V}}) và nhấp đoạn. **Dấu đã chọn** ở bên phải hiển thị:

- hạng mục mà nó thuộc về (chọn hạng mục tuyến tính khác trong danh sách để chuyển đoạn sang đó),
- tờ,
- **Chiều dài** theo feet và inch và theo LF,
- số **Đoạn thẳng**, và **Diện tích tường** khi hạng mục có chiều cao,
- chiều dài của từng đoạn, với "(cung)" sau các cung, và hộp {{ui:Khấu trừ}} của nó.

Trên tờ, mỗi đoạn của đoạn đang chọn được ghi nhãn bằng chiều dài của nó.

## Sửa một đoạn

- **Di chuyển một điểm**: chọn đoạn, rồi kéo một trong các núm góc vuông của nó. Giữ {{key:Shift}} để bắt đoạn đã di chuyển về bước 45°. Một cung giữ nguyên độ cong của nó.
- **Uốn một cung**: một đoạn được chọn hiển thị một núm tròn ở giữa mỗi cung. Kéo nó: cung đi qua chỗ bạn thả ra, nên nó cong nhiều hơn, ít hơn, hoặc theo chiều ngược lại. Nếu kéo nó lên đường thẳng nối hai đầu, nó sẽ trở thành một đoạn thẳng. {{key:Mod+Z}} hoàn tác ("Uốn cung tròn").
- **Xóa một đoạn**: chọn nó và nhấn {{key:Delete}}, chọn {{ui:Xóa}} trong menu {{ui:Thêm}} của thanh công cụ, hoặc {{ui:Xóa dấu}} trong bảng.
- **Hoàn tác**: {{key:Mod+Z}}; làm lại bằng {{key:Mod+Y}}.

Hiện chưa thể chèn một điểm vào giữa một đoạn. Hãy xóa đoạn và vẽ lại.

## Diện tích tường

Gán cho hạng mục tuyến tính một {{ui:Chiều cao}} (ví dụ `9'-0"`). Khi đó nó báo cáo **Diện tích tường (A)** = chiều dài × chiều cao, theo SF (hoặc m² với hạng mục hệ mét), và diện tích tường được đưa vào cột ghi chú của bảng tính xuất ra. Dùng nó trong định mức cho ván, sơn hoặc cách nhiệt: xem [Định mức và công thức](topic:assemblies).
