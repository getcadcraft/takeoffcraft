---
title: Teklif için bir paket gönderin
summary: Bir ihale paketini taşeronlara e-postayla gönderin, fiyatları hesap gerektirmeyen bir sayfada yazmalarını sağlayın, fiyatları açılış saatine kadar mühürlü tutun ve onları dengeleme sayfasına çekin.
keywords: teklif için gönder, ihale daveti, teklif veren, taşeron, davet, e-posta, fiyat talebi, mühürlü teklifler, ihale açılışı, ihale günü, geç teklif, son tarih, hatırlatma, taşeron kayıtları, sigorta, yeterlilik, csv, bağlan, sayfalar PDF
from: fb314b2c
---

{{ui:Dışa aktar}} › {{ui:Teklif paketleri ve dengeleme…}} › {{ui:Teklif için gönder…}} seçimi bir paketi seçtiğiniz kişilere gönderir. Web sitesi her birine bir bağlantı e-postalar; kişi bir sayfa açar, kapsamı görür ve her satır için bir fiyat yazar. Fiyatları, karşılaştırmak için dengeleme sayfasında görürsünüz ([Teklif paketleri ve teklif dengeleme](topic:bid-leveling)).

:::note
Gönderme **henüz herkese açık değil.** Özellik test edilirken yalnızca CadCraft ekibinin etkinleştirdiği hesaplarda çalışır; hesabınız etkin değilse iletişim kutusu bunu söyler. Teklif verenin sayfası, gönderilmiş her davet için çalışır.
:::

## Göndermeden önce

- Doğrulanmış bir e-posta adresi olan bir CadCraft hesabına ihtiyacınız var. Tarayıcıdaki TakeoffCraft sizden **Bağlan** seçeneğini ister: getcadcraft.com üzerinde bir sekme açılır, Bağlan'a basarsınız ve o sekme yalnızca teklif paketleri için, TakeoffCraft sekmesini kapatana kadar 30 gün geçerli bir oturum açar. Bunu istediğiniz zaman güvenlik sayfanızdan kaldırabilirsiniz. Studio penceresi henüz gönderemez.
- Her kaleme bir CSI numarası verin: bir paket, bir CSI bölümünün kalemleridir ([Metraj kalemleri oluşturma](topic:create-items)).
- Paketin işaretlerinin bulunduğu sayfaları ölçekleyin; böylece teklif verenlerin gördüğü miktarlar ölçülmüş olur.

## Bir paket gönderin

1. Paketin altındaki {{ui:Teklif için gönder…}} seçeneğini seçin.
2. Başlığı, projeyi ve isteğe bağlı bir mesajı doldurun; bir de kendi saat diliminizde **son teslim zamanını** girin.
3. Her fiyatı **açılış zamanına** kadar gizlemek için **Fiyatları mühürlü tut** kutusunu işaretli bırakın (son teslim zamanından önce değil). Ya da fiyatlar geldikçe görmek için işareti kaldırın.
4. Paketin işaretlerini taşıyan sayfaların bir PDF'ini, işaretler üzerine çizilmiş olarak göndermek için sayfalar kutusunu işaretli bırakın. Sizin fiyatlarınız gönderilenlerde hiç yer almaz: yalnızca kalem adları, CSI numaraları, miktarlar, birimler ve sayfa adları.
5. Davet edilecek kişileri her satıra bir tane olacak şekilde yazın: `Ad <ad@sirket.com>` biçiminde ya da yalnızca adres olarak. Ya da taşeron kayıtlarınızdan kişileri işaretleyin. Bir seferde en fazla 60, paket başına 100.
6. {{ui:Davetleri gönder}} seçeneğini seçin. Herkes adınızı ve e-posta adresinizi, son teslim zamanını ve bağlantıyı içeren tek bir düz e-posta alır; yanıtlar size gelir.

İletişim kutusu kaç tanesinin gönderildiğini söyler ve atlananları adlandırır: bu pakete zaten davet edilmiş, ihale daveti almak istemediğini bildirmiş, geçerli olmayan bir adres ya da bir gönderme sınırını aşan.

## Teklif verenlerin gördükleri

