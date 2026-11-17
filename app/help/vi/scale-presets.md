---
title: Các tỷ lệ đặt sẵn
summary: Mọi tỷ lệ đặt sẵn trong danh sách Đặt sẵn — kiến trúc, kỹ thuật và mét — và mỗi tỷ lệ giả định gì về PDF.
keywords: tỷ lệ, đặt sẵn, tỷ lệ kiến trúc, tỷ lệ kỹ thuật, tỷ lệ mét, tỷ số, 1/4 inch, 1/8 inch, 1:100, kích thước thật
from: 31ac0000
---

Danh sách {{ui:Đặt sẵn}} trong nhóm {{ui:Tỷ lệ}} có 32 tỷ lệ chia thành ba nhóm. Một tỷ lệ đặt sẵn thiết lập chính xác tỷ lệ của tờ đang mở.

Mọi tỷ lệ đặt sẵn đều giả định trang PDF có kích thước giấy thật của bản vẽ: một inch trên trang PDF là một inch giấy (trang PDF đo 72 point mỗi inch). Nếu PDF đã bị đổi kích thước, hãy dùng {{ui:Hiệu chuẩn}}. Dùng {{ui:Kiểm tra}} sau khi đặt bất kỳ tỷ lệ nào. Xem [Đặt tỷ lệ](topic:set-the-scale).

## Kiến trúc

| Tỷ lệ đặt sẵn | Một inch giấy tương ứng |
|---|---|
| `1/16" = 1'-0"` | 16 ft |
| `3/32" = 1'-0"` | 10 ft 8 in |
| `1/8" = 1'-0"` | 8 ft |
| `3/16" = 1'-0"` | 5 ft 4 in |
| `1/4" = 1'-0"` | 4 ft |
| `3/8" = 1'-0"` | 2 ft 8 in |
| `1/2" = 1'-0"` | 2 ft |
| `3/4" = 1'-0"` | 1 ft 4 in |
| `1" = 1'-0"` | 1 ft |
| `1 1/2" = 1'-0"` | 8 in |
| `3" = 1'-0"` | 4 in |

## Kỹ thuật

| Tỷ lệ đặt sẵn | Một inch giấy tương ứng |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Mét

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

Tỷ lệ mét nghĩa là một đơn vị trên giấy tương ứng với bấy nhiêu đơn vị ngoài thực tế: ở `1:100`, 10 mm trên trang là 1 m.

## Tỷ lệ đã hiệu chuẩn

Một tỷ lệ đã hiệu chuẩn hiển thị là "Đã hiệu chuẩn 1" = 4.002' trên 24'-6"" trên thanh dưới tờ: số feet thực trên mỗi inch giấy, và khoảng cách bạn đã nhập. Khi nó nằm trong 0.5% của một tỷ lệ đặt sẵn, thanh thêm "(khớp với 1/4" = 1'-0")", và danh sách tờ hiển thị tên của tỷ lệ đặt sẵn đó.

## PDF bất thường

Một số PDF khai báo một đơn vị trang lớn hơn (một "đơn vị người dùng"); TakeoffCraft tính đến nó cho các tỷ lệ đặt sẵn và cho tỷ lệ được hiển thị. Các trang được xoay trong PDF được đo giống như các trang đứng.
