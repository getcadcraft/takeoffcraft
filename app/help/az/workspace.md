---
title: TakeoffCraft ekranı
summary: Pəncərənin ekrandakı adları ilə tur - alət paneli, vərəqlər siyahısı, vərəq, Elementlər paneli, Miqdarlar cədvəli və status sətri.
keywords: ekran, tərtibat, lent, layihə brauzeri, alət qutusu, məlumat qutusu, alət paneli, panellər, vərəqlər siyahısı, elementlər paneli, miqdarlar, status sətri, tur, interfeys
from: ab1115e0
---

TakeoffCraft CadCraft tətbiq panelinin altında brauzer pəncərəsini doldurur. Yuxarıdan aşağıya və soldan sağa:

| Hissə | Harada | Nə üçündür |
|---|---|---|
| Tətbiq paneli | Ən yuxarıda | Tətbiqin adı, versiya, {{ui:TakeoffCraft haqqında}}, {{ui:Kömək}} ({{key:F1}}), {{ui:Oflayn üçün saxla}}, {{ui:Parametrlər}} ({{key:Mod+,}}), {{ui:Tam ekran}} düyməsi və {{ui:Kağız}} / {{ui:Model}} mövzu keçidi. |
| Alət paneli | Tətbiq panelinin altında | Hər əmr qruplarda: {{ui:Fayl}}, {{ui:İxrac}}, {{ui:Miqyas}}, {{ui:Hesablama}}, {{ui:Redaktə}}, {{ui:Görünüş}}. |
| Vərəqlər | Solda | Hər açıq PDF-in hər səhifəsi, miniaturu, miqyası və nişan sayı ilə. |
| Vərəq | Ortada | Açıq səhifə. Ölçüləri burada aparırsınız. |
| Elementlər | Sağda | Hesablama elementləriniz, seçilmiş elementin parametrləri və seçilmiş nişan. |
| Miqdarlar | Aşağıda | Elementə və ya vərəqə görə miqdarlar və dəyərlər, və layihənin cəmi. |
| Status sətri | Ən aşağıda | Canlı ölçü, mesajlar, 45° işarəsi və zoom. |

## Alət paneli

Hər düymənin üzərinə gəlin, nə etdiyini və qısayolunu görün.

| Qrup | Düymələr |
|---|---|
| {{ui:Fayl}} | {{ui:Yeni}} (boş hesablama), {{ui:PDF-ləri aç}} ({{key:Mod+O}}), {{ui:Hesablamanı aç}} (`.takeoff.json` layihəsi), {{ui:Hesablamanı saxla}} ({{key:Mod+S}}) |
| {{ui:İxrac}} | Bir menyu: {{ui:XLSX}}, {{ui:CSV}}, {{ui:İşarələnmiş PDF}} |
| {{ui:Miqyas}} | {{ui:Kalibrlə}} ({{key:K}}), {{ui:Yoxla}} ({{key:D}}) və {{ui:Hazır}} siyahısı |
| {{ui:Hesablama}} | {{ui:Seç}} ({{key:V}}), {{ui:Xətti}} ({{key:L}}), {{ui:Sahə}} ({{key:A}}), {{ui:Dairə}} ({{key:O}}), {{ui:Qövs}} ({{key:R}}, aç/bağla keçidi), {{ui:Çıxılsın}} ({{key:E}}, aç/bağla keçidi), {{ui:Deşik}} ({{key:X}}), {{ui:Say}} ({{key:C}}), {{ui:Avtomatik say}} ({{key:S}}) |
| {{ui:Redaktə}} | {{ui:Geri qaytar}} ({{key:Mod+Z}}), {{ui:Təkrarla}} ({{key:Mod+Y}}), {{ui:Kopyala}} ({{key:Mod+C}}), {{ui:Yapışdır}} ({{key:Mod+V}}) və {{ui:Əlavə}}: {{ui:Kəs}}, {{ui:Kopyala}}, {{ui:Yapışdır}}, {{ui:Yerində yapışdır}}, {{ui:Surətini çıxar}}, {{ui:Sil}}, {{ui:Hamısını seç}}, {{ui:Heç nəyi seçmə}} |
| {{ui:Görünüş}} | {{ui:Səhifəyə sığdır}} ({{key:F}}), {{ui:Enə sığdır}} ({{key:W}}) |

