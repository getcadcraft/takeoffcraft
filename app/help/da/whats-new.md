---
title: Nyheder i 0.9
summary: Læs længder i meter, centimeter eller millimeter, metriske arealer i m2 med vægareal, målestokforudindstillinger 1:75 og 1:150, enheder for vægt og temperatur, Bue med ti metoder samt live-markører, Følg og en personliste.
keywords: nyheder, hvad er nyt, udgivelsesnoter, ændringslog, 0.9, vis længder som, meter, centimeter, millimeter, metrisk, følg global, enheder, visningsenheder, m2, kvadratmeter, vægareal, målestokforudindstillinger, 1:75, 1:150, vægt, kilogram, kg, tonne, ton, lb, temperatur, celsius, fahrenheit, bue, buemetoder, 3-punkts bue, radius, live, markører, følg, personliste, klasse, værktøjstips, layout, udgivelse, 0.8, 0.8.1, version, nye funktioner, tæl alt, signaturforklaring, hele sættet, prishukommelse, tidligere job, sidste job, typisk pris, leverandør, lager, leveringstid, restordre, bestillingsliste, mangel, problempanel, assistent, sprog, inputenheder, værktøjslinjens rækker, dwg
from: 6182b998
---

Dette er, hvad der ændrede sig i TakeoffCraft 0.9 sammenlignet med 0.8.1. Det er en lille udgivelse for denne app: længder kan nu læses i meter, centimeter eller millimeter, arealer og målestokke følger metrisk arbejde ordentligt, og Bue har ti måder at tegne på. Live-sessioner viser nu også, hvem der er hvor.

## Nyt

### Læs længder i meter, centimeter eller millimeter

- **Vis længder som.** {{ui:Indstillinger}} › {{ui:TakeoffCraft}} har {{ui:Vis længder som}} med {{ui:Følg Global}}, {{ui:Fod-tommer}}, m, cm og mm. {{ui:Følg Global}} bruger den metriske længdeenhed, du har markeret i {{ui:Indstillinger}} › {{ui:Globalt}} › {{ui:Enheder}}, og fod-tommer, når ingen er markeret. Det ændrer, hvordan længder vises på arket, i statuslinjen og i panelerne, herunder højder, dybde, tykkelse og niveauerne. Et tal uden enhed, skrevet i et højdefelt, læses i den viste enhed.
- **Kun visning.** Mængder, omkostninger og eksporter regnes ud fra de præcise længder. Valget mellem 1/16, 1/8 og 1/4 tomme vises kun for fod-tommer. Se [Vis længder i meter](topic:show-lengths-in-meters).
- **Vægtenheder.** En post med {{ui:Indtastet mængde (ingen tegning)}} kan nu være i lb, TON, kg eller t og prissættes pr. enhed.
- **Temperatur.** Hver post har et valgfrit {{ui:Temperatur}}-felt i postredigeringen, skrevet i grader C eller F. {{ui:Vis temperaturer som}} i {{ui:Indstillinger}} › {{ui:TakeoffCraft}} tilbyder {{ui:Følg Global}}, °C eller °F.

### Arealer og målestokke til metrisk arbejde

- **Arealer i m2 på tegningen.** Et areal målt med en metrisk post skriver nu m2 på tegningens mærke og i mærkepanelet samt i tabellen, i stedet for SF. Reglen er m2, når posten prissættes metrisk, eller længder vises i m, cm eller mm, og SF ellers.
- **Vægareal.** En lineær post med en højde viser også sit vægareal (længde gange højde) i postlisten og som en noterække under tabellen over mængder pr. post.
- **Målestokforudindstillinger 1:75 og 1:150.** De er i listen {{ui:Forudindstilling}} i gruppen {{ui:Målestok}}, som nu har 32 målestokke. Se [Målestokforudindstillinger](topic:scale-presets).

### Bue med ti metoder

