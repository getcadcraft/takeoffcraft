---
title: Keyboard at mouse
summary: Bawat key, mouse, trackpad at touch na aksyon sa TakeoffCraft, pinagpangkat, kasama ang mga pagkakaiba ng platform.
keywords: keys, shortcuts, hotkeys, keyboard, mouse, trackpad, touch, pan, zoom, wheel, right-click, double-click, space, shift, copy, paste, cut, duplicate, select all, key, shortcut, mouse, trackpad, touch, pan, zoom, wheel, right-click, double-click, space, shift, kopyahin, i-paste, cut, duplicate, piliin lahat
from: 6f2c441d
---

Gumagana ang mga letter key kapag nasa page ang pointer at hindi ka nagta-type sa field. Habang bukas ang dialog, ang sarili nitong key ang umiiral. Gumagana ang mga letter kasama o walang {{key:Shift}}.

## Mga tool

| Key | Tool |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:L}} | {{ui:Linear}} |
| {{key:A}} | {{ui:Area}} |
| {{key:O}} | {{ui:Circle}} |
| {{key:B}} | {{ui:Room}} (punan ang room ng isang click) |
| {{key:R}} | {{ui:Arc}} naka-on o naka-off (sa Linear, Area at Cut-out) |
| {{key:E}} | {{ui:Deduct}} naka-on o naka-off: ang susunod na segment ng isang run ay iginuguhit pero hindi binibilang |
| Isang digit, `@` o `#` habang nagdo-drawing | Buksan ang kahon na {{ui:Type}}: mag-type ng haba o coordinates, ang {{key:Enter}} ay naglalagay ng point ([Sukatin ang linear runs](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Cut-out}} (pumili muna ng area) |
| {{key:C}} | {{ui:Count}} |
| {{key:S}} | {{ui:Auto count}} |
| {{key:K}} | {{ui:Calibrate}} |
| {{key:D}} | {{ui:Check}} ang scale |

## Habang nagdo-drawing

| Key o aksyon | Ano ang ginagawa nito |
|---|---|
| Click | Maglagay ng point (isang tuldok, kasama ang Count). |
| {{key:P}} | Path: pumili ng buong konektadong path ng linya ng PDF, o ang outline sa paligid ng click ([Pumili ng mga linya ng PDF](topic:pick-the-lines)). |
| {{key:F3}} | I-snap sa mga linya ng drawing, naka-on o naka-off ([I-snap sa mga linya ng drawing](topic:snap-to-the-drawing)). |
| {{key:Shift}} hawak habang nagki-click | I-snap ang segment sa 0°, 45°, 90° o 135° mula sa huling point. Hindi para sa arc point o circle. |
| Double-click | Tapusin ang run, o isara ang area o cut-out. |
| {{key:Enter}} | Tapusin ang run, o isara ang area o cut-out. |
| Right-click (nang walang galaw) | Tapusin ang run, o isara ang area o cut-out. |
| I-click ang unang point | Isara ang area o cut-out (mula sa ikatlong point). |
| {{key:Backspace}} o {{key:Delete}} | Alisin ang huling point (una ang nakabinbing arc point). |
| {{key:Esc}} | I-drop ang nakabinbing arc point; pagkatapos kanselahin ang hindi tapos na markup; pagkatapos bumalik sa {{ui:Select}}. |

## Pagpili at pag-edit

| Key o aksyon | Ano ang ginagawa nito |
|---|---|
| I-click ang isang mark (tool na {{ui:Select}}) | Piliin ito at gawing kasalukuyang item nito. |
| {{key:Shift}} + click sa isang mark | Idagdag sa seleksyon, o alisin. |
| {{key:Mod+A}} | Piliin ang bawat mark sa bukas na sheet. |
| I-drag ang corner handle | Ilipat ang puntong iyon ({{key:Shift}} ay nag-snap sa 45°). Gumagana kapag isang mark ang napili. |
| {{key:Delete}} o {{key:Backspace}} | Burahin ang mga napiling mark (kapag hindi ka nagdo-drawing). |
| {{key:Esc}} | Walang piliin: i-clear ang seleksyon at ang check line. |
| {{key:Mod+Z}} | {{ui:Undo}} (I-undo). |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | I-redo. |

## Kopyahin at i-paste

