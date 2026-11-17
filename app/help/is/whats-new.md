---
title: Nýjungar í 0.9
summary: Lengdir lesnar í metrum, sentimetrum eða millimetrum, metrísk flatarmál í m2 með veggflatarmáli, 1:75 og 1:150 forstillingar mælikvarða, þyngdar- og hitastigseiningar, Bogi með tíu aðferðum, og lifandi bendlar, Fylgja og listi yfir fólk.
keywords: nýjungar, útgáfuskýrslur, breytingaskrá, 0.9, sýna lengdir sem, metrar, sentimetrar, millimetrar, metrískt, fylgja almennt, einingar, skjáeiningar, m2, fermetrar, veggflatarmál, forstillingar mælikvarða, 1:75, 1:150, þyngd, kílógrömm, kg, tonn, lb, hitastig, celsíus, fahrenheit, bogi, bogaaðferðir, 3-punkta bogi, radíus, lifandi, bendlar, fylgja, listi yfir fólk, flokkur, skýringar, skipulag, útgáfa, nýir eiginleikar, telja allt, skýring, öll sett, verðminni, fyrri verk, síðasta verk, venjulegt verð, birgir, lager, afhendingartími, bakpöntun, pöntunarlisti, skortur, vandamálaspjald, aðstoðarmaður, tungumál, inntakstæki, tækjastikuraðir, dwg
from: 6182b998
---

Þetta er það sem breyttist í TakeoffCraft 0.9, miðað við 0.8.1. Þetta er lítil útgáfa fyrir þetta forrit: lengdir má nú lesa í metrum, sentimetrum eða millimetrum, flatarmál og mælikvarðar fylgja metrískri vinnu almennilega, og Bogi hefur tíu leiðir til að teikna. Lifandi lotur sýna líka hver er hvar.

## Nýtt

### Lesa lengdir í metrum, sentimetrum eða millimetrum

- **Sýna lengdir sem.** {{ui:Stillingar}} › {{ui:TakeoffCraft}} hefur {{ui:Sýna lengdir sem}} með {{ui:Fylgja Almennt}}, {{ui:Fet og tommur}}, m, cm og mm. {{ui:Fylgja Almennt}} notar metrísku lengdareininguna sem þú merktir í {{ui:Stillingar}} › {{ui:Sameiginlegt}} › {{ui:Einingar}}, og fet og tommur þegar engin er merkt. Það breytir því hvernig lengdir lesast á blaðinu, í stöðustikunni og í spjöldunum, þar með talið hæðir, dýpt, þykkt og hæðirnar. Slegin tala án einingar í hæðarreit er lesin í þeirri einingu sem sýnd er.
- **Eingöngu birting.** Magntölur, kostnaður og útflutningur eru reiknuð út frá nákvæmu lengdunum. Valið 1/16, 1/8 og 1/4 tommu birtist aðeins fyrir fet og tommur. Sjá [Sýna lengdir í metrum](topic:show-lengths-in-meters).
- **Þyngdareiningar.** Liður með {{ui:Slegið magn (engin teikning)}} getur nú verið í lb, TON, kg eða t og verið verðlagður eftir einingu.
- **Hitastig.** Sérhver liður hefur valfrjálsan {{ui:Hitastig}}-reit í liðaritlinum, sleginn í gráðum C eða F. {{ui:Sýna hitastig sem}} í {{ui:Stillingar}} › {{ui:TakeoffCraft}} býður {{ui:Fylgja Almennt}}, °C eða °F.

### Flatarmál og mælikvarðar fyrir metrískt verk

- **Flatarmál í m2 á teikningunni.** Flatarmál sem mælt er með metrískum lið segir nú m2 á teikningarmerkinu og merkjaspjaldinu, eins og í töflunni, í stað SF. Reglan er m2 þegar liðurinn er verðlagður í metrum eða lengdir eru sýndar í m, cm eða mm, og SF annars.
- **Veggflatarmál.** Línulegur liður með hæð sýnir líka veggflatarmál sitt (lengd sinnum hæð) í listanum {{ui:Liðir}} og sem athugasemdarröð undir magntöflunni eftir liðum.
- **Mælikvarðaforstillingar 1:75 og 1:150.** Þær eru í listanum {{ui:Forstilling}} í hópnum {{ui:Mælikvarði}}, sem hefur nú 32 mælikvarða. Sjá [Mælikvarðaforstillingar](topic:scale-presets).

### Bogi með tíu aðferðum

