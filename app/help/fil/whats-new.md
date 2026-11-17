---
title: Ano ang bago sa 0.9
summary: Basahin ang haba sa metro, sentimetro o milimetro, mga metric na lawak sa m2 kasama ang lawak ng pader, mga preset ng scale na 1:75 at 1:150, mga unit ng timbang at temperatura, Arc na may sampung paraan, at mga live cursor, Follow at listahan ng mga tao.
keywords: ano ang bago, release notes, changelog, 0.9, ipakita ang haba bilang, metro, sentimetro, milimetro, metric, sundan ang global, unit, display unit, m2, square meter, lawak ng pader, scale preset, 1:75, 1:150, timbang, kilogram, kg, tonelada, ton, lb, temperatura, celsius, fahrenheit, arc, paraan ng arc, 3-point arc, radius, live, cursor, follow, listahan ng mga tao, class, tooltip, layout, mga pagbabago, 0.8, 0.8.1, bersyon, bagong feature, bilangin ang lahat, legend, legend ng simbolo, buong set, memorya ng presyo, mga nakaraang job, huling job, karaniwang presyo, supplier, stock, lead time, backorder, listahan ng order, kakulangan, panel ng problema, assistant, mga wika, input device, row ng toolbar, dwg
from: 6182b998
---

Ito ang nagbago sa TakeoffCraft 0.9, kumpara sa 0.8.1. Maliit na release ito para sa app na ito: maaari nang basahin ang haba sa metro, sentimetro o milimetro, ang mga lawak at scale ay sumusunod nang maayos sa metric na trabaho, at may sampung paraan ng pagguhit ang Arc. Ipinapakita rin ng mga live session kung sino ang nasaan.

## Bago

### Basahin ang haba sa metro, sentimetro o milimetro

- **Ipakita ang haba bilang.** {{ui:Mga setting}} › {{ui:TakeoffCraft}} ay may {{ui:Ipakita ang haba bilang}} na may {{ui:Sundan ang Global}}, {{ui:Feet-inches}}, m, cm at mm. Ginagamit ng {{ui:Sundan ang Global}} ang metric na unit ng haba na naka-star mo sa {{ui:Mga setting}} › {{ui:Global}} › {{ui:Mga unit}}, at feet-inches kapag walang naka-star. Binabago nito kung paano binabasa ang haba sa sheet, sa status bar at sa mga panel, kasama ang taas, lalim, kapal at mga level. Ang bare na numerong itinayp sa field ng taas ay binabasa sa unit na nakikita.
- **Pagpapakita lang.** Ang dami, gastos at export ay kinukuwenta mula sa eksaktong haba. Lumalabas ang pagpipiliang 1/16, 1/8 at 1/4 inch para sa feet-inches lang. Tingnan ang [Ipakita ang haba sa metro](topic:show-lengths-in-meters).
- **Mga unit ng timbang.** Ang item na {{ui:Typed quantity (walang drawing)}} ay maaari na ngayong nasa lb, TON, kg o t, at mapresyuhan bawat unit.
- **Temperatura.** Bawat item ay may opsyonal na field na {{ui:Temperatura}} sa item editor, itinatayp sa degree C o F. Ang {{ui:Ipakita ang temperatura bilang}} sa {{ui:Mga setting}} › {{ui:TakeoffCraft}} ay nag-aalok ng {{ui:Sundan ang Global}}, °C o °F.

### Mga lawak at scale para sa metric na trabaho

- **Lawak sa m2 sa drawing.** Ang lawak na sinukat gamit ang metric na item ay nagsasabing m2 sa drawing tag at sa mark panel, gayundin sa talahanayan, sa halip na SF. Ang tuntunin: m2 kapag presyado ang item sa metric o ipinapakita ang haba sa m, cm o mm, at SF kung hindi.
- **Lawak ng pader.** Ang linear item na may taas ay nagpapakita rin ng lawak ng pader (haba beses taas) sa listahan ng Items at bilang note row sa ilalim ng talahanayan ng dami kada item.
- **Scale preset 1:75 at 1:150.** Nasa listahan ng {{ui:Preset}} sa grupong {{ui:Scale}}, na may 32 scale na ngayon. Tingnan ang [Mga scale preset](topic:scale-presets).

### Arc na may sampung paraan

- Habang naka-on ang {{ui:Arc}} (button sa toolbar o {{key:R}}), lumalabas sa sheet bar ang kahong {{ui:Paraan ng Arko}} na may: 3-Point, Simula, Gitna, Dulo; Simula, Gitna, Anggulo; Simula, Gitna, Haba; Simula, Dulo, Anggulo; Simula, Dulo, Direksyon; Simula, Dulo, Radius; Gitna, Simula, Dulo; Gitna, Simula, Anggulo; at Gitna, Simula, Haba. Ang anggulo, haba, radius at direksyon ay maaaring i-click o itayp. Gumagana ito sa linear run, lawak at cut-out. Ang mga file na na-save bago ang 0.9 ay nagbubukas nang pareho. Tingnan ang [Gumuhit ng arko gamit ang sampung paraan](topic:draw-arcs-ten-methods).

