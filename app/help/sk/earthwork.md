---
title: Zemné práce a kótované výšky
summary: Označte kótované výšky na situačnom pláne, odošlite ich do CivilCraft na povrch a výkop a násyp a tu zadajte jednoduché množstvá výkopu.
keywords: zemné práce, výkopové práce, výkop, násyp, výkop a násyp, úprava terénu, kótovaná výška, výšky, topo, povrch, triangulácia, civilcraft, body, pnezd, ryha
from: a898e508
---

TakeoffCraft meria to, čo je nakreslené na liste. Zemné práce potrebujú terénny povrch, preto sa zdieľajú s CivilCraft, ktorý vytvára povrchy z bodov, upravuje ich sklony a počíta výkop, násyp a prepravu.

## Jednoduchý výkop tu

Pre pôdorys vykopaný do jednej hĺbky stačí položka plochy s **hĺbkou**: objem je plocha × hĺbka. [Balík položiek generálneho dodávateľa](topic:trade-packs) obsahuje položku hromadného výkopu (objem v zemnom masíve, objem uvoľnenej zeminy a počet nákladných áut) a položku inžinierskej ryhy (výkop, lôžko a zásyp podľa dĺžky a hĺbky).

## Kótované výšky pre CivilCraft

1. Nastavte mierku situačného listu.
2. Vytvorte položku **Počet**, napríklad „Jestvujúci terén“, a kliknite na každú kótovanú výšku na liste.
3. Vyberte značku a do panela Vybraná značka zadajte jej {{ui:Výška}}: `102.5`, `102'-6"` alebo `31.24 m`. Záporné a nulové výšky sú v poriadku.
4. Otvorte ponuku {{ui:Export}} a vyberte {{ui:Kótované výšky}}. Dostanete súbor bodov (`.csv`) so stĺpcami Point, Northing, Easting, Elevation a Description, jeden riadok na každý označený bod otvoreného listu.
5. Otvorte tento súbor v CivilCraft (pozri [Import bodov](app:civilcraft/import-points)). Z bodov vytvorí povrch ([Vytvorenie povrchu](app:civilcraft/build-surface)); odtiaľ porovnáva povrchy a počíta výkop a násyp ([Objemy](app:civilcraft/volumes)).

Northing a Easting sú vlastné súradnice listu v stopách, merané od rohu strany podľa jeho mierky: vzdialenosti a objemy medzi bodmi sú správne, ale nie sú to súradnice prieskumu vášho areálu. Keď ich potrebujete, presuňte ich do súradníc areálu v CivilCraft.

:::note
Body z rôznych listov nezdieľajú súradnice, preto export berie iba otvorený list. Výšky sa ukladajú spolu s výkazom a prenášajú sa kopírovaním a prilepením.
:::

## Výkop a násyp z CivilCraft

Zemné práce z CivilCraft sa vrátia ako dve položky, ktoré môžete oceniť:

1. V CivilCraft upravte plochy a koridory a potom zvoľte {{ui:Odoslať do TakeoffCraft}} pod **Zemné práce** ([Objemy zemných prác](app:civilcraft/volumes)). Uloží sa súbor množstiev (`.quantities.json`).
2. V TakeoffCraft ho otvorte cez {{ui:Otvoriť výkaz}} alebo ho pustite do aplikácie. Váš výkaz zostane otvorený: súbor pridá položky **Zemné práce: výkop** a **Zemné práce: násyp** ako [typované množstvá](topic:create-items#typed-quantities-no-drawing) v kubických yardoch (CY) pre projekt v stopách alebo v kubických metroch (m³) pre projekt v metroch. Je to jeden krok: {{key:Mod+Z}} ho vráti späť.
3. Premenujte ich a nastavte odpad, jednotkové ceny a zostavy podľa potreby.

Keď sa návrh zmení, odošlite ho znova z CivilCraft a otvorte nový súbor: tie isté dve položky dostanú nové množstvá. Ich názvy, jednotkové ceny, odpad a zostavy zostanú také, aké ste nastavili. Ak sa zmenila jednotka projektu, stavový riadok to uvedie: skontrolujte jednotkové ceny. Súbor z iného projektu CivilCraft pridá vlastné dve položky.

Množstvá sú objemy v zemnom masíve tak, ako ich CivilCraft namerala (mriežková metóda): bez úbytku alebo prírastku objemu. Pridajte ich ako odpad alebo cez vzorec, napríklad `Q * 1.25` pre objem uvoľnenej zeminy. Editor položky ukazuje, odkiaľ a kedy každá pochádza; stĺpec poznámok rozpočtu to tiež uvádza.

:::note
Súbor množstiev je čistý JSON (`"format": "cadcraft-quantities"`), takže súbor môže vytvoriť aj skript alebo iný program: názov aplikácie, projekt a položky s kľúčom, názvom, jednotkou a množstvom.
:::
