---
title: Đo từ bản vẽ
summary: Lấy chiều dài và diện tích từ chính các đường, cung, đa tuyến và tô bóng của bản vẽ bằng cách chọn chúng, với cung và lỗ chính xác, thay vì dò bằng các lần nhấp.
keywords: đo bản vẽ, hình học, đa tuyến, cung tròn, vòng tròn, tô bóng, bulge, chiều dài chính xác, diện tích chính xác, chọn, cửa sổ, dò, từ cad, tuyến tính, diện tích
from: fd734246
---

{{ui:Đo bản vẽ}} trên thanh tờ của một tờ DWG hoặc DXF lấy chính các đối tượng của bản vẽ làm dấu, nên bạn không phải dò chúng bằng các lần nhấp. Chiều dài của một đa tuyến, chiều dài của một cung, diện tích của một vòng tròn và diện tích của một tô bóng cùng các lỗ của nó sẽ có kết quả chính xác, theo cùng phép tính mà bóc tách dùng cho mọi dấu.

## Lấy đối tượng làm một hạng mục đoạn hoặc diện tích

1. Tạo hoặc nhấp một hạng mục **tuyến tính** hoặc **diện tích** dưới {{ui:Hạng mục}}. Tờ cần có tỷ lệ.
2. Chọn {{ui:Đo bản vẽ}}.
3. Nhấp các đối tượng trên tờ để chọn chúng, hoặc kéo một cửa sổ bao quanh: mọi thứ nằm hoàn toàn trong cửa sổ sẽ được chọn. Giữ {{key:Shift}} để thêm một cửa sổ vào những gì đã chọn; nhấp lại một đối tượng đã chọn để bỏ nó. Thanh hiển thị tổng: "6 đoạn: 108'-9 1/8" tổng cộng."
4. Chọn nút thêm, nút này ghi số lượng và hạng mục, như {{ui:Thêm 6 vào Edge}} (hoặc nhấn {{key:Enter}}). Mỗi đối tượng trở thành một dấu của hạng mục, trong một bước hoàn tác. {{key:Esc}} xóa những gì bạn đã chọn.

## Mỗi loại hạng mục lấy những gì

- Một hạng mục **tuyến tính** lấy đường thẳng, cung, đa tuyến, vòng tròn và đường spline theo chiều dài. Một hình khép kín được tính theo chu vi của nó. Tô bóng bị bỏ qua: nó có diện tích, không có chiều dài, và thanh sẽ nói như vậy.
- Một hạng mục **diện tích** lấy các hình khép kín: đa tuyến khép kín, vòng tròn, khối 2D và các tô bóng cùng lỗ của chúng. Các đoạn hở bị bỏ qua, và thanh sẽ nói như vậy.

## Chính xác, và gần chính xác

Đường thẳng, cung (với bulge bất kỳ), đa tuyến có bulge và vòng tròn là chính xác: chiều dài và diện tích dùng bán kính và góc quét của cung, không dùng một hình ảnh của nó. Ellipse, spline và tô bóng có biên được tạo từ các cạnh được đo bằng các dây cung một độ hoặc nhỏ hơn, sai số trong một phần trăm đối với ellipse và một phần mười đối với các loại còn lại; thanh cho biết có bao nhiêu đối tượng bạn đã chọn là đường cong thuộc loại này.

## Lấy từ đâu

- **Mô hình**: các đối tượng trong không gian mô hình. **Một bố cục**: các đường riêng của nó, và các đối tượng mô hình bên trong khung nhìn, được tỷ lệ qua khung nhìn đó. Một đối tượng cắt qua mép của khung nhìn sẽ không được đưa ra (khi in sẽ bị cắt); một đối tượng mà hai khung nhìn cùng hiển thị chỉ được lấy một lần.
- Chỉ các lớp mà tờ đang hiển thị. Khối được đếm, không đo: xem [Đếm từ bản vẽ](topic:count-from-a-drawing). Các đa tuyến 3D, lưới, khối đặc và miền không được đưa ra.
