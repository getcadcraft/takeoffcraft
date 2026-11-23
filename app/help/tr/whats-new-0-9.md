---
title: 0.9 sürümündeki yenilikler (önceki)
summary: Uzunlukları metre, santimetre veya milimetre olarak okuyun, metrik alanları m2 ve duvar alanıyla, 1:75 ve 1:150 ölçek ön ayarlarını, ağırlık ve sıcaklık birimlerini, on yöntemli Yay'ı, canlı imleçleri, Takip et özelliğini ve bir kişi listesini görün.
keywords: 0.9 sürümü, önceki sürüm, ne yeni, neler yeni, sürüm notları, değişiklik günlüğü, 0.9, uzunlukları şöyle göster, metre, santimetre, milimetre, metrik, genel'i izle, birimler, görüntüleme birimleri, m2, metrekare, duvar alanı, ölçek ön ayarları, 1:75, 1:150, ağırlık, kilogram, kg, ton, lb, sıcaklık, santigrat, fahrenheit, yay, yay yöntemleri, 3 noktalı yay, yarıçap, canlı, imleçler, takip et, kişi listesi, sınıf, ipuçları, düzen, 0.8, 0.8.1, sürüm, yeni özellikler, hepsini say, açıklama, sembol açıklaması, tüm takım, fiyat hafızası, geçmiş işler, son iş, tipik fiyat, tedarikçi, stok, teslim süresi, geri sipariş, sipariş listesi, eksik, sorunlar paneli, asistan, diller, giriş aygıtları, araç çubuğu satırları, dwg
from: f4322ba2
---

Bu, TakeoffCraft 0.9 sürümünde 0.8.1'e göre neyin değiştiğidir. Bu uygulama için küçük bir sürümdür: uzunluklar artık metre, santimetre ya da milimetre olarak okunabilir, alanlar ve ölçekler metrik işlere düzgünce uyar ve Yay on farklı biçimde çizilebilir. Canlı oturumlar ayrıca kimin nerede olduğunu gösterir.

## Yeni

### Uzunlukları metre, santimetre veya milimetre olarak okuyun

