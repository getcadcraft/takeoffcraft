---
title: Sao chép, dán và nhân bản dấu
summary: Sao chép dấu cùng hạng mục, dán tại nơi bạn nhấp hoặc tại cùng vị trí trên tờ khác, nhân bản, cắt, xóa và chọn tất cả, mỗi thao tác hoàn tác được một bước.
keywords: sao chép, dán, cắt, nhân bản, dán tại chỗ, bộ nhớ tạm, chọn tất cả, bỏ chọn, nhiều dấu, tầng điển hình, lặp lại, cùng mặt bằng, tờ khác, sao chép hạng mục, nhân bản hạng mục
from: e20e9024
---

Nhóm {{ui:Edit}} của thanh công cụ chứa {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}} và {{ui:Paste}}. Menu {{ui:More}} có phần còn lại, mỗi mục kèm phím tắt: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} và {{ui:Select none}}. Mỗi thao tác đều hoàn tác được một bước bằng {{key:Mod+Z}}.

## Chọn dấu

1. Chọn {{ui:Select}} ({{key:V}}) và nhấp một dấu.
2. Giữ {{key:Shift}} và nhấp thêm dấu để thêm vào. {{key:Shift}} + nhấp vào một dấu đã chọn sẽ bỏ nó ra.
3. Hoặc nhấn {{key:Mod+A}} ({{ui:Select all}}) để chọn mọi dấu trên tờ đang mở.

Khi chọn nhiều dấu, bảng bên phải hiển thị **Dấu đã chọn**: số lượng của mỗi hạng mục, cùng {{ui:Copy}}, {{ui:Duplicate}}, {{ui:Cut}} và {{ui:Delete marks}}. Các núm ở góc chỉ hiện khi chọn một dấu. {{key:Esc}} ({{ui:Select none}}) xóa vùng chọn.

## Sao chép và dán tại nơi bạn nhấp

1. Chọn các dấu và nhấn {{key:Mod+C}} ({{ui:Copy}}). Các dấu được sao chép cùng hạng mục của chúng, bao gồm định mức, hao hụt và chi phí của mỗi hạng mục.
2. Chuyển đến tờ bạn muốn đặt chúng (có thể là cùng tờ).
3. Nhấn {{key:Mod+V}} ({{ui:Paste}}). Một bản sao nét đứt sẽ đi theo con trỏ.
4. Nhấp nơi nó sẽ đến. Trung tâm của các dấu được sao chép nằm tại con trỏ.

{{key:Esc}} hủy và không thêm gì. Các dấu được dán sau đó sẽ được chọn, nên {{key:Delete}} hoặc {{key:Mod+Z}} sẽ xóa chúng đi.

Trong cùng một bóc tách, các dấu được dán vào **cùng hạng mục**, nên khối lượng của chúng cộng vào các hạng mục đó. Trong bóc tách khác (một thẻ khác, hoặc sau {{ui:New}}), một hạng mục có cùng tên và loại sẽ được dùng; nếu không, hạng mục được thêm kèm định mức của nó. Nếu tên đã bị một hạng mục khác loại chiếm, hạng mục được thêm sẽ có tên "(tên) (bản sao)".

Các dấu được dán sẽ vào khu vực dự thầu được chọn ở đầu bảng {{ui:Items}} (hoặc không có khu vực nào). Xem [Khu vực dự thầu](topic:bid-areas).

## Dán tại chỗ

{{key:Mod+Shift+V}} ({{ui:Paste in place}}) đặt bản sao đúng vào vị trí tương ứng trên tờ đang mở, theo vị trí của nó trên trang. Dùng cho một tầng điển hình: bóc tách tầng 2, sao chép, mở tầng 3, dán tại chỗ.

Dán tại chỗ cần một tờ có **cùng kích thước** với tờ bạn đã sao chép. Trên tờ khác kích thước, TakeoffCraft sẽ báo điều đó và không dán gì; hãy dùng {{ui:Paste}} và nhấp. Trên chính tờ bạn đã sao chép, bản sao nằm đè lên bản gốc.

## Tỷ lệ phải khớp

Chiều dài và diện tích phụ thuộc vào tỷ lệ của tờ. Một đoạn đo 10' ở 1/4" = 1'-0" sẽ đo 20' trên tờ ở 1/8" = 1'-0". Vì vậy TakeoffCraft chỉ dán đoạn và diện tích lên tờ có **cùng tỷ lệ** với tờ mà chúng được sao chép từ, và nói rõ khi không khớp:

- Tờ đang mở chưa có tỷ lệ: hãy đặt tỷ lệ trước ([Đặt tỷ lệ](topic:set-the-scale)), rồi dán.
- Tờ đang mở có tỷ lệ khác: thông báo nêu cả hai tỷ lệ. Hãy dán lên tờ có cùng tỷ lệ.
- Số đếm không cần tỷ lệ: số đếm đã sao chép có thể dán ở bất cứ đâu.

## Nhân bản

{{key:Mod+D}} ({{ui:Duplicate}}) sao chép các dấu đã chọn và đặt bản sao ngay tại con trỏ; nhấp nơi nó sẽ đến. Chưa có gì được thêm cho đến khi bạn nhấp, và {{key:Esc}} không để lại gì. Nhân bản không thay đổi những gì {{ui:Paste}} dán.

## Cắt và xóa

- {{key:Mod+X}} ({{ui:Cut}}) sao chép các dấu đã chọn và xóa chúng. Hãy dán chúng vào nơi chúng thuộc về, hoặc hoàn tác việc cắt.
- {{key:Delete}} hoặc {{key:Backspace}} ({{ui:Delete}}) xóa các dấu đã chọn mà không sao chép chúng.

## Sao chép hạng mục

Trình chỉnh sửa hạng mục (dưới **Hạng mục**) có:

- {{ui:Copy item}}: sao chép hạng mục cùng định mức, hao hụt và chi phí, nhưng không kèm dấu. {{ui:Paste}} sau đó thêm một bản sao của nó vào bóc tách này, hoặc vào bóc tách khác.
- {{ui:Duplicate item}}: thêm ngay một bản sao, tên "(tên) (bản sao)".

:::tip
Bản sao nằm trên máy tính này: nó được giữ trong thẻ này và trong bộ nhớ của trình duyệt, nên một thẻ TakeoffCraft khác có thể dán nó. Không có gì được tải lên, và bộ nhớ tạm của hệ thống không được dùng, nên bạn không thể dán dấu sang các chương trình khác.
:::

:::note
Một bản sao chỉ đến từ một tờ tại một thời điểm. Các dấu được dán đúng như chúng là: hiện chưa có chức năng xoay hay lật bản sao.
:::
