---
title: Išleidimai, revizijos ir brėžinių pakeitimų žurnalas
summary: Laikykite vieną išleidimų istoriją kartu su architekto modeliu: įkelkite išleidimus, įrašykite nurodymus statybvietei, dirbtuvių brėžinius ir susietus modelius prie išleidimo bei skaitykite brėžinių pakeitimų žurnalą.
keywords: išleidimas, revizija, revizijos, pakeitimų žurnalas, brėžinių pakeitimų žurnalas, brėžinių registras, nurodymas statybvietei, dirbtuvių brėžinys, susietas modelis, konkursas, statyba, išleidimų istorija, kiekių žiniaraštis, kiekių skaičiavimas
from: 8d8f6e68
---

## Ką darysite

Dirbkite su ta pačia išleidimų istorija, kaip ir visa komanda. Matykite, kurie lapai išleisti kuria revizija, ir susiekite tai, kas vyksta statybvietėje, su išleidimu, kuriam tai priklauso.

## Veiksmai

1. Atidarykite **Išleidimai ir revizijos**.
2. Pasirinkite **Nuskaityti išleidimų istoriją** ir nurodykite `.issues.json` failą, įrašytą iš BimCraft ar kitos programos. Jo išleidimai ir įrašai pridedami prie jūsų. Nieko nepakeičiama.
3. Pasirinkite **Pridėti įrašą** nurodymui statybvietei, dirbtuvių brėžiniui, žymėjimų rinkiniui, susietam modeliui ar pastabai. Nurodykite išleidimą, kuriam jis skirtas, ir jo būseną. Pasirinktas failas įrašomas pagal pavadinimą, dydį ir SHA-256; pats failas lieka ten, kur buvo.
4. **Brėžinių pakeitimų žurnalas** rodo po vieną eilutę kiekvienam lapui ir po vieną stulpelį kiekvienam išleidimui. Revizija skliaustuose buvo išleista pakartotinai be pakeitimų.
5. **Atsisiųsti žurnalą (CSV)** įrašo išleidimus, lapų lentelę ir įrašus. **Įrašyti išleidimų istoriją** sukuria failą, kurį skaito kitos programos.

## Verta žinoti

- **Įrašyti išleidimą** išleidžia jūsų išmatuotus lapus, pavyzdžiui, su kiekių žiniaraščiu. **Pakeitimai nuo** tada parodo, kurie lapai buvo išmatuoti iš naujo po to išleidimo.
- Istorija įrašoma kiekių skaičiavimo faile. Kiekvienas pakeitimas yra vienas žingsnis atšaukimui.
- Tą patį failą nuskaičius du kartus, nieko nepridedama dukart. Kai dvi kopijos turi tą patį įrašą, paliekama naujesnė.
