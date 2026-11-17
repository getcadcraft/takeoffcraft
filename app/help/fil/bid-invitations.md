---
title: Magpadala ng package para sa bids
summary: Mag-email ng bid package sa mga subcontractor, hayaang mag-type sila ng presyo sa pahinang hindi nangangailangan ng account, panatilihing sealed ang mga presyo hanggang sa oras ng pagbubukas, at kunin ang mga ito sa leveling sheet.
keywords: send for bids, imbitasyon, bid invitation, bidder, subcontractor, imbitahan, email, hiling ng presyo, sealed bids, pagbubukas ng bid, araw ng bid, late bid, due date, paalala, talaan ng subcontractor, insurance, qualification, csv, connect, sheets pdf
from: fb314b2c
---

Ang {{ui:Export}} › {{ui:Bid packages and leveling…}} › {{ui:Send for bids…}} ay nagpapadala ng isang package sa mga taong pipiliin mo. Nagpapadala ang website ng link sa bawat isa sa email; magbubukas sila ng pahina, makikita ang scope, at mag-type ng presyo para sa bawat linya. Makikita mo ang mga presyo sa leveling sheet, handa nang ikumpara ([Bid packages and bid leveling](topic:bid-leveling)).

:::note
Hindi pa **bukas sa lahat** ang pagpapadala. Habang sinusubukan pa ang feature, gumagana ito para sa mga account na pinagana ng CadCraft team; kung hindi kasama ang sa iyo, sasabihin ito ng dialog. Gumagana ang pahina ng bidder para sa lahat ng imbitasyong naipadala na.
:::

## Bago ka magpadala

- Kailangan mo ng CadCraft account na may na-verify na email address. Sa browser, hihilingin ng TakeoffCraft na **Connect**: magbubukas ang isang tab sa getcadcraft.com, pipindutin mo ang Connect, at ang tab na iyon ay magkakaroon ng sign-in na gumagana nang 30 araw, para lang sa mga bid package, hanggang isara mo ang TakeoffCraft tab. Maaari mo itong alisin anumang oras sa iyong security page. Hindi pa makapagpapadala ang Studio window.
- Bigyan ng CSI number ang bawat item: ang package ay ang mga item ng iisang CSI division ([Create takeoff items](topic:create-items)).
- I-scale ang mga sheet kung nasaan ang mga marka ng package, para masukat ang mga dami na makikita ng mga bidder.

## Magpadala ng package

1. Piliin ang {{ui:Send for bids…}} sa ilalim ng package.
2. Punan ang title, project at opsyonal na mensahe, at ang **due time** sa sarili mong time zone.
3. Iwanang may tsek ang **Keep prices sealed** para itago ang bawat presyo hanggang sa **opening time** (hindi bago ang due time), o alisin ang tsek para makita ang mga presyo habang dumarating.
4. Iwanang may tsek ang kahon ng sheets para magpadala ng PDF ng mga sheet na may marka ng package, kasama ang iginuhit na mga marka. Hindi kailanman kasama sa ipinapadala ang mga presyo mo: pangalan lang ng item, CSI number, dami, unit at pangalan ng sheet.
5. I-type ang mga taong iimbitahan, isa bawat linya, bilang `Name <name@company.com>` o address lang, o lagyan ng tsek ang mga tao mula sa iyong subcontractor records. Hanggang 60 sa isang pagkakataon, 100 bawat package.
6. Piliin ang {{ui:Send invitations}}. Bawat tao ay makakatanggap ng isang simpleng email na may iyong pangalan at email address, ang due time at ang link; ang mga sagot ay mapupunta sa iyo.

Sinasabi ng dialog kung ilan ang naipadala, at pinangalanan ang sinumang nilaktawan: naimbitahan na sa package na ito, hiniling na huwag tumanggap ng bid invitation, hindi wastong address, o lumampas sa limitasyon sa pagpapadala.

## Ano ang nakikita ng bidder

