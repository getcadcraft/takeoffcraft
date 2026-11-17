---
title: Có gì mới trong 0.9
summary: Đọc chiều dài theo mét, xentimét hoặc milimét, diện tích hệ mét tính bằng m2 kèm diện tích tường, đặt sẵn tỷ lệ 1:75 và 1:150, đơn vị khối lượng và nhiệt độ, Cung tròn với mười phương pháp, cùng con trỏ trực tiếp, Theo dõi và danh sách người tham gia.
keywords: có gì mới, what's new, ghi chú phát hành, nhật ký thay đổi, 0.9, hiển thị chiều dài dưới dạng, mét, xentimét, milimét, hệ mét, theo Chung, đơn vị, đơn vị hiển thị, m2, mét vuông, diện tích tường, đặt sẵn tỷ lệ, 1:75, 1:150, khối lượng, kilôgam, kg, tấn, ton, lb, nhiệt độ, độ C, độ F, cung tròn, phương pháp cung tròn, cung tròn 3 điểm, bán kính, trực tiếp, con trỏ, theo dõi, danh sách người tham gia, lớp DWG, gợi ý, bố cục, 0.8, 0.8.1, phiên bản, tính năng mới, đếm tất cả, chú giải, chú giải ký hiệu, cả bộ, bộ nhớ giá, công việc trước, công việc gần nhất, giá thường gặp, nhà cung cấp, tồn kho, thời gian giao, backorder, danh sách đặt hàng, thiếu hàng, bảng vấn đề, trợ lý, ngôn ngữ, thiết bị nhập, số hàng thanh công cụ, dwg
from: 6182b998
---

Đây là những thay đổi trong TakeoffCraft 0.9 so với 0.8.1. Đây là bản phát hành nhỏ cho ứng dụng này: chiều dài có thể đọc theo mét, xentimét hoặc milimét, diện tích và tỷ lệ theo hệ mét được xử lý đúng hơn, và Arc có mười cách vẽ. Các phiên Live cũng hiển thị ai đang ở đâu.

## Mới

### Đọc chiều dài theo mét, xentimét hoặc milimét

