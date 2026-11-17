---
title: Diğer metraj yazılımlarından geçiş
summary: Özel metraj programlarının ve PDF işaretleme araçlarının alışkanlıklarının TakeoffCraft'a nasıl karşılık geldiğini ve insanların takıldığı farkları gösterir.
keywords: geçiş, taşıma, koşullar, parçalar, ölçüm araçları, işaretleme listesi, miktar bağlantısı, metraj alışkanlıkları, farklar, karşılaştır
from: 12004ce5
---

PlanSwift'te metraj yaptıysanız ya da Bluebeam Revu'nun ölçüm araçlarını kullandıysanız, TakeoffCraft'ın büyük bölümü tanıdık gelecek: bir plan takımı, sayfa başına bir ölçek, ölçtüğünüz şeyler ve fiyatlandırılmış bir toplam. Parçaların birbirine uyum biçimi bazı yerlerde farklı; bu yerler aşağıda.

PlanSwift ya da On-Screen Takeoff biliyorsanız, {{ui:Ayarlar}} › {{ui:TakeoffCraft}} › {{ui:Menüler, tuşlar ve fare}} bölümünde {{ui:Metraj masası}} menü stilini seçin: Dosya, Düzenle, Görünüm, Ölçek, Metraj, Kalemler, İşaretleme ve Dışa aktar menülerinin bulunduğu bir menü çubuğu ve metraj araçlarından oluşan bir sıra; ölçek hazır ayarları sayfa çubuğunda. Bkz. [Menüler, tuşlar ve fare](topic:menus-keys-and-mouse).

## Alışkanlıklar karşılaştırması

| Alıştığınız | TakeoffCraft'ta |
|---|---|
| Planları saklayan bir iş ya da proje açmak (PlanSwift) | PDF'leri ve `.takeoff.json` projesini yan yana açın. Proje yalnızca metrajı saklar; PDF'ler sizin kendi dosyalarınız olarak kalır. |
| Notlar, bulutlar ve vurgularla bir işaretleme listesi (Bluebeam) | Sayfa çubuğunda {{ui:İşaretleme}}: durumlu (Açık, Yanıtlandı, Kapalı) notlar, bulutlar ve vurgular; **İşaretlemeler** altında listelenir, işaretli PDF'e çizilir. Bkz. [Notlar, bulutlar ve vurgular](topic:markups). |
| PDF içinde işaretleme olarak kaydedilen ölçümler (Bluebeam) | Metraj `.takeoff.json` dosyasında durur. {{ui:İşaretli PDF}} paylaşım için metrajın çizili olduğu bir kopya yazar; {{ui:Metrajı içinde taşıyan PDF}} TakeoffCraft'ta yeniden açmak için metrajı taşıyan bir kopya yazar. |
| Kalemler (PlanSwift), Tool Chest'te kayıtlı özel ölçüm araçları (Bluebeam) | {{ui:Kalemler}} altındaki **Kalemler**: ad, tür, renk, birim, yükseklik ya da derinlik, fire, oranlar. |
| Formüllü parçalar ve birleşimler (PlanSwift) | Kalemin {{ui:Montaj}} bölümü: `L H A N P` değişkenlerini kullanan formüllü bileşenler. |
| Sayfa ölçeğini ayarlamak ya da kalibre etmek (ikisi de) | Sayfa başına {{ui:Ölçek}} grubunda {{ui:Hazır ayar}} listesi ya da {{ui:Kalibre et}}. {{ui:Denetle}} bilinen bir boyutu ölçer. |
| Bir sayfa aralığına tek ölçek uygulamak | Henüz değil: her sayfayı ayrı ayarlayın. |
| Aynı sayfada farklı ölçekli görünüm pencereleri (Bluebeam) | Henüz değil: sayfa başına bir ölçek. |
| Polyline uzunluk ve alan araçları (Bluebeam), doğrusal ve alan metrajı (PlanSwift) | {{ui:Doğrusal}} ({{key:L}}) ve {{ui:Alan}} ({{key:A}}). |
| Düz çizgiler için Shift tuşunu basılı tutmak | {{key:Shift}} 45° adımlara yakalar; aynı fikir. |
| Çizimin çizgilerine yakalama | Varsayılan olarak açıktır: uç noktalar, orta noktalar, kesişimler ve bir çizgideki en yakın nokta. CAD programlarında olduğu gibi kapatmak için {{key:F3}}. |
| Sayım aracı (ikisi de) | {{ui:Say}} ({{key:C}}). |
| Simgeler için görsel arama (Bluebeam) | {{ui:Otomatik say}} ({{key:S}}): bir simgeyi kutuya alın, gözden geçirin, ekleyin. |
| Alanlarda boşluklar ya da düşümler | Seçili bir alanda {{ui:Boşluk}} ({{key:X}}) ve yuvarlak boşluklar. |
| Doğrusal serilerde düşümler | Serinin üzerinden düz çizin ve açıklık için {{key:E}} ({{ui:Düş}}) tuşuna basın. Bkz. [Doğrusal serileri ölçün](topic:measure-linear). |
| Polyline içinde yay parçaları | {{ui:Yay}} ({{key:R}}): eğri üzerinde bir nokta tıklayın, sonra bitiş noktasını. |
| Miktar sütunlu işaretleme listesi (Bluebeam) | {{ui:Miktarlar}} tablosu, {{ui:Kaleme göre}} ya da {{ui:Sayfaya göre}}. |
| Fiyatlandırmalı tahmin tablosu (PlanSwift) | Aynı tablo: birim başına fire, malzeme ve işçilik, uzatılmış toplamlar ve {{ui:İş toplamı}}. |
| Excel'e aktarma | Canlı formüllü {{ui:XLSX}} ya da {{ui:CSV}}. |
| Bir aracı durdurmak için Esc | {{key:Esc}} iptal eder ve {{ui:Seç}}'e döner. |
| Bitirmek için sağ tıklayın | Burada da sağ tıklama bir seriyi bitirir ya da bir alanı kapatır. Sağ tıklama menüsü yoktur. |

