---
title: Đo diện tích với lỗ khoét
summary: Vẽ đường bao sàn, trần và bản, khoét lỗ trong đó, thêm cạnh cong, vòng tròn và lỗ khoét tròn, và đọc diện tích cùng chu vi.
keywords: lấp phòng, tô đầy, đổ màu, nhấp bên trong phòng, diện tích tự động, trừ diện tích, back-out, cột, giếng, khấu trừ từ nhiều hạng mục, diện tích, đa giác, đường bao, feet vuông, sf, lỗ khoét, lỗ, khấu trừ, vòng tròn, tròn, cung tròn, chu vi, sàn, trần, bản
from: 34648db7
---

Một hạng mục diện tích đo diện tích khép kín. Mỗi đường bao có thể có các lỗ được khoét ra (một giếng, một cột, một bồn cây), và các cạnh của nó có thể thẳng hoặc cong.

Trước khi bắt đầu: tờ cần có tỷ lệ ([Đặt tỷ lệ](topic:set-the-scale)) và bạn cần một hạng mục diện tích ([Tạo hạng mục bóc tách](topic:create-items)).

## Vẽ đường bao một diện tích

1. Nhấp hạng mục diện tích dưới {{ui:Hạng mục}}.
2. Chọn {{ui:Diện tích}} trên thanh công cụ, hoặc nhấn {{key:A}}.
3. Nhấp từng góc của phòng hoặc bản, lần lượt. Giữ {{key:Shift}} cho các cạnh 0°, 45° và 90°.
   Từ điểm thứ ba trở đi, đường bao được tô đầy và thanh trạng thái hiển thị "Diện tích" và "chu vi". Một vòng nhỏ xuất hiện quanh điểm đầu tiên.
4. Đóng đường bao: nhấp điểm đầu tiên (bên trong vòng của nó), nhấn {{key:Enter}}, nhấp đúp, hoặc nhấp chuột phải.
   Diện tích được tô nhạt theo màu của hạng mục, ghi nhãn bằng feet vuông, và trở thành dấu đang được chọn.

{{key:Backspace}} xóa góc cuối cùng; {{key:Esc}} bỏ đường bao.

Một đường bao cắt chính nó sẽ bị từ chối: "Đường bao cắt chính nó, nên diện tích sẽ sai. Vẽ lại mà không cắt nhau." Thay vì vậy, hãy vẽ hình số 8 thành hai diện tích.

## Cạnh cong

Khi đang vẽ đường bao, bật chế độ cung tròn ({{ui:Cung tròn}} hoặc {{key:R}}). Sau một góc, nhấp một điểm dọc theo đường cong, rồi nhấp chỗ đường cong kết thúc. Để đóng đường bao bằng một đường cong, hãy thực hiện nhấp cuối cùng đó tại điểm đầu tiên. Diện tích và chu vi dùng đúng đường cong. Nhấn {{key:R}} lần nữa để quay về cạnh thẳng. Để thay đổi một đường cong sau đó, chọn diện tích và kéo núm tròn ở giữa cung. Xem [Đo các đoạn tuyến tính](topic:measure-linear#arcs-and-curved-walls).

## Một vòng tròn

1. Với một hạng mục diện tích, chọn {{ui:Vòng tròn}} hoặc nhấn {{key:O}}.
2. Nhấp tâm.
3. Nhấp một điểm bất kỳ trên cạnh.
   Khi bạn di chuyển, thanh trạng thái hiển thị bán kính và diện tích. Vòng tròn được thêm như một dấu diện tích với diện tích và chu vi chính xác.

## Lấp một phòng bằng một lần nhấp

Khi các phòng được vẽ như những bức tường khép kín, {{ui:Phòng}} ({{key:B}}) lấy một sàn chỉ bằng một lần nhấp:

1. Chọn một hạng mục diện tích (chẳng hạn một lớp hoàn thiện sàn) và đặt tỷ lệ cho tờ.
2. Chọn {{ui:Phòng}} trong nhóm {{ui:Bóc tách}}, hoặc nhấn {{key:B}}.
3. Nhấp bên trong một phòng, trên sàn trống (không nhấp vào đường hay nhãn).

TakeoffCraft đọc các đường của tờ, tìm khoảng trống quanh điểm nhấp và vẽ đường bao dọc theo mặt trong của tường, như một diện tích của hạng mục hiện hành. Các lỗ mở cửa rộng tới **4'-0"** được coi là khép kín, nên đường bao chạy thẳng qua ô cửa; **Cài đặt › TakeoffCraft › Lấp phòng đóng lỗ mở tới** thay đổi chiều rộng đó (từ 3'-0" đến 8'-0"). Tên phòng, đồ đạc và thiết bị bên trong phòng không tạo thành lỗ.

