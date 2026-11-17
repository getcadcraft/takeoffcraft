---
title: Çizimin çizgilerine yakala
summary: Ölçerken ya da kalibre ederken noktalar PDF'in kendi çizgilerine atlar: uç noktalar, orta noktalar, kesişimler ya da bir çizgi üzerindeki herhangi bir yer; hangisi olduğunu gösteren bir işaretle.
keywords: yakalama, nesne yakalama, osnap, uç nokta, orta nokta, kesişim, en yakın, vektör, çizgi çalışması, çizgiler, hassas, tam, f3, mıknatıs, köşe
from: 41d29e9b
---

Çoğu plan takımı vektör PDF'tir: duvarları ve kenarları piksel değil, gerçek çizgilerdir. Ölçüm yaparken TakeoffCraft tıklamalarınızı bu çizgilere yakalar; böylece bir güzergâh tam bir duvarın köşesinden başlar ve bir kalibrasyon, isabet ettiğiniz pikselin değil çizimcinin çizdiği ölçüyü okur.

Yakala, başladığınızda açıktır. Durum çubuğundaki {{ui:Yakala}} ya da {{key:F3}} ile açıp kapatın; ayar bu tarayıcıda saklanır (ayrıca [Ayarlar](topic:settings) altındadır).

## Neyi yakalar

İşaretçi bir çizgiye yaklaşık 10 ekran pikseli kadar geldiğinde, tıklamanın nereye düşeceğini ve adını gösteren bir işaret belirir:

| İşaret | Ad | Yer |
|---|---|---|
| Kare | **Uç nokta** | Bir çizginin ucu ya da çizgilerin birleştiği bir köşe. Bir eğrinin iki ucu sayılır; aradaki noktalar sayılmaz. |
| Üçgen | **Orta nokta** | Düz bir çizginin ortası. |
| Çarpı | **Kesişim** | İki çizginin kesiştiği yer ya da bir çizginin diğerinin üzerinde bittiği yer. |
| Kum saati | **Çizgi üzerinde** | Hiçbir uç, orta nokta ya da kesişim yakın değilse, bir çizgi üzerindeki en yakın nokta. |

En yakın uç nokta, orta nokta ya da kesişim kazanır. Yalnızca hiçbiri yakın değilse nokta çizginin kendisinin üzerine gelir. Birbirine yakın noktalar arasında seçim yapmak için yakınlaştırın: 10 piksel ekran pikselidir, dolayısıyla daha yüksek yakınlaştırmada çizimin daha az alanını kaplarlar.

## Nerede çalışır

Yakalama {{ui:Doğrusal}}, {{ui:Alan}}, {{ui:Daire}}, {{ui:Boşluk}}, {{ui:Kalibre et}} ve {{ui:Denetle}} araçlarında çalışır; seçili bir işaretin köşesini sürüklediğinizde de çalışır. Yay noktalarını da yerleştirir. {{ui:Say}}, {{ui:Otomatik say}} ve yapıştırma yakalanmaz.

Yakalanmış bir nokta, {{key:Shift}} tuşunun 45° yakalamasından önce gelir: çizgilerden uzakta 45° çizmek için önce {{key:F3}} ile Yakala'yı kapatın.

:::tip
Kalibrasyonu Yakala açıkken yapın. Bildiğiniz bir ölçü çizgisinin ya da bir duvarın iki ucuna yakın tıklayın: iki nokta da tam olarak çizime oturur ve ölçek tam çıkar (durum çubuğu eşleştiği {{ui:Hazır ayar}} adını gösterir).
:::

## Yakalayamadığı sayfalar

- **Taranmış sayfalar** yakalanacak çizgisi olmayan resimlerdir. Durum çubuğu "Bu sayfada yakalanacak çizgi yok (taranmış bir sayfa bir resimdir)." yazar ve noktalar tıkladığınız yere gider.
- **Çok büyük çizimler**: yakalama sayfa başına en fazla 400.000 çizgi parçasını okur. Daha fazlası olan bir sayfada bunu söyler ve yalnızca ilk parçalara yakalar.
- **Metin** yakalanmaz; PDF harfleri çizgi olarak çizmedikçe (bazı çizicilerin yaptığı gibi).

Bir sayfanın çizgileri ilk açtığınızda arka planda okunur; büyük bir sayfada işaretlerin görünmesi bir saniye kadar sürebilir.
