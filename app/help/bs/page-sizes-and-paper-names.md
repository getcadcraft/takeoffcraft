---
title: Veličine stranica i nazivi papira
summary: Pogledajte veličinu svakog lista u milimetrima i inčima i njegov naziv papira (serije A, B i C, ANSI, ARCH), te grupišite mješoviti skup po veličini da pronađete neobične listove.
keywords: veličina stranice, veličina papira, naziv papira, a0, a1, a2, a3, a4, b serija, c serija, ansi, arch, arhitektonski, mm, inči, prilagođena veličina, po veličini, neobična veličina, mješoviti skup, razmjera, skup planova, mediabox, rotacija
from: 9c061c07
---

Razmjera ima smisla samo na pravom papiru. {{ui:TakeoffCraft}} čita veličinu svakog PDF lista i imenuje papir, pa možete vidjeti list koji je odštampan u drugoj veličini prije nego što vjerujete mjerenju na njemu.

## Šta ćete raditi

Pogledajte veličinu otvorenog lista, zatim grupišite cijeli skup po veličini.

## Koraci

1. Otvorite planove ({{ui:Otvori planove}}).
2. Traka lista iznad crteža prikazuje naziv papira i veličinu otvorenog lista, na primjer "A1 · 594 × 841 mm".
3. Svaki red liste {{ui:Listovi}} ima red s veličinom ispod naziva lista.
4. Odaberite {{ui:Po veličini}} u zaglavlju {{ui:Listovi}}. Lista okuplja listove pod jednim naslovom po veličini, najveća grupa prva, i označava veličinu s nekoliko listova kao neobičnu.
5. Odaberite {{ui:Po veličini}} ponovo da se vratite na redoslijed samog skupa.

List u DWG ili DXF formatu nema papir, pa se za njega ne prikazuje veličina.

## Kako se bira naziv

- Veličina dolazi iz okvira stranice u PDF-u s primijenjenom rotacijom.
- Nazivi su serije A i B (ISO 216), serija C (ISO 269), ANSI od A do E i ARCH od A do E.
- Stranica unutar 2 mm od navedene veličine dobija taj naziv. Svaka druga stranica kaže prilagođena, s najbližom navedenom veličinom i koliko je od nje udaljena.

## U predračunu

Radna sveska predračuna ima list {{ui:Veličine stranica}} s brojem svake veličine.

:::note
Vrijednosti u inčima za ANSI i ARCH unesene su iz objavljenih tabela i nisu upoređene sa štampanim standardima.
:::
