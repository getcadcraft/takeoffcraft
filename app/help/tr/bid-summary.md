---
title: Teklif özeti ve teklif
summary: Tahmine işçilik yükü, satış vergisi, genel gider, kâr ve teminat ekleyin; kapsamı ve hariç tutulanları yazın ve göndermek için bir teklif PDF'i indirin.
keywords: teklif, işçilik yükü, yük, bordro, teklif belgesi, genel gider, kâr, kâr oranı, marj, satış vergisi, teminat, dahil olanlar, hariç tutulanlar, şartlar, imza, müşteri, fiyat
from: 3208a561
---

Tahmin, metrajını çıkardığınız şeyi fiyatlandırır. **Teklif özeti** bunu bir fiyata çevirir: satış vergisi, genel gider, kâr ve teminat ekler ve dahil ve hariç tutulan kalemlerinizle bir **teklif PDF'i** oluşturur.

{{ui:Dışa aktar}} › {{ui:Teklif özeti ve teklif…}} seçeneğinden açın. İçindeki her şey metrajla birlikte kaydedilir ve her değişiklik geri alınabilir.

## Kâr oranları

Beş oranın herhangi birine yüzde yazın (diğerlerini 0 bırakın). Sırayla hesaplanırlar; her biri kendisinin üstündekiler üzerinden:

| Satır | Şöyle hesaplanır |
|---|---|
| Malzeme, işçilik | Tahminin toplamları (metrajda [alternatifler](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts) varsa temel teklif). |
| İşçilik yükü | Yük % × işçilik: ekiplerinizin ücretleri üzerindeki bordro vergileri, sigorta ve yan haklar. |
| **Maliyet** | Malzeme + işçilik + işçilik yükü. |
| Malzeme üzerinden satış vergisi | Vergi % × malzeme. |
| Genel gider | Genel gider % × (maliyet + vergi). |
| Kâr | Kâr % × (maliyet + vergi + genel gider). |
| Teminat | Teminat % × yukarıdaki her şey. |
| **Teklif** | Satırların toplamı. |

Her satır kuruşa yuvarlanır. Çalışma kitabı aynı satırları Keşif çalışma sayfasının toplamının altında canlı formüllerle gösterir. Özet yazdıkça güncellenir: {{key:Enter}} yüzdeyi uygular. Her alternatif, kendi maliyeti üzerinde aynı kâr oranlarıyla gösterilir; böylece sahibi onu gerçekten neyin değiştirdiğini görür.

## Teklif belgesi

Teklif belgesinin ne söylemesi gerektiğini doldurun:

- **Proje** (boşsa metrajın adı), **Kime** (müşteri) ve **Kimden** (şirketiniz).
- **Dahil olanlar** ve **Hariç tutulanlar**: her satıra bir tane; başta bir tire ya da madde işareti olması sorun değil.
- **Şartlar**: serbest metin, örneğin "30 gün geçerlidir."
- **Kalemleri ve miktarları listele**: kapsam, kalem kalem, miktarlarla ve fiyatsız. Göçük (götürü) bir teklif için işaretini kaldırın.

{{ui:Teklif PDF'i}} seçeneğini seçin. PDF (`<takeoff> - proposal.pdf`) tarihi, her kâr oranı ve teklifle birlikte fiyat bloğunu, alternatifleri, kapsamı, dahil ve hariç tutulanları, şartları ve imzalanacak ve tarihlendirilecek satırları içerir. Bazı miktarlar ölçülemediyse (ölçeksiz bir sayfa), bunu fiyatın altında söyler.

## Dışa aktarmalarda

Metrajın bir teklif özeti olduğunda CSV onunla biter ve çalışma kitabına **Teklif özeti** sayfası eklenir: her satır, yüzdesi ve tutarıyla. Bkz. [Keşfi dışa aktarma](topic:export-estimate).
