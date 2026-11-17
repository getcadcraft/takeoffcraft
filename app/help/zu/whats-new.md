---
title: Okusha ku-0.9
summary: Funda ubude ngamamitha, amasentimitha noma amamilimitha, izindawo ze-metric ngamamitha esikwele nendawo yodonga, izikali ezisethiwe ngaphambili ka-1:75 no-1:150, amayunithi wesisindo nezinga lokushisa, i-Arc enezindlela eziyishumi, namakhesa aphilayo, ukulandela nohlu lwabantu.
keywords: okusha, yini emisha, amanothi okukhishwa, changelog, 0.9, bonisa ubude njenge, amamitha, amasentimitha, amamilimitha, metric, landela okujwayelekile, amayunithi, amayunithi okubonisa, m2, amamitha esikwele, indawo yodonga, izikali ezisethiwe ngaphambili, 1:75, 1:150, isisindo, amakhilogremu, kg, itoni, ithani, lb, izinga lokushisa, celsius, fahrenheit, arc, izindlela ze-arc, ijika elingu-3, iradiyasi, ephilayo, amakhesa, landela, uhlu lwabantu, ikilasi, amathiphu, isakhiwo, izinguquko, 0.8, 0.8.1, inguqulo, izici ezintsha, bala konke, isiqondisi, isiqondisi sezimpawu, isethi yonke, inkumbulo yamanani, imisebenzi edlule, umsebenzi wokugcina, izinga lajwayelekile, umhlinzeki, isitoko, isikhathi sokulinda, ukushoda ngemva, uhlu lokuyala, ukushoda, iphaneli yezinkinga, izisizi, izilimi, amadivayisi okufaka, imigqa yebha yamathuluzi, dwg
from: 6182b998
---

Lokhu yikho okushintshile ku-TakeoffCraft 0.9, uma kuqhathaniswa ne-0.8.1. Ukukhishwa okuncane kule app: ubude bungafundeka manje ngamamitha, amasentimitha noma amamilimitha, izindawo nezikali zilandela umsebenzi we-metric ngendlela efanele, futhi i-Arc inezindlela eziyishumi zokudweba. Iseshini ephilayo nayo ikhombisa ukuthi ubani usendaweni nini.

## Okusha

### Funda ubude ngamamitha, amasentimitha noma amamilimitha

