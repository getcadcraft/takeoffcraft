---
title: Xử lý sự cố
summary: Triệu chứng, nguyên nhân và cách khắc phục các thông báo và tình huống bất ngờ bạn có thể gặp trong TakeoffCraft, trích nguyên văn như ứng dụng hiển thị.
keywords: sự cố, lỗi, problems, errors, không hoạt động, sửa, trợ giúp, bị từ chối, không đo được, không có tỷ lệ, thiếu dấu, xuất thất bại, ngoại tuyến, cảm ứng, touch
from: cd319c9b
---

TakeoffCraft giải thích hầu hết các lần từ chối trên thanh trạng thái ở cuối cửa sổ. Tìm thông báo bên dưới.

## Mở tệp

| Thông báo hoặc triệu chứng | Nguyên nhân | Cách khắc phục |
|---|---|---|
| Không tải được trình đọc PDF. Tải lại trang để thử lại. | Trình đọc PDF của ứng dụng không tải được, thường vì bạn đang ngoại tuyến và ứng dụng chưa từng được lưu để dùng ngoại tuyến. | Kết nối lại và tải lại. Sau đó chọn {{ui:Lưu để dùng ngoại tuyến}} và đợi {{ui:Sẵn sàng ngoại tuyến}}; xem [Làm việc ngoại tuyến](common:offline). |
| (tên) được bảo vệ bằng mật khẩu. Mở một bản sao không có mật khẩu. | PDF cần mật khẩu để mở. | Yêu cầu một bản sao không có mật khẩu, hoặc gỡ mật khẩu trong một chương trình PDF bạn tin cậy. |
| (tên) không thể đọc như một PDF (…) | Tệp bị hỏng hoặc thực ra không phải PDF. | Tải lại, hoặc lưu lại từ chương trình đã tạo ra nó. |
| (tên) đã được mở. | Cùng một PDF (cùng nội dung) đang mở. | Không cần làm gì. |
| TakeoffCraft mở PDF và dự án .takeoff.json. Đã bỏ qua: … | Các loại tệp khác đã bị bỏ. | Chuyển bản vẽ sang PDF trước. |
| Không có gì xảy ra khi thả tệp vào | Tệp được thả ngoài cửa sổ trình duyệt, hoặc trình duyệt đã mở PDF trong một thẻ mới. | Thả vào chính trang TakeoffCraft; khung "Thả PDF hoặc .takeoff.json" hiện khi nào thao tác sẽ có tác dụng. |
| Mở một bộ lớn mất một lúc | Mỗi PDF được đọc toàn bộ để lập dấu vân tay nhận dạng. | Đợi thông báo "Đang mở (tên)…" biến mất. Ảnh thu nhỏ sẽ hiện dần khi bạn cuộn. |

## Đo

