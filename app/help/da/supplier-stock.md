---
title: Kontrollér leverandørens lager og leveringstider
summary: Tilføj en leverandørs lagerliste (CSV eller regneark), og TakeoffCraft kontrollerer, hvad mængdeudtrækket kræver, inklusive spild, mod den: nok på lager, og hvor lang ventetiden er. Mangler og lange ventetider vises i panelet Problemer.
keywords: leverandør, lager, på lager, leveringstid, tilgængelighed, mangel, restordre, bestillingsliste, csv, sku, sælger, materialer, levering, problemer
from: f11160fb
---

{{ui:Levering}} på værktøjslinjen (lastbilen) kontrollerer, hvad dit mængdeudtræk kræver, mod en leverandørs lagerliste. Leverandørens rækker, der betyder noget, gemmes i mængdeudtrækkets egen fil. Intet sendes nogen steder, og intet forespørger en leverandør: du tager selv filen med.

## Filen

En CSV-fil med en overskriftsrække. Den skal have en kolonne med navn eller SKU og en kolonne med lager eller leveringstid. Disse overskrifter genkendes (i vilken rækkefølge som helst, uanset store og små bogstaver): Item, Name, Description eller Product; SKU, Part eller Item #; In stock, On hand, Available eller Quantity; Lead time eller Delivery days; Unit eller UOM; Price eller Cost; Supplier eller Vendor.

- Lager kan være et tal (1,200), »In stock« eller »Out of stock«.
- En leveringstid kan være »5 days«, »2 weeks«, »2-3 weeks« (den længste bruges), »3 months«, »same day« eller »backorder«. Et rent tal er i overskriftens enhed (dage, medmindre overskriften siger weeks eller months).
- Excel-filer læses ikke: gem arket som CSV først.

## Kontrollér mængdeudtrækket

1. Vælg {{ui:Levering}}, og derefter {{ui:Tilføj en leverandørfil…}} og vælg CSV-filen. Tilføj flere: op til fem filer, 2,000 rækker i alt, og de der matcher dine poster, først.
2. Hver post, andet vilkår og samlingsdel med en mængde kobles til en række efter navn, eller efter SKU i navnet. Et lignende navn (et indeholdt i det andet) bruges, når der ikke findes et eksakt, og det siges.
3. Under {{ui:Hvad mængdeudtrækket kræver}} kommer de korte først: »Mangler 120 EA«, »Leveringstid 21 dage«, »På restordre«, »Enhed afviger«, »Intet lagertal« eller »På lager«. Behovet inkluderer spild. En leverandørenhed, der ikke er kalkulationens (et ton mod en fod), rapporteres og sammenlignes aldrig. Hver række har {{ui:Vælg posten}}, som springer til posten.
4. Angiv {{ui:Længste ønskede ventetid (dage)}} (standard 14). En post, der ikke er på lager og venter længere end det, markeres, og oversigten nævner den længste ventetid, der betyder noget.
5. {{ui:Bestillingsliste (CSV)}} henter de manglende poster med det manglende antal, leverandøren og leveringstiden. {{ui:Udelad}} fjerner et behov fra kontrollen (det er et fortrydelsestrin).

## Regnearksfiler og prisbiblioteket

En leverandørs liste kan være en Excel-projektmappe (.xlsx) såvel som en CSV: det første ark læses, med de samme kolonnenavne. Formler køres aldrig; den værdi filen indeholder, er det, der læses.

Når en fil med priser er tilføjet, angiver {{ui:Priser til biblioteket}} i dialogen materialeprisen for hver post i [Bibliotek](topic:price-library), som filen har priser for: samme navn, og en enhed der er den samme (eller ikke angivet). Løn, spild, højde og samlinger forbliver, som de er, og postens note siger, hvilken fil prisen kom fra. En post i meter får ikke pris fra en liste i fod, og en post uden matchende navn lades være; statuslinjen siger, hvor mange der blev sprunget over pga. enheden. Genberegn priser fra biblioteket for at få de nye priser ind i dette mængdeudtræk.

## I panelet Problemer

En mangel er en advarsel, og en lang ventetid er en bemærkning, i det fælles panel Problemer (»Leverandørlager«), så de står sammen med alle andre kontroller. Du kan acceptere en med en begrundelse, og accepten gemmes i mængdeudtrækket.

## Med din assistent

Hvis du tillader assistenter under Indstillinger, kan de læse kontrollen (supply_check). Det er dig, der tilføjer en leverandørfil.

## Godt at vide

Lagertallene er kun så aktuelle som den fil, du tilføjer. Tilføj filen igen for at opdatere den: en fil med samme navn erstatter den tidligere.
