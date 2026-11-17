---
title: Metrajı kaydetme ve yeniden açma
summary: Metrajı bir .takeoff.json proje dosyası olarak kaydedin, aynı PDF'lerle yeniden açın; bir PDF eksik ya da değiştiğinde ne olduğunu görün.
keywords: PDF içinde metraj, gömülü, ek, kaydet, aç, yeniden aç, proje, takeoff.json, devam et, sürdür, revize PDF, değişmiş PDF, eksik PDF, yedek, otomatik kaydet, kurtar, çökme
from: bd5080a6
---

Bir metraj, küçük bir proje dosyası olarak kaydedilir: `(name).takeoff.json`. Kalemlerinizi, birim maliyetlerinizi, birim fiyatlarınızı, her sayfanın ölçeğini ve her işareti içerir. PDF'leri **içermez**; onları içeriklerine göre yeniden bulur.

## Kaydetme

1. {{ui:File}} grubundaki {{ui:Save takeoff}} seçeneğini seçin ya da {{key:Mod+S}} tuşlarına basın.
   Tarayıcınız `(name).takeoff.json` dosyasını indirir. Durum çubuğu şunu yazar: "(name).takeoff.json kaydedildi. Aynı PDF'lerin üzerinde yeniden açılır (içeriklerine göre eşleştirilirler)."
2. Dosyayı işin PDF'lerinin yanına taşıyın, böylece ikisi birlikte kalır.

Her kayıt yeni bir dosya indirir. Tarayıcınız ikincisine `(name) (1).takeoff.json` adını verebilir; en yenisini saklayın.

Ad, bu metrajda açtığınız ilk PDF'den alınır.

:::note
Metrajı bir dosya olarak saklamanın hâlâ tek yolu {{ui:Save takeoff}}'tur. Çalışırken TakeoffCraft bu tarayıcıda bir kurtarma kopyası da tutar (aşağıya bakın); bulut kaydı ise henüz kullanılamıyor. Kaydedilmemiş değişikliklerle sekmeyi kapatmaya çalışırsanız, tarayıcı ayrılıp ayrılmayacağınızı sorar.
:::

## Metrajı PDF'nin içinde tutun

{{ui:Export}} › {{ui:PDF with the takeoff inside}} her açık PDF'nin bir kopyasını indirir. Adı `Plans (with takeoff).pdf` gibidir ve tüm metrajı bir ek olarak taşır: kalemler, işaretler, ölçekler, ihale alanları, `.takeoff.json` dosyasında bulunan her şey. Sayfaları değiştirilmez; bu yüzden orijinali gibi görünür ve yazdırılır, diğer PDF okuyucular da metrajı eklerinin arasında listeler.

