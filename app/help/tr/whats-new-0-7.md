---
title: 0.7 sürümünde yenilikler (daha önce)
summary: DWG ve DXF çizimleri kendi ölçekleriyle sayfa olarak açılır; çizimin kendisinden kesin sayımlar ve uzunluklar; seçilen taşeron teklifi bir paketin fiyatı olarak; mühürlü fiyatlarla teklif davetleri; çizimler için asistan araçları ve 3D kontrol görünümünden USD.
keywords: yenilikler 0.7, daha önceki sürüm, sürüm notları, değişiklik günlüğü, değişiklikler, 0.7, sürüm, yeni özellikler, dwg, dxf, çizim, düzenler, model uzayı, çizim ölçeği, çizimden say, cad sayımı, bloklar, dinamik bloklar, öznitelikler, katmanlar, xref, bağlı çizim, çizimi ölç, çoklu çizgi, taralama, işaretli pdf, seçilen teklif, teklif kullan, teklif için gönder, teklif daveti, mühürlü teklifler, teklif açılışı, geç teklif, taşeron kayıtları, csv, asistan, mcp, usd, usdz, birimler, birim listeleri, sıkı, paneller, iletişim kutuları, portekizce
from: de1dca2b
---

Bu, TakeoffCraft 0.7 sürümünde 0.6'ya göre neyin değiştiğidir. Çizimler artık önce PDF'e çıktı almadan olduğu gibi açılır ve bir teklif paketi taşeronlara gönderilip fiyatlanmış olarak geri alınabilir.

## Yeni

### DWG ve DXF çizimleri

