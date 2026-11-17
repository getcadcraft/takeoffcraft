---
title: Suriin ang takeoff sa 3D
summary: Tingnan ang mga pader, slab at count ng bukas na sheet na nakatayo sa ibabaw ng drawing, i-orbit ang mga ito, at i-click ang isa para piliin ang marka nito.
keywords: png, larawan, picture, screenshot, stack, palapag, levels, elevation, glb, gltf, export 3d, kapal ng pader, base height, opening, door head, 3d, three d, suriin, view, pader, taas ng pader, slab, lalim, volume, orbit, model, pagpili, isometric, perspective
from: fb16b4f7
---

Ang 3D view ay pansuri, hindi pangalawang drawing: itinatayo nito ang takeoff ng sheet sa screen sa ibabaw mismo ng sheet, kaya agad makikita ang nawawalang pader, dobleng slab o ligaw na count.

Bago ka magsimula: kailangan ng sheet ng scale ([Set the scale](topic:set-the-scale)). Kailangan ng taas at lalim ang totoong talampakan, kaya sa sheet na walang scale, sinasabi ng {{ui:3D}} ito at nananatili sa flat na sheet.

## Buksan ang 3D view

1. Ipakita ang sheet na gusto mong suriin.
2. Piliin ang {{ui:3D}} sa bar na nagpapakita ng pangalan at scale ng sheet, o pindutin ang {{key:3}}.
   Sa unang pagkakataon, sandaling naglo-load ang 3D view. Iginuguhit ang sheet sa lupa, at nakatayo rito ang takeoff sa kulay ng bawat item.
3. Para bumalik, piliin muli ang {{ui:3D}}, {{ui:Back to the sheet}}, o pindutin ang {{key:3}}. Bumabalik din ang pagpili ng drawing tool (Linear, Area, Count at iba pa), dahil iginuguhit ang mga marka sa flat na sheet.

Ipinapakita nito ang sheet sa screen; magpalit ng sheet sa listahan ng sheets, o gamit ang {{key:PageDown}} at {{key:PageUp}}, at susunod ang 3D view. Para makita ang ilang palapag nang sabay, i-stack ang mga ito (sa ibaba).

## Ano ang makikita mo

| Marka | Sa 3D |
|---|---|
| Linear run, item na may taas | Isang pader na may taas na iyon sa kahabaan ng run. Sumusunod sa kurba ang mga kurbadong run. |
| Linear run, item na walang taas | Isang linya sa sheet. Bigyan ng taas ang item sa ilalim ng **Item** para itayo ito. |
| Area, item na may lalim | Isang slab na may lalim na iyon, bukas ang mga cut-out nito. |
| Area, item na walang lalim | Isang manipis na 2" plate, para makita pa rin. |
| Count | Isang maliit na poste sa bawat binilang na punto. |

Ang taas ay ang field na {{ui:Height}} ng linear item, at ang lalim ay ang field na {{ui:Depth}} ng area item, sa ilalim ng **Item** (tingnan ang [Create takeoff items](topic:create-items)). Kapag binago mo ito, agad mag-a-update ang 3D view. Ang note sa ilalim ng pangalan ng sheet ay nagsasabi kung ano ang laman ng sheet, halimbawa "This sheet in 3D: 2 walls, 1 slab, 3 counts", at kung ilang run o area ang walang taas o lalim. Dumadaan sa view ang mga click sa note.

Hindi nagbabago ang mga numero sa 3D: ang lawak ng pader ay eksaktong haba nito na minultiply sa taas nito, at ang volume ng slab ay ang net area nito (outline na minus cut-outs, eksakto ang mga kurba) na minultiply sa lalim nito. Ginagawang maiikling tuwid na piraso lang ang mga kurba sa screen.

## Tumingin sa paligid

| Aksyon | Ano ang ginagawa nito |
|---|---|
| I-drag, o i-drag gamit ang middle button | I-orbit sa paligid ng takeoff. |
| {{key:Shift}} + drag, o i-drag gamit ang kanang button | Pan. |
| Mouse wheel | Mag-zoom in at out sa posisyon ng pointer. |
| Two-finger swipe sa trackpad | I-orbit ({{key:Shift}} ang nagpa-pan). Ang pinch ay nag-zoom. |
| {{ui:Iso}}, {{ui:Top}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}}, {{ui:Right}}, {{ui:Bottom}} | Karaniwang view, naka-frame sa takeoff. Bumubukas ang 3D view sa {{ui:Iso}}. |
| {{ui:Perspective}} | Perspective na naka-on o naka-off (parallel kapag naka-off). |
| {{ui:Zoom extents}} o {{key:F}} | Ang buong sheet. |
| {{ui:Sheet}} | Ipakita o itago ang drawing sa lupa. |
| Ang view cube, sa kanang itaas | I-click ang isang mukha, gilid o sulok para tumingin mula roon; i-drag para mag-orbit; i-drag ang compass ring nito para paikutin; ibinabalik ng house button sa {{ui:Iso}}. |

