---
title: Qeydlər, buludlar və vurğulamalar
summary: Vərəqlərdəki sualları və dəyişiklikləri qeydlər, reviziya buludları və vurğulamalarla qeyd edin, hər birini açıq, cavablandırılmış və ya bağlı kimi izləyin və işarələnmiş PDF-də göndərin.
keywords: qeyd, qeydlər, şərh, sual, rfi, bulud, reviziya buludu, vurğulama, status, açıq, cavablandırılmış, bağlı, nəzərdən keçirmə, qeydlər siyahısı
from: 2b395c13
---

Qeydlər hesablama zamanı yadda saxlamalı və ya soruşmalı olduğunuz şeylər üçündür: "əsas tipi təsdiqləyin", dəyişən divarın ətrafında reviziya buludu, planda vurğulanmış qeyd. Onlar vərəqdə statusu ilə durur, bir yerdə siyahılanır və işarələnmiş PDF-də çap olunur. Onlar **heç vaxt hesablanmır**: miqdar yoxdur, dəyər yoxdur.

## Əlavə edin

{{ui:Markup}} panelini vərəqin üstündəki çubuqda açın və seçin:

| Qeyd növü | Necə |
|---|---|
| {{ui:Note}} | Yerini klik edin, qeydi yazın, {{ui:Add}} seçin. Birinci sətiri yanında olan yuvarlaq sancaq kimi görünür. |
| {{ui:Cloud}} | Bir küncü, sonra əks küncü klik edin və qeyd yazın (və ya boş buraxın). Qutunun ətrafında dalğavari reviziya buludu çəkilir. |
| {{ui:Highlight}} | İki küncü klik edin: şəffaf sarı qutu, istəsəniz qeyd ilə. |

{{key:Esc}} birinci küncdən sonra ləğv edir. Alət növbəti dəfə üçün aktiv qalır; {{key:V}} sizi {{ui:Select}} alətinə qaytarır.

## Status və redaktə

Qeydi {{ui:Select}} ilə klik edib seçin. Sağ panel **Markup** göstərir: onun növünü və vərəqini, **Status** — Açıq, Cavablandırılmış və ya Bağlı — və mətnini, onu dəyişmək olar. {{key:Delete}} (və ya {{ui:Delete}}) onu silir; {{key:Mod+Z}} onu geri qaytarır.

Qeydin sancağı açıq olduqda narıncı, cavablandırıldıqda mavi və bağlı olduqda boz olur; bağlı bulud boz olur.

## Siyahı

Sağ paneldə **Qeydlər** hesablamanın hər qeydini statusu ilə siyahılayır və neçəsinin hələ açıq olduğunu göstərir. Hələ həll olunmamış olanları görmək üçün **Yalnız açıqlar** qutusunu işarələyin. Sətrə klik edin ki, vərəqə keçib onu seçin.

## Onları paylaşın

- {{ui:Marked PDF}} onları səhifələrə çəkir: vurğulamalar, buludlar və sancaqlar, hər biri statusunu böyük hərflərlə (OPEN, ANSWERED, CLOSED) və mətni ilə bir qutuda. Qeydləri olan, lakin hesablama işarəsi olmayan səhifə də daxil edilir.
- {{ui:XLSX}} **Qeydlər** iş vərəqi əlavə edir: vərəq, növ, status və mətn, hər sətirdə bir qeyd.
- Onlar `.takeoff.json` faylında və [içində hesablama olan PDF](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf) saxlanılır.
