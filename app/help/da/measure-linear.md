---
title: Mål lineære forløb
summary: Tag vægge, rør, lister og andre længder som forløb, med rette segmenter, buer og 45-graders fangst med Shift.
keywords: lineær, længde, forløb, polylinje, vægge, lf, lineære fod, bue, kurve, 45 grader, ortho, fang, segmenter, polylængde, fradrag, åbning, dør, mellemrum, skriv, skrevet, koordinater, afstand, direkte afstand, polar
from: c669deff
---

En lineær post måler længde. Hvert forløb er en kæde af punkter: rette segmenter og buer, når du tænder bue-tilstand. En post kan have et vilkårligt antal forløb på et vilkårligt antal ark.

Før du starter: arket skal have en målestok ([Angiv målestokken](topic:set-the-scale)), og du skal have en lineær post ([Opret mængdeposter](topic:create-items)).

På en vektor-PDF fanger dine klik til tegningens egne linjer: ender, midtpunkter og krydsninger ([Fang til tegningens linjer](topic:snap-to-the-drawing); {{key:F3}} slår det fra).

## Tegn et forløb

1. Klik på den lineære post under {{ui:Poster}}.
2. Vælg {{ui:Lineær}} i værktøjslinjen, eller tryk {{key:L}}.
3. Klik på forløbets start.
4. Klik på hvert hjørne langs det.
   Statuslinjen viser "Længde" (forløbet indtil nu, til markøren) og "segment" (segmentet du tegner), i fod og tommer.
5. Afslut forløbet: dobbeltklik på det sidste punkt, tryk {{key:Enter}}, eller højreklik.
   Forløbet tegnes i postens farve og bliver den valgte markering. Postens længde i listen {{ui:Poster}} og tabellen {{ui:Mængder}} går op.

Værktøjet bliver på {{ui:Lineær}}, så du kan starte det næste forløb med det samme. Tryk {{key:Esc}} for at gå tilbage til {{ui:Vælg}}.

Mens du tegner:

- {{key:Backspace}} (eller {{key:Delete}}) fjerner det sidste punkt.
- {{key:Esc}} kasserer det ufærdige forløb.
- Træk panorerer arket, og hjulet zoomer, uden at tilføje punkter.

:::mac
På et Mac-touchpad er højreklik et tofingerklik (slå sekundærklik til under Systemindstillinger, Touchpad). TakeoffCraft læser kun sekundærknappen, så et Control-klik kan tages for et almindeligt klik og tilføje et punkt. Dobbeltklik eller {{key:Enter}} afslutter altid.
:::

