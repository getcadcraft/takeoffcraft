---
title: Nytt i 0.9
summary: Les lengder i meter, centimeter eller millimeter, metriske arealer i m2 med veggareal, målestokkforvalgene 1:75 og 1:150, vekt- og temperaturenheter, Bue med ti metoder, og live-markører, Følg og en personliste.
keywords: nytt i, hva er nytt, utgivelsesnotater, endringslogg, 0.9, vis lengder som, meter, centimeter, millimeter, metrisk, følg global, enheter, visningsenheter, m2, kvadratmeter, veggareal, målestokkforvalg, 1:75, 1:150, vekt, kilogram, kg, tonn, ton, lb, temperatur, celsius, fahrenheit, bue, buemetoder, 3-punktsbue, radius, live, markører, følg, personliste, klasse, verktøytips, layout, endringer, 0.8, 0.8.1, versjon, nye funksjoner, tell alt, legende, symbollegende, hele settet, prishukommelse, tidligere jobber, forrige jobb, typisk pris, leverandør, lager, leveringstid, restordre, bestillingsliste, mangel, problempanel, assistent, språk, inndataenheter, verktøylinjerader, dwg
from: 6182b998
---

Dette er hva som endret seg i TakeoffCraft 0.9, sammenlignet med 0.8.1. Det er en liten utgivelse for denne appen: lengder kan nå leses i meter, centimeter eller millimeter, arealer og målestokker følger metrisk arbeid skikkelig, og Bue har ti måter å tegne på. Live-økter viser også hvem som er hvor.

## Nytt

### Les lengder i meter, centimeter eller millimeter

