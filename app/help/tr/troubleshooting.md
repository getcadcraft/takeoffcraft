---
title: Sorun giderme
summary: TakeoffCraft'ta karşılaşabileceğiniz mesajların ve sürprizlerin belirtileri, nedenleri ve çözümleri; uygulamanın gösterdiği haliyle alıntılanmıştır.
keywords: sorunlar, hatalar, çalışmıyor, düzeltme, yardım, reddedildi, ölçmüyor, ölçek yok, eksik işaretler, dışa aktarma başarısız, çevrimdışı, dokunma
from: cd319c9b
---

TakeoffCraft çoğu reddi pencerenin altındaki durum çubuğunda açıklar. Aşağıda mesajı bulun.

## Dosyaları açma

| Mesaj ya da belirti | Neden | Çözüm |
|---|---|---|
| PDF okuyucu yüklenemedi. Yeniden denemek için sayfayı yenileyin. | Uygulamanın PDF okuyucusu yüklenmedi; genellikle çevrimdışısınız ve uygulama hiç çevrimdışı kullanım için kaydedilmedi. | Bağlanın ve sayfayı yenileyin. Sonra {{ui:Çevrimdışı için kaydet}} seçin ve {{ui:Çevrimdışı hazır}} yazısını bekleyin; bkz. [Çevrimdışı çalışma](common:offline). |
| (ad) parola korumalı. Korumasız bir kopya açın. | PDF açmak için parola ister. | Korumasız bir kopya isteyin ya da güvendiğiniz bir PDF programında parolayı kaldırın. |
| (ad) PDF olarak okunamadı (…) | Dosya bozuk ya da gerçekte bir PDF değil. | Yeniden indirin ya da onu oluşturan programdan yeniden kaydedin. |
| (ad) zaten açık. | Aynı PDF (aynı içerik) açık. | Yapılacak bir şey yok. |
| TakeoffCraft PDF'leri ve .takeoff.json projelerini açar. Atlandı: … | Diğer dosya türleri bırakıldı. | Önce çizimleri PDF'e dönüştürün. |
| Dosyaları bıraktığımda hiçbir şey olmuyor | Dosyalar tarayıcı penceresinin dışına bırakıldı ya da tarayıcı PDF'i yeni bir sekmede açtı. | TakeoffCraft sayfasının kendisine bırakın; "PDF'leri ya da bir .takeoff.json dosyasını bırakın" çerçevesi işe yarayacağını gösterir. |
| Büyük bir takımı açmak biraz sürüyor | Her PDF, parmak izini almak için baştan sona okunur. | "(ad) açılıyor…" mesajı kaybolana kadar bekleyin. Küçük resimler kaydırdıkça dolar. |

## Ölçme

