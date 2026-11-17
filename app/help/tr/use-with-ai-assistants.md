---
title: TakeoffCraft'ı bir yapay zekâ asistanıyla kullanın
summary: Kendi yapay zekâ asistanınızın ya da betiğinizin metrajın miktarlarını ve keşfini okumasına, bir DWG ya da DXF üzerinde kalem ve işaret eklemesine, sayıp ölçmesine ve dışa aktarmasına izin verin. İzinler, CadCraft Studio üzerinden bağlantı ve etkinlik günlüğü.
keywords: yapay zekâ, asistan, ajan, mcp, model context protocol, betik, otomasyon, miktarlar, keşif, izinler, bağlantıyı kes, etkinlik
from: 7fa62ec6
---

## Neler öğreneceksiniz

Bir yapay zekâ asistanının (ya da yazdığınız bir betiğin) TakeoffCraft ile nasıl çalışacağını ve neleri değiştirebileceğine nasıl karar vereceğinizi öğrenin.

TakeoffCraft'ın **kendi yapay zekâsı yoktur** ve hiçbir yere bir şey göndermez. Asistanı siz getirirsiniz: Model Context Protocol (MCP) destekleyen herhangi bir program. TakeoffCraft ona yalnızca araçlar sunar; hangilerini vereceğinize siz karar verirsiniz.

## Açın

1. {{ui:Settings}} penceresini açın (uygulama çubuğundaki dişli simge ya da {{key:Mod+,}}) ve {{ui:TakeoffCraft}} sekmesine gidin.
2. {{ui:Assistants}} altında **Yapay zekâ asistanlarının ve betiklerin TakeoffCraft'ı kullanmasına izin ver** kutusunu işaretleyin. Siz yapana kadar kapalıdır.
3. Neler yapabileceğini seçin: **Oku** başlangıçta işaretlidir; **Düzenle**, **Kaydet** ya da **Dışa aktar** seçeneklerini yalnızca ihtiyacınız olduğunda işaretleyin.

İşaretlemediğiniz izinlerin dışındaki araçlar asistana sunulmaz. Asistan yine de birini isterse TakeoffCraft bunu reddeder ve etkinlik günlüğüne yazar. Anahtarı kapatmak bütün bağlantıları hemen sonlandırır; {{ui:Reset TakeoffCraft settings}} de onu kapatır.

## Asistanınızı bağlayın

Asistanlar, bilgisayarınızdaki **CadCraft Studio** üzerinden bağlanır. Studio, yalnızca bu bilgisayarın erişebildiği küçük bir sunucu çalıştırır; sunucu, her başlatıldığında Studio'nun ürettiği bir belirteçle korunur. Studio'da {{ui:Connect an assistant}} öğesini seçin ve adresi ile belirteci asistanınıza kopyalayın (Studio, yapıştırılacak tam ayarları gösterir). Belirteci asla paylaşmayın.

:::note
Bir tarayıcı sekmesi asistan için bağlantı açamaz: tarayıcıdaki uygulamalarda anahtarın bir etkisi yoktur; bilgisayarınızdaki CadCraft Studio'yu kullanana kadar.
:::

## Kontrol sizde kalır

- **Her değişiklik tek bir geri alma adımıdır** ve asistanın verdiği ad ile etiketlenir (örneğin "Asistan: …"). {{key:Mod+Z}} asistanın son değişikliğini bütün olarak geri alır.
- **Bağlı olduğunu bilirsiniz.** Uygulama çubuğundaki bir düğme, bağlıyken asistanın adını gösterir. Ne yapabileceğini görmek ya da asistanın **Bağlantıyı kes** seçeneğine tıklayın.
- **Etkinlik.** {{ui:Settings}} › {{ui:TakeoffCraft}} › {{ui:Assistants}} › {{ui:Activity}} her çağrıyı listeler: ne zaman, hangi araç, tamamlandı mı ya da reddedildi mi. {{ui:Save the log}} bir kopyasını saklar.

## Bir asistan neler isteyebilir

