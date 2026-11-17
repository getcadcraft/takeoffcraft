---
title: Enheder
summary: De enheder en post kan rapportere i, de enheder dens formelvariabler bruger, og hvordan imperiale og metriske enheder blandes.
keywords: enheder, lf, sf, sy, sq, kvadratyard, tagkvadrater, acres, hektar, meter, kvadratmeter, ea, stk, metrisk, imperial, omregning, standardenhed
from: b7bf0528
---

## Postenheder

| Posttype | Enhed | Navn |
|---|---|---|
| Lineær | LF | lineære fod (standard) |
| Lineær | m | meter |
| Areal | SF | kvadratfod (standard) |
| Areal | SY | kvadratyard |
| Areal | SQ | tagkvadrater (100 kvadratfod) |
| Areal | ac | acres |
| Areal | m² | kvadratmeter |
| Areal | ha | hektar |
| Tæl | EA | stk |

Skift den med {{ui:Enhed}} i postredigeringen når som helst, også efter måling; mængden omregnes med det samme.

Listen {{ui:Enhed}} viser de enheder, der er slået til i {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Enheder}}, og altid postens egen enhed. En ny post starter i længde- eller arealenheden markeret med stjerne der, når den er en af postens enheder; ellers i LF eller SF. Se [Enheder, indtastede værdier og enhedslisterne](common:unit-lists).

## Enheder for formelvariablerne

| Postenhed | L, P, H | A |
|---|---|---|
| LF | fod | kvadratfod (vægareal) |
| m | meter | kvadratmeter (vægareal) |
| SF | fod | kvadratfod |
| SY | fod | kvadratyard |
| SQ | fod | tagkvadrater |
| ac | fod | acres |
| m² | meter | kvadratmeter |
| ha | meter | hektar |

For SY-poster er `A` i kvadratyard, mens `P` og `H` forbliver i fod. Et rumfang fra en SY-post er `A * 9 * H / 27` kubikyard; at bruge SF til dæk er enklere.

## Hvor enhederne er faste

Nogle aflæsninger bruger altid fod:

- den løbende aflæsning i statuslinjen under tegning (fod-tommer, SF),
- **Valgt mærke** (fod-tommer, LF og SF),
- resultatet af kontrollen (fod-tommer, med decimalfod og meter),
- segmentlængder og omkredse i regnearkets ark Marks (fod-tommer).

Postsummer, tabellen {{ui:Mængder}}, formler og arket Estimate bruger postens egen enhed.

## Målestokke og enheder er adskilte

En arks målestok siger, hvor stor tegningen er; en posts enhed siger, hvordan den skal rapporteres. En metrisk tegning i `1:100` kan udtages i LF, og en imperial tegning i m². Kalibrering accepterer enhver enhed: `24'-6"`, `7.5 m`, `7500 mm`.

## Præcision

TakeoffCraft måler nøjagtigt ud fra de punkter, du klikker, inklusive sande buelængder og arealer, og runder ikke mængder af. Visningen runder længder af til 1/16 tomme og decimaler til to decimaler. Beløb afrundes kun ved de udregnede beløb, til nærmeste øre.
