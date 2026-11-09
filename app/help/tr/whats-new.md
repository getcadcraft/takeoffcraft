---
title: Yenilikler: 0.8 ve 0.8.1
summary: Bir sembol lejantını tüm açık sayfalarda tek çalıştırmada sayın, yeni bir metrajı geçmiş işlerinizin oranlarıyla başlatın, metrajı bir tedarikçinin stok ve teslim sürelerine karşı kontrol edin; üçü için yeni asistan araçları, ortak 0.8 değişiklikleri ve DWG dosyaları için 0.8.1 düzeltmesi.
keywords: yenilikler, sürüm notları, değişiklik günlüğü, değişiklikler, 0.8, 0.8.1, sürüm, yeni özellikler, hepsini say, lejant, sembol lejantı, tüm takım, fiyat belleği, geçmiş işler, son iş, tipik fiyat, tedarikçi, stok, teslim süresi, geri sipariş, sipariş listesi, eksik, sorunlar paneli, asistan, diller, giriş aygıtları, araç çubuğu satırları, dwg
from: a04adef6
---

Aşağıda, 0.7 sürümüyle karşılaştırıldığında TakeoffCraft 0.8 (2026-11-01 yayımlandı) ve 0.8.1 (2026-11-02) sürümlerinde neyin değiştiği yer alıyor. Artık bir sembol lejantı, takımın tamamında tek seferde sayılabiliyor; yeni bir metraj, geçmiş işlerinizin fiyatlarından başlatılabiliyor ve metraj bir tedarikçinin stoğuna karşı kontrol edilebiliyor. 0.8.1 bir düzeltme sürümüdür.

## Yeni

### Takımdaki her şeyi say

- **Lejantı bir kez kutuya alın.** Araç çubuğundaki {{ui:Hepsini say}} bir sembol lejantını okur: sembollerin etrafına bir kutu çizin ve yanlarında yazılı adları da dahil edin. Her sembol resmi ve adıyla listelenir; ad, kalemin adı olur. İstemediklerinizin işaretini kaldırın, ardından {{ui:N sayfada say}} seçeneğini belirleyin. Aranan sayfayı bir çubuk gösterir; {{ui:İptal}} çalıştırmayı durdurur ve sayfa kullanılmaya devam eder.
- **Her sayfa tek çalıştırmada.** Her sembol, açık olan her sayfada sayılır. Farklı bir ölçekte çizilmiş sayfa o ölçekte aranır ve semboller dik açıların herhangi birinde döndürülmüş olarak bulunur. Lejantın kendi sembolleri, bulunduğu sayfada sayılmaz.
- **Eklemeden önce gözden geçirin.** Her toplamın, o sayfaya giden sayfa başına bir bağlantısı vardır ("E-103: 4"). Bir bulguyu dışarıda bırakmak için üzerine tıklayın, geri getirmek için yeniden tıklayın. Eşleşme düzeyi (%50 ila %100) yalnızca bulunanları süzer; hiçbir şey yeniden aranmaz.
- **Tek geri al adımı.** {{ui:N işaret ekle}} her sembol için bir sayım kalemi oluşturur ve her bulgunun üzerine bir işaret koyar. Adı zaten sizin bir sayım kaleminiz olan bir ad yeniden kullanılır. {{key:Ctrl+Z}} tüm kalemleri ve işaretleri geri alır. Kabul ettikleriniz {{ui:Öğrenilenler}} bölümüne de aktarılır.
- **Her açıdaki semboller.** Saymadan önce {{ui:Her açıdaki simgeler}} seçeneğini işaretleyin; böylece dik açı olmayan bir açıyla döndürülmüş semboller de bulunur. Arama her sembolü her 15 derecede bir döndürür; yuvarlak olmayan bir sembol altı kata kadar daha uzun sürebilir.
- **Ne olduğu.** Yalnızca kendi sayfalarınız üzerinde düz sembol eşleştirmesidir; eğitilmiş bir model kullanılmaz ve hiçbir şey bilgisayarınızdan çıkmaz. Uydurma bir 200 sayfalık takımda, hızlı bir masaüstü bilgisayarda Chrome içinde baştan sona 9.4 saniye sürdü; gerçek plan takımları daha yavaş olacaktır. Bkz. [Takımdaki her şeyi say](topic:count-everything).

