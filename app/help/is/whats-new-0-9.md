---
title: Nýtt í 0.9 (eldra)
summary: Lesa lengdir í metrum, sentímetrum eða millimetrum, flatarmál í m2 með veggfleti, 1:75 og 1:150 mælikvarðaforstillingar, þyngdar- og hitaeiningar, Bogi með tíu aðferðum, lifandi bendlar, Fylgja og listi yfir fólk.
keywords: nýtt í 0.9, eldri útgáfa, nýtt, hvað er nýtt, útgáfuskýrslur, breytingaskrá, 0.9, sýna lengdir sem, metrar, sentímetrar, millimetrar, metrakerfi, fylgja almennt, einingar, birtingareiningar, m2, fermetrar, veggflötur, mælikvarðaforstillingar, 1:75, 1:150, þyngd, kílógrömm, kg, tonn, ton, lb, hitastig, celsíus, fahrenheit, bogi, bogaaðferðir, 3 punkta bogi, radíus, lifandi, bendlar, fylgja, listi yfir fólk, flokkur, verkfæraábendingar, skipulag, breytingar, 0.8, 0.8.1, útgáfa, nýir eiginleikar, telja allt, skýring, heil mengi, verðminni, fyrri verk, síðasta verk, dæmigert verð, birgir, lager, afhendingartími, biðpöntun, pöntunarlisti, skortur, vandamálaspjald, aðstoðarmaður, tungumál, inntakstæki, línur tækjastikunnar, dwg
from: f4322ba2
---

Þetta er það sem breyttist í TakeoffCraft 0.9, miðað við 0.8.1. Þetta er lítil útgáfa fyrir þetta forrit: lengdir má nú lesa í metrum, sentímetrum eða millimetrum, flatarmál og mælikvarðar fylgja metrakerfinu almennilega og Bogi hefur tíu leiðir til að teikna. Lifandi lotur sýna einnig hvar allir eru.

## Nýtt

### Lesa lengdir í metrum, sentímetrum eða millimetrum