- Meðan {{ui:Bogi}} er kveikt (tækjastikuhnappur eða {{key:R}}) birtist reitur {{ui:Bogaaðferð}} í blaðastikunni: 3 punktar, Upphaf, Miðja, Endir, Upphaf, Miðja, Horn, Upphaf, Miðja, Lengd, Upphaf, Endir, Horn, Upphaf, Endir, Stefna, Upphaf, Endir, Radíus, Miðja, Upphaf, Endir, Miðja, Upphaf, Horn og Miðja, Upphaf, Lengd. Horn, lengd, radíus og stefnu má smella á eða slá inn. Það virkar í línulegum hlaupum, flötum og útskurðum. Skrár sem voru vistaðar fyrir 0.9 opnast eins. Sjá [Teikna boga með tíu aðferðum](topic:draw-arcs-ten-methods).

### Vinna saman

- **Sjáðu bendla hvors annars.** Í lifandi lotu sést bendill hverrar manneskju á blaðinu með nafni hennar og lit, og brotinn ramma utan um merkin sem hún valdi. Fólk á öðru blaði er skráð með heiti þess blaðs. Sjá [Vinna í beinni með öðrum](topic:work-live).
- **Fylgdu einhverjum, og listinn yfir fólk.** Hnappurinn {{ui:Fólk}} í lifandi lotu skráir hverja manneskju með verkfærinu sem hún notar, blaðinu sem hún er á og hvenær hún breytti síðast. {{ui:Fylgja}} færir sýn þína með þeirra, og gestgjafinn getur notað {{ui:Biðja alla um að fylgja mér}}. Sjá [Fylgja samstarfsmanni í lifandi lotu](topic:follow-a-teammate).

## Í öllum forritum

- **Ábendingar og byrjunarábending.** Texti sem birtist þegar bent er er Bootstrap-ábending, og byrjunarábendinguna má loka.
- **Skrollanlegir flipalistar.** Flipalisti spjalds sem passar ekki skrollar í stað þess að vera skorinn af.
- **Flipatitlar.** Flipi vafrans les `<document> - TakeoffCraft | CadCraft`.
- **Skipulag.** Skipulagslistinn í {{ui:Stillingar}} er fellilisti sem sýnir valið skipulag.
- **Tungumál.** Tungumálið sem þú velur nær nú til orðanna sem síðan prentar sjálf, eins og Nýtt, Opna og Vista. Önnur tungumál en enska eru vélþýðingar þar til móðurmálsmaður hefur yfirfarið þau.

## Heiðarleg takmörk

- Lengdarbirting, þyngdar- og hitastigseiningar og nýju forstillingarnar hafa verið prófaðar með prófum og á síðunni. Sérhvert spjald við sérhverja einingu hefur ekki verið yfirfarið handvirkt.
- Listinn yfir fólk hefur ekki verið yfirfarinn handvirkt með alvöru bekk af kennara og nemendum.
- Önnur tungumál en enska eru vélþýðingar.
- Windows-uppsetningarforrit eru ekki kóðaundirrituð (Meiri upplýsingar, síðan Keyra samt). Mac-diskmyndin er ekki staðfest (notarized) af Apple (hægrismella, síðan Opna).

## Fyrr: 0.8 og 0.8.1

Þetta er það sem breyttist í TakeoffCraft 0.8 (gefin út 2026-11-01) og 0.8.1 (2026-11-02), miðað við 0.7. Hægt er nú að telja tákntöflu yfir allt settið í einu, nýtt verk getur byrjað út frá verðum fyrri verka þinna, og magntökuna má bera saman við lager birgis. 0.8.1 er lagfæringarútgáfa.

### Nýtt

**Telja allt í settinu**

