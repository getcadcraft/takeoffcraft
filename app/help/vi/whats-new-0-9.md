---
title: Có gì mới trong 0.9 (cũ hơn)
summary: Đọc chiều dài theo mét, xentimét hoặc milimét, diện tích hệ mét theo m2 cùng diện tích tường, các tỷ lệ đặt sẵn 1:75 và 1:150, đơn vị khối lượng và nhiệt độ, Cung tròn với mười phương pháp, cùng con trỏ trực tiếp, theo dõi và danh sách người tham gia.
keywords: có gì mới 0.9, phiên bản cũ, có gì mới, ghi chú phát hành, nhật ký thay đổi, 0.9, hiển thị chiều dài theo, theo chung, đơn vị, đơn vị hiển thị, m2, mét vuông, diện tích tường, tỷ lệ đặt sẵn, 1:75, 1:150, khối lượng, kilôgam, kg, tấn, lb, nhiệt độ, độ C, độ F, cung tròn, phương pháp cung tròn, cung 3 điểm, bán kính, trực tiếp, con trỏ, theo dõi, danh sách người, lớp, chú giải công cụ, bố cục, 0.8, 0.8.1, phiên bản, tính năng mới, đếm tất cả, chú giải ký hiệu, toàn bộ bộ bản vẽ, bộ nhớ giá, công việc trước, công việc gần nhất, giá thường gặp, nhà cung cấp, tồn kho, thời gian giao hàng, thiếu hàng, danh sách đặt hàng, thiếu, bảng cảnh báo, trợ lý, ngôn ngữ, thiết bị nhập, số hàng thanh công cụ, dwg
from: f4322ba2
---

Đây là những thay đổi trong TakeoffCraft 0.9 so với 0.8.1. Đây là một bản phát hành nhỏ cho ứng dụng này: chiều dài giờ có thể đọc theo mét, xentimét hoặc milimét, diện tích và tỷ lệ theo hệ mét được xử lý đúng hơn, và Cung tròn có mười cách vẽ. Các phiên làm việc trực tiếp cũng hiển thị mọi người đang ở đâu.

## Mới

### Đọc chiều dài theo mét, xentimét hoặc milimét

