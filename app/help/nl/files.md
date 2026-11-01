---
title: Bestanden die TakeoffCraft opent en opslaat
summary: Pdf-bestanden erin, een opmetingsprojectbestand, rekenbladen en gemarkeerde pdf-bestanden eruit - wat elk bevat, waar het naartoe gaat en wat er online, offline en tussen browsers verandert.
keywords: bestanden, indelingen, pdf, takeoff.json, projectbestand, xlsx, csv, gemarkeerde pdf, downloaden, opslaan, openen, offline
from: 1bf9be65
---

## Wat het opent

| Bestand | Hoe | Opmerkingen |
|---|---|---|
| PDF (`.pdf`) | {{ui:Tekeningen openen}}, {{key:Mod+O}}, of neerzetten op de pagina | Meerdere tegelijk. Elke pagina wordt een blad. |
| Opmetingsproject (`.takeoff.json`) | {{ui:Opmeting openen}}, of neerzetten op de pagina | Uw posten, schalen en markeringen. U kunt het samen met zijn pdf-bestanden neerzetten. |

Andere bestanden die op de pagina worden neergezet, worden overgeslagen en de statusbalk noemt ze.

- **Met een wachtwoord beveiligde pdf-bestanden** openen niet: "(naam) is met een wachtwoord beveiligd. Open een niet-beveiligde kopie."
- **Dezelfde pdf twee keer** wordt één keer geopend: "(naam) is al geopend." TakeoffCraft kent bestanden aan hun inhoud, niet aan hun naam.
- **Gescande pdf-bestanden** openen en meten als elk ander; TakeoffCraft heeft de tekst in de pdf niet nodig.
- **Grote tekensets**: elke pdf wordt bij het openen helemaal gelezen (om er een vingerafdruk van te maken), dus een heel groot bestand duurt even. Miniaturen worden een voor een getekend terwijl u scrolt.

## Wat het opslaat

Elke keer opslaan is een download. Er wordt niets teruggeschreven in uw pdf-bestanden.

| U kiest | U krijgt | Wat erin zit |
|---|---|---|
| {{ui:Opmeting opslaan}} | `(naam).takeoff.json` | Posten, samenstellingen, tarieven, bladschalen en elke markering, aan elke pdf gekoppeld via zijn inhoud. Geen pdf-pagina's. |
| {{ui:XLSX}} | `(naam).xlsx` | Vier werkbladen: Raming (met live formules), Per blad, Markeringen, Schalen. |
| {{ui:CSV}} | `(naam).csv` | De raming als gewone waarden, één rij per post en component. |
| {{ui:Gemarkeerde pdf}} | `(pdf-naam) (takeoff).pdf` | Een kopie van elke geopende pdf die markeringen heeft, met de opmeting op de pagina's getekend en een legenda. Eén bestand per pdf. |

De naam wordt overgenomen van de eerste pdf die u in deze opmeting hebt geopend. Er is nog geen vak om te hernoemen: hernoem het gedownloade bestand als u een andere naam wilt.

Zie [De raming en een gemarkeerde pdf exporteren](topic:export-estimate) en [Exportkolommen](topic:export-columns).

## Waar downloads terechtkomen

Uw browser slaat ze op waar hij elke download opslaat, meestal de map Downloads. U vindt die in {{pick:mac=Finder|windows=Verkenner|linux=uw bestandsbeheer}}. Als uw browser is ingesteld om bij elk bestand te vragen waar het moet komen, vraagt hij dat.

:::chromium
{{ui:Gemarkeerde pdf}} met meerdere gemarkeerde pdf-bestanden downloadt meerdere bestanden tegelijk. Chrome en Edge kunnen één keer vragen of deze site meerdere bestanden mag downloaden. Kies Toestaan.
:::

:::safari
Safari slaat op in Downloads, tenzij u de downloadlocatie hebt gewijzigd in de instellingen van Safari, onder Algemeen.
:::

## Waarom het projectbestand en de pdf-bestanden gescheiden zijn

Het bestand `.takeoff.json` bevat alleen uw opmeting. Het vindt zijn pdf-bestanden terug aan hun inhoud (een vingerafdruk van elk bestand), dus:

