---
title: Có gì mới trong 0.8 và 0.8.1
summary: Đếm toàn bộ bảng chú giải ký hiệu trên mọi tờ đang mở trong một lần chạy, định giá hạng mục theo đơn giá của các công việc trước, đối chiếu takeoff với tồn kho và thời gian chờ của nhà cung cấp, cùng các công cụ trợ lý AI cho cả ba, cộng với các thay đổi chung của 0.8 và bản sửa lỗi 0.8.1 cho tệp DWG.
keywords: có gì mới, what's new, ghi chú phát hành, nhật ký thay đổi, thay đổi, 0.8, 0.8.1, phiên bản, tính năng mới, đếm tất cả, bảng chú giải, bảng chú giải ký hiệu, toàn bộ bộ bản vẽ, bộ nhớ giá, công việc trước, công việc gần nhất, giá thường gặp, nhà cung cấp, tồn kho, thời gian chờ, đặt trước, danh sách đặt hàng, thiếu hàng, bảng vấn đề, trợ lý, ngôn ngữ, thiết bị nhập, số hàng thanh công cụ, dwg
from: a04adef6
---

Đây là những thay đổi của TakeoffCraft 0.8 (phát hành ngày 2026-11-01) và 0.8.1 (2026-11-02), so với 0.7. Giờ bạn có thể đếm một bảng chú giải ký hiệu trên toàn bộ bộ bản vẽ cùng lúc, bắt đầu một takeoff mới từ đơn giá của các công việc trước, và đối chiếu takeoff với tồn kho của nhà cung cấp. 0.8.1 là bản sửa lỗi.

## Mới

### Đếm tất cả trong bộ bản vẽ

- **Khoanh bảng chú giải một lần.** {{ui:Count everything}} trên thanh công cụ đọc một bảng chú giải ký hiệu: kéo một khung bao quanh các ký hiệu và tên in bên cạnh. Mỗi ký hiệu được liệt kê cùng hình và tên, và tên trở thành tên của hạng mục. Bỏ chọn những gì bạn không muốn, rồi chọn {{ui:Đếm trên N tờ}}. Một thanh hiển thị tờ đang được tìm, {{ui:Cancel}} dừng quá trình, và trang vẫn dùng được.
- **Mọi tờ trong một lần chạy.** Mỗi ký hiệu được đếm trên mọi tờ đang mở. Tờ vẽ ở tỷ lệ khác sẽ được tìm theo tỷ lệ đó, và ký hiệu được tìm dù xoay theo góc vuông nào. Các ký hiệu của chính bảng chú giải không được đếm trên tờ của nó.
- **Xem lại trước khi thêm gì.** Mỗi tổng có một liên kết tới từng tờ ("E-103: 4") để chuyển đến tờ đó. Nhấp một khung trên một kết quả tìm được để bỏ qua, và nhấp lại để đưa nó trở về. Mức khớp (50% đến 100%) chỉ lọc kết quả đã tìm; không tìm lại.
- **Một bước hoàn tác.** {{ui:Thêm N dấu đếm}} tạo một hạng mục đếm cho mỗi ký hiệu, với một dấu trên mọi kết quả tìm được. Tên đã là hạng mục đếm của bạn sẽ được dùng lại. {{key:Ctrl+Z}} hoàn tác mọi hạng mục và dấu. Những gì bạn chấp nhận cũng được đưa vào {{ui:Đã học}}.
- **Ký hiệu ở mọi góc.** Đánh dấu {{ui:Ký hiệu ở mọi góc}} trước khi đếm để cũng tìm được ký hiệu xoay theo góc không phải góc vuông. Khi đó, phép tìm xoay mỗi ký hiệu 15 độ một lần, và một ký hiệu không tròn có thể mất gấp sáu lần thời gian.
- **Đây là gì.** Phép so khớp ký hiệu thông thường trên các tờ của chính bạn, không có mô hình được huấn luyện, và không có gì rời khỏi máy tính của bạn. Trên một bộ 200 tờ giả lập, quá trình mất 9.4 giây từ đầu đến cuối trong Chrome trên một máy tính để bàn nhanh; bộ bản vẽ thực sẽ chậm hơn. Xem [Đếm tất cả trong bộ bản vẽ](topic:count-everything).

