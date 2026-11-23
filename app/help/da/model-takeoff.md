---
title: Udtræk mængder fra en bygningsmodel
summary: Åbn arkitektens IFC-model, se den i 3D, vælg vægge, dæk, døre og resten efter type, materiale, lag eller størrelse, og før deres antal, længder, arealer og volumener ind i mængdeudtrækket. En nyere kopi af modellen opdaterer de samme mængder.
keywords: model, mængdeudtræk fra model, 3d-visning, klik på en del, find rækken, materiale, lag, væglag, gipsplade, isolering, dørstørrelser, vinduesstørrelser, åbningsoversigt, csv, 3d, bim, ifc, rvt, bygningsmodel, mængder, vægge, dæk, døre, vinduer, søjler, rum, efter type, efter niveau, opdatering, nyere model, design development
from: 8c4c12c9
---

Du behøver ikke vente på næste tegningssæt. Når arkitekten sender bygningsmodellen, så åbn den her og tag mængderne direkte fra den. Modellen læses på din computer; intet sendes nogen steder.

## Trin

1. Vælg {{ui:Model}} på værktøjslinjen, og vælg modellens `.ifc`-fil, eller åbn den med {{ui:Open plans}} ligesom enhver anden fil.
2. {{ui:Model takeoff}} åbnes med én række pr. kategori og type: vægge efter vægtype, dæk efter dæktype, døre efter dørtype og så videre. Hver række viser sin mængde og den enhed, kategorien måles i.
3. Sæt {{ui:Group by}} til {{ui:Category}} for en hurtig samlet værdi, eller til {{ui:Category, type and level}} for at dele hver type op efter etage.
4. Fravælg de rækker, du ikke vil have. {{ui:Find}} indsnævrer listen. Når du fravælger en række, skjules dens dele også i 3D-billedet.
5. Giv modellen et {{ui:Model name}}, som du beholder for hele opgaven, for eksempel projektets navn.
6. Vælg {{ui:Add to the takeoff}}. Hver mængde bliver til en indtastet mængde i postlisten. Navngiv den, prissæt den og tilknyt samlinger ligesom enhver anden post.

## Se modellen i 3D

{{ui:Show the model in 3D}} tegner modellen over tabellen, med én farve for hver række (farvefeltet ved rækkens navn). Træk for at dreje den, hold {{key:Shift}} nede og træk for at flytte den, brug hjulet til zoom, og vælg {{ui:Fit}} eller {{ui:Reset}} for at komme tilbage.

- **Klik på en del** i billedet, og dens række vælges i tabellen, med alle rækkens dele oplyst og resten blege. Klik på den samme del igen, og hvis den indgår i flere rækker (en væg i sine lag), vælges den næste række.
- **Klik på en række** i tabellen for at oplyse dens dele. Klik igen, eller klik på tomt rum i billedet, for at fjerne markeringen.
- Rum tegnes ikke, fordi et rums volumen ville skjule bygningen.
- En meget stor model beholder kun en boks for nogle dele, så den passer i hukommelsen; panelet siger, hvor mange. Tallene ændres ikke.

Hvis denne computer ikke kan tegne 3D, fungerer tabellen som før.

## Gruppér efter materiale, lag eller størrelse

{{ui:Group by}} har tre flere valg:

- {{ui:Category and material}}: en væg, et dæk eller et tag bygget af lag giver hvert lags materiale sin egen række, så gipsplade, stendere og isolering kan prissættes hver for sig. En del af bygningen med ét materiale får det materiales række, og en del uden materiale gemmes i en række kaldet »Intet materiale angivet«.
- {{ui:Category and layer}}: det samme, med lagets tykkelse i rækken (»Isolering, 100 mm«).
- {{ui:Category, type and door or window size}}: døre og vinduer deles efter bredde og højde (for eksempel 3'-0" × 6'-8" eller 914 × 2,032 mm).

For et lag er arealet vægens egen flade (eller dækkets eller tagets plan- eller overfladeareal), og volumenet er dette areal gange lagets tykkelse. Rækkens note siger, hvor mange tal der kom fra et lag. Lagene i en væg lægger sig sammen til det volumen, modellen angiver for den.

## Gem rækkerne eller åbningerne som CSV

{{ui:Save rows as CSV}} gemmer de rækker, du har sat flueben ved, med enhederne i hver overskrift, til et regneark. {{ui:Save openings schedule as CSV}} (kun når modellen har døre eller vinduer) gemmer hver dør og hvert vindue efter type, niveau og størrelse med dets antal.

## Hvad der måles

| Kategori | Mængder |
|---|---|
| Vægge | antal, længde, vægareal (én flade, med åbninger fratrukket), volumen |
| Dæk, plader, lofter og andre belægninger | antal, planareal, volumen |
| Tage | antal, planareal, tagflade, volumen |
| Fundamenter | antal, planareal, volumen |
| Søjler, bjælker og øvrige konstruktionsdele | antal, længde langs elementet, volumen |
| Gelændere, rør, kanaler og kabelforløb | antal, længde |
| Trapper | antal, volumen |
| Rum | antal, gulvareal, volumen |
| Døre, vinduer og alt andet | antal |

Hvor modelforfatteren har angivet en mængde i filen, bruges det tal. Ellers måles tallet ud fra elementets form. Hver mængde har en note, der siger, hvilken der er brugt, og hvor mange elementer der gav et tal.

:::note
En vægs længde målt ud fra formen går fra ende til ende, så to vægge, der overlapper i et hjørne, medregner begge hjørnet. Et volumen kræver en lukket form: et element, hvis form ikke er lukket, tælles med, men giver intet volumen. Et buet eller hjørnet vægelement måles som halvdelen af alle dets lodrette flader, og dets note siger det.
:::

## Når en nyere model kommer

Åbn den nyere fil, og skriv det samme {{ui:Model name}}. Før du tilføjer noget, siger panelet, hvor mange mængder der er nye, hvor mange der er ændret og fra hvad til hvad, og hvilke mængder fra den tidligere kopi der ikke længere findes i modellen. Vælg {{ui:Add to the takeoff}}: de ændrede mængder får deres nye tal, og dine navne, satser, spild og samlinger bliver stående. Mængder, der er væk fra modellen, beholder deres gamle tal; fjern dem selv, hvis designet har droppet dem.

Type- og niveaunavne er det, en mængde genkendes på. Hvis arkitekten omdøber en vægtype, kommer den som en ny mængde, og den gamle vises som væk.

## Filer, der læses

IFC-filer (IFC2x3, IFC4 og IFC4.3). En IFC-fil med veje, baner eller broer henter stadig sine infrastrukturmængder direkte, som før.

TakeoffCraft læser ikke `.rvt`-filer i denne udgivelse. Hvis arkitekten arbejder i Revit, så bed om en IFC-eksport af modellen (Fil, Eksporter, IFC) og åbn den.

En model kan hente op til 500 mængder ad gangen. Hvis der er flere, fravælg rækker eller gruppér efter kategori.
