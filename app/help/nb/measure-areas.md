---
title: Mål arealer med utsparinger
summary: Tegn opp gulv, himlinger og dekker, kutt hull ut av dem, legg til buede kanter, sirkler og runde utsparinger, og les areal og omkrets.
keywords: romfylling, flomfylling, malingsbøtte, klikk inne i et rom, auto-areal, trekk fra, trekk-fra, søyle, sjakt, trekk fra flere poster, areal, polygon, omriss, kvadratfot, sf, utsparing, hull, fradrag, sirkel, rund, bue, omkrets, gulv, himling, dekke
from: 34648db7
---

En arealpost måler innesluttet areal. Hvert omriss kan ha hull kuttet ut av seg (en sjakt, en søyle, en plantekasse), og kantene kan være rette eller buede.

Før du begynner: arket må ha en målestokk ([Sett målestokken](topic:set-the-scale)), og du må ha en post ([Opprett poster i mengdeuttaket](topic:create-items)).

## Tegn opp et areal

1. Klikk på arealposten under {{ui:Items}}.
2. Velg {{ui:Area}} i verktøylinjen, eller trykk {{key:A}}.
3. Klikk hvert hjørne av rommet eller dekket i tur og orden. Hold {{key:Shift}} for kanter på 0°, 45° og 90°.
   Fra det tredje punktet fylles omrisset, og statuslinjen viser «Areal» og «omkrets». En liten ring vises rundt det første punktet.
4. Lukk omrisset: klikk det første punktet (inne i ringen), trykk {{key:Enter}}, dobbeltklikk eller høyreklikk.
   Arealet fylles lett i postens farge, merkes med kvadratfot, og blir det valgte merket.

{{key:Backspace}} fjerner siste hjørne; {{key:Esc}} kaster omrisset.

Et omriss som krysser seg selv, avvises: «Omrisset krysser seg selv, så arealet ville blitt feil. Tegn det på nytt uten å krysse.» Tegn en figur som åtte som to arealer i stedet.

## Buede kanter

Slå på buemodus ({{ui:Arc}} eller {{key:R}}) mens du tegner omrisset. Etter et hjørne klikker du et punkt langs kurven, og deretter der kurven slutter. For å lukke omrisset med en kurve, gjør det siste klikket på det første punktet. Areal og omkrets bruker den nøyaktige kurven. Trykk {{key:R}} igjen for rette kanter. For å endre en kurve etterpå velger du arealet og drar det runde håndtaket midt på buen. Se [Mål lineære strekninger](topic:measure-linear#arcs-and-curved-walls).

## En sirkel

1. Med en arealpost velger du {{ui:Circle}} eller trykker {{key:O}}.
2. Klikk midtpunktet.
3. Klikk et hvilket som helst punkt på kanten.
   Mens du beveger musen, viser statuslinjen radius og areal. Sirkelen legges til som et arealmerke med nøyaktig areal og omkrets.

## Fyll et rom med ett klikk

Når rommene er tegnet som lukkede vegger, tar {{ui:Room}} ({{key:B}}) et gulv med ett klikk:

1. Velg en arealpost (for eksempel en gulvbelegning) og gi arket målestokken.
2. Velg {{ui:Room}} i gruppen {{ui:Takeoff}}, eller trykk {{key:B}}.
3. Klikk inne i et rom, på det åpne gulvet (ikke på en linje eller en etikett).

TakeoffCraft leser arkets linjer, finner rommet rundt klikket og tegner omrisset langs veggenes innside, som et areal for gjeldende post. Døråpninger opptil **4'-0"** behandles som lukkede, så omrisset går rett over døråpningen. **Innstillinger › TakeoffCraft › Romfylling lukker åpninger opptil** endrer denne bredden (3'-0" til 8'-0"). Romnavn, møbler og inventar inne i rommet lager ikke hull.

Den avviser og sier hvorfor når:

- klikket er på en linje («Det er på en linje»);
- rommet ikke er lukket: en åpning bredere enn innstillingen lar fyllingen løpe ut til arkets kant. Øk innstillingen, eller tegn omrisset for rommet for hånd med {{ui:Area}};
- rommet er lite (et symbol, ikke et rom).

Når en dør er bredere enn innstillingen, løper fyllingen inn i neste rom og tegner omriss for begge sammen: angre ({{key:Mod+Z}}), øk innstillingen og klikk igjen. Kontroller omrisset som et hvilket som helst areal: dra hjørnene for å rette det. Et skannet ark fungerer likt, men linjene må være mørke nok; lysgrå streker stopper kanskje ikke fyllingen.

## Kutt et hull ut av et areal

