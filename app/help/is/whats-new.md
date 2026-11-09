---
title: Nýtt í 0.8 og 0.8.1
summary: Teldu heilt táknskýringarsett yfir öll opin blöð í einni keyrslu, verðleggðu liði út frá einingarverði fyrri verka, athugaðu magntöku gegn lager og afhendingartíma birgis, auk nýrra aðstoðarverkfæra fyrir allt þetta, sameiginlegra breytinga 0.8 og lagfæringar 0.8.1 fyrir DWG-skrár.
keywords: nýtt, hvað er nýtt, útgáfuskýringar, breytingaskrá, breytingar, 0.8, 0.8.1, útgáfa, nýir eiginleikar, telja allt, táknskýring, heilt sett, verðminni, fyrri verk, síðasta verk, dæmigert verð, birgir, lager, afhendingartími, biðtími, pöntunarlisti, skortur, vandamálaspjald, aðstoðarmaður, tungumál, inntakstæki, raðir tækjastikunnar, dwg
from: a04adef6
---

Þetta er það sem breyttist í TakeoffCraft 0.8 (gefið út 2026-11-01) og 0.8.1 (2026-11-02) samanborið við 0.7. Nú er hægt að telja táknskýringu yfir allt settið í einu, ný magntaka getur byrjað út frá verðum fyrri verka þinna, og magntökuna má bera saman við lager birgis. 0.8.1 er lagfæringarútgáfa.

## Nýtt

### Telja allt í settinu

- **Rammaðu táknskýringuna inn einu sinni.** {{ui:Telja allt}} á tækjastikunni les táknskýringu: dragðu reit utan um táknin og nöfnin sem eru prentuð við hliðina á þeim. Hvert tákn er birt með mynd og nafni, og nafnið verður nafn liðarins. Taktu hakið úr því sem þú vilt ekki, og veldu síðan {{ui:Telja á N blöðum}}. Stika sýnir blaðið sem er leitað í, {{ui:Hætta við}} stöðvar keyrsluna og síðan er áfram nothæf.
- **Öll blöð í einni keyrslu.** Hvert tákn er talið á hverju opnu blaði. Blað sem er teiknað í öðrum mælikvarða er leitað í þeim mælikvarða, og tákn finnast snúin í hvaða rétta horni sem er. Táknin í skýringunni sjálfri eru ekki talin á blaðinu hennar.
- **Yfirfarðu áður en nokkuð er bætt við.** Hver heildartala hefur tengil á hvert blað („E-103: 4“) sem fer á það blað. Smelltu á reit á fundi til að sleppa honum, og smelltu aftur til að fá hann aftur. Samræmisstigið (50% til 100%) síar aðeins það sem fannst; ekkert er leitað aftur.
- **Eitt afturköllunarskref.** {{ui:Bæta við N merkjum}} býr til talningarlið fyrir hvert tákn með merki á hverjum fundi. Nafn sem er nú þegar talningarliður hjá þér er endurnýtt. {{key:Ctrl+Z}} tekur alla liði og merki til baka. Það sem þú samþykkir fer líka í {{ui:Lært}}.
- **Tákn í hvaða horni sem er.** Hakaðu við {{ui:Tákn í hvaða horni sem er}} áður en þú telur til að finna líka tákn sem eru snúin um horn sem er ekki rétt horn. Leitin snýr þá hverju tákni á 15 gráðu fresti, og tákn sem er ekki hringlaga getur tekið allt að sexfalt lengri tíma.
- **Hvað þetta er.** Einföld samsvörun tákna á þínum eigin blöðum, án þjálfaðs líkans, og ekkert fer úr tölvunni þinni. Á tilbúnu 200 blaða setti tók það 9.4 sekúndur frá upphafi til enda í Chrome á hraðvirkri skjáborðstölvu; raunveruleg teikningasett verða hægari. Sjá [Telja allt í settinu](topic:count-everything).

### Verðminni úr þínum eigin verkum