Ipinapakita ng sulok ang view cube, isang maliit na X, Y, Z axis icon, o wala: pumili sa {{ui:Settings}}, sa TakeoffCraft tab, sa ilalim ng **Corner indicator** ([TakeoffCraft settings](topic:settings)). Walang corner indicator ang flat sheet.

:::touch
Isang daliri ang nag-o-orbit; dalawang daliri ang pinch para mag-zoom at galaw para mag-pan. Ang tap ay pumipili.
:::

## Mga pader na may kapal, base at opening

Ang linear item na may taas ay nakatayo bilang manipis na strip. Para makita ito bilang totoong pader, bigyan ang item ng hugis nito sa ilalim ng **In 3D** sa mga setting nito:

- **Wall thickness** (8", 0.2 m): nagiging solid ang pader, nakasentro sa linyang iginuhit mo, na may mitered na mga sulok.
- **Base height**: nagsisimula ang pader nang ganoon kataas mula sa sahig (soffit, upper cabinet run). May base height din ang area item: kisame sa 9'-0".
- **Opening head**: ang ibinawas na segment (pinto, [Deduct a part of a run](topic:measure-linear#deduct-a-part-of-a-run)) ay pinananatiling pader sa itaas ng taas na iyon, kaya lumalabas na pinto ang pinto. Kapag wala ito, nag-iiwan ang ibinawas na segment ng puwang hanggang sa itaas.

Hinuhubog lang ng mga ito ang 3D view: nananatili ang mga dami (haba, lawak ng pader, gastos) gaya ng dati.

## I-stack ang mga palapag

1. Buksan ang mga PDF ng bawat palapag.
2. Sa 3D view, piliin ang {{ui:Levels…}} at i-type ang elevation ng bawat palapag, gaya ng `0` para sa ground floor at `12'` para sa susunod. Ang blangko ay nag-iiwan ng sheet.
3. Piliin ang {{ui:Stack}}. Ipinapakita ng bawat sheet na may level ang takeoff nito sa taas nito; ang sheet na nasa screen ay nasa ilalim ng sarili nitong palapag, at naka-outline ang iba. Sinasabi ng note kung ilang palapag ang naka-stack.

Naka-align ang mga sheet ayon sa lugar nila sa page, kaya gumagana ito para sa mga floor plan na pareho ang pagkaka-plot (parehong laki at posisyon ng sheet). Ang sheet na may level pero walang scale ay hindi kasama, at sinasabi ito ng note. Piliin muli ang {{ui:Stack}} para sa isang sheet sa isang pagkakataon. Nase-save ang mga level kasama ng takeoff.

## I-save ang 3D view bilang larawan

Piliin ang {{ui:PNG}} sa 3D bar para sa larawan ng view gaya ng nasa screen (`… 3D.png`); ang {{key:Shift}} + click sa {{ui:PNG}} ay ginagawa itong dalawang beses ang laki (`… 3D@2x.png`), para sa print.

## I-save ang 3D view bilang model

Piliin ang {{ui:GLB}} sa 3D bar. Makakakuha ka ng `.glb` file (glTF, binary) ng ipinapakita ng view, ang palapag sa screen, o bawat naka-stack na palapag, na mabubuksan ng ibang 3D program: isang object bawat marka, pinangalanan ayon sa item nito, nasa kulay ng item, nasa metro, at nakaturo ang Y pataas. Wala sa file ang sheet mismo at ang mga outline.

## Pumili ng marka mula sa 3D

I-click ang isang pader, slab, plate o poste. Nagiging napiling marka ang marka nito, gaya ng kung na-click mo ito sa sheet: lalabas ito sa ilalim ng **Napiling marka**, magiging kasalukuyang item ang item nito, at ibibigay ng status bar ang haba at taas nito, o ang lawak, lalim at cubic yards nito. Dinadagdag o inaalis ng {{key:Shift}} + click ang mga marka sa pagpili. Binubura ng {{key:Delete}} ang mga napiling marka at ibinabalik ito ng {{key:Mod+Z}}; ang {{key:Esc}} ay walang pinipiling marka. Pagbalik sa sheet, nananatiling napili ang parehong mga marka.

:::tip
Sumusunod ang drawing sa theme: sa Model, nagiging madilim ang sheet sa lupa gaya ng flat view.
:::