- **Vis lengder som.** {{ui:Settings}} › {{ui:TakeoffCraft}} har {{ui:Show lengths as}} med {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm og mm. {{ui:Follow Global}} bruker den metriske lengdeenheten du merket med stjerne i {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}, og fot og tommer når ingen er merket. Det endrer hvordan lengder leses på arket, i statuslinjen og i panelene, inkludert høyder, dybde, tykkelse og nivåene. Et bart tall skrevet i et høydefelt leses i enheten som vises.
- **Bare visning.** Mengder, kostnader og eksporter beregnes fra de nøyaktige lengdene. Valget mellom 1/16, 1/8 og 1/4 tomme vises bare for fot og tommer. Se [Vis lengder i meter](topic:show-lengths-in-meters).
- **Vektenheter.** En post {{ui:Typed quantity (no drawing)}} kan nå være i lb, TON, kg eller t, og prises per enhet.
- **Temperatur.** Hver post har et valgfritt felt {{ui:Temperature}} i postredigeringen, skrevet i grader C eller F. {{ui:Show temperatures as}} i {{ui:Settings}} › {{ui:TakeoffCraft}} tilbyr {{ui:Follow Global}}, °C eller °F.

### Arealer og målestokker for metrisk arbeid

- **Arealer i m2 på tegningen.** Et areal målt med en metrisk post sier nå m2 på tegningsmerket og markeringspanelet, og i tabellen, i stedet for SF. Regelen er m2 når posten prises i metrisk, eller lengder vises i m, cm eller mm. Ellers brukes SF.
- **Veggareal.** En lineær post med en høyde viser også veggarealet (lengde ganger høyde) i postlisten, og som en merknadsrad under tabellen over mengder per post.
- **Målestokkforvalg 1:75 og 1:150.** De er i listen {{ui:Preset}} i gruppen {{ui:Scale}}, som nå har 32 målestokker. Se [Målestokkforvalg](topic:scale-presets).

### Bue med ti metoder

- Mens {{ui:Arc}} er på (verktøylinjeknappen eller {{key:R}}), vises en boks {{ui:Arc method}} i arklinjen: 3-punkt, Start, Sentrum, Slutt, Start, Sentrum, Vinkel, Start, Sentrum, Lengde, Start, Slutt, Vinkel, Start, Slutt, Retning, Start, Slutt, Radius, Sentrum, Start, Slutt, Sentrum, Start, Vinkel og Sentrum, Start, Lengde. Vinkel, lengde, radius og retning kan klikkes eller skrives inn. Det virker i lineære løp, arealer og utsparinger. Filer lagret før 0.9 åpnes likt. Se [Tegn buer med ti metoder](topic:draw-arcs-ten-methods).

### Samarbeid

- **Se hverandres markører.** I en live-økt vises hver persons peker på arket med navn og farge, med en stiplet boks rundt markeringene de har valgt. Folk på et annet ark listes med navnet på det arket. Se [Arbeid live med andre](topic:work-live).
- **Følg en person, og personlisten.** Knappen {{ui:People}} i en live-økt lister hver person med verktøyet de bruker, arket de er på, og når de sist redigerte. {{ui:Follow}} flytter visningen din med deres, og verten kan bruke {{ui:Ask everyone to follow me}}. Se [Følg en teamkollega i en live-økt](topic:follow-a-teammate).

## I alle apper

- **Verktøytips og startveiledningen.** Svevetekst er et Bootstrap-verktøytips, og starttipset kan lukkes.
- **Rullbare fanelinjer.** En panelfanelinje som ikke får plass, ruller i stedet for å bli kuttet av.
- **Fanetitler.** Nettleserfanen viser `<document> - TakeoffCraft | CadCraft`.
- **Layout.** Layoutlisten i {{ui:Settings}} er en rullegardin som viser den valgte layouten.
- **Språk.** Språket du velger, gjelder nå også ordene siden skriver ut selv, som Ny, Åpne og Lagre. Andre språk enn engelsk er maskinutkast til en morsmålstalende har lest dem.

## Ærlige begrensninger

- Lengdevisning, vekt- og temperaturenheter og de nye forvalgene er kontrollert av tester og på siden. Hvert panel ved hver enhet er ikke kontrollert for hånd.
- Personlisten er ikke kontrollert for hånd med en ekte klasse av lærer og elever.
- Språk andre enn engelsk er maskinutkast.
- Windows-installasjonsprogrammer er ikke kodesignert ({{ui:More info}}, så {{ui:Run anyway}}). Macens diskbilde er ikke notarisert (høyreklikk, så {{ui:Open}}).

## Tidligere: 0.8 og 0.8.1

Dette er hva som endret seg i TakeoffCraft 0.8 (utgitt 2026-11-01) og 0.8.1 (2026-11-02), sammenlignet med 0.7. En symbollegende kan nå telles over hele settet på én gang, et nytt mengdeuttak kan starte fra prisene fra tidligere jobber, og mengdeuttaket kan sjekkes mot en leverandørs lager. 0.8.1 er en feilrettingsutgivelse.

### Nytt

**Tell alt i settet**

- **Tegn en boks rundt legenden én gang.** {{ui:Count everything}} i verktøylinjen leser en symbollegende: dra en boks rundt symbolene og navnene som står skrevet ved siden av dem. Hvert symbol listes med bildet og navnet sitt, og navnet blir postens navn. Fjern avkryssingen for det du ikke vil ha, og velg så {{ui:Count on N sheets}}. En linje viser arket som søkes i, {{ui:Cancel}} stopper kjøringen, og siden forblir brukbar.
- **Alle ark i én kjøring.** Hvert symbol telles på hvert åpne ark. Et ark tegnet i en annen målestokk søkes i den målestokken, og symboler finnes vendt i enhver rett vinkel. Legendens egne symboler telles ikke på sitt eget ark.
- **Gjennomgang før noe legges til.** Hver sum har en lenke per ark («E-103: 4») som går til det arket. Klikk på en boks i et funn for å utelate den, og klikk igjen for å hente den tilbake. Treffgraden (50 % til 100 %) filtrerer bare det som ble funnet. Ingenting søkes på nytt.
- **Ett angretrinn.** {{ui:Add N marks}} lager en tellepost per symbol med en markering på hvert funn. Et navn som allerede er en tellepost hos deg, gjenbrukes. {{key:Ctrl+Z}} tar alle poster og markeringer tilbake. Det du godtar, mates også inn i {{ui:Learned}}.
- **Symboler i alle vinkler.** Kryss av for {{ui:Symbols at any angle}} før du teller, for også å finne symboler vendt i en vinkel som ikke er rett. Søket dreier da hvert symbol hvert 15. grad, og et symbol som ikke er rundt, kan ta opptil seks ganger så lang tid.
- **Hva det er.** Enkel symbolmatching på dine egne ark, uten trent modell, og ingenting forlater datamaskinen din. På et oppdiktet sett på 200 ark tok det 9,4 sekunder fra start til slutt i Chrome på en rask stasjonær maskin. Ekte tegningssett blir tregere. Se [Tell alt i settet](topic:count-everything).

**Prishukommelse fra dine egne jobber**

- **TakeoffCraft husker prisene dine.** Når du lagrer et mengdeuttak, huskes hver priset post som brukes, med navn og type: materialenhetspris, arbeidsenhetspris, svinn og enhet. De siste 12 jobbene beholdes for hvert navn. Det lagres på denne datamaskinen ved siden av prislisten Library, aldri inne i en mengdeuttaksfil, og ingenting sendes noe sted.
- **Start et nytt mengdeuttak fra den.** {{ui:Prices}} på verktøylinjen viser, for hver post, siste jobbs priser, typiske priser og intervallet. {{ui:Use last}} eller {{ui:Use typical}} prisetter én post, og {{ui:Price N unpriced items from memory}} fyller hver post som ennå ikke har pris. Hver bruk er ett angretrinn.
- **Eldre arbeid.** {{ui:Learn from a past takeoff…}} husker de prisede postene i et lagret mengdeuttak (.json).
- **Se det, endre det, glem det.** {{ui:Everything remembered}} lister hvert navn. Søppelbøtteknappen glemmer ett, og {{ui:Clear all prices}} glemmer alt. Slå av {{ui:Remember my prices when I save a takeoff}} for å stoppe. En pris per EA settes aldri på en post per fot. Se [Prishukommelse fra dine tidligere jobber](topic:price-memory).

**Leverandørens lager og leveringstider**

- **Sjekk mot en leverandørs liste.** {{ui:Supply}} på verktøylinjen tar en leverandørs lagerliste ({{ui:Add a supplier file…}}), en CSV eller et regneark, og sjekker det mengdeuttaket trenger, med svinn, mot den. Opptil fem filer beholdes. Ingenting sendes, og ingenting spør en leverandør: du tar med filen.
- **Hva den sier.** Korte poster kommer først: «Mangler 120 EA», «Leveringstid 21 dager», «På restordre», «Enheten er ulik», «Mangler lagertall» eller «På lager». {{ui:Longest wait wanted (days)}} starter på 14.
- **Bestillingsliste.** {{ui:Order list (CSV)}} laster ned de korte postene med mengden som mangler, leverandøren og leveringstiden.
- **Priser inn i Biblioteket.** Hvis filen har priser, setter {{ui:Prices into the Library}} materialprisen for hvert bibliotekselement med samme navn og enhet. Last på nytt fra biblioteket for å hente dem inn i mengdeuttaket.
- **I problempanelet.** En mangel er en advarsel, og lang ventetid er en merknad, under «Leverandørlager». Du kan godta en med en grunn, og grunnen lagres i mengdeuttaket. Se [Sjekk leverandørens lager og leveringstider](topic:supplier-stock).

**AI-assistenter**

- **Verktøy for alle tre.** Med assistenter tillatt i {{ui:Settings}} kan en assistent lese en legende (`legend_open`), kjøre tellingen (`legend_count_start`, deretter `legend_count_status` og `legend_count_result`) og legge den til (`legend_count_add`, som kan forhåndsvise først). Den kan lese de huskede prisene (`prices_list`) og sette priser på poster fra dem (`prices_apply`, som kan forhåndsvise først), og lese leverandørsjekken (`supply_check`). Å legge til en leverandørfil er fortsatt din egen oppgave. Se [Bruk TakeoffCraft med AI-assistenter](topic:use-with-ai-assistants).

**I alle apper**

- **Språk.** Femtifire språk til sammen. Ti er nye: litauisk, lettisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili og usbekisk. Andre språk enn engelsk er maskinutkast til en morsmålstalende har lest dem.
- **Inndataenheter.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} bestemmer hva en styreplate, musens sideknapper, en penn, en 3D-mus, en spillkontroller eller en MIDI-kontroller gjør, for alle apper eller for én. Se [Bruk styreplate, 3D-mus eller kontroller](common:input-devices).
- **Verktøylinjerader.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} tilbyr {{ui:Wrap}} (startverdien), {{ui:2 rows}} og {{ui:1 row}}. Grupper som ikke får plass, ruller sideveis. Se [Ordne panelene](common:arrange-panels).
- **Problempanelet.** Det felles panelet med advarsler og merknader har nå leverandørlagersjekken over, ved siden av de andre kontrollene.
- **Tillegg.** Tillegg følger kontolisten din. Se [Tillegg og kontolisten din](common:addons-basics).
- **Koble til din AI.** CadCraft Studio er navet: koble assistenten din til én gang for alle åtte appene. Studio har ingen egen KI.