### Bộ nhớ giá từ các công việc của bạn

- **TakeoffCraft nhớ đơn giá của bạn.** Khi bạn lưu takeoff, mỗi hạng mục đã định giá và đang được dùng sẽ được nhớ theo tên và loại: đơn giá vật liệu, đơn giá nhân công, hao hụt và đơn vị. 12 công việc gần nhất được giữ cho mỗi tên. Dữ liệu được lưu trên máy tính này cạnh Thư viện giá, không bao giờ nằm trong tệp takeoff, và không gửi đi đâu.
- **Bắt đầu takeoff mới từ đó.** {{ui:Giá}} trên thanh công cụ hiển thị, cho mỗi hạng mục, đơn giá của công việc gần nhất, đơn giá thường gặp và khoảng giá. {{ui:Dùng giá trước}} hoặc {{ui:Dùng giá thường gặp}} áp giá cho một hạng mục, và {{ui:Định giá N hạng mục chưa có giá từ bộ nhớ}} điền mọi hạng mục chưa có giá. Mỗi lần dùng là một bước hoàn tác.
- **Công việc cũ.** {{ui:Học từ một takeoff cũ…}} ghi nhớ các hạng mục đã định giá của một takeoff đã lưu (.json).
- **Xem, thay đổi, quên.** {{ui:Mọi thứ đã nhớ}} liệt kê mọi tên; nút thùng rác quên một tên, và {{ui:Xóa tất cả giá}} quên tất cả. Tắt {{ui:Ghi nhớ giá của tôi khi tôi lưu takeoff}} để dừng. Giá theo EA không bao giờ được gán cho một hạng mục tính theo ft. Xem [Bộ nhớ giá từ các công việc trước](topic:price-memory).

### Tồn kho và thời gian chờ của nhà cung cấp

- **Đối chiếu với danh sách nhà cung cấp.** {{ui:Cung ứng}} trên thanh công cụ nhận danh sách tồn kho của nhà cung cấp ({{ui:Thêm tệp nhà cung cấp…}}), một tệp CSV hoặc bảng tính, và đối chiếu những gì takeoff cần, kể cả hao hụt, với danh sách đó. Giữ tối đa năm tệp. Không có gì được gửi đi và không có gì hỏi nhà cung cấp: bạn là người cung cấp tệp.
- **Kết quả.** Các hạng mục thiếu hiển thị trước, với các câu như "Thiếu 120 EA", "Thời gian chờ 21 ngày", "Đang đặt trước", "Đơn vị khác nhau", "Chưa có số liệu tồn kho" hoặc "Còn hàng". {{ui:Thời gian chờ dài nhất chấp nhận (ngày)}} bắt đầu từ 14.
- **Danh sách đặt hàng.** {{ui:Danh sách đặt hàng (CSV)}} tải xuống các hạng mục thiếu, kèm số lượng thiếu, nhà cung cấp và thời gian chờ.
- **Đơn giá vào Thư viện.** Nếu tệp có giá, {{ui:Đơn giá vào Thư viện}} đặt giá vật liệu cho mỗi mục Thư viện có cùng tên và đơn vị. Định giá lại từ Thư viện để đưa chúng vào takeoff.
- **Trong bảng Vấn đề.** Thiếu hàng là cảnh báo và chờ lâu là ghi chú, dưới "Tồn kho nhà cung cấp". Bạn có thể chấp nhận một mục kèm lý do, và lý do được lưu trong takeoff. Xem [Kiểm tra tồn kho và thời gian chờ của nhà cung cấp](topic:supplier-stock).

### Trợ lý AI

- **Công cụ cho cả ba.** Khi trợ lý được phép trong {{ui:Cài đặt}}, một trợ lý có thể đọc bảng chú giải (`legend_open`), chạy việc đếm (`legend_count_start`, rồi `legend_count_status` và `legend_count_result`) và thêm kết quả (`legend_count_add`, có thể xem trước trước). Trợ lý có thể đọc giá đã nhớ (`prices_list`) và định giá hạng mục từ đó (`prices_apply`, có thể xem trước trước), và đọc kết quả kiểm tra nhà cung cấp (`supply_check`). Việc thêm tệp nhà cung cấp vẫn do bạn làm. Xem [Dùng TakeoffCraft với trợ lý AI](topic:use-with-ai-assistants).

