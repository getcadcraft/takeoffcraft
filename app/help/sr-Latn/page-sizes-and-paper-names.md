---
title: Veličine strana i nazivi papira
summary: Pogledaj veličinu svakog lista u milimetrima i inčima i njegov naziv papira (serije A, B i C, ANSI, ARCH), i grupiši mešani set po veličini da nađeš neobične listove.
keywords: veličina strane, veličina papira, naziv papira, a0, a1, a2, a3, a4, serija b, serija c, ansi, arch, arhitektonski, mm, inči, prilagođena veličina, po veličini, neobična veličina, mešani set, razmera, set planova, mediabox, rotacija
from: 9c061c07
---

Razmera ima smisla samo na pravom papiru. {{ui:TakeoffCraft}} čita veličinu svakog PDF lista i imenuje papir, pa možeš da vidiš list koji je odštampan u drugoj veličini pre nego što veruješ merenju na njemu.

## Šta ćeš raditi

Pogledaj veličinu otvorenog lista, pa grupiši ceo set po veličini.

## Koraci

1. Otvori planove ({{ui:Otvori planove}}).
2. Traka lista iznad crteža prikazuje naziv papira otvorenog lista i njegovu veličinu, na primer „A1 · 594 × 841 mm“.
3. Svaki red spiska {{ui:Listovi}} ima red sa veličinom ispod naziva lista.
4. Izaberi {{ui:Po veličini}} u zaglavlju {{ui:Listovi}}. Spisak skuplja listove pod jednim naslovom po veličini, najveća grupa prva, i označava veličinu sa samo nekoliko listova kao neobičnu.
5. Izaberi {{ui:Po veličini}} ponovo da se vratiš na sopstveni redosled seta.

DWG ili DXF list nema papir, pa za njega veličina nije prikazana.

## Kako se bira naziv

- Veličina dolazi iz okvira strane u PDF-u, sa primenjenom rotacijom.
- Nazivi su serije A i B (ISO 216), serija C (ISO 269), ANSI A do E i ARCH A do E.
- Strana u okviru 2 mm od imenovane veličine dobija taj naziv. Svaka druga strana dobija oznaku prilagođena, uz najbližu imenovanu veličinu i koliko je od nje udaljena.

## U proceni

Radna sveska procene ima radni list {{ui:Veličine strana}} sa brojem svake veličine.

:::note
Vrednosti u inčima za ANSI i ARCH unete su iz objavljenih tabela i nisu upoređene sa štampanim standardima.
:::
