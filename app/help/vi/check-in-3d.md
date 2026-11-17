---
title: Kiểm tra bóc tách trong 3D
summary: Xem tường, sàn và dấu đếm của tờ đang mở đứng trên bản vẽ, xoay quanh chúng, và nhấn vào một cái để chọn dấu của nó.
keywords: png, ảnh, hình, ảnh chụp màn hình, xếp, tầng, các tầng, cao độ, glb, gltf, xuất 3d, độ dày tường, cao độ đáy, lỗ mở, đỉnh cửa, 3d, ba chiều, kiểm tra, xem, tường, chiều cao tường, sàn, chiều sâu, thể tích, xoay, mô hình, chọn, phối cảnh, đẳng trắc
from: fb16b4f7
---

Chế độ xem 3D là một bước kiểm tra, không phải một bản vẽ thứ hai: nó dựng bóc tách của tờ trên màn hình thẳng đứng trên chính tờ đó, để một bức tường bị thiếu, một sàn bị lặp đôi hoặc một dấu đếm lạc chỗ hiện ra ngay.

Trước khi bắt đầu: tờ cần có tỷ lệ ([Đặt tỷ lệ](topic:set-the-scale)). Chiều cao và chiều sâu cần đơn vị foot thực, nên với một tờ không có tỷ lệ, {{ui:3D}} sẽ thông báo điều đó và giữ ở tờ phẳng.

## Mở chế độ xem 3D

1. Hiển thị tờ bạn muốn kiểm tra.
2. Chọn {{ui:3D}} trên thanh hiển thị tên và tỷ lệ của tờ, hoặc nhấn {{key:3}}.
   Lần đầu, chế độ xem 3D mất một lúc để tải. Tờ được vẽ trên mặt đất, và bóc tách đứng trên đó với màu của từng hạng mục.
3. Để quay lại, chọn {{ui:3D}} một lần nữa, {{ui:Về tờ}}, hoặc nhấn {{key:3}}. Chọn một công cụ vẽ (Tuyến tính, Diện tích, Đếm và các công cụ khác) cũng sẽ quay lại, vì các dấu được vẽ trên tờ phẳng.

Chế độ xem 3D hiển thị tờ trên màn hình; đổi tờ trong danh sách tờ, hoặc bằng {{key:PageDown}} và {{key:PageUp}}, và chế độ xem 3D sẽ theo. Để xem nhiều tầng cùng lúc, hãy xếp chúng (bên dưới).

## Bạn thấy gì

| Dấu | Trong 3D |
|---|---|
| Đoạn tuyến tính, hạng mục có chiều cao | Một bức tường cao bằng chiều cao đó dọc theo đoạn. Đoạn cong sẽ đi theo đường cong. |
| Đoạn tuyến tính, hạng mục không có chiều cao | Một đường trên tờ. Đặt chiều cao cho hạng mục dưới **Hạng mục** để dựng đứng nó lên. |
| Diện tích, hạng mục có chiều sâu | Một sàn với chiều sâu đó, các phần khoét vẫn mở. |
| Diện tích, hạng mục không có chiều sâu | Một tấm mỏng 2", để nó vẫn hiện. |
| Đếm | Một trụ nhỏ tại mỗi điểm được đếm. |

Chiều cao là ô {{ui:Chiều cao}} của một hạng mục tuyến tính và chiều sâu là ô {{ui:Chiều sâu}} của một hạng mục diện tích, dưới **Hạng mục** (xem [Tạo hạng mục bóc tách](topic:create-items)). Thay đổi nó, và chế độ xem 3D cập nhật ngay. Ghi chú dưới tên tờ cho biết tờ chứa gì, ví dụ "Tờ này trong 3D: 2 tường, 1 sàn, 3 dấu đếm", và có bao nhiêu đoạn hoặc vùng không có chiều cao hay chiều sâu. Các cú nhấn đi xuyên qua ghi chú tới chế độ xem.

Các con số không đổi trong 3D: diện tích tường là chiều dài chính xác nhân với chiều cao, còn thể tích sàn là diện tích thực (đường bao trừ các phần khoét, đường cong chính xác) nhân với chiều sâu. Đường cong chỉ được vẽ thành các đoạn thẳng ngắn trên màn hình.

## Xoay quanh

| Thao tác | Tác dụng |
|---|---|
| Kéo, hoặc kéo bằng nút giữa | Xoay quanh bóc tách. |
| {{key:Shift}} + kéo, hoặc kéo bằng nút phải | Di chuyển khung nhìn. |
| Con lăn chuột | Thu phóng vào và ra tại con trỏ. |
| Vuốt hai ngón trên bàn di chuột | Xoay ({{key:Shift}} để di chuyển khung nhìn). Chụm để thu phóng. |
| {{ui:Đẳng trắc}}, {{ui:Trên}}, {{ui:Trước}}, {{ui:Sau}}, {{ui:Trái}}, {{ui:Phải}}, {{ui:Dưới}} | Các khung nhìn chuẩn, căn theo bóc tách. Chế độ xem 3D mở ở {{ui:Đẳng trắc}}. |
| {{ui:Phối cảnh}} | Bật hoặc tắt phối cảnh (song song khi tắt). |
| {{ui:Thu phóng phạm vi}} hoặc {{key:F}} | Toàn bộ tờ. |
| {{ui:Tờ}} | Hiện hoặc ẩn bản vẽ trên mặt đất. |
| Khối xem ở góc trên bên phải | Nhấn một mặt, cạnh hoặc góc để nhìn từ đó; kéo để xoay quanh; kéo vòng la bàn để quay; nút ngôi nhà đưa về {{ui:Đẳng trắc}}. |

