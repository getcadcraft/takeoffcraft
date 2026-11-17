---
title: Metrajı 3B'de kontrol edin
summary: Açık sayfanın duvarlarını, döşemelerini ve sayımlarını çizimin üzerinde ayakta görün, etrafında dönün ve birine tıklayarak işaretini seçin.
keywords: png, görüntü, resim, ekran görüntüsü, yığın, katlar, seviyeler, kot, glb, gltf, 3B dışa aktar, duvar kalınlığı, taban yüksekliği, açıklık, kapı üstü, 3b, üç boyut, kontrol, görünüm, duvarlar, duvar yüksekliği, döşeme, derinlik, hacim, yörünge, model, seçme, izometrik, perspektif
from: fb16b4f7
---

3B görünüm ikinci bir çizim değildir, bir kontroldür: açık sayfanın metrajını sayfanın kendisinin üzerine ekranda ayağa kaldırır; böylece eksik bir duvar, iki kez çizilmiş bir döşeme ya da yanlış bir sayım bir bakışta görünür.

Başlamadan önce: sayfanın bir ölçeği olmalıdır ([Ölçeği ayarlama](topic:set-the-scale)). Yükseklikler ve derinlikler gerçek fit gerektirir; bu yüzden ölçeksiz bir sayfada {{ui:3B}} bunu söyler ve düz sayfada kalır.

## 3B görünümü açın

1. Kontrol etmek istediğiniz sayfayı gösterin.
2. Sayfanın adını ve ölçeğini gösteren çubukta {{ui:3B}} seçeneğini seçin ya da {{key:3}} tuşuna basın.
   İlk seferde 3B görünümün yüklenmesi bir an alır. Sayfa zemine çizilir ve metraj, her kalemin rengiyle üzerinde durur.
3. Geri dönmek için {{ui:3B}} seçeneğini yeniden seçin, {{ui:Sayfaya dön}} seçeneğini ya da {{key:3}} tuşunu kullanın. Bir çizim aracı (Doğrusal, Alan, Sayım ve benzeri) seçmek de geri döndürür, çünkü işaretler düz sayfaya çizilir.

Sayfa ekranda gösterilir; sayfaları sayfalar listesinden ya da {{key:PageDown}} ve {{key:PageUp}} ile değiştirin, 3B görünüm izler. Birden çok katı aynı anda görmek için onları yığın hâline getirin (aşağıya bakın).

## Ne görürsünüz

| İşaret | 3B'de |
|---|---|
| Yüksekliği olan doğrusal çizgi | Çizgi boyunca o yükseklikte bir duvar. Eğri çizgiler eğriyi izler. |
| Yüksekliği olmayan doğrusal çizgi | Sayfada bir çizgi. Ayağa kaldırmak için **Kalem** altında kalemine bir yükseklik verin. |
| Derinliği olan alan | Boşlukları açık, o derinlikte bir döşeme. |
| Derinliği olmayan alan | İnce bir 2" plaka, böylece yine görünür. |
| Sayım | Sayılan her noktada küçük bir direk. |

Yükseklik, doğrusal kalemin {{ui:Yükseklik}} alanıdır; derinlik ise alan kaleminin {{ui:Derinlik}} alanıdır. Bunlar **Kalem** altındadır (bkz. [Metraj kalemleri oluşturma](topic:create-items)). Değiştirirseniz 3B görünüm hemen güncellenir. Sayfa adının altındaki not, sayfanın neyi tuttuğunu söyler, örneğin "Bu sayfa 3B'de: 2 duvar, 1 döşeme, 3 sayım", ve yükseklik ya da derinliği olmayan kaç çizgi ya da alan olduğunu. Tıklamalar nota değil, görünüme geçer.

Rakamlar 3B'de değişmez: bir duvarın alanı tam uzunluğu çarpı yüksekliğidir, bir döşemenin hacmi ise net alanı (dış hat eksi boşluklar, eğriler tam) çarpı derinliğidir. Eğriler yalnızca ekranda kısa düz parçalar olarak çizilir.

## Etrafa bakın

| Eylem | Ne yapar |
|---|---|
| Sürükleyin ya da orta düğmeyle sürükleyin | Metrajın etrafında döndürün. |
| {{key:Shift}} + sürükleme ya da sağ düğmeyle sürükleme | Kaydırın. |
| Fare tekerleği | İşaretçinin olduğu yerde yakınlaştırın ve uzaklaştırın. |
| Dokunmatik yüzeyde iki parmak kaydırma | Döndürün ({{key:Shift}} kaydırır). Çimdikleme yakınlaştırır. |
| {{ui:Iso}}, {{ui:Top}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}}, {{ui:Right}}, {{ui:Bottom}} | Standart görünümler, metraja göre çerçevelenir. 3B görünüm {{ui:Iso}} olarak açılır. |
| {{ui:Perspective}} | Perspektif açık ya da kapalı (kapalıyken paralel). |
| {{ui:Zoom extents}} ya da {{key:F}} | Tüm sayfa. |
| {{ui:Sheet}} | Zemindeki çizimi göster ya da gizle. |
| Sağ üstteki görünüm küpü | Bir yüze, kenara ya da köşeye tıklayarak oradan bakın; sürükleyerek döndürün; pusula halkasını sürükleyerek çevirin; ev düğmesi {{ui:Iso}} görünümüne döndürür. |

