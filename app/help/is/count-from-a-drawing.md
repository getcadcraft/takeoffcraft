---
title: Telja úr teikningu
summary: Teldu blokkir, hluti á lagi eða texta beint úr DWG eða DXF: nákvæmt, með innfelldum blokkum, afbrigðum kvikblokka og blokkafylkjum meðhöndluðum, í einu afturkallanlegu skrefi.
keywords: telja úr teikningu, cad-talning, blokkatalning, telja blokkir, innsetning, heiti blokkar, innfelldar blokkir, kvikblokk, afbrigði, minsert, fylki, lag, tegund hlutar, hringir, texti, eigind, auðkenni, falin lög, nákvæm talning, hvernig, hurðir, búnaður
from: 5060e24e
---

{{ui:Telja úr teikningu}} á blaðastikunni (skipunin **Count from the drawing** í hinum valmyndastílunum) telur það sem DWG- eða DXF-skrá segir að sé þar. Þar sem {{ui:Sjálftalning}} leitar að mynd af tákni og getur misst af einu eða fundið rangt, telur þetta hlutina: sérhver innsetning blokkar sem heitir `DOOR-36` er ein hurð. Opnaðu teikninguna fyrst: [Opna DWG- eða DXF-teikningu](topic:open-a-drawing).

## Telja blokk

1. Opnaðu blað af teikningunni. {{ui:Telja úr teikningu}} er á blaðastikunni.
2. Veldu það. Glugginn listar blokkirnar með fjölda hverrar. Leitaðu eftir heiti og veldu eina.
3. Athugaðu línuna undir listanum: „22 fundust, 22 bætast við.“
4. Undir {{ui:Bæta við}} velur þú talningarlið, eða lætur {{ui:Nýtt talningaratriði}} vera og gefur honum heiti.
5. Veldu bæta-hnappinn, sem nefnir töluna: {{ui:Bæta við 22 merkjum}}. Merkin birtast á innsetningarpunktum blokkarinnar, og magn liðarins er talningin.

Þetta er eitt afturköllunarskref: {{key:Mod+Z}} tekur merkin (og nýjan lið) burt saman. Mat, töflureiknirinn og merkta PDF-skjalið meðhöndla liðinn eins og hvern annan talningarlið.

### Hvað telst

- **Sérhver innsetning blokkarheitisins**, sama hver mælikvarðinn og hornið er, í líkanrými eða blaðarými. Heiti blokka skipta ekki máli með hástöfum.
- **Blokkafylki** (MINSERT): hvert eintak í fylkinu er eitt.
- **Innfelldar blokkir.** Blokk sem er sett inn í aðra blokk telst á hverju dýpi. Listinn segir „6 innan annarra blokka“; afhakaðu {{ui:Telja blokkir inni í öðrum blokkum líka}} til að telja aðeins innsetningar sem eru settar beint í teikninguna.
- **Kvikblokkir.** Kvikblokk telst undir sínu eigin heiti, ekki undir afritunum (`*U12`) sem skráin geymir. Ástönd hennar eru talin sér („Single 12, Double 4“): veldu ástand til að telja aðeins þau, eða {{ui:Öll afbrigði}}. Þegar skrá segir ekki hvaða ástand afrit sýnir eru þau talin sem „(ástand óþekkt)“.
- **Lagasía.** Blokk á mörgum lögum: veldu eitt undir {{ui:Á lagi}}.

### Hvað telst ekki

- **Falin lög.** Hlutur á lagi sem er slökkt eða fryst í skránni (eða sem þú faldir í {{ui:Lög}}) er skilinn út, og línan segir hversu margir: „3 á földum lögum sleppt“. Hakaðu við {{ui:Telja þau líka}} til að taka þá með.
- **Tengdar teikningar sem eru ekki opnar** eru ekki taldar; glugginn segir það.
- **Hlutir staflaðir nákvæmlega ofan á annan af sömu gerð** eru taldir sem tveir (það eru tveir hlutir) og glugginn segir það: það er yfirleitt teiknivilla sem vert er að skoða.

## Það sem þetta blað sýnir, eða alla teikninguna

- **Það sem þetta blað sýnir** telur hlutina sem blaðið sýnir: á útliti, líkanhlutina innan gluggasvæða þess (lag fryst í glugga er ekki talið þar) auk eigin hluta útlitsins.
- **Öll teikningin, hver hlutur einu sinni** telur líkanrýmið einu sinni, með merkjunum á blaðinu Model, og telur ekki það sem nokkur útlit sýna aftur.

Það að telja það sem útlit sýnir og það sem Model sýnir gefur sömu tölu fyrir sömu hluti; bættu ekki hvoru tveggja við sama lið.

## Telja aftur

Ef sama blokk er talin aftur með sama lið bætist aðeins það sem er nýtt við: „22 þegar taldir.“ Hvert merki stendur fyrir einn hlut.

## Eftir lagi og gerð

Undir {{ui:Eftir lagi og gerð}} velur þú lag og gerð hluta (hringi, fjöllínur, skyggingar…): „allir hringir á E-LITE“. Hakaðu við {{ui:Telja líka hluti inni í blokkum}} til að telja einnig hluti sem eru inni í blokkaskilgreiningum, á hverjum stað þar sem blokkin er sett inn.

## Eftir texta

Undir {{ui:Eftir texta}} skrifar þú textann, eins og `A3`, og tilgreinir hvort hann er nákvæmlega þessi, inniheldur hann, eða er heilt orð. Textahlutir, margvísunartexti og **eigindagildi** blokka telja allt (eigindið `ITEM = A3` finnst); veldu {{ui:Í eigindi}} til að telja aðeins eitt eigind. Algengustu textarnir eru taldir upp til að smella á.

## Hvenær á að nota Sjálftalningu í staðinn

Notaðu {{ui:Sjálftalning}} fyrir PDF-skjöl og fyrir tákn í teikningu sem eru ekki blokkir (teiknuð laus, eða sprengd). Ef þau eru teiknuð sem blokkir, teldu þau hér.
