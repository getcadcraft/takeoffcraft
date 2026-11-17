---
title: Təcəssüm olunmuş karbon və 5D qiymət cədvəli
summary: Karbon hər elementin miqdarından və açıq əmsal cədvəlindən hesablamanın təcəssüm olunmuş karbonunu toplayır və hesablamanın tariflərini 5D xərcləri üçün qiymət cədvəli kimi BimCraft-a göndərir.
keywords: karbon, təcəssüm olunmuş karbon, kgco2e, co2, əmsallar, A1-A3, daşınma, itki, 5D, qiymət cədvəli, xərc, bimcraft, epd
from: f4bff3b8
---

Alət panelində {{ui:Karbon}} ölçdüyünüz şeyin təcəssüm olunmuş karbonunu toplayır və tariflərinizi bina modelinin istifadə edə biləcəyi qiymət cədvəlinə çevirir. Bu təxmindir, qiymətləndirmə deyil.

## Təcəssüm olunmuş karbon

Hər elementin miqdarı, itkisi ilə birlikdə əmsal cədvəlinin bir sətri ilə vurulur. Sətir elementin adının sözləri ilə uyğunlaşır (adında "beton plitə" olan element açar sözü "beton" olan sətiri tapır). Cədvəl BimCraft-ın istifadə etdiyi eyni açıq cədvəldir, buna görə burada yüklədiyiniz fayl orada da işləyir. **Proqramla gələn sətirlər başlanğıc dəyərlərdir: ümumi, yoxlanılmamış və heç bir bazadan deyil.** Dialoq bunu rəqəmlərin yanında deyir; ona güvənməzdən əvvəl öz mənbənizlə əvəz edin.

1. {{ui:Karbon}} seçin. Sayılan elementlər kq CO2e ilə göstərilir; cəm yuxarıdadır.
2. Həmin mərhələləri sayın üçün {{ui:A4 daşınma}} və ya {{ui:A5 tikinti tullantısı}} işarələyin, o sətirlər üçün ki, onlara rəqəm verir. Məhsul mərhələsi həmişə sayılır.
3. Elementin üçün başqa sətir və ya heç nə istifadə etmək üçün elementin sətrindəki siyahıdan istifadə edin.
4. {{ui:Fayldan əmsallar…}} əmsal cədvəlini (JSON və ya CSV) yükləyir, öz mənbənizdən hazırlanmış; onun sətirləri eyni id-li başlanğıc sətirləri əvəz edir. {{ui:Əmsallar (JSON)}} sizinkini saxlayır.

Əmsal hər metr, kvadrat metr, kub metr, element və ya kiloqram üzrədir. Feet və ya square feet ilə ölçülən sətir çevrilir. Kiloqram əmsalı həcm (cubic yards və ya metr) və sətirin sıxlığını tələb edir. Əmsalı miqdar tələb edən, amma elementin ölçmədiyi element, səbəbi ilə {{ui:Buraxılıb}} siyahısında göstərilir, heç vaxt təxmin edilmir. Status panelindəki işləyən cəm eyni rəqəmi göstərir.

Əmsal sətirləriniz, seçimləriniz və saydığınız mərhələlər hesablamanın faylında saxlanılır.

## 5D xərcləri üçün qiymət cədvəli

{{ui:5D qiymətləri (JSON)}} və {{ui:5D qiymətləri (CSV)}} hesablamanın tariflərini qiymət cədvəli kimi saxlayır: hər qiymətləndirilmiş element üçün bir sətir, onun vahid başına material və işçilik tarifi və itkisi ilə. BimCraft-ın xərc panelinə (Təcəssüm olunmuş karbon və 5D xərci) yükləyin ki, bina modelinin tapşırıqlarını tenderi yaradan eyni tariflərlə qiymətləndirin. Cədvəlin olmadığı vahiddə ölçülmüş elementlər və tarifi olmayan elementlər buraxılır.

## Assistentinizlə

Parametrlərdə assistentlərə icazə versəniz, onlar karbonu oxuya bilərlər (carbon_check). Əmsalları yükləmək sizin işinizdir.

## Bilməli olduqlarınız

Heç nə heç yerə göndərilmir. Rəqəmlər yalnız yüklədiyiniz əmsallar qədər yaxşıdır.
