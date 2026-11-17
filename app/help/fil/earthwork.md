---
title: Earthwork at spot elevations
summary: Markahan ang spot elevation sa site plan, ipasa ang mga ito sa CivilCraft para sa surface at cut and fill, at kumuha dito ng simpleng dami ng paghuhukay.
keywords: earthwork, paghuhukay, excavation, cut, fill, cut and fill, grading, spot elevation, elevation, topo, surface, triangulation, civilcraft, points, pnezd, trench
from: a898e508
---

Sumusukat ang TakeoffCraft ng kung ano ang nakaguhit sa isang sheet. Kailangan ng earthwork ang ground surface, kaya ibinabahagi ito sa CivilCraft, na gumagawa ng surface mula sa mga punto, nagla-grade nito, at kinukuwenta ang cut and fill at haul.

## Simpleng paghuhukay dito

Para sa footprint na hinukay sa iisang lalim, sapat na ang area item na may **depth**: ang volume ay area × depth. Ang [trade pack](topic:trade-packs) ng general contractor ay may bulk excavation item (bank volume, loose volume at truck loads) at utility trench item (paghuhukay, bedding at backfill ayon sa haba at lalim).

## Spot elevations para sa CivilCraft

1. Itakda ang scale ng site sheet.
2. Gumawa ng **Count** item, halimbawa "Existing grade", at i-click ang bawat spot elevation sa sheet.
3. Pumili ng mark at i-type ang {{ui:Elevation}} nito sa panel ng napiling mark: `102.5`, `102'-6"` o `31.24 m`. Ayos lang ang negatibo at zero na elevation.
4. Buksan ang menu na {{ui:I-export}} at piliin ang {{ui:Spot elevation}}. Makakakuha ka ng points file (`.csv`) na may Point, Northing, Easting, Elevation at Description, isang row bawat markadong punto ng bukas na sheet.
5. Buksan ang file na iyon sa CivilCraft (tingnan ang [Import points](app:civilcraft/import-points)). Gagawin nito ang surface mula sa mga punto ([Build a surface](app:civilcraft/build-surface)); mula roon, ikinukumpara nito ang mga surface at nagbibigay ng cut and fill ([Volumes](app:civilcraft/volumes)).

Ang northing at easting ay sarili ng sheet na coordinates sa feet, sinusukat mula sa sulok ng pahina ayon sa scale nito: tama ang mga distansya at volume sa pagitan ng mga punto, pero hindi ito ang survey coordinates ng site mo. Ilipat ang mga ito sa coordinates ng site sa CivilCraft kapag kailangan.

:::note
Hindi nagbabahagi ng coordinates ang mga punto mula sa magkaibang sheet, kaya bukas na sheet lamang ang kinukuha ng export. Naka-save ang elevation kasama ng takeoff at dinadala ng copy at paste.
:::

## Cut and fill mula sa CivilCraft

Dalawang item ang ibinabalik ng earthwork ng CivilCraft na maaari mong presyuhan:

1. Sa CivilCraft, i-grade ang iyong pads at corridors, pagkatapos ay piliin ang {{ui:Ipadala sa TakeoffCraft}} sa ilalim ng **Earthwork** ([Earthwork volumes](app:civilcraft/volumes)). Nagse-save ito ng quantities file (`.quantities.json`).
2. Sa TakeoffCraft, buksan ito gamit ang {{ui:Buksan ang takeoff}}, o i-drop ito sa app. Nananatiling bukas ang takeoff mo: idinadagdag ng file ang **Earthwork: cut** at **Earthwork: fill** bilang [typed quantities](topic:create-items#typed-quantities-no-drawing) sa cubic yards (CY) para sa feet project, o cubic meters (m³) para sa metre project. Isang hakbang lang ito: binabawi ito ng {{key:Mod+Z}}.
3. I-rename ang mga ito, at itakda ang waste, rate at assembly ayon sa gusto mo.

Kapag nagbago ang disenyo, magpadala ulit mula sa CivilCraft at buksan ang bagong file: ang parehong dalawang item ay makakakuha ng bagong quantities. Nananatili ang kanilang pangalan, rate, waste at assembly na itinakda mo. Kung nagbago ang unit ng project, sinasabi ito ng status bar: suriin ang mga rate. Ang file mula sa ibang project ng CivilCraft ay nagdadagdag ng sarili nitong dalawang item.

Ang mga quantity ay bank volumes, ayon sa pagsukat ng CivilCraft (grid method): walang shrink o swell. Idagdag ang mga iyon bilang waste, o gamit ang formula gaya ng `Q * 1.25` para sa loose volume. Ipinapakita ng item editor kung saan galing ang bawat isa at kailan; sinasabi rin ito ng notes column ng estimate.

:::note
Plain JSON ang quantities file (`"format": "cadcraft-quantities"`), kaya maaari ring gumawa ng isa ang script o ibang programa: pangalan ng app, project, at mga item na may key, pangalan, unit at quantity.
:::
