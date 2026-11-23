---
title: Nyheder i 0.9 (tidligere)
summary: Læs længder i meter, centimeter eller millimeter, metriske arealer i m2 med vægareal, målestoksforudindstillinger 1:75 og 1:150, vægt- og temperaturenheder, Bue med ti metoder samt live-markører, Følg og en deltagerliste.
keywords: nyheder 0.9, tidligere udgivelse, nyheder, udgivelsesnoter, ændringslog, 0.9, vis længder som, meter, centimeter, millimeter, metrisk, følg global, enheder, visningsenheder, m2, kvadratmeter, vægareal, målestoksforudindstillinger, 1:75, 1:150, vægt, kilogram, kg, tonne, ton, lb, temperatur, celsius, fahrenheit, bue, buemetoder, 3-punktsbue, radius, live, markører, følg, deltagerliste, klasse, værktøjstip, layout, ændringer, 0.8, 0.8.1, version, nye funktioner, tæl alt, symbolforklaring, hele sættet, prishukommelse, tidligere mængdeudtræk, sidste mængdeudtræk, typisk pris, leverandør, lager, leveringstid, restordre, bestillingsliste, mangel, problempanel, assistent, sprog, inputenheder, værktøjslinjens rækker, dwg
from: f4322ba2
---

Dette er ændringerne i TakeoffCraft 0.9 sammenlignet med 0.8.1. Det er en lille udgivelse for denne app: længder kan nu læses i meter, centimeter eller millimeter, arealer og målestoksforholdet følger metrisk arbejde ordentligt, og Bue har ti måder at tegne på. Live-sessioner viser også, hvem der er hvor.

## Nyt

### Læs længder i meter, centimeter eller millimeter

