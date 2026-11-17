---
title: Merjenje iz risbe
summary: Jemljite dolžine in površine iz lastnih črt, lokov, polilinij in šrafur risbe tako, da jih izberete, z natančnimi loki in luknjami, namesto sledenja s kliki.
keywords: merjenje risbe, geometrija, polilinija, lok, krog, šrafura, izboklina, natančna dolžina, natančna površina, izbira, okno, sledenje, iz CAD, linearno, površina
from: fd734246
---

{{ui:Meri risbo}} na vrstici lista DWG ali DXF vzame predmete risbe kot oznake, zato jih vam ni treba slediti s kliki. Dolžina polilinije, dolžina loka, površina kroga in površina šrafure z njenimi luknjami so natančne, iz iste aritmetike, ki jo predizmera uporablja za vsako oznako.

## Vzemite predmete kot linijsko ali površinsko postavko

1. Ustvarite ali kliknite **linijsko** ali **površinsko** postavko pod {{ui:Postavke}}. List potrebuje merilo.
2. Izberite {{ui:Meri risbo}}.
3. Kliknite predmete na listu, da jih izberete, ali povlecite okno okoli njih: izbrano je vse, kar je v celoti znotraj. {{key:Shift}} doda okno k izbranemu; ponovno kliknite izbrani predmet, da ga odstranite. Vrstica prikaže skupno: „6 odsekov: 108'-9 1/8" skupaj.“
4. Izberite gumb za dodajanje, ki navede število in postavko, na primer {{ui:Dodaj 6 v Edge}} (ali pritisnite {{key:Enter}}). Vsak predmet postane ena oznaka postavke v enem koraku razveljavitve. {{key:Esc}} počisti izbor.

## Kaj vsaka vrsta postavke vzame

- **Linijska** postavka vzame črte, loke, polilinije, kroge in zlepke po dolžini. Zaprta oblika se šteje po obsegu. Šrafura je izpuščena: ima površino, ne dolžine, vrstica pa to pove.
- **Površinska** postavka vzame zaprte oblike: zaprte polilinije, kroge, 2D telesa in šrafure z njihovimi luknjami. Odprti odseki so izpuščeni, vrstica pa to pove.

## Natančno in skoraj natančno

Črte, loki (poljubna izboklina), polilinije z izboklinami in krogi so natančni: dolžine in površine uporabljajo polmer in kot loka, ne njegove slike. Elipse, zlepki in šrafure, katerih meja je sestavljena iz robov, se merijo v tetivah po eni stopinji ali manj, kar je v stotinki odstotka za elipse in desetinki za ostalo; vrstica pove, koliko izbranih predmetov je krivulj te vrste.

## Od kod jemlje

- **Model**: predmeti v prostoru modela. **Postavitev**: lastne črte in predmeti modela znotraj poglednega okna, skalirani skozi njega. Predmet, ki prečka rob poglednega okna, ni ponujen (izriše se odrezan); predmet, ki ga prikazujeta dva pogledna okna, je vzet enkrat.
- Samo sloji, ki jih list prikazuje. Bloki se štejejo, ne merijo: glejte [Štetje iz risbe](topic:count-from-a-drawing). 3D polilinije, mreže, telesa in regije niso ponujeni.
