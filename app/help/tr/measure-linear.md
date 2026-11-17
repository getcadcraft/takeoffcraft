---
title: Doğrusal koşuları ölçün
summary: Duvarları, boruları, trimleri ve diğer uzunlukları koşular olarak alın; düz parçalar, yaylar ve Shift ile 45 derecelik yakalama ile.
keywords: doğrusal, uzunluk, koşu, çoklu çizgi, duvarlar, LF, doğrusal fit, yay, eğri, 45 derece, ortogonal, yakalama, parçalar, polylength, düş, açıklık, kapı, boşluk, yaz, yazılan, koordinatlar, mesafe, doğrudan mesafe, kutupsal
from: c669deff
---

Bir doğrusal kalem uzunluğu ölçer. Her koşu bir nokta zinciridir: düz parçalar ve yay modunu açtığınızda yaylar. Bir kalemin herhangi bir sayfada herhangi bir sayıda koşusu olabilir.

Başlamadan önce: sayfanın bir ölçeğe ihtiyacı vardır ([Ölçeği ayarlayın](topic:set-the-scale)) ve bir doğrusal kaleme ihtiyacınız vardır ([Metraj kalemleri oluşturun](topic:create-items)).

Vektör bir PDF'de tıklamalarınız çizimin kendi çizgilerine yakalanır: uç noktalar, orta noktalar ve kesişimler ([Çizimin çizgilerine yakalama](topic:snap-to-the-drawing); {{key:F3}} bunu kapatır).

## Bir koşu çizin

1. {{ui:Kalemler}} altındaki doğrusal kaleme tıklayın.
2. Araç çubuğunda {{ui:Doğrusal}}'ı seçin ya da {{key:L}} tuşuna basın.
3. Koşunun başına tıklayın.
4. Boyunca her köşeye tıklayın.
   Durum çubuğu "Uzunluk" (şu ana kadarki koşu, işaretçiye kadar) ve "parça" (çizdiğiniz parça) değerlerini fit ve inç cinsinden gösterir.
5. Koşuyu bitirin: son noktaya çift tıklayın, {{key:Enter}} tuşuna basın ya da sağ tıklayın.
   Koşu kalemin renginde çizilir ve seçili işaret olur. {{ui:Kalemler}} listesindeki ve {{ui:Miktarlar}} tablosundaki kalemin uzunluğu artar.

Araç {{ui:Doğrusal}} üzerinde açık kalır, böylece bir sonraki koşuya hemen başlayabilirsiniz. {{ui:Seç}}'e dönmek için {{key:Esc}} tuşuna basın.

Çizerken:

- {{key:Backspace}} ({{key:Delete}}) son noktayı kaldırır.
- {{key:Esc}} tamamlanmamış koşuyu atar.
- Sürükleme sayfayı kaydırır, tekerlek yakınlaştırır; nokta eklemezler.

