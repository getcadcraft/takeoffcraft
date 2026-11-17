---
title: Lyklaborð og mús
summary: Sérhver takki, mús-, snertiborðs- og snertiaðgerð í TakeoffCraft, flokkuð, með muninum milli kerfa.
keywords: takkar, flýtilyklar, flýtileiðir, lyklaborð, mús, snertiborð, snerting, færa, aðdráttur, hjól, hægrismella, tvísmella, bil, shift, afrita, líma, klippa, tvöfalda, velja allt
from: 6f2c441d
---

Stafalyklar virka þegar bendillinn er hvar sem er á síðunni og þú ert ekki að skrifa í reit. Meðan gluggi er opinn virka eigin lyklar hans. Stafir virka með eða án {{key:Shift}}.

## Verkfæri

| Takki | Verkfæri |
|---|---|
| {{key:V}} | {{ui:Velja}} |
| {{key:L}} | {{ui:Línuleg}} |
| {{key:A}} | {{ui:Flatarmál}} |
| {{key:O}} | {{ui:Hringur}} |
| {{key:B}} | {{ui:Rými}} (fylla rými með einum smelli) |
| {{key:R}} | {{ui:Bogi}} kveikt eða slökkt (í {{ui:Línuleg}}, {{ui:Flatarmál}} og {{ui:Úrskurður}}) |
| {{key:E}} | {{ui:Frádráttur}} kveikt eða slökkt: næstu bútar í keyrslu eru teiknaðir en ekki taldir |
| Tölustafur, `@` eða `#` meðan teiknað er | Opnar reitinn {{ui:Innslátt}}: skrifaðu lengd eða hnit, {{key:Enter}} setur punktinn ([Mæla línulegar keyrslur](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Úrskurður}} (veldu flöt fyrst) |
| {{key:C}} | {{ui:Telja}} |
| {{key:S}} | {{ui:Sjálftalning}} |
| {{key:K}} | {{ui:Kvarða}} |
| {{key:D}} | {{ui:Athuga}} mælikvarðann |

## Meðan teiknað er

| Takki eða aðgerð | Hvað hún gerir |
|---|---|
| Smella | Setur punkt (depil, með {{ui:Telja}}). |
| {{key:P}} | Slóð: veldu heildstæða slóð PDF-línu, eða útlínuna umhverfis smell ([Velja línur PDF-skjalsins](topic:pick-the-lines)). |
| {{key:F3}} | Kveikir eða slekkur á að festa við línur teikningarinnar ([Festa við línur teikningarinnar](topic:snap-to-the-drawing)). |
| {{key:Shift}} haldið niðri meðan smellt er | Festir bútinn við 0°, 45°, 90° eða 135° frá síðasta punkti. Ekki fyrir bogapunkta eða hringi. |
| Tvísmella | Ljúka keyrslu, eða loka flatarmáli eða úrskurði. |
| {{key:Enter}} | Ljúka keyrslu, eða loka flatarmáli eða úrskurði. |
| Hægrismella (án þess að hreyfa) | Ljúka keyrslu, eða loka flatarmáli eða úrskurði. |
| Smella á fyrsta punktinn | Loka flatarmáli eða úrskurði (frá þriðja punkti). |
| {{key:Backspace}} eða {{key:Delete}} | Fjarlægja síðasta punkt (fyrst bogapunktinn sem bíður). |
| {{key:Esc}} | Sleppa bogapunktinum sem bíður; síðan hætta við ólokna merkingu; síðan fara aftur í {{ui:Velja}}. |

## Val og breytingar

| Takki eða aðgerð | Hvað hún gerir |
|---|---|
| Smella á merkingu (valtól) | Velur hana og gerir lið hennar virkan. |
| {{key:Shift}} + smella á merkingu | Bætir henni við valið, eða tekur hana úr því. |
| {{key:Mod+A}} | Velur allar merkingar á opna blaðinu. |
| Draga hornhandfang | Færir þann punkt ({{key:Shift}} festir við 45°). Virkar þegar ein merking er valin. |
| {{key:Delete}} eða {{key:Backspace}} | Eyðir völdum merkingum (þegar ekki er verið að teikna). |
| {{key:Esc}} | Velur ekkert: hreinsar valið og athugunarlínuna. |
| {{key:Mod+Z}} | Afturkalla. |
| {{key:Mod+Y}} eða {{key:Mod+Shift+Z}} | Endurgera. |

