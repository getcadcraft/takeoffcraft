---
title: Frá öðrum magntökuhugbúnaði
summary: Hvernig venjur sérhæfðra magntökuforrita og PDF-merkingarforrita falla að TakeoffCraft, og þeir munir sem valda ruglingi.
keywords: skipti, flutningur, skilyrði, hlutar, mælitól, merkingalisti, magntengill, magntökuvenjur, munur, bera saman
from: 12004ce5
---

Ef þú hefur unnið magntöku í PlanSwift eða með mælitólunum í Bluebeam Revu mun stærstur hluti TakeoffCraft líklega vera kunnuglegur: teikningasett, mælikvarði á hvert blað, hlutir sem þú mælir og verðsett heildarsumma. Hvernig hlutirnir tengjast saman er öðruvísi á sumum stöðum, og þeir staðir eru taldir upp hér að neðan.

Ef þú þekkir PlanSwift eða On-Screen Takeoff, veldu valmyndarstílinn {{ui:Magntökuborð}} í {{ui:Stillingar}} › {{ui:TakeoffCraft}} › {{ui:Valmyndir, takkar og mús}}: valmyndastika með Skrá, Breyta, Sýn, Mælikvarði, Magntaka, Liðir, Merking og Flytja út, yfir röð magntökuverkfæra, með forstillingum mælikvarða á blaðastikunni. Sjá [Valmyndir, takkar og mús](topic:menus-keys-and-mouse).

## Venjur yfirfærðar

| Það sem þú þekkir | Í TakeoffCraft |
|---|---|
| Að opna verk eða verkefni sem geymir teikningarnar (PlanSwift) | Opnaðu PDF-skjölin og `.takeoff.json`-verkefnisskrána hlið við hlið. Verkefnisskráin geymir aðeins magntökuna; PDF-skjölin eru áfram þínar eigin skrár. |
| Merkingalisti með athugasemdum, skýjum og áherslum (Bluebeam) | {{ui:Merking}} á blaðastikunni: athugasemdir, ský og áherslur með stöðu (Opið, Svarað, Lokað), skráð undir **Merkingar** og teiknuð í merkta PDF-skjalinu. Sjá [Athugasemdir, ský og áherslur](topic:markups). |
| Mælingar vistaðar sem merkingar inni í PDF (Bluebeam) | Magntakan býr í `.takeoff.json`-skránni. {{ui:Merkt PDF}} skrifar afrit með magntökunni teiknaðri inn, til deilingar; {{ui:PDF með magntökunni inni}} skrifar afrit sem geymir magntökuna, til að opna aftur í TakeoffCraft. |
| Magntökuliðir (PlanSwift), sérsniðin mælitól vistuð í verkfærakistunni (Bluebeam) | **Liðir** undir {{ui:Liðir}}: heiti, gerð, litur, eining, hæð eða dýpt, úrgangur og einingarverð. |
| Hlutar og samsetningar með formúlum (PlanSwift) | {{ui:Samsetning}} liðarins: íhlutir með formúlu sem notar `L H A N P`. |
| Að stilla mælikvarða blaðsins, eða kvarða (hvort tveggja) | {{ui:Forstilling}}-listi eða {{ui:Kvarða}} í {{ui:Mælikvarði}}-hópnum, fyrir hvert blað. {{ui:Athuga}} mælir þekkta vídd. |
| Að beita einum mælikvarða á síðubil | Ekki enn: stilltu hvert blað. |
| Gluggar með mismunandi mælikvarða á einu blaði (Bluebeam) | Ekki enn: einn mælikvarði á hvert blað. |
| Fjöllínulengdar- og flatarmálsverkfæri (Bluebeam), línuleg og flatarmálsmagntaka (PlanSwift) | {{ui:Línuleg}} ({{key:L}}) og {{ui:Flatarmál}} ({{key:A}}). |
| Að halda Shift fyrir beinar línur | {{key:Shift}} smellir á 45° skref, sama hugmynd. |
| Smellt á línur teikningarinnar | Er sjálfgefið: endar, miðpunktar, skurðpunktar og næsti punktur á línu, og {{key:F3}} slekkur á því, eins og í CAD-forritum. |
| Talningarverkfæri (bæði) | {{ui:Telja}} ({{key:C}}). |
| Sjónræn leit að táknum (Bluebeam) | {{ui:Sjálftalning}} ({{key:S}}): boxaðu eitt tákn, yfirfarðu, bættu við. |
| Úrskurðir eða frádrættir í flötum | {{ui:Úrskurður}} ({{key:X}}) á völdum fleti, og kringlóttir úrskurðir. |
| Frádrættir á línulegum keðjum | Teiknaðu keðjuna beint í gegn og ýttu á {{key:E}} ({{ui:Frádráttur}}) fyrir opið. Sjá [Mæla línulegar keðjur](topic:measure-linear). |
| Bogahlutar í fjöllínu | {{ui:Bogi}} ({{key:R}}): smelltu á punkt á ferlinum, og síðan á endann. |
| Merkingalistinn með magndálkum (Bluebeam) | Magntaflan {{ui:Magntölur}}, {{ui:Eftir lið}} eða {{ui:Eftir blaði}}. |
| Verðlagningarnet með verðlagningu (PlanSwift) | Sama taflan: úrgangur, efni og vinna á einingu, útreiknaðar summur og {{ui:Heildarverð verks}}. |
| Útflutningur í Excel | {{ui:XLSX}} með lifandi formúlum, eða {{ui:CSV}}. |
| Escape til að stöðva verkfæri | {{key:Esc}} hættir við og fer aftur í {{ui:Velja}}. |
| Hægri smellur til að ljúka | Hægri smellur klárar keðju eða lokar fleti hér líka. Það er engin hægri-smellsvalmynd. |

