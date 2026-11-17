---
title: Byrjaðu magntöku og opnaðu teikningasett
summary: Opnaðu eitt eða fleiri PDF-skjöl sem teikningasett, finndu þig um blöðin og farðu á milli þeirra.
keywords: opna, teikningasett, mörg pdf, margar skrár, blöð, teikningar, síðumerkingar, blaðalisti, rata, draga og sleppa, afhending, opna í öðru forriti, merking
from: ed434468
---

Teikningasett er oft nokkur PDF-skjöl: arkitektúr, burðarvirki, lagnir. TakeoffCraft opnar þau hlið við hlið sem einn lista yfir blöð, og ein magntaka getur náð yfir þau öll.

## Opnaðu PDF-skjölin

1. Veldu {{ui:Opna teikningar}} í {{ui:Skrá}}-hópnum, eða ýttu á {{key:Mod+O}}. (Aðrar valmyndagerðir kalla það {{ui:Opna PDF…}}.)
2. Veldu öll PDF-skjöl settsins í skráargluggann. Haltu {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} inni til að velja nokkur, eða {{key:Shift}} til að velja svið.
3. Veldu Opna.
   Skilaboðin „Opna (nafn)…“ birtast meðan hver skrá er lesin. Síðan birtist hver síða undir {{ui:Blöð}} og fyrsta síða fyrsta nýja PDF-skjalsins opnast.

Þú getur líka dregið PDF-skjölin úr {{pick:mac=Finder|windows=File Explorer|linux=skráastjóranum þínum}} og sleppt þeim hvar sem er á TakeoffCraft. Rammi með „Slepptu PDF, DWG eða DXF teikningum, eða .takeoff.json“ birtist meðan þú dregur.

Til að bæta við fleiri PDF-skjölum síðar, gerðu það sama aftur. PDF-skjöl sem eru þegar opin eru sleppt.

Upphafsskjárinn sýnir líka PDF-skjöl og magntökur sem þú opnaðir nýlega, í vöfrum sem leyfa síðu að opna skrá aftur (Chrome og Edge). Smelltu á eina til að opna hana; vafrinn gæti beðið um heimild fyrst. Sjá [Skrárnar þínar](common:your-files).

:::note
Ekkert er sent upp. Vafrinn les PDF-skjölin á tölvunni þinni, og þau eru horfin úr TakeoffCraft þegar þú lokar flipanum eða velur {{ui:Ný}}.
:::

## Teikningar með PDF-skjölum

{{ui:Opna teikningar}} tekur líka við DWG- og DXF-teikningum, einum sér eða með PDF-skjölum: líkanrými og útlit hverrar teikningar verða blöð í sama lista. Sjá [Opnaðu DWG- eða DXF-teikningu](topic:open-a-drawing), og síðan [Telja úr teikningu](topic:count-from-a-drawing).

## PDF-skjal afhent úr öðru forriti

Annað forrit í línunni getur afhent þér PDF-skjalið sem það hefur opið: það opnar TakeoffCraft í nýjum flipa og PDF-skjalið opnast þar eins og þú hefðir sleppt því. Stöðustikan segir „Opnað (nafn), afhent frá (forrit). Upprunalega skráin er óbreytt.“ Ekkert er sent upp; skráin fer um eigin geymslu þessa vafra og er horfin úr henni þegar hún opnast.

Ef stöðustikan segir að PDF-skjalið „barst ekki“, beið flipinn of lengi eða PDF-skjalið var þegar opnað í öðrum flipa: opnaðu það með {{ui:Opna teikningar}}.

Hin leiðin: þegar MarkupCraft keyrir þar sem þú ert og getur tekið við skrá, er á blaðastikunni undir teikningunni hnappur {{ui:MarkupCraft}}. Hann opnar PDF-skjal blaðsins á skjánum í MarkupCraft, í nýjum flipa, til yfirferðar og merkingar.

## Finndu blað

- Skrunaðu {{ui:Blöð}}-listann til vinstri og smelltu á blað.
- Skrifaðu í **Leita í blöðum** efst á listanum til að sía eftir blaðnúmeri, skráarnafni eða síðumerkingu. Talan við hlið {{ui:Blöð}} sýnir „3 af 40“ meðan sía er virk.
- Ýttu á {{key:PageDown}} fyrir næsta blað og {{key:PageUp}} fyrir það fyrra. Þau fylgja listanum eins og hann er síaður.

:::mac
Á Mac-lyklaborði án Page Up og Page Down takka, ýttu á fn með upp- eða niðurörina.
:::

## Hvernig blöð eru nefnd

- Síða sem PDF-skjalið gefur merkingu, eins og `A-101`, er nefnd eftir þeirri merkingu.
- Síða án merkingar (eða með merkingu sem er bara síðunúmerið) er nefnd „(skráarnafn), síða (n)“.
- Þegar nokkur PDF-skjöl eru opin bera merkt blöð líka skráarnafnið: „A-101 — Arkitektúr“.

Ekki er hægt að slá inn blaðanöfn handvirkt enn.

## Skoðaðu blað

- Snúðu músarhjólinu til að þysja við bendilinn.
- Dragðu með vinstri eða miðjutakka til að hliðra. Með {{ui:Sjálftalning}}, eða þegar þú byrjar á horni merkis, haltu {{key:Space}} inni meðan þú dregur, eða dragðu með miðjutakkanum.
- Ýttu á {{key:F}} eða veldu {{ui:Passa blað}} til að sjá allt blaðið; {{key:W}} eða {{ui:Passa breidd}} passar breidd þess.
- Ýttu á {{key:Plus}} eða {{key:=}} til að þysja inn og {{key:Minus}} til að þysja út, um miðju sýnarinnar.

Hvert blað man sinn eigin aðdrátt og stöðu meðan það er opið.

## Næst

Áður en þú getur mælt blað þarf það mælikvarða: [Stilltu mælikvarðann](topic:set-the-scale).
