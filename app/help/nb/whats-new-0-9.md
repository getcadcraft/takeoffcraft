---
title: Nyheter i 0.9 (tidligere)
summary: Les lengder i meter, centimeter eller millimeter, metriske arealer i m2 med veggareal, målestokkforvalg 1:75 og 1:150, enheter for vekt og temperatur, Bue med ti metoder, samt live-markører, Følg og en personliste.
keywords: nyheter 0.9, tidligere versjon, nyheter, hva er nytt, versjonsnotater, endringslogg, 0.9, vis lengder som, meter, centimeter, millimeter, metrisk, følg global, enheter, visningsenheter, m2, kvadratmeter, veggareal, målestokkforvalg, 1:75, 1:150, vekt, kilogram, kg, tonn, t, lb, temperatur, celsius, fahrenheit, bue, buemetoder, 3-punkts bue, radius, live, markører, følg, personliste, klasse, verktøytips, layout, nyheter, versjonsnotater, endringer, 0.8, 0.8.1, versjon, nye funksjoner, tell alt, tegnforklaring, symboltegnforklaring, hele settet, prishukommelse, tidligere prosjekter, siste prosjekt, typisk pris, leverandør, lager, leveringstid, restordre, bestillingsliste, mangel, problempanel, assistent, språk, inndataenheter, verktøylinjerader, DWG
from: f4322ba2
---

Dette er hva som endret seg i TakeoffCraft 0.9, sammenlignet med 0.8.1. Det er en liten utgivelse for denne appen: lengder kan nå leses i meter, centimeter eller millimeter, arealer og målestokker følger metrisk arbeid ordentlig, og Bue har ti måter å tegne på. Live-økter viser også hvem som er hvor.

## Nytt

### Les lengder i meter, centimeter eller millimeter

- **Vis lengder som.** {{ui:Innstillinger}} › {{ui:TakeoffCraft}} har {{ui:Vis lengder som}} med {{ui:Følg Global}}, {{ui:Fot og tommer}}, m, cm og mm. {{ui:Følg Global}} bruker lengdeenheten i meter du har merket med stjerne i {{ui:Innstillinger}} › {{ui:Globalt}} › {{ui:Enheter}}, og fot og tommer når ingen er merket med stjerne. Det endrer hvordan lengder vises på arket, i statuslinjen og i panelene, inkludert høyder, dybde, tykkelse og etasjene. Et tall uten enhet som skrives i et høydefelt, leses i enheten som vises.
- **Bare visning.** Mengder, kostnader og eksporter beregnes ut fra de nøyaktige lengdene. Valget mellom 1/16, 1/8 og 1/4 tomme gjelder bare for fot og tommer. Se [Vis lengder i meter](topic:show-lengths-in-meters).
- **Enheter for vekt.** En post med {{ui:Oppgitt mengde (ingen tegning)}} kan nå være i lb, TON, kg eller t, og prises per enhet.
- **Temperatur.** Hver post har et valgfritt felt for {{ui:Temperatur}} i postredigeringen, skrevet i grader C eller F. {{ui:Vis temperaturer som}} i {{ui:Innstillinger}} › {{ui:TakeoffCraft}} tilbyr {{ui:Følg Global}}, °C eller °F.

### Arealer og målestokker for metrisk arbeid

- **Arealer i m2 på tegningen.** Et areal målt med en metrisk post står nå som m2 på tegningsmerket og i markeringspanelet, og også i tabellen, i stedet for SF. Regelen er m2 når posten prises i metrisk, eller lengder vises i m, cm eller mm, og SF ellers.
- **Veggareal.** En lineær post med en høyde viser også veggarealet (lengde ganger høyde) i postlisten, og som en merknadsrad under tabellen med mengder etter post.
- **Målestokkforvalg 1:75 og 1:150.** De ligger i listen {{ui:Forvalg}} i gruppen {{ui:Målestokk}}, som nå har 32 målestokker. Se [Målestokkforvalg](topic:scale-presets).

### Bue med ti metoder

