---
title: Ölçeği ayarlama
summary: Her sayfaya bir hazır ayarla ya da bilinen bir ölçüde kalibre ederek ölçek verin, denetleyin ve ölçeksiz sayfaların neden toplamlara dahil edilmediğini anlayın.
keywords: ölçeği algıla, ölçeği oku, metinden ölçek, tüm sayfalar, ölçek, kalibre et, hazır ayar, ölçeği denetle, doğrula, bilinen ölçü, ölçeksiz, ölçek yok, oran, ölçeği ayarla
from: 8f0148e6
---

Her sayfanın kendi ölçeği vardır. Siz ayarlarsınız ya da TakeoffCraft'in sayfa metninden okumasına izin verirsiniz (aşağıda) ve denetlersiniz. Bir sayfanın ölçeği olana kadar {{ui:Linear}}, {{ui:Area}}, {{ui:Circle}} ve {{ui:Cut-out}} o sayfada ölçüm yapmayı reddeder. {{ui:Count}} ve {{ui:Auto count}} ölçek olmadan çalışır.

Sayfalar listesi her sayfanın ölçeğini ya da **Ölçek yok** yazısını gösterir. Açık sayfanın altındaki çubuk da aynısını söyler.

## Hazır ayar kullanın (PDF tam boyutta basıldığında)

1. Sayfayı açın.
2. {{ui:Scale}} grubundaki {{ui:Preset}} listesini açın.
3. Çizimde basılı ölçeği seçin, örneğin Mimari altındaki `1/8" = 1'-0"`.
   Durum çubuğu şunu yazar: "Bu sayfanın ölçeği: 1/8" = 1'-0"."
4. Denetleyin (aşağıda).

Hazır ayar, PDF'nin çizimin yapıldığı gerçek kâğıt boyutunda olduğunu varsayar. Biri PDF'yi "sayfaya sığdır" seçeneğiyle oluşturduysa ya da yarım boy bir takımsa, hazır ayar yanlıştır. Bunun yerine kalibre edin.

Tam liste için bkz. [Ölçek hazır ayarları](topic:scale-presets).

## Ölçekleri sayfa metninden okuyun

Çoğu çizim ölçeğini söyler: çizim künyesinde `SCALE: 1/4" = 1'-0"`, bir görünümün altında `1:100`. TakeoffCraft bunu okuyabilir ve her sayfayı tek seferde ayarlayabilir.

1. {{ui:Preset}} listesini açın ve (en üstteki) **Sayfaların metninden…** seçeneğini seçin.
2. Liste her sayfayı gösterir: şimdiki ölçeğini ve metninin ne dediğini — **1/4" = 1'-0" yazıyor**, **Metninde ölçek yok** ya da **Ölçeksiz diyor** (NTS).
3. Metninde ölçek yazan ve ölçeği olmayan sayfalar işaretlenir. İstediğiniz sayfaları işaretleyin ya da işaretini kaldırın, sonra {{ui:Set the ticked scales}} seçeneğini seçin. Hepsini geri almak için {{key:Mod+Z}} tuşuna bir kez basın.
4. Her sayfada {{ui:Check}} ile bir boyutu denetleyin (aşağıda): hazır ayar, yalnızca PDF tam boyutta basılmışsa doğrudur.

Metin şu gösterimleri okur: mimari (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), mühendislik (`1" = 20'`) ve metrik (`1:50`); bunlar bir [hazır ayarla](topic:scale-presets) eşleşir. Bir sayfa birden fazla ölçek yazarsa (büyütülmüş ayrıntılı bir plan gibi), en sık yazılanı alır; SCALE kelimesinden sonra yazılan iki kez sayılır. Diğerleri kırmızıyla gösterilir, böylece kontrol edebilirsiniz. Taranmış bir sayfada metin yoktur: ölçeğini elle ayarlayın.

## Bilinen bir ölçüde kalibre edin

Güvendiğiniz basılı bir ölçek yoksa, takım yeniden boyutlandırılmışsa ya da sayfa "ölçeksiz" diyor ama ölçüleri varsa bunu kullanın.

