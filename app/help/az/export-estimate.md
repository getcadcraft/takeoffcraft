---
title: Smeta və işarələnmiş PDF-i ixrac edin
summary: Smeta-nı canlı düsturlarla XLSX iş kitabı və ya CSV kimi, açıq PDF-lərin hesablama çəkilmiş nüsxələri kimi yükləyin.
keywords: tender təklifi, təklif xülasəsi, ixrac, xlsx, cədvəl, iş kitabı, csv, işarələnmiş pdf, hesablamanı çap et, hesabat, paylaş, göndər, legenda
from: 334f89c7
---

İxraclar yükləmələrdir. Onlar kompüterinizdə hesablamadan və açıq PDF-lərdən hazırlanır; heç yerə göndərilmir.

## Smeta cədvəl kimi (XLSX)

1. Alətlər panelində {{ui:İxrac}} menyusunu açın və {{ui:XLSX}} seçin.
   Brauzeriniz `(ad).xlsx` faylını yükləyir. Status paneli "(ad).xlsx ixrac edildi (canlı düsturlu smeta, vərəqə görə, işarələr, miqyaslar)." yazır və smeta natamam olduqda xəbərdarlıq əlavə edir.
2. Onu cədvəl proqramınızda açın.

İş kitabında dörd iş vərəqi var və tətbiq olunduqda aşağıdakı hesabatlar:

| İş vərəqi | Nəyi saxlayır |
|---|---|
| Smeta | Hər element və komponent üçün bir sətir: miqdar, itki, itkili miqdar, dərəcələr, material, əmək, cəm, qeydlər. Aşağıda ümumi cəm. |
| Vərəqə görə | Hər elementin hər vərəqdəki miqdarı, işarələrin sayı ilə. |
| İşarələr | Hər işarə: vərəq, element, növ, miqdar və ətraflı (seqment uzunluqları, ümumi və kəsik sahələri, perimetr). |
| Miqyaslar | Miqyası və ya işarələri olan hər vərəq: miqyası, necə təyin olunduğu (hazır, və ya hansı məsafədə kalibrləndiyi) və PDF vahidi başına fut. |
| Hesablama xülasəsi | Hər elementin miqdarı, CSI nömrəsi, işarələri və vərəqləri, qiymətsiz. |
| Material siyahısı | Hesablama üzrə bütün yığım hissələri toplanıb (bir neçə elementdə istifadə olunan eyni hissə bir sətirdir), itki və material dəyəri ilə, və onu istifadə edən elementlərlə. |
| Qiymət sorğusu | Təchizatçıya göndərmək üçün material siyahısı: itkili miqdarlar, boş vahid-qiymət sütunu, qiymətlər yazıldıqca dolan uzantılar və cəm. |
| Bölmə üzrə | Material, əmək və cəm CSI MasterFormat bölməsi üzrə, elementlərdə {{ui:CSI nömrəsi}} olduqda. |

[Tender təklifi xülasəsi](topic:bid-summary) ilə Smeta iş vərəqi də öz markup-ları ilə bitir (əmək yükü, satış vergisi, üstəlik xərclər, mənfəət, zəmanət və təklif) canlı düsturlar kimi.

Smeta iş vərəqi **canlı düsturları** saxlayır: itkili miqdar, yuvarlaqlaşdırılmış material və əmək məbləğləri, hər sətrin cəmi və ümumi cəm. Cədvəl proqramları onları yenidən hesablayır, ona görə dərəcəni və ya itkini cədvəldə dəyişdikdə cəmlər izləyir. TakeoffCraft-ın hesablaması da xanalarda saxlanılır və sentə qədər uyğundur.

Qeydlər sütunu hər komponentin düsturunu, düstur xətalarını, miqyası olmayan vərəqdəki işarələri, divar sahəsini və perimetri sadalayır. Bir şey buraxıldıqda ümumi cəm sətri "Natamam: yuxarıdakı qeydlərə baxın" yazır.

İş kitabı LibreOffice Calc-da yoxlanılıb və o, eyni cəmləri yenidən hesablayıb. Excel-də hələ açılmayıb. Sütun-sütun təsvirlər: [İxrac sütunları](topic:export-columns).

## Smeta CSV kimi