- Mens {{ui:Bue}} er på (verktøylinjeknapp eller {{key:R}}), vises en {{ui:Buemetode}}-boks i arklinjen: 3-punkt, Start, Sentrum, Slutt, Start, Sentrum, Vinkel, Start, Sentrum, Lengde, Start, Slutt, Vinkel, Start, Slutt, Retning, Start, Slutt, Radius, Sentrum, Start, Slutt, Sentrum, Start, Vinkel og Sentrum, Start, Lengde. Vinkel, lengde, radius og retning kan klikkes eller skrives inn. Den fungerer i lineære løp, arealer og utklippinger. Filer lagret før 0.9 åpnes på samme måte. Se [Tegn buer med ti metoder](topic:draw-arcs-ten-methods).

### Samarbeid

- **Se hverandres markører.** I en Live-økt vises hver persons peker på arket med navn og farge, og en stiplet boks rundt markeringene de har valgt. Personer på et annet ark listes med navnet på det arket. Se [Arbeid live med andre](topic:work-live).
- **Følg en person, og personlisten.** Knappen {{ui:Personer}} i en Live-økt lister hver person med verktøyet de bruker, arket de er på, og når de sist redigerte. {{ui:Følg}} flytter visningen din med deres, og verten kan bruke {{ui:Be alle om å følge meg}}. Se [Følg en kollega i en Live-økt](topic:follow-a-teammate).

## I alle apper

- **Verktøytips og startveiledning.** Svevtekst er et Bootstrap-verktøytips, og startveiledningen kan lukkes.
- **Rullbare fanerader.** En panelets fanerad som ikke får plass, ruller i stedet for å bli kuttet av.
- **Fanetitler.** Nettleserfanen viser `<document> - TakeoffCraft | CadCraft`.
- **Layout.** Layoutlisten i {{ui:Innstillinger}} er en rullegardin som viser valgt layout.
- **Språk.** Språket du velger når nå også ordene siden skriver ut selv, for eksempel Ny, Åpne og Lagre. Språk andre enn engelsk er maskinoversettelser (utkast) til en morsmålstalende har lest dem.

## Kjente begrensninger

- Visning av lengder, enheter for vekt og temperatur og de nye forvalgene er kontrollert med tester og på siden. Ikke alle paneler ved alle enheter er kontrollert for hånd.
- Personlisten er ikke kontrollert for hånd med en ekte klasse med lærer og elever.
- Språk andre enn engelsk er maskinoversettelser.
- Windows-installasjonsprogrammene er ikke kodesignert (Mer info, deretter Kjør likevel). macOS-diskbildet er ikke notarisert (høyreklikk, deretter {{ui:Åpen}}).

## Tidligere: 0.8 og 0.8.1

Dette er hva som endret seg i TakeoffCraft 0.8 (utgitt 2026-11-01) og 0.8.1 (2026-11-02), sammenlignet med 0.7. En tegnforklaring for symboler kan nå telles på tvers av hele settet samtidig, et nytt mengdeuttak kan starte fra prisene i tidligere prosjekter, og mengdeuttaket kan sjekkes mot en leverandørs lager. 0.8.1 er en feilrettingsutgivelse.

### Nytt

**Tell alt i settet**

