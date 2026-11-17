---
title: Keşfi ve işaretli bir PDF'yi dışa aktarın
summary: Keşfi canlı formüllü bir XLSX çalışma kitabı veya CSV olarak indirin; PDF'lerinizin metrajın çizildiği kopyalarını da indirin.
keywords: teklif, ihale özeti, dışa aktar, xlsx, elektronik tablo, çalışma kitabı, csv, işaretli pdf, metrajı yazdır, rapor, paylaş, gönder, açıklama
from: 334f89c7
---

Dışa aktarımlar indirmedir. Metrajdan ve açık PDF'lerden bilgisayarınızda yapılırlar; hiçbir yere gönderilmezler.

## Keşif bir elektronik tablo olarak (XLSX)

1. Araç çubuğundaki {{ui:Dışa aktar}} menüsünü açın ve {{ui:XLSX}} seçeneğini seçin.
   Tarayıcınız `(name).xlsx` dosyasını indirir. Durum çubuğu "(name).xlsx dışa aktarıldı (canlı formüllü keşif, sayfaya göre, işaretler, ölçekler)." yazar ve keşif eksikse bir uyarı ekler.
2. Dosyayı elektronik tablo programınızda açın.

Çalışma kitabında dört çalışma sayfası ve geçerli olduklarında aşağıdaki raporlar bulunur:

| Çalışma sayfası | İçeriği |
|---|---|
| Keşif | Her kalem ve bileşen için bir satır: miktar, fire, fire dahil miktar, birim fiyatlar, malzeme, işçilik, toplam, notlar. En altta iş toplamı. |
| Sayfaya göre | Her kalemin her sayfadaki miktarı, işaret sayısıyla birlikte. |
| İşaretler | Her işaret: sayfa, kalem, tür, miktar ve ayrıntı (segment uzunlukları, brüt ve boşluk alanları, çevre). |
| Ölçekler | Ölçeği veya işareti olan her sayfa: ölçeği, nasıl ayarlandığı (ön ayar veya hangi mesafeyle kalibre edildiği) ve PDF birimi başına feet. |
| Metraj özeti | Fiyatlar olmadan, her kalemin miktarı, CSI numarası, işaretleri ve sayfaları. |
| {{ui:Malzeme listesi}} | Metraj boyunca her birleşim parçası toplanır (birden çok kalemde kullanılan aynı parça tek satırdır); fire ve malzeme maliyeti ile parçayı kullanan kalemler. |
| Teklif isteği | Bir tedarikçiye göndermek için malzeme listesi: fire dahil miktarlar, boş bir birim fiyat sütunu ve fiyatlar girildikçe dolan tutarlar ile toplam. |
| Bölüme göre | Kalemlerde {{ui:CSI numarası}} varsa, CSI MasterFormat bölümüne göre malzeme, işçilik ve toplam. |

Bir [ihale özetiyle](topic:bid-summary) Keşif çalışma sayfası, ihale özetinin düzeltmelerini (işçilik yükü, satış vergisi, genel gider, kâr, teminat ve ihale) de canlı formül olarak sonunda içerir.

Keşif çalışma sayfası **canlı formüller** tutar: fire dahil miktar, yuvarlanmış malzeme ve işçilik tutarları, her satırın toplamı ve iş toplamı. Elektronik tablo programları bunları yeniden hesaplar; bu yüzden elektronik tabloda bir birim fiyatı veya fireyi değiştirirseniz toplamlar izler. TakeoffCraft'ın hesapladığı sayılar da hücrelere kaydedilir ve kuruşa kadar eşleşir.

Notlar sütunu her bileşenin formülünü, formül hatalarını, ölçeksiz sayfalardaki işaretleri, duvar alanını ve çevreyi listeler. Bir şey dışarıda bırakıldığında iş toplamı satırı "Eksik: yukarıdaki notlara bakın" yazar.

Çalışma kitabı LibreOffice Calc içinde kontrol edildi; yeniden hesaplanan toplamlar aynı çıktı. Henüz Excel'de açılmadı. Sütun sütun ayrıntılar [Dışa aktarım sütunları](topic:export-columns) bölümündedir.

## Keşif CSV olarak

