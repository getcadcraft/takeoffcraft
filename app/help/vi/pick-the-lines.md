---
title: Chọn các đường của PDF
summary: Nhấp vào một đường của PDF vector để đo toàn bộ đường đi liên kết với nó, hoặc nhấp bên trong một đường bao kín để lấy diện tích, với dung sai khe hở được hiển thị và một lần hoàn tác cho mỗi đoạn.
keywords: đường đi, chọn, nét vẽ, đường, liên kết, toàn bộ đoạn, dò, đường bao, chu vi, khe hở, dung sai, cầu nối, đoạn, tab, vector, diện tích từ đường, p
from: c22526ae
---

Trên PDF vector, các tường và cạnh là đường thật. {{ui:Đường đi}} ({{key:P}}) lấy chúng đúng như đã vẽ: một cú nhấp vào đường sẽ đo mọi thứ nối với nó, từ đầu đến cuối, nên bạn không cần dò tường bằng cách nhấp từng góc. Tờ cần có tỷ lệ. Trang quét không có đường để chọn; hãy dùng [Tuyến tính](topic:measure-linear) hoặc [Diện tích](topic:measure-areas) ở đó.

## Chọn đường đi hoặc đường bao

1. Chọn {{ui:Đường đi}}. Đường dưới con trỏ được phác thảo, cùng các đường đi khác mà nó có thể thuộc về được vẽ mờ.
2. Nhấp vào một đường: toàn bộ đường đi liên kết được chọn. Thanh dưới thanh công cụ cho biết số đoạn, chiều dài, dung sai khe hở và số khe hở đã được nối. Một đường đi quay về điểm đầu là khép kín và cũng báo chu vi.
3. Hoặc nhấp bên trong một đường bao kín, cách xa mọi đường: đường bao quanh điểm đó được chọn làm diện tích. Đường bao nhỏ nhất đến trước; {{key:Tab}} thử đường bao lớn hơn kế tiếp.
4. Nhấn {{key:Enter}} (hoặc nhấn chuột phải, hoặc nhấp đúp) để thêm dấu. Một đường đi được chọn thành dấu của hạng mục **tuyến tính**, một đường bao thành dấu của hạng mục **diện tích**: hạng mục đang hoạt động nếu nó có loại đó, nếu không thì hạng mục mới nhất thuộc loại đó. Nếu chưa có hạng mục nào, biểu mẫu hạng mục mới sẽ mở và chưa có gì được thêm cho đến khi bạn nhấn {{key:Enter}} lần nữa. Mọi thứ được chọn được thêm trong một bước hoàn tác.

## Dung sai khe hở

Người vẽ để lại những khe hở nhỏ tại chỗ các đường phải gặp nhau. Hai đường nối với nhau khi hai đầu mút của chúng gần hơn **dung sai khe hở**. Dung sai bắt đầu ở 1.5 điểm trên tờ (hiển thị theo ft và in ở tỷ lệ của tờ), và một vòng nét đứt rộng bằng vậy đi theo con trỏ và đặt lên mỗi đầu của đường đi dưới nó. Mỗi khe hở đã được nối được khoanh màu cam trên đường đi được chọn, và thanh sẽ đếm chúng.

{{key:]}} làm dung sai rộng hơn, {{key:[}} hẹp hơn. Một đường đi đã chọn được nối lại ngay ở dung sai mới. Tại một điểm giao, đường đi tiếp tục thẳng, theo hướng ít uốn nhất, và rời nhánh.

## Phím

| Phím hoặc thao tác | Tác dụng |
|---|---|
| Nhấp | Chọn đường đi dưới con trỏ, hoặc đường bao quanh nó. |
| {{key:Shift}} + nhấp | Thêm một đường đi hoặc đường bao khác vào vùng đã chọn. |
| {{key:Tab}} | Thử đường đi kế tiếp dưới con trỏ, hoặc đường bao lớn hơn kế tiếp. |
| {{key:Backspace}} hoặc {{key:Mod+Z}} | Bỏ đoạn cuối cùng khỏi đường đi được chọn sau cùng, mỗi lần một đoạn. Đường đi không còn đoạn nào sẽ bị bỏ. Khi chưa chọn gì, {{key:Mod+Z}} là hoàn tác thông thường. |
| {{key:[}} và {{key:]}} | Dung sai khe hở hẹp hơn và rộng hơn. |
| {{key:Enter}} | Thêm các dấu. |
| {{key:Esc}} | Bỏ những gì đã chọn. |

## Lưu ý

- Một đường cong trong bản vẽ là chuỗi các đoạn thẳng ngắn, nên chiều dài hơi ngắn hơn cung thật. Để có cung chính xác, hãy đo từ tệp của chính bản vẽ ([Đo từ bản vẽ](topic:measure-from-a-drawing)).
- Một khe hở được nối tính như một bước nhảy thẳng qua nó, nên chu vi của đường bao khép kín có bao gồm nó.
- Chỉ các nét và vùng tô trong các đường đi của chính trang mới là đường. Văn bản vẽ bằng chữ cái và hình ảnh thì không.