- **Bir çizimi sayfalar olarak açın.** {{ui:File}} grubundaki {{ui:Open plans}} ({{key:Mod+O}}, ya da dosyaları sürükleyip bırakın) DWG ve DXF çizimlerini PDF'lerin yanında kabul eder. Model uzayı ve her düzen {{ui:Sheets}} listesinde birer sayfa olur; bir metraj çizimleri ve PDF'leri birlikte kapsayabilir. Hiçbir şey yüklenmez. Bkz. [Bir DWG ya da DXF çizimi açma](topic:open-a-drawing).
- **Ölçek çizimden gelir.** Bir düzen, en büyük görünüm penceresinin ölçeğiyle başlar; ölçek bir ön ayarsa ön ayarın adıyla, örneğin 1/2" = 1'-0". Model, çizimin birimleriyle başlar. Birimi olmayan bir çizim, siz kalibre edene kadar "Ölçek yok" yazar. {{ui:Calibrate}}, {{ui:Check}} ve {{ui:Preset}} yine öncelikli olur. Bkz. [Ölçek](topic:open-a-drawing#the-scale).
- **Katmanlar ve bağlı çizimler.** Sayfa çubuğundaki {{ui:Layers}} çizimin katmanlarını gösterir ya da gizler. Dosyada kapatılmış ya da donmuş olan katmanlar gizli başlar ve siz seçmedikçe sayılmaz. Ana çizimin yanında açılan bir bağlı çizim (xref), eklendiği yerde çizilir ve orada sayılır; açılana kadar durum çubuğu neyin eksik olduğunu söyler. Bkz. [Katmanlar](topic:open-a-drawing#layers).
- **İşaretli PDF bir çizimle çalışır.** {{ui:Export}} › {{ui:Marked PDF}}, bir çizimin işaretli sayfalarını önce PDF olarak çizer; böylece kopya, çıktı alma adımı olmadan işaretlerinizi ve açıklamanızı gösterir. Siyah ya da çizimin renkleriyle, çıktı stili tabloları olmadan çizilir. Bkz. [İşaretli PDF](topic:export-estimate#a-marked-pdf).

### Bir çizimden kesin sayımlar ve uzunluklar

- **Çizimin söylediği şeyi sayın.** Sayfa çubuğundaki {{ui:CAD count}} bir bloğu adına göre sayar (iç içe bloklar, dinamik blok durumları ve blok dizileri dahil), bir katmandaki tek türden her şeyi ya da bir metin ya da öznitelik değerini. Sayfada gösterileni ya da tüm çizimi bir kez sayar. İşaretleri eklemek tek bir geri alma adımıdır ve yeniden saymak yalnızca yenileri ekler. {{ui:Auto count}} PDF'ler ve blok olmayan semboller için kalır. Bkz. [Bir çizimden say](topic:count-from-a-drawing).
- **Çizimin kendi çizgilerinden ölçün.** {{ui:Measure drawing}}, tıkladığınız ya da pencereye aldığınız çizgileri, yayları, çoklu çizgileri, daireleri, taralamaları ve katıları bir doğrusal ya da alan kaleminin işaretleri olarak alır. Yaylar, kabarmalar ve taralamanın delikleri tam olarak çıkar; elipsler ve spline'lar ince kirişlerle ölçülür ve çubuk bunu belirtir. Bkz. [Bir çizimden ölç](topic:measure-from-a-drawing).

### Teklifler

- **Bir taşeronun teklifini paketin fiyatı olarak kullanın.** {{ui:Export}} › {{ui:Bid packages and leveling…}} içinde bir teklif için {{ui:Use}} seçin. Paketin kalemleri miktar olarak kalır, tek bir **Seçilen teklif** satırı fiyatı taşır, teklifin dışarıda bıraktığı kalemler kendi maliyetinizde kalır ve genel gider, kâr ve teminat buna uygulanır. Teklif değiştirmek tek bir geri alma adımıdır; çalışma kitabı ve teklif özeti bunu taşır. Bkz. [Bir teklifi paketin fiyatı olarak kullanma](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Bir paketi teklif için gönderin.** Bir paketin altındaki {{ui:Send for bids…}} her taşerona, hesap gerektirmeyen bir sayfanın bağlantısını e-postayla gönderir: kapsamı ve sayfaları PDF olarak görürler, her satıra bir fiyat yazar ya da "dahil değil" olarak işaretlerler, not ekler ve en fazla üç dosya ekler ya da reddederler. {{ui:Get prices}} geri gelenleri dengeleme sayfasına **web** işaretiyle getirir. Gönderme, CadCraft ekibinin test sırasında etkinleştirdiği hesaplara açıktır (aşağıya bakın). Bkz. [Bir paketi teklif için gönderin](topic:bid-invitations).
- **Açılışa kadar mühürlü.** Fiyatlar, sizin belirlediğiniz bir açılış saatine kadar mühürlü kalabilir: o zamana kadar kimse fiyatı görmez, siz de dahil. Açılışta her teklif birden görünür ve son teslim saatinden sonra gelen bir teklif geç olarak işaretlenir. Bkz. [Mühürlü teklifler ve açılış](topic:bid-invitations#sealed-bids-and-the-opening).
- **Taşeron kayıtları.** getcadcraft.com'daki hesabınız, her şirketin kişilerini, işlerini, yeterlilik yanıtlarını ve sigorta ile lisans tarihlerini (geçmiş ya da 30 gün içinde olanlar işaretlenir) geçmiş teklifleriyle birlikte tutar. Bunları CSV olarak içe ve dışa aktarabilir, bir paket gönderirken seçebilirsiniz. Bkz. [Web sitesinde](topic:bid-invitations#on-the-website).

### Yapay zekâ asistanları

- **Asistanlar metraja ekleyebilir.** **Düzenle** işaretliyken kendi asistanınız kalem ekleyebilir (`items_add`) ve bir sayfada koşuları, alanları ve sayıları ölçebilir (`marks_add`; uzunluklar ve alanlar yalnızca ölçekli sayfada). Her çağrı tek bir geri alma adımıdır.
- **Çizimler için asistan araçları.** Açık bir DWG ya da DXF'te bir asistan, sayfalarını ve neyin sayılabileceğini listeleyebilir, kesin sayım yapabilir, sayım işaretlerini ekleyebilir ve çizimin geometrisinden ölçebilir. TakeoffCraft açık değilken CadCraft MCP sunucusu bir çizimi yeni bir metraj olarak açar ve kaydeder; `cadcraft count` komutu komut satırından sayar. Bkz. [Bir asistanın neler isteyebileceği](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D kontrol görünümü USD olarak.** 3D kontrol görünümünde {{ui:GLB}} yanındaki {{ui:USD package (.usdz)}} her duvarı, döşemeyi, levhayı, sayım direğini ve koşuyu kendi nesnesi olarak yazar; nesne kalemin adını taşır ve miktarını metre olarak içerir. Bir asistan bunu da dışa aktarabilir (`usd_export`). Bkz. [3D kontrol görünümünü USD olarak dışa aktarma](topic:usd).

## Her uygulamada

- **Birimler.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} uzunluk, alan, hacim, açı ve eğim için birer liste içerir; birimlerin tanımlarının verdiği tam boyutlarla (ABD anket fiti kendi birimidir). Hiç kullanmadığınız birimleri kapatın, birim listelerinden çıkarlar; birini yıldızlarsanız yeni iş ona göre başlar. Bir dosya her zaman kendi birimini tutar. TakeoffCraft'ta bir kalemin {{ui:Unit}} listeleri anahtarları izler, yeni bir kalem yıldızlı uzunluk ya da alan birimiyle başlar; çatı karesi (SQ), akre ve hektar yeni alan birimleridir ve bir uzunluk kutusu `3 yd` gibi herhangi bir birimin işaretini kabul eder. Bkz. [Birimler, yazılan değerler ve birim listeleri](common:unit-lists).
- **Daha yoğun düzen ve kendini toplayan paneller.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} ekrana daha fazla sığdırır (dokunmatik ekranlar ve telefonlar büyük düğmelerini korur). Her yan panelin ince bir başlık çubuğu vardır: sürükleyerek yerleştirin ya da yüzdürün, başka bir panelin çubuğuna bırakarak aynı çerçeveyi sekme olarak paylaşın, kenara kayması için sabitleyin ya da gizleyip kenardan geri getirin. Bkz. [Panelleri düzenleme](common:arrange-panels#make-the-layout-denser).
- **İletişim kutuları taşınır.** İletişim kutusunu başlık çubuğundan sürükleyerek çizimin önünden çekin; bıraktığınız yere geri döner. Başlık çubuğuna çift tıklayarak yeniden ortalayın. Bkz. [İletişim kutusunu taşıma](common:arrange-panels#move-a-dialog).
- **Yapay zekâ asistanları için tarifler.** Kendi asistanınız için on çalışılmış istek (bir çizimi düzenleme, bir takımı çıktıya hazırlama, çizimleri denetleme, bir modele soru sorma, bir metrajı toplama, bir parça varyantını deneme…). Her biri kullandığı araçlar ve ihtiyaç duyduğu izinlerle birlikte verilir ve testlerimizle yeniden oynatılır. Uygulamalar yapay zekâ içermez. Bkz. [Yapay zekâ asistanları için tarifler](common:assistants-recipes).
- **Diller.** **Português (Portugal)**, {{ui:Settings}} › {{ui:General}} › {{ui:Language}} içinde yenidir. Bu, **Português (Brasil)**, **Español (México)** ve **Bahasa Indonesia** ile birlikte uygulamaların her sözcüğüne sahiptir; ana dili konuşan biri tarafından henüz gözden geçirilmemiş taslaklar olarak. Yardım konuları İngilizcedir.
- **CadCraft Studio** bir güncelleme denetiminin neden başarısız olduğunu söyler (sisteminiz için henüz dosya yok, ağ yok, hatalı imza); yalnızca "Bitti" demez. Kapattığınız bir Yenilikler kartını da daha yeni bir sürüm çıkana kadar geri getirmez.

## Henüz bu sürümde değil

- **0.7 kod imzalı değildir.** İmzalama ve Microsoft Store paketi, sertifika doğrulaması henüz gelmediği için 0.8'e taşındı. getcadcraft.com/download sayfasında her dosyanın yanındaki SHA-256 değerini kontrol edin. Windows'ta SmartScreen yükleyiciyi durdurursa {{ui:More info}} ve ardından {{ui:Run anyway}} seçin. Mac'te ilk seferde CadCraft Studio'ya sağ tıklayıp {{ui:Open}} seçin. CadCraft Studio henüz bir uygulama mağazasında değildir ve henüz bir iPad ya da iPhone sürümü yoktur.
- Birimlerdeki açı ve eğim listeleri kaydedilir, ama henüz hiçbir kutu bunları okumaz.
- **Teklif davetleri çoğu hesap için kapalıdır.** Özellik test edilirken, dış teklif verenlere giden postalar yalnızca CadCraft ekibinin etkinleştirdiği hesaplardan gönderilir. Teklif verenlerin sayfaları, şimdiye kadar gönderilmiş her davet için çalışmaya devam eder. Diğer herkes: {{ui:Scope CSV}} dosyasını indirin, kendiniz e-postayla gönderin ve teklifleri elle yazın.
- Bir CadCraft Studio penceresi henüz teklif daveti gönderemez: bunun için tarayıcıda TakeoffCraft kullanmanızı söyler. Gönderilmiş istekleri olan bir metrajı açmak, dengeleme yapmak ve bir teklif seçmek Studio'da çalışır.
- Ek belgeler (addenda), ihale kabul mektupları, her teklif verenin onayladığı bir kapsam sayfası ve bir sigorta tarihi dolmadan önceki otomatik hatırlatmalar henüz yapılmadı. Seçilen bir teklif, bir alternatifin teklif alanının fiyatını yeniden hesaplamaz.
- Çizimler: çıktı stili tabloları ve CTB dosyaları uygulanmaz; ikili (binary) DXF reddedilir (ASCII DXF ya da DWG olarak kaydedin); bağlı çizimler yalnızca açık dosyalar arasında dosya adına göre bulunur; bir çizimdeki PDF altlıkları, görüntüler ve OLE nesneleri çizilmez ya da sayılmaz. Sayımlar ve ölçekler örnek çizimlerde denetlendi, onları üreten programda açılmış gerçek bir işin çizimlerinde henüz denetlenmedi.
- Bir asistan kalem ve işaret ekleyebilir, ama zaten var olan işaretleri taşıyamaz, değiştiremez ya da silemez.

Diğer her şey için [Henüz yapılmadı](topic:not-built-yet) sayfasına bakın.
