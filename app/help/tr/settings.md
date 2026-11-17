---
title: TakeoffCraft ayarları
summary: İnçleri 1/16, 1/8 ya da 1/4'e göre gösterin, yeni kalemleri fire yüzdesiyle başlatın, Otomatik say kaydırıcısının nerede başlayacağını seçin, çizimin çizgilerine ya da Shift'e basmadan 45°'ye yakalayın, Oda doldurma'nın kaç genişlikteki kapıyı kapatacağını ayarlayın ve 3B görünümün köşe göstergesini seçin.
keywords: ayarlar, tercihler, seçenekler, hassasiyet, kesirler, inç, yuvarlama, fire, varsayılan fire, otomatik say, eşik, eşleşme, kaydırıcı, yakalama, 45, açı, shift, görünüm küpü, eksen simgesi, köşe göstergesi, 3b
from: bca3f0ed
---

{{ui:Settings}} ayarlarını dişli simgesiyle uygulama çubuğundan ya da {{key:Mod+,}} ile açın. İlk sekme, {{ui:TakeoffCraft}}, bu uygulamaya ait ayarları tutar; {{ui:General}} ise tüm CadCraft uygulamalarının ortak ayarlarını (tema, paneller, araç çubuğu) tutar. TakeoffCraft ayarları yalnızca bu uygulamada geçerlidir: burada değiştirirsiniz ve bu tarayıcı onları hatırlar. {{ui:Reset TakeoffCraft settings}} ayarları başlangıç hâline döndürür.

## Fit ve inç

Uzunlukları en yakın **1/16"** (başlangıç), **1/8"** ya da **1/4"** olarak gösterin. Bu, uzunlukların sayfada, panellerde, miktarlarda ve durum çubuğunda nasıl okunduğunu değiştirir.

Yalnızca gösterim yuvarlanır. Miktarlar, maliyetler ve dışa aktarımlar tam uzunluklardan hesaplanır; dışa aktarımlar her zaman 1/16" gösterir.

## Başlangıç fire oranı

Her yeni kalemin başlayacağı fire yüzdesi: 0% (başlangıç), 2%, 3%, 5%, 7.5%, 10%, 15% ya da 20%. Her kalem için yine başka bir fire yazabilirsiniz; kalem düzenleyicisinde ya da doğrudan miktarlar tablosunda. Zaten sahip olduğunuz kalemler kendi firelerini korur.

## Otomatik say: eşleşme kaydırıcısının başlangıcı

Bir [Otomatik say](topic:auto-count) araması bittiğinde {{ui:Match}} kaydırıcısının nerede duracağını seçer: %50 ile %95 arasında; başlangıç %75'tir. Daha düşük bir değer, reddetmeniz için daha fazla benzer öğe sunar; daha yüksek bir değer daha az sunar. Her inceleme sırasında kaydırıcıyı yine hareket ettirebilirsiniz.

## Çizimin kendi çizgilerine yakalama

Başlangıçta açık. Ölçerken ya da kalibre ederken, PDF'nin bir çizgisine yakın bir nokta o çizginin ucuna, orta noktasına, bir kesişimine ya da en yakın noktasına atlar. {{key:F3}} tuşu ve durum çubuğundaki {{ui:Snap}} de bunu açıp kapatır. Daha fazlası: [Çizimin çizgilerine yakalama](topic:snap-to-the-drawing).

## Oda doldurma: kapatacağı açıklığın genişliği

{{ui:Room fill closes openings up to}} seçeneği, {{ui:Room}} aracının kapalı sayacağı kapı açıklığının ya da boşluğun genişliğini belirler: 3'-0" ile 8'-0" arası; başlangıçta 4'-0". En geniş kapınızdan geniş olursa oda bir sonraki odaya taşar; daha dar olursa, kapı kadar bir boşluk açık kalır. Bkz. [Tek tıklamayla bir odayı doldurun](topic:measure-areas#fill-a-room-with-one-click).

## Shift'e basmadan 45°'ye yakalama

Başlangıçta kapalı. Açıkken koşular, dış hatlar, boşluklar ve sürüklenen köşeler, son noktadan itibaren {{key:Shift}} basılı tutulmadan 0°, 45°, 90° ya da 135°'de ilerler; herhangi bir açıda tıklamak için {{key:Shift}} tuşunu basılı tutun. Durum çubuğu o zaman "45°'ye yakalanıyor; Shift açıyı serbest bırakır" yazar. Bir yayın eğrisi üzerinde tıkladığınız nokta ve daireler hiçbir zaman yakalanmaz; yayın ucu yakalanır.

## Sayım işareti boyutu

Sayım noktalarının boyutu: {{ui:Extra small}}, {{ui:Small}}, {{ui:Medium}} (başlangıç: noktaların her zaman sahip olduğu boyut) ya da {{ui:Large}}. Boyut her yakınlaştırmada ekranda aynı kalır; işaretli PDF her noktayı kâğıtta sayfa boyutundan bağımsız olarak aynı boyutta çizer, böylece PDF %100'de ekranda göründüğü gibi görünür. Daha fazlası: [Elle sayın](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Köşe göstergesi

Yalnızca [3B kontrol görünümü](topic:check-in-3d) için: {{ui:View cube}} (başlangıç: sağ üstte tıklayıp sürükleyerek çevirebileceğiniz bir küp), {{ui:Axis icon}} (sağ altta küçük bir X, Y, Z işareti) ya da {{ui:None}}. Hemen değişir ve bu tarayıcıda saklanır. Düz sayfa hiçbir zaman bunu göstermez.

## Yol aracı: birleştirdiği en büyük boşluk

{{ui:Path tool: largest gap to join}} iki çizgi ucunun ne kadar uzak olabileceğini ve yine de tek bir yol sayılabileceğini belirler; PDF noktası cinsinden (0.05 ile 60 arası; başlangıçta 1.5). Bir çizimin çizgileri çoğu zaman birbirinden kıl payı kadar kısa biter. Büyük değer daha çok birleştirir; küçük değer çizgileri ayrı tutar. {{key:[}} ve {{key:]}} seçim yaparken bunu değiştirir ve bu alan izler. Bkz. [Çizgileri seçin](topic:pick-the-lines).