İstifadə etdiyiniz alət basılmış görünür. {{ui:Qövs}} və {{ui:Çıxılsın}} düymələri aktiv olduqda basılmış qalır.

## Vərəqlər (solda)

- **Vərəqləri axtar** siyahını vərəq adına, fayl adına və ya səhifə etiketinə görə süzür.
- Hər sətirdə miniatur (siz sürüşdürdükcə çəkilir), vərəqin adı və miqyası və ya **Miqyas yoxdur** göstərilir.
- Hər sətrin sağ tərəfi vərəqdə neçə nişan olduğunu göstərir. Elementə klik edib vurğulandıqda isə həmin elementin nişanlarından neçəsinin bu vərəqdə olduğunu göstərir.
- Vərəqi açmaq üçün klikləyin. {{key:PageDown}} və {{key:PageUp}} siyahıda növbəti və əvvəlki vərəqə keçir.
- Hesablama açıq olmayan PDF-ləri əhatə edəndə siyahının altında onları adlandıran qeyd görünür. Bax: [Hesablamanı saxlayın və yenidən açın](topic:save-and-reopen).

Vərəq adları PDF-dən gəlir: `A-101` kimi səhifə etiketi vərəq adına çevrilir. Etiketi olmayan səhifə faylının adı və səhifə nömrəsi ilə adlanır, məsələn "Planlar, səhifə 3". Bir neçə PDF açıq olduqda etiketli vərəqlər fayl adını da göstərir.

## Vərəq (ortada)

- Vərəqin altındakı çubuqda vərəq adı və miqyası və ya "Hələ miqyas yoxdur: hazır seçin və ya kalibrləyin" göstərilir. Onun düymələri: {{ui:MarkupCraft}} (həmin tətbiq PDF-i qəbul edə bildikdə; bax: [Hesablamaya başlayın və plan dəstini açın](topic:open-plan-set)), {{ui:Müqayisə et}} (vərəqin köhnə versiyasını bu vərəqin üzərində göstərir: [Yenidən baxılmış vərəqi müqayisə edin](topic:compare-revisions)), "(n) yoxlanmalı" (işarələnmiş nişanlar, varsa) və {{ui:3D}} ([3D yoxlama görünüşü](topic:check-in-3d)).
- Heç bir PDF açılmayana qədər ortada qısa beş addımlı bələdçi göstərilir.
- Təkər göstəricinin altında zoom edir. Sürükləyərək sürüşdürün. Bax: [Klaviatura və siçan](topic:keyboard).
- {{ui:Avtomatik say}} istifadə edərkən vərəqin yuxarısında nəzarətləri olan zolaq görünür.

## Elementlər (sağda)

Yuxarıda {{ui:Tender bölməsi}} siyahısı var: yeni nişanların düşəcəyi bina, mərtəbə və ya mərhələ ([Tender bölmələri](topic:bid-areas)).

- {{ui:Yeni element}} kiçik forma açır: ad, növ ({{ui:Xətti (uzunluq)}}, {{ui:Sahə}} və ya {{ui:Say}}) və {{ui:Əlavə et}}.
- Siyahıda hər elementin rəngi, növ işarəsi, adı və miqdarı göstərilir. Elementə klik edib onunla çəkin və onun nişanlarını bütün vərəqlərdə vurğulayın. Vurğulamanı dayandırmaq üçün yenidən klik edin.
- Siyahının altında **Element: (ad)** elementin redaktorudur: ad, növ, rəng, vahid, hündürlük və ya dərinlik, tullantı, material və əmək dərəcələri, ölçülmüş dəyərlər və {{ui:Yığım}}. Bax: [Hesablama elementləri yaradın](topic:create-items).
- **Seçilmiş nişan** nişan seçdikdə görünür: hansı elementə aid olduğu, vərəqi, ölçüləri və {{ui:Deşik əlavə et}} və {{ui:Nişanı sil}} kimi düymələr. Bir neçə nişan seçildikdə **Seçilmiş nişanlar** olur: hər elementdən neçə dənə olduğu və {{ui:Kopyala}}, {{ui:Surətini çıxar}}, {{ui:Kəs}} və {{ui:Nişanları sil}}.
- Element redaktoru {{ui:Elementi kopyala}} və {{ui:Elementi çoxalt}} ilə bitir: yığımı və dəyərləri olan, lakin nişanı olmayan element. Bax: [Nişanları kopyalayın, yapışdırın və surətini çıxarın](topic:copy-paste).

