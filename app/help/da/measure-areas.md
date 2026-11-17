---
title: Mål arealer med udsparinger
summary: Afgræns gulve, lofter og dæk, udskær huller i dem, tilføj buede kanter, cirkler og runde udsparinger, og aflæs areal og omkreds.
keywords: rumfyldning, flood fill, paint bucket, klik inde i et rum, automatisk areal, back-out, backout, søjle, skakt, fradrag fra flere poster, areal, polygon, kontur, sf, kvadratfod, udsparing, hul, fradrag, cirkel, rund, bue, omkreds, gulv, loft, dæk
from: 34648db7
---

En arealpost måler et lukket areal. Hver kontur kan have huller udskåret i sig (en skakt, en søjle, et plantekar), og dens kanter kan være rette eller buede.

Før du starter: arket skal have en målestok ([Angiv målestokken](topic:set-the-scale)), og du skal have en arealpost ([Opret mængdeposter](topic:create-items)).

## Afgræns et areal

1. Klik på arealposten under {{ui:Poster}}.
2. Vælg {{ui:Areal}} i værktøjslinjen, eller tryk {{key:A}}.
3. Klik på hvert hjørne af rummet eller dækket i rækkefølge. Hold {{key:Shift}} for kanter på 0°, 45° og 90°.
   Fra tredje punkt og frem udfyldes konturen, og statuslinjen viser "Areal" og "omkreds". En lille ring vises rundt om første punkt.
4. Luk konturen: klik på første punkt (inde i dens ring), tryk {{key:Enter}}, dobbeltklik eller højreklik.
   Arealet udfyldes let i postens farve, mærkes med sit antal kvadratfod og bliver den valgte markering.

{{key:Backspace}} fjerner det sidste hjørne; {{key:Esc}} kasserer konturen.

En kontur, der krydser sig selv, afvises: "Konturen krydser sig selv, så dens areal ville være forkert. Tegn den igen uden at krydse." Tegn en figur af typen ottetal som to arealer i stedet.

## Buede kanter

Mens du afgrænser, tænd bue-tilstand ({{ui:Bue}} eller {{key:R}}). Efter et hjørne klikker du på et punkt langs kurven og derefter, hvor kurven slutter. For at lukke konturen med en kurve, laver du det sidste klik på første punkt. Areal og omkreds bruger den præcise kurve. Tryk {{key:R}} igen for rette kanter. For at ændre en kurve bagefter, vælg arealet og træk det runde greb midt på buen. Se [Mål lineære forløb](topic:measure-linear#arcs-and-curved-walls).

## En cirkel

1. Med en arealpost vælger du {{ui:Cirkel}} eller trykker {{key:O}}.
2. Klik på centrum.
3. Klik på et vilkårligt punkt på kanten.
   Mens du flytter musen, viser statuslinjen radius og areal. Cirklen tilføjes som et arealmærke med præcist areal og omkreds.

## Fyld et rum med ét klik

Når rummene er tegnet som lukkede vægge, tager {{ui:Rum}} ({{key:B}}) et gulv med ét klik:

1. Vælg en arealpost (fx en gulvbelægning), og giv arket dets målestok.
2. Vælg {{ui:Rum}} i gruppen {{ui:Mængdeudtræk}}, eller tryk {{key:B}}.
3. Klik inde i et rum, på det åbne gulv (ikke på en linje eller en etiket).

TakeoffCraft læser arkets linjer, finder det område rundt om klikket og afgrænser det langs væggenes indvendige flader som et areal for den aktuelle post. Døråbninger op til **4'-0"** behandles som lukkede, så konturen går lige hen over døråbningen; **Indstillinger › TakeoffCraft › Rumfyldning lukker åbninger op til** ændrer den bredde (3'-0" til 8'-0"). Rumnavne, møbler og inventar inde i rummet laver ingen huller.

Den afvises og forklarer hvorfor, når:

- klikket er på en linje ("Det er på en linje");
- området ikke er lukket: en åbning, der er bredere end indstillingen, lader fyldningen løbe ud til arkets kant. Hæv indstillingen, eller afgræns rummet selv med {{ui:Areal}};
- området er lille (et symbol, ikke et rum).

Når en dør er bredere end indstillingen, løber fyldningen ind i det næste rum og afgrænser begge sammen: fortryd ({{key:Mod+Z}}), hæv indstillingen, og klik igen. Kontrollér konturen som ethvert areal: træk dens hjørner for at rette den. Et scannet ark virker på samme måde, men dets linjer skal være mørke nok; meget lys grålinjetegning kan muligvis ikke stoppe fyldningen.

## Udskær et hul i et areal