| Thông báo hoặc triệu chứng | Nguyên nhân | Cách khắc phục |
|---|---|---|
| Hãy mở một PDF trước. | Chưa mở tờ nào. | Mở một PDF. |
| Tờ này chưa có tỷ lệ nên không đo được. Chọn một tỷ lệ đặt sẵn hoặc hiệu chuẩn trước (đếm thì dùng được không cần tỷ lệ). | Các công cụ Tuyến tính, Diện tích, Vòng tròn và Lỗ khoét cần tỷ lệ. | [Đặt tỷ lệ](topic:set-the-scale). |
| Hãy tạo một hạng mục tuyến tính trước (đặt tên dưới {{ui:Hạng mục}}), rồi nhấp lên tờ. | Không có hạng mục nào thuộc kiểu đó. | Điền biểu mẫu {{ui:Hạng mục mới}} vừa mở, và chọn {{ui:Thêm}}. |
| Hãy chọn một hạng mục để bóc tách trước (bảng Hạng mục). | Hạng mục hiện tại đã bị xóa. | Nhấp một hạng mục dưới {{ui:Hạng mục}}. |
| Một đoạn cần ít nhất hai điểm. | Bạn kết thúc sau một lần nhấp. | Nhấp ít nhất hai điểm. |
| Một diện tích cần ít nhất ba điểm. | Quá ít góc. | Nhấp ít nhất ba góc. |
| Đường viền tự cắt chính nó, nên diện tích sẽ sai. Vẽ lại mà không cắt nhau. | Hình số tám. | Vẽ thành hai diện tích, hoặc đi quanh cạnh theo thứ tự. |
| Các điểm đó không bao quanh diện tích nào. | Tất cả các điểm nằm trên một đường. | Nhấp các góc bao quanh một khoảng không gian. |
| Chọn trước một dấu diện tích (công cụ {{ui:Chọn}}), rồi chọn {{ui:Lỗ khoét}} và vẽ lỗ bên trong nó. | {{ui:Lỗ khoét}} cần một diện tích đã chọn. | Nhấn {{key:V}}, nhấp vào diện tích, rồi {{key:X}}. |
| Lỗ khoét phải nằm hoàn toàn bên trong diện tích. | Lỗ cắt qua hoặc vượt ra ngoài đường viền. | Vẽ lỗ bên trong diện tích. |
| Các lỗ khoét không được chồng lên nhau. | Hai lỗ chồng lên nhau. | Vẽ một lỗ bao cả hai, hoặc giữ chúng tách rời. |
| … Điểm đã được đặt lại. | Một góc được kéo sẽ làm đường viền tự cắt hoặc đẩy một lỗ ra ngoài. | Kéo đến vị trí giữ hình hợp lệ. |
| Nhấp một điểm trên mép vòng tròn, cách xa tâm. | Lần nhấp thứ hai quá gần tâm. | Nhấp xa hơn ra ngoài. |
| Nhấp làm di chuyển tờ thay vì thêm điểm | Con trỏ đã di chuyển quá vài điểm ảnh khi nút đang giữ; việc đó được tính là kéo. | Nhấp mà không di chuyển, nhất là trên bàn di chuột. |
| {{key:Shift}} không bắt điểm | Bạn đang đặt điểm trên một cung, hoặc đang vẽ vòng tròn. | Bắt góc 45° chỉ áp dụng cho đoạn thẳng. |
| Điểm nhảy vào một đường gần đó | {{ui:Bắt điểm}} vào các đường của bản vẽ đang bật. | Phóng to để nhấp giữa các đường, hoặc nhấn {{key:F3}} để tắt {{ui:Bắt điểm}}. |
| Không hiện ký hiệu bắt điểm | Bắt điểm đang tắt, tờ là bản quét, hoặc công cụ không bắt điểm ({{ui:Đếm}}, {{ui:Đếm tự động}}, dán). | Nhấn {{key:F3}}; với bản quét thì không có đường để bắt điểm. |
| Chiều dài sai | Tỷ lệ sai (thường là PDF bị đổi kích thước kèm một tỷ lệ đặt sẵn). | Dùng {{ui:Kiểm tra}} trên một kích thước đã biết, rồi {{ui:Hiệu chuẩn}}. |

## Tỷ lệ

| Thông báo hoặc triệu chứng | Nguyên nhân | Cách khắc phục |
|---|---|---|
| Chọn hai điểm cách xa nhau hơn. | Các điểm hiệu chuẩn gần như chồng lên nhau. | Hiệu chuẩn trên một kích thước dài hơn. |
| Một thông báo trong hộp thoại hiệu chuẩn, như "Không đọc được khoảng cách đó" | Khoảng cách ở dạng TakeoffCraft không đọc được. | Xem [Nhập chiều dài, đơn giá và phần trăm](topic:entry-formats). |
| Tờ này chưa có tỷ lệ nên không có gì để kiểm tra. Hiệu chuẩn nó, hoặc chọn một tỷ lệ đặt sẵn. | {{ui:Kiểm tra}} trên tờ chưa có tỷ lệ. | Đặt tỷ lệ trước. |
| Danh sách {{ui:Đặt sẵn}} bị mờ đi | Chưa mở tờ nào. | Mở một PDF. |

## Khối lượng và công thức

