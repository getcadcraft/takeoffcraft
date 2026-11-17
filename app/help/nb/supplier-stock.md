---
title: Kontroller leverandørlager og leveringstider
summary: Legg til en leverandørs lagerliste (CSV eller regneark), så sjekker TakeoffCraft det mengdeuttaket trenger, med svinn, mot den: nok på lager, og hvor lang ventetiden er. Mangler og lange ventetider vises i panelet Problemer.
keywords: leverandør, selger, lager, på lager, leveringstid, tilgjengelighet, mangel, restordre, bestillingsliste, csv, sku, materialer, levering, problemer
from: f11160fb
---

{{ui:Levering}} på verktøylinjen (lastebilen) sjekker det mengdeuttaket trenger mot en leverandørs lagerliste. Leverandørens rader som betyr noe, lagres i mengdeuttakets egen fil. Ingenting sendes noe sted, og ingenting spør en leverandør: du tar med filen selv.

## Filen

En CSV-fil med en overskriftsrad. Den trenger en kolonne for navn eller SKU og en for lager eller leveringstid. Disse overskriftene gjenkjennes (i hvilken som helst rekkefølge, uansett store eller små bokstaver): Item, Name, Description eller Product; SKU, Part eller Item #; In stock, On hand, Available eller Quantity; Lead time eller Delivery days; Unit eller UOM; Price eller Cost; Supplier eller Vendor.

- Lager kan være et tall (1,200), "In stock" eller "Out of stock".
- En leveringstid kan være "5 days", "2 weeks", "2-3 weeks" (den lengste brukes), "3 months", "same day" eller "backorder". Et rent tall er i overskriftens enhet (dager, med mindre overskriften sier uker eller måneder).
- Excel-filer leses ikke: lagre regnearket som CSV først.

## Sjekk mengdeuttaket

1. Velg {{ui:Levering}}, deretter {{ui:Legg til en leverandørfil…}} og velg CSV-filen. Legg til mer enn én: opptil fem filer, 2 000 rader beholdes til sammen, og de som passer til postene dine, først.
2. Hver post, annen betingelse og delpost i en sammensatt post med en mengde blir koblet til en rad etter navn, eller etter SKU i navnet. Et likt navn (det ene inni det andre) brukes når det ikke finnes et eksakt, og appen sier fra om det.
3. Under {{ui:Hva mengdeuttaket trenger}} kommer de korte først: «Mangler 120 EA», «Leveringstid 21 dager», «På restordre», «Enhet avviker», «Ingen lagertall» eller «På lager». Behovet inkluderer svinn. En leverandørenhet som ikke er anslagets (et tonn mot en fot) rapporteres og sammenlignes aldri. Hver rad har {{ui:Velg posten}}, som hopper til posten.
4. Sett {{ui:Lengste ønskede ventetid (dager)}} (standard 14). En post som ikke er på lager og venter lenger enn det, flagges, og oppsummeringen nevner den lengste ventetiden som betyr noe.
5. {{ui:Bestillingsliste (CSV)}} laster ned postene som mangler, med mengden som mangler, leverandøren og leveringstiden. {{ui:Utelat}} tar et behov ut av kontrollen (det er et angretrinn).

## Regneark og prisbiblioteket

En leverandørliste kan være en Excel-arbeidsbok (.xlsx) i tillegg til en CSV: første ark leses, med de samme kolonnenavnene. Formler kjøres aldri; verdien filen inneholder, er det som leses.

Når en fil med priser er lagt til, angir {{ui:Priser inn i Biblioteket}} i dialogen materialprisen for hvert element i [Biblioteket](topic:price-library) som filen har pris for: samme navn, og en enhet som er den samme (eller ikke er oppgitt). Arbeid, svinn, høyde og sammensatte poster forblir som de er, og notatet på elementet sier hvilken fil prisen kom fra. Et element i meter prises ikke fra en liste i fot, og et uten samsvarende navn blir stående; statuslinjen sier hvor mange som ble hoppet over på grunn av enheten. Pris på nytt fra Biblioteket for å hente de nye prisene inn i dette mengdeuttaket.

## I panelet Problemer

En mangel er en advarsel, og en lang ventetid er et notat, i det felles panelet Problemer («Leverandørlager»), så de sitter sammen med alle andre kontroller. Du kan godta en med en begrunnelse, og godkjenningen lagres i mengdeuttaket.

## Med assistenten din

Hvis du tillater assistenter i Innstillinger, kan de lese kontrollen (supply_check). Å legge til en leverandørfil gjør du selv.

## Greit å vite

Lagertall er bare så oppdaterte som filen du legger til. Legg til filen på nytt for å oppdatere den: en fil med samme navn erstatter den tidligere.
