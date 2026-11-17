---
title: Tell fra en tegning
summary: Tell blokker, objekter på et layer, eller tekst direkte fra en DWG eller DXF: eksakt, med nestede blokker, dynamiske blokkvarianter og blokkmatriser håndtert, i ett Angre-trinn.
keywords: tell fra tegning, CAD-telling, blokktelling, tell blokker, sett inn, blokknavn, nestede blokker, dynamisk blokk, variant, minsert, matrise, layer, objekttype, sirkler, tekst, attributt, merkelapp, skjulte layere, eksakt telling, hvordan, dører, armaturer
from: 5060e24e
---

{{ui:CAD-telling}} på arkelinjen (kommandoen **Tell fra tegningen** i de andre menystilene) teller det en DWG eller DXF sier finnes. Der {{ui:Autotelling}} leter etter et bilde av et symbol og kan overse ett eller finne et falskt, teller dette objektene: hver innsetting av en blokk ved navn `DOOR-36` er én dør. Åpne tegningen først: [Åpne en DWG- eller DXF-tegning](topic:open-a-drawing).

## Tell en blokk

1. Åpne et ark av tegningen. {{ui:CAD-telling}} står på arkelinjen.
2. Velg den. Vinduet lister blokkene med hvor mange av hver det er. Søk etter navn, og velg så én.
3. Sjekk linjen under listen: «22 funnet, 22 å legge til.»
4. Under {{ui:Legg til i}} velger du en tellepost, eller lar {{ui:En ny tellepost}} stå og gir den et navn.
5. Velg legg-til-knappen, som sier antallet: {{ui:Legg til 22 markeringer}}. Merkene vises på blokkens innsettingspunkter, og postens mengde er tellingen.

Det er ett Angre-trinn: {{key:Mod+Z}} fjerner merkene (og en ny post) samtidig. Mengdeoverslaget, regnearket og den markerte PDF-en behandler posten som hvilken som helst annen tellepost.

### Hva som telles

- **Hver innsetting av blokknavnet**, uansett skala og vinkel, i modellrom eller papirrom. Blokknavn bryr seg ikke om store og små bokstaver.
- **Blokkmatriser** (MINSERT): hver kopi i matrisen er én.
- **Nestede blokker.** En blokk plassert inni en annen blokk telles på alle nivåer. Listen sier «6 inni andre blokker»; fjern haken for {{ui:Tell blokker inni andre blokker også}} for å telle bare innsettinger plassert direkte i tegningen.
- **Dynamiske blokker.** En dynamisk blokk telles under sitt eget navn, ikke under de anonyme kopiene (`*U12`) filen holder. Tilstandene listes hver for seg («Enkel 12, Dobbel 4»): velg en tilstand for å telle bare den, eller {{ui:Alle varianter}}. Når en fil ikke sier hvilken tilstand en kopi viser, listes de som «(tilstand ikke kjent)».
- **Layerfilter.** En blokk på flere layere: velg ett under {{ui:På layer}}.

### Hva som ikke telles

- **Skjulte layere.** Et objekt på et layer som er av eller frosset i filen (eller som du skjulte i {{ui:Layers}}) utelates, og linjen sier hvor mange: «3 på skjulte layere utelatt». Kryss av {{ui:Tell dem også}} for å ta dem med.
- **Eksterne referanser (Xref) som ikke er åpne** telles ikke; vinduet sier det.
- **Objekter som ligger nøyaktig oppå et annet av samme slag** telles som to (de er to objekter), og vinduet sier det: det er vanligvis en tegnefeil verdt å se på.

## Hva arket viser, eller hele tegningen

- **Hva dette arket viser** teller objektene arket viser: på et layout, modellobjektene inni dets visningsområder (et layer som er frosset i et visningsområde telles ikke der) pluss layoutets egne.
- **Hele tegningen, hvert objekt én gang** teller modellrommet én gang, med merkene på fanen «Modell», og teller ikke det flere layouter viser på nytt.

Å telle det et layout viser og det Modell viser gir samme tall for de samme objektene; legg ikke begge til én post.

## Tell tellingene på nytt

Å telle samme blokk på nytt med samme post legger bare til det som er nytt: «22 allerede talt». Hvert merke står for ett objekt.

## Etter layer og type

På {{ui:Etter layer og type}} velger du et layer og en objekttype (sirkler, polylinjer, skravurer …): «alle sirkler på E-LITE». Kryss av {{ui:Tell også objekter inni blokker}} for å ta med dem inni blokkdefinisjoner, på hvert sted blokken settes inn.

## Etter tekst

På {{ui:Etter tekst}} skriver du teksten, for eksempel `A3`, og sier om den skal være nøyaktig den, inneholde den, eller ha den som et helt ord. Tekstobjekter, flerledetekst og blokkattributtverdier telles alle (en merkelappattributt `ITEM = A3` finnes); velg {{ui:I attributt}} for å telle bare ett attributt. De vanligste tekstene listes, så du kan klikke på dem.

## Når du heller skal bruke Autotelling

Bruk {{ui:Autotelling}} for PDF-er og for symboler i en tegning som ikke er blokker (tegnet løst, eller eksplodert). Tegnet som blokker, teller du her.