- **Sýna lengdir sem.** {{ui:Settings}} › {{ui:TakeoffCraft}} hefur {{ui:Show lengths as}} með {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm og mm. {{ui:Follow Global}} notar metrísku lengdareininguna sem þú merktir með stjörnu í {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}, og fet og tommur þegar engin er merkt. Þetta breytir því hvernig lengdir birtast á blaðinu, í stöðustikunni og í spjöldunum, þar á meðal hæðir, dýpt, þykkt og kótar. Heil tala sem þú slærð inn í hæðarreit er lesin í þeirri einingu sem sýnd er.
- **Eingöngu birting.** Magn, kostnaður og útflutningur er reiknaður út frá nákvæmu lengdunum. Valið 1/16, 1/8 og 1/4 tommu birtist aðeins fyrir fet og tommur. Sjá [Sýna lengdir í metrum](topic:show-lengths-in-meters).
- **Þyngdareiningar.** Atriði í {{ui:Typed quantity (no drawing)}} geta nú verið í lb, TON, kg eða t og verðlagst eftir einingu.
- **Hitastig.** Sérhvert atriði hefur valfrjálsan reit {{ui:Temperature}} í atriðaritlinum, skrifaðan í °C eða °F. {{ui:Show temperatures as}} í {{ui:Settings}} › {{ui:TakeoffCraft}} býður upp á {{ui:Follow Global}}, °C eða °F.

### Flatarmál og mælikvarðar fyrir metrísk verk

- **Flatarmál í m2 á teikningunni.** Flatarmál sem mælt er með metrísku atriði segir nú m2 á teikningarmerkinu og mælispjaldinu, auk þess sem það gerir í töflunni, í stað SF. Reglan er m2 þegar atriðið er verðlagt í metrum eða lengdir eru sýndar í m, cm eða mm, og SF annars.
- **Veggflötur.** Línulegt atriði með hæð sýnir einnig veggflöt sinn (lengd sinnum hæð) í atriðalistanum og sem athugasemdarlínu undir magntöflunni eftir atriðum.
- **Mælikvarðaforstillingar 1:75 og 1:150.** Þær eru í listanum {{ui:Preset}} í hópnum {{ui:Scale}}, sem hefur nú 32 mælikvarða. Sjá [Mælikvarðaforstillingar](topic:scale-presets).

### Bogi með tíu aðferðum

- Meðan {{ui:Arc}} er virkt (verkfærastikuhnappur eða {{key:R}}) birtist reiturinn {{ui:Arc method}} á blaðastikunni: 3 punktar, Upphaf, Miðja, Endir, Upphaf, Miðja, Horn, Upphaf, Miðja, Lengd, Upphaf, Endir, Horn, Upphaf, Endir, Stefna, Upphaf, Endir, Radíus, Miðja, Upphaf, Endir, Miðja, Upphaf, Horn og Miðja, Upphaf, Lengd. Horn, lengd, radíus og stefnu má smella á eða slá inn. Þetta virkar í línulegum röðum, flötum og úrskurðum. Skrár sem vistaðar voru fyrir 0.9 opnast eins. Sjá [Teikna boga á tíu vegu](topic:draw-arcs-ten-methods).

### Vinna saman

- **Sjá bendla hvers annars.** Í Lifandi lotu sést bendill hvers og eins á blaðinu ásamt nafni og lit, og strikaður rammi er um þær merkingar sem viðkomandi valdi. Fólk á öðru blaði er skráð með nafni þess blaðs. Sjá [Vinna í beinni með öðrum](topic:work-live).
- **Fylgja einhverjum, og listi yfir fólk.** Hnappurinn {{ui:People}} í Lifandi lotu sýnir hvern og einn með verkfærinu sem hann notar, blaðinu sem hann er á og hvenær hann breytti síðast. {{ui:Follow}} færir sýn þína með þeirra, og stjórnandinn getur notað {{ui:Ask everyone to follow me}}. Sjá [Fylgja liðsfélaga í Lifandi lotu](topic:follow-a-teammate).

## Í öllum forritum

- **Verkfæraábendingar og byrjunarábending.** Texti sem birtist við bendingu er Bootstrap-verkfæraábending og byrjunarábendinguna má loka.
- **Skrunanlegar flipaslár.** Flipaslá spjalds sem kemst ekki fyrir skrollar í stað þess að vera skorin af.
- **Titlar flipa.** Vafraflipinn sýnir `<document> - TakeoffCraft | CadCraft`.
- **Skipulag.** Skipulagslistinn í {{ui:Settings}} er fellilisti sem sýnir valið skipulag.
- **Tungumál.** Tungumálið sem þú velur nær nú til orðanna sem síðan prentar sjálf, eins og New, Open og Save. Tungumál önnur en enska eru vélþýðingar þar til móðurmálshafi hefur lesið þau.

## Hreinskilin takmörk

- Birting lengda, þyngdar- og hitaeiningar og nýju forstillingarnar voru prófaðar með prófum og á síðunni. Ekki hefur verið farið yfir hvert spjald í hverri einingu handvirkt.
- Listinn yfir fólk hefur ekki verið prófaður handvirkt með alvöru bekk kennara og nemenda.
- Tungumál önnur en enska eru vélþýðingar.
- Uppsetningarforrit fyrir Windows eru ekki undirrituð (More info, síðan Run anyway). Diskmynd fyrir macOS er ekki staðfest hjá Apple (hægri smellur, síðan Open).

## Eldra: 0.8 og 0.8.1

Þetta er það sem breyttist í TakeoffCraft 0.8 (gefið út 2026-11-01) og 0.8.1 (2026-11-02), miðað við 0.7. Nú er hægt að telja tákn í skýringu yfir allt mengið í einu, nýtt magntöku getur byrjað út frá verðum fyrri verka þinna, og magntakan er hægt að bera saman við birgðalista birgis. 0.8.1 er lagfæringarútgáfa.

### Nýtt

**Telja allt í menginu**

- **Afmarkaðu skýringuna einu sinni.** {{ui:Count everything}} á verkfærastikunni les tákn í skýringu: dragðu reit utan um táknin og heitin prentuð við hlið þeirra. Hvert tákn er skráð með mynd sinni og heiti, og heitið verður heiti atriðisins. Taktu úr hakinu það sem þú vilt ekki, og veldu síðan {{ui:Count on N sheets}}. Stika sýnir hvaða blað er verið að leita í, {{ui:Cancel}} stöðvar keyrsluna og síðan er áfram nothæf.
- **Öll blöð í einni keyrslu.** Hvert tákn er talið á hverju opnu blaði. Blað sem er teiknað í öðrum mælikvarða er leitað í þeim mælikvarða, og tákn finnast snúin um hvaða rétt horn sem er. Eigin tákn skýringarinnar eru ekki talin á sínu blaði.
- **Yfirfarið áður en nokkuð er bætt við.** Hver heildartala hefur tengil á hvert blað („E-103: 4“) sem fer á það blað. Smelltu á reit á fundi til að sleppa honum, og smelltu aftur til að fá hann aftur. Samræmisstigið (50% til 100%) síar aðeins það sem fannst; ekkert er leitað aftur.
- **Eitt skref til baka.** {{ui:Add N marks}} býr til talningaratriði fyrir hvert tákn með merkingu á hverjum fundi. Heiti sem er þegar talningaratriði hjá þér er endurnýtt. {{key:Ctrl+Z}} tekur öll atriði og merkingar til baka. Það sem þú samþykkir bætist líka við {{ui:Learned}}.
- **Tákn í hvaða horni sem er.** Settu hak í {{ui:Symbols at any angle}} áður en þú telur til að finna einnig tákn sem snúin eru um horn sem er ekki rétt horn. Leitin snýr þá hverju tákni á 15 gráðu fresti, og tákn sem er ekki kringlótt getur tekið allt að sex sinnum lengri tíma.
- **Hvað þetta er.** Einföld táknasamsvörun á eigin blöðum, án þjálfaðs líkans, og ekkert fer frá tölvunni þinni. Á tilbúnu 200 blaða mengi tók það 9,4 sekúndur frá upphafi til enda í Chrome á hraðri borðtölvu; raunveruleg teikningasett verða hægari. Sjá [Telja allt í menginu](topic:count-everything).

**Verðminni úr eigin verkum**

- **TakeoffCraft man verðin þín.** Þegar þú vistar magntöku er hvert verðlagt atriði sem er notað munað eftir heiti og gerð: efnisverð, launaverð, sóun og eining. Síðustu 12 verk eru geymd fyrir hvert heiti. Það er geymt á þessari tölvu við hlið verðasafnsins, aldrei inni í magntökuskrá, og ekkert er sent neitt.
- **Byrjaðu nýja magntöku út frá því.** {{ui:Prices}} á verkfærastikunni sýnir fyrir hvert atriði verð síðasta verks, dæmigert verð og bilið. {{ui:Use last}} eða {{ui:Use typical}} verðleggur eitt atriði, og {{ui:Price N unpriced items from memory}} fyllir hvert atriði sem hefur ekkert verð. Hver notkun er eitt skref til baka.
- **Eldra verk.** {{ui:Learn from a past takeoff…}} man verðlögð atriði vistaðrar magntöku (.json).
- **Sjá það, breyta því, gleyma því.** {{ui:Everything remembered}} listar öll heiti; ruslafötuhnappurinn gleymir einu, og {{ui:Clear all prices}} gleymir öllu. Slökktu á {{ui:Remember my prices when I save a takeoff}} til að hætta. Verð fyrir hvert stykki er aldrei sett á atriði sem er mælt eftir feti. Sjá [Verðminni úr fyrri verkum](topic:price-memory).

**Birgðir birgis og afhendingartímar**

- **Athugaðu gegn lista birgis.** {{ui:Supply}} á verkfærastikunni tekur birgðalista birgis ({{ui:Add a supplier file…}}), CSV-skrá eða töflureikni, og ber saman það sem magntakan þarf, með sóun, við hann. Allt að fimm skrár eru geymdar. Ekkert er sent og ekkert spyr birgi: þú kemur með skrána.
- **Hvað hún segir.** Stutt atriði koma fyrst: „Short by 120 EA“, „Lead time 21 days“, „On backorder“, „Unit differs“, „No stock figure“ eða „In stock“. {{ui:Longest wait wanted (days)}} byrjar í 14.
- **Pöntunarlisti.** {{ui:Order list (CSV)}} sækir atriðin sem vantar, með magninu sem vantar, birgi og afhendingartíma.
- **Verð í safnið.** Ef skráin hefur verð setur {{ui:Prices into the Library}} efnisverð hverrar færslu í safninu með sama heiti og einingu. Endurverðlegðu úr safninu til að færa þau inn í magntökuna.
- **Í vandamálaspjaldinu.** Skortur er viðvörun og löng bið er athugasemd, undir „Supplier stock“. Þú getur samþykkt eitt með ástæðu, og ástæðan er vistuð í magntökunni. Sjá [Athuga birgðir birgis og afhendingartíma](topic:supplier-stock).

**AI-aðstoðarmenn**

- **Verkfæri fyrir alla þrjá.** Þegar aðstoðarmenn eru leyfðir í {{ui:Settings}} getur aðstoðarmaður lesið skýringu (`legend_open`), keyrt talninguna (`legend_count_start`, síðan `legend_count_status` og `legend_count_result`) og bætt henni við (`legend_count_add`, sem getur forskoðað fyrst). Hann getur lesið munað verð (`prices_list`) og verðlagt atriði út frá þeim (`prices_apply`, sem getur forskoðað fyrst), og lesið athugun birgis (`supply_check`). Að bæta við skrá birgis er áfram þitt verk. Sjá [Nota TakeoffCraft með AI-aðstoðarmönnum](topic:use-with-ai-assistants).

**Í öllum forritum**

- **Tungumál.** Fimmtíu og fjögur tungumál alls; tíu eru ný (litháska, lettneska, bosníska, maratí, telúgú, albanska, afríkanska, filippínska, svahílí og úsbekska). Tungumál önnur en enska eru vélþýðingar þar til móðurmálshafi hefur lesið þau.
- **Inntakstæki.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} ákvarðar hvað snertiflötur, hliðarhnappar músar, penni, þrívíddarmús, leikjastýring eða MIDI-stýring gera, fyrir öll forrit eða eitt. Sjá [Nota snertiflöt, þrívíddarmús eða stýringu](common:input-devices).
- **Línur tækjastikunnar.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} býður upp á {{ui:Wrap}} (byrjunina), {{ui:2 rows}} og {{ui:1 row}}; hópar sem komast ekki fyrir skrolla til hliðar. Sjá [Raða spjöldunum](common:arrange-panels).
- **Vandamálaspjaldið.** Sameiginlega spjaldið með viðvörunum og athugasemdum ber nú athugun birgða birgis hér að ofan, við hliðina á hinum athugununum.
- **Viðbætur.** Viðbætur fylgja aðgangslista þínum. Sjá [Viðbætur og aðgangslistinn þinn](common:addons-basics).
- **Tengdu gervigreindina þína.** CadCraft Studio er miðstöðin: tengdu aðstoðarmanninn þinn einu sinni fyrir öll átta forritin. Studio hefur enga eigin gervigreind.

