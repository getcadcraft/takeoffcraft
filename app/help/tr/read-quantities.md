---
title: Miktarları ve keşfi okuma
summary: Miktarlar tablosunu kaleme ve sayfaya göre kullanın; iş toplamı, vurgulama ve Eksik uyarısı.
keywords: miktarlar, toplamlar, kaleme göre, sayfaya göre, iş toplamı, keşif, özet, rapor, vurgulama, eksik, maliyetler
from: 069d41f1
---

Pencerenin alt kısmındaki {{ui:Quantities}} tablosu canlı keşfinizdir. Çizim yaptığınızda, bir şeyi sildiğinizde, ölçeğini değiştirdiğinizde ya da bir birim fiyatı düzenlediğinizde anında değişir. Miktarlar hiçbir zaman saklanmaz; her seferinde işaretlerden yeniden ölçülür, bu yüzden güncelliğini yitirmezler.

## Kaleme göre

{{ui:By item}} seçeneğini seçin (varsayılan). Her kalemin bir satırı vardır; birim maliyetin her bileşeninin satırı da bunun altındadır.

| Sütun | Anlamı |
|---|---|
| Item | Ad, kalemin rengiyle. "+(n) ölçeksiz" bazı işaretlerin ölçeksiz sayfalarda olduğu anlamına gelir. |
| Quantity | Kalemin biriminde ölçülen toplam (bileşenler için: formül sonucu). |
| Unit | LF, m, SF, SY, m², EA ya da bileşenin birimi. |
| Waste % | Burada ya da kalem düzenleyicisinde yazılır. |
| With waste | Miktar × (1 + fire). |
| Material/unit, Labor/unit | Birim fiyatlar; buraya yazabilirsiniz. |
| Material, Labor | Fire dahil × birim fiyat, kuruşa yuvarlanmış. |
| Total | Malzeme + işçilik. |

Son satır olan **İş toplamı**, malzeme, işçilik ve toplam sütunlarını ekler. Aynı toplam, tablo başlığının sağında da görünür.

Bir fire ya da birim fiyat hücresine yazın ve {{key:Enter}} tuşuna basın ya da başka bir yere tıklayın. TakeoffCraft'in okuyamadığı bir değer kırmızı çerçeveyle işaretlenir ve durum çubuğu nedenini söyler, örneğin "12.50 gibi bir tutar yazın."

{{ui:Items}} altındaki gibi, bir kalemin satırına tıklayın: işaretleri her sayfada vurgulanır ve bu işaretleri içeren bir sayfaya geçilir.

## Sayfaya göre

Her kalemin her sayfadaki miktarını, işaret sayısıyla birlikte görmek için {{ui:By sheet}} seçeneğini seçin. Bir satıra tıklayın: o sayfa, kalem vurgulanmış olarak açılır. Her sayfanın metrajının alındığını kontrol etmek ya da miktarları kata ya da iş alanına göre ayırmak için kullanın.

## Alana göre

Metrajın ihale alanları varsa, {{ui:By area}} her alanın kalemlerini ve ara toplamını listeler. Bkz. [İhale alanları](topic:bid-areas).

## Eksik uyarısı

Toplamların dışında kalan bir şey olduğunda, başlıkta bir uyarı görünür, örneğin:

"Eksik: 1 formül hatası, ölçeği olmayan sayfalarda 6 işaret (toplamlara dahil değil)"

- **Formül hataları**: bir birim maliyet bileşeninin formülü hesaplanamıyor. Satırında "Formül hatası: …" yazar. Bkz. [Birim maliyetler ve formüller](topic:assemblies#when-a-formula-is-wrong).
- **Ölçeksiz sayfalardaki işaretler**: bu sayfalara bir ölçek verin. Bkz. [Ölçeği ayarla](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Aynı notlar dışa aktarılan elektronik tabloya da yazılır; böylece eksik bir keşif hiçbir zaman tam görünmez.

## Bir kalemi vurgulayın

{{ui:Items}} altındaki ya da tablodaki bir kaleme tıklayın. Onun işaretleri her sayfada tam koyulukta kalır, diğerleri soluklaşır. Sayfalar listesi, işaretleri olan her sayfanın yanında "(n) vurgulandı" yazar. Vurgulamayı durdurmak için kaleme yeniden tıklayın.

## Yan paneldeki kalem toplamları

{{ui:Items}} listesindeki her kalem de miktarını gösterir. Kalem düzenleyicisindeki **Ölçülen** bölümü, formüllerin kullandığı değerleri gösterir: uzunluk, koşu ve duvar alanı; alan, çevre ve alan sayısı; ya da sayım.

## Açık olmayan PDF'lerdeki işaretler

Bir metraj, bu sefer açmadığınız PDF'lerdeki işaretleri de içerebilir. Bunlar yine her toplamda sayılır; sayfalar listesi bu PDF'lerin adlarını gösterir. Bkz. [Metrajı kaydetme ve yeniden açma](topic:save-and-reopen).

## Daha fazla alan

{{ui:Quantities}} başlığının sağındaki ok düğmesi tabloyu gizler; sayfaya daha fazla yer kalır. Tabloyu geri getirmek için yeniden tıklayın.
