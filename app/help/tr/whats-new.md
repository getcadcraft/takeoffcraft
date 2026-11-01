---
title: 0.7'deki yenilikler
summary: Kendi ölçekleriyle sayfa olarak açılan DWG ve DXF çizimleri, çizimin kendisinden kesin sayımlar ve uzunluklar, bir paketin fiyatı olarak seçilen taşeron teklifi, mühürlü fiyatlı teklif davetleri, çizimler için asistan araçları ve 3B denetim görünümünden USD.
keywords: yenilikler, yenilikler nedir, sürüm notları, değişiklik günlüğü, değişiklikler, 0.7, sürüm, yeni özellikler, dwg, dxf, çizim, düzenler, model uzayı, çizim ölçeği, çizimden say, cad sayımı, bloklar, dinamik bloklar, öznitelikler, katmanlar, xref, bağlı çizim, çizimi ölç, çoklu çizgi, taralama, işaretli pdf, seçilen teklif, teklif kullan, teklif için gönder, teklif daveti, mühürlü teklifler, teklif açılışı, geç teklif, taşeron kayıtları, csv, asistan, mcp, usd, usdz, birimler, birim listeleri, sıkı, paneller, iletişim kutuları, portekizce
from: ad4f0df1
---

Bu, TakeoffCraft 0.7'de 0.6'ya göre nelerin değiştiğidir. Çizimler artık olduğu gibi açılıyor, önce PDF'e çıktı almak gerekmiyor ve bir teklif paketi taşeronlara gidip fiyatlanmış olarak geri dönebiliyor.

## Yeni

### DWG ve DXF çizimleri

