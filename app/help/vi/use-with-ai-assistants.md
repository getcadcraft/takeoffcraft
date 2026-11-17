---
title: Dùng TakeoffCraft với trợ lý AI
summary: Để trợ lý AI hoặc kịch bản của riêng bạn đọc khối lượng và dự toán của takeoff, thêm hạng mục và dấu, đếm và đo trên DWG hoặc DXF, và xuất: quyền truy cập, kết nối qua CadCraft Studio, và nhật ký hoạt động.
keywords: ai, trợ lý, tác nhân, mcp, model context protocol, kịch bản, tự động hóa, khối lượng, dự toán, quyền, ngắt kết nối, hoạt động
from: 7fa62ec6
---

## Những gì bạn sẽ học

Cách để một trợ lý AI (hoặc một kịch bản bạn đã viết) làm việc với TakeoffCraft, và cách quyết định nó được phép đụng vào những gì.

TakeoffCraft **không có AI riêng** và không gửi gì đi đâu cả. Bạn tự mang trợ lý: bất kỳ chương trình nào nói được giao thức Model Context Protocol (MCP). TakeoffCraft chỉ cấp cho nó các công cụ, còn bạn chọn cái nào.

## Bật tính năng

1. Mở {{ui:Settings}} (biểu tượng bánh răng trên thanh ứng dụng, hoặc {{key:Mod+,}}) rồi chuyển đến thẻ {{ui:TakeoffCraft}}.
2. Trong mục {{ui:Assistants}}, đánh dấu **Cho phép trợ lý AI và kịch bản dùng TakeoffCraft**. Tính năng này tắt cho đến khi bạn bật.
3. Chọn những gì nó được làm: **Đọc** đã được đánh dấu sẵn; chỉ đánh dấu **Chỉnh sửa**, **Lưu** hoặc **Xuất** khi bạn cần.

Công cụ nằm ngoài các quyền bạn đã đánh dấu sẽ không được cấp cho trợ lý, và nếu nó vẫn yêu cầu, TakeoffCraft sẽ từ chối và ghi lại trong nhật ký hoạt động. Tắt công tắc sẽ ngắt mọi kết nối cùng lúc; {{ui:Reset TakeoffCraft settings}} cũng tắt nó.

## Kết nối trợ lý

Trợ lý kết nối qua **CadCraft Studio** trên máy tính của bạn: Studio chạy một máy chủ nhỏ mà chỉ máy tính này truy cập được, được bảo vệ bằng một mã thông báo do nó tạo mỗi lần khởi động. Trong Studio, chọn {{ui:Connect an assistant}} rồi sao chép địa chỉ và mã thông báo vào trợ lý của bạn (Studio hiển thị chính xác các thiết lập cần dán). Đừng bao giờ chia sẻ mã thông báo.

:::note
Một thẻ trình duyệt không thể mở kết nối cho trợ lý: trong các ứng dụng trên trình duyệt, công tắc không có tác dụng cho đến khi bạn dùng CadCraft Studio trên máy tính của mình.
:::

## Bạn vẫn làm chủ

- **Mỗi thay đổi là một bước hoàn tác**, được gắn nhãn bằng tên của trợ lý (ví dụ "Trợ lý: …"). {{key:Mod+Z}} hoàn tác toàn bộ thay đổi gần nhất của trợ lý.
- **Bạn biết khi nào có trợ lý đang kết nối.** Một nút trên thanh ứng dụng hiển thị tên trợ lý khi nó đang kết nối; nhấp vào để xem nó được phép làm gì, hoặc để **Ngắt kết nối** nó.
- **Hoạt động.** {{ui:Settings}} › {{ui:TakeoffCraft}} › {{ui:Assistants}} › {{ui:Activity}} liệt kê mọi lệnh gọi: khi nào, công cụ nào, đã thực hiện hay bị từ chối. {{ui:Save the log}} giữ một bản sao.

## Trợ lý có thể yêu cầu gì

