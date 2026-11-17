---
title: Kopiér, sæt ind og duplikér markeringer
summary: Kopiér markeringer med deres poster, sæt dem ind dér du klikker eller samme sted på et andet ark, duplikér, klip, slet og vælg alle, hvert trin kan fortrydes.
keywords: kopiér, sæt ind, klip, duplikér, sæt ind på samme sted, udklipsholder, vælg alle, fravælg alle, flere markeringer, typisk etage, gentag, samme tegning, et andet ark, kopiér post, duplikér post
from: e20e9024
---

Gruppen {{ui:Rediger}} på værktøjslinjen rummer {{ui:Fortryd}}, {{ui:Gentag}}, {{ui:Kopiér}} og {{ui:Sæt ind}}. Dens {{ui:Mere}}-menu har resten, hver med sin tast: {{ui:Klip}}, {{ui:Kopiér}}, {{ui:Sæt ind}}, {{ui:Sæt ind på samme sted}}, {{ui:Duplikér}}, {{ui:Slet}}, {{ui:Vælg alle}} og {{ui:Fravælg alle}}. Hver af dem kan fortrydes i ét trin med {{key:Mod+Z}}.

## Vælg markeringerne

1. Vælg {{ui:Vælg}} ({{key:V}}) og klik på en markering.
2. Hold {{key:Shift}} nede og klik på flere markeringer for at tilføje dem. {{key:Shift}} + klik på en valgt markering fjerner den igen.
3. Eller tryk {{key:Mod+A}} ({{ui:Vælg alle}}) for at tage alle markeringer på det åbne ark.

Med flere markeringer valgt viser det højre panel **Valgte markeringer**: hvor mange af hver post, med {{ui:Kopiér}}, {{ui:Duplikér}}, {{ui:Klip}} og {{ui:Slet markeringer}}. Hjørnehåndtag vises kun når én markering er valgt. {{key:Esc}} ({{ui:Fravælg alle}}) rydder valget.

## Kopiér og sæt ind dér du klikker

1. Vælg markeringerne og tryk {{key:Mod+C}} ({{ui:Kopiér}}). Markeringerne kopieres med deres poster, inklusive hver posts kalkulationsenhed, spild og omkostninger.
2. Gå til det ark du vil have dem på (det kan være det samme ark).
3. Tryk {{key:Mod+V}} ({{ui:Sæt ind}}). En stiplet kopi følger markøren.
4. Klik hvor den skal hen. Midten af de kopierede markeringer lander ved markøren.

{{key:Esc}} annullerer og tilføjer intet. De indsatte markeringer er valgt bagefter, så {{key:Delete}} eller {{key:Mod+Z}} fjerner dem igen.

I samme mængdeudtrækk går indsatte markeringer på **de samme poster**, så deres mængder lægges til disse poster. I et andet mængdeudtrækk (en anden fane, eller efter {{ui:Ny}}) bruges en post med samme navn og type; ellers tilføjes posten med sin kalkulationsenhed. Hvis navnet er optaget af en post af en anden type, kaldes den tilføjede post "(navn) (kopi)".

Indsatte markeringer går i tilbudsområdet valgt øverst i panelet {{ui:Poster}} (eller i ingen). Se [Tilbudsområder](topic:bid-areas).

## Sæt ind på samme sted

{{key:Mod+Shift+V}} ({{ui:Sæt ind på samme sted}}) lægger kopien præcis samme sted på det åbne ark, efter dens position på siden. Brug det til en typisk etage: tag niveau 2, kopiér, åbn niveau 3, sæt ind på samme sted.

Sæt ind på samme sted kræver et ark i **samme størrelse** som det du kopierede fra. På et ark i en anden størrelse siger TakeoffCraft det og indsætter intet; brug {{ui:Sæt ind}} og klik i stedet. På arket du kopierede fra lander kopien oven på originalerne.

## Målestokken skal passe

Længder og arealer afhænger af arkets målestok. Et forløb der måler 10' ved 1/4" = 1'-0" ville måle 20' på et ark i 1/8" = 1'-0". Derfor indsætter TakeoffCraft kun forløb og arealer på et ark med **samme målestok** som arket de kom fra, og siger klart når det ikke er:

- Det åbne ark har endnu ingen målestok: giv det en først ([Angiv målestokken](topic:set-the-scale)), og sæt derefter ind.
- Det åbne ark har en anden målestok: meddelelsen nævner begge målestokke. Sæt ind på et ark i samme målestok.
- Antal kræver ingen målestok: kopierede antal indsættes hvor som helst.

## Duplikér

{{key:Mod+D}} ({{ui:Duplikér}}) kopierer de valgte markeringer og lægger kopien ved markøren med det samme; klik hvor den skal hen. Intet tilføjes før du klikker, og {{key:Esc}} efterlader intet. Duplikér ændrer ikke hvad {{ui:Sæt ind}} indsætter.

## Klip og slet

- {{key:Mod+X}} ({{ui:Klip}}) kopierer de valgte markeringer og sletter dem. Sæt dem ind dér de hører hjemme, eller fortryd klippet.
- {{key:Delete}} eller {{key:Backspace}} ({{ui:Slet}}) sletter de valgte markeringer uden at kopiere dem.

## Kopiér en post

Postredigeringen (under **Poster**) slutter med:

- {{ui:Kopiér post}}: kopierer posten med dens kalkulationsenhed, spild og omkostninger, uden markeringer. {{ui:Sæt ind}} tilføjer så en kopi af den til dette mængdeudtrækk, eller til et andet.
- {{ui:Duplikér post}}: tilføjer en kopi med det samme, navngivet "(navn) (kopi)".

:::tip
Kopien bliver på denne computer: den gemmes i denne fane og i browserens lager, så en anden TakeoffCraft-fane kan indsætte den. Intet uploades, og systemets udklipsholder bruges ikke, så du kan ikke indsætte markeringer i andre programmer.
:::

:::note
En kopi kommer fra ét ark ad gangen. Markeringer indsættes som de er: der er endnu ingen rotering eller spejling af en kopi.
:::