- **Bir çizimi sayfa olarak açma.** {{ui:Dosya}} grubundaki {{ui:Planları aç}} ({{key:Mod+O}} ya da dosyaları bırakma), DWG ve DXF çizimlerini PDF'lerin yanında alır. Model uzayı ve her düzen {{ui:Sayfalar}} listesinde sayfa olur ve bir metraj çizimleri ve PDF'leri birlikte kapsayabilir. Hiçbir şey yüklenmez. Bkz. [Bir DWG veya DXF çizimi açma](topic:open-a-drawing).
- **Ölçek çizimden gelir.** Bir düzen, en büyük görünüm penceresinin ölçeğiyle başlar; hazır ayarsa 1/2" = 1'-0" gibi adıyla. Model, çizimin birimleriyle başlar. Birimi olmayan bir çizim, siz kalibre edene kadar "Ölçek yok" der. {{ui:Kalibre et}}, {{ui:Denetle}} ve {{ui:Hazır ayar}} yine de önceliklidir. Bkz. [Ölçek](topic:open-a-drawing#the-scale).
- **Katmanlar ve bağlı çizimler.** Sayfa çubuğundaki {{ui:Katmanlar}} çizimin katmanlarını gösterir veya gizler. Dosyanın kapattığı ya da dondurduğu katmanlar gizli başlar ve siz seçmedikçe sayılmaz. Ana çiziminin yanında açılan bağlı bir çizim (xref) eklendiği yerde çizilir ve sayılır; açılana kadar durum çubuğu neyin eksik olduğunu söyler. Bkz. [Katmanlar](topic:open-a-drawing#layers).
- **İşaretli PDF bir çizimden çalışır.** {{ui:Dışa aktar}} › {{ui:İşaretli PDF}}, bir çizimin işaretli sayfalarını önce PDF olarak çizer; böylece kopya çıktı alma adımı olmadan işaretlerinizi ve açıklamanızı gösterir. Siyah ya da çizimin renkleriyle, çıktı stili tabloları olmadan çizilir. Bkz. [İşaretli PDF](topic:export-estimate#a-marked-pdf).

### Bir çizimden kesin sayımlar ve uzunluklar

- **Çizimin orada olduğunu söylediğini sayın.** Sayfa çubuğundaki {{ui:CAD sayımı}} bir bloğu adıyla (iç içe bloklar, dinamik blok durumları ve blok dizileri dahil), bir katmandaki tek türden her şeyi ya da bir metin veya öznitelik değerini sayar. Sayfanın gösterdiğini ya da tüm çizimi bir kez sayar. İşaretleri eklemek tek bir geri alma adımıdır ve yeniden saymak yalnızca yeni olanı ekler. {{ui:Otomatik say}} PDF'ler ve blok olmayan simgeler için kalır. Bkz. [Bir çizimden sayma](topic:count-from-a-drawing).
- **Çizimin kendi çizgilerinden ölçün.** {{ui:Çizimi ölç}}, tıkladığınız ya da pencereye aldığınız çizgileri, yayları, çoklu çizgileri, daireleri, taramaları ve katıları bir doğrusal veya alan kaleminin işaretleri olarak alır. Yaylar, bombeler ve bir taramanın delikleri kesin çıkar; elipsler ve spline'lar ince kirişlerle ölçülür ve çubuk bunu söyler. Bkz. [Bir çizimden ölçme](topic:measure-from-a-drawing).

### Teklifler

- **Bir taşeronun teklifini paketin fiyatı olarak kullanın.** {{ui:Dışa aktar}} › {{ui:Teklif paketleri ve dengeleme…}} içinde bir teklifte {{ui:Kullan}} seçeneğini seçin. Paketin kalemleri miktar olarak kalır, tek bir **Seçilen teklif** satırı fiyatı taşır, teklifin dışında bıraktığı kalemler kendi maliyetinizde kalır ve genel gider, kâr ve teminat ona uygulanır. Teklifleri değiştirmek tek bir geri alma adımıdır; çalışma kitabı ve teklif özeti bunu taşır. Bkz. [Bir teklifi paketin fiyatı olarak kullanma](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Bir paketi teklif için gönderin.** Bir paketin altındaki {{ui:Teklif için gönder…}}, her taşerona hesap gerektirmeyen bir sayfanın bağlantısını e-postayla gönderir: kapsamı ve sayfaları PDF olarak görürler, her satıra bir fiyat yazarlar ya da dahil değil işaretlerler, not ve en fazla üç dosya eklerler veya reddederler. {{ui:Fiyatları al}} geri gelenleri **web** işaretiyle dengeleme sayfasına çeker. Gönderme, test edilirken yalnızca CadCraft ekibinin etkinleştirdiği hesaplara açıktır (aşağıya bakın). Bkz. [Bir paketi teklif için gönderme](topic:bid-invitations).
- **Açılışa kadar mühürlü.** Fiyatlar, belirlediğiniz bir açılış saatine kadar mühürlü kalabilir: o zamana kadar kimse bir fiyat görmez, siz de. Açılışta her teklif birden görünür ve son tarihten sonra gelen bir teklif geç olarak işaretlenir. Bkz. [Mühürlü teklifler ve açılış](topic:bid-invitations#sealed-bids-and-the-opening).
- **Taşeron kayıtları.** getcadcraft.com'daki hesabınız her firmanın kişilerini, işlerini, yeterlilik yanıtlarını ve sigorta ile ruhsat tarihlerini (geçince ya da 30 gün içindeyse işaretlenir) geçmiş teklifleriyle tutar. CSV olarak içe ve dışa aktarın ve bir paket gönderirken seçin. Bkz. [Web sitesinde](topic:bid-invitations#on-the-website).

### Yapay zekâ asistanları

- **Asistanlar metraja ekleme yapabilir.** **Düzenle** işaretliyken kendi asistanınız kalem ekleyebilir (`items_add`) ve bir sayfada koşuları, alanları ve sayımları ölçebilir (`marks_add`; uzunluk ve alan yalnızca ölçekli bir sayfada), her çağrı tek bir geri alma adımıdır.
- **Çizimler için asistan araçları.** Açık bir DWG veya DXF üzerinde bir asistan sayfalarını ve nelerin sayılabileceğini listeleyebilir, kesin sayabilir, sayım işaretlerini ekleyebilir ve çizimin geometrisinden ölçebilir. TakeoffCraft açık değilken CadCraft MCP sunucusu bir çizimi yeni bir metraj olarak açar ve kaydeder; `cadcraft count` komut satırından sayar. Bkz. [Bir asistan neler isteyebilir](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **USD olarak 3B denetim görünümü.** 3B denetim görünümünde {{ui:GLB}} yanındaki {{ui:USD paketi (.usdz)}}, her duvarı, döşemeyi, levhayı, sayım direğini ve koşuyu kalemi adıyla anılan ve miktarını taşıyan kendi nesnesi olarak, metre cinsinden yazar. Bir asistan da dışa aktarabilir (`usd_export`). Bkz. [3B denetim görünümünü USD olarak dışa aktarma](topic:usd).

## Her uygulamada

- **Birimler.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Birimler}} içinde uzunluk, alan, hacim, açı ve eğim için birer liste vardır; boyutlar birimlerin tanımlarının verdiği kesin değerlerdir (ABD survey ayağı ayrı bir birimdir). Hiç kullanmadığınız birimleri kapatın, birim listelerinden çıkarlar; birine yıldız koyun, yeni işler onunla başlar. Bir dosya her zaman kendi birimini korur. TakeoffCraft'ta bir kalemin {{ui:Birim}} listeleri anahtarları izler, yeni bir kalem yıldızlı uzunluk ya da alan biriminde başlar, çatı kareleri (SQ), akre ve hektar yeni alan birimleridir ve bir uzunluk kutusu `3 yd` gibi herhangi bir birimin işaretini alır. Bkz. [Birimler, yazılan değerler ve birim listeleri](common:unit-lists).
- **Daha sıkı bir düzen ve yana çekilen paneller.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Düzen yoğunluğu}} › {{ui:Sıkı}} ekrana daha çok şey sığdırır (dokunmatik ekranlar ve telefonlar büyük düğmelerini korur). Her yan panelin ince bir başlık çubuğu vardır: paneli yerleştirmek veya yüzdürmek için sürükleyin, sekme olarak tek çerçeveyi paylaşmak için başka bir panelin çubuğuna bırakın, kenara kayıp gizlenmesi için iğneleyin ya da gizleyip kenardan geri getirin. Bkz. [Panelleri düzenleme](common:arrange-panels#make-the-layout-denser).
- **İletişim kutuları taşınır.** Bir iletişim kutusunu başlık çubuğundan tutup çizimin önünden çekin; bıraktığınız yere geri gelir. Yeniden ortalamak için başlık çubuğuna çift tıklayın. Bkz. [İletişim kutusunu taşıma](common:arrange-panels#move-a-dialog).
- **Yapay zekâ asistanları için tarifler.** Kendi asistanınız için on uygulamalı istek (bir çizimi düzenleme, bir takımı yazdırma, çizimleri denetleme, bir modele soru sorma, bir metrajı toplama, bir parça varyantını deneme…); her biri çağırdığı araçlar ve gereken izinlerle birlikte ve her biri testlerimizce yeniden oynatılmıştır. Uygulamalarda yapay zekâ yoktur. Bkz. [Yapay zekâ asistanları için tarifler](common:assistants-recipes).
- **Diller.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Dil}} içinde **Português (Portugal)** yenidir. O, **Português (Brasil)**, **Español (México)** ve **Bahasa Indonesia** artık uygulamaların her sözcüğüne sahiptir; anadili konuşan biri tarafından henüz gözden geçirilmemiş taslaklar olarak. Yardım konuları İngilizcedir.
- **CadCraft Studio**, bir güncelleme denetimi başarısız olduğunda yalnızca "Bitti" demek yerine nedenini söyler (sisteminiz için henüz dosya yok, ağ yok, geçersiz imza) ve kapattığınız bir Yenilikler kartını daha yeni bir sürüm çıkana kadar geri getirmez.

## Bu sürümde henüz yok

- **0.7 kod imzalı değildir.** Sertifika doğrulaması henüz sonuçlanmadığı için imzalama ve Microsoft Store paketi 0.8'e kaydı. getcadcraft.com/download adresinde her dosyanın yanındaki SHA-256 değerini denetleyin. Windows'ta SmartScreen yükleyiciyi durdurursa {{ui:Ek bilgi}}, ardından {{ui:Yine de çalıştır}} seçeneğini seçin. Mac'te ilk seferde CadCraft Studio'ya sağ tıklayıp {{ui:Aç}} seçeneğini seçin. CadCraft Studio henüz bir uygulama mağazasında değildir ve iPad veya iPhone sürümü henüz yoktur.
- {{ui:Birimler}} içindeki açı ve eğim listeleri kaydedilir, ama henüz hiçbir kutu onları okumaz.
- **Teklif davetleri çoğu hesapta kapalıdır.** Özellik test edilirken dış teklif verenlere posta yalnızca CadCraft ekibinin etkinleştirdiği hesaplardan gider. Teklif verenlerin sayfaları zaten gönderilmiş her davet için çalışır. Diğer herkes: {{ui:Kapsam CSV}} dosyasını indirin, kendiniz e-postayla gönderin ve teklifleri elle yazın.
- Bir CadCraft Studio penceresi henüz teklif daveti gönderemez: tarayıcıda TakeoffCraft'ı kullanmanızı söyler. Gönderilmiş isteklerle bir metraj açmak, dengeleme ve bir teklif seçmek Studio'da çalışır.
- Ek sözleşmeler, ihale sonuç mektupları, her teklif verenin imzaladığı bir kapsam sayfası ve bir sigorta tarihi dolmadan önce otomatik hatırlatmalar yapılmadı. Seçilen bir teklif, bir alternatifin teklif alanının fiyatını yeniden hesaplamaz.
- Çizimler: çıktı stili tabloları ve CTB dosyaları uygulanmaz, ikili bir DXF reddedilir (ASCII DXF veya DWG olarak kaydedin), bağlı çizimler yalnızca açık dosyalar arasında dosya adıyla bulunur ve bir çizimdeki PDF alt katmanları, resimler ve OLE nesneleri çizilmez ya da sayılmaz. Sayımlar ve ölçekler örnek çizimlerde denetlendi, gerçek bir işin, onu yapan programda açılan çizimlerinde henüz değil.
- Bir asistan kalem ve işaret ekleyebilir ama zaten orada olan işaretleri taşıyamaz, değiştiremez ya da silemez.

Geri kalan her şey [Henüz yapılmadı](topic:not-built-yet) konusunda.
