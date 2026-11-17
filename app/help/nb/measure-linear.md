---
title: Mål lineære strekninger
summary: Ta av vegger, rør, list og andre lengder som strekninger, med rette segmenter, buer og Shift-festing til 45 grader.
keywords: lineær, lengde, strekning, polylinje, vegger, lf, linear feet, bue, kurve, 45 grader, ortho, fest, segmenter, polylength, trekk fra, åpning, dør, mellomrom, skriv, koordinater, avstand, direkte avstand, polar
from: c669deff
---

En lineær post måler lengde. Hver strekning er en kjede av punkter: rette segmenter, og buer der du slår på buemodus. En post kan ha et hvilket som helst antall strekninger på et hvilket som helst antall ark.

Før du begynner: arket må ha en målestokk ([Sett målestokken](topic:set-the-scale)), og du må ha en lineær post ([Opprett poster i mengdeuttaket](topic:create-items)).

På en vektor-PDF fester klikkene dine seg til tegningens egne linjer: ender, midtpunkter og kryss ([Fest til tegningens linjer](topic:snap-to-the-drawing); {{key:F3}} slår det av).

## Tegn en strekning

1. Klikk på den lineære posten under {{ui:Items}}.
2. Velg {{ui:Linear}} i verktøylinjen, eller trykk {{key:L}}.
3. Klikk starten på strekningen.
4. Klikk hvert hjørne langs den.
   Statuslinjen viser «Lengde» (strekningen så langt, til pekeren) og «segment» (segmentet du tegner), i fot og tommer.
5. Avslutt strekningen: dobbeltklikk det siste punktet, trykk {{key:Enter}}, eller høyreklikk.
   Strekningen tegnes i postens farge og blir det valgte merket. Postens lengde i listen {{ui:Items}} og tabellen {{ui:Quantities}} øker.

Verktøyet blir på {{ui:Linear}}, så du kan starte neste strekning med en gang. Trykk {{key:Esc}} for å gå tilbake til {{ui:Select}}.

Mens du tegner:

- {{key:Backspace}} (eller {{key:Delete}}) fjerner siste punkt.
- {{key:Esc}} kaster den ufullstendige strekningen.
- Å dra panorerer arket, og hjulet zoomer, uten å legge til punkter.

:::mac
På en Mac-styreflate er høyreklikk et tofingerklikk (slå på sekundærklikk i Systeminnstillinger, under Styreflate). TakeoffCraft leser bare sekundærknappen, så et Control-klikk kan tas som et vanlig klikk og legge til et punkt. Dobbeltklikk eller {{key:Enter}} avslutter alltid.
:::

