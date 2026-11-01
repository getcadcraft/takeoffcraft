---
title: TakeoffCraft'ın açtığı ve kaydettiği dosyalar
summary: Giren PDF'ler, çıkan metraj proje dosyası, e-tablolar ve işaretli PDF'ler - her birinin içerdikleri, gittiği yer ve çevrimiçi, çevrimdışı ve tarayıcılar arasında nelerin değiştiği.
keywords: dosyalar, biçimler, pdf, takeoff.json, proje dosyası, xlsx, csv, işaretli pdf, indir, kaydet, aç, çevrimdışı
from: 1bf9be65
---

## Açtıkları

| Dosya | Nasıl | Notlar |
|---|---|---|
| PDF (`.pdf`) | {{ui:Planları aç}}, {{key:Mod+O}} ya da sayfaya bırakma | Aynı anda birkaç tane. Her sayfa bir sayfa (sheet) olur. |
| Metraj projesi (`.takeoff.json`) | {{ui:Metraj aç}} ya da sayfaya bırakma | Kalemleriniz, ölçekleriniz ve işaretleriniz. PDF'leriyle birlikte bırakabilirsiniz. |

Sayfaya bırakılan diğer dosyalar atlanır ve durum çubuğu onları adıyla belirtir.

- **Parola korumalı PDF'ler** açılmaz: "(ad) parola korumalı. Korumasız bir kopya açın."
- **Aynı PDF iki kez** bir kez açılır: "(ad) zaten açık." TakeoffCraft dosyaları adlarıyla değil, içerikleriyle tanır.
- **Taranmış PDF'ler** diğerleri gibi açılır ve ölçülür; TakeoffCraft PDF'teki metne ihtiyaç duymaz.
- **Büyük plan takımları**: her PDF açılırken tamamen okunur (parmak izi çıkarmak için), bu yüzden çok büyük bir dosya biraz sürer. Küçük resimler siz kaydırdıkça tek tek çizilir.

## Kaydettikleri

Her kaydetme bir indirmedir. PDF'lerinize hiçbir şey geri yazılmaz.

| Seçiminiz | Elde ettiğiniz | İçindekiler |
|---|---|---|
| {{ui:Metrajı kaydet}} | `(ad).takeoff.json` | Kalemler, birim maliyetler (assembly), fiyatlar, sayfa ölçekleri ve her işaret; her PDF'e içeriğiyle bağlanmış. PDF sayfaları yok. |
| {{ui:XLSX}} | `(ad).xlsx` | Dört çalışma sayfası: Keşif (canlı formüllerle), Sayfaya göre, İşaretler, Ölçekler. |
| {{ui:CSV}} | `(ad).csv` | Keşif düz değerler olarak, her kalem ve bileşen için bir satır. |
| {{ui:İşaretli PDF}} | `(PDF adı) (takeoff).pdf` | İşaretleri olan her açık PDF'in, sayfalarına metrajın çizildiği ve bir açıklama eklendiği bir kopyası. PDF başına bir dosya. |

Ad, bu metrajda açtığınız ilk PDF'ten alınır. Henüz bir yeniden adlandırma kutusu yok: başka bir ad istiyorsanız indirilen dosyayı yeniden adlandırın.