| Key | Ano ang ginagawa nito |
|---|---|
| {{key:Mod+C}} | Kopyahin ang mga napiling mark, kasama ang kanilang item. |
| {{key:Mod+X}} | Cut: kopyahin ang mga napiling mark, pagkatapos burahin ang mga ito. |
| {{key:Mod+V}} | I-paste: sumusunod ang kopya sa pointer; i-click kung saan ito pupunta. |
| {{key:Mod+Shift+V}} | I-paste sa lugar: ang parehong lugar sa bukas na sheet. |
| {{key:Mod+D}} | I-duplicate ang mga napiling mark: sumusunod ang kopya sa pointer; i-click kung saan ito pupunta. |
| {{key:Esc}} | Huwag maglagay ng anuman: kanselahin ang paste o duplicate na nasa pointer. |

Ang mga letter na mag-isa ay pumipili pa rin ng tool ({{key:C}} ay {{ui:Count}}, {{key:D}} ay {{ui:Check}}, {{key:X}} ay {{ui:Cut-out}}, {{key:V}} ay {{ui:Select}}, {{key:A}} ay {{ui:Area}}); ang {{key:Mod}} lamang kasama nila ang nagko-copy at nagpe-paste. Sa text field, kinokopya at ipinapaste ng mga key na ito ang text gaya ng dati. Tingnan ang [Kopyahin, i-paste at i-duplicate ang mga mark](topic:copy-paste).

:::warning
Binubura ng {{key:Backspace}} ang napiling mark kapag hindi ka nagdo-drawing. Kung mangyari ito nang hindi sinasadya, ibinabalik ito ng {{key:Mod+Z}}.
:::

## Mga file

| Key | Ano ang ginagawa nito |
|---|---|
| {{key:Mod+O}} | {{ui:Open plans}} |
| {{key:Mod+S}} | {{ui:Save takeoff}} |

Gumagana ang dalawang ito kahit habang nagta-type ka sa field.

## View at mga sheet

| Key o aksyon | Ano ang ginagawa nito |
|---|---|
| Mouse wheel | Mag-zoom in at out sa pointer. |
| I-drag (kaliwa, gitna o kanang button) | Pan. Sa {{ui:Auto count}}, ang left drag ay gumuguhit ng search box sa halip. |
| {{key:Space}} hawak + drag | Pan, sa anumang tool. |
| {{key:F}} | {{ui:Fit page}} |
| {{key:W}} | {{ui:Fit width}} |
| {{key:Plus}} o {{key:=}} | Mag-zoom in sa gitna ng view. |
| {{key:Minus}} | Mag-zoom out sa gitna ng view. |
| {{key:PageDown}} / {{key:PageUp}} | Susunod o nakaraang sheet sa listahan ng sheet. |
| {{key:Ctrl+Shift+F}} | Ikot sa mga full screen mode (Control sa bawat platform, pati sa Mac). |
| {{key:F1}} | Buksan o isara ang help na ito, isang panel sa gilid. |
| {{key:3}} | Ang 3D check view ng sheet, naka-on o naka-off. |

## 3D view

| Key o aksyon | Ano ang ginagawa nito |
|---|---|
| I-drag, o i-drag gamit ang middle button | Orbit. |
| {{key:Shift}} + drag, o i-drag gamit ang right button | Pan. |
| Mouse wheel | Mag-zoom sa pointer. Sa trackpad, ang two-finger swipe ay nag-o-orbit at ang pinch ay nag-zoom. |
| Click | Piliin ang mark sa ilalim ng pointer ({{key:Shift}} + click ay nagdadagdag o nag-aalis). |
| {{key:F}} o {{key:W}} | Zoom extents. |
| {{key:3}} | Bumalik sa flat na sheet. |

Tingnan ang [Suriin ang takeoff sa 3D](topic:check-in-3d).

## Auto count

| Key o aksyon | Ano ang ginagawa nito |
|---|---|
| I-drag ang isang box | I-box ang simbolong hahanapin (sinisimulan ang paghahanap). |
| I-click ang match box | Tanggihan ito, o ibalik. |
| {{key:Esc}} | Kanselahin ang tumatakbong paghahanap, o itapon ang review. |

## Help

