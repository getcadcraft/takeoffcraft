---
title: Stilla mælikvarðann
summary: Gefðu hverju blaði mælikvarða með forstillingu eða með kvörðun á þekktri vídd, athugaðu hann, og skildu hvers vegna blöð án mælikvarða eru ekki talin með í summunum.
keywords: greina mælikvarða, lesa mælikvarða, mælikvarði úr texta, öll blöð, mælikvarði, kvarða, forstilling, athuga mælikvarða, sannreyna, þekkt vídd, án mælikvarða, enginn mælikvarði, hlutfall, stilla mælikvarða
from: 8f0148e6
---

Hvert blað hefur sinn eigin mælikvarða. Þú stillir hann, eða lætur TakeoffCraft lesa hann úr texta blaðanna (hér að neðan), og athugar hann. Þar til blað hefur mælikvarða neita {{ui:Linear}}, {{ui:Area}}, {{ui:Circle}} og {{ui:Cut-out}} að mæla á því. {{ui:Count}} og {{ui:Auto count}} virka án mælikvarða.

Listi blaðanna sýnir mælikvarða hvers blaðs, eða **Enginn mælikvarði**. Stikan undir opna blaðinu segir hið sama.

## Nota forstillingu (þegar PDF er prentað í fullri stærð)

1. Opnaðu blaðið.
2. Opnaðu listann {{ui:Preset}} í hópnum {{ui:Scale}}.
3. Veldu mælikvarðann sem prentaður er á teikninguna, til dæmis `1/8" = 1'-0"` undir Byggingarlist.
   Stöðustikan segir „Mælikvarði fyrir þetta blað: 1/8" = 1'-0".“
4. Athugaðu hann (hér að neðan).

Forstilling gerir ráð fyrir að PDF-skjalið sé sú raunverulega pappírsstærð sem teikningin var gerð fyrir. Ef einhver bjó til PDF-skjalið með „fit to page“, eða það er hálfstærðarsett, er forstillingin röng. Kvarðaðu í staðinn.

Heildarlistinn er í [Forstillingar mælikvarða](topic:scale-presets).

## Lesa mælikvarða úr texta blaðanna

Flestar teikningar segja hvaða mælikvarða þær nota: `SCALE: 1/4" = 1'-0"` í titilreitnum, `1:100` undir mynd. TakeoffCraft getur lesið hann og stillt öll blöð í einu.

