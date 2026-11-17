---
title: Bilangin ang lahat sa set
summary: I-box ang symbol legend nang isang beses at bibilangin ng TakeoffCraft ang bawat simbolo rito sa bawat bukas na sheet sa isang takbo. Bawat bilang ay link sa sheet nito, at sinusuri mo ito bago idagdag ang anuman.
keywords: bilangin ang lahat, legend, symbol legend, buong set, bawat sheet, lahat ng sheet, bawat pinto, bawat fixture, device, schedule, simbolo, auto count, bilangin lahat, set ng mga plano, 200 sheet, antas ng match, magkamukha
from: adc99744
---

Binabasa ng {{ui:Bilangin lahat}} ang symbol legend at pagkatapos ay binibilang ang bawat simbolo rito sa bawat bukas na sheet. Ito ay {{ui:Auto count}} para sa buong legend nang sabay-sabay. Simpleng pagtutugma ng simbolo ito sa sarili mong mga sheet, hindi isang sinanay na model, at walang lumalabas sa computer mo. Suriin ang mga bilang bago mo idagdag ang mga ito: katulong ito, hindi garantiya.

## Bilangin ang isang legend

1. Buksan ang mga plano. Sapat na ang legend sa alinmang sheet: ang mga simbolo kasama ang mga pangalan sa tabi nila.
2. Piliin ang {{ui:Bilangin lahat}} sa toolbar.
3. I-drag ang box sa paligid ng legend, mga simbolo at mga pangalan. Ang titulong walang simbolo sa tabi (SYMBOL LEGEND) ay iiwan nang mag-isa.
   Inililista ng panel ang bawat simbolo kasama ang larawan nito at ang pangalang nakalimbag sa tabi. Ang pangalan ang magiging pangalan ng item, kaya palitan ito dito kung gusto mo.
4. Alisin ang tsek sa anumang simbolong ayaw mong bilangin. Ang simbolong hindi mahanap (masyadong maliit, o blangko) ay nagsasabi kung bakit.
5. Piliin ang {{ui:Bilangin sa N sheet}}. May bar na nagpapakita ng sheet na hinahanap; ang {{ui:Kanselahin}} ay humihinto sa takbo. Nananatiling magagamit ang page.

Hindi binibilang ang sariling mga simbolo ng legend sa sheet nito. Ang sheet na iginuhit sa ibang scale ay hinahanap sa scale na iyon, at nahahanap ang mga simbolo kahit naka-ikot sa anumang tamang anggulo.

## Suriin ang mga bilang

- Ipinapakita ng bawat simbolo ang kabuuan nito at, sa ilalim, isang link bawat sheet na may laman ("E-103: 4"). I-click ang isa para pumunta sa sheet na iyon. Nakakahon sa kulay ng item ang mga nahanap.
- **I-click ang box** para alisin sa bilang ang nahanap na iyon. Naka-dashed at tinatawid ito; i-click muli para ibalik.
- **Ilipat ang antas ng match** (50% hanggang 100%, nagsisimula sa antas sa iyong {{ui:Mga setting}}). Ang mas mataas ay nagpapanatili lamang ng malalapit na match. Sinasala lang ng slider ang nahanap; walang muling paghahanap.
- Maaaring tumugma sa iisang lugar ang dalawang magkamukhang simbolo (duplex at quad outlet). Kukunin ng mas magandang match ang lugar, at sinasabi ng panel kung ilang lugar ang ganoon, para masuri mo ang mga ito.
- Nilalaktawan ang sheet na masyadong malaki para hanapin sa laki ng simbolo, at sinasabi ito ng panel.

## Idagdag ang mga ito

Piliin ang {{ui:Idagdag ang N mark}}. Ang bawat simbolo ay nagiging count item na may mark sa bawat nahanap. Ang pangalang mayroon ka nang count item ay muling ginagamit (walang nadodoble kung saan nag-mark ka na nang manu-mano). Iisang hakbang ang buong takbo: binabawi ng {{key:Ctrl+Z}} ang bawat item at mark.

Ang mga tinanggap mo ay napupunta rin sa {{ui:Natutunan}}: naaalala ang mga simbolo sa file ng takeoff para sa susunod.

## Kasama ang iyong assistant

Kung pinapayagan mo ang mga assistant sa {{ui:Mga setting}}, mababasa nila ang legend (legend_open), patatakbuhin ang bilang sa background (legend_count_start, pagkatapos legend_count_status), babasahin ang mga bilang (legend_count_result), at idaragdag ang mga ito (legend_count_add, na maaaring unang magpakita ng preview ng idadagdag). Ito ang parehong takbo na nakikita mo sa panel.

## Mga simbolo sa anumang anggulo

Lagyan ng tsek ang {{ui:Mga simbolo sa anumang anggulo}} bago magbilang para mahanap din ang mga simbolong iginuhit sa anggulong hindi tamang anggulo (diagonal na wall plug, fixture na ini-ikot para sumunod sa bubong). Iikot ng paghahanap ang bawat simbolo kada 15 degree; ang bilog na simbolo ay nangangailangan pa rin ng isang paghahanap, at ang simbolong hindi bilog ay maaaring tumagal nang hanggang anim na beses. Iwan itong naka-off para sa mga planong iginuhit nang nakaayos sa tamang anggulo.

## Mabuting malaman

- Kailangan ng mga simbolong iginuhit nang kapareho ng sa legend. Okay lang ang legend na iginuhit sa ibang laki kaysa sa mga sheet kapag naitakda na ang scale ng mga sheet; kapag walang scale, hinahanap ang mga simbolo sa laki ng legend.
- Maaaring makaligtaan ang simbolong may pader o mahabang linyang dumadaan dito, dahil hindi na ito mukhang larawan ng legend. Suriin ang mga nahanap sa unang sheet bago pagkatiwalaan ang iba.
- Gumagana pa rin ang scan na walang teksto: nahahanap ang mga simbolo ayon sa kanilang mga hilera, at ikaw ang mag-type ng mga pangalan.
