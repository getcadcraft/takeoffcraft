---
title: Innstillinger for TakeoffCraft
summary: Vis tommer til 1/16, 1/8 eller 1/4, start nye poster med en svinnprosent, velg hvor skyveknappen for Autotelling starter, fang til tegningens linjer eller til 45° uten å holde Shift, angi hvor bred en dør Romfylling lukker er, og velg hjørneindikatoren for 3D-kontrollvisningen.
keywords: innstillinger, preferanser, alternativer, presisjon, brøker, tommer, avrunding, svinn, standard svinn, autotelling, terskel, treff, skyveknapp, fang, 45, vinkel, shift, viewcube, aksikon, hjørneindikator, 3d
from: bca3f0ed
---

Åpne {{ui:Innstillinger}} med tannhjulet i programlinjen eller med {{key:Mod+,}}. Den første fanen, {{ui:TakeoffCraft}}, inneholder innstillingene som hører til denne appen; {{ui:Generelt}} inneholder dem alle CadCraft-appene deler (tema, paneler, verktøylinje). TakeoffCraft-innstillingene finnes bare i appen: du endrer dem her, og denne nettleseren husker dem. {{ui:Tilbakestill TakeoffCraft-innstillinger}} setter dem tilbake til startverdiene.

## Fot og tommer

Vis lengder til nærmeste **1/16"** (startverdien), **1/8"** eller **1/4"**. Dette endrer hvordan lengder leses på arket, i panelene, i mengdene og i statuslinjen.

Bare visningen avrundes. Mengder, kostnader og eksporter beregnes ut fra de nøyaktige lengdene, og eksportene viser alltid 1/16".

## Svinn å starte med

Svinnprosenten hver ny post starter med: 0 % (startverdien), 2 %, 3 %, 5 %, 7.5 %, 10 %, 15 % eller 20 %. Du kan fortsatt skrive inn en annen svinn for hver post, i postredigeringen eller rett i mengdetabellen. Poster du allerede har, beholder sin egen svinn.

## Autotelling: hvor treffskyveknappen starter

Hvor skyveknappen for {{ui:Treff}} står når et søk med [Autotelling](topic:auto-count) er ferdig, fra 50 % til 95 %; 75 % er startverdien. Lavere gir flere lignende treff for deg å forkaste; høyere gir færre. Du kan fortsatt flytte skyveknappen under hver gjennomgang.

## Fang til tegningens egne linjer

På fra start. Mens du måler eller kalibrerer, hopper et punkt nær en linje i PDF-en til enden, midtpunktet, et kryss eller nærmeste punkt på den. {{key:F3}} og {{ui:Fang}} i statuslinjen slår det også av og på. Mer: [Fang til tegningens linjer](topic:snap-to-the-drawing).

## Romfylling: hvor bred en åpning den lukker

{{ui:Romfylling lukker åpninger opptil}} angir hvor bred en døråpning eller et gap verktøyet {{ui:Rom}} behandler som lukket: 3'-0" til 8'-0", 4'-0" i startverdi. Bredere enn din bredeste dør lar et rom gå inn i det neste; smalere enn en dør lar rommet stå åpent. Se [Fyll et rom med ett klikk](topic:measure-areas#fill-a-room-with-one-click).

## Fang til 45° uten å holde Shift

Av fra start. Når den er på, går linjer, konturer, utsparinger og dradde hjørner i 0°, 45°, 90° eller 135° fra forrige punkt uten at du holder {{key:Shift}}; hold {{key:Shift}} for å klikke i en hvilken som helst vinkel. Statuslinjen sier da «Fanger til 45°; Shift frigjør vinkelen». Punktet du klikker på en buekurve, og sirkler, fanges aldri; enden av en bue fanges.

## Størrelse på tellemarkøren

Hvor store telleprikkene er: {{ui:Ekstra liten}}, {{ui:Liten}}, {{ui:Middels}} (startverdien: størrelsen prikkene alltid hadde) eller {{ui:Stor}}. Størrelsen holdes på skjermen ved alle zoomnivåer, og PDF-en med markeringene tegner hver prikk i samme størrelse på papiret, uansett arkstørrelse, slik at PDF-en i 100 % ser ut som skjermen. Mer: [Tell for hånd](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Hjørneindikator

Bare for [3D-kontrollvisningen](topic:check-in-3d): {{ui:ViewCube}} (startverdien: en kube øverst til høyre som du klikker på, drar og snur), {{ui:Aksikon}} (en liten X-, Y-, Z-markør nederst til høyre) eller {{ui:Ingen}}. Den endres med en gang og lagres i denne nettleseren. Det flate arket viser aldri en.

## Stiverktøy: største gap det kobler sammen

{{ui:Stiverktøy: største gap å koble sammen}} er hvor langt fra hverandre to linjeender kan være og fortsatt telle som én sti, i PDF-punkter (0.05 til 60; 1.5 i startverdi). Linjene i en tegning stopper ofte en hårsbredd unna hverandre. Større kobler mer sammen; mindre holder linjene adskilt. {{key:[}} og {{key:]}} endrer den mens du velger, og feltet her følger med. Se [Velg linjene](topic:pick-the-lines).
