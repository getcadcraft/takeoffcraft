---
title: Kumuha ng mga dami mula sa building model
summary: Buksan ang IFC model ng arkitekto, tingnan ito sa 3D, piliin ang mga pader, sahig, pinto at iba pa ayon sa uri, materyal, layer o laki, at dalhin ang kanilang bilang, haba, lawak at volume sa takeoff. Ang mas bagong kopya ng model ay nag-a-update sa parehong mga dami.
keywords: model, model takeoff, 3d view, i-click ang piyesa, hanapin ang row, materyal, layer, layer ng pader, drywall, insulation, laki ng pinto, laki ng bintana, openings schedule, csv, 3d, bim, ifc, rvt, building model, mga dami, mga pader, mga sahig, mga pinto, mga bintana, mga haligi, mga silid, ayon sa uri, ayon sa level, update, mas bagong model, design development
from: 8c4c12c9
---

Hindi mo kailangang maghintay ng susunod na set ng drawing. Kapag ipinadala ng arkitekto ang building model, buksan ito rito at kunin nang diretso mula rito ang mga dami. Binabasa ang model sa computer mo; walang ipinapadala kahit saan.

## Mga hakbang

1. Piliin ang {{ui:Model}} sa toolbar at piliin ang `.ifc` file ng model, o buksan ito gamit ang {{ui:Open plans}} tulad ng ibang file.
2. Bumubukas ang {{ui:Model takeoff}} na may isang row bawat kategorya at uri: mga pader ayon sa uri ng pader, mga sahig ayon sa uri ng sahig, mga pinto ayon sa uri ng pinto, at iba pa. Ipinapakita ng bawat row ang bilang nito at kung ano ang sinusukat ng kategoryang iyon.
3. Itakda ang {{ui:Group by}} sa {{ui:Category}} para sa mabilisang kabuuan, o sa {{ui:Category, type and level}} para hatiin ang bawat uri ayon sa palapag.
4. Alisin ang tsek sa mga row na ayaw mo. Pinapaliit ng {{ui:Find}} ang listahan. Ang pag-alis ng tsek sa row ay nagtatago rin ng mga piyesa nito sa 3D na larawan.
5. Bigyan ang model ng {{ui:Model name}} na itatago mo sa buong trabaho, halimbawa ang pangalan ng proyekto.
6. Piliin ang {{ui:Add to the takeoff}}. Bawat dami ay nagiging typed quantity sa listahan ng mga item. Pangalanan, presyuhan at ikabit ang mga assembly nito gaya ng alinmang item.

## Tingnan ang model sa 3D

Iginuguhit ng {{ui:Show the model in 3D}} ang model sa itaas ng table, na may isang kulay bawat row (ang color chip sa tabi ng pangalan ng row). I-drag para paikutin, pindutin nang matagal ang {{key:Shift}} at i-drag para ilipat, gamitin ang wheel para mag-zoom, at piliin ang {{ui:Fit}} o {{ui:Reset}} para bumalik.

- **I-click ang isang piyesa** sa larawan at mapipili ang row nito sa table, na may lahat ng piyesa ng row na iyon na naiilawan at ang iba ay maputla. I-click ulit ang parehong piyesa at, kung nasa ilang row ito (pader sa mga layer nito), mapipili ang susunod na row.
- **I-click ang isang row** sa table para maiilawan ang mga piyesa nito. I-click ulit ito, o i-click ang bakanteng espasyo sa larawan, para alisin ang ilaw.
- Hindi iginuguhit ang mga silid, dahil maitatago ng volume ng silid ang gusali.
- Ang napakalaking model ay nagtatabi lamang ng kahon para sa ilang piyesa para magkasya sa memory; sinasabi ng panel kung ilan. Hindi nagbabago ang mga numero.

Kung hindi kayang mag-draw ng 3D ng computer na ito, gumagana pa rin ang table gaya ng dati.

## Pagpangkat ayon sa materyal, layer o laki

Mayroon pang tatlong pagpipilian ang {{ui:Group by}}:

