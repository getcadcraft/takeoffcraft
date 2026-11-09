---
title: Ukuqala nge-TakeoffCraft
summary: Okwenza i-TakeoffCraft, lapho isebenza khona, nencwadi yakho yokuqala ekalwe futhi yabiwa ngentengo esuka kusethi yamapulani e-PDF.
keywords: qala, ukubala kokuqala, isiqalo esisheshayo, isingeniso, isilinganiso, ukubala amanani, isethi yamapulani, pdf
from: 3b9da1fb
---

I-TakeoffCraft ikala amasethi amapulani, ama-PDF namadrowing e-DWG noma e-DXF, iguqule izilinganiso ibe yisilinganiso sezindleko. Uvula amafayela (idrowing ye-DWG noma ye-DXF ibalwa ngqo kusuka kumabhulokhi ayo: bona [Vula idrowing ye-DWG noma ye-DXF](topic:open-a-drawing)), unikeze ishidi ngalinye isikali (idrowing iletha eyayo), wenze **izinto** (uhlobo lodonga, umshato wesakhiwo, into yokufakwa), bese uchofoza emashidini ukuze uzikale. Amanani, izindleko nesamba sephrojekthi kuyabuyekezwa njengoba usebenza. Ungathumela isilinganiso njengesipredishithi nekhophi yama-PDF enokubalwa kwakho kudwetshwe kuwo.

Uma usuke wenza ukubala ngezinye izinhlelo, funda kuqala [Ukuvela kokubala okuvela kwezinye izinhlelo](topic:coming-from). Ezinye izinto zisebenza ngendlela ehlukile lapha.

## Lapho isebenza khona

I-TakeoffCraft isebenza kusiphequluli sakho sewebhu. Vula i-TakeoffCraft isikrini silungele ngokushesha; akukho okudingeka ukufakwa.

- **Ama-PDF akho ahlala kukhompyutha yakho.** Avulwa yisiphequluli futhi awalayishwa. Ukulondoloza kuyukulanda.
- Isebenza ku-Chrome, Edge, Firefox ne-Safari zamanje. Bona [Amasiphequluli nekhompyutha](common:browsers).
- Isebenza ngaphandle kokuxhumana ngemva kokuthi usikhethe {{ui:Save for offline}} ebhareni yohlelo futhi kutshelwe {{ui:Offline ready}}. Bona [Ukusebenza ngaphandle kwe-inthanethi](common:offline).
- Ukulondoloza efwini akutholakali okwamanje. Ngedesktop, i-TakeoffCraft iza ku-CadCraft Studio, kanye namanye ama-app ayisikhombisa.

## Ukubala kokuqala ngezinyathelo eziyishumi

Lolu hambo lukala uhlobo lodonga olulodwa bese luluthengisa. Lithatha imizuzu embalwa kunoma yipulani oyilo.

1. Khetha {{ui:Open plans}} kweqembu le-{{ui:File}} ethuluzini (noma cindezela {{key:Mod+O}}), khetha i-PDF eyodwa noma ngaphezulu, bese ukhetha Vula. Ungaphinda uwadonse ndawana ekhasini.
   Amashidi avela ngakwesobunxele, futhi ishidi lokuqala livulwa phakathi.
2. Thola isikali esiphrintiwe seshidi ngesihloko sayo esiphethe noma ngaphansi kwesihloko sedrowing.
3. Vula uhlu lwe-{{ui:Preset}} kweqembu le-{{ui:Scale}} bese ukhetha leso sikali, isibonelo `1/4" = 1'-0"`.
   Ibha esezansi kweshidi manje ithi "Isikali 1/4" = 1'-0"".
4. Khetha {{ui:Check}} (noma cindezela {{key:D}}) bese uchofoza iziphetho ezimbili zesilinganiso esiphrintiwe kudrowing.
   Ukufunda okusebhodweni yesimo esingezansi ngakwesobunxele kufanele kufane nesilinganiso esiphrintiwe. Uma kungafani, bona [Setha isikali](topic:set-the-scale).
5. Ku-panel ye-{{ui:Items}} ngakwesokudla, khetha {{ui:New item}}, thayipha igama njengo `Interior wall type A`, ushiye uhlobo ku-{{ui:Linear (length)}}, bese ukhetha {{ui:Add}}.
6. Khetha {{ui:Linear}} ethuluzini (noma cindezela {{key:L}}).
7. Chofoza ekuqaleni kodonga, bese ngamakhona alo ngamunye. Cofoza kabili, cindezela {{key:Enter}} noma uchofoze ngakwesokudla ukuqeda lo mgqa.
   Umugqa udwetshwa ngombala wento, futhi ubude bawo buvela eduze kwento.
8. Ku-item editor ngaphansi kwe-{{ui:Items}}, thayipha `9'-0"` ku-{{ui:Height}}, `0.85` ku-{{ui:Material $/LF}} no-`1.20` ku-{{ui:Labor $/LF}}.
   Ithebula le-{{ui:Quantities}} elisezansi libonisa ubude, impahla nomsebenzi ngokwandisiwe, nethoti le-{{ui:Job total}}.
9. Khetha {{ui:Save takeoff}} (noma cindezela {{key:Mod+S}}).
   Isiphequluli sakho silanda ifayela le-`.takeoff.json`. Liqukatha izinto zakho, izikali namakwe, futhi livula kabusha phezu kwama-PDF afanayo.
10. Vula imenyu ye-{{ui:Export}} ethuluzini bese ukhetha {{ui:XLSX}} ukuze ulande isilinganiso njengesipredishithi.

:::tip
Cindezela {{key:Esc}} ukuze umise noma yini oyenzayo ubuyele kwithuluzi le-{{ui:Select}}. {{key:Mod+Z}} ihlehlisa noma yiluphi oshintsho.
:::

## Okulandelayo okufundwa

- [Isikrini se-TakeoffCraft](topic:workspace) siqamba yonke ingxenye yewindi.
- [Qala ukubala futhi uvule isethi yamapulani](topic:open-plan-set) ikhuluma ngama-PDF amaningi nohlu lwamashidi.
- [Dala izinto zokubala](topic:create-items) ichaza izinhlobo, izinyunithi, ukulahleka namazinga.
- [Inhlanganisela namafomula](topic:assemblies) iguqula ukukala okukodwa ibe ama-stud, amashidi webhodi nokunye.
- [Ikhibhodi nemouse](topic:keyboard) ibala zonke izinkinobho.
