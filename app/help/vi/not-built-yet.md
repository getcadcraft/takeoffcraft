---
title: Những gì chưa xây dựng
summary: Các tính năng TakeoffCraft mà bản dựng này chưa có, và cách làm thay thế hiện nay.
keywords: giới hạn, thiếu, chưa có, lộ trình, dự kiến, cách thay thế, theo lần chạy, đám mây, máy tính để bàn
from: 94ff90d0
---

TakeoffCraft đang được phát triển. Danh sách này nêu những gì bản dựng hiện tại chưa làm và cách hoàn thành công việc.

## Đo đạc

| Chưa xây dựng | Thay vào đó, hiện nay |
|---|---|
| Chèn một điểm vào giữa một đoạn hoặc một đường bao | Xóa dấu và vẽ lại. |
| Chọn bằng khung (cửa sổ) | {{key:Shift}} + nhấp từng dấu, hoặc {{key:Mod+A}} để chọn mọi dấu trên tờ. Xem [Sao chép, dán và nhân bản dấu](topic:copy-paste). |
| Xoay, đối xứng hoặc đổi tỷ lệ một bản sao đã dán | Dán lên tờ ở cùng tỷ lệ và cùng hướng; vẽ phần còn lại bằng tay. |
| Đọc tỷ lệ từ tờ quét, hoặc từ thanh tỷ lệ đồ họa | Chọn đặt sẵn, hoặc hiệu chuẩn theo chiều dài của thanh. |
| Nhiều hơn một tỷ lệ trên một tờ (khu vực chi tiết, mặt bằng phóng to) | Đo phần đó theo tỷ lệ của tờ, và bóc tách chi tiết trên tờ phóng to riêng nếu bộ bản vẽ có tờ đó. |

## Hạng mục và giá

| Chưa xây dựng | Thay vào đó, hiện nay |
|---|---|
| Công thức lắp ráp dùng các loại dấu khác của hạng mục (các cửa của hạng mục phòng trong công thức của tầng đó) | Công thức dùng tổng của loại chính; định giá các loại khác trên dòng riêng. |
| Công thức lắp ráp tính theo từng đoạn | Công thức dùng tổng của hạng mục; dùng `N` cho các phần thêm theo từng đoạn. |
| Công thức dùng khối lượng của một hạng mục khác | Lặp lại phép đo ở hạng mục đó, hoặc tính trong tệp bảng tính xuất ra. |
| Tổ thi công cho cấu kiện lắp ráp, hoặc ngày làm việc khác 8 giờ | Gán tổ thi công cho hạng mục; đọc số ngày-công cho ngày dài khác bằng giờ-công ÷ số giờ trong ngày của bạn. |
| Dấu đánh dấu khác ghi chú, đám mây và tô sáng (mũi tên, kích thước, con dấu), hoặc trả lời trên một ghi chú | Ghi vào nội dung ghi chú; đổi trạng thái khi đã giải quyết xong. |
| Thư viện giá dùng chung cho một nhóm, hoặc lưu theo tài khoản của bạn | Thư viện được lưu trong trình duyệt này: xuất ra CSV và nhập trên máy tính kia. |
| Gói ngành do người dự toán có kinh nghiệm rà soát | Mỗi gói chỉ là điểm khởi đầu: kiểm tra các giả định theo công trình và sản phẩm của bạn trước khi định giá. Xem [Gói ngành](topic:trade-packs). |
| Giá trong gói ngành | Gói chỉ có lắp ráp: tự đặt đơn giá, hoặc nhập bảng giá của bạn dưới dạng CSV. |
| Đổi tên bóc tách | Tên lấy từ PDF đầu tiên; hãy đổi tên các tệp đã tải xuống. |
| Đặt tên tờ bằng tay | Tờ được đặt tên theo nhãn trang của PDF; tìm theo tên tệp và số trang. |

## Bản vẽ (DWG và DXF)

| Chưa xây dựng | Thay vào đó, hiện nay |
|---|---|
| Bảng kiểu nét in, gán bút và tệp CTB trên các tờ của bản vẽ | Bản vẽ được vẽ màu đen, hoặc màu đã làm tối cho giấy; độ dày nét lấy từ bản vẽ. |
| Mở DXF nhị phân, hoặc DWG cũ hơn AutoCAD 2000 | Lưu thành DXF ASCII hoặc DWG mới hơn. |
| Tìm bản vẽ liên kết (xref) theo thư mục chứa nó | Mở cả tệp bản vẽ liên kết cùng với bản vẽ chính: tệp được tìm theo tên trong số các tệp đang mở. |
| Đo polyline 3D, lưới, khối đặc và miền | Đếm theo lớp và loại, hoặc đo hình chiếu bằng công cụ Tuyến tính và Diện tích. |
| Văn bản trong PDF đã đánh dấu từ bản vẽ bằng chữ viết không thuộc Latinh | Các ký tự mà Helvetica không có glyph sẽ in thành "?" trong PDF đã đánh dấu; bản vẽ trên màn hình không bị ảnh hưởng. |
| Chuyển bản vẽ sang ứng dụng khác từ thanh tờ | Mở cùng tệp đó trong ứng dụng ấy. |
| Bản vẽ chứa bóc tách bên trong, như {{ui:PDF có kèm bóc tách}} làm với PDF | {{ui:Lưu bóc tách}}: tệp `.takeoff.json` mở lại trên cùng bản vẽ, được tìm theo nội dung. |
| Đo hoặc đếm PDF nền, hình ảnh và đối tượng OLE đặt trong bản vẽ | Hình ảnh chỉ hiện dưới dạng khung. Hãy mở chính PDF nền như một tờ. |