- **Merk tegnforklaringen én gang.** {{ui:Tell alt}} på verktøylinjen leser en tegnforklaring: dra en boks rundt symbolene og navnene som står ved siden av dem. Hvert symbol listes med bildet og navnet sitt, og navnet blir postens navn. Fjern haken for det du ikke vil ha, og velg deretter {{ui:Tell på N ark}}. En linje viser arket som søkes i, {{ui:Avbryt}} stopper kjøringen, og siden kan fortsatt brukes.
- **Alle ark i én kjøring.** Hvert symbol telles på hvert åpne ark. Et ark tegnet i en annen målestokk søkes i den målestokken, og symboler finnes uansett hvilken rett vinkel de er vendt i. Symbolene i tegnforklaringen selv telles ikke på arket den står på.
- **Gjennomgang før noe legges til.** Hver total har en lenke per ark («E-103: 4») som går til det arket. Klikk på en boks for et treff for å utelate det, og klikk igjen for å ta det med. Treffsikkerhetsnivået (50% til 100%) filtrerer bare det som ble funnet; ingenting søkes på nytt.
- **Ett trinn å angre.** {{ui:Legg til N markeringer}} lager en mengdepost per symbol, med en markering på hvert treff. Et navn som allerede er en av dine mengdeposter, gjenbrukes. {{key:Ctrl+Z}} fjerner alle poster og markeringer igjen. Det du godtar, mater også {{ui:Lært}}.
- **Symboler i alle vinkler.** Kryss av for {{ui:Symboler i alle vinkler}} før du teller, for også å finne symboler som er vendt i en vinkel som ikke er en rett vinkel. Søket snur da hvert symbol hver 15. grad, og et symbol som ikke er rundt, kan ta opptil seks ganger så lang tid.
- **Hva det er.** Enkel symbolgjenkjenning på dine egne ark, uten trent modell, og ingenting forlater datamaskinen din. På et oppdiktet sett med 200 ark tok det 9.4 sekunder fra start til slutt i Chrome på en rask stasjonær datamaskin; ekte tegningssett vil være tregere. Se [Tell alt i settet](topic:count-everything).

**Prishukommelse fra tidligere prosjekter**

- **TakeoffCraft husker takstene dine.** Når du lagrer et mengdeuttak, huskes hver prissatt post som brukes, etter navn og type: materialpris, arbeidspris, svinn og enhet. De siste 12 prosjektene beholdes for hvert navn. Det lagres på denne datamaskinen ved siden av prisbiblioteket, aldri inne i en mengdefil, og ingenting sendes noe sted.
- **Start et nytt mengdeuttak fra det.** {{ui:Priser}} på verktøylinjen viser for hver post takstene fra sist prosjekt, de typiske takstene og spennet. {{ui:Bruk siste}} eller {{ui:Bruk typisk}} setter pris på én post, og {{ui:Sett pris på N poster uten pris fra minnet}} fyller hver post som ikke har pris ennå. Hver bruk er ett trinn å angre.
- **Eldre arbeid.** {{ui:Lær av et tidligere mengdeuttak…}} husker de prissatte postene i et lagret mengdeuttak (.json).
- **Se det, endre det, glem det.** {{ui:Alt som er husket}} lister hvert navn. Søppelbøtte-knappen glemmer ett, og {{ui:Tøm alle priser}} glemmer alle. Slå av {{ui:Husk prisene mine når jeg lagrer et mengdeuttak}} for å stoppe. En pris per EA settes aldri på en post per fot. Se [Prishukommelse fra tidligere prosjekter](topic:price-memory).

**Leverandørlager og leveringstider**

- **Sjekk mot en leverandørs liste.** {{ui:Levering}} på verktøylinjen tar inn en leverandørs lagerliste ({{ui:Legg til en leverandørfil…}}), en CSV eller et regneark, og sjekker det mengdeuttaket trenger, med svinn, mot den. Opptil fem filer beholdes. Ingenting sendes, og ingenting spør en leverandør: du tar med filen.
- **Hva den sier.** Korte poster kommer først: «Mangler 120 EA», «Leveringstid 21 dager», «På restordre», «Enhet avviker», «Ingen lagertall» eller «På lager». {{ui:Lengste ønskede ventetid (dager)}} starter på 14.
- **Bestillingsliste.** {{ui:Bestillingsliste (CSV)}} laster ned de korte postene med mengden som mangler, leverandøren og leveringstiden.
- **Priser inn i biblioteket.** Hvis filen har priser, setter {{ui:Priser inn i Biblioteket}} materialprisen for hvert bibliotekelement med samme navn og enhet. Pris på nytt fra biblioteket for åføre dem inn i mengdeuttaket.
- **I Problemer-panelet.** En mangel er en advarsel, og en lang ventetid er en merknad, under «Leverandørlager». Du kan godta en med en begrunnelse, og begrunnelsen lagres i mengdeuttaket. Se [Sjekk leverandørlager og leveringstider](topic:supplier-stock).

**KI-assistenter**