Lệnh từ chối và cho biết lý do khi:

- nhấp nằm trên một đường ("Điểm này nằm trên một đường");
- khoảng trống không khép kín: một lỗ mở rộng hơn mức cài đặt khiến nó thoát ra đến mép tờ. Tăng cài đặt, hoặc vẽ đường bao phòng đó bằng tay với {{ui:Diện tích}};
- khoảng trống quá nhỏ (một ký hiệu, không phải một phòng).

Khi một cửa rộng hơn mức cài đặt, phần lấp sẽ tràn sang phòng kế bên và vẽ đường bao cho cả hai cùng lúc: hoàn tác ({{key:Mod+Z}}), tăng cài đặt, rồi nhấp lại. Kiểm tra đường bao như mọi diện tích khác: kéo các góc để sửa. Một tờ quét hoạt động tương tự, nhưng các đường của nó phải đủ đậm; nét xám nhạt có thể không dừng được việc lấp.

## Khoét một lỗ trong diện tích

1. Chọn {{ui:Chọn}} ({{key:V}}) và nhấp diện tích. Nó hiện các núm vuông ở góc.
2. Chọn {{ui:Lỗ khoét}} trên thanh công cụ (hoặc nhấn {{key:X}}), hoặc {{ui:Thêm lỗ khoét}} dưới **Dấu đã chọn**.
3. Nhấp các góc của lỗ, bên trong diện tích. Chế độ cung tròn cũng dùng được ở đây.
4. Đóng lỗ như một diện tích: nhấp điểm đầu tiên, nhấn {{key:Enter}}, nhấp đúp hoặc nhấp chuột phải.
   Lỗ được để trống, và thanh trạng thái ghi "Đã thêm lỗ khoét. Vẽ thêm lỗ khác, hoặc nhấn Esc."
5. Vẽ thêm lỗ trong cùng diện tích, hoặc nhấn {{key:Esc}}.

Với một lỗ tròn, chọn {{ui:Thêm lỗ khoét tròn}} dưới **Dấu đã chọn**, nhấp tâm, rồi nhấp một điểm trên cạnh.

Một lỗ khoét phải nằm hoàn toàn bên trong diện tích và không được chồng lên lỗ khoét khác. Nếu không, TakeoffCraft sẽ từ chối: "Lỗ khoét phải nằm hoàn toàn trong diện tích." hoặc "Các lỗ khoét không thể chồng lên nhau."

Để gỡ lỗ cuối cùng, chọn {{ui:Xóa lỗ khoét cuối}}.

## Trừ diện tích: cột, giếng và lỗ mở được trừ khỏi nhiều hạng mục

Một lỗ khoét thuộc về một dấu diện tích. Một **trừ diện tích** được vẽ một lần và được trừ khỏi mọi diện tích mà nó chồng lên, đối với các hạng mục bạn chọn: vẽ các cột một lần, và chúng sẽ được trừ khỏi lớp hoàn thiện sàn, trần và bản cùng lúc.