## Afrita og líma

| Takki | Hvað hann gerir |
|---|---|
| {{key:Mod+C}} | Afritar valdar merkingar, ásamt liðum þeirra. |
| {{key:Mod+X}} | Klippa: afritar valdar merkingar og eyðir þeim síðan. |
| {{key:Mod+V}} | Líma: afritið fylgir bendlinum; smelltu þar sem það á að fara. |
| {{key:Mod+Shift+V}} | Líma á sama stað: sama staður á opna blaðinu. |
| {{key:Mod+D}} | Tvöfalda valdar merkingar: afritið fylgir bendlinum; smelltu þar sem það á að fara. |
| {{key:Esc}} | Setja ekkert niður: hætta við líma eða tvöföldun sem er á bendlinum. |

Stafirnir einir og sér velja enn verkfæri ({{key:C}} er {{ui:Telja}}, {{key:D}} er {{ui:Athuga}}, {{key:X}} er {{ui:Úrskurður}}, {{key:V}} er {{ui:Velja}}, {{key:A}} er {{ui:Flatarmál}}); aðeins {{key:Mod}} ásamt þeim afritar og límir. Í textareit afrita og líma þessir lyklar texta eins og venjulega. Sjá [Afrita, líma og tvöfalda merkingar](topic:copy-paste).

:::warning
{{key:Backspace}} eyðir valinni merkingu þegar ekki er verið að teikna. Ef það gerist óvart, færir {{key:Mod+Z}} hana aftur.
:::

## Skrár

| Takki | Hvað hann gerir |
|---|---|
| {{key:Mod+O}} | {{ui:Opna teikningar}} |
| {{key:Mod+S}} | {{ui:Vista magntöku}} |

Þessir tveir virka jafnvel meðan þú skrifar í reit.

## Sýn og blöð

| Takki eða aðgerð | Hvað hún gerir |
|---|---|
| Hjól músarinnar | Aðdráttur inn og út við bendilinn. |
| Draga (vinstri, miðju eða hægri hnapp) | Hliðra. Í {{ui:Sjálftalning}} teiknar vinstri dráttur leitarreitinn í staðinn. |
| {{key:Space}} haldið niðri + draga | Hliðra, í hvaða verkfæri sem er. |
| {{key:F}} | {{ui:Passa blað}} |
| {{key:W}} | {{ui:Passa breidd}} |
| {{key:Plus}} eða {{key:=}} | Aðdráttur inn á miðju sýnarinnar. |
| {{key:Minus}} | Aðdráttur út frá miðju sýnarinnar. |
| {{key:PageDown}} / {{key:PageUp}} | Næsta eða fyrra blað í blaðalistanum. |
| {{key:Ctrl+Shift+F}} | Skiptir á milli skjáfyllingarhama (Control á öllum kerfum, einnig á Mac). |
| {{key:F1}} | Opnar eða lokar þessari hjálp, spjaldi á hliðinni. |
| {{key:3}} | 3D-athugunarsýn blaðsins, kveikt eða slökkt. |

## 3D-sýn

| Takki eða aðgerð | Hvað hún gerir |
|---|---|
| Draga, eða draga með miðjuhnappi | Snúningur. |
| {{key:Shift}} + draga, eða draga með hægri hnappi | Hliðra. |
| Hjól músarinnar | Aðdráttur við bendilinn. Á snertiborði snýr tveggja fingra strok og klípa aðdrætti. |
| Smella | Velur merkinguna undir bendlinum ({{key:Shift}} + smella bætir við eða tekur úr). |
| {{key:F}} eða {{key:W}} | Aðdráttur á útmörk. |
| {{key:3}} | Aftur á flata blaðið. |

Sjá [Athuga magntökuna í 3D](topic:check-in-3d).

## Sjálftalning

| Takki eða aðgerð | Hvað hún gerir |
|---|---|
| Draga kassa | Afmarka táknið sem leita skal að (ræsir leitina). |
| Smella á samsvörunarkassa | Hafna honum, eða endurheimta hann. |
| {{key:Esc}} | Hætta við keyrandi leit, eða henda yfirferðinni. |

## Hjálp

