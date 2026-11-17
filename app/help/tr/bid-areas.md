---
title: İhale alanları
summary: İşaretleri bina, kat ya da faza göre etiketleyin, her alana tek tek metraj çıkarın ve her alan için miktarları ve maliyetleri okuyun.
keywords: ek alternatif, düşülen alternatif, temel teklif, alternatifler, ihale alanı, alan, bina, kat, seviye, faz, bölge, alternatif, döküm, bölüm, tipik kat, ara toplam, alana göre
from: 64f3d41c
---

İhale alanı, işin tek başına fiyatlandırdığınız bir parçasıdır: bir bina, bir kat, bir faz, bir kanat. Her işaret tek bir ihale alanında olabilir. Miktarlar ve tahmin her alan için, her alanın ara toplamıyla birlikte okunabilir; iş toplamı ise her şeyin toplamı olarak kalır.

## İhale alanı oluşturun

1. {{ui:Kalemler}} panelinin üstünde {{ui:İhale alanı}} listesini açın.
2. **Yeni ihale alanı…** seçeneğini seçin, "Bina A" ya da "2. Kat" gibi bir ad yazın ve **Oluştur** düğmesini seçin.
   Yeni alan geçerli alan olur. Durum çubuğu şunu söyler: "Yeni işaretler (ad) içine girer. Diğer ihale alanlarındaki işaretler soluklaştırılır."

## Bir alana metraj çıkarın

Listede bir ihale alanı seçiliyken her yeni işaret ona girer: doğrusal işaretler, alanlar, daireler, sayımlar, {{ui:Otomatik say}}'ın eklediği işaretler ve yapıştırdığınız şey. Diğer ihale alanlarındaki işaretler ve hiçbir alanda olmayanlar sayfada soluklaştırılır; böylece neyin nereye ait olduğunu görebilirsiniz.

Alana girmeden metraj yapmak için listede **İhale alanı yok** seçin; o zaman hiçbir şey soluklaşmaz.

:::tip
Tipik katlar: 2. Katı metrajlayın, işaretlerini seçin ({{key:Mod+A}} sayfada), kopyalayın, listede 3. Katı seçin ve yapıştırın. Kopyalar 3. Kata girer. Katlar aynıysa ve ayrı tutmanız gerekmiyorsa, bunun yerine bir [tipik grup](topic:typical-groups) aynı katı birkaç kez sayar.
:::

## İşaretleri başka bir alana taşıyın

Bir işareti ya da birkaçını seçin ({{key:Shift}} + tıklama ya da {{key:Mod+A}}). **Seçili işaret** (ya da **Seçili işaretler**) altında {{ui:İhale alanı}} alanında alanı seçin. Durum çubuğu şunu söyler: "3 işaret 2. Kata taşındı." Bu tek bir geri alma adımıdır.

## Yeniden adlandırın, sıralayın ya da silin

Listede **İhale alanlarını yönet…** seçeneğini seçin. Adı değiştirmek için üzerine yazın, sırayı değiştirmek için okları kullanın (tablolar ve çalışma kitabı bunu izler) ya da çöp kutusuyla birini silin. Bir ihale alanını silmek işaretlerini korur: onlar artık hiçbir ihale alanında olmaz. Her değişikliği {{key:Mod+Z}} geri alır.

## Miktarları alana göre okuyun

{{ui:Miktarlar}} tablosunda {{ui:Alana göre}} seçeneğini seçin (metrajın bir ihale alanı olduğunda görünür). Her alan, içerdiği kalemleri miktarları, birimleri ve toplamlarıyla listeler; ardından bir ara toplam satırı gelir. Hiçbir ihale alanında olmayan işaretler en sonda **İhale alanı yok** olarak yer alır. Bir kalem satırına tıklayın; kalem vurgulanır ve o alan geçerli alan olur.

Birim maliyetler her alan için o alanın kendi toplamlarından hesaplanır. `ceil(L / 4)` gibi yukarı yuvarlayan bir formül, alanların toplamının tüm iş için verilenden biraz fazla çıkmasına yol açabilir; alan alan fiyatlandırılmış bir teklifte de böyledir.

## Alternatifler: temel teklif artı ilaveler ve düşümler

Bir ihale alanı bir **alternatif** olabilir: sahibin teklife ekleyebileceği ya da tekliften çıkarabileceği iş. **İhale alanlarını yönet…** içinde her alanın adının yanında bir liste vardır:

| Seçim | Ne yapar |
|---|---|
| {{ui:Temel teklif}} | Teklifte, her zamanki gibi. |
| {{ui:İlave alternatif}} | Ayrıca fiyatlandırılır ve **temel tekliften çıkarılır**: bir halı yükseltmesi, ek bir tente. |
| {{ui:Düşülen alternatif}} | Temel teklifte yer alır ve düşüm olarak sunulur: "tenteyi kaldırın". |

Bir alternatifin işini, diğer alanlar gibi ilgili ihale alanına metrajlayın. Metrajda bir alternatif olduğunda:

- {{ui:Miktarlar}} tablosunun başlığı İş toplamı yerine **Temel teklif** yazar: ilave alternatifler olmadan tüm metraj.
- {{ui:Alana göre}} tablosu temel teklifle ve her alternatif için bir satırla biter: ilave için **+$300.00**, düşüm için **−$1,050.00**.
- Bir alternatif yalnızca işaretleri olan kalemleri, onların birim maliyetleriyle fiyatlandırır; böylece başka bir kalemin birim maliyet parçası içeri sızmaz.

Dışa aktarmalarda CSV temel teklif ve alternatiflerle biter; çalışma kitabına ise **Alternatifler** çalışma sayfası eklenir: temel teklif, her alternatifin kalemleri ve değişikliği, ayrıca tüm ilave alternatifler alınmış hâlde temel teklif.

## Dışa aktarmada

{{ui:XLSX}} bir **İhale alanına göre** çalışma sayfası ekler: her alanın kalemleri ve bileşenleri; miktar, fireli miktar, malzeme, işçilik ve toplam; her alan için bir ara toplam (`SUM` formülü) ve sonda **Tüm ihale alanları**. **İşaretler** çalışma sayfasına bir **İhale alanı** sütunu eklenir. İhale alanı olmayan bir metraj eskisi gibi dışa aktarılır. Bkz. [Dışa aktarma sütunları](topic:export-columns).

İhale alanları işaretlerle birlikte proje dosyasına kaydedilir.
