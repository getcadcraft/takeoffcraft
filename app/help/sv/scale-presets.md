---
title: Skalförval
summary: Varje förval i listan Förval (arkitektoniska, tekniska och metriska) och vad varje förval förutsätter om PDF-filen.
keywords: skala, förval, arkitektonisk skala, teknisk skala, metrisk skala, förhållande, 1/4 tum, 1/8 tum, 1:100, fullskala
from: 31ac0000
---

Listan {{ui:Förval}} i gruppen {{ui:Skala}} har 32 skalor i tre grupper. Ett förval sätter det öppna bladets skala exakt.

Varje förval förutsätter att PDF-sidan har ritningens verkliga pappersstorlek: en tum på PDF-sidan är en tum papper (PDF-sidor mäter 72 punkter per tum). Om PDF-filen har ändrats i storlek, använd {{ui:Kalibrera}}. Använd {{ui:Kontrollera}} efter att du ställt in en skala. Se [Ange skalan](topic:set-the-scale).

## Arkitektoniska

| Förval | En tum på papper motsvarar |
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

## Tekniska

| Förval | En tum på papper motsvarar |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Metriska

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

Ett metriskt förhållande betyder att en enhet på papper motsvarar så många enheter i verkligheten: vid `1:100` är 10 mm på sidan 1 m.

## Kalibrerade skalor

En kalibrerad skala visas som "Kalibrerad 1" = 4.002' på 24'-6"" i fältet under bladet: verkliga fot per pappers-tum, och avståndet du skrev. När den ligger inom 0.5 % av ett förval lägger fältet till "(matchar 1/4" = 1'-0")" och bladlistan visar förvalets namn.

## Ovanliga PDF-filer

Vissa PDF-filer anger en större sidenhet (en användarenhet, "user unit"); TakeoffCraft tar hänsyn till den för förval och för skalan som visas. Sidor som roterats i PDF-filen mäts på samma sätt som stående sidor.