- **Rammaðu tákntöfluna einu sinni.** {{ui:Telja allt}} á tækjastikunni les tákntöflu: dragðu reit utan um táknin og heitin sem prentuð eru við hlið þeirra. Hvert tákn er skráð með mynd sinni og heiti, og heitið verður heiti liðarins. Taktu hakið úr því sem þú vilt ekki, veldu síðan {{ui:Telja á N blöðum}}. Stika sýnir blaðið sem verið er að leita í, {{ui:Hætta við}} stöðvar keyrsluna, og síðan helst nothæf.
- **Öll blöð í einni keyrslu.** Hvert tákn er talið á hverju opnu blaði. Blað sem er teiknað í öðrum mælikvarða er leitað í þeim mælikvarða, og tákn finnast snúin í hvaða rétthyrnu horni sem er. Eigin tákn töflunnar eru ekki talin á blaðinu hennar.
- **Yfirferð áður en nokkuð er bætt við.** Hver samtala hefur tengil á blað („E-103: 4") sem fer á það blað. Smelltu á reit í fundi til að sleppa honum, og smelltu aftur til að fá hann til baka. Samsvörunarstigið (50% til 100%) síar aðeins það sem fannst; ekkert er leitað aftur.
- **Eitt afturköllunarskref.** {{ui:Bæta við N merkjum}} býr til talningarlið fyrir hvert tákn með merki á hverju tákni sem finnst. Heiti sem er nú þegar talningarliður þinn er endurnýtt. {{key:Ctrl+Z}} tekur alla liði og merki til baka. Það sem þú samþykkir fer líka í {{ui:Lært}}.
- **Tákn í hvaða horni sem er.** Hakaðu við {{ui:Tákn í hvaða horni sem er}} áður en þú telur til að finna líka tákn sem snúið er um horn sem er ekki rétthyrnt. Leitin snýr þá hverju tákni á 15 gráðu fresti, og tákn sem er ekki kringlótt getur tekið allt að sex sinnum lengri tíma.
- **Hvað það er.** Einföld táknsamsvörun á þínum eigin blöðum, án þjálfaðs líkans, og ekkert fer úr tölvunni þinni. Á tilbúnu 200 blaða setti tók það 9,4 sekúndur frá enda til enda í Chrome á hraðri borðtölvu; raunveruleg teikningasett verða hægari. Sjá [Telja allt í settinu](topic:count-everything).

**Verðminni úr eigin verkum**

- **TakeoffCraft man verðin þín.** Þegar þú vistar magntöku er hver verðlagður liður sem er notaður munaður eftir heiti og gerð: efnisverð, launataxti, sóun og eining. Síðustu 12 verk eru geymd fyrir hvert heiti. Það er geymt á þessari tölvu við hlið verðasafnsins, aldrei inni í magntökuskrá, og ekkert er sent neitt.
- **Byrjaðu nýja magntöku út frá því.** {{ui:Verð}} á tækjastikunni sýnir fyrir hvern lið verð síðasta verks, dæmigerð verð og bilið. {{ui:Nota síðasta}} eða {{ui:Nota dæmigert}} verðleggur einn lið, og {{ui:Verðleggja N óverðlagða liði úr minni}} fyllir hvern lið sem hefur ekkert verð enn. Hver notkun er eitt afturköllunarskref.
- **Eldri verk.** {{ui:Læra af fyrri magntöku…}} man verðlagða liði vistaðrar magntöku (.json).
- **Sjá það, breyta því, gleymdu því.** {{ui:Allt sem er í minni}} skráir hvert heiti; ruslafatan gleymir einu, og {{ui:Hreinsa allt verð}} gleymir öllu. Slökktu á {{ui:Muna verðin mín þegar ég vista magntöku}} til að hætta. Verð á stykki er aldrei sett á lið sem er verðlagður á fet. Sjá [Verðminni úr fyrri verkum](topic:price-memory).

**Birgðir og afhendingartímar**

- **Berðu saman við lista birgis.** {{ui:Birgðir}} á tækjastikunni tekur lagerlista birgis ({{ui:Bæta við skrá birgis…}}), CSV-skrá eða töflureikni, og ber saman það sem magntakan þarfnast, með sóun, við hann. Allt að fimm skrár eru geymdar. Ekkert er sent og enginn spyr birgi: þú kemur með skrána.
- **Hvað það segir.** Stuttir liðir koma fyrst: „Vantar 120 EA", „Afhendingartími 21 dagur", „Í bakpöntun", „Eining er önnur", „Engin lagertala" eða „Á lager". {{ui:Lengsti biðtími sem þú vilt (dagar)}} byrjar á 14.
- **Pöntunarlisti.** {{ui:Pöntunarlisti (CSV)}} sækir stuttu liðina með magninu sem vantar, birgjann og afhendingartímann.
- **Verð í safnið.** Ef skráin hefur verð setur {{ui:Verð í safnið}} efnisverð hverrar færslu í safninu með sama heiti og einingu. Endurverðleggðu úr safninu til að flytja þau inn í magntökuna.
- **Í vandamálaspjaldinu.** Skortur er viðvörun og löng bið er athugasemd, undir „Lagerstaða birgis". Þú getur samþykkt einn með ástæðu, og ástæðan er vistuð í magntökunni. Sjá [Athuga lagerstöðu birgis og afhendingartíma](topic:supplier-stock).

**Gervigreindaraðstoðarmenn**

- **Verkfæri fyrir öll þrjú.** Með aðstoðarmönnum leyfðum í {{ui:Stillingar}} getur aðstoðarmaður lesið tákntöflu (`legend_open`), keyrt talninguna (`legend_count_start`, síðan `legend_count_status` og `legend_count_result`) og bætt henni við (`legend_count_add`, sem getur forskoðað fyrst). Hann getur lesið geymd verð (`prices_list`) og verðlagt liði út frá þeim (`prices_apply`, sem getur forskoðað fyrst), og lesið birgðaathugunina (`supply_check`). Að bæta við skrá birgis er áfram þitt verk. Sjá [Nota TakeoffCraft með gervigreindaraðstoðarmanni](topic:use-with-ai-assistants).

**Í öllum forritum**

- **Tungumál.** Fimmtíu og fjögur tungumál alls; tíu eru ný (litháska, lettneska, bosníska, maratí, telúgú, albanska, afríkanska, filippínska, svahílí og úsbekska). Önnur tungumál en enska eru vélþýðingar þar til móðurmálsmaður hefur yfirfarið þau.
- **Inntakstæki.** {{ui:Stillingar}} › {{ui:Sameiginlegt}} › {{ui:Inntakstæki}} ákveður hvað snertiflötur, hliðarhnappar músar, penni, þrívíddarmús, leikjastýri eða MIDI-stýri gerir, fyrir sérhvert forrit eða eitt þeirra. Sjá [Nota snertiflöt, þrívíddarmús eða stýri](common:input-devices).
- **Tækjastikuraðir.** {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Línur tækjastikunnar}} býður {{ui:Vefja}} (byrjunin), {{ui:2 línur}} og {{ui:1 lína}}; hópar sem passa ekki skrolla til hliðar. Sjá [Raða spjöldunum](common:arrange-panels).
- **Vandamálaspjaldið.** Sameiginlega spjaldið með viðvörunum og athugasemdum ber nú birgðaathugunina hér að ofan, við hlið hinna athugananna.
- **Viðbætur.** Viðbætur fylgja listanum yfir aðganginn þinn. Sjá [Viðbætur og aðgangslistinn þinn](common:addons-basics).
- **Tengdu gervigreindina þína.** CadCraft Studio er miðjan: tengdu aðstoðarmanninn þinn einu sinni fyrir allt átta forritin. Studio hefur enga gervigreind sjálft.

