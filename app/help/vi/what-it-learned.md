---
title: Những gì nó đã học từ takeoff của bạn
summary: TakeoffCraft giữ các ký hiệu bạn xác nhận bằng Đếm tự động, các bộ điều kiện, các định mức bạn dùng nhiều nhất và các mẫu bạn lặp lại trên mọi trang, tất cả nằm trong tệp riêng của takeoff. Xem, dùng và xóa.
keywords: học, đã học, học tập, trợ lý, ghi nhớ, ký hiệu, mẫu, giống công trình trước, công trình trước, bộ điều kiện, điều kiện, tái sử dụng, định mức, dùng nhiều nhất, gợi ý, lặp lại trên mọi trang, mọi trang, khung tên, mẫu, xóa tất cả, quên, quyền riêng tư
from: 54d99e99
---

TakeoffCraft nhanh hơn khi bạn làm càng nhiều takeoff với nó. Nó chỉ học **từ những gì bạn chấp nhận**:

- các ký hiệu bạn đã khoanh bằng [Đếm tự động](topic:auto-count) rồi thêm vào,
- các bộ điều kiện bạn lưu,
- các định mức bạn dùng (mỗi công trình một lần),
- các mẫu dấu bạn lặp lại trên mọi trang.

Đó là so khớp đơn giản trên chính các tờ của bạn, cùng việc tìm kiếm mà Đếm tự động thực hiện. Nó không phải một mô hình được huấn luyện. Mọi thứ nó học được được giữ **trong tệp của takeoff này** (`.takeoff.json`), và không gì được gửi đi đâu cả. Để mang sang công trình tiếp theo, dùng [Giống công trình trước](topic:what-it-learned#same-as-last-job).

Chọn {{ui:Learned}} trên thanh công cụ (biểu tượng bóng đèn, cạnh {{ui:Auto count}}) để xem tất cả.

## Ký hiệu

Khi bạn khoanh một ký hiệu bằng {{ui:Auto count}} và chọn {{ui:Add}}, ký hiệu bạn đã khoanh được giữ lại, cùng mức khớp bạn đã chấp nhận.

- Trong {{ui:Learned}}, chọn {{ui:Find on this sheet}} hoặc {{ui:Find on every sheet}}. Bước xem xét Đếm tự động quen thuộc sẽ mở: nhấp vào một hộp để bỏ nó ra, kéo thanh trượt, rồi thêm chúng. Không có gì được thêm cho đến khi bạn làm vậy.
- Khi bạn mở một tờ chưa có ký hiệu đã học nào, một thanh ở trên cùng sẽ đề nghị {{ui:Find …}} cho nó. {{ui:Not now}} ẩn nó cho tờ đó.
- Nếu takeoff không có hạng mục nào cùng tên, việc thêm dấu cũng thêm hạng mục (một bước hoàn tác).
- Thêm lại ký hiệu của cùng một hạng mục sẽ được tính vào ký hiệu nó đã biết; một ký hiệu trông khác sẽ được giữ như ký hiệu thứ hai.
- Như Đếm tự động, nó tìm ký hiệu ở góc vuông và trên các tờ có tỷ lệ khác.

## Bộ điều kiện

Một bộ giữ các điều kiện của takeoff (hạng mục với đơn vị, đơn giá, hao hụt và định mức), không có dấu.

1. Trong {{ui:Learned}}, chọn {{ui:Save this takeoff's conditions as a set…}} rồi đặt tên. Một bộ cùng tên sẽ bị thay thế.
2. Trong takeoff có bộ đó, {{ui:Add}} thêm các điều kiện mà takeoff chưa có. Các điều kiện cùng tên và cùng loại được giữ nguyên. Đó là một bước hoàn tác.

## Giống công trình trước

Tệp của công trình trước của bạn giữ những gì nó đã học. Để bắt đầu công trình mới từ đó:

1. Mở bản vẽ mới, rồi chọn {{ui:Learned}} › {{ui:Same as last job…}}.
2. Chọn tệp `.takeoff.json` của công trình trước.
3. Đánh dấu những gì cần đưa vào: các điều kiện của nó (chỉ những điều kiện takeoff này chưa có), và những gì nó đã học (ký hiệu, bộ, định mức, mẫu). Rồi {{ui:Bring them in}}.

Các điều kiện của nó cũng được giữ như một bộ, đặt tên theo công trình đó. Các dấu và khối lượng của nó vẫn nằm trong tệp riêng. Toàn bộ là một bước hoàn tác.

## Định mức bạn dùng nhiều nhất

Một hạng mục có định mức được tính là đã dùng một lần cho mỗi công trình khi nó có khối lượng và bạn lưu takeoff. Công trình là tập hợp các tệp bản vẽ mà nó được bóc tách, nên lưu lại cùng takeoff sẽ không tính hai lần. Danh sách dưới {{ui:Assemblies you use most}} đặt những định mức bạn dùng nhiều nhất lên đầu. Nó bỏ qua những định mức takeoff này đã có. {{ui:Add}} thêm một định mức như lần cuối bạn dùng, với tất cả các thành phần.

## Lặp lại trên mọi trang

Với các dấu giống nhau trên mọi trang của một bộ, như số đếm khung tên hoặc một chi tiết điển hình:

1. Chọn các dấu trên một tờ ([Chọn dấu](topic:copy-paste#select-the-marks)).
2. Trong {{ui:Learned}}, chọn {{ui:Repeat the selected marks on every page…}}, đặt tên cho mẫu và xác nhận.

Chúng được đặt lên mọi trang mở khác **cùng kích thước**, cùng vị trí, trong một bước hoàn tác. Chiều dài và diện tích chỉ đặt lên các trang có cùng tỷ lệ; số đếm đặt trên bất kỳ trang nào cùng kích thước. Trang đã có chúng sẽ được bỏ qua. Mẫu được giữ lại, nên các trang bạn mở sau này sẽ nhận đề nghị trong thanh, hoặc bạn dùng {{ui:Repeat on every page}} trong danh sách.

## Xem và xóa

Mọi thứ đã học được liệt kê trong {{ui:Learned}}. Thùng rác xóa một mục. {{ui:Clear all}} xóa mọi thứ đã học và để nguyên hạng mục và dấu của bạn. Cả hai đều có thể hoàn tác cho đến khi bạn đóng takeoff, và cả hai đều được lưu cùng takeoff.

Để ngừng học trong một takeoff, bỏ đánh dấu {{ui:Learn from this takeoff}}. Không có gì mới được học, và những gì đang được liệt kê vẫn còn cho đến khi bạn xóa.

## Điều nên biết

- Các phiên bản TakeoffCraft cũ hơn mở tệp có nội dung đã học bình thường. Chúng bỏ qua phần đó, và loại bỏ nó nếu lưu lại tệp.
- Một ký hiệu đã học là một ảnh nhỏ của những gì bạn đã khoanh, được giữ trong tệp (vài KB mỗi ảnh).
- Các ký hiệu đã học được tìm kiếm như Đếm tự động tìm, nên cùng giới hạn áp dụng: [Đếm tự động một ký hiệu](topic:auto-count).
