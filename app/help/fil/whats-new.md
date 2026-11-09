---
title: Ano ang bago sa 0.8 at 0.8.1
summary: Bilangin ang buong symbol legend sa bawat bukas na sheet sa isang takbo, presyuhan ang mga item mula sa presyo ng nakaraan mong mga trabaho, i-check ang takeoff laban sa stock at lead time ng supplier, at may bagong tool ang assistant para sa tatlong ito, kasama ang iba pang pagbabago sa 0.8 at ang ayos sa 0.8.1 para sa mga DWG file.
keywords: ano ang bago, what's new, release notes, changelog, mga pagbabago, 0.8, 0.8.1, bersyon, bagong feature, bilangin lahat, legend, symbol legend, buong set, memory ng presyo, nakaraang trabaho, huling trabaho, karaniwang presyo, supplier, stock, lead time, backorder, order list, kakulangan, panel ng problema, assistant, mga wika, input device, row ng toolbar, dwg
from: a04adef6
---

Ito ang mga nagbago sa TakeoffCraft 0.8 (inilabas noong 2026-11-01) at 0.8.1 (2026-11-02), kumpara sa 0.7. Maaari nang bilangin ang isang symbol legend sa buong set sa isang bagsakan, maaaring magsimula ang bagong takeoff mula sa presyo ng nakaraan mong mga trabaho, at maaaring i-check ang takeoff laban sa stock ng supplier. Ang 0.8.1 ay release ng ayos.

## Bago

### Bilangin lahat sa set

- **I-box ang legend nang isang beses.** {{ui:Count everything}} sa toolbar ay bumabasa ng symbol legend: i-drag ang kahon sa paligid ng mga symbol at ng mga pangalan na nakalimbag sa tabi nito. Nakalista ang bawat symbol kasama ang larawan at pangalan nito, at ang pangalan ang nagiging pangalan ng item. Alisan ng tsek ang ayaw mo, pagkatapos piliin ang {{ui:Bilangin sa N sheet}}. May bar na nagpapakita ng sheet na hinahanap, hihinto ang takbo kapag pinindot ang {{ui:Kanselahin}}, at mananatiling magagamit ang pahina.
- **Lahat ng sheet sa isang takbo.** Binibilang ang bawat symbol sa bawat bukas na sheet. Ang sheet na iginuhit sa ibang scale ay hinahanap sa scale na iyon, at ang mga symbol ay nahahanap kahit naka-ikot sa anumang tamang anggulo. Hindi binibilang ang sariling symbol ng legend sa sheet nito.
- **Suriin bago idagdag ang kahit ano.** May link ang bawat kabuuan sa bawat sheet ("E-103: 4") na pumupunta sa sheet na iyon. I-click ang isang kahon sa isang hanap para iwanan ito, at i-click ulit para ibalik. Ang antas ng match (50% hanggang 100%) ay nagsasala lang sa nahanap; walang hinahanap muli.
- **Isang undo step.** Ang {{ui:Idagdag ang N marka}} ay gumagawa ng count item sa bawat symbol na may marka sa bawat nahanap. Ang pangalang may count item na sa iyo na ay ginagamit ulit. Binabawi ng {{key:Ctrl+Z}} ang lahat ng item at marka. Ang tinanggap mo ay napupunta rin sa {{ui:Natutunan}}.
- **Mga symbol sa anumang anggulo.** Lagyan ng tsek ang {{ui:Mga simbolo sa anumang anggulo}} bago magbilang para mahanap din ang mga symbol na naka-ikot sa anggulong hindi tamang anggulo. Iikutin ng paghahanap ang bawat symbol kada 15 degree, at ang symbol na hindi bilog ay maaaring tumagal nang hanggang anim na beses.
- **Ano ito.** Simpleng pagtutugma ng symbol sa sarili mong mga sheet, walang trained na model, at walang lumalabas sa computer mo. Sa isang gawa-gawang set na 200 sheet, inabot ito ng 9.4 segundo mula simula hanggang dulo sa Chrome sa isang mabilis na desktop; mas mabagal ang totoong set ng plano. Tingnan ang [Bilangin lahat sa set](topic:count-everything).

