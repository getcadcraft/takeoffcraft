---
title: Thư viện giá
summary: Giữ các hạng mục, đơn giá và lắp ráp trong một thư viện, nhập từ CSV hoặc từ một dự toán cũ, thêm hạng mục từ thư viện vào bất kỳ bóc tách nào, và cập nhật giá của bóc tách từ thư viện.
keywords: thư viện, gói ngành, bảng giá, sổ giá, cơ sở dữ liệu chi phí, nhập csv, đơn giá, lắp ráp, tái sử dụng, hạng mục mẫu, cập nhật giá, định giá lại
from: 37356c68
---

**Thư viện giá** giữ các hạng mục bạn dùng công trình này sang công trình khác: loại, đơn vị, chiều cao, hao hụt, đơn giá vật liệu và nhân công, cùng lắp ráp của chúng. Thư viện được lưu trong trình duyệt này, tách biệt khỏi mọi bóc tách, nên mọi bóc tách bạn mở ở đây đều có thể dùng nó.

Mở bằng {{ui:Thư viện}} ở đầu bảng {{ui:Hạng mục}}.

## Điền vào thư viện

- {{ui:Nhập CSV…}} đọc bảng tính được lưu dưới dạng CSV (xem các cột bên dưới). Các hạng mục có tên và loại đã có trong thư viện sẽ được thay thế; phần còn lại được thêm vào. Các dòng không đọc được sẽ bị bỏ qua, và thông báo cho biết dòng nào và vì sao.
- {{ui:Thêm hạng mục của bóc tách này}} sao chép mọi hạng mục của bóc tách đang mở vào thư viện, cùng đơn giá và lắp ráp (không gồm dấu).
- Tệp CSV dự toán mà TakeoffCraft xuất ra ([Xuất dự toán](topic:export-estimate)) được nhập nguyên như vậy: giá của công trình trước làm nền cho công trình kế tiếp.

- {{ui:Gói ngành…}} thêm các lắp ráp miễn phí cho một ngành, như vách thạch cao, điện hoặc bê tông, không kèm giá. Xem [Gói ngành](topic:trade-packs).

{{ui:Xuất CSV}} lưu thư viện thành CSV, để giữ một bản sao, chỉnh sửa trong bảng tính hoặc gửi cho đồng nghiệp. {{ui:Xóa}} làm rỗng thư viện (nhấp hai lần).

:::note
Thư viện nằm trong bộ nhớ của trình duyệt này. Trình duyệt khác, máy tính khác hoặc cửa sổ riêng tư có thư viện riêng (hoặc không có). Hãy xuất ra để chuyển nó.
:::

## Dùng trong bóc tách

- Chọn các hạng mục (gõ vào {{ui:Tìm trong thư viện}} để thu hẹp danh sách) và chọn {{ui:Thêm vào bóc tách}}. Chúng được thêm cùng lắp ráp trong một bước mà {{key:Mod+Z}} hoàn tác được. Một tên đã có trong bóc tách sẽ được thêm số, như `Carpet (2)`.
- {{ui:Cập nhật giá}} gán cho các hạng mục của bóc tách hao hụt và đơn giá của thư viện, với mọi hạng mục có tên và loại khớp với một hạng mục thư viện, và tương tự cho các thành phần lắp ráp cùng tên. Chiều cao, đơn vị và công thức giữ nguyên. Một {{key:Mod+Z}} sẽ đưa mọi giá cũ trở lại.

## Các cột CSV

Hàng đầu tiên đặt tên các cột, theo thứ tự bất kỳ; các cột khác bị bỏ qua.

| Cột | Nội dung |
|---|---|
| Item (or Name) | Tên hạng mục. Bắt buộc. |
| Type | Linear, Area hoặc Count (LF, SF và EA cũng được). Để trống thì đơn vị quyết định. |
| Unit | LF hoặc m; SF, SY hoặc m²; EA. Để trống: đơn vị thường dùng của loại. |
| Waste % | `10` hoặc `10%`. |
| Material per unit, Labor per unit | Đơn giá như `2.10` hoặc `$1,250`. |
| Height (or Depth) | `9'-0"`, `9`, hoặc `2.7` cho đơn vị mét. |
| Component, Formula | Một dòng có tên Component (hoặc loại `Component`) là một phần của lắp ráp của hạng mục ngay phía trên nó. Đơn vị, hao hụt và đơn giá của nó là riêng; công thức của nó dùng các ký tự của hạng mục, xem [Lắp ráp và công thức](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Dấu phẩy, dấu chấm phẩy hoặc tab giữa các cột đều được.
