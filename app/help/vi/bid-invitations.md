---
title: Gửi gói để dự thầu
summary: Gửi email gói dự thầu cho các nhà thầu phụ, để họ nhập giá trên một trang không cần tài khoản, giữ giá kín đến giờ mở thầu, rồi kéo các giá đó vào bảng cân bằng.
keywords: gửi để dự thầu, lời mời, lời mời dự thầu, người dự thầu, nhà thầu phụ, mời, email, yêu cầu giá, dự thầu kín, mở thầu, ngày mở thầu, dự thầu trễ, hạn chót, nhắc nhở, hồ sơ nhà thầu phụ, bảo hiểm, năng lực, csv, kết nối, PDF các tờ
from: fb314b2c
---

{{ui:Xuất}} › {{ui:Gói dự thầu và cân bằng…}} › {{ui:Gửi mời thầu…}} gửi một gói cho những người bạn chọn. Website gửi email cho mỗi người một liên kết; họ mở trang, xem phạm vi và nhập giá cho từng dòng. Bạn xem các giá trong bảng cân bằng, sẵn sàng để so sánh ([Gói dự thầu và cân bằng dự thầu](topic:bid-leveling)).

:::note
Việc gửi **chưa mở cho tất cả mọi người.** Trong khi tính năng đang được thử nghiệm, nó chỉ hoạt động với các tài khoản mà nhóm CadCraft đã bật; nếu tài khoản của bạn chưa được bật, hộp thoại sẽ cho biết. Trang của người dự thầu hoạt động với mọi lời mời đã được gửi.
:::

## Trước khi gửi

- Bạn cần một tài khoản CadCraft với địa chỉ email đã xác minh. TakeoffCraft trên trình duyệt yêu cầu bạn **Kết nối**: một thẻ mở trên getcadcraft.com, bạn nhấn Kết nối, và thẻ đó nhận một phiên đăng nhập dùng được trong 30 ngày, chỉ cho gói dự thầu, cho đến khi bạn đóng thẻ TakeoffCraft. Bạn có thể gỡ nó bất cứ lúc nào trên trang bảo mật. Cửa sổ Studio hiện chưa thể gửi.
- Gán cho mỗi hạng mục một số CSI: một gói là các hạng mục của cùng một phân ngành CSI ([Tạo hạng mục bóc tách](topic:create-items)).
- Đặt tỷ lệ cho các tờ có dấu của gói, để khối lượng mà người dự thầu thấy được đo đạc.

## Gửi một gói

1. Chọn {{ui:Gửi mời thầu…}} bên dưới gói.
2. Điền tiêu đề, dự án và một lời nhắn tùy chọn, cùng **thời hạn** theo múi giờ của bạn.
3. Giữ đánh dấu **Giữ giá kín** để ẩn mọi giá đến **giờ mở thầu** (không sớm hơn thời hạn), hoặc bỏ đánh dấu để xem giá khi chúng về.
4. Giữ ô các tờ được đánh dấu để gửi một PDF các tờ có dấu của gói, với các dấu được vẽ trên đó. Giá của bạn không bao giờ nằm trong những gì được gửi: chỉ có tên hạng mục, số CSI, số lượng, đơn vị và tên tờ.
5. Nhập những người cần mời, mỗi dòng một người, theo dạng `Name <name@company.com>` hoặc chỉ địa chỉ, hoặc đánh dấu người từ hồ sơ nhà thầu phụ của bạn. Tối đa 60 người một lần, 100 người cho mỗi gói.
6. Chọn {{ui:Gửi lời mời}}. Mỗi người nhận một email thuần túy có tên và địa chỉ email của bạn, thời hạn và liên kết; trả lời sẽ gửi về bạn.

Hộp thoại cho biết có bao nhiêu email đã gửi và nêu tên những người bị bỏ qua: đã được mời vào gói này, đã yêu cầu không nhận lời mời dự thầu, địa chỉ không hợp lệ, hoặc vượt giới hạn gửi.

## Người dự thầu thấy gì

