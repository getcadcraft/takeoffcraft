---
title: Düstur dili
summary: Yığım miqdar düsturlarının qaydaları — dəyişənlər, operatorlar, funksiyalar, yuvarlaqlaşdırma və hər səhv mesajı.
keywords: düstur, ifadə, sintaksis, funksiyalar, ceil, floor, round, min, max, abs, dəyişənlər, operatorlar, hesablama
from: 4da14575
---

Yığım komponentləri miqdarını düsturdan alır. Düstur elementin ölçülmüş dəyərləri üzərində kiçik riyazi ifadədir. Nümunələr üçün bax [Yığımlar və düsturlar](topic:assemblies).

## Dəyişənlər

| Element növü | Dəyişən | Mənası |
|---|---|---|
| Xətti | `L` | Ümumi uzunluq |
| Xətti | `H` | Elementin hündürlüyü |
| Xətti | `A` | Divar sahəsi, L × H, açılışları çıxılmış (BimCraft-dan hesablama). Hesablama ölçmə üsulunu göstərdikdə, `A` onunla ölçülür: üsulun ən kiçik ölçüsündən böyük olmayan açılışlar qalır, və üsulun divarların birləşdiyi yerdə çıxardığı hissə buraxılır. Elementin altındakı qeyd üsulun adını göstərir |
| Xətti | `N` | Xətlərin sayı |
| Sahə | `A` | Ümumi xalis sahə (konturlar çıxılmış kəsiklər) |
| Sahə | `P` | Ümumi perimetr, kəsik kənarları daxil |
| Sahə | `H` | Elementin dərinliyi və ya qalınlığı |
| Sahə | `N` | Sahələrin sayı |
| Say | `N` | Say |

- Dəyişənlər elementin öz vahidlərindədir: bax [Vahidlər](topic:units).
- Böyük və kiçik hərflər eynidir: `l`, `L` ilə eynidir.
- Yalnız elementin öz növünün dəyişənləri işləyir. Xətti elementdə `P` yazsanız, `"P" burada ölçülmüş dəyər deyil. İstifadə edin: L, H, A, N.` xətası alırsınız.
- Boş hündürlük və ya dərinlik 0-dır.

## Operatorlar

| Yazın | Mənası |
|---|---|
| `+` | Toplama |
| `-` və ya `−` | Çıxma və ya mənfi dəyər |
| `*` və ya `×` | Vurma |
| `/` və ya `÷` | Bölmə |
| `( )` | Qruplaşdırma |

Vurma və bölmə toplama və çıxmadan əvvəl icra olunur: `L * 2 + 4` (L × 2) + 4-dür. Şübhə olduqda mötərizə istifadə edin.

Ədədlərin onluq hissəsi ola bilər (`1.333`, `.5`) və üstü ola bilər (`1e3` = 1000). Boşluqlar nəzərə alınmır.

## Funksiyalar

| Funksiya | Nəticə | Nümunə |
|---|---|---|
| `ceil(x)` | Tam ədədə yuxarı yuvarlaqlaşdırır | `ceil(67.5)` = 68 |
| `floor(x)` | Tam ədədə aşağı yuvarlaqlaşdırır | `floor(67.5)` = 67 |
| `round(x)` | Ən yaxın tam ədədə, yarılar sıfırdan uzaqlaşdırılmaqla | `round(2.5)` = 3 |
| `round(x, d)` | d onluq rəqəmə yuvarlaqlaşdırır (0-dan 10-a) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Ən kiçik dəyər | `min(N, 10)` |
| `max(a, b, …)` | Ən böyük dəyər | `max(1, ceil(N / 12))` |
| `abs(x)` | İşarəsiz dəyər | `abs(-3)` = 3 |

`ceil` və `floor` kompüterin kiçik yuvarlaqlaşdırma səs-küyünü nəzərə almır, ona görə dəqiq 1 olmalı dəyər heç vaxt 2-yə yuvarlaqlaşdırılmır.

## Xətalar

Oxunmayan və ya hesablanmayan düstur öz xətasını sahənin altında göstərir, komponent isə cəmlərdən kənarda qalır (**Miqdarlar** başlığı "Natamam" yazır). Mesajlar:

| Mesaj | Düzəliş |
|---|---|
| Düstur yazın, məsələn L və ya ceil(L / 1.333) + 1. | Düstur boşdur. |
| "X" burada ölçülmüş dəyər deyil. İstifadə edin … | Sadalanan dəyişənlərdən birini istifadə edin. |
| "X" burada funksiya deyil. İstifadə edin: ceil, floor, round, min, max, abs. | Bu funksiyalardan birini istifadə edin. |
| "#" düsturda icazə verilmir. | Həmin simvolu silin (vahidlər, `%`, `$` və `=` icazə verilmir). |
| ")" çatışmır. / "(" olmayan ")" var. | Mötərizələri tarazlayın. |
| ")"-dən əvvəl dəyər çatışmır. | Məsələn `max(1, )`: dəyəri yazın. |
| Düstur çox tez bitir. | Məsələn `L *`: onu tamamlayın. |
| Gözlənilməz "…". Operator çatışmır? | Yan-yana iki dəyər, məsələn `2L`: `2 * L` yazın. |
| ceil() bir dəyər alır. | Funksiyaya düzgün sayda dəyər verin. |
| round(x, digits) 0-dan 10-a qədər tam rəqəm tələb edir. | Tam sayda onluq rəqəm istifadə edin. |
| Düstur sıfıra bölür. | Adətən H 0-dır: elementin hündürlüyünü və ya dərinliyini təyin edin. |
| Düstur ədəd vermir. | Nəticə ədəd olmaq üçün çox böyükdür. |
| Bu düstur çox uzundur (ən çox 500 simvol). | Qısaldın. |

## Dizaynla təhlükəsizdir

Düstur yalnız yuxarıdakı dəyişənlər və funksiyalarla riyazi hesablama apara bilər. Kod işlədə və ya başqa heç nə oxuya bilməz, ona görə sizə göndərilən layihə faylındakı düstur zərərsizdir.
