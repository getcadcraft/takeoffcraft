---
title: Mjerenje iz crteža
summary: Uzmite dužine i površine iz linija, lukova, polilinija i šrafura samog crteža tako što ćete ih odabrati, sa tačnim lukovima i rupama, umjesto ocrtavanja klikovima.
keywords: mjerenje crteža, geometrija, polilinija, luk, krug, šrafura, ispupčenje, tačna dužina, tačna površina, odabir, prozor, ocrtavanje, iz CAD-a, linijski, površina
from: fd734246
---

{{ui:Izmjeri crtež}} na traci lista DWG ili DXF lista uzima objekte samog crteža kao oznake, pa ih ne ocrtavate klikovima. Dužina polilinije, dužina luka, površina kruga i površina šrafure sa njenim rupama izlaze tačno, iz istog računa koji predmjer koristi za svaku oznaku.

## Uzimanje objekata kao linijske ili površinske stavke

1. Napravite ili kliknite **linijsku** ili **površinsku** stavku ispod {{ui:Stavke}}. List treba razmjeru.
2. Odaberite {{ui:Izmjeri crtež}}.
3. Kliknite objekte na listu da ih odaberete, ili prevucite prozor oko njih: sve što je potpuno unutar njega se odabire. {{key:Shift}} dodaje prozor izboru; ponovo kliknite odabrani objekat da ga uklonite. Traka prikazuje ukupno: „6 dionica: 108'-9 1/8" ukupno.“
4. Odaberite dugme za dodavanje, koje navodi broj i stavku, na primjer {{ui:Dodaj 6 u Edge}} (ili pritisnite {{key:Enter}}). Svaki objekat postaje jedna oznaka stavke, u jednom koraku poništavanja. {{key:Esc}} briše ono što ste odabrali.

## Šta koja vrsta stavke uzima

- **Linijska** stavka uzima linije, lukove, polilinije, krugove i splajnove po dužini. Zatvoreni oblik se broji po obimu. Šrafura se izostavlja: ima površinu, a ne dužinu, i traka to kaže.
- **Površinska** stavka uzima zatvorene oblike: zatvorene polilinije, krugove, 2D tijela i šrafure sa njihovim rupama. Otvorene dionice se izostavljaju, i traka to kaže.

## Tačno i gotovo tačno

Linije, lukovi (bilo koje ispupčenje), polilinije sa ispupčenjima i krugovi su tačni: dužine i površine koriste poluprečnik i raspon luka, a ne njegovu sliku. Elipse, splajnovi i šrafure čija je granica sastavljena od ivica mjere se tetivama od jednog stepena ili sitnijih, što je unutar stotinke procenta za elipse i desetinke za ostale; traka kaže koliko od onoga što ste odabrali su krive ove vrste.

## Odakle uzima

- **Model**: objekti u prostoru modela. **Raspored**: njegove linije i objekti modela unutar viewporta, skalirani kroz njega. Objekat koji prelazi ivicu viewporta se ne nudi (iscrtava se odsječen); objekat koji prikazuju dva viewporta uzima se jednom.
- Samo slojevi koje list prikazuje. Blokovi se broje, ne mjere: pogledajte [Brojanje iz crteža](topic:count-from-a-drawing). 3D polilinije, mreže, tijela i regije se ne nude.
