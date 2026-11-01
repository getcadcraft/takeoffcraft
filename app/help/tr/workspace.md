---
title: TakeoffCraft ekranı
summary: Pencereye ekrandaki adlarıyla bir bakış - araç çubuğu, sayfalar listesi, sayfa, Kalemler paneli, Miktarlar tablosu ve durum çubuğu.
keywords: ekran, düzen, düzenler, şerit, proje tarayıcısı, araç kutusu, bilgi kutusu, araç çubuğu, paneller, sayfalar listesi, kalemler paneli, miktarlar, durum çubuğu, tur, arayüz
from: ab1115e0
---

TakeoffCraft, CadCraft uygulama çubuğunun altında tarayıcı penceresini doldurur. Yukarıdan aşağıya ve soldan sağa:

| Bölüm | Nerede | Ne işe yarar |
|---|---|---|
| Uygulama çubuğu | En üst | Uygulama adı, sürüm, {{ui:TakeoffCraft hakkında}}, {{ui:Yardım}} ({{key:F1}}), {{ui:Çevrimdışı için kaydet}}, {{ui:Ayarlar}} ({{key:Mod+,}}), {{ui:Tam ekran}} düğmesi ve {{ui:Kâğıt}} / {{ui:Model}} tema anahtarı. |
| Araç çubuğu | Uygulama çubuğunun altı | Her komut, gruplar hâlinde: {{ui:Dosya}}, {{ui:Dışa aktar}}, {{ui:Ölçek}}, {{ui:Metraj}}, {{ui:Düzenle}}, {{ui:Görünüm}}. |
| Sayfalar | Sol | Açık her PDF'in her sayfası; küçük resmi, ölçeği ve işaret sayısıyla. |
| Sayfa | Orta | Açık sayfa. Burada ölçersiniz. |
| Kalemler | Sağ | Metraj kalemleriniz, seçili kalemin ayarları ve seçili işaret. |
| Miktarlar | Alt | Kaleme veya sayfaya göre miktarlar ve maliyetler ve iş toplamı. |
| Durum çubuğu | En alt | Canlı ölçüm, iletiler, 45° ipucu ve yakınlaştırma. |

## Araç çubuğu

Ne yaptığını ve tuşunu görmek için herhangi bir düğmenin üzerinde bekleyin.

| Grup | Düğmeler |
|---|---|
| {{ui:Dosya}} | {{ui:Yeni}} (boş metraj), {{ui:Planları aç}} ({{key:Mod+O}}), {{ui:Metraj aç}} (bir `.takeoff.json` projesi), {{ui:Metrajı kaydet}} ({{key:Mod+S}}) |
| {{ui:Dışa aktar}} | Tek menü: {{ui:XLSX}}, {{ui:CSV}}, {{ui:İşaretli PDF}} |
| {{ui:Ölçek}} | {{ui:Kalibre et}} ({{key:K}}), {{ui:Denetle}} ({{key:D}}) ve {{ui:Hazır ayar}} listesi |
| {{ui:Metraj}} | {{ui:Seç}} ({{key:V}}), {{ui:Doğrusal}} ({{key:L}}), {{ui:Alan}} ({{key:A}}), {{ui:Daire}} ({{key:O}}), {{ui:Yay}} ({{key:R}}, açma/kapama anahtarı), {{ui:Düş}} ({{key:E}}, açma/kapama anahtarı), {{ui:Boşluk}} ({{key:X}}), {{ui:Say}} ({{key:C}}), {{ui:Otomatik say}} ({{key:S}}) |
| {{ui:Düzenle}} | {{ui:Geri al}} ({{key:Mod+Z}}), {{ui:Yinele}} ({{key:Mod+Y}}), {{ui:Kopyala}} ({{key:Mod+C}}), {{ui:Yapıştır}} ({{key:Mod+V}}) ve {{ui:Daha fazla}}: {{ui:Kes}}, {{ui:Kopyala}}, {{ui:Yapıştır}}, {{ui:Olduğu yere yapıştır}}, {{ui:Çoğalt}}, {{ui:Sil}}, {{ui:Tümünü seç}}, {{ui:Seçimi kaldır}} |
| {{ui:Görünüm}} | {{ui:Sayfayı sığdır}} ({{key:F}}), {{ui:Genişliğe sığdır}} ({{key:W}}) |

