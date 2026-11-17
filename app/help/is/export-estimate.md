---
title: Flytja út kostnaðaráætlun og merkt PDF
summary: Sæktu kostnaðaráætlunina sem XLSX-vinnubók með lifandi formúlum eða sem CSV, og afrit af PDF-skjölunum þínum með magntökunni teiknaðri á þau.
keywords: tillaga, tilboðsyfirlit, útflutningur, xlsx, töflureiknir, vinnubók, csv, merkt pdf, prenta magntöku, skýrsla, deila, senda, skýring
from: 334f89c7
---

Útflutningar eru niðurhal. Þeir eru gerðir á tölvunni þinni úr magntökunni og opnu PDF-skjölunum; ekkert er sent neitt.

## Kostnaðaráætlunin sem töflureiknir (XLSX)

1. Opnaðu valmyndina {{ui:Flytja út}} á tækjastikunni og veldu {{ui:XLSX}}.
   Vafrinn þinn sækir `(heiti).xlsx`. Stöðustikan segir „Flutt út (heiti).xlsx (kostnaðaráætlun með lifandi formúlum, eftir blaði, merkjum, mælikvörðum).“ og bætir við viðvörun þegar kostnaðaráætlunin er ófullkomin.
2. Opnaðu hana í töflureikninum þínum.

Vinnubókin hefur fjögur vinnublöð, og skýrslurnar hér að neðan eftir því sem við á:

| Vinnublað | Hvað það hefur |
|---|---|
| Kostnaðaráætlun | Röð fyrir hvern lið og íhlut: magn, úrgangur, magn með úrgangi, verð, efni, vinna, samtala, athugasemdir. Heildarsumma verksins neðst. |
| Eftir blaði | Magn hvers liðar á hverju blaði, með fjölda merkja. |
| Merki | Hvert merki: blað, liður, tegund, magn og nánar (hlutalengdir, brúttó- og útskurðarflatarmál, ummál). |
| Mælikvarðar | Hvert blað sem hefur mælikvarða eða merki: mælikvarði þess, hvernig hann var settur (forstilling, eða kvarðað á hvaða fjarlægð), og fet á hverja PDF-einingu. |
| Yfirlit magntöku | Magn hvers liðar, CSI-númer, merki og blöð, án verðs. |
| Efnislisti | Hver samsetningarhluti lagður saman yfir alla magntökuna (sami hlutur sem nokkrir liðir nota er ein lína), með úrgangi og efniskostnaði, og liðunum sem nota hann. |
| Verðbeiðni | Efnislistinn til að senda birgja: magn með úrgangi, auður dálkur fyrir einingarverð, og framlengingar og samtala sem fyllast út þegar verð eru slegin inn. |
| Eftir deild | Efni, vinna og samtala eftir CSI MasterFormat-deild, þegar liðir hafa {{ui:CSI-númer}}. |

Með [tilboðsyfirliti](topic:bid-summary) endar Kostnaðaráætlunarvinnublaðið líka á álagningum þess (launatengd gjöld, söluskattur, yfirstjórnarkostnaður, hagnaður, trygging og tilboðið), sem lifandi formúlur.

Kostnaðaráætlunarvinnublaðið heldur **lifandi formúlum**: magn með úrgangi, ávalaðar efnis- og vinnufjárhæðir, samtala hverrar raðar og heildarsumma verksins. Töflureiknar reikna þær upp á nýtt, þannig að þú getur breytt verði eða úrgangi í töflureikninum og samtölurnar fylgja. Tölurnar sem TakeoffCraft reiknaði eru líka vistaðar í reitunum og stemma upp að sentinu.

Athugasemdadálkurinn telur upp formúlu hvers íhlutar, villur í formúlum, merki á blöðum án mælikvarða, veggflöt og ummál. Þegar eitthvað er skilið eftir segir heildarsummuröðin „Ófullkomið: sjá athugasemdirnar hér að ofan“.

Vinnubókin hefur verið prófuð í LibreOffice Calc, sem reiknaði hana upp aftur í sömu samtölur. Hún hefur ekki enn verið opnuð í Excel. Nánari upplýsingar um dálka eru í [Útflutningsdálkar](topic:export-columns).

## Kostnaðaráætlunin sem CSV

