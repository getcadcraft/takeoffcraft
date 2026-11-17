---
title: Carbon nhúng và bảng giá 5D
summary: Carbon cộng tổng carbon nhúng của bóc tách từ số lượng của mỗi hạng mục và một bảng hệ số mở, rồi gửi đơn giá của bóc tách sang BimCraft như một bảng giá cho chi phí 5D.
keywords: carbon, carbon nhúng, kgco2e, co2, hệ số, a1-a3, vận chuyển, hao hụt, 5d, bảng giá, chi phí, bimcraft, epd
from: f4bff3b8
---

{{ui:Cacbon}} trên thanh công cụ cộng tổng carbon nhúng của những gì bạn đã đo, và biến đơn giá của bạn thành một bảng giá mà mô hình công trình có thể dùng. Đây là một ước tính, không phải một đánh giá.

## Carbon nhúng

Số lượng của mỗi hạng mục, cùng hao hụt, được nhân với một dòng của bảng hệ số. Một dòng được khớp theo các từ trong tên hạng mục ("sàn bê tông" tìm dòng có từ khóa bê tông). Bảng này là cùng một bảng mở mà BimCraft dùng, nên tệp bạn tải ở đây cũng dùng được ở đó. **Các dòng đi kèm chương trình là giá trị mẫu: chung chung, chưa kiểm chứng và không lấy từ cơ sở dữ liệu nào.** Hộp thoại nói rõ điều này bên cạnh các con số; hãy thay chúng bằng nguồn của riêng bạn trước khi dựa vào bất kỳ con số nào.

1. Chọn {{ui:Cacbon}}. Các hạng mục được tính được liệt kê cùng số kg CO2e; tổng nằm phía trên.
2. Đánh dấu {{ui:A4 vận chuyển}} hoặc {{ui:A5 hao hụt công trường}} để tính thêm các giai đoạn đó, với các dòng có số liệu cho chúng. Giai đoạn sản xuất luôn được tính.
3. Để dùng một dòng khác cho một hạng mục, hoặc không dùng dòng nào, dùng danh sách trên dòng của hạng mục đó.
4. {{ui:Hệ số từ một tệp…}} tải một bảng hệ số (JSON hoặc CSV) do bạn tạo từ nguồn của mình; các dòng của nó thay thế các dòng mẫu có cùng mã. {{ui:Hệ số (JSON)}} lưu của bạn.

Hệ số tính theo mét, mét vuông, mét khối, cái hoặc kilôgam. Một dòng đo bằng foot hoặc foot vuông sẽ được quy đổi. Hệ số theo kilôgam cần một thể tích (yard khối hoặc mét khối) và khối lượng riêng của dòng đó. Một hạng mục có hệ số cần một số lượng mà nó không đo sẽ được liệt kê dưới {{ui:Bỏ sót}} kèm lý do, không bao giờ được đoán. Tổng chạy trên thanh trạng thái hiển thị cùng con số này.

Các dòng hệ số của bạn, lựa chọn của bạn và các giai đoạn bạn tính được lưu trong tệp của bóc tách.

## Bảng giá cho chi phí 5D

{{ui:Giá 5D (JSON)}} và {{ui:Giá 5D (CSV)}} lưu đơn giá của bóc tách thành một bảng giá: một dòng cho mỗi hạng mục có giá, với đơn giá vật liệu và nhân công trên mỗi đơn vị cùng hao hụt của nó. Tải nó vào bảng chi phí của BimCraft (Carbon nhúng và chi phí 5D) để định giá các công việc của mô hình công trình bằng chính đơn giá đã tạo ra hồ sơ thầu. Các hạng mục đo bằng một đơn vị mà bảng không có, và các hạng mục không có đơn giá, sẽ bị bỏ qua.

## Với trợ lý của bạn

Nếu bạn cho phép trợ lý trong {{ui:Cài đặt}}, họ có thể đọc carbon (carbon_check). Việc tải hệ số là việc của bạn.

## Điều nên biết

Không có gì được gửi đi đâu cả. Các con số chỉ đáng tin bằng các hệ số bạn tải vào.
