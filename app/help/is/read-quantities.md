---
title: Lesa magntölur og kostnaðaráætlunina
summary: Notaðu töfluna Magntölur eftir lið og eftir blaði, heildarsummuna, auðkenningu og viðvörunina Ófullkomið.
keywords: magntölur, samtölur, eftir lið, eftir blaði, heildarsumma, kostnaðaráætlun, yfirlit, skýrsla, auðkenning, ófullkomið, kostnaður
from: 069d41f1
---

Taflan {{ui:Quantities}} neðst í glugganum er lifandi kostnaðaráætlun þín. Hún breytist um leið og þú teiknar, eyðir, breytir mælikvarða eða breytir einingarverði. Magntölur eru aldrei vistaðar; þær eru mældar aftur út frá merkjunum í hvert skipti, þannig að þær geta ekki orðið úreltar.

## Eftir lið

Veldu {{ui:By item}} (sjálfgefið). Hver liður hefur línu og hver samsetningarhluti hans línu undir sér.

| Dálkur | Merking |
|---|---|
| Liður | Heiti, með lit liðarins. „+(n) án mælikvarða“ þýðir að sum merki eru á blöðum án mælikvarða. |
| Magn | Mæld heildarstærð í einingu liðarins (hlutar: niðurstaða formúlunnar). |
| Eining | LF, m, SF, SY, m², EA eða eining hlutans. |
| Úrgangur % | Slegið inn hér eða í ritlinum fyrir liðinn. |
| Með úrgangi | Magn × (1 + úrgangur). |
| Efni/eining, Vinna/eining | Einingarverð; þú getur slegið þau inn hér. |
| Efni, Vinna | Með úrgangi × einingarverð, námundað að aur. |
| Samtals | Efni + vinna. |

Síðasta línan, **Heildarsumma verks**, leggur saman dálkana efni, vinnu og samtals. Sama heildarsumma birtist hægra megin í haus töflunnar.

Skrifaðu í reit fyrir úrgang eða einingarverð og ýttu á {{key:Enter}} eða smelltu annars staðar til að beita því. Gildi sem TakeoffCraft getur ekki lesið er umlínað rauðu og stöðustikan segir hvers vegna, til dæmis „Skrifaðu upphæð eins og 12.50.“

Smelltu á línu liðar til að auðkenna merki hans á öllum blöðum og fara á blað sem hefur þau (eins og þegar smellt er á liðinn undir {{ui:Items}}).

## Eftir blaði

Veldu {{ui:By sheet}} til að sjá magn hvers liðar á hverju blaði, ásamt fjölda merkja. Smelltu á línu til að opna blaðið með liðnum auðkenndum. Notaðu þetta til að athuga hvort öll blöð hafi verið tekin af, eða til að skipta magni eftir hæð eða verksvæði.

## Eftir svæði

Þegar magntakan hefur tilboðssvæði listar {{ui:By area}} liði hvers svæðis og millisummu. Sjá [Tilboðssvæði](topic:bid-areas).

## Viðvörunin Ófullkomið

Þegar eitthvað er ekki í summunum sýnir hausinn viðvörun, til dæmis:

„Ófullkomið: 1 formúluvilla, 6 merki á blöðum án mælikvarða (ekki í summunum)“

- **Formúluvillur**: formúla samsetningarhluta er ekki hægt að reikna út. Línan hans segir „Formúluvilla: …“. Sjá [Samsetningar og formúlur](topic:assemblies#when-a-formula-is-wrong).
- **Merki á blöðum án mælikvarða**: gefðu þessum blöðum mælikvarða. Sjá [Stilla mælikvarðann](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Sömu athugasemdir fara í útflutta töflureikninn, þannig að ófullkomið mat lítur aldrei út fyrir að vera heilt.

## Auðkenna lið

Smelltu á lið undir {{ui:Items}} eða í töflunni. Merki hans haldast fullskýr á öllum blöðum og hitt dofnar. Listi blaðanna sýnir „(n) auðkennd“ á hverju blaði með merkjum. Smelltu aftur á liðinn til að hætta að auðkenna.

## Heildarsummur liða í hliðarspjaldinu

Hver liður í listanum {{ui:Items}} sýnir líka magn sitt. Reiturinn **Mælt** í ritlinum fyrir liðinn sýnir gildin sem formúlurnar nota: lengd, hlaup og veggflöt; flatarmál, ummál og fjölda svæða; eða talningu.

## Merki á PDF-skjölum sem eru ekki opin

Magntaka getur innihaldið merki á PDF-skjölum sem þú hefur ekki opnað í þetta skipti. Þau telja samt í öllum summum; listi blaðanna nefnir þessi PDF-skjöl. Sjá [Vista og opna magntöku aftur](topic:save-and-reopen).

## Meira pláss

Örvarhnappurinn hægra megin í haus {{ui:Quantities}} felur töfluna svo blaðið fái meira pláss. Veldu hann aftur til að sýna töfluna.
