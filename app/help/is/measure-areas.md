---
title: Mæla flatarmál með úrskurðum
summary: Rissaðu gólf, loft og plötur, skerðu göt úr þeim, bættu við bogadregnum jöðrum, hringjum og kringlóttum úrskurðum og lestu flatarmál og jaðarlengd.
keywords: fylling rýmis, flóðfylling, málningarfata, smella inni í rými, sjálfvirkt flatarmál, bakfrádráttur, bakúrskurður, súla, skaft, frádráttur frá nokkrum liðum, flatarmál, marghyrningur, útlína, ferfet, sf, úrskurður, gat, frádráttur, hringur, kringlótt, bogi, jaðar, gólf, loft, plata
from: 34648db7
---

Flatarmálsliður mælir afmarkað flatarmál. Hver útlína getur haft göt skorin úr sér (skaft, súlu, blómakassa) og jaðrar hennar geta verið beinir eða bogadregnir.

Áður en þú byrjar: blaðið þarf mælikvarða ([Stilla mælikvarðann](topic:set-the-scale)) og þú þarft flatarmálslið ([Búa til magntökuliði](topic:create-items)).

## Rissa flatarmál

1. Smelltu á flatarmálsliðinn undir {{ui:Liðir}}.
2. Veldu {{ui:Flatarmál}} á tækjastikunni, eða ýttu á {{key:A}}.
3. Smelltu á hvert horn herbergisins eða plötunnar í röð. Haltu {{key:Shift}} fyrir 0°, 45° og 90° jaðra.
   Frá þriðja punkti fyllist útlínan og stöðustikan sýnir „Flatarmál“ og „jaðarlengd“. Lítill hringur birtist utan um fyrsta punktinn.
4. Lokaðu útlínunni: smelltu á fyrsta punktinn (innan hringsins), ýttu á {{key:Enter}}, tvísmelltu eða hægrismelltu.
   Flatarmálið er létt litað í lit liðsins, merkt með ferfetafjölda sínum og verður valda merkingin.

{{key:Backspace}} fjarlægir síðasta horn; {{key:Esc}} hendir útlínunni.

Útlínu sem sker sjálfa sig er hafnað: „The outline crosses itself, so its area would be wrong. Draw it again without crossing.“ Teiknaðu áttutölu sem tvö flatarmál í staðinn.

## Bogadregnir jaðrar

Meðan þú rissar útlínu, kveiktu á bogaham ({{ui:Bogi}} eða {{key:R}}). Eftir horn smellirðu á punkt meðfram boganum, síðan þar sem boginn endar. Til að loka útlínunni með boga, gerðu síðasta smellinn á fyrsta punktinn. Flatarmál og jaðarlengd nota nákvæman bogann. Ýttu á {{key:R}} aftur fyrir beina jaðra. Til að breyta boga síðar skaltu velja flatarmálið og draga kringlótta handfangið í miðjum boganum. Sjá [Mæla línulegar keyrslur](topic:measure-linear#arcs-and-curved-walls).

## Hringur

1. Með flatarmálslið, veldu {{ui:Hringur}} eða ýttu á {{key:O}}.
2. Smelltu á miðjuna.
3. Smelltu á hvaða punkt sem er á jaðrinum.
   Meðan þú færir bendilinn sýnir stöðustikan radíus og flatarmál. Hringurinn er bættur við sem flatarmálsmerking með nákvæmu flatarmáli og jaðarlengd.

## Fylla rými með einum smelli

Þegar herbergin eru teiknuð sem lokaðir veggir, tekur {{ui:Rými}} ({{key:B}}) gólfið af með einum smelli:

1. Veldu flatarmálslið (til dæmis gólfáferð) og gefðu blaðinu mælikvarða.
2. Veldu {{ui:Rými}} í hópnum {{ui:Magntaka}}, eða ýttu á {{key:B}}.
3. Smelltu inni í herbergi, á opnu gólfinu (ekki á línu eða merkimiða).

TakeoffCraft les línur blaðsins, finnur rýmið umhverfis smellinn og rissar það eftir innri hliðum veggjanna sem flatarmál núverandi liðs. Dyraop allt að **4'-0"** eru talin lokuð, svo útlínan liggur beint yfir dyrnar; **Stillingar › TakeoffCraft › Room fill closes openings up to** breytir þeirri breidd (3'-0" til 8'-0"). Heiti rýma, húsgögn og innrétting inni í rýminu búa ekki til göt.

Það hafnar og segir ástæðuna þegar:

- smellt er á línu („That is on a line“);
- rýmið er ekki lokað: op breiðara en stillingin leyfir lætur það renna út að jaðri blaðsins. Hækkaðu stillinguna, eða rissaðu það herbergi handvirkt með {{ui:Flatarmál}};
- rýmið er örsmátt (tákn, ekki herbergi).

Þegar hurð er breiðari en stillingin fyllingin inn í næsta herbergi og rissar bæði saman: afturkallaðu ({{key:Mod+Z}}), hækkaðu stillinguna og smelltu aftur. Athugaðu útlínuna eins og hvert annað flatarmál: dragðu hornin til að laga hana. Skannað blað virkar eins, en línurnar þurfa að vera nógu dökkar; ljósgrá línuteikning gæti ekki stöðvað fyllinguna.

## Skera gat úr flatarmáli

