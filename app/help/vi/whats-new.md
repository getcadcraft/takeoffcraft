---
title: Có gì mới trong 0.7
summary: Bản vẽ DWG và DXF mở thành các tờ với tỷ lệ riêng của chúng, đếm và chiều dài chính xác từ chính bản vẽ, giá thầu nhà thầu phụ đã chọn làm giá của một gói, thư mời thầu với giá niêm phong, công cụ cho trợ lý về bản vẽ, và USD từ khung nhìn kiểm tra 3D.
keywords: có gì mới, ghi chú phát hành, nhật ký thay đổi, thay đổi, 0.7, phiên bản, tính năng mới, dwg, dxf, bản vẽ, bố cục, không gian mô hình, tỷ lệ bản vẽ, đếm từ bản vẽ, đếm cad, khối, khối động, thuộc tính, lớp, xref, bản vẽ liên kết, đo bản vẽ, đa tuyến, tô bóng, pdf đã đánh dấu, giá thầu đã chọn, dùng một giá thầu, gửi mời thầu, thư mời thầu, giá niêm phong, mở thầu, thầu muộn, hồ sơ nhà thầu phụ, csv, trợ lý, mcp, usd, usdz, đơn vị, danh sách đơn vị, gọn, bảng, hộp thoại, tiếng bồ đào nha
from: ad4f0df1
---

Đây là những gì đã thay đổi trong TakeoffCraft 0.7 so với 0.6. Bản vẽ giờ mở nguyên trạng, không cần in ra PDF trước, và một gói dự thầu có thể gửi đến các nhà thầu phụ và quay về cùng giá.

## Mới

### Bản vẽ DWG và DXF

