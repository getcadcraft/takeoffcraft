---
title: Nýjungar í 0.7 (eldra)
summary: DWG- og DXF-teikningar opnast sem blöð með eigin mælikvarða, nákvæmar talningar og lengdir úr teikningunni sjálfri, valið undirverktakatilboð sem verð pakka, boð um tilboð með lokuðum verðum, aðstoðarmannaverkfæri fyrir teikningar og USD úr þrívíddarathugunarsýninni.
keywords: nýjungar 0.7, eldri útgáfa, útgáfuskýrslur, breytingaskrá, breytingar, 0.7, útgáfa, nýir eiginleikar, dwg, dxf, teikning, skipulag, líkanrými, mælikvarði teikningar, talning úr teikningu, cad count, blokkir, kvikar blokkir, eigindi, lög, xref, tengd teikning, mæla teikningu, fjöllína, skygging, merkt pdf, valið tilboð, nota tilboð, senda til tilboðsgjafa, boð um tilboð, lokuð tilboð, opnun tilboða, seint tilboð, skrár undirverktaka, csv, aðstoðarmaður, mcp, usd, usdz, einingar, einingalistar, þétt, spjöld, gluggar, portúgalska
from: 0e3a424f
---

Þetta er það sem breyttist í TakeoffCraft 0.7, miðað við 0.6. Teikningar opnast nú eins og þær eru, án þess að prenta í PDF fyrst, og tilboðspakki getur farið til undirverktaka og komið til baka verðlagður.

## Nýtt

### DWG- og DXF-teikningar

