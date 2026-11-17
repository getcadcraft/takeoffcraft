---
title: Hələ hazırlanmamış imkanlar
summary: Bu versiyada olmayan hesablama imkanları və bu gün onların əvəzinə nə etmək olar.
keywords: limitlər, çatışmır, hələ deyil, yol xəritəsi, planlaşdırılıb, əvəzedici üsul, hər iş üçün, bulud, masaüstü
from: 94ff90d0
---

TakeoffCraft inkişaf mərhələsindədir. Bu siyahıda cari versiyanın etmədiyi işlər və onları yenə də necə görmək olar göstərilir.

## Ölçmə

| Hələ hazırlanmayıb | Əvəzində, bu gün |
|---|---|
| Xəttin və ya konturun ortasına nöqtə əlavə etmək | İşarəni silin və yenidən çəkin. |
| Qutu (pəncərə) ilə seçmə | Hər işarəyə {{key:Shift}} + klik edin, ya da vərəqdəki bütün işarələr üçün {{key:Mod+A}}. Bax: [İşarələri kopyalamaq, yapışdırmaq və təkrarlamaq](topic:copy-paste). |
| Yapışdırılmış nüsxəni fırlatmaq, güzgü əksini almaq və ya miqyasını dəyişmək | Vərəqdə eyni miqyasda və eyni istiqamətdə yapışdırın; qalanını əl ilə çəkin. |
| Skan edilmiş vərəqdən və ya qrafik miqyas çubuğundan miqyası oxumaq | Hazır seçimi seçin, ya da çubuğun uzunluğu üzrə kalibrləyin. |
| Bir vərəqdə bir neçə miqyas (detal sahələri, böyüdülmüş planlar) | Hissəni vərəqin miqyasında ölçün; dəstdə varsa, detalı öz böyüdülmüş vərəqində hesablayın. |

## Elementlər və qiymətləndirmə

| Hələ hazırlanmayıb | Əvəzində, bu gün |
|---|---|
| Yığım düsturları elementin digər növ işarələrindən istifadə edir (otaq elementinin qapıları onun mərtəbəsinin düsturlarında) | Düsturlar əsas növün cəmlərindən istifadə edir; digər növləri ayrı sətirlərdə qiymətləndirin. |
| Yığım düsturları hər xətt üzrə ayrıca hesablanır | Düsturlar elementin cəmlərindən istifadə edir; hər xətt üzrə əlavələr üçün `N` yazın. |
| Başqa elementin miqdarlarından istifadə edən düsturlar | Ölçünü həmin elementdə təkrarlayın, ya da onu cədvəl ixracında hesablayın. |
| Yığım komponentləri üzrə briqadalar, ya da 8 saatdan fərqli iş günü | Briqadanı elementə verin; başqa iş günü uzunluğu üçün briqada-günlərini briqada-saatı ÷ iş gününüz kimi oxuyun. |
| Qeydlər, buludlar və vurğulardan başqa işarələmələr (oxlar, ölçülər, möhürlər) və ya qeydə cavablar | Mətni qeydin mətninə yazın; məsələ həll olunduqca statusunu dəyişin. |
| Komanda ilə paylaşılan və ya hesabınızda saxlanan qiymət kitabxanası | Kitabxana bu brauzerdə saxlanılır: onu CSV kimi ixrac edin və digər kompüterdə idxal edin. |
| Praktiki smeta mütəxəssisləri tərəfindən yoxlanılmış peşə paketləri | Hər paket başlanğıc üçündür: qiymət verməzdən əvvəl onun fərziyyələrini öz işinizə və məhsullarınıza görə yoxlayın. Bax: [Peşə paketləri](topic:trade-packs). |
| Peşə paketlərindəki qiymətlər | Paketlər yalnız yığımları gətirir: öz dərəcələrinizi təyin edin, ya da qiymət siyahınızı CSV kimi idxal edin. |
| Hesablamanın adını dəyişmək | Ad birinci PDF-dən götürülür; endirilmiş faylların adını dəyişin. |
| Vərəqlərə əl ilə ad vermək | Vərəqlərin adı PDF-in səhifə etiketlərindən götürülür; fayl adına və səhifəyə görə axtarın. |

## Çertyojlar (DWG və DXF)

| Hələ hazırlanmayıb | Əvəzində, bu gün |
|---|---|
| Çertyoj vərəqlərində çap üslub cədvəlləri, qələm təyinatları və CTB faylları | Çertyoj qara rəngdə çəkilir, ya da kağız üçün rəngləri tündləşdirilir; xətlərin qalınlığı çertyojdan götürülür. |
| Binar DXF-in və ya AutoCAD 2000-dən köhnə DWG-nin açılması | ASCII DXF və ya daha yeni DWG kimi saxlayın. |
| Əlaqəli çertyojun (xref) yerləşdiyi qovluğa görə tapılması | Əlaqəli çertyojun faylını da ana çertyoju ilə birlikdə açın: açıq fayllar arasında fayl adına görə tapılır. |
| 3D polixəttlərin, torların, cisimlərin və sahələrin ölçülməsi | Onları qat və növə görə sayın, ya da plan görünüşünü Xətti və Sahə alətləri ilə ölçün. |
| Latın olmayan yazılı çertyojdan işarələnmiş PDF-də mətn | Helvetica-nın şəkli olmayan simvollar işarələnmiş PDF-də "?" kimi çap olunur; ekrandakı çertyoja təsir etmir. |
| Vərəq zolağından çertyojun başqa tətbiqə ötürülməsi | Eyni faylı həmin tətbiqdə açın. |
| PDF-lərdə olduğu kimi, hesablamanı içində saxlayan çertyoj: {{ui:Hesablaması daxil edilmiş PDF}} | {{ui:Hesablamanı saxla}}: `.takeoff.json` eyni çertyojda yenidən açılır, məzmununa görə tapılır. |
| Çertyojda yerləşdirilmiş PDF altlıqları, şəkillər və OLE obyektləri (çertyojda yerləşən və ya sayılan) | Şəkillər yalnız çərçivə kimi görünür. Altlıq PDF-in özünü vərəq kimi açın. |

