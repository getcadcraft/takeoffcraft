---
title: Mæla línulegar keyrslur
summary: Taktu veggi, lagnir, skraut og aðrar lengdir sem keyrslur, með beinum bútum, bogum og 45 gráðu festingu með Shift.
keywords: línuleg, lengd, keyrsla, fjöllína, veggir, lf, línulegir fetar, bogi, ferill, 45 gráður, ortho, festing, bútar, polylength, frádráttur, op, hurð, bil, innslátt, slegið inn, hnit, fjarlægð, bein fjarlægð, polar
from: c669deff
---

Línulegur liður mælir lengd. Hver keyrsla er keðja punkta: beinir bútar, og bogar þar sem þú kveikir á bogaham. Liður getur haft hvaða fjölda keyrslna sem er á hvaða fjölda blaða sem er.

Áður en þú byrjar: blaðið þarf mælikvarða ([Stilla mælikvarðann](topic:set-the-scale)) og þú þarft línulegan lið ([Búa til magntökuliði](topic:create-items)).

Á vektor-PDF smella punktarnir þínir á línur teikningarinnar sjálfrar: enda, miðpunkta og skurðpunkta ([Festa við línur teikningarinnar](topic:snap-to-the-drawing); {{key:F3}} slekkur á því).

## Rissa keyrslu

1. Smelltu á línulega liðinn undir {{ui:Liðir}}.
2. Veldu {{ui:Línuleg}} á tækjastikunni, eða ýttu á {{key:L}}.
3. Smelltu á upphaf keyrslunnar.
4. Smelltu á hvert horn meðfram henni.
   Stöðustikan sýnir „Length“ (keyrsluna hingað til, að bendlinum) og „segment“ (bútinn sem þú ert að rissa), í fetum og tommum.
5. Ljúktu keyrslunni: tvísmelltu á síðasta punktinn, ýttu á {{key:Enter}}, eða hægrismelltu.
   Keyrslan er teiknuð í lit liðsins og verður valda merkingin. Lengd liðsins í listanum {{ui:Liðir}} og töflunni {{ui:Magntölur}} hækkar.

Verkfærið helst á {{ui:Línuleg}}, svo þú getur byrjað þá næstu strax. Ýttu á {{key:Esc}} til að fara aftur í {{ui:Velja}}.

Meðan teiknað er:

- {{key:Backspace}} (eða {{key:Delete}}) fjarlægir síðasta punkt.
- {{key:Esc}} hendir ólokinni keyrslu.
- Dráttur hliðrar blaðinu og hjólið aðdráttast, án þess að bæta við punktum.

:::mac
Á Mac-snertiborði er hægri smellur tveggja fingra smellur (kveiktu á öðrum smelli í Kerfisstillingum, undir Snertiborð). TakeoffCraft les aðeins annan hnappinn, svo Control-smellur gæti verið talinn venjulegur smellur og bætt við punkti. Tvísmellur eða {{key:Enter}} ljúka alltaf.
:::

