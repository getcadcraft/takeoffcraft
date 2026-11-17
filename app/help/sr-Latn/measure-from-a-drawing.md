---
title: Merenje sa crteža
summary: Uzmite dužine i površine iz sopstvenih linija, lukova, polilinija i šrafura crteža tako što ih birate, sa tačnim lukovima i rupama, umesto ocrtavanja klikovima.
keywords: merenje crteža, geometrija, polilinija, luk, krug, šrafura, ispupčenje, tačna dužina, tačna površina, izbor, prozor, ocrtavanje, iz CAD-a, linijski, površina
from: fd734246
---

{{ui:Izmeri crtež}} na traci lista DWG ili DXF lista uzima objekte samog crteža kao oznake, pa ih ne ocrtavate klikovima. Dužina polilinije, dužina luka, površina kruga i površina šrafure sa njenim rupama izlaze tačno, iz istog računa koji predmer koristi za svaku oznaku.

## Uzimanje objekata kao linijske ili površinske stavke

1. Napravite ili kliknite **linijsku** ili **površinsku** stavku pod {{ui:Stavke}}. List treba da ima razmeru.
2. Izaberite {{ui:Izmeri crtež}}.
3. Kliknite objekte na listu da ih izaberete, ili prevucite okvir oko njih: bira se sve što je potpuno unutar njega. {{key:Shift}} dodaje okvir izboru; kliknite izabrani objekat ponovo da ga ispustite. Traka prikazuje ukupno: „6 deonica: 108'-9 1/8" ukupno.“
4. Izaberite dugme za dodavanje, koje navodi broj i stavku, kao {{ui:Dodaj 6 u Edge}} (ili pritisnite {{key:Enter}}). Svaki objekat postaje jedna oznaka stavke, u jednom koraku opoziva. {{key:Esc}} briše ono što ste izabrali.

## Šta prima koja vrsta stavke

- **Linijska** stavka prima linije, lukove, polilinije, krugove i splajnove po dužini. Zatvoren oblik se broji po obimu. Šrafura se preskače: ima površinu, a ne dužinu, i traka to kaže.
- **Površinska** stavka prima zatvorene oblike: zatvorene polilinije, krugove, 2D tela i šrafure sa rupama. Otvorene deonice se preskaču, i traka to kaže.

## Tačno i skoro tačno

Linije, lukovi (bilo koje ispupčenje), polilinije sa ispupčenjima i krugovi su tačni: dužine i površine koriste poluprečnik i raspon luka, a ne sliku njega. Elipse, splajnovi i šrafure čija je granica sastavljena od ivica mere se u tetivama od jednog stepena ili finijim, što je unutar stotinke procenta za elipse i desetinke za ostalo; traka kaže koliko izabranih objekata su krive ove vrste.

## Odakle šta uzima

- **Model**: objekti u prostoru modela. **Raspored**: sopstvene linije i objekti modela unutar prozora pogleda, razmereni kroz njega. Objekat koji seče ivicu prozora pogleda se ne nudi (štampa se odsečen); objekat koji prikazuju dva prozora pogleda uzima se jednom.
- Samo slojevi koje list prikazuje. Blokovi se broje, ne mere: pogledajte [Brojanje sa crteža](topic:count-from-a-drawing). 3D polilinije, mreže, tela i regioni se ne nude.
