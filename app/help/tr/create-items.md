---
title: Metraj kalemleri oluşturun
summary: Doğrusal, alan ve say kalemleri oluşturun; birimini, yüksekliğini veya derinliğini, fireyi ve malzeme ile işçilik oranlarını ayarlayın.
keywords: ekip, üretim oranı, ekip büyüklüğü, ücret, saat, adam saat, işçi saati, ekip günü, işçilik saati, kalem, yeni kalem, koşul, çoklu koşul, ayrıca ölç, birkaç tür, oda, doğrusal, alan, say, birim, yükseklik, derinlik, fire, malzeme, işçilik, oran, renk, maliyet
from: 7fa5effc
---

Bir **kalem**, ölçüp fiyatlandırdığınız bir şeydir: bir duvar tipi, bir döşeme kaplaması, bir tavan, bir kapı, bir aydınlatma armatürü. Çizdiğiniz her işaret bir kaleme aittir. Diğer programlar bunlara koşul adını verir.

Her kalemin bir türü vardır (ve başka türde işaretleri de alabilir, bkz. [Bir kalem, birden çok işaret türü](topic:create-items#one-item-several-kinds-of-marks)):

| Tür | Çizersiniz | Raporlar | Birimler |
|---|---|---|---|
| Doğrusal | Bağlı noktaların dizileri | Uzunluk, koşu sayısı ve yükseklik varsa duvar alanı | LF veya m |
| Alan | Boşluklu kapalı çizgiler | Alan, çevre, alan sayısı | SF, SY, SQ, ac, ha veya m² |
| Say | Her şey için bir tık | Kaç tane olduğu | EA |
| Girilen miktar | Hiçbir şey: miktarı siz yazarsınız | Yazdığınız sayı (ya da CivilCraft'tan gelen bir sayı) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha veya m² |

## Girilen miktar (çizim yok)

Tahmindeki bazı şeyler hiç çizilmez: mobilizasyon, izinler, öngörülmeyen gider payı, götürü taşeron işi ya da CivilCraft'ın hesapladığı kazı ve dolgu. Bunları bir **Girilen miktar** yapın:

1. {{ui:New item}} seçin, bir ad yazın, {{ui:Typed quantity (no drawing)}} seçeneğini seçin ve {{ui:Add}} seçin.
2. Kalem düzenleyicisinde {{ui:Unit}} seçin (götürü iş için LS) ve {{ui:Quantity}} girin: `1`, `2.5` veya `1,250`.
3. Diğer kalemlerde olduğu gibi fire ve oranları ayarlayın. Bir montajın formülleri miktar olan `Q`'yu kullanır; örneğin `ceil(Q / 12)` kamyon yükü.

Girilen miktar hiçbir işaret almaz ve tahmini hiçbir zaman eksik bırakmaz. Metrajda iş alanları varsa düzenleyicide {{ui:Bid area}} de bulunur: miktar, orada bir işaret gibi, o alanın, alternatiflerinin ve toplamlarının içinde sayılır. Başka bir uygulamadan gelen miktarlar nereden geldiğini belirtir; bkz. [Toprak işleri ve nokta kotları](topic:earthwork#cut-and-fill-from-civilcraft).

## Kalem oluşturun

1. Sağdaki {{ui:Items}} panelinde {{ui:New item}} seçin.
2. Bir ad yazın, örneğin `İç duvar tipi A` veya `Halı karo`.
3. Türü seçin: {{ui:Linear (length)}}, {{ui:Area}} veya {{ui:Count}}.
4. {{ui:Add}} seçin (ya da {{key:Enter}} tuşuna basın).
   Kalem, kendi rengiyle listede görünür, çizdiğiniz kalem olur ve düzenleyicisi listenin altında açılır. Durum çubuğu bir sonraki hangi aracı seçeceğinizi söyler.

Kalem eklemeden formu kapatmak için formda {{key:Esc}} tuşuna basın.

:::tip
Önce bir ölçüm aracı seçerseniz TakeoffCraft, doğru türdeki son kalemi kullanır ya da o türü önceden seçili olarak {{ui:New item}} formunu açar.
:::

## Çizdiğiniz kalemi seçin

Listede bir kaleme tıklayın. Yeni işaretlerin gideceği kalem olur; işaretleri her sayfada vurgulanır, diğerleri silikleşir. Açık sayfada hiç işareti yoksa TakeoffCraft işaretin bulunduğu bir sayfaya geçer. Vurgulamayı durdurmak için kalemi yeniden tıklayın; yine de çizdiğiniz kalem olarak kalır.

{{ui:Select}} aracıyla bir işarete tıklamak da işaretin kalemini geçerli yapar.

## Kalemi ayarlayın

Kalem düzenleyicisinde (**Kalem: (ad)**) şu alanlar bulunur. Her biri alandan çıktığınızda ya da {{key:Enter}} tuşuna bastığınızda kaydedilir ve her değişiklik geri alınabilir.

| Alan | Ne işe yarar |
|---|---|
| {{ui:Name}} | Listede, tablolarda ve dışa aktarmalarda gösterilir. |
| {{ui:Type}} | Doğrusal, Alan veya Say. Kalemin işaretleri varsa kilitlenir ("İşaretleri olan bir kalem türünü korur"). |
| {{ui:Color}} | Ekranda ve işaretlenmiş PDF'de işaretlerinin rengi. |
| {{ui:Unit}} | Miktarın hangi birimle raporlanacağı: doğrusal için LF veya m; alan için SF, SY, SQ, ac, ha veya m²; say için EA. |
| {{ui:Also measure}} | Kalemin aldığı diğer işaret türleri; her biri kendi birimiyle. Aşağıya bakın. |
| {{ui:Height}} (doğrusal) | Bir duvar yüksekliği. Kalem o zaman duvar alanını da (uzunluk × yükseklik) raporlar. BimCraft modelinden gelen koşular kapı ve pencerelerini de taşır: bunlar bir kez çıkarılır ve kalem brüt alanı, açıklıkları ve net alanı söyler. Bir ölçüm yöntemi seçmiş bir BimCraft projesinden gelen metraj, burada da o yöntemle ölçülür (not bunu kaynağıyla birlikte adlandırır ve bir metraj uzmanı tarafından kontrol edilmediğini belirtir); yöntem TakeoffCraft'ta değiştirilemez. Bir duvar tipinden gelen tuğla veya blok ile harç, iki bileşen olarak gelir: sipariş edilecek birimler ve harç hacmi. |
| {{ui:Depth}} (alan) | Bir derinlik veya kalınlık; montaj formüllerinde kullanılır (örneğin beton hacmi). |
| {{ui:Waste %}} | Fiyatlamadan önce miktara eklenir: 10 demek, miktar × 1.10 demektir. |
| {{ui:Malzeme $/LF}} | Birim başına malzeme maliyeti. Etiket birime göre değişir: $/SF, $/EA vb. |
| {{ui:İşçilik $/LF}} | Birim başına işçilik maliyeti. |
| {{ui:CSI number}} | CSI MasterFormat numarası, örneğin `09 21 16` (ya da yalnızca bölüm, `09`). Çalışma kitabındaki "By division" sayfası maliyetleri buna göre gruplar. [İş paketlerinden](topic:trade-packs) gelen kalemlerin zaten bir numarası vardır. |

Yükseklik ve derinlik, İngiliz birimleri için fit ve inç (`9'-0"`, `8' 6"`) ya da ondalık fit (`9`) kabul eder; metrik birimler için metre (`2.7`, `2700 mm`) kabul eder. Oranlar `12.50` veya `$1,250` gibi, en fazla dört ondalık basamakla girilir. Bkz. [Uzunluk, oran ve yüzde girişi](topic:entry-formats).

Alanların altındaki **Ölçülen** bölümü, kalemin formüllerinin kullanabileceği toplamları harfleriyle gösterir: Doğrusal için Uzunluk (L), Koşu (N), Duvar alanı (A); Alan için Alan (A), Çevre (P), Alan sayısı (N); Say için Say (N).

## Bir kalem, birden çok işaret türü

Bazı şeyler birden çok biçimde ölçülür: bir odanın bir zemini (bir alan), duvarları boyunca bir süpürgelik (bir uzunluk) ve kapıları (bir say) vardır. Üç kalem yerine bir tane oluşturun:

1. Kalemi ana türüyle oluşturun, örneğin bir alan kalemi `Oda 101`.
2. Düzenleyicisindeki {{ui:Also measure}} altında {{ui:Linear}}, {{ui:Count}} veya ikisini de işaretleyin. Her birinin yanında bir birim belirir.
3. Kalemin aldığı türdeki herhangi bir araçla çizin: `Oda 101` geçerliyken {{ui:Area}} zeminini, {{ui:Linear}} süpürgeliğini ve {{ui:Count}} kapılarını çizer. TakeoffCraft başka bir kalem istemez.

Kalem listesi her miktarı gösterir (`50.00 SF + 2 EA`). Miktar tablosunda kalemin satırında ana miktarı bulunur ve diğer her tür, kendi fire, malzeme ve işçilik oranlarıyla birlikte, altında kendi satırını alır; örneğin **Oda 101 (say)**. Dışa aktarmalar, sayfa başına tablo ve işaretlenmiş PDF'nin açıklaması da aynı şekilde listeler.

Ana türün alanları yalnızca kendi işaretlerine aittir: yükseklik veya derinlik, çatı eğimi, geri çıkarmalar ve 3D şekil yalnızca onun işaretlerine uygulanır. Bir alan kalemi için çizilen bir süpürgelik, düz biçimde plan boyunca ölçülür ve 3D'de düz görünür. Montaj formülleri ana türün toplamlarını kullanır.

Bir tür, kalemin o türde işareti yokken işaretinden çıkarılabilir; önce bunları silin ya da **Seçili işaret** altında başka bir kaleme taşıyın. İşaretler, kendi türünü alan herhangi bir kaleme taşınabilir.

Daha aşağıda {{ui:Assembly}} bulunur: dikmeler veya levha gibi bileşenler, her birinin kendi formülü ve oranları vardır. Bkz. [Montajlar ve formüller](topic:assemblies).

En altta: {{ui:Move up}} ve {{ui:Move down}} kalemin listedeki ve dışa aktarmalardaki yerini değiştirir; {{ui:Delete item}} ise kalemi tüm işaretleriyle birlikte kaldırır (sorduktan sonra; geri alabilirsiniz).

Alan kalemlerinin ayrıca **Çatı eğimi** vardır (eğim üzerinde ölçülen çatı düzlemleri: [Çatılar ve eğimler](topic:roofs-and-slopes)) ve **Geri çıkarma** vardır (işaretleri diğer kalemlerin alanlarından düşer: [Alanları ölç](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Doğrusal kalemlerin **Eğim** (Düz, Beşik, Kırma veya vadi) vardır; beşik ve kırmalar için de **Çatı eğimi** bulunur.

## Tablodaki oranlar

{{ui:Waste %}}, malzeme ve işçilik oranlarını doğrudan alttaki {{ui:Quantities}} tablosuna da ({{ui:By item}}) yazabilirsiniz. Düzenleyicideki ayarın aynısıdır.

## Fiyatlandırma nasıl çalışır

Her kalem ve her montaj bileşeni için:

1. **Fireyle birlikte** = miktar × (1 + fire %).
2. **Malzeme** = fireyle birlikte × birim başına malzeme, kuruşa yuvarlanır.
3. **İşçilik** = fireyle birlikte × birim başına işçilik, kuruşa yuvarlanır.
4. **Toplam** = malzeme + işçilik.

{{ui:Job total}} her kalemi ve her bileşeni toplar. Bir kalem kendi oranlarını ve aynı anda bir montajı taşıyabilir; ikisi de sayılır. Bu yüzden bileşenler maliyeti taşıyorsa kalemin oranlarını 0 bırakın.

## Ekiplere göre işçilik

Birim başına işçilik oranı yerine, bir kalemin işçiliği bir ekipten gelebilir: saatte ne kadar iş çıkardığı, kaç kişi olduğu ve her birinin ne kazandığı. Kalem düzenleyicisinde {{ui:Labor by crew}} altındaki {{ui:Price labor from a crew}} kutusunu işaretleyin ve doldurun:

| Alan | Örnek |
|---|---|
| {{ui:Üretim}} | `20` LF saatte (kalemin birimiyle), tüm ekip için |
| {{ui:Crew size}} | `2` kişi |
| {{ui:Wage $/hour each}} | `45` |

TakeoffCraft, fireyle birlikte miktardan şunları hesaplar:

- **ekip saati** = miktar ÷ üretim (110 LF ÷ 20 = 5.5),
- **işçi saati** = ekip saati × ekip büyüklüğü (11),
- **ekip günü** = ekip saati ÷ 8 (0.69),
- **işçilik** = işçi saati × ücret ($495.00).

Düzenleyici sonucu ve ortaya çıkan oranı gösterir ($4.50/LF). Kalemin kendi işçilik oranı bundan sonra düzenleyicide ve tabloda yalnızca okunabilir olur. {{ui:Quantities}} tablosunun başlığı, işin işçi saatini ve ekip gününü ekler. Dışa aktarmalar her ekibin saatlerini not eder; çalışma kitabında işçilik hücresi ekip üzerinden bir formüldür (`ROUND(F2/20*2*45,2)`). Birim başına orana dönmek için kutunun işaretini kaldırın.

## Metrik kalemler

Birim olarak m (doğrusal) veya m² (alan) seçin. Miktarlar, yükseklikler ve formül değerleri o zaman metre cinsindendir. Sayfa ölçeği herhangi bir hazır ayar veya kalibrasyon olabilir; birimler ve ölçekler birbirinden bağımsızdır.

## Sonraki

- [Doğrusal koşuları ölç](topic:measure-linear)
- [Boşluklu alanları ölç](topic:measure-areas)
- [Elle say](topic:count-by-hand)
