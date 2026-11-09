---
title: TakeoffCraft ilə başlamaq
summary: TakeoffCraft nə edir, harada işləyir və PDF plan dəstindən ilk ölçülmüş və qiymətləndirilmiş elementiniz.
keywords: başlanğıc, ilk hesablama, sürətli başlanğıc, giriş, smeta, miqdar hesablaması, plan dəsti, pdf
from: 3b9da1fb
---

TakeoffCraft PDF-ləri, plan dəstlərini və DWG və ya DXF çertyojlarını ölçür və ölçüləri qiymətləndirilmiş smetaya çevirir. Faylları açırsınız (çertyoj blokları ilə birbaşa hesablanır: bax [DWG və ya DXF çertyojunu açın](topic:open-a-drawing)), hər vərəqə miqyas verirsiniz (çertyojun öz miqyası var), **elementlər** yaradırsınız (divar növü, döşəmə örtüyü, avadanlıq) və hesablamaq üçün vərəqlərdə klikləyirsiniz. Miqdarlar, dəyərlər və layihənin cəmi siz işlədikcə yenilənir. Smetanı elektron cədvəl kimi və üzərində hesablamanız çəkilmiş PDF nüsxəsi kimi ixrac edə bilərsiniz.

Başqa hesablama proqramlarında işləmisinizsə, növbəti olaraq [Başqa hesablama proqramlarından gəlmək](topic:coming-from) bölməsini oxuyun. Burada bəzi şeylər fərqli işləyir.

## Harada işləyir

TakeoffCraft veb brauzerinizdə işləyir. TakeoffCraft-ı açın və ekran dərhal hazırdır; heç nə quraşdırmaq lazım deyil.

- **PDF-lərinizə kompüterinizdə qalır.** Brauzer onları açır və heç vaxt yüklənmir. Saxlama yükləmədir.
- Cari Chrome, Edge, Firefox və Safari-də işləyir. Bax: [Brauzerlər və kompüterlər](common:browsers).
- Tətbiq panelində {{ui:Oflayn üçün saxla}} seçib {{ui:Oflayn hazırdır}} yazısını gördükdən sonra internet bağlantısı olmadan da işləyir. Bax: [Oflayn işləmək](common:offline).
- Bulud saxlanması hələ mövcud deyil. Masa üstü tətbiq üçün TakeoffCraft digər yeddi tətbiqlə birlikdə CadCraft Studio-da gəlir.

## Hesablamanızın ilk on addımı

Bu təlimat bir divar növünü ölçür və qiymətləndirir. Hər hansı planda bir neçə dəqiqə çəkir.

1. Alət panelinin {{ui:Fayl}} qrupunda {{ui:Planları aç}} seçin (və ya {{key:Mod+O}} basın), bir və ya bir neçə PDF seçin və Aç seçin. PDF-ləri səhifənin istənilən yerinə də ata bilərsiniz.
   Vərəqlər solda görünür və birinci vərəq ortada açılır.
2. Vərəqin çap edilmiş miqyasını onun başlıq blokunda və ya çertyoj adının altında tapın.
3. {{ui:Miqyas}} qrupunda {{ui:Hazır}} siyahısını açın və həmin miqyası seçin, məsələn `1/4" = 1'-0"`.
   Vərəqin altındakı çubuqda indi "Miqyas 1/4" = 1'-0"" yazılır.
4. {{ui:Yoxla}} seçin (və ya {{key:D}} basın) və çertyojda çap olunmuş ölçünün iki ucuna klikləyin.
   Sol aşağıdakı status sətrindəki göstərici çap olunmuş ölçüyə uyğun olmalıdır. Uyğun deyilsə, bax: [Miqyası təyin edin](topic:set-the-scale).
5. Sağdakı {{ui:Elementlər}} panelində {{ui:Yeni element}} seçin, `Daxili divar növü A` kimi ad yazın, növü {{ui:Xətti (uzunluq)}} olaraq buraxın və {{ui:Əlavə et}} seçin.
6. Alət panelində {{ui:Xətti}} seçin (və ya {{key:L}} basın).
7. Divarın başlanğıcına, sonra boyunca hər künclərə klikləyin. Xətti bitirmək üçün iki dəfə klikləyin, {{key:Enter}} basın və ya sağ klikləyin.
   Xətt elementin rəngində çəkilir və onun uzunluğu elementin yanında görünür.
8. {{ui:Elementlər}} altındakı element redaktorunda {{ui:Hündürlük}} sahəsinə `9'-0"`, {{ui:Material $/LF}} sahəsinə `0.85` və {{ui:Əmək $/LF}} sahəsinə `1.20` yazın.
   Aşağıdakı {{ui:Miqdarlar}} cədvəli uzunluğu, genişləndirilmiş material və əməyi və {{ui:Layihənin cəmi}} göstərir.
9. {{ui:Hesablamanı saxla}} seçin (və ya {{key:Mod+S}} basın).
   Brauzeriniz `.takeoff.json` faylı yükləyir. Burada elementləriniz, miqyaslarınız və nişanlarınız saxlanılır və eyni PDF-lərin üzərində yenidən açılır.
10. Alət panelində {{ui:İxrac}} menyusunu açın və smetanı elektron cədvəl kimi yükləmək üçün {{ui:XLSX}} seçin.

:::tip
{{key:Esc}} basın ki, nə edirsinizsə dayansın və {{ui:Seç}} alətinə qayıdın. {{key:Mod+Z}} istənilən dəyişikliyi geri qaytarır.
:::

## Sonra nə oxumaq

- [TakeoffCraft ekranı](topic:workspace) pəncərənin hər hissəsini adlandırır.
- [Hesablamaya başlayın və plan dəstini açın](topic:open-plan-set) bir neçə PDF və vərəqlər siyahısını əhatə edir.
- [Hesablama elementləri yaradın](topic:create-items) növləri, vahidləri, tullantıları və dərəcələri izah edir.
- [Yığımlar və düsturlar](topic:assemblies) bir ölçünü karkas dirəklərinə, lövhə vərəqlərinə və s.-yə çevirir.
- [Klaviatura və siçan](topic:keyboard) hər düyməni sadalayır.
