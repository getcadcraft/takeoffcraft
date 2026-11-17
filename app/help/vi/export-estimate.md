---
title: Xuất dự toán và PDF đã đánh dấu
summary: Tải dự toán về dạng bảng tính XLSX có công thức trực tiếp hoặc CSV, và bản sao các PDF của bạn với bóc tách được vẽ lên.
keywords: đề xuất, tóm tắt thầu, xuất, xlsx, bảng tính, sổ làm việc, csv, pdf đã đánh dấu, in bóc tách, báo cáo, chia sẻ, gửi, chú giải
from: 334f89c7
---

Xuất là tải xuống. Chúng được tạo trên máy tính của bạn từ bóc tách và các PDF đang mở; không có gì được gửi đi đâu cả.

## Dự toán dưới dạng bảng tính (XLSX)

1. Mở menu {{ui:Xuất}} trên thanh công cụ và chọn {{ui:XLSX}}.
   Trình duyệt của bạn tải xuống `(name).xlsx`. Thanh trạng thái hiển thị "Đã xuất (name).xlsx (dự toán với công thức trực tiếp, theo tờ, dấu, tỷ lệ)." và thêm cảnh báo khi dự toán chưa đầy đủ.
2. Mở tệp trong chương trình bảng tính của bạn.

Sổ làm việc có bốn trang tính, cùng các báo cáo dưới đây khi áp dụng:

| Trang tính | Nội dung |
|---|---|
| Dự toán | Một hàng cho mỗi hạng mục và mỗi cấu kiện: khối lượng, hao hụt, khối lượng kể cả hao hụt, đơn giá, vật liệu, nhân công, tổng, ghi chú. Tổng công việc ở cuối. |
| Theo tờ | Khối lượng của mỗi hạng mục trên mỗi tờ, với số lượng dấu. |
| Dấu | Mọi dấu: tờ, hạng mục, loại, khối lượng, và chi tiết (độ dài các đoạn, diện tích gộp và khoét, chu vi). |
| Tỷ lệ | Mỗi tờ có tỷ lệ hoặc dấu: tỷ lệ, cách đặt (đặt sẵn, hoặc hiệu chuẩn theo khoảng cách nào), và feet trên mỗi đơn vị PDF. |
| Tóm tắt bóc tách | Khối lượng, số CSI, số dấu và tờ của mỗi hạng mục, không có giá. |
| Bảng vật liệu | Mọi cấu kiện định mức được cộng lại trên toàn bóc tách (cùng một cấu kiện dùng cho nhiều hạng mục là một dòng), với hao hụt và chi phí vật liệu, cùng các hạng mục dùng nó. |
| Yêu cầu báo giá | Bảng vật liệu để gửi nhà cung cấp: khối lượng kể cả hao hụt, cột đơn giá để trống, và thành tiền cùng tổng tự điền khi nhập giá. |
| Theo phân mục CSI | Vật liệu, nhân công và tổng theo phân mục CSI MasterFormat, khi các hạng mục có {{ui:Số CSI}}. |

Khi có [tóm tắt thầu](topic:bid-summary), trang tính Dự toán cũng kết thúc bằng các khoản đánh dấu (chi phí nhân công, thuế bán hàng, chi phí chung, lợi nhuận, bảo lãnh và giá thầu), dưới dạng công thức trực tiếp.

Trang tính Dự toán giữ **công thức trực tiếp**: khối lượng kể cả hao hụt, số tiền vật liệu và nhân công đã làm tròn, tổng của từng hàng và tổng công việc. Chương trình bảng tính tự tính lại, nên bạn có thể đổi đơn giá hoặc hao hụt trong bảng tính và các tổng sẽ theo đó thay đổi. Các số mà TakeoffCraft tính cũng được lưu trong ô, và khớp đến từng xu.

Cột ghi chú liệt kê công thức của từng cấu kiện, lỗi công thức, dấu trên tờ không có tỷ lệ, diện tích tường và chu vi. Khi có mục bị bỏ sót, hàng tổng công việc ghi "Chưa đầy đủ: xem các ghi chú phía trên".

Sổ làm việc đã được kiểm tra trong LibreOffice Calc, chương trình này tính lại và cho ra cùng các tổng. Nó chưa được mở trong Excel. Chi tiết từng cột có trong [Các cột khi xuất](topic:export-columns).