Isang pahina sa mahaba at pribadong link, walang sign-in. Ipinapakita nito kung sino ang nag-imbita sa kanila, ang due time, kung sealed ang mga presyo, ang mensahe mo at ang PDF ng sheets, at pagkatapos ang bawat linya kasama ang dami nito. Para sa bawat linya, mag-type sila ng presyo o lagyan ng tsek ang **Not included**, at puwede silang magdagdag ng note; puwede silang mag-note para sa buong package at hanggang 3 file (quote, scope letter, certificate). Maaari silang mag-save muli at baguhin ang presyo nila hanggang sa opening, o **decline**, na may kahon para hilingin sa CadCraft na huwag na silang padalhan ng bid invitation.

## Sealed bids at ang pagbubukas

Bago ang opening time, **walang sinuman** ang makakakita ng presyo, note o file: hindi ikaw, hindi sa TakeoffCraft, hindi sa iyong Bid packages page. Makikita mo kung sino ang naimbitahan at kung sumagot na sila. Sa opening time, lalabas nang sabay-sabay ang bawat bid. Ang bid na na-save pagkatapos ng due time ay tatanggapin at mamarkahang **late**; kasama pa rin ito sa leveling, at ang pagiging late ay marka lamang, hindi hatol. Pagkatapos ng pagbubukas, hindi na mababago ng bidder ang presyo. Kapag walang sealing, final na ang bid sa sandaling dumating ang due time.

## Kunin ang mga presyo

Hihingin ng {{ui:Get prices}} sa website at idaragdag ang bawat sagot sa package bilang bid, na may markang **web**. Tahimik ding nagtatanong ang TakeoffCraft tuwing bubuksan mo ang dialog habang nakakonekta ito. Ina-update sa mismong lugar ang bid na may bagong bersyong na-save ng bidder; ang bid na in-edit mo ay nananatili gaya ng iniwan mo hanggang magpadala ng bagong bersyon ang bidder. Bawat pull ay isang hakbang na kayang i-undo ng {{key:Mod+Z}}. Ang mga linyang Hindi kasama ay dumarating bilang scope na iniwan ng bid, kaya pinupunan ng leveling ang mga ito bilang plug sa sarili mong gastos.

## Sa website

May dalawa pang pahina ang iyong account kapag puwede ka nang magpadala: ang **Bid packages** ay naglilista ng ipinadala mo, sino ang sumagot, ang late bid at ang mga file, at nagpapahintulot sa iyong magpadala ng paalala (bagong link; hihinto sa paggana ang luma), isara, buksan muli o kanselahin ang package; at ang **Subcontractors** ay nag-iingat ng talaan para sa bawat kumpanya: mga contact, trade, sagot sa qualification (taon sa negosyo, kapasidad ng bonding, EMR, safety record, union o open shop, references), petsa ng pag-expire ng license at insurance, na minamarkahan kapag lumipas na o nasa loob ng 30 araw, at ang mga nakaraan nilang bid. Mag-import at mag-export ng mga talaan bilang CSV: isang row bawat contact, kasama ang mga column na ipinapakita ng export; ang kumpanyang mayroon ka na ay ina-update, hindi inuulit.

## Sino ang nakakakita ng ano, at gaano katagal

Ang mga presyo, note at file ng bidder ay napupunta sa iyo at sa CadCraft team, na nagpapatakbo ng pahina. Iniingatan ang mga ito nang 24 na buwan pagkatapos ng due date, at ang mga file ay 180 araw; pagkatapos, binubura ang mga ito. Ang email address ng bidder ay ang inilagay mo; ginagamit lang ito para ipadala ang imbitasyon at anumang paalala para dito. Isang address ang puwedeng makatanggap ng hanggang 3 imbitasyon sa isang araw mula sa lahat ng nagpapadala nang sabay-sabay, at puwede kang magpadala ng hanggang 200 sa isang araw.

## Hindi pa nagagawa

Hindi pa nagagawa ang mga addenda, award letter, pinirmahang scope sheet para sa bawat bidder, at awtomatikong paalala bago mag-expire ang insurance date. Tingnan ang [Not built yet](topic:not-built-yet).
