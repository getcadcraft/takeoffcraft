---
title: DWG ya da DXF çizimi açma
summary: Bir DWG ya da DXF çizim dosyasını sayfalar (model uzayı ve her düzen) olarak açın, çizimin verdiği ölçekle başlayın, katmanlarını gösterin ya da gizleyin ve bağlı çizimleri getirin.
keywords: dwg, dxf, cad, çizim, çizim açma, düzenler, model uzayı, kâğıt uzayı, sayfalar, birimler, insunits, görünüm penceresi ölçeği, xref, bağlı çizim, katmanlar, dondurulmuş, pdf yok, çıktı al, çıktı almadan
from: d8c3f504
---

TakeoffCraft bir DWG ya da DXF çizimini bir PDF gibi açar: önce PDF'e çıktı almanız gerekmez. Doğrudan çizimden sayım kesindir, çünkü çizim her nesnenin ne olduğunu bilir. Bkz. [Çizimden sayma](topic:count-from-a-drawing).

## Çizimi açın

1. {{ui:Dosya}} grubunda {{ui:Planları aç}} seçeneğini seçin ya da {{key:Mod+O}} tuşuna basın.
2. DWG ya da DXF dosyasını seçin. Birden fazla seçebilirsiniz; PDF'leri de birlikte seçebilirsiniz.
3. Aç'ı seçin.

PDF'lerde olduğu gibi çizim dosyalarını TakeoffCraft'a sürükleyip bırakabilirsiniz. Hiçbir şey yüklenmez: tarayıcı dosyayı bilgisayarınızda okur.

TakeoffCraft, AutoCAD 2000'den 2018'e kadar DWG'yi ve R12'den 2018'e kadar ASCII DXF'yi okur. İkili DXF'yi (ASCII ya da DWG olarak kaydedin) ve bunların hiçbiri olmayan dosyayı reddeder ve nedenini söyler. Hasarlı bir dosya okunabilen kısmıyla açılır ve bir ileti bunu belirtir; sayımları eksik olabilir.

## Sayfalar

- **Model**, çizimin model uzayıdır.
- **Her düzen** (kâğıt uzayı sekmesi), sekmesine göre adlandırılan ve sekme sırasında bir sayfadır. Bir düzen, modeli görünüm pencereleri aracılığıyla çıktı alındığı gibi gösterir.

Yakınlaştırma, kaydırma, çizimin kendi çizgilerine yakalama, işaretler, notlar, {{ui:Kalibre et}} ve diğerleri bir PDF'dekiler gibi çalışır. Bir çizimin sayfaları, PDF'de olduğu gibi, dosya adı ve içeriğinin parmak izi ile metraja kaydedilir: aynı dosyayı yeniden açın, işaretler sayfalarında olur.

## Ölçek

Bir sayfa, çizimin verdiği ölçekle başlar:

- **Bir düzen**, en büyük görünüm penceresinin ölçeğini alır. 1/2" = 1'-0" gibi bir ölçek, eşleştiği hazır ayarın adıyla anılır; başka her ölçek "Çizimin görünüm penceresinden: 1" = 2.5'" olarak gösterilir. Bir düzende başka ölçeklerde görünüm pencereleri varsa en büyüğü sayfanın ölçeğini belirler: diğerlerini {{ui:Denetle}} ile kontrol edin.
- **Model**, çizimin birimlerini (inç, milimetre, fit…) ölçek olarak alır: "Çizim birimleri (inç)".
- **Birimi olmayan bir çizim** (çizim, bir birimin inç mi milimetre mi olduğunu hiç belirtmemiştir) bir ölçeğe sahip değildir: sayfa "Ölçek yok" der ve PDF'de ölçek olmadığı gibi ölçüm reddedilir. Sayım ölçek gerektirmez. {{ui:Kalibre et}} ile bir ölçek verin.

{{ui:Kalibre et}}, {{ui:Denetle}} ve {{ui:Hazır ayar}} listesi, bir ölçeği istediğiniz zaman değiştirir ve çizimin ölçeğine üstün gelir. Hazır ayar listesi, kâğıt boyutu olmayan Model'de kapalıdır.

## Katmanlar

Sayfa çubuğundaki {{ui:Katmanlar}}, çizimin katmanlarını, her birinin bu sayfada kaç nesnesi olduğuyla listeler. Dosyanın kapattığı ya da dondurduğu katmanlar gizli başlar. Bir katmanı gizlemek için işaretini kaldırın ya da gizli bir katmanı göstermek için işaretleyin: sayfa yeniden çizilir ve gizli olan şeyler sayımlardan ve {{ui:Çizimi ölç}} için sunulan nesnelerden çıkarılır; gizli katmanları da saymak istemediğiniz sürece. {{ui:Tümünü göster}} her katmanı gösterir; {{ui:Dosyanın katmanlarına dön}} yaptığınız değişiklikleri geri alır. Katman seçimleri bu oturuma aittir, metraj dosyasına değil.

## Bağlı çizimler (xref)

Başka çizimleri bağlayan bir çizim, bunları eklendikleri yerde gösterir. TakeoffCraft bağlı bir çizimi, dosya adına göre, **açık dosyalar** arasında bulur: ev sahibi çizimi ve bağlı çizimini birlikte (ya da birbiri ardından) açın. O zamana kadar durum çubuğu kaç bağlı çizimin bulunamadığını söyler; çizdikleri şey eksiktir ve sayımlar bunu belirtir.

## Sınırlar

- TakeoffCraft'ın okuyamadığı ya da yerleştiremediği nesneler (vekil nesneler, bilinmeyen sınıflar) sayım penceresinde türlerine göre listelenir; bir uyarı olmadan asla atılmazlar.
- Çok büyük çizimler kısmen çizilir ve sayımlar bir üst sınırda durur; bunu belirtir. Bunun yerine böyle bir çizimin PDF çıktısını açın.
- Çizim siyahla ve kendi renkleriyle, beyaz kâğıt için koyulaştırılarak çizilir. Çıktı stili tabloları ve kalem atamaları uygulanmaz.
