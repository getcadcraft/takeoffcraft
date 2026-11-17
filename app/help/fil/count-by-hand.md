---
title: Bilangin nang manu-mano
summary: I-click ang bawat pinto, fixture o device para bilangin ito, suriin ang iyong bilang, at ayusin ang mga pagkakamali.
keywords: bilang, bawat isa, ea, fixtures, pinto, device, simbolo, tally, click count, manual count
from: 594f2980
---

Ang count item ay nagbibilang ng mga bagay: pinto, light fixture, outlet, plumbing fixture. Bawat click sa sheet ay nagdadagdag ng isang count mark. Hindi kailangan ng scale ang pagbibilang.

## Magbilang

1. Gumawa o i-click ang count item sa ilalim ng {{ui:Items}} (uring {{ui:Count}}).
2. Piliin ang {{ui:Count}} sa toolbar, o pindutin ang {{key:C}}.
3. I-click ang bawat isa sa sheet.
   Naglalagay ang bawat click ng tuldok sa kulay ng item, at tumataas ng isa ang bilang ng item.
4. Lumipat sa susunod na sheet ({{key:PageDown}}) at magpatuloy sa pagbibilang. Nananatili ang tool sa {{ui:Count}}.
5. Pindutin ang {{key:Esc}} kapag tapos ka na. Bumabalik ang TakeoffCraft sa {{ui:Piliin}}.

Gumagana pa rin ang pag-drag para mag-pan at ang wheel para mag-zoom habang nagbibilang, kaya makakagalaw ka sa paligid ng sheet nang hindi nagdaragdag ng tuldok.

:::tip
I-click ang count item para i-highlight ang mga tuldok nito sa bawat sheet. Ipinapakita ng listahan ng sheets kung ilan ang nasa bawat sheet, na nakakatulong sa paghanap ng mga sheet na hindi mo pa nabibilang.
:::

## Ayusin ang bilang

- **Mag-alis ng tuldok**: piliin ang {{ui:Piliin}} ({{key:V}}), i-click ang tuldok, at pindutin ang {{key:Delete}} o piliin ang {{ui:Burahin ang mark}}. O pindutin ang {{key:Mod+Z}} kaagad pagkatapos ng maling click.
- **Ilipat ang tuldok**: piliin ito, saka i-drag.
- **Nabilang sa maling item**: piliin ang tuldok at pumili ng tamang count item sa listahang **Item** sa ilalim ng **Napiling mark**.

## Laki ng tuldok, sa screen at sa PDF

Nananatili ang laki ng tuldok sa screen gaano man kalapit ang zoom mo. Para baguhin ito, buksan ang {{ui:Mga setting}}, ang TakeoffCraft tab, at piliin ang **Count marker size**: Extra small, Small, Medium (default) o Large.

Ang PDF export ({{ui:I-export}} › {{ui:Marked PDF}}) ay gumuguhit ng bawat tuldok sa parehong laki sa papel, anuman ang laki ng sheet: ang viewer na nagpapakita ng PDF sa 100% ay magpapakita ng mga tuldok na kasing laki ng nasa screen. Kapag magkadikit pa rin ang mga tuldok sa isang sheet, pinaliliit ng export ang mga tuldok ng sheet na iyon para mabasa ang bawat isa.

## Maraming magkakaparehong simbolo

Para sa simbolong paulit-ulit nang maraming beses sa isang sheet, subukan ang [Auto count](topic:auto-count): i-box ang isa, suriin kung ano ang nahanap nito, at idagdag silang lahat sa isang hakbang.

## Paggamit ng mga count sa formulas

Ang dami ng count item ay **N**. Puwede itong gamitin ng mga assembly component, halimbawa ang hinges na `N * 3` para sa mga pinto. Tingnan ang [Mga assembly at formula](topic:assemblies).
