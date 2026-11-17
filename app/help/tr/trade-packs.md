---
title: İş paketleri
summary: Bir meslek için ücretsiz montajları fiyat kütüphanenize ekleyin, tek adımda kaldırın ve kendi kütüphanenizi bir paket olarak paylaşın.
keywords: iş paketi, paket, montajlar, şablonlar, başlangıç kalemleri, elektrik, alçıpan, iskelet, boyama, beton, döşeme, duvarcılık, çatı, cephe kaplaması, marangozluk, tesisat, hvac, yalıtım, peyzaj, ahşap güverte, genel müteahhit, csi, masterformat, cc0, ekle, kaldır, paylaş
from: d3c036be
---

Bir **iş paketi**, bir meslek için hazır kalemler kümesidir: her biri kendi birimi, yüksekliği ya da derinliği, firesi ve **montajı** ile — yani ölçülen bir güzergâhı, alanı ya da sayıyı malzemeye çeviren parçalar ve formüller. Örneğin bir alçıpan bölme kendi rayını, pervazlarını, levhalarını, vidalarını, bandını ve derz dolgusunu getirir.

Paketler [fiyat kütüphanenize](topic:price-library) eklenir; oradan kalemlerini istediğiniz metraja ekleyebilirsiniz.

## Paket ekleyin

1. {{ui:Kalemler}} panelinin en üstündeki {{ui:Kütüphane}} öğesini, sonra {{ui:Meslek paketleri…}} öğesini açın.
2. {{ui:Birimler}} seçin: İngiliz birim sistemi (LF, SF), metrik (m, m²) ya da ikisi. Her montaj iki sistemde de gelir.
3. Bir paketin yanındaki {{ui:Ekle}} seçin.

Paketin kalemleri, paketin adıyla etiketlenmiş olarak kütüphanede görünür. Kullanmak için kütüphanede işaretleyin ve {{ui:Metraja ekle}} seçin.

:::note
**Bir paket fiyat getirmez.** Kalemleri kütüphanede "birim fiyatınızı girin" yazar. Fiyatlar sizindir: bunları kütüphanede ya da kalem düzenleyicisinde yazın ya da fiyat listenizi CSV olarak içe aktarıp {{ui:Fiyatları güncelle}} kullanın.
:::

Kütüphanenizde aynı ada ve türe sahip bir kalemi zaten varsa paket onu olduğu gibi bırakır. Bir paketi yeniden eklemek, kendi kalemlerini yeni sürümle değiştirir.

## Paketi kaldırın

{{ui:Meslek paketleri…}} içinde eklediğiniz bir paketin yanındaki {{ui:Kaldır}} seçin, onaylamak için bir kez daha seçin. Paketten gelen her kalem kütüphaneden tek adımda çıkar. Zaten bir metraja eklediğiniz kalemler o metrajda kalır.

## Paketin içinde ne var

Bir paketin altında {{ui:Kaynaklar ve ayrıntılar}} seçin: her montajın neye dayanarak yazıldığını görürsünüz: yapı yönetmelikleri, standartlar ve meslek kuruluşlarının montaj kılavuzları. Kütüphanede bir kalemin üzerine işaretçiyi getirin: kaynaklarını ve varsayımlarını okursunuz, örneğin pervaz aralığı ya da bir boyanın yayılma oranı. Bunları işinizle ve ürünlerinizin teknik veri sayfalarıyla denetleyin; farklı olduklarında formülleri değiştirin (bkz. [Montajlar ve formüller](topic:assemblies)).

Her paket, bir tahminci tarafından henüz gözden geçirilmeyene kadar **Başlangıç: henüz bir tahminci tarafından gözden geçirilmedi** olarak işaretlenir.

Her kalem ayrıca CSI MasterFormat numarasını taşır, örneğin `09 21 16`.

## Kütüphanenizi paket olarak paylaşın

Kütüphanedeki {{ui:Paket olarak dışa aktar…}} onu, herkesin {{ui:Bir paket dosyası aç…}} ile ekleyebileceği bir paket dosyası (`.ccpack.json`) olarak kaydeder. Varsayılan olarak eklediğiniz paketlerden gelen kalemleri dışarıda bırakır ve hiçbir birim fiyat taşımaz. Birim fiyatlarınızı da göndermek için {{ui:Fiyatlarımı örnek fiyat olarak ekle}} seçeneğini işaretleyin: bunlar verdiğiniz bölge ve tarihle etiketlenerek gider; paketi ekleyen, onları kullanıp kullanmayacağını seçer.

Paket dosyaları düz veridir, asla program değildir. TakeoffCraft bir paketin her parçasını kullanmadan önce denetler ve okuyamadığı her şeyi dışarıda bırakır.