{{ui:İxrac}} menyusunu açın və {{ui:CSV}} seçin. `(ad).csv` alırsınız: Smeta iş vərəqi ilə eyni sətirlər və sütunlar, sadə dəyərlər kimi (düsturlar yoxdur), və ümumi cəm. Onu başqa smeta və ya mühasibat sisteminə yapışdırmaq üçün istifadə edin.

CSV yalnız smetanı saxlayır; vərəqə görə miqdarlar və işarə siyahısı üçün XLSX istifadə edin. Eyni menyudakı {{ui:Material siyahısı}} material siyahısını tək başına sifariş üçün CSV kimi saxlayır.

## Smeta Google Sheets-də

Miqdarlar cədvəlinin üstündə **Google Sheets üçün kopyala** smetanı sekmə ilə ayrılmış mətn kimi buferinizə qoyur, CSV ilə eyni sətirlərlə. Google Cədvəldə A1 xanasına klikləyin və yapışdırın. TakeoffCraft Google-a daxil olmur və orada heç nə göndərmir.

## Çatışmayan dərəcələr və təsdiq

Miqdarı olan, lakin dərəcəsi olmayan sətir Qeydlərində **Dərəcə yoxdur** yazır və ixrac onları cəmlərdə sayır. Smeta təsdiqləndikdə ixrac kimin, nə vaxt və hansı cəm üçün təsdiqlədiyini göstərir. Bax: [Çatışmayan dərəcələr və smetanın təsdiqi](topic:sign-off-the-estimate).

## İşarələnmiş PDF

1. İşarələrinin çəkilməsini istədiyiniz PDF-ləri açın.
2. {{ui:İxrac}} menyusunu açın və {{ui:İşarələnmiş PDF}} seçin.
   "İşarələnmiş PDF yazılır…" göstərilir, sonra brauzeriniz hər işarələnmiş PDF üçün bir fayl yükləyir, `(PDF adı) (takeoff).pdf` adı ilə.

Nüsxədə:

- Çəkilmiş xətlər öz element rənglərində çəkilir,
- sahələr bərk konturla yüngülcə doldurulur, kəsiklər açıq saxlanılır,
- saylar nöqtələrdir,
- işarələri olan hər səhifənin sol aşağı küncündə kiçik legenda var: həmin səhifədə hər elementin rəngi, adı və miqdarı.

Orijinal PDF-lər dəyişmir.

Qeydlər:

- Yalnız açıq PDF-lər yazılır. Açıq olmayan PDF-lərdəki işarələr cəmlərdə qalır, lakin çəkilmir; əvvəlcə həmin PDF-ləri açın.
- Legendadakı adlar standart PDF şrifti ilə yazılır. Göstərə bilmədiyi hərflər "?" kimi çap olunur.
- Şifrələnmiş PDF işarələrlə kopyalana bilməz: "Bu PDF parolla qorunur və ya şifrələnib, ona görə işarələnmiş nüsxə yazıla bilmir. Hesablamanın özü qaydasındadır; onun əvəzinə cədvəli ixrac edin."
- Brauzer sekmesində ilk {{ui:İşarələnmiş PDF}} PDF yazıcını yükləyir. Oflayn olduqda, o, yalnız tətbiq panelində {{ui:Oflayn hazırdır}} göründükdə mövcud olur; bax [Oflayn işləmə](common:offline).

:::chromium
Bir neçə işarələnmiş PDF ilə Chrome və Edge bu saytın bir neçə fayl yükləməsinə icazə verib-vermədiyini bir dəfə soruşa bilər. İcazə ver seçin, əks halda yalnız ilk fayl alınacaq.
:::

## İxrac ediləcək bir şey yoxdur?

- {{ui:XLSX}} və {{ui:CSV}} ən azı bir element tələb edir: "İxrac ediləcək hələ heç nə yoxdur: element yaradın və onu hesablayın."
- {{ui:İşarələnmiş PDF}} açıq PDF-də işarə tələb edir: "Açıq PDF-lərdə hələ işarə yoxdur."

## Hesablamanı da saxlayın

İxrac hesabatdır. Hesablamanı sonra davam etdirmək üçün {{ui:Hesablamanı saxla}} da seçin: bax [Hesablamanı saxlayın və yenidən açın](topic:save-and-reopen).

Üstəlik xərclər, mənfəət, vergi və zəmanət əlavə edib təklif göndərmək üçün bax [Tender təklifi xülasəsi və təklif](topic:bid-summary).