### Önceki işlerinizden fiyat belleği

- **TakeoffCraft oranlarınızı hatırlar.** Bir metrajı kaydettiğinizde, kullanılan her fiyatlı kalem adı ve türüyle hatırlanır: malzeme oranı, işçilik oranı, fire ve birim. Her ad için son 12 iş tutulur. Bu bilgi, fiyat kütüphanesinin yanında bu bilgisayarda saklanır, hiçbir zaman bir metraj dosyasının içinde değildir ve hiçbir yere gönderilmez.
- **Yeni bir metrajı bundan başlatın.** Araç çubuğundaki {{ui:Fiyatlar}}, her kalem için son işin oranlarını, tipik oranları ve aralığı gösterir. {{ui:Sonuncuyu kullan}} veya {{ui:Tipiği kullan}} tek bir kalemin fiyatını belirler; {{ui:Hafızadan fiyatsız N kalemi fiyatlandır}} henüz fiyatı olmayan her kalemi doldurur. Her kullanım tek bir geri al adımıdır.
- **Eski işler.** {{ui:Geçmiş bir metrajdan öğren…}}, kaydedilmiş bir metrajın (.json) fiyatlı kalemlerini hatırlar.
- **Görün, değiştirin, unutun.** {{ui:Hatırlanan her şey}} her adı listeler; çöp kutusu düğmesi birini unutturur, {{ui:Tüm fiyatları temizle}} hepsini unutturur. Durdurmak için {{ui:Metrajı kaydettiğimde fiyatlarımı hatırla}} seçeneğini kapatın. Adet başına fiyat, hiçbir zaman ft başına ölçülen bir kaleme atanmaz. Bkz. [Geçmiş işlerinizden fiyat belleği](topic:price-memory).

### Tedarikçi stoku ve teslim süreleri

- **Bir tedarikçinin listesine karşı kontrol edin.** Araç çubuğundaki {{ui:Tedarik}}, bir tedarikçinin stok listesini ({{ui:Tedarikçi dosyası ekle…}}) bir CSV veya elektronik tablo olarak alır ve metrajın ihtiyaç duyduğu şeyleri, fire dahil, bu listeye karşı kontrol eder. En fazla beş dosya tutulur. Hiçbir şey gönderilmez ve hiçbir şey bir tedarikçiye sorulmaz: dosyayı siz getirirsiniz.
- **Ne söylediği.** Eksik kalemler önce gelir: "120 EA eksik", "Teslim süresi 21 gün", "Geri siparişte", "Birim farklı", "Stok rakamı yok" veya "Stokta". {{ui:İstenen en uzun bekleme (gün)}} 14 ile başlar.
- **Sipariş listesi.** {{ui:Sipariş listesi (CSV)}}, eksik kalemleri eksik miktarları, tedarikçileri ve teslim süreleriyle birlikte indirir.
- **Fiyatlar kütüphaneye.** Dosyada fiyatlar varsa {{ui:Fiyatlar kütüphaneye}}, aynı ad ve birime sahip her kütüphane girdisinin malzeme fiyatını ayarlar. Bunları metraja getirmek için kütüphaneden yeniden fiyatlandırın.
- **Sorunlar panelinde.** Eksiklik bir uyarı, uzun bekleme ise bir nottur; ikisi de "Tedarikçi stoku" başlığı altında yer alır. Bunlardan birini bir gerekçeyle kabul edebilirsiniz; gerekçe metrajın içinde kaydedilir. Bkz. [Tedarikçi stokunu ve teslim sürelerini kontrol edin](topic:supplier-stock).

### Yapay zekâ asistanları

