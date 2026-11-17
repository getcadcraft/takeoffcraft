---
title: Nhập chiều dài, đơn giá và phần trăm
summary: Những gì bạn có thể nhập cho khoảng cách, chiều cao, đơn giá tiền và phần trăm hao hụt, kèm ví dụ và thông báo cho dữ liệu TakeoffCraft không đọc được.
keywords: nhập liệu, định dạng, feet inch, phân số, feet thập phân, hệ mét, mét, milimét, đơn giá, tiền, đô la, phần trăm, hao hụt, gõ
from: 215bbf4d
---

## Chiều dài

Dùng cho **Khoảng cách thực** trong {{ui:Hiệu chuẩn}}, và cho {{ui:Chiều cao}} và {{ui:Chiều sâu}} trong trình chỉnh sửa hạng mục.

| Bạn nhập | Nghĩa là |
|---|---|
| `24'-0"` | 24 feet |
| `24'-6 1/2"` | 24 feet 6½ inch |
| `12' 6 1/2"` | 12 feet 6½ inch (khoảng trắng thay cho dấu gạch ngang) |
| `12'-6-1/2"` | 12 feet 6½ inch (dấu gạch ngang giữa các phần) |
| `24'` | 24 feet |
| `30"` | 30 inch |
| `6 1/2"` | 6½ inch |
| `3/4"` | ¾ inch |
| `24 ft 6 in` | 24 feet 6 inch (cũng nhận `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 theo đơn vị mặc định (xem bên dưới) |
| `24.5'` | 24.5 feet |
| `7.5 m` | 7.5 mét |
| `750 cm` | 750 xentimét |
| `7500 mm` | 7,500 milimét |

- Số không kèm đơn vị được hiểu là **feet** khi hiệu chuẩn và với hạng mục theo LF, SF hoặc SY, và là **mét** với hạng mục theo m hoặc m².
- Dấu nháy cong và dấu prime từ trình soạn thảo (′ ″ ’ ”) hoạt động như `'` và `"`. Hai dấu nháy đơn `''` được tính là `"`.
- Dấu phẩy bị bỏ qua: `1,200 mm` là 1200 mm.
- Phân số cần số nguyên ở cả hai bên: `6 1/2"` được, `6.5 1/2"` thì không.
- Khoảng cách bằng không hoặc âm sẽ bị từ chối.

Thông báo:

- "Nhập khoảng cách, ví dụ 24'-0" hoặc 7.5 m." (ô trống)
- "Nhập khoảng cách lớn hơn không."
- "Dùng feet và inch (24'-6 1/2"), feet thập phân, m, cm hoặc mm." (đơn vị không xác định)
- "Không đọc được khoảng cách đó. Thử 24'-6 1/2" hoặc 24.5."

Để xóa chiều cao hoặc chiều sâu của hạng mục, hãy làm trống ô nhập.

### Phép tính

Mọi ô chiều dài, và ô nhập khi bạn vẽ, cũng nhận phép tính với `+`, `-`, `*`, `/` và dấu ngoặc:
`4+7/16` (4.4375 inch theo đơn vị mặc định), `12'6" + 3/4"`, `(24'-0")/3` (8 feet), `2*450mm`.

- Dấu gạch ngang viết trong chiều dài vẫn là một phần của nó: `24'-6"` là 24 feet 6 inch và `6-1/2` là 6½. Đặt khoảng trắng quanh dấu gạch ngang để trừ: `24' - 6"` là 23'-6".
- Số không kèm đơn vị nhân hoặc chia chiều dài như một con số; khi cộng vào một chiều dài thì nó theo đơn vị mặc định.
- `abs`, `round`, `ceil` và `floor` cũng dùng được. Phép tính không đọc được sẽ bị từ chối, kèm vị trí bị lỗi.

## Cách hiển thị chiều dài

Chiều dài hiển thị theo feet, inch và phần mười sáu inch: `12'-6 1/2"`, `0'-0 3/4"`. Giá trị được làm tròn đến 1/16 inch gần nhất khi hiển thị; bản thân khối lượng không bị làm tròn. Giá trị thập phân hiển thị với hai chữ số thập phân và dấu phân cách hàng nghìn, như `1,234.50 LF`.

## Đơn giá (vật liệu và nhân công trên mỗi đơn vị)

| Bạn nhập | Nghĩa là |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (tối đa bốn chữ số thập phân; số dư sẽ được làm tròn) |
| (trống) | $0 |

Thông báo: "Nhập số tiền như 12.50." hoặc "Số tiền đó quá lớn." Đơn giá âm không được chấp nhận.

Các số tiền thành phần (vật liệu, nhân công, tổng) được tính đến từng xu: khối lượng kể cả hao hụt × đơn giá, làm tròn nửa ra xa số không, giống hệt `ROUND(x, 2)` của bảng tính.

## Phần trăm hao hụt

| Bạn nhập | Nghĩa là |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (trống) | 0% |

Tối đa hai chữ số thập phân, từ 0% đến 1000%. Thông báo: "Nhập phần trăm như 10 hoặc 7.5." hoặc "Không cho phép hao hụt trên 1000%."

## Tên và đơn vị

- Tên hạng mục và cấu kiện: tối đa 200 ký tự.
- {{ui:Đơn vị}} của cấu kiện: mọi văn bản tối đa 20 ký tự, như `EA`, `sheets`, `CY`, `gal`. Đây chỉ là nhãn; TakeoffCraft không quy đổi nó.

## Công thức

Công thức định mức có quy tắc riêng: xem [Ngôn ngữ công thức](topic:formulas).
