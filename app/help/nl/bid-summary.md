---
title: Inschrijvingsoverzicht en offerte
summary: Voeg loonlastenopslag, omzetbelasting, algemene kosten, winst en borgstelling toe aan de raming, schrijf de inbegrepen en uitgesloten posten, en download een offerte-pdf om te verzenden.
keywords: inschrijving, loonlastenopslag, lasten, loonkosten, offerte, algemene kosten, winst, opslag, marge, omzetbelasting, borgstelling, inbegrepen, uitgesloten, voorwaarden, handtekening, opdrachtgever, prijs
from: 3208a561
---

De raming prijst wat u hebt opgemeten. Het **inschrijvingsoverzicht** maakt er een prijs van: het voegt omzetbelasting, algemene kosten, winst en borgstelling toe, en maakt een **offerte-pdf** met uw inbegrepen en uitgesloten posten.

Open het via {{ui:Exporteren}} › {{ui:Inschrijvingsoverzicht en offerte…}}. Alles erin wordt met de opmeting opgeslagen, en elke wijziging kan ongedaan worden gemaakt.

## De opslagen

Typ een percentage in een van de vijf (laat de andere op 0 staan). Ze worden in deze volgorde berekend, elk over wat erboven staat:

| Regel | Berekend als |
|---|---|
| Materiaal, Arbeid | De totalen van de raming (de basisinschrijving wanneer de opmeting [alternatieven](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts) heeft). |
| Loonlastenopslag | Lasten % × arbeid: loonbelasting, verzekeringen en uitkeringen over de lonen van uw ploegen. |
| **Kosten** | Materiaal + arbeid + loonlastenopslag. |
| Omzetbelasting op materiaal | Belasting % × materiaal. |
| Algemene kosten | Algemene kosten % × (kosten + belasting). |
| Winst | Winst % × (kosten + belasting + algemene kosten). |
| Borgstelling | Borgstelling % × alles hierboven. |
| **Inschrijving** | De som van de regels. |

Elke regel wordt op de cent afgerond. De werkmap toont dezelfde regels onder het totaal van het ramingblad, met live formules. Het overzicht wordt bijgewerkt terwijl u typt: {{key:Enter}} past een percentage toe. Elk alternatief wordt getoond met dezelfde opslagen op zijn eigen kosten, zodat de opdrachtgever ziet wat het weghalen of toevoegen werkelijk verandert.

## De offerte

Vul in wat de offerte moet vermelden:

- **Project** (de naam van de opmeting als dit leeg is), **Aan** (de opdrachtgever) en **Van** (uw bedrijf).
- **Inbegrepen** en **Uitgesloten**: één per regel; een koppelteken of opsommingsteken vooraan is prima.
- **Voorwaarden**: vrije tekst, zoals "Geldig 30 dagen."
- **Posten en hoeveelheden opnemen**: de omvang, post voor post, met hoeveelheden en zonder prijzen. Vink het uit voor een offerte op totaalbedrag.

Kies {{ui:Offerte-pdf}}. De pdf (`<takeoff> - proposal.pdf`) bevat de datum, het prijsblok met elke opslag en de inschrijving, de alternatieven, de omvang, de inbegrepen en uitgesloten posten, de voorwaarden, en regels om te ondertekenen en te dateren. Als sommige hoeveelheden niet konden worden gemeten (een blad zonder schaal), staat dat onder de prijs.

## In de exports

Zodra de opmeting een inschrijvingsoverzicht heeft, eindigt het CSV-bestand ermee en krijgt de werkmap een werkblad **Inschrijvingsoverzicht**, met elke regel, het percentage en het bedrag. Zie [De raming exporteren](topic:export-estimate).