- Een pdf hernoemen of verplaatsen maakt niet uit.
- Een pdf die door een ander programma is gewijzigd of opnieuw is opgeslagen, telt als een ander bestand, ook met dezelfde naam.
- Markeringen op pdf-bestanden die niet open zijn, tellen nog mee in de totalen.

Zie [Een opmeting opslaan en opnieuw openen](topic:save-and-reopen).

## Online en offline

Uw pdf-bestanden en opmetingen verlaten uw computer nooit, online noch offline. De verbinding doet er alleen toe voor het laden van TakeoffCraft zelf.

Om zonder verbinding te werken slaat u de app eerst op, terwijl u online bent:

1. Kies {{ui:Opslaan voor offline gebruik}} in de appbalk bovenaan.
   De knop telt op, "Opslaan 12 van 40", terwijl hij opslaat.
2. Wacht op {{ui:Klaar voor offline gebruik}}.

Het opslaan van TakeoffCraft bewaart de app, deze Help, de pdf-lezer, de pdf-schrijver die {{ui:Gemarkeerde pdf}} gebruikt en de worker voor automatisch tellen in uw browser, ongeveer 6 MB. Zodra er {{ui:Klaar voor offline gebruik}} staat, werkt alles offline: pdf-bestanden openen, meten, {{ui:Automatisch tellen}}, {{ui:Opmeting opslaan}}, {{ui:XLSX}}, {{ui:CSV}} en {{ui:Gemarkeerde pdf}}.

| De knop zegt | Betekenis |
|---|---|
| {{ui:Opslaan voor offline gebruik}} | Nog niet in deze browser opgeslagen. Kies de knop om op te slaan. |
| Opslaan (n) van (m) | Wordt nu opgeslagen. |
| {{ui:Klaar voor offline gebruik}} | Opgeslagen. Kies de knop voor {{ui:Opnieuw opslaan (de nieuwste versie ophalen)}} of {{ui:De offlinekopie verwijderen}}. |
| {{ui:Kon niet opslaan}} | Sommige bestanden zijn niet gedownload. Controleer uw verbinding en kies de knop opnieuw. |
| {{ui:Offline gebruik is niet beschikbaar}} | Dit browservenster kan geen offlinekopie bewaren (privévensters en sommige beheerde computers blokkeren dat). |

Meer, ook over hoe lang een opgeslagen kopie in elke browser meegaat: [Offline werken](common:offline).

:::offline
U bent offline. Als de appbalk {{ui:Klaar voor offline gebruik}} toont, werkt alles. Zo niet, dan kunnen de onderdelen die TakeoffCraft in dit tabblad nog niet heeft geladen (de pdf-schrijver voor {{ui:Gemarkeerde pdf}}, de worker voor automatisch tellen) nu niet laden, en stopt {{ui:Gemarkeerde pdf}} met "De gemarkeerde pdf kon niet worden geschreven". Uw opmeting is in beide gevallen veilig: {{ui:Opmeting opslaan}}, {{ui:XLSX}} en {{ui:CSV}} hebben geen verbinding nodig. Laad het tabblad niet opnieuw totdat u weer online bent.
:::

:::online
U bent online. Kies voor een bouwplaatsbezoek of een vlucht {{ui:Opslaan voor offline gebruik}} en wacht op {{ui:Klaar voor offline gebruik}}.
:::

## Rekenbladen

De XLSX bewaart live formules, zodat een rekenprogramma de raming opnieuw berekent als het bestand opent en hem juist houdt als u daar een tarief of verlies wijzigt. De werkmap is gecontroleerd in LibreOffice Calc, dat elk totaal tot op de cent hetzelfde herberekende. Hij is nog niet in Excel geopend.

De CSV bestaat uit gewone waarden met een bytevolgordemarkering, zodat rekenprogramma's tekens als m² goed lezen.

## Desktop en cloud

:::desktop
Vanaf 0.5 is de desktop-app CadCraft Studio: TakeoffCraft en de andere zeven apps in één installatie. Er is geen apart installatieprogramma voor TakeoffCraft.
:::

Opslaan in de cloud is nog niet beschikbaar. Bewaar uw `.takeoff.json`-bestanden bij de pdf-bestanden van de opdracht en maak er back-ups van zoals van elk ander bestand. Zie [Waar uw bestanden naartoe gaan](common:your-files).