| Takki | Hvað hann gerir |
|---|---|
| {{key:F1}} | Opnar eða lokar hjálparspjaldinu (líka hnappurinn {{ui:Hjálp}} í forritastikunni). Virkar í öllum verkfærum, jafnvel meðan skrifað er í reit. |
| {{key:Esc}} | Lokar hjálparspjaldinu. Í leitarreitnum hreinsar fyrsti Esc leitina. Meðan spjaldið er opið lokar Esc, sem er ýtt á eftir smell á blaðið, spjaldinu fyrst; ýttu aftur til að hætta við í TakeoffCraft. |

:::mac
Á mörgum Mac-lyklaborðum stjórna efstu takkarnir birtu og hljóði. Ýttu á fn með F1, eða kveiktu á „Use F1, F2, etc. keys as standard function keys“ í Kerfisstillingum, undir Lyklaborð.
:::

## Gluggar og reitir

| Takki | Hvað hann gerir |
|---|---|
| {{key:Enter}} | Í reit: beitir gildinu. Í kvörðunarglugganum: {{ui:Stilla mælikvarðann}}. |
| {{key:Esc}} | Lokar glugga (eins og {{ui:Hætta við}}); lokar eyðublaðinu {{ui:Nýr liður}}. |
| {{key:Tab}} | Fer í næsta reit. |

## Athugasemdir um kerfi

:::mac
- {{key:Mod}} er Command-takkinn: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Skjáfylling er undantekningin: Control+Shift+F.
- Hægri smellur er tveggja fingra smellur á snertiborði, þegar annar smellur er kveiktur í Kerfisstillingum, undir Snertiborð. TakeoffCraft les aðeins annan hnappinn; Control-smellur getur talist venjulegur smellur og bætt við punkti.
- Tveir fingur sem skruna á snertiborði aðdráttast að blaðinu (þeir skruna því ekki). Til að hliðra, ýttu og dragðu, eða haltu Space og dragðu.
- Page Up og Page Down eru fn með örvunum upp og niður á lyklaborðum sem hafa þá ekki.
- Backspace er takkinn merktur delete.
:::

:::windows
- {{key:Mod}} er Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Á snertiborði fartölvu aðdráttast blaðinu við tveggja fingra skrun. Til að hliðra, ýttu og dragðu.
:::

:::linux
- {{key:Mod}} er Ctrl. Sum skjáborð nota eigin flýtileiðir með Ctrl+Alt eða Super; TakeoffCraft notar engar þeirra.
- Á snertiborði aðdráttast blaðinu við tveggja fingra skrun. Til að hliðra, ýttu og dragðu.
:::

:::touch
TakeoffCraft les snertingu sem einn bendil:

- Snerting setur punkt, velur merkingu eða bætir við teljadepli.
- Dráttur með einum fingri hliðrar blaðinu (í {{ui:Sjálftalning}} teiknar hann leitarreitinn).
- Klípa til aðdráttar er ekki stutt enn. Notaðu {{ui:Passa blað}} og {{ui:Passa breidd}}, eða {{key:Plus}} og {{key:Minus}} á lyklaborði.
- Til að loka flatarmáli, snertu fyrsta punkt þess. Til að ljúka keyrslu, tvísnertu þar sem vafrinn breytir tvísnertingu í tvísmell, eða ýttu á {{key:Enter}} á lyklaborði.
- Engin lifandi lengdarmæling birtist fyrr en þú snertir, því enginn sveimur er til staðar.

Lyklaborð og mús eða snertiborð er betri leið til magntöku eins og er.
:::

## Lyklar sem vafrinn heldur

Vafrar halda sumum flýtileiðum fyrir sjálfa sig og síðan getur ekki notað þær: að loka flipanum ({{key:Mod+W}}), nýr flipi eða gluggi ({{key:Mod+T}}, {{key:Mod+N}}) og aðdráttur vafrans ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Þess vegna aðdráttast TakeoffCraft blaðinu með hjólinu og einföldum {{key:Plus}}- og {{key:Minus}}-lyklum. Ef þú ýtir á {{key:Mod+Plus}} óvart stækkar allur síðan; {{key:Mod+0}} setur hana aftur. Sjá [Lyklar, mýs og snertiborð](common:keys).

## Hvar Færa er

Það er engin skipun Færa: veldu depil og dragðu hann, eða veldu flöt eða línu og dragðu hornhandföng hennar.
