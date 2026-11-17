---
title: Gumawa ng takeoff items
summary: Gumawa ng linear, area at count items at itakda ang kanilang unit, taas o lalim, waste, at mga rate ng materyal at labor.
keywords: crew, production rate, laki ng crew, sahod, oras, man-hours, worker-hours, crew-days, labor hours, item, bagong item, condition, multi-condition, also measure, ilang uri, kuwarto, linear, area, count, unit, taas, lalim, waste, materyal, labor, rate, kulay, cost
from: 7fa5effc
---

Ang **item** ay isang bagay na sinusukat at pinepresyohan mo: uri ng pader, tapos ng sahig, kisame, pinto, light fixture. Bawat mark na iguguhit mo ay kabilang sa isang item. Tinatawag ng ibang program ang mga ito na conditions.

Bawat item ay may uri (at puwede ring tumanggap ng ibang uri ng mark, tingnan ang [Isang item, ilang uri ng mark](topic:create-items#one-item-several-kinds-of-marks)):

| Uri | Iguguhit mo | Ipinapakita nito | Mga unit |
|---|---|---|---|
| Linear | Mga tuloy-tuloy na punto | Haba, bilang ng runs, at wall area kapag may taas | LF o m |
| Lawak | Sarado na outline, may mga cut-out | Area, perimeter, bilang ng areas | SF, SY, SQ, ac, ha o m² |
| Bilang | Isang click sa bawat bagay | Ilan | EA |
| Typed quantity | Wala: ikaw ang mag-type ng quantity | Ang numerong na-type mo (o galing sa CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha o m² |

## Typed quantities (walang drawing)

May mga bagay sa estimate na hindi kailanman iginuguhit: mobilization, permit, contingency, lump-sum na subcontract, at ang cut and fill na kinuwenta ng CivilCraft. Gawin ang mga ito bilang **Typed quantity**:

1. Piliin ang {{ui:Bagong item}}, i-type ang pangalan, piliin ang {{ui:Typed quantity (walang drawing)}} at piliin ang {{ui:Idagdag}}.
2. Sa item editor, piliin ang {{ui:Unit}} (LS para sa lump sum) at i-type ang {{ui:Dami}}: `1`, `2.5` o `1,250`.
3. Itakda ang waste at mga rate gaya ng sa alinmang item. Ang mga formula ng assembly ay gumagamit ng `Q`, ang quantity, halimbawa `ceil(Q / 12)` na mga truck load.

Ang typed quantity ay walang mark at hindi ito nagpapagawang hindi kumpleto ang estimate. Kapag may bid areas ang takeoff, mayroon ding {{ui:Bid area}} ang editor: binibilang ang quantity sa area na iyon, sa mga alternate nito at sa mga kabuuan nito, gaya ng mark doon. Ang mga quantity na galing sa ibang app ay nagsasabi kung saan sila galing, tingnan ang [Earthwork at spot elevations](topic:earthwork#cut-and-fill-from-civilcraft).

## Gumawa ng item

1. Sa panel na {{ui:Items}} sa kanan, piliin ang {{ui:Bagong item}}.
2. I-type ang pangalan, gaya ng `Interior wall type A` o `Carpet tile`.
3. Piliin ang uri: {{ui:Linear (haba)}}, {{ui:Lawak}} o {{ui:Bilang}}.
4. Piliin ang {{ui:Idagdag}} (o pindutin ang {{key:Enter}}).
   Lilitaw ang item sa listahan na may sariling kulay, ito na ang item na gagamitin mo sa pagguhit, at bubukas ang editor nito sa ibaba ng listahan. Ipinapakita ng status bar kung aling tool ang susunod na piliin.

Pindutin ang {{key:Esc}} sa form para isara ito nang hindi nagdadagdag ng item.

:::tip
Kung unang pipiliin mo ang measuring tool, gagamitin ng TakeoffCraft ang huling item ng tamang uri, o bubuksan ang form na {{ui:Bagong item}} na may napiling uri na.
:::

## Piliin ang item na ginuguhitan mo

I-click ang item sa listahan. Ito ang magiging item kung saan mapupunta ang mga bagong mark, at made-highlight ang mga mark nito sa bawat sheet habang nagfa-fade ang iba. Kung walang mark ang bukas na sheet nito, tatalon ang TakeoffCraft sa sheet na mayroon. I-click ulit ang item para ihinto ang highlighting; mananatili pa rin itong item na ginuguhitan mo.

Ang pag-click sa mark gamit ang {{ui:Select}} tool ay ginagawa ring kasalukuyang item ang kabilang item.

## Itakda ang item

Ang item editor (**Item: (pangalan)**) ay may mga field na ito. Bawat isa ay sine-save kapag umalis ka sa field o pinindot ang {{key:Enter}}, at maaaring i-undo ang bawat pagbabago.

| Field | Ginagawa nito |
|---|---|
| {{ui:Name}} | Ipinapakita sa listahan, sa mga table at sa mga export. |
| {{ui:Type}} | Linear, Area o Count. Naka-lock ito kapag may mga mark na ang item ("An item with marks keeps its type"). |
| {{ui:Color}} | Ang kulay ng mga mark nito sa screen at sa minarkahang PDF. |
| {{ui:Unit}} | Ang unit ng iniuulat na quantity: LF o m para sa linear; SF, SY, SQ, ac, ha o m² para sa area; EA para sa count. |
| {{ui:Also measure}} | Ang ibang uri ng mark na tinatanggap ng item, bawat isa ay may sariling unit. Tingnan sa ibaba. |
| {{ui:Height}} (linear) | Taas ng pader. Iniuulat din ng item ang wall area (haba × taas). Ang runs na galing sa BimCraft model ay may dalang pinto at bintana: tinatanggal ang mga iyon nang isang beses, at sinasabi ng item ang gross area, ang mga opening, at ang net. Ang takeoff mula sa BimCraft project na pumili ng paraan ng pagsukat ay sinusukat din sa paraang iyon dito (sinasabi ng note ang pangalan nito, kasama ang pinagmulan, at sinasabing hindi pa ito na-check ng quantity surveyor); hindi mababago ang paraan sa TakeoffCraft. Ang bricks o blocks at mortar mula sa wall type ay dumarating bilang dalawang component: ang mga unit na oorderin at ang volume ng mortar. |
| {{ui:Depth}} (area) | Lalim o kapal, ginagamit sa assembly formula (halimbawa ang volume ng kongkreto). |
| {{ui:Waste %}} | Idinadagdag sa quantity bago presyuhan: ang 10 ay quantity × 1.10. |
| Materyal $/LF | Gastos sa materyal bawat unit. Sumusunod ang label sa unit: $/SF, $/EA at iba pa. |
| Labor $/LF | Gastos sa labor bawat unit. |
| {{ui:CSI number}} | Ang CSI MasterFormat number nito, gaya ng `09 21 16` (o division lang, `09`). Ginagampanan ng worksheet na By division ng workbook ang pagpapangkat ng gastos ayon dito. May numero na ang mga item mula sa [trade packs](topic:trade-packs). |

Ang taas at lalim ay tumatanggap ng feet at inches (`9'-0"`, `8' 6"`) o decimal na feet (`9`) para sa imperial units, at meters (`2.7`, `2700 mm`) para sa metric units. Ang mga rate ay tumatanggap ng halaga gaya ng `12.50` o `$1,250`, hanggang apat na decimal. Tingnan ang [Pagpasok ng haba, rate at porsyento](topic:entry-formats).

Sa ibaba ng mga field, ipinapakita ng **Measured** ang mga kabuuang magagamit ng formula ng item, kasama ang kanilang mga letra: Haba (L), Runs (N), Wall area (A) para sa linear; Area (A), Perimeter (P), Areas (N) para sa area; Count (N) para sa bilang.

## Isang item, ilang uri ng mark

May mga bagay na sinusukat sa higit sa isang paraan: may sahig ang kuwarto (isang area), baseboard sa kahabaan ng mga pader nito (isang haba) at mga pinto (isang bilang). Sa halip na tatlong item, gumawa ng isa:

1. Gawin ang item gamit ang pangunahing uri nito, gaya ng area item na `Room 101`.
2. Sa ilalim ng {{ui:Also measure}} sa editor nito, lagyan ng check ang {{ui:Linear}}, {{ui:Bilang}} o pareho. Bawat isa ay may unit sa tabi nito.
3. Gumuhit gamit ang alinmang tool na tinatanggap ng uri ng item: kapag kasalukuyang `Room 101`, ang {{ui:Lawak}} ay gumuguhit ng sahig nito, ang {{ui:Linear}} ng base nito, at ang {{ui:Bilang}} ng mga pinto nito. Hindi humihingi ng ibang item ang TakeoffCraft.

Ipinapakita ng listahan ng items ang bawat quantity (`50.00 SF + 2 EA`). Sa quantities table, ang row ng item ay may pangunahing quantity, at ang bawat ibang uri ay may sariling row sa ibaba, gaya ng **Room 101 (bilang)**, na may sariling waste, materyal at labor rates. Ganito rin sila nililista ng mga export, ng per-sheet table, at ng legend ng minarkahang PDF.

Nananatili sa pangunahing uri ang mga field nito: ang taas o lalim, ang pitch, ang back-out at ang 3D shape ay sa mga mark nito lang nalalapat. Ang base run na iginuhit para sa area item ay sinusukat nang payak sa plan, at lumalabas na patag sa 3D. Ginagamit ng assembly formula ang mga kabuuan ng pangunahing uri.

Maaaring alisin ang check sa isang uri lamang kapag walang mark ng uring iyon ang item; burahin muna ang mga ito, o ilipat sa ibang item sa ilalim ng **Selected mark**. Maaaring ilipat ang mga mark sa alinmang item na tumatanggap ng kanilang uri.

Sa ibaba nito ang {{ui:Assembly}}: mga component gaya ng stud o board, bawat isa ay may sariling formula at rate. Tingnan ang [Assemblies at formulas](topic:assemblies).

Sa pinakailalim: binabago ng {{ui:Ilipat pataas}} at {{ui:Ilipat pababa}} ang puwesto ng item sa listahan at sa mga export, at inaalis ng {{ui:Burahin ang item}} ang item kasama ang lahat ng mark nito (pagkatapos magtanong; puwede itong i-undo).

Ang area item ay mayroon ding **Pitch** (mga eroplano ng bubong na sinusukat sa slope: [Roofs and slopes](topic:roofs-and-slopes)) at **Back-out** (inaalis sa area ng ibang item ang mga mark nito: [Measure areas](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Ang linear item ay mayroong **Slope** (Level, Rake, Hip o valley) at, para sa rake at hip, **Pitch**.

## Mga rate sa table

Maaari mo ring i-type ang {{ui:Waste %}}, mga rate ng materyal at labor nang direkta sa {{ui:Dami}} table sa ibaba ({{ui:Ayon sa item}}). Ito ang parehong setting gaya sa editor.

## Paano gumagana ang pagpepresyo

Para sa bawat item at bawat assembly component:

1. **Kasama ang waste** = quantity × (1 + waste %).
2. **Materyal** = kasama ang waste × materyal bawat unit, binilog sa sentimo.
3. **Labor** = kasama ang waste × labor bawat unit, binilog sa sentimo.
4. **Total** = materyal + labor.

Idinaragdag ng {{ui:Kabuuang job}} ang bawat item at bawat component. Maaaring magdala ang item ng sarili nitong rate at assembly nang sabay; pareho silang binibilang, kaya iwanang 0 ang rate ng item kapag ang mga component nito ang nagdadala ng gastos.

## Labor ayon sa crew

Sa halip na labor rate bawat unit, ang labor ng item ay puwedeng galing sa crew: gaano karami ang nagagawa nito kada oras, ilan ang tao, at magkano ang kinikita ng bawat isa. Sa ilalim ng {{ui:Labor ayon sa crew}} sa item editor, lagyan ng check ang {{ui:Presyuhan ang labor mula sa crew}} at punan ang:

| Field | Halimbawa |
|---|---|
| Production | `20` LF kada oras (sa unit ng item) para sa buong crew |
| {{ui:Laki ng crew}} | `2` katao |
| {{ui:Sahod $/oras bawat isa}} | `45` |

Kinukuwenta ng TakeoffCraft, mula sa quantity na kasama ang waste:

- **crew-hours** = quantity ÷ production (110 LF ÷ 20 = 5.5),
- **worker-hours** = crew-hours × laki ng crew (11),
- **crew-days** = crew-hours ÷ 8 (0.69),
- **labor** = worker-hours × sahod ($495.00).

Ipinapakita ng editor ang resulta at ang rate na lumalabas ($4.50/LF). Read-only na ang sariling labor rate ng item, sa editor at sa table. Idinaragdag ng header ng {{ui:Dami}} table ang worker-hours at crew-days ng job. Tinatala ng mga export ang oras ng bawat crew, at sa workbook, ang labor cell ay formula sa crew (`ROUND(F2/20*2*45,2)`). Alisin ang check sa kahon para bumalik sa rate bawat unit.

## Metric items

Piliin ang m (linear) o m² (area) bilang unit. Ang mga quantity, taas at halaga ng formula ay nasa metro kung gayon. Maaaring anumang preset o calibration ang scale ng sheet; independent ang mga unit at scale.

## Susunod

- [Sukatin ang linear runs](topic:measure-linear)
- [Sukatin ang mga area na may cut-out](topic:measure-areas)
- [Bilangin nang manu-mano](topic:count-by-hand)
