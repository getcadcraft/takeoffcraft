---
title: Sukatin ang linear runs
summary: Kunin ang mga haba ng wall, piping, trim at iba pang haba bilang run, may tuwid na segment, arc, at Shift 45-degree snap.
keywords: linear, length, run, polyline, walls, pader, lf, linear feet, arc, curve, kurba, 45 degrees, ortho, snap, segments, polylength, deduct, opening, door, pinto, gap, type, typed, coordinates, distance, direct distance, polar
from: c669deff
---

Sinusukat ng linear item ang haba. Ang bawat run ay kadena ng mga point: mga tuwid na segment, at mga arc kapag na-on mo ang arc mode. Maaaring magkaroon ng anumang bilang ng run ang isang item sa anumang bilang ng sheet.

Bago ka magsimula: kailangan ng sheet ng scale ([Itakda ang scale](topic:set-the-scale)) at kailangan mo ng linear item ([Gumawa ng takeoff item](topic:create-items)).

Sa vector PDF, nagsa-snap ang iyong mga click sa mismong linya ng drawing: dulo, midpoint at intersection ([I-snap sa mga linya ng drawing](topic:snap-to-the-drawing); ina-off ito ng {{key:F3}}).

## Gumuhit ng run

1. I-click ang linear item sa ilalim ng {{ui:Items}}.
2. Piliin ang {{ui:Linear}} sa toolbar, o pindutin ang {{key:L}}.
3. I-click ang simula ng run.
4. I-click ang bawat sulok sa kahabaan nito.
   Ipinapakita ng status bar ang "Haba" (ang run hanggang ngayon, hanggang sa pointer) at ang "segment" (ang segment na iginuguhit mo), sa feet at inches.
5. Tapusin ang run: mag-double-click sa huling point, pindutin ang {{key:Enter}}, o mag-right-click.
   Iginuguhit ang run sa kulay ng item at ito na ang napiling mark. Tumataas ang haba ng item sa listahang {{ui:Items}} at sa talahanayang {{ui:Quantities}}.

Mananatiling naka-on ang tool na {{ui:Linear}}, kaya maaari mong simulan agad ang susunod na run. Pindutin ang {{key:Esc}} para bumalik sa {{ui:Select}}.

Habang nagdo-drawing:

- Inaalis ng {{key:Backspace}} (o {{key:Delete}}) ang huling point.
- Itinatapon ng {{key:Esc}} ang hindi tapos na run.
- Ang pag-drag ay nagpa-pan sa sheet at ang wheel ay nag-zoom, nang hindi nagdadagdag ng point.

:::mac
Sa Mac trackpad, ang right-click ay two-finger click (i-on ang secondary click sa System Settings, sa ilalim ng Trackpad). Binabasa ng TakeoffCraft ang secondary button lamang, kaya maaaring tanggapin ang Control-click bilang simpleng click at magdagdag ng point. Laging tinatapos ng double-click o {{key:Enter}}.
:::

