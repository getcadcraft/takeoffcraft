---
title: Toprak işleri ve nokta kotları
summary: Bir saha planına nokta kotları işaretleyin, yüzey ile kazı ve dolgu için bunları CivilCraft'a aktarın ve burada basit kazı miktarları çıkarın.
keywords: toprak işleri, kazı, dolgu, kazı ve dolgu, tesviye, nokta kotu, kotlar, topografya, yüzey, üçgenleme, civilcraft, noktalar, pnezd, hendek
from: a898e508
---

TakeoffCraft bir sayfa üzerinde çizilenleri ölçer. Toprak işleri bir arazi yüzeyi gerektirir; bu yüzden CivilCraft ile ortak kullanılır. CivilCraft noktalardan yüzeyler oluşturur, bunları tesviye eder ve kazı, dolgu ve taşıma miktarlarını hesaplar.

## Burada basit kazı

Tek bir derinliğe kazılacak bir oturum alanı için **derinlik** değeri olan bir alan kalemi yeterlidir: hacim = alan × derinlik. Genel yüklenicinin [iş paketinde](topic:trade-packs) toplu kazı kalemi (yerinde hacim, gevşek hacim ve kamyon yükleri) ve altyapı hendeği kalemi (uzunluk ve derinliğe göre kazı, yatak ve geri dolgu) bulunur.

## CivilCraft için nokta kotları

1. Saha sayfasının ölçeğini ayarlayın.
2. "Mevcut kot" gibi bir **Say** kalemi oluşturun ve sayfadaki her nokta kotuna tıklayın.
3. Bir işaret seçin ve Seçili işaret panelinde {{ui:Kot}} değerini yazın: `102.5`, `102'-6"` veya `31.24 m`. Negatif ve sıfır kotlar kabul edilir.
4. {{ui:Dışa aktar}} menüsünü açın ve {{ui:Nokta kotları}} seçeneğini seçin. Point, Northing, Easting, Elevation ve Description sütunlarına sahip bir nokta dosyası (`.csv`) alırsınız; açık sayfadaki işaretli her nokta için bir satır bulunur.
5. Dosyayı CivilCraft'ta açın (bkz. [Noktaları içe aktarma](app:civilcraft/import-points)). Yüzeyi noktalardan oluşturur ([Yüzey oluşturma](app:civilcraft/build-surface)); buradan yüzeyleri karşılaştırır ve kazı ile dolgu değerlerini verir ([Hacimler](app:civilcraft/volumes)).

Northing ve easting, sayfanın kendi koordinatlarıdır; fit cinsinden, sayfanın köşesinden ölçeğine göre ölçülür. Noktalar arasındaki mesafeler ve hacimler doğrudur, ancak bunlar sahanızın ölçü koordinatları değildir. Gerektiğinde bunları CivilCraft'ta sahanın koordinatlarına taşıyın.

:::note
Farklı sayfalardaki noktalar koordinat paylaşmaz; bu yüzden dışa aktarım yalnızca açık sayfayı alır. Kotlar metrajla birlikte kaydedilir ve kopyalama ile yapıştırma ile taşınır.
:::

## CivilCraft'tan kazı ve dolgu

CivilCraft'ın toprak işi sonuçları, fiyatlandırabileceğiniz iki kalem olarak geri gelir:

1. CivilCraft'ta tesviye platformlarınızı ve koridorlarınızı tesviye edin, sonra **Toprak işleri** altında {{ui:TakeoffCraft'a gönder}} seçeneğini seçin ([Toprak işi hacimleri](app:civilcraft/volumes)). Bir miktar dosyası (`.quantities.json`) kaydedilir.
2. TakeoffCraft'ta {{ui:Metraj aç}} ile açın veya dosyayı uygulamaya bırakın. Metrajınız açık kalır: dosya, **Toprak işleri: kazı** ve **Toprak işleri: dolgu** kalemlerini ekler; fit cinsinden bir proje için kübik yard (CY), metre cinsinden bir proje için metreküp (m³) olarak [yazılmış miktarlar](topic:create-items#typed-quantities-no-drawing) şeklindedir. Bu tek bir adımdır: {{key:Mod+Z}} ile geri alınır.
3. Bunları yeniden adlandırın; fire, birim fiyatları ve birim maliyetleri dilediğiniz gibi ayarlayın.

Tasarım değiştiğinde CivilCraft'tan yeniden gönderin ve yeni dosyayı açın: aynı iki kalem yeni miktarları alır. Adları, birim fiyatları, fireleri ve birim maliyetleri ayarladığınız gibi kalır. Projenin birimi değiştiyse durum çubuğu bunu bildirir; birim fiyatları kontrol edin. Başka bir CivilCraft projesinden gelen bir dosya kendi iki kalemini ekler.

Miktarlar, CivilCraft'ın ızgara yöntemiyle ölçtüğü yerinde hacimlerdir: büzülme veya kabarma uygulanmamıştır. Bunları fire olarak ekleyin veya gevşek hacim için `Q * 1.25` gibi bir formül kullanın. Kalem düzenleyicisi her birinin nereden ve ne zaman geldiğini gösterir; keşfin notlar sütunu da bunu belirtir.

:::note
Miktar dosyası düz JSON'dur (`"format": "cadcraft-quantities"`); bu nedenle bir betik veya başka bir program da bir tane yazabilir: bir uygulama adı, bir proje ve anahtar, ad, birim ve miktar içeren kalemler.
:::