### Magkasamang trabaho

- **Makita ang cursor ng isa't isa.** Sa Live session, ipinapakita sa sheet ang pointer ng bawat tao kasama ang kanyang pangalan at kulay, at may dashed box sa paligid ng mga markang napili niya. Nakalista ang mga taong nasa ibang sheet kasama ang pangalan ng sheet na iyon. Tingnan ang [Magtrabaho nang live kasama ang iba](topic:work-live).
- **Sundan ang isang tao, at ang listahan ng mga tao.** Ang button na {{ui:Mga tao}} sa Live session ay naglilista ng bawat tao kasama ang tool na gamit niya, ang sheet kung nasaan siya, at kung kailan siya huling nag-edit. Ang {{ui:Sundan}} ay ginagalaw ang view mo kasabay ng kanya, at maaaring gamitin ng host ang {{ui:Hilingin sa lahat na sundan ako}}. Tingnan ang [Sundan ang isang kasamahan sa Live session](topic:follow-a-teammate).

## Sa bawat app

- **Mga tooltip at start tip.** Ang teksto kapag itinuro ay Bootstrap tooltip, at maaaring isara ang start tip.
- **Mga tab strip na nagsa-scroll.** Ang tab strip ng panel na hindi kasya ay nagsa-scroll sa halip na maputol.
- **Mga pamagat ng tab.** Ang browser tab ay nagbabasa ng `<document> - TakeoffCraft | CadCraft`.
- **Layout.** Ang listahan ng layout sa {{ui:Mga setting}} ay drop-down na nagpapakita ng napiling layout.
- **Wika.** Ang wikang pipiliin mo ay umaabot na ngayon sa mga salitang inilalagay ng page mismo, gaya ng Bago, Bukas at I-save. Ang mga wikang iba sa Ingles ay mga machine draft hanggang mabasa ng katutubong tagapagsalita.

## Mga tapat na limitasyon

- Nasuri ng mga test at sa page ang pagpapakita ng haba, mga unit ng timbang at temperatura, at ang mga bagong preset. Hindi pa nasusuri nang kamay ang bawat panel sa bawat unit.
- Hindi pa nasusuri nang kamay ang listahan ng mga tao kasama ang tunay na klase ng guro at mga estudyante.
- Ang mga wikang iba sa Ingles ay machine draft.
- Ang mga Windows installer ay hindi naka-code-sign ({{ui:Higit pang impormasyon}}, saka {{ui:Patakbuhin pa rin}}). Ang macOS disk image ay hindi notarized (right-click, saka {{ui:Bukas}}).

## Mas maaga: 0.8 at 0.8.1

Ito ang nagbago sa TakeoffCraft 0.8 (inilabas noong 2026-11-01) at 0.8.1 (2026-11-02), kumpara sa 0.7. Maaari nang bilangin nang sabay sa buong set ang isang legend ng simbolo, maaaring magsimula ang bagong takeoff sa mga presyo ng iyong mga nakaraang job, at maaaring suriin ang takeoff laban sa stock ng supplier. Ang 0.8.1 ay release ng ayos.

### Bago

**Bilangin ang lahat sa set**