- {{ui:Category and material}}: ang pader, sahig o bubong na binubuo ng mga layer ay nagbibigay ng sariling row sa materyal ng bawat layer, kaya maaaring presyuhan nang hiwalay ang drywall, stud at insulation. Ang bahagi ng gusali na iisa ang materyal ay nakakakuha ng row ng materyal na iyon, at ang walang materyal ay nananatili sa row na tinatawag na "No material named".
- {{ui:Category and layer}}: pareho, na may kapal ng layer sa row ("Insulation, 100 mm").
- {{ui:Category, type and door or window size}}: hinahati ang mga pinto at bintana ayon sa lapad at taas nila (halimbawa 3'-0" × 6'-8" o 914 × 2,032 mm).

Para sa layer, ang lawak ay ang sariling mukha ng pader (o ang plan area o surface area ng sahig o bubong) at ang volume ay ang lawak na iyon beses ang kapal ng layer. Sinasabi ng note ng row kung ilang numero ang galing sa layer. Ang mga layer ng iisang pader ay nagdaragdag hanggang sa volume na itinatakda ng model para dito.

## I-save ang mga row o ang mga opening bilang CSV

Sine-save ng {{ui:Save rows as CSV}} ang mga row na tinikman mo, kasama ang mga unit sa bawat heading, para sa spreadsheet. Sine-save ng {{ui:Save openings schedule as CSV}} (lalabas lamang kapag may pinto o bintana ang model) ang bawat pinto at bintana ayon sa uri, level at laki kasama ang bilang nito.

## Ano ang sinusukat

| Kategorya | Mga dami |
|---|---|
| Mga pader | bilang, haba, lawak ng pader (isang mukha, ibinawas ang mga opening), volume |
| Mga sahig, slab, kisame at iba pang patong | bilang, plan area, volume |
| Mga bubong | bilang, plan area, surface ng bubong, volume |
| Mga pundasyon | bilang, plan area, volume |
| Mga haligi, biga at member | bilang, haba kasama ang member, volume |
| Mga railing, tubo, duct at cable run | bilang, haba |
| Mga hagdan | bilang, volume |
| Mga silid | bilang, floor area, volume |
| Mga pinto, bintana at lahat ng iba pa | bilang |

Kapag ang may-akda ng model ay nagtakda ng dami sa file, ginagamit ang numerong iyon. Kung hindi, sinusukat ang numero mula sa hugis ng elemento. Bawat dami ay may note na nagsasabi kung alin, at kung ilang elemento ang nagbigay ng numero.

:::note
Ang haba ng pader na sinukat mula sa hugis nito ay tumatakbo mula dulo hanggang dulo, kaya kasama sa dalawang pader na nagsasalubong sa sulok ang sulok. Kailangan ng volume ang saradong hugis: ang elementong hindi sarado ang hugis ay binibilang ngunit walang volume. Ang pader na curved o may sulok ay sinusukat bilang kalahati ng lahat ng patayong mukha nito, at sinasabi ito ng note nito.
:::

## Kapag dumating ang mas bagong model

Buksan ang mas bagong file at i-type ang parehong {{ui:Model name}}. Bago ka magdagdag ng anuman, sinasabi ng panel kung ilan ang bagong dami, ilan ang nagbago at mula ano patungo sa ano, at kung aling mga dami mula sa naunang kopya ang wala na sa model. Piliin ang {{ui:Add to the takeoff}}: ang nagbagong dami ay kukuha ng bagong numero, at mananatili ang mga pangalan, rate, waste at assembly mo. Ang mga dami na wala na sa model ay pinananatili ang lumang numero; alisin mo ang mga ito nang sarili kung inalis ng disenyo.

Ang pangalan ng uri at level ang paraan ng pagkilala sa isang dami. Kung papalitan ng arkitekto ang pangalan ng uri ng pader, lalabas ito bilang bagong dami at ilalista ang luma bilang nawala na.

## Mga file na binabasa nito

IFC file (IFC2x3, IFC4 at IFC4.3). Ang IFC file na may kalsada, riles o tulay ay nagdadala pa rin ng mga dami ng imprastruktura nito nang direkta, gaya ng dati.

Hindi binabasa ng TakeoffCraft ang mga `.rvt` file sa release na ito. Kung nagtatrabaho ang arkitekto sa Revit, humingi ng IFC export ng model (File, Export, IFC) at buksan iyon.

Hanggang 500 dami ang maaaring dalhin ng isang model sa isang pagkakataon. Kung higit pa, alisin ang tsek sa mga row o i-group ayon sa kategorya.