- **Bonisa ubude njenge.** {{ui:Settings}} › {{ui:TakeoffCraft}} unento ethi {{ui:Show lengths as}} enezinketho ezithi {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm kanye ne-mm. {{ui:Follow Global}} isebenzisa iyunithi yobude ye-metric oyiphawulile kumenyu {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}, futhi isebenzisa amafiti namainshi uma kungekho lutho oluphawulwe. Ishintsha indlela ubude obufundeka ngayo ephepheni, kubha yesimo nasemaphaneleni, kuhlanganise nokuphakama, ukujula, ukuqina namazinga. Inombolo engenalutho etshalwe enkundleni yokuphakama ifundwa ngeyunithi ebonisiwe.
- **Ukubonisa kuphela.** Izinani, izindleko namaphrinti kubalwa kusukela ebudeni obunembile. Ukukhetha kwe-1/16, 1/8 kanye ne-1/4 yeyinci kuvela kumafiti namainshi kuphela. Bona [Bonisa ubude ngamamitha](topic:show-lengths-in-meters).
- **Amayunithi wesisindo.** Into ethi {{ui:Typed quantity (no drawing)}} ingaba ngu-lb, TON, kg noma t, futhi inganikezwa amanani ngeyunithi ngayinye.
- **Izinga lokushisa.** Yonke into inenkundla ekhethwayo ethi {{ui:Temperature}} kumhleli wento, ibhalwe ngamadigri C noma F. {{ui:Show temperatures as}} kumenyu {{ui:Settings}} › {{ui:TakeoffCraft}} inikeza {{ui:Follow Global}}, °C noma °F.

### Izindawo nezikali zomsebenzi we-metric

- **Izindawo ngama-m2 kumdwebo.** Indawo ekalwe ngento ye-metric manje ithi m2 ethegini yomdwebo nasephaneli yamamaki, nakwethebula, esikhundleni se-SF. Umthetho uthi m2 uma into inikezwa amanani nge-metric noma ubude bubonisa m, cm noma mm, kanti SF uma kungenjalo.
- **Indawo yodonga.** Into yomugqa enobude nayo inobude bayo ibonisa nendawo yodonga (ubude kuphindwe ngobude) ohlwini lwezinto nanjengomugqa wensula ngaphansi kwethebula lezinani ngento.
- **Izikali ezisethiwe ngaphambili 1:75 no-1:150.** Zisohlwini lwe-{{ui:Preset}} eqenjini {{ui:Scale}}, okumanje linezikali ezingu-32. Bona [Izikali ezisethiwe ngaphambili](topic:scale-presets).

### I-Arc enezindlela eziyishumi

- Uma {{ui:Arc}} isebenza (inkinobho yethuluzi noma {{key:R}}), kuvela ibhokisi elithi {{ui:Arc method}} ebhareni leshidi: 3-Point, Start, Center, End, Start, Center, Angle, Start, Center, Length, Start, End, Angle, Start, End, Direction, Start, End, Radius, Center, Start, End, Center, Start, Angle kanye no-Center, Start, Length. Ingalo, ubude, iradiyasi nesiqondiso kungachofozwa noma kubhalwe. Isebenza emigqeni eqondile, ezindaweni nasemigodini ekhethiwe. Amafayela alondolozwe ngaphambi kwe-0.9 avula ngendlela efanayo. Bona [Dweba amajika ngezindlela eziyishumi](topic:draw-arcs-ten-methods).

### Ukusebenza ndawonye

- **Bona amakhesa abanye.** Kuseshini ephilayo, indlela yokubhekisa yalowo nalowo ibonakala ephepheni negama lakhe nombala wakhe, nebhokisi elinemigqa emincane ezungeze izimaka azikhethile. Abantu abasephepheni elehlukile babhalwa ngegama leshidi labo. Bona [Sebenzani ngokuphila nabanye](topic:work-live).
- **Landela umuntu, nohlu lwabantu.** Inkinobho ethi {{ui:People}} kuseshini ephilayo idweba uhlu lwabantu ngabanye, ngethuluzi abalisebenzisayo, ishidi abakulo nesikhathi ekhishe ngaso ukuhlelwa kokugcina. {{ui:Follow}} ishintsha ukubuka kwakho ukuze ihambisane nokwakhe, futhi umphathi angasebenzisa {{ui:Ask everyone to follow me}}. Bona [Landela umngane wethimba kuseshini ephilayo](topic:follow-a-teammate).

## Kuyo yonke i-app

- **Umbhalo wesiqondiso kanye neseluleko sokuqala.** Umbhalo ovela uma uhambisa isikhombi uyithiphu ye-Bootstrap, futhi iseluleko sokuqala singavalwa.
- **Amathebhu askrola.** Ibhande lamathebhu ephaneli elingangeni liyaskrola esikhundleni sokusikwa.
- **Izihloko zamathebhu.** Ithebhu yesiphequluli ifunda `<document> - TakeoffCraft | CadCraft`.
- **Isakhiwo.** Uhlu lwesakhiwo kumenyu {{ui:Settings}} luuhlu olwehlisekayo olubonisa isakhiwo osikhethile.
- **Ulimi.** Ulimi oluyikhethayo manje lufinyelela amagama aphrintwa yikhasi ngokwalo, njengoKusha, {{ui:Open}} kanye ne-Londoloza. Izilimi ezingesona isiNgisi ziyizidrafu zomshini kuze kufundwe umuntu wendabuko.

## Imikhawulo engisho iqiniso

- Ukubonisa ubude, amayunithi wesisindo nezinga lokushisa kanye nezilungiselelo ezintsha kuhlolwe ngamathesti nasekhasini. Akukahlolwa ngesandla zonke amaphaneli kuzo zonke iziyunithi.
- Uhlu lwabantu alikaze luhlolwe ngesandla ngekilasi langempela lothisha nabafundi.
- Izilimi ezingesona isiNgisi ziyizidrafu zomshini.
- Abafakeli be-Windows abaqinisekiswanga ngekhodi (Ulwazi olwengeziwe, bese Qhuba noma kunjalo). Isithombe sedisiki se-macOS asikaqinisekiswa (chofoza ngenkinobho yesokudla, bese {{ui:Open}}).

## Kwangaphambili: 0.8 kanye ne-0.8.1

Lokhu yikho okushintshile ku-TakeoffCraft 0.8 (kukhishwe ngo-2026-11-01) ne-0.8.1 (2026-11-02), uma kuqhathaniswa ne-0.7. Umugqa wezimpawu ungabalwa manje kuso sonke isethi ngasikhathi sinye, umsebenzi omusha ungaqala ngamanani emisebenzi yakho edlule, futhi umsebenzi ungahlolwa ngesitoko somhlinzeki. I-0.8.1 ukulungisa iphutha.

### Okusha

**Bala konke esethini**

- **Yiboksa isiqondisi kanye.** {{ui:Count everything}} ethulini ifunda isiqondisi sezimpawu: hudula ibhokisi ozungeze izimpawu namagama ezibhalwe eduze kwazo. Impawu ngayinye ibhalwa nesithombe negama layo, futhi igama liba yigama lento. Susa ukukhetha kokungakudingi, bese ukhetha {{ui:Count on N sheets}}. Ibha ikhombisa ishidi elisesekwa, {{ui:Cancel}} iyeka ukusebenza, futhi ikhasi lisasebenziseka.
- **Wonke amashidi kokusebenza kunye.** Impawu ngayinye ibalwa kuwo wonke amashidi avulekile. Ishidi elidwetshwe ngesikali esihlukile liseshwa ngalesosikali, futhi izimpawu zitholakala zijikiwe kunoma yiliphi i-engeli eqondile. Izimpawu zesiqondisi ngokwaso azibalwa kuleyoshidi.
- **Hlola ngaphambi kokungeza noma yini.** Isamba ngasinye sinesixhumanisi ngeshidi ngalinye ("E-103: 4") esiya kuleyoshidi. Chofoza ibhokisi kokutholakele ukuze ulisuse, bese uchofoza futhi ukuze ulibuyisele. Izinga lokufana (50% kuya ku-100%) lihlunga kuphela okutholakele; akukho okuphinde kusekwe.
- **Isinyathelo esisodwa sokubuyisela.** {{ui:Add N marks}} yenza into yokubala ngento ngayinye, ngophawu ezindaweni zonke ezitholakele. Igama elisuke liyinto yakho yokubala lisetshenziswa kabusha. {{key:Ctrl+Z}} ibuyisela zonke izinto nezimaka. Okwamukelwe nakho kuyengezwa kuthi {{ui:Learned}}.
- **Izimpawu nganoma yiliphi i-engeli.** Khetha {{ui:Symbols at any angle}} ngaphambi kokubala ukuze uthole nezimpawu ezijikiwe ngengalo engeyona eyisikhombisa. Ukusesha kujikisa ngayinye impawu njalo ngama-degree ayi-15, futhi impawu engeyona eyindilinga ingathatha isikhathi esingaphezu kwamaphindwe ayisithupha.
- **Yini kanye.** Ukufanisa izimpawu okuvamile kumashidi akho, akukho imodeli eqeqeshiwe, futhi akukho okushiya ikhompyutha yakho. Kwisethi eyenziwe ngamashidi angu-200 yathatha amasekhondi ayi-9.4 ukusuka kuqala kuya ekugcineni ku-Chrome ekhompyutheni ejwayelekile esheshayo; amaseti wamaplani angempela azoba nzima kakhulu. Bona [Bala konke esethini](topic:count-everything).

**Inkumbulo yamanani emisebenzini yakho**

- **I-TakeoffCraft ikhumbula amazinga akho.** Uma ulondoloza ibalo, into ngayinye enamanani esetshenziswayo ikhunjulwa ngegama nangohlobo: izinga lempahla, izinga lomsebenzi, ukulahleka neyunithi. Imisebenzi eyi-12 yokugcina igcinwa ngegama ngalinye. Igcinwa kulo khompyutha eceleni komtapo wamanani, ingasoze igcinwe ngaphakathi kwefayela lebalo, futhi akukho okuthunyelwa noyiphi indawo.
- **Qala ibalo elisha kuwo.** {{ui:Prices}} ethulini ibonisa, ngento ngayinye, amazinga womsebenzi wokugcina, amazinga ajwayelekile nobubanzi. {{ui:Use last}} noma {{ui:Use typical}} inikeza into eyodwa amanani, futhi {{ui:Price N unpriced items from memory}} igcwalisa zonke izinto ezingenawo amanani okwamanje. Ukusebenzisa ngakunye kuyisinyathelo esisodwa sokubuyisela.
- **Imisebenzi edlule.** {{ui:Learn from a past takeoff…}} ikhumbula izinto ezinamanani zebalo elilondoloziwe (.json).
- **Bona, shintsha, khohlwa.** {{ui:Everything remembered}} ibonisa uhlu lwawo wonke amagama; inkinobho yokusula ikhohlwa igama elilodwa, futhi {{ui:Clear all prices}} ikhohlwa konke. Vala {{ui:Remember my prices when I save a takeoff}} ukuze kuyeke. Amanani "ngakunye" awasoze afakwe kuto eqoshwa ngefidi. Bona [Inkumbulo yamanani emisebenzini yakho edlule](topic:price-memory).

**Isitoko somhlinzeki nezikhathi zokulinda**

- **Hlola ngohlu lomhlinzeki.** {{ui:Supply}} ethulini ithatha uhlu lwesitoko somhlinzeki ({{ui:Add a supplier file…}}), i-CSV noma ishidi lezibalo, bese ihlola okudingekayo ibalo, kanye nokulahleka, ngakho. Kugcinwa kuze kube yimafayela amahlanu. Akukho okuthunyelwa futhi akukho okucela umhlinzeki: wena uletha ifayela.
- **Okushoyo.** Izinto ezinganele zivela kuqala: "Short by 120 EA" ihunyushwa ibe "Ishoda ngo-120 EA", "Isikhathi sokulinda izinsuku ezi-21", "Ioda ilindile", "Iyunithi ihlukile", "Akukho inani lesitoko" noma "Kukhona esitokweni". {{ui:Longest wait wanted (days)}} iqala ku-14.
- **Uhlu lokuyala.** {{ui:Order list (CSV)}} ilanda izinto ezishoda ngenani elishodayo, umhlinzeki kanye nesikhathi sokulinda.
- **Amanani angena emtapweni.** Uma ifayela linamanani, {{ui:Prices into the Library}} isetha izinga lempahla ye-Library ngayinye enegama neyunithi efanayo. Phinda unikeze amanani kusuka emtapweni ukuze uwafake ebalweni.
- **Ephaneli yezinkinga.** Ukushoda kuyisexwayiso kanti isikhathi eside kuyisaziso, ngaphansi kwe-"Supplier stock". Ungamukela okukodwa ngesizathu, futhi isizathu siyagcinwa ebalweni. Bona [Hlola isitoko somhlinzeki nezikhathi zokulinda](topic:supplier-stock).

**Izisizi ze-AI**

- **Amathuluzi kubo bonke abathathu.** Uma izisizi zivunyelwe kumenyu {{ui:Settings}}, isizi singafunda isiqondisi (`legend_open`), senze ukubala (`legend_count_start`, bese `legend_count_status` kanye ne-`legend_count_result`) bese siyengeza (`legend_count_add`, okungabonisa kuqala). Singafunda amanani agciniwe (`prices_list`) futhi sinikeze izinto amanani kuwo (`prices_apply`, okungabonisa kuqala), futhi singafunda ukuhlolwa kwesitoko somhlinzeki (`supply_check`). Ukungeza ifayela lomhlinzeki kuseyisandla sakho. Bona [Sebenzisa i-TakeoffCraft nezisizi ze-AI](topic:use-with-ai-assistants).

**Kuyo yonke i-app**

- **Izilimi.** Izilimi ezingama-54 ngokubonke; eziyishumi ziyizintsha (isiLithuania, isiLatvia, isiBosnia, isiMarathi, isiTelugu, isiAlbania, isiAfrikaans, isiFilipino, isiSwahili kanye nesiUzbek). Izilimi ezingesona isiNgisi ziyizidrafu zomshini kuze kufundwe umuntu wendabuko.
- **Amadivayisi okufaka.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} isetha ukuthi i-trackpad, izinkinobho zangasese ze-mouse, ipeni, i-mouse ye-3D, isilawuli segeyimu noma isilawuli se-MIDI senzani, kuyo yonke i-app noma kwesodwa. Bona [Sebenzisa i-trackpad, i-mouse ye-3D noma isilawuli](common:input-devices).
- **Imigqa yebha yamathuluzi.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} inikeza {{ui:Wrap}} (okokuqala), {{ui:2 rows}} kanye {{ui:1 row}}; amaqembu angangeni askrola ohlangothini. Bona [Hlela amaphaneli](common:arrange-panels).
- **Ephaneli yezinkinga.** Iphaneli elabelanwa ngezexwayiso nezaziso manje liqukethe ukuhlolwa kwesitoko somhlinzeki okungenhla, eceleni kwezinye izinhlolo.
- **Okwengeziwe.** Okwengeziwe kulandela uhlu lwe-akhawunti yakho. Bona [Okwengeziwe nohlu lwe-akhawunti](common:addons-basics).
- **Xhuma i-AI yakho.** I-CadCraft Studio iyisikhungo: xhuma isizi sakho kanye kuphela kuzo zonke izinhlelo eziyisishiyagalombili. I-Studio ayinayo i-AI yayo.

