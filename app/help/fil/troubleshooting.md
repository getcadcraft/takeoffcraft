---
title: Pag-troubleshoot
summary: Mga sintomas, sanhi at ayos para sa mga mensahe at sorpresang maaari mong makita sa TakeoffCraft, nakasulat gaya ng ipinapakita ng app.
keywords: problema, error, hindi gumagana, ayos, tulong, tinanggihan, hindi makasukat, walang scale, nawawalang mark, nabigo ang export, offline, touch
from: cd319c9b
---

Ipinapaliwanag ng TakeoffCraft ang karamihan sa mga pagtanggi sa status bar sa ibaba ng window. Hanapin ang mensahe sa ibaba.

## Pagbubukas ng file

| Mensahe o sintomas | Sanhi | Ayos |
|---|---|---|
| Hindi na-load ang PDF reader. I-reload ang page para subukan muli. | Hindi na-load ang PDF reader ng app, kadalasan dahil offline ka at hindi kailanman na-save ang app para sa offline na paggamit. | Kumonekta muli at i-reload. Pagkatapos, piliin ang {{ui:Save for offline}} at hintayin ang {{ui:Offline ready}}; tingnan ang [Pagtatrabaho offline](common:offline). |
| (name) ay protektado ng password. Magbukas ng kopyang walang proteksyon. | Kailangan ng password ang PDF para mabuksan. | Humingi ng kopyang walang proteksyon, o alisin ang password sa isang PDF program na pinagkakatiwalaan mo. |
| Hindi mabasa ang (name) bilang PDF (…) | Sira ang file o hindi talaga PDF. | I-download muli, o i-save muli mula sa program na gumawa nito. |
| Bukas na ang (name). | Bukas na ang parehong PDF (parehong nilalaman). | Wala kang kailangang gawin. |
| Nagbubukas ang TakeoffCraft ng mga PDF at .takeoff.json project. Nilaktawan: … | Inalis ang ibang uri ng file. | I-convert muna ang mga drawing sa PDF. |
| Walang nangyayari kapag nag-drop ako ng mga file | Na-drop ang mga file sa labas ng browser window, o binuksan ng browser ang PDF sa bagong tab. | I-drop sa mismong TakeoffCraft page; makikita sa frame na "I-drop ang mga PDF o .takeoff.json" kung kailan ito gagana. |
| Matagal bumukas ang malaking set | Binabasa nang buo ang bawat PDF para ma-fingerprint ito. | Hintayin mawala ang mensaheng "Opening (name)…". Lumilitaw ang mga thumbnail habang nag-i-scroll ka. |

## Pagsukat