| Araç | İzin | Ne yapar |
|---|---|---|
| `app_info`, `sheets_list` | Oku | Açık metraj, PDF'leri ve sayfaları, her sayfanın ölçeğini ve işaretlerini |
| `items_list` | Oku | Kalemleri birimleri, birim fiyatları ve birim maliyet formülleriyle |
| `takeoff_quantities` | Oku | Kalem ya da sayfa başına miktarlar; ölçeği olmayan sayfalardaki işaretler listelenir, asla sıfır olarak sayılmaz |
| `takeoff_estimate` | Oku | TakeoffCraft'ın hesapladığı fiyatlı keşif, toplamlarıyla |
| `takeoff_export` | Dışa aktar | TakeoffCraft'ın kendi CSV ya da XLSX dışa aktarımı |
| `items_add` | Düzenle | Birimleri, birim fiyatları ve firesiyle kalem ekler |
| `marks_add` | Düzenle | Bir sayfada koşuları, alanları ve sayıları ölçer. Uzunluklar ve alanlar yalnızca ölçeği olan sayfada; ölçeksiz sayfada asla |
| `cad_sheets`, `cad_catalog`, `cad_count` | Oku | Açtığınız bir DWG ya da DXF üzerinde: sayfaları ve ölçekleri, neyin sayılabileceği (bloklar, katmanlar ve türler, metinler) ve {{ui:CAD count}} öğesinin ürettiği kesin sayımlar ([Bir çizimden say](topic:count-from-a-drawing)) |
| `cad_count_add` | Düzenle | Çizimde sayar ve bulunan her nesneye bir sayım işareti koyar, tek adımda; yeniden saymak yalnızca yenileri ekler |
| `cad_measure` | Düzenle | Bir doğrusal ya da alan kalemini çizimin kendi çizgi, yay, çoklu çizgi ve taralamalarından ölçer; {{ui:Measure drawing}} öğesinin yaptığı gibi ([Bir çizimden ölç](topic:measure-from-a-drawing)); yalnızca ölçeği olan sayfada |
| `usd_export` | Dışa aktar | Ölçeği olan bir sayfanın ölçülmüş koşularını, alanlarını ve sayılarını USD biçiminde 3D kontrol modeli olarak (`.usdz`, `.usda` ya da `.usdc`); 3D kontrol görünümünde {{ui:USD package (.usdz)}} öğesinin yazdığı gibi ([3D kontrol görünümünü USD olarak dışa aktar](topic:usd)) |

**Düzenle** işaretliyken bir asistan kalem ve işaret ekler (her çağrı tek bir geri alma adımıdır). Zaten var olan işaretleri taşıyamaz, değiştiremez ya da silemez.

Aynı miktarlar ve keşif, TakeoffCraft açmadan da kullanılabilir: CadCraft MCP sunucusu, adını verdiğiniz bir klasördeki bir `.takeoff.json` dosyasını açar (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`) ve `cadcraft info Job.takeoff.json` bunları komut satırına yazdırır. Ayrıca bir DWG ya da DXF'i sayfalarında yeni bir metraj olarak açar (TakeoffCraft'ın ölçeklediği gibi çizimden ölçeklenmiş), aynı `cad_*` araçlarıyla sayar ve ölçer, kalem ekler ve metrajı kaydeder (`takeoff_save`). `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` komutu komut satırından sayar.

## Bir sorun olursa

- **Asistan hiçbir TakeoffCraft aracını görmüyor:** bu pencerede anahtarın açık olduğunu ve pencerenin Studio'da açık olduğunu kontrol edin.
- **"dışa aktarma iznine ihtiyacı var":** {{ui:Assistants}} altında **Dışa aktar** seçeneğini işaretleyin, sonra yeniden isteyin.
- **"401" ya da "token" hataları:** belirteç değişti (Studio yeniden başlatıldı ya da {{ui:New token}} kullanıldı). Yeni belirteci asistanın ayarlarına kopyalayın.

## Ayrıca bakın

- [Yapay zekâ asistanları için tarifler](common:assistants-recipes): her biri kullandığı araçlarla birlikte çalışılmış örnekler.