## Miqdarlar (aşağıda)

- {{ui:Elementə görə}} hər elementi və onun yığım komponentlərini miqdar, tullantı, dərəcələr və genişləndirilmiş dəyərlərlə siyahılayır. Tullantı və dərəcələri birbaşa cədvələ yaza bilərsiniz.
- {{ui:Vərəqə görə}} hər elementin hər vərəqdəki miqdarını siyahılayır.
- **Natamam:** ilə başlayan xəbərdarlıq, cəmə daxil edilməyən bir şey olduqda görünür.
- {{ui:Layihənin cəmi}} başlıqın sağındadır.
- Ən sağdakı ox düyməsi cədvəli gizlədir və ya göstərir ki, vərəqə daha çox yer olsun.

Bax: [Miqdarları və smetanı oxuyun](topic:read-quantities).

## Status sətri (aşağıda)

Soldan sağa: çəkərkən canlı ölçü (uzunluq, sahə, radius və ya yoxlama nəticəsi), uzunluq yazarkən {{ui:Yaz}} qutusu, TakeoffCraft-ın mesajları, "Shift 45°-ə tutur" xatırlatması (və ya [Parametrlər](topic:settings)-də bu aktiv olduqda "45°-ə tutur; Shift bucağı azad edir"), {{ui:Tutma}} düyməsi (çertyojun xəttlərinə tutma, vurğulandıqda aktiv; {{key:F3}}) və zoom faizi.

:::tip
Bir şey baş vermədikdə status sətrini oxuyun. TakeoffCraft orada klikə niyə icazə vermədiyini izah edir, məsələn "Bu vərəqin hələ miqyası yoxdur".
:::

## Digər tərtibatlar

Yuxarıdakı hər şey {{ui:CadCraft klassik}} tərtibatıdır, başlanğıc. {{ui:Parametrlər}} ({{key:Mod+,}}) › {{ui:Qlobal}} › {{ui:Tərtibat}} daha iki tərtibat təklif edir; eyni alətlər və qısayollar hər üçündə işləyir və {{ui:CadCraft klassik}}-i yenidən seçmək hər nəzarəti əvvəlki yerinə qaytarır.

| Tərtibat | TakeoffCraft-da |
|---|---|
| {{ui:Lent və layihə brauzeri}} | Yuxarıda {{ui:Həcmlərin hesablanması lenti}} ([Menyular, qısayollar və siçan](topic:menus-keys-and-mouse)), işləyən alət üçün zolaq, hər açdığınız vərəq üçün sekme (çertyojun Model və tərtibatları da vərəqdir) və vərəqin altında miqyas hazırları və {{ui:Səhifəyə sığdır}}. Sol panel {{ui:Xassələr}} (seçilmiş element, qeyd və ya nişan) və onun altında {{ui:Həcmlərin hesablanması brauzeri}} var: {{ui:Vərəqlər}} (birinə klik edib sekmədə açın), {{ui:Şərtlər}} (birinə klik edib onunla çəkin) və {{ui:Smeta}} (hər elementin cəmi və layihənin cəmi); miniaturlar ikinci sekmədir. |
| {{ui:Alət qutusu və məlumat qutusu}} | Vərəqin üzərindəki alət paneli, {{ui:Tender bölməsi}}, işləyən alət və ya seçim və vərəq zolağı olan məlumat qutusu, sol tərəfdə hesablama alətlərinin sütunu, hər vərəq üçün sekme və vərəqin altında {{ui:Tutma}} və zoom. |

3D yoxlama görünüşü açıq olduqda vərəq sekmələri və vərəqin altındakı zolaq kənara çəkilir; yenidən ölçmək üçün 3D görünüşünü bağlayın. Telefonda həmişə telefon tərtibatı işləyir.

## Tam ekran və mövzular

{{ui:Tam ekran}} düyməsi tətbiq panelində və ya {{key:Ctrl+Shift+F}} (hər platformada Control, Mac-da da) normal, tam ekran və zolaqları gizlədilmiş tam ekran arasında keçir. Zolaqlar gizli olduqda göstəricini yuxarı kənara aparın ki, onlar yenidən görünsün.

{{ui:Kağız}} açıq mövzudur, {{ui:Model}} isə tünddür. {{ui:Model}}-də çertyoj yalnız ekranda tərsinə göstərilir (açıq xətlər tünd fonda); ixraclar heç vaxt dəyişdirilmir.
