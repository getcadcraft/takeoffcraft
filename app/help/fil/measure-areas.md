---
title: Sukatin ang mga area gamit ang cut-out
summary: Balangkasin ang mga sahig, kisame at slab, gupitan ng butas, magdagdag ng kurbadong gilid, bilog at round cut-out, at basahin ang area at perimeter.
keywords: room fill, flood fill, paint bucket, i-click sa loob ng room, auto area, back-out, backout, column, shaft, deduct mula sa maraming item, area, polygon, outline, square feet, sf, cut-out, butas, deduct, circle, bilog, round, arc, perimeter, sahig, kisame, slab
from: 34648db7
---

Sinusukat ng area item ang nakapaloob na area. Maaaring gupitan ng butas ang bawat outline (isang shaft, column, planter), at maaaring tuwid o kurbado ang mga gilid nito.

Bago ka magsimula: kailangan ng sheet ng scale ([Itakda ang scale](topic:set-the-scale)) at kailangan mo ng area item ([Gumawa ng takeoff item](topic:create-items)).

## Balangkasin ang area

1. I-click ang area item sa ilalim ng {{ui:Items}}.
2. Piliin ang {{ui:Area}} sa toolbar, o pindutin ang {{key:A}}.
3. I-click ang bawat sulok ng kuwarto o slab nang sunud-sunod. Hawakan ang {{key:Shift}} para sa mga gilid na 0°, 45° at 90°.
   Mula sa ikatlong point, pupunan ang outline at ipapakita ng status bar ang "Lawak" at "perimeter". May lumalabas na maliit na singsing sa paligid ng unang point.
4. Isara ang outline: i-click ang unang point (sa loob ng singsing nito), pindutin ang {{key:Enter}}, mag-double-click, o mag-right-click.
   Pinupuno nang bahagya ang area ng kulay ng item, may label ng square feet nito, at ito na ang napiling mark.

Inaalis ng {{key:Backspace}} ang huling sulok; itinatapon ng {{key:Esc}} ang outline.

Tinatanggihan ang outline na nagsasalubong sa sarili nito: "Nagsasalubong ang outline sa sarili nito, kaya mali ang area nito. Iguhit itong muli nang walang nagsasalubong." Sa halip, iguhit ang hugis figure-eight bilang dalawang area.

## Mga kurbadong gilid

Habang nagbabalangkas, i-on ang arc mode ({{ui:Arc}} o {{key:R}}). Pagkatapos ng isang sulok, i-click ang isang point sa kahabaan ng kurba, pagkatapos kung saan magtatapos ang kurba. Para isara ang outline gamit ang kurba, gawin ang huling click na iyon sa unang point. Ginagamit ng area at perimeter ang eksaktong kurba. Pindutin muli ang {{key:R}} para sa tuwid na gilid. Para baguhin ang kurba pagkatapos, piliin ang area at i-drag ang bilog na handle sa gitna ng arc. Tingnan ang [Sukatin ang linear runs](topic:measure-linear#arcs-and-curved-walls).

## Isang bilog

1. Gamit ang area item, piliin ang {{ui:Circle}} o pindutin ang {{key:O}}.
2. I-click ang center.
3. I-click ang anumang point sa gilid.
   Habang gumagalaw ka, ipinapakita ng status bar ang radius at area. Idinadagdag ang bilog bilang area mark na may eksaktong area at perimeter.

## Punan ang room sa isang click

Kapag nakaguhit ang mga room bilang saradong pader, kinukuha ng {{ui:Room}} ({{key:B}}) ang isang floor sa isang click:

1. Pumili ng area item (halimbawa floor finish) at bigyan ang sheet ng scale nito.
2. Piliin ang {{ui:Room}} sa grupong {{ui:Takeoff}}, o pindutin ang {{key:B}}.
3. I-click sa loob ng room, sa bukas na sahig (hindi sa linya o label).

Binabasa ng TakeoffCraft ang mga linya ng sheet, hinahanap ang espasyo sa paligid ng click at binabalangkas ito sa kahabaan ng loob ng mga pader, bilang area ng kasalukuyang item. Itinuturing na sarado ang mga pagbubukas ng pinto hanggang **4'-0"**, kaya tuwid na dumadaan ang outline sa pinto; binabago ng **Mga setting › TakeoffCraft › Room fill nagsasara ng mga opening hanggang** ang lapad na iyon (3'-0" hanggang 8'-0"). Hindi gumagawa ng butas ang mga pangalan ng room, kasangkapan at fixture sa loob ng room.

Tumatanggi ito at sinasabi kung bakit kapag:

- nasa linya ang click: "Nasa linya iyon";
- hindi sarado ang espasyo dahil lumalabas ito sa gilid ng sheet, mas malapad ang opening kaysa sa setting. Itaas ang setting, o balangkasin nang mano-mano ang room na iyon gamit ang {{ui:Area}};
- napakaliit ng espasyo (simbolo, hindi room).

Kapag mas malapad ang pinto kaysa sa setting, tatakbo ang fill papunta sa kasunod na room at babalangkasin ang pareho nang magkasama: i-undo ({{key:Mod+Z}}), itaas ang setting, at i-click muli. Suriin ang outline gaya ng anumang area: i-drag ang mga sulok nito para ayusin. Gumagana rin ito sa scanned na sheet, pero dapat sapat ang kadiliman ng mga linya nito; maaaring hindi mapigilan ng fill ang napakagaan na kulay-abong linya.

## Gupitan ng butas ang area

