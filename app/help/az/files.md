---
title: TakeoffCraft-ın açdığı və saxladığı fayllar
summary: PDF-lər girişdə, hesablama layihə faylı, cədvəllər və işarələnmiş PDF-lər çıxışda - hər birinin nəyi saxladığı, haraya getdiyi və onlayn, oflayn və brauzerlər arasında nə dəyişdiyi.
keywords: fayllar, formatlar, pdf, takeoff.json, layihə faylı, xlsx, csv, işarələnmiş pdf, yükləmə, saxla, aç, oflayn
from: 1bf9be65
---

## Nəyi açır

| Fayl | Necə | Qeydlər |
|---|---|---|
| PDF (`.pdf`) | {{ui:Planları aç}}, {{key:Mod+O}}, və ya səhifəyə atın | Bir neçəsi birdən. Hər səhifə vərəqə çevrilir. |
| Hesablama layihəsi (`.takeoff.json`) | {{ui:Hesablamanı aç}}, və ya səhifəyə atın | Elementləriniz, miqyaslarınız və nişanlarınız. Onu PDF-ləri ilə birlikdə də ata bilərsiniz. |

Səhifəyə atılan digər fayllar ötürülür və status sətrində onların adı göstərilir.

- **Parolla qorunan PDF-lər açılmır:** "(ad) parolla qorunur. Qorunmayan nüsxə açın."
- **Eyni PDF iki dəfə** bir dəfə açılır: "(ad) artıq açıqdır." TakeoffCraft faylları adına görə yox, məzmununa görə tanıyır.
- **Skan edilmiş PDF-lər** açılır və digərləri kimi ölçülür; TakeoffCraft PDF-də mətnin olmasını tələb etmir.
- **Böyük plan dəstləri:** hər PDF açılanda tam oxunur (barmaq izini çıxarmaq üçün), ona görə çox böyük fayl bir az vaxt aparır. Miniatürlər siz sürüşdürdükcə bir-bir çəkilir.

## Nəyi saxlayır

Hər saxlama yükləmədir. PDF-lərinizə heç nə geri yazılmır.

| Seçirsiniz | Alırsınız | Onun içində |
|---|---|---|
| {{ui:Hesablamanı saxla}} | `(name).takeoff.json` | Elementlər, yığımlar, dərəcələr, vərəq miqyasları və hər nişan, hər PDF-ə onun məzmununa görə bağlanır. PDF səhifələri yoxdur. |
| {{ui:XLSX}} | `(name).xlsx` | Dörd iş vərəqi: Smeta (canlı düsturlarla), Vərəqə görə, Nişanlar, Miqyaslar. |
| {{ui:CSV}} | `(name).csv` | Smeta sadə dəyərlər kimi, hər element və komponent üçün bir sətir. |
| {{ui:İşarələnmiş PDF}} | `(PDF name) (takeoff).pdf` | Nişanı olan hər açıq PDF-in nüsxəsi, səhifələrində çəkilmiş hesablama və legenda ilə. Hər PDF üçün bir fayl. |

Ad, bu hesablamada açdığınız ilk PDF-dən götürülür. Hələ ad qutusu yoxdur: başqa ad istəyirsinizsə, yüklənmiş faylı yenidən adlandırın.

Bax: [Smetanı və işarələnmiş PDF-i ixrac edin](topic:export-estimate) və [İxrac sütunları](topic:export-columns).

## Yükləmələrin getdiyi yer

Brauzeriniz yükləmələri hər yükləmə üçün saxladığı yerə yazır, adətən Yüklənmələr qovluğuna. Onu {{pick:mac=Finder|windows=File Explorer|linux=fayl idarəedicisi}} bölməsində tapın. Brauzeriniz hər fayl üçün yerin soruşmağa təyin edilibsə, soruşacaq.

:::chromium
{{ui:İşarələnmiş PDF}} bir neçə işarələnmiş PDF ilə birdən bir neçə fayl yükləyir. Chrome və Edge bu saytın bir neçə fayl yükləməsinə icazə verilib-verilmədiyini bir dəfə soruşa bilər. İcazə ver seçin.
:::

:::safari
Safari Parametrlərində, Ümumi bölməsində yükləmə yerini dəyişməmisinizsə, Safari yükləmələri Yüklənmələr qovluğuna yazır.
:::

## Niyə layihə faylı və PDF-lər ayrıdır

`.takeoff.json` faylı yalnız hesablamanızı saxlayır. PDF-lərini onların məzmunu (hər faylın barmaq izi) ilə yenidən tapır, ona görə:

