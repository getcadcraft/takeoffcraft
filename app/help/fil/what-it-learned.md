---
title: Ang natutunan nito mula sa iyong mga takeoff
summary: Iniingatan ng TakeoffCraft ang mga simbolong kinumpirma mo gamit ang Auto count, ang iyong mga condition set, ang mga assembly na madalas mong gamitin, at ang mga pattern na inuulit mo sa bawat page, lahat sa loob ng sariling file ng takeoff. Tingnan ito, gamitin ito, burahin ito.
keywords: matuto, natutunan, pagkatuto, assistant, tandaan, simbolo, template, kapareho ng huling job, huling job, condition set, kondisyon, muling gamitin, assembly, pinakaginagamit, mungkahi, ulitin sa bawat page, bawat page, title block, pattern, clear all, kalimutan, privacy
from: 54d99e99
---

Mas bumibilis ang TakeoffCraft habang mas maraming takeoff ang ginagawa mo dito. Natututo ito **mula lang sa mga bagay na tinatanggap mo**:

- ang mga simbolong na-box mo gamit ang [Auto count](topic:auto-count) at saka idinagdag,
- ang mga condition set na isine-save mo,
- ang mga assembly na ginagamit mo (isang beses kada job),
- ang mga pattern ng marka na inuulit mo sa bawat page.

Simpleng pagtutugma lang ito sa sarili mong mga sheet, ang parehong paghahanap na pinapatakbo ng Auto count. Hindi ito isang sinanay na model. Lahat ng natututunan nito ay nakatago **sa file ng takeoff na ito** (`.takeoff.json`), at walang ipinapadala kahit saan. Para dalhin ito sa susunod na job, gamitin ang [Kapareho ng huling job](topic:what-it-learned#same-as-last-job).

Piliin ang {{ui:Natutunan}} sa toolbar (ang bombilya, katabi ng {{ui:Auto count}}) para makita ang lahat nito.

## Mga simbolo

Kapag na-box mo ang isang simbolo gamit ang {{ui:Auto count}} at pinili ang {{ui:Idagdag}}, iniingatan ang simbolong na-box mo, kasama ang match level na tinanggap mo.

- Sa {{ui:Natutunan}}, piliin ang {{ui:Hanapin sa sheet na ito}} o {{ui:Hanapin sa bawat sheet}}. Lalabas ang karaniwang review ng Auto count: i-click ang isang box para alisin ito, galawin ang slider, saka idagdag. Walang idaragdag hangga't hindi mo ginagawa iyon.
- Kapag magbukas ka ng sheet na walang natutunang simbolo, may bar sa itaas na nag-aalok ng {{ui:Hanapin …}} para dito. Itinatago ng {{ui:Hindi ngayon}} ito para sa sheet na iyon.
- Kung walang item ng ganoong pangalan ang takeoff, idinadagdag din ng pagdagdag ng mga marka ang item (isang undo step).
- Ang pagdagdag ulit ng simbolo ng parehong item ay binibilang sa simbolong alam na nito; ang simbolong magkaiba ang itsura ay itinatago bilang pangalawa.
- Tulad ng Auto count, hinahanap nito ang simbolo kahit nakahilig sa tamang anggulo at sa mga sheet na may ibang scale.

## Mga condition set

Iniingatan ng set ang mga condition ng takeoff (mga item kasama ang kanilang unit, rate, waste at assembly), nang walang marka.

1. Sa {{ui:Natutunan}}, piliin ang {{ui:I-save ang mga condition ng takeoff na ito bilang set…}} at bigyan ito ng pangalan. Ang set na may parehong pangalan ay papalitan.
2. Sa takeoff na mayroong set, ang {{ui:Idagdag}} ay naglalagay ng mga condition na wala pa roon. Ang mga condition na may parehong pangalan at uri ay hindi ginagalaw. Isang undo step ito.

## Kapareho ng huling job

Nasa file ng huling job mo ang natutunan nito. Para magsimula ng bagong job mula rito:

1. Buksan ang bagong plano, saka piliin ang {{ui:Natutunan}} › {{ui:Kapareho ng huling job…}}.
2. Piliin ang `.takeoff.json` ng huling job.
3. Lagyan ng tsek kung ano ang dadalhin: ang mga condition nito (ang mga wala pa sa takeoff na ito lang), at ang natutunan nito (mga simbolo, set, assembly, pattern). Saka {{ui:Dalhin sila}}.

Ang mga condition nito ay iniingatan din bilang set na pinangalanan sa job na iyon. Nananatili sa sarili nitong file ang mga marka at dami nito. Isang undo step ang buong proseso.

## Mga assembly na madalas mong gamitin

Ang item na may assembly ay binibilang na nagamit nang isang beses kada job kapag may dami ito at sine-save mo ang takeoff. Ang job ay ang hanay ng mga plan file na kinuhanan nito ng takeoff, kaya hindi nabibilang nang dalawang beses ang pag-save ulit ng parehong takeoff. Ang listahan sa ilalim ng {{ui:Mga assembly na madalas mong gamitin}} ay inilalagay ang mga pinakaginagamit mo sa unahan. Inaalis nito ang mga mayroon na sa takeoff na ito. Ang {{ui:Idagdag}} ay naglalagay ng isa gaya ng huling gamit mo rito, kasama ang lahat ng bahagi nito.

## Ulitin sa bawat page

Para sa mga markang pareho sa bawat page ng set, gaya ng bilang ng title block o karaniwang detalye:

1. Piliin ang mga marka sa isang sheet ([Piliin ang mga marka](topic:copy-paste#select-the-marks)).
2. Sa {{ui:Natutunan}}, piliin ang {{ui:Ulitin ang mga napiling marka sa bawat page…}}, pangalanan ang pattern, at kumpirmahin.

Inilalagay ang mga ito sa bawat iba pang bukas na page **na kapareho ang laki**, sa parehong lugar, sa isang undo step. Haba at lawak lang ang inilalagay sa mga page na may parehong scale; ang bilang ay inilalagay sa anumang page ng ganoong laki. Nilalaktawan ang page na mayroon na nito. Nananatili ang pattern, kaya ang mga page na bubuksan mo sa susunod ay makakakuha ng alok sa bar, o puwede mong gamitin ang {{ui:Ulitin sa bawat page}} sa listahan.

## Tingnan, burahin

Nakalista sa {{ui:Natutunan}} ang lahat ng natutunan. Binubura ng basurahan ang isang bagay. Binubura ng {{ui:Clear all}} ang lahat ng natutunan at hindi ginagalaw ang iyong mga item at marka. Parehong mababawi ang dalawa hanggang isara mo ang takeoff, at parehong naka-save kasama ng takeoff.

Para huminto sa pagkatuto sa isang takeoff, alisan ng tsek ang {{ui:Matuto mula sa takeoff na ito}}. Walang bagong natututunan, at nananatili ang nakalista hanggang burahin mo ito.

## Mga dapat malaman

- Nagbubukas nang normal ang mga mas lumang bersyon ng TakeoffCraft ng file na may natutunang bagay. Hindi nila pinapansin ang bahaging iyon, at inaalis nila ito kapag ini-save nila ulit ang file.
- Ang natutunang simbolo ay maliit na larawan ng na-box mo, na nakatago sa file (ilang kilobyte ang bawat isa).
- Hinahanap ang natutunang simbolo tulad ng paghahanap ng Auto count, kaya pareho ang mga limitasyon: [Auto count ng simbolo](topic:auto-count).