:::mac
Mac dokunmatik yüzeyinde sağ tıklama iki parmakla tıklamadır (Sistem Ayarları'nda, Trackpad altında ikincil tıklamayı açın). TakeoffCraft yalnızca ikincil düğmeyi okur; bu yüzden bir Control-tıklama düz bir tıklama sayılıp nokta ekleyebilir. Çift tıklama ya da {{key:Enter}} her zaman bitirir.
:::

:::touch
Dokunmatik ekranda, nokta yerleştirmek için dokunun, sayfayı kaydırmak için tek parmakla sürükleyin ve iki parmakla çimdikleyerek yakınlaştırın. Uzun basarak, çift dokunarak ya da sayfanın altındaki çubukta {{ui:Bitir}} ile bitirin ({{ui:Arka}} son noktayı geri alır). Bkz. [Sorun giderme](topic:troubleshooting#touch-screens).
:::

## 45° adımlarla düz çizgiler

Bir nokta yerleştirirken {{key:Shift}} tuşunu basılı tutun. Son noktadan parça, en yakın 0°, 45°, 90° ya da 135° yönüne yakalanır ve onun üzerinde sürüklediğiniz uzunluğu korur. Durum çubuğu hatırlatır: "Shift 45°'ye yakalar".

Yay modunda bu, bir yayın bittiği yer için geçerlidir: yayın kirişi başladığı yerden 45° adımlarla gider. Eğri üzerinde tıkladığınız nokta asla yakalanmaz.

## Yaylar ve kavisli duvarlar

1. Bir koşu çizerken, eğrinin başladığı noktaya yerleştirin.
2. Yay modunu açın: araç çubuğunda {{ui:Yay}}'ı seçin ya da {{key:R}} tuşuna basın. Düğme basılı kalır.
3. Eğri üzerinde, ortasına doğru herhangi bir noktaya tıklayın.
   Durum çubuğu "(yay: bittiği yere tıklayın)" ekler ve önizleme noktanızdan geçecek şekilde eğilir.
4. Eğrinin bittiği yere tıklayın.
   Yay eklenir. Uzunluğu, kısa kirişlerden oluşan bir dizi değil, tam yay uzunluğudur.
5. Yay çizmeye devam etmek için sonraki eğri üzerinde başka bir noktaya ve onun sonuna tıklayın ya da düz parçalara dönmek için yeniden {{key:R}} tuşuna basın.

{{key:Backspace}} ya da {{key:Esc}} önce eğri üzerindeki bekleyen noktayı bırakır; noktaları olağan şekilde kaldırmak için yeniden basın.

## Uzunlukları ve koordinatları yazın

İlk noktadan sonra, tıklamak yerine bir sonrakinin nereye gideceğini yazabilirsiniz. Bir rakam, `@` ya da `#` yazın: durum çubuğunda yazdığınızla birlikte bir {{ui:Yaz}} kutusu açılır. Noktayı yerleştirmek için {{key:Enter}} tuşuna basın; kutu bir sonraki için açık kalır.

| Yazılan | Sonraki nokta |
|---|---|
| `12'6"` | Son noktadan 12'-6", işaretçiye doğru (yönü gösterin, sonra uzunluğu yazın) |
| `12'6"<45` | 45°'de 12'-6", ekranın sağından saat yönünün tersine sayılır (`<90` yukarı, `<-90` aşağı) |
| `@6',-4'` | Son noktadan 6' sağa ve 4' aşağı |
| `6',4'` (ya da `#6',4'`) | Bu koşunun ilk noktasından 6' sağa ve 4' yukarı |

Uzunluklar TakeoffCraft'ta her yerde olduğu gibi yazılır ([Giriş biçimleri](topic:entry-formats)): `12'-6 1/2"`, `12.5` (fit), `30"`, `3.2 m`. "Sağ" ve "yukarı", sayfayı gördüğünüz gibidir; PDF sayfası döndürülmüş olsa bile.

Boş bir kutuda {{key:Enter}}, sayfadaki {{key:Enter}} gibi koşuyu bitirir; {{key:Esc}} kutuyu kapatır ve koşuyu sürdürür. Yazılan noktalar tıklamalarla aynı kurallardan geçer: düşüşler, yaylar ve bir alanı kapatma hepsi çalışır. Aynı kutu {{ui:Alan}} ve {{ui:Boşluk}}'ta da çalışır; bir dairenin merkezinden sonra yarıçapı alır.

## Bir koşunun bir parçasını düşün

Bir kapıdan ya da bir vitrinden geçen bir duvar koşusu düz çizilebilir ve yine yalnızca duvarı sayar: açıklığın üzerindeki parçalar **düşülenlerdir**. Kesikli ve ince çizilirler ve sayılmazlar.

Çizerken:

1. Açıklığın başladığı noktaya yerleştirin.
2. Araç çubuğunda {{ui:Düş}}'ü seçin ya da {{key:E}} tuşuna basın. Düğme basılı kalır ve durum çubuğu sonraki parçaların düşüleceğini söyler.
3. Açıklığın bittiği yere tıklayın. Parça kesikli çizilir; durum çubuğundaki "Uzunluk" bunu hariç tutar.
4. {{key:E}} tuşuna yeniden basın ve duvar boyunca devam edin.

Çizdikten sonra: koşuyu seçin. **Seçili işaret** altında her parçanın bir {{ui:Düş}} kutusu vardır: o parçayı düşmek için işaretleyin, yeniden saymak için işaretini kaldırın. Her değişiklik tek bir geri alma adımıdır.

Bir koşu her zaman en az bir sayılan parça tutar. Panel o zaman **Düşülenler** (düşülen uzunluk) ve **Çizilen** (tüm koşu) gösterir; **Uzunluk**, kalemin miktarı, duvar alanı ve maliyetlerin hepsi düşülenler olmadan uzunluğu kullanır. 3B denetim görünümü duvarda bir boşluk bırakır, işaretli PDF düşülenleri kesikli çizer ve dışa aktarılan **İşaretler** sayfası onları listeler.

Bir köşeyi taşımak düşülenleri korur. Noktaları eklemek ya da kaldırmak (koşuyu yeniden çizerek) onlar olmadan başlar.

## Bir koşunun ayrıntılarına bakın

{{ui:Seç}} ({{key:V}}) seçin ve koşuya tıklayın. Sağdaki **Seçili işaret** şunları gösterir:

- ait olduğu kalem (koşuyu oraya taşımak için listeden başka bir doğrusal kalem seçin),
- sayfa,
- fit ve inç cinsinden **Uzunluk** ve LF cinsinden,
- **Parça** sayısı ve kalemin bir yüksekliği olduğunda **Duvar alanı**,
- her parçanın uzunluğu; yaylardan sonra "(yay)" ile ve {{ui:Düş}} kutusu.

Sayfada, seçili koşunun her parçasının üzerinde uzunluğu yazılır.

## Bir koşuyu düzeltin

- **Bir noktayı taşıyın**: koşuyu seçin, sonra kare köşe tutamaçlarından birini sürükleyin. Taşınan parçayı 45° adımlarla yakalamak için {{key:Shift}} tuşunu basılı tutun. Bir yay kabartmasını korur.
- **Bir yayı bükün**: seçili bir koşu her yayın ortasında yuvarlak bir tutamaç gösterir. Onu sürükleyin: yay, bıraktığınız yerden geçer; böylece daha çok, daha az ya da ters yönde bükülür. Uçları arasındaki düz çizgiye sürüklenirse düz bir parçaya dönüşür. {{key:Mod+Z}} onu geri alır ("Yayı bük").
- **Bir koşuyu silin**: seçin ve {{key:Delete}} tuşuna basın, araç çubuğunun {{ui:Daha fazla}} menüsünden {{ui:Sil}}'i seçin ya da panelde {{ui:İşareti sil}}'i seçin.
- **Geri al**: {{key:Mod+Z}}; **yinele** için {{key:Mod+Y}}.

Henüz bir koşunun ortasına nokta ekleyemezsiniz. Koşuyu silin ve yeniden çizin.

## Duvar alanı

Doğrusal kaleme bir {{ui:Yükseklik}} verin (örneğin `9'-0"`). Bu durumda **Duvar alanı (A)** = uzunluk × yükseklik değerini, SF cinsinden (ya da metrik bir kalem için m²) bildirir ve duvar alanı, çalışma tablosu dışa aktarmasının notlar sütununa girer. Kaplama, boya ya da yalıtım için montajlarda kullanın: bkz. [Montajlar ve formüller](topic:assemblies).
