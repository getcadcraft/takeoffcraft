---
title: Kopyahin, i-paste at i-duplicate ang mga mark
summary: Kopyahin ang mga mark kasama ang kanilang item, i-paste kung saan ka mag-click o sa parehong lugar sa ibang sheet, i-duplicate, i-cut, burahin at piliin lahat, bawat isa ay isang hakbang na maaaring i-undo.
keywords: kopyahin, i-paste, i-cut, i-duplicate, i-paste sa lugar, clipboard, piliin lahat, alisin ang pagpili, maraming mark, karaniwang palapag, ulitin, parehong plano, ibang sheet, kopyahin ang item, i-duplicate ang item
from: e20e9024
---

Ang grupong {{ui:I-edit}} ng toolbar ay naglalaman ng {{ui:I-undo}}, {{ui:I-redo}}, {{ui:Kopyahin}} at {{ui:I-paste}}. Ang menu nitong {{ui:Iba pa}} ang may natitira, bawat isa ay may kanyang key: {{ui:I-cut}}, {{ui:Kopyahin}}, {{ui:I-paste}}, {{ui:I-paste sa lugar}}, {{ui:I-duplicate}}, {{ui:Burahin}}, {{ui:Piliin lahat}} at {{ui:Alisin ang pagpili}}. Bawat isa sa mga ito ay isang hakbang na maaaring i-undo gamit ang {{key:Mod+Z}}.

## Piliin ang mga mark

1. Piliin ang {{ui:Piliin}} ({{key:V}}) at i-click ang isang mark.
2. Pindutin nang matagal ang {{key:Shift}} at i-click ang iba pang mark para idagdag ang mga ito. Ang {{key:Shift}} + click sa napiling mark ay inaalis ito muli.
3. O pindutin ang {{key:Mod+A}} ({{ui:Piliin lahat}}) para piliin ang bawat mark sa bukas na sheet.

Kapag maraming mark ang napili, ipinapakita ng kanang panel ang **Napiling mark**: kung ilan ang bawat item, kasama ang {{ui:Kopyahin}}, {{ui:I-duplicate}}, {{ui:I-cut}} at {{ui:Burahin ang mga mark}}. Lumalabas lamang ang mga corner handle kapag isang mark ang napili. Nililinis ng {{key:Esc}} ({{ui:Alisin ang pagpili}}) ang pagpili.

## Kopyahin at i-paste kung saan ka mag-click

1. Piliin ang mga mark at pindutin ang {{key:Mod+C}} ({{ui:Kopyahin}}). Kinokopya ang mga mark kasama ng kanilang mga item, kabilang ang assembly, waste at mga gastos ng bawat item.
2. Pumunta sa sheet na gusto mo (puwede rin ang parehong sheet).
3. Pindutin ang {{key:Mod+V}} ({{ui:I-paste}}). May dashed na kopya na sumusunod sa pointer.
4. I-click kung saan ito pupunta. Ang gitna ng mga kinopyang mark ay mapupunta sa pointer.

Nagkakansela ang {{key:Esc}} at walang idinadagdag. Ang mga na-paste na mark ay napipili pagkatapos, kaya ang {{key:Delete}} o {{key:Mod+Z}} ay aalisin ulit ang mga ito.

Sa parehong takeoff, mapupunta ang mga na-paste na mark sa **parehong mga item**, kaya dadagdag ang kanilang dami sa mga item na iyon. Sa ibang takeoff (ibang tab, o pagkatapos ng {{ui:Bagong item}}), ginagamit ang item na may parehong pangalan at uri; kung wala, idaragdag ang item kasama ng assembly nito. Kung ang pangalan ay gamit na ng item ng ibang uri, ang idinagdag na item ay tatawaging "(pangalan) (kopya)".

Mapupunta ang mga na-paste na mark sa bid area na pinili sa itaas ng panel ng {{ui:Items}} (o sa wala). Tingnan ang [Mga bid area](topic:bid-areas).

## I-paste sa lugar

{{key:Mod+Shift+V}} ({{ui:I-paste sa lugar}}) ay inilalagay ang kopya sa eksaktong parehong puwesto sa bukas na sheet, ayon sa posisyon nito sa page. Gamitin ito para sa karaniwang palapag: i-takeoff ang level 2, kopyahin, buksan ang level 3, at i-paste sa lugar.

Kailangang **magkaparehong laki** ng sheet sa pinagkopyahan ang I-paste sa lugar. Sa sheet na ibang laki, sasabihin ito ng TakeoffCraft at walang ipi-paste; gamitin na lang ang {{ui:I-paste}} at mag-click. Sa sheet na pinagkopyahan, mapupunta ang kopya sa ibabaw ng mga orihinal.

## Dapat magkapareho ang scale

Nakadepende sa scale ng sheet ang mga haba at area. Ang run na sumusukat ng 10' sa 1/4" = 1'-0" ay susukat ng 20' sa sheet na 1/8" = 1'-0". Kaya ang mga run at area ay ipinapaste lamang ng TakeoffCraft sa sheet na may **parehong scale** ng sheet na pinanggalingan, at tahasang sinasabi kapag hindi ito:

- Walang scale pa ang bukas na sheet: bigyan muna ito ng isa ([Itakda ang scale](topic:set-the-scale)), saka i-paste.
- Ibang scale ang bukas na sheet: pinangalanan ng mensahe ang dalawang scale. I-paste sa sheet na may parehong scale.
- Hindi nangangailangan ng scale ang mga count: maaaring i-paste ang mga kinopyang count kahit saan.

## I-duplicate

{{key:Mod+D}} ({{ui:I-duplicate}}) ay kinokopya ang mga napiling mark at inilalagay ang kopya sa pointer kaagad; i-click kung saan ito pupunta. Walang idinadagdag hangga't hindi ka nagki-click, at walang naiiwan ang {{key:Esc}}. Hindi binabago ng Duplicate ang ipi-paste ng {{ui:I-paste}}.

## I-cut at burahin

- {{key:Mod+X}} ({{ui:I-cut}}) ay kinokopya ang mga napiling mark at binubura ang mga ito. I-paste ang mga ito kung saan sila nararapat, o i-undo ang cut.
- {{key:Delete}} o {{key:Backspace}} ({{ui:Burahin}}) ay binubura ang mga napiling mark nang hindi kinokopya ang mga ito.

## Kopyahin ang item

Ang item editor (sa ilalim ng **Items**) ay nagtatapos sa:

- {{ui:Kopyahin ang item}}: kinokopya ang item kasama ng assembly, waste at mga gastos nito, nang walang mark. Pagkatapos, nagdaragdag ang {{ui:I-paste}} ng kopya nito sa takeoff na ito, o sa iba pa.
- {{ui:I-duplicate ang item}}: nagdaragdag agad ng kopya, pinangalanang "(pangalan) (kopya)".

:::tip
Nananatili ang kopya sa computer na ito: nakatago ito sa tab na ito at sa storage ng browser, kaya maaaring i-paste ito ng ibang tab ng TakeoffCraft. Walang ina-upload, at hindi ginagamit ang system clipboard, kaya hindi ka makakapag-paste ng mga mark sa ibang programa.
:::

:::note
Galing sa isang sheet nang paisa-isa ang kopya. Ipinapaste ang mga mark nang eksakto kung ano ang mga ito: walang pag-ikot o pag-mirror ng kopya sa ngayon.
:::
