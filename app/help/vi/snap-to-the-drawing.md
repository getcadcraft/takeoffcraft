---
title: Bắt điểm vào các đường của bản vẽ
summary: Các điểm tự nhảy vào chính các đường vector của PDF khi bạn đo hoặc hiệu chuẩn: điểm cuối, trung điểm, giao điểm hoặc vị trí bất kỳ trên đường, kèm một ký hiệu cho biết loại điểm.
keywords: bắt điểm, osnap, bắt điểm đối tượng, điểm cuối, trung điểm, giao điểm, gần nhất, vector, đường nét, đường, chính xác, f3, nam châm, góc
from: 41d29e9b
---

Phần lớn bộ bản vẽ mặt bằng là PDF vector: tường và cạnh là đường thật, không phải điểm ảnh. Khi bạn đo, TakeoffCraft bắt các cú nhấp chuột của bạn vào những đường đó, nên một đoạn bắt đầu đúng ở góc tường và phép hiệu chuẩn đọc đúng kích thước mà người vẽ đã ghi, chứ không phải điểm ảnh bạn chạm vào.

Bắt điểm được bật sẵn khi bạn bắt đầu. Bật và tắt bằng {{ui:Bắt điểm}} trên thanh trạng thái hoặc {{key:F3}}; cài đặt được giữ trong trình duyệt này (cũng nằm trong [Cài đặt](topic:settings)).

## Điểm bắt

Khi con trỏ đến gần một đường trong khoảng 10 điểm ảnh trên màn hình, một ký hiệu sẽ hiện vị trí điểm sẽ được đặt, kèm tên của nó:

| Ký hiệu | Tên | Vị trí |
|---|---|---|
| Hình vuông | **Điểm cuối** | Điểm cuối của một đường, hoặc góc nơi các đường gặp nhau. Hai đầu của một đường cong được tính; các điểm dọc theo nó thì không. |
| Tam giác | **Trung điểm** | Giữa của một đường thẳng. |
| Dấu chéo | **Giao điểm** | Nơi hai đường cắt nhau, hoặc nơi một đường kết thúc trên đường khác. |
| Hình đồng hồ cát | **Trên đường** | Điểm gần nhất trên một đường, khi không có điểm cuối, trung điểm hay giao điểm nào ở gần. |

Điểm cuối, trung điểm hoặc giao điểm gần nhất được ưu tiên. Chỉ khi không có điểm nào ở gần thì điểm mới nằm trên chính đường. Hãy phóng to để chọn giữa các điểm nằm sát nhau: 10 điểm ảnh là điểm ảnh màn hình, nên khi phóng to hơn, chúng che phủ ít diện tích tờ bản vẽ hơn.

## Nơi hoạt động

Bắt điểm hoạt động trong {{ui:Tuyến tính}}, {{ui:Diện tích}}, {{ui:Vòng tròn}}, {{ui:Lỗ khoét}}, {{ui:Hiệu chuẩn}} và {{ui:Kiểm tra}}, và khi bạn kéo góc của một dấu đã chọn. Nó cũng đặt các điểm trên cung. {{ui:Đếm}}, {{ui:Đếm tự động}} và dán thì không bắt điểm.

Điểm đã bắt được ưu tiên hơn bắt góc 45° của {{key:Shift}}: để vẽ ở 45° tránh xa các đường, hãy tắt Bắt điểm bằng {{key:F3}} trước.

:::tip
Hiệu chuẩn khi Bắt điểm đang bật. Nhấp gần hai đầu của một đường kích thước hoặc một bức tường mà bạn biết số đo: cả hai điểm đều nằm chính xác trên bản vẽ, và tỷ lệ ra chính xác (khi đó thanh trạng thái nêu tên tỷ lệ đặt sẵn mà nó khớp).
:::

## Tờ không bắt điểm được

- **Tờ quét** là ảnh, không có đường để bắt. Thanh trạng thái hiện "Tờ này không có đường để bắt điểm (trang quét là một ảnh)." và các điểm sẽ nằm đúng chỗ bạn nhấp.
- **Bản vẽ rất lớn**: bắt điểm đọc tối đa 400,000 đoạn thẳng trên mỗi tờ. Với tờ có nhiều hơn, ứng dụng sẽ báo và chỉ bắt vào các đoạn đầu tiên.
- **Văn bản** không được bắt điểm, trừ khi PDF vẽ các chữ như đường (một số máy vẽ làm vậy).

Các đường của tờ được đọc ở chế độ nền ngay lần đầu bạn mở tờ đó; với tờ lớn, các ký hiệu có thể mất một lúc mới hiện.