1. Veldu {{ui:Velja}} ({{key:V}}) og smelltu á flatarmálið. Það sýnir ferhyrnd handföng á hornunum.
2. Veldu {{ui:Úrskurður}} á tækjastikunni (eða ýttu á {{key:X}}), eða {{ui:Bæta við úrtaki}} undir **Valin merking**.
3. Smelltu á hornin á gatinu, innan flatarmálsins. Bogaham virkar hér líka.
4. Lokaðu því eins og flatarmáli: smelltu á fyrsta punktinn, ýttu á {{key:Enter}}, tvísmelltu eða hægrismelltu.
   Gatið er ófyllt og stöðustikan segir „Cut-out added. Draw another, or press Esc.“
5. Rissaðu fleiri göt í sama flatarmáli, eða ýttu á {{key:Esc}}.

Fyrir kringlótt gat, veldu {{ui:Bæta við kringlóttu úrtaki}} undir **Valin merking**, smelltu á miðjuna og síðan á punkt á jaðrinum.

Úrskurður verður að liggja alveg innan flatarmálsins og má ekki skarast öðrum úrskurði. Annars hafnar TakeoffCraft honum: „A cut-out has to sit fully inside the area.“ eða „Cut-outs cannot overlap each other.“

Til að taka síðasta gatið aftur út, veldu {{ui:Fjarlægja síðasta úrtak}}.

## Bakfrádrættir: súlur, skaft og op tekin út úr nokkrum liðum

Úrskurður tilheyrir einni flatarmálsmerkingu. **Bakfrádráttur** er teiknaður einu sinni og er dreginn frá öllum flötum sem hann skarast á, fyrir þá liði sem þú velur: teiknaðu súlurnar einu sinni og þær fara af gólfáferðinni, loftinu og plötunni í einu.

1. Búðu til flatarmálslið fyrir þær, til dæmis „Súlur“.
2. Í stillingum liðsins, hakaðu við **Bakfrádráttur: merkingar hans taka flatarmál sitt út úr öðrum liðum**. Listi yfir aðra flatarmálsliði birtist, allir hakaðir: afhakaðu þá sem bakfrádrættirnir eiga ekki að snerta (málning á veggjum, til dæmis).
3. Taktu súlurnar af með {{ui:Flatarmál}} eða {{ui:Hringur}}, eins og venjulega. Hver þeirra er teiknuð strikuð.

Sérhver flatarmálsmerking hakaðs liðs á sama blaði missir þann hluta sem bakfrádráttur þekur: allan bakfrádráttinn þegar hann liggur inni, aðeins skarandi hlutann þegar hann sker jaðarinn, og ekkert inni í úrskurði. Spjald valda flatarmálsins sýnir **Bakfrádrættir** og það flatarmál sem eftir er. Magn liðsins, samsetningaformúlur, kostnaður, 3D-athugunarsýnin og útflutningurinn nota flatarmálið sem eftir er; athugasemdir kostnaðaráætlunarinnar segja hversu mikið bakfrádrættir tóku. Bakfrádráttsliðurinn sjálfur telur eigið flatarmál (hafðu kostnaðinn á núlli ef þú verðleggur hann ekki).

Bakfrádráttur verður að vera **íhvolfur**: ferhyrningur, hringur eða hver útlína án innri horns. TakeoffCraft hafnar því að teikna hann ef hann er ekki það; teiknaðu L-laga skaft sem tvo bakfrádrætti. Bakfrádrættir geta ekki haft úrskurði, og tveir bakfrádrættir sem skarast hvor á annan teljast báðir.

Jaðarlengdin (`P`) breytist ekki: bakfrádrættir taka aðeins flatarmál út.

## Lesa flatarmálið

Veldu flatarmálið. **Valin merking** sýnir:

| Lína | Merking |
|---|---|
| Flatarmál | Nettóflatarmál: útlína að frádregnum úrskurðum. Þetta er það sem liðurinn telur. |
| Útlína | Brúttóflatarmálið innan útlínunnar (sýnt þegar úrskurðir eru til staðar). |
| Úrskurðir | Hversu mörg göt eru, og samanlagt flatarmál þeirra. |
| Jaðarlengd | Lengd jaðars útlínunnar, **að viðbættum** jöðrum hvers úrskurðar („with cut-outs“). |

Jaðarlengdin tekur viljandi með jaðra úrskurða, til dæmis fyrir mót eða undirlag sem liggur einnig kringum gat. Ef þú þarft aðeins ytri jaðarinn, geymdu göt utan þess liðs eða mældu ytri jaðarinn sem línulega keyrslu.

{{ui:Eining}} liðsins ákvarðar hvernig heildin er sögð: SF, SY eða m². Spjald **Valin merking** og stöðustikan sýna alltaf ferfet.

## Laga flatarmál

- **Færa horn**: veldu flatarmálið og dragðu hornhandfang (göt hafa handföng líka). Ef nýja lögunin myndi skera sjálfa sig eða ýta gati út fyrir, er horninu skilað: „The point was put back.“
- **Færa í annan lið**: veldu annan flatarmálslið í listanum **Liður** undir **Valin merking**.
- **Eyða**: {{key:Delete}}, {{ui:Eyða}} á tækjastikunni undir valmyndinni {{ui:Meira}}, eða {{ui:Eyða merki}}.

## Dýpt fyrir rúmmál

Gefðu flatarmálsliðnum {{ui:Dýpt}} (til dæmis `0'-4"` fyrir plötu) og notaðu `A * H / 27` í samsetningarhluta til að fá rúmmetra í rúmyörðum. Sjá [Samsetningar og formúlur](topic:assemblies).
