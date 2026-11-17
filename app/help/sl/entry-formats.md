---
title: Vnos dolžin, cen in odstotkov
summary: Kaj lahko vpišete za razdalje, višine, denarne cene in odstotke odpadka, s primeri in sporočili za vnos, ki ga TakeoffCraft ne more prebrati.
keywords: vnos, oblika, čevlji in palci, ulomki, decimalni čevlji, metrski, metri, milimetri, cena, denar, dolarji, odstotek, odpadek, tipkanje
from: 215bbf4d
---

## Dolžine

Uporablja **Realna razdalja** v {{ui:Kalibriraj}}, ter {{ui:Višina}} in {{ui:Globina}} v urejevalniku postavk.

| Vpišete | Pomeni |
|---|---|
| `24'-0"` | 24 čevljev |
| `24'-6 1/2"` | 24 čevljev 6½ palca |
| `12' 6 1/2"` | 12 čevljev 6½ palca (presledek namesto vezaja) |
| `12'-6-1/2"` | 12 čevljev 6½ palca (vezaji med deli) |
| `24'` | 24 čevljev |
| `30"` | 30 palcev |
| `6 1/2"` | 6½ palca |
| `3/4"` | ¾ palca |
| `24 ft 6 in` | 24 čevljev 6 palcev (tudi `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 v privzeti enoti (glejte spodaj) |
| `24.5'` | 24.5 čevljev |
| `7.5 m` | 7.5 metra |
| `750 cm` | 750 centimetrov |
| `7500 mm` | 7,500 milimetrov |

- Goli število je v **čevljih** za kalibracijo in za postavke v LF, SF ali SY, ter v **metrih** za postavke v m ali m².
- Ukrivljeni narekovaji in črtice ′ ″ ’ ” iz urejevalnikov besedil delujejo kot `'` in `"`. Dva apostrofa `''` štejeta kot `"`.
- Vejice se prezrejo: `1,200 mm` je 1200 mm.
- Ulomki potrebujejo cela števila na obeh straneh: `6 1/2"` deluje, `6.5 1/2"` ne.
- Ničelne in negativne razdalje so zavrnjene.

Sporočila:

- „Vpišite razdaljo, na primer 24'-0" ali 7.5 m.“ (polje je prazno)
- „Vpišite razdaljo, večjo od nič.“
- „Uporabite čevlje in palce (24'-6 1/2"), decimalne čevlje, m, cm ali mm.“ (neznana enota)
- „Te razdalje ni mogoče prebrati. Poskusite 24'-6 1/2" ali 24.5.“

Višino ali globino postavke odstranite tako, da izpraznite polje.

### Računanje

Vsako polje za dolžino in okno za vnos med risanjem sprejme tudi izračun s `+`, `-`, `*`, `/` in oklepaji:
`4+7/16` (4.4375 v privzeti enoti), `12'6" + 3/4"`, `(24'-0")/3` (8 čevljev), `2*450mm`.

- Vezaj, zapisan v dolžino, je še vedno njen del: `24'-6"` je 24 čevljev 6 palcev, `6-1/2` pa je 6½. Za odštevanje postavite presledke okoli vezaja: `24' - 6"` je 23'-6".
- Navadno število dolžino množi ali deli kot število; če je prišteto dolžini, je v privzeti enoti.
- Delujejo tudi `abs`, `round`, `ceil` in `floor`. Izračun, ki ga ni mogoče prebrati, je zavrnjen z navedbo, kje je šlo narobe.

## Kako so dolžine prikazane

Dolžine so prikazane v čevljih, palcih in šestnajstinah: `12'-6 1/2"`, `0'-0 3/4"`. Vrednosti so za prikaz zaokrožene na najbližjo 1/16 palca; same količine niso zaokrožene. Decimalne vrednosti so prikazane z dvema decimalkama in ločilom tisočic, na primer `1,234.50 LF`.

## Cene (material in delo na enoto)

| Vpišete | Pomeni |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (do štiri decimalke; več jih zaokrožimo) |
| (prazno) | $0 |

Sporočilo: „Vpišite znesek, na primer 12.50.“ ali „Ta znesek je prevelik.“ Negativne cene niso sprejete.

Razširjeni zneski (material, delo, skupaj) so izračunani do centa: količina z odpadkom × cena, zaokroženo na pol stran od nič, točno kot `ROUND(x, 2)` v preglednici.

## Odstotek odpadka

| Vpišete | Pomeni |
|---|---|
| `10` | 10 % |
| `7.5%` | 7.5 % |
| (prazno) | 0 % |

Do dveh decimalk, od 0 % do 1000 %. Sporočili: „Vpišite odstotek, na primer 10 ali 7.5.“ ali „Odpadek nad 1000 % ni dovoljen.“

## Imena in enote

- Imena postavk in komponent: do 200 znakov.
- {{ui:Enota}} komponente: poljubno besedilo do 20 znakov, na primer `EA`, `sheets`, `CY`, `gal`. Je samo oznaka; TakeoffCraft je ne pretvori.

## Formule

Formule sestavov imajo svoja pravila: glejte [Jezik formul](topic:formulas).
