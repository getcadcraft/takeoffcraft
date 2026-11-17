---
title: Lưu và mở lại bóc tách
summary: Lưu bóc tách dưới dạng tệp dự án .takeoff.json, mở lại cùng các PDF, và điều gì xảy ra khi một PDF bị thiếu hoặc đã thay đổi.
keywords: bóc tách trong PDF, nhúng, đính kèm, lưu, mở, mở lại, dự án, takeoff.json, tiếp tục, PDF đã sửa, PDF đã thay đổi, PDF bị thiếu, sao lưu, tự động lưu, khôi phục, sự cố
from: bd5080a6
---

Bóc tách được lưu dưới dạng một tệp dự án nhỏ, `(name).takeoff.json`. Tệp này chứa các hạng mục, cấu kiện, đơn giá, tỷ lệ của mọi tờ và mọi dấu. Tệp **không** chứa các PDF; nó tìm lại các PDF theo nội dung của chúng.

## Lưu

1. Chọn {{ui:Lưu bóc tách}} trong nhóm {{ui:Tệp}}, hoặc nhấn {{key:Mod+S}}.
   Trình duyệt của bạn tải xuống `(name).takeoff.json`. Thanh trạng thái hiển thị "Đã lưu (name).takeoff.json. Tệp này mở lại trên cùng các PDF (chúng được khớp theo nội dung)."
2. Đưa tệp đến cạnh các PDF của công trình, để hai thứ ở cùng nhau.

Mỗi lần lưu sẽ tải xuống một tệp mới. Trình duyệt có thể đặt tên cho tệp thứ hai là `(name) (1).takeoff.json`; hãy giữ tệp mới nhất.

Tên lấy từ PDF đầu tiên bạn mở trong bóc tách này.

:::note
Lưu bóc tách vẫn là cách duy nhất để giữ một bóc tách thành tệp. Trong lúc bạn làm việc, TakeoffCraft cũng giữ một bản khôi phục trong trình duyệt này (xem bên dưới), và lưu lên đám mây hiện chưa có sẵn. Nếu bạn cố đóng thẻ khi còn thay đổi chưa lưu, trình duyệt sẽ hỏi có rời đi hay không.
:::

## Giữ bóc tách bên trong PDF

{{ui:Xuất}} › {{ui:PDF có kèm bóc tách}} tải xuống một bản sao của mỗi PDF đang mở, đặt tên như `Plans (with takeoff).pdf`, và bản sao này mang toàn bộ bóc tách dưới dạng tệp đính kèm: hạng mục, dấu, tỷ lệ, khu vực dự thầu, mọi thứ mà `.takeoff.json` chứa. Các trang của nó không bị thay đổi, nên trông và in ra giống như bản gốc, và các trình đọc PDF khác liệt kê bóc tách trong phần tệp đính kèm của chúng.

Mở PDF đó trong TakeoffCraft (bằng bất kỳ cách nào bạn mở PDF) và nó sẽ hỏi **PDF này có bóc tách bên trong**: chọn {{ui:Mở bóc tách}} để lấy lại, hoặc {{ui:Chỉ PDF}} để chỉ mở bản vẽ. Bản sao đại diện cho PDF mà nó được tạo từ, nên một `.takeoff.json` được lưu từ bản nào cũng mở được trên cả hai.

Với nhiều PDF, mỗi bản sao đều mang toàn bộ bóc tách; hãy mở chúng cùng nhau. Lưu lại từ một bản sao sẽ thay thế bóc tách bên trong nó, chứ không thêm một bản thứ hai. `.takeoff.json` vẫn là tệp cần giữ: nó nhỏ gọn, và là thứ mà tự động lưu và ứng dụng máy tính ghi ra.

## Nếu thẻ hoặc trình duyệt dừng

Vài giây sau mỗi thay đổi, TakeoffCraft giữ một bản sao của bóc tách trong bộ nhớ riêng của trình duyệt này, cùng với các PDF khi tổng dung lượng của chúng là 64 MB hoặc ít hơn. Không có gì được tải lên. Khi bạn lưu bóc tách, bắt đầu một bóc tách mới hoặc mở một dự án khác, bản sao đó sẽ bị xóa.

