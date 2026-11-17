---
title: Bilangin mula sa drawing
summary: Bilangin ang mga block, bagay sa layer, o teksto nang direkta mula sa DWG o DXF: tumpak, may nested block, dynamic block variant at block array na hinahawakan, sa iisang undo step.
keywords: bilangin mula sa drawing, cad count, bilang ng block, bilangin ang mga block, insert, pangalan ng block, nested block, dynamic block, variant, minsert, array, layer, uri ng entity, bilog, teksto, attribute, tag, nakatagong layer, tumpak na bilang, paano, pinto, fixture
from: 5060e24e
---

Binibilang ng {{ui:CAD count}} sa sheet bar (ang command na **Bilangin mula sa drawing** sa ibang menu style) ang sinasabi ng DWG o DXF na naroon. Kung saan maaaring makaligtaan ng {{ui:Auto count}} ang isang simbolo o makahanap ng maling isa dahil hinahanap nito ang larawan ng simbolo, binibilang ng isang ito ang mga bagay: bawat insert ng block na pinangalanang `DOOR-36` ay isang pinto. Buksan muna ang drawing: [Magbukas ng DWG o DXF na drawing](topic:open-a-drawing).

## Bilangin ang isang block

1. Buksan ang isang sheet ng drawing. Nasa sheet bar ang {{ui:CAD count}}.
2. Piliin ito. Ipinapakita ng window ang mga block at kung ilan ang bawat isa. Maghanap ayon sa pangalan, pagkatapos pumili ng isa.
3. Suriin ang linyang nasa ilalim ng listahan: "22 found, 22 to add." (22 nahanap, 22 idaragdag.)
4. Sa ilalim ng {{ui:Idagdag sa}}, pumili ng count item, o iwan ang {{ui:Bagong count item}} at bigyan ito ng pangalan.
5. Piliin ang add button, na nagsasabi ng bilang: {{ui:Idagdag ang 22 mark}}. Lumilitaw ang mga mark sa mga insertion point ng block, at ang dami ng item ay ang bilang.

Iisang undo step ito: tatanggalin ng {{key:Mod+Z}} nang sabay ang mga mark (at ang bagong item). Tinatrato ng estimate, ng spreadsheet at ng {{ui:Marked PDF}} ang item na gaya ng alinmang count item.

### Ano ang binibilang

- **Bawat insert ng pangalan ng block**, anuman ang scale at anggulo nito, sa model space o paper space. Hindi mahalaga ang laki ng titik sa pangalan ng block.
- **Block arrays** (MINSERT): bawat kopya sa array ay isa.
- **Nested blocks.** Ang block na nakalagay sa loob ng ibang block ay binibilang sa bawat lalim. Sinasabi ng listahan ang "6 inside other blocks"; alisin ang tsek sa {{ui:Bilangin din ang mga block sa loob ng ibang block}} para bilangin lamang ang mga insert na direktang nasa drawing.
- **Dynamic blocks.** Binibilang ang dynamic block sa sarili nitong pangalan, hindi sa mga anonymous na kopya (`*U12`) na itinatago ng file. Nakalista nang hiwalay ang mga state nito ("Single 12, Double 4"): pumili ng state para bilangin lamang ang mga iyon, o {{ui:Lahat ng variant}}. Kapag hindi sinasabi ng file kung aling state ang ipinapakita ng isang kopya, nakalista ang mga iyon bilang "(hindi alam ang state)".
- **Filter ng layer.** Kung nasa maraming layer ang isang block, pumili ng isa sa ilalim ng {{ui:Sa layer}}.

### Ano ang hindi

- **Mga nakatagong layer.** Ang bagay sa layer na naka-off o frozen sa file (o itinago mo sa {{ui:Layers}}) ay hindi kasama, at sinasabi ng linya kung ilan ang mga iyon: "3 on hidden layers left out". Lagyan ng tsek ang {{ui:Bilangin din ang mga ito}} para isama ang mga ito.
- **Mga naka-link na drawing na hindi bukas** ay hindi binibilang; sinasabi ito ng window.
- **Mga bagay na eksaktong nakapatong sa isa pang kapareho nito** ay binibilang bilang dalawa (dalawang bagay sila), at sinasabi ito ng window: kadalasan ay pagkakamali sa drafting na sulit tingnan.

## Ano ang ipinapakita ng sheet na ito, o ang buong drawing

- **Ano ang ipinapakita ng sheet na ito** ay binibilang ang mga bagay na ipinapakita ng sheet: sa layout, ang mga model object sa loob ng mga viewport nito (ang layer na frozen sa viewport ay hindi binibilang doon), kasama ang sariling bagay ng layout.
- **Ang buong drawing, bawat bagay minsan** ay binibilang ang model space nang minsan, kasama ang mga mark sa Model sheet, at hindi binibilang ang mga bagay na ipinapakita ulit ng mga layout.

Ang pagbibilang sa ipinapakita ng layout at ang pagbibilang sa ipinapakita ng Model ay nagbibigay ng parehong bilang para sa parehong mga bagay; huwag idagdag ang dalawa sa iisang item.

## Bilangin muli ang mga bilang

Ang pagbibilang muli ng parehong block sa parehong item ay nagdadagdag lamang ng bago: "22 already counted." (22 nabilang na.) Ang bawat mark ay kumakatawan sa isang bagay.

## Ayon sa layer at uri

Sa {{ui:Ayon sa layer at uri}}, pumili ng layer at uri ng bagay (mga bilog, polyline, hatch…): "lahat ng bilog sa E-LITE". Lagyan ng tsek ang {{ui:Bilangin din ang mga object sa loob ng block}} para isama ang mga nasa loob ng block definition, sa bawat lugar kung saan ini-insert ang block.

## Ayon sa teksto

Sa {{ui:Ayon sa teksto}}, i-type ang teksto, gaya ng `A3`, at sabihin kung eksaktong iyon ito, naglalaman nito, o buong salita ang hanap. Binibilang ang mga text object, multileader text, at ang **mga halaga ng block attribute** (natatagpuan ang tag attribute na `ITEM = A3`); pumili ng {{ui:Sa attribute}} para bilangin ang isang attribute lamang. Nakalista ang pinakakaraniwang teksto para i-click.

## Kailan gamitin ang Auto count sa halip

Gamitin ang {{ui:Auto count}} para sa mga PDF at para sa mga simbolo sa drawing na hindi block (iginuhit nang maluwag, o na-explode). Kung iginuhit bilang block, bilangin dito.