## Đếm tự động

| Chưa xây dựng | Thay vào đó, hiện nay |
|---|---|
| Tìm ký hiệu trên tờ không có tỷ lệ vẽ, hoặc vẽ ở kích thước khác | Đặt tỷ lệ cho tờ, hoặc tìm lại bằng khung vẽ trên đó. |
| Tìm ký hiệu bị đối xứng | Đếm các ký hiệu đó bằng tay, hoặc tìm lại bằng khung quanh một ký hiệu đối xứng. |

## Tệp và chia sẻ

| Chưa xây dựng | Thay vào đó, hiện nay |
|---|---|
| Một PDF vừa hiện dấu vừa chứa bóc tách | {{ui:PDF đã đánh dấu}} để mọi người xem dấu; {{ui:PDF có kèm bóc tách}} để mở lại trong TakeoffCraft. |
| Tệp CSV khối lượng theo tờ hoặc theo dấu | Dùng {{ui:XLSX}}: các trang tính Theo tờ và Dấu có sẵn dữ liệu này. |
| Lưu trên đám mây | Chưa có. Lưu tệp dự án vào máy tính và sao lưu. |
| Ứng dụng TakeoffCraft riêng trên máy tính | Từ 0.5, ứng dụng máy tính là CadCraft Studio, với cả tám ứng dụng trong một bộ cài. TakeoffCraft cũng chạy trên trình duyệt. |

## Màn hình và thao tác nhập

| Chưa xây dựng | Thay vào đó, hiện nay |
|---|---|
| Menu chuột phải (hoặc nhấn giữ) | Dùng thanh công cụ, các bảng và phím tắt. Nhấn giữ để kết thúc một đoạn hoặc một đường bao. |
| Xoay khung nhìn | Các trang đã xoay trong PDF đã hiển thị thẳng đứng. |

## Khung nhìn 3D

| Chưa xây dựng | Thay vào đó, hiện nay |
|---|---|
| Vẽ hoặc chỉnh sửa dấu trong 3D | Quay lại tờ ({{key:3}}) để vẽ; chọn và xóa hoạt động trong 3D. |
| Căn chỉnh các tầng xếp chồng được vẽ ở vị trí khác nhau trên trang | Xếp các tầng được vẽ giống nhau; kiểm tra các tầng khác từng tờ một. |
| Đếm các trụ có kích thước giống đối tượng được đếm | Mọi trụ trên tờ đều cùng kích thước; trụ chỉ đánh dấu vị trí cần đếm, không cho biết đó là gì. |

## Chào thầu

| Chưa xây dựng | Thay vào đó, hiện nay |
|---|---|
| Phụ lục cho gói đã gửi, thư trao thầu, bảng phạm vi mà mỗi nhà thầu ký xác nhận | Gửi một gói mới, và tự viết thư trao thầu. [Gửi gói hồ sơ dự thầu](topic:bid-invitations) nêu những gì đã có. |
| Gửi lời mời dự thầu từ bất kỳ tài khoản nào: trong khi đang thử nghiệm, thư gửi đến nhà thầu bên ngoài bị tắt, trừ các tài khoản mà đội CadCraft đã bật | Tải {{ui:CSV phạm vi}}, tự gửi qua email và nhập giá thầu vào. |
| Gửi gói dự thầu từ cửa sổ Studio | Gửi từ TakeoffCraft trên trình duyệt. |
| Định giá lại khu vực dự thầu của một phương án thay thế theo giá thầu đã chọn | Phương án thay thế và tổng phụ khu vực dự thầu dùng giá của bạn; tự điều chỉnh phương án bằng tay. |
| Nhắc tự động trước khi bảo hiểm hoặc giấy phép của nhà thầu phụ hết hạn | Ngày được đánh dấu trên trang Nhà thầu phụ khi đã qua hoặc còn trong vòng 30 ngày; kiểm tra khi bạn mời. |

## Các bảng

| Chưa xây dựng | Thay vào đó, hiện nay |
|---|---|
| Di chuyển bảng {{ui:Khối lượng}} | Chỉ các bảng {{ui:Tờ}} và {{ui:Hạng mục}} di chuyển được. Xem [Sắp xếp các bảng](common:arrange-panels). |

## Bảng tính

Sổ tính XLSX đã được kiểm tra trong LibreOffice Calc, phần mềm này tính lại mọi tổng khớp đến từng đồng với TakeoffCraft. Sổ chưa được mở trong Excel. Nếu chương trình bảng tính hiển thị điều gì bất thường, tệp CSV xuất ra chứa cùng bản dự toán dưới dạng giá trị thuần.
