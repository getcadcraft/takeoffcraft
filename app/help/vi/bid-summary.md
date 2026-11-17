---
title: Tổng hợp dự thầu và hồ sơ đề xuất
summary: Thêm chi phí đi kèm nhân công, thuế bán hàng, chi phí chung, lợi nhuận và bảo lãnh vào dự toán, viết các hạng mục bao gồm và loại trừ, rồi tải xuống PDF hồ sơ đề xuất để gửi đi.
keywords: dự thầu, chi phí đi kèm nhân công, chi phí nhân công, bảng lương, hồ sơ đề xuất, báo giá, chi phí chung, lợi nhuận, phụ phí, biên lợi nhuận, thuế bán hàng, bảo lãnh, bao gồm, loại trừ, điều khoản, chữ ký, chủ đầu tư, giá
from: 3208a561
---

Dự toán định giá những gì bạn đã bóc tách. **Tổng hợp dự thầu** biến nó thành một mức giá: nó cộng thuế bán hàng, chi phí chung, lợi nhuận và bảo lãnh, và tạo một **PDF hồ sơ đề xuất** với các hạng mục bao gồm và loại trừ của bạn.

Mở từ {{ui:Xuất}} › {{ui:Tổng hợp dự thầu & hồ sơ đề xuất…}}. Mọi thứ trong đó được lưu cùng với việc bóc tách, và mỗi thay đổi đều có thể hoàn tác.

## Các khoản phụ phí

Nhập một phần trăm vào bất kỳ khoản nào trong năm khoản (để các khoản còn lại ở 0). Chúng được tính theo thứ tự này, mỗi khoản trên những gì nằm phía trên nó:

| Dòng | Được tính như |
|---|---|
| Vật liệu, Nhân công | Tổng của dự toán (dự thầu cơ bản khi việc bóc tách có [phương án](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Chi phí đi kèm nhân công | % đi kèm × nhân công: thuế bảng lương, bảo hiểm và phúc lợi trên tiền công của đội thi công. |
| **Chi phí** | Vật liệu + nhân công + chi phí đi kèm nhân công. |
| Thuế bán hàng trên vật liệu | % thuế × vật liệu. |
| Chi phí chung | % chi phí chung × (chi phí + thuế). |
| Lợi nhuận | % lợi nhuận × (chi phí + thuế + chi phí chung). |
| Bảo lãnh | % bảo lãnh × mọi thứ ở trên. |
| **Dự thầu** | Tổng các dòng. |

Mỗi dòng được làm tròn đến xu. Sổ tính hiển thị các dòng tương tự dưới tổng của trang tính Dự toán, bằng công thức trực tiếp. Bản tóm tắt cập nhật khi bạn gõ: {{key:Enter}} nhận phần trăm đã nhập. Mỗi phương án được hiển thị với cùng các khoản phụ phí trên chi phí riêng của nó, để chủ đầu tư thấy việc bỏ phương án thực sự thay đổi điều gì.

## Hồ sơ đề xuất

Điền những gì hồ sơ đề xuất cần nói:

- **Dự án** (tên của việc bóc tách khi để trống), **Gửi tới** (khách hàng) và **Từ** (công ty của bạn).
- **Hạng mục bao gồm** và **Hạng mục loại trừ**: mỗi dòng một mục; dấu gạch đầu dòng hoặc dấu chấm đầu dòng đều được.
- **Điều khoản**: văn bản tự do, như "Có hiệu lực trong 30 ngày."
- **Liệt kê hạng mục và số lượng**: phạm vi, từng hạng mục, với số lượng và không có giá. Bỏ đánh dấu để có một hồ sơ trọn gói.

Chọn {{ui:PDF hồ sơ đề xuất}}. PDF (`<takeoff> - proposal.pdf`) có ngày, khối giá với từng khoản phụ phí và dự thầu, các phương án, phạm vi, các hạng mục bao gồm và loại trừ, điều khoản, cùng các dòng để ký và ghi ngày. Nếu một số khối lượng không đo được (một tờ không có tỷ lệ), nó sẽ ghi điều đó bên dưới giá.

## Trong tệp xuất

Khi việc bóc tách đã có bản tóm tắt dự thầu, CSV kết thúc bằng nó và sổ tính có thêm trang tính **Tổng hợp dự thầu**, với từng dòng, phần trăm và số tiền của nó. Xem [Xuất dự toán](topic:export-estimate).
