---
title: Ano ang bago sa 0.9 (mas maaga)
summary: Basahin ang mga haba sa metro, sentimetro o milimetro, metric na lawak sa m2 kasama ang lawak ng pader, mga preset na scale na 1:75 at 1:150, mga unit ng timbang at temperatura, Arc na may sampung paraan, at live cursor, Follow at listahan ng mga tao.
keywords: whats new 0.9, naunang release, whats new, what's new, release notes, changelog, 0.9, ipakita ang haba bilang, metro, sentimetro, milimetro, metric, follow global, mga unit, ipakita ang mga unit, m2, square meters, lawak ng pader, mga preset ng scale, 1:75, 1:150, timbang, kilogram, kg, tonne, ton, lb, temperatura, celsius, fahrenheit, arc, mga paraan ng arc, 3-point arc, radius, live, cursor, follow, listahan ng mga tao, class, tooltip, layout, whats new, what's new, release notes, changelog, mga pagbabago, 0.8, 0.8.1, bersyon, mga bagong feature, bilangin lahat, legend, legend ng simbolo, buong set, alaala ng presyo, mga nakaraang trabaho, huling trabaho, karaniwang presyo, supplier, stock, lead time, backorder, order list, kakulangan, panel ng problema, assistant, mga wika, mga input device, mga row ng toolbar, dwg
from: f4322ba2
---

Ito ang mga pagbabago sa TakeoffCraft 0.9, kumpara sa 0.8.1. Maliit na release ito para sa app na ito: maaari nang basahin ang mga haba sa metro, sentimetro o milimetro, tama nang sumusunod sa metric na trabaho ang mga lawak at scale, at may sampung paraan na ang Arc para gumuhit. Ipinapakita rin ng mga live session kung sino ang nasaan.

## Bago

### Basahin ang mga haba sa metro, sentimetro o milimetro

