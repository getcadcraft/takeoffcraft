---
title: Bộ nhớ giá từ các công trình trước
summary: TakeoffCraft ghi nhớ đơn giá bạn đã dùng trong các bóc tách trước, chỉ trên máy tính này, để một bóc tách mới có thể bắt đầu từ mức bạn đã trả lần trước. Xem, dùng, quên.
keywords: bộ nhớ giá, giá, ghi nhớ giá, công trình trước, công trình cũ, đơn giá, giá thường gặp, trung vị, chưa định giá, định giá lại, học từ bóc tách cũ, quên, thư viện
from: 7279f1a1
---

{{ui:Giá}} trên thanh công cụ (biểu tượng đô la) mở danh sách những gì TakeoffCraft ghi nhớ về các giá bạn đã dùng. Đây là một danh sách đơn giản: với mỗi tên hạng mục, là các đơn giá từ những công trình gần nhất của bạn. Danh sách được lưu trong trình duyệt này (trong Studio, là khung web riêng của nó) cạnh Thư viện giá, không bao giờ nằm trong tệp bóc tách, và không được gửi đi đâu cả. Nó không phải là mô hình đã huấn luyện.

## Được ghi nhớ điều gì

Khi bạn lưu một bóc tách, mỗi hạng mục có giá và đang được dùng (có dấu, hoặc có khối lượng nhập tay lớn hơn 0) được ghi nhớ theo tên và loại của nó: đơn giá vật liệu, đơn giá nhân công, hao hụt và đơn vị. Một công trình là các tệp bản vẽ mà bóc tách được thực hiện từ đó, nên lưu lại cùng bóc tách sẽ thay thế giá của chính nó thay vì thêm một công trình khác. Mười hai công trình gần nhất được giữ cho mỗi tên.

Để bắt đầu với công việc cũ hơn, chọn {{ui:Học từ một takeoff cũ…}} và chọn một bóc tách đã lưu (.json). Các hạng mục đã có giá và đang được dùng của nó được ghi nhớ theo cách tương tự.

Tên khớp nhau khi các từ của chúng khớp nhau, bất kể chữ hoa hay dấu câu ("2x4 Stud, 8 ft" và "2x4 stud 8 FT" là một). Cùng các từ nhưng cho loại hạng mục khác (một hạng mục tuyến tính và một hạng mục đếm) thì không phải cùng một giá.

## Dùng cho bóc tách mới

1. Tạo các hạng mục của bóc tách mới.
2. Chọn {{ui:Giá}}. Dưới {{ui:Takeoff này}}, bạn thấy mọi hạng mục có giá đã ghi nhớ, những gì bạn đang có trên đó, đơn giá của công trình gần nhất, đơn giá thường gặp (giá trị ở giữa của các công trình đã ghi nhớ) và khoảng giá.
3. Chọn {{ui:Dùng giá trước}} hoặc {{ui:Dùng giá thường gặp}} trên một hạng mục, hoặc Định giá N hạng mục chưa có giá từ bộ nhớ để điền mọi hạng mục chưa có giá từ công trình gần nhất.

Mỗi lần dùng là một bước: {{key:Ctrl+Z}} hoàn tác nó. Một hạng mục chỉ có tên gần giống (tên này nằm trong tên kia) sẽ được báo như vậy, và các nút dùng đơn giá của tên gần giống đó. Giá ghi nhớ theo EA không bao giờ được gán cho hạng mục tính theo ft: hộp thoại báo đơn vị khác nhau và để nguyên hạng mục đó.

## Xem, đổi, quên

{{ui:Mọi thứ đã ghi nhớ}} liệt kê mọi tên với đơn giá và số công trình. Nút thùng rác quên một tên; {{ui:Xóa tất cả giá}} quên tất cả. Tắt {{ui:Ghi nhớ giá của tôi khi tôi lưu takeoff}} để ngừng ghi nhớ; những gì đã có vẫn còn cho đến khi bạn quên chúng. Các bóc tách của bạn và Thư viện giá không bao giờ bị động đến.

## Với trợ lý của bạn

Nếu bạn cho phép trợ lý trong Cài đặt, chúng có thể đọc những gì được ghi nhớ cho các hạng mục của bóc tách (prices_list) và định giá các hạng mục từ đó (prices_apply, có thể xem trước). Đây là cùng danh sách với hộp thoại.
