---
title: Kolonat e eksportit
summary: Çdo fletë dhe kolonë e eksportit XLSX dhe CSV, me formulat që mban fleta e Preventivit.
keywords: eksport, kolona, xlsx, csv, fletë pune, fletë preventivi, sipas fletës, shenja, shkallë, formula, fusha
from: fed07851
---

## Preventivi (fleta XLSX dhe CSV)

Një rresht për artikull, pastaj një rresht për çdo përbërës të montimit të tij (me zhvendosje). Pastaj një rresht bosh dhe totali i punës.

| Kolona | Përmbajtja | Në XLSX |
|---|---|---|
| A Artikulli | Emri i artikullit (me shkronja të trasha) ose emri i përbërësit (me zhvendosje) | Tekst |
| B Lloji | Lineare, Sipërfaqe, Numërim ose Përbërës | Tekst |
| C Njësia | LF, m, SF, SY, m², EA, ose njësia e përbërësit | Tekst |
| D Sasia | Totali i matur, ose rezultati i formulës | Numër |
| E Humbja % | Humbja | Përqindje (0.10 = 10%) |
| F Sasia me humbje | Sasia × (1 + humbja) | Formula `D*(1+E)` |
| G Materiali për njësi | Tarifa e materialit | Numër |
| H Puna për njësi | Tarifa e punës | Numër |
| I Materiali | Materiali i zgjeruar | Formula `ROUND(F*G,2)` |
| J Puna | Puna e zgjeruar | Formula `ROUND(F*H,2)` |
| K Totali | Materiali + puna | Formula `I+J` |
| L Shënime | Formula e përdorur, gabimi i formulës, shenjat te fletët pa shkallë, sipërfaqja e murit, perimetri | Tekst |

Rreshti i totalit të punës: `SUM` i kolonave I, J dhe K mbi çdo rresht më lart, dhe "Jo e plotë: shih shënimet më sipër" te Shënimet kur diçka është lënë jashtë.

Një rresht me gabim formule nuk ka sasi ose shuma; shënimi i tij e jep gabimin. Rreshti i kokës është i ngrirë.

Në CSV, të njëjtat kolona mbajnë vlera të thjeshta; Humbja % është një numër përqindjeje (10 për 10%), dhe paratë janë në dollarë me dy decimale. Teksti që një fletëllogaritëse mund ta marrë për formulë (që fillon me `=`, `+`, `-` ose `@`) merr një `'` në fillim, që të mbetet tekst.

## Sipas fletës (vetëm XLSX)

| Kolona | Përmbajtja |
|---|---|
| Fleta | Emri i fletës (me emrin e PDF-së kur nuk është e hapur) |
| Artikulli | Emri i artikullit |
| Sasia | Sasia e atij artikulli në atë fletë, në njësinë e tij |
| Njësia | Njësia e artikullit |
| Shenjat | Numri i shenjave |

## Shenjat (vetëm XLSX)

Një rresht për shenjë.

| Kolona | Përmbajtja |
|---|---|
| Fleta | Emri i fletës |
| Artikulli | Emri i artikullit |
| Lloji | Lineare, Sipërfaqe ose Numërim |
| Sasia | Gjatësia, sipërfaqja neto, ose 1 |
| Njësia | LF ose m; SF, SY ose m²; EA |
| Detaji | Lineare: gjatësitë e segmenteve, ato të zbritura të shënuara "(zbritet)", dhe "zbriten (gjatësi) nga (gjatësi) të vizatuara". Sipërfaqe: sipërfaqet bruto dhe të prera kur ka prerje, dhe perimetri. "Fleta nuk ka shkallë" për shenjat pa shkallë. |
| Zona e ofertës | Vetëm kur llogaritja ka zona oferte: sipërfaqja e shenjës, ose "Pa zonë oferte" |

## Sipas zonës së ofertës (vetëm XLSX, kur llogaritja ka zona oferte)

| Kolona | Çfarë është |
|---|---|
| Zona e ofertës | Emri i zonës, ose "Pa zonë oferte" |
| Artikulli | Artikulli, ose një përbërës me zhvendosje nën të |
| Njësia | Njësia e artikullit ose e përbërësit |
| Sasia | E matur në atë zonë (përbërësit: formula mbi totalet e zonës) |
| Sasia me humbje | Sasia × (1 + humbja) |
| Materiali, Puna, Totali | Të zgjeruara deri në cent, si te Preventivi |
| Shënime | Formula, gabimet dhe shenjat pa shkallë, si te Preventivi |

Çdo zonë mbyllet me një rresht "(emri) nëntotali", kostot e të cilit janë formula `SUM` mbi rreshtat e saj; rreshti i fundit, **Të gjitha zonat e ofertës**, mbledh nëntotalet. Fleta **Shenjat** ka atëherë një kolonë të shtatë, **Zona e ofertës**.

## Shkallët (vetëm XLSX)

Një rresht për çdo fletë që ka shkallë ose shenja.

| Kolona | Përmbajtja |
|---|---|
| Fleta | Emri i fletës |
| Shkalla | Emri i paracaktimit, shkalla e kalibruar, ose "Pa shkallë" |
| Si | "Paracaktuar", ose "Kalibruar mbi (distanca që shkrove)" |
| Këmbë për njësi PDF | Faktori i saktë i shkallës që përdor TakeoffCraft |

## Emrat e skedarëve

- `(name).xlsx` dhe `(name).csv`, ku emri vjen nga PDF-ja e parë e hapur në llogaritje.
- CSV është UTF-8 me shenjë të renditjes së bajtëve (BOM) dhe fund rreshti të Windows, që programet e fletëllogaritjes në çdo platformë e lexojnë.