- Mens {{ui:Bue}} er tændt (værktøjslinjeknap eller {{key:R}}), vises et felt {{ui:Bue-metode}} i arkbjælken med: 3-punkt, Start, Centrum, Endepunkt, Start, Centrum, Vinkel, Start, Centrum, Længde, Start, Endepunkt, Vinkel, Start, Endepunkt, Retning, Start, Endepunkt, Radius, Centrum, Start, Endepunkt, Centrum, Start, Vinkel og Centrum, Start, Længde. Vinkel, længde, radius og retning kan klikkes eller skrives. Den virker i lineære forløb, arealer og udsparinger. Filer gemt før 0.9 åbnes på samme måde. Se [Tegn buer med ti metoder](topic:draw-arcs-ten-methods).

### Arbejd sammen

- **Se hinandens markører.** I en live-session vises hver persons markør på arket med deres navn og farve, og en stiplet boks i deres farve omkring de mærker, de har valgt. Personer på et andet ark vises med det arks navn. Se [Arbejd live med andre](topic:work-live).
- **Følg en person, og personlisten.** Knappen {{ui:Personer}} i en live-session lister hver person med det værktøj, de bruger, det ark, de er på, og hvornår de sidst redigerede. {{ui:Følg}} flytter din visning med deres, og værten kan bruge {{ui:Bed alle om at følge mig}}. Se [Følg en kollega i en live-session](topic:follow-a-teammate).

## I alle apps

- **Værktøjstips og starttip.** Svæveteksten er et Bootstrap-værktøjstip, og starttippet kan lukkes.
- **Rullende faneliste.** Et panels faneliste, der ikke passer, ruller i stedet for at blive skåret af.
- **Fanetitler.** Browserfanen viser `<document> - TakeoffCraft | CadCraft`.
- **Layout.** Layoutlisten i {{ui:Indstillinger}} er en rullemenu, der viser det valgte layout.
- **Sprog.** Det sprog, du vælger, gælder nu også for de ord, siden selv skriver, såsom Ny, Åbn og Gem. Sprog andre end engelsk er maskinkladder, indtil en indfødt taler har gennemgået dem.

## Ærlige begrænsninger

- Længdevisning, vægt- og temperaturenheder og de nye forudindstillinger er kontrolleret af tests og på siden. Hvert panel ved hver enhed er ikke kontrolleret i hånden.
- Personlisten har ikke fået en manuel kontrol med en rigtig klasse af lærer og elever.
- Sprog andre end engelsk er maskinkladder.
- Windows-installationsprogrammer er ikke kodesignerede (Flere oplysninger, derefter Kør alligevel). macOS-diskbilledet er ikke notariseret (højreklik, derefter Åbn).

## Tidligere: 0.8 og 0.8.1

Dette er, hvad der ændrede sig i TakeoffCraft 0.8 (udgivet 2026-11-01) og 0.8.1 (2026-11-02) sammenlignet med 0.7. En symbolforklaring kan nu tælles på tværs af hele sættet på én gang, et nyt mængdeudtræk kan starte ud fra priserne i dine tidligere job, og mængdeudtrækket kan kontrolleres mod en leverandørs lager. 0.8.1 er en rettelsesudgivelse.

### Nyt

**Tæl alt i sættet**

