---
title: Feilsøking
summary: Symptomer, årsaker og løsninger på meldingene og overraskelsene du kan møte i TakeoffCraft, sitert slik appen viser dem.
keywords: problemer, feil, virker ikke, løsning, hjelp, avvist, måler ikke, ingen skala, manglende markeringer, eksport mislyktes, frakoblet, berøring
from: cd319c9b
---

TakeoffCraft forklarer de fleste avvisninger i statuslinjen nederst i vinduet. Finn meldingen nedenfor.

## Åpne filer

| Melding eller symptom | Årsak | Løsning |
|---|---|---|
| PDF-leseren kunne ikke lastes. Last siden på nytt for å prøve igjen. | Appens PDF-leser lastet ikke, vanligvis fordi du er frakoblet og appen aldri ble lagret for frakoblet bruk. | Koble til og last på nytt. Velg deretter {{ui:Lagre for frakoblet bruk}} og vent på {{ui:Klar frakoblet}}; se [Arbeide frakoblet](common:offline). |
| (navn) er passordbeskyttet. Åpne en kopi uten beskyttelse. | PDF-en krever passord for å åpnes. | Be om en kopi uten beskyttelse, eller fjern passordet i et PDF-program du stoler på. |
| (navn) kunne ikke leses som en PDF (…) | Filen er skadet eller ikke en ekte PDF. | Last den ned på nytt, eller lagre den på nytt fra programmet som laget den. |
| (navn) er allerede åpen. | Den samme PDF-en (samme innhold) er åpen. | Ingenting å gjøre. |
| TakeoffCraft åpner PDF-er og .takeoff.json-prosjekter. Hoppet over: … | Andre filtyper ble fjernet. | Konverter tegninger til PDF først. |
| Ingenting skjer når jeg slipper filer | Filene ble sluppet utenfor nettleservinduet, eller nettleseren åpnet PDF-en i en ny fane. | Slipp dem på selve TakeoffCraft-siden; rammen «Slipp PDF-er eller en .takeoff.json» viser når det vil fungere. |
| Åpning av et stort sett tar en stund | Hver PDF leses i sin helhet for å identifisere den. | Vent til meldingen «Åpner (navn)…» forsvinner. Miniatyrbildene fylles inn når du ruller. |

## Måling

| Melding eller symptom | Årsak | Løsning |
|---|---|---|
| Åpne en PDF først. | Ingen ark er åpent. | Åpne en PDF. |
| Dette arket har ingen skala ennå, så det kan ikke måles. Velg et skalaforvalg eller kalibrer først (tellinger fungerer uten). | Verktøyene Linjær, Areal, Sirkel og Utsparing trenger en skala. | [Sett skalaen](topic:set-the-scale). |
| Lag først en linjepost (gi den navn under Poster), klikk deretter på arket. | Det finnes ingen post av den typen. | Fyll ut skjemaet {{ui:Ny post}} som åpnet seg, og velg {{ui:Legg til}}. |
| Velg først en post å ta ut mengde for (panelet Poster). | Den gjeldende posten ble slettet. | Klikk en post under {{ui:Poster}}. |
| En strekning trenger minst to punkter. | Du avsluttet etter ett klikk. | Klikk minst to punkter. |
| Et areal trenger minst tre punkter. | For få hjørner. | Klikk minst tre hjørner. |
| Omrisset krysser seg selv, så arealet ville blitt feil. Tegn det på nytt uten å krysse. | En figur-åtte-form. | Tegn det som to arealer, eller gå rundt kanten i rekkefølge. |
| Disse punktene omslutter ikke noe areal. | Alle punktene ligger på én linje. | Klikk hjørner som omslutter et rom. |
| Velg først en areal-markering (Velg-verktøyet), velg deretter Utsparing og tegn hullet inni den. | {{ui:Utsparing}} trenger et valgt areal. | Trykk {{key:V}}, klikk arealet, og så {{key:X}}. |
| En utsparing må ligge helt innenfor arealet. | Hullet krysser eller går utenfor omrisset. | Tegn hullet innenfor arealet. |
| Utsparinger kan ikke overlappe hverandre. | To hull overlapper. | Tegn ett hull rundt begge, eller hold dem fra hverandre. |
| … Punktet ble satt tilbake. | Et dratt hjørne ville fått omrisset til å krysse seg selv, eller presset et hull utenfor. | Dra til et sted som holder formen gyldig. |
| Klikk et punkt på sirkelens kant, bort fra sentrum. | Det andre klikket var for nær sentrum. | Klikk lenger ut. |
| Klikk flytter arket i stedet for å legge til punkter | Pekeren beveget seg mer enn noen få piksler mens knappen var nede; det regnes som et drag. | Klikk uten å bevege, særlig på en styreplate. |
| Shift fester ikke | Du plasserer et punkt på en bue, eller tegner en sirkel. | 45°-festet gjelder bare rette linjestykker. |
| Punkter hopper til en nærliggende linje | Fang til tegningens linjer er på. | Zoom inn for å klikke mellom linjene, eller trykk {{key:F3}} for å slå av Fang. |
| Ingen festemarkør vises | Fang er av, arket er en skanning, eller verktøyet fester ikke (Tell, Autotelling, Lim inn). | Trykk {{key:F3}}; på en skanning finnes det ingen linjer å feste til. |
| Lengden er feil | Skalaen er feil (ofte en endret størrelse på PDF-en med et forvalg). | Bruk {{ui:Kontroller}} på et kjent mål, deretter {{ui:Kalibrer}}. |

