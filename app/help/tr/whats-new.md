---
title: Yenilikler: 0.9
summary: Uzunlukları metre, santimetre veya milimetre olarak okuyun, metrik alanları duvar alanıyla birlikte m2 cinsinden görün, 1:75 ve 1:150 ölçek hazır ayarları, ağırlık ve sıcaklık birimleri, on yöntemli Yay, canlı imleçler, Takip et ve bir kişi listesi.
keywords: yenilikler, neler yeni, sürüm notları, değişiklik günlüğü, 0.9, uzunlukları şöyle göster, metre, santimetre, milimetre, metrik, genel'i izle, birimler, görüntüleme birimleri, m2, metrekare, duvar alanı, ölçek hazır ayarları, 1:75, 1:150, ağırlık, kilogram, kg, ton, lb, sıcaklık, santigrat, fahrenayt, yay, yay yöntemleri, 3 noktalı yay, yarıçap, canlı, imleçler, takip et, kişi listesi, sınıf, araç ipuçları, düzen, sürüm notları, değişiklikler, 0.8, 0.8.1, sürüm, yeni özellikler, hepsini say, lejant, simge lejantı, takım, fiyat belleği, geçmiş işler, son iş, tipik fiyat, tedarikçi, stok, tedarik süresi, bekleyen sipariş, sipariş listesi, eksik, sorunlar paneli, asistan, diller, giriş aygıtları, araç çubuğu satırları, dwg
from: 6182b998
---

Bu, TakeoffCraft 0.9 ile 0.8.1 karşılaştırılarak neyin değiştiğidir. Bu uygulama için küçük bir sürüm: uzunluklar artık metre, santimetre veya milimetre olarak okunabilir; alanlar ve ölçekler metrik işlerde düzgün çalışır ve Yay on farklı şekilde çizilebilir. Canlı oturumlar ayrıca kimin nerede olduğunu gösterir.

## Yeni

### Uzunlukları metre, santimetre veya milimetre cinsinden okuma

