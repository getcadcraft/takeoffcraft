---
title: Metraj başlatma ve plan takımı açma
summary: Bir ya da birkaç PDF'yi plan takımı olarak açın, sayfalarda yolunuzu bulun ve aralarında geçiş yapın.
keywords: aç, plan takımı, birden fazla pdf, çoklu dosya, sayfalar, çizimler, sayfa etiketleri, sayfa listesi, gezinme, bırakma, devir, başka uygulamada aç, işaretleme
from: ed434468
---

Bir plan takımı genellikle birden fazla PDF'dir: mimari, statik, mekanik. TakeoffCraft bunları yan yana tek bir sayfa listesi olarak açar ve tek bir metraj hepsini kapsayabilir.

## PDF'leri açın

1. {{ui:Dosya}} grubunda {{ui:Planları aç}} seçeneğini seçin ya da {{key:Mod+O}} tuşuna basın. (Diğer menü stilleri buna {{ui:PDF'leri aç…}} der.)
2. Dosya iletişim kutusunda takımın her PDF'ini seçin. Birden fazla seçmek için {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} tuşunu basılı tutun ya da bir aralık seçmek için {{key:Shift}} tuşunu kullanın.
3. Aç'ı seçin.
   Her dosya okunurken "(ad) açılıyor…" iletisi görünür. Ardından her sayfa {{ui:Sayfalar}} altında belirir ve ilk yeni PDF'in ilk sayfası açılır.

PDF'leri {{pick:mac=Finder|windows=Dosya Gezgini|linux=dosya yöneticiniz}} içinden sürükleyip TakeoffCraft'ın herhangi bir yerine bırakabilirsiniz. Sürüklerken "PDF, DWG ya da DXF çizimlerini veya bir .takeoff.json dosyasını bırakın" çerçevesi görünür.

Daha sonra PDF eklemek için aynısını yeniden yapın. Zaten açık olan PDF'ler atlanır.

Başlangıç ekranı, bir sayfanın bir dosyayı yeniden açmasına izin veren tarayıcılarda (Chrome ve Edge), son açtığınız PDF'leri ve metrajları da listeler. Açmak için birine tıklayın; tarayıcı önce izin isteyebilir. Bkz. [Dosyalarınız](common:your-files).

:::note
Hiçbir şey yüklenmez. Tarayıcı PDF'leri bilgisayarınızda okur ve sekmeyi kapattığınızda ya da {{ui:Yeni}} seçtiğinizde TakeoffCraft'tan kalkarlar.
:::

## Çizimler PDF'lerin yanında

{{ui:Planları aç}} DWG ve DXF çizimlerini de alır; tek başlarına ya da PDF'lerle birlikte: her çizimin model uzayı ve düzenleri aynı listede sayfa olur. Bkz. [DWG ya da DXF çizimi açma](topic:open-a-drawing), ardından [Çizimden sayma](topic:count-from-a-drawing).

## Başka uygulamadan devredilen bir PDF

Takımdaki başka bir uygulama açık tuttuğu PDF'i size devredebilir: TakeoffCraft'ı yeni bir sekmede açar ve PDF, oraya bırakılmış gibi açılır. Durum çubuğu şunu söyler: "(ad) açıldı, (uygulama) tarafından devredildi. Özgün dosya değişmedi." Hiçbir şey yüklenmez; dosya bu tarayıcının kendi depolama alanından geçer ve açıldığında oradan silinir.

Durum çubuğu PDF için "ulaşmadı" diyorsa, sekme çok uzun bekledi ya da PDF zaten başka bir sekmede açıktı: {{ui:Planları aç}} ile açın.

Tersi yönde: MarkupCraft bulunduğunuz ortamda çalışıp bir dosya alabildiğinde, çizimin altındaki sayfa çubuğunda bir {{ui:MarkupCraft}} düğmesi bulunur: ekrandaki sayfanın PDF'ini MarkupCraft'ta, yeni bir sekmede, gözden geçirmek ve işaretlemek için açar.

## Sayfa bulun

- Soldaki {{ui:Sayfalar}} listesini kaydırın ve bir sayfaya tıklayın.
- Listenin üstündeki **Sayfaları ara** alanına yazarak sayfa numarasına, dosya adına ya da sayfa etiketine göre filtreleyin. Filtre açıkken {{ui:Sayfalar}} yanındaki sayı "40 içinden 3" gösterir.
- Sonraki sayfa için {{key:PageDown}}, önceki için {{key:PageUp}} tuşuna basın. Filtrelenmiş listeyi izlerler.

:::mac
Page Up ve Page Down tuşları olmayan bir Mac klavyesinde, yukarı ya da aşağı ok ile birlikte fn tuşuna basın.
:::

## Sayfalar nasıl adlandırılır

- PDF'in bir etiket verdiği sayfa, `A-101` gibi, bu etiketle adlandırılır.
- Etiketi olmayan (ya da yalnızca sayfa numarası olan bir etiket) sayfa "(dosya adı), sayfa (n)" olarak adlandırılır.
- Birden fazla PDF açıkken, etiketli sayfalar dosya adını da taşır: "A-101 — Mimari".

Sayfa adları henüz elle yazılamaz.

## Bir sayfada gezinme

- Fare tekerleğini çevirerek imlecin olduğu yerde yakınlaştırın.
- Sol ya da orta düğmeyle sürükleyerek kaydırın. {{ui:Otomatik say}} açıkken ya da bir işaretin köşesinden başlarken, sürüklerken {{key:Space}} tuşunu basılı tutun ya da orta düğmeyle sürükleyin.
- Tüm sayfayı görmek için {{key:F}} tuşuna basın ya da {{ui:Sayfayı sığdır}} seçin; {{key:W}} ya da {{ui:Genişliğe sığdır}} genişliğini sığdırır.
- Yakınlaştırmak için {{key:Plus}} ya da {{key:=}}, uzaklaştırmak için {{key:Minus}} tuşuna basın; görünümün ortası esas alınır.

Her sayfa, açık kaldığı sürece kendi yakınlaştırmasını ve konumunu hatırlar.

## Sonraki

Bir sayfayı ölçmeden önce ölçeğe ihtiyacı vardır: [Ölçeği ayarlama](topic:set-the-scale).
