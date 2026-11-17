---
title: De raming en een gemarkeerde pdf exporteren
summary: Download de raming als XLSX-werkmap met live formules of als CSV, en kopieën van uw pdf's met de opmeting erin getekend.
keywords: voorstel, inschrijvingssamenvatting, export, xlsx, spreadsheet, werkmap, csv, gemarkeerde pdf, opmeting afdrukken, rapport, delen, verzenden, legenda
from: 334f89c7
---

Exports zijn downloads. Ze worden op uw computer gemaakt uit de opmeting en de open pdf's; er wordt niets ergens naartoe gestuurd.

## De raming als spreadsheet (XLSX)

1. Open het menu {{ui:Exporteren}} in de werkbalk en kies {{ui:XLSX}}.
   Uw browser downloadt `(naam).xlsx`. De statusbalk meldt "(naam).xlsx geëxporteerd (raming met live formules, per blad, markeringen, schalen)." en geeft een waarschuwing wanneer de raming onvolledig is.
2. Open het in uw spreadsheetprogramma.

De werkmap heeft vier werkbladen, en de onderstaande rapporten wanneer die van toepassing zijn:

| Werkblad | Inhoud |
|---|---|
| Raming | Een rij per post en per onderdeel: hoeveelheid, verlies, hoeveelheid met verlies, tarieven, materiaal, arbeid, totaal, opmerkingen. Het projecttotaal staat onderaan. |
| Per blad | De hoeveelheid van elke post op elk blad, met het aantal markeringen. |
| Markeringen | Elke markering: blad, post, type, hoeveelheid en detail (lengten van segmenten, bruto en uitsparingsoppervlakken, omtrek). |
| Schalen | Elk blad met een schaal of markeringen: de schaal, hoe die is ingesteld (voorinstelling, of gekalibreerd op welke afstand), en voet per pdf-eenheid. |
| Opmetingsoverzicht | De hoeveelheid van elke post, het CSI-nummer, de markeringen en de bladen, zonder prijzen. |
| {{ui:Materiaallijst}} | Elk onderdeel van de samenstellingen, opgeteld over de hele opmeting (hetzelfde onderdeel bij meerdere posten is één regel), met verlies en materiaalkosten, en de posten die het gebruiken. |
| Offerteaanvraag | De materiaallijst om naar een leverancier te sturen: hoeveelheden met verlies, een lege kolom eenheidsprijs, en bedragen en een totaal die worden ingevuld zodra prijzen zijn getypt. |
| Per divisie | Materiaal, arbeid en totaal per CSI MasterFormat-divisie, wanneer posten een {{ui:CSI-nummer}} hebben. |

Met een [samenvatting van de inschrijving](topic:bid-summary) eindigt het werkblad Raming ook met de markups (arbeidslast, omzetbelasting, overhead, winst, borgstelling en de inschrijving), als live formules.

Het werkblad Raming houdt **live formules** bij: hoeveelheid met verlies, de afgeronde materiaal- en arbeidsbedragen, het totaal per rij en het projecttotaal. Spreadsheetprogramma's berekenen ze opnieuw, dus u kunt een tarief of verlies in de spreadsheet wijzigen en de totalen volgen. De getallen die TakeoffCraft heeft berekend, staan ook in de cellen en komen tot op de cent overeen.

De kolom opmerkingen somt de formule van elk onderdeel, formulefouten, markeringen op bladen zonder schaal, wandoppervlak en omtrek op. Wanneer iets is weggelaten, zegt de projecttotaalrij "Onvolledig: zie de opmerkingen hierboven".

De werkmap is gecontroleerd in LibreOffice Calc, dat hem opnieuw heeft berekend tot dezelfde totalen. Ze is nog niet in Excel geopend. Details per kolom staan in [Exportkolommen](topic:export-columns).

## De raming als CSV

