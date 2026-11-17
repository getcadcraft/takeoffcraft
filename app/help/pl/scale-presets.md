---
title: Gotowe skale
summary: Każda skala z listy Gotowa skala — architektoniczne, inżynierskie i metryczne — oraz co każda z nich zakłada o PDF-ie.
keywords: skala, gotowe skale, skala architektoniczna, skala inżynierska, skala metryczna, proporcja, 1/4 cala, 1/8 cala, 1:100, pełny rozmiar
from: 31ac0000
---

Lista {{ui:Preset}} w grupie {{ui:Scale}} zawiera 32 skale w trzech grupach. Gotowa skala ustawia skalę otwartego arkusza dokładnie.

Każda gotowa skala zakłada, że strona PDF ma rzeczywisty rozmiar papieru rysunku: jeden cal na stronie PDF to jeden cal papieru (strony PDF mają 72 punkty na cal). Jeśli PDF został przeskalowany, użyj {{ui:Calibrate}}. Po ustawieniu dowolnej skali użyj {{ui:Check}}. Zobacz [Ustawianie skali](topic:set-the-scale).

## Architektoniczne

| Gotowa skala | Jeden cal papieru to |
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

## Inżynierskie

| Gotowa skala | Jeden cal papieru to |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Metryczne

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

Proporcja metryczna oznacza, że jedna jednostka na papierze to tyle samo jednostek w rzeczywistości: przy `1:100` 10 mm na stronie to 1 m.

## Skale skalibrowane

Skala skalibrowana pojawia się w pasku pod arkuszem jako „Skalibrowana 1" = 4.002' na 24'-6"": rzeczywiste stopy na cal papieru oraz odległość, którą wpisałeś. Gdy mieści się w 0.5% gotowej skali, pasek dodaje „(zgodna z 1/4" = 1'-0")”, a lista arkuszy pokazuje nazwę gotowej skali.

## Nietypowe PDF-y

Niektóre PDF-y deklarują większą jednostkę strony (jednostkę użytkownika, „user unit”); TakeoffCraft uwzględnia ją przy gotowych skalach i pokazywanej skali. Strony obrócone w PDF-ie są mierzone tak samo jak strony ustawione pionowo.