- **Markér signaturforklaringen én gang.** {{ui:Tæl alt}} på værktøjslinjen læser en symbolforklaring: træk en boks om symbolerne og navnene skrevet ved siden af. Hvert symbol vises med sit billede og navn, og navnet bliver postens navn. Fjern flueben ved det, du ikke vil have, og vælg derefter {{ui:Tæl på N ark}}. En bjælke viser det ark, der søges i, {{ui:Annuller}} stopper kørslen, og siden forbliver brugbar.
- **Alle ark i ét kørsel.** Hvert symbol tælles på hvert åbent ark. Et ark tegnet i en anden målestok søges i den målestok, og symboler findes, uanset hvilken ret vinkel de er drejet i. Forklaringens egne symboler tælles ikke på dets eget ark.
- **Gennemgang, før noget tilføjes.** Hver total har et link pr. ark ("E-103: 4"), der går til det ark. Klik på en boks i et fund for at udelade det, og klik igen for at få det tilbage. Matchniveauet (50% til 100%) filtrerer kun det, der blev fundet; intet søges igen.
- **Ét fortrydelsestrin.** {{ui:Tilføj N mærker}} laver en tællepost pr. symbol med et mærke på hvert fund. Et navn, der allerede er en af dine tælleposter, genbruges. {{key:Ctrl+Z}} fortryder alle poster og mærker. Det, du accepterer, føder også {{ui:Lært}}.
- **Symboler i enhver vinkel.** Sæt flueben i {{ui:Symboler i enhver vinkel}}, før du tæller, for også at finde symboler, der er drejet med en vinkel, som ikke er ret. Søgningen drejer så hvert symbol hver 15. grad, og et symbol, der ikke er rundt, kan tage op til seks gange så lang tid.
- **Hvad det er.** Ren symbolmatchning på dine egne ark uden trænet model, og intet forlader din computer. På et opdigtet sæt på 200 ark tog det 9.4 sekunder fra start til slut i Chrome på en hurtig desktop; rigtige tegningssæt vil være langsommere. Se [Tæl alt i sættet](topic:count-everything).

**Prishukommelse fra dine egne job**

- **TakeoffCraft husker dine satser.** Når du gemmer et mængdeudtræk, huskes hver prissat post, der bruges, efter navn og type: materialesats, lønsats, spild og enhed. De sidste 12 job gemmes for hvert navn. Det gemmes på denne computer ved siden af prisbiblioteket, aldrig inde i en mængdeudtrækfil, og intet sendes nogen steder.
- **Start et nyt mængdeudtræk ud fra det.** {{ui:Priser}} på værktøjslinjen viser for hver post sidste jobs satser, de typiske satser og intervallet. {{ui:Brug sidste}} eller {{ui:Brug typisk}} prisfastsætter én post, og {{ui:Pris N uprissatte poster fra hukommelsen}} udfylder hver post, der endnu ikke har en pris. Hver brug er ét fortrydelsestrin.
- **Ældre arbejde.** {{ui:Lær af et tidligere mængdeudtræk…}} husker de prissatte poster i et gemt mængdeudtræk (.json).
- **Se det, ændr det, glem det.** {{ui:Alt husket}} lister hvert navn; papirkurven-knappen glemmer ét, og {{ui:Ryd alle priser}} glemmer alt. Slå {{ui:Husk mine priser, når jeg gemmer et mængdeudtræk}} fra for at stoppe. En pris pr. EA lægges aldrig på en post pr. fod. Se [Prishukommelse fra dine tidligere job](topic:price-memory).

**Lager og leveringstid fra en leverandør**

- **Tjek mod en leverandørs liste.** {{ui:Levering}} på værktøjslinjen tager en leverandørs lagerliste ({{ui:Tilføj en leverandørfil…}}), en CSV eller et regneark, og kontrollerer, hvad mængdeudtrækket kræver, med spild, mod den. Op til fem filer gemmes. Intet sendes, og intet spørger en leverandør: du medbringer filen.
- **Hvad den siger.** Korte poster kommer først: "Mangler 120 EA", "Leveringstid 21 dage", "På restordre", "Enhed afviger", "Intet lagertal" eller "På lager". {{ui:Længste ønskede ventetid (dage)}} starter ved 14.
- **Bestillingsliste.** {{ui:Bestillingsliste (CSV)}} henter de korte poster med den mængde, der mangler, leverandøren og leveringstiden.
- **Priser til biblioteket.** Hvis filen har priser, sætter {{ui:Priser til biblioteket}} materialeprisen på hver biblioteksindgang med samme navn og enhed. Reprissæt fra biblioteket for at hente dem ind i mængdeudtrækket.
- **I panelet Problemer.** En mangel er en advarsel, og en lang ventetid er en note, under "Leverandørlager". Du kan acceptere én med en begrundelse, og begrundelsen gemmes i mængdeudtrækket. Se [Tjek leverandørlager og leveringstider](topic:supplier-stock).