- **Uzunlukları şöyle göster.** {{ui:Ayarlar}} › {{ui:TakeoffCraft}} bölümünde {{ui:Uzunlukları şöyle göster}} vardır; seçenekler {{ui:Genel'i izle}}, {{ui:Fit-inç}}, m, cm ve mm. {{ui:Genel'i izle}}, {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Birimler}} bölümünde yıldızladığınız metrik uzunluk birimini kullanır; hiçbiri yıldızlı değilse fit-inç kullanır. Bu, uzunlukların sayfada, durum çubuğunda ve panellerde nasıl okunduğunu değiştirir; yükseklikler, derinlik, kalınlık ve seviyeler dahil. Yükseklik alanına yazılan çıplak bir sayı, gösterilen birimde okunur.
- **Yalnızca görüntü.** Miktarlar, maliyetler ve dışa aktarımlar tam uzunluklardan hesaplanır. 1/16, 1/8 ve 1/4 inç seçeneği yalnızca fit-inç için görünür. Bkz. [Uzunlukları metre olarak gösterme](topic:show-lengths-in-meters).
- **Ağırlık birimleri.** Bir {{ui:Girilen miktar (çizim yok)}} kalemi artık lb, TON, kg veya t cinsinden olabilir ve birim başına fiyatlandırılabilir.
- **Sıcaklık.** Her kalemin öğe düzenleyicisinde isteğe bağlı bir {{ui:Sıcaklık}} alanı vardır; derece C veya F olarak yazılır. {{ui:Ayarlar}} › {{ui:TakeoffCraft}} bölümündeki {{ui:Sıcaklıkları şöyle göster}}, {{ui:Genel'i izle}}, °C ya da °F seçeneklerini sunar.

### Metrik işler için alanlar ve ölçekler

- **Çizimde m2 cinsinden alanlar.** Metrik bir kalemle ölçülen bir alan artık çizim etiketinde ve işaret panelinde de m2 yazar; tabloda olduğu gibi SF yerine. Kural şudur: kalem metrik fiyatlandırılmışsa veya uzunluklar m, cm ya da mm olarak gösteriliyorsa m2, aksi halde SF.
- **Duvar alanı.** Yüksekliği olan doğrusal bir kalem, Kalemler listesinde ve kalem bazlı miktarlar tablosunun altındaki bir not satırında duvar alanını (uzunluk çarpı yükseklik) da gösterir.
- **Ölçek ön ayarları 1:75 ve 1:150.** Bunlar {{ui:Ölçek}} grubundaki {{ui:Hazır ayar}} listesindedir; grup artık 32 ölçek içerir. Bkz. [Ölçek ön ayarları](topic:scale-presets).

### On yöntemli Yay

- {{ui:Yay}} açıkken (araç çubuğu düğmesi ya da {{key:R}}), sayfa çubuğunda bir {{ui:Yay yöntemi}} kutusu belirir: 3 Nokta; Başlangıç, Merkez, Bitiş; Başlangıç, Merkez, Açı; Başlangıç, Merkez, Uzunluk; Başlangıç, Bitiş, Açı; Başlangıç, Bitiş, Yön; Başlangıç, Bitiş, Yarıçap; Merkez, Başlangıç, Bitiş; Merkez, Başlangıç, Açı; ve Merkez, Başlangıç, Uzunluk.

Açı, uzunluk, yarıçap ve yön tıklanarak ya da yazılarak girilebilir. Doğrusal çizgilerde, alanlarda ve kesiklerde de çalışır. 0.9'dan önce kaydedilmiş dosyalar aynı şekilde açılır. Bkz. [On yöntemle yay çizme](topic:draw-arcs-ten-methods).

### Birlikte çalışma

- **Birbirinizin imleçlerini görün.** Bir Canlı oturumda her kişinin işaretçisi, adı ve rengiyle birlikte sayfada görünür; seçtikleri işaretlerin etrafında kesikli bir kutu bulunur. Başka bir sayfadaki kişiler o sayfanın adıyla listelenir. Bkz. [Canlı olarak başkalarıyla çalışın](topic:work-live).
- **Bir kişiyi takip edin ve kişi listesi.** Canlı bir oturumdaki {{ui:Kişiler}} düğmesi, her kişiyi çalıştırdığı araç, bulunduğu sayfa ve son düzenleme zamanıyla listeler. {{ui:Takip et}} görünümünüzü onunkiyle birlikte hareket ettirir; ev sahibi {{ui:Herkesten beni takip etmesini iste}} seçeneğini kullanabilir. Bkz. [Canlı oturumda bir ekip arkadaşını takip edin](topic:follow-a-teammate).

## Her uygulamada

- **İpuçları ve başlangıç ipucu.** Üzerine gelince çıkan metin bir Bootstrap ipucudur ve başlangıç ipucu kapatılabilir.
- **Kaydırmalı sekme şeridi.** Sığmayan bir panelin sekme şeridi kesilmek yerine kayar.
- **Sekme başlıkları.** Tarayıcı sekmesi `<document> - TakeoffCraft | CadCraft` yazar.
- **Düzen.** {{ui:Ayarlar}} içindeki düzen listesi, seçilen düzeni gösteren bir açılır listedir.
- **Dil.** Seçtiğiniz dil artık sayfanın kendi bastığı sözcüklere de uygulanır; Yeni, Aç ve Kaydet gibi. İngilizce dışındaki diller, bir ana dil konuşanı okuyana kadar makine taslağıdır.

## Dürüst sınırlar

- Uzunluk gösterimi, ağırlık ve sıcaklık birimleri ile yeni ön ayarlar testlerle ve sayfada kontrol edildi. Her birimde her panel elle kontrol edilmedi.
- Kişi listesi, gerçek bir öğretmen ve öğrenci sınıfıyla elle denenmedi.
- İngilizce dışındaki diller makine taslağıdır.
- Windows kurulum dosyaları kod imzalı değildir (Daha fazla bilgi, ardından Yine de çalıştır). macOS disk görüntüsü noterize edilmemiştir (sağ tıklayın, ardından Aç).

## Önceki: 0.8 ve 0.8.1

Bu, TakeoffCraft 0.8 (2026-11-01 tarihinde yayımlandı) ve 0.8.1 (2026-11-02) sürümlerinin 0.7'ye göre değişikliklerdir. Bir sembol açıklaması artık tüm takım genelinde tek seferde sayılabilir, yeni bir metraj geçmiş işlerinizin fiyatlarından başlayabilir ve metraj bir tedarikçinin stok durumuna karşı kontrol edilebilir. 0.8.1 bir düzeltme sürümüdür.

### Yeni

**Takımdaki her şeyi sayın**

- **Açıklamayı bir kez kutuya alın.** Araç çubuğundaki {{ui:Hepsini say}} bir sembol açıklamasını okur: sembollerin ve yanlarında yazan adların etrafına bir kutu çizin. Her sembol resmi ve adıyla listelenir; ad, kalemin adı olur. İstemediklerinizin işaretini kaldırın, sonra {{ui:N sayfada say}} seçeneğini seçin. Bir çubuk aranan sayfayı gösterir, {{ui:İptal}} çalışmayı durdurur ve sayfa kullanılabilir kalır.
- **Her sayfa tek bir çalıştırmada.** Her sembol, açık olan her sayfada sayılır. Başka bir ölçekte çizilmiş bir sayfa o ölçekte aranır ve semboller herhangi bir dik açıyla döndürülmüş olarak bulunur. Açıklamanın kendi sembolleri, bulunduğu sayfada sayılmaz.
- **Eklemeden önce gözden geçirin.** Her toplamın, o sayfaya giden bir bağlantısı vardır ("E-103: 4"). Bir bulguyu dışarıda bırakmak için kutusuna tıklayın, geri getirmek için yeniden tıklayın. Eşleşme düzeyi (%50 ile %100 arası) yalnızca bulunanları süzer; hiçbir şey yeniden aranmaz.
- **Tek bir geri alma adımı.** {{ui:N işaret ekle}} her sembol için bir sayım kalemi oluşturur ve her bulguya bir işaret koyar. Zaten sizin bir sayım kaleminiz olan bir ad yeniden kullanılır. {{key:Ctrl+Z}} tüm kalemleri ve işaretleri geri alır. Kabul ettikleriniz {{ui:Öğrenilenler}} listesine de eklenir.
- **Her açıdaki semboller.** Saymadan önce {{ui:Her açıdaki simgeler}} seçeneğini işaretleyin; dik açı olmayan bir açıyla döndürülmüş sembolleri de bulur. Arama her sembolü her 15 derecede bir döndürür ve yuvarlak olmayan bir sembol altı kata kadar daha uzun sürebilir.
- **Ne olduğu.** Kendi sayfalarınızda düz sembol eşleştirmesi; eğitilmiş bir model yok ve hiçbir şey bilgisayarınızdan çıkmaz. Uydurma 200 sayfalık bir takımda, hızlı bir masaüstünde Chrome içinde uçtan uca 9,4 saniye sürdü; gerçek plan takımları daha yavaş olacaktır. Bkz. [Takımdaki her şeyi sayın](topic:count-everything).

**Kendi işlerinizden fiyat hafızası**

- **TakeoffCraft oranlarınızı hatırlar.** Bir metrajı kaydettiğinizde, kullanılan her fiyatlı kalem adı ve tipiyle hatırlanır: malzeme oranı, işçilik oranı, fire ve birim. Her ad için son 12 iş tutulur. Bu, fiyat kütüphanesinin yanında bu bilgisayarda tutulur, hiçbir zaman bir metraj dosyasının içinde değildir ve hiçbir yere gönderilmez.
- **Yeni bir metrajı ondan başlatın.** Araç çubuğundaki {{ui:Fiyatlar}}, her kalem için son işin oranlarını, tipik oranları ve aralığı gösterir. {{ui:Sonuncuyu kullan}} ya da {{ui:Tipiği kullan}} tek bir kalemi fiyatlandırır; {{ui:Hafızadan N fiyatsız kalemi fiyatlandır}} fiyatı olmayan her kalemi doldurur. Her kullanım bir geri alma adımıdır.
- **Eski işler.** {{ui:Geçmiş bir metrajdan öğren…}} kaydedilmiş bir metrajın (.json) fiyatlı kalemlerini hatırlar.
- **Görün, değiştirin, unutun.** {{ui:Hatırlanan her şey}} her adı listeler; çöp kutusu düğmesi bir adı unutur ve {{ui:Tüm fiyatları temizle}} hepsini unutur. Durdurmak için {{ui:Metrajı kaydettiğimde fiyatlarımı hatırla}} seçeneğini kapatın. Adet başına bir fiyat, hiçbir zaman metre başına bir kaleme konmaz. Bkz. [Geçmiş işlerinizden fiyat hafızası](topic:price-memory).

**Tedarikçi stoku ve teslim süreleri**

- **Bir tedarikçinin listesine karşı kontrol edin.** Araç çubuğundaki {{ui:Tedarik}}, bir tedarikçinin stok listesini ({{ui:Tedarikçi dosyası ekle…}}) — bir CSV ya da elektronik tablo — alır ve metrajın ihtiyacını, fireyle birlikte, buna karşı kontrol eder. En fazla beş dosya tutulur. Hiçbir şey gönderilmez ve hiçbir şey bir tedarikçiye sormaz: dosyayı siz getirirsiniz.
- **Ne söyler.** Eksikler önce gelir: "120 EA eksik", "Teslim süresi 21 gün", "Geri siparişte", "Birim farklı", "Stok rakamı yok" ya da "Stokta". {{ui:İstenen en uzun bekleme (gün)}} 14'ten başlar.
- **Sipariş listesi.** {{ui:Sipariş listesi (CSV)}} eksik kalemleri, eksik miktarla, tedarikçi ve teslim süresiyle birlikte indirir.
- **Fiyatlar kütüphaneye.** Dosyada fiyat varsa, {{ui:Fiyatlar kütüphaneye}}, aynı ad ve birime sahip her kütüphane girdisinin malzeme fiyatını ayarlar. Metrajdaki değerlerini almak için kütüphaneden yeniden fiyatlandırın.
- **Sorunlar panelinde.** Eksik bir uyarıdır, uzun bekleme ise bir nottur; "Tedarikçi stoku" başlığı altında yer alır. Bir eksiği bir nedenle kabul edebilirsiniz ve neden metrajda kaydedilir. Bkz. [Tedarikçi stokunu ve teslim sürelerini kontrol edin](topic:supplier-stock).

**AI asistanları**

- **Üç iş için de araçlar.** {{ui:Ayarlar}} içinde asistanlara izin verildiğinde bir asistan bir açıklamayı okuyabilir (`legend_open`), sayımı çalıştırabilir (`legend_count_start`, sonra `legend_count_status` ve `legend_count_result`) ve ekleyebilir (`legend_count_add`, önce önizleme yapabilir). Hatırlanan fiyatları okuyabilir (`prices_list`), bunlardan kalemleri fiyatlandırabilir (`prices_apply`, önce önizleme yapabilir) ve tedarikçi kontrolünü okuyabilir (`supply_check`). Bir tedarikçi dosyası eklemek size aittir. Bkz. [TakeoffCraft'ı AI asistanlarıyla kullanın](topic:use-with-ai-assistants).

**Her uygulamada**

- **Diller.** Toplam elli dört dil; on tanesi yenidir (Litvanca, Letonca, Boşnakça, Marathi, Telugu, Arnavutça, Afrikanca, Filipince, Svahili ve Özbekçe). İngilizce dışındaki diller, bir ana dil konuşanı okuyana kadar makine taslağıdır.
- **Giriş aygıtları.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Giriş aygıtları}}, bir dokunmatik yüzeyin, bir farenin yan düğmelerinin, bir kalemin, 3B bir farenin, bir oyun kumandasının ya da bir MIDI kumandasının ne yaptığını belirler; her uygulama için ya da yalnızca birinde. Bkz. [Dokunmatik yüzey, 3B fare veya kumanda kullanın](common:input-devices).
- **Araç çubuğu satırları.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Araç çubuğu satırları}} seçenekleri sunar: {{ui:Sar}} (başlangıç), {{ui:2 satır}} ve {{ui:1 satır}}; sığmayan gruplar yana kayar. Bkz. [Panelleri düzenleyin](common:arrange-panels).
- **Sorunlar paneli.** Uyarı ve notların ortak paneli, yukarıdaki tedarikçi stoku kontrolünü diğer kontrollerin yanında taşır.
- **Eklentiler.** Eklentiler hesabınızdaki listeyi izler. Bkz. [Eklentiler ve hesap listeniz](common:addons-basics).
- **AI'nizi bağlayın.** CadCraft Studio merkezdir: asistanınızı sekiz uygulamanın hepsi için bir kez bağlayın. Studio'nun kendi yapay zekâsı yoktur.

