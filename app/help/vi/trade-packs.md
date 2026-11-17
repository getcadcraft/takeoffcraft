---
title: Gói ngành
summary: Thêm các định mức miễn phí của một ngành vào thư viện đơn giá, gỡ chúng chỉ trong một bước, và chia sẻ thư viện của riêng bạn dưới dạng gói.
keywords: gói ngành, trade pack, gói, pack, định mức, assemblies, mẫu, hạng mục mẫu, điện, drywall, thạch cao, khung, sơn, bê tông, sàn, xây, lợp mái, ốp, mộc, ống nước, hvac, cách nhiệt, cảnh quan, tổng thầu, csi, masterformat, cc0, thêm, gỡ, chia sẻ
from: d3c036be
---

**Gói ngành** là một bộ hạng mục làm sẵn cho một ngành: mỗi hạng mục có đơn vị, chiều cao hoặc chiều sâu, hao hụt và **định mức** của nó, tức các chi tiết và công thức biến một đoạn, diện tích hay số đếm đã đo thành vật liệu. Ví dụ, vách thạch cao kéo theo thanh ray, thanh đứng, tấm, vít, băng dính và bột trét của nó.

Gói được thêm vào [thư viện đơn giá](topic:price-library) của bạn, và từ đó bạn thêm các hạng mục của chúng vào bất kỳ bóc tách nào.

## Thêm gói

1. Mở {{ui:Thư viện}} ở đầu bảng {{ui:Hạng mục}}, rồi {{ui:Gói ngành…}}.
2. Chọn {{ui:Đơn vị}}: hệ Anh (LF, SF), hệ mét (m, m²) hoặc cả hai. Mỗi định mức có ở cả hai hệ.
3. Chọn {{ui:Thêm}} bên cạnh một gói.

Các hạng mục của gói xuất hiện trong thư viện, được gắn thẻ bằng tên gói. Để dùng chúng, đánh dấu chọn trong thư viện và chọn {{ui:Thêm vào bóc tách}}.

:::note
**Gói không mang theo đơn giá.** Các hạng mục của gói hiện "đặt đơn giá của bạn" trong thư viện. Đơn giá là của bạn: nhập chúng trong thư viện hoặc trình chỉnh sửa hạng mục, hoặc nhập bảng giá của bạn dưới dạng CSV rồi dùng {{ui:Cập nhật giá}}.
:::

Nếu thư viện của bạn đã có một hạng mục cùng tên và cùng kiểu, gói sẽ giữ nguyên hạng mục của bạn. Thêm lại gói sẽ thay các hạng mục của chính nó bằng phiên bản mới.

## Gỡ gói

Trong {{ui:Gói ngành…}}, chọn {{ui:Gỡ bỏ}} bên cạnh một gói bạn đã thêm, rồi chọn lại một lần nữa để xác nhận. Mọi hạng mục xuất phát từ gói sẽ rời khỏi thư viện chỉ trong một bước. Các hạng mục bạn đã thêm vào bóc tách thì vẫn nằm trong bóc tách đó.

## Nội dung của gói

Chọn {{ui:Nguồn và chi tiết}} dưới một gói để xem mỗi định mức được soạn từ đâu: quy chuẩn xây dựng, tiêu chuẩn và hướng dẫn lắp đặt của các hiệp hội ngành. Trong thư viện, đưa con trỏ lên một hạng mục để đọc nguồn và các giả định của nó, chẳng hạn khoảng cách thanh đứng hoặc tỷ lệ độ phủ của sơn. Hãy đối chiếu chúng với công việc và phiếu dữ liệu sản phẩm của bạn, rồi sửa công thức nếu khác nhau (xem [Định mức và công thức](topic:assemblies)).

Mọi gói được đánh dấu **Mẫu khởi đầu: chưa được người lập dự toán thẩm định** cho đến khi các người lập dự toán đang làm việc đã thẩm định.

Mỗi hạng mục cũng mang số CSI MasterFormat, chẳng hạn `09 21 16`.

## Chia sẻ thư viện của bạn dưới dạng gói

{{ui:Xuất thành gói…}} trong thư viện lưu nó thành một tệp gói (`.ccpack.json`) mà bất kỳ ai cũng có thể thêm bằng {{ui:Mở tệp gói…}}. Mặc định, tệp không gồm các hạng mục xuất phát từ gói bạn đã thêm, và không mang theo đơn giá. Đánh dấu {{ui:Đưa đơn giá của tôi vào làm đơn giá mẫu}} để gửi cả đơn giá của bạn: chúng được gắn nhãn kèm khu vực và ngày bạn ghi, và người thêm gói quyết định có dùng hay không.

Tệp gói chỉ là dữ liệu thuần, không bao giờ là chương trình. TakeoffCraft kiểm tra mọi phần của tệp trước khi dùng và bỏ qua mọi thứ mà nó không đọc được.
