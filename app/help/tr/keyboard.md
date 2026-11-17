---
title: Klavye ve fare
summary: TakeoffCraft'taki her tuş, fare, dokunmatik yüzey ve dokunma işlemi; gruplara ayrılmış ve platform farklarıyla birlikte.
keywords: tuşlar, kısayollar, kısayol tuşları, klavye, fare, dokunmatik yüzey, dokunma, kaydır, yakınlaştır, tekerlek, sağ tık, çift tık, boşluk, shift, kopyala, yapıştır, kes, çoğalt, tümünü seç
from: 6f2c441d
---

İşaretçi sayfanın herhangi bir yerindeyken ve bir alana yazmıyorken harf tuşları çalışır. Bir iletişim kutusu açıkken, kendi tuşları geçerlidir. Harfler {{key:Shift}} ile ya da onsuz çalışır.

## Araçlar

| Tuş | Araç |
|---|---|
| {{key:V}} | {{ui:Seç}} |
| {{key:L}} | {{ui:Doğrusal}} |
| {{key:A}} | {{ui:Alan}} |
| {{key:O}} | {{ui:Daire}} |
| {{key:B}} | {{ui:Oda}} (tek tıkla bir odayı doldurun) |
| {{key:R}} | {{ui:Yay}} açık ya da kapalı (Doğrusal, Alan ve Boşluk'ta) |
| {{key:E}} | {{ui:Düş}} açık ya da kapalı: bir koşunun sonraki parçaları çizilir ama sayılmaz |
| Çizerken bir rakam, `@` ya da `#` | {{ui:Yaz}} kutusunu açar: bir uzunluk ya da koordinat yazın; {{key:Enter}} noktayı yerleştirir ([Doğrusal koşuları ölçün](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Boşluk}} (önce bir alan seçin) |
| {{key:C}} | {{ui:Say}} |
| {{key:S}} | {{ui:Otomatik say}} |
| {{key:K}} | {{ui:Kalibre et}} |
| {{key:D}} | ölçeği {{ui:Denetle}} |

## Çizim sırasında

| Tuş ya da eylem | Ne yapar |
|---|---|
| Tıklama | Bir nokta yerleştirir (Say ile bir nokta). |
| {{key:P}} | Yol: bir PDF çizgisinin bağlı olduğu tüm yolu ya da bir tıklamanın çevresindeki dış hattı seçer ([PDF'nin çizgilerini seçin](topic:pick-the-lines)). |
| {{key:F3}} | Çizimin çizgilerine yakalamayı açar ya da kapatır ([Çizimin çizgilerine yakalayın](topic:snap-to-the-drawing)). |
| Tıklarken {{key:Shift}} basılı tutulur | Parçayı son noktadan 0°, 45°, 90° ya da 135°'ye yakalar. Yay noktaları ve daireler için geçerli değildir. |
| Çift tıklama | Bir koşuyu bitirir ya da bir alanı veya boşluğu kapatır. |
| {{key:Enter}} | Bir koşuyu bitirir ya da bir alanı veya boşluğu kapatır. |
| Sağ tıklama (taşımadan) | Bir koşuyu bitirir ya da bir alanı veya boşluğu kapatır. |
| İlk noktaya tıklama | Bir alanı ya da boşluğu kapatır (üçüncü noktadan itibaren). |
| {{key:Backspace}} ya da {{key:Delete}} | Son noktayı kaldırır (önce bekleyen yay noktasını). |
| {{key:Esc}} | Bekleyen yay noktasını bırakır; sonra tamamlanmamış işareti iptal eder; sonra {{ui:Seç}} aracına döner. |

## Seçme ve düzenleme

| Tuş ya da eylem | Ne yapar |
|---|---|
| İşarete tıklama ({{ui:Seç}} aracı) | Onu seçer ve kalemini geçerli yapar. |
| {{key:Shift}} + işarete tıklama | Seçime ekler ya da seçimden çıkarır. |
| {{key:Mod+A}} | Açık sayfadaki her işareti seçer. |
| Bir köşe tutamacını sürükleyin | Bu noktayı taşır ({{key:Shift}} 45°'ye yakalar). Tek bir işaret seçiliyken çalışır. |
| {{key:Delete}} ya da {{key:Backspace}} | Seçili işaretleri siler (çizim yapmıyorken). |
| {{key:Esc}} | Hiçbirini seçmez: seçimi ve denetim çizgisini temizler. |
| {{key:Mod+Z}} | Geri al. |
| {{key:Mod+Y}} ya da {{key:Mod+Shift+Z}} | Yinele. |

## Kopyalama ve yapıştırma

| Tuş | Ne yapar |
|---|---|
| {{key:Mod+C}} | Seçili işaretleri kalemleriyle birlikte kopyalar. |
| {{key:Mod+X}} | Kes: seçili işaretleri kopyalar, sonra siler. |
| {{key:Mod+V}} | Yapıştır: kopya işaretçiyi izler; gideceği yere tıklayın. |
| {{key:Mod+Shift+V}} | Olduğu yere yapıştır: açık sayfada aynı yere. |
| {{key:Mod+D}} | Seçili işaretleri çoğaltır: kopya işaretçiyi izler; gideceği yere tıklayın. |
| {{key:Esc}} | Hiçbir şey bırakmaz: işaretçide olan bir yapıştırmayı ya da çoğaltmayı iptal eder. |

Harfler tek başına yine araçları seçer ({{key:C}} {{ui:Say}}, {{key:D}} {{ui:Denetle}}, {{key:X}} {{ui:Boşluk}}, {{key:V}} {{ui:Seç}}, {{key:A}} {{ui:Alan}}); yalnızca {{key:Mod}} ile birlikte kullanıldıklarında kopyalar ve yapıştırırlar. Bir metin alanında bu tuşlar metni her zamanki gibi kopyalar ve yapıştırır. Bkz. [İşaretleri kopyalayın, yapıştırın ve çoğaltın](topic:copy-paste).

:::warning
{{key:Backspace}}, siz çizim yapmıyorken seçili işareti siler. Yanlışlıkla olursa, {{key:Mod+Z}} onu geri getirir.
:::

## Dosyalar

| Tuş | Ne yapar |
|---|---|
| {{key:Mod+O}} | {{ui:Planları aç}} |
| {{key:Mod+S}} | {{ui:Metrajı kaydet}} |

Bu ikisi bir alana yazarken bile çalışır.

## Görünüm ve sayfalar

| Tuş ya da eylem | Ne yapar |
|---|---|
| Fare tekerleği | İşaretçinin olduğu yerde yakınlaştırır ve uzaklaştırır. |
| Sürükleme (sol, orta ya da sağ düğme) | Kaydırır. {{ui:Otomatik say}} içinde sol sürükleme bunun yerine arama kutusunu çizer. |
| {{key:Space}} basılı tutup sürükleme | Her araçta kaydırır. |
| {{key:F}} | {{ui:Sayfayı sığdır}} |
| {{key:W}} | {{ui:Genişliğe sığdır}} |
| {{key:Plus}} ya da {{key:=}} | Görünümün ortasında yakınlaştırır. |
| {{key:Minus}} | Görünümün ortasında uzaklaştırır. |
| {{key:PageDown}} / {{key:PageUp}} | Sayfa listesinde sonraki ya da önceki sayfa. |
| {{key:Ctrl+Shift+F}} | Tam ekran kiplerini döngüsel değiştirir (her platformda Control, Mac'te de). |
| {{key:F1}} | Bu yardımı, kenarda bir panel olarak açar ya da kapatır. |
| {{key:3}} | Sayfanın 3B denetim görünümünü açar ya da kapatır. |

## 3B görünüm

| Tuş ya da eylem | Ne yapar |
|---|---|
| Sürükleme ya da orta düğmeyle sürükleme | Döndürür. |
| {{key:Shift}} + sürükleme ya da sağ düğmeyle sürükleme | Kaydırır. |
| Fare tekerleği | İşaretçinin olduğu yerde yakınlaştırır. Dokunmatik yüzeyde iki parmakla kaydırma döndürür, çimdikleme yakınlaştırır. |
| Tıklama | İşaretçinin altındaki işareti seçer ({{key:Shift}} + tıklama ekler ya da çıkarır). |
| {{key:F}} ya da {{key:W}} | Sınırlara yakınlaştırır. |
| {{key:3}} | Düz sayfaya döner. |

Bkz. [Metrajı 3B'de denetleyin](topic:check-in-3d).

## Otomatik say

| Tuş ya da eylem | Ne yapar |
|---|---|
| Bir kutu sürükleyin | Aranacak sembolü kutuya alır (aramayı başlatır). |
| Eşleşen kutuya tıklama | Onu reddeder ya da geri yükler. |
| {{key:Esc}} | Çalışan aramayı iptal eder ya da incelemeyi atar. |

## Yardım

| Tuş | Ne yapar |
|---|---|
| {{key:F1}} | Yardım panelini açar ya da kapatır (uygulama çubuğundaki {{ui:Yardım}} düğmesi de aynı işi görür). Her araçta, bir alana yazarken bile çalışır. |
| {{key:Esc}} | Yardım panelini kapatır. Arama kutusunda ilk Esc aramayı temizler. Panel açıkken, sayfaya tıkladıktan sonra basılan Esc önce paneli kapatır; TakeoffCraft'ta iptal etmek için yeniden basın. |

:::mac
Birçok Mac klavyesinde üst sıra parlaklık ve ses denetler. {{key:F1}} ile birlikte fn tuşuna basın ya da Sistem Ayarları'nda, Klavye altında "Use F1, F2, etc. keys as standard function keys" seçeneğini açın.
:::

## İletişim kutuları ve alanlar

| Tuş | Ne yapar |
|---|---|
| {{key:Enter}} | Bir alanda: değeri uygular. Kalibre iletişim kutusunda: {{ui:Ölçeği ayarla}}. |
| {{key:Esc}} | Bir iletişim kutusunu kapatır ({{ui:İptal}} gibi); {{ui:Yeni kalem}} formunu kapatır. |
| {{key:Tab}} | Sonraki alana geçer. |

## Platform notları

:::mac
- {{key:Mod}}, Command tuşudur: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Tam ekran istisnadır: Control+Shift+F.
- Sağ tıklama, Sistem Ayarları'nda, Trackpad altında ikincil tıklama açıldıktan sonra dokunmatik yüzeyde iki parmakla tıklamadır. TakeoffCraft yalnızca ikincil düğmeyi okur; Control-tıklama düz bir tıklama sayılıp bir nokta ekleyebilir.
- Dokunmatik yüzeyde iki parmakla kaydırma sayfayı kaydırmaz, yakınlaştırır. Kaydırmak için basılı tutup sürükleyin ya da {{key:Space}} tuşunu basılı tutup sürükleyin.
- {{key:PageUp}} ve {{key:PageDown}}, bunlara sahip olmayan klavyelerde yukarı ve aşağı ok tuşlarıyla birlikte fn tuşudur.
- {{key:Backspace}}, delete yazılı tuştur.
:::

:::windows
- {{key:Mod}}, Ctrl'dir: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Dizüstü bilgisayarın dokunmatik yüzeyinde iki parmakla kaydırma sayfayı yakınlaştırır. Kaydırmak için basılı tutup sürükleyin.
:::

:::linux
- {{key:Mod}}, Ctrl'dir. Bazı masaüstleri kendi Ctrl+Alt ya da Super kısayollarını kullanır; TakeoffCraft bunların hiçbirini kullanmaz.
- Dokunmatik yüzeyde iki parmakla kaydırma sayfayı yakınlaştırır. Kaydırmak için basılı tutup sürükleyin.
:::

:::touch
TakeoffCraft dokunmayı tek bir işaretçi olarak okur:

- Dokunma bir nokta yerleştirir, bir işareti seçer ya da bir say noktası ekler.
- Tek parmakla sürükleme sayfayı kaydırır ({{ui:Otomatik say}} içinde arama kutusunu çizer).
- Çimdikleyerek yakınlaştırma henüz desteklenmiyor. {{ui:Sayfayı sığdır}} ve {{ui:Genişliğe sığdır}} düğmelerini ya da klavyede {{key:Plus}} ve {{key:Minus}} tuşlarını kullanın.
- Bir alanı kapatmak için ilk noktasına dokunun. Bir koşuyu bitirmek için, tarayıcınızın çift dokunmayı çift tıklamaya çevirdiği yerde çift dokunun ya da klavyede {{key:Enter}} tuşuna basın.
- Dokunana kadar anlık uzunluk göstergesi yoktur, çünkü üzerine gelme (hover) yoktur.

Bugün metraj yapmanın daha iyi yolu klavye ve fare ya da dokunmatik yüzeydir.
:::

## Tarayıcının tuttuğu tuşlar

Tarayıcılar bazı kısayolları kendilerine ayırır; sayfa bunları kullanamaz: sekmeyi kapatma ({{key:Mod+W}}), yeni sekme ya da pencere ({{key:Mod+T}}, {{key:Mod+N}}) ve tarayıcı yakınlaştırması ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Bu yüzden TakeoffCraft sayfayı tekerlekle ve çıplak {{key:Plus}} ile {{key:Minus}} tuşlarıyla yakınlaştırır. Yanlışlıkla {{key:Mod+Plus}} basarsanız tüm sayfa büyür; {{key:Mod+0}} onu eski haline getirir. Bkz. [Tuşlar, fareler ve dokunmatik yüzeyler](common:keys).

## Taşı komutunun yeri

Taşı komutu yoktur: bir say noktasını seçip sürükleyin ya da bir alanı ya da çizgiyi seçip köşe tutamaçlarını sürükleyin.
