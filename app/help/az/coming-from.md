---
title: Digər həcm hesablama proqramlarından keçid
summary: Həcm hesablama proqramlarının və PDF işarələmə alətlərinin vərdişləri TakeoffCraft-a necə uyğunlaşır və insanları çaşdıran fərqlər hansılardır.
keywords: keçid, köçürmək, şərtlər, detallar, ölçmə alətləri, qeydlər siyahısı, miqdar əlaqəsi, hesablama vərdişləri, fərqlər, müqayisə
from: 12004ce5
---

Əgər PlanSwift-də və ya Bluebeam Revu-nun ölçmə alətləri ilə həcm hesablamasını etmisinizsə, TakeoffCraft-ın çox hissəsi tanış görünəcək: planlar dəsti, hər vərəq üçün miqyas, ölçdüyünüz şeylər və qiymətli cəm. Hissələrin bir-birinə necə bağlandığı bəzi yerlərdə fərqlidir və həmin yerlər aşağıdadır.

Əgər PlanSwift və ya On-Screen Takeoff tanıyırsınızsa, {{ui:Parametrlər}} › {{ui:TakeoffCraft}} › {{ui:Menyular, düymələr və siçan}} bölməsində {{ui:Həcmlərin hesablanması masası}} menyu üslubunu seçin: File, Edit, View, Scale, Takeoff, Items, Markup və Export menyu çubuğu, altında isə həcm alətlərinin sırası, miqyas ön təyinləri vərəq panelindədir. Bax: [Menyular, düymələr və siçan](topic:menus-keys-and-mouse).

## Vərdişlərin uyğunlaşdırılması

| Öyrəşdiyiniz | TakeoffCraft-da |
|---|---|
| Planları saxlayan iş və ya layihəni açmaq (PlanSwift) | PDF-ləri və `.takeoff.json` layihəsini yanaşı açın. Layihə yalnız hesablamanı saxlayır; PDF-lər sizin öz fayllarınız olaraq qalır. |
| Qeydlər, buludlar və vurğulamalarla işarələmə siyahısı (Bluebeam) | Vərəq panelində {{ui:Qeyd}}: statusu (Açıq, Cavablandırılıb, Bağlanıb) olan qeydlər, buludlar və vurğulamalar, **Qeydlər** altında siyahılanır və işarələnmiş PDF-də çəkilir. Bax: [Qeydlər, buludlar və vurğulamalar](topic:markups). |
| PDF-in içində qeyd kimi saxlanmış ölçmələr (Bluebeam) | Hesablama `.takeoff.json` faylında yaşayır. {{ui:İşarələnmiş PDF}} paylaşmaq üçün hesablama çəkilmiş bir nüsxə yazır; {{ui:Hesablaması daxil edilmiş PDF}} isə TakeoffCraft-da yenidən açmaq üçün hesablamanı daşıyan nüsxə yazır. |
| Həcm elementləri (PlanSwift), Alət Qutusunda saxlanmış fərdi ölçmə alətləri (Bluebeam) | {{ui:Elementlər}} altında **Elementlər**: ad, növ, rəng, vahid, hündürlük və ya dərinlik, itki, tariflər. |
| Düsturları olan hissələr və yığımlar (PlanSwift) | Elementin {{ui:Yığım}} hissəsi: `L H A N P` dəyişənlərindən istifadə edən düsturları olan komponentlər. |
| Vərəq miqyasını təyin etmək və ya kalibrləmək (hər ikisi) | Hər vərəq üçün {{ui:Miqyas}} qrupunda {{ui:Hazır}} siyahısı və ya {{ui:Kalibrlə}}. {{ui:Yoxla}} məlum ölçünü ölçür. |
| Bir miqyası səhifə diapazonuna tətbiq etmək | Hələ yoxdur: hər vərəqi ayrıca təyin edin. |
| Bir vərəqdə fərqli miqyaslı görünüşlər (Bluebeam) | Hələ yoxdur: hər vərəq üçün bir miqyas. |
| Polixətt uzunluğu və sahə alətləri (Bluebeam), xətti və sahə həcm hesablaması (PlanSwift) | {{ui:Xətti}} ({{key:L}}) və {{ui:Sahə}} ({{key:A}}). |
| Düz xətlər üçün {{key:Shift}} saxlamaq | {{key:Shift}} 45° addımlara yapışdırır, eyni ideya. |
| Çertyojun xətlərinə yapışmaq | Defolt olaraq aktivdir: uclar, orta nöqtələr, kəsişmələr və xəttə ən yaxın nöqtə; CAD proqramlarında olduğu kimi, söndürmək üçün {{key:F3}}. |
| Say aləti (hər ikisi) | {{ui:Say}} ({{key:C}}). |
| Simvollar üçün vizual axtarış (Bluebeam) | {{ui:Avtomatik say}} ({{key:S}}): bir simvolu qutuya alın, nəzərdən keçirin, əlavə edin. |
| Sahələrdə deşiklər və ya çıxılmalar | Seçilmiş sahədə {{ui:Deşik}} ({{key:X}}) və dairəvi deşiklər. |
| Xətti hissələrdə çıxılmalar | Hissəni düz çəkin və açılış üçün {{key:E}} ({{ui:Çıxılsın}}) basın. Bax: [Xətti hissələrin ölçülməsi](topic:measure-linear). |
| Polixəttdə qövs seqmentləri | {{ui:Qövs}} ({{key:R}}): əyrinin üzərində bir nöqtəni, sonra onun sonunu klikləyin. |
| Miqdar sütunları olan qeydlər siyahısı (Bluebeam) | {{ui:Miqdarlar}} cədvəli, {{ui:Elementə görə}} və ya {{ui:Vərəqə görə}}. |
| Qiymətli smeta cədvəli (PlanSwift) | Eyni cədvəl: itki, vahid üzrə material və əmək, cəmlənmiş məbləğlər, {{ui:Layihənin cəmi}}. |
| Excel-ə ixrac | Canlı düsturları olan {{ui:XLSX}} və ya {{ui:CSV}}. |
| Aləti dayandırmaq üçün Escape | {{key:Esc}} ləğv edir və {{ui:Seç}} rejiminə qayıdır. |
| Bitirmək üçün sağ klik | Sağ klik burada da xətti bitirir və ya sahəni bağlayır. Sağ klik menyusu yoxdur. |