1. Opnaðu listann {{ui:Preset}} og veldu {{ui:From the sheets' text…}} (efst).
2. Listinn sýnir hvert blað: mælikvarða þess núna, og hvað textinn þess segir — **Segir 1/4" = 1'-0"**, **Enginn mælikvarði í texta** eða **Segir ekki í mælikvarða** (NTS).
3. Blöð án mælikvarða sem segja einn eru merkt. Merktu eða afmerktu hvaða sem er, og veldu {{ui:Set the ticked scales}}. Eitt {{key:Mod+Z}} tekur þá alla til baka.
4. Athugaðu eina vídd á hverju blaði með {{ui:Check}} (hér að neðan): forstilling er aðeins rétt þegar PDF-skjalið er prentað í fullri stærð.

Það les byggingarlistar- (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), verkfræði- (`1" = 20'`) og metra- (`1:50`) skrift sem passar við [forstillingu](topic:scale-presets). Þegar blað segir fleiri en einn mælikvarða (teikning með stækkuðum smáatriðum) tekur það þann sem það segir oftast, og sá sem skrifaður er eftir orðinu SCALE telur tvöfalt; hinir eru sýndir rauðir svo þú getir athugað þá. Skannað blað hefur engan texta: stilltu mælikvarða þess handvirkt.

## Kvarða á þekktri vídd

Notaðu þetta þegar enginn prentaður mælikvarði er traustur, settið var stærðarbreytt, eða blaðið segir „not to scale“ en hefur mál.

1. Opnaðu blaðið og aðdráttu að langri vídd sem þú þekkir, svo sem bili á ásalínum eða heildarmáli byggingar. Því lengri, því nákvæmari.
2. Veldu {{ui:Calibrate}} í hópnum {{ui:Scale}}, eða ýttu á {{key:K}}.
3. Smelltu á annan enda víddarinnar. Aðdráttu að hvorum enda til nákvæmni; þú getur aðdregið og hliðrað á milli smellanna.
4. Smelltu á hinn endann. Haltu {{key:Shift}} niðri til að halda línunni í 0°, 45° eða 90°.
   Glugginn **Kvarða þetta blað** opnast.
5. Sláðu inn raunfjarlægðina í **Raunfjarlægð**, til dæmis `24'-6 1/2"`, `24.5` (aukastafafet), `30"` eða `7.5 m`. Sjá [Innsláttur lengda, verðs og prósentu](topic:entry-formats).
6. Veldu {{ui:Set the scale}}.
   Stöðustikan sýnir mælikvarðann sem „1" = (n)'“, og þegar hann er innan 0,5% af forstillingu segir hún hvaða, til dæmis „sem samsvarar 1/4" = 1'-0" (veldu þá forstillingu fyrir nákvæman mælikvarða)“.
   TakeoffCraft fer aftur í verkfærið {{ui:Select}}.

Þegar kvörðunin samsvarar forstillingu gefur það að velja hana nákvæman mælikvarða í stað þess sem fer eftir því hvar þú smelltir.

## Athuga mælikvarðann

Athugaðu alltaf nýjan mælikvarða á annarri vídd.

1. Veldu {{ui:Check}} í hópnum {{ui:Scale}}, eða ýttu á {{key:D}}.
2. Smelltu á báða enda víddar sem prentuð er á teikninguna.
   Stöðustikan sýnir „Athugun: 12'-6"“ með sömu lengd í aukastafafetum og metrum, og athugunarlínan helst á blaðinu með lengd sinni.
3. Berðu hana saman við prentuðu víddina. Ef hún skekkist, kvarðaðu á lengri vídd.

Ýttu á {{key:Esc}} til að hreinsa athugunarlínuna.

## Breyta mælikvarða

Veldu aðra forstillingu eða kvarðaðu aftur. Ef blaðið hefur þegar mælingar spyr TakeoffCraft **Breyta mælikvarða þessa blaðs?** og segir hversu margar mælingar verða mældar aftur. Veldu {{ui:Change the scale}}. Hvert hlaup og svæði á blaðinu er mælt aftur með nýja mælikvarðanum. Þú getur afturkallað það með {{key:Mod+Z}}.

## Hvers vegna blöð án mælikvarða eru ekki talin sem núll

Merki á blaði án mælikvarða hefur enga raunverulega lengd eða flatarmál. TakeoffCraft telur það aldrei sem núll, því það myndi lækka matið þitt án þess að þú tækir eftir því. Í staðinn:

- sleppir það þessum merkjum úr summunum,
- sýnir „+(n) án mælikvarða“ við liðinn í {{ui:Quantities}},
- sýnir „Ófullkomið: (n) merki á blöðum án mælikvarða (ekki í summunum)“ í haus töflunnar,
- skrifar fjöldann í athugasemdadálkinn í útfluttum töflureikningi.

Þetta getur gerst þegar þú opnar verkefni þar sem mælikvarðar voru aldrei stilltir. Gefðu blaðinu mælikvarða og merkin eru talin strax. Talningarmerki eru alltaf talin; þau þurfa engan mælikvarða.

## Ábendingar

- Stilltu mælikvarða á hvert blað sem þú ætlar að mæla áður en þú byrjar. Leitaðu í listanum yfir blöð að **Enginn mælikvarði** til að finna þau sem eftir eru (leitarreiturinn skoðar heiti blaða, ekki mælikvarða).
- Smáatriði og stækkaðar myndir á sama blaði nota oft annan mælikvarða. TakeoffCraft hefur einn mælikvarða á hvert blað; sjá [Hvað er ekki smíðað ennþá](topic:not-built-yet).
- Metrateikningar: veldu metraforstillingu eins og `1:100`, eða kvarðaðu á metrafjarlægð eins og `6000 mm`.