## Munur sem veldur ruglingi

**Magntakan er ekki inni í PDF-skjalinu þínu.** Ekkert sem þú gerir breytir PDF-skjölunum. Vistaðu `.takeoff.json`-skrána og geymdu hana með teikningunum. Ef þú sendir einhverjum merkta PDF-skjalið sendirðu ekki breytanlega magntöku: sendu verkefnisskrána og upprunalegu PDF-skjölin, eða [PDF með magntökunni inni](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDF-skjöl eru pöruð eftir efni, ekki nafni.** Uppfært blað sem er vistað yfir gamla skráarnafnið er ný skrá fyrir TakeoffCraft, án mælikvarða og án merkja. Gömlu merkin haldast á gömlu útgáfunni og halda áfram að telja. Sjá [Vista og opna magntöku aftur](topic:save-and-reopen#when-a-pdf-has-changed).

**Ómæld merki eru skilin út, ekki talin sem núll.** Ef blað hefur engan mælikvarða telja keðjur þess og fletir ekki, og taflan segir „Ófullkomið“. Í mörgum forritum sæir þú bara 0. Sjá [Stilla mælikvarðann](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Engin ágiskun á blaðstærð.** Forstillingar gera ráð fyrir að PDF-skjalið sé prentað í fullri stærð. PDF í hálfri stærð eða „passa á síðu“ þarf {{ui:Kvarða}}. Notaðu alltaf {{ui:Athuga}}.

**Einn liður, ein aðalgerð, fleiri ef þú biður um.** Liður er línulegur, flatarmáls- eða talningarliður, og gerð hans læsist þegar hann hefur merki. Skilyrði sem gefur bæði flöt og ummál hans er flatarmálsliður: ummál hans er breytan `P`. Veggur með bæði lengd og flatarmáli er línulegur liður með hæð. Fyrir fjölskilyrðisliði, eins og herbergi með gólfi, grunni og hurðum, hakaðu við hinar gerðirnar undir **Mæla líka**: hver þeirra er verðlögð í sinni línu. Sjá [Einn liður, nokkrar gerðir merkja](topic:create-items#one-item-several-kinds-of-marks).

**Formúlur keyra á heildum.** Samsetningarformúlur nota heildir liðarins yfir öll blöð, ekki hverja keðju fyrir sig. `N` (fjöldi keðja eða fleta) er þar fyrir aukahluti á hverja keðju, eins og eina aukastoð á hvern vegg.

**Ummál tekur með úrskurði.** `P` flatar tekur með kantana af götum hans. Sjá [Mæla fleti með úrskurðum](topic:measure-areas#read-the-area).

**Dráttur hliðrar.** Vinstri hnappadráttur á blaðinu hliðrar í öllum verkfærum nema {{ui:Sjálftalning}}. Þú þarft aldrei að skipta yfir í hliðrunarverkfæri. Hjólið aðdrættir; það skrollar ekki.

**Afrit til endurheimtar, ekki ský.** TakeoffCraft geymir afrit af vinnu þinni í þessum vafra og býður það aftur eftir hrun ([Ef flipinn eða vafrinn hættir](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), en magntökuna þarf að vista sjálfur: {{key:Mod+S}}. Skýjavistun er ekki tiltæk enn.

**Allt er í vafranum.** Ekkert þarf að setja upp, og teikningarnar eru aldrei hlaðnar upp. Fyrir skjáborðsforrit kemur TakeoffCraft í CadCraft Studio, með hinum sjö forritunum.

## Ekki komið ennþá

Svæðisbundin mælikvarðasvæði á blaði eru ekki byggð enn. Sjá [Hvað er ekki byggt enn](topic:not-built-yet) fyrir allan listann og hvað á að gera í staðinn.