Opnaðu valmyndina {{ui:Flytja út}} og veldu {{ui:CSV}}. Þú færð `(heiti).csv`: sömu raðir og dálka og Kostnaðaráætlunarvinnublaðið, sem venjuleg gildi (engar formúlur), og heildarsummuna. Notaðu hana til að líma inn í annað kostnaðar- eða bókhaldskerfi.

CSV-skráin hefur aðeins kostnaðaráætlunina; fyrir magntölur eftir blaði og merkjalistann skaltu nota XLSX. {{ui:Efnislisti}} í sömu valmynd vistar efnislistann einan sem CSV, til pöntunar.

## Kostnaðaráætlunin í Google Sheets

Fyrir ofan magntöfluna setur **Afrita fyrir Google Sheets** kostnaðaráætlunina á klippiborðið sem tab-aðgreindan texta, með sömu línum og CSV-skráin. Í Google Sheet smellirðu á reit A1 og límir. TakeoffCraft skráir sig ekki inn hjá Google og sendir ekkert þangað.

## Vantar verð og undirritun

Lína með magni en án verðs segir **Vantar verð** í athugasemdum sínum, og útflutningurinn telur þær með í samtölunum. Þegar kostnaðaráætlunin var undirrituð nefnir útflutningurinn hver undirritaði, hvenær og fyrir hvaða samtölu. Sjá [Vantar verð og undirritun kostnaðaráætlunar](topic:sign-off-the-estimate).

## Merkt PDF

1. Opnaðu PDF-skjölin sem þú vilt teikna merkin á.
2. Opnaðu valmyndina {{ui:Flytja út}} og veldu {{ui:Merkt PDF}}.
   „Skrifa merkt PDF…“ birtist, og vafrinn þinn sækir síðan eina skrá fyrir hvert merkt PDF, nefnda `(PDF heiti) (takeoff).pdf`.

Í afritinu:

- eru runur teiknaðar sem línur í lit liðarins,
- flatarmál eru fyllt létt með heilli útlínu, og útskurðir skildir eftir opnir,
- talningar eru punktar,
- hver síða með merkjum fær litla skýringu neðst í vinstra horninu: lit hvers liðar, heiti hans og magn á þeirri síðu.

Upprunalegu PDF-skjölin þín breytast ekki.

Athugasemdir:

- Aðeins PDF-skjöl sem eru opin eru skrifuð. Merki á PDF-skjölum sem eru ekki opin eru áfram í samtölunum en eru ekki teiknuð; opnaðu þau fyrst.
- Heiti í skýringunni nota staðlað PDF-letur. Stafir sem það getur ekki birt eru prentaðir sem „?“.
- Ekki er hægt að afrita dulkóðað PDF-skjal með merkjum: „This PDF is password-protected or encrypted, so a marked copy cannot be written. The takeoff itself is fine; export the spreadsheet instead.“ — Þetta PDF er varið með lykilorði eða dulkóðað, svo ekki er hægt að skrifa merkt afrit. Magntakan sjálf er í lagi; fluttu út töflureikninn í staðinn.
- Fyrsta {{ui:Merkt PDF}} í flipa hleður PDF-ritlinum. Án nettengingar er hann aðeins til staðar ef forritastikan sýnir {{ui:Tilbúið án nettengingar}}; sjá [Vinna án nettengingar](common:offline).

:::chromium
Með nokkrum merktum PDF-skjölum gætu Chrome og Edge spurt einu sinni hvort þessi síða megi sækja margar skrár. Veldu Leyfa, annars færðu aðeins fyrstu skrána.
:::

## Ekkert til að flytja út?

- {{ui:XLSX}} og {{ui:CSV}} þurfa að minnsta kosti einn lið: „Ekkert til að flytja út enn: búðu til lið og mældu hann upp.“
- {{ui:Merkt PDF}} þarf merki á opnu PDF-skjali: „Engin merki á opnu PDF-skjölunum enn.“

## Vistaðu magntökuna líka

Útflutningur er skýrsla. Til að halda áfram að vinna í magntökunni seinna skaltu líka velja {{ui:Vista magntöku}}: sjá [Vista og opna magntöku aftur](topic:save-and-reopen).

Til að bæta við yfirstjórnarkostnaði, hagnaði, sköttum og tryggingu og senda tillögu, sjá [Tilboðsyfirlit og tillögu](topic:bid-summary).