Bkz. [Keşfi ve işaretli bir PDF'i dışa aktarma](topic:export-estimate) ve [Dışa aktarma sütunları](topic:export-columns).

## İndirmelerin gittiği yer

Tarayıcınız bunları her indirmeyi kaydettiği yere, genellikle İndirilenler klasörüne kaydeder. {{pick:mac=Finder|windows=Dosya Gezgini|linux=dosya yöneticiniz}} içinde bulun. Tarayıcınız her dosyanın nereye kaydedileceğini soracak şekilde ayarlıysa sorar.

:::chromium
Birkaç işaretli PDF olduğunda {{ui:İşaretli PDF}} aynı anda birkaç dosya indirir. Chrome ve Edge bu sitenin birden çok dosya indirip indiremeyeceğini bir kez sorabilir. İzin ver seçeneğini seçin.
:::

:::safari
Safari, Safari Ayarları'nda Genel altında indirme konumunu değiştirmediyseniz İndirilenler'e kaydeder.
:::

## Proje dosyası ve PDF'ler neden ayrı

`.takeoff.json` dosyası yalnızca metrajınızı tutar. PDF'lerini içerikleriyle (her dosyanın bir parmak izi) yeniden bulur, bu yüzden:

- Bir PDF'i yeniden adlandırmak ya da taşımak önemli değildir.
- Başka bir program tarafından değiştirilen ya da yeniden kaydedilen bir PDF, aynı adı taşısa bile farklı bir dosya sayılır.
- Açık olmayan PDF'lerdeki işaretler yine de toplamlara girer.

Bkz. [Bir metrajı kaydetme ve yeniden açma](topic:save-and-reopen).

## Çevrimiçi ve çevrimdışı

PDF'leriniz ve metrajlarınız bilgisayarınızdan asla çıkmaz, çevrimiçi de çevrimdışı da. Bağlantı yalnızca TakeoffCraft'ın kendisini yüklemek için önemlidir.

Bağlantı olmadan çalışmak için uygulamayı önce, çevrimiçiyken kaydedin:

1. Üstteki uygulama çubuğunda {{ui:Çevrimdışı için kaydet}} seçeneğini seçin.
   Düğme kaydederken "40 dosyadan 12 kaydediliyor" diye sayar.
2. {{ui:Çevrimdışı hazır}} yazmasını bekleyin.

TakeoffCraft'ı kaydetmek uygulamayı, bu yardımı, PDF okuyucusunu, {{ui:İşaretli PDF}} tarafından kullanılan PDF yazıcısını ve otomatik sayma işçisini tarayıcınızda tutar; yaklaşık 6 MB. {{ui:Çevrimdışı hazır}} yazdığında her şey çevrimdışı çalışır: PDF açma, ölçme, {{ui:Otomatik say}}, {{ui:Metrajı kaydet}}, {{ui:XLSX}}, {{ui:CSV}} ve {{ui:İşaretli PDF}}.

| Düğme şunu söylüyor | Anlamı |
|---|---|
| {{ui:Çevrimdışı için kaydet}} | Bu tarayıcıda henüz kaydedilmedi. Kaydetmek için seçin. |
| (m) dosyadan (n) kaydediliyor | Şimdi kaydediyor. |
| {{ui:Çevrimdışı hazır}} | Kaydedildi. {{ui:Yeniden kaydet (en yeni sürümü al)}} veya {{ui:Çevrimdışı kopyayı kaldır}} için seçin. |
| {{ui:Kaydedilemedi}} | Bazı dosyalar inmedi. Bağlantınızı denetleyin ve yeniden seçin. |
| {{ui:Çevrimdışı kullanım yok}} | Bu tarayıcı penceresi çevrimdışı kopya tutamaz (gizli pencereler ve bazı yönetilen bilgisayarlar bunu engeller). |

Kaydedilmiş bir kopyanın her tarayıcıda ne kadar süre kaldığı dahil daha fazlası: [Çevrimdışı çalışma](common:offline).

:::offline
Çevrimdışısınız. Uygulama çubuğu {{ui:Çevrimdışı hazır}} gösteriyorsa her şey çalışır. Göstermiyorsa TakeoffCraft'ın bu sekmede henüz yüklemediği parçalar ({{ui:İşaretli PDF}} için PDF yazıcısı, otomatik sayma işçisi) şimdi yüklenemez ve {{ui:İşaretli PDF}} "İşaretli PDF yazılamadı" iletisiyle durur. Metrajınız her iki durumda da güvendedir: {{ui:Metrajı kaydet}}, {{ui:XLSX}} ve {{ui:CSV}} bağlantı gerektirmez. Yeniden çevrimiçi olana kadar sekmeyi yenilemeyin.
:::

:::online
Çevrimiçisiniz. Bir saha ziyaretinden veya uçuştan önce {{ui:Çevrimdışı için kaydet}} seçeneğini seçin ve {{ui:Çevrimdışı hazır}} yazmasını bekleyin.
:::

## E-tablolar

XLSX canlı formülleri korur; böylece bir e-tablo programı dosyayı açtığında keşfi yeniden hesaplar ve orada bir fiyatı ya da firesini değiştirdiğinizde doğru tutar. Çalışma kitabı LibreOffice Calc'ta denetlendi; her toplamı kuruşu kuruşuna aynı şekilde yeniden hesapladı. Henüz Excel'de açılmadı.

CSV, bayt sırası işaretiyle düz değerlerdir; böylece e-tablo programları m² gibi karakterleri doğru okur.

## Masaüstü ve bulut

:::desktop
0.5'ten itibaren masaüstü uygulaması CadCraft Studio'dur: TakeoffCraft ve diğer yedi uygulama tek kurulumda. Ayrı bir TakeoffCraft yükleyicisi yoktur.
:::

Bulutta kaydetme henüz yok. `.takeoff.json` dosyalarınızı işin PDF'leriyle birlikte saklayın ve her dosya gibi yedekleyin. Bkz. [Dosyalarınızın gittiği yer](common:your-files).
