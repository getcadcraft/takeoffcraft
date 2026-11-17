---
title: Opombe, revizijski oblaki in poudarki
summary: Na listih označite vprašanja in spremembe z opombami, revizijskimi oblaki in poudarki, vsako spremljajte kot odprto, odgovorjeno ali zaprto ter jih pošljite v označenem PDF.
keywords: označba, označbe, opomba, komentar, vprašanje, rfi, oblak, revizijski oblak, poudarek, stanje, odprto, odgovorjeno, zaprto, pregled, seznam označb
from: 2b395c13
---

Označbe so namenjene temu, kar si morate zapomniti ali vprašati med predizmero: „potrdite vrsto temelja“, revizijski oblak okoli spremenjene stene, poudarjena opomba na tlorisu. Ležijo na listu s stanjem, so navedene na enem mestu in se natisnejo v označenem PDF. Nikoli se ne štejejo: brez količine in brez stroškov.

## Dodajte eno

Odprite {{ui:Označba}} v vrstici nad listom in izberite:

| Označba | Kako |
|---|---|
| {{ui:Opomba}} | Kliknite, kamor sodi, vpišite opombo in izberite {{ui:Dodaj}}. Prikaže se okrogel zatič s prvo vrstico poleg njega. |
| {{ui:Oblak}} | Kliknite en kot, nato nasprotnega, in vpišite opombo (ali pustite prazno). Okoli okvirja nastane nazobčan revizijski oblak. |
| {{ui:Poudarek}} | Kliknite dva kota: prosojno rumeno polje, po želji z opombo. |

{{key:Esc}} po prvem kotu prekliče. Orodje ostane vklopljeno za naslednjo označbo; {{key:V}} vrne na {{ui:Izberi}}.

## Stanje in urejanje

Kliknite označbo z {{ui:Izberi}}, da jo izberete. Desna plošča prikaže **Označba**: njeno vrsto in list, njeno **Stanje** (Odprto, Odgovorjeno ali Zaprto) ter njeno besedilo, ki ga lahko spremenite. {{key:Delete}} (ali {{ui:Izbriši}}) jo odstrani; {{key:Mod+Z}} jo povrne.

Okrogel zatič opombe je oranžen, dokler je odprt, moder, ko je odgovorjen, in siv, ko je zaprt; zaprt oblak postane siv.

## Seznam

**Označbe** v desni plošči navedejo vsako označbo predizmere s stanjem in povedo, koliko jih je še odprtih. Označite **Samo odprte**, da vidite, kaj je še treba rešiti. Kliknite vrstico, da greste na njen list in jo izberete.

## Delite jih

- {{ui:Označeni PDF}} jih nariše na straneh: poudarke, oblake in zatiče, vsakega z okvirjem, ki z VELIKIMI ČRKAMI navaja stanje (ODPRTO, ODGOVORJENO, ZAPRTO) in njegovo besedilo. Stran z označbami, a brez oznak predizmere, je prav tako vključena.
- {{ui:XLSX}} doda delovni list **Označbe**: list, vrsto, stanje in besedilo, po ena vrstica za vsako.
- Shranjene so v `.takeoff.json` in v [PDF-ju s predizmero v sebi](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