1. Vælg {{ui:Vælg}} ({{key:V}}) og klik på arealet. Det viser kvadratiske greb i sine hjørner.
2. Vælg {{ui:Udsparing}} i værktøjslinjen (eller tryk {{key:X}}), eller {{ui:Tilføj en udsparing}} under **Valgt markering**.
3. Klik på hullets hjørner, inde i arealet. Bue-tilstand virker også her.
4. Luk det som et areal: klik på dets første punkt, tryk {{key:Enter}}, dobbeltklik eller højreklik.
   Hullet står uudfyldt, og statuslinjen siger "Udsparing tilføjet. Tegn en mere, eller tryk Esc."
5. Tegn flere huller i det samme areal, eller tryk {{key:Esc}}.

For et rundt hul vælger du {{ui:Tilføj en rund udsparing}} under **Valgt markering**, klikker på dets centrum og derefter på et punkt på kanten.

En udsparing skal ligge helt inde i arealet og må ikke overlappe en anden udsparing. Ellers afviser TakeoffCraft den: "En udsparing skal ligge helt inde i arealet." eller "Udsparinger kan ikke overlappe hinanden."

Vil du fjerne det sidste hul igen, vælger du {{ui:Fjern sidste udsparing}}.

## Fradragsarealer: søjler, skakter og åbninger taget fra flere poster

En udsparing hører til ét arealmærke. Et **fradragsareal** tegnes én gang og trækkes fra hvert areal, det overlapper, for de poster du vælger: tegn søjlerne én gang, og de trækkes fra gulvbelægningen, loftet og dækket på én gang.

1. Lav en arealpost til dem, fx "Søjler".
2. I postens indstillinger sætter du kryds i **Fradragsareal: dens mærker tager deres areal fra andre poster**. Der vises en liste over dine andre arealposter, alle med kryds: fjern krydset ved dem, fradragsarealerne ikke skal røre (fx maling på væggene).
3. Mål søjlerne op med {{ui:Areal}} eller {{ui:Cirkel}}, som sædvanligt. Hver tegnes stiplet.

Hvert arealmærke på samme ark for en post med kryds mister den del, som et fradragsareal dækker: hele fradragsarealet, når det ligger inde i det, kun det overlappende stykke, når det krydser kanten, og intet inde i en udsparing. Panelet for det valgte areal viser **Fradragsarealer** og det resterende areal. Postens mængde, formlerne i dens kalkulationsenheder, priserne, 3D-kontrolvisningen og eksporten bruger det resterende areal; noterne i kalkulationen siger, hvor meget fradragsarealerne tog. Selve fradragsarealpostens eget areal tælles med (lad dens priser være nul, hvis du ikke priser den).

Et fradragsareal skal være **konvekst**: et rektangel, en cirkel eller en kontur uden indadgående hjørne. TakeoffCraft nægter at tegne et, der ikke er det; tegn en L-formet skakt som to fradragsarealer. Fradragsarealer kan ikke have udsparinger, og to fradragsarealer, der overlapper hinanden, tæller begge.

Omkredsen (`P`) ændrer sig ikke: fradragsarealer tager kun areal fra.

## Læs arealet

Vælg arealet. **Valgt markering** viser:

| Linje | Betydning |
|---|---|
| Areal | Nettoarealet: kontur minus udsparinger. Det er det, posten tæller. |
| Kontur | Bruttoarealet inde i konturen (vises, når der er udsparinger). |
| Udsparinger | Hvor mange huller der er, og deres samlede areal. |
| Omkreds | Konturens kantlængde, **plus** kanterne af hver udsparing ("med udsparinger"). |

Omkredsen medregner udsparingernes kanter med vilje, fx til kantforme eller fundament, der også løber rundt om et hul. Har du kun brug for den ydre kant, så hold huller ude af den post, eller mål den ydre kant som et lineært forløb.

Postens {{ui:Enhed}} bestemmer, hvordan totalen angives: SF, SY eller m². Panelet **Valgt markering** og statuslinjen viser altid kvadratfod.

## Ret et areal

- **Flyt et hjørne**: vælg arealet, og træk et hjørnegreb (huller har også greb). Hvis den nye form ville krydse sig selv eller skubbe et hul ud, lægges hjørnet tilbage: "Punktet blev lagt tilbage."
- **Flyt til en anden post**: vælg en anden arealpost i listen **Post** under **Valgt markering**.
- **Slet**: {{key:Delete}}, {{ui:Slet}} i værktøjslinjens menu {{ui:Mere}}, eller {{ui:Slet markering}}.

## Dybde for volumener

Giv arealposten en {{ui:Dybde}} (fx `0'-4"` for et dæk), og brug `A * H / 27` i en komponent i en kalkulationsenhed for at få kubikyard. Se [Kalkulationsenheder og formler](topic:assemblies).