- **Ipakita ang haba bilang.** Mayroon ang {{ui:Settings}} › {{ui:TakeoffCraft}} ng {{ui:Show lengths as}} na may {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm at mm. Ginagamit ng {{ui:Follow Global}} ang metric na length unit na minarkahan mo sa {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}, at feet-inches kapag wala kang minarkahan. Binabago nito kung paano binabasa ang mga haba sa sheet, sa status bar at sa mga panel, kasama ang mga taas, lalim, kapal at mga level. Ang numerong walang unit na itinype sa field ng taas ay binabasa sa unit na ipinapakita.
- **Display lang.** Ang mga dami, gastos at export ay kinukuwenta mula sa eksaktong haba. Lumalabas ang pagpili ng 1/16, 1/8 at 1/4 inch para sa feet-inches lamang. Tingnan ang [Ipakita ang mga haba sa metro](topic:show-lengths-in-meters).
- **Mga unit ng timbang.** Ang item na {{ui:Typed quantity (no drawing)}} ay maaari na ngayong nasa lb, TON, kg o t, at mapresyuhan kada unit.
- **Temperatura.** Bawat item ay may opsyonal na field na {{ui:Temperature}} sa item editor, na itinype sa degrees C o F. Nag-aalok ang {{ui:Show temperatures as}} sa {{ui:Settings}} › {{ui:TakeoffCraft}} ng {{ui:Follow Global}}, °C o °F.

### Mga lawak at scale para sa metric na trabaho

- **Mga lawak sa m2 sa drawing.** Ang lawak na sinukat gamit ang metric na item ay nagsasabing m2 sa drawing tag at sa mark panel, pati sa table, sa halip na SF. Ang panuntunan: m2 kapag metric ang presyo ng item o ipinapakita ang haba sa m, cm o mm, at SF kung hindi.
- **Lawak ng pader.** Ang linear na item na may taas ay nagpapakita rin ng lawak ng pader (haba beses taas) sa listahan ng Items at bilang note row sa ilalim ng table ng dami kada item.
- **Mga preset ng scale na 1:75 at 1:150.** Nasa listahang {{ui:Preset}} ang mga ito, sa grupong {{ui:Scale}}, na mayroon na ngayong 32 na scale. Tingnan ang [Mga preset ng scale](topic:scale-presets).

### Arc na may sampung paraan

- Habang nakabukas ang {{ui:Arc}} (button sa toolbar o {{key:R}}), lumalabas sa sheet bar ang kahon na {{ui:Arc method}}: 3-Point, Start, Center, End, Start, Center, Angle, Start, Center, Length, Start, End, Angle, Start, End, Direction, Start, End, Radius, Center, Start, End, Center, Start, Angle at Center, Start, Length. Ang angle, length, radius at direction ay maaaring i-click o itype. Gumagana ito sa linear runs, areas at cut-outs. Ang mga file na na-save bago ang 0.9 ay nagbubukas nang pareho. Tingnan ang [Gumuhit ng arc gamit ang sampung paraan](topic:draw-arcs-ten-methods).

### Sama-samang pagtatrabaho

- **Makita ang cursor ng isa't isa.** Sa Live session, nakikita sa sheet ang pointer ng bawat tao kasama ang pangalan at kulay niya, na may dashed box sa paligid ng mga markang napili niya. Ang mga tao sa ibang sheet ay nakalista kasama ang pangalan ng sheet na iyon. Tingnan ang [Makipagtulungan nang live sa iba](topic:work-live).
- **Sundan ang isang tao, at ang listahan ng mga tao.** Inililista ng button na {{ui:People}} sa Live session ang bawat tao kasama ang tool na ginagamit niya, ang sheet kung nasaan siya at kung kailan siya huling nag-edit. Inilalipat ng {{ui:Follow}} ang view mo kasabay ng sa kanila, at maaaring gamitin ng host ang {{ui:Ask everyone to follow me}}. Tingnan ang [Sundan ang kasamahan sa Live session](topic:follow-a-teammate).

## Sa bawat app

- **Mga tooltip at start tip.** Ang hover text ay Bootstrap tooltip, at maaari nang isara ang start tip.
- **Mga scrolling na tab strip.** Ang tab strip ng panel na hindi kasya ay nag-i-scroll sa halip na maputol.
- **Mga pamagat ng tab.** Ang browser tab ay nagbabasang `<document> - TakeoffCraft | CadCraft`.
- **Layout.** Ang layout list sa {{ui:Settings}} ay drop-down na nagpapakita ng napiling layout.
- **Wika.** Ang wikang pipiliin mo ay umaabot na ngayon sa mga salitang ipinapakita mismo ng pahina, gaya ng New, Bukas at I-save. Ang mga wikang iba sa Ingles ay machine draft pa lamang hanggang may katutubong nagsasalita na nakabasa nito.

## Mga tapat na limitasyon

- Nasuri ng mga test at sa pahina ang display ng haba, ang mga unit ng timbang at temperatura, at ang mga bagong preset. Hindi pa lahat ng panel sa bawat unit ay nasuri nang manu-mano.
- Hindi pa nasuri nang manu-mano ang listahan ng mga tao sa tunay na klase ng guro at mga estudyante.
- Ang mga wikang iba sa Ingles ay machine draft.
- Ang mga Windows installer ay hindi code-signed (More info, pagkatapos Run anyway). Ang macOS disk image ay hindi notarized (right-click, pagkatapos Open).

## Naunang bersyon: 0.8 at 0.8.1

Ito ang mga pagbabago sa TakeoffCraft 0.8 (inilabas noong 2026-11-01) at 0.8.1 (2026-11-02), kumpara sa 0.7. Maaari nang bilangin sa buong set nang sabay-sabay ang isang legend ng simbolo, maaaring magsimula ang bagong takeoff sa mga presyo ng iyong nakaraang trabaho, at maaaring i-check ang takeoff laban sa stock ng supplier. Ang 0.8.1 ay release ng pag-aayos.

### Bago

**Bilangin ang lahat sa set**

- **I-box ang legend nang isang beses.** Ang {{ui:Count everything}} sa toolbar ay bumabasa ng legend ng simbolo: i-drag ang box sa paligid ng mga simbolo at ng mga pangalang nakalimbag sa tabi nila. Nakalista ang bawat simbolo kasama ang larawan at pangalan nito, at ang pangalan ang nagiging pangalan ng item. Alisin ang tsek sa ayaw mo, pagkatapos piliin ang {{ui:Count on N sheets}}. May bar na nagpapakita ng sheet na hinahanap, humihinto ang takbo sa {{ui:Cancel}}, at nananatiling magagamit ang pahina.
- **Isang takbo para sa lahat ng sheet.** Bawat simbolo ay binibilang sa bawat bukas na sheet. Ang sheet na iginuhit sa ibang scale ay hinahanap sa scale na iyon, at nahahanap ang mga simbolo kahit naka-turn sa anumang tamang anggulo. Ang sariling mga simbolo ng legend ay hindi binibilang sa sheet nito.
- **Suriin bago idagdag ang anuman.** Bawat kabuuan ay may link kada sheet ("E-103: 4") na pumupunta sa sheet na iyon. I-click ang isang box sa isang find para iwan ito sa labas, at i-click ulit para ibalik. Ang antas ng match (50% hanggang 100%) ay nagsasala lamang sa nahanap; walang hinahanap muli.
- **Isang hakbang ng undo.** Ang {{ui:Add N marks}} ay gumagawa ng count item bawat simbolo na may mark sa bawat nahanap. Ang pangalang mayroon nang count item na sa iyo ay muling ginagamit. Binabawi ng {{key:Ctrl+Z}} ang lahat ng item at mark. Ang tinanggap mo ay nagtuturo rin sa {{ui:Learned}}.
- **Mga simbolo sa anumang anggulo.** Lagyan ng tsek ang {{ui:Symbols at any angle}} bago magbilang para mahanap din ang mga simbolong naka-turn sa anggulong hindi tamang anggulo. Iikutin ng paghahanap ang bawat simbolo kada 15 degree, at ang simbolong hindi bilog ay maaaring tumagal nang hanggang anim na beses.
- **Ano ito.** Simpleng pagtutugma ng simbolo sa sarili mong sheet, walang trained model, at walang lumalabas sa computer mo. Sa isang gawa-gawang set na 200 sheet, tumagal ito nang 9.4 segundo mula simula hanggang dulo sa Chrome sa mabilis na desktop; mas mabagal ang tunay na plan set. Tingnan ang [Bilangin ang lahat sa set](topic:count-everything).

**Alaala ng presyo mula sa sarili mong trabaho**

- **Inaalala ng TakeoffCraft ang iyong rate.** Kapag nag-save ka ng takeoff, bawat napresyuhang item na ginamit ay naaalala ayon sa pangalan at uri: material rate, labor rate, waste at unit. Ang huling 12 trabaho ay pinananatili para sa bawat pangalan. Nananatili ito sa computer na ito, katabi ng price Library, hindi kailanman nasa loob ng takeoff file, at walang ipinapadala kahit saan.
- **Magsimula ng bagong takeoff mula rito.** Ipinapakita ng {{ui:Prices}} sa toolbar, para sa bawat item, ang rate ng huling trabaho, ang karaniwang rate at ang saklaw. Ang {{ui:Use last}} o {{ui:Use typical}} ay nagpepresyo ng isang item, at pinupuno ng {{ui:Price N unpriced items from memory}} ang bawat item na wala pang presyo. Bawat paggamit ay isang hakbang ng undo.
- **Mga lumang gawa.** Inaalala ng {{ui:Learn from a past takeoff…}} ang mga napresyuhang item ng isang na-save na takeoff (.json).
- **Tingnan, baguhin, kalimutan.** Inililista ng {{ui:Everything remembered}} ang bawat pangalan; kinakalimutan ng button ng basurahan ang isa, at kinakalimutan ng {{ui:Clear all prices}} ang lahat. I-off ang {{ui:Remember my prices when I save a takeoff}} para huminto. Hindi kailanman inilalagay ang presyo kada each sa item na kada foot. Tingnan ang [Alaala ng presyo mula sa mga nakaraang trabaho](topic:price-memory).

**Stock ng supplier at lead time**

- **I-check laban sa listahan ng supplier.** Ang {{ui:Supply}} sa toolbar ay tumatanggap ng stock list ng supplier ({{ui:Add a supplier file…}}), CSV o spreadsheet, at tinitingnan laban dito ang kailangan ng takeoff, kasama ang waste. Hanggang limang file ang pinananatili. Walang ipinapadala at walang tinatanong na supplier: ikaw ang nagdadala ng file.
- **Ang sinasabi nito.** Ang kulang na item ang nauuna: "Short by 120 EA", "Lead time 21 days", "On backorder", "Unit differs", "No stock figure" o "In stock". Nagsisimula sa 14 ang {{ui:Longest wait wanted (days)}}.
- **Order list.** Dina-download ng {{ui:Order list (CSV)}} ang mga kulang na item kasama ang kulang na dami, ang supplier at ang lead time.
- **Mga presyo sa Library.** Kung may presyo ang file, itinatakda ng {{ui:Prices into the Library}} ang material price ng bawat entry sa Library na may parehong pangalan at unit. I-reprice mula sa Library para dalhin ang mga ito sa takeoff.
- **Sa Problems panel.** Ang kakulangan ay babala at ang mahabang paghihintay ay note, sa ilalim ng "Supplier stock". Maaari mo itong tanggapin na may dahilan, at ang dahilan ay nise-save sa takeoff. Tingnan ang [I-check ang stock ng supplier at lead time](topic:supplier-stock).

**Mga AI assistant**

- **Mga tool para sa lahat ng tatlo.** Kapag pinayagan ang mga assistant sa {{ui:Settings}}, mababasa ng assistant ang legend (`legend_open`), patatakbuhin ang pagbilang (`legend_count_start`, pagkatapos `legend_count_status` at `legend_count_result`) at idadagdag ito (`legend_count_add`, na maaaring mag-preview muna). Mababasa nito ang naalalang presyo (`prices_list`) at mapipresyuhan ang mga item mula rito (`prices_apply`, na maaaring mag-preview muna), at mababasa ang supplier check (`supply_check`). Ang pagdaragdag ng supplier file ay ikaw pa rin ang gumagawa. Tingnan ang [Gamitin ang TakeoffCraft kasama ang mga AI assistant](topic:use-with-ai-assistants).

**Sa bawat app**

- **Mga wika.** Limampu't apat na wika sa kabuuan; sampu rito ay bago (Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili at Uzbek). Ang mga wikang iba sa Ingles ay machine draft hanggang may katutubong nagsasalita na nakabasa nito.
- **Mga input device.** Ang {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} ang nagtatakda ng gagawin ng trackpad, side button ng mouse, pen, 3D mouse, game controller o MIDI controller, para sa bawat app o para sa isa. Tingnan ang [Gamitin ang trackpad, 3D mouse o controller](common:input-devices).
- **Mga row ng toolbar.** Ang {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ay nag-aalok ng {{ui:Wrap}} (ang simula), {{ui:2 rows}} at {{ui:1 row}}; ang mga grupong hindi kasya ay nag-i-scroll pahalang. Tingnan ang [Ayusin ang mga panel](common:arrange-panels).
- **Problems panel.** Ang shared panel ng babala at note ay may dala na ngayon ng supplier stock check sa itaas, katabi ng iba pang check.
- **Mga add-on.** Sumusunod ang mga add-on sa listahan ng iyong account. Tingnan ang [Mga add-on at ang listahan ng iyong account](common:addons-basics).
- **Ikonekta ang iyong AI.** Ang CadCraft Studio ang hub: ikonekta ang iyong assistant nang isang beses para sa lahat ng walong app. Walang sariling AI ang Studio.

### Naayos sa 0.8.1

- **Seksyon ng classes sa DWG.** Mali ang uri ng pagbasa sa seksyon ng classes ng DWG file. Naayos ito sa TakeoffCraft, at sa apat pang app.
- **Mapapalitan ng Studio ang wika habang tumatakbo.** Dati, Ingles lamang ang Studio at ang mga naka-pack nitong edisyon. Hindi pa ito nasubukan sa desktop build sa bawat platform; sabihin sa amin kung hindi nagbabago ang wika.

### Wala pa sa bersyong ito

- **Hindi code-signed.** Maaaring magbabala ang Windows, at sa Mac ay right-click ka at piliin ang {{ui:Open}} sa unang pagkakataon. Naka-hold ang mga store build (Microsoft Store, Google Play, App Store), at hindi muling ginawa ang iPad at iPhone build para sa 0.8.1.
- **Mga update ng Studio.** Ang Windows installer at ang mga Linux package ay nagsusuri kada araw at nagtatanong muna. Sinasabi lamang ng portable zip, at hindi nag-a-update nang kusa ang macOS at ang APK. Susunod sa release ang 0.8 macOS .dmg.
- **Ikonekta ang iyong AI.** Wala sa bersyong ito ang one-click connect sa loob ng Studio, ang hosted connector para sa AI sa browser, ang sarili mong API key sa loob ng Studio, at ang nailathalang MCP package.
- **Bilangin ang lahat.** Kailangang iguhit ang mga simbolo nang tulad ng sa legend, at maaaring makaligtaan ang simbolong may pader o mahabang linyang dumaraan dito. Hindi nahahanap ang mga naka-mirror na simbolo, at ang sheet na walang scale at iginuhit sa ibang laki ay hinahanap sa laki ng legend. Suriin muna ang mga nahanap sa unang sheet bago pagkatiwalaan ang iba.
- **Stock ng supplier.** Tanging kasing-bago lamang ng file na idinagdag mo ang mga figure ng stock. Hindi kailanman tinatanong ng check ang supplier.
- **Mga wika.** Umaapaw ang app bar ng Tamil.

Ang iba pa ay nasa [Hindi pa nagagawa](topic:not-built-yet). Para sa release bago ito, tingnan ang [Ano ang bago sa 0.7](topic:whats-new-0-7).
