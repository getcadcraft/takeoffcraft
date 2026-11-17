---
title: Búa til talningarliði
summary: Búðu til línulega liði, flatarmálsliði og talningarliði og stilltu einingu, hæð eða dýpt, úrgang og efnis- og vinnutaxta.
keywords: vinnuflokkur, afköst, stærð vinnuflokks, laun, klukkustundir, mannstundir, vinnustundir, verkdagar, liður, nýr liður, ástand, marg-ástand, einnig mæla, nokkrar gerðir, herbergi, línulegt, flatarmál, talning, eining, hæð, dýpt, úrgangur, efni, vinna, taxti, litur, kostnaður
from: 7fa5effc
---

**Liður** er eitt atriði sem þú mælir og verðleggur: veggjagerð, gólfefni, loft, hurð, ljósabúnaður. Sérhver merking sem þú teiknar tilheyrir lið. Önnur forrit kalla þetta skilyrði.

Hver liður hefur gerð (og getur einnig tekið aðrar tegundir merkinga, sjá [Einn liður, nokkrar tegundir merkinga](topic:create-items#one-item-several-kinds-of-marks)):

| Gerð | Þú teiknar | Hann skilar | Einingar |
|---|---|---|---|
| Línuleg | Keðjur tengdra punkta | Lengd, fjölda keðja, og veggflöt þegar hæð er gefin | LF eða m |
| Flatarmál | Lokaðar útlínur, með útskurðum | Flatarmál, ummál, fjölda svæða | SF, SY, SQ, ac, ha eða m² |
| Talning | Einn smellur á hvern hlut | Hversu margir | EA |
| Slegið magn | Ekkert: þú slærð inn magnið | Töluna sem þú slóst inn (eða eina sem var flutt inn úr CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha eða m² |

## Slegið magn (engin teikning)

Sumt í kostnaðaráætlun er aldrei teiknað: flutningur tækja á verkstað, leyfi, varasjóður, fastverksamningur við undirverktaka, og skurður og fylling sem CivilCraft reiknaði út. Gerðu þær að **Slegnu magni**:

1. Veldu {{ui:Nýr liður}}, skrifaðu heiti, veldu {{ui:Slegið magn (engin teikning)}} og veldu {{ui:Bæta við}}.
2. Í liðsritlinum veldu {{ui:Eining}} (LS fyrir heildarverð) og slærð inn {{ui:Magn}}: `1`, `2.5` eða `1,250`.
3. Stilltu úrgang og taxta eins og fyrir hvern annan lið. Formúlur samsetningar nota `Q`, magnið, til dæmis `ceil(Q / 12)` fyrir fjölda vörubílaferða.

Slegið magn tekur engar merkingar og gerir kostnaðaráætlunina aldrei ófullgerða. Þegar magntakan hefur tilboðssvæði er einnig reitur {{ui:Tilboðssvæði}} í ritlinum: magnið telur þá í því svæði, valkostum þess og samtölum, rétt eins og merking þar myndi gera. Magntölur sem fluttar eru inn úr öðru forriti segja hvaðan þær komu, sjá [Jarðvinna og punktahæðir](topic:earthwork#cut-and-fill-from-civilcraft).

## Búa til lið

1. Í {{ui:Liðir}}-spjaldinu hægra megin, veldu {{ui:Nýr liður}}.
2. Skrifaðu heiti, eins og `Innveggur gerð A` eða `Teppaflísar`.
3. Veldu gerðina: {{ui:Línulegt (lengd)}}, {{ui:Flatarmál}} eða {{ui:Telja}}.
4. Veldu {{ui:Bæta við}} (eða ýttu á {{key:Enter}}).
   Liðurinn birtist á listanum með sínum eigin lit, verður liðurinn sem þú teiknar með, og ritill hans opnast fyrir neðan listann. Stöðustikan segir þér hvaða tól á að velja næst.

Ýttu á {{key:Esc}} í eyðublaðinu til að loka því án þess að bæta við lið.

:::tip
Ef þú velur mælitól fyrst notar TakeoffCraft síðasta lið af réttri gerð, eða opnar eyðublaðið {{ui:Nýr liður}} með þeirri gerð þegar valinni.
:::

## Veldu liðinn sem þú teiknar með

Smelltu á lið á listanum. Hann verður liðurinn sem nýjar merkingar fara í, og merkingar hans eru auðkenndar á öllum blöðum á meðan hinir dofna. Ef opna blaðið hefur engar merkingar hans hoppar TakeoffCraft á blað sem hefur þær. Smelltu aftur á liðinn til að hætta auðkenningu; hann er áfram liðurinn sem þú teiknar með.

Að smella á merkingu með {{ui:Velja}}-tólinu gerir einnig lið hennar að þeim núverandi.

## Stilla liðinn

Ritill liðarins (**Liður: (heiti)**) hefur þessa reiti. Hver þeirra er vistaður þegar þú yfirgefur reitinn eða ýtir á {{key:Enter}}, og hver breyting er hægt að afturkalla.

| Reitur | Hvað hann gerir |
|---|---|
| {{ui:Heiti}} | Sýnt á listanum, í töflunum og í útflutningi. |
| {{ui:Innslátt}} | Línuleg, Flatarmál eða Talning. Hún er læst þegar liðurinn hefur merkingar („Liður með merkingum heldur gerð sinni“). |
| {{ui:Litur}} | Litur merkinga hans á skjánum og í merkta PDF-skjalinu. |
| {{ui:Eining}} | Það sem magnið er gefið í: LF eða m fyrir línulegt; SF, SY, SQ, ac, ha eða m² fyrir flatarmál; EA fyrir talningu. |
| {{ui:Einnig mæla}} | Hinar tegundir merkinga sem liðurinn tekur, hver með sína eigin einingu. Sjá að neðan. |
| {{ui:Hæð}} (línuleg) | Veghæð. Liðurinn skilar þá einnig veggfleti (lengd × hæð). Keðjur sem koma úr BimCraft-líkani bera hurðir og glugga sína: þær eru dregnar frá einu sinni, og liðurinn segir heildarflötinn, opin og nettóflötinn. Magntaka úr BimCraft-verkefni sem valdi mælingaraðferð er mæld með þeirri aðferð hér líka (athugasemdin nefnir hana, með uppruna sínum, og segir að magnmælandi hafi ekki yfirfarið hana); aðferðina er ekki hægt að breyta í TakeoffCraft. Múrsteinar eða blokkir og steypuhræra úr veggjagerð koma sem tveir hlutar: einingarnar til að panta og rúmmál steypuhrærunnar. |
| {{ui:Dýpt}} (flatarmál) | Dýpt eða þykkt, notuð í formúlum samsetninga (til dæmis rúmmál steinsteypu). |
| {{ui:Úrgangur %}} | Bætt við magnið áður en verð er reiknað: 10 þýðir magn × 1.10. |
| {{ui:Efni $/LF}} | Efniskostnaður á einingu. Heitið fylgir einingunni: $/SF, $/EA og svo framvegis. |
| {{ui:Vinna $/LF}} | Vinnukostnaður á einingu. |
| {{ui:CSI-númer}} | CSI MasterFormat-númer þess, eins og `09 21 16` (eða bara deildin, `09`). Verkstaðan „By division“ flokkar kostnað eftir því. Liðir úr [verkpakkum](topic:trade-packs) hafa það þegar. |

Hæð og dýpt taka við fetum og tommum (`9'-0"`, `8' 6"`) eða tugabrotum úr fetum (`9`) fyrir ensk einingar, og metrum (`2.7`, `2700 mm`) fyrir metraeiningar. Taxtar taka við upphæðum eins og `12.50` eða `$1,250`, allt að fjórum aukastöfum. Sjá [Lengd, taxti og prósentuinnsláttur](topic:entry-formats).

Fyrir neðan reitina sýnir **Mælt** heildartölurnar sem formúlur liðarins geta notað, ásamt stöfunum þeirra: Lengd (L), Keðjur (N), Veggflötur (A) fyrir línulegt; Flatarmál (A), Ummál (P), Svæði (N) fyrir flatarmál; Fjöldi (N) fyrir talningu.

## Ein liður, nokkrar tegundir merkinga

Sumt er mælt á fleiri en eina leið: herbergi hefur gólf (flatarmál), sökkul meðfram veggjunum (lengd) og hurðir (talning). Í stað þriggja liða skaltu búa til einn:

1. Búðu til liðinn með aðalgerð sinni, til dæmis flatarmálslið `Herbergi 101`.
2. Undir {{ui:Einnig mæla}} í ritlinum hans skaltu haka við {{ui:Línuleg}}, {{ui:Telja}} eða bæði. Hvor um sig fær einingu við hlið sér.
3. Teiknaðu með hvaða tóli sem er af tegund sem liðurinn tekur: með `Herbergi 101` virkt teiknar {{ui:Flatarmál}} gólfið, {{ui:Línuleg}} sökkulinn og {{ui:Telja}} hurðirnar. TakeoffCraft biður ekki um annan lið.

Liðalistinn sýnir hverja stærð (`50.00 SF + 2 EA`). Í magntöflunni hefur röð liðarins aðalstærðina, og hver önnur tegund fær sína eigin röð fyrir neðan, eins og **Herbergi 101 (talning)**, með eigin úrgangs-, efnis- og vinnutöxtum. Útflutningurinn, töflan á hverju blaði og skýringin í merkta PDF-skjalinu telja þær upp á sama hátt.

Aðalgerðarreitirnir eru áfram aðalgerðarinnar: hæðin eða dýptin, hallinn, útskurðir og þrívíddarformið gilda aðeins um merkingar hennar. Grunnkeðja sem er teiknuð fyrir flatarmálslið er mæld einfaldlega eftir grunnmyndinni og birtist flöt í þrívídd. Formúlur samsetninga nota heildartölur aðalgerðarinnar.

Tegund má aftur taka af aðeins á meðan liðurinn hefur engar merkingar af henni; eyddu þeim, eða færðu þær yfir á annan lið undir **Valin merking**, fyrst. Merkingar má færa á hvaða lið sem tekur þeirra gerð.

Neðar er {{ui:Samsetning}}: einingar eins og tré eða plötur, hver með sína formúlu og taxta. Sjá [Samsetningar og formúlur](topic:assemblies).

Neðst: {{ui:Færa upp}} og {{ui:Færa niður}} breyta stað liðarins á listanum og í útflutningi, og {{ui:Eyða lið}} fjarlægir hann ásamt öllum merkingum hans (eftir staðfestingu; þú getur afturkallað það).

Flatarmálsliðir hafa einnig **Halli** (þakfletir mældir á hallanum: [Þök og hallar](topic:roofs-and-slopes)) og **Frádráttur** (merkingar þeirra dragast frá flatarmáli annarra liða: [Mæling flatarmáls](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Línulegir liðir hafa **Brekku** (Lárétt, Skáhallur, Hornás eða Dalur) og, fyrir skáhalla og ása, **Halla**.

## Taxtar í töflunni

Þú getur einnig slegið {{ui:Úrgangur %}}, efnis- og vinnutaxta beint inn í {{ui:Magntölur}}-töfluna neðst ({{ui:Eftir lið}}). Það er sama stillingin og í ritlinum.

## Hvernig verðlagning virkar

Fyrir hvern lið og hvern þátt samsetningar:

1. **Með úrgangi** = magn × (1 + úrgangur %).
2. **Efni** = með úrgangi × efni á einingu, námundað að sentu.
3. **Vinna** = með úrgangi × vinna á einingu, námundað að sentu.
4. **Samtals** = efni + vinna.

{{ui:Heildarverð verks}} leggur saman alla liði og alla þætti. Liður getur borið sína eigin taxta og samsetningu í einu; hvort tveggja er talið, svo hafðu taxta liðarins í 0 þegar þættir hans bera kostnaðinn.

## Vinna eftir vinnuflokki

Í stað vinnutaxta á einingu getur vinna liðarins komið frá vinnuflokki: hversu mikið hann skilar á klukkustund, hversu margir eru í honum, og hvað hver fær. Undir {{ui:Vinna eftir vinnuflokki}} í ritli liðarins skaltu haka við {{ui:Verðleggja vinnu út frá vinnuflokki}} og fylla út:

| Reitur | Dæmi |
|---|---|
| {{ui:Afköst}} | `20` LF á klukkustund (í einingu liðarins) fyrir allan flokkinn |
| {{ui:Stærð vinnuflokks}} | `2` manns |
| {{ui:Laun $/klst. hver}} | `45` |

TakeoffCraft reiknar út frá magninu með úrgangi:

- **vinnuflokksstundir** = magn ÷ afköst (110 LF ÷ 20 = 5.5),
- **mannstundir** = vinnuflokksstundir × stærð vinnuflokks (11),
- **verkdagar** = vinnuflokksstundir ÷ 8 (0.69),
- **vinna** = mannstundir × laun ($495.00).

Ritillinn sýnir niðurstöðuna og taxtann sem hún jafngildir ($4.50/LF). Vinnutaxti liðarins sjálfs er þá aðeins lesanlegur, bæði í ritlinum og í töflunni. Hausinn á {{ui:Magntölur}}-töflunni bætir við mannstundum verksins og verkdögum. Útflutningurinn skráir stundir hvers vinnuflokks, og í verkstaðanum er vinnureiturinn formúla á vinnuflokkinn (`ROUND(F2/20*2*45,2)`). Afhakaðu reitinn til að fara aftur í taxta á einingu.

## Metrakerfisliðir

Veldu m (línuleg) eða m² (flatarmál) sem einingu. Magn, hæðir og gildi formúla eru þá í metrum. Mælikvarði blaðsins getur verið hvaða forstilling eða kvörðun sem er; einingar og mælikvarðar eru óháðir hvor öðrum.

## Næst

- [Mæla línulegar keðjur](topic:measure-linear)
- [Mæla flatarmál með útskurðum](topic:measure-areas)
- [Telja handvirkt](topic:count-by-hand)
