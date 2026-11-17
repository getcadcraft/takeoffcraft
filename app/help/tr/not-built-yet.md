---
title: Henüz yapılmayanlar
summary: Bu sürümde bulunmayan metraj özellikleri ve bugün bunların yerine ne yapılacağı.
keywords: sınırlar, eksik, henüz değil, yol haritası, planlanan, geçici çözüm, koşu başına, bulut, masaüstü
from: 94ff90d0
---

TakeoffCraft geliştirme aşamasındadır. Bu liste, mevcut sürümün yapmadıklarını ve yine de işi nasıl bitireceğinizi gösterir.

## Ölçüm

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Bir koşunun veya taslağın ortasına nokta eklemek | İşareti silin ve yeniden çizin. |
| Kutu (pencere) ile seçim | {{key:Shift}} + her işarete tıklayın ya da sayfadaki her işaret için {{key:Mod+A}} kullanın. Bkz. [İşaretleri kopyalama, yapıştırma ve çoğaltma](topic:copy-paste). |
| Yapıştırılmış bir kopyayı döndürmek, aynalamak veya yeniden ölçeklemek | Kopyayı aynı ölçekte ve aynı yönde bir sayfaya yapıştırın; geri kalanını elle çizin. |
| Taranmış bir sayfadan ya da grafik ölçek çubuğundan ölçek okumak | Hazır ayarı seçin ya da çubuğun uzunluğu üzerinden kalibre edin. |
| Bir sayfada birden fazla ölçek (detay alanları, büyütülmüş planlar) | Parçayı sayfanın ölçeğinde ölçün; takımda varsa detayı kendi büyütülmüş sayfasından metrajlayın. |

## Kalemler ve fiyatlandırma

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Bir kalemin diğer işaret türlerini kullanan birim maliyet formülleri (bir oda kaleminin kat formüllerindeki kapılar) | Formüller ana türün toplamlarını kullanır; diğer türleri kendi satırlarında fiyatlandırın. |
| Koşu koşu hesaplanan birim maliyet formülleri | Formüller kalemin toplamlarını kullanır; koşu başına ek değerler için `N` kullanın. |
| Başka bir kalemin miktarlarını kullanan formüller | Ölçümü o kalemde tekrarlayın veya elektronik tablo dışa aktarımında hesaplayın. |
| Birim maliyet bileşenlerinde ekipler veya 8 saat dışında bir çalışma günü | Ekibi kaleme verin; 8 saatten farklı bir gün uzunluğu için ekip-günü değerini ekip-saat ÷ gün uzunluğunuz olarak okuyun. |
| Not, bulut ve vurgu dışındaki işaretlemeler (oklar, ölçülendirmeler, damgalar) ya da bir nota yanıtlar | Metni notun metnine yazın; işi tamamlandıkça durumunu değiştirin. |
| Bir ekip tarafından paylaşılan ya da hesabınızla saklanan fiyat kütüphanesi | Kütüphane bu tarayıcıda tutulur: CSV olarak dışa aktarın ve diğer bilgisayarda içe aktarın. |
| Sahada çalışan keşifçiler tarafından incelenmiş meslek paketleri | Her paket bir başlangıç noktasıdır: fiyatlandırmadan önce varsayımlarını işinize ve ürünlerinize göre kontrol edin. Bkz. [Meslek paketleri](topic:trade-packs). |
| Meslek paketlerindeki fiyatlar | Paketler yalnızca birim maliyetleri getirir: kendi birim fiyatlarınızı belirleyin ya da fiyat listenizi CSV olarak içe aktarın. |
| Metrajı yeniden adlandırma | Ad, ilk PDF'den gelir; indirilen dosyaların adını değiştirin. |
| Sayfaları elle adlandırma | Sayfalar PDF'in sayfa etiketlerinden adlandırılır; dosya adına ve sayfaya göre arayın. |

## Çizimler (DWG ve DXF)

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Bir çizimin sayfalarındaki çıktı stili tabloları, kalem atamaları ve CTB dosyaları | Çizim siyah çizilir ya da kâğıt için koyulaştırılmış renklerle; çizgi kalınlıkları çizimden gelir. |
| İkili DXF açmak veya AutoCAD 2000'den eski bir DWG açmak | ASCII DXF ya da daha yeni bir DWG olarak kaydedin. |
| Bağlı bir çizimi (xref) bulunduğu klasöre göre bulmak | Bağlı çizimin dosyasını da ev sahibi çizimle birlikte açın: açık dosyalar arasında dosya adına göre bulunur. |
| 3B çoklu çizgileri, örgüleri (mesh), katıları ve bölgeleri ölçmek | Katman ve türe göre sayın ya da Doğrusal ve Alan araçlarıyla plan görünümünü ölçün. |
| Latin dışı yazılardaki bir çizimden işaretli PDF'deki metin | Helvetica'da karşılığı olmayan karakterler işaretli PDF'te "?" olarak yazdırılır; ekrandaki çizim etkilenmez. |
| Sayfa çubuğundan bir çizimi başka bir uygulamaya devretmek | Aynı dosyayı o uygulamada açın. |
| PDF'lerde {{ui:Metrajı içinde taşıyan PDF}} seçeneğinin yaptığı gibi, metrajı içinde taşıyan bir çizim | {{ui:Metrajı kaydet}}: `.takeoff.json` dosyası aynı çizimde, içeriğine göre bulunarak yeniden açılır. |
| Bir çizime yerleştirilmiş PDF altlıkları, resimler ve OLE nesneleri çizmek veya saymak | Resimler yalnızca bir çerçeve olarak görünür. Altlık PDF'in kendisini bir sayfa olarak açın. |

