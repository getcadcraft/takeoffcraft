---
title: Sjekk mengdeuttaket i 3D
summary: Se veggene, dekkene og tellingene på det åpne arket stå på tegningen, roter rundt dem, og klikk på én for å velge merket.
keywords: png, bilde, illustrasjon, skjermbilde, stabel, etasjer, nivåer, fasade, glb, gltf, eksporter 3D, veggtykkelse, sokkelhøyde, åpning, dørhode, 3d, tre d, sjekk, visning, vegger, vegghøyde, dekke, dybde, volum, rotere, modell, plukking, isometrisk, perspektiv
from: fb16b4f7
---

3D-visningen er en kontroll, ikke en ny tegning: den reiser mengdeuttaket for arket opp fra selve arket på skjermen, slik at en manglende vegg, et dobbelt dekke eller en løs telling vises med en gang.

Før du starter: arket trenger en målestokk ([Sett målestokk](topic:set-the-scale)). Høyder og dybder krever ekte fot, så på et ark uten målestokk sier {{ui:3D}} det og blir på det flate arket.

## Åpne 3D-visningen

1. Vis arket du vil kontrollere.
2. Velg {{ui:3D}} på linjen som viser arkets navn og målestokk, eller trykk {{key:3}}.
   Første gang bruker 3D-visningen et øyeblikk på å laste inn. Arket tegnes på bakken, og mengdeuttaket står på det i hver posts farge.
3. For å gå tilbake velger du {{ui:3D}} igjen, {{ui:Tilbake til arket}}, eller trykker {{key:3}}. Å velge et tegneverktøy (Lineær, Areal, Telling og så videre) går også tilbake, siden merkene tegnes på det flate arket.

Den viser arket på skjermen. Bytt ark i arklisten, eller med {{key:PageDown}} og {{key:PageUp}}, så følger 3D-visningen med. For å se flere etasjer samtidig, stable dem (nedenfor).

## Hva du ser

| Merke | I 3D |
|---|---|
| Lineært løp, post med høyde | En vegg med den høyden langs løpet. Buede løp følger kurven. |
| Lineært løp, post uten høyde | En linje på arket. Gi posten en høyde under **Post** for å reise den opp. |
| Areal, post med dybde | Et dekke med den dybden, med utsparingene åpne. |
| Areal, post uten dybde | En tynn 2" plate, slik at den fortsatt vises. |
| Telling | En liten stolpe på hvert talte punkt. |

Høyden er et lineært elements {{ui:Høyde}}-felt, og dybden et arealelements {{ui:Dybde}}-felt, under **Post** (se [Opprett mengdeuttakposter](topic:create-items)). Endrer du dem, oppdateres 3D-visningen med én gang. Teksten under arknavnet sier hva arket holder, for eksempel «Dette arket i 3D: 2 vegger, 1 dekke, 3 tellinger», og hvor mange løp eller arealer som mangler høyde eller dybde. Klikk går gjennom den til visningen.

Tallene endres ikke i 3D: en veggs areal er dens eksakte lengde ganger høyden, og et dekkes volum er dets nettoareal (kontur minus utsparinger, kurver eksakte) ganger dybden. Kurver tegnes bare som korte rette stykker på skjermen.

## Se rundt

| Handling | Hva den gjør |
|---|---|
| Dra, eller dra med midtknappen | Roter rundt mengdeuttaket. |
| {{key:Shift}} + dra, eller dra med høyre knapp | Panorer. |
| Musehjul | Zoom inn og ut ved pekeren. |
| To-finger-sveip på styreplate | Roter ({{key:Shift}} panorerer). En klype zoomer. |
| {{ui:Iso}}, {{ui:Topp}}, {{ui:Foran}}, {{ui:Bak}}, {{ui:Venstre}}, {{ui:Høyre}}, {{ui:Bunn}} | Standardvisninger, innrammet rundt mengdeuttaket. 3D-visningen åpner i {{ui:Iso}}. |
| {{ui:Perspektiv}} | Perspektiv på eller av (parallell når av). |
| {{ui:Zoom utstrekning}} eller {{key:F}} | Hele arket. |
| {{ui:Ark}} | Vis eller skjul tegningen på bakken. |
| Visningskuben, øverst til høyre | Klikk på en flate, kant eller hjørne for å se derfra; dra den for å rotere; dra kompassringen for å vri; husknappen går tilbake til {{ui:Iso}}. |