1. Piliin ang {{ui:Select}} ({{key:V}}) at i-click ang area. Nagpapakita ito ng parisukat na handle sa mga sulok nito.
2. Piliin ang {{ui:Cut-out}} sa toolbar (o pindutin ang {{key:X}}), o ang {{ui:Add a cut-out}} sa ilalim ng **Selected mark**.
3. I-click ang mga sulok ng butas, sa loob ng area. Gumagana rin dito ang arc mode.
4. Isara ito gaya ng area: i-click ang unang point nito, pindutin ang {{key:Enter}}, mag-double-click o mag-right-click.
   Walang laman ang butas, at sinasabi ng status bar: "Naidagdag ang cut-out. Gumuhit ng isa pa, o pindutin ang Esc."
5. Gumuhit ng mas maraming butas sa parehong area, o pindutin ang {{key:Esc}}.

Para sa bilog na butas, piliin ang {{ui:Add a round cut-out}} sa ilalim ng **Selected mark**, i-click ang center nito, pagkatapos ang isang point sa gilid nito.

Dapat nasa loob nang buo ng area ang cut-out at hindi dapat magsalubong sa ibang cut-out. Kung hindi, tatanggihan ito ng TakeoffCraft: "Dapat nasa loob nang buo ng area ang cut-out." o "Hindi maaaring magsalubong ang mga cut-out."

Para alisin ang huling butas, piliin ang {{ui:Remove last cut-out}}.

## Mga back-out: column, shaft at opening na inaalis sa maraming item

Kabilang ang isang cut-out sa iisang area mark. Ang **back-out** ay iginuguhit nang isang beses at inaalis sa bawat area na nagsasalubong dito, para sa mga item na pipiliin mo: iguhit nang isang beses ang mga column, at sabay silang aalisin sa floor finish, sa kisame at sa slab.

1. Gumawa ng area item para sa mga ito, gaya ng "Columns".
2. Sa item settings nito, lagyan ng tsek ang **Back-out: inaalis ng mga mark nito ang kanilang area sa ibang item**. Lalabas ang listahan ng iba mo pang area item, lahat ay naka-tsek: alisin ang tsek sa mga hindi dapat galawin ng back-out (halimbawa pintura sa mga pader).
3. Kunin ang takeoff ng mga column gamit ang {{ui:Area}} o {{ui:Circle}}, gaya ng dati. Naka-dash ang bawat isa.

Bawat area mark ng naka-tsek na item sa parehong sheet ay nawawalan ng bahaging sakop ng back-out: ang buong back-out kapag nasa loob ito, ang nagsasalubong na bahagi lamang kapag tumatawid ito sa gilid, at wala kapag nasa loob ng cut-out. Ipinapakita ng panel ng napiling area ang **Back-outs** at ang natitirang area. Ang dami ng item, mga formula ng assembly, gastos, 3D check view at export ay gumagamit ng natitirang area; sinasabi ng mga tala ng estimate kung gaano karami ang inalis ng mga back-out. Binibilang ng back-out item mismo ang sarili nitong area (iwanang zero ang gastos nito kung hindi mo ito pina-presyuhan).

Dapat **convex** ang back-out: isang rectangle, bilog, o anumang outline na walang papasok na sulok. Tinatanggihan ng TakeoffCraft ang hindi ganoon; iguhit ang L-shaped na shaft bilang dalawang back-out. Hindi maaaring may cut-out ang back-out, at parehong binibilang ang dalawang back-out na nagsasalubong.

Hindi nagbabago ang perimeter (`P`): inaalis lamang ng back-out ang area.

## Basahin ang area

Piliin ang area. Ipinapakita ng **Selected mark**:

| Linya | Ibig sabihin |
|---|---|
| Area | Ang netong area: outline minus cut-outs. Ito ang binibilang ng item. |
| Outline | Ang gross area sa loob ng outline (ipinapakita kapag may cut-out). |
| Cut-outs | Ilan ang butas, at ang kabuuang area nila. |
| Perimeter | Ang haba ng gilid ng outline, **dagdag** ang gilid ng bawat cut-out ("with cut-outs"). |

Sinasadyang kasama ang gilid ng cut-out sa perimeter, para sa mga bagay gaya ng edge form o base na tumatakbo rin sa paligid ng butas. Kung panlabas na gilid lang ang kailangan mo, huwag maglagay ng butas sa item na iyon, o sukatin ang panlabas na gilid bilang linear run.

Ipinapasya ng {{ui:Unit}} ng item kung paano iuulat ang kabuuan: SF, SY o m². Palaging square feet ang ipinapakita ng panel na **Selected mark** at ng status bar.

## Ayusin ang area

- **Ilipat ang sulok**: piliin ang area at i-drag ang corner handle (may handle din ang mga butas). Kung magsasalubong ang bagong hugis sa sarili nito o maitutulak palabas ang butas, ibabalik ang sulok: "The point was put back." (Ibinalik ang point.)
- **Ilipat sa ibang item**: pumili ng ibang area item sa listahang **Item** sa ilalim ng **Selected mark**.
- **Burahin**: {{key:Delete}}, ang {{ui:Delete}} sa menu na {{ui:More}} ng toolbar, o ang {{ui:Delete mark}}.

## Lalim para sa volume

Bigyan ang area item ng {{ui:Depth}} (halimbawa `0'-4"` para sa slab) at gamitin ang `A * H / 27` sa assembly component para makakuha ng cubic yards. Tingnan ang [Assemblies at mga formula](topic:assemblies).
