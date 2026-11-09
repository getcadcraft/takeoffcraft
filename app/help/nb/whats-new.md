---
title: Nytt i 0.8 og 0.8.1
summary: Tell en hel tegnforklaring på tvers av alle åpne ark i én kjøring, sett pris på poster etter satsene fra tidligere jobber, sjekk mengdeuttaket mot en leverandørs lager og leveringstider, og nye assistentverktøy for alle tre, pluss de felles endringene i 0.8 og rettelsen i 0.8.1 for DWG-filer.
keywords: hva er nytt, nytt, versjonsnotater, endringslogg, endringer, 0.8, 0.8.1, versjon, nye funksjoner, tell alt, tegnforklaring, symbolforklaring, hele settet, prishukommelse, tidligere jobber, siste jobb, typisk pris, leverandør, lager, leveringstid, restordre, bestillingsliste, mangel, problemer, assistent, språk, inndataenheter, verktøylinjerader, dwg
from: a04adef6
---

Dette er hva som endret seg i TakeoffCraft 0.8 (utgitt 2026-11-01) og 0.8.1 (2026-11-02), sammenlignet med 0.7. En symbolforklaring kan nå telles på tvers av hele settet samtidig, et nytt mengdeuttak kan starte fra prisene i tidligere jobber, og mengdeuttaket kan sjekkes mot en leverandørs lager. 0.8.1 er en rettelsesutgave.

## Nytt

### Tell alt i hele settet

- **Merk tegnforklaringen én gang.** {{ui:Tell alt}} i verktøylinjen leser en tegnforklaring: dra en boks rundt symbolene og navnene som står skrevet ved siden av dem. Hvert symbol listes med bilde og navn, og navnet blir postens navn. Fjern det du ikke vil ha, og velg deretter {{ui:Tell på N ark}}. En linje viser arket som søkes i, {{ui:Cancel}} stopper kjøringen, og siden kan fortsatt brukes.
- **Hvert ark i én kjøring.** Hvert symbol telles på hvert åpne ark. Et ark tegnet i en annen målestokk søkes i den målestokken, og symboler finnes uansett hvilken rett vinkel de er vridd i. Tegnforklaringens egne symboler telles ikke på sitt eget ark.
- **Gjennomgang før noe legges til.** Hver sum har en lenke per ark («E-103: 4») som går til det arket. Klikk en boks på et treff for å utelate det, og klikk igjen for å ta det med igjen. Treffsikkerhetsnivået (50% til 100%) filtrerer bare det som ble funnet; ingenting søkes på nytt.
- **Ett angrertrinn.** {{ui:Legg til N markeringer}} lager én tellepost per symbol med en markering på hvert treff. Et navn som allerede er en tellepost av deg, brukes på nytt. {{key:Ctrl+Z}} tar tilbake alle poster og markeringer. Det du godtar, mates også inn i {{ui:Lært}}.
- **Symboler i alle vinkler.** Kryss av for {{ui:Symbols at any angle}} før du teller, for også å finne symboler som er vridd i en vinkel som ikke er en rett vinkel. Søket snur da hvert symbol hvert 15. grad, og et symbol som ikke er rundt, kan ta opptil seks ganger så lang tid.
- **Hva det er.** Enkel symbolmatching på dine egne ark, uten opplært modell, og ingenting forlater datamaskinen din. På et oppdiktet sett med 200 ark tok det 9.4 sekunder fra start til slutt i Chrome på en rask stasjonær maskin; ekte planssett vil være tregere. Se [Tell alt i hele settet](topic:count-everything).

### Prishukommelse fra egne jobber

- **TakeoffCraft husker satsene dine.** Når du lagrer et mengdeuttak, huskes hver prissatt post som brukes, etter navn og type: materialsats, arbeidssats, svinn og enhet. De siste 12 jobbene beholdes for hvert navn. Det lagres på denne datamaskinen ved siden av prisbiblioteket, aldri inne i en mengdeuttaksfil, og ingenting sendes noe sted.
- **Start et nytt mengdeuttak fra det.** {{ui:Priser}} på verktøylinjen viser, for hver post, sist jobbs satser, typiske satser og spennet. {{ui:Bruk siste}} eller {{ui:Bruk typisk}} setter pris på én post, og {{ui:Sett pris på N uprisede poster fra minnet}} fyller hver post som ikke har pris ennå. Hver bruk er ett angrertrinn.
- **Eldre arbeid.** {{ui:Lær av et tidligere mengdeuttak…}} husker de prissatte postene i et lagret mengdeuttak (.json).
- **Se det, endre det, glem det.** {{ui:Alt som er husket}} lister hvert navn; søppelbøtte-knappen glemmer ett, og {{ui:Tøm alle priser}} glemmer alle. Slå av {{ui:Husk prisene mine når jeg lagrer et mengdeuttak}} for å stoppe. En pris per stykk settes aldri på en post per fot. Se [Prishukommelse fra tidligere jobber](topic:price-memory).

### Leverandørlager og leveringstider