Hjørnet viser en visningskube, et lite X-, Y-, Z-aksesymbol, eller ingenting. Velg i {{ui:Innstillinger}}, under fanen TakeoffCraft, under **Hjørneindikator** ([TakeoffCraft-innstillinger](topic:settings)). Det flate arket har ingen hjørneindikator.

:::touch
En finger roterer; to fingre klyper for å zoome og flytter for å panorere. Et trykk velger.
:::

## Vegger med tykkelse, sokkel og åpninger

Et lineært element med høyde står som en tynn stripe. For å se den som en ekte vegg, gi posten formen under **I 3D** i innstillingene:

- **Veggtykkelse** (8", 0.2 m): veggen blir et massivt legeme, sentrert på linjen du tegnet, med avskårne hjørner.
- **Sokkelhøyde**: veggen starter så langt over gulvet (en nedforing, en overskapsrekke). Arealposter har den også: et tak i 9'-0".
- **Åpningshode**: et fratrukket segment (en dør, [Trekk fra en del av et løp](topic:measure-linear#deduct-a-part-of-a-run)) holder veggen over den høyden, slik at en dør vises som en dør. Uten den lar et fratrukket segment et hull helt opp.

Disse innstillingene påvirker bare 3D-visningen: mengdene (lengde, veggareal, kostnader) forblir som de var.

## Stable etasjene

1. Åpne PDF-ene for hver etasje.
2. I 3D-visningen velger du {{ui:Nivåer…}} og skriver inn hver etasjes kotehøyde, for eksempel `0` for første etasje og `12'` for neste. Tomt felt utelater et ark.
3. Velg {{ui:Stable}}. Hvert ark med et nivå viser sitt mengdeuttak på sin høyde; arket på skjermen ligger under sin egen etasje, de andre er tegnet opp som omriss. Teksten sier hvor mange etasjer som er stablet.

Arkene stilles opp etter sin plassering på siden, så dette fungerer for plantegninger tegnet likt (samme arkstørrelse og posisjon). Et ark med nivå, men uten målestokk, utelates, og teksten sier det. Velg {{ui:Stable}} igjen for ett ark om gangen. Nivåene lagres sammen med mengdeuttaket.

## Lagre 3D-visningen som et bilde

Velg {{ui:PNG}} på 3D-linjen for et bilde av visningen slik den er på skjermen (`… 3D.png`). {{key:Shift}} + klikk på {{ui:PNG}} gjør det dobbelt så stort (`… 3D@2x.png`), for utskrift.

## Lagre 3D-visningen som en modell

Velg {{ui:GLB}} på 3D-linjen. Du får en `.glb`-fil (glTF, binær) av det visningen viser (etasjen på skjermen, eller alle stablede etasjer), som andre 3D-programmer åpner: ett objekt per merke, navngitt etter posten, i postens farge, i meter med Y opp. Selve arket og omrissene er ikke med.

## Velg et merke fra 3D

Klikk på en vegg, et dekke, en plate eller en stolpe. Merket blir det valgte merket, akkurat som om du hadde klikket på det på arket: det vises under **Valgt merke**, posten blir den gjeldende, og statuslinjen gir lengden og høyden, eller arealet, dybden og kubikkyard. {{key:Shift}} + klikk legger merker til utvalget eller tar dem ut. {{key:Delete}} sletter de valgte merkene, og {{key:Mod+Z}} henter dem tilbake; {{key:Esc}} velger ingen. Tilbake på arket er de samme merkene fortsatt valgt.

:::tip
Tegningen følger temaet: i Modell blir arket på bakken mørkt, likt den flate visningen.
:::
