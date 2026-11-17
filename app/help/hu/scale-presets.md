---
title: Méretarány-előbeállítások
summary: Az Előbeállítás listában szereplő minden előbeállítás – építészeti, mérnöki és metrikus –, és az, hogy mit feltételez a PDF-ről.
keywords: méretarány, előbeállítások, építészeti méretarány, mérnöki méretarány, metrikus méretarány, arány, 1/4 hüvelyk, 1/8 hüvelyk, 1:100, teljes méret
from: 31ac0000
---

A {{ui:Méretarány}} csoport {{ui:Előbeállítás}} listája 32 méretarányt tartalmaz három csoportban. Az előbeállítás pontosan beállítja a megnyitott lap méretarányát.

Minden előbeállítás azt feltételezi, hogy a PDF-oldal a rajz valódi papírmérete: a PDF-oldalon egy hüvelyk egy hüvelyk papírnak felel meg (a PDF-oldalak hüvelykenként 72 pontból állnak). Ha a PDF-et átméretezték, használja a {{ui:Kalibrálás}} eszközt. Bármilyen méretarány beállítása után használja az {{ui:Ellenőrzés}} eszközt. Lásd: [A méretarány beállítása](topic:set-the-scale).

## Építészeti

| Előbeállítás | Egy papírhüvelyk |
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

## Mérnöki

| Előbeállítás | Egy papírhüvelyk |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Metrikus

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

A metrikus arány azt jelenti, hogy a papíron egy egység ennyi egységnek felel meg a valóságban: `1:100`-nál a lapon 10 mm 1 m-nek felel meg.

## Kalibrált méretarányok

A kalibrált méretarány a lap alatti sávban így jelenik meg: „Kalibrált 1” = 4.002' (24'-6""-en)”: valós láb papírhüvelykenként, és a beírt távolság. Ha 0,5%-on belül van egy előbeállítástól, a sáv hozzáfűzi: „(megegyezik: 1/4" = 1'-0")”, a lapok listája pedig az előbeállítás nevét mutatja.

## Szokatlan PDF-ek

Egyes PDF-ek nagyobb oldalegységet deklarálnak (ún. „user unit”); a TakeoffCraft ezt figyelembe veszi az előbeállításoknál és a megjelenített méretaránynál. A PDF-ben elforgatott oldalakat ugyanúgy mérik, mint az egyenes állásúakat.
