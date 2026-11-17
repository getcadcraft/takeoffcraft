---
title: Enheter
summary: Enhetene en post kan rapportere i, enhetene formelvariablene bruker, og hvordan imperiske og metriske enheter blandes.
keywords: enheter, lf, sf, sy, sq, kvadratyard, takkvadrater, acres, hektar, meter, kvadratmeter, ea, stk, metrisk, imperisk, konvertering, standardenhet
from: b7bf0528
---

## Postenheter

| Posttype | Enhet | Navn |
|---|---|---|
| Linjær | LF | løpende fot (standard) |
| Linjær | m | meter |
| Areal | SF | kvadratfot (standard) |
| Areal | SY | kvadratyard |
| Areal | SQ | takkvadrater (100 kvadratfot) |
| Areal | ac | acres |
| Areal | m² | kvadratmeter |
| Areal | ha | hektar |
| Telling | EA | stykk |

Endre den med {{ui:Enhet}} i postredigeringen når som helst, selv etter måling; mengden konverteres med en gang.

Enhetslisten viser enhetene som er slått på under {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Enheter}}, og alltid postens egen enhet. En ny post starter i lengde- eller arealenheten som er markert med stjerne der, når den er en av postens enheter; ellers i LF eller SF. Se [Enheter, skrevne verdier og enhetslistene](common:unit-lists).

## Enheter for formelvariablene

| Postenhet | L, P, H | A |
|---|---|---|
| LF | fot | kvadratfot (veggareal) |
| m | meter | kvadratmeter (veggareal) |
| SF | fot | kvadratfot |
| SY | fot | kvadratyard |
| SQ | fot | takkvadrater |
| ac | fot | acres |
| m² | meter | kvadratmeter |
| ha | meter | hektar |

For SY-poster er `A` i kvadratyard, mens `P` og `H` forblir i fot. Et volum fra en SY-post er `A * 9 * H / 27` kubikkyard; å bruke SF for dekker er enklere.

## Hvor enhetene er fastsatt

Noen visninger bruker alltid fot:

- sanntidsvisningen i statuslinjen mens du tegner (fot-tommer, SF),
- **Valgt markering** (fot-tommer, LF og SF),
- kontrollresultatet (fot-tommer, med desimalfot og meter),
- segmentlengder og omkrets i regnearkets Markeringer-ark (fot-tommer).

Postsummene, tabellen {{ui:Mengder}}, formlene og Kalkyle-arket bruker postens egen enhet.

## Målestokk og enheter er atskilt

En arkskala sier hvor stor tegningen er; en posts enhet sier hvordan den skal rapporteres. En metrisk tegning i `1:100` kan tas ut i LF, og en imperisk tegning i m². Kalibrering godtar alle enheter: `24'-6"`, `7.5 m`, `7500 mm`.

## Presisjon

TakeoffCraft måler nøyaktig ut fra punktene du klikker, inkludert ekte buelengder og arealer, og runder ikke av mengder. Visning runder lengder til 1/16 tomme og desimaler til to plasser. Penger avrundes bare i de utregnede beløpene, til nærmeste øre.
