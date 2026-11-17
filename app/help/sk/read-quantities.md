---
title: Čítanie množstiev a rozpočtu
summary: Použite tabuľku množstiev podľa položky a podľa listu, celkovú sumu zákazky, zvýrazňovanie a upozornenie Neúplné.
keywords: množstvá, súčty, podľa položky, podľa listu, celkom za zákazku, rozpočet, súhrn, správa, zvýraznenie, neúplné, náklady
from: 069d41f1
---

Tabuľka {{ui:Quantities}} v dolnej časti okna je váš živý rozpočet. Mení sa hneď po tom, ako nakreslíte, zmažete, zmeníte mierku alebo upravíte jednotkovú cenu. Množstvá sa nikdy neukladajú; pri každom zobrazení sa znova zmerajú zo značiek, takže nemôžu zastarať.

## Podľa položky

Vyberte {{ui:By item}} (predvolené). Každá položka má riadok a každý jej komponent zostavy má riadok pod ňou.

| Stĺpec | Význam |
|---|---|
| Položka | Názov s farbou položky. "+(n) bez mierky" znamená, že niektoré značky sú na listoch bez mierky. |
| Množstvo | Namerané celkové množstvo v jednotke položky (komponenty: výsledok vzorca). |
| Jednotka | LF, m, SF, SY, m², EA alebo jednotka komponentu. |
| Odpad % | Zadané tu alebo v editore položky. |
| S odpadom | Množstvo × (1 + odpad). |
| Materiál/jednotka, Práca/jednotka | Jednotkové ceny; môžete ich zadať priamo tu. |
| Materiál, Práca | S odpadom × jednotková cena, zaokrúhlené na cent. |
| Celkom | Materiál + práca. |

Posledný riadok **Celkom za zákazku** sčítava stĺpce materiálu, práce a celkom. Rovnaký súčet sa zobrazuje vpravo v hlavičke tabuľky.

Zadajte hodnotu do bunky odpadu alebo jednotkovej ceny a stlačte {{key:Enter}} alebo kliknite mimo nej, čím ju použijete. Hodnota, ktorú TakeoffCraft nedokáže prečítať, je orámovaná na červeno a stavový riadok vysvetlí dôvod, napríklad "Zadajte sumu, napríklad 12.50."

Kliknutím na riadok položky zvýraznite jej značky na všetkých listoch a prejdete na list, ktorý ich obsahuje (rovnako ako kliknutie na ňu pod {{ui:Items}}).

## Podľa listu

Vyberte {{ui:By sheet}}, ak chcete vidieť množstvo každej položky na každom liste spolu s počtom značiek. Kliknutím na riadok otvoríte list so zvýraznenou položkou. Použite to na kontrolu, či bol každý list zmeraný, alebo na rozdelenie množstiev podľa podlažia či oblasti prác.

## Podľa oblasti

Ak výkaz obsahuje oblasti ponuky, {{ui:By area}} zobrazí položky každej oblasti a medzisúčet. Pozri [Oblasti ponuky](topic:bid-areas).

## Upozornenie Neúplné

Ak niečo nie je zahrnuté do súčtov, hlavička zobrazí upozornenie, napríklad:

"Neúplné: 1 chyba vzorca, 6 značiek na listoch bez mierky (nie je v súčtoch)"

- **Chyby vzorcov**: vzorec komponentu zostavy sa nedá vyčísliť. Jeho riadok hovorí "Chyba vzorca: …". Pozri [Zostavy a vzorce](topic:assemblies#when-a-formula-is-wrong).
- **Značky na listoch bez mierky**: nastavte týmto listom mierku. Pozri [Nastavenie mierky](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Rovnaké poznámky sa zapíšu aj do exportovanej tabuľky, takže neúplný rozpočet nikdy nevyzerá kompletne.

## Zvýraznenie položky

Kliknite na položku v zozname {{ui:Items}} alebo v tabuľke. Jej značky zostanú plne výrazné na všetkých listoch a ostatné sa stlmia. Zoznam listov pri každom liste zobrazí "(n) zvýraznených". Zvýraznenie zrušíte opätovným kliknutím na položku.

## Súčty položiek v bočnom paneli

Každá položka v zozname {{ui:Items}} zobrazuje aj svoje množstvo. Blok **Namerané** v editore položky zobrazuje hodnoty, ktoré jej vzorce používajú: dĺžka, úseky a plocha stien; plocha, obvod a počet plôch; alebo počet.

## Značky na PDF, ktoré nie sú otvorené

Výkaz môže obsahovať značky na PDF, ktoré ste tentoraz neotvorili. Stále sa počítajú do každého súčtu; zoznam listov uvádza názvy týchto PDF. Pozri [Uloženie a opätovné otvorenie výkazu](topic:save-and-reopen).

## Viac miesta

Tlačidlo so šípkou vpravo v hlavičke {{ui:Quantities}} skryje tabuľku, aby mal list viac miesta. Opätovným kliknutím tabuľku znova zobrazíte.