**AI-assistenter**

- **Værktøjer til alle tre.** Med assistenter tilladt i {{ui:Indstillinger}} kan en assistent læse en symbolforklaring (`legend_open`), køre tællingen (`legend_count_start`, derefter `legend_count_status` og `legend_count_result`) og tilføje den (`legend_count_add`, som kan vise en forhåndsvisning først). Den kan læse de huskede priser (`prices_list`) og prissætte poster ud fra dem (`prices_apply`, som kan vise en forhåndsvisning først) og læse leverandørkontrollen (`supply_check`). At tilføje en leverandørfil er stadig din opgave. Se [Brug TakeoffCraft med AI-assistenter](topic:use-with-ai-assistants).

**I alle apps**

- **Sprog.** 54 sprog i alt; ti er nye (litauisk, lettisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili og usbekisk). Sprog andre end engelsk er maskinkladder, indtil en indfødt taler har gennemgået dem.
- **Inputenheder.** {{ui:Indstillinger}} › {{ui:Globalt}} › {{ui:Inputenheder}} angiver, hvad et touchpad, en musesides knapper, en pen, en 3D-mus, en spilcontroller eller en MIDI-controller gør, for alle apps eller for én. Se [Brug et touchpad, 3D-mus eller controller](common:input-devices).
- **Værktøjslinjens rækker.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Værktøjslinjens rækker}} tilbyder {{ui:Ombryd}} (starten), {{ui:2 rækker}} og {{ui:1 række}}; grupper, der ikke passer, ruller sidelæns. Se [Arrangér panelerne](common:arrange-panels).
- **Panelet Problemer.** Det fælles panel med advarsler og noter bærer nu leverandørlagerkontrollen ovenfor, ved siden af de andre kontroller.
- **Add-ons.** Add-ons følger din kontoliste. Se [Add-ons og din kontoliste](common:addons-basics).
- **Forbind din AI.** CadCraft Studio er navet: forbind din assistent én gang for alle otte apps. Studio har ingen egen AI.

### Rettet i 0.8.1

- **DWG-klasseafsnit.** Klasseafsnittet i en DWG-fil blev læst som den forkerte type. Det er rettet i TakeoffCraft og i fire andre apps.
- **Studio kan skifte sprog, mens det kører.** Før var Studio og dets pakkede udgaver kun på engelsk. Dette er ikke testet i desktop-builden på alle platforme; sig til, hvis sproget ikke skifter.

### Ikke i denne version endnu

- **Ikke kodesignert.** Windows kan advare, og på en Mac højreklikker du og vælger {{ui:Åben}} første gang. Butiksbuildene (Microsoft Store, Google Play, App Store) er sat på hold, og iPad- og iPhone-builden blev ikke genbygget til 0.8.1.
- **Studio-opdateringer.** Windows-installationsprogrammet og Linux-pakkerne kontrollerer én gang om dagen og spørger først. Den portable zip-fil fortæller dig kun det, og macOS og APK'en opdaterer ikke sig selv. macOS .dmg fra 0.8 følger udgivelsen.
- **Forbind din AI.** Ét-klik-forbindelse inde i Studio, den hostede connector til AI i browseren, din egen API-nøgle inde i Studio og en udgivet MCP-pakke er ikke lovet i denne version.
- **Tæl alt.** Den kræver symboler tegnet på samme måde som i forklaringen, og et symbol med en væg eller en lang linje gennem sig kan blive overset. Spejlvendte symboler findes ikke, og et ark uden målestok, der er tegnet i en anden størrelse, søges i forklaringens størrelse. Kontrollér fundene på første ark, før du stoler på resten.
- **Leverandørlager.** Lagertal er kun så aktuelle som den fil, du tilføjer. Kontrollen spørger aldrig en leverandør.
- **Sprog.** Tamil: appens øverste linje løber over.

Alt andet står i [Ikke bygget endnu](topic:not-built-yet). For udgivelsen før denne, se [Nyheder i 0.7](topic:whats-new-0-7).
