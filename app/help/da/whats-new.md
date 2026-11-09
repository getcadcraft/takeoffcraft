---
title: Nyheder i 0.8 og 0.8.1
summary: Tæl en hel signaturforklaring på tværs af alle åbne ark i én kørsel, sæt priser ud fra dine tidligere opgaver, kontrollér mængdeudtrækket mod en leverandørs lager og leveringstider, og få nye assistentværktøjer til alle tre, plus de fælles 0.8-ændringer og 0.8.1-rettelsen til DWG-filer.
keywords: nyheder, hvad er nyt, udgivelsesnoter, changelog, ændringer, 0.8, 0.8.1, version, nye funktioner, tæl alt, signaturforklaring, symbolforklaring, hele sæt, prishukommelse, tidligere opgaver, sidste opgave, typisk pris, leverandør, lager, leveringstid, restordre, bestillingsliste, mangel, panelet Problemer, assistent, sprog, inputenheder, værktøjslinjens rækker, dwg
from: a04adef6
---

Her er, hvad der er ændret i TakeoffCraft 0.8 (udgivet 2026-11-01) og 0.8.1 (2026-11-02) sammenlignet med 0.7. En signaturforklaring kan nu tælles på hele sættet på én gang, et nyt mængdeudtræk kan starte ud fra priserne fra dine tidligere opgaver, og mængdeudtrækket kan kontrolleres mod en leverandørs lager. 0.8.1 er en rettelsesudgivelse.

## Nyt

### Tæl alt i sættet

- **Markér signaturforklaringen én gang.** {{ui:Tæl alt}} i værktøjslinjen læser en signaturforklaring: træk en boks om symbolerne og navnene skrevet ved siden af dem. Hvert symbol vises med sit billede og sit navn, og navnet bliver postens navn. Fjern markeringen fra dem, du ikke vil have, og vælg derefter {{ui:Tæl på N ark}}. En bjælke viser arket, der søges i, {{ui:Annuller}} stopper kørslen, og siden kan stadig bruges.
- **Hele sættet i én kørsel.** Hvert symbol tælles på hvert åbent ark. Et ark tegnet i en anden målestok søges i den målestok, og symboler findes, uanset om de er drejet i en ret vinkel. Signaturforklaringens egne symboler tælles ikke på dens eget ark.
- **Gennemgå før noget tilføjes.** Hver total har et link pr. ark ("E-103: 4"), der går til det ark. Klik på en boks ved et fund for at udelade det, og klik igen for at tage det med igen. Matchniveauet (50 % til 100 %) filtrerer kun det, der er fundet; intet søges igen.
- **Ét fortrydelsestrin.** {{ui:Tilføj N markeringer}} laver en tællepost pr. symbol med en markering på hvert fund. Et navn, der allerede er en af dine tælleposter, genbruges. {{key:Ctrl+Z}} tager alle poster og markeringer tilbage. Det, du accepterer, bliver også husket i {{ui:Lært}}.
- **Symboler i enhver vinkel.** Sæt flueben i {{ui:Symboler i enhver vinkel}}, før du tæller, for også at finde symboler drejet i en vinkel, der ikke er ret. Søgningen drejer så hvert symbol for hver 15. grad, og et symbol, der ikke er rundt, kan tage op til seks gange så lang tid.
- **Hvad det er.** Almindelig symbolmatchning på dine egne ark, uden trænet model, og intet forlader din computer. På et opdigtet sæt med 200 ark tog det 9.4 sekunder fra start til slut i Chrome på en hurtig desktop; rigtige tegningssæt vil være langsommere. Se [Tæl alt i sættet](topic:count-everything).

### Prishukommelse fra dine egne opgaver

- **TakeoffCraft husker dine satser.** Når du gemmer et mængdeudtræk, huskes hver prissat post, der bruges, under navn og type: materialesats, lønsats, spild og enhed. De sidste 12 opgaver gemmes for hvert navn. Den gemmes på denne computer ved siden af prisbiblioteket, aldrig inde i en mængdeudtrækfil, og intet sendes nogen steder.
- **Start et nyt mængdeudtræk ud fra den.** {{ui:Priser}} på værktøjslinjen viser for hver post den sidste opgaves satser, de typiske satser og intervallet. {{ui:Brug sidste}} eller {{ui:Brug typisk}} prissætter én post, og {{ui:Prissæt N poster uden pris fra hukommelsen}} udfylder hver post, der endnu ikke har en pris. Hver brug er ét fortrydelsestrin.
- **Ældre arbejde.** {{ui:Lær af et tidligere mængdeudtræk…}} husker de prissatte poster i et gemt mængdeudtræk (.json).
- **Se den, ændr den, glem den.** {{ui:Alt husket}} viser hvert navn; papirkurvsknappen glemmer ét, og {{ui:Ryd alle priser}} glemmer alle. Slå {{ui:Husk mine priser, når jeg gemmer et mængdeudtræk}} fra for at stoppe. En pris pr. stk. sættes aldrig på en post pr. fod. Se [Prishukommelse fra dine tidligere opgaver](topic:price-memory).

### Leverandørlager og leveringstider

