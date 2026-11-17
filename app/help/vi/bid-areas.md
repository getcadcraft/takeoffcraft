---
title: Khu vực dự thầu
summary: Gắn nhãn dấu theo tòa nhà, tầng hoặc giai đoạn, bóc tách vào từng khu vực một, và đọc khối lượng cùng chi phí của từng khu vực.
keywords: phương án cộng thêm, phương án trừ bớt, dự thầu cơ bản, phương án, khu vực dự thầu, khu vực, tòa nhà, tầng, cốt, giai đoạn, phân khu, tầng điển hình, tổng phụ, theo khu vực
from: 64f3d41c
---

Khu vực dự thầu là một phần của công trình mà bạn định giá riêng: một tòa nhà, một tầng, một giai đoạn, một cánh. Mỗi dấu chỉ có thể thuộc một khu vực dự thầu. Khối lượng và dự toán khi đó có thể được đọc theo từng khu vực, cùng một tổng phụ cho mỗi khu vực, trong khi tổng công trình vẫn là tổng của tất cả.

## Tạo một khu vực dự thầu

1. Ở đầu bảng {{ui:Hạng mục}}, mở danh sách {{ui:Khu vực dự thầu}}.
2. Chọn **Khu vực dự thầu mới…**, gõ một tên như "Tòa nhà A" hoặc "Tầng 2", rồi chọn **Tạo**.
   Khu vực mới trở thành khu vực hiện hành. Thanh trạng thái ghi "Dấu mới sẽ vào (tên). Dấu ở các khu vực khác bị làm mờ."

## Bóc tách vào một khu vực

Khi một khu vực dự thầu được chọn trong danh sách, mọi dấu mới đều vào đó: đoạn, diện tích, vòng tròn, dấu đếm, các dấu mà {{ui:Đếm tự động}} thêm vào, và những gì bạn dán. Dấu ở các khu vực khác, và dấu không thuộc khu vực nào, sẽ bị làm mờ trên tờ để bạn thấy cái nào thuộc về đâu.

Chọn **Không có khu vực dự thầu** trong danh sách để bóc tách mà không gắn khu vực; khi đó không có gì bị làm mờ.

:::tip
Các tầng điển hình: bóc tách Tầng 2, chọn các dấu của nó ({{key:Mod+A}} trên tờ), sao chép, chọn Tầng 3 trong danh sách rồi dán. Các bản sao sẽ vào Tầng 3. Khi các tầng giống nhau và bạn không cần tách riêng, một [nhóm tầng điển hình](topic:typical-groups) sẽ đếm một tầng nhiều lần.
:::

## Chuyển dấu sang khu vực khác

Chọn một dấu hoặc nhiều dấu ({{key:Shift}} + nhấn chuột, hoặc {{key:Mod+A}}). Trong **Dấu đã chọn** (hoặc **Các dấu đã chọn**), chọn khu vực trong ô {{ui:Khu vực dự thầu}}. Thanh trạng thái ghi "Đã chuyển 3 dấu sang Tầng 2." Đây là một bước hoàn tác.

## Đổi tên, sắp xếp lại hoặc xóa

Chọn **Quản lý khu vực dự thầu…** trong danh sách. Gõ đè lên một tên để đổi tên, dùng mũi tên để đổi thứ tự (các bảng và sổ tính theo thứ tự này), hoặc xóa một khu vực bằng biểu tượng thùng rác. Xóa một khu vực dự thầu sẽ giữ lại các dấu của nó: khi đó các dấu đó không thuộc khu vực nào. {{key:Mod+Z}} hoàn tác từng thay đổi.

## Đọc khối lượng theo khu vực

Trong bảng {{ui:Khối lượng}}, chọn {{ui:Theo khu vực}} (nút này hiện ra khi việc bóc tách đã có khu vực dự thầu). Mỗi khu vực liệt kê các hạng mục nó chứa, cùng số lượng, đơn vị và tổng, rồi đến một dòng tổng phụ. Dấu không thuộc khu vực nào xếp cuối, ghi là **Không có khu vực dự thầu**. Nhấn vào một dòng hạng mục để làm nổi bật hạng mục và đặt khu vực đó làm khu vực hiện hành.

Định mức được tính cho từng khu vực từ tổng riêng của khu vực đó. Một công thức làm tròn lên, như `ceil(L / 4)`, có thể cho tổng các khu vực cộng lại hơi nhiều hơn so với toàn công trình, như sẽ xảy ra khi báo giá theo từng khu vực.

## Phương án: dự thầu cơ bản cộng thêm và trừ bớt

Một khu vực dự thầu có thể là một **phương án**: phần việc mà chủ đầu tư có thể thêm vào hồ sơ thầu, hoặc bớt khỏi đó. Trong **Quản lý khu vực dự thầu…**, mỗi khu vực có một danh sách bên cạnh tên:

| Lựa chọn | Tác dụng |
|---|---|
| {{ui:Dự thầu cơ bản}} | Nằm trong hồ sơ thầu, như bình thường. |
| {{ui:Phương án cộng thêm}} | Được định giá riêng và **không nằm trong dự thầu cơ bản**: nâng cấp thảm, thêm một mái che. |
| {{ui:Phương án trừ bớt}} | Nằm trong dự thầu cơ bản, và được đưa ra như một khoản khấu trừ: "bỏ mái che". |

Bóc tách phần việc của một phương án vào khu vực dự thầu của nó như với bất kỳ khu vực nào khác. Khi việc bóc tách đã có phương án:

- Tiêu đề bảng {{ui:Khối lượng}} ghi **Dự thầu cơ bản** thay vì Tổng công trình: toàn bộ bóc tách không gồm các phương án cộng thêm.
- {{ui:Theo khu vực}} kết thúc bằng dự thầu cơ bản và một dòng cho mỗi phương án: **+$300.00** cho một phương án cộng thêm, **−$1,050.00** cho một phương án trừ bớt.
- Một phương án chỉ định giá các hạng mục có dấu trong nó, cùng định mức của chúng, nên phần định mức của một hạng mục khác không bị lẫn vào.

Trong các tệp xuất, CSV kết thúc bằng dự thầu cơ bản và các phương án, còn sổ tính có thêm một trang tính **Phương án**: dự thầu cơ bản, các hạng mục của từng phương án và phần thay đổi của nó, cùng dự thầu cơ bản không tính mọi phương án cộng thêm.

## Trong tệp xuất

{{ui:XLSX}} thêm một trang tính **Theo khu vực dự thầu**: các hạng mục và cấu kiện của từng khu vực với số lượng, số lượng có hao hụt, vật liệu, nhân công và tổng, một tổng phụ cho mỗi khu vực (một công thức `SUM`), và **Tất cả khu vực dự thầu** ở cuối. Trang tính **Dấu** có thêm một cột **Khu vực dự thầu**. Việc bóc tách không có khu vực dự thầu xuất như trước. Xem [Các cột xuất](topic:export-columns).

Các khu vực dự thầu được lưu trong tệp dự án cùng với các dấu.