### Memory ng presyo mula sa sarili mong trabaho

- **Naaalala ng TakeoffCraft ang iyong rate.** Kapag nag-save ka ng takeoff, naaalala ang bawat presyuhang item na ginamit, ayon sa pangalan at uri: material rate, labor rate, waste at unit. Itinatago ang huling 12 trabaho para sa bawat pangalan. Nasa computer na ito ito, katabi ng price Library, hindi kailanman sa loob ng takeoff file, at walang ipinapadala kahit saan.
- **Magsimula ng bagong takeoff mula rito.** Ang {{ui:Presyo}} sa toolbar ay nagpapakita, para sa bawat item, ng rate ng huling trabaho, ng karaniwang rate, at ng saklaw. Ang {{ui:Gamitin ang huli}} o {{ui:Gamitin ang karaniwan}} ay nagpepresyo ng isang item, at ang {{ui:Presyuhan ang N item na walang presyo mula sa memory}} ay pinupunan ang bawat item na wala pang presyo. Bawat paggamit ay isang undo step.
- **Mas lumang gawa.** Ang {{ui:Matuto mula sa nakaraang takeoff…}} ay naaalala ang mga presyuhang item ng isang na-save na takeoff (.json).
- **Tingnan, baguhin, kalimutan.** Inililista ng {{ui:Lahat ng naalala}} ang bawat pangalan; binubura ng button na basurahan ang isa, at ang {{ui:Burahin lahat ng presyo}} ay binubura ang lahat. I-off ang {{ui:Tandaan ang presyo ko kapag nag-save ako ng takeoff}} para huminto. Hindi kailanman ilalagay ang presyo kada each sa item na kada foot. Tingnan ang [Memory ng presyo mula sa nakaraan mong trabaho](topic:price-memory).

### Stock ng supplier at lead time

- **I-check laban sa listahan ng supplier.** Ang {{ui:Supply}} sa toolbar ay kumukuha ng stock list ng supplier ({{ui:Magdagdag ng supplier file…}}), CSV o spreadsheet, at chine-check ang kailangan ng takeoff, kasama ang waste, laban dito. Hanggang limang file ang itinatago. Walang ipinapadala at walang tinatanong na supplier: ikaw ang magdadala ng file.
- **Ano ang sinasabi nito.** Unang lumalabas ang mga kulang na item: "Kulang ng 120 EA", "Lead time 21 araw", "Naka-backorder", "Iba ang unit", "Walang bilang ng stock" o "Nasa stock". Nagsisimula sa 14 ang {{ui:Pinakamahabang paghihintay na gusto (araw)}}.
- **Order list.** Dina-download ng {{ui:Order list (CSV)}} ang mga kulang na item kasama ang kulang na dami, ang supplier at ang lead time.
- **Mga presyo sa Library.** Kung may presyo ang file, itinatakda ng {{ui:Mga presyo sa Library}} ang material price ng bawat entry sa Library na may parehong pangalan at unit. I-reprice mula sa Library para mapasok ang mga ito sa takeoff.
- **Sa Problems panel.** Ang kakulangan ay babala at ang mahabang paghihintay ay tala, sa ilalim ng "Supplier stock". Maaari mo itong tanggapin na may dahilan, at naka-save ang dahilan sa takeoff. Tingnan ang [I-check ang stock ng supplier at lead time](topic:supplier-stock).

### Mga AI assistant

- **Tool para sa tatlo.** Kapag pinayagan ang mga assistant sa {{ui:Settings}}, maaaring basahin ng assistant ang legend (`legend_open`), patakbuhin ang pagbilang (`legend_count_start`, saka `legend_count_status` at `legend_count_result`) at idagdag ito (`legend_count_add`, na maaaring mag-preview muna). Maaari nitong basahin ang naalalang presyo (`prices_list`) at presyuhan ang mga item mula rito (`prices_apply`, na maaaring mag-preview muna), at basahin ang supplier check (`supply_check`). Ikaw pa rin ang magdadagdag ng supplier file. Tingnan ang [Gamitin ang TakeoffCraft kasama ang mga AI assistant](topic:use-with-ai-assistants).