1. Velg {{ui:Select}} ({{key:V}}) og klikk på arealet. Det vises med firkantede håndtak i hjørnene.
2. Velg {{ui:Cut-out}} i verktøylinjen (eller trykk {{key:X}}), eller {{ui:Add a cut-out}} under **Valgt merke**.
3. Klikk hjørnene i hullet, inne i arealet. Buemodus fungerer her også.
4. Lukk det som et areal: klikk det første punktet, trykk {{key:Enter}}, dobbeltklikk eller høyreklikk.
   Hullet står uten fylling, og statuslinjen sier «Utsparing lagt til. Tegn en til, eller trykk Esc.»
5. Tegn flere hull i samme areal, eller trykk {{key:Esc}}.

For et rundt hull velger du {{ui:Add a round cut-out}} under **Valgt merke**, klikker midtpunktet og deretter et punkt på kanten.

En utsparing må ligge helt inne i arealet og må ikke overlappe en annen utsparing. Ellers avviser TakeoffCraft den: «En utsparing må ligge helt inne i arealet.» eller «Utsparinger kan ikke overlappe hverandre.»

For å fjerne det siste hullet igjen velger du {{ui:Remove last cut-out}}.

## Trekk fra: søyler, sjakter og åpninger trukket fra flere poster

En utsparing hører til ett arealmerke. Et **trekk fra** tegnes én gang og trekkes fra hvert areal det overlapper, for postene du velger: tegn søylene én gang, så trekkes de fra gulvbelegget, himlingen og dekket samtidig.

1. Lag en arealpost for dem, for eksempel «Søyler».
2. I postinnstillingene krysser du av for **Trekk fra: merkene tar bort arealet sitt fra andre poster**. En liste over dine andre arealposter vises, alle avkrysset: fjern avkryssingen for dem trekk fra ikke skal påvirke (maling på veggene, for eksempel).
3. Ta av søylene med {{ui:Area}} eller {{ui:Circle}}, som vanlig. Hver tegnes stiplet.

Hvert arealmerke i en avkrysset post på samme ark mister den delen et trekk fra dekker: hele trekket når det ligger inne i arealet, bare den overlappende delen når det krysser kanten, og ingenting inne i en utsparing. Panelet for det valgte arealet viser **Trekk fra** og arealet som er igjen. Postens mengde, formlene i sammensetningen, kostnadene, 3D-kontrollvisningen og eksporten bruker arealet som er igjen; notatene i kalkylen sier hvor mye trekkene tok bort. Trekk fra-posten selv teller sitt eget areal (la kostnadene stå på null hvis du ikke priser den).

Et trekk fra må være **konvekst**: et rektangel, en sirkel eller et omriss uten innvendig hjørne. TakeoffCraft avviser å tegne et som ikke er det; tegn en L-formet sjakt som to trekk fra. Trekk fra kan ikke ha utsparinger, og to trekk fra som overlapper hverandre, telles begge.

Omkretsen (`P`) endres ikke: trekk fra tar bare bort areal.

## Les arealet

Velg arealet. **Valgt merke** viser:

| Linje | Betydning |
|---|---|
| Areal | Nettoarealet: omriss minus utsparinger. Dette er det postene teller. |
| Omriss | Bruttoarealet innenfor omrisset (vises når det finnes utsparinger). |
| Utsparinger | Hvor mange hull, og det samlede arealet deres. |
| Omkrets | Lengden på omrisskanten, **pluss** kantene til hver utsparing («med utsparinger»). |

Omkretsen inkluderer kantene til utsparingene med vilje, for ting som støpeform eller sokkel som også går rundt et hull. Hvis du bare trenger den ytre kanten, hold hull utenfor den posten, eller mål den ytre kanten som en lineær strekning.

{{ui:Unit}} for postene bestemmer hvordan totalen rapporteres: SF, SY eller m². Panelet **Valgt merke** og statuslinjen viser alltid kvadratfot.

## Rett et areal

- **Flytt et hjørne**: velg arealet og dra et hjørnehåndtak (hull har også håndtak). Hvis den nye formen ville krysse seg selv eller presse et hull utenfor, settes hjørnet tilbake: «Punktet ble satt tilbake.»
- **Flytt til en annen post**: velg en annen arealpost i listen **Post** under **Valgt merke**.
- **Slett**: {{key:Delete}}, {{ui:Delete}} i verktøylinjens {{ui:More}}-meny, eller {{ui:Delete mark}}.

## Dybde for volum

Gi arealposten en {{ui:Depth}} (for eksempel `0'-4"` for et dekke) og bruk `A * H / 27` i en komponent i en sammensetning for å få kubikkyard. Se [Sammensetninger og formler](topic:assemblies).