- **Sjekk mot en leverandørs liste.** {{ui:Levering}} på verktøylinjen tar en leverandørs lagerliste ({{ui:Legg til en leverandørfil…}}), en CSV eller et regneark, og sjekker det mengdeuttaket trenger, med svinn, mot den. Opptil fem filer beholdes. Ingenting sendes, og ingenting spør en leverandør: du leverer filen.
- **Hva den sier.** Korte poster kommer først: «Mangler 120 EA», «Leveringstid 21 dager», «På restordre», «Enhet avviker», «Mangler lagertall» eller «På lager». {{ui:Lengste ønskede ventetid (dager)}} starter på 14.
- **Bestillingsliste.** {{ui:Bestillingsliste (CSV)}} laster ned de korte postene med mengden som mangler, leverandøren og leveringstiden.
- **Priser inn i biblioteket.** Hvis filen har priser, setter {{ui:Priser inn i Biblioteket}} materialprisen for hvert bibliotekelement med samme navn og enhet. Sett pris på nytt fra biblioteket for å føre dem inn i mengdeuttaket.
- **I panelet Problemer.** En mangel er en advarsel, og lang ventetid er en merknad, under «Leverandørlager». Du kan godta en med en begrunnelse, og begrunnelsen lagres i mengdeuttaket. Se [Sjekk leverandørlager og leveringstider](topic:supplier-stock).

### AI-assistenter

- **Verktøy for alle tre.** Med assistenter tillatt i {{ui:Innstillinger}} kan en assistent lese en tegnforklaring (`legend_open`), kjøre tellingen (`legend_count_start`, deretter `legend_count_status` og `legend_count_result`) og legge den til (`legend_count_add`, som kan forhåndsvise først). Den kan lese de huskede prisene (`prices_list`) og sette pris på poster fra dem (`prices_apply`, som kan forhåndsvise først), og lese leverandørsjekken (`supply_check`). Å legge til en leverandørfil er fortsatt din oppgave. Se [Bruk TakeoffCraft med AI-assistenter](topic:use-with-ai-assistants).

### I alle apper

- **Språk.** Femtifire språk til sammen; ti er nye (litauisk, lettisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili og usbekisk). Språk andre enn engelsk er maskinelle utkast til en morsmålstalende har lest dem.
- **Inndataenheter.** {{ui:Innstillinger}} › {{ui:Globalt}} › {{ui:Inndataenheter}} angir hva en styreflate, sideknappene på en mus, en penn, en 3D-mus, en spillkontroller eller en MIDI-kontroller gjør, for alle apper eller for én. Se [Bruk styreflate, 3D-mus eller kontroller](common:input-devices).
- **Verktøylinjerader.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Verktøylinjerader}} tilbyr {{ui:Bryt}} (startverdien), {{ui:2 rader}} og {{ui:1 rad}}; grupper som ikke får plass, ruller sideveis. Se [Ordne panelene](common:arrange-panels).
- **Panelet Problemer.** Det felles panelet med advarsler og merknader har nå lagersjekken fra leverandøren over, ved siden av de andre sjekkene.
- **Tillegg.** Tillegg følger kontolisten din. Se [Tillegg og kontolisten din](common:addons-basics).
- **Koble til AI-en din.** CadCraft Studio er navet: koble til assistenten din én gang for alle åtte appene. Studio har ingen egen AI.

## Rettet i 0.8.1

- **DWG-klasseseksjon.** Klasseseksjonen i en DWG-fil ble lest som feil type. Dette er rettet i TakeoffCraft og i fire andre apper.
- **Studio kan bytte språk mens det kjører.** Tidligere var Studio og dets pakkede utgaver bare på engelsk. Dette er ikke testet i skrivebordsversjonen på alle plattformer; si fra hvis språket ikke bytter.

## Ikke i denne versjonen ennå

- **Ikke kodesignert.** Windows kan advare, og på en Mac høyreklikker du og velger {{ui:Åpen}} første gang. Butikkversjonene (Microsoft Store, Google Play, App Store) er på vent, og iPad- og iPhone-versjonen ble ikke bygget på nytt for 0.8.1.
- **Studio-oppdateringer.** Windows-installasjonsprogrammet og Linux-pakkene sjekker én gang i døgnet og spør først. Den portable zip-filen sier bare fra, og macOS og APK oppdaterer seg ikke selv. 0.8-versjonen for macOS (.dmg) følger utgivelsen.
- **Koble til AI-en din.** Ett-klikk-tilkobling inne i Studio, den hostede koblingen for AI i nettleseren, din egen API-nøkkel inne i Studio og en publisert MCP-pakke er ikke lovet i denne versjonen.
- **Tell alt.** Det krever symboler tegnet på samme måte som i tegnforklaringen, og et symbol med en vegg eller en lang linje gjennom seg kan bli oversett. Speilvendte symboler finnes ikke, og et ark uten målestokk som er tegnet i en annen størrelse, søkes i tegnforklaringens størrelse. Kontroller treffene på første ark før du stoler på resten.
- **Leverandørlager.** Lagertallene er bare så oppdaterte som filen du legger til. Sjekken spør aldri en leverandør.
- **Språk.** Appfeltet for tamil flyter over.

Alt annet står i [Ikke bygget ennå](topic:not-built-yet). For utgivelsen før denne, se [Nytt i 0.7](topic:whats-new-0-7).