- **Verktøy for alle tre.** Når assistenter er tillatt i {{ui:Innstillinger}}, kan en assistent lese en tegnforklaring (`legend_open`), kjøre tellingen (`legend_count_start`, deretter `legend_count_status` og `legend_count_result`) og legge den til (`legend_count_add`, som kan forhåndsvise først). Den kan lese de huskede prisene (`prices_list`) og sette pris på poster fra dem (`prices_apply`, som kan forhåndsvise først), og lese leverandørsjekken (`supply_check`). Å legge til en leverandørfil er fortsatt din oppgave. Se [Bruk TakeoffCraft med KI-assistenter](topic:use-with-ai-assistants).

**I alle apper**

- **Språk.** Femtifire språk til sammen; ti er nye (litauisk, latvisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili og usbekisk). Språk andre enn engelsk er maskinoversettelser (utkast) til en morsmålstalende har lest dem.
- **Inndataenheter.** {{ui:Innstillinger}} › {{ui:Globalt}} › {{ui:Inndataenheter}} bestemmer hva en styreflate, sideknappene på en mus, en penn, en 3D-mus, en spillkontroller eller en MIDI-kontroller gjør, for alle apper eller for én. Se [Bruk styreflate, 3D-mus eller kontroller](common:input-devices).
- **Verktøylinjerader.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Verktøylinjerader}} tilbyr {{ui:Bryt}} (startvalget), {{ui:2 rader}} og {{ui:1 rad}}. Grupper som ikke får plass, ruller sideveis. Se [Ordne panelene](common:arrange-panels).
- **Problemer-panelet.** Det delte panelet med advarsler og merknader har nå leverandørlagersjekken over, ved siden av de andre kontrollene.
- **Tillegg.** Tillegg følger kontolisten din. Se [Tillegg og kontolisten din](common:addons-basics).
- **Koble til KI-en din.** CadCraft Studio er navet: koble til assistenten din én gang for alle åtte appene. Studio har ingen KI av sin egen.

### Rettet i 0.8.1

- **DWG-klasseseksjonen.** Klasseseksjonen i en DWG-fil ble lest som feil type. Dette er rettet i TakeoffCraft og i fire andre apper.
- **Studio kan bytte språk mens det kjører.** Tidligere var Studio og de pakkede utgavene bare på engelsk. Dette er ikke testet i skrivebordsversjonen på alle plattformer; si fra hvis språket ikke endrer seg.

### Ikke i denne versjonen ennå

- **Ikke kodesignert.** Windows kan advare, og på en Mac høyreklikker du og velger {{ui:Åpen}} første gang. Butikkversjonene (Microsoft Store, Google Play, App Store) er på vent, og iPad- og iPhone-versjonen ble ikke bygget på nytt for 0.8.1.
- **Studio-oppdateringer.** Windows-installasjonsprogrammet og Linux-pakkene sjekker én gang om dagen og spør først. Den bærbare zip-filen forteller bare at det finnes en oppdatering, og macOS og APK oppdaterer ikke seg selv. Den macOS-baserte .dmg-filen for 0.8 følger utgivelsen.
- **Koble til KI-en din.** Ett-klikks tilkobling i Studio, den hostede koblingen for KI i nettleseren, din egen API-nøkkel i Studio og en publisert MCP-pakke er ikke lovet i denne versjonen.
- **Tell alt.** Det krever symboler tegnet på samme måte som i tegnforklaringen, og et symbol med en vegg eller en lang linje gjennom seg kan bli oversett. Speilvendte symboler finnes ikke, og et ark uten målestokk som er tegnet i en annen størrelse, søkes i tegnforklaringens størrelse. Kontroller treffene på første ark før du stoler på resten.
- **Leverandørlager.** Lagertallene er bare så oppdaterte som filen du legger til. Sjekken spør aldri en leverandør.
- **Språk.** Verktøylinjen i appen for tamil flyter over.

Alt annet finnes i [ikke bygget ennå](topic:not-built-yet). For utgivelsen før denne, se [Nyheter i 0.7](topic:whats-new-0-7).
