---
title: Mértékegységek
summary: Azok a mértékegységek, amelyekben egy tétel jelenthet, a képletváltozók mértékegységei, és az angolszász és metrikus egységek keveredése.
keywords: mértékegységek, lf, sf, sy, sq, négyzetyard, tetőfedési négyzetek, acre, hektár, méter, négyzetméter, ea, darabonként, metrikus, angolszász, átváltás, alapértelmezett mértékegység
from: b7bf0528
---

## Tétel mértékegységei

| Tételtípus | Mértékegység | Név |
|---|---|---|
| Vonalas | LF | lineáris láb (alapértelmezett) |
| Vonalas | m | méter |
| Terület | SF | négyzetláb (alapértelmezett) |
| Terület | SY | négyzetyard |
| Terület | SQ | tetőfedési négyzet (100 négyzetláb) |
| Terület | ac | acre |
| Terület | m² | négyzetméter |
| Terület | ha | hektár |
| Darabszám | EA | darabonként |

Ezt a {{ui:Unit}} lehetőséggel bármikor módosíthatja a tételszerkesztőben, akár mérés után is; a mennyiség azonnal átváltódik.

A {{ui:Unit}} lista azokat a mértékegységeket mutatja, amelyek a {{ui:Settings}} › {{ui:General}} › {{ui:Units}} alatt be vannak kapcsolva, és mindig a tétel saját mértékegységét. Egy új tétel az ott csillaggal jelölt hossz- vagy területi mértékegységgel indul, ha az a tétel egyik mértékegysége; egyébként LF vagy SF mértékegységgel. Lásd [Mértékegységek, beírt értékek és mértékegység-listák](common:unit-lists).

## A képletváltozók mértékegységei

| Tétel mértékegysége | L, P, H | A |
|---|---|---|
| LF | láb | négyzetláb (falfelület) |
| m | méter | négyzetméter (falfelület) |
| SF | láb | négyzetláb |
| SY | láb | négyzetyard |
| SQ | láb | négyzetek |
| ac | láb | acre |
| m² | méter | négyzetméter |
| ha | méter | hektár |

Az SY tételeknél az `A` négyzetyardban van, míg a `P` és `H` lábban marad. Egy SY tételből származó térfogat `A * 9 * H / 27` köbyard; padlóknál egyszerűbb SF-et használni.

## Ahol a mértékegységek rögzítettek

Néhány kijelző mindig lábat használ:

- a rajzolás közbeni élő kijelző a státuszsorban (láb-hüvelyk, SF),
- a **Kijelölt jel** (láb-hüvelyk, LF és SF),
- az ellenőrzés eredménye (láb-hüvelyk, tizedes láb és méter),
- a táblázatkezelő Jelek munkalapjának szakaszhosszai és kerületei (láb-hüvelyk).

A tételösszegek, a {{ui:Quantities}} táblázat, a képletek és a Költségbecslés munkalap a tétel saját mértékegységét használják.

## A lépték és a mértékegység külön van

A lap léptéke azt mondja meg, mekkora a rajz; a tétel mértékegysége pedig azt, hogyan kell jelenteni. Egy `1:100` léptékű metrikus rajz felmérhető LF-ben, egy angolszász rajz pedig m²-ben. A kalibrálás bármilyen mértékegységet elfogad: `24'-6"`, `7.5 m`, `7500 mm`.

## Pontosság

A TakeoffCraft pontosan a kattintott pontokból mér, beleértve a valódi ívhosszakat és területeket, és nem kerekíti a mennyiségeket. A megjelenítés a hosszakat 1/16 hüvelykre, a tizedeseket két tizedesjegyre kerekíti. A pénzösszegek csak a tételes végösszegeknél kerekítődnek, a cent pontosságára.
