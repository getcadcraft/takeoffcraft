---
title: Jezik formul
summary: Pravila za količinske formule sestavov – spremenljivke, operatorji, funkcije, zaokroževanje in vsako sporočilo o napaki.
keywords: formula, izraz, sintaksa, funkcije, ceil, floor, round, min, max, abs, spremenljivke, operatorji, izračun
from: 4da14575
---

Komponente sestavov dobijo količino iz formule. Formula je majhen aritmetični izraz nad izmerjenimi vrednostmi postavke. Glejte [Sestavi in formule](topic:assemblies) za izdelane primere.

## Spremenljivke

| Vrsta postavke | Spremenljivka | Pomen |
|---|---|---|
| Linearna | `L` | Skupna dolžina |
| Linearna | `H` | Višina postavke |
| Linearna | `A` | Površina stene, L × H, zmanjšana za odprtine tekov, ki jih nosijo (predizmera iz BimCraft). Kadar predizmera navaja metodo merjenja, jo ta izmeri: odprtine, ne večje od najmanjše velikosti metode, ostanejo vštete, tisto, kar metoda odmeri tam, kjer se stene stikajo, pa je izpuščeno. Opomba pod postavko navaja metodo |
| Linearna | `N` | Število tekov |
| Površina | `A` | Skupna neto površina (obrisi minus izrezi) |
| Površina | `P` | Skupni obseg, vključno z robovi izrezov |
| Površina | `H` | Globina ali debelina postavke |
| Površina | `N` | Število površin |
| Štetje | `N` | Štetje |

- Spremenljivke so v enotah postavke: glejte [Enote](topic:units).
- Velike in male črke so enake: `l` je `L`.
- Delujejo samo spremenljivke lastne vrste postavke. `P` pri linearni postavki da „"P" tukaj ni izmerjena vrednost. Uporabite L, H, A, N.“
- Prazna višina ali globina je 0.

## Operatorji

| Zapišete | Pomen |
|---|---|
| `+` | Seštej |
| `-` ali `−` | Odštej ali negativna vrednost |
| `*` ali `×` | Pomnoži |
| `/` ali `÷` | Deli |
| `( )` | Združi |

Množenje in deljenje gresta pred seštevanjem in odštevanjem: `L * 2 + 4` je (L × 2) + 4. Kadar niste prepričani, uporabite oklepaje.

Števila so lahko decimalna (`1.333`, `.5`) in z eksponentom (`1e3` = 1000). Presledki se prezrejo.

## Funkcije

| Funkcija | Rezultat | Primer |
|---|---|---|
| `ceil(x)` | Zaokroži navzgor na celo število | `ceil(67.5)` = 68 |
| `floor(x)` | Zaokroži navzdol na celo število | `floor(67.5)` = 67 |
| `round(x)` | Zaokroži na najbližje celo število, polovice stran od nič | `round(2.5)` = 3 |
| `round(x, d)` | Zaokroži na d decimalk (0 do 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Najmanjša vrednost | `min(N, 10)` |
| `max(a, b, …)` | Največja vrednost | `max(1, ceil(N / 12))` |
| `abs(x)` | Vrednost brez predznaka | `abs(-3)` = 3 |

`ceil` in `floor` prezreta majhen računalniški zaokrožitveni šum, tako da se vrednost, ki bi morala biti točno 1, nikoli ne zaokroži navzgor na 2.

## Napake

Formula, ki je ni mogoče prebrati ali izračunati, prikaže napako pod poljem, komponenta pa je izpuščena iz vsot (glava {{ui:Količine}} pravi „Nepopolno“). Sporočila:

| Sporočilo | Popravek |
|---|---|
| Vpišite formulo, na primer L ali ceil(L / 1.333) + 1. | Formula je prazna. |
| „X“ tukaj ni izmerjena vrednost. Uporabite … | Uporabite eno od naštetih spremenljivk. |
| „X“ tukaj ni funkcija. Uporabite ceil, floor, round, min, max, abs. | Uporabite eno od teh funkcij. |
| „#“ v formuli ni dovoljen. | Odstranite ta znak (enote, `%`, `$` in `=` niso dovoljeni). |
| Manjka „)“. / Obstaja „)“ brez svojega „(“. | Uravnotežite oklepaje. |
| Pred „)“ manjka vrednost. | Nekaj takega kot `max(1, )`: vpišite vrednost. |
| Formula se konča prezgodaj. | Nekaj takega kot `L *`: dokončajte. |
| Nepričakovano „…“. Manjka operator? | Dve vrednosti druga ob drugi, kot `2L`: zapišite `2 * L`. |
| ceil() sprejme 1 vrednost. | Funkciji dajte pravilno število vrednosti. |
| round(x, digits) potrebuje celo število mest od 0 do 10. | Uporabite celo število decimalk. |
| Formula deli z nič. | Ponavadi je H enak 0: nastavite višino ali globino postavke. |
| Formula ne da števila. | Rezultat je prevelik, da bi bil število. |
| Ta formula je predolga (največ 500 znakov). | Skrajšajte jo. |

## Varno po zasnovi

Formula lahko izvaja samo aritmetiko s spremenljivkami in funkcijami zgoraj. Ne more zagnati kode ali brati česarkoli drugega, zato je formula v projektni datoteki, ki vam jo pošlje nekdo, neškodljiva.
