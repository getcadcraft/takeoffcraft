---
title: Embodied carbon at 5D price table
summary: Pinagsasama ng Carbon ang embodied carbon ng takeoff mula sa dami ng bawat item at isang bukas na factor table, at ipinapadala ang mga rate ng takeoff sa BimCraft bilang price table para sa 5D cost.
keywords: carbon, embodied carbon, kgco2e, co2, factors, a1-a3, transport, waste, 5d, price table, cost, bimcraft, epd
from: f4bff3b8
---

Ang {{ui:Carbon}} sa toolbar ay pinagsasama ang embodied carbon ng mga nasukat mo na, at ginagawang price table ang mga rate mo na magagamit ng building model. Tinatayang halaga ito, hindi assessment.

## Embodied carbon

Ang dami ng bawat item, kasama ang waste nito, ay minamultiply sa isang row ng factor table. Tumutugma ang row sa mga salita sa pangalan ng item ("concrete slab" ay nakakahanap ng row na may keyword na concrete). Ito ang parehong bukas na table na ginagamit ng BimCraft, kaya gagana roon ang file na ilo-load mo rito. **Ang mga row na kasama ng programa ay mga panimulang halaga: pangkalahatan, hindi pa nasusuri, at hindi galing sa anumang database.** Sinasabi ito ng dialog sa tabi ng mga numero; palitan ang mga ito ng sarili mong pinagmulan bago ka umasa sa anumang numero.

1. Piliin ang {{ui:Carbon}}. Nakalista ang mga binilang na item kasama ang kilo ng CO2e ng mga ito; nasa itaas ang kabuuan.
2. Lagyan ng tsek ang {{ui:A4 transport}} o {{ui:A5 site waste}} para bilangin din ang mga yugtong iyon, para sa mga row na nagbibigay ng halaga para sa mga ito. Laging binibilang ang product stage.
3. Para gumamit ng ibang row para sa isang item, o wala, gamitin ang listahan sa linya nito.
4. Ang {{ui:Factors from a file…}} ay nag-lo-load ng factor table (JSON o CSV) na gawa mula sa sarili mong pinagmulan; pumapalit ang mga row nito sa mga panimulang row na may parehong id. Ise-save ng {{ui:Factors (JSON)}} ang sa iyo.

Bawat metro, square meter, cubic meter, item o kilogram ang factor. Ang linyang nasukat sa talampakan o square feet ay kinokonberte. Kailangan ng factor na kilogram ng volume (cubic yards o metro) at density ng row. Ang item na nangangailangan ng dami na hindi nito sinusukat ay nakalista sa ilalim ng {{ui:Left out}} na may dahilan, hindi hinuhulaan. Ipinapakita ng running total sa status bar ang parehong halaga.

Nase-save sa file ng takeoff ang sarili mong factor rows, ang mga pinili mo at ang mga yugtong binibilang mo.

## Isang price table para sa 5D cost

Ini-save ng {{ui:5D prices (JSON)}} at {{ui:5D prices (CSV)}} ang mga rate ng takeoff bilang price table: isang row bawat napresyuhang item, kasama ang material at labor rate nito bawat unit at ang waste nito. I-load ito sa cost pane ng BimCraft (Embodied carbon and 5D cost) para mapresyuhan ang mga task ng building model gamit ang parehong rate na bumuo sa bid. Ang mga item na nasukat sa unit na walang table nito, at ang mga item na walang rate, ay hindi kasama.

## Kasama ang iyong assistant

Kung pinapayagan mo ang mga assistant sa Settings, mababasa nila ang carbon (carbon_check). Ikaw ang maglo-load ng mga factor.

## Mabuting malaman

Walang ipinapadala kahit saan. Ang mga numero ay kasing-husay lamang ng mga factor na ilo-load mo.