| Mensahe o sintomas | Sanhi | Ayos |
|---|---|---|
| Magbukas muna ng PDF. | Walang bukas na sheet. | Magbukas ng PDF. |
| Walang scale ang sheet na ito kaya hindi ito masusukat. Pumili muna ng preset na scale o mag-calibrate (gumagana ang bilang nang wala nito). | Kailangan ng scale ng linear, area, circle at cut-out na tool. | [Itakda ang scale](topic:set-the-scale). |
| Gumawa muna ng linear item (pangalanan ito sa ilalim ng Items), saka mag-click sa sheet. | Walang item ng ganoong uri. | Punan ang {{ui:New item}} form na bumukas, at piliin ang {{ui:Add}}. |
| Pumili muna ng item na kukunin ang dami (Items panel). | Nabura ang kasalukuyang item. | I-click ang isang item sa ilalim ng {{ui:Items}}. |
| Kailangan ng hindi bababa sa dalawang punto ang run. | Natapos mo pagkatapos ng isang click. | Mag-click ng hindi bababa sa dalawang punto. |
| Kailangan ng hindi bababa sa tatlong punto ang area. | Kulang ang mga sulok. | Mag-click ng hindi bababa sa tatlong sulok. |
| Nagsasalubong ang outline sa sarili nito, kaya mali ang lawak nito. Iguhit itong muli nang walang nagsasalubong. | Hugis figure-eight. | Iguhit ito bilang dalawang area, o ikutin nang maayos ang gilid. |
| Ang mga punto ay hindi bumubuo ng area. | Lahat ng punto ay nasa iisang linya. | Mag-click ng mga sulok na bumubuo ng espasyo. |
| Pumili muna ng area mark (gamit ang {{ui:Select}} tool), saka piliin ang {{ui:Cut-out}} at iguhit ang butas sa loob nito. | Kailangan ng napiling area ang {{ui:Cut-out}}. | Pindutin ang {{key:V}}, i-click ang area, saka {{key:X}}. |
| Dapat nasa loob ng area nang buo ang cut-out. | Tumatawid o lumalabas sa outline ang butas. | Iguhit ang butas sa loob ng area. |
| Hindi maaaring mag-overlap ang mga cut-out. | Nag-overlap ang dalawang butas. | Iguhit ang isang butas sa paligid ng dalawa, o panatilihing hiwalay ang mga ito. |
| … Ibinalik ang punto. | Ang hinilang sulok ay gagawing tatawid ang outline sa sarili nito, o itutulak ang butas palabas. | I-drag sa lugar na nagpapanatiling wasto ang hugis. |
| Mag-click ng punto sa gilid ng bilog, malayo sa sentro nito. | Masyadong malapit sa sentro ang pangalawang click. | Mag-click nang mas malayo. |
| Nagpa-pan ang mga click sa sheet sa halip na magdagdag ng punto | Gumalaw nang higit sa ilang pixel ang pointer habang nakapindot ang button; bilang itong drag. | Mag-click nang hindi gumagalaw, lalo na sa trackpad. |
| Hindi nagsa-snap ang Shift | Naglalagay ka ng punto sa arko, o gumuguhit ng bilog. | Para sa tuwid na segment lang ang 45° snap. |
| Tumatalon ang mga punto sa kalapit na linya | Naka-on ang snap sa mga linya ng drawing. | Mag-zoom in para mag-click sa pagitan ng mga linya, o pindutin ang {{key:F3}} para i-off ang Snap. |
| Walang lumalabas na snap marker | Naka-off ang Snap, scan ang sheet, o hindi nagsa-snap ang tool (Count, Auto count, pag-paste). | Pindutin ang {{key:F3}}; sa scan ay walang linyang mapag-snapan. |
| Mali ang haba | Mali ang scale (madalas na PDF na ni-resize na may preset). | Gamitin ang {{ui:Check}} sa kilalang dimensyon, saka {{ui:Calibrate}}. |

## Scale

| Mensahe o sintomas | Sanhi | Ayos |
|---|---|---|
| Pumili ng dalawang punto na mas malayo ang pagitan. | Halos magkapatong ang mga calibration point. | Mag-calibrate sa mas mahabang dimensyon. |
| Mensahe sa calibrate dialog, gaya ng "Hindi mabasa ang distansyang iyon" | Nasa anyong hindi mabasa ng TakeoffCraft ang distansya. | Tingnan ang [Pagpasok ng haba, rate at porsyento](topic:entry-formats). |
| Walang scale ang sheet na ito kaya walang masusuri. I-calibrate ito, o pumili ng preset. | {{ui:Check}} sa sheet na walang scale. | Magtakda muna ng scale. |
| Naka-gray out ang listahan ng {{ui:Preset}} | Walang bukas na sheet. | Magbukas ng PDF. |

## Dami at formula