### Lagað í 0.8.1

- **Kaflinn með DWG-flokkum.** Kaflinn með flokkum í DWG-skrá var lesinn sem röng gerð. Þetta er lagað í TakeoffCraft og í fjórum öðrum forritum.
- **Studio getur skipt um tungumál meðan það keyrir.** Áður var Studio og pakkaðar útgáfur þess eingöngu á ensku. Þetta hefur ekki verið prófað í skjáborðsútgáfunni á öllum stýrikerfum; láttu okkur vita ef tungumálið breytist ekki.

### Ekki komið í þessa útgáfu enn

- **Ekki undirritað.** Windows getur varað við, og á Mac hægrismellir þú og velur {{ui:Open}} í fyrsta skipti. Verslunarútgáfurnar (Microsoft Store, Google Play, App Store) eru í bið, og iPad- og iPhone-útgáfan var ekki endurbyggð fyrir 0.8.1.
- **Uppfærslur á Studio.** Windows-uppsetningarforritið og Linux-pakkarnir athuga einu sinni á dag og spyrja fyrst. Flytjanlega zip-skráin llætur þig aðeins vita, og macOS og APK uppfæra sig ekki sjálf. Diskmyndin .dmg fyrir macOS 0.8 fylgir útgáfunni.
- **Tengdu gervigreindina þína.** Tenging með einum smelli inni í Studio, hýsti tengillinn fyrir gervigreind í vafranum, þinn eigin API-lykill inni í Studio og birtur MCP-pakki eru ekki lofuð í þessari útgáfu.
- **Telja allt.** Það þarf tákn teiknuð á sama hátt og í skýringunni, og tákn með vegg eða langri línu í gegnum sig getur sloppið. Speglaðir tákn finnast ekki, og blað án mælikvarða sem er teiknað í annarri stærð er leitað í stærð skýringarinnar. Yfirfarðu fundina á fyrsta blaði áður en þú treystir þeim restinni.
- **Birgðir birgis.** Birgðatölur eru aðeins jafn nýjar og skráin sem þú bætir við. Athugunin spyr aldrei birgi.
- **Tungumál.** Forritsstika tamílsku flæðir yfir.

Allt annað er í [Ekki byggt enn](topic:not-built-yet). Fyrir útgáfuna þar á undan, sjá [Nýtt í 0.7](topic:whats-new-0-7).
