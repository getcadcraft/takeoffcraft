---
title: Gói dự thầu và cân bằng dự thầu
summary: Chia dự toán thành các gói theo ngành nghề, gửi phạm vi của mỗi gói cho nhà thầu phụ, so sánh các hồ sơ thầu trả về trên cùng phạm vi, và dùng hồ sơ được chọn làm giá của gói.
keywords: cân bằng dự thầu, cân bằng, gói dự thầu, nhà thầu phụ, dự thầu phụ, phạm vi, phần bù, ngành nghề, phân ngành csi, so sánh hồ sơ thầu, thầu thấp nhất, bảng so sánh thầu, người dự thầu, trao thầu, hồ sơ được chọn, dùng một hồ sơ, giá thầu phụ
from: 856b3088
---

Tổng thầu chính gửi phạm vi của mỗi ngành cho nhà thầu phụ và so sánh những gì họ trả về. TakeoffCraft làm cả hai việc từ bóc tách: mở {{ui:Xuất}} › {{ui:Gói dự thầu và cân bằng…}}.

## Các gói

Có một gói cho mỗi phân ngành CSI mà các hạng mục của bạn dùng (hai chữ số đầu của {{ui:Số CSI}} của một hạng mục, xem [Tạo hạng mục bóc tách](topic:create-items)). Hạng mục không có số sẽ tạo thành một gói riêng. Mỗi gói hiển thị các hạng mục, số tờ có dấu của chúng, và chi phí của chính chúng ta cho gói (vật liệu và nhân công trước phụ phí, từ dự thầu cơ bản).

Chọn {{ui:CSV phạm vi}} để tải xuống thứ cần gửi cho nhà thầu phụ: mỗi hạng mục với số CSI, số lượng, đơn vị và các tờ nó nằm trên. Tệp không có giá. Với nhà cung cấp vật liệu, yêu cầu báo giá trong sổ tính có danh sách chi tiết (xem [Xuất dự toán](topic:export-estimate)).

## Nhập các hồ sơ thầu

1. Ở dòng trống bên dưới gói, nhập tên người dự thầu và số tiền của hồ sơ thầu, rồi chọn {{ui:Thêm giá dự thầu}}.
2. Nếu một hồ sơ thầu bỏ sót một phần phạm vi, mở danh sách {{ui:Bỏ sót}} của nó và đánh dấu các hạng mục đó.
3. Để sửa tên hoặc số tiền, gõ đè lên trong bảng; nút × sẽ gỡ một hồ sơ thầu.

Mỗi thay đổi là một bước mà {{key:Mod+Z}} hoàn tác, và các hồ sơ thầu được lưu cùng với việc bóc tách.

## Cách cân bằng các hồ sơ thầu

Các hồ sơ thầu hiếm khi bao phủ cùng một phạm vi. Cân bằng điền mỗi hạng mục bị bỏ sót bằng một **phần bù** theo chi phí của chính chúng ta, để mỗi hồ sơ được so sánh trên toàn bộ gói:

**Đã cân bằng = hồ sơ thầu + các phần bù**

Hồ sơ đã cân bằng thấp nhất được đánh dấu **Thấp nhất**; nếu bằng nhau, hồ sơ nhập trước sẽ thắng. **So với chi phí của chúng ta** là hồ sơ đã cân bằng trừ đi chi phí của chính chúng ta cho gói: số âm nghĩa là thấp hơn. Một hồ sơ có vẻ thấp nhất vẫn có thể thua khi phạm vi bị thiếu được tính vào.

Sổ tính có một trang tính **Cân bằng dự thầu** với mọi gói có hồ sơ thầu: dự toán của chúng ta, mỗi hồ sơ, các phần bù của nó, tổng đã cân bằng và chênh lệch, dưới dạng công thức trực tiếp, và mỗi hồ sơ đã bỏ sót gì.

## Dùng một hồ sơ làm giá của gói

Chọn {{ui:Dùng}} trên một hồ sơ thầu và nó trở thành giá của cả gói trong dự toán của bạn: phần định giá riêng của gói (các hạng mục, điều kiện phụ và các chi tiết định mức) bị bỏ khỏi tổng công trình, các hạng mục vẫn là số lượng với đơn giá riêng của bạn để tham khảo, và một dòng, **Hồ sơ được chọn**, mang số tiền của hồ sơ thầu. Các hạng mục mà hồ sơ bỏ sót vẫn ở chi phí của bạn, đó chính là phần bù mà cân bằng đã tính. Chọn một hồ sơ khác, hoặc chọn lại cùng hồ sơ để bỏ chọn; mỗi lần là một bước mà {{key:Mod+Z}} hoàn tác.

Trong bản tóm tắt dự thầu, các hồ sơ thầu phụ là một dòng bên trong chi phí: chi phí chung, lợi nhuận và bảo lãnh được cộng thêm lên trên chúng như mọi chi phí khác; thuế bán hàng (chỉ trên vật liệu) và chi phí đi kèm nhân công (trên nhân công) thì không. Trang tính Dự toán của sổ tính mang hồ sơ được chọn như một dòng riêng và khối phụ phí cộng nó vào, bằng công thức trực tiếp. Danh sách vật liệu bỏ qua vật liệu của gói đã trao, vì nhà thầu phụ cung cấp nó.

Một gói nằm trong khu vực dự thầu của một phương án không được định giá lại: các phương án và tổng phụ của khu vực dự thầu vẫn dùng giá riêng của bạn.

## Các hồ sơ thầu gửi về qua email

Bạn không phải nhập hồ sơ thầu bằng tay. {{ui:Gửi mời thầu…}} bên dưới một gói gửi email cho mỗi nhà thầu phụ một liên kết đến trang nơi họ nhập giá cho từng dòng; {{ui:Lấy giá}} kéo những gì họ gửi vào bảng này. Xem [Gửi gói để dự thầu](topic:bid-invitations).

:::note
Việc nhập hồ sơ thầu bằng tay vẫn hoạt động, và hồ sơ nhập tay nằm cạnh hồ sơ từ website. Các hồ sơ về từ website được đánh dấu **web** (hoặc **web, trễ** nếu đến sau thời hạn); giá của chúng chỉ thay đổi khi người dự thầu gửi phiên bản mới, nên các chỉnh sửa của bạn trên đó được giữ cho đến lúc đó.
:::
