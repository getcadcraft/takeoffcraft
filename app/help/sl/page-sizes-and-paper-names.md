---
title: Velikosti listov in imena papirjev
summary: Oglejte si velikost vsakega lista v milimetrih in palcih ter njegovo ime papirja (serije A, B in C, ANSI, ARCH) in razvrstite mešan niz po velikosti, da najdete izstopajoče liste.
keywords: velikost lista, velikost papirja, ime papirja, a0, a1, a2, a3, a4, serija b, serija c, ansi, arch, arhitekturni, mm, palci, velikost po meri, po velikosti, nenavadna velikost, mešan niz, merilo, komplet načrtov, mediabox, rotacija
from: 9c061c07
---

Merilo ima pomen samo na pravem papirju. {{ui:TakeoffCraft}} prebere velikost vsakega lista PDF in poimenuje papir, zato lahko pred zaupanjem meritve vidite list, ki je bil natisnjen v drugi velikosti.

## Kaj boste naredili

Oglejte si velikost odprtega lista, nato razvrstite celoten niz po velikosti.

## Koraki

1. Odprite načrte ({{ui:Open plans}}).
2. Vrstica lista nad risbo prikazuje ime papirja odprtega lista in njegovo velikost, na primer „A1 · 594 × 841 mm“.
3. Vsaka vrstica seznama {{ui:Sheets}} ima pod imenom lista vrstico z velikostjo.
4. Izberite {{ui:By size}} v glavi {{ui:Sheets}}. Seznam zbere liste pod eno glavo za vsako velikost, največja skupina je prva, velikost z le nekaj listi pa je označena kot izstopajoča.
5. Ponovno izberite {{ui:By size}}, da se vrnete na prvotni vrstni red niza.

List DWG ali DXF nima papirja, zato zanj ni prikazana nobena velikost.

## Kako se izbere ime

- Velikost se vzame iz okvirja strani v PDF z upoštevano rotacijo.
- Imena so serije A in B (ISO 216), serija C (ISO 269), ANSI od A do E in ARCH od A do E.
- Stran, ki je znotraj 2 mm od imenovane velikosti, dobi to ime. Vsaka druga stran dobi ime „po meri“, z najbližjo imenovano velikostjo in koliko se od nje razlikuje.

## V predračunu

Delovni zvezek predračuna ima delovni list {{ui:Page sizes}} s številom posamezne velikosti.

:::note
Vrednosti palcev za ANSI in ARCH so bile vpisane iz objavljenih tabel in niso bile primerjane z natisnjenimi standardi.
:::
