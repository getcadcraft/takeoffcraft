---
title: Peşə paketləri
summary: Bir peşə üçün pulsuz yığımları qiymət kitabxananıza əlavə edin, onları bir addımda silin və öz kitabxananızı paket kimi paylaşın.
keywords: peşə paketi, paket, yığımlar, şablonlar, başlanğıc elementləri, elektrik, quru divar, karkas, boyama, beton, döşəmə, kərpic, dam örtüyü, fasad örtüyü, dülgərlik, santexnika, HVAC, izolyasiya, landşaft, taxta döşəmə, baş podratçı, CSI, MasterFormat, CC0, əlavə et, sil, paylaş
from: d3c036be
---

**Peşə paketi** bir peşə üçün hazır elementlər toplusudur: hər biri öz vahidi, hündürlüyü və ya dərinliyi, tullantısı və **yığımı** ilə, yəni ölçülmüş xətti, sahəni və ya sayı materiallara çevirən detallar və düsturlarla. Məsələn, quru divar bölməsi öz profilini, karkas dirəklərini, təbəqələrini, vintlərini, lentini və şpaklyasını gətirir.

Paketlər [qiymət kitabxananıza](topic:price-library) əlavə olunur və oradan elementlərini istənilən həcmlərin hesablanmasına əlavə edirsiniz.

## Paket əlavə edin

1. {{ui:Elementlər}} panelinin yuxarısında {{ui:Kitabxana}} seçin, sonra {{ui:Peşə paketləri…}}.
2. {{ui:Vahidlər}} seçin: imperial (LF, SF), metrik (m, m²) və ya hər ikisi. Hər yığım hər iki sistemdə gəlir.
3. Paketin yanındakı {{ui:Əlavə et}} seçin.

Paketin elementləri kitabxanada, paketin adı ilə etiketlənmiş görünür. İstifadə etmək üçün onları kitabxanada işarələyin və {{ui:Hesablamaya əlavə et}} seçin.

:::note
**Paket qiymət gətirmir.** Onun elementləri kitabxanada "dərəcənizi təyin edin" göstərir. Dərəcələr sizindir: onları kitabxanada və ya element redaktorunda yazın, ya da qiymət siyahınızı CSV kimi idxal edib {{ui:Qiymətləri yenilə}} istifadə edin.
:::

Kitabxanada eyni ad və tipli elementiniz artıq varsa, paket sizinkini olduğu kimi saxlayır. Paketi yenidən əlavə etmək onun öz elementlərini yeni versiya ilə əvəz edir.

## Paketi silin

{{ui:Peşə paketləri…}} bölməsində əlavə etdiyiniz paketin yanında {{ui:Sil}} seçin, sonra təsdiq üçün bir dəfə də. Ondan gələn hər element bir addımda kitabxanadan çıxır. Artıq həcmlərin hesablanmasına əlavə etdiyiniz elementlər həmin həcmlərdə qalır.

## Paketdə nə var

Paketin altında {{ui:Mənbələr və təfərrüatlar}} seçin ki, hər yığımın nədən yazıldığını görəsiniz: tikinti normaları, standartlar və peşə assosiasiyalarının quraşdırma təlimatları. Kitabxanada elementin üzərinə göstərici gətirin və onun mənbələrini və fərziyyələrini, məsələn karkas aralığını və ya boyanın yayılma normasını oxuyun. Onları iş şəraitiniz və məhsullarınızın texniki göstəricilərinə görə yoxlayın və fərqlənən yerlərdə düsturları dəyişin (bax: [Yığımlar və düsturlar](topic:assemblies)).

Hər paket, işləyən smetaçılar onu nəzərdən keçirənə qədər **Başlanğıc: smetaçı tərəfindən hələ nəzərdən keçirilməyib** kimi işarələnir.

Hər elementdə də CSI MasterFormat nömrəsi var, məsələn `09 21 16`.

## Kitabxananızı paket kimi paylaşın

Kitabxanadakı {{ui:Paket kimi ixrac et…}} onu paket faylı (`.ccpack.json`) kimi saxlayır, bunu hər kəs {{ui:Paket faylını aç…}} ilə əlavə edə bilər. Standart olaraq, əlavə etdiyiniz paketlərdən gələn elementlər çıxarılır və dərəcə daşımır. Dərəcələrinizi də göndərmək üçün {{ui:Dərəcələrimi nümunə dərəcə kimi əlavə et}} işarələyin: onlar verdiyiniz region və tarix ilə etiketlənərək gedir və paketi əlavə edən şəxs onlardan istifadə edib-etməməyi seçir.

Paket faylları yalnız məlumatdır, heç vaxt proqram deyil. TakeoffCraft istifadə etməzdən əvvəl onun hər hissəsini yoxlayır və oxuya bilmədiyi hər şeyi kənarda qoyur.
