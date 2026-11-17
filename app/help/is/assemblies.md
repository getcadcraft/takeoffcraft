---
title: Samsetningar og formúlur
summary: Bættu íhlutum við lið og láttu formúlur breyta lengd, flatarmáli eða talningu hans í stoðir, plötur, gipsplötur, steypu og festingar, með unnu dæmi um vegg.
keywords: samsetning, íhlutir, formúla, stoðir, gipsplata, blöð, plötur, steypa, cubic yards, festingar, uppskrift, dæmigert, hlutar liðar
from: 12891a21
---

Samsetning **liðar** er listi yfir íhluti, og hver þeirra hefur sína magnformúlu, eigin úrgang og eigin taxta. Formúlan notar mældar heildartölur liðarins, þannig að ein magntaka af vegg gefur þér stoðir, plötur og gipsplötur í einu, og þær uppfærast eftir því sem þú mælir.

## Breytur sem þú getur notað

| Liðartegund | Breytur |
|---|---|
| Línulegt | `L` lengd, `H` hæð, `A` veggflötur (L × H), `N` fjöldi runa |
| Flötur | `A` flatarmál, `P` ummál (útlína + útskurðir), `H` dýpt eða þykkt, `N` fjöldi flata |
| Talning | `N` talning |

Gildin eru í einingum liðarins: fet og ferfet fyrir LF- og SF-liði, metrar og fermetrar fyrir m- og m²-liði. Fyrir SY-lið er `A` í ferjördum en `P` og `H` eru áfram í fetum.

Formúlur nota `+ - * /` (eða × ÷), sviga, tölur og föllin `ceil`, `floor`, `round`, `min`, `max` og `abs`. Allar reglurnar eru í [Formúlumálinu](topic:formulas).

## Dæmi: innveggur

Segjum að þú hafir mælt **Innvegg gerð A** sem línulegan lið: 4 runur samtals 120 LF, með {{ui:Hæð}} stillt á `9'-0"`. Gildin **Mælt** eru L = 120, N = 4, A = 1,080 (SF veggflötur, ein hlið).

1. Veldu liðinn undir {{ui:Liðir}}.
2. Í {{ui:Samsetning}}, veldu {{ui:Bæta við íhlut}}.
   Íhlutur sem heitir „Íhlutur“ birtist, með formúluna `L` og niðurstöðuna fyrir neðan.
3. Skrifaðu `Stoðir 16 in c/c` í {{ui:Heiti}} og `EA` í {{ui:Eining}}.
4. Í {{ui:Magnformúla}}, skrifaðu `ceil(L * 12 / 16) + N`.
   Niðurstaðan uppfærist þegar þú skrifar: „= 94 EA“. Það er ein stoð á 16 tommu fresti eftir 120 fetum (90), auk einnar aukalega til að loka hverri af 4 runum.
5. Veldu {{ui:Bæta við íhlut}} aftur fyrir plöturnar: heiti `Plötur, efst og neðst`, eining `LF`, formúla `L * 2`. Niðurstaða: 240 LF.
6. Bættu við gipsplötunum: heiti `Gipsplata 4x8, beggja megin`, eining `blöð`, formúla `ceil(A * 2 / 32)`. Niðurstaða: 68 blöð (2,160 SF af plötu ÷ 32 SF á blað = 67.5, námundað upp).
7. Fylltu út {{ui:Úrgangur %}}, {{ui:Efni $}} og {{ui:Vinna $}} fyrir hvern íhlut.
   Hver íhlutur fær sína röð undir liðnum í {{ui:Magntölur}}, verðlagða eins og liður, og {{ui:Heildarverð verks}} tekur hann með.

Ef veggurinn kostar allt í íhlutunum, skildu eigin efnis- og vinnutaxta liðarins eftir á 0, annars er það talið tvisvar.

:::tip
Úrgangur er beittur eftir formúluna og er ekki námundaður: 68 blöð með 10% úrgangi eru 74.8 blöð. Til að panta heil blöð skaltu setja úrganginn inn í formúluna, eins og `ceil(A * 2 / 32 * 1.1)`, og láta úrgang íhlutsins vera 0.
:::

## Fleiri formúlur

| Hvað | Liður | Formúla |
|---|---|---|
| Stoðir á 24 tommu miðjubili | Línulegt | `ceil(L / 2) + N` |
| Einangrunarrúllur, SF | Línulegt með hæð | `A` |
| Málning, báðum megin, lítrar á 350 SF | Línulegt með hæð | `ceil(A * 2 / 350)` |
| Flísaöskjur á 15 SF, 10% aukalega | Flötur | `ceil(A * 1.1 / 15)` |
| Sökkul- eða kantlisti, LF | Flötur | `P` |
| Steypa, cubic yards | Flötur með dýpt | `A * H / 27` |
| Steypa námunduð upp í fjórðung úr yard | Flötur með dýpt | `ceil(A * H / 27 * 4) / 4` |
| Lamir, þrjár á hurð | Talning | `N * 3` |
| Að minnsta kosti einn kassi, einn á hverja 12 | Talning | `max(1, ceil(N / 12))` |

## Þegar formúla er röng

Línan undir formúlunni verður að villuboði, til dæmis `"X" er ekki mæld stærð hér. Notaðu L, H, A, N.` eða `Sviga ")" vantar.` Íhluturinn fær þá engar upphæðir, röð hans í {{ui:Magntölur}} sýnir „Formúluvilla: …“ og hausinn segir „Ófullgert: 1 formúluvilla (ekki í heildartölum)“. Lagaðu formúluna og heildartölurnar uppfærast.

Formúla sem deilir með núlli er líka villa („Formúlan deilir með núlli.“), til dæmis `A / H` á lið án dýptar.

## Takmarkanir

- Formúlur keyra á **heildartölum** liðarins, ekki runu fyrir runu. `ceil(L * 12 / 16) + N` bætir einni stoð við hverja runu; enn er engin námundun fyrir hverja runu.
- Formúla getur aðeins notað breytur síns eigin liðar, ekki breytur annars liðar.
- Allt að 50 íhlutir á lið, 500 stafir í hverri formúlu.

## Fjarlægja íhlut

Veldu {{ui:Fjarlægja íhlut}} undir honum. Þú getur afturkallað með {{key:Mod+Z}}.
