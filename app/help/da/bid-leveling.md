---
title: Tilbudspakker og tilbudsudjævning
summary: Del kalkulationen op i pakker efter fag, send hver pakkes omfang til underentreprenører, sammenlign de tilbud, der kommer tilbage på samme omfang, og brug det valgte tilbud som pakkens pris.
keywords: tilbudsudjævning, udjævning, tilbudspakke, underentreprenør, underentreprenørtilbud, omfang, plug, fag, CSI-division, sammenlign tilbud, laveste tilbud, tilbudsoversigt, tilbudsgiver, tildeling, valgt tilbud, brug et tilbud, underentreprenørpris
from: 856b3088
---

En hovedentreprenør sender hvert fags omfang til underentreprenører og sammenligner det, der kommer tilbage. TakeoffCraft gør begge dele ud fra mængdeudtrækket: åbn {{ui:Eksportér}} › {{ui:Tilbudspakker og udjævning…}}.

## Pakker

Der er én pakke for hver CSI-division, dine poster bruger (de første to cifre i en posts {{ui:CSI-nummer}}, se [Opret poster](topic:create-items)). Poster uden nummer danner en pakke for sig selv. Hver pakke viser sine poster, hvor mange ark deres markeringer ligger på, og vores egen omkostning for den (materiale og løn før tillæg, fra grundtilbuddet).

Vælg {{ui:Omfang CSV}} for at downloade det, du sender til en underentreprenør: hver post med dens CSI-nummer, mængde, enhed og de ark, den ligger på. Den har ingen priser. Til materialeleverandører har tilbudsanmodningen i regnearket listen over dele (se [Eksportér kalkulationen](topic:export-estimate)).

## Indtast tilbuddene

1. I den tomme række under pakken skriver du tilbudsgiverens navn og tilbuddets beløb, og vælger {{ui:Tilføj tilbuddet}}.
2. Hvis et tilbud udelader en del af omfanget, åbner du dets liste {{ui:Udeladt}} og markerer posterne.
3. For at rette et navn eller et beløb skriver du over det i tabellen; knappen × fjerner et tilbud.

Hver ændring er ét trin, som {{key:Mod+Z}} tager tilbage, og tilbuddene gemmes sammen med mængdeudtrækket.

## Sådan udjævnes tilbuddene

Tilbud dækker sjældent det samme omfang. Udjævning udfylder hver udeladt post med en **plug** til vores egen omkostning for den, så hvert tilbud sammenlignes på hele pakken:

**Udjævnet = tilbuddet + plugsene**

Det laveste udjævnede tilbud markeres **Lavest**; ved lighed det, der blev indtastet først. **Mod vores omkostning** er det udjævnede tilbud minus vores egen omkostning for pakken: negativt betyder under den. Et tilbud, der ser lavest ud, kan tabe, når det manglende omfang er talt med.

Regnearket får et ark **Tilbudsudjævning** med hver pakke, der har tilbud: vores kalkulation, hvert tilbud, dets plugs, det udjævnede total og differencen, som levende formler, samt hvad hvert tilbud udelod.

## Brug et tilbud som pakkens pris

Vælg {{ui:Brug}} på et tilbud, og det bliver prisen for hele pakken i din kalkulation: pakkens egen prissætning (posterne, deres sekundære betingelser og kalkulationsdele) falder ud af jobtotalen, posterne bliver stående som mængder med dine egne satser som reference, og én linje, **Valgt tilbud**, bærer tilbuddets beløb. Poster, som tilbuddet udelader, bliver til din egen omkostning, hvilket er det, udjævningen allerede talte som plug. Vælg et andet tilbud, eller vælg det samme igen for at tage det tilbage; hvert er ét trin, som {{key:Mod+Z}} fortryder.

I tilbudsoversigten er underentreprenørtilbuddene én linje inde i omkostningen: overhead, fortjeneste og garanti lægges oven på dem som på alle andre omkostninger; salgsmoms (kun på materiale) og lønbyrde (på løn) gør ikke. Regnearkets ark Kalkulation bærer det valgte tilbud som sin egen række, og tillægsblokken lægger den til med levende formler. Materialelisten udelader en tildelt pakkes materiale, fordi underentreprenøren leverer det.

En pakke inde i et alternativs tilbudsområde prissættes ikke igen: alternativer og delsummer for tilbudsområder bruger stadig dine egne priser.

## Tilbud, der kommer tilbage via mail

Du behøver ikke skrive tilbuddene ind. {{ui:Send til tilbud…}} under en pakke mailer hver underentreprenør et link til en side, hvor de skriver en pris for hver linje; {{ui:Hent priser}} henter det, de har sendt, ind i denne tabel. Se [Send en pakke til tilbud](topic:bid-invitations).

:::note
At skrive et tilbud ind i hånden virker stadig, og et håndskrevet tilbud og et fra siden står side om side. Tilbud, der er kommet fra siden, markeres **web** (eller **web, for sent**, når de kom efter forfaldstidspunktet). Deres pris ændres kun, når tilbudsgiveren sender en ny version, så dine egne redigeringer af det står, indtil da.
:::
