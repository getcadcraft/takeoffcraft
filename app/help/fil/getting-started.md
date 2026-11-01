---
title: Pagsisimula sa TakeoffCraft
summary: Ano ang ginagawa ng TakeoffCraft, saan ito tumatakbo, at ang iyong unang sinukat at may presyong item mula sa set ng PDF na plano.
keywords: simula, unang takeoff, mabilis na simula, panimula, estimate, quantity takeoff, plan set, pdf
from: 3b9da1fb
---

Sinusukat ng TakeoffCraft ang mga plan set, PDF, at DWG o DXF drawing, at ginagawang may presyong estimate ang mga sukat. Binubuksan mo ang mga file (ang drawing ay direktang binibilang mula sa mga block nito: tingnan ang [Magbukas ng DWG o DXF drawing](topic:open-a-drawing)), binibigyan ng scale ang bawat sheet (ang drawing ay may sarili nang scale), gumagawa ng **mga item** (uri ng pader, tapos ng sahig, isang fixture), at nagki-click sa mga sheet para kunin ang mga ito sa takeoff. Nag-a-update ang dami, gastos at job total habang nagtatrabaho ka. Puwede mong i-export ang estimate bilang spreadsheet at isang kopya ng mga PDF na may nakaguhit na takeoff mo.

Kung nakagawa ka na ng takeoff sa ibang program, basahin muna ang [Galing sa ibang takeoff software](topic:coming-from). May ilang bagay na iba rito.

## Saan ito tumatakbo

Tumatakbo ang TakeoffCraft sa iyong web browser. Buksan ang TakeoffCraft at handa na agad ang screen; walang kailangang i-install.

- **Nananatili sa iyong computer ang mga PDF mo.** Binubuksan ang mga ito ng browser at hindi kailanman ina-upload. Ang pag-save ay isang download.
- Gumagana ito sa kasalukuyang Chrome, Edge, Firefox at Safari. Tingnan ang [Mga browser at computer](common:browsers).
- Gumagana ito nang walang internet kapag napili mo na ang {{ui:Save for offline}} sa app bar at sinabi nitong {{ui:Offline ready}}. Tingnan ang [Pagtatrabaho offline](common:offline).
- Hindi pa available ang cloud saving. Para sa desktop app, kasama ang TakeoffCraft sa CadCraft Studio, kasama ang iba pang pitong app.

## Ang iyong unang takeoff sa sampung hakbang

Tinatalakay ng walkthrough na ito ang isang uri ng pader at ang presyo nito. Tumatagal ito ng ilang minuto sa kahit anong plano na mayroon ka.

1. Piliin ang {{ui:Open plans}} sa pangkat na {{ui:File}} ng toolbar (o pindutin ang {{key:Mod+O}}), pumili ng isa o higit pang PDF, at piliin ang Bukas. Puwede mo ring i-drop ang mga PDF kahit saan sa page.
   Lumalabas ang mga sheet sa kaliwa at bumubukas ang unang sheet sa gitna.
2. Hanapin ang nakalimbag na scale ng sheet sa title block nito o sa ilalim ng pamagat ng drawing.
3. Buksan ang listahan ng {{ui:Preset}} sa pangkat na {{ui:Scale}} at piliin ang scale na iyon, halimbawa `1/4" = 1'-0"`.
   Ang bar sa ibaba ng sheet ay nagsasabi na ngayon ng "Scale 1/4" = 1'-0"".
4. Piliin ang {{ui:Check}} (o pindutin ang {{key:D}}) at i-click ang dalawang dulo ng isang dimension na nakalimbag sa drawing.
   Ang readout sa status bar sa kaliwang ibaba ay dapat tumugma sa nakalimbag na dimension. Kung hindi, tingnan ang [Itakda ang scale](topic:set-the-scale).
5. Sa panel na {{ui:Items}} sa kanan, piliin ang {{ui:New item}}, i-type ang pangalang tulad ng `Interior wall type A`, iwanan ang uri sa {{ui:Linear (length)}}, at piliin ang {{ui:Add}}.
6. Piliin ang {{ui:Linear}} sa toolbar (o pindutin ang {{key:L}}).
7. I-click ang simula ng pader, saka ang bawat kanto sa kahabaan nito. I-double-click, pindutin ang {{key:Enter}}, o mag-right-click para tapusin ang run.
   Iginuguhit ang run sa kulay ng item, at lumalabas ang haba nito sa tabi ng item.
8. Sa item editor sa ilalim ng {{ui:Items}}, i-type ang `9'-0"` sa {{ui:Height}}, `0.85` sa {{ui:Material $/LF}} at `1.20` sa {{ui:Labor $/LF}}.
   Ipinapakita ng talahanayang {{ui:Quantities}} sa ibaba ang haba, ang pinalawak na materyal at labor, at ang {{ui:Job total}}.
9. Piliin ang {{ui:Save takeoff}} (o pindutin ang {{key:Mod+S}}).
   Magda-download ang browser mo ng file na `.takeoff.json`. Nakalagay dito ang iyong mga item, scale at mark, at muli itong bumubukas sa parehong mga PDF.
10. Buksan ang menu na {{ui:Export}} sa toolbar at piliin ang {{ui:XLSX}} para i-download ang estimate bilang spreadsheet.

:::tip
Pindutin ang {{key:Esc}} para itigil ang ginagawa mo at bumalik sa tool na {{ui:Select}}. Binabawi ng {{key:Mod+Z}} ang anumang pagbabago.
:::

## Ano ang susunod na babasahin

- [Ang screen ng TakeoffCraft](topic:workspace) ay nagpapangalan sa bawat bahagi ng window.
- [Simulan ang takeoff at magbukas ng plan set](topic:open-plan-set) ay sumasaklaw sa maraming PDF at sa listahan ng mga sheet.
- [Gumawa ng takeoff item](topic:create-items) ay nagpapaliwanag ng mga uri, unit, waste at rate.
- [Assembly at formula](topic:assemblies) ay ginagawang studs, sheet ng board at iba pa ang iisang sukat.
- [Keyboard at mouse](topic:keyboard) ay naglilista ng bawat key.
