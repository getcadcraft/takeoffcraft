---
title: Định mức và công thức
summary: Thêm cấu kiện vào một hạng mục và để công thức biến chiều dài, diện tích hoặc số lượng của hạng mục thành thanh đứng, thanh đế, tấm ván, bê tông và phụ kiện, kèm một ví dụ về tường đã làm từng bước.
keywords: định mức, cấu kiện, công thức, thanh đứng, vách thạch cao, tấm, thanh đế, bê tông, yard khối, phụ kiện, công thức mẫu, điển hình, bộ phận hạng mục
from: 12891a21
---

Định mức của một hạng mục là danh sách các cấu kiện, mỗi cấu kiện có công thức khối lượng cùng tỷ lệ hao hụt và đơn giá riêng. Công thức dùng các tổng đo được của hạng mục, nên một lần bóc tách tường sẽ cho bạn thanh đứng, thanh đế và tấm cùng lúc, và chúng tự cập nhật khi bạn đo thêm.

## Biến bạn có thể dùng

| Loại hạng mục | Biến |
|---|---|
| Tuyến tính | `L` chiều dài, `H` chiều cao, `A` diện tích tường (L × H), `N` số đoạn |
| Diện tích | `A` diện tích, `P` chu vi (đường bao cộng phần khoét), `H` chiều sâu hoặc độ dày, `N` số vùng |
| Đếm | `N` số lượng |

Giá trị dùng đơn vị riêng của hạng mục: foot và foot vuông cho hạng mục LF và SF, mét và mét vuông cho hạng mục m và m². Với hạng mục SY, `A` tính bằng yard vuông, còn `P` và `H` vẫn tính bằng foot.

Công thức dùng `+ - * /` (hoặc × ÷), dấu ngoặc, số, và các hàm `ceil`, `floor`, `round`, `min`, `max` và `abs`. Quy tắc đầy đủ nằm ở [Ngôn ngữ công thức](topic:formulas).

## Ví dụ: tường trong nhà

Giả sử bạn đã bóc tách **Tường trong nhà loại A** như một hạng mục tuyến tính: 4 đoạn với tổng 120 LF, và {{ui:Chiều cao}} được đặt là `9'-0"`. Các giá trị **Đo được** là L = 120, N = 4, A = 1,080 (SF tường, một mặt).

1. Chọn hạng mục trong {{ui:Hạng mục}}.
2. Trong {{ui:Định mức}}, chọn {{ui:Thêm cấu kiện}}.
   Một cấu kiện tên "Cấu kiện" xuất hiện, với công thức `L` và kết quả bên dưới.
3. Gõ `Studs 16 in o.c.` vào {{ui:Tên}} và `EA` vào {{ui:Đơn vị}}.
4. Trong {{ui:Công thức khối lượng}}, gõ `ceil(L * 12 / 16) + N`.
   Kết quả cập nhật khi bạn gõ: "= 94 EA". Đó là một thanh đứng mỗi 16 inch dọc theo 120 foot (90), cộng thêm một thanh để khép mỗi đoạn trong 4 đoạn.
5. Chọn {{ui:Thêm cấu kiện}} lần nữa cho các thanh đế: đặt tên `Plates, top and bottom`, đơn vị `LF`, công thức `L * 2`. Kết quả: 240 LF.
6. Thêm tấm: tên `Gypsum board 4x8, both sides`, đơn vị `sheets`, công thức `ceil(A * 2 / 32)`. Kết quả: 68 sheets (2,160 SF tấm ÷ 32 SF mỗi tấm = 67.5, làm tròn lên).
7. Điền {{ui:Hao hụt %}}, {{ui:Vật liệu $}} và {{ui:Nhân công $}} cho từng cấu kiện.
   Mỗi cấu kiện có một dòng riêng dưới hạng mục trong {{ui:Khối lượng}}, được định giá như một hạng mục, và {{ui:Tổng công trình}} đã bao gồm nó.

Nếu chi phí tường nằm hết trong các cấu kiện, hãy để đơn giá vật liệu và nhân công của chính hạng mục là 0, nếu không nó sẽ bị tính hai lần.

:::tip
Hao hụt được áp dụng sau công thức và không được làm tròn: 68 tấm với hao hụt 10% là 74.8 tấm. Để đặt mua nguyên tấm, hãy đưa hao hụt vào trong công thức, như `ceil(A * 2 / 32 * 1.1)`, và để hao hụt của cấu kiện là 0.
:::

## Thêm công thức

| Nội dung | Hạng mục | Công thức |
|---|---|---|
| Thanh đứng cách nhau 24 in tâm đến tâm | Tuyến tính | `ceil(L / 2) + N` |
| Chăn cách nhiệt, SF | Tuyến tính có chiều cao | `A` |
| Sơn hai mặt, số gallon cho 350 SF | Tuyến tính có chiều cao | `ceil(A * 2 / 350)` |
| Thùng gạch 15 SF, thêm 10% | Diện tích | `ceil(A * 1.1 / 15)` |
| Gờ chân tường hoặc viền cạnh, LF | Diện tích | `P` |
| Bê tông, yard khối | Diện tích có chiều sâu | `A * H / 27` |
| Bê tông làm tròn lên theo 1/4 yard | Diện tích có chiều sâu | `ceil(A * H / 27 * 4) / 4` |
| Bản lề, ba cái mỗi cửa | Đếm | `N * 3` |
| Ít nhất một hộp, một hộp cho mỗi 12 | Đếm | `max(1, ceil(N / 12))` |

## Khi công thức sai

Dòng dưới công thức sẽ biến thành một thông báo lỗi, ví dụ `"X" is not a measured value here. Use L, H, A, N.` hoặc `A ")" is missing.` Khi đó cấu kiện không có số tiền, dòng của nó trong {{ui:Khối lượng}} hiện "Lỗi công thức: …", và tiêu đề ghi "Chưa hoàn tất: 1 lỗi công thức (không tính vào tổng)". Sửa công thức và các tổng sẽ được cập nhật.

Công thức chia cho 0 cũng là lỗi, với thông báo "Công thức chia cho 0.", ví dụ `A / H` trên một hạng mục không có chiều sâu.

## Giới hạn

- Công thức chạy trên **tổng** của hạng mục, không chạy từng đoạn. `ceil(L * 12 / 16) + N` thêm một thanh đứng cho mỗi đoạn; hiện chưa có làm tròn theo từng đoạn.
- Công thức chỉ dùng biến của chính hạng mục đó, không dùng biến của hạng mục khác.
- Tối đa 50 cấu kiện cho mỗi hạng mục, 500 ký tự cho mỗi công thức.

## Gỡ một cấu kiện

Chọn {{ui:Gỡ cấu kiện}} bên dưới nó. Bạn có thể hoàn tác bằng {{key:Mod+Z}}.
