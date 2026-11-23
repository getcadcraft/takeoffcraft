---
title: Odčítanie množstiev z modelu budovy
summary: Otvorte IFC model architekta, pozrite si ho v 3D, vyberte steny, podlahy, dvere a ostatné podľa typu, materiálu, hladiny alebo veľkosti a preneste ich počty, dĺžky, plochy a objemy do výkazu výmer. Novšia kópia modelu aktualizuje tie isté množstvá.
keywords: model, výkaz výmer z modelu, 3D zobrazenie, kliknutie na časť, nájdenie riadku, materiál, hladina, vrstvy steny, sadrokartón, izolácia, veľkosti dverí, veľkosti okien, zoznam otvorov, csv, 3d, bim, ifc, rvt, model budovy, množstvá, steny, podlahy, dvere, okná, stĺpy, miestnosti, podľa typu, podľa úrovne, aktualizácia, novší model, návrh vo vývoji
from: 8c4c12c9
---

Nemusíte čakať na ďalšiu sadu výkresov. Keď architekt pošle model budovy, otvorte ho tu a množstvá odčítajte priamo z neho. Model sa číta na vašom počítači; nič sa nikam neodosiela.

## Kroky

1. Na paneli nástrojov zvoľte {{ui:Model}} a vyberte súbor modelu `.ifc`, alebo ho otvorte cez {{ui:Otvoriť plány}} ako každý iný súbor.
2. {{ui:Výkaz výmer z modelu}} sa otvorí s jedným riadkom pre každú kategóriu a typ: steny podľa typu steny, podlahy podľa typu podlahy, dvere podľa typu dverí a tak ďalej. Každý riadok zobrazuje počet a v akých jednotkách sa daná kategória meria.
3. Nastavte {{ui:Zoskupiť podľa}} na {{ui:Kategória}} pre rýchly súčet, alebo na {{ui:Kategória, typ a úroveň}}, aby sa každý typ rozdelil podľa podlažia.
4. Odškrtnite riadky, ktoré nechcete. {{ui:Hľadať}} zúži zoznam. Odškrtnutie riadku zároveň skryje jeho časti v 3D obrázku.
5. Dajte modelu {{ui:Názov modelu}}, ktorý si ponecháte pre celú prácu, napríklad názov projektu.
6. Zvoľte {{ui:Pridať do výkazu výmer}}. Každé množstvo sa stane typovaným množstvom v zozname položiek. Pomenujte ho, ocente a pripojte zostavy ako každú inú položku.

## Zobrazenie modelu v 3D

{{ui:Zobraziť model v 3D}} nakreslí model nad tabuľkou, jednou farbou pre každý riadok (farebný štvorček vedľa názvu riadku). Ťahaním ho otáčate, podržaním {{key:Shift}} a ťahaním ho presúvate, kolieskom myši priblížite a na návrat zvoľte {{ui:Prispôsobiť}} alebo {{ui:Obnoviť}}.

- **Kliknite na časť** v obrázku a jej riadok sa označí v tabuľke, všetky časti tohto riadku sa zvýraznia a ostatné zblednú. Kliknite na tú istú časť znova a ak patrí do viacerých riadkov (stena vo svojich vrstvách), označí sa ďalší riadok.
- **Kliknite na riadok** v tabuľke, aby sa jeho časti zvýraznili. Kliknite na neho znova alebo kliknite na prázdne miesto v obrázku a výber zrušíte.
- Miestnosti sa nekreslia, pretože by objem miestnosti zakryl budovu.
- Veľmi veľký model ponecháva pre niektoré časti iba škatuľu, aby sa zmestil do pamäte; panel uvedie, koľko ich je. Čísla sa nemenia.

Ak tento počítač nevie kresliť 3D, tabuľka funguje ako predtým.

## Zoskupenie podľa materiálu, vrstvy alebo veľkosti

{{ui:Zoskupiť podľa}} má ešte tri možnosti:

- {{ui:Kategória a materiál}}: stena, podlaha alebo strecha zložená z vrstiev dostane pre materiál každej vrstvy vlastný riadok, takže sadrokartón, nosníky a izoláciu možno oceniť zvlášť. Časť budovy s jedným materiálom dostane riadok tohto materiálu a časť bez materiálu sa uloží do riadku s názvom „Bez pomenovaného materiálu“.
- {{ui:Kategória a hladina}}: to isté, s hrúbkou vrstvy v riadku („Izolácia, 100 mm“).
- {{ui:Kategória, typ a veľkosť dverí alebo okien}}: dvere a okná sa rozdelia podľa šírky a výšky (napríklad 3'-0" × 6'-8" alebo 914 × 2,032 mm).

Pri vrstve je plocha vlastná plocha steny (alebo pôdorysná plocha či plocha povrchu podlahy alebo strechy) a objem je táto plocha krát hrúbka vrstvy. Poznámka riadku uvádza, koľko čísel pochádza z vrstvy. Vrstvy jednej steny sa sčítajú na objem, ktorý model pre ňu uvádza.

## Uloženie riadkov alebo otvorov ako CSV

{{ui:Uložiť riadky ako CSV}} uloží riadky, ktoré ste označili, s jednotkami v každom nadpise, pre tabuľkový procesor. {{ui:Uložiť zoznam otvorov ako CSV}} (iba ak model obsahuje dvere alebo okná) uloží každé dvere a okno podľa typu, úrovne a veľkosti s ich počtom.

## Čo sa meria

| Kategória | Množstvá |
|---|---|
| Steny | počet, dĺžka, plocha steny (jedna strana, otvory odpočítané), objem |
| Podlahy, dosky, stropy a ostatné povrchy | počet, pôdorysná plocha, objem |
| Strechy | počet, pôdorysná plocha, plocha strechy, objem |
| Základy | počet, pôdorysná plocha, objem |
| Stĺpy, nosníky a prvky | počet, dĺžka pozdĺž prvku, objem |
| Zábradlia, potrubia, vzduchotechnické potrubia a káblové trasy | počet, dĺžka |
| Schody | počet, objem |
| Miestnosti | počet, plocha podlahy, objem |
| Dvere, okná a všetko ostatné | počet |

Ak autor modelu uviedol množstvo priamo v súbore, použije sa toto číslo. Inak sa číslo odmeria z tvaru prvku. Každé množstvo má poznámku, ktorá uvádza, ktorý spôsob bol použitý a koľko prvkov dalo číslo.

:::note
Dĺžka steny odmeraná z jej tvaru ide od konca ku koncu, takže dve steny, ktoré sa stretávajú v rohu, zahŕňajú oba roh. Objem vyžaduje uzavretý tvar: prvok, ktorého tvar nie je uzavretý, sa spočíta, ale nemá objem. Zakrivený alebo rohový prvok steny sa meria ako polovica všetkých jej zvislých plôch a jeho poznámka to uvádza.
:::

## Keď príde novší model

Otvorte novší súbor a zadajte rovnaký {{ui:Názov modelu}}. Predtým, než čokoľvek pridáte, panel uvedie, koľko množstiev je nových, koľko sa zmenilo a z akej hodnoty na akú, a ktoré množstvá z predchádzajúcej kópie už nie sú v modeli. Zvoľte {{ui:Pridať do výkazu výmer}}: zmenené množstvá dostanú nové čísla a vaše názvy, sadzby, odpad a zostavy zostanú zachované. Množstvá, ktoré z modelu zmizli, si ponechajú staré čísla; ak ich návrh zrušil, odstráňte ich sami.

Názvy typov a úrovní slúžia na rozpoznanie množstva. Ak architekt premenuje typ steny, príde ako nové množstvo a ten starý sa uvedie ako zmiznutý.

## Súbory, ktoré sa čítajú

Súbory IFC (IFC2x3, IFC4 a IFC4.3). Súbor IFC s cestami, koľajami alebo mostmi stále priniesie svoje infraštruktúrne množstvá priamo, ako predtým.

TakeoffCraft v tomto vydaní nečíta súbory `.rvt`. Ak architekt pracuje v Revite, požiadajte o export modelu do IFC (File, Export, IFC) a otvorte ten súbor.

Jeden model môže naraz priniesť najviac 500 množstiev. Ak ich je viac, odškrtnite riadky alebo zoskupte podľa kategórie.
