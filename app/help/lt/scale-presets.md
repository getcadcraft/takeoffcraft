---
title: Iš anksto nustatyti masteliai
summary: Kiekvienas mastelis sąraše Iš anksto nustatytas – architektūrinis, inžinerinis ir metrinis – ir ką kiekvienas iš jų daro prielaida apie PDF.
keywords: mastelis, iš anksto nustatyti mastelių nustatymai, architektūrinis mastelis, inžinerinis mastelis, metrinis mastelis, santykis, 1/4 colio, 1/8 colio, 1:100, natūralus dydis
from: 31ac0000
---

Sąrašas {{ui:Preset}} grupėje {{ui:Scale}} turi 32 mastelius trijose grupėse. Išankstinis nustatymas tiksliai nustato atidaryto lapo mastelį.

Kiekvienas išankstinis nustatymas daro prielaidą, kad PDF puslapis yra tikras brėžinio popieriaus dydis: vienas colis PDF puslapyje yra vienas colis popieriuje (PDF puslapiai matuojami 72 taškais colyje). Jei PDF dydis buvo pakeistas, naudokite {{ui:Calibrate}}. Po bet kokio mastelio nustatymo naudokite {{ui:Check}}. Žr. [Nustatyti mastelį](topic:set-the-scale).

## Architektūrinis

| Nustatymas | Vienas popieriaus colis yra |
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

## Inžinerinis

| Nustatymas | Vienas popieriaus colis yra |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Metrinis

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

Metrinis santykis reiškia, kad vienas vienetas popieriuje yra tiek pat vienetų realybėje: esant `1:100`, 10 mm puslapyje yra 1 m.

## Kalibruoti masteliai

Kalibruotas mastelis juostoje po lapu rodomas kaip „Calibrated 1“ = 4.002' prie 24'-6"": realių pėdų vienam popieriaus coliui ir atstumas, kurį įvedėte. Kai jis yra 0,5 % ribose nuo išankstinio nustatymo, juostoje pridedama „(matches 1/4" = 1'-0")“, o lapų sąraše rodomas išankstinio nustatymo pavadinimas.

## Neįprasti PDF

Kai kurie PDF deklaruoja didesnį puslapio vienetą („user unit“); TakeoffCraft tai atsižvelgia išankstiniams nustatymams ir rodomam mastelio dydžiui. PDF pasukti puslapiai matuojami taip pat kaip stačiai stovintys.
