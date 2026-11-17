---
title: PDF'nin çizgilerini seçme
summary: Vektör bir PDF'de bir çizgiye tıklayarak bağlı tüm yolunu ölçün ya da alanı için kapalı bir taslağın içine tıklayın; boşluk toleransı gösterilir ve her parça için bir geri alma adımı vardır.
keywords: yol, seç, çizgiler, çizgi çalışması, bağlı, tüm koşu, izleme, taslak, çevre, boşluk, tolerans, köprü, parçalar, sekme, vektör, çizgilerden alan, p
from: c22526ae
---

Vektör bir PDF'de duvarlar ve kenarlar gerçek çizgilerdir. {{ui:Yol}} ({{key:P}}) bunları çizildikleri gibi alır: bir çizgiye tek tıklama, ona bağlı her şeyi uçtan uca ölçer; bu yüzden bir duvarı köşelerine tıklayarak izlemeniz gerekmez. Sayfanın bir ölçeğe ihtiyacı vardır. Taranmış bir sayfada seçilecek çizgi yoktur; orada [Doğrusal](topic:measure-linear) ya da [Alan](topic:measure-areas) kullanın.

## Yol ya da taslak seçme

1. {{ui:Yol}} seçeneğini seçin. İmlecin altındaki çizgi ana hatlarıyla çizilir; onun yanında, ince çizilmiş olabilecek diğer yollar da gösterilir.
2. Bir çizgiye tıklayın: bağlı tüm yol seçilir. Araç çubuğunun altındaki çubuk parça sayısını, uzunluğunu, boşluk toleransını ve kaç boşluğun köprülendiğini gösterir. Başlangıç noktasına geri dönen bir yol kapalıdır ve çevresini de bildirir.
3. Ya da kapalı bir taslağın içine, herhangi bir çizgiden uzakta tıklayın: o noktanın etrafındaki taslak bir alan olarak seçilir. En küçüğü önce gelir; {{key:Tab}} bir sonraki büyük olanı dener.
4. {{key:Enter}} (ya da sağ tık, ya da çift tık) ile işaretleri ekleyin. Seçilen bir yol **Doğrusal** bir kalemin işareti olur, bir taslak **Alan** kaleminin işareti olur: etkin kalem o türdeyse o, değilse aynı türdeki en yeni kalem. Hiç yoksa yeni kalem formu açılır ve {{key:Enter}} tuşuna yeniden basılana kadar hiçbir şey eklenmez. Seçilen her şey tek bir geri alma adımında eklenir.

## Boşluk toleransı

Çizimciler, çizgilerin birleşmesi gereken yerlerde küçük boşluklar bırakır. İki çizginin uçları, bu **boşluk toleransından** daha yakınsa birleşir. Sayfa üzerinde 1.5 nokta ile başlar (sayfanın ölçeğinde fit ve inç olarak gösterilir); bu genişlikteki kesikli bir halka imleci izler ve seçili yolun her iki ucuna yerleşir. Köprülenen her boşluk, seçilen bir yolda turuncu bir halkayla çevrelenir ve çubuk bunları sayar.

{{key:]}} toleransı genişletir, {{key:[}} daraltır. Seçili bir yol, yeni tolerans ile hemen yeniden birleştirilir. Bir birleşim noktasında yol, en az bükülen yönde düz devam eder ve dalı bırakır.

## Tuşlar

| Tuş ya da eylem | Ne yapar |
|---|---|
| Tıklama | İmlecin altındaki yolu ya da onu çevreleyen taslağı seçer. |
| {{key:Shift}} + tıklama | Seçilene başka bir yol ya da taslak ekler. |
| {{key:Tab}} | İmlecin altındaki bir sonraki yolu ya da bir sonraki büyük taslağı dener. |
| {{key:Backspace}} ya da {{key:Mod+Z}} | Son seçilen yolun son parçasını, parça parça kaldırır. Parçası kalmayan yol gider. Hiçbir şey seçili değilken {{key:Mod+Z}} olağan geri almadır. |
| {{key:[}} ve {{key:]}} | Daha dar ve daha geniş boşluk toleransı. |
| {{key:Enter}} | İşaretleri ekler. |
| {{key:Esc}} | Seçilenleri temizler. |

## İyi bilinmesi gerekenler

- Çizimde bir eğri, kısa düz parçalardan oluşan bir zincirdir; bu yüzden uzunluğu gerçek yaydan biraz kısadır. Kesin bir yay için bir çizimin kendi dosyasını ölçün ([Çizimden ölçme](topic:measure-from-a-drawing)).
- Köprülenen bir boşluk, üzerinden düz bir atlama sayılır; bu yüzden kapalı bir taslağın çevresi onu da içerir.
- Yalnızca sayfanın kendi yollarındaki çizgiler ve dolgular çizgi sayılır. Harf olarak çizilmiş metin ve resimler değildir.
