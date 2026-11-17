---
title: Opnaðu DWG- eða DXF-teikningu
summary: Opnaðu teikningarskrá sem blöð (líkanrými og hvert útlit), byrjaðu með mælikvarðanum sem teikningin gefur, sýndu eða feldu lög hennar og taktu inn tengdar teikningar.
keywords: dwg, dxf, cad, teikning, opna teikningu, útlit, líkanrými, pappírsrými, blöð, einingar, insunits, mælikvarði sýndarglugga, xref, tengd teikning, lög, frosin, ekkert pdf, prenta, án prentunar
from: d8c3f504
---

TakeoffCraft opnar DWG- eða DXF-teikningu eins og PDF-skjal: þú þarft ekki að prenta hana í PDF fyrst. Talning úr teikningunni sjálfri er nákvæm, því teikningin veit hvað hver hlutur er. Sjá [Telja úr teikningu](topic:count-from-a-drawing).

## Opnaðu teikninguna

1. Veldu {{ui:Opna teikningar}} í {{ui:Skrá}}-hópnum, eða ýttu á {{key:Mod+O}}.
2. Veldu DWG- eða DXF-skrána. Þú getur valið margar, og PDF-skjöl með þeim.
3. Veldu Opna.

Þú getur líka dregið teikningaskrár á TakeoffCraft, eins og PDF-skjöl. Ekkert er sent upp: vafrinn les skrána á tölvunni þinni.

TakeoffCraft les DWG frá AutoCAD 2000 til 2018 og ASCII DXF frá R12 til 2018. Það hafnar tvíundar-DXF (vistaðu sem ASCII, eða sem DWG) og skrá sem er hvorugt, og segir hvers vegna. Skemmd skrá opnast með því sem var hægt að lesa, og skilaboð segja það; talningar hennar geta verið ófullkomnar.

## Blöð

- **Líkan** er líkanrými teikningarinnar.
- **Hvert útlit** (flipi í pappírsrými) er blað, nefnt eftir flipanum, í röð flipanna. Útlit sýnir líkanið í gegnum sýndarglugga sína, eins og það prentast.

Aðdráttur, hliðrun, smellifesting við línur teikningarinnar sjálfrar, merki, athugasemdir, {{ui:Kvarða}} og annað virkar eins og á PDF-skjali. Blöð teikningar eru vistuð í magntökunni eftir skráarnafni og fingrafari innihalds hennar, eins og PDF-skjal: opnaðu sömu skrána aftur og merkin eru á blöðum hennar.

## Mælikvarðinn

Blað byrjar með mælikvarðanum sem teikningin gefur:

- **Útlit** tekur mælikvarða stærsta sýndarglugga síns. Mælikvarði eins og 1/2" = 1'-0" er nefndur sem forstillingin sem hann er; annar birtist sem „Frá sýndarglugga teikningarinnar: 1" = 2.5'“. Ef útlit hefur sýndarglugga í öðrum mælikvörðum ræður sá stærsti mælikvarða blaðsins: athugaðu hina með {{ui:Athuga}}.
- **Líkan** tekur einingar teikningarinnar (tommur, millimetrar, fet…) sem mælikvarða: „Einingar teikningar (tommur)“.
- **Teikning án eininga** (teikningin segir aldrei hvort eining sé tomma eða millimetri) hefur engan mælikvarða: blaðið segir „Enginn mælikvarði“, og mæling á því er hafnað, eins og á PDF-skjali án mælikvarða. Talning þarfnast engs mælikvarða. Gefðu henni einn með {{ui:Kvarða}}.

{{ui:Kvarða}}, {{ui:Athuga}} og listinn {{ui:Forstilling}} breyta mælikvarða hvenær sem er og ganga framar þeim sem teikningin gefur. Forstillingalistinn er óvirkur á Líkani, sem hefur enga pappírsstærð.

## Lög

{{ui:Lög}} á blaðastikunni listar lög teikningarinnar með fjölda hluta í hverju á þessu blaði. Lög sem skráin slökkti á eða fraus byrja falin. Taktu hakið úr lagi til að fela það, eða merktu falið lag til að sýna það: blaðið teiknast aftur, og það sem er falið er skilið eftir í tölum og í hlutum sem {{ui:Mæla teikningu}} býður, nema þú biðjir um að telja falin lög líka. {{ui:Sýna allt}} sýnir hvert lag; {{ui:Aftur í lög skrárinnar}} afturkallar breytingar þínar. Val á lögum tilheyrir þessari lotu, ekki magntökuskránni.

## Tengdar teikningar (xref)

Teikning sem tengir aðrar teikningar sýnir þær þar sem þær eru settar inn. TakeoffCraft finnur tengda teikningu meðal **opinna skráa**, eftir skráarnafni hennar: opnaðu hýsiteikninguna og tengdu teikninguna saman (eða hverja á eftir annarri). Þangað til segir stöðustikan hversu margar tengdar teikningar fundust ekki, og hvað þær eiga að teikna vantar; talningar segja það líka.

## Takmörk

- Hlutir sem TakeoffCraft getur ekki lesið eða sett (umboðshlutir, óþekktir flokkar) eru taldir upp í talningarglugganum eftir gerð; þeim er aldrei sleppt án orðs.
- Mjög stórar teikningar eru teiknaðar að hluta, og talningar stöðvast við hámark og segja það. Opnaðu PDF-útprentun slíkrar teikningar í staðinn.
- Teikning er dregin í svörtu og í sínum eigin litum, dökkuðum fyrir hvítan pappír. Stíltöflur og pennaúthlutanir eru ekki notaðar.