- **Hiển thị chiều dài dưới dạng.** {{ui:Settings}} › {{ui:TakeoffCraft}} có {{ui:Show lengths as}} với {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm và mm. {{ui:Follow Global}} dùng đơn vị chiều dài hệ mét mà bạn đã đánh dấu sao trong {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}, và dùng feet-inch khi chưa đánh dấu sao nào. Lựa chọn này thay đổi cách chiều dài hiển thị trên bản vẽ, trong thanh trạng thái và trong các bảng, bao gồm chiều cao, chiều sâu, độ dày và các tầng. Một số trần được nhập vào ô chiều cao sẽ được đọc theo đơn vị đang hiển thị.
- **Chỉ hiển thị.** Khối lượng, chi phí và các tệp xuất được tính từ chiều dài chính xác. Lựa chọn 1/16, 1/8 và 1/4 inch chỉ xuất hiện với feet-inch. Xem [Hiển thị chiều dài theo mét](topic:show-lengths-in-meters).
- **Đơn vị khối lượng.** Một hạng mục {{ui:Typed quantity (no drawing)}} giờ có thể tính bằng lb, TON, kg hoặc t, và được định giá theo đơn vị.
- **Nhiệt độ.** Mỗi hạng mục có một ô {{ui:Temperature}} tùy chọn trong trình chỉnh sửa hạng mục, nhập bằng độ C hoặc F. {{ui:Show temperatures as}} trong {{ui:Settings}} › {{ui:TakeoffCraft}} có {{ui:Follow Global}}, °C hoặc °F.

### Diện tích và tỷ lệ cho công việc hệ mét

- **Diện tích theo m2 trên bản vẽ.** Diện tích đo bằng một hạng mục hệ mét giờ ghi m2 trên nhãn bản vẽ và bảng đánh dấu, cũng như trong bảng, thay vì SF. Quy tắc là m2 khi hạng mục được định giá theo hệ mét hoặc chiều dài được hiển thị bằng m, cm hoặc mm, và SF trong các trường hợp còn lại.
- **Diện tích tường.** Một hạng mục đường thẳng có chiều cao cũng hiển thị diện tích tường (chiều dài nhân chiều cao) trong danh sách Hạng mục và như một dòng ghi chú bên dưới bảng khối lượng theo hạng mục.
- **Tỷ lệ đặt sẵn 1:75 và 1:150.** Chúng có trong danh sách {{ui:Preset}} thuộc nhóm {{ui:Scale}}, nhóm này giờ có 32 tỷ lệ. Xem [Tỷ lệ đặt sẵn](topic:scale-presets).

### Cung tròn với mười phương pháp

- Khi {{ui:Arc}} đang bật (nút trên thanh công cụ hoặc {{key:R}}), một ô {{ui:Arc method}} xuất hiện trong thanh tờ: 3 điểm; Điểm đầu, Tâm, Điểm cuối; Điểm đầu, Tâm, Góc; Điểm đầu, Tâm, Độ dài; Điểm đầu, Điểm cuối, Góc; Điểm đầu, Điểm cuối, Hướng; Điểm đầu, Điểm cuối, Bán kính; Tâm, Điểm đầu, Điểm cuối; Tâm, Điểm đầu, Góc; và Tâm, Điểm đầu, Độ dài. Góc, độ dài, bán kính và hướng có thể nhấp chọn hoặc nhập. Phương pháp này hoạt động với các chuỗi đường thẳng, diện tích và các phần khoét. Tệp được lưu trước 0.9 mở ra như cũ. Xem [Vẽ cung tròn theo mười phương pháp](topic:draw-arcs-ten-methods).

### Làm việc cùng nhau

- **Xem con trỏ của nhau.** Trong một phiên Live, con trỏ của mỗi người hiển thị trên bản vẽ cùng tên và màu của họ, kèm một khung nét đứt quanh các dấu họ đã chọn. Những người ở tờ khác được liệt kê cùng tên tờ đó. Xem [Làm việc trực tiếp với người khác](topic:work-live).
- **Theo dõi một người, và danh sách người tham gia.** Nút {{ui:People}} trong phiên Live liệt kê từng người cùng công cụ họ đang dùng, tờ họ đang ở và lần chỉnh sửa gần nhất. {{ui:Follow}} đưa khung nhìn của bạn theo khung nhìn của họ, và người chủ phiên có thể dùng {{ui:Ask everyone to follow me}}. Xem [Theo dõi một đồng đội trong phiên Live](topic:follow-a-teammate).

## Trong mọi ứng dụng

- **Chú giải công cụ và mẹo khởi động.** Văn bản khi rê chuột là một chú giải công cụ Bootstrap, và mẹo khởi động có thể đóng lại.
- **Thanh thẻ có thể cuộn.** Thanh thẻ của một bảng nếu không vừa sẽ cuộn thay vì bị cắt.
- **Tiêu đề thẻ.** Thẻ trình duyệt hiển thị `<document> - TakeoffCraft | CadCraft`.
- **Bố cục.** Danh sách bố cục trong {{ui:Settings}} là một danh sách thả xuống hiển thị bố cục đã chọn.
- **Ngôn ngữ.** Ngôn ngữ bạn chọn giờ áp dụng cho các chữ mà trang tự hiển thị, như New, Open và Save. Các ngôn ngữ khác tiếng Anh là bản dịch máy cho đến khi người bản ngữ đã đọc lại.

## Giới hạn thực tế

- Hiển thị chiều dài, đơn vị khối lượng và nhiệt độ, cùng các tỷ lệ đặt sẵn mới đã được kiểm tra bằng bài kiểm thử và trên trang. Chưa kiểm tra thủ công mọi bảng ở mọi đơn vị.
- Danh sách người tham gia chưa được kiểm tra thủ công với một lớp học thật gồm giáo viên và học sinh.
- Các ngôn ngữ khác tiếng Anh là bản dịch máy.
- Bộ cài Windows chưa có chữ ký mã (More info, rồi Run anyway). Ảnh đĩa macOS chưa được công chứng (nhấp chuột phải, rồi Open).

## Trước đó: 0.8 và 0.8.1

Đây là những thay đổi trong TakeoffCraft 0.8 (phát hành ngày 2026-11-01) và 0.8.1 (2026-11-02), so với 0.7. Giờ đây có thể đếm một chú giải ký hiệu trên toàn bộ bộ bản vẽ cùng lúc, một bản bóc tách mới có thể bắt đầu từ giá của các công việc trước, và bản bóc tách có thể đối chiếu với tồn kho của nhà cung cấp. 0.8.1 là bản sửa lỗi.

### Mới

**Đếm tất cả trong bộ bản vẽ**

- **Khoanh chú giải một lần.** {{ui:Count everything}} trên thanh công cụ đọc một chú giải ký hiệu: kéo một khung bao quanh các ký hiệu và tên in bên cạnh. Mỗi ký hiệu được liệt kê cùng hình ảnh và tên, và tên trở thành tên của hạng mục. Bỏ đánh dấu những gì bạn không muốn, rồi chọn {{ui:Count on N sheets}} (Đếm trên N tờ). Một thanh hiển thị tờ đang được tìm, {{ui:Cancel}} dừng quá trình, và trang vẫn dùng được.
- **Mọi tờ trong một lần chạy.** Mỗi ký hiệu được đếm trên mọi tờ đang mở. Tờ vẽ ở tỷ lệ khác sẽ được tìm theo tỷ lệ đó, và ký hiệu được tìm dù xoay theo bất kỳ góc vuông nào. Các ký hiệu của chính chú giải không được đếm trên tờ chứa nó.
- **Xem lại trước khi thêm bất cứ thứ gì.** Mỗi tổng có một liên kết cho từng tờ ("E-103: 4") dẫn đến tờ đó. Nhấp một khung trên một kết quả để loại nó, và nhấp lại để đưa nó trở lại. Mức khớp (50% đến 100%) chỉ lọc những gì đã tìm thấy; không tìm kiếm lại.
- **Một bước hoàn tác.** {{ui:Add N marks}} tạo một hạng mục đếm cho mỗi ký hiệu cùng một dấu trên mỗi kết quả. Một tên đã là hạng mục đếm của bạn sẽ được dùng lại. {{key:Ctrl+Z}} hoàn tác mọi hạng mục và dấu. Những gì bạn chấp nhận cũng được đưa vào {{ui:Learned}}.
- **Ký hiệu ở mọi góc.** Đánh dấu {{ui:Symbols at any angle}} trước khi đếm để cũng tìm các ký hiệu xoay theo góc không phải góc vuông. Khi đó, quá trình tìm xoay mỗi ký hiệu 15 độ một lần, và một ký hiệu không tròn có thể mất gấp sáu lần thời gian.
- **Đó là gì.** Đối chiếu ký hiệu đơn giản trên chính các bản vẽ của bạn, không có mô hình được huấn luyện, và không có gì rời khỏi máy tính của bạn. Trên một bộ 200 tờ tự tạo, quá trình mất 9,4 giây từ đầu đến cuối trong Chrome trên một máy tính để bàn nhanh; các bộ bản vẽ thực sẽ chậm hơn. Xem [Đếm tất cả trong bộ bản vẽ](topic:count-everything).

**Bộ nhớ giá từ các công việc của bạn**

- **TakeoffCraft nhớ đơn giá của bạn.** Khi bạn lưu một bản bóc tách, mỗi hạng mục đã định giá được dùng sẽ được nhớ theo tên và kiểu: đơn giá vật liệu, đơn giá nhân công, hao hụt và đơn vị. 12 công việc gần nhất được giữ cho mỗi tên. Dữ liệu này được lưu trên máy tính này cạnh Thư viện giá, không bao giờ nằm trong tệp bóc tách, và không có gì được gửi đi đâu cả.
- **Bắt đầu một bản bóc tách mới từ đó.** {{ui:Prices}} trên thanh công cụ hiển thị, cho mỗi hạng mục, giá của công việc gần nhất, giá thường gặp và khoảng giá. {{ui:Use last}} hoặc {{ui:Use typical}} định giá một hạng mục, và {{ui:Price N unpriced items from memory}} (Định giá N hạng mục chưa có giá từ bộ nhớ) điền mọi hạng mục chưa có giá. Mỗi lần dùng là một bước hoàn tác.
- **Công việc cũ hơn.** {{ui:Learn from a past takeoff…}} ghi nhớ các hạng mục đã định giá của một bản bóc tách đã lưu (.json).
- **Xem, sửa, quên đi.** {{ui:Everything remembered}} liệt kê mọi tên; nút thùng rác quên một tên, và {{ui:Clear all prices}} quên tất cả. Tắt {{ui:Remember my prices when I save a takeoff}} để dừng việc ghi nhớ. Một giá theo từng cái không bao giờ được đặt vào một hạng mục tính theo foot. Xem [Bộ nhớ giá từ các công việc trước](topic:price-memory).

**Tồn kho nhà cung cấp và thời gian giao hàng**

- **Đối chiếu với danh sách của nhà cung cấp.** {{ui:Supply}} trên thanh công cụ nhận danh sách tồn kho của nhà cung cấp ({{ui:Add a supplier file…}}), một tệp CSV hoặc bảng tính, và đối chiếu những gì bản bóc tách cần, kể cả hao hụt, với danh sách đó. Tối đa năm tệp được giữ lại. Không có gì được gửi đi và không có gì hỏi nhà cung cấp: bạn mang tệp đến.
- **Nội dung hiển thị.** Các hạng mục thiếu hàng hiện lên trước: "Short by 120 EA" (Thiếu 120 EA), "Lead time 21 days" (Thời gian giao 21 ngày), "On backorder" (Đang chờ hàng), "Unit differs" (Đơn vị khác), "No stock figure" (Không có số liệu tồn kho) hoặc "In stock" (Còn hàng). {{ui:Longest wait wanted (days)}} bắt đầu từ 14.
- **Danh sách đặt hàng.** {{ui:Order list (CSV)}} tải xuống các hạng mục thiếu hàng cùng số lượng thiếu, nhà cung cấp và thời gian giao hàng.
- **Đơn giá vào Thư viện.** Nếu tệp có giá, {{ui:Prices into the Library}} đặt đơn giá vật liệu của mỗi mục Thư viện có cùng tên và đơn vị. Định giá lại từ Thư viện để đưa chúng vào bản bóc tách.
- **Trong bảng Cảnh báo.** Thiếu hàng là một cảnh báo và thời gian chờ dài là một ghi chú, nằm dưới "Tồn kho nhà cung cấp". Bạn có thể chấp nhận một mục kèm lý do, và lý do được lưu trong bản bóc tách. Xem [Kiểm tra tồn kho và thời gian giao hàng của nhà cung cấp](topic:supplier-stock).

**Trợ lý AI**

- **Công cụ cho cả ba.** Khi trợ lý được cho phép trong {{ui:Settings}}, một trợ lý có thể đọc một chú giải (`legend_open`), chạy việc đếm (`legend_count_start`, rồi `legend_count_status` và `legend_count_result`) và thêm kết quả (`legend_count_add`, có thể xem trước trước). Nó có thể đọc giá đã nhớ (`prices_list`) và định giá các hạng mục từ đó (`prices_apply`, có thể xem trước trước), và đọc kết quả đối chiếu nhà cung cấp (`supply_check`). Việc thêm tệp nhà cung cấp vẫn do bạn thực hiện. Xem [Dùng TakeoffCraft với trợ lý AI](topic:use-with-ai-assistants).

**Trong mọi ứng dụng**

- **Ngôn ngữ.** Tổng cộng năm mươi bốn ngôn ngữ; mười ngôn ngữ mới (Lithuania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili và Uzbek). Các ngôn ngữ khác tiếng Anh là bản dịch máy cho đến khi người bản ngữ đã đọc lại.
- **Thiết bị nhập.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} quy định bàn di chuột, nút bên của chuột, bút, chuột 3D, tay cầm chơi game hoặc bộ điều khiển MIDI làm gì, cho mọi ứng dụng hoặc cho một ứng dụng. Xem [Dùng bàn di chuột, chuột 3D hoặc bộ điều khiển](common:input-devices).
- **Số hàng thanh công cụ.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} có {{ui:Wrap}} (mặc định), {{ui:2 rows}} và {{ui:1 row}}; các nhóm không vừa sẽ cuộn ngang. Xem [Sắp xếp các bảng](common:arrange-panels).
- **Bảng Cảnh báo.** Bảng chung của cảnh báo và ghi chú giờ có kiểm tra tồn kho nhà cung cấp ở trên, cạnh các kiểm tra khác.
- **Tiện ích bổ sung.** Tiện ích bổ sung theo danh sách tài khoản của bạn. Xem [Tiện ích bổ sung và danh sách tài khoản](common:addons-basics).
- **Kết nối AI của bạn.** CadCraft Studio là trung tâm: kết nối trợ lý của bạn một lần cho cả tám ứng dụng. Studio không có AI riêng.

