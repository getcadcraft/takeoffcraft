---
title: Kopier, lim inn og dupliser merker
summary: Kopier merker med sine poster, lim dem inn der du klikker eller på samme sted på et annet ark, dupliser, klipp ut, slett og velg alle, hvert trinn kan angres.
keywords: kopier, lim inn, klipp ut, dupliser, lim inn på samme sted, utklippstavle, velg alle, fjern utvalg, flere merker, typisk etasje, gjenta, samme plan, et annet ark, kopier post, dupliser post
from: e20e9024
---

{{ui:Rediger}}-gruppen på verktøylinjen har {{ui:Angre}}, {{ui:Gjør om}}, {{ui:Kopier}} og {{ui:Lim inn}}. Menyen {{ui:Mer}} har resten, hver med sin tast: {{ui:Klipp ut}}, {{ui:Kopier}}, {{ui:Lim inn}}, {{ui:Lim inn på samme sted}}, {{ui:Dupliser}}, {{ui:Slett}}, {{ui:Velg alle}} og {{ui:Fjern utvalg}}. Hver av dem er ett trinn å angre med {{key:Mod+Z}}.

## Velg merkene

1. Velg {{ui:Velg}} ({{key:V}}) og klikk et merke.
2. Hold {{key:Shift}} og klikk flere merker for å legge dem til. {{key:Shift}} + klikk på et valgt merke tar det ut igjen.
3. Eller trykk {{key:Mod+A}} ({{ui:Velg alle}}) for å ta alle merkene på det åpne arket.

Med flere merker valgt viser det høyre panelet **Valgte merker**: hvor mange av hvert element, med {{ui:Kopier}}, {{ui:Dupliser}}, {{ui:Klipp ut}} og {{ui:Slett markeringer}}. Hjørnehåndtakene vises bare når ett merke er valgt. {{key:Esc}} ({{ui:Fjern utvalg}}) tømmer utvalget.

## Kopier og lim inn der du klikker

1. Velg merkene og trykk {{key:Mod+C}} ({{ui:Kopier}}). Merkene kopieres med sine poster, inkludert hver posts sammenstilling, svinn og kostnader.
2. Gå til arket du vil ha dem på (det kan være samme ark).
3. Trykk {{key:Mod+V}} ({{ui:Lim inn}}). En stiplet kopi følger pekeren.
4. Klikk der den skal gå. Midten av de kopierte merkene havner ved pekeren.

{{key:Esc}} avbryter og legger til ingenting. De innlimte merkene er valgt etterpå, så {{key:Delete}} eller {{key:Mod+Z}} fjerner dem igjen.

I samme mengdeuttak går innlimte merker på **de samme postene**, så mengdene legges til disse postene. I et annet mengdeuttak (en annen fane, eller etter {{ui:Ny}}) brukes en post med samme navn og type; ellers legges posten til med sin sammenstilling. Hvis navnet er tatt av en post av en annen type, kalles den tillagte posten «(navn) (kopi)».

Innlimte merker havner i tilbudsområdet valgt øverst i {{ui:Poster}}-panelet (eller i ingen). Se [Tilbudsområder](topic:bid-areas).

## Lim inn på samme sted

{{key:Mod+Shift+V}} ({{ui:Lim inn på samme sted}}) legger kopien på nøyaktig samme sted på det åpne arket, etter posisjonen på siden. Bruk det for en typisk etasje: ta ut mengder for etasje 2, kopier, åpne etasje 3, lim inn på samme sted.

Lim inn på samme sted krever et ark av **samme størrelse** som det du kopierte fra. På et ark av en annen størrelse sier TakeoffCraft fra og limer ikke inn noe; bruk {{ui:Lim inn}} og klikk i stedet. På arket du kopierte fra, legges kopien oppå originalene.

## Målestokken må stemme

Lengder og arealer avhenger av arkets målestokk. En strekning som måler 10' ved 1/4" = 1'-0" ville måle 20' på et ark med 1/8" = 1'-0". Derfor limer TakeoffCraft bare inn strekninger og områder på et ark med **samme målestokk** som arket de kom fra, og sier tydelig fra når det ikke er det:

- Det åpne arket har ingen målestokk ennå: gi det en først ([Sett målestokken](topic:set-the-scale)), og lim deretter inn.
- Det åpne arket har en annen målestokk: meldingen nevner begge målestokkene. Lim inn på et ark med samme målestokk.
- Tellinger trenger ingen målestokk: kopierte tellinger limes inn hvor som helst.

## Dupliser

{{key:Mod+D}} ({{ui:Dupliser}}) kopierer de valgte merkene og legger kopien på pekeren med en gang; klikk der den skal gå. Ingenting legges til før du klikker, og {{key:Esc}} etterlater ingenting. Dupliser endrer ikke hva {{ui:Lim inn}} limer inn.

## Klipp ut og slett

- {{key:Mod+X}} ({{ui:Klipp ut}}) kopierer de valgte merkene og sletter dem. Lim dem inn der de hører hjemme, eller angre klippet.
- {{key:Delete}} eller {{key:Backspace}} ({{ui:Slett}}) sletter de valgte merkene uten å kopiere dem.

## Kopier en post

Postredigeringen (under **{{ui:Poster}}**) slutter med:

- {{ui:Kopier post}}: kopierer posten med sin sammenstilling, svinn og kostnader, uten merker. {{ui:Lim inn}} legger deretter til en kopi av den i dette mengdeuttaket, eller i et annet.
- {{ui:Dupliser post}}: legger til en kopi med en gang, kalt «(navn) (kopi)».

:::tip
Kopien blir på denne datamaskinen: den holdes i denne fanen og i nettleserens lagring, så en annen TakeoffCraft-fane kan lime den inn. Ingenting lastes opp, og systemets utklippstavle brukes ikke, så du kan ikke lime merker inn i andre programmer.
:::

:::note
En kopi kommer fra ett ark om gangen. Merker limes inn slik de er: det finnes ingen rotering eller speiling av en kopi ennå.
:::
