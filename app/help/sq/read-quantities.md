---
title: Lexo sasitë dhe preventivin
summary: Përdor tabelën {{ui:Sasitë}} sipas artikullit dhe sipas fletës, totalin e punës, theksimin dhe paralajmërimin "E papërfunduar".
keywords: sasi, totale, sipas artikullit, sipas fletës, totali i punës, preventiv, përmbledhje, raport, theksim, e papërfunduar, kosto
from: 069d41f1
---

Tabela {{ui:Sasitë}} në fund të dritares është preventivi yt i drejtpërdrejtë. Ajo ndryshon në çastin që vizaton, fshin, ndryshon shkallën ose redakton një çmim për njësi. Sasitë nuk ruhen kurrë; maten përsëri nga shënimet çdo herë, kështu që nuk mund të vjetërohen.

## Sipas artikullit

Zgjidh {{ui:Sipas artikullit}} (si parazgjedhje). Çdo artikull ka një rresht, dhe çdo përbërës i montimit ka një rresht nën të.

| Kolona | Kuptimi |
|---|---|
| Artikulli | Emri, me ngjyrën e artikullit. "+(n) pa shkallë" do të thotë që disa shënime janë në fleta pa shkallë. |
| Sasia | Totali i matur në njësinë e artikullit (përbërësit: rezultati i formulës). |
| Njësia | LF, m, SF, SY, m², EA, ose njësia e përbërësit. |
| Humbja % | Shkruhet këtu ose në redaktuesin e artikullit. |
| Me humbje | Sasia × (1 + humbja). |
| Materiali/njësi, Puna/njësi | Çmimet për njësi; mund t'i shkruash këtu. |
| Materiali, Puna | Me humbje × çmimi, i rrumbullakosur në qindarkën më të afërt. |
| Totali | Materiali + puna. |

Rreshti i fundit, **Totali i punës**, mbledh kolonat e materialit, punës dhe totalit. I njëjti total shfaqet në të djathtë të kokës së tabelës.

Shkruaj në një qelizë humbjeje ose çmimi dhe shtyp {{key:Enter}} ose kliko jashtë për ta aplikuar. Një vlerë që TakeoffCraft nuk e lexon do të ketë kornizë të kuqe, dhe shiriti i statusit thotë arsyen, për shembull "Shkruaj një shumë si 12.50."

Kliko rreshtin e një artikulli për të theksuar shënimet e tij në çdo fletë dhe për të kaluar te një fletë që i ka ato (njëlloj si kur klikon te {{ui:Artikujt}}).

## Sipas fletës

Zgjidh {{ui:Sipas fletës}} për të parë sasinë e çdo artikulli në çdo fletë, me numrin e shënimeve. Kliko një rresht për të hapur atë fletë me artikullin e theksuar. Përdore për të kontrolluar që çdo fletë të jetë matur, ose për të ndarë sasitë sipas katit ose zonës së punës.

## Sipas zonës

Kur llogaritja ka zona ofertimi, {{ui:Sipas zonës}} liston artikujt e çdo zone dhe një nëntotal. Shih [Zonat e ofertës](topic:bid-areas).

## Paralajmërimi "E papërfunduar"

Kur diçka lihet jashtë totaleve, koka e tabelës shfaq një paralajmërim, për shembull:

"E papërfunduar: 1 gabim formule, 6 shënime në fleta pa shkallë (jo në totale)"

- **Gabime formule**: formula e një përbërësi montimi nuk mund të llogaritet. Rreshti i tij thotë "Gabim formule: …". Shih [Montimet dhe formulat](topic:assemblies#when-a-formula-is-wrong).
- **Shënime në fleta pa shkallë**: jepu atyre fletëve një shkallë. Shih [Vendos shkallën](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Të njëjtat shënime hyjnë edhe në fletëllogaritësin e eksportuar, kështu që një preventiv i papërfunduar nuk duket kurrë i plotë.

## Theksimi i një artikulli

Kliko një artikull nën {{ui:Artikujt}} ose në tabelë. Shënimet e tij mbeten me intensitet të plotë në çdo fletë, dhe pjesa tjetër zbehet. Lista e fletëve shfaq "(n) të theksuara" te çdo fletë me shënimet e tij. Kliko përsëri artikullin për të hequr theksimin.

## Totalet e artikujve në panelin anësor

Çdo artikull në listën {{ui:Artikujt}} shfaq edhe sasinë e tij. Blloku **I matur** i redaktuesit të artikullit tregon vlerat që përdorin formulat e tij: gjatësinë, vijat dhe sipërfaqen e murit; sipërfaqen, perimetrin dhe numrin e zonave; ose numërimin.

## Shënime në PDF që nuk janë të hapura

Një llogari mund të përfshijë shënime në PDF që nuk i ke hapur këtë herë. Ato akoma hyjnë në çdo total; lista e fletëve emërton ato PDF. Shih [Ruaj dhe rihap një llogari](topic:save-and-reopen).

## Më shumë hapësirë

Butoni me shigjetë në anën e djathtë të kokës {{ui:Sasitë}} e fsheh tabelën, që fleta të ketë më shumë hapësirë. Kliko përsëri për ta kthyer tabelën.