### Kulungisiwe ku-0.8.1

- **Isigaba samakilasi e-DWG.** Isigaba samakilasi efayeleni le-DWG safundwa njengohlobo olungalungile. Lokhu kulungisiwe ku-TakeoffCraft nakwamanye ama-app amane.
- **I-Studio ingashintsha ulimi isasebenza.** Ngaphambili i-Studio nezinhlobo zayo ezipakishiwe zaziyisiNgisi kuphela. Lokhu akuhlolwanga kuwo wonke amapuleti ohlelo lwedeskthophu; sitshele uma ulimi lungashintshi.

### Akukakufakwa kulolu hlobo

- **Akukaqinisekiswa ngekhodi.** I-Windows ingase isixwayise, futhi ku-Mac uchofoza ngenkinobho yesokudla bese ukhetha {{ui:Open}} ngokokuqala. Izakhiwo zesitolo (Microsoft Store, Google Play, App Store) zimisiwe, futhi isakhiwo se-iPad ne-iPhone asizange sakhiwe kabusha ngo-0.8.1.
- **Izibuyekezo ze-Studio.** Umfakeli we-Windows namaphakheji e-Linux ahlola kanye ngosuku futhi ayabuza kuqala. Ifayela le-zip elihambisekayo liyakutshela kuphela, kanti i-macOS ne-APK azibuyekezi ngokuzenzakalelayo. Ifayela le-.dmg le-macOS ka-0.8 lilandela ukukhishwa.
- **Xhuma i-AI yakho.** Ukuxhuma ngokuchofoza kanye ngaphakathi kwe-Studio, isixhumi esisebenza kusiphequluli, ukhiye wakho we-API ngaphakathi kwe-Studio kanye nephakheji le-MCP elishicilelwe akuthenjiswa kulolu hlobo.
- **Bala konke.** Idinga izimpawu ezidwetshwe ngendlela efanayo nasesiqondisini, futhi impawu enodonga noma umugqa omude ushayiwe ingase iphuthelwe. Izimpawu ezigoqwe azitholakali, futhi ishidi elingenasikali elidwetshwe ngesinye isilinganiso liseshwa ngesilinganiso sesiqondisi. Hlola okutholakele kushidi lokuqala ngaphambi kokuthembela kokunye.
- **Isitoko somhlinzeki.** Izibalo zesitoko zisemusha njengefayela oliwengezayo. Ukuhlolwa akukaze kucele umhlinzeki.
- **Izilimi.** Ibha yoku-app ye-Tamil iyachichima.

Konke okunye kusohlwini [Akukakwakhiwa](topic:not-built-yet). Ngokukhishwa okwandulela lona, bona [Okusha ku-0.7](topic:whats-new-0-7).