- **Kontrollér mod en leverandørs liste.** {{ui:Levering}} på værktøjslinjen tager en leverandørs lagerliste ({{ui:Tilføj en leverandørfil…}}), en CSV eller et regneark, og kontrollerer, hvad mængdeudtrækket kræver, med spild, mod den. Op til fem filer gemmes. Intet sendes, og intet spørger en leverandør: du medbringer filen.
- **Hvad den siger.** Korte poster kommer først: "Mangler 120 EA", "Leveringstid 21 dage", "På restordre", "Enhed afviger", "Intet lagertal" eller "På lager". {{ui:Længste ønskede ventetid (dage)}} starter ved 14.
- **Bestillingsliste.** {{ui:Bestillingsliste (CSV)}} henter de korte poster med det manglende antal, leverandøren og leveringstiden.
- **Priser til biblioteket.** Hvis filen har priser, sætter {{ui:Priser til biblioteket}} materialeprisen for hver biblioteksindgang med samme navn og enhed. Genpris fra biblioteket for at føre dem ind i mængdeudtrækket.
- **I panelet Problemer.** En mangel er en advarsel, og en lang ventetid er en bemærkning, under "Leverandørlager". Du kan acceptere en med en grund, og grunden gemmes i mængdeudtrækket. Se [Kontrollér leverandørlager og leveringstider](topic:supplier-stock).

### AI-assistenter

- **Værktøjer til alle tre.** Når assistenter er tilladt i {{ui:Indstillinger}}, kan en assistent læse en signaturforklaring (`legend_open`), køre tællingen (`legend_count_start`, derefter `legend_count_status` og `legend_count_result`) og tilføje den (`legend_count_add`, som kan vise en forhåndsvisning først). Den kan læse de huskede priser (`prices_list`) og prissætte poster ud fra dem (`prices_apply`, som kan vise en forhåndsvisning først) og læse leverandørkontrollen (`supply_check`). Tilføjelse af en leverandørfil bliver stadig din opgave. Se [Brug TakeoffCraft med AI-assistenter](topic:use-with-ai-assistants).

### I alle apps

- **Sprog.** I alt 54 sprog; ti er nye (litauisk, lettisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili og usbekisk). Andre sprog end engelsk er maskinelle kladder, indtil en indfødt taler har læst dem.
- **Inputenheder.** {{ui:Indstillinger}} › {{ui:Globalt}} › {{ui:Inputenheder}} bestemmer, hvad et trackpad, en muss sideknapper, en pen, en 3D-mus, en spilcontroller eller en MIDI-controller gør, for alle apps eller for én. Se [Brug et trackpad, 3D-mus eller controller](common:input-devices).
- **Værktøjslinjens rækker.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Værktøjslinjens rækker}} tilbyder {{ui:Ombryd}} (start), {{ui:2 rækker}} og {{ui:1 række}}; grupper, der ikke passer, ruller sideværts. Se [Ordn panelerne](common:arrange-panels).
- **Panelet Problemer.** Det fælles panel med advarsler og bemærkninger har nu leverandørlagerkontrollen ovenfor, ved siden af de øvrige kontroller.
- **Add-ons.** Add-ons følger din kontoliste. Se [Add-ons og din kontoliste](common:addons-basics).
- **Forbind din AI.** CadCraft Studio er navet: forbind din assistent én gang for alle otte apps. Studio har ingen AI af sin egen.

## Rettet i 0.8.1

- **Klasseafsnit i DWG.** Klasseafsnittet i en DWG-fil blev læst som den forkerte type. Dette er rettet i TakeoffCraft og i fire andre apps.
- **Studio kan skifte sprog, mens det kører.** Før var Studio og dets pakkede udgaver kun på engelsk. Dette er ikke testet i desktopbygningen på alle platforme; fortæl os, hvis sproget ikke skifter.

## Ikke i denne version endnu

- **Ikke kodesigneret.** Windows kan advare, og på en Mac højreklikker du og vælger {{ui:Åben}} første gang. Butiksbyggene (Microsoft Store, Google Play, App Store) er sat på hold, og iPad- og iPhone-bygget blev ikke genopbygget til 0.8.1.
- **Studio-opdateringer.** Windows-installationsprogrammet og Linux-pakkerne tjekker én gang om dagen og spørger først. Den bærbare zip-fil fortæller kun, at der er en opdatering, og macOS og APK opdaterer ikke sig selv. Den macOS-.dmg-fil til 0.8, der følger udgivelsen.
- **Forbind din AI.** Forbindelse med ét klik i Studio, den hostede connector til AI i browseren, din egen API-nøgle i Studio og en udgivet MCP-pakke er ikke lovet i denne version.
- **Tæl alt.** Det kræver symboler tegnet på samme måde som i signaturforklaringen, og et symbol med en væg eller en lang linje gennem sig kan overses. Spejlede symboler findes ikke, og et ark uden målestok, der er tegnet i en anden størrelse, søges i signaturforklaringens størrelse. Kontrollér fundene på det første ark, før du stoler på resten.
- **Leverandørlager.** Lagertal er kun så aktuelle som den fil, du tilføjer. Kontrollen spørger aldrig en leverandør.
- **Sprog.** Tamils appbjælke flyder over.

Alt andet findes i [Ikke lavet endnu](topic:not-built-yet). For udgivelsen før denne, se [Nyheder i 0.7](topic:whats-new-0-7).
