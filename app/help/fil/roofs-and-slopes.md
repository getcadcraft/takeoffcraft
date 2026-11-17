---
title: Mga bubong at slope
summary: Bigyan ang area ng pitch nito para masukat ang ibabaw ng bubong mula sa plano, at sukatin ang rake, hip at valley ayon sa kanilang slope.
keywords: bubong, pitch, slope, slope factor, rise, run, 6:12, rake, hip, valley, gable, roofing, squares, sloped area, tunay na haba, lawak ng plano
from: 38225b60
---

Ipinapakita ng roof plan ang bawat plane ng bubong na patag, gaya ng nakikita mula sa itaas. Mas malaki ang bubong mismo: ang plane na 6:12 ay may mga 12% na mas maraming ibabaw kaysa sa plano nito, at mas mahaba ang mga sloped edge nito kaysa sa itsura. Bigyan ang item ng pitch nito at susukatin ng TakeoffCraft ang kahabaan ayon sa slope.

## Pag-type ng pitch

Ang pitch ay ang rise bawat 12 ng run, gaya ng mga pitch symbol sa roof plan. I-type ito bilang `6:12`, `6/12` o `6` lang; gumagana rin ang ibang run (`4:10` ay 4.8:12). Gumagana rin ang anggulo na may degree sign: `26.57°`. Ang blangko o `0` ay flat.

## Mga lawak ng bubong

1. Gumawa ng area item para sa roofing, o buksan ang mayroon ka na.
2. Sa mga setting nito, i-type ang **Pitch**, gaya ng `6:12`.
3. Balangkasin ang bawat plane ng bubong sa plano gamit ang {{ui:Lawak}}, gaya ng dati.

Binibilang ng bawat plane ang plan area nito na minultiply sa slope factor: √(1 + (rise ÷ 12)²), 1.118 sa 6:12 at 1.414 sa 12:12. Piliin ang plane para makita ang **Area** nito (sa slope), ang **Lawak ng plano** nito at ang **Slope factor**.

Mga plane na may ibang pitch: piliin ang plane at i-type ang sarili nitong **Pitch** sa panel nito. Iwanan itong blangko para gamitin ang sa item. Ginagamit ng 3D check view, ng mga assembly (`A` ang sloped area), ng mga gastos at ng export ang sloped area. Ang mga bawas sa pitched plane, gaya ng skylight, ay ibinabawas sa parehong slope.

Nananatiling plan perimeter ang perimeter (`P`). Sukatin ang eaves, rake, hip at valley bilang mga run (sa ibaba).

## Rake, hip at valley

1. Gumawa ng linear item, gaya ng "Rake edge" o "Hips".
2. Itakda ang **Slope** nito sa **Rake** (sloped edge, gaya ng sa gable) o **Hip or valley** (ang linya kung saan nagtatagpo ang dalawang plane), at i-type ang **Pitch** ng mga plane ng bubong.
3. Iguhit ang mga run sa plano gamit ang {{ui:Linear}}.

Binibilang ng rake ang plan length nito na minultiply sa slope factor. Ang hip o valley ay tumatakbo sa 45° sa ibabaw ng plano sa pagitan ng dalawang plane na may parehong pitch, kaya ang tunay na haba nito ay plan length nito na minultiply sa √(1 + (rise ÷ 12)² ÷ 2): 1.061 sa 6:12, 1.225 sa 12:12.

Maaaring paghaluin ng isang run ang mga ito. Piliin ito: bawat segment sa panel nito ay may slope list — **Item's** (setting ng item), **Level**, **Rake** o **Hip or valley** — at ang haba nito sa slope. Ang sariling **Pitch** ng run sa panel ay pumapalit sa pitch ng item para sa lahat ng segment nito. Ipinapakita rin ng panel ang **Plan length**, at ang mga label sa sheet ay nagpapakita ng mga haba sa slope.

Gumagana pa rin ang mga bawas: ang segment na binawasan ay walang binibilang, sloped man o hindi.

:::note
Ipinapalagay ng hip at valley na pareho ang pitch ng dalawang plane. Para sa mga plane na magkaiba ang pitch, sukatin ang hip ayon sa tunay nitong haba sa ibang paraan, o iguhit ito bilang rake na may katumbas na pitch.
:::