### Lagfært í 0.8.1

- **DWG-flokkahlutinn.** Flokkahluti DWG-skráar var lesinn sem röng gerð. Þetta er lagfært í TakeoffCraft og í fjórum öðrum forritum.
- **Studio getur skipt um tungumál meðan það keyrir.** Áður var Studio og pakkaðar útgáfur þess eingöngu á ensku. Þetta hefur ekki verið prófað í skjáborðsútgáfunni á öllum stýrikerfum; láttu okkur vita ef tungumálið breytist ekki.

### Ekki komið í þessa útgáfu enn

- **Ekki kóðaundirritað.** Windows gæti varað við, og á Mac hægrismellir þú og velur {{ui:Opna}} í fyrsta skipti. Verslunarútgáfurnar (Microsoft Store, Google Play, App Store) eru í bið, og iPad- og iPhone-útgáfan var ekki endurbyggð fyrir 0.8.1.
- **Uppfærslur Studio.** Windows-uppsetningarforritið og Linux-pakkarnir athuga einu sinni á dag og spyrja fyrst. Færanlega zip-skráin segir þér aðeins til, og macOS og APK uppfæra sig ekki sjálf. 0.8 macOS .dmg fylgir útgáfunni.
- **Tengdu gervigreindina þína.** Tenging með einum smelli inni í Studio, hýstur tengill fyrir gervigreind í vafranum, þinn eigin API-lykill inni í Studio og útgefinn MCP-pakki eru ekki lofuð í þessari útgáfu.
- **Telja allt.** Það þarf tákn teiknuð á sama hátt og í tákntöflunni, og tákn með vegg eða langri línu í gegnum sig geta sloppið. Spegluð tákn finnast ekki, og blað án mælikvarða sem er teiknað í annarri stærð er leitað í stærð tákntöflunnar. Athugaðu fundina á fyrsta blaðinu áður en þú treystir restinni.
- **Lagerstaða birgis.** Lagertölur eru aðeins jafn nýjar og skráin sem þú bætir við. Athugunin spyr aldrei birgi.
- **Tungumál.** Stika forritsins á tamílsku flæðir yfir.

Allt annað er í [Ekki smíðað enn](topic:not-built-yet). Fyrir útgáfuna þar á undan, sjá [Nýjungar í 0.7](topic:whats-new-0-7).