Bu PDF'yi TakeoffCraft'te açın (PDF'leri nasıl açarsanız açın); program **Bu PDF'nin içinde bir metraj var** diye sorar. Metrajı geri almak için {{ui:Open the takeoff}}, yalnızca çizimi açmak için {{ui:Just the PDF}} seçin. Kopya, üretildiği PDF'yi temsil eder; bu yüzden her ikisinden kaydedilen bir `.takeoff.json` ikisinde de açılır.

Birden çok PDF ile her kopya tüm metrajı taşır; bunları birlikte açın. Bir kopyadan tekrar kaydetmek, içindeki metrajı değiştirir; ikinci bir metraj eklemez. Yine de saklanacak dosya `.takeoff.json`'dur: küçüktür ve otomatik kaydetmenin ve masaüstü uygulamasının yazdığı dosya budur.

## Sekme ya da tarayıcı durursa

Her değişiklikten birkaç saniye sonra TakeoffCraft, metrajın bir kopyasını bu tarayıcının kendi depolamasında tutar; PDF'ler toplam 64 MB ya da daha azsa onlar da dahil edilir. Hiçbir şey yüklenmez. Metrajı kaydettiğinizde, yenisini başlattığınızda ya da başka bir proje açtığınızda kopya silinir.

Sekme çökerse, tarayıcı ya da bilgisayar durursa ya da kaydedilmemiş değişikliklerle çıkarsanız, TakeoffCraft'i bir sonraki açışınızda **Çalışmanız kurtarılsın mı?** diye sorar ve metrajı adıyla listeler. Geri getirmek için **Kurtar**'ı seçin: kalemler, işaretler ve ölçekler geri gelir; PDF'ler saklandıysa yeniden açılır. Durum çubuğu şunu yazar: "(name) kurtarıldı. Henüz bir dosyaya kaydedilmedi: Metrajı kaydet onu saklar." PDF'ler saklanamayacak kadar büyükse, onları yeniden açın; işaretler kendi sayfalarında görünür. Daha fazlası: [Çalışmanızı kurtarın](common:recover).

## Yeniden açma

1. TakeoffCraft'i açın.
2. `.takeoff.json` dosyasını ve PDF'lerini birlikte sayfaya sürükleyip bırakın. Ya da PDF'ler için {{ui:Open plans}}, proje için {{ui:Open takeoff}} seçeneğini seçin; sıra fark etmez.
   Durum çubuğu şunu yazar: "(name) açıldı: 12 kalem, 340 işaret." Her sayfa ölçeğini geri alır ve işaretler kendi sayfalarında görünür.

PDF'lerin sırası önemli değildir; adları ya da klasörleri de öyle. TakeoffCraft her PDF'yi içeriğinin parmak izinden tanır.

Kaydedilmemiş değişiklikleri olan mevcut bir metrajın üzerine bir proje açarsanız, TakeoffCraft önce sorar: **İptal**, **Değişiklikleri at** ya da **Önce metrajı kaydet**. Proje açmak mevcut kalemleri ve işaretleri değiştirir; zaten açık olan PDF'ler açık kalır.

## PDF eksik olduğunda

Projeyi tüm PDF'leri olmadan açarsanız, durum çubuğuna "İşaretleri görmek için PDF'lerini açın (Sayfalar listesinin altında listelenir)." eklenir. Sayfalar listesinin altındaki bir not şunu söyler:

"Bu metraj açık olmayan PDF'leri de kapsar. Miktarları sayılır; işaretlerini görmek ve düzenlemek için bunları açın:"

Ardından dosya adları ve boyutları gelir. Bu işaretler yine her toplamda ve dışa aktarmada, ölçüldükleri ölçeklerle sayılır. İşaretleri görmek ve düzenlemek için bu PDF'leri açın.

## PDF değiştiğinde

Revize edilmiş ya da başka bir programla yeniden kaydedilmiş bir PDF'nin içeriği farklıdır; bu yüzden aynı adı taşısa bile TakeoffCraft için **farklı bir dosyadır**. Sayfalar listesinin altındaki notta böyle bir dosya "bu adda bir dosya açık, ancak içeriği farklı" diye yazar.

- Metrajdaki işaretler eski sürüme bağlı kalır. Eski konumlarında ve ölçeklerinde saymaya devam ederler.
- Revize PDF, ölçeksiz ve işaretsiz yeni sayfalar olarak açılır.

Metrajı revizyona taşımak için her iki PDF'yi açın ve yeni sayfada {{ui:Compare}} seçeneğini kullanın: [Revize bir sayfayı karşılaştırın ve metrajı taşıyın](topic:compare-revisions).

## Hasarlı ya da yabancı dosya

TakeoffCraft her proje dosyasını kullanmadan önce denetler. Görebileceğiniz iletiler:

- "(file) bir TakeoffCraft projesi değil (geçerli bir JSON değil)."
- "Bu bir TakeoffCraft proje dosyası değil."
- "Bu proje daha yeni bir TakeoffCraft ile kaydedilmiş. Onu orada açın."
- "3 işaret hasarlıydı ve dışarıda bırakıldı." (geri kalanı açılır)

## Geri alma geçmişi

Geri alma geçmişi, bir proje açtığınızda sıfırdan başlar. Kaydetmek geçmişi silmez.