| Công cụ | Quyền | Chức năng |
|---|---|---|
| `app_info`, `sheets_list` | Đọc | Takeoff đang mở, các PDF và tờ của nó, tỷ lệ và dấu của từng tờ |
| `items_list` | Đọc | Các hạng mục với đơn vị, đơn giá và công thức định mức |
| `takeoff_quantities` | Đọc | Khối lượng theo hạng mục hoặc theo tờ; các dấu trên tờ không có tỷ lệ được liệt kê, không bao giờ tính là không |
| `takeoff_estimate` | Đọc | Dự toán có giá như TakeoffCraft tính, kèm tổng |
| `takeoff_export` | Xuất | Xuất CSV hoặc XLSX của chính TakeoffCraft |
| `items_add` | Chỉnh sửa | Thêm hạng mục với đơn vị, đơn giá và hao hụt |
| `marks_add` | Chỉnh sửa | Đo đoạn, diện tích và số đếm trên một tờ. Chiều dài và diện tích chỉ trên tờ có tỷ lệ, không bao giờ trên tờ không có tỷ lệ |
| `cad_sheets`, `cad_catalog`, `cad_count` | Đọc | Trên một DWG hoặc DXF bạn đã mở: các tờ và tỷ lệ của chúng, những gì có thể đếm (khối, lớp và loại, văn bản), và số đếm chính xác, như {{ui:CAD count}} tạo ra ([Đếm từ bản vẽ](topic:count-from-a-drawing)) |
| `cad_count_add` | Chỉnh sửa | Đếm trong bản vẽ và đặt một dấu đếm lên mỗi đối tượng tìm thấy, trong một bước; đếm lại chỉ thêm những gì mới |
| `cad_measure` | Chỉnh sửa | Đo một hạng mục chiều dài hoặc diện tích từ chính các đường, cung, đa tuyến và tô bóng của bản vẽ, như {{ui:Measure drawing}} làm ([Đo từ bản vẽ](topic:measure-from-a-drawing)); chỉ trên tờ có tỷ lệ |
| `usd_export` | Xuất | Các đoạn, diện tích và số đếm đã đo của một tờ có tỷ lệ, dưới dạng mô hình kiểm tra 3D bằng USD (`.usdz`, `.usda` hoặc `.usdc`), như {{ui:USD package (.usdz)}} trong khung nhìn kiểm tra 3D ghi ra ([Xuất khung nhìn kiểm tra 3D sang USD](topic:usd)) |

Với **Chỉnh sửa** được đánh dấu, trợ lý thêm hạng mục và dấu (mỗi lệnh gọi là một bước hoàn tác); nó không thể di chuyển, thay đổi hoặc xóa các dấu đã có sẵn.

Cùng khối lượng và dự toán vẫn có sẵn mà không cần mở TakeoffCraft: máy chủ MCP của CadCraft mở một tệp `.takeoff.json` trong thư mục bạn chỉ định (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), và `cadcraft info Job.takeoff.json` in chúng ra dòng lệnh. Nó cũng mở một DWG hoặc DXF thành takeoff mới trên các tờ của nó (tỷ lệ được lấy từ bản vẽ như TakeoffCraft làm), đếm và đo trên đó bằng cùng các công cụ `cad_*`, thêm hạng mục và lưu takeoff (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` đếm từ dòng lệnh.

## Nếu có gì không hoạt động

- **Trợ lý không thấy công cụ TakeoffCraft nào:** kiểm tra công tắc đã bật trong cửa sổ này chưa, và cửa sổ có đang mở trong Studio không.
- **"needs the export permission":** đánh dấu **Xuất** trong {{ui:Assistants}}, rồi hỏi lại.
- **Lỗi "401" hoặc "token":** mã thông báo đã thay đổi (Studio đã khởi động lại, hoặc {{ui:New token}}). Sao chép mã mới vào thiết lập của trợ lý.

## Xem thêm

- [Công thức cho trợ lý AI](common:assistants-recipes): các ví dụ chi tiết, mỗi ví dụ kèm các công cụ nó gọi.