{{ui:Dışa aktar}} menüsünü açın ve {{ui:CSV}} seçeneğini seçin. `(name).csv` alırsınız: Keşif çalışma sayfasıyla aynı satır ve sütunlar, düz değer olarak (formül yok) ve iş toplamı. Başka bir keşif veya muhasebe sistemine yapıştırmak için kullanın.

CSV yalnızca keşfi içerir; sayfaya göre miktarlar ve işaret listesi için XLSX kullanın. Aynı menüdeki {{ui:Malzeme listesi}} yalnızca malzeme listesini sipariş için CSV olarak kaydeder.

## Google Sheets'te keşif

Metraj tablosunun üstündeki **Google Sheets için kopyala**, keşfi CSV ile aynı satırlarda sekmeyle ayrılmış metin olarak panoya koyar. Bir Google E-Tablosu'nda A1 hücresine tıklayın ve yapıştırın. TakeoffCraft Google'da oturum açmaz ve oraya hiçbir şey göndermez.

## Eksik birim fiyatlar ve onay

Miktarı olup birim fiyatı olmayan bir satır Notlar'da **Birim fiyat yok** yazar; dışa aktarım bunları toplamların altında sayar. Keşif onaylandığında dışa aktarım kimin, ne zaman ve hangi toplam için onayladığını adlandırır. Bkz. [Eksik birim fiyatlar ve keşfin onaylanması](topic:sign-off-the-estimate).

## İşaretli bir PDF

1. İşaretlerinin çizilmesini istediğiniz PDF'leri açın.
2. {{ui:Dışa aktar}} menüsünü açın ve {{ui:İşaretli PDF}} seçeneğini seçin.
   "İşaretli PDF yazılıyor…" görünür; ardından tarayıcınız işaretli her PDF için bir dosya indirir: `(PDF adı) (takeoff).pdf` adıyla.

Kopyada:

- koşular, kalemlerinin renginde çizgiler olarak çizilir,
- alanlar hafifçe dolgulanır ve düz bir dış hatla gösterilir; boşluklar açık bırakılır,
- sayılar noktalar olur,
- işaretli her sayfanın sol alt köşesinde küçük bir açıklama bulunur: her kalemin rengi, adı ve o sayfadaki miktarı.

Özgün PDF'leriniz değiştirilmez.

Notlar:

- Yalnızca açık olan PDF'ler yazılır. Açık olmayan PDF'lerdeki işaretler toplamlarda kalır ama çizilmez; önce bu PDF'leri açın.
- Açıklamadaki adlar standart bir PDF yazı tipi kullanır. Gösteremediği harfler "?" olarak yazdırılır.
- Parola korumalı veya şifreli bir PDF, işaretlerle kopyalanamaz: "Bu PDF parola korumalı veya şifreli olduğundan işaretli bir kopyası yazılamaz. Metraj kendisi sağlamdır; bunun yerine elektronik tabloyu dışa aktarın."
- Bir sekmedeki ilk {{ui:İşaretli PDF}} PDF yazıcısını yükler. Çevrimdışıyken yalnızca uygulama çubuğunda {{ui:Çevrimdışı hazır}} görünüyorsa yazıcı kullanılabilir; bkz. [Çevrimdışı çalışma](common:offline).

:::chromium
Birden çok işaretli PDF ile Chrome ve Edge, bu sitenin birden çok dosya indirmesine izin verip vermediğini bir kez sorabilir. İzin ver'i seçin; aksi halde yalnızca ilk dosyayı alırsınız.
:::

## Dışa aktarılacak bir şey yok mu?

- {{ui:XLSX}} ve {{ui:CSV}} en az bir kalem gerektirir: "Henüz dışa aktarılacak bir şey yok: bir kalem oluşturun ve ölçün."
- {{ui:İşaretli PDF}}, açık bir PDF'de işaret gerektirir: "Açık PDF'lerde henüz işaret yok."

## Metrajı da kaydedin

Dışa aktarım bir rapordur. Metrajda daha sonra çalışmaya devam etmek için {{ui:Metrajı kaydet}} seçeneğini de seçin: bkz. [Metrajı kaydetme ve yeniden açma](topic:save-and-reopen).

Genel gider, kâr, vergi ve teminat eklemek ve bir teklif göndermek için bkz. [İhale özeti ve teklif](topic:bid-summary).