## Skala

| Melding eller symptom | Årsak | Løsning |
|---|---|---|
| Velg to punkter som ligger lenger fra hverandre. | Kalibreringspunktene ligger nesten oppå hverandre. | Kalibrer på et lengre mål. |
| En melding i kalibreringsdialogen, for eksempel «That distance could not be read» | Avstanden er i en form TakeoffCraft ikke kan lese. | Se [Oppføring av lengde, pris og prosent](topic:entry-formats). |
| Dette arket har ingen skala ennå, så det er ingenting å kontrollere. Kalibrer det, eller velg et forvalg. | {{ui:Kontroller}} på et ark uten skala. | Sett en skala først. |
| Listen {{ui:Forvalg}} er nedtonet | Ingen ark er åpent. | Åpne en PDF. |

## Mengder og formler

| Melding eller symptom | Årsak | Løsning |
|---|---|---|
| Ufullstendig: … (ikke med i summene) | En formelfeil, eller markeringer på ark uten skala. | Se [Les mengder og kalkylen](topic:read-quantities#the-incomplete-warning). |
| +(n) uten skala ved siden av en post | Noen av markeringene ligger på ark uten skala. | Gi de arkene en skala. |
| Formelfeil: … | Formelen kan ikke regnes ut. | Se [Formelspråk](topic:formulas#errors). |
| Denne posten har markeringer, så typen kan ikke endres. | Typen er låst når det finnes markeringer. | Lag en ny post av den andre typen, og tegn markeringene på nytt med den. |
| En post må ha et navn. | Navnefeltet ble tømt. | Skriv et navn. |
| Skriv et beløp som 12.50. / Skriv en prosent som 10 eller 7.5. | En pris eller et svinn kunne ikke leses. | Se [Oppføring av lengde, pris og prosent](topic:entry-formats). |
| En total ser dobbel ut | Posten har egne priser og komponenter som bærer samme kostnad. | Sett postens egne priser til 0 når komponentene bærer kostnaden. |
| Markeringene til denne posten er på PDF-er som ikke er åpne. | Du klikket en post der alle markeringene ligger på PDF-er du ikke har åpnet. | Åpne disse PDF-ene; navnene deres står under {{ui:Ark}}. |

## Autotelling

| Melding eller symptom | Årsak | Løsning |
|---|---|---|
| Den boksen er for liten. Tegn den rundt hele symbolet. | Boksen er bitte liten. | Zoom inn, og tegn boksen rundt hele symbolet. |
| Den boksen er nesten tom. Tegn den rundt et symbol. | Boksen inneholder bare papir. | Tegn boksen rundt selve symbolet. |
| Ingen treff. Senk {{ui:Treff}}-glidebryteren, eller tegn boksen tettere rundt symbolet. | Ingenting fikk høy nok poengsum. | Tegn boksen tett rundt symbolet, eller dra {{ui:Treff}}-glidebryteren lavere. |
| For mange treff, også feil symboler | Lignende symboler får poeng nær det ekte. | Øk {{ui:Treff}}-glidebryteren, og klikk feil bokser for å forkaste dem. |
| Treff mangler på andre ark | Disse arkene tegner symbolet i en annen størrelse, eller i en vinkel som ikke er et 90°-trinn. | Søk på de arkene med en boks tegnet der, eller tell for hånd. |
| (n) ark var for store til å søkes i ved denne symbolstørrelsen. | Arket ville vært for stort ved arbeidsstørrelsen. | Tegn en større boks rundt symbolet, eller tell det arket for hånd. |
| Søket mislyktes: … | Bakgrunnssøket stoppet. | Prøv igjen; last siden på nytt hvis det gjentar seg (lagre først). Frakoblet fungerer det bare når toppfeltet viser {{ui:Klar frakoblet}}. |
| Å dra tegner en boks i stedet for å flytte arket | Slik fungerer {{ui:Autotelling}}. | Hold {{key:Space}} og dra, eller dra med midtknappen. |

## Lagring og eksport

| Melding eller symptom | Årsak | Løsning |
|---|---|---|
| Ingenting å eksportere ennå: lag en post og ta ut mengde for den. | Det finnes ingen poster. | Lag en post først. |
| Ingen markeringer på de åpne PDF-ene ennå. | {{ui:Markert PDF}} har ingenting å tegne på de åpne PDF-ene. | Åpne PDF-ene som har markeringer. |
| Denne PDF-en er passordbeskyttet eller kryptert, så en markert kopi kan ikke skrives. … | PDF-en er kryptert. | Eksporter {{ui:XLSX}} i stedet, eller bruk en ukryptert kopi av PDF-en (den trenger da et eget mengdeuttak, siden det er en annen fil). |
| Den markerte PDF-en kunne ikke skrives: … | Ofte: frakoblet, og appen ble ikke lagret for frakoblet bruk, så PDF-skriveren mangler. | Gå på nett og velg {{ui:Markert PDF}} igjen. For å unngå det, velg {{ui:Lagre for frakoblet bruk}} og vent på {{ui:Klar frakoblet}}. |
| Bare én markert PDF ble lastet ned | Nettleseren blokkerte flere nedlastinger samtidig. | Tillat flere nedlastinger for dette nettstedet, og eksporter på nytt. |
| (fil) er ikke et TakeoffCraft-prosjekt (den er ikke gyldig JSON). / Dette er ikke en TakeoffCraft-prosjektfil. | Feil fil, eller en skadet en. | Velg `.takeoff.json`-filen. |
| Dette prosjektet ble lagret av en nyere TakeoffCraft. Åpne det der. | Filen kommer fra en nyere versjon. | Åpne den i den nyere versjonen. |
| (n) markeringer ble skadet og utelatt. | Deler av filen ble skadet eller endret for hånd. | Resten ble åpnet. Tegn de manglende markeringene på nytt, eller åpne en eldre kopi. |
| Markeringer mangler etter gjenåpning | PDF-ene er ikke åpne, eller en av dem har endret seg. | Se [Lagre og gjenåpne et mengdeuttak](topic:save-and-reopen#when-a-pdf-has-changed). |
| Nettleseren spør «Leave site?» | Det finnes ulagrede endringer. | Bli, og lagre med {{key:Mod+S}}. |

## Taster og mus

| Symptom | Årsak | Løsning |
|---|---|---|
| Bokstavtastene gjør ingenting | Markøren står i et felt (søk, postredigering, tabell). | Klikk på arket, eller trykk {{key:Tab}} for å komme ut av feltet. |
| Hjulet zoomer i stedet for å rulle | Hjulet zoomer alltid arket. | Dra for å panorere. |
| Hele siden ble større eller mindre | Nettleserzoom ({{key:Mod+Plus}} eller {{key:Mod+Minus}}). | Trykk {{key:Mod+0}}. Zoom arket med hjulet, eller med {{key:Plus}} og {{key:Minus}} alene. |
| En markering forsvant da jeg trykket Backspace | Backspace sletter den valgte markeringen når du ikke tegner. | {{key:Mod+Z}} henter den tilbake. |
| Høyreklikk fullfører ikke på en Mac | Control-klikk kommer som et vanlig klikk. | Bruk et tofingerklikk med sekundærklikk slått på, eller trykk {{key:Enter}}. |

## Berøringsskjermer

På en berøringsskjerm:

- **Trykk** plasserer et punkt (eller velger en markering med {{ui:Velg}}). Én finger som drar, panorerer.
- **To fingre** klyper for å zoome om punktet mellom dem, og panorerer når de beveges sammen. En andre finger som settes ned, avbryter det den første startet, så en klyping etterlater aldri et punkt.
- **Fullfør** en strekning eller et omriss med et **langt trykk** (høyreklikket), et **dobbelttrykk**, eller {{ui:Fullfør}} i linjen nederst på arket. Den samme linjen har {{ui:Bak}} (ta det siste punktet tilbake) og {{ui:Avbryt}}. Areal lukkes også ved å trykke på det første punktet.
- Fingrene får større treffområder: punkter fester seg, lukker seg og velges fra lenger unna, og hjørnehåndtakene er større.

Å skrive inn lengder krever et tastatur; skjermtastaturet fungerer når {{ui:Skriv}}-feltet er valgt.

På et nettbrett gjør et tastatur og en mus eller styreplate mengdeuttak mye enklere.

## Arbeide frakoblet

| Knapp eller symptom | Årsak | Løsning |
|---|---|---|
| {{ui:Kunne ikke lagre}} | Noen av appens filer ble ikke lastet ned under lagring for frakoblet bruk. | Sjekk tilkoblingen, og velg knappen igjen. |
| {{ui:Frakoblet bruk er ikke tilgjengelig}} | Private vinduer og noen administrerte datamaskiner blokkerer frakoblede kopier. | Bruk et vanlig vindu, eller en annen nettleser. |
| «Lagrer…» starter aldri | Du er frakoblet; lagring krever tilkobling. | Lagre mens du er på nett. |
| Appen er gammel etter en oppdatering | Den frakoblede kopien er fra en tidligere dag. | På nett: velg {{ui:Klar frakoblet}}, og så {{ui:Lagre på nytt (hent nyeste versjon)}}. |
| Du vil ha plassen tilbake | Den frakoblede kopien er omtrent 6 MB. | Velg {{ui:Klar frakoblet}}, og så {{ui:Fjern den frakoblede kopien}}. |

Se [Arbeide frakoblet](common:offline).

## Fortsatt fast

Last siden på nytt hvis appen slutter å svare. Mengdeuttaket ditt er tapt ved omlasting med mindre du har lagret, så lagre først med {{key:Mod+S}} hvis du kan. For nettleserspørsmål, se [Nettlesere og datamaskiner](common:browsers).