- **TakeoffCraft man einingarverðin þín.** Þegar þú vistar magntöku er hvers verðlagðs liðs sem er notaður munað eftir nafni og gerð: efnisverð, vinnuverð, affall og eining. Síðustu 12 verkin eru geymd fyrir hvert nafn. Það er geymt í þessari tölvu við hliðina á verðasafninu, aldrei inni í magntökuskrá, og ekkert er sent neitt.
- **Byrjaðu nýja magntöku út frá því.** {{ui:Verð}} á tækjastikunni sýnir fyrir hvern lið einingarverð síðasta verks, dæmigerð einingarverð og bilið. {{ui:Nota síðasta}} eða {{ui:Nota dæmigert}} verðleggur einn lið, og {{ui:Verðleggja N óverðlagða liði úr minni}} fyllir alla liði sem hafa ekki verð ennþá. Hver notkun er eitt afturköllunarskref.
- **Eldri vinna.** {{ui:Læra af fyrri magntöku…}} man verðlagða liði vistaðrar magntöku (.json).
- **Skoðaðu það, breyttu því, gleymdu því.** {{ui:Allt sem er í minni}} sýnir hvert nafn; ruslatunnuhnappurinn gleymir einu, og {{ui:Hreinsa allt verð}} gleymir öllu. Slökktu á {{ui:Muna verðin mín þegar ég vista magntöku}} til að hætta. Verð á stykki er aldrei sett á lið sem er mældur í fetum. Sjá [Verðminni úr fyrri verkum þínum](topic:price-memory).

### Lager birgis og afhendingartímar

- **Athugaðu gegn lista birgis.** {{ui:Birgðir}} á tækjastikunni tekur við lagerlista birgis ({{ui:Bæta við skrá birgis…}}), CSV- eða töflureikniskrá, og athugar það sem magntakan þarfnast, að teknu tilliti til affalls, gegn honum. Allt að fimm skrár eru geymdar. Ekkert er sent og ekkert leitar til birgis: þú kemur með skrána.
- **Hvað það segir.** Skortliðir koma fyrst: „Vantar 120 EA“, „Afhendingartími 21 dagar“, „Á biðlista“, „Eining er önnur“, „Engin lagertala“ eða „Til á lager“. {{ui:Lengsti biðtími sem þú vilt (dagar)}} byrjar í 14.
- **Pöntunarlisti.** {{ui:Pöntunarlisti (CSV)}} sækir skortliðina með vöntuninni, birgjanum og afhendingartímanum.
- **Verð í safnið.** Ef skráin hefur verð setur {{ui:Verð í safnið}} efnisverð hverrar færslu í safninu með sama nafni og einingu. Endurverðleggðu úr safninu til að færa þau inn í magntökuna.
- **Í vandamálaspjaldinu.** Skortur er viðvörun og langur biðtími er athugasemd, undir „Lager birgis“. Þú getur samþykkt eitt með ástæðu og ástæðan er vistuð í magntökunni. Sjá [Athugaðu lager birgis og afhendingartíma](topic:supplier-stock).

### Gervigreindaraðstoðarmenn

- **Verkfæri fyrir öll þrjú.** Þegar aðstoðarmenn eru leyfðir í {{ui:Stillingar}} getur aðstoðarmaður lesið táknskýringu (`legend_open`), keyrt talninguna (`legend_count_start`, síðan `legend_count_status` og `legend_count_result`) og bætt henni við (`legend_count_add`, sem getur forskoðað fyrst). Hann getur lesið munað verð (`prices_list`) og verðlagt liði út frá þeim (`prices_apply`, sem getur forskoðað fyrst), og lesið athugun birgis (`supply_check`). Það að bæta við skrá birgis er enn þitt verk. Sjá [Nota TakeoffCraft með gervigreindaraðstoðarmönnum](topic:use-with-ai-assistants).

### Í öllum forritum