:::touch
Sa touch screen, i-tap para maglagay ng point, i-drag gamit ang isang daliri para mag-pan at pinch gamit ang dalawa para mag-zoom. Tapusin sa pamamagitan ng long press, double tap, o ang {{ui:Finish}} sa bar sa ilalim ng sheet ({{ui:Back}} ang nagbabalik ng huling point). Tingnan ang [Pag-troubleshoot](topic:troubleshooting#touch-screens).
:::

## Tuwid na linya sa 45° na hakbang

Hawakan ang {{key:Shift}} habang naglalagay ng point. Ang segment mula sa huling point ay nagsa-snap sa pinakamalapit na direksyon na 0°, 45°, 90° o 135°, at pinananatili ang haba na idinrag mo rito. Pinapaalala ng status bar: "Shift snaps to 45°".

Sa arc mode, nalalapat ito sa dulo ng arc: ang chord ng arc ay nasa 45° na hakbang mula sa simula nito. Hindi kailanman nag-snap ang point na iki-click mo sa kurba.

## Arc at kurbadong wall

1. Habang nagdo-drawing ng run, ilagay ang point kung saan nagsisimula ang kurba.
2. I-on ang arc mode: piliin ang {{ui:Arc}} sa toolbar o pindutin ang {{key:R}}. Nananatiling pinindot ang button.
3. I-click ang anumang point sa kurba, kahit saan sa gitna nito.
   Idinadagdag ng status bar ang "(arc: click where it ends)" at yumuyuko ang preview sa pamamagitan ng iyong point.
4. I-click kung saan nagtatapos ang kurba.
   Naidagdag ang arc. Ang haba nito ay eksaktong haba ng arc, hindi serye ng maiikling chord.
5. I-click ang isa pang point sa susunod na kurba at ang dulo nito para magpatuloy sa pagguhit ng arc, o pindutin muli ang {{key:R}} para bumalik sa tuwid na segment.

Ang {{key:Backspace}} o {{key:Esc}} ay unang nag-aalis ng nakabinbing point sa kurba; pindutin ulit para mag-alis ng point gaya ng dati.

## I-type ang haba at coordinates

Pagkatapos ng unang point, maaari mong i-type kung saan pupunta ang susunod sa halip na i-click. I-type ang isang digit, `@` o `#`: magbubukas ang isang kahon na {{ui:Type}} sa status bar kasama ang iyong na-type. Pindutin ang {{key:Enter}} para ilagay ang point; mananatiling bukas ang kahon para sa susunod.

| I-type | Pupunta ang susunod na point |
|---|---|
| `12'6"` | 12'-6" mula sa huling point, patungo sa pointer (ituro ang direksyon, pagkatapos i-type ang haba) |
| `12'6"<45` | 12'-6" sa 45°, binibilang nang counter-clockwise mula sa kanang bahagi ng screen (`<90` ay pataas, `<-90` ay pababa) |
| `@6',-4'` | 6' pakanan at 4' pababa mula sa huling point |
| `6',4'` (o `#6',4'`) | 6' pakanan at 4' pataas mula sa unang point ng run na ito |

Ang haba ay tina-type gaya ng saanman sa TakeoffCraft ([Mga format ng entry](topic:entry-formats)): `12'-6 1/2"`, `12.5` (feet), `30"`, `3.2 m`. Ang "pakanan" at "pataas" ay ayon sa nakikita mo sa sheet, kahit naka-rotate ang PDF page.

Ang {{key:Enter}} sa walang lamang kahon ay tinatapos ang run, gaya ng {{key:Enter}} sa sheet; isinasara ng {{key:Esc}} ang kahon at itinutuloy ang run. Ang mga na-type na point ay sumusunod sa parehong patakaran ng click: deduct, arc at pagsasara ng area, lahat ay gumagana. Pareho ang kahon sa {{ui:Area}} at {{ui:Cut-out}}; pagkatapos ng center ng bilog, radius ang kinukuha nito.

## Mag-deduct ng bahagi ng run

Ang run ng wall na dumadaan sa pinto o storefront ay maaaring iguhit nang tuwid at bibilangin pa rin ang wall lamang: ang mga segment sa ibabaw ng opening ay **deduct**. Naka-dash at manipis ang mga ito, at hindi binibilang.

Habang nagdo-drawing:

1. Ilagay ang point kung saan nagsisimula ang opening.
2. Piliin ang {{ui:Deduct}} sa toolbar o pindutin ang {{key:E}}. Nananatiling pinindot ang button at sinasabi ng status bar na mga deduct ang susunod na segment.
3. I-click kung saan nagtatapos ang opening. Naka-dash ang segment; ang "Haba" sa status bar ay hindi ito kasama.
4. Pindutin muli ang {{key:E}} at magpatuloy sa kahabaan ng wall.

Pagkatapos magdrawing: piliin ang run. Sa ilalim ng **Selected mark**, may kahon na {{ui:Deduct}} ang bawat segment: lagyan ng tsek para i-deduct ang segment na iyon, alisin ang tsek para bilangin itong muli. Bawat pagbabago ay isang undo step.

Palaging nananatili ang hindi bababa sa isang segment na nabibilang sa run. Ipinapakita ng panel ang **Deducts** (ang na-deduct na haba) at **Drawn** (ang buong run); ang haba, dami ng item, wall area at gastos ay gumagamit ng haba nang walang deduct. Nag-iiwan ang 3D check view ng puwang sa wall, iginuguhit ng marked PDF ang mga deduct na naka-dash, at nakalista sa na-export na sheet na **Marks** ang mga ito.

Pinapanatili ng paglipat ng sulok ang mga deduct. Ang pagdaragdag o pag-alis ng point (sa pamamagitan ng muling pagguhit ng run) ay nagsisimula nang wala ang mga ito.

## Tingnan ang detalye ng run

Piliin ang {{ui:Select}} ({{key:V}}) at i-click ang run. Ipinapakita ng **Selected mark** sa kanan:

- ang item na kinabibilangan nito (pumili ng ibang linear item sa listahan para ilipat doon ang run),
- ang sheet,
- ang **Length** sa feet at inches at sa LF,
- ang bilang ng **Segments**, at ang **Wall area** kapag may height ang item,
- ang haba ng bawat segment, na may "(arc)" pagkatapos ng mga arc, at ang kahon nitong {{ui:Deduct}}.

Sa sheet, may label ng haba ang bawat segment ng napiling run.

## Ayusin ang run

- **Ilipat ang point**: piliin ang run, pagkatapos i-drag ang isa sa parisukat nitong corner handle. Hawakan ang {{key:Shift}} para i-snap ang inilipat na segment sa 45° na hakbang. Nananatili ang bulge ng arc.
- **Yumuko ang arc**: may bilog na handle sa gitna ng bawat arc ang napiling run. I-drag ito: dumadaan ang arc sa lugar kung saan mo binitawan, kaya lalo itong yumuyuko, bumababa, o pumupunta sa kabilang direksyon. Kapag na-drag sa tuwid na linya sa pagitan ng mga dulo nito, nagiging tuwid na segment ito. Inu-undo ito ng {{key:Mod+Z}} ("Yumuko ang arc").
- **Burahin ang run**: piliin ito at pindutin ang {{key:Delete}}, piliin ang {{ui:Delete}} sa menu na {{ui:More}} ng toolbar, o ang {{ui:Delete mark}} sa panel.
- **I-undo**: {{key:Mod+Z}}; i-redo gamit ang {{key:Mod+Y}}.

Hindi ka pa maaaring maglagay ng point sa gitna ng run. Burahin ang run at iguhit itong muli.

## Wall area

Bigyan ang linear item ng {{ui:Height}} (halimbawa `9'-0"`). Pagkatapos ay ire-report nito ang **Wall area (A)** = haba × taas, sa SF (o m² para sa metric na item), at mapupunta ang wall area sa notes column ng spreadsheet export. Gamitin ito sa mga assembly para sa board, pintura o insulation: tingnan ang [Assemblies at mga formula](topic:assemblies).
