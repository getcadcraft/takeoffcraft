---
title: Kiểm tra tồn kho và thời gian giao hàng của nhà cung cấp
summary: Thêm danh sách tồn kho của nhà cung cấp (CSV hoặc bảng tính) và TakeoffCraft đối chiếu nhu cầu của bóc tách, kể cả hao hụt, với danh sách đó: đủ hàng trong kho hay không và phải chờ bao lâu. Thiếu hàng và thời gian chờ dài hiện trong bảng Vấn đề.
keywords: nhà cung cấp, supplier, tồn kho, stock, thời gian giao hàng, lead time, khả dụng, thiếu hàng, đặt hàng tồn, backorder, danh sách đặt hàng, order list, csv, sku, vật liệu, cung ứng, vấn đề
from: f11160fb
---

{{ui:Cung ứng}} trên thanh công cụ (biểu tượng xe tải) đối chiếu nhu cầu bóc tách của bạn với danh sách tồn kho của nhà cung cấp. Các dòng của nhà cung cấp có liên quan được giữ trong chính tệp của bóc tách. Không có gì được gửi đi đâu và không có gì hỏi nhà cung cấp: bạn là người cung cấp tệp.

## Tệp

Tệp CSV có dòng tiêu đề. Cần có cột tên hoặc SKU và cột tồn kho hoặc thời gian giao hàng. Các tiêu đề sau được nhận dạng (thứ tự và chữ hoa, thường tùy ý): Item, Name, Description hoặc Product; SKU, Part hoặc Item #; In stock, On hand, Available hoặc Quantity; Lead time hoặc Delivery days; Unit hoặc UOM; Price hoặc Cost; Supplier hoặc Vendor.

- Tồn kho có thể là một số (1,200), "In stock" hoặc "Out of stock".
- Thời gian giao hàng có thể là "5 days", "2 weeks", "2-3 weeks" (dùng giá trị dài hơn), "3 months", "same day" hoặc "backorder". Một số không kèm đơn vị được hiểu theo đơn vị của tiêu đề (ngày, trừ khi tiêu đề ghi tuần hoặc tháng).
- Không đọc tệp Excel: hãy lưu bảng tính thành CSV trước.

## Kiểm tra bóc tách

1. Chọn {{ui:Cung ứng}}, rồi {{ui:Thêm tệp nhà cung cấp…}} và chọn tệp CSV. Có thể thêm nhiều tệp: tối đa năm tệp, giữ tổng cộng 2,000 dòng, ưu tiên các dòng khớp với hạng mục của bạn.
2. Mỗi hạng mục, điều kiện phụ và chi tiết định mức có khối lượng được khớp với một dòng theo tên, hoặc theo SKU trong tên. Một tên gần giống (tên này nằm trong tên kia) được dùng khi không có tên trùng khớp, và được ghi rõ.
3. Dưới {{ui:Takeoff cần gì}}, các mục thiếu được xếp lên đầu: "Thiếu 120 EA", "Thời gian giao 21 ngày", "Đang chờ đặt hàng", "Đơn vị khác", "Không có số tồn kho" hoặc "Còn hàng". Nhu cầu đã bao gồm hao hụt. Đơn vị của nhà cung cấp khác đơn vị dự toán (ví dụ tấn so với foot) sẽ được báo và không bao giờ được so sánh. Mỗi dòng có {{ui:Chọn hạng mục}}, nhảy đến hạng mục đó.
4. Đặt {{ui:Thời gian chờ dài nhất chấp nhận (ngày)}} (mặc định 14). Hạng mục không có sẵn trong kho và phải chờ lâu hơn mức này sẽ bị đánh dấu, và phần tóm tắt nêu thời gian chờ dài nhất có ý nghĩa.
5. {{ui:Danh sách đặt hàng (CSV)}} tải xuống các hạng mục thiếu, kèm số lượng thiếu, nhà cung cấp và thời gian giao hàng. {{ui:Bỏ qua}} loại một nhu cầu khỏi việc kiểm tra (đây là một bước hoàn tác).

## Tệp bảng tính và Thư viện đơn giá

Danh sách của nhà cung cấp có thể là sổ tính Excel (.xlsx) cũng như CSV: đọc trang tính đầu tiên, với cùng tên cột. Công thức không bao giờ được chạy; giá trị mà tệp chứa là giá trị được đọc.

Khi đã thêm một tệp có giá, {{ui:Đơn giá vào Thư viện}} trong hộp thoại sẽ đặt đơn giá vật liệu của mỗi mục trong [Thư viện](topic:price-library) mà tệp có giá: cùng tên, và đơn vị giống nhau (hoặc không ghi). Nhân công, hao hụt, chiều cao và định mức giữ nguyên, và ghi chú của mục cho biết giá lấy từ tệp nào. Mục tính bằng mét không được định giá từ danh sách tính bằng foot, và mục không có tên khớp thì để nguyên; dòng trạng thái cho biết có bao nhiêu mục bị bỏ qua do khác đơn vị. Hãy định giá lại từ Thư viện để đưa đơn giá mới vào bóc tách này.

## Trong bảng Vấn đề

Thiếu hàng là một cảnh báo và thời gian chờ dài là một ghi chú, trong bảng Vấn đề dùng chung ("Tồn kho nhà cung cấp"), nên chúng nằm cùng mọi kiểm tra khác. Bạn có thể chấp nhận một mục kèm lý do, và việc chấp nhận được lưu trong bóc tách.

## Với trợ lý của bạn

Nếu bạn cho phép trợ lý trong {{ui:Cài đặt}}, họ có thể đọc kết quả kiểm tra (supply_check). Việc thêm tệp nhà cung cấp là do bạn thực hiện.

## Điều cần biết

Số liệu tồn kho chỉ mới đến mức của tệp bạn thêm. Thêm lại tệp để làm mới: tệp cùng tên sẽ thay thế tệp trước.
