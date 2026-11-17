---
title: Bir sembolü otomatik say
summary: Bir sembolün etrafını kutuya alın, TakeoffCraft bu sayfada ya da açık olan tüm sayfalarda diğerlerini bulsun, eşleşmeleri kaydırıcıyla gözden geçirin ve tek adımda ekleyin.
keywords: herhangi bir açı, döndürülmüş, çevrilmiş, farklı ölçek, başka ölçek, otomatik say, otomatik sayım, sembol arama, sembol bul, örüntü, şablon, eşleşme, algıla, sayım aracı
from: fa68a6c1
---

{{ui:Auto count}}, bir sembolü kutuya aldıktan sonra o sembolün her kopyasını bulur. Ardından sayfadaki eşleşmeleri gözden geçirirsiniz ve kabul ettiklerinizi sayım işareti olarak eklersiniz. Bu bir yardımcıdır, garanti değildir: eklemeden önce her zaman gözden geçirin.

## Sembolleri bulun

1. {{ui:Items}} altında bir sayım kalemi oluşturun veya tıklayın.
2. Sembolün göründüğü bir sayfa açın.
3. Araç çubuğunda {{ui:Auto count}} seçin veya {{key:S}} tuşuna basın.
   Sayfanın üstünde bir çubuk belirir: "Bu sayfada bir sembolün etrafına kutu sürükleyin."
4. Yalnızca bu sayfada değil, açık olan tüm sayfalarda aramak için {{ui:Search all open sheets}} kutusunu işaretleyin.
5. Sembolü kolay görebilmek için yakınlaştırın, ardından bir kopyasının etrafına sıkıca kutu sürükleyin. Tüm sembolü dahil edin; etrafındaki boş kâğıt kırpılır.
   Çubukta bir ilerleme çubuğu ve bir {{ui:Cancel}} düğmesiyle birlikte "Aranıyor…" yazar. Sayfa yanıt vermeye devam eder: yakınlaştırabilir, kaydırabilir ve sayfalar arasında geçebilirsiniz. Başka bir araç seçmek veya {{key:Esc}} tuşuna basmak aramayı iptal eder.
6. Arama bittiğinde eşleşmeler, kalemin rengiyle kutular halinde sayfada görünür ve çubukta "22 eşleşme, 19 eklenecek (3 zaten sayılmış). Reddetmek veya geri getirmek için bir kutuya tıklayın." gibi bir özet belirir.

{{ui:Auto count}} modundayken sayfada sürüklemek, kaydırmak yerine kutu çizer. Kaydırmak için {{key:Space}} tuşunu basılı tutup sürükleyin veya orta düğmeyle sürükleyin.

## Eşleşmeleri gözden geçirin

- **Bir kutuya tıklayın** onu reddetmek için. Reddedilen kutu kesikli çizgili ve üstü çizili olur. Geri getirmek için tekrar tıklayın.
- **{{ui:Match}} kaydırıcısını hareket ettirin** (%50 ile %95 arası, %75'ten başlar). Yükseldikçe yalnızca yakın eşleşmeler görünür; düştükçe daha gevşek olanlar görünür. Kaydırıcı yalnızca bulunanları süzer; yeniden arama yapmaz.
- **Zaten sayılmış**: bu kalemin bir sayım işareti bulunan bir noktadaki eşleşmeler reddedilmiş olarak başlar; böylece hiçbir şeyi iki kez saymazsınız.
- **Diğer sayfalar**: tüm açık sayfalarda aradıysanız, sayfa listesi veya {{key:PageDown}} ile sayfalar arasında geçin ve her birini gözden geçirin. Özet, kaç sayfada eşleşme olduğunu söyler.

## Ekleyin

{{ui:Add}} seçin. Düğme kaç tane olduğunu gösterir, örneğin "19 işaret ekle".
Sayım işaretleri, kabul edilen her kutunun ortasına eklenir: "\"Dupleks priz\" kalemine 19 sayım işareti eklendi. Ctrl+Z hepsini kaldırır."

Toplu işlem tek bir geri alma adımıdır; bu yüzden tek bir {{key:Mod+Z}} hepsini kaldırır.

Hiçbir şey eklemeden gözden geçirmeyi bırakmak için {{ui:Discard}} seçin veya {{key:Esc}} tuşuna basın. Başka bir araç seçmek de gözden geçirmeyi atar.

## Neyi bulur, neyi kaçırır

TakeoffCraft çizimi, piksel piksel, çizdiğiniz sembolle karşılaştırır.

- Sembolü 0°, 90°, 180° ve 270° döndürülmüş hâlde bulur. Herhangi bir açıdaki sembolü de bulmak için kutuyu çizmeden önce otomatik say çubuğunda {{ui:Any angle (slower)}} kutusunu işaretleyin: her 15°'de dener, sonra her bulguyu 1.5° hassasiyetine kadar ince ayarlar. Bu yaklaşık altı kat daha uzun sürer. Aynalanmış bir sembolü bulmaz; ancak sembol aynalandığında da aynı görünüyorsa bulur.
- {{ui:Search all open sheets}} işaretliyken, başka ölçekteki bir sayfa, sembolün o sayfadaki boyutunda aranır: 1/8" planda ölçeğine uygun çizilmiş bir armatür, 1/4" planda olduğunun yarısı boyutundadır ve yine bulunur. Böyle bir sayfa ayrıca kutunun kendi boyutunda da aranır; böylece her sayfada aynı boyutta basılmış etiketler ve semboller bulunur. Bunun için iki sayfada da ölçek olmalıdır; ölçeksiz bir sayfa yalnızca kutunun boyutunda aranır.
- Birbirine çok benzeyen semboller birbirleriyle eşleşebilir: dupleks ve dörtlü priz ya da bir harf farkı olan iki armatür etiketi. Yalnızca doğru olanlar kalana kadar kaydırıcıyı yükseltin ve geri kalanları elle reddedin.
- Başka çizgilerle, taramayla veya metinle kesişen bir sembol daha düşük puan alır ve kaydırıcıda daha düşük bir ayar gerektirebilir.
- Çok küçük kutular reddedilir: "Bu kutu çok küçük. Sembolün tamamının etrafına çizin." Boş bir kutu da reddedilir: "Bu kutu neredeyse boş. Bir sembolün etrafına çizin."
- Bu sembol için gereken boyutta çok büyük olan bir sayfa atlanır ve özet "1 sayfa bu sembol boyutunda aramak için çok büyüktü." yazar. Daha büyük bir sembolü kutuya alın veya o sayfayı elle sayın.

Hiçbir şey bulunamazsa durum çubuğu "Eşleşme yok. Eşleşme kaydırıcısını düşürün veya sembolü daha sıkı kutuya alın." yazar.

## Hız ve tarayıcılar

Arama bir arka plan işçisinde çalışır; bu yüzden sayfa yanıt vermeye devam eder ve istediğiniz zaman iptal edebilirsiniz. Her sayfa önce çalışma boyutunda, sayfanın kendisinde çizilir; bu çok büyük bir sayfada kısa bir duraklamaya yol açabilir. Güncel Chrome, Edge, Firefox ve Safari'de çalışır. Çok sayfa aramak daha uzun sürer; ilerleme çubuğu sayfa sayfa ilerler. Çevrimdışıyken otomatik say, uygulama çubuğunda {{ui:Offline ready}} göründüğünde çalışır: {{ui:Save for offline}} işçiyi de saklar. Bkz. [Çevrimdışı çalışma](common:offline).
