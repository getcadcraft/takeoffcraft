---
title: Tilboðsyfirlit og tilboðsskjal
summary: Bættu launaálagi, söluskatti, yfirhöfn, hagnaði og tryggingu við kostnaðaráætlunina, skrifaðu það sem er innifalið og útilokað, og sæktu tilboðs-PDF til að senda.
keywords: tilboð, launaálag, álag, launaskrá, tilboðsskjal, yfirhöfn, hagnaður, álagning, framlegð, söluskattur, trygging, innifalið, útilokað, skilmálar, undirskrift, viðskiptavinur, verð
from: 3208a561
---

Kostnaðaráætlunin verðleggur það sem þú mældir. **Tilboðsyfirlitið** breytir henni í verð: það bætir við söluskatti, yfirhöfn, hagnaði og tryggingu, og býr til **tilboðs-PDF** með því sem er innifalið og útilokað.

Opnaðu það frá {{ui:Flytja út}} › {{ui:Tilboðsyfirlit og tilboðsskjal…}}. Allt í því er vistað með magntökunni, og hverri breytingu má afturkalla.

## Álagningin

Skrifaðu prósentu í hvern fimm (skildu hina eftir á 0). Þær eru reiknaðar í þessari röð, hver á því sem er fyrir ofan:

| Lína | Reiknuð sem |
|---|---|
| Efni, Vinna | Heildartölur áætlunarinnar (grunntilboðið þegar magntakan hefur [valkosti](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Launaálag | Álag % × vinna: launaskattar, tryggingar og hlunnindi á laun áhafna þinna. |
| **Kostnaður** | Efni + vinna + launaálag. |
| Söluskattur á efni | Skatt % × efni. |
| Yfirhöfn | Yfirhöfn % × (kostnaður + skattur). |
| Hagnaður | Hagnaður % × (kostnaður + skattur + yfirhöfn). |
| Trygging | Trygging % × allt ofangreint. |
| **Tilboð** | Summa línanna. |

Hver lína er námunduð að sentinu. Vinnubókin sýnir sömu línur undir heildarsummu vinnublaðsins Áætlun, með lifandi formúlum. Yfirlitið uppfærist þegar þú skrifar: {{key:Enter}} staðfestir prósentuna. Hver valkostur er sýndur með sömu álagningu á eigin kostnaði, þannig að eigandinn sjái hvað það breytir í raun að taka hann.

## Tilboðsskjalið

Fylltu út það sem tilboðið á að segja:

- **Verk** (heiti magntökunnar þegar það er autt), **Til** (viðskiptavinurinn) og **Frá** (fyrirtækið þitt).
- **Innifalið** og **Útilokað**: einn á línu; upphafsstrik eða punktur fyrir framan er í lagi.
- **Skilmálar**: frjáls texti, eins og „Gilt í 30 daga.“
- **Telja upp liði og magntölur**: umfangið, lið fyrir lið, með magntölum og án verða. Afhakaðu fyrir tilboð á heildarverði.

Veldu {{ui:Tilboðs-PDF}}. PDF-skráin (`<takeoff> - proposal.pdf`) er með dagsetningu, verðblokkina með hverri álagningu og tilboðinu, valkostina, umfangið, það sem er innifalið og útilokað, skilmálana, og línur til að skrifa undir og dagsetja. Ef einhverjar magntölur var ekki hægt að mæla (blað án mælikvarða), segir það það undir verðinu.

## Í útflutningnum

Þegar magntakan hefur tilboðsyfirlit endar CSV-skráin á því, og vinnubókin fær vinnublaðið **Tilboðsyfirlit** með hverri línu, prósentu hennar og upphæð. Sjá [Flytja út kostnaðaráætlun](topic:export-estimate).
