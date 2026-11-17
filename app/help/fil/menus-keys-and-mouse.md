---
title: Mga menu, key at mouse
summary: Pumili ng menu style na tugma sa paraan ng iyong pagtatrabaho, bigyan ang anumang command ng sarili mong key, ilipat ang mga command sa pagitan ng mga menu, at itakda ang ginagawa ng wheel at ng mga button ng mouse.
keywords: menu style, menus, menu bar, ribbon, ribbon tabs, toolbar, keyboard shortcuts, hotkeys, keys, customize, remap, rebind, mouse, wheel, baliktarin, zoom direction, middle button, right button, pan, export, import, paglipat, pamilyar, takeoff desk, conditions
from: f01f0d6d
---

Pareho ang mga command ng TakeoffCraft anuman ang paraan ng pag-abot mo sa mga ito. Ang **menu style** ay nagpapasya lamang kung saan sila nakalagay sa screen, ano ang tawag sa kanila doon, at aling mga key ang nagpapatakbo sa kanila. Pumili sa {{ui:Mga setting}} ({{key:Mod+,}}) › {{ui:TakeoffCraft}} › {{ui:Mga menu, key at mouse}}; agad itong nagbabago, at naaalala ito ng browser na ito.

## Ang tatlong style

| Style | Ano ang makukuha mo |
|---|---|
| {{ui:TakeoffCraft}} | Sariling toolbar ng TakeoffCraft: File, Export, Scale, Takeoff, Edit at View, kasama ang single-letter na tool key. Ang panimula. |
| {{ui:Takeoff desk}} | Isang menu bar ({{ui:File}}, {{ui:Edit}}, {{ui:View}}, {{ui:Scale}}, {{ui:Takeoff}}, {{ui:Items}}, {{ui:Markup}}, {{ui:Export}}) sa ibabaw ng isang hilera ng takeoff tool, gaya ng pagkakaayos ng mga on-screen takeoff program. Tinatawag na conditions ang mga item sa hilera. Pareho ang mga key, kasama ang {{key:N}} para sa bagong item. Lumilipat ang mga scale preset sa sheet bar, sa tabi ng scale ng sheet. |
| {{ui:Takeoff ribbon}} | Mga ribbon tab na pinangalanan ayon sa gawain: {{ui:Takeoff}} (sukatin, hugis, scale, mula sa drawing, conditions), {{ui:Edit}}, {{ui:View}}, {{ui:Markup}} at {{ui:Tantya}} (ang workbook, marked PDF, ang bid), kasama ang menu na {{ui:File}} at isang mabilis na hilera para sa buksan, i-save, i-undo at i-redo. Malalaki ang mga tool na ginagamit mo araw-araw, maliit at nakasalansan ang mga katabi nila. Pareho ang mga key; lumilipat ang mga scale preset sa sheet bar. |

Pinapanatili ng tatlong style ang mga key ng TakeoffCraft: {{key:V}} Piliin, {{key:L}} Linear, {{key:A}} Area, {{key:O}} Circle, {{key:B}} Room, {{key:P}} path (pumili ng mga linya ng PDF), {{key:X}} Cut-out, {{key:C}} Count, {{key:S}} Auto count, {{key:K}} I-calibrate, {{key:D}} Suriin, {{key:R}} arc mode, {{key:E}} deduct mode, {{key:F}} at {{key:W}} para i-fit, {{key:3}} ang 3D check view, {{key:F3}} snap, at {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}.

Naghihintay ang mga tool ng sheet bar (note, cloud, highlight, Compare, 3D) hanggang may bukas na PDF; kung napili bago iyon, sinasabi ito ng status line.

:::tip
Ang key na bahagi ng sariling layout ng TakeoffCraft pero itinalaga ng iyong style sa ibang command ay walang gagawin, at sinasabi ng status line kung saan napunta ang command nito (halimbawa: "Sa My keys, ang Count ay Ctrl+Alt+C"). Laging nananatili ang kahulugan ng {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} at mga arrow. Habang gumuguhit ka ng run o outline, nagpe-paste o nagre-review ng auto count, nananatili sa drawing ang mga letra at numero ng isang typed na haba.
:::

## Gawin itong sarili mo

1. Piliin ang style na pinakamalapit sa gusto mo, pagkatapos i-click ang {{ui:I-customize…}}.
2. Sa {{ui:Mga key at menu}}, hanapin ang isang command (nakatutulong ang search box). I-click ang {{ui:Magdagdag ng key}} at pindutin ang key, o dalawang key nang sunud-sunod para sa two-letter key. I-click ang isang key para alisin ito.
3. Gamit ang menu bar, inililipat ng {{ui:Kung saan ito nakalagay}} ang command sa ibang menu, o sa {{ui:Keys lamang}}.
4. Sa {{ui:Mouse}}, itakda ang wheel at ang mga button na nagpa-pan sa sheet.
5. Bigyan ito ng pangalan at i-click ang {{ui:I-save}}.

Ang pag-save ng built-in na style ay gumagawa ng sarili mong kopya ("My Takeoff desk"); hindi kailanman nagbabago ang built-in. Ang key na itinalaga sa dalawang command ay ipinapakita sa pula at kailangang ayusin bago ka makapag-save.

## Mouse

- **Mouse wheel**: {{ui:Scroll up zooms in}} (ang panimula) o {{ui:Scroll up zooms out}}, at kung gaano kabilis. Palaging nag-zoom ang pinch ng trackpad sa direksyon ng paggalaw ng iyong mga daliri.
- **Mag-pan ng sheet gamit ang**: ang middle button, ang right button, o pareho. Nagpa-pan ang left drag sa walang lamang papel at ang {{key:Space}} na may drag; laging tinatapos ng right click na walang drag ang run o outline.
- **I-drag sa 3D view**: pinananatili ng {{ui:Sariling view ng bawat isa}} ang mga button ng 3D check view (kaliwa at gitna para mag-orbit, kanan para mag-pan). O itakda ang middle at right button para mag-orbit, mag-pan, mag-zoom o walang gawin; binabaligtad ng {{key:Shift}} kasama ang button ang orbit at pan. Laging nag-o-orbit at pumipili ang left button.

## Dalhin ito kasama mo

Ang {{ui:Export}} ay nagse-save ng ginagamit na style bilang maliit na `.ccinput.json` na file; ang {{ui:Import…}} ay nagdadagdag ng isa, mula sa ibang computer o sa kasamahan. Ang na-import na file ay maaari lamang tumukoy sa sariling command ng TakeoffCraft: anumang iba pa rito ay tinatanggal at binibilang sa status line. Inaalis ng {{ui:Delete this style}} ang isa sa sarili mong style.

:::note
Nananatili sa browser na ito ang mga setting na ito. Ang {{ui:Gamitin ang istilong ito sa bawat app}} sa ilalim ng mga style card ay nagpapabukas sa bawat app sa katugmang style nito (sarili nitong toolbar, menu bar o ribbon), kasama ang mga pagbabagong ginawa mo sa bawat app. Walang style na may command line ang TakeoffCraft: kapag may napiling style para sa bawat app, pinapanatili ng TakeoffCraft ang sarili nitong toolbar.

Ang {{ui:Takeoff ribbon}} ay ribbon din ng layout na {{ui:Ribbon and project browser}} ({{ui:Mga setting}} › {{ui:Global}} › {{ui:Layout}}): tingnan ang [Ang screen ng TakeoffCraft](topic:workspace).
:::

Kaugnay: [Keyboard at mouse](topic:keyboard) · [Mga setting ng TakeoffCraft](topic:settings) · [Galing sa ibang takeoff software](topic:coming-from)
