---
title: Vấn đề, bản sửa đổi và nhật ký thay đổi bản vẽ
summary: Giữ một lịch sử vấn đề chung với mô hình của kiến trúc sư: đọc các vấn đề vào, ghi chỉ dẫn công trường, bản vẽ thi công xưởng và mô hình liên kết theo một vấn đề, và đọc nhật ký thay đổi bản vẽ.
keywords: vấn đề, sửa đổi, bản sửa đổi, nhật ký thay đổi, nhật ký thay đổi bản vẽ, sổ đăng ký bản vẽ, chỉ dẫn công trường, bản vẽ thi công xưởng, mô hình liên kết, đấu thầu, thi công, lịch sử vấn đề, bảng tiên lượng, bóc tách
from: 8d8f6e68
---

## Bạn sẽ làm gì

Làm việc với cùng lịch sử vấn đề như các thành viên khác trong nhóm. Xem những tờ nào đã được phát hành ở bản sửa đổi nào, và ghi những việc xảy ra trên công trường vào đúng vấn đề mà chúng thuộc về.

## Các bước

1. Mở **Vấn đề và bản sửa đổi**.
2. Chọn **Đọc lịch sử vấn đề** và chọn tệp `.issues.json` đã lưu từ BimCraft hoặc ứng dụng khác. Các vấn đề và bản ghi trong tệp sẽ được thêm vào của bạn. Không có gì bị thay thế.
3. Chọn **Thêm bản ghi** cho một chỉ dẫn công trường, một bản vẽ thi công xưởng, một bộ đánh dấu, một mô hình liên kết hoặc một ghi chú. Chọn vấn đề mà nó thuộc về và trạng thái của nó. Tệp bạn chọn được ghi lại theo tên, kích thước và SHA-256; tệp vẫn ở nguyên vị trí.
4. **Nhật ký thay đổi bản vẽ** hiển thị một hàng cho mỗi tờ và một cột cho mỗi vấn đề. Bản sửa đổi trong ngoặc là bản đã được phát hành lại mà không thay đổi.
5. **Tải xuống nhật ký thay đổi (CSV)** lưu các vấn đề, bảng tờ và các bản ghi. **Lưu lịch sử vấn đề** ghi ra một tệp mà các ứng dụng khác đọc được.

## Lưu ý

- **Ghi nhận vấn đề** phát hành các tờ bạn đã đo, ví dụ với bảng tiên lượng. Sau đó **Thay đổi từ** cho biết những tờ nào đã được đo lại sau vấn đề đó.
- Lịch sử được lưu trong tệp bóc tách. Mỗi thay đổi là một bước Hoàn tác.
- Đọc cùng một tệp hai lần sẽ không thêm gì hai lần. Khi hai bản sao cùng chứa một bản ghi, bản mới hơn được giữ lại.
