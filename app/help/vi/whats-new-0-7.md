---
title: Có gì mới trong 0.7 (trước đó)
summary: Bản vẽ DWG và DXF mở thành các tờ với tỷ lệ riêng, số đếm và chiều dài chính xác lấy từ chính bản vẽ, dự thầu của thầu phụ được chọn làm giá của gói, lời mời dự thầu với giá kín, công cụ cho trợ lý với bản vẽ, và USD từ khung nhìn kiểm tra 3D.
keywords: có gì mới 0.7, phiên bản trước, ghi chú phát hành, nhật ký thay đổi, thay đổi, 0.7, phiên bản, tính năng mới, dwg, dxf, bản vẽ, bố cục, không gian mô hình, tỷ lệ bản vẽ, đếm từ bản vẽ, đếm CAD, khối, khối động, thuộc tính, lớp, xref, bản vẽ liên kết, đo bản vẽ, đa tuyến, tô bóng, pdf đã đánh dấu, dự thầu đã chọn, dùng dự thầu, gửi mời dự thầu, lời mời dự thầu, dự thầu kín, mở thầu, dự thầu trễ, hồ sơ thầu phụ, csv, trợ lý, mcp, usd, usdz, đơn vị, danh sách đơn vị, gọn, bảng, hộp thoại, tiếng bồ đào nha
from: de1dca2b
---

Đây là những gì đã thay đổi trong TakeoffCraft 0.7 so với 0.6. Bản vẽ giờ mở đúng như chúng là, không cần in ra PDF trước, và một gói dự thầu có thể gửi cho thầu phụ và nhận về đã có giá.

## Mới

### Bản vẽ DWG và DXF

