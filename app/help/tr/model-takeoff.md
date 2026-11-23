---
title: Bir yapı modelinden metraj alın
summary: Mimarın IFC modelini açın, 3B olarak görün, duvarları, döşemeleri, kapıları ve diğerlerini tipe, malzemeye, katmana veya boyuta göre seçin ve sayılarını, uzunluklarını, alanlarını ve hacimlerini metraja aktarın. Modelin daha yeni bir kopyası aynı miktarları günceller.
keywords: model, model metrajı, 3B görünüm, parçaya tıklayın, satırı bulun, malzeme, katman, duvar katmanları, alçıpan, yalıtım, kapı boyutları, pencere boyutları, açıklık listesi, csv, 3b, bim, ifc, rvt, yapı modeli, miktarlar, duvarlar, döşemeler, kapılar, pencereler, kolonlar, odalar, tipe göre, seviyeye göre, güncelleme, daha yeni model, tasarım geliştirme
from: 8c4c12c9
---

Proje teslimini beklemeniz gerekmez. Mimar yapı modelini gönderdiğinde, burada açın ve miktarları doğrudan modelden alın. Model bilgisayarınızda okunur; hiçbir yere gönderilmez.

## Adımlar

1. Araç çubuğunda {{ui:Model}} seçeneğini seçin ve modelin `.ifc` dosyasını seçin ya da diğer dosyalar gibi {{ui:Planları aç}} ile açın.
2. {{ui:Model metrajı}} her kategori ve tip için bir satırla açılır: tipe göre duvarlar, döşeme tipine göre döşemeler, kapı tipine göre kapılar ve benzeri. Her satır, o kategorinin sayısını ve hangi birimle ölçüldüğünü gösterir.
3. Hızlı bir toplam için {{ui:Şuna göre grupla}} seçeneğini {{ui:Kategori}} olarak ayarlayın ya da her tipi kata göre bölmek için {{ui:Kategori, tip ve seviye}} seçin.
4. İstemediğiniz satırların işaretini kaldırın. {{ui:Bul}} listeyi daraltır. Bir satırın işaretini kaldırmak, 3B resimdeki parçalarını da gizler.
5. Tüm iş boyunca saklayacağınız bir {{ui:Model adı}} verin, örneğin projenin adı.
6. {{ui:Metraja ekle}} seçeneğini seçin. Her miktar, kalemler listesinde tipli bir miktar olur. Adını verin, fiyatlandırın ve diğer kalemler gibi birim maliyetleri ekleyin.

## Modeli 3B görün

{{ui:Modeli 3B göster}} modeli tablonun üstünde çizer; her satır için bir renk (satır adının yanındaki renk kutucuğu). Döndürmek için sürükleyin, taşımak için {{key:Shift}} tuşunu basılı tutup sürükleyin, yakınlaştırmak için tekerleği kullanın ve geri dönmek için {{ui:Sığdır}} ya da {{ui:Sıfırla}} seçin.

- **Resimde bir parçaya tıklayın**: satırı tabloda seçilir, o satırın tüm parçaları aydınlatılır, diğerleri soluklaşır. Aynı parçaya yeniden tıklarsanız ve parça birden çok satırda yer alıyorsa (katmanlarındaki bir duvar gibi), bir sonraki satır seçilir.
- **Tablodaki bir satıra tıklayın**: parçaları aydınlanır. Yeniden tıklayın ya da resimde boş bir yere tıklayın, seçim temizlenir.
- Odalar çizilmez, çünkü bir odanın hacmi binayı gizlerdi.
- Çok büyük bir model, bellekte sığması için bazı parçalar için yalnızca bir kutu tutar; panel kaç tane olduğunu söyler. Sayılar değişmez.

Bu bilgisayar 3B çizemiyorsa tablo eskisi gibi çalışır.

## Malzemeye, katmana veya boyuta göre grupla

{{ui:Şuna göre grupla}} seçeneğinin üç seçeneği daha vardır:

- {{ui:Kategori ve malzeme}}: katmanlardan oluşan bir duvar, döşeme veya çatı, her katmanın malzemesine kendi satırını verir; böylece alçıpan, dikmeler ve yalıtım ayrı fiyatlandırılabilir. Tek malzemeli bir yapı parçası o malzemenin satırını alır; malzemesi olmayan parça "Malzeme adı belirtilmemiş" adlı bir satırda tutulur.
- {{ui:Kategori ve katman}}: aynısı, satırda katmanın kalınlığıyla birlikte ("Yalıtım, 100 mm").
- {{ui:Kategori, tip ve kapı veya pencere boyutu}}: kapılar ve pencereler genişlik ve yüksekliklerine göre bölünür (örneğin 3'-0" × 6'-8" ya da 914 × 2,032 mm).

Bir katman için alan, duvarın kendi yüzü (ya da döşemenin veya çatının plan ya da yüzey alanı) ve hacim, bu alanın katman kalınlığıyla çarpımıdır. Satırın notu kaç sayının bir katmandan geldiğini söyler. Bir duvarın katmanlarının toplamı, modelin o duvar için belirttiği hacme eşittir.

## Satırları veya açıklıkları CSV olarak kaydedin

{{ui:Satırları CSV olarak kaydet}} işaretlediğiniz satırları, her başlıkta birimleriyle birlikte, bir elektronik tabloya uygun olarak kaydeder. {{ui:Açıklık listesini CSV olarak kaydet}} (yalnızca modelde kapı veya pencere varsa), her kapıyı ve pencereyi tipine, seviyesine ve boyutuna göre sayısıyla birlikte kaydeder.

## Neler ölçülür

| Kategori | Miktarlar |
|---|---|
| Duvarlar | sayı, uzunluk, duvar alanı (bir yüz, açıklıklar düşülmüş), hacim |
| Döşemeler, plaklar, tavanlar ve diğer kaplamalar | sayı, plan alanı, hacim |
| Çatılar | sayı, plan alanı, çatı yüzeyi, hacim |
| Temeller | sayı, plan alanı, hacim |
| Kolonlar, kirişler ve elemanlar | sayı, eleman boyunca uzunluk, hacim |
| Korkuluklar, borular, kanallar ve kablo güzergâhları | sayı, uzunluk |
| Merdivenler | sayı, hacim |
| Odalar | sayı, taban alanı, hacim |
| Kapılar, pencereler ve diğer her şey | sayı |

Modelin yazarı bir miktarı dosyada belirtmişse o sayı kullanılır. Aksi halde sayı, öğenin şeklinden ölçülür. Her miktar, hangisinin kullanıldığını ve kaç öğenin sayı verdiğini söyleyen bir not tutar.

:::note
Şekilden ölçülen bir duvarın uzunluğu uçtan uca gider; bu yüzden köşede birleşen iki duvarın her ikisi de köşeyi içerir. Hacim için kapalı bir şekil gerekir: kapalı olmayan bir şekle sahip öğe sayılır ama hacim vermez. Eğri veya köşeli bir duvar öğesi, tüm dik yüzlerinin yarısı olarak ölçülür ve notu bunu söyler.
:::

## Daha yeni bir model geldiğinde

Daha yeni dosyayı açın ve aynı {{ui:Model adı}} değerini yazın. Hiçbir şey eklemeden önce panel, kaç miktarın yeni olduğunu, kaçının değiştiğini ve neyden neye değiştiğini, ayrıca eski kopyadaki hangi miktarların artık modelde olmadığını söyler. {{ui:Metraja ekle}} seçeneğini seçin: değişen miktarlar yeni sayılarını alır; adlarınız, birim fiyatlarınız, fireleriniz ve birim maliyetleriniz kalır. Modelden çıkmış miktarlar eski sayılarını korur; tasarımda bunlar kaldırıldıysa kendiniz silin.

Tip ve seviye adları, bir miktarın tanınma yoludur. Mimar bir duvar tipini yeniden adlandırırsa, yeni bir miktar olarak gelir ve eskisi artık yok olarak listelenir.

## Bu uygulamanın okuduğu dosyalar

IFC dosyaları (IFC2x3, IFC4 ve IFC4.3). Yollar, raylar veya köprüler içeren bir IFC dosyası, altyapı miktarlarını da önceki gibi doğrudan getirir.

TakeoffCraft bu sürümde `.rvt` dosyalarını okumaz. Mimar Revit'te çalışıyorsa, modelin bir IFC dışa aktarımını isteyin (File, Export, IFC) ve onu açın.

Bir model bir seferde en fazla 500 miktar getirebilir. Daha fazlası varsa satırların işaretini kaldırın ya da kategoriye göre gruplayın.
