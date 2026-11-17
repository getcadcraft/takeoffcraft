---
title: Maßstabsvoreinstellungen
summary: Jede Voreinstellung in der Liste Voreinstellung — architektonisch, Ingenieur und metrisch — und was sie über das PDF voraussetzt.
keywords: Maßstab, Voreinstellungen, Architekturmaßstab, Ingenieurmaßstab, metrischer Maßstab, Verhältnis, 1/4 Zoll, 1/8 Zoll, 1:100, Originalgröße
from: 31ac0000
---

Die Liste {{ui:Voreinstellung}} in der Gruppe {{ui:Maßstab}} enthält 32 Maßstäbe in drei Gruppen. Eine Voreinstellung setzt den Maßstab des geöffneten Blatts genau.

Jede Voreinstellung setzt voraus, dass die PDF-Seite die reale Papiergröße der Zeichnung hat: Ein Zoll auf der PDF-Seite ist ein Zoll Papier (PDF-Seiten messen 72 Punkte je Zoll). Wurde das PDF skaliert, verwenden Sie {{ui:Kalibrieren}}. Verwenden Sie {{ui:Prüfen}} nach dem Festlegen eines Maßstabs. Siehe [Maßstab festlegen](topic:set-the-scale).

## Architektur

| Voreinstellung | Ein Zoll Papier entspricht |
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

## Ingenieur

| Voreinstellung | Ein Zoll Papier entspricht |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Metrisch

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

Ein metrisches Verhältnis bedeutet, dass eine Einheit auf dem Papier so vielen Einheiten in der Wirklichkeit entspricht: Bei `1:100` entsprechen 10 mm auf der Seite 1 m.

## Kalibrierte Maßstäbe

Ein kalibrierter Maßstab wird in der Leiste unter dem Blatt als „Kalibriert 1“ = 4.002' auf 24'-6"" angezeigt: reale Fuß je Zoll Papier und die Strecke, die Sie eingegeben haben. Liegt er innerhalb von 0.5 % einer Voreinstellung, ergänzt die Leiste „(passt zu 1/4" = 1'-0")“, und die Blattliste zeigt den Namen der Voreinstellung.

## Ungewöhnliche PDFs

Manche PDFs deklarieren eine größere Seiteneinheit (eine „user unit“). TakeoffCraft berücksichtigt sie bei den Voreinstellungen und beim angezeigten Maßstab. Im PDF gedrehte Seiten werden genauso gemessen wie aufrechte.