:::touch
På en touchskærm trykker du for at placere punkter, trækker med én finger for at panorere og kniber med to for at zoome. Afslut med et langt tryk, et dobbelttryk eller {{ui:Afslut}} i linjen under arket ({{ui:Bagside}} tager det sidste punkt tilbage). Se [Fejlfinding](topic:troubleshooting#touch-screens).
:::

## Rette linjer i 45°-trin

Hold {{key:Shift}} nede, mens du placerer et punkt. Segmentet fra det sidste punkt fanger til den nærmeste retning 0°, 45°, 90° eller 135° og beholder den længde, du trak langs den. Statuslinjen minder dig om det: "Shift fanger til 45°".

I bue-tilstand gælder det, hvor en bue slutter: buens korde går i 45°-trin fra det sted, den starter. Punktet, du klikker på kurven, fanges aldrig.

## Buer og buede vægge

1. Mens du tegner et forløb, placér punktet, hvor kurven starter.
2. Tænd bue-tilstand: vælg {{ui:Bue}} i værktøjslinjen, eller tryk {{key:R}}. Knappen forbliver trykket ned.
3. Klik på et vilkårligt punkt på kurven, et sted midt i den.
   Statuslinjen tilføjer "(bue: klik, hvor den slutter)", og forhåndsvisningen bøjer sig gennem dit punkt.
4. Klik, hvor kurven slutter.
   Buen tilføjes. Dens længde er den præcise buelængde, ikke en række korte korder.
5. Klik på et andet punkt på den næste kurve og dens ende for at blive ved med at tegne buer, eller tryk {{key:R}} igen for at gå tilbage til rette segmenter.

{{key:Backspace}} eller {{key:Esc}} fjerner først det afventende punkt på kurven; tryk igen for at fjerne punkter som normalt.

## Skriv længder og koordinater

Efter det første punkt kan du skrive, hvor det næste skal ligge, i stedet for at klikke. Skriv et ciffer, `@` eller `#`: en boks {{ui:Skriv}} åbner i statuslinjen med det, du skrev. Tryk {{key:Enter}} for at placere punktet; boksen forbliver åben til det næste.

| Skriv | Det næste punkt går |
|---|---|
| `12'6"` | 12'-6" fra det sidste punkt, mod markøren (peg i retningen, og skriv derefter længden) |
| `12'6"<45` | 12'-6" i 45°, talt mod uret fra skærmens højre (`<90` er op, `<-90` er ned) |
| `@6',-4'` | 6' til højre og 4' ned fra det sidste punkt |
| `6',4'` (eller `#6',4'`) | 6' til højre og 4' op fra forløbets første punkt |

Længder skrives, som de skrives overalt i TakeoffCraft ([Indtastningsformater](topic:entry-formats)): `12'-6 1/2"`, `12.5` (fod), `30"`, `3.2 m`. "Højre" og "op" er, som du ser arket, også når PDF-siden er drejet.

{{key:Enter}} i en tom boks afslutter forløbet, ligesom {{key:Enter}} på arket; {{key:Esc}} lukker boksen og lader forløbet fortsætte. Skrevne punkter følger de samme regler som klik: fradrag, buer og lukning af et areal virker alle. Den samme boks virker i {{ui:Areal}} og {{ui:Udsparing}}; efter en cirkels centrum tager den radius.

## Fradrag for en del af et forløb

En vægstrækning, der passerer en dør eller en butiksfacade, kan tegnes lige igennem og stadig kun tælle væggen: segmenterne over åbningen er **fradrag**. De tegnes stiplet og tynde, og tælles ikke.

Mens du tegner:

1. Placér punktet, hvor åbningen starter.
2. Vælg {{ui:Fradrag}} i værktøjslinjen, eller tryk {{key:E}}. Knappen forbliver trykket ned, og statuslinjen siger, at de næste segmenter er fradrag.
3. Klik, hvor åbningen slutter. Segmentet tegnes stiplet; "Længde" i statuslinjen udelader det.
4. Tryk {{key:E}} igen, og fortsæt langs væggen.

Efter tegning: vælg forløbet. Under **Valgt markering** har hvert segment en boks {{ui:Fradrag}}: sæt kryds for at trække det segment fra, fjern krydset for at tælle det igen. Hver ændring er ét fortrydelsestrin.

Et forløb beholder altid mindst ét segment, der tæller. Panelet viser så **Fradrag** (den fratrukne længde) og **Tegnet** (hele forløbet); **Længde**, postens mængde, vægarealet og priserne bruger længden uden fradrag. 3D-kontrolvisningen efterlader et hul i væggen, den markerede PDF tegner fradragene stiplet, og det eksporterede ark **Mærker** lister dem.

At flytte et hjørne beholder fradragene. At tilføje eller fjerne punkter (ved at tegne forløbet igen) starter uden dem.

## Se detaljer for et forløb

Vælg {{ui:Vælg}} ({{key:V}}) og klik på forløbet. **Valgt markering** til højre viser:

- den post, det hører til (vælg en anden lineær post i listen for at flytte forløbet dertil),
- arket,
- **Længde** i fod og tommer og i LF,
- antallet af **Segmenter**, og **Vægareal**, når posten har en højde,
- hvert segments længde, med "(bue)" efter buer, og dets boks {{ui:Fradrag}}.

På arket er hvert segment i det valgte forløb mærket med sin længde.

## Ret et forløb

- **Flyt et punkt**: vælg forløbet, og træk et af dets kvadratiske hjørnegreb. Hold {{key:Shift}} nede for at fange det flyttede segment til 45°-trin. En bue beholder sin bulge.
- **Bøj en bue**: et valgt forløb viser et rundt greb midt på hver bue. Træk det: buen går gennem det sted, hvor du slipper, så den bøjer mere, mindre eller den anden vej. Trækkes den ind på den rette linje mellem dens ender, bliver den et rent segment. {{key:Mod+Z}} fortryder det ("Bøj bue").
- **Slet et forløb**: vælg det, og tryk {{key:Delete}}, vælg {{ui:Slet}} i værktøjslinjens menu {{ui:Mere}}, eller vælg {{ui:Slet markering}} i panelet.
- **Fortryd**: {{key:Mod+Z}}; gentag med {{key:Mod+Y}}.

Du kan endnu ikke indsætte et punkt midt i et forløb. Slet forløbet og tegn det igen.

## Vægareal

Giv den lineære post en {{ui:Højde}} (fx `9'-0"`). Den rapporterer så **Vægareal (A)** = længde × højde, i SF (eller m² for en metrisk post), og vægarealet kommer med i noterne i regnearkseksporten. Brug det i kalkulationsenheder til plader, maling eller isolering: se [Kalkulationsenheder og formler](topic:assemblies).