- **Vis længder som.** {{ui:Settings}} › {{ui:TakeoffCraft}} har {{ui:Show lengths as}} med {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm og mm. {{ui:Follow Global}} bruger den metriske længdeenhed, du har markeret i {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}, og fod-tommer, når ingen er markeret. Det ændrer, hvordan længder vises på arket, i statuslinjen og i panelerne, herunder højder, dybde, tykkelse og niveauerne. Et nøgletal uden enhed, der skrives i et højdefelt, læses i den enhed, der vises.
- **Kun visning.** Mængder, omkostninger og eksporter beregnes ud fra de nøjagtige længder. Valget mellem 1/16, 1/8 og 1/4 tomme findes kun for fod-tommer. Se [Vis længder i meter](topic:show-lengths-in-meters).
- **Vægtenheder.** En post med {{ui:Typed quantity (no drawing)}} kan nu være i lb, TON, kg eller t og prissættes pr. enhed.
- **Temperatur.** Hver post har et valgfrit felt {{ui:Temperature}} i postredigeringen, skrevet i grader C eller F. {{ui:Show temperatures as}} i {{ui:Settings}} › {{ui:TakeoffCraft}} tilbyder {{ui:Follow Global}}, °C eller °F.

### Arealer og målestokke til metrisk arbejde

- **Arealer i m2 på tegningen.** Et areal målt med en metrisk post siger nu m2 på tegningsmærket og i markeringspanelet, samt i tabellen, i stedet for SF. Reglen er m2, når posten prissættes metrisk, eller når længder vises i m, cm eller mm, og SF ellers.
- **Vægareal.** En lineær post med en højde viser også sit vægareal (længde gange højde) i listen over poster og som en noterække under tabellen over mængder pr. post.
- **Målestoksforudindstillinger 1:75 og 1:150.** De findes i listen {{ui:Preset}} i gruppen {{ui:Scale}}, som nu har 32 målestokke. Se [Målestoksforudindstillinger](topic:scale-presets).

### Bue med ti metoder

- Mens {{ui:Arc}} er tændt (værktøjslinjeknap eller {{key:R}}), vises boksen {{ui:Arc method}} i arkbjælken med: 3-punkt, Start, Centrum, Slut, Start, Centrum, Vinkel, Start, Centrum, Længde, Start, Slut, Vinkel, Start, Slut, Retning, Start, Slut, Radius, Centrum, Start, Slut, Centrum, Start, Vinkel og Centrum, Start, Længde. Vinkel, længde, radius og retning kan klikkes eller skrives. Det virker i lineære forløb, arealer og udsparinger. Filer gemt før 0.9 åbnes på samme måde. Se [Tegn buer med ti metoder](topic:draw-arcs-ten-methods).

### Samarbejde

- **Se hinandens markører.** I en Live-session vises hver persons pil på arket med navn og farve, og en stiplet boks omkring de markeringer, de har valgt. Personer på et andet ark vises med navnet på det ark. Se [Arbejd live med andre](topic:work-live).
- **Følg en person, og deltagerlisten.** Knappen {{ui:People}} i en Live-session viser hver person med det værktøj, de bruger, det ark, de er på, og hvornår de sidst redigerede. {{ui:Follow}} flytter din visning med deres, og værten kan bruge {{ui:Ask everyone to follow me}}. Se [Følg en medarbejder i en Live-session](topic:follow-a-teammate).

## I alle apps

- **Værktøjstip og starttip.** Svævetekst er et Bootstrap-værktøjstip, og starttippet kan lukkes.
- **Rullende fanelinjer.** En panelfanelinje, der ikke har plads, ruller i stedet for at blive klippet af.
- **Fanetitler.** Browserfanen viser `<document> - TakeoffCraft | CadCraft`.
- **Layout.** Layoutlisten i {{ui:Settings}} er en rullemenu, der viser det valgte layout.
- **Sprog.** Det sprog, du vælger, gælder nu også de ord, siden selv skriver, såsom Ny, Åbn og Gem. Sprog ud over engelsk er maskinkladder, indtil en indfødt taler har læst dem.

## Ærlige begrænsninger

- Visning af længder, vægt- og temperaturenheder samt de nye forudindstillinger er kontrolleret med tests og på siden. Ikke alle paneler i alle enheder er kontrolleret manuelt.
- Deltagerlisten er ikke manuelt testet med en rigtig klasse af lærere og elever.
- Sprog ud over engelsk er maskinkladder.
- Windows-installationsprogrammer er ikke kodesignerede (Flere oplysninger, og derefter Kør alligevel). macOS-diskbilledet er ikke notariseret (højreklik og vælg {{ui:Open}}).

## Tidligere: 0.8 og 0.8.1

Dette er ændringerne i TakeoffCraft 0.8 (udgivet 2026-11-01) og 0.8.1 (2026-11-02) sammenlignet med 0.7. En symbolforklaring kan nu tælles i hele sættet på én gang, et nyt mængdeudtræk kan starte fra priserne i dine tidligere opgaver, og mængdeudtrækket kan kontrolleres mod en leverandørs lager. 0.8.1 er en rettelsesudgivelse.

### Nyt

**Tæl alt i sættet**

- **Afgræns symbolforklaringen én gang.** {{ui:Count everything}} på værktøjslinjen læser en symbolforklaring: træk en boks om symbolerne og navnene skrevet ved siden af dem. Hvert symbol vises med sit billede og navn, og navnet bliver postens navn. Fjern markeringen ved det, du ikke vil have, og vælg derefter {{ui:Tæl på N ark}}. En bjælke viser det ark, der søges i, {{ui:Cancel}} stopper kørslen, og siden kan stadig bruges.
- **Alle ark i én kørsel.** Hvert symbol tælles på hvert åbent ark. Et ark tegnet i en anden målestok søges i den målestok, og symboler findes, uanset om de er drejet i en ret vinkel. Symbolerne i selve forklaringen tælles ikke på forklaringens eget ark.
- **Gennemgå, før noget tilføjes.** Hver samlet værdi har et link pr. ark (»E-103: 4«), der går til det ark. Klik på en boks ved et fund for at udelade det, og klik igen for at tage det med. Matchniveauet (50 % til 100 %) filtrerer kun det, der er fundet; der søges ikke igen.
- **Ét trin i fortryd.** {{ui:Tilføj N markeringer}} laver en tællepost pr. symbol med en markering ved hvert fund. Et navn, der allerede er en af dine tællepostter, genbruges. {{key:Ctrl+Z}} fjerner alle poster og markeringer igen. Det, du accepterer, føder også ind i {{ui:Learned}}.
- **Symboler i enhver vinkel.** Sæt flueben i {{ui:Symbols at any angle}}, før du tæller, for også at finde symboler, der er drejet i en vinkel, som ikke er en ret vinkel. Søgningen drejer så hvert symbol for hver 15 grader, og et symbol, der ikke er rundt, kan tage op til seks gange så lang tid.
- **Hvad det er.** Almindelig symbolmatchning på dine egne ark uden trænet model, og intet forlader din computer. På et opdigtet sæt med 200 ark tog det 9,4 sekunder fra start til slut i Chrome på en hurtig stationær computer; rigtige tegningssæt vil være langsommere. Se [Tæl alt i sættet](topic:count-everything).

**Prishukommelse fra dine egne mængdeudtræk**

- **TakeoffCraft husker dine priser.** Når du gemmer et mængdeudtræk, huskes hver prissat post, der bruges, under navn og type: materialepris, lønpris, spild og enhed. De sidste 12 mængdeudtræk gemmes for hvert navn. Det gemmes på denne computer ved siden af prisbiblioteket, aldrig inde i en mængdeudtrækfil, og intet sendes nogen steder.
- **Start et nyt mængdeudtræk fra den.** {{ui:Prices}} på værktøjslinjen viser for hver post det sidste mængdeudtrægs satser, de typiske satser og intervallet. {{ui:Use last}} eller {{ui:Use typical}} prissætter én post, og {{ui:Sæt pris på N uprissatte poster fra hukommelsen}} udfylder hver post, der endnu ikke har en pris. Hver brug er ét trin i fortryd.
- **Ældre arbejde.** {{ui:Learn from a past takeoff…}} husker de prissatte poster i et gemt mængdeudtræk (.json).
- **Se det, ændr det, glem det.** {{ui:Everything remembered}} viser hvert navn; papirkurvsknappen glemmer ét, og {{ui:Clear all prices}} glemmer alle. Slå {{ui:Remember my prices when I save a takeoff}} fra for at stoppe. En pris pr. stk. sættes aldrig på en post pr. fod. Se [Prishukommelse fra dine tidligere mængdeudtræk](topic:price-memory).

**Leverandørlager og leveringstider**

- **Kontrollér mod en leverandørs liste.** {{ui:Supply}} på værktøjslinjen tager en leverandørs lagerliste ({{ui:Add a supplier file…}}), en CSV-fil eller et regneark, og kontrollerer, hvad mængdeudtrækket kræver, med spild, mod den. Op til fem filer gemmes. Intet sendes, og intet spørger en leverandør: du medbringer filen.
- **Hvad den siger.** Korte poster kommer først: »Mangler 120 EA«, »Leveringstid 21 dage«, »På restordre«, »Enhed afviger«, »Ingen lagertal« eller »På lager«. {{ui:Longest wait wanted (days)}} starter ved 14.
- **Bestillingsliste.** {{ui:Order list (CSV)}} henter de korte poster med den manglende mængde, leverandøren og leveringstiden.
- **Priser til biblioteket.** Hvis filen har priser, sætter {{ui:Prices into the Library}} materialeprisen for hver biblioteksindgang med samme navn og enhed. Priser igen fra biblioteket for at føre dem ind i mængdeudtrækket.
- **I problempanelet.** En mangel er en advarsel, og en lang ventetid er en bemærkning, under »Leverandørlager«. Du kan acceptere en med en begrundelse, og begrundelsen gemmes i mængdeudtrækket. Se [Kontrollér leverandørlager og leveringstider](topic:supplier-stock).

**AI-assistenter**

- **Værktøjer til alle tre.** Når assistenter er tilladt i {{ui:Settings}}, kan en assistent læse en symbolforklaring (`legend_open`), køre tællingen (`legend_count_start`, derefter `legend_count_status` og `legend_count_result`) og tilføje den (`legend_count_add`, som kan vise en forhåndsvisning først). Den kan læse de huskede priser (`prices_list`) og prissætte poster ud fra dem (`prices_apply`, som kan vise en forhåndsvisning først) og læse leverandørkontrollen (`supply_check`). At tilføje en leverandørfil er stadig din opgave. Se [Brug TakeoffCraft med AI-assistenter](topic:use-with-ai-assistants).

**I alle apps**

- **Sprog.** Fireoghalvtreds sprog i alt; ti er nye (litauisk, lettisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili og usbekisk). Sprog ud over engelsk er maskinkladder, indtil en indfødt taler har læst dem.
- **Inputenheder.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} bestemmer, hvad et touchpad, en musesides knapper, en pen, en 3D-mus, en spilkontroller eller en MIDI-kontroller gør, for alle apps eller for én. Se [Brug et touchpad, en 3D-mus eller en kontroller](common:input-devices).
- **Værktøjslinjens rækker.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} tilbyder {{ui:Wrap}} (starten), {{ui:2 rows}} og {{ui:1 row}}; grupper, der ikke har plads, ruller sidelæns. Se [Arranger panelerne](common:arrange-panels).
- **Problempanelet.** Det fælles panel med advarsler og bemærkninger har nu leverandørlagerkontrollen ovenfor ved siden af de andre kontroller.
- **Tilføjelsesprogrammer.** Tilføjelsesprogrammer følger din kontoliste. Se [Tilføjelsesprogrammer og din kontoliste](common:addons-basics).
- **Forbind din AI.** CadCraft Studio er navet: forbind din assistent én gang for alle otte apps. Studio har ingen egen AI.