- **Mở bản vẽ thành các tờ.** {{ui:Open plans}} trong nhóm {{ui:File}} ({{key:Mod+O}}, hoặc thả tệp vào) nhận bản vẽ DWG và DXF cùng với PDF. Không gian mô hình và mọi bố cục trở thành các tờ trong danh sách {{ui:Sheets}}, và một takeoff có thể bao phủ cả bản vẽ lẫn PDF. Không có gì được tải lên. Xem [Mở bản vẽ DWG hoặc DXF](topic:open-a-drawing).
- **Tỷ lệ lấy từ bản vẽ.** Một bố cục bắt đầu ở tỷ lệ của khung nhìn lớn nhất của nó, được đặt tên như một tỷ lệ đặt sẵn khi đúng là vậy, chẳng hạn 1/2" = 1'-0". Mô hình bắt đầu theo đơn vị của bản vẽ. Một bản vẽ không có đơn vị sẽ hiện "Chưa có tỷ lệ" cho đến khi bạn hiệu chuẩn. {{ui:Calibrate}}, {{ui:Check}} và {{ui:Preset}} vẫn được ưu tiên hơn. Xem [Tỷ lệ](topic:open-a-drawing#the-scale).
- **Lớp và bản vẽ liên kết.** {{ui:Layers}} trên thanh tờ hiện hoặc ẩn các lớp của bản vẽ. Các lớp mà tệp đã tắt hoặc đóng băng sẽ bắt đầu ở trạng thái ẩn và không được đếm trừ khi bạn chọn. Một bản vẽ liên kết (xref) mở cạnh bản vẽ chủ của nó được vẽ và đếm ở nơi nó được chèn; cho đến khi nó được mở, thanh trạng thái cho biết thiếu gì. Xem [Lớp](topic:open-a-drawing#layers).
- **PDF đã đánh dấu hoạt động với bản vẽ.** {{ui:Export}} › {{ui:Marked PDF}} vẽ trước các tờ đã đánh dấu của bản vẽ thành PDF, nên bản sao hiện dấu và chú giải của bạn mà không cần bước in. Nó được vẽ bằng màu đen hoặc màu của bản vẽ, không dùng bảng kiểu in. Xem [PDF đã đánh dấu](topic:export-estimate#a-marked-pdf).

### Số đếm và chiều dài chính xác từ bản vẽ

- **Đếm những gì bản vẽ cho biết có.** {{ui:CAD count}} trên thanh tờ đếm một khối theo tên (kể cả khối lồng nhau, trạng thái khối động và mảng khối), mọi thứ cùng loại trên một lớp, hoặc một giá trị văn bản hay thuộc tính. Nó đếm những gì tờ hiển thị, hoặc toàn bộ bản vẽ một lần. Thêm dấu là một bước hoàn tác, và đếm lại chỉ thêm những gì mới. {{ui:Auto count}} vẫn dành cho PDF và các ký hiệu không phải khối. Xem [Đếm từ bản vẽ](topic:count-from-a-drawing).
- **Đo từ chính các đường của bản vẽ.** {{ui:Measure drawing}} lấy các đường, cung, đa tuyến, vòng tròn, tô bóng và vật thể rắn mà bạn nhấp hoặc chọn bằng cửa sổ làm dấu của một hạng mục chiều dài hoặc diện tích. Cung, độ phồng và lỗ của tô bóng cho kết quả chính xác; elip và spline được đo bằng các dây cung nhỏ, và thanh cho biết điều đó. Xem [Đo từ bản vẽ](topic:measure-from-a-drawing).

### Dự thầu

- **Dùng dự thầu của thầu phụ làm giá của gói.** Trong {{ui:Export}} › {{ui:Bid packages and leveling…}}, chọn {{ui:Use}} trên một dự thầu. Các hạng mục của gói vẫn là khối lượng, một dòng **Thầu đã chọn** mang giá, những hạng mục dự thầu bỏ sót vẫn giữ theo chi phí của bạn, và chi phí chung, lợi nhuận và bảo lãnh được áp dụng cho nó. Đổi dự thầu là một bước hoàn tác; sổ tính và bản tóm tắt dự thầu đều mang theo. Xem [Dùng dự thầu làm giá của gói](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Gửi một gói để mời dự thầu.** {{ui:Send for bids…}} dưới một gói sẽ gửi email cho mỗi thầu phụ một liên kết đến trang không cần tài khoản: họ thấy phạm vi và các tờ dưới dạng PDF, nhập giá cho từng dòng hoặc đánh dấu không bao gồm, thêm ghi chú và tối đa ba tệp, hoặc từ chối. {{ui:Get prices}} kéo những gì đã gửi về vào bảng cân bằng, gắn cờ **web**. Việc gửi chỉ mở cho các tài khoản mà đội CadCraft đã bật trong lúc tính năng đang được thử nghiệm (xem bên dưới). Xem [Gửi một gói để mời dự thầu](topic:bid-invitations).
- **Giữ kín đến lúc mở thầu.** Giá có thể được giữ kín cho đến một thời điểm mở thầu bạn đặt: cho đến lúc đó không ai thấy giá, kể cả bạn. Khi mở thầu, mọi dự thầu hiện cùng lúc, và dự thầu đến sau hạn sẽ được đánh dấu trễ. Xem [Dự thầu kín và việc mở thầu](topic:bid-invitations#sealed-bids-and-the-opening).
- **Hồ sơ thầu phụ.** Tài khoản của bạn trên getcadcraft.com giữ liên hệ, lĩnh vực, câu trả lời về năng lực, và ngày bảo hiểm và giấy phép của từng công ty (được gắn cờ một lần khi đã qua hoặc còn trong vòng 30 ngày), cùng các dự thầu trước đó. Bạn nhập và xuất chúng dưới dạng CSV, và chọn chúng khi gửi gói. Xem [Trên trang web](topic:bid-invitations#on-the-website).

### Trợ lý AI

- **Trợ lý có thể thêm vào takeoff.** Khi **Chỉnh sửa** được đánh dấu, trợ lý của riêng bạn có thể thêm hạng mục (`items_add`) và đo đoạn, diện tích và số đếm trên một tờ (`marks_add`; chiều dài và diện tích chỉ trên tờ có tỷ lệ), mỗi lệnh gọi là một bước hoàn tác.
- **Công cụ trợ lý cho bản vẽ.** Trên một DWG hoặc DXF đang mở, trợ lý có thể liệt kê các tờ và những gì có thể đếm, đếm chính xác, thêm dấu đếm, và đo từ hình học của bản vẽ. Khi TakeoffCraft không mở, máy chủ MCP của CadCraft mở một bản vẽ thành takeoff mới và lưu nó, còn `cadcraft count` đếm từ dòng lệnh. Xem [Trợ lý có thể yêu cầu gì](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **Khung nhìn kiểm tra 3D dưới dạng USD.** {{ui:USD package (.usdz)}} bên cạnh {{ui:GLB}} trong khung nhìn kiểm tra 3D ghi mỗi tường, sàn, tấm, cọc đếm và đoạn thành một đối tượng riêng, được đặt tên theo hạng mục và mang khối lượng của nó, theo mét. Trợ lý cũng có thể xuất nó (`usd_export`). Xem [Xuất khung nhìn kiểm tra 3D sang USD](topic:usd).

## Trong mọi ứng dụng

- **Đơn vị.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} có một danh sách cho mỗi loại chiều dài, diện tích, thể tích, góc và độ dốc, với kích thước chính xác mà định nghĩa của đơn vị đưa ra (foot khảo sát Mỹ là một đơn vị riêng). Tắt các đơn vị bạn không dùng và chúng sẽ rời khỏi danh sách; đánh dấu sao một đơn vị và công việc mới bắt đầu bằng nó. Một tệp luôn giữ đơn vị riêng của nó. Trong TakeoffCraft, danh sách {{ui:Unit}} của hạng mục theo các công tắc, một hạng mục mới bắt đầu bằng đơn vị chiều dài hoặc diện tích có dấu sao, ô vuông lợp mái (SQ), acre và hecta là các đơn vị diện tích mới, và ô chiều dài nhận dấu của bất kỳ đơn vị nào, như `3 yd`. Xem [Đơn vị, giá trị nhập và danh sách đơn vị](common:unit-lists).
- **Bố cục gọn hơn và các bảng tự thu gọn.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} đưa được nhiều hơn lên màn hình (màn hình cảm ứng và điện thoại giữ nút lớn). Mỗi bảng bên có một thanh tiêu đề mỏng: kéo để neo hoặc làm nổi bảng, thả lên thanh của bảng khác để chia sẻ một khung dưới dạng thẻ, ghim để nó trượt về mép, hoặc ẩn và đưa nó trở lại từ mép. Xem [Sắp xếp các bảng](common:arrange-panels#make-the-layout-denser).
- **Hộp thoại di chuyển được.** Kéo một hộp thoại bằng thanh tiêu đề để đưa nó ra khỏi bản vẽ; nó sẽ trở về nơi bạn để lại. Nhấp đúp thanh tiêu đề để đưa nó về giữa. Xem [Di chuyển hộp thoại](common:arrange-panels#move-a-dialog).
- **Công thức cho trợ lý AI.** Mười yêu cầu mẫu cho trợ lý của riêng bạn (dọn bản vẽ, in một bộ, kiểm tra bản vẽ, hỏi mô hình, tổng hợp takeoff, thử một biến thể chi tiết…), mỗi cái kèm công cụ nó gọi và quyền nó cần, và mỗi cái được bộ kiểm thử của chúng tôi chạy lại. Các ứng dụng không chứa AI. Xem [Công thức cho trợ lý AI](common:assistants-recipes).
- **Ngôn ngữ.** **Português (Portugal)** là mới trong {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Ngôn ngữ này, **Português (Brasil)**, **Español (México)** và **Bahasa Indonesia** giờ đã có đầy đủ mọi từ của ứng dụng, dưới dạng bản nháp chưa được người bản ngữ xem lại. Các chủ đề trợ giúp vẫn bằng tiếng Anh.
- **CadCraft Studio** cho biết vì sao kiểm tra cập nhật thất bại (chưa có tệp cho hệ thống của bạn, không có mạng, chữ ký sai) thay vì chỉ "Xong", và không hiện lại thẻ Có gì mới mà bạn đã đóng cho đến khi có bản phát hành mới hơn.

## Chưa có trong phiên bản này

- **0.7 chưa được ký mã.** Việc ký mã và gói Microsoft Store được chuyển sang 0.8 vì việc xác thực chứng chỉ chưa hoàn tất. Kiểm tra SHA-256 bên cạnh mỗi tệp trên getcadcraft.com/download. Trên Windows, nếu SmartScreen chặn trình cài đặt, chọn {{ui:More info}}, rồi {{ui:Run anyway}}. Trên Mac, lần đầu, nhấp chuột phải vào CadCraft Studio và chọn {{ui:Open}}. CadCraft Studio chưa có trên cửa hàng ứng dụng nào, và chưa có bản dựng cho iPad hay iPhone.
- Các danh sách góc và độ dốc trong {{ui:Units}} được lưu, nhưng chưa có ô nào đọc chúng.
- **Lời mời dự thầu bị tắt với đa số tài khoản.** Trong lúc tính năng đang được thử nghiệm, thư gửi cho bên dự thầu bên ngoài chỉ đi từ các tài khoản mà đội CadCraft đã bật. Trang của người dự thầu hoạt động cho mọi lời mời đã gửi. Những người khác: tải {{ui:Scope CSV}}, tự gửi email, và nhập dự thầu bằng tay.
- Cửa sổ CadCraft Studio chưa thể gửi lời mời dự thầu: nó yêu cầu dùng TakeoffCraft trên trình duyệt. Mở takeoff có các yêu cầu đã gửi, cân bằng và chọn một dự thầu đều hoạt động trong Studio.
- Phụ lục bổ sung, thư trao thầu, bảng phạm vi mà mỗi nhà thầu ký xác nhận, và nhắc nhở tự động trước khi hết hạn bảo hiểm chưa được xây dựng. Một dự thầu đã chọn không tính lại giá của khu vực dự thầu của phương án thay thế.
- Bản vẽ: bảng kiểu in và tệp CTB chưa được áp dụng, DXF nhị phân bị từ chối (hãy lưu thành DXF ASCII hoặc DWG), bản vẽ liên kết chỉ được tìm trong các tệp đang mở theo tên tệp, và PDF nền, hình ảnh và đối tượng OLE trong bản vẽ không được vẽ hay đếm. Số đếm và tỷ lệ đã được kiểm tra trên bản vẽ mẫu, chưa kiểm tra trên bản vẽ từ công trình thật được mở bằng chương trình đã tạo ra chúng.
- Trợ lý có thể thêm hạng mục và dấu nhưng không thể di chuyển, thay đổi hoặc xóa các dấu đã có sẵn.

Mọi điều còn lại có trong [Chưa xây dựng](topic:not-built-yet).
