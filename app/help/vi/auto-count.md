---
title: Đếm tự động một ký hiệu
summary: Khoanh một ký hiệu, để TakeoffCraft tìm các ký hiệu còn lại trên tờ này hoặc trên mọi tờ đang mở, xem lại các kết quả khớp bằng thanh trượt, rồi thêm chúng trong một bước.
keywords: mọi góc, xoay, quay, tỷ lệ khác, tỷ lệ khác nhau, đếm tự động, tìm ký hiệu, mẫu, khớp, phát hiện, công cụ đếm
from: fa68a6c1
---

{{ui:Đếm tự động}} tìm mọi bản sao của một ký hiệu sau khi bạn khoanh một ký hiệu. Sau đó bạn xem lại các kết quả khớp trên tờ và thêm những kết quả bạn chấp nhận làm dấu đếm. Đây là công cụ hỗ trợ, không đảm bảo chính xác: luôn xem lại trước khi thêm.

## Tìm ký hiệu

1. Tạo hoặc nhấn một hạng mục đếm trong {{ui:Hạng mục}}.
2. Mở một tờ có ký hiệu.
3. Chọn {{ui:Đếm tự động}} trên thanh công cụ, hoặc nhấn {{key:S}}.
   Một thanh xuất hiện ở đầu tờ: "Kéo một khung quanh một ký hiệu trên tờ này."
4. Để tìm trên mọi tờ đang mở, không chỉ tờ này, đánh dấu {{ui:Tìm trong mọi tờ đang mở}}.
5. Phóng to để thấy rõ ký hiệu, rồi kéo khung sát quanh một bản sao của nó. Bao gồm toàn bộ ký hiệu; phần giấy trắng xung quanh sẽ được cắt bỏ.
   Thanh hiển thị "Đang tìm…" cùng thanh tiến trình và nút {{ui:Hủy}}. Trang vẫn phản hồi: bạn có thể phóng to, di chuyển khung nhìn và chuyển giữa các tờ. Chọn công cụ khác, hoặc nhấn {{key:Esc}}, sẽ hủy việc tìm.
6. Khi xong, các kết quả khớp xuất hiện trên tờ dưới dạng khung màu của hạng mục, và thanh hiển thị tóm tắt như "22 kết quả khớp, 19 để thêm (3 đã đếm rồi). Nhấp vào một khung để loại bỏ hoặc khôi phục."

Trong {{ui:Đếm tự động}}, kéo trên tờ sẽ vẽ khung thay vì di chuyển khung nhìn. Để di chuyển, giữ {{key:Space}} và kéo, hoặc kéo bằng nút giữa chuột.

## Xem lại kết quả khớp

- **Nhấp vào một khung** để loại bỏ. Khung bị loại có nét đứt và gạch chéo. Nhấp lại để khôi phục.
- **Di chuyển thanh trượt {{ui:Độ khớp}}** (từ 50% đến 95%, mặc định 75%). Giá trị cao chỉ hiển thị các kết quả rất giống; giá trị thấp hiển thị nhiều kết quả lỏng hơn. Thanh trượt chỉ lọc những gì đã tìm thấy; nó không tìm lại.
- **Đã đếm rồi**: các kết quả nằm ở vị trí đã có dấu đếm của hạng mục này sẽ ban đầu bị loại, để bạn không đếm trùng.
- **Các tờ khác**: khi bạn tìm trên mọi tờ đang mở, hãy chuyển giữa các tờ bằng danh sách tờ hoặc {{key:PageDown}} và xem lại từng tờ. Phần tóm tắt cho biết có bao nhiêu tờ có kết quả khớp.

## Thêm chúng

Chọn {{ui:Thêm}}. Nút ghi số lượng, ví dụ "Thêm 19 dấu".
Các dấu đếm được thêm ở tâm mỗi khung đã chấp nhận: "Đã thêm 19 dấu đếm vào "Ổ cắm đôi". Ctrl+Z xóa tất cả."