### Rettet i 0.8.1

- **Afsnittet med DWG-klasser.** Afsnittet med klasser i en DWG-fil blev læst som den forkerte type. Det er rettet i TakeoffCraft og i fire andre apps.
- **Studio kan skifte sprog, mens det kører.** Før var Studio og dets pakkede udgaver kun på engelsk. Dette er ikke testet i desktopudgaven på alle platforme; sig til, hvis sproget ikke skifter.

### Ikke i denne version endnu

- **Ikke kodesignerede.** Windows kan advare, og på en Mac højreklikker du og vælger {{ui:Open}} første gang. Butiksudgaverne (Microsoft Store, Google Play, App Store) er sat på hold, og iPad- og iPhone-udgaven blev ikke genbygget til 0.8.1.
- **Opdateringer af Studio.** Windows-installationsprogrammet og Linux-pakkerne tjekker én gang om dagen og spørger først. Den bærbare zip-fil fortæller kun, at der er en opdatering, og macOS og APK opdaterer sig ikke selv. Den 0.8 macOS-.dmg følger udgivelsen.
- **Forbind din AI.** Forbindelse med ét klik i Studio, den hostede connector til AI i browseren, din egen API-nøgle i Studio og en udgivet MCP-pakke er ikke lovet i denne version.
- **Tæl alt.** Det kræver symboler tegnet på samme måde som i forklaringen, og et symbol med en væg eller en lang linje gennem sig kan blive overset. Spejlvendte symboler findes ikke, og et ark uden målestok, der er tegnet i en anden størrelse, søges i forklaringens størrelse. Kontrollér fundene på det første ark, før du stoler på resten.
- **Leverandørlager.** Lagertallene er kun så aktuelle som den fil, du tilføjer. Kontrollen spørger aldrig en leverandør.
- **Sprog.** Tamil-sprogets appbjælke løber over.

Alt andet findes under [Ikke lavet endnu](topic:not-built-yet). For udgivelsen før denne, se [Nyheder i 0.7](topic:whats-new-0-7).