- **I-box nang isang beses ang legend.** {{ui:Bilangin lahat}} sa toolbar ay bumabasa ng legend ng simbolo: i-drag ang box sa paligid ng mga simbolo at ng mga pangalang nakasulat sa tabi nila. Nakalista ang bawat simbolo kasama ang larawan at pangalan nito, at ang pangalan ay nagiging pangalan ng item. Alisan ng tsek ang ayaw mo, saka piliin ang {{ui:Bilangin sa N sheet}}. Ipinapakita ng bar ang sheet na hinahanap, hinihinto ng {{ui:Kanselahin}} ang takbo, at nananatiling magagamit ang page.
- **Bawat sheet sa iisang takbo.** Bawat simbolo ay binibilang sa bawat bukas na sheet. Ang sheet na iginuhit sa ibang scale ay hinahanap sa scale na iyon, at ang mga simbolo ay hinahanap kahit naka-turn sa anumang tamang anggulo. Hindi binibilang ang sariling simbolo ng legend sa sarili nitong sheet.
- **Suriin bago idagdag ang kahit ano.** Bawat kabuuan ay may link bawat sheet ("E-103: 4") na dumadala sa sheet na iyon. I-click ang isang box sa hanap para alisin ito, at i-click ulit para ibalik. Ang match level (50% hanggang 100%) ay nagsasala lang sa nahanap; walang muling paghahanap.
- **Isang undo step.** Ang {{ui:Idagdag ang N marka}} ay gumagawa ng count item bawat simbolo na may marka sa bawat nahanap. Muling ginagamit ang pangalang dati nang count item mo. Binabawi ng {{key:Ctrl+Z}} ang lahat ng item at marka. Ang tinanggap mo ay napupunta rin sa {{ui:Natutunan}}.
- **Mga simbolo sa anumang anggulo.** Lagyan ng tsek ang {{ui:Mga simbolo sa anumang anggulo}} bago magbilang para hanapin din ang mga simbolong naka-turn sa anggulong hindi tamang anggulo. Pinapaikot ng paghahanap ang bawat simbolo bawat 15 degree, at ang simbolong hindi bilog ay maaaring tumagal nang hanggang anim na beses.
- **Ano ito.** Simpleng pagtutugma ng simbolo sa sarili mong mga sheet, walang sinanay na model, at walang lumalabas sa computer mo. Sa isang gawa-gawang set ng 200 sheet, inabot ito ng 9.4 na segundo mula simula hanggang dulo sa Chrome sa mabilis na desktop; mas mabagal ang tunay na set ng plano. Tingnan ang [Bilangin ang lahat sa set](topic:count-everything).

**Memorya ng presyo mula sa sarili mong job**

- **Naaalala ng TakeoffCraft ang mga rate mo.** Kapag nag-save ka ng takeoff, bawat presyadong item na ginamit ay naaalala ayon sa pangalan at uri: rate ng materyal, rate ng labor, waste at unit. Ang huling 12 job ay iniingatan para sa bawat pangalan. Nasa computer na ito ang mga ito, katabi ng Library ng presyo, hindi kailanman sa loob ng file ng takeoff, at walang ipinapadala kahit saan.
- **Magsimula ng bagong takeoff mula rito.** {{ui:Presyo}} sa toolbar ay nagpapakita, para sa bawat item, ng rate ng huling job, ang karaniwang rate at ang saklaw. {{ui:Gamitin ang huli}} o {{ui:Gamitin ang karaniwan}} ay nagpepresyo ng isang item, at ang "Presyuhan ang N item na walang presyo mula sa memorya" ay pumupuno sa bawat item na wala pang presyo. Isang undo step ang bawat paggamit.
- **Mas lumang gawa.** {{ui:Matuto mula sa nakaraang takeoff…}} ay naaalala ang mga presyadong item ng isang na-save na takeoff (.json).
- **Tingnan, baguhin, kalimutan.** {{ui:Lahat ng naalala}} ay naglilista ng bawat pangalan; ang button ng basurahan ay nagkakalimot ng isa, at ang {{ui:Burahin lahat ng presyo}} ay nagkakalimot ng lahat. I-off ang {{ui:Tandaan ang presyo ko kapag nag-save ako ng takeoff}} para huminto. Hindi kailanman inilalagay ang presyo bawat each sa item na per foot. Tingnan ang [Memorya ng presyo mula sa mga nakaraang job](topic:price-memory).

**Stock ng supplier at lead time**

- **Suriin laban sa listahan ng supplier.** {{ui:Supply}} sa toolbar ay kumukuha ng stock list ng supplier ({{ui:Magdagdag ng supplier file…}}), CSV o spreadsheet, at sinusuri laban dito ang kailangan ng takeoff, kasama ang waste. Hanggang limang file ang iniingatan. Walang ipinapadala at walang tinatanong na supplier: ikaw ang nagdadala ng file.
- **Ang sinasabi nito.** Ang maikling item ang nauuna: "Short by 120 EA", "Lead time 21 days", "On backorder", "Unit differs", "No stock figure" o "In stock". Ang {{ui:Pinakamahabang paghihintay na gusto (araw)}} ay nagsisimula sa 14.
- **Listahan ng order.** {{ui:Order list (CSV)}} ay nagda-download ng mga maikling item kasama ang kulang na dami, ang supplier at ang lead time.
- **Presyo sa Library.** Kung may presyo ang file, itinatakda ng {{ui:Mga presyo sa Library}} ang material price ng bawat entry sa Library na may parehong pangalan at unit. I-reprice mula sa Library para dalhin ang mga ito sa takeoff.
- **Sa panel ng Problema.** Ang kakulangan ay babala at ang mahabang paghihintay ay tala, sa ilalim ng "Stock ng supplier". Maaari mong tanggapin ang isa na may dahilan, at naka-save ang dahilan sa takeoff. Tingnan ang [Suriin ang stock ng supplier at lead time](topic:supplier-stock).