- **Mở một bản vẽ thành các tờ.** {{ui:Mở bản vẽ}} trong nhóm {{ui:Tệp}} ({{key:Mod+O}}, hoặc thả các tệp) nhận bản vẽ DWG và DXF bên cạnh PDF. Không gian mô hình và mọi bố cục trở thành các tờ trong danh sách {{ui:Tờ}}, và một bóc tách có thể bao gồm cả bản vẽ lẫn PDF. Không có gì được tải lên. Xem [Mở một bản vẽ DWG hoặc DXF](topic:open-a-drawing).
- **Tỷ lệ lấy từ bản vẽ.** Một bố cục bắt đầu ở tỷ lệ của khung nhìn lớn nhất của nó, được gọi tên như một đặt sẵn khi nó là một đặt sẵn, như 1/2" = 1'-0". Mô hình bắt đầu theo đơn vị của bản vẽ. Một bản vẽ không có đơn vị ghi "Không có tỷ lệ" cho đến khi bạn hiệu chuẩn nó. {{ui:Hiệu chuẩn}}, {{ui:Kiểm tra}} và {{ui:Đặt sẵn}} vẫn được ưu tiên. Xem [Tỷ lệ](topic:open-a-drawing#the-scale).
- **Lớp và bản vẽ liên kết.** {{ui:Lớp}} trên thanh tờ hiện hoặc ẩn các lớp của bản vẽ. Các lớp mà tệp đã tắt hoặc đóng băng bắt đầu ở trạng thái ẩn và không được đếm trừ khi bạn chọn. Một bản vẽ liên kết (xref) mở bên cạnh bản vẽ chủ được vẽ và đếm tại nơi nó được chèn; cho đến khi nó được mở, thanh trạng thái cho biết thiếu gì. Xem [Lớp](topic:open-a-drawing#layers).
- **PDF đã đánh dấu hoạt động từ một bản vẽ.** {{ui:Xuất}} › {{ui:PDF đã đánh dấu}} vẽ trước các tờ có dấu của bản vẽ thành PDF, nên bản sao hiện các dấu và chú giải của bạn mà không cần bước in. Nó được vẽ bằng màu đen hoặc màu của bản vẽ, không có bảng kiểu in. Xem [PDF đã đánh dấu](topic:export-estimate#a-marked-pdf).

### Đếm và chiều dài chính xác từ bản vẽ

- **Đếm những gì bản vẽ nói là có.** {{ui:Đếm CAD}} trên thanh tờ đếm một khối theo tên (kể cả khối lồng nhau, trạng thái khối động và mảng khối), mọi thứ cùng loại trên một lớp, hoặc một giá trị văn bản hay thuộc tính. Nó đếm những gì tờ hiển thị hoặc cả bản vẽ một lần. Thêm các dấu là một bước hoàn tác, và đếm lại chỉ thêm những gì mới. {{ui:Đếm tự động}} vẫn dành cho PDF và cho các ký hiệu không phải khối. Xem [Đếm từ một bản vẽ](topic:count-from-a-drawing).
- **Đo từ chính các đường của bản vẽ.** {{ui:Đo bản vẽ}} lấy các đường thẳng, cung tròn, đa tuyến, vòng tròn, tô bóng và khối đặc mà bạn bấm hoặc quét chọn làm dấu của một hạng mục tuyến tính hoặc diện tích. Cung tròn, độ phồng và lỗ của một vùng tô bóng cho kết quả chính xác; elip và spline được đo bằng các dây cung nhỏ, và thanh cho biết điều đó. Xem [Đo từ một bản vẽ](topic:measure-from-a-drawing).

### Dự thầu

- **Dùng giá thầu của một nhà thầu phụ làm giá của gói.** Trong {{ui:Xuất}} › {{ui:Gói dự thầu và cân bằng…}}, chọn {{ui:Dùng}} trên một giá thầu. Các hạng mục của gói vẫn là khối lượng, một dòng **Giá thầu đã chọn** mang giá, các hạng mục mà giá thầu bỏ ra vẫn tính theo chi phí của bạn, và chi phí chung, lợi nhuận và bảo lãnh áp dụng cho nó. Đổi giá thầu là một bước hoàn tác; sổ làm việc và bảng tóm tắt giá thầu đều mang nó. Xem [Dùng một giá thầu làm giá của gói](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Gửi một gói để lấy giá thầu.** {{ui:Gửi mời thầu…}} dưới một gói gửi email cho mỗi nhà thầu phụ một liên kết đến một trang không cần tài khoản: họ xem phạm vi và các tờ dưới dạng PDF, gõ giá vào từng dòng hoặc đánh dấu là không bao gồm, thêm ghi chú và tối đa ba tệp, hoặc từ chối. {{ui:Lấy giá}} kéo những gì đã quay về vào bảng cân bằng, gắn cờ **web**. Việc gửi chỉ mở cho các tài khoản mà đội CadCraft đã bật trong lúc thử nghiệm (xem bên dưới). Xem [Gửi một gói để lấy giá thầu](topic:bid-invitations).
- **Niêm phong cho đến lúc mở thầu.** Giá có thể được niêm phong cho đến một giờ mở thầu bạn đặt: cho đến lúc đó không ai thấy giá, kể cả bạn. Tại lúc mở thầu, mọi giá thầu hiện cùng lúc, và một giá thầu đến sau giờ hạn được đánh dấu là muộn. Xem [Giá thầu niêm phong và việc mở thầu](topic:bid-invitations#sealed-bids-and-the-opening).
- **Hồ sơ nhà thầu phụ.** Tài khoản của bạn trên getcadcraft.com giữ liên hệ, ngành nghề, câu trả lời thẩm định, và ngày bảo hiểm và giấy phép của từng công ty (gắn cờ khi đã quá hạn hoặc trong vòng 30 ngày), cùng các giá thầu trước đây của họ. Nhập và xuất chúng thành CSV, và chọn chúng khi bạn gửi một gói. Xem [Trên trang web](topic:bid-invitations#on-the-website).

### Trợ lý AI

- **Trợ lý có thể thêm vào bóc tách.** Khi **Chỉnh sửa** được đánh dấu, trợ lý của riêng bạn có thể thêm hạng mục (`items_add`) và đo các đoạn, diện tích và số đếm trên một tờ (`marks_add`; chiều dài và diện tích chỉ trên tờ đã có tỷ lệ), mỗi lệnh gọi là một bước hoàn tác.
- **Công cụ cho trợ lý về bản vẽ.** Trên một DWG hoặc DXF đang mở, một trợ lý có thể liệt kê các tờ và những gì đếm được, đếm chính xác, thêm các dấu đếm, và đo từ hình học của bản vẽ. Khi TakeoffCraft không mở, máy chủ MCP của CadCraft mở một bản vẽ thành bóc tách mới và lưu nó, và `cadcraft count` đếm từ dòng lệnh. Xem [Trợ lý có thể yêu cầu gì](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **Khung nhìn kiểm tra 3D dưới dạng USD.** {{ui:Gói USD (.usdz)}} cạnh {{ui:GLB}} trong khung nhìn kiểm tra 3D ghi mỗi tường, sàn, tấm, cột đếm và đoạn thành một đối tượng riêng, đặt tên theo hạng mục của nó và mang khối lượng của nó, theo mét. Một trợ lý cũng có thể xuất nó (`usd_export`). Xem [Xuất khung nhìn kiểm tra 3D thành USD](topic:usd).

## Trong mọi ứng dụng

- **Đơn vị.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Đơn vị}} có một danh sách riêng cho chiều dài, diện tích, thể tích, góc và độ dốc, với kích thước chính xác theo định nghĩa của từng đơn vị (foot khảo sát Hoa Kỳ là một đơn vị riêng). Tắt những đơn vị bạn không bao giờ dùng và chúng sẽ rời khỏi danh sách đơn vị; gắn sao cho một đơn vị và công việc mới sẽ bắt đầu bằng nó. Tệp luôn giữ đơn vị riêng của nó. Trong TakeoffCraft, các danh sách {{ui:Đơn vị}} của một hạng mục theo các công tắc, một hạng mục mới bắt đầu bằng đơn vị chiều dài hoặc diện tích được gắn sao, ô vuông lợp mái (SQ), mẫu Anh và hecta là các đơn vị diện tích mới, và ô chiều dài nhận ký hiệu của bất kỳ đơn vị nào, như `3 yd`. Xem [Đơn vị, giá trị nhập và danh sách đơn vị](common:unit-lists).
- **Bố cục dày đặc hơn và các bảng tự thu gọn.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Mật độ bố cục}} › {{ui:Gọn}} chứa được nhiều hơn trên màn hình (màn hình cảm ứng và điện thoại giữ các nút lớn). Mỗi bảng bên có một thanh tiêu đề mỏng: kéo nó để neo hoặc cho bảng nổi, thả lên thanh của bảng khác để dùng chung một khung dạng thẻ, ghim nó để trượt về mép, hoặc ẩn nó và gọi lại từ mép. Xem [Sắp xếp các bảng](common:arrange-panels#make-the-layout-denser).
- **Hộp thoại di chuyển được.** Kéo hộp thoại bằng thanh tiêu đề để dời nó khỏi bản vẽ; nó trở lại đúng nơi bạn để. Bấm đúp thanh tiêu đề để căn giữa lại. Xem [Di chuyển một hộp thoại](common:arrange-panels#move-a-dialog).
- **Công thức cho trợ lý AI.** Mười yêu cầu mẫu cho trợ lý của riêng bạn (dọn một bản vẽ, in một bộ, kiểm tra bản vẽ, hỏi một mô hình, tổng hợp một bản bóc tách khối lượng, thử một biến thể chi tiết…), mỗi yêu cầu kèm các công cụ nó gọi và quyền nó cần, và đều được các bài kiểm thử của chúng tôi chạy lại. Các ứng dụng không chứa AI. Xem [Công thức cho trợ lý AI](common:assistants-recipes).
- **Ngôn ngữ.** **Português (Portugal)** là mới trong {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Ngôn ngữ}}. Ngôn ngữ này cùng **Português (Brasil)**, **Español (México)** và **Bahasa Indonesia** nay có từng chữ của các ứng dụng, là bản nháp chưa được người bản ngữ duyệt. Các chủ đề trợ giúp bằng tiếng Anh.
- **CadCraft Studio** cho biết vì sao việc kiểm tra cập nhật thất bại (chưa có tệp cho hệ thống của bạn, không có mạng, chữ ký sai) thay vì chỉ ghi "Xong", và không đưa lại thẻ Có gì mới mà bạn đã đóng cho đến khi có bản phát hành mới hơn.

## Chưa có trong phiên bản này

- **0.7 chưa được ký mã.** Việc ký, và gói Microsoft Store, dời sang 0.8 vì việc xác thực chứng chỉ chưa xong. Hãy kiểm tra SHA-256 bên cạnh mỗi tệp trên getcadcraft.com/download. Trên Windows, nếu SmartScreen chặn trình cài đặt, hãy chọn {{ui:Thông tin thêm}}, rồi {{ui:Vẫn chạy}}. Trên Mac, lần đầu tiên, bấm chuột phải vào CadCraft Studio và chọn {{ui:Mở}}. CadCraft Studio chưa có trên cửa hàng ứng dụng nào, và chưa có bản cho iPad hay iPhone.
- Các danh sách góc và độ dốc trong {{ui:Đơn vị}} được lưu, nhưng chưa có ô nhập nào đọc chúng.
- **Thư mời thầu bị tắt với hầu hết các tài khoản.** Trong lúc tính năng được thử nghiệm, thư gửi đến người dự thầu bên ngoài chỉ đi từ các tài khoản mà đội CadCraft đã bật. Trang của người dự thầu hoạt động với mọi thư mời đã gửi. Với mọi người khác: hãy tải {{ui:CSV phạm vi}}, tự gửi email và nhập các giá thầu vào.
- Một cửa sổ CadCraft Studio chưa gửi được thư mời thầu: nó bảo hãy dùng TakeoffCraft trong trình duyệt. Mở một bóc tách có yêu cầu đã gửi, cân bằng và chọn một giá thầu đều chạy được trong Studio.
- Phụ lục, thư trao thầu, bảng phạm vi mà mỗi người dự thầu ký xác nhận và nhắc tự động trước khi hết hạn bảo hiểm chưa được xây dựng. Một giá thầu đã chọn không tính lại giá cho khu vực dự thầu của phương án thay thế.
- Bản vẽ: bảng kiểu in và tệp CTB không được áp dụng, DXF nhị phân bị từ chối (hãy lưu thành DXF ASCII hoặc DWG), bản vẽ liên kết chỉ được tìm trong các tệp đang mở theo tên tệp, và nền PDF, hình ảnh và đối tượng OLE trong bản vẽ không được vẽ hoặc đếm. Các số đếm và tỷ lệ đã được kiểm tra trên bản vẽ mẫu, chưa kiểm tra trên bản vẽ từ một công trình thật được mở trong chương trình đã tạo ra nó.
- Một trợ lý có thể thêm hạng mục và dấu nhưng không thể di chuyển, thay đổi hay xóa các dấu đã có.

Mọi thứ còn lại nằm trong [Chưa xây dựng](topic:not-built-yet).