Kullandığınız araç basılı gösterilir. {{ui:Yay}} ve {{ui:Düş}} düğmeleri açıkken basılı kalır.

## Sayfalar (sol)

- **Sayfalarda ara** listeyi sayfa adına, dosya adına veya sayfa etiketine göre süzer.
- Her sayfa bir küçük resim (kaydırdıkça çizilir), adını ve ya ölçeğini ya da **Ölçek yok** gösterir.
- Her satırın sağ tarafı sayfanın kaç işareti olduğunu gösterir. Bir kalem vurgulanıyorsa bunun yerine o kalemin sayfada kaç işareti olduğunu gösterir.
- Bir sayfayı açmak için tıklayın. {{key:PageDown}} ve {{key:PageUp}} listede sonraki ve önceki sayfaya geçer.
- Bir metraj açık olmayan PDF'leri kapsıyorsa listenin altındaki bir not onları adlandırır. Bkz. [Bir metrajı kaydetme ve yeniden açma](topic:save-and-reopen).

Sayfa adları PDF'ten gelir: `A-101` gibi bir sayfa etiketi sayfa adı olur. Etiketi olmayan bir sayfa, "Plans, sayfa 3" gibi dosyasından ve sayfa numarasından adlandırılır. Birkaç PDF açıkken etiketli sayfalar dosya adını da gösterir.

## Sayfa (orta)