| Key | Ano ang ginagawa nito |
|---|---|
| {{key:F1}} | Buksan o isara ang help panel (gayundin ang button na {{ui:Help}} sa app bar). Gumagana ito sa bawat tool, kahit habang nagta-type sa field. |
| {{key:Esc}} | Isara ang help panel. Sa search box nito, ang unang Esc ay nag-aalis ng search. Habang bukas ang panel, ang Esc na pinindot pagkatapos i-click ang sheet ay unang nagsasara ng panel; pindutin ulit para kanselahin sa TakeoffCraft. |

:::mac
Sa maraming Mac keyboard, kinokontrol ng top row ang liwanag at tunog. Pindutin ang fn kasama ang F1, o i-on ang "Use F1, F2, etc. keys as standard function keys" sa System Settings, sa ilalim ng Keyboard.
:::

## Mga dialog at field

| Key | Ano ang ginagawa nito |
|---|---|
| {{key:Enter}} | Sa field: ilapat ang value. Sa calibrate dialog: {{ui:Set the scale}}. |
| {{key:Esc}} | Isara ang dialog (bilang {{ui:Cancel}}); isara ang form ng {{ui:New item}}. |
| {{key:Tab}} | Lumipat sa susunod na field. |

## Mga tala sa platform

:::mac
- Ang {{key:Mod}} ay ang Command key: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Ang full screen ang eksepsyon: Control+Shift+F.
- Ang right-click ay two-finger click sa trackpad, kapag naka-on na ang secondary click sa System Settings, sa ilalim ng Trackpad. Binabasa ng TakeoffCraft ang secondary button lamang; ang Control-click ay maaaring mabilang bilang simpleng click at magdagdag ng point.
- Ang dalawang daliring nag-scroll sa trackpad ay nag-zoom sa sheet (hindi nila ito ini-scroll). Para mag-pan, pindutin at i-drag, o hawakan ang Space at i-drag.
- Ang Page Up at Page Down ay fn kasama ang up at down arrow sa keyboard na walang mga ito.
- Ang Backspace ang key na may label na delete.
:::

:::windows
- Ang {{key:Mod}} ay Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Sa touchpad ng laptop, ang two-finger scroll ay nag-zoom sa sheet. Para mag-pan, pindutin at i-drag.
:::

:::linux
- Ang {{key:Mod}} ay Ctrl. Ang ilang desktop ay may sariling shortcut na Ctrl+Alt o Super; wala sa mga iyon ang ginagamit ng TakeoffCraft.
- Sa touchpad, ang two-finger scroll ay nag-zoom sa sheet. Para mag-pan, pindutin at i-drag.
:::

:::touch
Binabasa ng TakeoffCraft ang touch bilang isang pointer:

- Ang tap ay naglalagay ng point, pumipili ng mark o nagdadagdag ng count dot.
- Ang pag-drag gamit ang isang daliri ay nag-pan sa sheet (sa {{ui:Auto count}} ay gumuguhit ito ng search box).
- Hindi pa suportado ang pinch-to-zoom. Gamitin ang {{ui:Fit page}} at {{ui:Fit width}}, o ang {{key:Plus}} at {{key:Minus}} sa keyboard.
- Para isara ang area, i-tap ang unang point nito. Para tapusin ang run, mag-double-tap kung saan ginagawang double-click ng browser ang double tap, o pindutin ang {{key:Enter}} sa keyboard.
- Walang live na pagbasa ng haba hanggang mag-tap ka, dahil walang hover.

Ang keyboard at mouse o trackpad ang mas mainam na paraan ng takeoff sa ngayon.
:::

## Mga key na pinapanatili ng browser

Pinapanatili ng mga browser ang ilang shortcut para sa sarili nila, at hindi ito magagamit ng page: pagsara ng tab ({{key:Mod+W}}), bagong tab o window ({{key:Mod+T}}, {{key:Mod+N}}), at browser zoom ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Kaya nag-zoom ang TakeoffCraft sa sheet gamit ang wheel at ang mga bare na {{key:Plus}} at {{key:Minus}} key. Kung napindot mo ang {{key:Mod+Plus}} nang hindi sinasadya, lalaki ang buong page; ibinabalik ito ng {{key:Mod+0}}. Tingnan ang [Keys, mice and trackpads](common:keys).

## Nasaan ang Move

Walang command na Move: pumili ng count dot at i-drag ito, o pumili ng area o linya at i-drag ang mga corner handle nito.
