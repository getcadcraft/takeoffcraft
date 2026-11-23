---
title: Bóc tách khối lượng từ mô hình công trình
summary: Mở mô hình IFC của kiến trúc sư, xem trong 3D, chọn tường, sàn, cửa và các cấu kiện còn lại theo kiểu, vật liệu, lớp hoặc kích thước, rồi đưa số đếm, chiều dài, diện tích và thể tích vào bóc tách. Bản mô hình mới hơn sẽ cập nhật cùng các khối lượng đó.
keywords: mô hình, bóc tách từ mô hình, khung nhìn 3D, nhấp chọn một chi tiết, tìm hàng, vật liệu, lớp, lớp tường, vách thạch cao, cách nhiệt, kích thước cửa đi, kích thước cửa sổ, bảng thống kê cửa, csv, 3d, bim, ifc, rvt, mô hình công trình, khối lượng, tường, sàn, cửa đi, cửa sổ, cột, phòng, theo kiểu, theo tầng, cập nhật, mô hình mới hơn, thiết kế triển khai
from: 8c4c12c9
---

Bạn không cần đợi bộ bản vẽ tiếp theo. Khi kiến trúc sư gửi mô hình công trình, hãy mở tại đây và lấy khối lượng trực tiếp từ mô hình. Mô hình được đọc trên máy tính của bạn; không có gì được gửi đi đâu cả.

## Các bước

1. Chọn {{ui:Model}} trên thanh công cụ rồi chọn tệp `.ifc` của mô hình, hoặc mở tệp đó bằng {{ui:Open plans}} như mọi tệp khác.
2. {{ui:Model takeoff}} mở ra với một hàng cho mỗi danh mục và kiểu: tường theo kiểu tường, sàn theo kiểu sàn, cửa đi theo kiểu cửa đi, và tương tự. Mỗi hàng hiển thị số đếm và đơn vị đo của danh mục đó.
3. Đặt {{ui:Group by}} thành {{ui:Category}} để có tổng nhanh, hoặc thành {{ui:Category, type and level}} để tách mỗi kiểu theo tầng.
4. Bỏ đánh dấu các hàng bạn không cần. {{ui:Find}} thu hẹp danh sách. Bỏ đánh dấu một hàng cũng sẽ ẩn các chi tiết của hàng đó trong hình 3D.
5. Đặt một {{ui:Model name}} và giữ nguyên tên đó trong suốt công việc, ví dụ tên dự án.
6. Chọn {{ui:Add to the takeoff}}. Mỗi khối lượng trở thành một khối lượng nhập tay trong danh sách hạng mục. Đặt tên, định giá và gắn định mức cho nó như mọi hạng mục khác.

## Xem mô hình 3D

{{ui:Show the model in 3D}} vẽ mô hình phía trên bảng, mỗi hàng một màu (ô màu bên cạnh tên hàng). Kéo để xoay, giữ {{key:Shift}} và kéo để di chuyển, dùng con lăn chuột để thu phóng, và chọn {{ui:Fit}} hoặc {{ui:Reset}} để quay lại.

- **Nhấp chọn một chi tiết** trong hình và hàng của nó được chọn trong bảng, với tất cả chi tiết của hàng đó được làm sáng và các phần còn lại mờ đi. Nhấp lại đúng chi tiết đó và, nếu nó nằm trong nhiều hàng (một bức tường trong các lớp của nó), hàng tiếp theo sẽ được chọn.
- **Nhấp chọn một hàng** trong bảng để làm sáng các chi tiết của hàng đó. Nhấp lại, hoặc nhấp vào khoảng trống trong hình, để bỏ chọn.
- Phòng không được vẽ, vì thể tích của phòng sẽ che khuất công trình.
- Mô hình rất lớn chỉ giữ một hộp bao cho một số chi tiết để vừa bộ nhớ; bảng điều khiển cho biết có bao nhiêu chi tiết như vậy. Các con số không thay đổi.

Nếu máy tính này không vẽ được 3D, bảng vẫn hoạt động như trước.

## Nhóm theo vật liệu, lớp hoặc kích thước

{{ui:Group by}} còn có ba lựa chọn khác:

- {{ui:Category and material}}: tường, sàn hoặc mái được cấu tạo từ nhiều lớp sẽ có một hàng riêng cho vật liệu của mỗi lớp, nhờ đó vách thạch cao, khung xương và lớp cách nhiệt có thể được định giá riêng. Một phần công trình chỉ có một vật liệu sẽ nằm trong hàng của vật liệu đó, còn phần không có vật liệu nào sẽ nằm trong hàng tên là "Không có vật liệu".
- {{ui:Category and layer}}: tương tự, với độ dày của lớp được ghi trong hàng ("Cách nhiệt, 100 mm").
- {{ui:Category, type and door or window size}}: cửa đi và cửa sổ được tách theo chiều rộng và chiều cao (ví dụ 3'-0" × 6'-8" hoặc 914 × 2,032 mm).

Với một lớp, diện tích là diện tích mặt tường (hoặc diện tích mặt bằng, diện tích bề mặt của sàn hoặc mái) và thể tích là diện tích đó nhân với độ dày của lớp. Ghi chú của hàng cho biết có bao nhiêu con số lấy từ lớp. Các lớp của một bức tường cộng lại bằng thể tích mà mô hình ghi cho bức tường đó.

## Lưu các dòng hoặc bảng cửa dưới dạng CSV

{{ui:Save rows as CSV}} lưu các hàng bạn đã đánh dấu, với đơn vị ghi trong mỗi tiêu đề, để mở bằng bảng tính. {{ui:Save openings schedule as CSV}} (chỉ hiện khi mô hình có cửa đi hoặc cửa sổ) lưu mọi cửa đi và cửa sổ theo kiểu, tầng và kích thước cùng số đếm.

## Các đại lượng được đo

| Danh mục | Đại lượng |
|---|---|
| Tường | số đếm, chiều dài, diện tích tường (một mặt, đã trừ lỗ mở), thể tích |
| Sàn, bản sàn, trần và các lớp phủ khác | số đếm, diện tích mặt bằng, thể tích |
| Mái | số đếm, diện tích mặt bằng, diện tích bề mặt mái, thể tích |
| Móng | số đếm, diện tích mặt bằng, thể tích |
| Cột, dầm và thanh | số đếm, chiều dài dọc theo thanh, thể tích |
| Lan can, ống, ống dẫn và đường cáp | số đếm, chiều dài |
| Cầu thang | số đếm, thể tích |
| Phòng | số đếm, diện tích sàn, thể tích |
| Cửa đi, cửa sổ và mọi thứ khác | số đếm |

Khi tác giả mô hình đã ghi một đại lượng trong tệp, con số đó được dùng. Nếu không, con số được đo từ hình dạng của cấu kiện. Mỗi khối lượng có một ghi chú cho biết trường hợp nào đã xảy ra và có bao nhiêu cấu kiện cho ra con số.

:::note
Chiều dài của tường đo từ hình dạng chạy từ đầu đến cuối, nên hai bức tường giao nhau ở góc đều bao gồm góc đó. Thể tích cần một hình dạng khép kín: cấu kiện có hình dạng không khép kín vẫn được đếm nhưng không có thể tích. Một cấu kiện tường cong hoặc có góc được đo bằng một nửa tổng diện tích các mặt đứng của nó, và ghi chú sẽ nói rõ điều đó.
:::

## Khi có mô hình mới hơn

Mở tệp mới hơn và nhập cùng {{ui:Model name}}. Trước khi thêm bất cứ thứ gì, bảng điều khiển cho biết có bao nhiêu khối lượng mới, bao nhiêu khối lượng đã thay đổi và thay đổi từ giá trị nào sang giá trị nào, cùng những khối lượng nào từ bản trước không còn trong mô hình. Chọn {{ui:Add to the takeoff}}: các khối lượng đã thay đổi nhận con số mới, còn tên, đơn giá, hao hụt và định mức của bạn được giữ nguyên. Những khối lượng đã không còn trong mô hình vẫn giữ các con số cũ; hãy tự gỡ chúng nếu thiết kế đã bỏ đi.

Tên kiểu và tên tầng là cách một khối lượng được nhận diện. Nếu kiến trúc sư đổi tên một kiểu tường, nó sẽ xuất hiện như một khối lượng mới và khối lượng cũ sẽ được liệt kê là đã mất.

## Các tệp được đọc

Tệp IFC (IFC2x3, IFC4 và IFC4.3). Tệp IFC có đường, đường ray hoặc cầu vẫn đưa khối lượng hạ tầng của chúng vào trực tiếp như trước.

TakeoffCraft không đọc tệp `.rvt` trong phiên bản này. Nếu kiến trúc sư làm việc trên Revit, hãy yêu cầu bản xuất IFC của mô hình (File, Export, IFC) và mở tệp đó.

Một mô hình có thể đưa vào tối đa 500 khối lượng cùng lúc. Nếu có nhiều hơn, hãy bỏ đánh dấu bớt hàng hoặc nhóm theo danh mục.