1. Sayfayı açın ve bildiğiniz uzun bir ölçüye, örneğin bir aks aralığına ya da binanın genel ölçüsüne yakınlaştırın. Ne kadar uzunsa o kadar doğru olur.
2. {{ui:Scale}} grubundaki {{ui:Calibrate}} seçeneğini seçin ya da {{key:K}} tuşuna basın.
3. Ölçünün bir ucuna tıklayın. Hassasiyet için her ucunda yakınlaştırın; tıklamalar arasında yakınlaştırıp kaydırabilirsiniz.
4. Diğer ucuna tıklayın. Çizgiyi 0°, 45° ya da 90°'de tutmak için {{key:Shift}} tuşunu basılı tutun.
   **Bu sayfayı kalibre et** iletişim kutusu açılır.
5. **Gerçek mesafe** alanına gerçek mesafeyi yazın, örneğin `24'-6 1/2"`, `24.5` (ondalık fit), `30"` ya da `7.5 m`. Bkz. [Uzunluk, oran ve yüzde girişi](topic:entry-formats).
6. {{ui:Set the scale}} seçeneğini seçin.
   Durum çubuğu ölçeği "1" = (n)'" olarak gösterir; bir hazır ayara %0.5 yakınsa hangisiyle eşleştiğini de söyler, örneğin "1/4" = 1'-0" ile eşleşir (kesin bir ölçek için bu hazır ayarı seçin)".
   TakeoffCraft sizi {{ui:Select}} aracına geri döndürür.

Kalibrasyon bir hazır ayarla eşleştiğinde, o hazır ayarı seçmek, tıkladığınız yere bağlı olmayan kesin bir ölçek verir.

## Ölçeği denetleyin

Yeni bir ölçeği her zaman ikinci bir boyutta denetleyin.

1. {{ui:Scale}} grubunda {{ui:Check}} seçeneğini seçin ya da {{key:D}} tuşuna basın.
2. Çizimde basılı bir ölçünün iki ucuna tıklayın.
   Durum çubuğu "Denetle: 12'-6"" gösterir; aynı uzunluk ondalık fit ve metre cinsinden de yazılır. Denetleme çizgisi uzunluğuyla birlikte sayfada kalır.
3. Basılı ölçüyle karşılaştırın. Farklıysa daha uzun bir ölçüde kalibre edin.

Denetleme çizgisini temizlemek için {{key:Esc}} tuşuna basın.

## Ölçeği değiştirme

Başka bir hazır ayar seçin ya da yeniden kalibre edin. Sayfada zaten ölçümler varsa TakeoffCraft **Bu sayfanın ölçeği değiştirilsin mi?** diye sorar ve kaç ölçümün yeniden ölçüleceğini söyler. {{ui:Change the scale}} seçeneğini seçin. Sayfadaki her koşu ve alan yeni ölçekte yeniden ölçülür. {{key:Mod+Z}} ile geri alabilirsiniz.

## Ölçeksiz sayfalar neden sıfır sayılmaz

Ölçeği olmayan bir sayfadaki işaretin gerçek bir uzunluğu ya da alanı yoktur. TakeoffCraft onu asla sıfır saymaz; bu, tahmininizi sessizce olduğundan düşük gösterirdi. Bunun yerine şunları yapar:

- bu işaretleri toplamların dışında bırakır,
- {{ui:Quantities}} içinde kalemin yanında "+(n) ölçeksiz" gösterir,
- tablo başlığında "Eksik: (n) işaret, ölçeği olmayan sayfalarda (toplamlara dahil değil)" yazar,
- sayım sayısını, elektronik tablo dışa aktarımının notlar sütununa yazar.

Bu, ölçekleri hiç ayarlanmamış bir projeyi açtığınızda olabilir. Sayfaya bir ölçek verin, işaretler hemen sayılır. Sayım işaretleri her zaman sayılır; ölçek gerektirmezler.

## İpuçları

- Ölçmeye başlamadan önce ölçeğini ayarlayacağınız her sayfanın ölçeğini ayarlayın. Kalan sayfaları bulmak için sayfalar listesinde **Ölçek yok** yazısını tarayın (arama kutusu sayfa adlarına bakar, ölçeklere değil).
- Aynı sayfadaki ayrıntılar ve büyütülmüş planlar genellikle başka bir ölçek kullanır. TakeoffCraft sayfa başına tek bir ölçek tutar; bkz. [Henüz yapılmadı](topic:not-built-yet).
- Metrik çizimler: `1:100` gibi bir metrik hazır ayar seçin ya da `6000 mm` gibi metrik bir mesafeyle kalibre edin.
