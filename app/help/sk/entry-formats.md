---
title: Zadávanie dĺžok, jednotkových cien a percent
summary: Čo môžete napísať pre vzdialenosti, výšky, jednotkové ceny a percentá odpadu, s príkladmi a hláseniami pre vstup, ktorý TakeoffCraft nedokáže prečítať.
keywords: vstup, formát, stopy a palce, zlomky, desatinné stopy, metrický, metre, milimetre, sadzba, peniaze, doláre, percento, odpad, písanie
from: 215bbf4d
---

## Dĺžky

Používa sa v **Reálna vzdialenosť** v {{ui:Kalibrovať}} a v {{ui:Výška}} a {{ui:Hĺbka}} v editore položky.

| Zadáte | Znamená |
|---|---|
| `24'-0"` | 24 stopy |
| `24'-6 1/2"` | 24 stôp 6½ palca |
| `12' 6 1/2"` | 12 stôp 6½ palca (medzera namiesto pomlčky) |
| `12'-6-1/2"` | 12 stôp 6½ palca (pomlčky medzi časťami) |
| `24'` | 24 stopy |
| `30"` | 30 palcov |
| `6 1/2"` | 6½ palca |
| `3/4"` | ¾ palca |
| `24 ft 6 in` | 24 stopy 6 palcov (tiež `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 v predvolenej jednotke (pozri nižšie) |
| `24.5'` | 24.5 stopy |
| `7.5 m` | 7.5 metra |
| `750 cm` | 750 centimetrov |
| `7500 mm` | 7,500 milimetrov |

- Holé číslo je v **stopách** pri kalibrácii a pri položkách v LF, SF alebo SY a v **metroch** pri položkách v m alebo m².
- Typografické úvodzovky a prime znaky z textových procesorov (′ ″ ’ ”) fungujú ako `'` a `"`. Dva apostrofy `''` sa počítajú ako `"`.
- Čiarky sa ignorujú: `1,200 mm` je 1200 mm.
- Zlomky potrebujú celé čísla na oboch stranách: `6 1/2"` funguje, `6.5 1/2"` nie.
- Nulové a záporné vzdialenosti sa odmietajú.

Hlásenia:

- „Zadajte vzdialenosť, napríklad 24'-0" alebo 7.5 m.“ (pole je prázdne)
- „Zadajte vzdialenosť väčšiu ako nula.“
- „Použite stopy a palce (24'-6 1/2"), desatinné stopy, m, cm alebo mm.“ (neznáma jednotka)
- „Túto vzdialenosť nebolo možné prečítať. Skúste 24'-6 1/2" alebo 24.5.“

Ak chcete vymazať výšku alebo hĺbku položky, vyprázdnite pole.

### Aritmetika

Každé pole dĺžky a políčko na zadávanie počas kreslenia prijme aj výpočet so `+`, `-`, `*`, `/` a zátvorkami:
`4+7/16` (4.4375 v predvolenej jednotke), `12'6" + 3/4"`, `(24'-0")/3` (8 stôp), `2*450mm`.

- Pomlčka zapísaná v dĺžke je stále jej súčasťou: `24'-6"` je 24 stôp 6 palcov a `6-1/2` je 6½. Na odčítanie dajte medzery okolo pomlčky: `24' - 6"` je 23'-6".
- Holé číslo násobí alebo delí dĺžku ako číslo; pripočítané k dĺžke je v predvolenej jednotke.
- Fungujú aj `abs`, `round`, `ceil` a `floor`. Výpočet, ktorý sa nedá prečítať, sa odmietne s uvedením, kde je chyba.

## Ako sa zobrazujú dĺžky

Dĺžky sa zobrazujú ako stopy, palce a šestnástiny: `12'-6 1/2"`, `0'-0 3/4"`. Hodnoty sa pre zobrazenie zaokrúhľujú na najbližšiu 1/16 palca; samotné množstvá sa nezaokrúhľujú. Desatinné hodnoty sa zobrazujú s dvoma desatinnými miestami a oddeľovačmi tisícov, napríklad `1,234.50 LF`.

## Jednotkové ceny (materiál a práca na jednotku)

| Zadáte | Znamená |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (až štyri desatinné miesta; ďalšie sa zaokrúhľujú) |
| (prázdne) | $0 |

Hlásenie: „Zadajte sumu, napríklad 12.50.“ alebo „Táto suma je príliš veľká.“ Záporné jednotkové ceny sa neprijímajú.

Rozšírené sumy (materiál, práca, súčty) sa počítajú na cent: množstvo s odpadom × jednotková cena, zaokrúhlené polovice od nuly, presne ako `ROUND(x, 2)` v tabuľke.

## Percento odpadu

| Zadáte | Znamená |
|---|---|
| `10` | 10 % |
| `7.5%` | 7.5 % |
| (prázdne) | 0 % |

Najviac dve desatinné miesta, od 0 % do 1000 %. Hlásenia: „Zadajte percento, napríklad 10 alebo 7.5.“ alebo „Odpad nad 1000 % nie je povolený.“

## Názvy a jednotky

- Názvy položiek a komponentov: až 200 znakov.
- {{ui:Jednotka}} komponentu: ľubovoľný text až do 20 znakov, napríklad `EA`, `listy`, `CY`, `gal`. Je to iba označenie; TakeoffCraft ho neprevádza.

## Vzorce

Vzorce zostáv majú vlastné pravidlá: pozri [Jazyk vzorcov](topic:formulas).
