---
title: Skjár TakeoffCraft
summary: Skoðunarferð um gluggann eftir nafninu á skjánum – tækjastikuna, blaðalistann, blaðið, Liðir-spjaldið, Magntölur-töfluna og stöðustikuna.
keywords: skjár, útlit, skipulag, borði, verkefnavafri, verkfærakassi, upplýsingareitur, tækjastika, spjöld, blaðalisti, liðir, magntölur, stöðustika, skoðunarferð, viðmót
from: ab1115e0
---

TakeoffCraft fyllir vafragluggann undir forritastiku CadCraft. Ofan frá og niður og frá vinstri til hægri:

| Hluti | Staðsetning | Til hvers hann er |
|---|---|---|
| Forritastika | Efst | Heiti forritsins, útgáfan, {{ui:Um TakeoffCraft}}, {{ui:Hjálp}} ({{key:F1}}), {{ui:Vista til notkunar án nettengingar}}, {{ui:Stillingar}} ({{key:Mod+,}}), hnappurinn {{ui:Allur skjárinn}} og þemarofinn {{ui:Blað}} / {{ui:Líkan}}. |
| Tækjastika | Undir forritastikunni | Allar skipanir, í hópum: {{ui:Skrá}}, {{ui:Flytja út}}, {{ui:Mælikvarði}}, {{ui:Magntaka}}, {{ui:Breyta}}, {{ui:Sýn}}. |
| Blöð | Vinstri | Hver síða í hverju opnu PDF-skjali, með smámynd, mælikvarða og fjölda merkja. |
| Blaðið | Miðja | Opna síðan. Þú mælir hér. |
| Liðir | Hægri | Magntökuliðirnir þínir, stillingar valins liðar og valið merki. |
| Magntölur | Neðst | Magntölur og kostnaður eftir lið eða blaði, og heildarverð verks. |
| Stöðustika | Neðst | Mælingin í rauntíma, skilaboð, 45° vísbendingin og aðdrátturinn. |

## Tækjastikan

Færðu músina yfir hvaða hnapp sem er til að sjá hvað hann gerir og lykilinn hans.

| Hópur | Hnappar |
|---|---|
| {{ui:Skrá}} | {{ui:Ný}} (tóm magntaka), {{ui:Opna PDF-skjöl}} ({{key:Mod+O}}), {{ui:Opna magntöku}} (`.takeoff.json`-verkefni), {{ui:Vista magntöku}} ({{key:Mod+S}}) |
| {{ui:Flytja út}} | Ein valmynd: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Merkt PDF}} |
| {{ui:Mælikvarði}} | {{ui:Kvarða}} ({{key:K}}), {{ui:Athuga}} ({{key:D}}) og listinn {{ui:Forstilling}} |
| {{ui:Magntaka}} | {{ui:Velja}} ({{key:V}}), {{ui:Línuleg}} ({{key:L}}), {{ui:Flatarmál}} ({{key:A}}), {{ui:Hringur}} ({{key:O}}), {{ui:Bogi}} ({{key:R}}, rofi sem er á eða af), {{ui:Frádráttur}} ({{key:E}}, rofi sem er á eða af), {{ui:Úrskurður}} ({{key:X}}), {{ui:Telja}} ({{key:C}}), {{ui:Sjálftalning}} ({{key:S}}) |
| {{ui:Breyta}} | {{ui:Afturkalla}} ({{key:Mod+Z}}), {{ui:Endurgera}} ({{key:Mod+Y}}), {{ui:Afrita}} ({{key:Mod+C}}), {{ui:Líma}} ({{key:Mod+V}}) og {{ui:Meira}}: {{ui:Klippa}}, {{ui:Afrita}}, {{ui:Líma}}, {{ui:Líma á sama stað}}, {{ui:Tvöfalda}}, {{ui:Eyða}}, {{ui:Velja allt}}, {{ui:Velja ekkert}} |
| {{ui:Sýn}} | {{ui:Passa blað}} ({{key:F}}), {{ui:Passa breidd}} ({{key:W}}) |

Verkfærið sem þú notar er sýnt niðurþrýst. {{ui:Bogi}} og {{ui:Frádráttur}} hnapparnir haldast niðurþrýstir meðan þeir eru á.