Open het menu {{ui:Exporteren}} en kies {{ui:CSV}}. U krijgt `(naam).csv`: dezelfde rijen en kolommen als het werkblad Raming, als gewone waarden (zonder formules), en het projecttotaal. Gebruik het om te plakken in een ander calculatie- of boekhoudsysteem.

De CSV bevat alleen de raming; voor hoeveelheden per blad en de markeringenlijst gebruikt u XLSX. {{ui:Materiaallijst}} in hetzelfde menu slaat alleen de materiaallijst op als CSV, om te bestellen.

## De raming in Google Sheets

Boven de tabel {{ui:Hoeveelheden}} zet **Kopiëren voor Google Sheets** de raming als tab-gescheiden tekst op uw klembord, met dezelfde regels als de CSV. Klik in een Google Sheet op cel A1 en plak. TakeoffCraft meldt zich niet aan bij Google en stuurt daar niets naartoe.

## Ontbrekende tarieven en de goedkeuring

Een regel met een hoeveelheid maar zonder tarief zegt **Geen tarief** in de opmerkingen, en de export telt die mee onder de totalen. Wanneer de raming is goedgekeurd, noemt de export wie heeft goedgekeurd, wanneer en voor welk totaal. Zie [Ontbrekende eenheidsprijzen en het goedkeuren van de raming](topic:sign-off-the-estimate).

## Een gemarkeerde pdf

1. Open de pdf's waarvan u de markeringen getekend wilt hebben.
2. Open het menu {{ui:Exporteren}} en kies {{ui:Gemarkeerde pdf}}.
   "Gemarkeerde pdf wordt geschreven…" verschijnt, daarna downloadt uw browser één bestand per gemarkeerde pdf, genoemd `(pdf-naam) (opmeting).pdf`.

In de kopie:

- lopende meters worden getekend als lijnen in de kleur van hun post,
- oppervlakken worden licht ingekleurd met een volle omtrek, en uitsparingen blijven open,
- tellingen zijn stippen,
- elke pagina met markeringen krijgt een kleine legenda linksonder: de kleur, naam en hoeveelheid van elke post op die pagina.

Uw oorspronkelijke pdf's worden niet gewijzigd.

Opmerkingen:

- Alleen pdf's die open zijn, worden geschreven. Markeringen op pdf's die niet open zijn, blijven in de totalen maar worden niet getekend; open die pdf's eerst.
- Namen in de legenda gebruiken een standaard pdf-lettertype. Letters die het niet kan tonen, worden afgedrukt als "?".
- Een versleutelde pdf kan niet met markeringen worden gekopieerd: "Deze pdf is met een wachtwoord beveiligd of versleuteld, dus er kan geen gemarkeerde kopie worden geschreven. De opmeting zelf is in orde; exporteer in plaats daarvan de spreadsheet."
- De eerste {{ui:Gemarkeerde pdf}} in een tabblad laadt de pdf-schrijver. Offline is die er alleen wanneer de appbalk {{ui:Klaar voor offline gebruik}} toont; zie [Offline werken](common:offline).

:::chromium
Bij meerdere gemarkeerde pdf's kunnen Chrome en Edge één keer vragen of deze site meerdere bestanden mag downloaden. Kies Toestaan, anders krijgt u alleen het eerste bestand.
:::

## Niets om te exporteren?

- {{ui:XLSX}} en {{ui:CSV}} hebben minstens één post nodig: "Nog niets om te exporteren: maak een post aan en meet die op."
- {{ui:Gemarkeerde pdf}} heeft markeringen op een open pdf nodig: "Nog geen markeringen op de open pdf's."

## Sla de opmeting ook op

Een export is een rapport. Om later verder te werken aan de opmeting, kiest u ook {{ui:Opmeting opslaan}}: zie [Opmeting opslaan en opnieuw openen](topic:save-and-reopen).

Om markups, winst, belasting en borg toe te voegen en een voorstel te sturen, zie [Samenvatting van de inschrijving en voorstel](topic:bid-summary).