## Fərqlər, insanları çaşdıran

**Hesablama PDF-in içində deyil.** Etdiyiniz heç nə PDF-lərinizi dəyişmir. `.takeoff.json` faylını saxlayın və çertyojlarla birlikdə saxlayın. Kiməsə işarələnmiş PDF göndərmək ona redaktə oluna bilən hesablama göndərmir: layihə faylını və orijinal PDF-ləri göndərin, ya da [hesablaması daxil edilmiş PDF](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDF-lər adına görə yox, məzmununa görə uyğunlaşdırılır.** Köhnə fayl adının üzərinə yazılmış yenidən işlənmiş vərəq TakeoffCraft üçün yeni fayldır, miqyası və nişanları yoxdur. Köhnə nişanlarınız köhnə versiyada qalır və saymağa davam edir. Bax: [Hesablamanı saxlamaq və yenidən açmaq](topic:save-and-reopen#when-a-pdf-has-changed).

**Miqyassız nişanlar sıfır kimi sayılmır, kənarda qalır.** Vərəqin miqyası yoxdursa, onun xətt və sahələri sayılmır və cədvəldə "Natamam" yazılır. Bir çox proqramda sadəcə 0 görərdiniz. Bax: [Miqyası təyin edin](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Səhifə ölçüsü təxmin edilmir.** Hazır seçimlər PDF-in tam ölçüdə çap olunduğunu nəzərdə tutur. Yarım ölçülü və ya "səhifəyə sığdırılmış" PDF üçün {{ui:Kalibrlə}} lazımdır. Həmişə {{ui:Yoxla}} istifadə edin.

**Bir element, bir əsas növ, istəsəniz daha çox.** Element xətti, sahə və ya say olur və nişanları olduqdan sonra növü kilidlənir. Həm sahəni, həm də onun perimetrini verən şərt sahə elementidir: perimetri `P` dəyişənidir. Həm uzunluğu, həm sahəsi olan divar hündürlüklü xətti elementdir. Döşəməli, bazalı və qapılı otaq kimi bir neçə şərtli element üçün **Həm də ölçün** altında digər növləri işarələyin: hər biri öz sətrində qiymətləndirilir. Bax: [Bir element, bir neçə növ nişan](topic:create-items#one-item-several-kinds-of-marks).

**Düsturlar cəmlər üzrə işləyir.** Yığım düsturları hər xətti ayrılıqda yox, elementin bütün vərəqlər üzrə cəmlərindən istifadə edir. `N` (xətlərin və ya sahələrin sayı) hər xətt üçün əlavələrə xidmət edir, məsələn hər divara bir əlavə dirək.

**Perimetrə deşiklər daxildir.** Sahənin `P`-si onun deşiklərinin kənarlarını əlavə edir. Bax: [Deşikləri olan sahələrin ölçülməsi](topic:measure-areas#read-the-area).

**Sürükləmək sürüşdürür.** Vərəqdə sol düymə ilə sürükləmə, {{ui:Avtomatik say}} istisna olmaqla, bütün alətlərdə vərəqi sürüşdürür. Sürüşdürmə aləti ilə keçmək heç vaxt lazım deyil. Təkər miqyası dəyişir; sürüşdürmür.

**Bulud yox, bərpa nüsxəsi.** TakeoffCraft işinizin nüsxəsini bu brauzerdə saxlayır və qəzadan sonra onu bərpa etməyi təklif edir ([Səhifə və ya brauzer dayananda](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), lakin hesablamanı özünüz saxlamalısınız: {{key:Mod+S}}. Bulud saxlanması hələ mövcud deyil.

**Hər şey brauzerdədir.** Quraşdırmaq üçün heç nə yoxdur və planlar heç vaxt yüklənmir. Masaüstü tətbiq üçün TakeoffCraft digər yeddi tətbiqlə birlikdə CadCraft Studio-da gəlir.

## Hələ burada deyil

Vərəq üzrə miqyas bölgələri hələ qurulmayıb. Tam siyahı və əvəzində nə etmək üçün bax: [Hələ qurulmayanlar](topic:not-built-yet).