## Blöð (vinstri)

- **Leitaðu í blöðum** síar listann eftir heiti blaðs, skráarnafni eða síðumerki.
- Hvert blað sýnir smámynd (teiknuð meðan þú flettir), heiti þess og annaðhvort mælikvarða þess eða **Enginn mælikvarði**.
- Hægra megin í hverri röð sýnir fjölda merkja á blaðinu. Meðan liður er auðkenndur sýnir það í staðinn hversu mörg merki þess liðar eru á blaðinu.
- Smelltu á blað til að opna það. {{key:PageDown}} og {{key:PageUp}} færa þig á næsta og fyrra blað á listanum.
- Þegar magntaka nær yfir PDF-skjöl sem eru ekki opin nefnir athugasemd undir listanum þau. Sjá [Vista og opna magntöku aftur](topic:save-and-reopen).

Heiti blaðanna koma úr PDF-skjalinu: síðumerki eins og `A-101` verður heiti blaðsins. Síða án merkis fær heiti eftir skránni og síðunúmeri, eins og „Teikningar, síða 3“. Þegar nokkur PDF-skjöl eru opin sýna merkt blöð líka skráarnafnið.

## Blaðið (miðja)

- Stikan undir blaðinu sýnir heiti blaðsins og mælikvarða þess, eða „Enginn mælikvarði ennþá: veldu forstillingu eða kvarðaðu“. Hnapparnir hennar: {{ui:MarkupCraft}} (þegar það forrit getur tekið við PDF-skjalinu; sjá [Byrjaðu magntöku og opnaðu teikningasett](topic:open-plan-set)), {{ui:Bera saman}} (eldri útgáfa blaðsins yfir þessu: [Berðu saman endurskoðað blað](topic:compare-revisions)), „(n) til athugunar“ (merkt merki, þegar þau eru til staðar) og {{ui:3D}} ([3D yfirferðarsýnin](topic:check-in-3d)).
- Áður en nokkurt PDF-skjal er opið sýnir miðjan stutta fimm skrefa leiðbeiningu.
- Músarhjólið notar aðdrátt þar sem bendillinn er. Dragðu til að hliðra. Sjá [Lyklaborð og mús](topic:keyboard).
- Meðan þú notar {{ui:Sjálftalning}} birtist stika með stýringum sínum efst á blaðinu.

## Liðir (hægri)

Efst er listinn {{ui:Tilboðssvæði}}: byggingin, hæðin eða áfanginn sem ný merki fara í ([Tilboðssvæði](topic:bid-areas)).

- {{ui:Nýr liður}} opnar lítinn reit: heiti, gerð ({{ui:Línulegt (lengd)}}, {{ui:Flatarmál}} eða {{ui:Telja}}) og {{ui:Bæta við}}.
- Listinn sýnir lit hvers liðar, gerðartákn, heiti og magn. Smelltu á lið til að teikna með honum og auðkenna merki hans á öllum blöðum. Smelltu aftur til að hætta að auðkenna.
- Undir listanum er **Liður: (name)** liðaritillinn: heiti, gerð, litur, eining, hæð eða dýpt, affall, efnis- og vinnuverð, mældu gildin og {{ui:Samsetning}}. Sjá [Búðu til liði í magntöku](topic:create-items).
- **Valið merki** birtist þegar þú velur merki: hvaða lið það tilheyrir, blað þess, mælingar þess og hnappar eins og {{ui:Bæta við úrtaki}} og {{ui:Eyða merki}}. Þegar nokkur merki eru valin verður það **Valin merki**: hversu mörg af hverjum lið, og {{ui:Afrita}}, {{ui:Tvöfalda}}, {{ui:Klippa}} og {{ui:Eyða merkjum}}.
- Liðaritillinn endar á {{ui:Afrita lið}} og {{ui:Tvöfalda lið}}: liður með samsetningu sinni og kostnaði, án merkja. Sjá [Afritun, líming og tvöföldun merkja](topic:copy-paste).

## Magntölur (neðst)