- **Uzunlukları şöyle göster.** {{ui:Ayarlar}} › {{ui:TakeoffCraft}} içinde {{ui:Uzunlukları şöyle göster}} seçeneği vardır: {{ui:Genel'i izle}}, {{ui:Fit-inç}}, m, cm ve mm. {{ui:Genel'i izle}}, {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Birimler}} altında yıldızladığınız metrik uzunluk birimini kullanır; hiçbiri yıldızlı değilse fit-inç kullanılır. Uzunlukların çizimde, durum çubuğunda ve panellerde, yükseklik, derinlik, kalınlık ve seviyeler dahil, okunuşunu değiştirir. Bir yükseklik alanına yazılan çıplak bir sayı, gösterilen birimde okunur.
- **Yalnızca gösterim.** Miktarlar, maliyetler ve dışa aktarımlar tam uzunluklardan hesaplanır. 1/16, 1/8 ve 1/4 inç seçimi yalnızca fit-inç için görünür. Bkz. [Uzunlukları metre cinsinden gösterin](topic:show-lengths-in-meters).
- **Ağırlık birimleri.** {{ui:Girilen miktar (çizim yok)}} kalemi artık lb, TON, kg veya t cinsinden olabilir ve birim başına fiyatlandırılabilir.
- **Sıcaklık.** Her kalemin kalem düzenleyicisinde isteğe bağlı bir {{ui:Sıcaklık}} alanı vardır; °C veya °F cinsinden girilir. {{ui:Ayarlar}} › {{ui:TakeoffCraft}} içindeki {{ui:Sıcaklıkları şöyle göster}} {{ui:Genel'i izle}}, °C veya °F seçenekleri sunar.

### Metrik işler için alanlar ve ölçekler

- **Çizimde m2 cinsinden alanlar.** Metrik bir kalemle ölçülen bir alan, tabloya ek olarak çizimdeki etikette ve işaret panelinde de m2 yazar; SF yerine. Kural şudur: kalem metrik fiyatlandırılmışsa ya da uzunluklar m, cm veya mm gösteriliyorsa m2, aksi halde SF.
- **Duvar alanı.** Yüksekliği olan doğrusal bir kalem, kalemler listesinde ve kalemlere göre miktar tablosunun altındaki bir not satırında duvar alanını (uzunluk çarpı yükseklik) da gösterir.
- **1:75 ve 1:150 ölçek hazır ayarları.** {{ui:Ölçek}} grubundaki {{ui:Hazır ayar}} listesindedir; grup artık 32 ölçeğe sahiptir. Bkz. [Ölçek hazır ayarları](topic:scale-presets).

### On yöntemli yay

- {{ui:Yay}} açıkken (araç çubuğu düğmesi ya da {{key:R}}), sayfa çubuğunda bir {{ui:Yay yöntemi}} kutusu belirir: 3 noktalı, Başlangıç, Merkez, Bitiş, Başlangıç, Merkez, Açı, Başlangıç, Merkez, Uzunluk, Başlangıç, Bitiş, Açı, Başlangıç, Bitiş, Yön, Başlangıç, Bitiş, Yarıçap, Merkez, Başlangıç, Bitiş, Merkez, Başlangıç, Açı ve Merkez, Başlangıç, Uzunluk. Açı, uzunluk, yarıçap ve yön tıklanarak ya da yazılarak girilebilir. Doğrusal çizgilerde, alanlarda ve kesimlerde çalışır. 0.9'dan önce kaydedilen dosyalar aynı şekilde açılır. Bkz. [Yayı on yöntemle çizin](topic:draw-arcs-ten-methods).

### Birlikte çalışma

- **Birbirinizin imleçlerini görün.** Canlı oturumda her kişinin işaretçisi adı ve rengiyle sayfada görünür; seçtiği işaretlerin etrafında kesikli bir kutu bulunur. Başka bir sayfadaki kişiler o sayfanın adıyla listelenir. Bkz. [Diğerleriyle canlı çalışın](topic:work-live).
- **Bir kişiyi takip edin ve kişi listesi.** Canlı oturumdaki {{ui:Kişiler}} düğmesi her kişiyi, kullandığı aracı, bulunduğu sayfayı ve en son ne zaman düzenlediğini listeler. {{ui:Takip et}} görünümünüzü onunkiyle birlikte taşır; ev sahibi {{ui:Herkesten beni takip etmesini iste}} seçeneğini kullanabilir. Bkz. [Canlı oturumda bir takım arkadaşını takip edin](topic:follow-a-teammate).

## Her uygulamada

- **Araç ipuçları ve başlangıç ipucu.** Üzerine gelince çıkan metin bir Bootstrap araç ipucudur ve başlangıç ipucu kapatılabilir.
- **Kaydırılabilir sekme şeritleri.** Bir panelin sığmayan sekme şeridi kesilmek yerine kaydırılır.
- **Sekme başlıkları.** Tarayıcı sekmesi `<document> - TakeoffCraft | CadCraft` yazar.
- **Düzen.** {{ui:Ayarlar}} içindeki düzen listesi, seçilen düzeni gösteren bir açılır listedir.
- **Dil.** Seçtiğiniz dil artık sayfanın kendi yazdığı sözcüklere de uygulanır; örneğin Yeni, Aç ve Kaydet gibi. İngilizce dışındaki diller, ana dili konuşan biri inceleyene kadar makine taslağıdır.

## Dürüst sınırlar

- Uzunluk gösterimi, ağırlık ve sıcaklık birimleri ile yeni hazır ayarlar testlerle ve sayfada denetlendi. Her birimde her panel elle denetlenmedi.
- Kişi listesi, gerçek bir öğretmen ve öğrenci sınıfıyla elle denetlenmedi.
- İngilizce dışındaki diller makine taslağıdır.
- Windows kurulum dosyaları kod imzalı değildir (Ek bilgi, sonra Yine de çalıştır). macOS disk görüntüsü notarize edilmemiştir (sağ tıklayın, sonra {{ui:Açık}}).

## Önceki sürümler: 0.8 ve 0.8.1

Bu, TakeoffCraft 0.8 (2026-11-01 tarihinde yayımlandı) ve 0.8.1 (2026-11-02) sürümlerinde 0.7'ye göre neyin değiştiğidir. Bir simge lejantı artık takımın tamamında tek seferde sayılabilir, yeni bir metraj geçmiş işlerinizin fiyatlarından başlayabilir ve metraj bir tedarikçinin stoku ile denetlenebilir. 0.8.1 bir düzeltme sürümüdür.

### Yeni

**Takımdaki her şeyi sayma**

- **Lejantı bir kez kutu içine alın.** Araç çubuğundaki {{ui:Hepsini say}} bir simge lejantını okur: simgelerin ve yanlarına yazılmış adların etrafına bir kutu çizin. Her simge resmi ve adıyla listelenir; ad, kalemin adı olur. İstemediklerinizin işaretini kaldırın, sonra {{ui:N sayfada say}} seçin. Bir çubuk aranan sayfayı gösterir, {{ui:İptal}} çalışmayı durdurur ve sayfa kullanılmaya devam eder.
- **Her sayfa tek çalıştırmada.** Her simge, açık her sayfada sayılır. Başka bir ölçekte çizilmiş bir sayfa o ölçekte aranır ve simgeler dik açıların her birinde döndürülmüş halde bulunur. Lejantın kendi simgeleri, bulunduğu sayfada sayılmaz.
- **Eklemeden önce gözden geçirin.** Her toplamın sayfa başına bir bağlantısı vardır ("E-103: 4") ve bu sayfaya gider. Bir bulguyu dışarıda bırakmak için kutusuna tıklayın, geri getirmek için yeniden tıklayın. Eşleşme düzeyi (%50 ile %100) yalnızca bulunanları süzer; yeniden arama yapılmaz.
- **Tek geri alma adımı.** {{ui:N işaret ekle}} her simge için bir sayım kalemi oluşturur ve her bulguya bir işaret koyar. Adı zaten sizin bir sayım kaleminiz olan ad yeniden kullanılır. {{key:Ctrl+Z}} tüm kalemleri ve işaretleri geri alır. Kabul ettikleriniz {{ui:Öğrenilenler}} listesine de eklenir.
- **Her açıdaki simgeler.** Saymadan önce {{ui:Her açıdaki simgeler}} seçeneğini işaretleyin; böylece dik açı olmayan bir açıyla döndürülmüş simgeler de bulunur. Arama, her simgeyi 15 derecede bir döndürür; yuvarlak olmayan bir simge altı kata kadar daha uzun sürebilir.
- **Ne olduğu.** Kendi sayfalarınızda düz simge eşleştirmesidir; eğitilmiş bir model yoktur ve hiçbir şey bilgisayarınızdan çıkmaz. Uydurma bir 200 sayfalık takımda, hızlı bir masaüstünde Chrome ile baştan sona 9.4 saniye sürdü; gerçek çizim takımları daha yavaş olacaktır. Bkz. [Takımdaki her şeyi sayın](topic:count-everything).

**Kendi işlerinizden fiyat belleği**

- **TakeoffCraft birim fiyatlarınızı hatırlar.** Bir metraj kaydettiğinizde, kullanılan her fiyatlı kalem adı ve türüyle hatırlanır: malzeme birim fiyatı, işçilik birim fiyatı, fire ve birim. Her ad için son 12 iş tutulur. Bu bilgi fiyat kütüphanesinin yanında bu bilgisayarda saklanır, hiçbir zaman metraj dosyasının içinde değildir ve hiçbir yere gönderilmez.
- **Yeni bir metrajı bundan başlatın.** Araç çubuğundaki {{ui:Fiyatlar}} her kalem için son işin birim fiyatlarını, tipik birim fiyatları ve aralığı gösterir. {{ui:Sonuncuyu kullan}} ya da {{ui:Tipiği kullan}} tek bir kalemi fiyatlandırır; {{ui:Bellekten N fiyatsız kalemi fiyatlandır}} fiyatı olmayan her kalemi doldurur. Her kullanım tek bir geri alma adımıdır.
- **Eski işler.** {{ui:Geçmiş bir metrajdan öğren…}} kaydedilmiş bir metrajın (.json) fiyatlı kalemlerini hatırlar.
- **Görün, değiştirin, unutun.** {{ui:Hatırlanan her şey}} her adı listeler; çöp kutusu düğmesi birini unutturur, {{ui:Tüm fiyatları temizle}} hepsini unutturur. Durdurmak için {{ui:Metrajı kaydettiğimde fiyatlarımı hatırla}} seçeneğini kapatın. Adet başına bir fiyat hiçbir zaman metre başına bir kaleme uygulanmaz. Bkz. [Geçmiş işlerinizden fiyat belleği](topic:price-memory).

**Tedarikçi stoku ve tedarik süreleri**

- **Bir tedarikçi listesiyle karşılaştırın.** Araç çubuğundaki {{ui:Tedarik}} bir tedarikçinin stok listesini ({{ui:Tedarikçi dosyası ekle…}}), bir CSV ya da elektronik tabloyu alır ve metrajın ihtiyacını, fire dahil, bu listeye göre denetler. En fazla beş dosya tutulur. Hiçbir şey gönderilmez ve hiçbir tedarikçiye sorulmaz: dosyayı siz getirirsiniz.
- **Ne söylediği.** Eksikler önce gelir: "120 EA eksik", "Tedarik süresi 21 gün", "Bekleyen siparişte", "Birim farklı", "Stok rakamı yok" ya da "Stokta". {{ui:İstenen en uzun bekleme (gün)}} 14'ten başlar.
- **Sipariş listesi.** {{ui:Sipariş listesi (CSV)}} eksik kalemleri, eksik miktarı, tedarikçiyi ve tedarik süresini içeren bir liste indirir.
- **Fiyatlar kütüphaneye.** Dosyada fiyat varsa, {{ui:Fiyatlar kütüphaneye}} aynı ad ve birimdeki her kütüphane girdisinin malzeme fiyatını ayarlar. Metrajda görmek için kütüphaneden yeniden fiyatlandırın.
- **Sorunlar panelinde.** Eksik bir uyarı, uzun bir bekleme ise bir nottur; "Tedarikçi stoku" başlığı altında görünürler. Bir eksiği nedeniyle kabul edebilirsiniz ve neden metrajda kaydedilir. Bkz. [Tedarikçi stokunu ve tedarik sürelerini denetleyin](topic:supplier-stock).

**Yapay zekâ asistanları**

- **Üçü için araçlar.** {{ui:Ayarlar}} içinde asistanlara izin verildiğinde bir asistan lejantı okuyabilir (`legend_open`), sayımı çalıştırabilir (`legend_count_start`, ardından `legend_count_status` ve `legend_count_result`) ve ekleyebilir (`legend_count_add`, önce önizleme yapabilir). Hatırlanan fiyatları okuyabilir (`prices_list`) ve kalemleri bunlardan fiyatlandırabilir (`prices_apply`, önce önizleme yapabilir); tedarikçi denetimini de okuyabilir (`supply_check`). Tedarikçi dosyası eklemek size kalır. Bkz. [TakeoffCraft'ı yapay zekâ asistanlarıyla kullanın](topic:use-with-ai-assistants).

**Her uygulamada**

- **Diller.** Toplam elli dört dil; on tanesi yeni (Litvanca, Letonca, Boşnakça, Marathi, Telugu, Arnavutça, Afrikanca, Filipince, Svahili ve Özbekçe). İngilizce dışındaki diller, ana dili konuşan biri inceleyene kadar makine taslağıdır.
- **Giriş aygıtları.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Giriş aygıtları}}, bir dokunmatik yüzeyin, farenin yan düğmelerinin, bir kalemin, 3B farenin, bir oyun denetleyicisinin ya da bir MIDI denetleyicisinin ne yapacağını belirler; tüm uygulamalar için ya da tek bir uygulama için. Bkz. [Dokunmatik yüzey, 3B fare veya denetleyici kullanın](common:input-devices).
- **Araç çubuğu satırları.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Araç çubuğu satırları}} {{ui:Sar}} (başlangıç), {{ui:2 satır}} ve {{ui:1 satır}} seçeneklerini sunar; sığmayan gruplar yana kayar. Bkz. [Panelleri düzenleyin](common:arrange-panels).
- **Sorunlar paneli.** Uyarılar ve notların ortak paneli artık yukarıdaki tedarikçi stoku denetimini diğer denetimlerin yanında gösterir.
- **Eklentiler.** Eklentiler hesap listenizi izler. Bkz. [Eklentiler ve hesap listeniz](common:addons-basics).
- **Yapay zekânızı bağlayın.** CadCraft Studio merkezdir: asistanınızı sekiz uygulamanın hepsi için bir kez bağlayın. Studio'nun kendi yapay zekâsı yoktur.