- Sayfanın altındaki çubuk sayfa adını ve ölçeğini ya da "Henüz ölçek yok: hazır ayar seçin ya da kalibre edin" gösterir. Düğmeleri: {{ui:MarkupCraft}} (o uygulama PDF'i alabildiğinde; bkz. [Bir metraj başlatma ve bir plan takımı açma](topic:open-plan-set)), {{ui:Karşılaştır}} (sayfanın eski bir sürümü bunun üstünde: [Revize edilmiş bir sayfayı karşılaştırma](topic:compare-revisions)), "(n) denetlenecek" (işaretlenmiş işaretler, varsa) ve {{ui:3B}} ([3B denetim görünümü](topic:check-in-3d)).
- Hiçbir PDF açık değilken ortada kısa, beş adımlı bir rehber görünür.
- Tekerlek işaretçinin bulunduğu yere yakınlaştırır. Kaydırmak için sürükleyin. Bkz. [Klavye ve fare](topic:keyboard).
- {{ui:Otomatik say}} kullanırken sayfanın üstünde kontrolleriyle bir çubuk belirir.

## Kalemler (sağ)

En üstte {{ui:İhale alanı}} listesi: yeni işaretlerin gireceği bina, kat veya aşama ([İhale alanları](topic:bid-areas)).

- {{ui:Yeni kalem}} küçük bir form açar: bir ad, bir tür ({{ui:Doğrusal (uzunluk)}}, {{ui:Alan}} veya {{ui:Sayım}}) ve {{ui:Ekle}}.
- Liste her kalemin rengini, tür simgesini, adını ve miktarını gösterir. Onunla çizmek ve işaretlerini her sayfada vurgulamak için bir kaleme tıklayın. Vurgulamayı durdurmak için yeniden tıklayın.
- Listenin altında **Kalem: (ad)** kalem düzenleyicisidir: ad, tür, renk, birim, yükseklik veya derinlik, fire, malzeme ve işçilik fiyatları, ölçülen değerler ve {{ui:Montaj}}. Bkz. [Metraj kalemleri oluşturma](topic:create-items).
- Bir işaret seçtiğinizde **Seçili işaret** belirir: hangi kaleme ait olduğu, sayfası, ölçümleri ve {{ui:Boşluk ekle}} ile {{ui:İşareti sil}} gibi düğmeler. Birkaç işaret seçiliyken **Seçili işaretler** olur: her kalemden kaç tane olduğu ve {{ui:Kopyala}}, {{ui:Çoğalt}}, {{ui:Kes}} ve {{ui:İşaretleri sil}}.
- Kalem düzenleyicisi {{ui:Kalemi kopyala}} ve {{ui:Kalemi çoğalt}} ile biter: birim maliyeti ve maliyetleriyle bir kalem, işaretleri olmadan. Bkz. [İşaretleri kopyalama, yapıştırma ve çoğaltma](topic:copy-paste).

## Miktarlar (alt)

- {{ui:Kaleme göre}} her kalemi ve montaj bileşenlerini miktar, fire, fiyatlar ve uzatılmış maliyetlerle listeler. Fire ve fiyatları doğrudan tabloya yazabilirsiniz.
- {{ui:Sayfaya göre}} her kalemin her sayfadaki miktarını listeler.
- Toplamların dışında bir şey kaldığında **Eksik:** ile başlayan bir uyarı belirir.
- {{ui:İş toplamı}} başlığın sağındadır.
- En sağdaki ok düğmesi sayfaya daha çok yer vermek için tabloyu gizler veya gösterir.

Bkz. [Miktarları ve keşfi okuma](topic:read-quantities).

## Durum çubuğu (alt)

Soldan sağa: çizerken canlı ölçüm (uzunluk, alan, yarıçap veya bir denetim sonucu), bir uzunluk yazarken {{ui:Yaz}} kutusu, TakeoffCraft'tan iletiler, "Shift 45°'ye yakalar" hatırlatması ([Ayarlar](topic:settings) içinde açıksa "45°'ye yakalar; Shift açıyı serbest bırakır"), {{ui:Yakala}} düğmesi (çizimin çizgilerine yakalama, vurgulu olduğunda açık; {{key:F3}}) ve yakınlaştırma yüzdesi.

:::tip
Bir şey olmadığında durum çubuğunu okuyun. TakeoffCraft bir tıklamayı neden reddettiğini orada açıklar, örneğin "Bu sayfanın henüz ölçeği yok".
:::

## Diğer düzenler

Yukarıdakilerin hepsi başlangıçtaki {{ui:CadCraft klasik}} düzenidir. {{ui:Ayarlar}} ({{key:Mod+,}}) › {{ui:Genel}} › {{ui:Düzen}} iki tane daha sunar; aynı araçlar ve tuşlar üçünde de çalışır ve {{ui:CadCraft klasik}} seçeneğini yeniden seçmek her denetimi eski yerine koyar.

| Düzen | TakeoffCraft'ta |
|---|---|
| {{ui:Şerit ve proje tarayıcısı}} | Üstte {{ui:Metraj şeridi}} ([Menüler, tuşlar ve fare](topic:menus-keys-and-mouse)), çalışan araç için bir çubuk, açtığınız her sayfa için bir sekme (bir çizimin Modeli ve düzenleri de sayfadır) ve sayfanın altında ölçek hazır ayarları ile {{ui:Sayfayı sığdır}}. Sol panel {{ui:Metraj tarayıcısı}} üzerinde {{ui:Özellikler}} (seçili kalem, not veya işaret) içerir: {{ui:Sayfalar}} (bir sekmede açmak için birine tıklayın), {{ui:Koşullar}} (onunla çizmek için birine tıklayın) ve {{ui:Keşif}} (her kalemin toplamı ve iş toplamı); küçük resimler ikinci sekmesidir. |
| {{ui:Araç kutusu ve bilgi kutusu}} | Sayfanın üstünde araç çubuğu, {{ui:İhale alanı}}, çalışan araç ya da seçim ve sayfa çubuğuyla bir bilgi kutusu, solda metraj araçlarının bir sütunu, her sayfa için bir sekme ve sayfanın altında {{ui:Yakala}} ile yakınlaştırma. |

[3B denetim görünümü](topic:check-in-3d) açıkken sayfa sekmeleri ve sayfanın altındaki çubuk kenara çekilir; yeniden ölçmek için 3B görünümü kapatın. Telefonda her zaman telefon düzeni çalışır.

## Tam ekran ve temalar

Uygulama çubuğundaki {{ui:Tam ekran}} düğmesi veya {{key:Ctrl+Shift+F}} (her platformda Control, Mac'te de) normal, tam ekran ve çubukları gizli tam ekran arasında dolaşır. Çubuklar gizliyken yeniden göstermek için işaretçiyi üst kenara götürün.

{{ui:Kâğıt}} açık temadır, {{ui:Model}} koyu olandır. {{ui:Model}} içinde çizim yalnızca ekranda ters çevrilmiş gösterilir (koyu üzerine açık çizgiler); dışa aktarmalar asla değiştirilmez.
