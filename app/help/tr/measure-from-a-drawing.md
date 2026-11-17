---
title: Çizimden ölçün
summary: Uzunlukları ve alanları, çizimin kendi çizgilerinden, yaylarından, çoklu çizgilerinden ve taramalarından seçerek alın; tıklamayla izlemek yerine tam yaylar ve delikler kullanın.
keywords: çizimi ölç, geometri, çoklu çizgi, yay, daire, taralama, kabartma, bulge, tam uzunluk, tam alan, seç, pencere, izleme, CAD'den, doğrusal, alan
from: fd734246
---

Bir DWG ya da DXF sayfasının sayfa çubuğundaki {{ui:Çizimi ölç}}, çizimin kendi nesnelerini işaret olarak alır; bu yüzden onları tıklamayla izlemezsiniz. Bir çoklu çizginin uzunluğu, bir yayın uzunluğu, bir dairenin alanı ve delikleriyle bir taramanın alanı tam olarak çıkar; metrajın her işaret için kullandığı aritmetikten.

## Nesneleri doğrusal ya da alan kalemi olarak alın

1. {{ui:Kalemler}} altında bir **doğrusal** ya da **alan** kalemi oluşturun ya da seçin. Sayfanın bir ölçeğe ihtiyacı vardır.
2. {{ui:Çizimi ölç}}'ü seçin.
3. Nesneleri seçmek için sayfada onlara tıklayın ya da etraflarında bir pencere sürükleyin: içinde tamamen kalan her şey seçilir. {{key:Shift}} seçilenlere bir pencere ekler; seçili bir nesneye yeniden tıklayarak onu bırakın. Çubuk toplamı gösterir: "6 koşu: toplam 108'-9 1/8".
4. Sayıyı ve kalemi adlandıran ekleme düğmesini seçin, örneğin {{ui:Edge'e 6 ekle}} ({{key:Enter}} tuşuna da basabilirsiniz). Her nesne kalemin bir işareti olur, tek bir geri alma adımında. {{key:Esc}} seçtiklerinizi temizler.

## Her kalem türünün neyi aldığı

- Bir **doğrusal** kalem çizgileri, yayları, çoklu çizgileri, daireleri ve splineları uzunluklarıyla alır. Kapalı bir şekil çevresiyle sayılır. Bir tarama dışarıda bırakılır: bir uzunluğu değil bir alanı vardır ve çubuk bunu söyler.
- Bir **alan** kalemi kapalı şekilleri alır: kapalı çoklu çizgileri, daireleri, 2B katıları ve delikleriyle taramaları. Açık koşular dışarıda bırakılır ve çubuk bunu söyler.

## Tam ve neredeyse tam

Çizgiler, yaylar (her kabartma), kabartmalı çoklu çizgiler ve daireler tamdır: uzunluklar ve alanlar, yayın yarıçapını ve açıklığını kullanır, onun resmini değil. Elipsler, splineler ve sınırı kenarlardan oluşan taramalar, bir derece ya da daha ince kirişlerle ölçülür; elipsler için %0.01'den, diğerleri için %0.1'den az hata ile. Çubuk, seçtiklerinizden kaçının bu türden eğri olduğunu gösterir.

## Nereden neyi aldığı

- **Model**: model uzayındaki nesneler. **Bir düzen**: kendi çizgileri ve bir görünüm penceresinin içindeki model nesneleri, onun üzerinden ölçeklenmiş. Bir görünüm penceresinin kenarını kesen bir nesne sunulmaz (kırpılmış çizilir); iki görünüm penceresinin de gösterdiği bir nesne bir kez alınır.
- Yalnızca sayfanın gösterdiği katmanlar. Bloklar ölçülmez, sayılır: bkz. [Çizimden say](topic:count-from-a-drawing). 3B çoklu çizgiler, örgüler, katılar ve bölgeler sunulmaz.