1. Tạo một hạng mục diện tích cho chúng, chẳng hạn "Cột".
2. Trong cài đặt hạng mục, đánh dấu **Trừ diện tích: các dấu của nó lấy diện tích ra khỏi hạng mục khác**. Một danh sách các hạng mục diện tích khác của bạn xuất hiện, tất cả đều được đánh dấu: bỏ đánh dấu những hạng mục mà trừ diện tích không nên chạm vào (chẳng hạn sơn trên tường).
3. Bóc tách các cột bằng {{ui:Diện tích}} hoặc {{ui:Vòng tròn}}, như thường lệ. Mỗi cột được vẽ bằng nét đứt.

Mọi dấu diện tích của một hạng mục được đánh dấu trên cùng một tờ sẽ mất phần mà một trừ diện tích phủ lên: toàn bộ trừ diện tích khi nó nằm bên trong, chỉ phần chồng lên khi nó cắt qua mép, và không gì bên trong một lỗ khoét. Bảng của diện tích đang chọn hiển thị **Trừ diện tích** và diện tích còn lại. Khối lượng của hạng mục, các công thức định mức, chi phí, chế độ xem kiểm tra 3D và xuất dữ liệu đều dùng diện tích còn lại; các ghi chú của dự toán cho biết trừ diện tích đã lấy đi bao nhiêu. Chính hạng mục trừ diện tích thì tính diện tích riêng của nó (để chi phí bằng không nếu bạn không định giá nó).

Một trừ diện tích phải **lồi**: một hình chữ nhật, một vòng tròn hoặc bất kỳ đường bao nào không có góc lõm vào trong. TakeoffCraft từ chối vẽ một trừ diện tích không lồi; hãy vẽ một giếng hình chữ L thành hai trừ diện tích. Trừ diện tích không thể có lỗ khoét, và hai trừ diện tích chồng lên nhau đều được tính.

Chu vi (`P`) không thay đổi: trừ diện tích chỉ lấy đi diện tích.

## Đọc diện tích

Chọn diện tích. **Dấu đã chọn** hiển thị:

| Dòng | Ý nghĩa |
|---|---|
| Diện tích | Diện tích thuần: đường bao trừ các lỗ khoét. Đây là phần hạng mục tính. |
| Đường bao | Diện tích gộp bên trong đường bao (hiển thị khi có lỗ khoét). |
| Lỗ khoét | Số lượng lỗ, và tổng diện tích của chúng. |
| Chu vi | Chiều dài cạnh đường bao, **cộng với** các cạnh của mọi lỗ khoét ("có lỗ khoét"). |

Chu vi bao gồm cả cạnh của lỗ khoét có chủ ý, cho những thứ như ván khuôn cạnh hay nền chạy quanh một lỗ. Nếu bạn chỉ cần cạnh ngoài, hãy để các lỗ ra khỏi hạng mục đó, hoặc đo cạnh ngoài như một đoạn tuyến tính.

{{ui:Đơn vị}} của hạng mục quyết định cách báo cáo tổng: SF, SY hoặc m². Bảng **Dấu đã chọn** và thanh trạng thái luôn hiển thị feet vuông.

## Sửa một diện tích

- **Di chuyển một góc**: chọn diện tích và kéo một núm góc (các lỗ cũng có núm). Nếu hình mới cắt chính nó hoặc đẩy một lỗ ra ngoài, góc sẽ được đặt lại: "Điểm đã được đặt lại."
- **Chuyển sang hạng mục khác**: chọn một hạng mục diện tích khác trong danh sách **Hạng mục** dưới **Dấu đã chọn**.
- **Xóa**: {{key:Delete}}, {{ui:Xóa}} trong menu {{ui:Thêm}} của thanh công cụ, hoặc {{ui:Xóa dấu}}.

## Chiều sâu cho thể tích

Gán cho hạng mục diện tích một {{ui:Chiều sâu}} (ví dụ `0'-4"` cho một bản) và dùng `A * H / 27` trong một thành phần định mức để có yard khối. Xem [Định mức và công thức](topic:assemblies).