## Avtomatik say

| Hələ hazırlanmayıb | Əvəzində, bu gün |
|---|---|
| Miqyası başqa ölçüdə çəkilməmiş vərəqdə simvolların tapılması | Vərəqə miqyasını verin, ya da orada çəkilmiş qutu ilə axtarın. |
| Güzgü əksi simvolların tapılması | Onları əl ilə sayın, ya da güzgü əksi birinin ətrafına qutu çəkib yenidən axtarın. |

## Fayllar və paylaşma

| Hələ hazırlanmayıb | Əvəzində, bu gün |
|---|---|
| Həm işarələri göstərən, həm də hesablamanı daşıyan bir PDF | {{ui:İşarələnmiş PDF}} insanların işarələri görməsi üçün; {{ui:Hesablaması daxil edilmiş PDF}} TakeoffCraft-da yenidən açmaq üçün. |
| Vərəqlər üzrə miqdarların və ya işarələrin CSV-si | {{ui:XLSX}} istifadə edin: onun Vərəq üzrə və İşarələr iş səhifələrində bunlar var. |
| Buludda saxlama | Hələ mövcud deyil. Layihə fayllarını kompüterinizə saxlayın və ehtiyat nüsxəsini çıxarın. |
| Ayrıca TakeoffCraft masaüstü tətbiqi | 0.5-dən etibarən masaüstü tətbiqi CadCraft Studio-dur; bütün səkkiz tətbiq bir quraşdırmada. TakeoffCraft brauzerdə də işləyir. |

## Ekran və daxiletmə

| Hələ hazırlanmayıb | Əvəzində, bu gün |
|---|---|
| Sağ klik (ya da uzun basma) menyusu | Alətlər zolağından, panellərdən və klavişlərdən istifadə edin. Uzun basma xətti və ya konturu tamamlayır. |
| Görünüşün fırladılması | PDF-də fırlanmış səhifələr artıq düz görünür. |

## 3D görünüşü

| Hələ hazırlanmayıb | Əvəzində, bu gün |
|---|---|
| 3D-də işarələri çəkmək və ya redaktə etmək | Çəkmək üçün vərəqə qayıdın ({{key:3}}); seçmək və silmək 3D-də işləyir. |
| Səhifələrində müxtəlif yerlərdə çap olunmuş üst-üstə mərtəbələrin düzləşdirilməsi | Eyni cür çap olunmuş mərtəbələri üst-üstə qoyun; digərlərini bir-bir vərəqdə yoxlayın. |
| Sayılan obyektlə eyni ölçüdə dirəklərin sayılması | Vərəqdəki hər dirək eyni ölçüdədir; o, sayın harada olduğunu göstərir, nə olduğunu yox. |

## Tenderlər

| Hələ hazırlanmayıb | Əvəzində, bu gün |
|---|---|
| Artıq göndərilmiş paketə əlavələr, qalibiyyət məktubları, hər iştirakçının imzaladığı əhatə vərəqi | Yeni paket göndərin və qalibiyyət məktubunu özünüz yazın. [Tender üçün paket göndərin](topic:bid-invitations) mövcud olanları əhatə edir. |
| Tender dəvətlərinin istənilən hesabdan göndərilməsi: sınaq müddətində kənar iştirakçılara poçt göndərmə söndürülüb, yalnız CadCraft komandasının aktivləşdirdiyi hesablar istisnadır | {{ui:Əhatə CSV}}-ni endirin, özünüz e-poçtla göndərin və təklifləri əl ilə daxil edin. |
| Studio pəncərəsindən tender paketlərinin göndərilməsi | TakeoffCraft-dan brauzerdə göndərin. |
| Seçilmiş təklifə görə alternativin tender sahəsinin yenidən qiymətləndirilməsi | Alternativlər və tender sahəsi cəmləri öz qiymətlərinizi istifadə edir; alternativi əl ilə tənzimləyin. |
| Subpodratçının sığorta və ya lisenziya tarixi bitməmişdən əvvəl avtomatik xatırlatmalar | Tarix keçəndən və ya 30 gün qalmış Subpodratçılar səhifəsində qeyd olunur; dəvət edərkən yoxlayın. |

## Panellər

| Hələ hazırlanmayıb | Əvəzində, bu gün |
|---|---|
| {{ui:Miqdarlar}} cədvəlinin yerinin dəyişdirilməsi | Yalnız {{ui:Vərəqlər}} və {{ui:Elementlər}} panelləri yerini dəyişir. Bax: [Panelləri tənzimləyin](common:arrange-panels). |

## Cədvəllər

XLSX iş kitabı LibreOffice Calc-da yoxlanılıb; orada hər cəm TakeoffCraft ilə eyni qəpiyə qədər yenidən hesablanıb. Excel-də hələ açılmayıb. Əgər cədvəl proqramı gözlənilməz bir şey göstərsə, CSV ixracı eyni smetanı sadə dəyərlər kimi saxlayır.