- **Hiển thị chiều dài dưới dạng.** {{ui:Settings}} › {{ui:TakeoffCraft}} có {{ui:Show lengths as}} với {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm và mm. {{ui:Follow Global}} dùng đơn vị chiều dài hệ mét mà bạn đánh dấu sao trong {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}, và feet-inch khi chưa đánh dấu sao đơn vị nào. Nó thay đổi cách đọc chiều dài trên bản vẽ, trong thanh trạng thái và các bảng, bao gồm chiều cao, độ sâu, độ dày và các cao độ. Số trần được nhập vào ô chiều cao sẽ được đọc theo đơn vị đang hiển thị.
- **Chỉ hiển thị.** Khối lượng, chi phí và tệp xuất được tính từ chiều dài chính xác. Lựa chọn 1/16, 1/8 và 1/4 inch chỉ xuất hiện với feet-inch. Xem [Hiển thị chiều dài bằng mét](topic:show-lengths-in-meters).
- **Đơn vị khối lượng.** Hạng mục {{ui:Typed quantity (no drawing)}} giờ có thể tính bằng lb, TON, kg hoặc t, và được định giá theo đơn vị.
- **Nhiệt độ.** Mỗi hạng mục có ô {{ui:Temperature}} tùy chọn trong trình chỉnh sửa hạng mục, nhập bằng độ C hoặc F. {{ui:Show temperatures as}} trong {{ui:Settings}} › {{ui:TakeoffCraft}} cung cấp {{ui:Follow Global}}, °C hoặc °F.

### Diện tích và tỷ lệ cho công việc hệ mét

- **Diện tích bằng m2 trên bản vẽ.** Diện tích đo bằng hạng mục hệ mét giờ ghi m2 trên nhãn bản vẽ và bảng đánh dấu, cũng như trong bảng, thay vì SF. Quy tắc: m2 khi hạng mục được định giá theo hệ mét hoặc chiều dài hiển thị bằng m, cm hoặc mm; SF trong các trường hợp khác.
- **Diện tích tường.** Hạng mục tuyến tính có chiều cao cũng hiển thị diện tích tường (chiều dài nhân chiều cao) trong danh sách hạng mục và như một dòng ghi chú dưới bảng khối lượng theo hạng mục.
- **Đặt sẵn tỷ lệ 1:75 và 1:150.** Chúng nằm trong danh sách {{ui:Preset}} thuộc nhóm {{ui:Scale}}, nhóm này hiện có 32 tỷ lệ. Xem [Đặt sẵn tỷ lệ](topic:scale-presets).

### Arc với mười phương pháp

- Khi {{ui:Arc}} đang bật (nút trên thanh công cụ hoặc {{key:R}}), một ô {{ui:Arc method}} xuất hiện trên thanh bản vẽ: 3 điểm, Điểm đầu, Tâm, Điểm cuối, Điểm đầu, Tâm, Góc, Điểm đầu, Tâm, Chiều dài, Điểm đầu, Điểm cuối, Góc, Điểm đầu, Điểm cuối, Hướng, Điểm đầu, Điểm cuối, Bán kính, Tâm, Điểm đầu, Điểm cuối, Tâm, Điểm đầu, Góc và Tâm, Điểm đầu, Chiều dài. Góc, chiều dài, bán kính và hướng có thể nhấp chuột hoặc nhập. Tính năng này hoạt động với các đoạn thẳng, khu vực và lỗ khoét. Các tệp lưu trước 0.9 mở ra giống như trước. Xem [Vẽ cung tròn bằng mười phương pháp](topic:draw-arcs-ten-methods).

### Làm việc cùng nhau

- **Xem con trỏ của nhau.** Trong phiên Live, con trỏ của mỗi người hiển thị trên bản vẽ cùng tên và màu của họ, với khung nét đứt quanh các dấu họ đã chọn. Người ở tờ khác được liệt kê kèm tên tờ đó. Xem [Làm việc trực tiếp cùng người khác](topic:work-live).
- **Theo dõi một người, và danh sách người tham gia.** Nút {{ui:People}} trong phiên Live liệt kê từng người cùng công cụ họ đang dùng, tờ họ đang ở và thời điểm họ chỉnh sửa gần nhất. {{ui:Follow}} di chuyển khung nhìn của bạn theo họ, còn máy chủ có thể dùng {{ui:Ask everyone to follow me}}. Xem [Theo dõi một thành viên trong phiên Live](topic:follow-a-teammate).

## Trong mọi ứng dụng

- **Gợi ý khi di chuột và mẹo khởi động.** Chữ hiện khi rê chuột là gợi ý Bootstrap, và mẹo khởi động có thể đóng lại.
- **Dải thẻ có cuộn.** Dải thẻ của một bảng không vừa sẽ cuộn thay vì bị cắt.
- **Tiêu đề thẻ.** Thẻ trình duyệt hiển thị `<document> - TakeoffCraft | CadCraft`.
- **Bố cục.** Danh sách bố cục trong {{ui:Settings}} là hộp thả xuống hiển thị bố cục đã chọn.
- **Ngôn ngữ.** Ngôn ngữ bạn chọn giờ áp dụng cho các chữ do trang tự in, như Mới, Mở và Lưu. Các ngôn ngữ khác tiếng Anh là bản dịch máy cho đến khi người bản ngữ đã đọc qua.

## Giới hạn thực tế

- Hiển thị chiều dài, đơn vị khối lượng và nhiệt độ cùng các đặt sẵn mới đã được kiểm tra bằng bài kiểm thử và trên trang. Chưa kiểm tra bằng tay mọi bảng ở mọi đơn vị.
- Danh sách người tham gia chưa được kiểm tra bằng tay với một lớp học thực tế gồm giáo viên và học sinh.
- Các ngôn ngữ khác tiếng Anh là bản dịch máy.
- Trình cài đặt Windows chưa được ký mã (chọn Thông tin thêm, rồi Vẫn chạy). Ảnh đĩa macOS chưa được công chứng (nhấp chuột phải, rồi {{ui:Open}}).

## Trước đó: 0.8 và 0.8.1

Đây là những thay đổi trong TakeoffCraft 0.8 (phát hành 2026-11-01) và 0.8.1 (2026-11-02), so với 0.7. Giờ bạn có thể đếm một chú giải ký hiệu trên cả bộ bản vẽ cùng lúc, một takeoff mới có thể bắt đầu từ giá của các công việc trước, và takeoff có thể được đối chiếu với tồn kho của nhà cung cấp. 0.8.1 là bản sửa lỗi.

### Mới

**Đếm tất cả trong bộ (bản vẽ)**

- **Khoanh vùng chú giải một lần.** {{ui:Count everything}} trên thanh công cụ đọc một chú giải ký hiệu: kéo một khung quanh các ký hiệu và tên in bên cạnh. Mỗi ký hiệu được liệt kê cùng hình và tên, và tên trở thành tên của hạng mục. Bỏ chọn những gì bạn không muốn, rồi chọn {{ui:Count on N sheets}}. Thanh hiển thị tờ đang được tìm, {{ui:Cancel}} dừng lượt chạy, và trang vẫn dùng được.
- **Mọi tờ trong một lượt.** Mỗi ký hiệu được đếm trên mọi tờ đang mở. Tờ vẽ theo tỷ lệ khác được tìm theo tỷ lệ đó, và ký hiệu được tìm dù xoay theo góc vuông nào. Các ký hiệu của chính chú giải không được đếm trên tờ của nó.
- **Xem lại trước khi thêm.** Mỗi tổng có một liên kết theo tờ ("E-103: 4") dẫn tới tờ đó. Nhấp vào một khung trên kết quả tìm để loại trừ, và nhấp lại để đưa lại. Mức khớp (50% đến 100%) chỉ lọc những gì đã tìm; không tìm lại.
- **Một bước hoàn tác.** {{ui:Add N marks}} tạo một hạng mục đếm cho mỗi ký hiệu, với một dấu trên mọi kết quả tìm. Tên đã là hạng mục đếm của bạn sẽ được dùng lại. {{key:Ctrl+Z}} hoàn tác mọi hạng mục và dấu. Những gì bạn chấp nhận cũng được đưa vào {{ui:Learned}}.
- **Ký hiệu ở mọi góc.** Đánh dấu {{ui:Symbols at any angle}} trước khi đếm để tìm cả ký hiệu xoay theo góc không vuông. Khi đó, việc tìm xoay mỗi ký hiệu mỗi 15 độ, và ký hiệu không tròn có thể mất gấp sáu lần thời gian.
- **Đó là gì.** Đối chiếu ký hiệu đơn giản trên các tờ của bạn, không có mô hình được huấn luyện, và không có gì rời khỏi máy tính. Trên một bộ 200 tờ giả lập, nó mất 9.4 giây từ đầu đến cuối trong Chrome trên một máy tính để bàn nhanh; bộ bản vẽ thực sẽ chậm hơn. Xem [Đếm tất cả trong bộ (bản vẽ)](topic:count-everything).

**Bộ nhớ giá từ công việc của bạn**

- **TakeoffCraft ghi nhớ đơn giá của bạn.** Khi bạn lưu takeoff, mỗi hạng mục có giá được dùng sẽ được ghi nhớ theo tên và loại: đơn giá vật liệu, đơn giá nhân công, hao hụt và đơn vị. 12 công việc gần nhất được giữ cho mỗi tên. Nó được lưu trên máy tính này cạnh thư viện giá, không bao giờ nằm trong tệp takeoff, và không được gửi đi đâu.
- **Bắt đầu takeoff mới từ đó.** {{ui:Prices}} trên thanh công cụ hiển thị, với mỗi hạng mục, đơn giá của công việc gần nhất, đơn giá thường gặp và khoảng giá. {{ui:Use last}} hoặc {{ui:Use typical}} định giá một hạng mục, và {{ui:Price N unpriced items from memory}} điền mọi hạng mục chưa có giá. Mỗi lần dùng là một bước hoàn tác.
- **Công việc cũ hơn.** {{ui:Learn from a past takeoff…}} ghi nhớ các hạng mục đã có giá của một takeoff đã lưu (.json).
- **Xem, đổi, quên.** {{ui:Everything remembered}} liệt kê mọi tên; nút thùng rác quên một tên, và {{ui:Clear all prices}} quên tất cả. Tắt {{ui:Remember my prices when I save a takeoff}} để dừng. Giá theo mỗi cái không bao giờ được gán cho hạng mục tính theo foot. Xem [Bộ nhớ giá từ các công việc trước](topic:price-memory).

**Tồn kho nhà cung cấp và thời gian giao hàng**

- **Đối chiếu với danh sách của nhà cung cấp.** {{ui:Supply}} trên thanh công cụ nhận danh sách tồn kho của nhà cung cấp ({{ui:Add a supplier file…}}), dạng CSV hoặc bảng tính, rồi kiểm tra những gì takeoff cần, cùng hao hụt, so với danh sách đó. Tối đa năm tệp được giữ. Không có gì được gửi đi và không có gì hỏi nhà cung cấp: bạn tự cung cấp tệp.
- **Nội dung kết quả.** Các hạng mục thiếu hiển thị trước, với các dòng như "Thiếu 120 EA", "Thời gian giao 21 ngày", "Đang chờ giao hàng", "Đơn vị khác", "Không có số tồn kho" hoặc "Còn hàng". {{ui:Longest wait wanted (days)}} bắt đầu từ 14.
- **Danh sách đặt hàng.** {{ui:Order list (CSV)}} tải xuống các hạng mục thiếu, kèm số lượng thiếu, nhà cung cấp và thời gian giao.
- **Đưa giá vào Thư viện.** Nếu tệp có giá, {{ui:Prices into the Library}} đặt đơn giá vật liệu của mỗi mục Thư viện cùng tên và đơn vị. Định giá lại từ Thư viện để đưa giá vào takeoff.
- **Trong bảng vấn đề.** Thiếu hàng là cảnh báo và chờ lâu là ghi chú, nằm dưới mục "Supplier stock". Bạn có thể chấp nhận một mục kèm lý do, và lý do được lưu trong takeoff. Xem [Kiểm tra tồn kho nhà cung cấp và thời gian giao](topic:supplier-stock).

**Trợ lý AI**

- **Công cụ cho cả ba.** Khi trợ lý được phép trong {{ui:Settings}}, một trợ lý có thể đọc chú giải (`legend_open`), chạy đếm (`legend_count_start`, rồi `legend_count_status` và `legend_count_result`) và thêm kết quả (`legend_count_add`, có thể xem trước trước). Nó có thể đọc giá đã ghi nhớ (`prices_list`) và định giá hạng mục từ đó (`prices_apply`, có thể xem trước trước), và đọc kết quả đối chiếu nhà cung cấp (`supply_check`). Việc thêm tệp nhà cung cấp vẫn do bạn làm. Xem [Dùng TakeoffCraft với trợ lý AI](topic:use-with-ai-assistants).

**Trong mọi ứng dụng**

- **Ngôn ngữ.** Tổng cộng có năm mươi bốn ngôn ngữ; mười ngôn ngữ mới (tiếng Litva, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili và Uzbek). Các ngôn ngữ khác tiếng Anh là bản dịch máy cho đến khi người bản ngữ đã đọc qua.
- **Thiết bị nhập.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} quyết định bàn di chuột, nút bên của chuột, bút, chuột 3D, tay cầm chơi game hoặc bộ điều khiển MIDI sẽ làm gì, cho mọi ứng dụng hoặc cho một ứng dụng. Xem [Dùng bàn di chuột, chuột 3D hoặc bộ điều khiển](common:input-devices).
- **Số hàng thanh công cụ.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} cung cấp {{ui:Wrap}} (mặc định), {{ui:2 rows}} và {{ui:1 row}}; các nhóm không vừa sẽ cuộn ngang. Xem [Sắp xếp các bảng](common:arrange-panels).
- **Bảng vấn đề.** Bảng chung của các cảnh báo và ghi chú giờ có thêm kiểm tra tồn kho nhà cung cấp ở trên, cạnh các kiểm tra khác.
- **Tiện ích bổ sung.** Tiện ích bổ sung theo danh sách tài khoản của bạn. Xem [Tiện ích bổ sung và danh sách tài khoản](common:addons-basics).
- **Kết nối AI của bạn.** CadCraft Studio là trung tâm: kết nối trợ lý một lần cho cả tám ứng dụng. Studio không có AI riêng.