### Rettet i 0.8.1

- **DWG-klasseseksjonen.** Klasseseksjonen i en DWG-fil ble lest som feil type. Dette er rettet i TakeoffCraft, og i fire andre apper.
- **Studio kan bytte språk mens det kjører.** Før var Studio og dets pakkede utgaver bare på engelsk. Dette er ikke testet i skrivebordsversjonen på alle plattformer. Si fra hvis språket ikke bytter.

### Ikke i denne versjonen ennå

- **Ikke kodesignert.** Windows kan advare, og på en Mac høyreklikker du og velger {{ui:Open}} første gang. Butikkversjonene (Microsoft Store, Google Play, App Store) er satt på vent, og iPad- og iPhone-versjonen ble ikke bygget på nytt for 0.8.1.
- **Studio-oppdateringer.** Windows-installasjonsprogrammet og Linux-pakkene ser etter oppdateringer én gang om dagen og spør først. Den bærbare zip-filen forteller bare om dem, og macOS og APK oppdaterer seg ikke selv. macOS .dmg for 0.8 følger utgivelsen.
- **Koble til din AI.** Ett-klikks-tilkobling i Studio, den hostede koblingen for AI i nettleseren, din egen API-nøkkel i Studio og en publisert MCP-pakke er ikke lovet i denne versjonen.
- **Tell alt.** Det krever symboler tegnet på samme måte som i legenden, og et symbol med en vegg eller en lang linje gjennom seg kan bli oversett. Speilvendte symboler finnes ikke, og et ark uten målestokk som er tegnet i en annen størrelse, søkes i legendens størrelse. Kontroller funnene på det første arket før du stoler på resten.
- **Leverandørlager.** Lagertallene er bare så oppdaterte som filen du legger til. Sjekken spør aldri en leverandør.
- **Språk.** Appbaren for tamil flyter over.

Alt annet er i [Ikke bygget ennå](topic:not-built-yet). For utgivelsen før denne, se [Nytt i 0.7](topic:whats-new-0-7).