## Dự toán dưới dạng CSV

Mở menu {{ui:Xuất}} và chọn {{ui:CSV}}. Bạn nhận được `(name).csv`: cùng hàng và cột như trang tính Dự toán, dưới dạng giá trị thuần (không có công thức), và tổng công việc. Dùng nó để dán vào một hệ thống dự toán hoặc kế toán khác.

CSV chỉ có dự toán; để có khối lượng theo tờ và danh sách dấu, dùng XLSX. {{ui:Bảng vật liệu}} trong cùng menu lưu riêng bảng vật liệu dưới dạng CSV, để đặt hàng.

## Dự toán trong Google Sheets

Phía trên bảng Khối lượng, **Sao chép cho Google Sheets** đưa dự toán vào bộ nhớ tạm dưới dạng văn bản phân tách bằng tab, với các dòng giống CSV. Trong một Google Sheet, nhấp ô A1 rồi dán. TakeoffCraft không đăng nhập Google và không gửi gì đến đó.

## Thiếu đơn giá và xác nhận

Dòng có khối lượng nhưng không có đơn giá ghi **Chưa có đơn giá** trong cột Ghi chú, và khi xuất các dòng này được tính trong các tổng. Khi dự toán đã được xác nhận, khi xuất sẽ ghi rõ người xác nhận, thời điểm và tổng nào. Xem [Thiếu đơn giá và xác nhận dự toán](topic:sign-off-the-estimate).

## Một PDF đã đánh dấu

1. Mở các PDF mà bạn muốn vẽ dấu lên.
2. Mở menu {{ui:Xuất}} và chọn {{ui:PDF đã đánh dấu}}.
   "Đang ghi PDF đã đánh dấu…" hiển thị, rồi trình duyệt tải xuống một tệp cho mỗi PDF đã đánh dấu, đặt tên `(PDF name) (takeoff).pdf`.

Trong bản sao:

- các đoạn được vẽ như đường thẳng với màu của hạng mục,
- diện tích được tô nhạt với viền liền, và phần khoét để trống,
- các dấu đếm là chấm tròn,
- mỗi trang có dấu được thêm một chú giải nhỏ ở góc dưới bên trái: màu, tên và khối lượng của mỗi hạng mục trên trang đó.

Các PDF gốc của bạn không bị thay đổi.

Ghi chú:

- Chỉ ghi các PDF đang mở. Dấu trên PDF không mở vẫn nằm trong tổng nhưng không được vẽ; hãy mở các PDF đó trước.
- Tên trong chú giải dùng phông PDF tiêu chuẩn. Ký tự không hiển thị được sẽ in thành "?".
- Không thể tạo bản sao có dấu của PDF được mã hóa: "PDF này được bảo vệ bằng mật khẩu hoặc mã hóa, nên không thể ghi bản sao đã đánh dấu. Bản thân bóc tách vẫn ổn; hãy xuất bảng tính thay thế."
- {{ui:PDF đã đánh dấu}} đầu tiên trong một thẻ sẽ tải bộ ghi PDF. Khi ngoại tuyến, bộ ghi chỉ có sẵn nếu thanh ứng dụng hiển thị {{ui:Sẵn sàng ngoại tuyến}}; xem [Làm việc ngoại tuyến](common:offline).

:::chromium
Khi có nhiều PDF đã đánh dấu, Chrome và Edge có thể hỏi một lần xem trang này có được tải nhiều tệp không. Chọn Cho phép, nếu không bạn chỉ nhận được tệp đầu tiên.
:::

## Không có gì để xuất?

- {{ui:XLSX}} và {{ui:CSV}} cần ít nhất một hạng mục: "Chưa có gì để xuất: tạo một hạng mục và bóc tách nó."
- {{ui:PDF đã đánh dấu}} cần dấu trên một PDF đang mở: "Chưa có dấu trên các PDF đang mở."

## Lưu cả bóc tách

Xuất là một báo cáo. Để tiếp tục làm việc với bóc tách sau này, hãy chọn thêm {{ui:Lưu bóc tách}}: xem [Lưu và mở lại bóc tách](topic:save-and-reopen).

Để thêm chi phí chung, lợi nhuận, thuế và bảo lãnh và gửi hồ sơ đề xuất, xem [Tóm tắt thầu và hồ sơ đề xuất](topic:bid-summary).