### Sa bawat app

- **Mga wika.** Limampu't apat na wika sa kabuuan; sampu ang bago (Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili at Uzbek). Ang mga wikang iba sa English ay machine draft pa hangga't walang native speaker na nakabasa nito.
- **Input device.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} ang nagtatakda ng gagawin ng trackpad, side button ng mouse, pen, 3D mouse, game controller o MIDI controller, para sa bawat app o para sa isa. Tingnan ang [Gamitin ang trackpad, 3D mouse o controller](common:input-devices).
- **Row ng toolbar.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ay nag-aalok ng {{ui:Wrap}} (ang simula), {{ui:2 rows}} at {{ui:1 row}}; ang mga grupong hindi kasya ay nag-i-scroll sa gilid. Tingnan ang [Ayusin ang mga panel](common:arrange-panels).
- **Problems panel.** Ang shared na panel ng mga babala at tala ngayon ay may kasamang stock check ng supplier sa itaas, katabi ng iba pang check.
- **Mga add-on.** Sumusunod ang mga add-on sa listahan ng iyong account. Tingnan ang [Mga add-on at ang listahan ng iyong account](common:addons-basics).
- **Ikonekta ang AI mo.** Ang CadCraft Studio ang hub: ikonekta ang iyong assistant minsan para sa lahat ng walong app. Walang sariling AI ang Studio.

## Naayos sa 0.8.1

- **Seksyon ng classes sa DWG.** Mali ang uri na binasa sa seksyon ng classes ng DWG file. Naayos na ito sa TakeoffCraft at sa apat pang app.
- **Makakapagpalit ng wika ang Studio habang tumatakbo.** Dati, English lang ang Studio at ang mga packed edition nito. Hindi pa ito nasubukan sa desktop build sa lahat ng platform; sabihan kami kung hindi nagbabago ang wika.

## Wala pa sa bersyong ito

- **Hindi pa code-signed.** Maaaring magbabala ang Windows, at sa Mac ay mag-right-click ka at piliin ang {{ui:Bukas}} sa unang pagkakataon. Naka-hold ang mga store build (Microsoft Store, Google Play, App Store), at hindi na-rebuild ang iPad at iPhone build para sa 0.8.1.
- **Mga update ng Studio.** Sinusuri ng Windows installer at ng Linux package minsan sa isang araw at humihingi muna ng pahintulot. Sasabihan ka lang ng portable zip, at hindi nag-a-update nang kusa ang macOS at ang APK. Sumusunod ang 0.8 macOS .dmg sa release.
- **Ikonekta ang AI mo.** Hindi pa ipinangako sa bersyong ito ang one-click connect sa loob ng Studio, ang hosted na connector para sa AI sa browser, ang sarili mong API key sa loob ng Studio, at isang nailathalang MCP package.
- **Bilangin lahat.** Kailangang iguhit ang mga symbol nang katulad ng nasa legend, at maaaring makaligtaan ang symbol na may pader o mahabang linya na dumadaan dito. Hindi nahahanap ang mga nakasalamin na symbol, at ang sheet na walang scale na iginuhit sa ibang laki ay hinahanap sa laki ng legend. Suriin ang mga nahanap sa unang sheet bago pagkatiwalaan ang iba.
- **Stock ng supplier.** Ang mga bilang ng stock ay kasing-bago lang ng file na idinagdag mo. Hindi kailanman tinatanong ng check ang supplier.
- **Mga wika.** Umaapaw ang app bar ng Tamil.

Ang iba pa ay nasa [Hindi pa nagagawa](topic:not-built-yet). Para sa release bago ito, tingnan ang [Ano ang bago sa 0.7](topic:whats-new-0-7).
