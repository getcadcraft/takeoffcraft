---
title: Birimler
summary: Bir kalemin bildirebileceği birimler, formül değişkenlerinin kullandığı birimler ve İngiliz ile metrik birimlerin nasıl karıştığı.
keywords: birimler, lf, sf, sy, sq, kare yard, çatı kareleri, akre, hektar, metre, metrekare, ea, her biri, metrik, İngiliz birimleri, dönüşüm, varsayılan birim
from: b7bf0528
---

## Kalem birimleri

| Kalem türü | Birim | Ad |
|---|---|---|
| Doğrusal | LF | doğrusal fit (varsayılan) |
| Doğrusal | m | metre |
| Alan | SF | kare fit (varsayılan) |
| Alan | SY | kare yard |
| Alan | SQ | çatı kareleri (100 kare fit) |
| Alan | ac | akre |
| Alan | m² | metrekare |
| Alan | ha | hektar |
| Say | EA | her biri |

{{ui:Birim}} ile kalem düzenleyicisinde istediğiniz zaman değiştirin, ölçtükten sonra bile; miktar hemen dönüştürülür.

{{ui:Birim}} listesi {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Birimler}} altında açık olan birimleri ve her zaman kalemin kendi birimini gösterir. Yeni bir kalem, orada yıldızlanmış uzunluk ya da alan birimiyle başlar; bu, kalemin birimlerinden biriyse. Aksi halde LF ya da SF ile başlar. Bkz. [Birimler, yazılan değerler ve birim listeleri](common:unit-lists).

## Formül değişkenlerinin birimleri

| Kalem birimi | L, P, H | A |
|---|---|---|
| LF | fit | kare fit (duvar alanı) |
| m | metre | metrekare (duvar alanı) |
| SF | fit | kare fit |
| SY | fit | kare yard |
| SQ | fit | çatı karesi |
| ac | fit | akre |
| m² | metre | metrekare |
| ha | metre | hektar |

SY kalemleri için `A` kare yard cinsindendir, `P` ve `H` fit'te kalır. Bir SY kaleminden gelen bir hacim `A * 9 * H / 27` kübik yard eder; döşemeler için SF kullanmak daha basittir.

## Birimlerin sabit olduğu yerler

Bazı göstergeler her zaman fit kullanır:

- çizim sırasında durum çubuğundaki canlı gösterge (fit-inç, SF),
- **Seçili işaret** (fit-inç, LF ve SF),
- denetim sonucu (fit-inç, ondalık fit ve metre ile),
- elektronik tablonun İşaretler çalışma sayfasındaki parça uzunlukları ve çevreler (fit-inç).

Kalem toplamları, {{ui:Miktarlar}} tablosu, formüller ve Tahmin çalışma sayfası kalemin kendi birimini kullanır.

## Ölçekler ve birimler ayrıdır

Bir sayfanın ölçeği çizimin ne kadar büyük olduğunu söyler; bir kalemin birimi ise onu nasıl bildireceğini söyler. `1:100` ölçekli metrik bir çizim LF cinsinden metrajı alınabilir; bir İngiliz çizimi m² cinsinden alınabilir. Kalibrasyon herhangi bir birimi kabul eder: `24'-6"`, `7.5 m`, `7500 mm`.

## Hassasiyet

TakeoffCraft, tıkladığınız noktalardan tam olarak ölçer; gerçek yay uzunlukları ve alanlar dahil; miktarları yuvarlamaz. Görüntü uzunlukları 1/16 inç'e, ondalıklar iki basamağa yuvarlanır. Para yalnızca genişletilmiş tutarlarda, kuruşa kadar yuvarlanır.
