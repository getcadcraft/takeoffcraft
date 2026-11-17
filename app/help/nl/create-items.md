---
title: Opmeetposten maken
summary: Maak lineaire, oppervlakte- en telposten en stel hun eenheid, hoogte of diepte, verlies en materiaal- en arbeidstarieven in.
keywords: ploeg, productiesnelheid, ploegsterkte, loon, uren, manuren, werkersuren, ploegdagen, arbeidsuren, post, nieuwe post, conditie, meervoudige conditie, ook meten, verschillende soorten, ruimte, lineair, oppervlakte, tellen, eenheid, hoogte, diepte, verlies, materiaal, arbeid, tarief, kleur, kosten
from: 7fa5effc
---

Een **post** is één ding dat u opmeet en prijst: een wandtype, een vloerafwerking, een plafond, een deur, een lichtarmatuur. Elke markering die u tekent hoort bij een post. Andere programma's noemen dit condities.

Elke post heeft een soort (en kan ook andere soorten markeringen krijgen, zie [Eén post, meerdere soorten markeringen](topic:create-items#one-item-several-kinds-of-marks)):

| Soort | U tekent | Rapporteert | Eenheden |
|---|---|---|---|
| Lineair | Reeksen van verbonden punten | Lengte, aantal reeksen, en wandoppervlak als er een hoogte is | LF of m |
| Oppervlakte | Gesloten contouren, met uitsparingen | Oppervlakte, omtrek, aantal oppervlakken | SF, SY, SQ, ac, ha of m² |
| Telling | Eén klik per ding | Hoeveel | EA |
| Getypte hoeveelheid | Niets: u typt de hoeveelheid | Het getypte getal (of een getal uit CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha of m² |

## Getypte hoeveelheden (zonder tekening)

Sommige dingen in een raming worden nooit getekend: mobilisatie, vergunningen, een onvoorzien bedrag, een forfaitair onderaannemingscontract, de ontgraving en ophoging die CivilCraft heeft berekend. Maak ze een **Getypte hoeveelheid**:

1. Kies {{ui:Nieuwe post}}, typ een naam, kies {{ui:Getypte hoeveelheid (geen tekening)}} en kies {{ui:Toevoegen}}.
2. Kies in de postbewerking de {{ui:Eenheid}} (LS voor een forfait) en typ de {{ui:Hoeveelheid}}: `1`, `2.5` of `1,250`.
3. Stel verlies en tarieven in zoals bij elke andere post. De formules van een samenstelling gebruiken `Q`, de hoeveelheid, bijvoorbeeld `ceil(Q / 12)` vrachtwagenladingen.

Een getypte hoeveelheid krijgt geen markeringen en maakt de raming nooit onvolledig. Als de opmeting biedgebieden heeft, heeft de editor ook {{ui:Biedgebied}}: de hoeveelheid telt dan mee in dat gebied, zijn alternatieven en zijn totalen, net zoals een markering daar zou doen. Hoeveelheden die uit een andere app komen, vermelden waar ze vandaan komen, zie [Grondwerk en puntshoogten](topic:earthwork#cut-and-fill-from-civilcraft).

## Een post maken

1. Kies in het paneel {{ui:Posten}} rechts {{ui:Nieuwe post}}.
2. Typ een naam, zoals `Binnenwand type A` of `Tapijttegel`.
3. Kies de soort: {{ui:Lineair (lengte)}}, {{ui:Oppervlakte}} of {{ui:Tellen}}.
4. Kies {{ui:Toevoegen}} (of druk op {{key:Enter}}).
   De post verschijnt in de lijst met een eigen kleur, wordt de post waarmee u tekent, en de editor opent onder de lijst. De statusbalk vertelt u welk hulpmiddel u daarna kiest.

Druk in het formulier op {{key:Esc}} om het te sluiten zonder een post toe te voegen.

:::tip
Als u eerst een meethulpmiddel kiest, gebruikt TakeoffCraft de laatste post van het juiste soort, of opent het formulier {{ui:Nieuwe post}} met dat soort al gekozen.
:::

## De post kiezen waarmee u tekent

Klik op een post in de lijst. Die wordt de post waaraan nieuwe markeringen worden toegevoegd, en zijn markeringen worden op elk blad gemarkeerd terwijl de andere vervagen. Heeft het open blad geen markeringen ervan, dan springt TakeoffCraft naar een blad dat er wel heeft. Klik de post nogmaals om het markeren te stoppen; hij blijft de post waarmee u tekent.

Klik een markering met het hulpmiddel {{ui:Selecteren}} om ook zijn post de huidige te maken.

## De post instellen

De postbewerking (**Post: (naam)**) heeft deze velden. Elk veld wordt opgeslagen zodra u het verlaat of op {{key:Enter}} drukt, en elke wijziging kan ongedaan worden gemaakt.

| Veld | Wat het doet |
|---|---|
| {{ui:Naam}} | Wordt getoond in de lijst, de tabellen en de exports. |
| {{ui:Invoer}} | Lineair, Oppervlakte of Tellen. Het is vergrendeld zodra de post markeringen heeft ("Een post met markeringen behoudt zijn soort"). |
| {{ui:Kleur}} | De kleur van de markeringen op het scherm en in de gemarkeerde PDF. |
| {{ui:Eenheid}} | Waarin de hoeveelheid wordt gerapporteerd: LF of m voor lineair; SF, SY, SQ, ac, ha of m² voor oppervlakte; EA voor tellen. |
| {{ui:Ook meten}} | De andere soorten markeringen die de post aanneemt, elk met een eigen eenheid. Zie hieronder. |
| {{ui:Hoogte}} (lineair) | Een wandhoogte. De post rapporteert dan ook het wandoppervlak (lengte × hoogte). Reeksen die uit een BimCraft-model komen, bevatten hun deuren en ramen: die worden één keer eraf gehaald, en de post toont het bruto oppervlak, de openingen en het netto. Een opmeting uit een BimCraft-project waarbij een meetmethode is gekozen, wordt hier ook met die methode gemeten (de notitie noemt die, met zijn bron, en zegt dat een kostendeskundige die niet heeft gecontroleerd); de methode kan niet in TakeoffCraft worden gewijzigd. Metselstenen of blokken en mortel uit een wandtype komen aan als twee componenten: de te bestellen eenheden en het mortelvolume. |
| {{ui:Diepte}} (oppervlakte) | Een diepte of dikte, gebruikt in samenstellingsformules (bijvoorbeeld betonvolume). |
| {{ui:Verlies %}} | Wordt bij de hoeveelheid opgeteld vóór het prijzen: 10 betekent hoeveelheid × 1.10. |
| {{ui:Materiaal €/LF}} | Materiaalkosten per eenheid. Het label volgt de eenheid: €/SF, €/EA enzovoort. |
| {{ui:Arbeid €/LF}} | Arbeidskosten per eenheid. |
| {{ui:CSI-nummer}} | Het CSI MasterFormat-nummer, zoals `09 21 16` (of alleen de afdeling, `09`). Het werkblad By division van de werkmap groepeert kosten daarop. Posten uit [vakpakketten](topic:trade-packs) hebben er al één. |

Hoogte en diepte nemen voet en inch (`9'-0"`, `8' 6"`) of decimale voet (`9`) voor imperiale eenheden, en meters (`2.7`, `2700 mm`) voor metrische eenheden. Tarieven nemen bedragen zoals `12.50` of `€1,250`, tot vier decimalen. Zie [Invoer van lengte, tarief en percentage](topic:entry-formats).

Onder de velden toont **Gemeten** de totalen die de formules van de post kunnen gebruiken, met hun letters: Lengte (L), Reeksen (N), Wandoppervlak (A) voor lineair; Oppervlakte (A), Omtrek (P), Oppervlakken (N) voor oppervlakte; Aantal (N) voor tellen.

## Eén post, meerdere soorten markeringen

Sommige dingen worden op meer dan één manier gemeten: een ruimte heeft een vloer (een oppervlakte), een plint langs de muren (een lengte) en deuren (een telling). In plaats van drie posten maakt u er één:

1. Maak de post met zijn hoofdsoort, zoals een oppervlaktepost `Ruimte 101`.
2. Vink onder {{ui:Ook meten}} in zijn editor {{ui:Lineair}}, {{ui:Tellen}} of beide aan. Elk krijgt ernaast een eenheid.
3. Teken met elk hulpmiddel waarvan de soort de post aanneemt: met `Ruimte 101` als huidige post tekent {{ui:Oppervlakte}} de vloer, {{ui:Lineair}} de plint en {{ui:Tellen}} de deuren. TakeoffCraft vraagt niet om een andere post.

De lijst met posten toont elke hoeveelheid (`50.00 SF + 2 EA`). In de tabel {{ui:Hoeveelheden}} heeft de rij van de post de hoofdhoeveelheid, en elke andere soort krijgt een eigen rij eronder, zoals **Ruimte 101 (tellen)**, met een eigen verlies en materiaal- en arbeidstarieven. De exports, de tabel per blad en de legenda van de gemarkeerde PDF tonen ze op dezelfde manier.

De velden van de hoofdsoort blijven van die hoofdsoort: de hoogte of diepte, de **Dakhelling**, de **Aftrek** en de 3D-vorm gelden alleen voor de markeringen ervan. Een basisreeks getekend voor een oppervlaktepost wordt gewoon langs het plan gemeten en toont plat in 3D. Samenstellingsformules gebruiken de totalen van de hoofdsoort.

Een soort kan alleen worden uitgevinkt zolang de post er geen markeringen van heeft; verwijder ze, of verplaats ze eerst naar een andere post onder **Geselecteerde markering**. Markeringen kunnen naar elke post die hun soort aanneemt.

Verder naar beneden staat de {{ui:Samenstelling}}: onderdelen zoals stijlen of platen, elk met een eigen formule en tarieven. Zie [Samenstellingen en formules](topic:assemblies).

Onderaan: {{ui:Omhoog}} en {{ui:Omlaag}} wijzigen de plaats van de post in de lijst en in de exports, en {{ui:Post verwijderen}} verwijdert hem met al zijn markeringen (na een vraag; u kunt het ongedaan maken).

Oppervlakteposten hebben ook **Dakhelling** (dakvlakken gemeten op de helling: [Daken en hellingen](topic:roofs-and-slopes)) en **Aftrek** (hun markeringen gaan van de oppervlakten van andere posten af: [Oppervlakten meten](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Lineaire posten hebben **Helling** (Horizontaal, Windveer, Walm of dakdal) en, voor windveren en walmen, **Dakhelling**.

## Tarieven in de tabel

U kunt {{ui:Verlies %}}, materiaal- en arbeidstarieven ook direct typen in de tabel {{ui:Hoeveelheden}} onderaan ({{ui:Per post}}). Het is dezelfde instelling als in de editor.

## Hoe prijzen werkt

Voor elke post en elk onderdeel van een samenstelling:

1. **Met verlies** = hoeveelheid × (1 + verlies %).
2. **Materiaal** = met verlies × materiaal per eenheid, afgerond op de cent.
3. **Arbeid** = met verlies × arbeid per eenheid, afgerond op de cent.
4. **Totaal** = materiaal + arbeid.

Het {{ui:Totaal van de opdracht}} telt elke post en elk onderdeel op. Een post kan zijn eigen tarieven en een samenstelling tegelijk hebben; beide tellen mee, dus laat de tarieven van de post op 0 wanneer de onderdelen de kosten dragen.

## Arbeid per ploeg

In plaats van een arbeidstarief per eenheid kan de arbeid van een post uit een ploeg komen: hoeveel die per uur oplevert, hoeveel mensen het zijn, en wat elk verdient. Vink onder {{ui:Arbeid per ploeg}} in de postbewerking {{ui:Arbeid prijzen van een ploeg}} aan en vul in:

| Veld | Voorbeeld |
|---|---|
| {{ui:Productie}} | `20` LF per uur (in de eenheid van de post) voor de hele ploeg |
| {{ui:Ploegsterkte}} | `2` personen |
| {{ui:Loon €/uur per persoon}} | `45` |

TakeoffCraft berekent uit de hoeveelheid met verlies:

- **ploegenuren** = hoeveelheid ÷ productie (110 LF ÷ 20 = 5.5),
- **werkersuren** = ploegenuren × ploegsterkte (11),
- **ploegdagen** = ploegenuren ÷ 8 (0.69),
- **arbeid** = werkersuren × loon (€495.00).

De editor toont het resultaat en het tarief dat daaruit komt (€4.50/LF). Het arbeidstarief van de post zelf is dan alleen-lezen, in de editor en in de tabel. De kop van de tabel {{ui:Hoeveelheden}} voegt de werkersuren en ploegdagen van de opdracht toe. De exports vermelden de uren van elke ploeg, en in de werkmap is de arbeidscel een formule op de ploeg (`ROUND(F2/20*2*45,2)`). Haal het vinkje weg om terug te gaan naar een tarief per eenheid.

## Metrische posten

Kies m (lineair) of m² (oppervlakte) als eenheid. Hoeveelheden, hoogten en formulewaarden zijn dan in meters. De schaal van het blad kan elke voorinstelling of kalibratie zijn; eenheden en schalen zijn onafhankelijk van elkaar.

## Volgende

- [Lineaire reeksen meten](topic:measure-linear)
- [Oppervlakten met uitsparingen meten](topic:measure-areas)
- [Handmatig tellen](topic:count-by-hand)
