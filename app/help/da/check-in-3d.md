---
title: Tjek mængdeudtrækket i 3D
summary: Se det åbne arks vægge, dæk og tællinger stå op over tegningen, kredse rundt om dem, og klik på én for at vælge dens markering.
keywords: png, billede, skærmbillede, stak, etager, niveauer, kote, glb, gltf, eksportér 3D, vægtykkelse, bundhøjde, åbning, åbningshoved, 3d, tre d, tjek, visning, vægge, væghøjde, dæk, dybde, volumen, kredse, model, valg, isometrisk, perspektiv
from: fb16b4f7
---

3D-visningen er en kontrol, ikke en anden tegning: den stiller arkets mængdeudtræk op på selve arket på skærmen, så en manglende væg, et dobbelt dæk eller en løs tælling springer i øjnene.

Før du går i gang: arket skal have en målestok ([Angiv målestok](topic:set-the-scale)). Højder og dybder kræver rigtige fod, så på et ark uden målestok siger {{ui:3D}} det og bliver på det flade ark.

## Åbn 3D-visningen

1. Vis det ark, du vil tjekke.
2. Vælg {{ui:3D}} på bjælken, der viser arkets navn og målestok, eller tryk {{key:3}}.
   Første gang tager 3D-visningen et øjeblik at indlæse. Arket tegnes på jorden, og mængdeudtrækket står på det i hver posts farve.
3. For at gå tilbage vælger du {{ui:3D}} igen, {{ui:Tilbage til arket}}, eller trykker {{key:3}}. Hvis du vælger et tegneværktøj (Lineær, Areal, Tælling og så videre), går du også tilbage, da markeringer tegnes på det flade ark.

3D-visningen viser arket på skærmen. Skift ark i arklisten eller med {{key:PageDown}} og {{key:PageUp}}, så følger den med. For at se flere etager på én gang stabler du dem (nedenfor).

## Hvad du ser

| Markering | I 3D |
|---|---|
| Lineært forløb, post med højde | En væg med den højde langs forløbet. Buede forløb følger kurven. |
| Lineært forløb, post uden højde | En linje på arket. Giv posten en højde under **Post** for at stille den op. |
| Areal, post med dybde | Et dæk med den dybde, med dets udsparinger åbne. |
| Areal, post uden dybde | En tynd 2" plade, så den stadig vises. |
| Tælling | En lille stolpe på hvert talt punkt. |

Højden er en lineær posts felt {{ui:Højde}}, og dybden er en arealposts felt {{ui:Dybde}}, under **Post** (se [Opret poster](topic:create-items)). Ændrer du den, opdateres 3D-visningen straks. Noten under arknavnet siger, hvad arket indeholder, fx »Dette ark i 3D: 2 vægge, 1 dæk, 3 tællinger«, og hvor mange forløb eller arealer der mangler højde eller dybde. Klik går igennem den til visningen.

Tallene ændrer sig ikke i 3D: en vægs areal er dens nøjagtige længde gange dens højde, og et dæks volumen er dets nettoareal (kontur minus udsparinger, kurver nøjagtige) gange dets dybde. Kurver tegnes kun som korte rette stykker på skærmen.

## Kig rundt

| Handling | Hvad den gør |
|---|---|
| Træk, eller træk med midterknappen | Kredsér rundt om mængdeudtrækket. |
| {{key:Shift}} + træk, eller træk med højre knap | Panorér. |
| Musehjul | Zoom ind og ud ved markøren. |
| Tofingerswipe på trackpad | Kredsér ({{key:Shift}} panorerer). En knibning zoomer. |
| {{ui:Iso}}, {{ui:Top}}, {{ui:Front}}, {{ui:Bagside}}, {{ui:Venstre}}, {{ui:Højre}}, {{ui:Bund}} | Standardvisninger, indrammet på mængdeudtrækket. 3D-visningen åbner i {{ui:Iso}}. |
| {{ui:Perspektiv}} | Perspektiv til eller fra (parallel, når det er fra). |
| {{ui:Zoom til alt}} eller {{key:F}} | Hele arket. |
| {{ui:Ark}} | Vis eller skjul tegningen på jorden. |
| ViewCube, øverst til højre | Klik på en flade, kant eller hjørne for at kigge derfra; træk det for at kredse; træk dets kompasring for at dreje; husknappen går tilbage til {{ui:Iso}}. |