- {{ui:Eftir lið}} sýnir hvern lið og samsetningarþætti hans með magni, affalli, einingarverði og margfölduðum kostnaði. Þú getur skrifað affall og einingarverð beint inn í töfluna.
- {{ui:Eftir blaði}} sýnir magn hvers liðar á hverju blaði.
- Viðvörun sem byrjar á **Ófullgert:** birtist þegar eitthvað er ekki með í heildartölunum.
- {{ui:Heildarverð verks}} er hægra megin í hausnum.
- Örvarhnappurinn lengst til hægri felur eða sýnir töfluna til að gefa blaðinu meira pláss.

Sjá [Lestu magntölur og kostnaðaráætlunina](topic:read-quantities).

## Stöðustika (neðst)

Frá vinstri til hægri: mælingin í rauntíma meðan þú teiknar (lengd, flatarmál, radíus eða athugunarniðurstaða), reitinn {{ui:Innslátt}} meðan þú skrifar lengd, skilaboð frá TakeoffCraft, áminningin „Shift smellir á 45°“ (eða „Smellir á 45°; Shift losar hornið“ þegar það er kveikt í [Stillingum](topic:settings)), hnappinn {{ui:Smella}} (smellir á línur teikningarinnar, kveikt þegar hann er auðkenndur; {{key:F3}}), og aðdráttarhlutfallið.

:::tip
Lestu stöðustikuna þegar eitthvað gerist ekki. TakeoffCraft útskýrir þar hvers vegna það hafnaði smelli, til dæmis „Þetta blað er ekki með mælikvarða ennþá“.
:::

## Önnur útlit

Allt ofangreint er {{ui:CadCraft klassískt}} útlitið, upphafið. {{ui:Stillingar}} ({{key:Mod+,}}) › {{ui:Sameiginlegt}} › {{ui:Útlit}} býður upp á tvö til viðbótar; sömu verkfæri og lyklar virka í öllum þremur, og ef þú velur {{ui:CadCraft klassískt}} aftur kemur allt aftur þangað sem það var.

| Útlit | Í TakeoffCraft |
|---|---|
| {{ui:Borði og verkefnavafri}} | {{ui:Magntökuborði}} efst ([Valmyndir, lyklar og mús](topic:menus-keys-and-mouse)), stika fyrir verkfærið sem er í gangi, flipi fyrir hvert blað sem þú opnar (líkan og útlit teikningar eru líka blöð) með forstillingum mælikvarða og {{ui:Passa blað}} undir blaðinu. Vinstra spjaldið geymir {{ui:Eiginleikar}} (valinn liður, athugasemd eða merki) yfir {{ui:Magntökuvafri}}: {{ui:Blöð}} (smelltu á eitt til að opna það í flipa), {{ui:Skilyrði}} (smelltu á eitt til að teikna með því) og {{ui:Kostnaðaráætlun}} (heildarverð hvers liðar og heildarverð verks); smámyndirnar eru annar flipi þess. |
| {{ui:Verkfærakassi og upplýsingareitur}} | Tækjastikan yfir blaðinu, upplýsingareitur með {{ui:Tilboðssvæði}}, verkfærinu sem er í gangi eða valinu og blaðstikunni, dálkur með magntökuverkfærunum vinstra megin, flipi fyrir hvert blað, og {{ui:Smella}} og aðdrátturinn undir blaðinu. |

Meðan [3D yfirferðarsýnin](topic:check-in-3d) er opin víkja blaðflipar og stikan undir blaðinu til hliðar; lokaðu 3D-sýninni til að mæla aftur. Í síma keyrir símaútlitið alltaf.

## Allur skjárinn og þemu

Hnappurinn {{ui:Allur skjárinn}} á forritastikunni, eða {{key:Ctrl+Shift+F}} (Control á öllum kerfum, líka á Mac), skiptir á milli venjulegs, alls skjásins og alls skjásins með földum stikum. Þegar stikurnar eru faldar skaltu færa bendilinn að efri brúninni til að sýna þær aftur.

{{ui:Blað}} er ljósa þemað og {{ui:Líkan}} það dökka. Í {{ui:Líkan}} er teikningin sýnd öfug (ljósar línur á dökkum grunni) aðeins á skjánum; útflutningur breytist aldrei.
