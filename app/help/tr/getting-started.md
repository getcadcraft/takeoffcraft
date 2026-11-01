---
title: TakeoffCraft'a başlangıç
summary: TakeoffCraft'ın ne yaptığı, nerede çalıştığı ve bir PDF plan takımından ilk ölçülmüş ve fiyatlanmış kaleminiz.
keywords: başlangıç, ilk metraj, hızlı başlangıç, giriş, keşif, miktar metrajı, plan takımı, pdf
from: 3b9da1fb
---

TakeoffCraft plan takımlarını, PDF'leri ve DWG ya da DXF çizimlerini ölçer ve ölçümleri fiyatlanmış bir keşfe çevirir. Dosyaları açar (bir çizim blokları üzerinden doğrudan sayılır: bkz. [Bir DWG veya DXF çizimi açma](topic:open-a-drawing)), her sayfaya bir ölçek verir (bir çizim kendi ölçeğini getirir), **kalemler** yapar (bir duvar tipi, bir döşeme kaplaması, bir armatür) ve onları sayfalardan çıkarmak için tıklarsınız. Miktarlar, maliyetler ve iş toplamı siz ilerledikçe güncellenir. Keşfi bir e-tablo olarak ve metrajınızın içine çizildiği PDF'lerin bir kopyası olarak dışa aktarabilirsiniz.

Başka programlarda metraj yaptıysanız sıradaki olarak [Başka metraj yazılımlarından geliyorsanız](topic:coming-from) konusunu okuyun. Bazı şeyler burada farklı çalışır.

## Nerede çalışır

TakeoffCraft web tarayıcınızda çalışır. TakeoffCraft'ı açtığınızda ekran hemen hazırdır; kurulacak bir şey yoktur.

- **PDF'leriniz bilgisayarınızda kalır.** Tarayıcı tarafından açılırlar ve asla yüklenmezler. Kaydetme bir indirmedir.
- Güncel Chrome, Edge, Firefox ve Safari'de çalışır. Bkz. [Tarayıcılar ve bilgisayarlar](common:browsers).
- Uygulama çubuğunda {{ui:Çevrimdışı için kaydet}} seçeneğini seçip {{ui:Çevrimdışı hazır}} yazdıktan sonra internet bağlantısı olmadan çalışır. Bkz. [Çevrimdışı çalışma](common:offline).
- Bulutta kaydetme henüz yok. Masaüstü uygulaması için TakeoffCraft, diğer yedi uygulamayla birlikte CadCraft Studio içinde gelir.

## On adımda ilk metrajınız

Bu adım adım anlatım bir duvar tipini ölçer ve fiyatlar. Elinizdeki herhangi bir planda birkaç dakika sürer.

1. Araç çubuğunun {{ui:Dosya}} grubunda {{ui:Planları aç}} seçeneğini seçin (veya {{key:Mod+O}} tuşlarına basın), bir veya daha fazla PDF seçin ve Aç'ı seçin. PDF'leri sayfanın herhangi bir yerine de bırakabilirsiniz.
   Sayfalar solda belirir ve ilk sayfa ortada açılır.
2. Sayfanın basılı ölçeğini künyesinde ya da bir çizim başlığının altında bulun.
3. {{ui:Ölçek}} grubundaki {{ui:Hazır ayar}} listesini açın ve o ölçeği seçin, örneğin `1/4" = 1'-0"`.
   Sayfanın altındaki çubuk artık "Ölçek 1/4" = 1'-0"" der.
4. {{ui:Denetle}} seçeneğini seçin (veya {{key:D}} tuşuna basın) ve çizimde basılı bir ölçünün iki ucuna tıklayın.
   Sol alttaki durum çubuğundaki gösterge basılı ölçüyle eşleşmelidir. Eşleşmiyorsa bkz. [Ölçeği ayarlama](topic:set-the-scale).
5. Sağdaki {{ui:Kalemler}} panelinde {{ui:Yeni kalem}} seçeneğini seçin, `Interior wall type A` gibi bir ad yazın, türü {{ui:Doğrusal (uzunluk)}} üzerinde bırakın ve {{ui:Ekle}} seçeneğini seçin.
6. Araç çubuğunda {{ui:Doğrusal}} seçeneğini seçin (veya {{key:L}} tuşuna basın).
7. Bir duvarın başlangıcına, sonra boyunca her köşeye tıklayın. Koşuyu bitirmek için çift tıklayın, {{key:Enter}} tuşuna basın ya da sağ tıklayın.
   Koşu kalemin renginde çizilir ve uzunluğu kalemin yanında görünür.
8. {{ui:Kalemler}} altındaki kalem düzenleyicisinde {{ui:Yükseklik}} alanına `9'-0"`, {{ui:Malzeme $/LF}} alanına `0.85` ve {{ui:İşçilik $/LF}} alanına `1.20` yazın.
   Alttaki {{ui:Miktarlar}} tablosu uzunluğu, uzatılmış malzeme ve işçiliği ve {{ui:İş toplamı}} değerini gösterir.
9. {{ui:Metrajı kaydet}} seçeneğini seçin (veya {{key:Mod+S}} tuşlarına basın).
   Tarayıcınız bir `.takeoff.json` dosyası indirir. Kalemlerinizi, ölçeklerinizi ve işaretlerinizi tutar ve aynı PDF'lerin üzerine yeniden açılır.
10. Keşfi e-tablo olarak indirmek için araç çubuğundaki {{ui:Dışa aktar}} menüsünü açın ve {{ui:XLSX}} seçeneğini seçin.

:::tip
Yaptığınız şeyi durdurmak ve {{ui:Seç}} aracına dönmek için {{key:Esc}} tuşuna basın. {{key:Mod+Z}} her değişikliği geri alır.
:::

## Sonra ne okumalı

- [TakeoffCraft ekranı](topic:workspace) pencerenin her bölümünü adlandırır.
- [Bir metraj başlatma ve bir plan takımı açma](topic:open-plan-set) birkaç PDF'i ve sayfalar listesini kapsar.
- [Metraj kalemleri oluşturma](topic:create-items) türleri, birimleri, fireyi ve fiyatları açıklar.
- [Birim maliyetler ve formüller](topic:assemblies) tek bir ölçümü ayaklara, levha sayısına ve daha fazlasına çevirir.
- [Klavye ve fare](topic:keyboard) her tuşu listeler.