## Otomatik sayım

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Sembolleri, başka boyutta çizilmiş ve ölçeği belirtilmemiş bir sayfada bulmak | Sayfaya ölçeğini verin ya da orada çizilmiş bir kutuyla arayın. |
| Aynalanmış sembolleri bulmak | Bunları elle sayın ya da aynalanmış birinin etrafına bir kutu çizerek yeniden arayın. |

## Dosyalar ve paylaşım

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Hem işaretleri gösteren hem de metrajı taşıyan tek bir PDF | İşaretleri görmek isteyenler için {{ui:İşaretli PDF}}; TakeoffCraft'ta yeniden açmak için {{ui:Metrajı içinde taşıyan PDF}}. |
| Sayfaya göre miktarların veya işaretlerin CSV dosyası | {{ui:XLSX}} kullanın: Sayfaya göre ve İşaretler çalışma sayfaları bunları içerir. |
| Bulutta kaydetme | Henüz kullanılamıyor. Proje dosyalarını bilgisayarınıza kaydedin ve yedekleyin. |
| Ayrı bir TakeoffCraft masaüstü uygulaması | 0.5 sürümünden itibaren masaüstü uygulaması, sekiz uygulamanın tümünün tek kurulumda bulunduğu CadCraft Studio'dur. TakeoffCraft tarayıcıda da çalışır. |

## Ekran ve giriş

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Sağ tık (ya da uzun basma) menüsü | Araç çubuğunu, panelleri ve tuşları kullanın. Uzun basma bir koşuyu ya da taslağı bitirir. |
| Görünümü döndürmek | PDF'de döndürülmüş sayfalar zaten dik görünür. |

## 3B görünüm

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| 3B'de işaret çizmek veya düzenlemek | Çizmek için sayfaya dönün ({{key:3}}); seçme ve silme 3B'de çalışır. |
| Sayfalarında farklı yerlere çizilmiş üst üste katları hizalamak | Aynı şekilde çizilmiş katları üst üste koyun; diğerlerini sayfa sayfa kontrol edin. |
| Sayılan nesneyle aynı boyutta olan direkleri saymak | Bir sayfadaki her direk aynı boyuttadır; direk, sayımın nerede olduğunu gösterir, ne olduğunu değil. |

## Teklif verme

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Zaten gönderilmiş bir pakete ek belgeler, ihale kabul mektupları, her teklif verenin onayladığı bir kapsam sayfası | Yeni bir paket gönderin ve ihale kabulünü kendiniz yazın. [Teklif için paket gönderme](topic:bid-invitations) yapılanları anlatır. |
| Herhangi bir hesaptan teklif davetleri göndermek: test edilirken, dış teklif verenlere e-posta gönderimi, CadCraft ekibinin etkinleştirdiği hesaplar dışında kapalıdır | {{ui:Kapsam CSV}} dosyasını indirin, kendiniz e-postayla gönderin ve teklifleri elle girin. |
| Bir Studio penceresinden teklif paketleri göndermek | Tarayıcıdaki TakeoffCraft'tan gönderin. |
| Seçilen bir teklifle alternatifin teklif alanını yeniden fiyatlandırmak | Alternatifler ve teklif alanı ara toplamları kendi fiyatlarınızı kullanır; alternatifi elle düzeltin. |
| Bir taşeronun sigorta ya da lisans tarihi dolmadan önce otomatik hatırlatmalar | Tarih geçtiğinde ya da 30 gün içinde kaldığında Taşeronlar sayfasında işaretlenir; davet ederken kontrol edin. |

## Paneller

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| {{ui:Miktarlar}} tablosunu taşımak | Yalnızca {{ui:Sayfalar}} ve {{ui:Kalemler}} panelleri taşınır. Bkz. [Panelleri düzenleme](common:arrange-panels). |

## Elektronik tablolar

XLSX çalışma kitabı LibreOffice Calc'ta denetlendi; Calc her toplamı TakeoffCraft ile aynı kuruşa kadar yeniden hesapladı. Henüz Excel'de açılmadı. Bir elektronik tablo programı beklenmedik bir şey gösterirse, CSV dışa aktarımı aynı keşfi düz değerler olarak içerir.