- PDF-in adını dəyişmək və ya yerini dəyişmək fərq etmir.
- Başqa proqramla dəyişdirilən və ya yenidən saxlanılan PDF eyni adda olsa belə fərqli fayl sayılır.
- Açıq olmayan PDF-lərdəki nişanlar cəmdə hələ də sayılır.

Bax: [Hesablamanı saxlayın və yenidən açın](topic:save-and-reopen).

## Onlayn və oflayn

PDF-ləriniz və hesablamalarınız onlayn və ya oflayn heç vaxt kompüterinizi tərk etmir. Bağlantı yalnız TakeoffCraft-ın özünü yükləmək üçün vacibdir.

Bağlantı olmadan işləmək üçün tətbiqi əvvəlcə, onlayn ikən saxlayın:

1. Yuxarıdakı tətbiq panelində {{ui:Oflayn üçün saxla}} seçin.
   Düymə saxlayarkən "40-dan 12 saxlanılır" kimi sayılır.
2. {{ui:Oflayn hazırdır}} yazısını gözləyin.

TakeoffCraft-ı saxlamaq tətbiqi, bu kömək bölməsini, PDF oxuyucunu, {{ui:İşarələnmiş PDF}} üçün istifadə olunan PDF yazıcını və {{ui:Avtomatik say}} işçisini brauzerinizdə təxminən 6 MB saxlayır. {{ui:Oflayn hazırdır}} yazdıqdan sonra hər şey oflayn işləyir: PDF-lərin açılması, ölçülmə, {{ui:Avtomatik say}}, {{ui:Hesablamanı saxla}}, {{ui:XLSX}}, {{ui:CSV}} və {{ui:İşarələnmiş PDF}}.

| Düymə yazır | Mənası |
|---|---|
| {{ui:Oflayn üçün saxla}} | Bu brauzerdə hələ saxlanılmayıb. Saxlamaq üçün seçin. |
| Saxlanılır (n) / (m) | İndi saxlanılır. |
| {{ui:Oflayn hazırdır}} | Saxlanılıb. {{ui:Yenidən saxla (ən yeni versiyanı al)}} və ya {{ui:Oflayn nüsxəni sil}} üçün seçin. |
| {{ui:Saxlamaq alınmadı}} | Bəzi fayllar yüklənmədi. Bağlantınızı yoxlayın və yenidən seçin. |
| {{ui:Oflayn mövcud deyil}} | Bu brauzer pəncərəsi oflayn nüsxə saxlaya bilmir (şəxsi pəncərələr və bəzi idarə olunan kompüterlər bunu bloklayır). |

Ətraflı, o cümlədən hər brauzerdə saxlanılan nüsxənin nə qədər qaldığı: [Oflayn işləmək](common:offline).

:::offline
Oflayn-sınız. Tətbiq paneli {{ui:Oflayn hazırdır}} göstərirsə, hər şey işləyir. Göstərmirsə, bu sekmədə TakeoffCraft-ın hələ yükləmədiyi hissələr (işarələnmiş PDF üçün PDF yazıcı, avtomatik say işçisi) indi yüklənə bilməz və {{ui:İşarələnmiş PDF}} "İşarələnmiş PDF yazıla bilmədi" mesajı ilə dayanır. Hesablamanız hər halda təhlükəsizdir: {{ui:Hesablamanı saxla}}, {{ui:XLSX}} və {{ui:CSV}} bağlantı tələb etmir. Yenidən onlayn olana qədər səhifəni yenidən yükləməyin.
:::

:::online
Onlayn-sınız. Saha ziyarətindən və ya uçuşdan əvvəl {{ui:Oflayn üçün saxla}} seçin və {{ui:Oflayn hazırdır}} yazısını gözləyin.
:::

## Cədvəllər

XLSX-də canlı düsturlar qalır, ona görə cədvəl proqramı faylı açanda smetanı yenidən hesablayır və siz orada dərəcəni və ya tullantını dəyişəndə düzgün qalır. İş kitabı LibreOffice Calc-da yoxlanılıb; hər cəmi eyni qəpiyə qədər yenidən hesablayıb. Excel-də hələ açılmayıb.

CSV bayt sırası işarəsi ilə sadə dəyərlərdir, ona görə cədvəl proqramları m² kimi simvolları düzgün oxuyur.

## Masa üstü və bulud

:::desktop
0.5-dən başlayaraq masa üstü tətbiqi CadCraft Studio-dur: TakeoffCraft və digər yeddi tətbiq bir quraşdırmada. TakeoffCraft üçün ayrıca quraşdırıcı yoxdur.
:::

Bulud saxlanması hələ mövcud deyil. `.takeoff.json` fayllarınızı işin PDF-ləri ilə saxlayın və hər digər fayl kimi ehtiyat nüsxəsini götürün. Bax: [Fayllarınız haraya gedir](common:your-files).
