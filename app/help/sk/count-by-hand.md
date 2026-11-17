---
title: Počítanie ručne
summary: Kliknite na každé dvere, svietidlo alebo zariadenie, aby ste ho spočítali, skontrolujte počty a opravte chyby.
keywords: počet, každý, ea, zariadenia, dvere, svietidlá, symboly, záznam, počet kliknutím, ručný počet
from: 594f2980
---

Položka počtu počíta veci: dvere, svietidlá, zásuvky, vodovodné zariadenia. Každé kliknutie na list pridá jednu značku počtu. Počítanie nepotrebuje mierku.

## Počítanie

1. Vytvorte alebo vyberte položku počtu pod {{ui:Položky}} (typ {{ui:Počet}}).
2. Vyberte {{ui:Počet}} na paneli nástrojov alebo stlačte {{key:C}}.
3. Kliknite na každý na liste.
   Každé kliknutie dá bodku vo farbe položky a počet položky sa zvýši o jeden.
4. Prejdite na ďalší list ({{key:PageDown}}) a pokračujte v počítaní. Nástroj zostane na {{ui:Počet}}.
5. Keď skončíte, stlačte {{key:Esc}}. TakeoffCraft sa vráti na {{ui:Vybrať}}.

Ťahanie stále posúva a koliesko stále zväčšuje, takže sa môžete pohybovať po liste bez pridávania bodiek.

:::tip
Kliknite na položku počtu, aby sa jej bodky zvýraznili na každom liste. Zoznam listov potom ukáže, koľko ich je na každom liste, čo pomáha nájsť listy, ktoré ste ešte nespočítali.
:::

## Oprava počtu

- **Odstránenie bodky**: vyberte {{ui:Vybrať}} ({{key:V}}), kliknite na bodku a stlačte {{key:Delete}} alebo vyberte {{ui:Zmazať značku}}. Alebo stlačte {{key:Mod+Z}} hneď po chybnom kliknutí.
- **Presun bodky**: vyberte ju a potom ju ťahajte.
- **Započítané pod zlou položkou**: vyberte bodku a v zozname **Položka** pod **{{ui:Vybraná značka}}** vyberte správnu položku počtu.

## Veľkosť bodiek na obrazovke a v PDF

Bodky si na obrazovke zachovajú jednu veľkosť bez ohľadu na to, ako veľmi priblížite. Na zmenu otvorte {{ui:Nastavenia}}, kartu TakeoffCraft, a vyberte **Veľkosť značky počtu**: Extra malá, Malá, Stredná (predvolená) alebo Veľká.

Export do PDF ({{ui:Export}} › označené PDF) kreslí každú bodku na papieri v rovnakej veľkosti, bez ohľadu na veľkosť listu: prehliadač zobrazujúci PDF na 100 % ukazuje bodky rovnako veľké, ako sú na obrazovke. Ak by sa bodky na liste ešte dotýkali, export zmenší bodky na tomto liste, aby sa dala čítať každá z nich.

## Veľa rovnakých symbolov

Pre symbol, ktorý sa na liste opakuje mnohokrát, skúste [Automatický počet](topic:auto-count): označte jeden, skontrolujte, čo nájde, a pridajte ich všetky naraz.

## Používanie počtov vo vzorcoch

Množstvo položky počtu je **N**. Komponenty zostavy ho môžu používať, napríklad pánty `N * 3` pre dvere. Pozri [Zostavy a vzorce](topic:assemblies).