Uzun, özel bir bağlantıdaki bir sayfa; oturum açmak gerekmez. Onları kimin davet ettiğini, son teslim zamanını, fiyatların mühürlü olup olmadığını, mesajınızı ve sayfalar PDF'ini gösterir; ardından her satırı miktarıyla birlikte listeler. Her satır için bir fiyat yazarlar ya da **Dahil değil** kutusunu işaretlerler ve bir not ekleyebilirler. Tüm paket için notlar ekleyebilir ve en fazla 3 dosya (bir teklif, bir kapsam mektubu, bir sertifika) yükleyebilirler. Açılışa kadar yeniden kaydedip fiyatlarını değiştirebilirler ya da **reddedebilirler**; reddederken CadCraft'ın kendilerine bir daha ihale daveti göndermemesini isteyen bir kutu vardır.

## Mühürlü teklifler ve açılış

Açılış zamanından önce **hiç kimse** bir fiyatı, notu ya da dosyayı görmez: siz de, TakeoffCraft'ta da, Teklif paketleri sayfanızda da görmezsiniz. Kimin davet edildiğini ve yanıt verip vermediğini görürsünüz. Açılış zamanında her teklif bir kerede görünür. Son teslim zamanından sonra kaydedilen bir teklif kabul edilir ve **geç** olarak işaretlenir; dengeleme yine de onu listeler, çünkü geçlik bir işarettir, bir hüküm değildir. Açılıştan sonra teklif veren bir fiyatı değiştiremez. Mühürleme yoksa, bir teklif son teslim zamanı geçtiğinde kesinleşir.

## Fiyatları alın

{{ui:Fiyatları al}} web sitesine sorar ve her yanıtı pakete **web** olarak işaretli bir teklif olarak ekler. TakeoffCraft, bağlı olduğu sürece her iletişim kutusunu açtığınızda da sessizce sorar. Teklif veren yeni bir sürüm kaydettiğinde teklif yerinde güncellenir; sizin düzenlediğiniz bir teklif ise teklif veren yeni bir sürüm gönderene kadar bıraktığınız gibi kalır. Her çekme işlemi {{key:Mod+Z}} ile geri alınabilen tek bir adımdır. Dışarıda bırakılan satırlar, teklifin dışarıda bıraktığı kapsam olarak gelir; böylece dengeleme onları kendi maliyetinizle doldurur.

## Web sitesinde

Gönderebildiğinizde hesabınızda iki sayfa daha olur. **Teklif paketleri** gönderdiklerinizi, kimin yanıt verdiğini, geç teklifleri ve dosyaları listeler; bir hatırlatma (yeni bir bağlantı; eski bağlantı çalışmaz), paketi kapatma, yeniden açma ya da iptal etme olanağı sağlar. **Taşeronlar** her şirket için bir kayıt tutar: irtibat kişileri, meslekler, yeterlilik yanıtları (faaliyet yılı, teminat kapasitesi, EMR, iş güvenliği kaydı, sendikalı ya da sendikasız, referanslar), lisans ve sigorta son kullanma tarihleri (geçmişse ya da 30 gün içindeyse işaretlenir) ve geçmiş teklifleri. Kayıtları CSV olarak içe ve dışa aktarın: irtibat kişisi başına bir satır, dışa aktarımın gösterdiği sütunlarla. Zaten kayıtlı bir şirket güncellenir, asla tekrarlanmaz.

## Kim neyi görür ve ne kadar süreyle

Bir teklif verenin fiyatları, notları ve dosyaları size ve sayfayı işleten CadCraft ekibine gider. Son teslim tarihinden sonra 24 ay, dosyalar 180 gün saklanır; sonra silinir. Teklif verenin e-posta adresi, sizin girdiğiniz adrestir; yalnızca o kişiye davet ve varsa hatırlatma göndermek için kullanılır. Bir adrese herkesten toplam olarak günde en fazla 3 davet gider ve siz günde en fazla 200 gönderebilirsiniz.

## Henüz yapılmadı

Zeyilnameler, ihale kabul mektupları, teklif verene özel imzalı bir kapsam sayfası ve bir sigorta tarihi dolmadan önceki otomatik hatırlatmalar henüz yapılmadı. Bkz. [Henüz yapılmadı](topic:not-built-yet).