### 0.8.1'de düzeltilenler

- **DWG sınıflar bölümü.** Bir DWG dosyasının sınıflar bölümü yanlış türde okunuyordu. Bu, TakeoffCraft'ta ve diğer dört uygulamada düzeltildi.
- **Studio çalışırken dili değiştirebilir.** Önceden Studio ve paketli sürümleri yalnızca İngilizceydi. Bu, masaüstü sürümünde her platformda test edilmedi; dil değişmiyorsa bize bildirin.

### Bu sürümde henüz yok

- **Kod imzalı değil.** Windows uyarabilir; bir Mac'te ilk açılışta sağ tıklayıp {{ui:Aç}} seçeneğini seçersiniz. Mağaza sürümleri (Microsoft Store, Google Play, App Store) beklemededir; iPad ve iPhone sürümü 0.8.1 için yeniden derlenmedi.
- **Studio güncellemeleri.** Windows kurulum dosyası ve Linux paketleri günde bir kez kontrol eder ve önce sorar. Taşınabilir zip yalnızca bildirir; macOS ve APK kendini güncellemez. 0.8 macOS .dmg sürümü yayını izler.
- **AI'yi tek tıkla bağlama.** Studio içinden tek tıkla bağlantı, tarayıcıdaki AI için barındırılan bağlayıcı, Studio içinde kendi API anahtarınız ve yayımlanmış bir MCP paketi bu sürümde vaat edilmez.
- **Hepsini say.** Açıklamadaki gibi çizilmiş semboller gerektirir; içinden duvar ya da uzun bir çizgi geçen bir sembol kaçabilir. Aynalanmış semboller bulunmaz ve ölçeksiz, başka boyutta çizilmiş bir sayfa açıklamanın boyutunda aranır. Geri kalanına güvenmeden önce ilk sayfadaki bulguları kontrol edin.
- **Tedarikçi stoku.** Stok rakamları yalnızca eklediğiniz dosya kadar günceldir. Kontrol hiçbir zaman bir tedarikçiye sormaz.
- **Diller.** Tamil dilinde uygulama çubuğu taşıyor.

Diğer her şey için [Henüz yapılmadı](topic:not-built-yet) bölümüne bakın. Bundan önceki sürüm için bkz. [0.7'deki yenilikler](topic:whats-new-0-7).