Hjørnet viser en ViewCube, et lille X, Y, Z-akseikon eller ingenting: vælg det i {{ui:Indstillinger}}, på fanen TakeoffCraft, under **Hjørneindikator** ([TakeoffCraft-indstillinger](topic:settings)). Det flade ark har ingen hjørneindikator.

:::touch
En finger kredser; to fingre knibes for at zoome og flyttes for at panorere. Et tryk vælger.
:::

## Vægge med tykkelse, sokkel og åbninger

Et lineært forløb med højde står som en tynd stribe. For at se det som en rigtig væg, giv posten sin form under **I 3D** i dens indstillinger:

- **Vægtykkelse** (8", 0.2 m): væggen bliver til et massivt legeme, centreret på linjen du tegnede, med gjorte hjørner.
- **Bundhøjde**: væggen starter så langt over gulvet (en underside, et overskabsforløb). Arealposter har den også: et loft på 9'-0".
- **Åbningshoved**: et fratrukket stykke (en dør, [Træk en del af et forløb fra](topic:measure-linear#deduct-a-part-of-a-run)) holder væggen over den højde, så en dør vises som en dør. Uden den efterlader et fratrukket stykke et hul op til toppen.

Disse former påvirker kun 3D-visningen: mængderne (længde, vægareal, omkostninger) forbliver som de var.

## Stabl etagerne

1. Åbn PDF'erne for hver etage.
2. I 3D-visningen vælger du {{ui:Niveauer…}} og skriver hver etages kote, fx `0` for stueplan og `12'` for den næste. Tomt lader et ark være ude.
3. Vælg {{ui:Stabl}}. Hvert ark med et niveau viser sit mængdeudtræk i sin højde; arket på skærmen ligger under sin egen etage, de andre er optegnet med konturer. Noten siger, hvor mange etager der er stablet.

Ark flugter efter deres plads på siden, så det virker for plantegninger, der er plottet ens (samme arkstørrelse og position). Et ark med et niveau, men uden målestok, springes over, og noten siger det. Vælg {{ui:Stabl}} igen for ét ark ad gangen. Niveauerne gemmes sammen med mængdeudtrækket.

## Gem 3D-visningen som et billede

Vælg {{ui:PNG}} på 3D-bjælken for et billede af visningen, som den er på skærmen (`… 3D.png`); {{key:Shift}} + klik på {{ui:PNG}} gør det dobbelt så stort (`… 3D@2x.png`), til print.

## Gem 3D-visningen som en model

Vælg {{ui:GLB}} på 3D-bjælken. Du får en `.glb`-fil (glTF, binær) af det, visningen viser (gulvet på skærmen, eller alle stablede etager), som andre 3D-programmer kan åbne: ét objekt pr. markering, navngivet efter sin post, i postens farve, i meter med Y opad. Selve arket og konturerne er ikke med.

## Vælg en markering fra 3D

Klik på en væg, et dæk, en plade eller en stolpe. Dens markering bliver den valgte markering, præcis som hvis du havde klikket på den på arket: den vises under **Valgt markering**, dens post bliver den aktuelle, og statuslinjen giver dens længde og højde, eller dens areal, dybde og kubikyard. {{key:Shift}} + klik tilføjer markeringer til valget eller fjerner dem. {{key:Delete}} sletter de valgte markeringer, og {{key:Mod+Z}} bringer dem tilbage; {{key:Esc}} vælger ingen. Tilbage på arket forbliver de samme markeringer valgt.

:::tip
Tegningen følger temaet: i Model bliver arket på jorden mørkt ligesom den flade visning.
:::