Một trang ở một liên kết riêng dài, không cần đăng nhập. Trang hiển thị ai đã mời họ, thời hạn, giá có được giữ kín hay không, lời nhắn của bạn và PDF các tờ, rồi mọi dòng cùng số lượng. Với mỗi dòng, họ nhập giá hoặc đánh dấu **Không bao gồm**, và có thể thêm ghi chú; họ có thể thêm ghi chú cho cả gói và tối đa 3 tệp (một báo giá, một thư phạm vi, một chứng chỉ). Họ có thể lưu lại và đổi giá cho đến giờ mở thầu, hoặc **từ chối**, kèm một ô để yêu cầu CadCraft không gửi lời mời dự thầu cho họ nữa.

## Dự thầu kín và mở thầu

Trước giờ mở thầu, **không ai** thấy giá, ghi chú hay tệp: không phải bạn, không trong TakeoffCraft, không trên trang Gói dự thầu của bạn. Bạn thấy ai đã được mời và họ đã trả lời hay chưa. Đến giờ mở thầu, mọi hồ sơ thầu hiện cùng lúc. Một hồ sơ được lưu sau thời hạn vẫn được chấp nhận và được đánh dấu **trễ**; bảng cân bằng vẫn liệt kê nó, và việc trễ chỉ là một dấu, không phải phán quyết. Sau khi mở thầu, người dự thầu không thể đổi giá. Nếu không niêm phong, một hồ sơ sẽ chốt khi đến hạn.

## Lấy giá

{{ui:Lấy giá}} hỏi website và thêm mỗi câu trả lời vào gói như một hồ sơ thầu, được đánh dấu **web**. TakeoffCraft cũng âm thầm hỏi mỗi lần bạn mở hộp thoại khi đang kết nối. Một hồ sơ mà người dự thầu đã lưu phiên bản mới sẽ được cập nhật tại chỗ; một hồ sơ bạn đã sửa sẽ giữ nguyên như bạn để lại cho đến khi họ gửi phiên bản mới. Mỗi lần kéo là một bước mà {{key:Mod+Z}} hoàn tác. Các dòng bị bỏ sót được chuyển sang như phạm vi mà hồ sơ bỏ lại, nên cân bằng sẽ bù chúng bằng chi phí của bạn.

## Trên website

Tài khoản của bạn có thêm hai trang khi bạn đã có thể gửi. **Gói dự thầu** liệt kê những gì bạn đã gửi, ai đã trả lời, các hồ sơ trễ và các tệp; cho phép bạn gửi nhắc nhở (một liên kết mới; liên kết cũ ngừng hoạt động), đóng, mở lại hoặc hủy một gói. **Nhà thầu phụ** giữ hồ sơ cho từng công ty: người liên hệ, ngành nghề, câu trả lời về năng lực (số năm hoạt động, hạn mức bảo lãnh, EMR, hồ sơ an toàn, công đoàn hay không công đoàn, tham chiếu), ngày hết hạn giấy phép và bảo hiểm, được đánh dấu khi đã qua hoặc trong vòng 30 ngày, cùng các hồ sơ dự thầu trước đây. Nhập và xuất hồ sơ dưới dạng CSV: mỗi người liên hệ một dòng, với các cột như phần xuất hiển thị; một công ty bạn đã có sẽ được cập nhật, không bao giờ bị lặp lại.

## Ai thấy gì, và trong bao lâu

Giá, ghi chú và tệp của người dự thầu được gửi cho bạn và cho nhóm CadCraft, nhóm vận hành trang. Chúng được giữ 24 tháng sau ngày đến hạn, còn các tệp giữ 180 ngày; sau đó bị xóa. Địa chỉ email của người dự thầu là địa chỉ bạn đã nhập; nó chỉ được dùng để gửi lời mời và mọi nhắc nhở cho lời mời đó. Một địa chỉ nhận tối đa 3 lời mời mỗi ngày từ tất cả mọi người cộng lại, và bạn có thể gửi tối đa 200 lời mời mỗi ngày.

## Chưa xây dựng

Phụ lục bổ sung, thư trao thầu, bảng phạm vi có ký xác nhận của từng người dự thầu, và nhắc nhở tự động trước khi hết hạn bảo hiểm chưa được xây dựng. Xem [Chưa xây dựng](topic:not-built-yet).