- **Tungumál.** Fimmtíu og fjögur tungumál alls; tíu eru ný (litháíska, lettneska, bosníska, maratí, telúgú, albanska, afríkanska, filippseyska, svahílí og úsbekska). Tungumál önnur en enska eru vélunnin drög þar til móðurmálshafi hefur lesið þau yfir.
- **Inntakstæki.** {{ui:Stillingar}} › {{ui:Sameiginlegt}} › {{ui:Inntakstæki}} stillir hvað snertiflötur, hliðarhnappar músar, penni, þrívíddarmús, leikjastýring eða MIDI-stýring gerir, fyrir öll forrit eða eitt. Sjá [Nota snertiflöt, þrívíddarmús eða stýringu](common:input-devices).
- **Raðir tækjastikunnar.** {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Línur tækjastikunnar}} býður upp á {{ui:Vefja}} (upphafið), {{ui:2 línur}} og {{ui:1 lína}}; hópar sem passa ekki fletjast til hliðar. Sjá [Raða spjöldunum](common:arrange-panels).
- **Vandamálaspjald.** Sameiginlega spjaldið með viðvörunum og athugasemdum ber nú lagerathugun birgis hér að ofan, við hliðina á hinum athugununum.
- **Viðbætur.** Viðbætur fylgja lista yfir aðganginn þinn. Sjá [Viðbætur og aðgangslistinn þinn](common:addons-basics).
- **Tengdu gervigreindina þína.** CadCraft Studio er miðstöðin: tengdu aðstoðarmanninn þinn einu sinni fyrir öll átta forritin. Studio hefur enga gervigreind sjálft.

## Lagað í 0.8.1

- **Flokkakafli DWG-skráa.** Flokkakaflinn í DWG-skrá var lesinn sem röng gerð. Þetta er lagað í TakeoffCraft og í fjórum öðrum forritum.
- **Studio getur skipt um tungumál meðan það keyrir.** Áður voru Studio og pökkuðu útgáfur þess eingöngu á ensku. Þetta hefur ekki verið prófað í skjáborðsútgáfunni á öllum stýrikerfum; láttu okkur vita ef tungumálið breytist ekki.

## Ekki í þessari útgáfu ennþá

- **Ekki kóðaundirritað.** Windows gæti varað við, og á Mac hægrismellir þú og velur {{ui:Opin}} í fyrsta skipti. Verslunarútgáfurnar (Microsoft Store, Google Play, App Store) eru í bið, og iPad- og iPhone-útgáfan var ekki endurbyggð fyrir 0.8.1.
- **Uppfærslur Studio.** Windows-uppsetningarforritið og Linux-pakkarnir athuga einu sinni á dag og spyrja fyrst. Flytjanlega zip-skráin lætur þig aðeins vita, og macOS og APK uppfæra sig ekki sjálf. macOS .dmg-skráin fyrir 0.8 fylgir útgáfunni.
- **Tengdu gervigreindina þína.** Tenging með einum smelli innan Studio, hýsti tengillinn fyrir gervigreind í vafranum, þinn eigin API-lykill innan Studio og birtur MCP-pakki er ekki lofað í þessari útgáfu.
- **Telja allt.** Það þarf tákn sem eru teiknuð á sama hátt og í skýringunni, og tákn með vegg eða langri línu í gegnum sig geta farið fram hjá. Speglaðir tákn finnast ekki, og blað án mælikvarða sem er teiknað í annarri stærð er leitað í stærð skýringarinnar. Yfirfarðu fundina á fyrsta blaðinu áður en þú treystir þeim sem eftir eru.
- **Lager birgis.** Lagertölur eru aðeins jafn nýjar og skráin sem þú bætir við. Athugunin spyr aldrei birgi.
- **Tungumál.** Forritastika tamílsku flæðir yfir.

Allt annað er í [Ekki smíðað ennþá](topic:not-built-yet). Fyrir útgáfuna þar á undan, sjá [Nýtt í 0.7](topic:whats-new-0-7).