Köşede bir görünüm küpü, küçük bir X, Y, Z eksen simgesi ya da hiçbir şey görünür: bunu {{ui:Settings}} içinde, TakeoffCraft sekmesinde, **Köşe göstergesi** altında seçin ([TakeoffCraft ayarları](topic:settings)). Düz sayfada köşe göstergesi yoktur.

:::touch
Bir parmak döndürür; iki parmak çimdikleyerek yakınlaştırır ve kaydırarak taşır. Dokunmak seçer.
:::

## Kalınlığı, tabanı ve açıklıkları olan duvarlar

Yüksekliği olan bir doğrusal kalem ince bir şerit olarak durur. Onu gerçek bir duvar olarak görmek için, ayarlarında **3B'de** altında şeklini verin:

- **Duvar kalınlığı** (8", 0.2 m): duvar, çizdiğiniz çizgi üzerinde ortalanmış katı bir gövde olur, köşeler eğimli birleşir.
- **Taban yüksekliği**: duvar zeminden bu kadar yukarıdan başlar (bir soffit, bir üst dolap sırası). Alan kalemlerinde de vardır: 9'-0" yükseklikte bir tavan.
- **Açıklık üstü**: o yüksekliğin üstünde kalan düşülmüş bir parça (bir kapı, [Bir çizgi parçasını düşme](topic:measure-linear#deduct-a-part-of-a-run)) duvarı üstte tutar; böylece bir kapı kapı olarak görünür. Bu olmadan düşülmüş parça üste kadar bir boşluk bırakır.

Bunlar yalnızca 3B görünümünü şekillendirir: miktarlar (uzunluk, duvar alanı, maliyetler) olduğu gibi kalır.

## Katları yığın hâline getirin

1. Her katın PDF'lerini açın.
2. 3B görünümde {{ui:Levels…}} seçeneğini seçin ve her katın kotunu yazın: zemin kat için `0`, bir sonraki için `12'` gibi. Boş bırakılan sayfa dışarıda kalır.
3. {{ui:Stack}} seçeneğini seçin. Seviyesi olan her sayfa metrajını kendi yüksekliğinde gösterir; ekranda duran sayfa kendi katının altında durur, diğerleri çerçevelenir. Not, kaç katın yığıldığını söyler.

Sayfalar sayfadaki yerlerine göre hizalanır; bu yüzden aynı şekilde (aynı sayfa boyutu ve konumu) çizilmiş kat planları için çalışır. Seviyesi olan ama ölçeği olmayan bir sayfa dışarıda bırakılır ve not bunu söyler. Tek seferde bir sayfa için yeniden {{ui:Stack}} seçeneğini seçin. Seviyeler metrajla birlikte kaydedilir.

## 3B görünümü resim olarak kaydedin

3B çubuğundaki {{ui:PNG}} seçeneğini seçin: ekranda olduğu gibi görünümün bir resmi (`… 3D.png`). {{key:Shift}} + {{ui:PNG}} tıklaması onu baskı için iki kat büyütür (`… 3D@2x.png`).

## 3B görünümü model olarak kaydedin

3B çubuğundaki {{ui:GLB}} seçeneğini seçin. Görünümün gösterdiklerinin bir `.glb` dosyasını (glTF, ikili) alırsınız: ekrandaki kat ya da yığınlanmış her kat. Bu dosyayı diğer 3B programları açabilir; işaret başına bir nesne, kalemin adıyla, kalemin renginde, metre cinsinden ve Y yukarıda. Sayfanın kendisi ve dış hatlar dahil değildir.

## 3B'den bir işaret seçin

Bir duvara, döşemeye, plakaya ya da direğe tıklayın. Onun işareti, sayfada tıklamış gibi seçili işaret olur: **Seçili işaret** altında görünür, kalemi geçerli kalem olur ve durum çubuğu uzunluğunu ve yüksekliğini ya da alanını, derinliğini ve küp yardasını verir. {{key:Shift}} + tıklama işaretleri seçime ekler ya da seçimden çıkarır. {{key:Delete}} seçili işaretleri siler ve {{key:Mod+Z}} onları geri getirir; {{key:Esc}} hiçbirini seçmez. Sayfaya dönünce aynı işaretler seçili kalır.

:::tip
Çizim temayı izler: Model temasında, zemindeki sayfa düz görünüm gibi koyulaşır.
:::
