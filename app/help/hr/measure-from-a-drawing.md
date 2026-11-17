---
title: Mjerenje iz crteža
summary: Uzmite duljine i površine iz vlastitih linija, lukova, polilinija i šrafura crteža odabirom objekata, uz točne lukove i rupe, umjesto ocrtavanja klikovima.
keywords: mjeri crtež, geometrija, polilinija, luk, kružnica, šrafura, bulge, točna duljina, točna površina, odabir, prozor, ocrtavanje, iz CAD-a, linearno, površina
from: fd734246
---

{{ui:Mjeri crtež}} na traci lista DWG ili DXF lista uzima objekte samog crteža kao oznake, pa ih ne morate ocrtavati klikovima. Duljina polilinije, duljina luka, površina kružnice i površina šrafure s rupama dolaze točno, iz iste aritmetike koju predmjer koristi za svaku oznaku.

## Uzmite objekte kao linearnu ili površinsku stavku

1. Napravite ili kliknite **linearnu** ili **površinsku** stavku pod {{ui:Stavke}}. List treba mjerilo.
2. Odaberite {{ui:Mjeri crtež}}.
3. Kliknite objekte na listu da ih odaberete ili povucite prozor oko njih: sve što je potpuno unutra bit će odabrano. {{key:Shift}} dodaje prozor odabiru; kliknite ponovno odabrani objekt da ga uklonite. Traka prikazuje ukupno: „Dionica: 6, ukupno 108'-9 1/8".“
4. Odaberite gumb za dodavanje koji navodi broj i stavku, npr. {{ui:Dodaj 6 u Edge}} (ili pritisnite {{key:Enter}}). Svaki objekt postaje jedna oznaka stavke, u jednom koraku poništavanja. {{key:Esc}} briše ono što ste odabrali.

## Što uzima svaka vrsta stavke

- **Linearna** stavka uzima linije, lukove, polilinije, kružnice i krivulje po duljini. Zatvoreni oblik broji se po opsegu. Šrafura je izostavljena: ima površinu, a ne duljinu, pa traka to kaže.
- **Površinska** stavka uzima zatvorene oblike: zatvorene polilinije, kružnice, 2D tijela i šrafure s rupama. Otvoreni nizovi su izostavljeni, i traka to kaže.

## Točno i gotovo točno

Linije, lukovi (bilo koji bulge), polilinije s bulgeom i kružnice su točne: duljine i površine koriste polumjer i raspon luka, a ne sliku. Elipse, spline i šrafure čija se granica sastoji od rubova mjere se u tetivama od jednog stupnja ili finijim, što je unutar stotinke postotka za elipse i desetinke za ostalo; traka kaže koliko odabranih objekata su krivulje te vrste.

## Odakle što uzima

- **Model**: objekti u prostoru modela. **Layout**: vlastite linije i objekti modela unutar prikaza (viewporta), skalirani kroz njega. Objekt koji prelazi rub prikaza se ne nudi (ispisao bi se odrezan); objekt koji oba prikaza prikazuju uzima se jednom.
- Samo slojevi koje list prikazuje. Blokovi se broje, ne mjere: pogledajte [Brojanje iz crteža](topic:count-from-a-drawing). 3D polilinije, mreže, tijela i regije se ne nude.