- **Üçü için araçlar.** {{ui:Ayarlar}} içinde asistanlara izin verildiğinde bir asistan bir lejantı okuyabilir (`legend_open`), sayımı çalıştırabilir (`legend_count_start`, ardından `legend_count_status` ve `legend_count_result`) ve ekleyebilir (`legend_count_add`, önce önizleme gösterebilir). Hatırlanan fiyatları okuyabilir (`prices_list`), kalemleri bunlardan fiyatlandırabilir (`prices_apply`, önce önizleme gösterebilir) ve tedarikçi kontrolünü okuyabilir (`supply_check`). Tedarikçi dosyası eklemek ise size aittir. Bkz. [TakeoffCraft'ı yapay zekâ asistanlarıyla kullanın](topic:use-with-ai-assistants).

### Her uygulamada

- **Diller.** Toplam elli dört dil; on tanesi yenidir (Litvanca, Letonca, Boşnakça, Marathi, Telugu, Arnavutça, Afrikanca, Filipince, Svahili ve Özbekçe). İngilizce dışındaki diller, bir ana dil konuşuru bunları okuyana kadar makine taslağıdır.
- **Giriş aygıtları.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Giriş aygıtları}}, bir izleme paneli, bir farenin yan düğmeleri, bir kalem, 3B fare, bir oyun denetleyicisi veya bir MIDI denetleyicisinin ne yapacağını her uygulama için veya yalnızca biri için belirler. Bkz. [İzleme paneli, 3B fare veya denetleyici kullanın](common:input-devices).
- **Araç çubuğu satırları.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Araç çubuğu satırları}} seçeneği {{ui:Sar}} (başlangıç), {{ui:2 satır}} ve {{ui:1 satır}} sunar; sığmayan gruplar yana doğru kayar. Bkz. [Panelleri düzenleyin](common:arrange-panels).
- **Sorunlar paneli.** Uyarı ve notların ortak paneli artık yukarıdaki tedarikçi stok kontrolünü, diğer kontrollerin yanında taşır.
- **Eklentiler.** Eklentiler hesap listenizi izler. Bkz. [Eklentiler ve hesap listeniz](common:addons-basics).
- **Yapay zekânızı bağlayın.** CadCraft Studio merkezdir: asistanınızı sekiz uygulamanın hepsi için bir kez bağlayın. Studio'nun kendi yapay zekâsı yoktur.

## 0.8.1'de düzeltilenler

- **DWG sınıfları bölümü.** Bir DWG dosyasının sınıflar bölümü yanlış türde okunuyordu. Bu, TakeoffCraft'ta ve diğer dört uygulamada düzeltildi.
- **Studio çalışırken dil değiştirebilir.** Önceden Studio ve paketli sürümleri yalnızca İngilizceydi. Bu, masaüstü derlemesinde her platformda sınanmadı; dil değişmezse bize bildirin.

## Bu sürümde henüz yok

- **Kod imzalı değil.** Windows uyarabilir; bir Mac'te ilk kez sağ tıklayıp {{ui:Açık}} seçeneğini belirlemeniz gerekir. Mağaza derlemeleri (Microsoft Store, Google Play, App Store) beklemededir ve iPad ile iPhone derlemesi 0.8.1 için yeniden derlenmedi.
- **Studio güncellemeleri.** Windows kurulum programı ve Linux paketleri günde bir kez denetler ve önce sorar. Taşınabilir zip yalnızca bunu size bildirir; macOS ve APK kendini güncellemez. 0.8 macOS .dmg dosyası yayını izler.
- **Yapay zekânızı bağlayın.** Studio içinde tek tıkla bağlantı, tarayıcıdaki barındırılan yapay zekâ bağlayıcısı, Studio içinde kendi API anahtarınız ve yayımlanmış bir MCP paketi bu sürümde söz verilmemektedir.
- **Hepsini say.** Lejantta olduğu gibi çizilmiş semboller gerekir; içinden duvar veya uzun bir çizgi geçen bir sembol kaçırılabilir. Aynalanmış semboller bulunmaz ve ölçeği olmayan, başka bir boyutta çizilmiş bir sayfa lejantın boyutunda aranır. Kalanına güvenmeden önce ilk sayfadaki bulguları kontrol edin.
- **Tedarikçi stoku.** Stok rakamları yalnızca eklediğiniz dosya kadar günceldir. Kontrol hiçbir zaman bir tedarikçiye sormaz.
- **Diller.** Tamilce uygulama çubuğu taşar.

Diğer her şey için bkz. [Henüz yapılmadı](topic:not-built-yet). Bundan önceki sürüm için bkz. [0.7'deki yenilikler](topic:whats-new-0-7).