:::touch
På en berøringsskjerm: trykk for å plassere punkter, dra med ett finger for å panorere og klyp med to for å zoome. Avslutt med et langt trykk, et dobbelttrykk, eller {{ui:Finish}} i linjen under arket ({{ui:Back}} tar siste punkt tilbake). Se [Feilsøking](topic:troubleshooting#touch-screens).
:::

## Rette linjer i 45-trinn

Hold {{key:Shift}} mens du plasserer et punkt. Segmentet fra det siste punktet festes til nærmeste retning på 0°, 45°, 90° eller 135°, og beholder lengden du dro langs den. Statuslinjen minner deg på det: «Shift fester til 45°».

I buemodus gjelder det der en bue slutter: korden til buen legges i 45-trinn fra der den starter. Punktet du klikker på kurven, festes aldri.

## Buer og buede vegger

1. Mens du tegner en strekning, plasser punktet der kurven starter.
2. Slå på buemodus: velg {{ui:Arc}} i verktøylinjen eller trykk {{key:R}}. Knappen forblir trykt.
3. Klikk et hvilket som helst punkt på kurven, et sted midt på den.
   Statuslinjen legger til «(bue: klikk der den slutter)», og forhåndsvisningen bøyer seg gjennom punktet ditt.
4. Klikk der kurven slutter.
   Buen legges til. Lengden er den nøyaktige buelengden, ikke en rekke korte korder.
5. Klikk et annet punkt på neste kurve og dens slutt for å fortsette å tegne buer, eller trykk {{key:R}} igjen for å gå tilbake til rette segmenter.

{{key:Backspace}} eller {{key:Esc}} slipper først det ventende punktet på kurven; trykk igjen for å fjerne punkter som vanlig.

## Skriv lengder og koordinater

Etter det første punktet kan du skrive hvor neste punkt skal være, i stedet for å klikke. Skriv et siffer, `@` eller `#`: en boks {{ui:Type}} åpnes i statuslinjen med det du skrev. Trykk {{key:Enter}} for å plassere punktet; boksen forblir åpen for neste.

| Skriv | Neste punkt går |
|---|---|
| `12'6"` | 12'-6" fra forrige punkt, mot pekeren (pek veien, og skriv deretter lengden) |
| `12'6"<45` | 12'-6" i 45°, regnet mot klokken fra skjermens høyre (`<90` er opp, `<-90` ned) |
| `@6',-4'` | 6' til høyre og 4' ned fra forrige punkt |
| `6',4'` (eller `#6',4'`) | 6' til høyre og 4' opp fra første punkt i denne strekningen |

Lengder skrives slik som overalt i TakeoffCraft ([Oppføringsformater](topic:entry-formats)): `12'-6 1/2"`, `12.5` (fot), `30"`, `3.2 m`. «Høyre» og «opp» er slik du ser arket, også når PDF-siden er snudd.

{{key:Enter}} på en tom boks avslutter strekningen, som {{key:Enter}} på arket; {{key:Esc}} lukker boksen og lar strekningen fortsette. Skrevne punkter følger de samme reglene som klikk: fradrag, buer og lukking av et areal virker alle. Den samme boksen virker i {{ui:Area}} og {{ui:Cut-out}}; etter en sirkels midtpunkt tar den radius.

## Trekk fra en del av en strekning

En veggstrekning som går forbi en dør eller et butikkvindu, kan tegnes rett gjennom og likevel telle bare veggen: segmentene over åpningen er **fradrag**. De tegnes stiplet og tynt, og telles ikke.

Mens du tegner:

1. Plasser punktet der åpningen starter.
2. Velg {{ui:Deduct}} i verktøylinjen eller trykk {{key:E}}. Knappen forblir trykt, og statuslinjen sier at de neste segmentene er fradrag.
3. Klikk der åpningen slutter. Segmentet tegnes stiplet; «Lengde» i statuslinjen utelater det.
4. Trykk {{key:E}} igjen og fortsett langs veggen.

Etter tegning: velg strekningen. Under **Valgt merke** har hvert segment en **Fradrag**-boks: kryss av for å trekke fra det segmentet, fjern avkryssingen for å telle det igjen. Hver endring er ett angretrinn.

En strekning beholder alltid minst ett segment som teller. Panelet viser da **Fradrag** (lengden som er trukket fra) og **Tegnet** (hele strekningen); **Lengde**, postens mengde, veggarealet og kostnadene bruker lengden uten fradragene. 3D-kontrollvisningen lar et hull stå i veggen, den merkede PDF-en tegner fradragene stiplet, og det eksporterte arket **Merker** lister dem.

Å flytte et hjørne beholder fradragene. Å legge til eller fjerne punkter (ved å tegne strekningen på nytt) starter uten dem.

## Se detaljer for en strekning

Velg {{ui:Select}} ({{key:V}}) og klikk på strekningen. **Valgt merke** til høyre viser:

- posten den hører til (velg en annen lineær post i listen for å flytte strekningen dit),
- arket,
- **Lengde** i fot og tommer og i LF,
- antall **Segmenter**, og **Veggareal** når posten har en høyde,
- lengden til hvert segment, med «(bue)» etter buer, og boksen {{ui:Deduct}}.

På arket er hvert segment av den valgte strekningen merket med lengden sin.

## Rett en strekning

- **Flytt et punkt**: velg strekningen, og dra et av dens firkantede hjørnehåndtak. Hold {{key:Shift}} for å feste det flyttede segmentet til 45-trinn. En bue beholder sin bule.
- **Bøy en bue**: en valgt strekning viser et rundt håndtak midt på hver bue. Dra det: buen går gjennom stedet der du slipper, slik at den bøyer seg mer, mindre, eller den andre veien. Dras den over den rette linjen mellom endene, blir den et rett segment. {{key:Mod+Z}} angrer det («Bøy bue»).
- **Slett en strekning**: velg den og trykk {{key:Delete}}, velg {{ui:Delete}} i verktøylinjens {{ui:More}}-meny, eller {{ui:Delete mark}} i panelet.
- **Angre**: {{key:Mod+Z}}; gjør om med {{key:Mod+Y}}.

Du kan ikke sette inn et punkt midt i en strekning ennå. Slett strekningen og tegn den på nytt.

## Veggareal

Gi den lineære posten en {{ui:Height}} (for eksempel `9'-0"`). Den rapporterer da **Veggareal (A)** = lengde × høyde, i SF (eller m² for en metrisk post), og veggarealet går inn i notatkolonnen i regnearkeksporten. Bruk det i sammensetninger for plater, maling eller isolasjon: se [Sammensetninger og formler](topic:assemblies).
