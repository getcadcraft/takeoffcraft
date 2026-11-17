---
title: Kopyalayın, yapıştırın ve işaretleri çoğaltın
summary: İşaretleri kalemleriyle birlikte kopyalayın, tıkladığınız yere ya da başka bir sayfada aynı yere yapıştırın, çoğaltın, kesin, silin ve tümünü seçin; her biri tek geri alma adımıdır.
keywords: kopyala, yapıştır, kes, çoğalt, olduğu yere yapıştır, pano, tümünü seç, birden çok işaret, tipik kat, tekrar, aynı plan, başka sayfa, kalemi kopyala, kalemi çoğalt
from: e20e9024
---

{{ui:Düzenle}} araç çubuğu grubu {{ui:Geri al}}, {{ui:Yinele}}, {{ui:Kopyala}} ve {{ui:Yapıştır}} seçeneklerini içerir. Onun {{ui:Daha fazla}} menüsünde kalanların her birinin tuşu vardır: {{ui:Kes}}, {{ui:Kopyala}}, {{ui:Yapıştır}}, {{ui:Olduğu yere yapıştır}}, {{ui:Çoğalt}}, {{ui:Sil}}, {{ui:Tümünü seç}} ve {{ui:Seçimi kaldır}}. Bunların hepsi {{key:Mod+Z}} ile tek adımda geri alınabilir.

## İşaretleri seçin

1. {{ui:Seç}} ({{key:V}}) seçin ve bir işarete tıklayın.
2. Daha fazla işaret eklemek için {{key:Shift}} tuşunu basılı tutun ve tıklayın. Seçili bir işarete {{key:Shift}} + tıklama, onu yeniden çıkarır.
3. Ya da açık sayfadaki her işareti seçmek için {{key:Mod+A}} ({{ui:Tümünü seç}}) tuşlarına basın.

Birden çok işaret seçiliyken sağ panel **Seçili işaretler**'i gösterir: her kalemden kaç tane olduğunu ve {{ui:Kopyala}}, {{ui:Çoğalt}}, {{ui:Kes}} ve {{ui:İşaretleri sil}} seçeneklerini. Köşe tutamaçları yalnızca bir işaret seçildiğinde görünür. {{key:Esc}} ({{ui:Seçimi kaldır}}) seçimi temizler.

## Tıkladığınız yere kopyalayın ve yapıştırın

1. İşaretleri seçin ve {{key:Mod+C}} ({{ui:Kopyala}}) tuşlarına basın. İşaretler kalemleriyle birlikte, her kalemin montajı, firesi ve maliyetleriyle kopyalanır.
2. İstediğiniz sayfaya gidin (aynı sayfa da olabilir).
3. {{key:Mod+V}} ({{ui:Yapıştır}}) tuşlarına basın. Kesik çizgili bir kopya işaretçiyi izler.
4. Gideceği yere tıklayın. Kopyalanan işaretlerin ortası işaretçinin olduğu yere gelir.

{{key:Esc}} iptal eder ve hiçbir şey eklemez. Yapıştırılan işaretler sonra seçili olur; bu yüzden {{key:Delete}} ya da {{key:Mod+Z}} onları yeniden kaldırır.

Aynı metrajda, yapıştırılan işaretler **aynı kalemlere** gider; böylece miktarları o kalemlere eklenir. Başka bir metrajda (başka bir sekme ya da {{ui:Yeni}} sonrası), aynı ada ve türe sahip bir kalem kullanılır; aksi halde kalem montajıyla birlikte eklenir. Ad başka türde bir kalem tarafından alınmışsa, eklenen kalem "(ad) (kopya)" olarak adlandırılır.

Yapıştırılan işaretler, {{ui:Kalemler}} panelinin üstünde seçilen ihale alanına gider (ya da hiçbirine). Bkz. [İhale alanları](topic:bid-areas).

## Olduğu yere yapıştırın

{{key:Mod+Shift+V}} ({{ui:Olduğu yere yapıştır}}) kopyayı açık sayfada, sayfadaki konumuna göre tam aynı yere koyar. Tipik bir kat için kullanın: 2. katı metrajlayın, kopyalayın, 3. katı açın ve olduğu yere yapıştırın.

Olduğu yere yapıştır, kopyaladığınız sayfayla **aynı boyutta** bir sayfa ister. Başka boyutta bir sayfada TakeoffCraft bunu söyler ve hiçbir şey yapıştırmaz; bunun yerine {{ui:Yapıştır}} kullanıp tıklayın. Kopyaladığınız sayfada kopya, özgünlerin üzerine düşer.

## Ölçek eşleşmelidir

Uzunluklar ve alanlar sayfanın ölçeğine bağlıdır. 1/4" = 1'-0" ölçeğinde 10' ölçen bir seri, 1/8" = 1'-0" ölçekli bir sayfada 20' ölçer. Bu yüzden TakeoffCraft, serileri ve alanları yalnızca geldikleri sayfayla **aynı ölçeğe** sahip bir sayfaya yapıştırır ve bunu açıkça söyler:

- Açık sayfanın henüz ölçeği yok: önce bir ölçek verin ([Ölçeği ayarlayın](topic:set-the-scale)), sonra yapıştırın.
- Açık sayfanın başka bir ölçeği var: mesaj iki ölçeği de adlandırır. Aynı ölçekteki bir sayfaya yapıştırın.
- Sayımların ölçeğe ihtiyacı yoktur: kopyalanan sayımlar her yere yapıştırılır.

## Çoğaltın

{{key:Mod+D}} ({{ui:Çoğalt}}) seçili işaretleri kopyalar ve kopyayı hemen işaretçinin üzerine koyar; gideceği yere tıklayın. Siz tıklayana kadar hiçbir şey eklenmez ve {{key:Esc}} hiçbir şey bırakmaz. Çoğalt, {{ui:Yapıştır}}'ın yapıştırdığı şeyi değiştirmez.

## Kesin ve silin

- {{key:Mod+X}} ({{ui:Kes}}) seçili işaretleri kopyalar ve siler. Ait oldukları yere yapıştırın ya da kesmeyi geri alın.
- {{key:Delete}} ya da {{key:Backspace}} ({{ui:Sil}}) seçili işaretleri kopyalamadan siler.

## Bir kalemi kopyalayın

**Kalemler** altındaki kalem düzenleyicisi şunlarla biter:

- {{ui:Kalemi kopyala}}: kalemi montajı, firesi ve maliyetleriyle kopyalar, işaretler olmadan. Ardından {{ui:Yapıştır}} bu metrajın ya da başka bir metrajın içine bir kopya ekler.
- {{ui:Kalemi çoğalt}}: hemen "(ad) (kopya)" adıyla bir kopya ekler.

:::tip
Kopya bu bilgisayarda kalır: bu sekmede ve tarayıcının depolamasında tutulur; böylece başka bir TakeoffCraft sekmesi de yapıştırabilir. Hiçbir şey yüklenmez ve sistem panosu kullanılmaz; bu yüzden işaretleri başka programlara yapıştıramazsınız.
:::

:::note
Bir kopya bir seferde tek bir sayfadan gelir. İşaretler olduğu gibi yapıştırılır: bir kopyayı henüz döndürme ya da aynalama yoktur.
:::
