---
title: Columnes de l'exportació
summary: Tots els fulls de càlcul i columnes de l'exportació XLSX i del CSV, amb les fórmules que porta el full Estimate.
keywords: exportació, columnes, xlsx, csv, full de càlcul, pressupost, per full, marques, escales, fórmules, camps
from: fed07851
---

## Estimate (full XLSX i CSV)

Una fila per partida, seguida d'una fila per cada component del seu preu descompost (amb sagnia). Després, una fila buida i el total de l'obra.

| Columna | Contingut | Al XLSX |
|---|---|---|
| A Item | Nom de la partida (en negreta) o nom del component (amb sagnia) | Text |
| B Type | Lineal, Àrea, Recompte o Component | Text |
| C Unit | LF, m, SF, SY, m², EA, o la unitat del component | Text |
| D Quantity | Total mesurat, o resultat de la fórmula | Nombre |
| E Waste % | Pèrdua | Percentatge (0.10 = 10%) |
| F Qty with waste | Quantitat × (1 + pèrdua) | Fórmula `D*(1+E)` |
| G Material per unit | Preu unitari de material | Nombre |
| H Labor per unit | Preu unitari de mà d'obra | Nombre |
| I Material | Material estès | Fórmula `ROUND(F*G,2)` |
| J Labor | Mà d'obra estesa | Fórmula `ROUND(F*H,2)` |
| K Total | Material + mà d'obra | Fórmula `I+J` |
| L Notes | Fórmula usada, error de fórmula, marques en fulls sense escala, àrea del mur, perímetre | Text |

Fila del total de l'obra: `SUM` de les columnes I, J i K de totes les files de dalt, i "Incomplet: vegeu les notes de dalt" a Notes quan s'ha deixat alguna cosa fora.

Una fila amb error de fórmula no té quantitat ni imports; la seva nota n'indica l'error. La fila de capçalera està fixada.

Al CSV, les mateixes columnes contenen valors simples, Pèrdua % és un nombre de percentatge (10 per a 10%), i els imports són en dòlars amb dos decimals. El text que un full de càlcul podria interpretar com una fórmula (que comença amb `=`, `+`, `-` o `@`) rep una `'` al davant perquè es mantingui com a text.

## Per full (només XLSX)

| Columna | Contingut |
|---|---|
| Sheet | Nom del full (amb el nom del PDF quan no és obert) |
| Item | Nom de la partida |
| Quantity | La quantitat d'aquella partida en aquell full, en la seva unitat |
| Unit | La unitat de la partida |
| Marks | Nombre de marques |

## Marques (només XLSX)

Una fila per marca.

| Columna | Contingut |
|---|---|
| Sheet | Nom del full |
| Item | Nom de la partida |
| Type | Lineal, Àrea o Recompte |
| Quantity | Longitud, àrea neta, o 1 |
| Unit | LF o m; SF, SY o m²; EA |
| Detail | Lineal: les longituds dels segments, les deduïdes marcades com "(deduct)", i "deducts (length) of (length) drawn". Àrea: àrees brutes i dels retalls quan n'hi ha, i el perímetre. "Sheet has no scale" per a les marques sense escala. |
| Bid area | Només quan l'amidament té àrees d'oferta: l'àrea de la marca, o "No bid area" |

## Per àrea d'oferta (només XLSX, quan l'amidament té àrees d'oferta)

| Columna | Contingut |
|---|---|
| Bid area | El nom de l'àrea, o "No bid area" |
| Item | La partida, o un component amb sagnia sota seu |
| Unit | La unitat de la partida o del component |
| Quantity | Mesurada en aquella àrea (components: la fórmula sobre els totals de l'àrea) |
| Qty with waste | Quantitat × (1 + pèrdua) |
| Material, Labor, Total | Estesos fins al cèntim, com a Estimate |
| Notes | Fórmula, errors i marques sense escala, com a Estimate |

Cada àrea acaba amb una fila "(name) subtotal" els costos de la qual són fórmules `SUM` sobre les seves files; l'última fila, **All bid areas**, suma els subtotals. El full **Marks** té llavors una setena columna, **Bid area**.

## Escales (només XLSX)

Una fila per cada full que té escala o marques.

| Columna | Contingut |
|---|---|
| Sheet | Nom del full |
| Scale | El nom de la predefinició, o l'escala calibrada, o "No scale" |
| How | "Preset", o "Calibrated on (the distance you typed)" |
| Feet per PDF unit | El factor d'escala exacte que utilitza TakeoffCraft |

## Noms de fitxer

- `(name).xlsx` i `(name).csv`, on el nom surt del primer PDF obert a l'amidament.
- El CSV és UTF-8 amb marca d'ordre de bytes i finals de línia de Windows, que els programes de fulls de càlcul de totes les plataformes llegeixen.
