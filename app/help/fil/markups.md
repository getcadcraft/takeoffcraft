---
title: Mga note, cloud at highlight
summary: Markahan ang mga tanong at pagbabago sa mga sheet gamit ang note, revision cloud at highlight, subaybayan ang bawat isa bilang Bukas, Nasagot o Sarado, at ipadala ang mga ito sa marked PDF.
keywords: markup, markups, note, comment, question, rfi, cloud, revision cloud, highlight, status, bukas, nasagot, sarado, open, answered, closed, review, markups list, listahan ng markup
from: 2b395c13
---

Ang markup ay para sa mga bagay na kailangan mong tandaan o itanong habang nagta-takeoff: "kumpirmahin ang base type", isang revision cloud sa paligid ng binagong pader, o isang highlighted na note sa plano. Nasa sheet ang mga ito na may status, nakalista sa iisang lugar, at naka-print sa marked PDF. **Hindi sila kailanman binibilang**: walang dami, walang gastos.

## Magdagdag ng isa

Buksan ang {{ui:Markup}} sa bar sa itaas ng sheet at piliin:

| Markup | Paano |
|---|---|
| {{ui:Note}} | I-click kung saan ito ilalagay, i-type ang note, piliin ang {{ui:Add}}. Lumalabas ito bilang bilog na pin na may unang linya nito sa tabi. |
| {{ui:Cloud}} | I-click ang isang sulok, pagkatapos ang kabilang sulok, at i-type ang note (o iwanang walang laman). Isang revision cloud na may alon-alon na gilid ang bumabalot sa box. |
| {{ui:Highlight}} | I-click ang dalawang sulok: isang dilaw na box na tumatagos ang tingin, may kasamang note kung gusto mo. |

Kinakansela ng {{key:Esc}} pagkatapos ng unang sulok. Nananatiling naka-on ang tool para sa susunod; ibinabalik ng {{key:V}} sa {{ui:Select}}.

## Status at pag-edit

I-click ang isang markup gamit ang {{ui:Select}} para piliin ito. Ipinapakita ng kanang panel ang **Markup**: ang uri at sheet nito, ang **Status** nito (Bukas, Nasagot o Sarado) at ang teksto nito, na maaari mong baguhin. Inaalis ng {{key:Delete}} (o {{ui:Delete}}) ito; ibinabalik ito ng {{key:Mod+Z}}.

Kulay kahel ang pin ng note habang bukas, asul kapag nasagot na, at kulay abo kapag sarado; nagiging kulay abo ang saradong cloud.

## Ang listahan

Inililista ng **Markups** sa kanang panel ang bawat markup ng takeoff kasama ang status nito, at sinasabi kung ilan pa ang bukas. Lagyan ng tsek ang **Bukas lamang** para makita kung ano pa ang kailangang ayusin. I-click ang isang row para pumunta sa sheet nito at piliin ito.

## Ibahagi ang mga ito

- Iginuguhit ng {{ui:Marked PDF}} ang mga ito sa mga pahina: highlight, cloud at pin, bawat isa ay may box na nagpapakita ng status nito sa malalaking titik (BUKAS, NASAGOT, SARADO) at ang teksto nito. Kasama rin ang pahinang may markup pero walang takeoff mark.
- Nagdaragdag ang {{ui:XLSX}} ng worksheet na **Markups**: sheet, uri, status at teksto, isang row bawat isa.
- Naka-save sila sa `.takeoff.json` at sa [PDF na may takeoff sa loob](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
