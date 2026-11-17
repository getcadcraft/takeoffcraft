---
title: Start et mængdeudtræk og åbn et tegningssæt
summary: Åbn en eller flere PDF'er som et tegningssæt, find rundt mellem arkene, og skift mellem dem.
keywords: åbn, tegningssæt, flere pdf'er, flere filer, ark, tegninger, sidelabels, arkliste, navigér, slip, overdragelse, åbn i et andet program, markering
from: ed434468
---

Et tegningssæt er ofte flere PDF'er: arkitekt, konstruktion, VVS. TakeoffCraft åbner dem side om side som én liste af ark, og ét mængdeudtræk kan dække dem alle.

## Åbn PDF'erne

1. Vælg {{ui:Åbn tegninger}} i gruppen {{ui:Fil}}, eller tryk på {{key:Mod+O}}. (De andre menustile kalder den {{ui:Åbn PDF'er…}}.)
2. Vælg hver PDF i sættet i fildialogen. Hold {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} nede for at vælge flere, eller {{key:Shift}} for at vælge et interval.
3. Vælg Åbn.
   Beskeden »Åbner (navn)…« vises, mens hver fil læses. Derefter vises hver side under {{ui:Ark}}, og den første side af den første nye PDF åbnes.

Du kan også trække PDF'erne fra {{pick:mac=Finder|windows=Stifinder|linux=din filhåndtering}} og slippe dem hvor som helst på TakeoffCraft. Mens du trækker, vises en ramme med teksten »Slip PDF'er, DWG- eller DXF-tegninger eller en .takeoff.json«.

For at tilføje flere PDF'er senere, gør det samme igen. PDF'er, der allerede er åbne, springes over.

Startskærmen viser også de PDF'er og mængdeudtræk, du har åbnet for nylig, i browsere, der lader en side åbne en fil igen (Chrome og Edge). Klik på en for at åbne den; browseren kan først bede om tilladelse. Se [Dine filer](common:your-files).

:::note
Der uploades intet. Browseren læser PDF'erne på din computer, og de er væk fra TakeoffCraft, når du lukker fanen eller vælger {{ui:Ny}}.
:::

## Tegninger ved siden af PDF'er

{{ui:Åbn tegninger}} tager også DWG- og DXF-tegninger, alene eller sammen med PDF'er: hver tegnings modelrum og layouts bliver til ark i samme liste. Se [Åbn en DWG- eller DXF-tegning](topic:open-a-drawing), og derefter [Tæl fra en tegning](topic:count-from-a-drawing).

## En PDF overdraget fra et andet program

Et andet program i pakken kan give dig den PDF, det har åben: det åbner TakeoffCraft i en ny fane, og PDF'en åbnes der, som om du havde sluppet den. Statuslinjen siger »Åbnet (navn), overdraget fra (program). Den oprindelige fil er uændret.« Der uploades intet; filen går gennem denne browsers egen lagring og er væk derfra, når den er åbnet.

Hvis statuslinjen siger, at PDF'en »ikke kom frem«, ventede fanen for længe, eller PDF'en var allerede åbnet i en anden fane: åbn den med {{ui:Åbn tegninger}}.

Omvendt: når MarkupCraft kører, hvor du er, og kan tage en fil, har arkbjælken under tegningen en knap {{ui:MarkupCraft}}. Den åbner PDF'en for arket på skærmen i MarkupCraft, i en ny fane, til gennemsyn og markering.

## Find et ark

- Rul listen {{ui:Ark}} til venstre, og klik på et ark.
- Skriv i **Søg i ark** øverst i listen for at filtrere efter arknummer, filnavn eller sidelabel. Tallet ved siden af {{ui:Ark}} viser »3 af 40«, mens et filter er aktivt.
- Tryk på {{key:PageDown}} for det næste ark og {{key:PageUp}} for det forrige. De følger listen, som den er filtreret.

:::mac
På et Mac-tastatur uden tasterne Page Up og Page Down trykker du på fn sammen med pil op eller pil ned.
:::

## Hvordan ark navngives

- En side, hvis PDF giver den en label, som `A-101`, navngives efter den label.
- En side uden label (eller en label, der kun er sidenummeret) navngives »(filnavn), side (n)«.
- Når flere PDF'er er åbne, får navngivne ark også filnavnet: »A-101 — Arkitektur«.

Ark kan ikke skrives ind i hånden endnu.

## Se rundt på et ark

- Drej musehjulet for at zoome ved markøren.
- Træk med venstre eller midterste knap for at panorere. Med {{ui:Auto-tælling}}, eller når du starter på en markørs hjørne, holder du {{key:Space}} nede, mens du trækker, eller trækker med midterknappen.
- Tryk på {{key:F}} eller vælg {{ui:Tilpas side}} for at se hele arket; {{key:W}} eller {{ui:Tilpas bredde}} tilpasser dets bredde.
- Tryk på {{key:Plus}} eller {{key:=}} for at zoome ind og {{key:Minus}} for at zoome ud, omkring midten af visningen.

Hvert ark husker sin egen zoom og position, mens det er åbent.

## Næste

Før du kan måle et ark, skal det have en målestok: [Angiv målestok](topic:set-the-scale).
