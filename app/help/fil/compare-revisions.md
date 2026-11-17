---
title: Ihambing ang revised na sheet at ilipat ang takeoff
summary: Ilagay ang lumang sheet sa ibabaw ng revision nito, ihanay sila, tingnan kung ano ang nagbago, at ilipat ang takeoff sa bagong sheet kasama ang mga markang susuriin na minarkahan.
keywords: revision, revised, ihambing, overlay, luma, bago, pagbabago, addendum, bulletin, reissue, ilipat ang takeoff, transfer, dalhin, ihanay, minarkahan, suriin
from: 3a1d9fe0
---

Kapag na-reissue ang isang sheet, hindi mo na kailangang i-takeoff itong muli. Buksan ang lumang PDF at ang bago, ihambing ang dalawang sheet, at ilipat ang takeoff. Minamarkahan ng TakeoffCraft ang bawat mark kung saan nagbago ang drawing, kaya sinusuri mo ang mga iyon at itinatago ang iba.

## Ihambing

1. Buksan ang dalawang PDF: ang lumang set at ang revised ({{ui:Mga bukas na plano}}; puwedeng nasa iisang file o sa ilang file).
2. Ipakita ang **bagong** sheet.
3. Piliin ang {{ui:Ihambing}} sa sheet bar sa ilalim ng drawing.
4. Piliin ang lumang sheet sa listahan. Iminumungkahi ng TakeoffCraft ang sheet na may parehong numero sa kabilang PDF, o ang parehong page. Piliin ang **Compare**.

Nakapatong na ngayon ang lumang drawing sa bago, sa pula. Kung saan magkapareho ang dalawa, nasa ibabaw ng mga itim na linya ang mga pulang linya; kung saan magkaiba, makikita mo ang mga pulang linya lamang (inalis) at mga itim na linya lamang (idinagdag). May bar sa ilalim ng sheet na naglalaman ng mga hakbang sa ibaba; ang {{key:Esc}} o {{ui:Isara}} ay nagtatapos sa pagkukumpara.

## Ihanay

Madalas na bahagyang nailimbag nang mali ang mga na-reissue na sheet: nailipat sa page, o bahagyang iba ang laki. Kung hindi nakapatong ang pulang drawing sa itim, piliin ang **I-align sa dalawang punto** at mag-click nang apat na beses:

1. isang punto sa lumang (pulang) drawing, gaya ng gitna ng haligi o sulok ng gusali,
2. ang parehong punto sa bagong (itim) drawing,
3. pangalawang punto sa pulang drawing, malayo sa una,
4. ang parehong punto sa itim na drawing.

Gumagalaw, umiikot at nagsa-scale ang pulang drawing papunta sa itim. Sinasabi ng status bar kung gaano kalaki ang bagong drawing ("size × 1.000" kapag pareho). Mag-zoom in para sa mga pinili: mas malapit ang pag-click, mas maayos ang pagkakasya.

## Hanapin ang mga pagbabago

Piliin ang **Hanapin ang mga pagbabago**. Ihahambing ng TakeoffCraft ang tinta ng dalawang drawing: ang tintang nasa lumang sheet lamang ay nagiging pula, ang tintang nasa bagong sheet lamang ay nagiging asul, at binibilang ng status bar ang mga ito. Ang mga linyang gumalaw nang bahagya (isang re-plot) ay hindi binibilang bilang pagbabago.

Tinitingnan din nito ang bawat mark sa lumang sheet at binibilang ang mga nasa lugar kung saan nagbago ang drawing:

- isang run o area kapag nagbago ang drawing sa isa sa mga dulo o sulok nito, o kasama nito ang humigit-kumulang isang ikaanim ng haba nito;
- isang count kapag may nagbago mismo sa tabi nito.

## Ilipat ang takeoff

Piliin ang **Ilipat dito ang takeoff**. Bawat mark sa lumang sheet ay lilipat sa bago, sa pamamagitan ng alignment, sa iisang undo step. Ang mga nasa tabi ng pagbabago ay minarkahan: iginuguhit ang mga ito na may orange na halo, at ipinapakita ng sheet bar ang "(n) susuriin".

Kung walang scale ang bagong sheet, kukunin nito ang scale ng lumang sheet (inaayos kapag kinailangang i-scale ang mga drawing para mag-align). Kung may ibang scale na ito, magtatanong muna ang TakeoffCraft: susukatin ang mga nailipat na mark sa scale ng bagong sheet.

## Suriin ang mga minarkahan

1. Piliin ang "(n) susuriin" sa sheet bar. Mag-zoom ito sa susunod na minarkahang mark at pipiliin ito; sinasabi ng panel nito kung bakit ito minarkahan.
2. Ayusin ang mark kung nagbago ang drawing sa ilalim nito (i-drag ang mga sulok nito, magdagdag o magbura ng mga mark, o alisin ito muli).
3. Piliin ang **Nasuri** sa panel nito. Mawawala ang flag, at bababa ang bilang sa sheet bar.

Naka-save ang mga flag kasama ng takeoff, kaya maaari mo itong suriin sa ibang pagkakataon.

:::note
Gumagana ang pagkukumpara sa vector PDF at sa scan, dahil ikinukumpara nito ang nakaguhit. Ang scan na nakahilig o nakaunat ay maaaring mag-align nang halos lang gamit ang dalawang punto; suriin nang mata ang mas maraming mark kung ganoon.
:::