**AI assistant**

- **Mga tool para sa tatlo.** Kapag pinayagan ang mga assistant sa {{ui:Mga setting}}, maaaring basahin ng assistant ang legend (`legend_open`), patakbuhin ang bilang (`legend_count_start`, saka `legend_count_status` at `legend_count_result`) at idagdag ito (`legend_count_add`, na maaaring mag-preview muna). Maaari nitong basahin ang mga naaalalang presyo (`prices_list`) at presyuhan ang mga item mula sa mga ito (`prices_apply`, na maaaring mag-preview muna), at basahin ang supplier check (`supply_check`). Ang pagdagdag ng supplier file ay nananatiling sa iyo. Tingnan ang [Gamitin ang TakeoffCraft kasama ng mga AI assistant](topic:use-with-ai-assistants).

**Sa bawat app**

- **Mga wika.** Limampu't apat na wika sa kabuuan; sampu ang bago (Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili at Uzbek). Ang mga wikang iba sa Ingles ay machine draft hanggang mabasa ng katutubong tagapagsalita.
- **Mga input device.** {{ui:Mga setting}} › {{ui:Global}} › {{ui:Mga input device}} ang nagtatakda kung ano ang gagawin ng trackpad, side button ng mouse, pen, 3D mouse, game controller o MIDI controller, para sa bawat app o para sa isa. Tingnan ang [Gamitin ang trackpad, 3D mouse o controller](common:input-devices).
- **Mga row ng toolbar.** {{ui:Mga setting}} › {{ui:Pangkalahatan}} › {{ui:Mga row ng toolbar}} ay nag-aalok ng {{ui:Wrap}} (ang simula), {{ui:2 row}} at {{ui:1 row}}; ang mga grupong hindi kasya ay nagsa-scroll pagilid. Tingnan ang [Ayusin ang mga panel](common:arrange-panels).
- **Problems panel.** Ang shared panel ng mga babala at tala ay nagdadala na ngayon ng supplier stock check sa itaas, katabi ng iba pang check.
- **Mga add-on.** Sumusunod ang mga add-on sa listahan ng account mo. Tingnan ang [Mga add-on at ang listahan ng account mo](common:addons-basics).
- **Ikonekta ang iyong AI.** Ang CadCraft Studio ang sentro: ikonekta ang iyong assistant nang isang beses para sa lahat ng walong app. Walang sariling AI ang Studio.

### Naayos sa 0.8.1

- **Seksyon ng classes ng DWG.** Mali ang uri ng pagbasa sa seksyon ng classes ng DWG file. Naayos na ito sa TakeoffCraft, at sa apat pang app.
- **Makakapagpalit ng wika ang Studio habang tumatakbo.** Dati, Ingles lang ang Studio at ang mga pinakete nitong edisyon. Hindi pa ito nasusubukan sa desktop build sa bawat platform; sabihan kami kung hindi nagbabago ang wika.

### Hindi pa available sa bersyong ito

- **Hindi naka-code-sign.** Maaaring magbabala ang Windows, at sa Mac ay i-right-click at piliin ang {{ui:Bukas}} sa unang pagkakataon. Naka-hold ang mga store build (Microsoft Store, Google Play, App Store), at hindi muling ginawa ang iPad at iPhone build para sa 0.8.1.
- **Mga update ng Studio.** Ang Windows installer at ang Linux package ay nagche-check minsan sa isang araw at nagtatanong muna. Ang portable zip ay nagsasabi lang, at hindi nag-a-update ang macOS at ang APK nang sarili. Susunod sa release ang 0.8 macOS .dmg.
- **Ikonekta ang iyong AI.** Hindi ipinangako sa bersyong ito ang one-click connect sa loob ng Studio, ang hosted connector para sa AI sa browser, ang sarili mong API key sa loob ng Studio, at ang nailathalang MCP package.
- **Bilangin ang lahat.** Kailangan ng mga simbolong iginuhit nang kapareho ng nasa legend, at maaaring makaligtaan ang simbolong may pader o mahabang linya na dumadaan dito. Hindi nahahanap ang mga naka-mirror na simbolo, at ang sheet na walang scale na iginuhit sa ibang laki ay hinahanap sa laki ng legend. Suriin ang mga nahanap sa unang sheet bago pagkatiwalaan ang iba.
- **Stock ng supplier.** Ang mga figure ng stock ay kasing-bago lang ng file na idinagdag mo. Hindi kailanman tinatanong ng check ang supplier.
- **Mga wika.** Umaapaw ang app bar ng Tamil.

Ang iba pa ay nasa [Hindi pa nagagawa](topic:not-built-yet). Para sa nakaraang release, tingnan ang [Ano ang bago sa 0.7](topic:whats-new-0-7).