### Trong mọi ứng dụng

- **Ngôn ngữ.** Tổng cộng 54 ngôn ngữ; 10 ngôn ngữ mới (tiếng Litva, tiếng Latvia, tiếng Bosnia, tiếng Marathi, tiếng Telugu, tiếng Albania, tiếng Afrikaans, tiếng Filipino, tiếng Swahili và tiếng Uzbek). Các ngôn ngữ khác tiếng Anh là bản dịch máy cho đến khi người bản ngữ đọc qua.
- **Thiết bị nhập.** {{ui:Cài đặt}} › {{ui:Chung toàn cục}} › {{ui:Thiết bị nhập}} quyết định bàn di chuột, nút bên của chuột, bút, chuột 3D, tay cầm chơi game hoặc bộ điều khiển MIDI làm gì, cho mọi ứng dụng hoặc cho một ứng dụng. Xem [Dùng bàn di chuột, chuột 3D hoặc tay cầm](common:input-devices).
- **Số hàng thanh công cụ.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Số hàng thanh công cụ}} cung cấp {{ui:Xuống dòng}} (mặc định), {{ui:2 hàng}} và {{ui:1 hàng}}; các nhóm không vừa sẽ cuộn ngang. Xem [Sắp xếp các bảng](common:arrange-panels).
- **Bảng Vấn đề.** Bảng dùng chung của cảnh báo và ghi chú nay có thêm kiểm tra tồn kho của nhà cung cấp ở trên, cạnh các kiểm tra khác.
- **Tiện ích bổ sung.** Tiện ích bổ sung theo danh sách tài khoản của bạn. Xem [Tiện ích bổ sung và danh sách tài khoản của bạn](common:addons-basics).
- **Kết nối AI của bạn.** CadCraft Studio là trung tâm: kết nối trợ lý của bạn một lần cho cả tám ứng dụng. Studio không có AI riêng.

## Đã sửa trong 0.8.1

- **Phần classes của DWG.** Phần classes của tệp DWG bị đọc sai kiểu. Đã sửa trong TakeoffCraft và bốn ứng dụng khác.
- **Studio có thể đổi ngôn ngữ khi đang chạy.** Trước đây, Studio và các bản đóng gói của nó chỉ có tiếng Anh. Điều này chưa được kiểm thử trên mọi nền tảng của bản desktop; hãy cho chúng tôi biết nếu ngôn ngữ không đổi.

## Chưa có trong phiên bản này

- **Chưa ký mã.** Windows có thể cảnh báo, và trên Mac bạn nhấp chuột phải rồi chọn {{ui:Mở}} ở lần đầu. Các bản cho cửa hàng (Microsoft Store, Google Play, App Store) đang tạm dừng, và bản iPad và iPhone chưa được dựng lại cho 0.8.1.
- **Cập nhật Studio.** Trình cài đặt Windows và gói Linux kiểm tra mỗi ngày một lần và hỏi trước. Bản zip portable chỉ thông báo, còn macOS và APK không tự cập nhật. Bản .dmg macOS 0.8 theo bản phát hành.
- **Kết nối AI của bạn.** Kết nối một chạm trong Studio, connector được host cho AI trong trình duyệt, khóa API riêng trong Studio và gói MCP đã xuất bản không được hứa trong phiên bản này.
- **Đếm tất cả.** Cần ký hiệu được vẽ giống như trong bảng chú giải, và một ký hiệu có tường hoặc đường dài đi xuyên qua có thể bị bỏ sót. Ký hiệu đối xứng không được tìm thấy, và tờ không có tỷ lệ được vẽ ở kích thước khác sẽ được tìm theo kích thước của bảng chú giải. Kiểm tra kết quả trên tờ đầu tiên trước khi tin các tờ còn lại.
- **Tồn kho nhà cung cấp.** Số liệu tồn kho chỉ cập nhật bằng tệp bạn thêm vào. Kiểm tra không bao giờ hỏi nhà cung cấp.
- **Ngôn ngữ.** Thanh ứng dụng của tiếng Tamil bị tràn.

Mọi thứ khác nằm trong [Chưa xây dựng](topic:not-built-yet). Với bản phát hành trước, xem [Có gì mới trong 0.7](topic:whats-new-0-7).