| Mesaj ya da belirti | Neden | Çözüm |
|---|---|---|
| Önce bir PDF açın. | Hiçbir sayfa açık değil. | Bir PDF açın. |
| Bu sayfanın henüz ölçeği yok, bu yüzden ölçülemez. Önce bir hazır ölçek seçin ya da kalibre edin (sayımlar ölçeksiz de çalışır). | Doğrusal, alan, daire ve boşluk araçlarına ölçek gerekir. | [Ölçeği ayarlayın](topic:set-the-scale). |
| Önce bir doğrusal kalem oluşturun (Kalemler altında adlandırın), sonra sayfaya tıklayın. | Bu türde bir kalem yok. | Açılan {{ui:Yeni kalem}} formunu doldurun ve {{ui:Ekle}} seçin. |
| Önce metrajı alınacak bir kalem seçin (Kalemler paneli). | Geçerli kalem silindi. | {{ui:Kalemler}} altında bir kaleme tıklayın. |
| Bir güzergâh en az iki noktaya ihtiyaç duyar. | Bir tıklamadan sonra bitirdiniz. | En az iki noktaya tıklayın. |
| Bir alan en az üç noktaya ihtiyaç duyar. | Çok az köşe. | En az üç köşeye tıklayın. |
| Dış hat kendini kesiyor, bu yüzden alanı yanlış olurdu. Kesişmeden yeniden çizin. | Sekiz şeklinde bir biçim. | İki alan olarak çizin ya da kenarı sırayla dolaşın. |
| Bu noktalar bir alan çevrelemiyor. | Tüm noktalar tek bir çizgide. | Bir alanı çevreleyen köşelere tıklayın. |
| Önce bir alan işaretini seçin (Seç aracı), sonra Boşluk'u seçip içinde deliği çizin. | {{ui:Boşluk}} seçili bir alan gerektirir. | {{key:V}} tuşuna basın, alana tıklayın, sonra {{key:X}}. |
| Bir boşluk tamamen alanın içinde olmalı. | Delik dış hattı kesiyor ya da dışına çıkıyor. | Deliği alanın içinde çizin. |
| Boşluklar birbirinin üstüne binemez. | İki delik üst üste. | Her ikisini de çevreleyen tek bir delik çizin ya da ayrı tutun. |
| … Nokta geri konuldu. | Sürüklenen bir köşe dış hattı kendi üzerine kesiştirir ya da bir deliği dışarı iter. | Şekli geçerli tutan bir yere sürükleyin. |
| Dairenin kenarında, merkezinden uzakta bir noktaya tıklayın. | İkinci tıklama merkeze çok yakındı. | Daha dışarıya tıklayın. |
| Tıklamalar nokta eklemek yerine sayfayı kaydırıyor | İşaretçi düğmeye basılıyken birkaç pikselden fazla hareket etti; bu bir sürükleme sayılır. | Hareket etmeden tıklayın, özellikle izleme yüzeyinde. |
| Shift yakalamıyor | Bir yay üzerine nokta koyuyorsunuz ya da bir daire çiziyorsunuz. | 45° yakalama yalnızca düz parçalar için geçerlidir. |
| Noktalar yakındaki bir çizgiye atlıyor | Çizimin çizgilerine yakala açık. | Çizgiler arasına tıklamak için yakınlaştırın ya da Yakala'yı kapatmak için {{key:F3}} tuşuna basın. |
| Yakalama işareti görünmüyor | Yakala kapalı, sayfa bir taramadır ya da araç yakalamaz (Say, Otomatik say, yapıştırma). | {{key:F3}} tuşuna basın; bir taramada yakalanacak çizgi yoktur. |
| Uzunluk yanlış | Ölçek yanlış (genellikle hazır ayarla yeniden boyutlandırılmış bir PDF). | Bilinen bir ölçüde {{ui:Denetle}} kullanın, sonra {{ui:Kalibre et}}. |

## Ölçek

| Mesaj ya da belirti | Neden | Çözüm |
|---|---|---|
| Daha uzak iki nokta seçin. | Kalibrasyon noktaları neredeyse üst üste. | Daha uzun bir ölçüde kalibre edin. |
| Kalibre iletişim kutusunda "Bu mesafe okunamadı" gibi bir mesaj | Mesafe TakeoffCraft'ın okuyamayacağı bir biçimde. | Bkz. [Uzunluk, oran ve yüzde girişi](topic:entry-formats). |
| Bu sayfanın henüz ölçeği yok, bu yüzden denetlenecek bir şey yok. Kalibre edin ya da bir hazır ayar seçin. | Ölçeksiz bir sayfada {{ui:Denetle}}. | Önce bir ölçek ayarlayın. |
| {{ui:Hazır ayar}} listesi soluk görünüyor | Hiçbir sayfa açık değil. | Bir PDF açın. |

## Miktarlar ve formüller