Toàn bộ đợt thêm là một bước hoàn tác, nên một lần {{key:Mod+Z}} sẽ xóa tất cả.

Để bỏ việc xem lại mà không thêm gì, chọn {{ui:Bỏ}} hoặc nhấn {{key:Esc}}. Chọn công cụ khác cũng sẽ bỏ việc này.

## Tìm được gì, và bỏ sót gì

TakeoffCraft so sánh bản vẽ, theo từng điểm ảnh, với ký hiệu bạn đã khoanh.

- Nó tìm được ký hiệu xoay 0°, 90°, 180° và 270°. Đánh dấu {{ui:Mọi góc (chậm hơn)}} trên thanh đếm tự động trước khi vẽ khung để tìm ký hiệu ở mọi góc: nó thử mỗi 15°, rồi tinh chỉnh từng kết quả đến từng 1.5°. Việc này mất khoảng gấp sáu lần thời gian. Nó không tìm được ký hiệu đối xứng gương (trừ khi ký hiệu trông giống nhau khi lật gương).
- Khi đánh dấu {{ui:Tìm trong mọi tờ đang mở}}, một tờ ở tỷ lệ khác sẽ được tìm ở kích thước mà ký hiệu có trên tờ đó: một thiết bị vẽ đúng tỷ lệ trên mặt bằng 1/8" có kích thước bằng một nửa so với trên mặt bằng 1/4", và vẫn được tìm thấy. Tờ như vậy cũng được tìm ở kích thước khung, để tìm các nhãn và ký hiệu in cùng một kích thước trên mọi tờ. Việc này cần có tỷ lệ trên cả hai tờ; tờ không có tỷ lệ chỉ được tìm ở kích thước khung.
- Các ký hiệu rất giống nhau có thể khớp với nhau: ổ cắm đôi và ổ cắm bốn, hoặc hai nhãn thiết bị chỉ khác một chữ cái. Hãy tăng thanh trượt cho đến khi chỉ còn những kết quả đúng, rồi loại các kết quả còn lại bằng tay.
- Ký hiệu bị đường, nét gạch hoặc văn bản khác cắt ngang sẽ có điểm thấp hơn và có thể cần đặt thanh trượt thấp hơn.
- Khung quá nhỏ sẽ bị từ chối: "Khung này quá nhỏ. Hãy vẽ khung quanh toàn bộ ký hiệu." Khung trống cũng bị từ chối: "Khung này gần như trống. Hãy vẽ khung quanh một ký hiệu."
- Tờ quá lớn ở kích thước cần thiết cho ký hiệu này sẽ bị bỏ qua, và phần tóm tắt ghi "1 tờ quá lớn để tìm ở kích thước ký hiệu này." Hãy khoanh một ký hiệu lớn hơn, hoặc đếm tờ đó bằng tay.

Nếu không tìm thấy gì, thanh trạng thái ghi "Không có kết quả khớp. Hạ thanh trượt Độ khớp, hoặc khoanh ký hiệu sát hơn."

## Tốc độ và trình duyệt

Quá trình tìm chạy trong một tiến trình nền, nên trang vẫn phản hồi và bạn có thể hủy bất cứ lúc nào. Mỗi tờ được vẽ trước ở kích thước làm việc ngay trên trang, nên một tờ rất lớn có thể dừng một lúc. Tính năng chạy trên Chrome, Edge, Firefox và Safari phiên bản hiện tại. Tìm trên nhiều tờ sẽ lâu hơn; thanh tiến trình chạy theo từng tờ. Khi ngoại tuyến, đếm tự động hoạt động khi thanh ứng dụng hiển thị {{ui:Sẵn sàng ngoại tuyến}}: {{ui:Lưu để dùng ngoại tuyến}} cũng giữ tiến trình nền. Xem [Làm việc ngoại tuyến](common:offline).
