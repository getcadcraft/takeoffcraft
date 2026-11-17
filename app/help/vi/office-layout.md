---
title: "Bố cục văn phòng: nhóm, tổng phụ, tiêu đề và đầu cột theo Chính sách mặc định của bạn"
summary: Bật tiện ích Chính sách mặc định, để dự toán, khối lượng theo tờ, các tệp xuất và những gì trợ lý đọc đều theo bố cục bảng thống kê của văn phòng bạn, cùng bố cục mà bảng thống kê BimCraft dùng.
keywords: tiêu chuẩn văn phòng, bố cục văn phòng, chính sách mặc định, tiện ích bổ sung, bố cục bảng thống kê, nhóm theo loại, nhóm theo tờ, tổng phụ, tổng, tiêu đề, đầu cột, chữ hoa, bố cục dự toán, bố cục xuất, cài đặt
from: cfd2f30a
---

## Bạn sẽ làm gì

Để TakeoffCraft trình bày các bảng theo cách văn phòng bạn phát hành, mà không phải thiết lập lại trong từng bóc tách. Bố cục được đặt một lần, trong Chính sách mặc định, và có hiệu lực với mọi ứng dụng trên máy tính này: những gì bạn đặt trong BimCraft hoặc CadCraft là những gì TakeoffCraft dùng, và ngược lại.

## Các bước

1. Mở **Cài đặt › Tiện ích bổ sung** và bật **Chính sách mặc định**. Mặc định nó tắt; khi tắt, hoặc khi chưa đặt gì, TakeoffCraft hoạt động y như trước.
2. Mở **Cài đặt › Chung › Chính sách mặc định** và tìm **Bố cục bảng thống kê (tiêu chuẩn văn phòng)**:

| Chính sách | TakeoffCraft làm gì |
|---|---|
| Nhóm bảng thống kê theo | **Loại** nhóm dự toán theo loại hạng mục (Linear, Area, Count, Typed quantity). **Tầng** nhóm khối lượng theo tờ theo tầng của tờ. **Phòng** và **Không nhóm** đều không nhóm cả hai |
| Tổng phụ trong bảng thống kê | **Một tổng phụ dưới mỗi nhóm và một tổng** thêm tổng phụ dưới mỗi nhóm. Tổng toàn công trình luôn có |
| Tiêu đề bảng thống kê | Một dòng phía trên bảng, ví dụ `{schedule}: office layout` |
| Đầu cột | Như đã viết, IN HOA hoặc Viết Hoa Chữ Đầu |

3. Đóng Cài đặt. Các bảng cập nhật ngay.

## Những gì áp dụng bố cục

- **Khối lượng › Theo hạng mục** và **Theo tờ**: tiêu đề nhóm, một tổng phụ dưới mỗi nhóm, tiêu đề và kiểu viết đầu cột. Một dòng dưới tiêu đề cho biết phần nào trong tiêu chuẩn văn phòng đã được đặt. Các dòng vẫn là những dòng đó: bạn vẫn nhập đơn giá và hao hụt trong đó, và nhấp vào số liệu để chọn các dấu của chúng. Cấu kiện hoặc điều kiện thứ hai vẫn nằm dưới hạng mục của nó.
- **Dự toán đã xuất** (CSV và XLSX): cùng các nhóm và tổng phụ. Trong sổ tính, một tổng phụ là công thức `SUBTOTAL` trên nhóm của nó, và tổng toàn công trình cũng vậy, nên không có gì bị đếm hai lần.
- **Những gì trợ lý đọc**: `takeoff_estimate` và `takeoff_quantities` (theo tờ) thêm một khối `layout` với các nhóm, các dòng và tổng phụ, và cho biết phần nào do văn phòng đặt.

## Những gì giữ nguyên

- **Khối lượng › Theo khu vực** tự khai báo nhóm của nó (theo khu vực dự thầu) và giữ nguyên.
- **Tổng toàn công trình**, các khoản đánh dấu của bảng tóm tắt dự thầu và các phương án thay thế không được nhóm lại.
- Một nhóm mà bảng không có cột tương ứng sẽ bị bỏ qua: dự toán không có tầng, khối lượng theo tờ không có loại.

## Lưu ý

- Các chính sách được lưu trong trình duyệt này cho mọi ứng dụng CadCraft và đi kèm tệp Chính sách mặc định (**Lưu vào tệp** / **Tải từ tệp** ở cùng chỗ đó), nên một văn phòng có thể chia sẻ một tệp.
- Dự toán xuất ra CSV có nhóm chỉ dùng để đọc. Để đưa dự toán vào lại như một thư viện giá, hãy xuất khi không đặt nhóm nào.
- Phía BimCraft của cùng tiêu chuẩn gồm: bảng thống kê, thiết lập và các tệp xuất. TakeoffCraft chưa có chính sách riêng, nên không có mục Chính sách mặc định dưới Cài đặt › TakeoffCraft.