| Mesaj ya da belirti | Neden | Çözüm |
|---|---|---|
| Eksik: … (toplamlarda yok) | Bir formül hatası ya da ölçeksiz sayfalarda işaretler. | Bkz. [Miktarları ve tahmini okuma](topic:read-quantities#the-incomplete-warning). |
| Bir kalemin yanında +(n) ölçeksiz | Bazı işaretleri ölçeksiz sayfalarda. | Bu sayfalara bir ölçek verin. |
| Formül hatası: … | Formül hesaplanamıyor. | Bkz. [Formül dili](topic:formulas#errors). |
| Bu kalemin işaretleri var, bu yüzden türü değiştirilemez. | Tür, işaretler olduğunda kilitlenir. | Diğer türde yeni bir kalem oluşturun ve işaretleri onunla yeniden çizin. |
| Bir kalemin adı olmalı. | Ad alanı boşaltıldı. | Bir ad yazın. |
| 12.50 gibi bir tutar yazın. / 10 ya da 7.5 gibi bir yüzde yazın. | Bir birim fiyat ya da fire okunamadı. | Bkz. [Uzunluk, oran ve yüzde girişi](topic:entry-formats). |
| Bir toplam iki katı gibi görünüyor | Kalemin kendi birim fiyatları ve aynı maliyeti taşıyan bileşenleri var. | Bileşenler maliyeti taşıdığında kalemin kendi birim fiyatlarını 0 yapın. |
| Bu kalemin işaretleri açık olmayan PDF'lerde. | Tüm işaretleri açmadığınız PDF'lerde olan bir kalemi seçtiniz. | Bu PDF'leri açın; adları {{ui:Sayfalar}} altında listelenir. |

## Otomatik say

| Mesaj ya da belirti | Neden | Çözüm |
|---|---|---|
| Bu kutu çok küçük. Tüm simgenin etrafına çizin. | Kutu küçücük. | Yakınlaştırın ve tüm simgeyi kutuya alın. |
| Bu kutu neredeyse boş. Bir simgenin etrafına çizin. | Kutu yalnızca kâğıt içeriyor. | Simgenin kendisini kutuya alın. |
| Eşleşme yok. Eşleşme kaydırıcısını düşürün ya da simgeyi daha sıkı kutulayın. | Hiçbir şey yeterince yüksek puan almadı. | Simgeyi sıkıca kutulayın ya da {{ui:Eşleşme}} kaydırıcısını daha aşağı sürükleyin. |
| Yanlış simgeler dahil çok fazla eşleşme | Benzer simgeler gerçeğe yakın puan alıyor. | {{ui:Eşleşme}} kaydırıcısını yükseltin ve yanlış kutulara tıklayarak reddedin. |
| Diğer sayfalarda eşleşmeler eksik | Bu sayfalar simgeyi başka bir boyutta ya da 90° adımı olmayan bir açıyla çizer. | Bu sayfaları orada çizilmiş bir kutuyla arayın ya da elle sayın. |
| (n) sayfa bu simge boyutunda aramak için çok büyüktü. | Sayfa çalışma boyutunda çok büyük olurdu. | Daha büyük bir simgeyi kutulayın ya da o sayfayı elle sayın. |
| Arama başarısız: … | Arka plan araması durdu. | Yeniden deneyin; tekrarlarsa sayfayı yenileyin (önce kaydedin). Çevrimdışıyken yalnızca uygulama çubuğu {{ui:Çevrimdışı hazır}} gösterdiğinde çalışır. |
| Sürükleme, kaydırma yerine bir kutu çiziyor | {{ui:Otomatik say}} böyle çalışır. | {{key:Space}} tuşunu basılı tutup sürükleyin ya da orta düğmeyle sürükleyin. |

## Kaydetme ve dışa aktarma

| Mesaj ya da belirti | Neden | Çözüm |
|---|---|---|
| Henüz dışa aktarılacak bir şey yok: bir kalem oluşturun ve metrajını alın. | Hiç kalem yok. | Önce bir kalem oluşturun. |
| Açık PDF'lerde henüz işaret yok. | {{ui:İşaretli PDF}} açık PDF'lerde çizecek bir şey bulamadı. | İşaretleri olan PDF'leri açın. |
| Bu PDF parola korumalı ya da şifreli, bu yüzden işaretli bir kopya yazılamaz. … | PDF şifreli. | Bunun yerine {{ui:XLSX}} dışa aktarın ya da PDF'in şifresiz bir kopyasını kullanın (o zaman kendi metrajı gerekir, çünkü farklı bir dosyadır). |
| İşaretli PDF yazılamadı: … | Genellikle: çevrimdışısınız ve uygulama çevrimdışı kullanım için kaydedilmedi, bu yüzden PDF yazıcısı yok. | Çevrimiçi olun ve {{ui:İşaretli PDF}} öğesini yeniden seçin. Bunu önlemek için {{ui:Çevrimdışı için kaydet}} seçin ve {{ui:Çevrimdışı hazır}} yazısını bekleyin. |
| Yalnızca bir işaretli PDF indi | Tarayıcı aynı anda birden çok indirmeyi engelledi. | Bu site için birden çok indirmeye izin verin ve yeniden dışa aktarın. |
| (dosya) bir TakeoffCraft projesi değil (geçerli bir JSON değil). / Bu bir TakeoffCraft proje dosyası değil. | Yanlış dosya ya da bozuk bir dosya. | `.takeoff.json` dosyasını seçin. |
| Bu proje daha yeni bir TakeoffCraft ile kaydedildi. Onu orada açın. | Dosya daha yeni bir sürümden geliyor. | Daha yeni sürümde açın. |
| (n) işaret zarar gördü ve dışarıda bırakıldı. | Dosyanın bir kısmı bozuldu ya da elle düzenlendi. | Geri kalanı açıldı. Eksik işaretleri yeniden çizin ya da daha eski bir kopya açın. |
| Yeniden açtıktan sonra işaretler eksik | PDF'ler açık değil ya da biri değişti. | Bkz. [Bir metrajı kaydedin ve yeniden açın](topic:save-and-reopen#when-a-pdf-has-changed). |
| Tarayıcı "Siteden ayrılınsın mı?" diye soruyor | Kaydedilmemiş değişiklikler var. | Kalın ve {{key:Mod+S}} ile kaydedin. |

## Tuşlar ve fare

| Belirti | Neden | Çözüm |
|---|---|---|
| Harf tuşları hiçbir şey yapmıyor | İmleç bir alanda (arama, kalem düzenleyici, tablo). | Sayfaya tıklayın ya da alandan çıkmak için {{key:Tab}} tuşuna basın. |
| Tekerlek kaydırmak yerine yakınlaştırıyor | Tekerlek her zaman sayfayı yakınlaştırır. | Kaydırmak için sürükleyin. |
| Tüm sayfa büyüdü ya da küçüldü | Tarayıcı yakınlaştırması ({{key:Mod+Plus}} ya da {{key:Mod+Minus}}). | {{key:Mod+0}} tuşuna basın. Sayfayı tekerlekle ya da çıplak {{key:Plus}} ve {{key:Minus}} ile yakınlaştırın. |
| Backspace'e bastığımda bir işaret kayboldu | Çizim yapmıyorken Backspace seçili işareti siler. | {{key:Mod+Z}} onu geri getirir. |
| Mac'te sağ tıklama bitirmiyor | Control tıklaması normal bir tıklama olarak gelir. | İkincil tıklama açıkken iki parmakla tıklayın ya da {{key:Enter}} tuşuna basın. |

## Dokunmatik ekranlar

Dokunmatik ekranda:

- **Dokunmak** bir nokta yerleştirir (ya da {{ui:Seç}} ile bir işareti seçer). Tek parmakla sürüklemek kaydırır.
- **İki parmak** birbirine yaklaşıp uzaklaşarak aralarındaki noktaya göre yakınlaştırır; birlikte hareket ettiklerinde kaydırır. İkinci bir parmağı koymak, ilkinin başlattığını iptal eder; böylece bir çimdik asla bir nokta bırakmaz.
- Bir güzergâhı ya da dış hattı **uzun basarak** (sağ tık), **çift dokunarak** ya da sayfanın altındaki çubukta {{ui:Bitir}} öğesini seçerek bitirin. Aynı çubukta {{ui:Arka}} (son noktayı geri alır) ve {{ui:İptal}} vardır. Alanlar ilk noktaya dokunularak da kapanır.
- Parmaklar için hedefler daha büyüktür: noktalar daha uzaktan yakalanır, kapanır ve seçilir; köşe tutamaçları daha büyüktür.

Metre uzunluklarını yazmak bir klavye gerektirir; ekran klavyesi {{ui:Yaz}} kutusu odaklandığında çalışır.

Bir tablette, bir klavye ve bir fare ya da izleme yüzeyi metrajı çok daha kolaylaştırır.

## Çevrimdışı çalışma

| Düğme ya da belirti | Neden | Çözüm |
|---|---|---|
| {{ui:Kaydedilemedi}} | Uygulamanın bazı dosyaları, çevrimdışı kullanım için kaydederken indirilemedi. | Bağlantınızı denetleyin ve düğmeyi yeniden seçin. |
| {{ui:Çevrimdışı kullanım yok}} | Özel pencereler ve bazı yönetilen bilgisayarlar çevrimdışı kopyaları engeller. | Normal bir pencere ya da başka bir tarayıcı kullanın. |
| "Kaydediliyor…" hiç başlamıyor | Çevrimdışısınız; kaydetmek bir bağlantı gerektirir. | Çevrimiçiyken kaydedin. |
| Güncellemeden sonra uygulama eski | Çevrimdışı kopya önceki bir günden. | Çevrimiçiyken {{ui:Çevrimdışı hazır}} seçin, sonra {{ui:Yeniden kaydet (en yeni sürümü al)}}. |
| Alanı geri istiyorsunuz | Çevrimdışı kopya yaklaşık 6 MB. | {{ui:Çevrimdışı hazır}} seçin, sonra {{ui:Çevrimdışı kopyayı kaldır}}. |

Bkz. [Çevrimdışı çalışma](common:offline).

## Hâlâ takıldınız mı?

Uygulama yanıt vermezse sayfayı yenileyin. Kaydetmediyseniz metrajınız yenilemede kaybolur; mümkünse önce {{key:Mod+S}} ile kaydedin. Tarayıcı soruları için bkz. [Tarayıcılar ve bilgisayarlar](common:browsers).
