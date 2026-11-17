---
title: Cài đặt TakeoffCraft
summary: Hiển thị inch đến 1/16, 1/8 hoặc 1/4, đặt hao hụt mặc định cho hạng mục mới, chọn nơi thanh trượt Đếm tự động bắt đầu, bắt điểm vào các đường của bản vẽ hoặc đến 45° mà không cần giữ Shift, đặt chiều rộng cửa mà công cụ Tô phòng sẽ đóng, và chọn chỉ báo góc cho chế độ xem 3D.
keywords: cài đặt, tùy chọn, thiết lập, độ chính xác, phân số, inch, làm tròn, hao hụt, hao hụt mặc định, đếm tự động, ngưỡng, độ khớp, thanh trượt, bắt điểm, 45, góc, shift, khối xem, biểu tượng trục, chỉ báo góc, 3d
from: bca3f0ed
---

Mở {{ui:Cài đặt}} bằng biểu tượng bánh răng trên thanh ứng dụng hoặc bằng {{key:Mod+,}}. Thẻ đầu tiên, {{ui:TakeoffCraft}}, chứa các cài đặt thuộc riêng ứng dụng này; {{ui:Chung}} chứa các cài đặt mà mọi ứng dụng CadCraft đều dùng chung (giao diện, bảng, thanh công cụ). Cài đặt của TakeoffCraft chỉ tồn tại trong ứng dụng: bạn thay đổi chúng ở đây, và trình duyệt này ghi nhớ chúng. {{ui:Đặt lại cài đặt TakeoffCraft}} đưa chúng về trạng thái ban đầu.

## Feet và inch

Hiển thị chiều dài đến **1/16"** (mặc định), **1/8"** hoặc **1/4"**. Điều này thay đổi cách chiều dài được đọc trên tờ, trong các bảng, trong khối lượng và trên thanh trạng thái.

Chỉ phần hiển thị được làm tròn. Khối lượng, chi phí và các bản xuất được tính từ chiều dài chính xác, và các bản xuất luôn hiển thị 1/16".

## Hao hụt ban đầu

Phần trăm hao hụt mà mọi hạng mục mới bắt đầu với: 0% (mặc định), 2%, 3%, 5%, 7.5%, 10%, 15% hoặc 20%. Bạn vẫn có thể nhập một hao hụt khác cho từng hạng mục, trong trình chỉnh sửa hạng mục hoặc ngay trong bảng khối lượng. Các hạng mục bạn đã có giữ hao hụt riêng của chúng.

## Đếm tự động: nơi thanh trượt độ khớp bắt đầu

Vị trí của thanh trượt {{ui:Độ khớp}} khi một tìm kiếm [Đếm tự động](topic:auto-count) kết thúc, từ 50% đến 95%; 75% là mặc định. Thấp hơn sẽ đưa ra nhiều đối tượng giống để bạn loại bỏ; cao hơn đưa ra ít hơn. Bạn vẫn có thể di chuyển thanh trượt trong mỗi lần xem lại.

## Bắt vào các đường của chính bản vẽ

Bật sẵn từ đầu. Khi bạn đo hoặc hiệu chuẩn, một điểm gần một đường của PDF sẽ nhảy đến đầu mút, trung điểm, giao điểm, hoặc điểm gần nhất trên đường đó. {{key:F3}} và {{ui:Bắt điểm}} trong thanh trạng thái cũng bật và tắt nó. Thêm: [Bắt vào các đường của bản vẽ](topic:snap-to-the-drawing).

## Tô phòng: cửa rộng đến đâu thì được đóng

{{ui:Tô phòng đóng các lỗ đến}} đặt chiều rộng của lỗ cửa hoặc khe hở mà công cụ {{ui:Phòng}} coi là đã đóng: từ 3'-0" đến 8'-0", mặc định là 4'-0". Rộng hơn cửa rộng nhất của bạn sẽ khiến phòng tràn sang phòng kế bên; hẹp hơn một cửa sẽ để phòng mở. Xem [Tô một phòng chỉ với một cú bấm](topic:measure-areas#fill-a-room-with-one-click).

## Bắt 45° mà không cần giữ Shift

Tắt sẵn từ đầu. Khi bật, các đoạn, đường bao, lỗ khoét và các góc được kéo sẽ đi theo 0°, 45°, 90° hoặc 135° từ điểm trước đó mà không cần giữ {{key:Shift}}; giữ {{key:Shift}} để bấm ở bất kỳ góc nào. Khi đó thanh trạng thái hiển thị "Bắt theo 45°; Shift để tự do góc". Điểm bạn bấm trên đường cong của cung và các vòng tròn không bao giờ bị bắt; đầu mút của cung thì có.

## Kích thước dấu đếm

Các chấm đếm lớn cỡ nào: {{ui:Rất nhỏ}}, {{ui:Nhỏ}}, {{ui:Vừa}} (mặc định: cỡ mà các chấm luôn có) hoặc {{ui:Lớn}}. Kích thước được giữ trên màn hình ở mọi mức phóng to, và PDF đã đánh dấu vẽ mỗi chấm với cùng kích thước trên giấy, bất kể kích thước tờ, nên PDF ở 100% trông giống như màn hình. Thêm: [Đếm bằng tay](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Chỉ báo góc

Chỉ dành cho [chế độ xem kiểm tra 3D](topic:check-in-3d): {{ui:Khối xem}} (mặc định: một khối lập phương ở góc trên bên phải để bấm, kéo và xoay), {{ui:Biểu tượng trục}} (một dấu X, Y, Z nhỏ ở góc dưới bên phải) hoặc {{ui:Không có}}. Nó thay đổi ngay và được giữ trong trình duyệt này. Tờ phẳng không bao giờ hiển thị chỉ báo.

## Công cụ đường dẫn: khoảng hở lớn nhất mà nó nối

{{ui:Công cụ đường dẫn: khoảng hở lớn nhất để nối}} là khoảng cách tối đa giữa hai đầu đường mà vẫn được tính là một đường dẫn, tính bằng điểm PDF (từ 0.05 đến 60; mặc định là 1.5). Các đường của bản vẽ thường dừng cách nhau một chút. Giá trị lớn hơn sẽ nối nhiều hơn; giá trị nhỏ hơn giữ các đường tách rời. {{key:[}} và {{key:]}} thay đổi giá trị này khi bạn đang chọn, và ô này theo dõi thay đổi đó. Xem [Chọn các đường](topic:pick-the-lines).