- **Opnaðu teikningu sem blöð.** {{ui:Opna teikningar}} í hópnum {{ui:Skrá}} ({{key:Mod+O}}, eða slepptu skránum) tekur DWG- og DXF-teikningar við hlið PDF-skjala. Líkanrými og sérhvert skipulag verða að blöðum í listanum {{ui:Blöð}}, og magntaka getur náð yfir teikningar og PDF-skjöl saman. Ekkert er hlaðið upp. Sjá [Opna DWG- eða DXF-teikningu](topic:open-a-drawing).
- **Mælikvarðinn kemur úr teikningunni.** Skipulag byrjar í mælikvarða stærsta glugga síns, nefnt sem forstilling þegar hann er það, til dæmis 1/2" = 1'-0". Líkanrými byrjar í einingum teikningarinnar. Teikning án eininga segir „No scale" þar til þú kvarðar hana. {{ui:Kvarða}}, {{ui:Athuga}} og {{ui:Forstilling}} vinna enn. Sjá [Mælikvarðinn](topic:open-a-drawing#the-scale).
- **Lög og tengdar teikningar.** {{ui:Lög}} á blaðastikunni sýnir eða felur lög teikningarinnar. Lög sem skráin slökkti á eða fraus byrja falin og eru ekki talin nema þú veljir það. Tengd teikning (xref) sem er opnuð við hlið hýsilsins er teiknuð og talin þar sem hún er sett inn; þangað til hún er opin segir stöðustikan hvað vantar. Sjá [Lög](topic:open-a-drawing#layers).
- **Merkt PDF virkar úr teikningu.** {{ui:Flytja út}} › {{ui:Merkt PDF}} teiknar fyrst merkt blöð teikningar sem PDF, þannig að afritið sýnir merkin þín og skýringu án prentunarskrefs. Það er teiknað í svörtu eða litum teikningarinnar, án prentstílatafla. Sjá [Merkt PDF](topic:export-estimate#a-marked-pdf).

### Nákvæmar talningar og lengdir úr teikningu

- **Teldu það sem teikningin segir að sé til.** {{ui:Telja úr teikningu}} á blaðastikunni telur blokk eftir heiti (þar með taldar hreiðraðar blokkir, stöður kvikra blokka og blokkafylki), allt af einni gerð á lagi, eða texta- eða eigindagildi. Það telur það sem blaðið sýnir, eða alla teikninguna einu sinni. Að bæta við merkjunum er eitt afturköllunarskref, og ef talið er aftur bætast aðeins við nýir hlutir. {{ui:Sjálftalning}} er áfram fyrir PDF-skjöl og tákn sem eru ekki blokkir. Sjá [Telja úr teikningu](topic:count-from-a-drawing).
- **Mældu út frá línum teikningarinnar sjálfrar.** {{ui:Mæla teikningu}} tekur línur, boga, fjöllínur, hringi, skyggingar og fleti sem þú smellir á eða rammar inn sem merki á línulegum lið eða flatarmálslið. Bogar, kúpur og göt í skyggingu koma út nákvæm; sporbaugar og splínur eru mæld í fínum strengjum, og stikan segir það. Sjá [Mæla úr teikningu](topic:measure-from-a-drawing).

### Tilboð

- **Notaðu tilboð undirverktaka sem verð pakkans.** Í {{ui:Flytja út}} › {{ui:Tilboðspakkar og jöfnun…}} skaltu velja {{ui:Nota}} á tilboði. Magn liða pakkans helst sem magn, ein **Valið tilboð**-lína ber verðið, liðir sem tilboðið sleppir haldast á þínum eigin kostnaði, og yfirhöfuð, hagnaður og trygging gilda um það. Að skipta um tilboð er eitt afturköllunarskref; vinnubókin og tilboðsyfirlitið bera það með sér. Sjá [Nota tilboð sem verð pakkans](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Sendu pakka í tilboð.** {{ui:Senda til tilboðsgjafa…}} undir pakka sendir hverjum undirverktaka tengil í tölvupósti á síðu sem þarf ekki aðgang: þeir sjá umfangið og blöðin sem PDF, skrifa verð á hvern lið eða merkja hann sem ekki innifalinn, bæta við athugasemdum og allt að þremur skrám, eða hafna. {{ui:Sækja verð}} sækir það sem barst inn í jöfnunarblaðið, merkt **vefur**. Sending er aðeins opin aðgöngum sem CadCraft-teymið hefur virkjað meðan á prófun stendur (sjá neðar). Sjá [Senda pakka í tilboð](topic:bid-invitations).
- **Lokuð þar til opnun.** Verð geta verið lokuð þar til opnunartími sem þú setur: þangað til sér enginn verð, líka þú. Við opnunina sést hvert tilboð í einu, og tilboð sem kemur eftir skilafrest er merkt sem seint. Sjá [Lokuð tilboð og opnunin](topic:bid-invitations#sealed-bids-and-the-opening).
- **Skrár undirverktaka.** Aðgangurinn þinn á getcadcraft.com geymir tengiliði hvers fyrirtækis, greinar, svör við hæfniskönnunum og dagsetningar trygginga og leyfa (merkt einu sinni liðin eða innan 30 daga), ásamt fyrri tilboðum þeirra. Fluttu þær inn og út sem CSV, og veldu þær þegar þú sendir pakka. Sjá [Á vefnum](topic:bid-invitations#on-the-website).

### Gervigreindaraðstoðarmenn

- **Aðstoðarmenn geta bætt við magntökuna.** Með **Breyta** hakað getur þinn eigin aðstoðarmaður bætt við liðum (`items_add`) og mælt hlaup, flatarmál og talningar á blaði (`marks_add`; lengdir og flatarmál aðeins á blaði með mælikvarða). Hvert kall er eitt afturköllunarskref.
- **Aðstoðarmannaverkfæri fyrir teikningar.** Á opinni DWG- eða DXF-teikningu getur aðstoðarmaður listað blöðin og það sem má telja, talið nákvæmlega, bætt við talningarmerkjum og mælt út frá rúmfræði teikningarinnar. Án þess að TakeoffCraft sé opið opnar CadCraft MCP-netþjónninn teikningu sem nýja magntöku og vistar hana, og `cadcraft count` telur úr skipanalínunni. Sjá [Hvað aðstoðarmaður getur beðið um](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **Þrívíddarathugunarsýnin sem USD.** {{ui:USD pakki (.usdz)}} við hlið {{ui:GLB}} í þrívíddarathugunarsýninni skrifar hvern vegg, plötu, undirstöðu, talningarpóst og hlaup sem sinn eigin hlut, nefndan eftir lið sínum og með magni hans, í metrum. Aðstoðarmaður getur flutt það út líka (`usd_export`). Sjá [Flytja þrívíddarathugunarsýn út sem USD](topic:usd).

## Í öllum forritum

- **Einingar.** {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Einingar}} hefur einn lista hvor fyrir lengd, flatarmál, rúmmál, horn og halla, með nákvæmum stærðum sem skilgreiningar einingjanna gefa (bandaríski landmælingafóturinn er sín eigin eining). Slökktu á einingunum sem þú notar aldrei og þær hverfa af einingalistunum; merktu eina og ný vinna byrjar í henni. Skrá heldur alltaf sinni eigin einingu. Í TakeoffCraft fylgja {{ui:Eining}}-listar liðs rofunum, nýr liður byrjar í merktri lengdar- eða flatarmálseiningu, þakferningar (SQ), ekrur og hektarar eru nýjar flatarmálseiningar, og lengdarreitur tekur merki hvaða einingar sem er, eins og `3 yd`. Sjá [Einingar, slegin gildi og einingalistar](common:unit-lists).
- **Þéttara skipulag og spjöld sem fela sig.** {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Þéttleiki skipulags}} › {{ui:Þétt}} kemur meira á skjáinn (snertiskjáir og símar halda stóru hnöppunum sínum). Hvert hliðarspjald hefur mjóa titilstiku: dragðu hana til að festa spjaldið eða gera það fljótandi, slepptu henni á titilstiku annars spjalds til að deila einum ramma sem flipum, festu hana til að renna henni út að brún, eða feldu hana og sæktu hana aftur af brúninni. Sjá [Raða spjöldunum](common:arrange-panels#make-the-layout-denser).
- **Gluggar færast.** Dragðu glugga á titilstikunni úr vegi teikningarinnar; hann kemur aftur þar sem þú skildir við hann. Tvísmelltu á titilstikuna til að miðja hann aftur. Sjá [Færa glugga](common:arrange-panels#move-a-dialog).
- **Uppskriftir fyrir gervigreindaraðstoðarmenn.** Tíu unnin verkefni fyrir þinn eigin aðstoðarmann (taka til teikningu, teikna mengi, athuga teikningar, spyrja líkan spurninga, leggja saman magntöku, prófa afbrigði hluta …), hvert með þeim verkfærum sem það kallar á og heimildunum sem það þarf, og hvert endurspilað í prófunum okkar. Forritin innihalda enga gervigreind. Sjá [Uppskriftir fyrir gervigreindaraðstoðarmenn](common:assistants-recipes).
- **Tungumál.** **Português (Portugal)** er nýtt í {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Tungumál}}. Það, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** hafa nú hvert orð forritanna, sem drög sem móðurmálsmaður hefur ekki yfirfarið. Hjálparefni er á ensku.
- **CadCraft Studio** segir af hverju athugun á uppfærslu mistókst (engin skrá fyrir þitt kerfi enn, ekkert net, röng undirritun) í stað þess að segja bara „Done", og hættir að sýna Nýjungakort sem þú lokaðir þar til nýrri útgáfa er komin.

## Ekki komið í þessa útgáfu enn

- **0.7 er ekki kóðaundirritað.** Undirritun og Microsoft Store-pakkinn færðust í 0.8 því vottunin á skilríkinu hefur ekki borist enn. Athugaðu SHA-256-gildið við hverja skrá á getcadcraft.com/download. Á Windows, ef SmartScreen stöðvar uppsetningarforritið, veldu {{ui:Meiri upplýsingar}} og síðan {{ui:Keyra samt}}. Á Mac skaltu í fyrsta skipti hægrismella á CadCraft Studio og velja {{ui:Opna}}. CadCraft Studio er ekki í neinni forritaverslun enn, og það er engin iPad- eða iPhone-útgáfa enn.
- Listarnir fyrir horn og halla í {{ui:Einingar}} eru vistaðir, en enginn reitur les þá enn.
- **Boð um tilboð eru óvirk fyrir flesta aðganga.** Meðan eiginleikinn er prófaður fer póstur til utanaðkomandi bjóðenda aðeins frá aðgöngum sem CadCraft-teymið hefur virkjað. Síður bjóðenda virka fyrir öll boð sem þegar hafa verið send. Aðrir: sæktu {{ui:Umfang CSV}}, sendu það sjálf í tölvupósti og skráðu tilboðin inn.
- Gluggi í CadCraft Studio getur ekki sent boð um tilboð enn: hann segir að nota TakeoffCraft í vafranum. Að opna magntöku með sendum beiðnum, jöfnun og val á tilboði virkar í Studio.
- Viðbótarskjöl, verkbréf, undirritunarblað umfangs sem hver bjóðandi skrifar undir, og sjálfvirkar áminningar fyrir tryggingadagsetningu sem er að renna út, eru ekki smíðuð. Valið tilboð endurverðleggur ekki tilboð valkosts á sínu svæði.
- Teikningar: stíltöflur fyrir prentun og CTB-skrár eru ekki notaðar, tvíundar-DXF er hafnað (vistaðu sem ASCII DXF eða DWG), tengdar teikningar finnast aðeins meðal opinna skráa eftir skráarheiti, og PDF-undirlög, myndir og OLE-hlutir í teikningu eru hvorki teiknaðir né taldir. Talningar og mælikvarðar hafa verið prófaðir á sýnisteikningum, ekki enn á teikningum úr raunverulegu verki sem opnaðar eru í forritinu sem bjó þær til.
- Aðstoðarmaður getur bætt við liðum og merkjum en getur ekki fært, breytt né eytt merkjum sem þegar eru til.

Allt annað er í [Ekki smíðað enn](topic:not-built-yet).