Nếu thẻ bị sự cố, trình duyệt hoặc máy tính dừng, hoặc bạn rời đi khi còn thay đổi chưa lưu, lần mở TakeoffCraft tiếp theo sẽ hỏi **Khôi phục công việc của bạn?** và liệt kê bóc tách theo tên. Chọn **Khôi phục** để lấy lại: các hạng mục, dấu và tỷ lệ được trả về, và các PDF mở lại nếu chúng đã được giữ. Thanh trạng thái hiển thị "Đã khôi phục (name). Chưa lưu thành tệp: Lưu bóc tách sẽ giữ nó lại." Khi các PDF quá lớn để giữ, hãy mở lại chúng; các dấu sẽ xuất hiện trên các tờ của chúng. Thêm: [Khôi phục công việc của bạn](common:recover).

## Mở lại

1. Mở TakeoffCraft.
2. Thả tệp `.takeoff.json` và các PDF của nó lên trang cùng lúc. Hoặc chọn {{ui:Mở bản vẽ}} cho các PDF và {{ui:Mở bóc tách}} cho dự án, theo thứ tự nào cũng được.
   Thanh trạng thái hiển thị "Đã mở (name): 12 hạng mục, 340 dấu." Mỗi tờ lấy lại tỷ lệ của nó và các dấu xuất hiện trên tờ.

Thứ tự của các PDF không quan trọng, và tên tệp hoặc thư mục của chúng cũng vậy. TakeoffCraft nhận diện mỗi PDF bằng dấu vân tay của nội dung của nó.

Nếu bạn mở một dự án khi bóc tách hiện tại có thay đổi chưa lưu, TakeoffCraft sẽ hỏi trước: **Hủy**, **Bỏ thay đổi**, hoặc **Lưu bóc tách trước**. Mở một dự án sẽ thay thế các hạng mục và dấu hiện tại; các PDF đã mở vẫn mở.

## Khi thiếu một PDF

Nếu bạn mở dự án mà không có đủ các PDF, thanh trạng thái thêm "Mở các PDF của nó để xem dấu (liệt kê trong danh sách tờ)." Dưới danh sách tờ, một ghi chú nói:

"Bóc tách này cũng bao gồm các PDF chưa mở. Khối lượng của chúng được tính; hãy mở chúng để xem và sửa dấu của chúng:"

theo sau là tên tệp và dung lượng. Dấu của chúng vẫn được tính trong mọi tổng và mọi bản xuất, với các tỷ lệ mà chúng được đo. Mở các PDF đó để xem và sửa dấu.

## Khi một PDF đã thay đổi

Một PDF đã được sửa, hoặc vừa được lưu lại bởi chương trình khác, có nội dung khác, nên đối với TakeoffCraft nó là một **tệp khác**, dù cùng tên. Trong ghi chú dưới danh sách tờ, một tệp như vậy ghi "có một tệp cùng tên đang mở, nhưng nội dung khác nhau".

- Các dấu vẫn gắn với phiên bản cũ. Chúng tiếp tục được tính, ở vị trí và tỷ lệ cũ.
- PDF đã sửa mở thành các tờ mới, không có tỷ lệ và không có dấu.

Để chuyển bóc tách sang bản sửa, hãy mở cả hai PDF và dùng {{ui:So sánh}} trên tờ mới: [So sánh một tờ đã sửa và chuyển bóc tách](topic:compare-revisions).

## Tệp hỏng hoặc tệp không phải của TakeoffCraft

TakeoffCraft kiểm tra mọi tệp dự án trước khi dùng. Các thông báo bạn có thể thấy:

- "(file) không phải là dự án TakeoffCraft (không phải JSON hợp lệ)."
- "Đây không phải là tệp dự án TakeoffCraft."
- "Dự án này được lưu bởi một TakeoffCraft mới hơn. Hãy mở nó ở đó."
- "3 dấu bị hỏng và đã bị bỏ qua." (phần còn lại vẫn mở)

## Lịch sử hoàn tác

Lịch sử hoàn tác bắt đầu lại từ đầu khi bạn mở một dự án. Việc lưu không xóa nó.
