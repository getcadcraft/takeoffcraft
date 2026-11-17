---
title: Mái và độ dốc
summary: Đặt độ dốc cho một khu vực để đo bề mặt mái từ mặt bằng, và đo các cạnh xiên, sống mái và rãnh mái dọc theo độ dốc của chúng.
keywords: mái, độ dốc, dốc, hệ số dốc, độ cao, chiều ngang, 6:12, cạnh xiên, sống mái, rãnh mái, đầu hồi, lợp mái, ô vuông, diện tích nghiêng, chiều dài thật, diện tích mặt bằng
from: 38225b60
---

Mặt bằng mái thể hiện mỗi mặt phẳng mái ở dạng phẳng, nhìn từ trên xuống. Bản thân mái lớn hơn: một mặt phẳng ở 6:12 có bề mặt lớn hơn khoảng 12% so với mặt bằng của nó, và các cạnh nghiêng của nó dài hơn vẻ ngoài. Đặt độ dốc cho hạng mục, và TakeoffCraft sẽ đo dọc theo mặt nghiêng.

## Nhập độ dốc

Độ dốc là độ cao tăng trên mỗi 12 đơn vị chiều ngang, như trên các ký hiệu độ dốc của mặt bằng mái. Nhập dạng `6:12`, `6/12` hoặc chỉ `6`; các dạng khác cũng được (`4:10` là 4.8:12). Góc được nhập kèm ký hiệu độ: `26.57°`. Để trống hoặc nhập `0` nghĩa là mái phẳng.

## Khu vực mái

1. Tạo một hạng mục diện tích cho lớp lợp, hoặc mở hạng mục bạn đã có.
2. Trong phần cài đặt của nó, nhập **Độ dốc**, ví dụ `6:12`.
3. Vẽ đường bao của từng mặt phẳng mái trên mặt bằng bằng {{ui:Diện tích}}, như thường lệ.

Mỗi mặt phẳng được tính bằng diện tích mặt bằng của nó nhân với hệ số dốc: √(1 + (độ cao ÷ 12)²), tức 1.118 ở 6:12 và 1.414 ở 12:12. Chọn một mặt phẳng để xem **Diện tích** (theo mặt nghiêng), **Diện tích mặt bằng** và **Hệ số dốc** của nó.

Mặt phẳng có độ dốc khác: chọn mặt phẳng và nhập **Độ dốc** riêng của nó trong bảng của mặt phẳng đó. Để trống để dùng độ dốc của hạng mục. Chế độ xem kiểm tra 3D, các cấu kiện (`A` là diện tích nghiêng), chi phí và bản xuất đều dùng diện tích nghiêng. Các phần trừ diện tích trên mặt phẳng có độ dốc, như cửa trời, cũng được trừ theo cùng độ dốc đó.

Chu vi (`P`) vẫn là chu vi mặt bằng. Đo mái hiên, cạnh xiên, sống mái và rãnh mái dưới dạng các đoạn (bên dưới).

## Cạnh xiên, sống mái và rãnh mái

1. Tạo một hạng mục tuyến tính, như "Cạnh xiên" hoặc "Sống mái".
2. Đặt **Độ dốc** của nó thành **Cạnh xiên** (cạnh nghiêng, như của đầu hồi) hoặc **Sống mái hoặc rãnh** (đường nơi hai mặt phẳng gặp nhau), và nhập **Độ dốc** của các mặt phẳng mái.
3. Vẽ các đoạn trên mặt bằng bằng {{ui:Tuyến tính}}.

Một cạnh xiên được tính bằng chiều dài mặt bằng của nó nhân với hệ số dốc. Sống mái hoặc rãnh chạy ở góc 45° qua mặt bằng giữa hai mặt phẳng cùng độ dốc, nên chiều dài thật của nó bằng chiều dài mặt bằng nhân với √(1 + (độ cao ÷ 12)² ÷ 2): 1.061 ở 6:12, 1.225 ở 12:12.

Một đoạn có thể kết hợp cả hai loại. Chọn nó: mỗi phân đoạn trong bảng của nó có một danh sách độ dốc — **Theo hạng mục** (cài đặt của hạng mục), **Ngang**, **Cạnh xiên** hoặc **Sống mái hoặc rãnh** — và chiều dài dọc theo độ dốc. **Độ dốc** riêng của đoạn trong bảng thay thế độ dốc của hạng mục cho mọi phân đoạn của nó. Bảng cũng hiển thị **Chiều dài mặt bằng**, và các nhãn trên tờ hiển thị chiều dài dọc theo độ dốc.

Các phần trừ vẫn hoạt động: một phân đoạn bị trừ không tính gì, dù có dốc hay không.

:::note
Sống mái và rãnh giả định cả hai mặt phẳng có cùng độ dốc. Với các mặt phẳng có độ dốc khác nhau, hãy đo sống mái theo chiều dài thật ở nơi khác, hoặc vẽ nó như một cạnh xiên với độ dốc tương đương.
:::