| Thông báo hoặc triệu chứng | Nguyên nhân | Cách khắc phục |
|---|---|---|
| Chưa đầy đủ: … (không tính vào tổng) | Lỗi công thức, hoặc dấu trên tờ không có tỷ lệ. | Xem [Đọc khối lượng và dự toán](topic:read-quantities#the-incomplete-warning). |
| +(n) chưa có tỷ lệ bên cạnh một hạng mục | Một số dấu của nó nằm trên tờ không có tỷ lệ. | Đặt tỷ lệ cho các tờ đó. |
| Lỗi công thức: … | Không thể tính công thức. | Xem [Ngôn ngữ công thức](topic:formulas#errors). |
| Hạng mục này có dấu nên không thể đổi kiểu. | Kiểu bị khóa khi đã có dấu. | Tạo một hạng mục mới thuộc kiểu khác và vẽ lại các dấu bằng nó. |
| Hạng mục cần có tên. | Ô tên đã bị xóa trống. | Nhập một tên. |
| Nhập số tiền như 12.50. / Nhập tỷ lệ phần trăm như 10 hoặc 7.5. | Không đọc được đơn giá hoặc hao hụt. | Xem [Nhập chiều dài, đơn giá và phần trăm](topic:entry-formats). |
| Tổng có vẻ bị nhân đôi | Hạng mục có đơn giá riêng và các thành phần mang cùng một chi phí. | Đặt đơn giá riêng của hạng mục về 0 khi các thành phần đã mang chi phí. |
| Các dấu của hạng mục này nằm trên PDF chưa mở. | Bạn đã nhấp một hạng mục mà mọi dấu của nó nằm trên các PDF bạn chưa mở. | Mở các PDF đó; tên của chúng được liệt kê dưới {{ui:Tờ}}. |

## Đếm tự động

| Thông báo hoặc triệu chứng | Nguyên nhân | Cách khắc phục |
|---|---|---|
| Khung đó quá nhỏ. Vẽ nó bao quanh toàn bộ ký hiệu. | Khung quá nhỏ. | Phóng to và khoanh toàn bộ ký hiệu. |
| Khung đó gần như trống. Vẽ nó bao quanh một ký hiệu. | Khung chỉ chứa giấy. | Khoanh chính ký hiệu. |
| Không có kết quả khớp. Hạ thanh trượt {{ui:Độ khớp}}, hoặc khoanh ký hiệu chặt hơn. | Không có mục nào đạt đủ điểm. | Khoanh ký hiệu chặt hơn, hoặc kéo thanh trượt {{ui:Độ khớp}} xuống thấp hơn. |
| Quá nhiều kết quả khớp, kể cả ký hiệu sai | Các ký hiệu giống nhau có điểm gần với ký hiệu thật. | Nâng thanh trượt {{ui:Độ khớp}} và nhấp các khung sai để loại bỏ chúng. |
| Thiếu kết quả khớp trên tờ khác | Các tờ đó vẽ ký hiệu với kích thước khác, hoặc với góc không theo bước 90°. | Tìm trên các tờ đó bằng một khung vẽ ở đó, hoặc đếm bằng tay. |
| (n) tờ quá lớn để tìm kiếm với kích thước ký hiệu này. | Tờ sẽ quá lớn ở kích thước làm việc. | Khoanh một ký hiệu lớn hơn, hoặc đếm tờ đó bằng tay. |
| Tìm kiếm thất bại: … | Tìm kiếm nền đã dừng. | Thử lại; tải lại trang nếu lặp lại (lưu trước). Khi ngoại tuyến, chỉ hoạt động khi thanh ứng dụng hiện {{ui:Sẵn sàng ngoại tuyến}}. |
| Kéo vẽ một khung thay vì di chuyển | Đó là cách {{ui:Đếm tự động}} hoạt động. | Giữ {{key:Space}} và kéo, hoặc kéo bằng nút giữa. |

## Lưu và xuất

| Thông báo hoặc triệu chứng | Nguyên nhân | Cách khắc phục |
|---|---|---|
| Chưa có gì để xuất: tạo một hạng mục và bóc tách nó. | Không có hạng mục nào. | Tạo một hạng mục trước. |
| Chưa có dấu nào trên các PDF đang mở. | {{ui:PDF đã đánh dấu}} không có gì để vẽ lên các PDF đang mở. | Mở các PDF có dấu. |
| PDF này được bảo vệ bằng mật khẩu hoặc được mã hóa, nên không thể ghi bản sao đã đánh dấu. … | PDF được mã hóa. | Thay vào đó xuất {{ui:XLSX}}, hoặc dùng bản PDF không mã hóa (khi đó nó cần bóc tách riêng vì là một tệp khác). |
| Không thể ghi PDF đã đánh dấu: … | Thường là: đang ngoại tuyến, và ứng dụng chưa được lưu để dùng ngoại tuyến, nên thiếu bộ ghi PDF. | Kết nối mạng và chọn lại {{ui:PDF đã đánh dấu}}. Để tránh lỗi, chọn {{ui:Lưu để dùng ngoại tuyến}} và đợi {{ui:Sẵn sàng ngoại tuyến}}. |
| Chỉ tải xuống một PDF đã đánh dấu | Trình duyệt đã chặn nhiều lượt tải xuống cùng lúc. | Cho phép tải nhiều tệp cho trang này, rồi xuất lại. |
| (tệp) không phải là dự án TakeoffCraft (không phải JSON hợp lệ). / Đây không phải tệp dự án TakeoffCraft. | Sai tệp, hoặc tệp bị hỏng. | Chọn tệp .takeoff.json. |
| Dự án này được lưu bởi một TakeoffCraft mới hơn. Hãy mở nó ở đó. | Tệp đến từ một bản dựng mới hơn. | Mở nó trong bản dựng mới hơn. |
| (n) dấu bị hỏng và bị bỏ qua. | Một phần tệp bị hỏng hoặc bị sửa bằng tay. | Phần còn lại đã mở. Vẽ lại các dấu bị thiếu, hoặc mở một bản cũ hơn. |
| Thiếu dấu sau khi mở lại | Các PDF chưa mở, hoặc một trong số đó đã thay đổi. | Xem [Lưu và mở lại bóc tách](topic:save-and-reopen#when-a-pdf-has-changed). |
| Trình duyệt hỏi "Rời khỏi trang?" | Có thay đổi chưa lưu. | Ở lại, và lưu bằng {{key:Mod+S}}. |

## Phím và chuột

| Triệu chứng | Nguyên nhân | Cách khắc phục |
|---|---|---|
| Phím chữ không có tác dụng | Con trỏ nằm trong một ô (tìm kiếm, trình chỉnh sửa hạng mục, bảng). | Nhấp vào tờ, hoặc nhấn {{key:Tab}} để ra khỏi ô. |
| Con lăn phóng to thay vì cuộn | Con lăn luôn phóng to tờ. | Kéo để di chuyển. |
| Toàn trang trở nên lớn hơn hoặc nhỏ hơn | Thu phóng trình duyệt ({{key:Mod+Plus}} hoặc {{key:Mod+Minus}}). | Nhấn {{key:Mod+0}}. Phóng to tờ bằng con lăn, hoặc bằng {{key:Plus}} và {{key:Minus}} đơn thuần. |
| Một dấu biến mất khi nhấn {{key:Backspace}} | {{key:Backspace}} xóa dấu đã chọn khi bạn không đang vẽ. | {{key:Mod+Z}} đưa nó trở lại. |
| Nhấp chuột phải không kết thúc trên Mac | Nhấp kiểu Control được xử lý như nhấp thường. | Dùng nhấp hai ngón với nhấp phụ được bật, hoặc nhấn {{key:Enter}}. |

## Màn hình cảm ứng

Trên màn hình cảm ứng:

- **Chạm** đặt một điểm (hoặc chọn một dấu bằng {{ui:Chọn}}). Một ngón tay kéo sẽ di chuyển khung nhìn.
- **Hai ngón** chụm để phóng to quanh điểm ở giữa chúng, và di chuyển khi chúng cùng di chuyển. Đặt ngón thứ hai xuống sẽ hủy thao tác mà ngón đầu tiên đã bắt đầu, nên một cử chỉ chụm không bao giờ để lại một điểm.
- **Hoàn tất** một đoạn hoặc một đường viền bằng **nhấn giữ** (tương đương nhấp chuột phải), **chạm đúp**, hoặc {{ui:Xong}} trên thanh ở cuối tờ. Cùng thanh đó có {{ui:Sau}} (lùi lại điểm cuối) và {{ui:Hủy}}. Diện tích cũng đóng khi chạm vào điểm đầu tiên.
- Ngón tay có vùng chạm lớn hơn: điểm bắt, đóng và chọn từ xa hơn, và các núm góc lớn hơn.

Nhập chiều dài cần bàn phím; bàn phím trên màn hình hoạt động khi ô {{ui:Nhập}} được chọn.

Trên máy tính bảng, bàn phím và chuột hoặc bàn di chuột giúp bóc tách dễ hơn nhiều.

## Làm việc ngoại tuyến

| Nút hoặc triệu chứng | Nguyên nhân | Cách khắc phục |
|---|---|---|
| {{ui:Không thể lưu}} | Một số tệp của ứng dụng không được tải xuống khi lưu để dùng ngoại tuyến. | Kiểm tra kết nối và chọn nút lại. |
| {{ui:Không dùng được chế độ ngoại tuyến}} | Cửa sổ riêng tư và một số máy tính được quản lý chặn bản sao ngoại tuyến. | Dùng cửa sổ thường, hoặc trình duyệt khác. |
| "Đang lưu…" không bao giờ bắt đầu | Bạn đang ngoại tuyến; việc lưu cần kết nối. | Lưu khi trực tuyến. |
| Ứng dụng vẫn là bản cũ sau khi cập nhật | Bản sao ngoại tuyến là từ một ngày trước. | Khi trực tuyến, chọn {{ui:Sẵn sàng ngoại tuyến}}, rồi {{ui:Lưu lại (lấy bản mới nhất)}}. |
| Bạn muốn lấy lại dung lượng | Bản sao ngoại tuyến khoảng 6 MB. | Chọn {{ui:Sẵn sàng ngoại tuyến}}, rồi {{ui:Xóa bản ngoại tuyến}}. |

Xem [Làm việc ngoại tuyến](common:offline).

## Vẫn chưa được

Tải lại trang nếu ứng dụng ngừng phản hồi. Bóc tách của bạn sẽ mất khi tải lại trừ khi bạn đã lưu, nên nếu có thể hãy lưu trước bằng {{key:Mod+S}}. Với các câu hỏi về trình duyệt, xem [Trình duyệt và máy tính](common:browsers).