Góc hiển thị khối xem, một biểu tượng trục nhỏ X, Y, Z, hoặc không gì cả: chọn trong {{ui:Cài đặt}}, trên thẻ TakeoffCraft, dưới **Chỉ báo góc** ([Cài đặt TakeoffCraft](topic:settings)). Trang phẳng không có chỉ báo góc.

:::touch
Một ngón để xoay; hai ngón chụm để thu phóng và di chuyển để di chuyển khung nhìn. Chạm để chọn.
:::

## Tường có độ dày, chân đế và lỗ mở

Một hạng mục tuyến tính có chiều cao được dựng như một dải mỏng. Để thấy nó như một bức tường thật, hãy đặt hình dạng cho hạng mục dưới **Trong 3D** trong cài đặt của nó:

- **Độ dày tường** (8", 0.2 m): tường trở thành một khối đặc, căn giữa theo đường bạn đã vẽ, với góc vát.
- **Chiều cao đáy**: tường bắt đầu cách sàn một khoảng đó (một trần hộp, một dãy tủ treo). Hạng mục diện tích cũng có thuộc tính này: một trần ở 9'-0".
- **Đỉnh lỗ mở**: một đoạn đã khấu trừ (một cửa đi, [Khấu trừ một phần đoạn](topic:measure-linear#deduct-a-part-of-a-run)) giữ tường trên chiều cao đó, nên cửa hiện ra như một cửa. Nếu không có nó, đoạn đã khấu trừ sẽ để lại một khoảng trống tới đỉnh.

Các thuộc tính này chỉ định hình chế độ xem 3D: các số lượng (chiều dài, diện tích tường, chi phí) giữ nguyên như cũ.

## Xếp các tầng

1. Mở các tệp PDF của mọi tầng.
2. Trong chế độ xem 3D, chọn {{ui:Các tầng…}} và nhập cao độ của mỗi tầng, như `0` cho tầng trệt và `12'` cho tầng kế tiếp. Ô trống sẽ loại tờ đó ra.
3. Chọn {{ui:Xếp tầng}}. Mọi tờ có tầng sẽ hiện bóc tách của nó ở độ cao của nó; tờ đang hiện nằm dưới tầng riêng của nó, các tờ khác được vẽ đường viền. Ghi chú cho biết có bao nhiêu tầng đã được xếp.

Các tờ được căn theo vị trí của chúng trên trang, nên cách này hoạt động với các mặt bằng được in giống nhau (cùng kích thước và vị trí tờ). Một tờ có tầng nhưng không có tỷ lệ sẽ bị loại, và ghi chú sẽ nói như vậy. Chọn {{ui:Xếp tầng}} lần nữa để xem từng tờ một. Các tầng được lưu cùng với bóc tách.

## Lưu chế độ xem 3D thành ảnh

Chọn {{ui:PNG}} trên thanh 3D để có một bức ảnh của chế độ xem như hiện trên màn hình (`… 3D.png`); {{key:Shift}} + nhấn {{ui:PNG}} làm nó lớn gấp đôi (`… 3D@2x.png`), để in.

## Lưu chế độ xem 3D thành mô hình

Chọn {{ui:GLB}} trên thanh 3D. Bạn sẽ nhận một tệp `.glb` (glTF, nhị phân) của những gì chế độ xem thể hiện — tầng đang hiện, hoặc mọi tầng đã xếp — để các chương trình 3D khác mở được: mỗi dấu là một đối tượng, được đặt tên theo hạng mục của nó, có màu của hạng mục, tính bằng mét với trục Y hướng lên. Bản thân tờ và các đường viền không có trong tệp.

## Chọn một dấu từ 3D

Nhấn vào một bức tường, sàn, tấm hoặc trụ. Dấu của nó trở thành dấu được chọn, y hệt như khi bạn nhấn nó trên tờ: nó hiện dưới **Dấu đã chọn**, hạng mục của nó trở thành hiện hành, và thanh trạng thái cho biết chiều dài và chiều cao của nó, hoặc diện tích, chiều sâu và yard khối. {{key:Shift}} + nhấn sẽ thêm dấu vào vùng chọn hoặc bỏ dấu khỏi đó. {{key:Delete}} xóa các dấu đã chọn và {{key:Mod+Z}} khôi phục chúng; {{key:Esc}} bỏ chọn tất cả. Quay lại tờ, các dấu đó vẫn được chọn.

:::tip
Bản vẽ theo giao diện: ở chế độ Mô hình, tờ trên mặt đất sẽ tối như chế độ xem phẳng.
:::
