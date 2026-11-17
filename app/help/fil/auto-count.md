---
title: Auto count ng isang symbol
summary: I-box ang isang symbol, hahanapin ng TakeoffCraft ang iba sa sheet na ito o sa bawat nakabukas na sheet, suriin ang mga tugma gamit ang slider, at idagdag ang mga ito sa isang hakbang.
keywords: anumang anggulo, naka-rotate, nakaikot, ibang scale, iba't ibang scale, auto count, awtomatikong bilang, paghahanap ng symbol, hanapin ang symbol, pattern, template, match, detect, count tool
from: fa68a6c1
---

{{ui:Auto count}} ay hahanapin ang bawat kopya ng symbol pagkatapos mong i-box ang isa. Susuriin mo pagkatapos ang mga tugma sa sheet at idadagdag ang mga tinatanggap mo bilang count mark. Katulong ito, hindi garantiya: laging suriin bago idagdag.

## Hanapin ang mga symbol

1. Gumawa o i-click ang count item sa ilalim ng {{ui:Items}}.
2. Magbukas ng sheet kung saan lumalabas ang symbol.
3. Piliin ang {{ui:Auto count}} sa toolbar, o pindutin ang {{key:S}}.
   Lilitaw ang isang bar sa itaas ng sheet: "I-drag ang box sa paligid ng isang symbol sa sheet na ito."
4. Para hanapin sa bawat nakabukas na sheet, hindi lang sa sheet na ito, lagyan ng check ang {{ui:Hanapin sa lahat ng nakabukas na sheet}}.
5. I-zoom para madaling makita ang symbol, pagkatapos i-drag ang box nang mahigpit sa paligid ng isang kopya nito. Isama ang buong symbol; ang blangkong papel sa paligid nito ay tatanggalin.
   Ipapakita ng bar ang "Naghahanap…" na may progress bar at button na {{ui:Cancel}}. Tumutugon pa rin ang page: puwede kang mag-zoom, mag-pan, at lumipat sa pagitan ng mga sheet. Ang pagpili ng ibang tool, o ang {{key:Esc}}, ay kakanselahin ang paghahanap.
6. Pagkatapos nito, lalabas ang mga tugma sa sheet bilang mga box sa kulay ng item, at ipapakita ng bar ang buod gaya ng "22 tugma, 19 na idadagdag (3 nabilang na). I-click ang box para tanggihan o ibalik ito."

Sa {{ui:Auto count}}, ang pag-drag sa sheet ay gumuguhit ng box imbes na mag-pan. Para mag-pan, pindutin nang matagal ang {{key:Space}} at i-drag, o i-drag gamit ang middle button.

## Suriin ang mga tugma

- **I-click ang box** para tanggihan ito. Ang tinanggihang box ay naka-dashed at may guhit. I-click ulit para ibalik.
- **Ilipat ang slider ng {{ui:Match}}** (50% hanggang 95%, nagsisimula sa 75%). Ang mas mataas ay nagpapakita lamang ng malapit na tugma; ang mas mababa ay mas maluwag na tugma. Sinasala lang ng slider ang nahanap; hindi ito naghahanap muli.
- **Nabilang na**: ang mga tugma sa lugar na mayroon nang count mark ng item na ito ay nagsisimulang tinanggihan, para walang mabilang nang dalawang beses.
- **Ibang sheet**: kapag naghanap ka sa lahat ng nakabukas na sheet, lumipat sa pagitan ng mga sheet gamit ang listahan ng sheets o ang {{key:PageDown}} at suriin ang bawat isa. Sinasabi ng buod kung ilang sheet ang may tugma.

## Idagdag ang mga ito

Piliin ang {{ui:Idagdag}}. Sinasabi ng button kung ilan, halimbawa "Idagdag ang 19 marks".
Idinaragdag ang mga count mark sa gitna ng bawat tinanggap na box: "Nadagdag ang 19 count mark sa "Duplex receptacle". Binubura ng Ctrl+Z silang lahat."

Ang buong batch ay isang undo step, kaya isang {{key:Mod+Z}} lang ang kailangan para tanggalin ito.

Para itapon ang pagsusuri nang walang idinadagdag, piliin ang {{ui:Itapon}} o pindutin ang {{key:Esc}}. Ang pagpili ng ibang tool ay itatapon din ito.

## Ano ang nahahanap at ano ang nalalampasan

Ikinukumpara ng TakeoffCraft ang drawing, bilang pixels, sa symbol na iyong na-box.

- Nahahanap nito ang symbol na naka-0°, 90°, 180° at 270°. Lagyan ng check ang {{ui:Anumang anggulo (mas mabagal)}} sa auto count bar bago mo iguhit ang box para mahanap din ito sa anumang anggulo: sumusubok ito bawat 15°, pagkatapos ay pinipino ang bawat nahanap hanggang sa degree at kalahati. Mga anim na beses itong mas matagal. Hindi nito nahahanap ang mirrored na symbol (maliban kung pareho ang itsura nito kapag mirrored).
- Kapag naka-check ang {{ui:Hanapin sa lahat ng nakabukas na sheet}}, ang sheet na may ibang scale ay hinahanap sa laki na mayroon ang symbol doon: ang fixture na iginuhit sa scale sa 1/8" plan ay kalahati ng laki nito sa 1/4" plan, at mahahanap pa rin. Hinahanap din ang ganitong sheet sa sariling laki ng box, para sa mga tag at symbol na naka-print sa iisang laki sa bawat sheet. Kailangan nito ng scale sa parehong sheet; ang sheet na walang scale ay sa laki ng box lang hinahanap.
- Ang magkakahawig na symbol ay maaaring magtugma sa isa't isa: isang duplex at quad receptacle, o dalawang fixture tag na magkaiba ng isang letra. Itaas ang slider hanggang sa tamang mga tugma na lang ang natitira, at tanggihan ang iba nang manu-mano.
- Ang symbol na tinawiran ng ibang linya, hatching o teksto ay mas mababa ang score at maaaring kailangan ng mas mababang slider setting.
- Tinatanggihan ang napakaliit na box: "Masyadong maliit ang box na iyon. Iguhit ito sa paligid ng buong symbol." Tinatanggihan din ang walang laman na box: "Halos walang laman ang box na iyon. Iguhit ito sa paligid ng isang symbol."
- Nilalaktawan ang sheet na masyadong malaki sa laki na kailangan para sa symbol na ito, at sinasabi ng buod na "Masyadong malaki ang 1 sheet para hanapin sa laki ng symbol na ito." I-box ang mas malaking symbol, o bilangin nang manu-mano ang sheet na iyon.

Kung walang nahanap, sinasabi ng status bar: "Walang tugma. Ibaba ang match slider, o i-box nang mas mahigpit ang symbol."

## Bilis at mga browser

Tumatakbo ang paghahanap sa background worker, kaya tumutugon ang page at puwede mo itong kanselahin anumang oras. Ang bawat sheet ay unang iginuguhit sa working size sa mismong page, na maaaring magdulot ng saglit na pagbagal sa napakalaking sheet. Gumagana ito sa kasalukuyang Chrome, Edge, Firefox at Safari. Mas matagal ang paghahanap sa maraming sheet; gumagalaw ang progress bar sheet by sheet. Offline, gumagana ang auto count kapag ipinapakita ng app bar ang {{ui:Handa offline}}: ang {{ui:I-save para sa offline}} ay nagpapanatili rin ng worker. Tingnan ang [Pagtatrabaho offline](common:offline).
