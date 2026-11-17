---
title: Menuer, taster og mus
summary: Vælg en menustil, der passer til den måde, du allerede arbejder på, giv enhver kommando din egen tast, flyt kommandoer mellem menuer, og bestem hvad hjulet og musens knapper gør.
keywords: menustil, menuer, menulinje, bånd, båndfaner, værktøjslinje, tastaturgenveje, genveje, taster, tilpas, omlæg, mus, hjul, vend, zoomretning, midterknap, højreknap, panorér, eksport, import, skift, bekendt, udtrækspult, poster
from: f01f0d6d
---

TakeoffCraft's kommandoer er de samme, uanset hvordan du når dem. En **menustil** bestemmer kun, hvor de sidder på skærmen, hvad de hedder dér, og hvilke taster der kører dem. Vælg en i {{ui:Indstillinger}} ({{key:Mod+,}}) › {{ui:TakeoffCraft}} › {{ui:Menuer, taster og mus}}; ændringen træder i kraft med det samme, og denne browser husker den.

## De tre stilarter

| Stil | Det får du |
|---|---|
| {{ui:TakeoffCraft}} | TakeoffCraft's egen værktøjslinje: Fil, Eksportér, Målestok, Mængdeudtræk, Rediger og Visning, med enkeltbogstavstasterne til værktøjerne. Udgangspunktet. |
| {{ui:Udtrækspult}} | En menulinje ({{ui:Fil}}, {{ui:Rediger}}, {{ui:Visning}}, {{ui:Målestok}}, {{ui:Mængdeudtræk}}, {{ui:Poster}}, {{ui:Markering}}, {{ui:Eksportér}}) over én række med udtrækværktøjer, på samme måde som skærmbaserede udtrækprogrammer ordner deres. Poster kaldes betingelser på rækken. Samme taster, plus {{key:N}} for en ny post. Målestoksforvalgene flyttes til arkets linje, ved siden af arkets målestok. |
| {{ui:Udtræksbånd}} | Båndfaner, navngivet efter arbejdet: {{ui:Mængdeudtræk}} (mål, form, målestok, fra tegningen, betingelser), {{ui:Rediger}}, {{ui:Visning}}, {{ui:Markering}} og {{ui:Kalkulation}} (regnearket, markerede PDF'er, tilbuddet), med en {{ui:Fil}}-menu og en hurtig række til åbn, gem, fortryd og gentag. De værktøjer, du bruger hele dagen, er store, og deres naboer små og stablet. Samme taster; målestoksforvalgene flyttes til arkets linje. |

Alle tre stilarter beholder TakeoffCraft's taster: {{key:V}} vælg, {{key:L}} lineær, {{key:A}} areal, {{key:O}} cirkel, {{key:B}} rum, {{key:P}} sti (vælg PDF'ens linjer), {{key:X}} udsparing, {{key:C}} tæl, {{key:S}} auto-tælling, {{key:K}} kalibrér, {{key:D}} kontrollér, {{key:R}} bue-tilstand, {{key:E}} fradragstilstand, {{key:F}} og {{key:W}} for at tilpasse, {{key:3}} 3D-kontrolvisningen, {{key:F3}} fangst, og {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}.

Arkets linjes værktøjer (noter, skyer, fremhævninger, Sammenlign, 3D) venter, til en PDF er åben; hvis de vælges før da, siger statuslinjen det.

:::tip
En tast, der hører til TakeoffCraft's egen opsætning, men som din stil har givet en anden kommando, gør ingenting, og statuslinjen siger, hvor dens kommando er blevet af ("I Mine taster er Tæl Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} og piletasterne beholder altid deres betydning. Mens du tegner et forløb eller en kontur, indsætter eller gennemgår en auto-tælling, forbliver bogstaverne og tallene i en skrevet længde hos tegningen.
:::

## Gør den til din egen

1. Vælg den stil, der er tættest på det, du vil have, og klik på {{ui:Tilpas…}}.
2. Under {{ui:Taster og menuer}} finder du en kommando (søgefeltet hjælper). Klik på {{ui:Tilføj en tast}} og tryk tasten, eller to taster efter hinanden for en tobogstavstast. Klik på en tast for at fjerne den.
3. Med menulinjen flytter {{ui:Hvor den sidder}} kommandoen til en anden menu, eller til {{ui:Kun taster}}.
4. Under {{ui:Mus}} sætter du hjulet og de knapper, der panorerer arket.
5. Giv den et navn, og klik på {{ui:Gem}}.

At gemme en indbygget stil laver din egen kopi ("Min Udtrækspult"); den indbyggede ændres aldrig. En tast givet til to kommandoer vises med rødt og skal rettes, før du kan gemme.

## Mus

- **Musehjul**: {{ui:Rul op zoomer ind}} (start) eller {{ui:Rul op zoomer ud}}, og hvor hurtigt. Et touchpads knib zoomer altid i den retning, dine fingre bevæger sig.
- **Panorér arket med**: midterknappen, højreknappen, eller begge. Et venstretræk på tomt papir og {{key:Space}} med et træk panorerer altid; et højreklik uden træk afslutter altid et forløb eller en kontur.
- **Træk i 3D-visningerne**: {{ui:Hver visnings egne}} beholder 3D-kontrolvisningens knapper (venstre og midter kredser, højre panorerer). Eller sæt midter- og højreknap til at kredse, panorere, zoome eller ingenting; {{key:Shift}} med knappen bytter kredsning og panorering. Venstreknappen kredser og vælger altid.

## Tag den med dig

{{ui:Eksportér}} gemmer den brugte stil som en lille `.ccinput.json`-fil; {{ui:Importér…}} tilføjer en, fra en anden computer eller fra en kollega. En importeret fil kan kun pege på TakeoffCraft's egne kommandoer: alt andet i den udelades og tælles i statuslinjen. {{ui:Slet denne stil}} fjerner en af dine egne.

:::note
Disse indstillinger bliver i denne browser. {{ui:Brug denne stil i alle apps}} under stilkortene får alle apps til at åbne i deres matchende stil (egen værktøjslinje, en menulinje eller et bånd), med de ændringer, du har lavet i hver app. TakeoffCraft har ingen stil med en kommandolinje: når en sådan vælges til alle apps, beholder TakeoffCraft sin egen værktøjslinje.
:::

{{ui:Udtræksbånd}} er også båndet i layoutet {{ui:Bånd og projektbrowser}} ({{ui:Indstillinger}} › {{ui:Globalt}} › {{ui:Layout}}): se [TakeoffCraft-skærmen](topic:workspace).

Relateret: [Tastatur og mus](topic:keyboard) · [TakeoffCraft-indstillinger](topic:settings) · [Fra andet mængdeudtrækssoftware](topic:coming-from)