### 0.8.1'de düzeltilenler

- **DWG sınıflar bölümü.** Bir DWG dosyasının sınıflar bölümü yanlış türde okunuyordu. Bu, TakeoffCraft'ta ve dört diğer uygulamada düzeltildi.
- **Studio çalışırken dil değiştirebilir.** Önceden Studio ve paketli sürümleri yalnızca İngilizceydi. Bu, masaüstü derlemesinde her platformda test edilmedi; dil değişmezse bize bildirin.

### Bu sürümde henüz yok

- **Kod imzalı değil.** Windows uyarabilir; Mac'te ilk açılışta sağ tıklayıp {{ui:Açık}} seçin. Mağaza derlemeleri (Microsoft Store, Google Play, App Store) beklemededir; iPad ve iPhone derlemesi 0.8.1 için yeniden yapılmadı.
- **Studio güncellemeleri.** Windows kurulum dosyası ve Linux paketleri günde bir kez denetler ve önce sorar. Taşınabilir zip yalnızca bildirir; macOS ve APK kendiliğinden güncellenmez. 0.8 macOS .dmg sürümü yayını izler.
- **Yapay zekânızı bağlayın.** Studio içinde tek tıkla bağlanma, tarayıcıdaki yapay zekâ için barındırılan bağlayıcı, Studio içinde kendi API anahtarınız ve yayımlanmış bir MCP paketi bu sürümde vaat edilmiyor.
- **Hepsini say.** Lejanttakiyle aynı çizilmiş simgeler gerektirir; bir duvarın ya da uzun bir çizginin içinden geçen bir simge kaçabilir. Aynalanmış simgeler bulunamaz; ölçeksiz ve başka bir boyutta çizilmiş bir sayfa, lejantın boyutunda aranır. Kalanına güvenmeden önce ilk sayfadaki bulguları kontrol edin.
- **Tedarikçi stoku.** Stok rakamları yalnızca eklediğiniz dosya kadar günceldir. Denetim hiçbir zaman bir tedarikçiye sormaz.
- **Diller.** Tamilce uygulama çubuğu taşıyor.

Diğer her şey için bkz. [Henüz yapılmadı](topic:not-built-yet). Bundan önceki sürüm için bkz. [0.7 için yenilikler](topic:whats-new-0-7).
