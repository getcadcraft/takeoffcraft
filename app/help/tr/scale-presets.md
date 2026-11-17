---
title: Ölçek hazır ayarları
summary: Hazır ayar listesindeki her ön ayar (mimari, mühendislik ve metrik) ve her birinin PDF hakkında ne varsaydığı.
keywords: ölçek, hazır ayarlar, mimari ölçek, mühendislik ölçeği, metrik ölçek, oran, 1/4 inç, 1/8 inç, 1:100, tam boy
from: 31ac0000
---

{{ui:Scale}} grubundaki {{ui:Preset}} listesinde üç grupta 32 ölçek vardır. Bir hazır ayar, açık sayfanın ölçeğini tam olarak ayarlar.

Her hazır ayar, PDF sayfasının çizimin gerçek kâğıt boyutu olduğunu varsayar: PDF sayfasında bir inç, kâğıtta da bir inçtir (PDF sayfaları inç başına 72 nokta ölçer). PDF yeniden boyutlandırıldıysa {{ui:Calibrate}} kullanın. Herhangi bir ölçek ayarladıktan sonra {{ui:Check}} kullanın. Bkz. [Ölçeği ayarla](topic:set-the-scale).

## Mimari

| Hazır ayar | Kâğıtta bir inç |
|---|---|
| `1/16" = 1'-0"` | 16 ft |
| `3/32" = 1'-0"` | 10 ft 8 in |
| `1/8" = 1'-0"` | 8 ft |
| `3/16" = 1'-0"` | 5 ft 4 in |
| `1/4" = 1'-0"` | 4 ft |
| `3/8" = 1'-0"` | 2 ft 8 in |
| `1/2" = 1'-0"` | 2 ft |
| `3/4" = 1'-0"` | 1 ft 4 in |
| `1" = 1'-0"` | 1 ft |
| `1 1/2" = 1'-0"` | 8 in |
| `3" = 1'-0"` | 4 in |

## Mühendislik

| Hazır ayar | Kâğıtta bir inç |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Metrik

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

Metrik bir oran, kâğıttaki bir birimin gerçekte bu kadar birim olduğu anlamına gelir: `1:100`'de sayfadaki 10 mm, 1 m'dir.

## Kalibre edilmiş ölçekler

Kalibre edilmiş bir ölçek, sayfanın altındaki çubukta "Kalibre edilmiş 1" = 4.002' (24'-6"" üzerinde)" olarak görünür: kâğıt inci başına gerçek fit ve yazdığınız mesafe. Bir hazır ayara %0.5 yakınsa, çubuğa "(1/4" = 1'-0" ile eşleşir)" eklenir ve sayfalar listesi hazır ayarın adını gösterir.

## Olağandışı PDF'ler

Bazı PDF'ler daha büyük bir sayfa birimi tanımlar (bir "kullanıcı birimi"); TakeoffCraft bunu hazır ayarlar ve gösterilen ölçek için dikkate alır. PDF içinde döndürülmüş sayfalar, dik olanlarla aynı şekilde ölçülür.