## İnsanları şaşırtan farklar

**Metraj PDF'inizin içinde değildir.** Yaptığınız hiçbir şey PDF'lerinizi değiştirmez. `.takeoff.json` dosyasını kaydedin ve çizimlerle birlikte saklayın. İşaretli PDF'yi birine göndermek ona düzenlenebilir bir metraj göndermez: proje dosyasını ve özgün PDF'leri gönderin ya da [metrajı içinde taşıyan bir PDF](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf) gönderin.

**PDF'ler ada göre değil, içeriğe göre eşleştirilir.** Eski dosya adının üzerine kaydedilen revize bir sayfa, TakeoffCraft için yeni bir dosyadır; ölçeği ve işareti yoktur. Eski işaretleriniz eski sürümde kalır ve saymaya devam eder. Bkz. [Metrajı kaydedin ve yeniden açın](topic:save-and-reopen#when-a-pdf-has-changed).

**Ölçeksiz işaretler sayılmaz, sıfır sayılmaz.** Bir sayfanın ölçeği yoksa serileri ve alanları sayılmaz ve tabloda "Eksik" yazar. Birçok programda yalnızca 0 görürdünüz. Bkz. [Ölçeği ayarlayın](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Sayfa boyutu tahmini yoktur.** Hazır ayarlar PDF'in tam boyutta basıldığını varsayar. Yarım boyutlu ya da "sayfaya sığdır" PDF'ler {{ui:Kalibre et}} ister. Her zaman {{ui:Denetle}} kullanın.

**Bir kalem, bir ana tür, istenirse daha fazlası.** Bir kalem doğrusal, alan ya da sayımdır ve işaretleri olduğunda türü kilitlenir. Hem alanı hem çevresini veren bir koşul bir alan kalemidir: çevresi `P` değişkenidir. Hem uzunluğu hem alanı olan bir duvar, yüksekliği olan doğrusal bir kalemdir. Zemini, tabanı ve kapıları olan bir oda gibi çok koşullu bir kalem için, **Ayrıca ölç** altında diğer türleri işaretleyin: her biri kendi satırında fiyatlandırılır. Bkz. [Bir kaleme birden çok tür işaret](topic:create-items#one-item-several-kinds-of-marks).

**Formüller toplamlar üzerinde çalışır.** Montaj formülleri her seriyi ayrı ayrı değil, kalemin tüm sayfalardaki toplamlarını kullanır. `N` (seri ya da alan sayısı), duvar başına bir ekstra saplama gibi seri başına ekstralar içindir.

**Çevre boşlukları içerir.** Bir alanın `P` değeri, deliklerinin kenarlarını ekler. Bkz. [Boşluklu alanları ölçün](topic:measure-areas#read-the-area).

**Sürükleme kaydırır.** Sayfada sol düğmeyle sürükleme, {{ui:Otomatik say}} dışındaki her araçta kaydırır. Kaydırma aracına geçmeniz gerekmez. Tekerlek yakınlaştırır; kaydırmaz.

**Kurtarma kopyası, bulut değil.** TakeoffCraft işinizin bir kopyasını bu tarayıcıda tutar ve bir çökmeden sonra geri sunar ([Sekme ya da tarayıcı durursa](topic:save-and-reopen#if-the-tab-or-the-browser-stops)). Ama metrajı kaydetmek size kalmıştır: {{key:Mod+S}}. Bulut kaydetme henüz kullanılamıyor.

**Her şey tarayıcıda.** Kurulacak bir şey yoktur ve planlar hiçbir zaman yüklenmez. Masaüstü uygulaması için TakeoffCraft, diğer yedi uygulamayla birlikte CadCraft Studio içinde gelir.

## Henüz burada değil

Sayfa başına ölçek bölgeleri henüz yapılmadı. Tam liste ve bunun yerine ne yapılacağı için [Henüz yapılmayanlar](topic:not-built-yet) bölümüne bakın.
