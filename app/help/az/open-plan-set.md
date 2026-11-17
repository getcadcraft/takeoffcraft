---
title: Hesablamaya başlayın və plan dəstini açın
summary: Bir və ya bir neçə PDF-i plan dəsti kimi açın, vərəqlər arasında yol tapın və onlar arasında keçid edin.
keywords: aç, plan dəsti, bir neçə pdf, çoxlu fayl, vərəqlər, çertyojlar, səhifə etiketləri, vərəq siyahısı, naviqasiya, buraxma, ötürmə, başqa tətbiqdə aç, işarələmə
from: ed434468
---

Plan dəsti çox vaxt bir neçə PDF-dir: memarlıq, konstruksiya, mexaniki. TakeoffCraft onları yan-yana, vərəqlərin bir siyahısı kimi açır və bir hesablama bunların hamısını əhatə edə bilər.

## PDF-ləri açın

1. **Fayl** qrupunda {{ui:Planları aç}} seçin və ya {{key:Mod+O}} basın. (Digər menyu üslublarında bu, {{ui:PDF-ləri açın…}} adlanır.)
2. Fayl dialoqunda dəstin hər PDF-ini seçin. Bir neçəsini seçmək üçün {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} basın, diapazon seçmək üçün {{key:Shift}}.
3. **Aç** seçin.
   Hər fayl oxunarkən "(ad) açılır…" mesajı görünür. Sonra hər səhifə **Vərəqlər** altında görünür və ilk yeni PDF-in birinci səhifəsi açılır.

PDF-ləri {{pick:mac=Finder|windows=File Explorer|linux=fayl meneceriniz}}dən sürükləyib TakeoffCraft-ın istənilən yerinə buraxa bilərsiniz. Sürüklədiyiniz zaman "PDF, DWG və ya DXF çertyojlarını və ya .takeoff.json faylını buraxın" çərçivəsi görünür.

Sonra əlavə PDF-lər əlavə etmək üçün eyni addımları təkrarlayın. Artıq açıq olan PDF-lər atlanır.

Başlanğıc ekranında son açdığınız PDF-lər və hesablamalar da siyahılanır; bu, səhifənin faylı yenidən aça bildiyi brauzerlərdə (Chrome və Edge) işləyir. Birini klik edin; brauzer əvvəlcə icazə istəyə bilər. Bax: [Fayllarınız](common:your-files).

:::note
Heç nə yüklənmir. Brauzer PDF-ləri kompüterinizdə oxuyur, onlar sekmə bağlandıqda və ya {{ui:Yeni}} seçildikdə TakeoffCraft-dan silinir.
:::

## Çertyojlar PDF-lərin yanında

{{ui:Planları aç}} DWG və DXF çertyojlarını da qəbul edir, tək və ya PDF-lərlə birlikdə: hər çertyojun model fəzası və tərtibatları eyni siyahıda vərəqlərə çevrilir. Bax: [DWG və ya DXF çertyojunu açın](topic:open-a-drawing), sonra [Çertyojdan say](topic:count-from-a-drawing).

## Başqa tətbiqdən təhvil verilmiş PDF

CadCraft ailəsindəki başqa bir tətbiq açıq olan PDF-i sizə verə bilər: yeni sekmədə TakeoffCraft-ı açır və PDF orada sanki buraxmısınız kimi açılır. Status zolağı "Açıldı (ad), təhvil verildi (tətbiq). Orijinal fayl dəyişməyib." deyir. Heç nə yüklənmir; fayl bu brauzerin öz yaddaşından keçir və açıldıqdan sonra oradan silinir.

Əgər status zolağı PDF-in "gəlmədiyini" deyirsə, sekmə çox gözləyib ya da PDF artıq başqa sekmədə açılıb: onu {{ui:Planları aç}} ilə açın.

Tərsinə, MarkupCraft işlədiyiniz yerdə işləyib fayl qəbul edə biləndə, çertyojun altındakı vərəq zolağında {{ui:MarkupCraft}} düyməsi var: ekranda olan vərəqin PDF-ini yeni sekmədə MarkupCraft-da açır ki, baxıb işarələyəsiniz.

## Vərəq tapın

- Soldakı **Vərəqlər** siyahısını sürüşdürün və vərəqə klik edin.
- Siyahının üstündəki **Vərəqləri axtarın** sahəsinə yazın: vərəq nömrəsi, fayl adı və ya səhifə etiketinə görə süzür. {{ui:Vərəqlər}} yanındakı say süzgəc aktiv olanda "40-dan 3" göstərir.
- Növbəti vərəq üçün {{key:PageDown}}, əvvəlkinə üçün {{key:PageUp}} basın. Onlar süzülmüş siyahını izləyir.

:::mac
Page Up və Page Down düymələri olmayan Mac klaviaturasında yuxarı və ya aşağı ox ilə birlikdə fn basın.
:::

## Vərəqlər necə adlanır

- PDF-in verdiyi etiketi olan səhifə, məsələn `A-101`, həmin etiketlə adlanır.
- Etiketi olmayan (ya da yalnız səhifə nömrəsi olan etiketi olan) səhifə "(fayl adı), səhifə (n)" adlanır.
- Bir neçə PDF açıq olanda, etiketli vərəqlər fayl adını da daşıyır: "A-101 — Architectural".

Vərəqlərin adları hələ əl ilə yazıla bilmir.

## Vərəqin ətrafında baxın

- Siçan təkərini çevirin: göstərici altında yaxınlaşdırır.
- Sol və ya orta düymə ilə sürükləyərək sürüşdürün. {{ui:Avtomatik say}} ilə, ya da işarənin küncündən başlayanda {{key:Space}} basılı saxlayın və sürükləyin, ya da orta düymə ilə sürükləyin.
- Bütün vərəqi görmək üçün {{key:F}} basın və ya {{ui:Səhifəyə sığdır}} seçin; {{key:W}} ya da {{ui:Enə sığdır}} onun enini sığdırır.
- Görünüşün ortası ətrafında yaxınlaşmaq üçün {{key:Plus}} ya da {{key:=}}, uzaqlaşmaq üçün {{key:Minus}} basın.

Hər vərəq açıq qaldığı müddətdə öz yaxınlaşdırmasını və mövqeyini yadda saxlayır.

## Növbəti

Vərəqi ölçməzdən əvvəl ona miqyas lazımdır: [Miqyası təyin edin](topic:set-the-scale).