### Đã sửa trong 0.8.1

- **Phần lớp của tệp DWG.** Phần lớp của tệp DWG bị đọc sai kiểu. Lỗi này đã được sửa trong TakeoffCraft và trong bốn ứng dụng khác.
- **Studio có thể đổi ngôn ngữ khi đang chạy.** Trước đây, Studio và các phiên bản đóng gói của nó chỉ có tiếng Anh. Điều này chưa được kiểm tra trên bản máy tính trên mọi nền tảng; hãy báo cho chúng tôi nếu ngôn ngữ không đổi.

### Chưa có trong phiên bản này

- **Chưa có chữ ký mã.** Windows có thể cảnh báo, và trên Mac bạn nhấp chuột phải và chọn {{ui:Open}} lần đầu tiên. Các bản dành cho cửa hàng (Microsoft Store, Google Play, App Store) đang tạm dừng, và bản iPad và iPhone chưa được dựng lại cho 0.8.1.
- **Cập nhật Studio.** Bộ cài Windows và các gói Linux kiểm tra mỗi ngày một lần và hỏi trước. Bản zip portable chỉ thông báo, còn macOS và APK không tự cập nhật. Tệp .dmg macOS 0.8 theo bản phát hành.
- **Kết nối AI của bạn.** Kết nối một chạm bên trong Studio, bộ kết nối AI được lưu trữ trong trình duyệt, khóa API riêng bên trong Studio và gói MCP đã xuất bản chưa được hứa trong phiên bản này.
- **Đếm tất cả.** Cần ký hiệu được vẽ giống như trong chú giải, và một ký hiệu có tường hoặc đường dài đi qua có thể bị bỏ sót. Các ký hiệu đối xứng gương không được tìm thấy, và một tờ không có tỷ lệ nhưng được vẽ ở kích thước khác sẽ được tìm ở kích thước của chú giải. Hãy kiểm tra các kết quả trên tờ đầu tiên trước khi tin vào phần còn lại.
- **Tồn kho nhà cung cấp.** Số liệu tồn kho chỉ cập nhật bằng tệp bạn thêm vào. Việc kiểm tra không bao giờ hỏi nhà cung cấp.
- **Ngôn ngữ.** Thanh ứng dụng tiếng Tamil bị tràn.

Mọi thứ khác có trong [Chưa xây dựng](topic:not-built-yet). Với bản phát hành trước đó, xem [Có gì mới trong 0.7](topic:whats-new-0-7).
