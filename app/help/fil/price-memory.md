---
title: "Price memory mula sa mga nakaraang trabaho"
summary: "Inaalala ng TakeoffCraft ang mga rate na ginamit mo sa mga nakaraang takeoff, sa computer na ito lang, para makapagsimula ang bagong takeoff sa kung ano ang binayaran mo noong huli. Tingnan, gamitin, kalimutan."
keywords: "price memory, presyo, tandaan ang presyo, huling trabaho, nakaraang trabaho, karaniwang presyo, median, rate, walang presyo, reprice, matuto mula sa nakaraang takeoff, kalimutan, library"
from: 7279f1a1
---

{{ui:Presyo}} sa toolbar (ang dollar sign) ay nagbubukas ng listahan ng naaalala ng TakeoffCraft tungkol sa mga presyong ginamit mo. Simpleng listahan ito: para sa bawat pangalan ng item, ang mga rate mula sa iyong mga huling trabaho. Nakatago ito sa browser na ito (sa Studio, sa sarili nitong web view) kasama ng price Library, hindi kailanman sa loob ng takeoff file, at walang ipinapadala kahit saan. Hindi ito isang trained model.

## Ano ang naaalala

Kapag nag-save ka ng takeoff, bawat item na may presyo at ginamit (may mark ito, o typed quantity na higit sa zero) ay naaalala sa ilalim ng pangalan at uri nito: material rate, labor rate, waste at unit. Ang trabaho ay ang mga plan file na kinukuhanan ng takeoff, kaya ang pag-save ulit ng parehong takeoff ay pumapalit sa sarili nitong presyo sa halip na magdagdag ng isa pang trabaho. Ang huling 12 trabaho ay itinatago para sa bawat pangalan.

Para simulan sa mga lumang gawa mo, piliin ang {{ui:Matuto mula sa nakaraang takeoff…}} at pumili ng naka-save na takeoff (.json). Ang mga item nitong may presyo at ginamit ay naaalala sa parehong paraan.

Nagtutugma ang mga pangalan kapag nagtutugma ang mga salita, anuman ang case o bantas ("2x4 Stud, 8 ft" at "2x4 stud 8 FT" ay pareho). Ang parehong mga salita para sa ibang uri ng item (isang linear item at isang count item) ay hindi parehong presyo.

## Gamitin sa bagong takeoff

1. Gawin ang mga item ng bagong takeoff.
2. Piliin ang {{ui:Presyo}}. Sa ilalim ng {{ui:Ang takeoff na ito}} makikita mo ang bawat item na may naaalalang presyo, kung ano ang nasa item ngayon, ang rate ng huling trabaho, ang karaniwang rate (ang gitna ng mga naaalalang trabaho), at ang saklaw.
3. Piliin ang {{ui:Gamitin ang huli}} o {{ui:Gamitin ang karaniwan}} sa isang item, o ang Lagyan ng presyo ang N walang presyong item mula sa memory para punan ang bawat item na wala pang presyo mula sa huling trabaho.

Isang hakbang ang bawat paggamit: binabawi ito ng {{key:Ctrl+Z}}. Kapag may item na kapareho lang ang pangalan (ang isang pangalan ay nasa loob ng isa pa), sinasabi ito, at ang mga button ay gumagamit ng mga rate ng kapareho nitong pangalan. Ang presyong naaalala na per each ay hindi kailanman inilalagay sa item na per foot: sinasabi ng dialog na magkaiba ang units at hindi ito ginagalaw.

## Tingnan, baguhin, kalimutan

{{ui:Lahat ng naalala}} ay naglilista ng bawat pangalan kasama ang mga rate at bilang ng trabaho nito. Ang trash button ay nagkakalimot ng isang pangalan; ang {{ui:Burahin lahat ng presyo}} ay kinakalimutan ang lahat. Patayin ang {{ui:Tandaan ang presyo ko kapag nag-save ako ng takeoff}} para huminto sa pag-alala; mananatili ang naroon na hanggang kalimutan mo ito. Hindi ginagalaw ang iyong mga takeoff at ang price Library.

## Sa iyong assistant

Kung pinapayagan mo ang mga assistant sa Mga setting, mababasa nila ang naaalala para sa mga item ng takeoff (prices_list), at makapagpepresyo ng mga item mula rito (prices_apply, na maaaring mag-preview muna). Ito ang parehong listahan ng dialog.
