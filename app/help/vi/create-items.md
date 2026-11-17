---
title: Tạo hạng mục bóc tách khối lượng
summary: Tạo hạng mục tuyến tính, diện tích và đếm, rồi đặt đơn vị, chiều cao hoặc chiều sâu, hao hụt, và đơn giá vật liệu và nhân công.
keywords: tổ, năng suất, quy mô tổ, tiền công, giờ, giờ công, ngày-tổ, giờ lao động, hạng mục, hạng mục mới, điều kiện, nhiều điều kiện, đo thêm, nhiều loại, phòng, tuyến tính, diện tích, đếm, đơn vị, chiều cao, chiều sâu, hao hụt, vật liệu, nhân công, đơn giá, màu, chi phí
from: 7fa5effc
---

Một **hạng mục** là một thứ bạn đo và định giá: một loại tường, một lớp hoàn thiện sàn, một trần, một cửa, một đèn chiếu sáng. Mỗi dấu bạn vẽ đều thuộc về một hạng mục. Các chương trình khác gọi chúng là điều kiện.

Mỗi hạng mục có một loại (và có thể nhận cả các loại dấu khác, xem [Một hạng mục, nhiều loại dấu](topic:create-items#one-item-several-kinds-of-marks)):

| Loại | Bạn vẽ | Báo cáo | Đơn vị |
|---|---|---|---|
| Tuyến tính | Các đoạn nối liền các điểm | Chiều dài, số đoạn, và diện tích tường khi có chiều cao | LF hoặc m |
| Diện tích | Đường bao khép kín, có phần khoét | Diện tích, chu vi, số diện tích | SF, SY, SQ, ac, ha hoặc m² |
| Đếm | Một cú nhấp cho mỗi thứ | Có bao nhiêu | EA |
| Khối lượng nhập tay | Không vẽ gì: bạn nhập khối lượng | Số bạn đã nhập (hoặc số lấy từ CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha hoặc m² |

## Khối lượng nhập tay (không có bản vẽ)

Một số thứ trong dự toán không bao giờ được vẽ: huy động thiết bị, giấy phép, dự phòng, gói thầu phụ trọn gói, và khối lượng đào đắp mà CivilCraft đã tính. Hãy tạo chúng thành **Khối lượng nhập tay**:

1. Chọn {{ui:Hạng mục mới}}, nhập tên, chọn {{ui:Khối lượng nhập tay (không có bản vẽ)}} và chọn {{ui:Thêm}}.
2. Trong trình soạn hạng mục, chọn {{ui:Đơn vị}} (LS cho trọn gói) và nhập {{ui:Khối lượng}}: `1`, `2.5` hoặc `1,250`.
3. Đặt hao hụt và đơn giá như với hạng mục khác. Công thức của định mức dùng `Q`, tức khối lượng, ví dụ `ceil(Q / 12)` chuyến xe tải.

Khối lượng nhập tay không có dấu nào và không bao giờ làm dự toán thiếu. Khi bóc tách có khu vực dự thầu, trình soạn cũng có {{ui:Khu vực dự thầu}}: khối lượng khi đó được tính vào khu vực đó, các phương án và tổng của nó, giống như một dấu ở đó. Khối lượng nhập từ ứng dụng khác sẽ ghi rõ nguồn gốc, xem [Đào đắp và cao độ điểm](topic:earthwork#cut-and-fill-from-civilcraft).

## Tạo một hạng mục

1. Trong bảng {{ui:Hạng mục}} bên phải, chọn {{ui:Hạng mục mới}}.
2. Nhập tên, ví dụ `Interior wall type A` hoặc `Carpet tile`.
3. Chọn loại: {{ui:Tuyến tính (chiều dài)}}, {{ui:Diện tích}} hoặc {{ui:Đếm}}.
4. Chọn {{ui:Thêm}} (hoặc nhấn {{key:Enter}}).
   Hạng mục xuất hiện trong danh sách với màu riêng, trở thành hạng mục bạn vẽ bằng, và trình soạn của nó mở bên dưới danh sách. Thanh trạng thái cho bạn biết nên chọn công cụ nào tiếp theo.

Nhấn {{key:Esc}} trong biểu mẫu để đóng mà không thêm hạng mục.

:::tip
Nếu bạn chọn công cụ đo trước, TakeoffCraft dùng hạng mục cuối cùng có đúng loại, hoặc mở biểu mẫu {{ui:Hạng mục mới}} với loại đó đã được chọn sẵn.
:::

## Chọn hạng mục bạn vẽ bằng

Nhấp một hạng mục trong danh sách. Nó trở thành hạng mục mà các dấu mới sẽ thuộc về, và các dấu của nó được tô sáng trên mọi tờ trong khi các hạng mục khác mờ đi. Nếu tờ đang mở không có dấu nào của nó, TakeoffCraft sẽ nhảy đến một tờ có. Nhấp lại hạng mục để ngừng tô sáng; nó vẫn là hạng mục bạn vẽ bằng.

Nhấp một dấu bằng công cụ {{ui:Chọn}} cũng làm hạng mục của dấu đó thành hạng mục hiện tại.

## Thiết lập hạng mục

Trình soạn hạng mục (**Hạng mục: (tên)**) có các trường sau. Mỗi trường được lưu khi bạn rời khỏi trường hoặc nhấn {{key:Enter}}, và mỗi thay đổi đều có thể hoàn tác.

| Trường | Tác dụng |
|---|---|
| {{ui:Tên}} | Hiển thị trong danh sách, các bảng và các tệp xuất. |
| {{ui:Nhập}} | Tuyến tính, Diện tích hoặc Đếm. Trường bị khóa khi hạng mục đã có dấu ("Hạng mục có dấu giữ nguyên loại của nó"). |
| {{ui:Màu}} | Màu của các dấu trên màn hình và trong PDF có đánh dấu. |
| {{ui:Đơn vị}} | Đơn vị báo cáo khối lượng: LF hoặc m cho tuyến tính; SF, SY, SQ, ac, ha hoặc m² cho diện tích; EA cho đếm. |
| {{ui:Đo thêm}} | Các loại dấu khác mà hạng mục nhận, mỗi loại có đơn vị riêng. Xem bên dưới. |
| {{ui:Chiều cao}} (tuyến tính) | Chiều cao tường. Khi đó hạng mục cũng báo cáo diện tích tường (chiều dài × chiều cao). Các đoạn lấy từ mô hình BimCraft mang theo cửa đi và cửa sổ: chúng được trừ một lần, và hạng mục ghi diện tích gộp, các lỗ mở và phần thuần. Bóc tách từ dự án BimCraft có chọn phương pháp đo sẽ được đo theo phương pháp đó tại đây (ghi chú nêu rõ phương pháp và nguồn, và ghi rằng chưa được kỹ sư dự toán kiểm tra); phương pháp không thể đổi trong TakeoffCraft. Gạch hoặc khối xây và vữa từ loại tường được đưa vào thành hai thành phần: số lượng cần đặt và thể tích vữa. |
| {{ui:Chiều sâu}} (diện tích) | Chiều sâu hoặc độ dày, dùng trong công thức định mức (ví dụ thể tích bê tông). |
| {{ui:Hao hụt %}} | Được cộng vào khối lượng trước khi định giá: 10 nghĩa là khối lượng × 1.10. |
| {{ui:Vật liệu $/LF}} | Chi phí vật liệu trên mỗi đơn vị. Nhãn theo đơn vị: $/SF, $/EA, v.v. |
| {{ui:Nhân công $/LF}} | Chi phí nhân công trên mỗi đơn vị. |
| {{ui:Số CSI}} | Số CSI MasterFormat, như `09 21 16` (hoặc chỉ phần, `09`). Trang tính By division của sổ tính nhóm chi phí theo số này. Các hạng mục từ [gói công việc](topic:trade-packs) đã có sẵn số này. |

Chiều cao và chiều sâu nhận feet và inch (`9'-0"`, `8' 6"`) hoặc feet thập phân (`9`) với đơn vị hệ inch, và mét (`2.7`, `2700 mm`) với đơn vị hệ mét. Đơn giá nhận số như `12.50` hoặc `$1,250`, tối đa bốn chữ số thập phân. Xem [Nhập chiều dài, đơn giá và phần trăm](topic:entry-formats).

Bên dưới các trường, **Đo được** hiển thị các tổng mà công thức của hạng mục có thể dùng, cùng với ký hiệu của chúng: Chiều dài (L), Số đoạn (N), Diện tích tường (A) cho tuyến tính; Diện tích (A), Chu vi (P), Số diện tích (N) cho diện tích; Số lượng (N) cho đếm.

## Một hạng mục, nhiều loại dấu

Một số thứ được đo bằng nhiều cách: một phòng có sàn (diện tích), một chân tường dọc theo các bức tường (chiều dài) và cửa (đếm). Thay vì ba hạng mục, hãy tạo một:

1. Tạo hạng mục với loại chính, như hạng mục diện tích `Room 101`.
2. Dưới {{ui:Đo thêm}} trong trình soạn, đánh dấu {{ui:Tuyến tính}}, {{ui:Đếm}} hoặc cả hai. Mỗi loại có một đơn vị bên cạnh.
3. Vẽ bằng bất kỳ công cụ nào có loại mà hạng mục nhận: khi `Room 101` là hiện tại, {{ui:Diện tích}} vẽ sàn, {{ui:Tuyến tính}} vẽ chân tường và {{ui:Đếm}} vẽ cửa. TakeoffCraft không hỏi hạng mục khác.

Danh sách hạng mục hiển thị mọi khối lượng (`50.00 SF + 2 EA`). Trong bảng khối lượng, hàng của hạng mục có khối lượng chính, và mỗi loại khác có một hàng riêng bên dưới, như **Room 101 (count)**, với hao hụt, vật liệu và nhân công riêng. Các tệp xuất, bảng theo tờ và chú giải của PDF có đánh dấu cũng liệt kê chúng theo cách đó.

Các thiết lập của loại chính thuộc về loại chính: chiều cao hoặc chiều sâu, độ dốc mái, phần trừ diện tích lỗ và hình dạng 3D chỉ áp dụng cho dấu của nó. Đoạn nền được vẽ cho một hạng mục diện tích sẽ được đo đơn giản theo mặt bằng và hiển thị phẳng trong 3D. Công thức định mức dùng tổng của loại chính.

Một loại chỉ có thể bỏ chọn khi hạng mục không còn dấu thuộc loại đó; hãy xóa chúng, hoặc chuyển chúng sang hạng mục khác dưới **Dấu đã chọn**, trước. Dấu có thể chuyển sang bất kỳ hạng mục nào nhận loại của chúng.

Ở dưới là {{ui:Định mức}}: các thành phần như thanh đứng hoặc ván, mỗi thành phần có công thức và đơn giá riêng. Xem [Định mức và công thức](topic:assemblies).

Ở cuối: {{ui:Đưa lên}} và {{ui:Đưa xuống}} thay đổi vị trí của hạng mục trong danh sách và trong các tệp xuất, còn {{ui:Xóa hạng mục}} xóa nó cùng với tất cả dấu của nó (sau khi hỏi; bạn có thể hoàn tác).

Hạng mục diện tích còn có **Độ dốc mái** (các mặt phẳng mái được đo theo mặt dốc: [Mái và độ dốc](topic:roofs-and-slopes)) và **Trừ diện tích lỗ** (dấu của chúng được trừ khỏi diện tích của hạng mục khác: [Đo diện tích](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Hạng mục tuyến tính có **Dốc** (Level, Rake, Hip hoặc valley) và, với rake và hip, **Độ dốc mái**.

## Đơn giá trong bảng

Bạn cũng có thể nhập trực tiếp {{ui:Hao hụt %}}, đơn giá vật liệu và nhân công vào bảng {{ui:Khối lượng}} ở cuối (tại {{ui:Theo hạng mục}}). Đó là cùng thiết lập như trong trình soạn.

## Cách định giá

Với mỗi hạng mục và mỗi thành phần định mức:

1. **Có hao hụt** = khối lượng × (1 + hao hụt %).
2. **Vật liệu** = có hao hụt × vật liệu trên mỗi đơn vị, làm tròn đến xu.
3. **Nhân công** = có hao hụt × nhân công trên mỗi đơn vị, làm tròn đến xu.
4. **Tổng** = vật liệu + nhân công.

{{ui:Tổng công trình}} cộng mọi hạng mục và mọi thành phần. Một hạng mục có thể mang đơn giá riêng và một định mức cùng lúc; cả hai đều được tính, nên hãy để đơn giá của hạng mục bằng 0 khi các thành phần đã mang chi phí.

## Nhân công theo tổ

Thay vì đơn giá nhân công trên mỗi đơn vị, nhân công của hạng mục có thể lấy từ một tổ: tổ làm được bao nhiêu mỗi giờ, có bao nhiêu người, và mỗi người nhận bao nhiêu. Dưới {{ui:Nhân công theo tổ}} trong trình soạn hạng mục, đánh dấu {{ui:Tính nhân công theo tổ}} và điền:

| Trường | Ví dụ |
|---|---|
| {{ui:Năng suất}} | `20` LF một giờ (theo đơn vị của hạng mục) cho cả tổ |
| {{ui:Quy mô tổ}} | `2` người |
| {{ui:Tiền công $/giờ mỗi người}} | `45` |

TakeoffCraft tính, từ khối lượng có hao hụt:

- **giờ-tổ** = khối lượng ÷ năng suất (110 LF ÷ 20 = 5.5),
- **giờ công** = giờ-tổ × quy mô tổ (11),
- **ngày-tổ** = giờ-tổ ÷ 8 (0.69),
- **nhân công** = giờ công × tiền công ($495.00).

Trình soạn hiển thị kết quả và đơn giá tương ứng ($4.50/LF). Đơn giá nhân công riêng của hạng mục khi đó chỉ đọc, trong trình soạn và trong bảng. Tiêu đề của bảng {{ui:Khối lượng}} thêm tổng giờ công và ngày-tổ của công trình. Các tệp xuất ghi giờ của từng tổ, và trong sổ tính, ô nhân công là một công thức theo tổ (`ROUND(F2/20*2*45,2)`). Bỏ đánh dấu ô để quay lại đơn giá trên mỗi đơn vị.

## Hạng mục mét

Chọn m (tuyến tính) hoặc m² (diện tích) làm đơn vị. Khối lượng, chiều cao và giá trị công thức khi đó tính bằng mét. Tỷ lệ tờ có thể là bất kỳ mức đặt sẵn hoặc hiệu chuẩn nào; đơn vị và tỷ lệ độc lập với nhau.

## Tiếp theo

- [Đo đoạn tuyến tính](topic:measure-linear)
- [Đo diện tích có phần khoét](topic:measure-areas)
- [Đếm bằng tay](topic:count-by-hand)