### Đã sửa trong 0.8.1

- **Phần lớp DWG.** Phần lớp của tệp DWG bị đọc sai kiểu. Đã sửa trong TakeoffCraft và bốn ứng dụng khác.
- **Studio có thể đổi ngôn ngữ khi đang chạy.** Trước đây, Studio và các bản đóng gói của nó chỉ có tiếng Anh. Chưa kiểm thử trên mọi nền tảng của bản ứng dụng máy tính; hãy cho chúng tôi biết nếu ngôn ngữ không đổi.

### Chưa có trong phiên bản này

- **Chưa ký mã.** Windows có thể cảnh báo, và trên Mac bạn nhấp chuột phải rồi chọn {{ui:Open}} lần đầu. Các bản cửa hàng (Microsoft Store, Google Play, App Store) đang tạm dừng, và bản iPad và iPhone chưa được xây lại cho 0.8.1.
- **Cập nhật Studio.** Trình cài đặt Windows và các gói Linux kiểm tra mỗi ngày và hỏi trước. Bản zip portable chỉ thông báo, còn macOS và APK không tự cập nhật. Bản .dmg macOS 0.8 theo bản phát hành.
- **Kết nối AI của bạn.** Kết nối một chạm trong Studio, trình kết nối AI được lưu trữ trong trình duyệt, khóa API riêng trong Studio và gói MCP đã xuất bản không được hứa trong phiên bản này.
- **Đếm tất cả.** Cần ký hiệu được vẽ giống như trong chú giải, và ký hiệu có tường hoặc đường dài đi xuyên qua có thể bị bỏ sót. Ký hiệu đối xứng không được tìm thấy, và tờ không có tỷ lệ mà được vẽ ở kích thước khác sẽ được tìm theo kích thước của chú giải. Kiểm tra kết quả trên tờ đầu tiên trước khi tin các tờ còn lại.
- **Tồn kho nhà cung cấp.** Số tồn kho chỉ mới bằng tệp bạn thêm vào. Kiểm tra không bao giờ hỏi nhà cung cấp.
- **Ngôn ngữ.** Thanh ứng dụng tiếng Tamil bị tràn.

Mọi thứ khác có trong [Chưa xây dựng](topic:not-built-yet). Với bản phát hành trước đó, xem [Có gì mới trong 0.7](topic:whats-new-0-7).
