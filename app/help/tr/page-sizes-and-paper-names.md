---
title: Sayfa boyutları ve kâğıt adları
summary: Her sayfanın boyutunu milimetre ve inç olarak ve kâğıt adını (A, B ve C serileri, ANSI, ARCH) görün; karışık bir takımı boyuta göre gruplayarak tuhaf sayfaları bulun.
keywords: sayfa boyutu, kâğıt boyutu, kâğıt adı, a0, a1, a2, a3, a4, b serisi, c serisi, ansi, arch, mimari, mm, inç, özel boyut, boyuta göre, tuhaf boyut, karışık takım, ölçek, plan takımı, mediabox, döndürme
from: 9c061c07
---

Ölçek, yalnızca doğru kâğıtta bir anlam taşır. {{ui:TakeoffCraft}} her PDF sayfasının boyutunu okur ve kâğıdın adını söyler; böylece farklı bir boyutta basılmış bir sayfayı, ona dayanarak bir ölçüme güvenmeden önce görebilirsiniz.

## Ne yapacaksınız

Açık sayfanın boyutuna bakın, sonra tüm takımı boyuta göre gruplayın.

## Adımlar

1. Planları açın ({{ui:Planları aç}}).
2. Çizimin üstündeki sayfa çubuğu, açık sayfanın kâğıt adını ve boyutunu gösterir; örneğin "A1 · 594 × 841 mm".
3. {{ui:Sayfalar}} listesinin her satırında, sayfa adının altında bir boyut satırı vardır.
4. {{ui:Sayfalar}} başlığında {{ui:Boyuta göre}} seçeneğini seçin. Liste sayfaları boyut başına bir başlık altında toplar, en büyük grup önce gelir ve yalnızca birkaç sayfası olan bir boyutu tuhaf olarak işaretler.
5. Takımın kendi sırasına dönmek için yeniden {{ui:Boyuta göre}} seçeneğini seçin.

Bir DWG ya da DXF sayfasının kâğıdı yoktur, bu yüzden onun için boyut gösterilmez.

## Ad nasıl seçilir

- Boyut, PDF'deki sayfa kutusundan ve uygulanan döndürmeden gelir.
- Adlar A ve B serileri (ISO 216), C serisi (ISO 269), ANSI A'dan E'ye ve ARCH A'dan E'ye kadardır.
- Adlandırılmış bir boyuta 2 mm içinde olan bir sayfa o adı alır. Diğer her sayfa "özel" olarak adlandırılır; en yakın adlandırılmış boyut ve ondan ne kadar uzak olduğu gösterilir.

## Tahminde

Tahmin çalışma kitabında, her boyutun sayısını içeren bir {{ui:Sayfa boyutları}} çalışma sayfası vardır.

:::note
ANSI ve ARCH inç değerleri, yayımlanmış tablolardan elle girildi ve basılı standartlarla karşılaştırılmadı.
:::
