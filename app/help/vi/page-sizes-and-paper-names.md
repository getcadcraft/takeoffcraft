---
title: Khổ trang và tên khổ giấy
summary: Xem kích thước của từng tờ theo milimét và inch cùng tên khổ giấy (dãy A, dãy B và dãy C, ANSI, ARCH), và nhóm một bộ hỗn hợp theo kích thước để tìm các tờ lạc lõng.
keywords: khổ trang, khổ giấy, tên khổ giấy, a0, a1, a2, a3, a4, dãy b, dãy c, ansi, arch, kiến trúc, mm, inch, kích thước tùy chỉnh, theo kích thước, kích thước lạc lõng, bộ hỗn hợp, tỷ lệ, bộ mặt bằng, mediabox, xoay
from: 9c061c07
---

Tỷ lệ chỉ có ý nghĩa khi đúng khổ giấy. {{ui:TakeoffCraft}} đọc kích thước của từng tờ PDF và gọi tên khổ giấy, để bạn thấy được một tờ đã được in sai khổ trước khi tin vào một phép đo trên tờ đó.

## Bạn sẽ làm gì

Xem kích thước của tờ đang mở, rồi nhóm cả bộ theo kích thước.

## Các bước

1. Mở bản vẽ ({{ui:Open plans}}).
2. Thanh tờ phía trên bản vẽ hiển thị tên khổ giấy và kích thước của tờ đang mở, ví dụ "A1 · 594 × 841 mm".
3. Mỗi hàng trong danh sách {{ui:Sheets}} có một dòng kích thước dưới tên tờ.
4. Chọn {{ui:By size}} trong tiêu đề {{ui:Sheets}}. Danh sách gom các tờ dưới một tiêu đề cho mỗi kích thước, nhóm lớn nhất đứng trước, và đánh dấu kích thước chỉ có vài tờ là một trường hợp lạc lõng.
5. Chọn {{ui:By size}} lần nữa để quay lại thứ tự gốc của bộ bản vẽ.

Tờ DWG hoặc DXF không có khổ giấy, nên không hiển thị kích thước cho chúng.

## Cách chọn tên

- Kích thước lấy từ hộp của trang trong PDF, đã áp dụng góc xoay.
- Các tên là dãy A và dãy B (ISO 216), dãy C (ISO 269), ANSI từ A đến E và ARCH từ A đến E.
- Trang sai khác trong vòng 2 mm so với một kích thước có tên sẽ nhận tên đó. Mọi trang khác được gọi là tùy chỉnh, kèm kích thước có tên gần nhất và độ sai lệch.

## Trong bảng dự toán

Sổ tính dự toán có một bảng tính {{ui:Page sizes}} với số lượng tờ của mỗi kích thước.

:::note
Các giá trị inch của ANSI và ARCH được nhập từ các bảng đã xuất bản và chưa được đối chiếu với tiêu chuẩn in.
:::
