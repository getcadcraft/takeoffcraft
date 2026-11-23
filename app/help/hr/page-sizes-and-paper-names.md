---
title: Veličine listova i nazivi papira
summary: Pogledajte veličinu svakog lista u milimetrima i inčima te njegov naziv papira (serije A, B i C, ANSI, ARCH) i grupirajte mješoviti set po veličini kako biste pronašli neobične listove.
keywords: veličina stranice, veličina papira, naziv papira, a0, a1, a2, a3, a4, serija b, serija c, ansi, arch, arhitektonski, mm, inči, prilagođena veličina, po veličini, neobična veličina, mješoviti set, mjerilo, set nacrta, mediabox, rotacija
from: 9c061c07
---

Mjerilo ima smisla samo na ispravnom papiru. {{ui:TakeoffCraft}} čita veličinu svakog PDF lista i imenuje papir, pa možete vidjeti list koji je ispisan u drugoj veličini prije nego što povjerujete mjeri na njemu.

## Što ćete raditi

Pogledajte veličinu otvorenog lista, zatim grupirajte cijeli set po veličini.

## Koraci

1. Otvorite nacrte ({{ui:Otvori nacrte}}).
2. Traka lista iznad crteža prikazuje naziv papira otvorenog lista i njegovu veličinu, na primjer „A1 · 594 × 841 mm“.
3. Svaki redak popisa {{ui:Listovi}} ima redak s veličinom ispod naziva lista.
4. Odaberite {{ui:Po veličini}} u zaglavlju {{ui:Listovi}}. Popis skuplja listove pod jednim naslovom za svaku veličinu, s najvećom skupinom prvom, i označava veličinu s nekoliko listova kao neobičnu.
5. Ponovno odaberite {{ui:Po veličini}} da se vratite na izvorni redoslijed seta.

List DWG ili DXF nema papir, pa se za njega ne prikazuje veličina.

## Kako se bira naziv

- Veličina dolazi iz okvira stranice u PDF-u s primijenjenom rotacijom.
- Nazivi su serije A i B (ISO 216), serija C (ISO 269), ANSI od A do E i ARCH od A do E.
- Stranica unutar 2 mm od imenovane veličine dobiva taj naziv. Svaka druga stranica dobiva oznaku prilagođeno, s najbližom imenovanom veličinom i koliko je od nje odstupa.

## U predračunu

Radna tablica predračuna ima radni list {{ui:Veličine listova}} s brojem svake veličine.

:::note
Vrijednosti u inčima za ANSI i ARCH upisane su iz objavljenih tablica i nisu uspoređene s tiskanim normama.
:::