| Mensahe o sintomas | Sanhi | Ayos |
|---|---|---|
| Kulang: … (hindi kasama sa kabuuan) | Error sa formula, o mga mark sa sheet na walang scale. | Tingnan ang [Basahin ang dami at estimate](topic:read-quantities#the-incomplete-warning). |
| +(n) na walang scale sa tabi ng isang item | Ang ilan sa mga mark nito ay nasa sheet na walang scale. | Bigyan ng scale ang mga sheet na iyon. |
| Error sa formula: … | Hindi makalkula ang formula. | Tingnan ang [Wika ng formula](topic:formulas#errors). |
| May mark ang item na ito, kaya hindi mababago ang uri nito. | Naka-lock ang uri kapag may mark na. | Gumawa ng bagong item ng ibang uri at iguhit muli ang mga mark gamit ito. |
| Kailangan ng pangalan ang item. | Nabura ang laman ng name field. | I-type ang pangalan. |
| I-type ang halagang gaya ng 12.50. / I-type ang porsyentong gaya ng 10 o 7.5. | Hindi mabasa ang rate o waste. | Tingnan ang [Pagpasok ng haba, rate at porsyento](topic:entry-formats). |
| Parang doble ang kabuuan | May sariling rate at component ang item na nagdadala ng parehong gastos. | Itakda sa 0 ang sariling rate ng item kapag ang mga component ang nagdadala ng gastos. |
| Nasa mga PDF na hindi bukas ang mga mark ng item na ito. | Nag-click ka sa item na ang lahat ng mark ay nasa mga PDF na hindi mo pa nabubuksan. | Buksan ang mga PDF na iyon; nakalista ang pangalan nila sa ilalim ng {{ui:Sheets}}. |

## Auto count

| Mensahe o sintomas | Sanhi | Ayos |
|---|---|---|
| Masyadong maliit ang kahong iyon. Iguhit ito sa paligid ng buong simbolo. | Napakaliit ng kahon. | Mag-zoom in at kahunan ang buong simbolo. |
| Halos walang laman ang kahong iyon. Iguhit ito sa paligid ng simbolo. | Papel lang ang laman ng kahon. | Kahunan ang mismong simbolo. |
| Walang tugma. Ibaba ang match slider, o kahunan nang mas mahigpit ang simbolo. | Walang nakakuha ng sapat na iskor. | Kahunan nang mahigpit ang simbolo, o i-drag pababa ang {{ui:Match}} slider. |
| Sobrang dami ng tugma, kasama ang maling simbolo | Malapit ang iskor ng mga katulad na simbolo sa totoo. | Itaas ang {{ui:Match}} slider at i-click ang mga maling kahon para tanggihan ang mga ito. |
| Kulang ang mga tugma sa ibang sheet | Iba ang laki ng simbolo sa mga sheet na iyon, o nasa anggulong hindi 90° step. | Hanapin ang mga sheet na iyon gamit ang kahong iginuhit doon, o bilangin nang manual. |
| Masyadong malaki ang (n) sheet para hanapin sa laking ito ng simbolo. | Masyadong malaki ang sheet sa karaniwang laki ng trabaho. | Kahunan ang mas malaking simbolo, o bilangin nang manual ang sheet na iyon. |
| Nabigo ang paghahanap: … | Huminto ang paghahanap sa background. | Subukan muli; i-reload ang page kung paulit-ulit (i-save muna). Offline, gumagana lamang ito kapag lumitaw na ang {{ui:Offline ready}} sa app bar. |
| Gumuguhit ng kahon ang pag-drag sa halip na mag-pan | Ganito gumagana ang {{ui:Auto count}}. | Pindutin nang matagal ang {{key:Space}} at i-drag, o i-drag gamit ang middle button. |

## Pag-save at pag-export

| Mensahe o sintomas | Sanhi | Ayos |
|---|---|---|
| Wala pang iluluwas: gumawa ng item at kunin ang dami nito. | Walang item. | Gumawa muna ng item. |
| Wala pang mark sa mga bukas na PDF. | Walang maiguguhit ang {{ui:Marked PDF}} sa mga bukas na PDF. | Magbukas ng mga PDF na may mark. |
| Protektado ng password o naka-encrypt ang PDF na ito, kaya hindi masusulat ang kopyang may mark. … | Naka-encrypt ang PDF. | I-export ang {{ui:XLSX}} sa halip, o gumamit ng hindi naka-encrypt na kopya ng PDF (kailangan nito ng sarili nitong takeoff, dahil iba itong file). |
| Hindi masulat ang marked PDF: … | Kadalasan: offline, at hindi na-save ang app para sa offline na paggamit, kaya nawawala ang PDF writer. | Kumonekta sa internet at piliin muli ang {{ui:Marked PDF}}. Para maiwasan ito, piliin ang {{ui:Save for offline}} at hintayin ang {{ui:Offline ready}}. |
| Isang marked PDF lang ang na-download | Hinarang ng browser ang sabay-sabay na download. | Payagan ang maraming download para sa site na ito, saka mag-export muli. |
| (file) ay hindi TakeoffCraft project (hindi ito valid na JSON). / Hindi ito TakeoffCraft project file. | Maling file, o sira ito. | Piliin ang `.takeoff.json` file. |
| Na-save ang project na ito ng mas bagong TakeoffCraft. Buksan ito doon. | Galing ang file sa mas bagong build. | Buksan ito sa mas bagong build. |
| Nasira at inalis ang (n) mark. | Nasira o binago nang manual ang bahagi ng file. | Nabuksan ang natitira. Iguhit muli ang mga nawawalang mark, o buksan ang mas lumang kopya. |
| Nawawala ang mga mark pagkatapos buksang muli | Hindi bukas ang mga PDF, o may nagbago sa isa sa mga ito. | Tingnan ang [I-save at buksang muli ang takeoff](topic:save-and-reopen#when-a-pdf-has-changed). |
| Tinatanong ng browser ang "Leave site?" | May mga hindi pa na-save na pagbabago. | Manatili, at i-save gamit ang {{key:Mod+S}}. |

## Mga key at mouse

| Sintomas | Sanhi | Ayos |
|---|---|---|
| Walang epekto ang mga letter key | Nasa field ang cursor (search, item editor, table). | I-click ang sheet, o pindutin ang {{key:Tab}} para lumabas sa field. |
| Nagza-zoom ang gulong sa halip na mag-scroll | Laging nagza-zoom ang gulong sa sheet. | I-drag para mag-pan. |
| Lumaki o lumiit ang buong page | Browser zoom ({{key:Mod+Plus}} o {{key:Mod+Minus}}). | Pindutin ang {{key:Mod+0}}. I-zoom ang sheet gamit ang gulong o ang simpleng {{key:Plus}} at {{key:Minus}}. |
| Nawala ang mark nang pinindot ko ang Backspace | Binubura ng Backspace ang napiling mark kapag hindi ka gumuguhit. | Ibinabalik ito ng {{key:Mod+Z}}. |
| Hindi natatapos ng right-click sa Mac | Nagiging normal na click ang Control-click. | Gumamit ng two-finger click kapag naka-on ang secondary click, o pindutin ang {{key:Enter}}. |

## Mga touch screen

Sa touch screen:

- **Tap** ay naglalagay ng punto (o pumipili ng mark gamit ang {{ui:Select}}). Ang pag-drag gamit ang isang daliri ay nagpapa-pan.
- **Dalawang daliri** ay nagki-kurot para mag-zoom sa punto sa pagitan nila, at nagpa-pan kapag sabay silang gumalaw. Ang paglapat ng pangalawang daliri ay kakanselahin ang sinimulan ng una, kaya hindi nag-iiwan ng punto ang pinch.
- **Tapusin** ang run o outline gamit ang **long press** (ang right click), **double tap**, o ang {{ui:Finish}} sa bar sa ibaba ng sheet. Nasa parehong bar ang {{ui:Back}} (ibalik ang huling punto) at {{ui:Cancel}}. Nagsasara rin ang mga area kapag tinap ang unang punto.
- Mas malalaking target ang nakukuha ng mga daliri: nagsa-snap, nagsasara at pumipili ang mga punto mula mas malayo, at mas malaki ang mga corner handle.

Kailangan ng keyboard ang pag-type ng haba; gumagana ang on-screen keyboard kapag nakatutok ang {{ui:Type}} box.

Sa tablet, mas madali ang takeoff kapag may keyboard at mouse o trackpad.

## Pagtatrabaho offline

| Button o sintomas | Sanhi | Ayos |
|---|---|---|
| {{ui:Could not save}} | Ilang file ng app ang hindi na-download habang nagsa-save para sa offline na paggamit. | Suriin ang koneksyon mo at piliin muli ang button. |
| {{ui:Offline not available}} | Hinaharangan ng private window at ilang managed computer ang offline copy. | Gumamit ng normal na window, o ibang browser. |
| "Nagsa-save…" never starts | Offline ka; kailangan ng koneksyon sa pag-save. | I-save habang online. |
| Luma pa rin ang app pagkatapos ng update | Galing sa mas naunang araw ang offline copy. | Online, piliin ang {{ui:Offline ready}}, saka {{ui:Save again (get the newest version)}}. |
| Gusto mong mabawi ang espasyo | Mga 6 MB ang offline copy. | Piliin ang {{ui:Offline ready}}, saka {{ui:Remove the offline copy}}. |

Tingnan ang [Pagtatrabaho offline](common:offline).

## Hindi pa rin gumagana

I-reload ang page kung huminto sa pagtugon ang app. Mawawala ang takeoff mo sa pag-reload maliban kung na-save mo ito, kaya i-save muna gamit ang {{key:Mod+S}} kung kaya mo. Para sa mga tanong tungkol sa browser, tingnan ang [Mga browser at computer](common:browsers).