:::touch
Á snertiskjá setur snerting punkta, dráttur með einum fingri hliðrar og klípa með tveimur aðdráttast. Ljúktu með löngum þrýstingi, tvísnertingu, eða {{ui:Ljúka}} á stikunni undir blaðinu ({{ui:Aftan}} tekur síðasta punktinn til baka). Sjá [Úrlausn vandamála](topic:troubleshooting#touch-screens).
:::

## Beinir bútar í 45° skrefum

Haltu {{key:Shift}} meðan þú setur punkt. Bútinn frá síðasta punkti festist við næstu 0°, 45°, 90° eða 135° stefnu og heldur lengdinni sem þú drósst eftir henni. Stöðustikan minnir þig á það: „Shift snaps to 45°“.

Í bogaham gildir það um endann á boganum: strengur bogans liggur í 45° skrefum frá upphafinu. Punkturinn sem þú smellir á ferlinum er aldrei festur.

## Bogar og bogadregnir veggir

1. Meðan þú rissar keyrslu, settu punktinn þar sem ferillinn byrjar.
2. Kveiktu á bogaham: veldu {{ui:Bogi}} á tækjastikunni eða ýttu á {{key:R}}. Hnappurinn helst niðurþrýstur.
3. Smelltu á hvaða punkt sem er á ferlinum, einhvers staðar um miðjuna.
   Stöðustikan bætir við „(arc: click where it ends)“ og forskoðunin beygist í gegnum punktinn þinn.
4. Smelltu þar sem ferillinn endar.
   Boganum er bætt við. Lengd hans er nákvæm bogalengd, ekki röð stuttra strengja.
5. Smelltu á annan punkt á næsta ferli og endann hans til að halda áfram með boga, eða ýttu á {{key:R}} aftur til að fara í beina búta.

{{key:Backspace}} eða {{key:Esc}} sleppa fyrst punktinum sem bíður á ferlinum; ýttu aftur til að fjarlægja punkta eins og venjulega.

## Slá inn lengdir og hnit

Eftir fyrsta punktinn geturðu slegið inn hvar næsti punktur á að vera í stað þess að smella. Skrifaðu tölustaf, `@` eða `#`: reitur {{ui:Innslátt}} opnast á stöðustikunni með því sem þú skrifaðir. Ýttu á {{key:Enter}} til að setja punktinn; reiturinn helst opinn fyrir þann næsta.

| Innslátt | Næsti punktur fer |
|---|---|
| `12'6"` | 12'-6" frá síðasta punkti, í átt að bendlinum (bentu í áttina, skrifaðu síðan lengdina) |
| `12'6"<45` | 12'-6" í 45°, talið rangsælis frá hægri hlið skjásins (`<90` er upp, `<-90` niður) |
| `@6',-4'` | 6' til hægri og 4' niður frá síðasta punkti |
| `6',4'` (eða `#6',4'`) | 6' til hægri og 4' upp frá fyrsta punkti þessarar keyrslu |

Lengdir eru skrifaðar eins og alls staðar í TakeoffCraft ([Innsláttarsnið](topic:entry-formats)): `12'-6 1/2"`, `12.5` (fet), `30"`, `3.2 m`. „Hægri“ og „upp“ eru eins og þú sérð blaðið, líka þegar PDF-síðunni er snúið.

{{key:Enter}} á tómum reit ljúkur keyrslunni, eins og {{key:Enter}} á blaðinu; {{key:Esc}} lokar reitnum og heldur keyrslunni áfram. Innsláttir punktar fara eftir sömu reglum og smellir: frádrættir, bogar og lokun flatarmáls virka öll. Sami reitur virkar í {{ui:Flatarmál}} og {{ui:Úrskurður}}; eftir miðju hrings tekur hann radíusinn.

## Draga frá hluta keyrslu

Veggkeyrsla sem fer fram hjá hurð eða verslunarglugga er hægt að teikna beint í gegnum og telur samt aðeins vegginn: bútarnir yfir opið eru **frádrættir**. Þeir eru teiknaðir strikaðir og þunnir, og eru ekki taldir.

Meðan teiknað er:

1. Settu punktinn þar sem opið byrjar.
2. Veldu {{ui:Frádráttur}} á tækjastikunni eða ýttu á {{key:E}}. Hnappurinn helst niðurþrýstur og stöðustikan segir að næstu bútar séu frádrættir.
3. Smelltu þar sem opið endar. Bútinn er teiknaður strikaður; „Length“ á stöðustikunni sleppir honum.
4. Ýttu á {{key:E}} aftur og haltu áfram meðfram veggnum.

Eftir teikningu: veldu keyrsluna. Undir **Valin merking** hefur hver bútur reit {{ui:Frádráttur}}: hakaðu við hann til að draga bútinn frá, afhakaðu til að telja hann aftur. Hver breyting er eitt afturkallanlegt skref.

Keyrsla heldur alltaf að minnsta kosti einum talnum bút. Spjaldið sýnir þá **Frádrættir** (lengd sem var dregin frá) og **Teiknað** (öll keyrslan); **Length**, magn liðsins, veggflatarmálið og kostnaðurinn nota lengdina án frádráttanna. 3D-athugunarsýnin skilur eftir bil í veggnum, merkta PDF-skráin teiknar frádrættina strikaða, og útflutta blaðið **Merkingar** telur þá upp.

Að færa horn heldur frádráttunum. Að bæta við eða fjarlægja punkta (með því að rissa keyrsluna aftur) byrjar án þeirra.

## Skoða upplýsingar um keyrslu

Veldu {{ui:Velja}} ({{key:V}}) og smelltu á keyrsluna. **Valin merking** hægra megin sýnir:

- liðinn sem hún tilheyrir (veldu annan línulegan lið í listanum til að færa keyrsluna þangað),
- blaðið,
- **Length** í fetum og tommum og í LF,
- fjölda **Segments** og **Wall area** þegar liðurinn hefur hæð,
- lengd hvers bútar, með „(arc)“ á eftir bogum, og reitinn sinn {{ui:Frádráttur}}.

Á blaðinu er hver bútur valinnar keyrslu merktur lengd sinni.

## Laga keyrslu

- **Færa punkt**: veldu keyrsluna, dragðu síðan eitt af ferhyrndu hornhandföngunum. Haltu {{key:Shift}} til að festa færða bútinn í 45° skref. Bogi heldur bungu sinni.
- **Beygja boga**: valin keyrsla sýnir kringlótt handfang í miðju hvers boga. Dragðu það: bogaði fer í gegnum staðinn þar sem þú sleppir, svo hann bungar meira, minna, eða í hina áttina. Dreginn á beina línuna milli enda sinna verður hann beinn bútur. {{key:Mod+Z}} afturkallar það („Bend arc“).
- **Eyða keyrslu**: veldu hana og ýttu á {{key:Delete}}, veldu {{ui:Eyða}} á tækjastikunni undir valmyndinni {{ui:Meira}}, eða {{ui:Eyða merki}} í spjaldinu.
- **Afturkalla**: {{key:Mod+Z}}; endurgera með {{key:Mod+Y}}.

Þú getur ekki sett punkt inn í miðja keyrslu enn sem komið er. Eyddu keyrslunni og rissaðu hana aftur.

## Veggflatarmál

Gefðu línulega liðnum {{ui:Hæð}} (til dæmis `9'-0"`). Hann skilar þá **Wall area (A)** = lengd × hæð, í SF (eða m² fyrir metrískan lið), og veggflatarmálið fer í athugasemdadálk töflureikni-útflutningsins. Notaðu það í samsetningum fyrir borð, málningu eða einangrun: sjá [Samsetningar og formúlur](topic:assemblies).
