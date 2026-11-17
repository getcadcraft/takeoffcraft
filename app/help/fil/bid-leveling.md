---
title: Bid packages at bid leveling
summary: Hatiin ang estimate sa mga package ayon sa trade, ipadala ang scope ng bawat package sa mga subcontractor, ihambing ang mga bid na bumalik sa parehong scope, at gamitin ang napiling bid bilang presyo ng package.
keywords: bid leveling, leveling, bid package, subcontractor, sub bid, scope, plug, trade, csi division, ihambing ang bids, low bid, bid tab, bidder, award, napiling bid, gamitin ang bid, presyo ng subcontract
from: 856b3088
---

Ipinapadala ng general contractor ang scope ng bawat trade sa mga subcontractor at inihahambing ang ibinabalik nila. Ginagawa ito ng TakeoffCraft mula sa takeoff: buksan ang {{ui:Export}} › {{ui:Bid packages and leveling…}}.

## Mga package

May isang package para sa bawat CSI division na ginagamit ng iyong mga item (ang unang dalawang digit ng {{ui:CSI number}} ng item, tingnan ang [Create takeoff items](topic:create-items)). Ang mga item na walang numero ay bumubuo ng sarili nilang package. Ipinapakita ng bawat package ang mga item nito, kung ilang sheet ang kinalalagyan ng mga marka nito, at ang sarili nating gastos dito (material at labor bago ang mga markup, mula sa base bid).

Piliin ang {{ui:Scope CSV}} para i-download kung ano ang ipapadala sa subcontractor: bawat item na may CSI number, dami, unit at mga sheet kung nasaan ito. Walang presyo ito. Para sa material supplier, nasa quote request ng workbook ang listahan ng parts (tingnan ang [Export the estimate](topic:export-estimate)).

## Ilagay ang mga bid

1. Sa walang lamang row sa ilalim ng package, i-type ang pangalan ng bidder at ang halaga ng bid, pagkatapos piliin ang {{ui:Add the bid}}.
2. Kung may iniwang bahagi ng scope ang bid, buksan ang listahan ng {{ui:Left out}} nito at lagyan ng tsek ang mga item na iyon.
3. Para itama ang pangalan o halaga, i-type sa ibabaw nito sa table; inaalis ng × button ang isang bid.

Ang bawat pagbabago ay isang hakbang na kayang bawiin ng {{key:Mod+Z}}, at nase-save ang mga bid kasama ng takeoff.

## Paano nilelevel ang mga bid

Bihirang sakupin ng mga bid ang parehong scope. Pinupunan ng leveling ang bawat item na wala sa bid ng isang **plug** sa sarili nating gastos dito, para maihambing ang bawat bid sa buong package:

**Leveled = ang bid + ang mga plug**

Ang pinakamababang leveled bid ay mamarkahang **Low**; kapag magkapantay, ang unang nailagay. Ang **Against our cost** ay ang leveled bid na binawasan ng sarili nating gastos sa package: negatibo ang ibig sabihin ay mas mababa ito. Ang bid na mukhang pinakamababa ay maaaring matalo kapag naisama na ang nawawalang scope nito.

Makakakuha ang workbook ng sheet na **Bid leveling** na may bawat package na may bid: ang estimate natin, bawat bid, mga plug nito, ang leveled total at ang pagkakaiba, bilang live formulas, at kung ano ang iniwan ng bawat bid.

## Gamitin ang bid bilang presyo ng package

Piliin ang {{ui:Use}} sa isang bid at ito na ang magiging presyo ng buong package sa estimate mo: ang sariling pagpepresyo ng package (ang mga item, ang mga second condition nila at mga assembly part) ay mawawala sa job total, mananatili ang mga item bilang dami na may sarili mong rate para sa sanggunian, at isang linya, **Chosen bid**, ang magdadala ng halaga ng bid. Ang mga item na iniwan ng bid ay mananatili sa sarili mong gastos, na siya nang binilang ng leveling bilang plug. Pumili ng ibang bid, o piliin muli ang parehong bid para bawiin ito; bawat isa ay isang hakbang na kayang i-undo ng {{key:Mod+Z}}.

Sa bid summary, ang mga sub bid ay isang linya sa loob ng gastos: idinadagdag sa ibabaw nila ang overhead, profit at bond gaya ng ibang gastos; hindi kasama ang sales tax (sa material lang) at labor burden (sa labor). Ang sheet na Estimate sa workbook ay nagdadala ng napiling bid bilang sariling row, at idinadagdag ito ng markups block, gamit ang live formulas. Hindi kasama sa material list ang material ng package na naigawad na, dahil ang subcontractor ang nagbibigay nito.

Ang package sa loob ng bid area ng alternate ay hindi muling pinepresyohan: ang mga alternate at subtotal ng bid area ay gumagamit pa rin ng sarili mong presyo.

## Mga bid na dumarating sa email

Hindi mo kailangang i-type ang mga bid. Ang {{ui:Send for bids…}} sa ilalim ng package ay nagpapadala sa bawat subcontractor ng link papunta sa pahinang doon sila mag-type ng presyo para sa bawat linya; kinukuha ng {{ui:Get prices}} ang ipinadala nila at inilalagay sa table na ito. Tingnan ang [Send a package for bids](topic:bid-invitations).

:::note
Gumagana pa rin ang manu-manong pag-type ng bid, at magkatabi ang bid na in-type sa kamay at ang galing sa site. Ang mga bid na galing sa site ay may markang **web** (o **web, late** kapag dumating pagkatapos ng due time); magbabago lang ang presyo nila kapag nagpadala ng bagong bersyon ang bidder, kaya mananatili ang sarili mong pag-edit hanggang noon.
:::
