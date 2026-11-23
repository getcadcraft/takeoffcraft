---
title: Səhifə ölçüləri və kağız adları
summary: Hər vərəqin ölçüsünü millimetrlə və düymlə və kağız adını (A, B və C seriyaları, ANSI, ARCH) görün, qarışıq dəsti ölçüyə görə qruplaşdıraraq qəribə vərəqləri tapın.
keywords: səhifə ölçüsü, kağız ölçüsü, kağız adı, a0, a1, a2, a3, a4, b seriyası, c seriyası, ansi, arch, memarlıq, mm, düym, fərdi ölçü, ölçüyə görə, qəribə ölçü, qarışıq dəst, miqyas, plan dəsti, mediabox, fırlanma
from: 9c061c07
---

Miqyas yalnız düzgün kağızda məna kəsb edir. {{ui:TakeoffCraft}} hər PDF vərəqinin ölçüsünü oxuyur və kağızın adını göstərir, beləliklə ölçüyə etibar etməzdən əvvəl fərqli ölçüdə çap olunmuş vərəqi görə bilərsiniz.

## Nə edəcəksiniz

Açıq vərəqin ölçüsünə baxın, sonra bütün dəsti ölçüyə görə qruplaşdırın.

## Addımlar

1. Planları açın ({{ui:Open plans}}).
2. Çertyojun üstündəki vərəq paneli açıq vərəqin kağız adını və ölçüsünü göstərir, məsələn "A1 · 594 × 841 mm".
3. {{ui:Sheets}} siyahısının hər sətrində vərəq adının altında ölçü sətri var.
4. {{ui:Sheets}} başlığında {{ui:By size}} seçin. Siyahı vərəqləri hər ölçü üçün bir başlıq altında toplayır, ən böyük qrup birinci gəlir və az vərəqi olan ölçü fərqli kimi işarələnir.
5. Dəstin öz sırasına qayıtmaq üçün yenidən {{ui:By size}} seçin.

DWG və ya DXF vərəqinin kağızı yoxdur, buna görə onun ölçüsü göstərilmir.

## Ad necə seçilir

- Ölçü PDF-də səhifənin qutusundan, fırlanma tətbiq edilmiş halda götürülür.
- Adlar A və B seriyaları (ISO 216), C seriyası (ISO 269), ANSI A-dan E-yə və ARCH A-dan E-yə qədərdir.
- Adlandırılmış ölçüdən 2 mm-dən yaxın olan səhifə həmin adı alır. Digər hər səhifə "fərdi" (custom) adlanır və ən yaxın adlandırılmış ölçü və ondan fərqi göstərilir.

## Smetada

Smeta iş kitabçasında hər ölçünün sayını göstərən {{ui:Page sizes}} iş vərəqi var.

:::note
ANSI və ARCH düym dəyərləri nəşr olunmuş cədvəllərdən əl ilə yazılıb və çap olunmuş standartlarla müqayisə edilməyib.
:::
