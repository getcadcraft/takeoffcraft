---
title: Gërmimi dhe kotat e pikave
summary: Shëno kotat e pikave në një plan terreni, dërgoji CivilCraft për sipërfaqen dhe gërmimin dhe mbushjen, dhe merr këtu sasitë e thjeshta të gërmimit.
keywords: punë dheu, gërmim, mbushje, gërmim dhe mbushje, nivelim, kotë pike, kota, topo, sipërfaqe, triangulim, civilcraft, pika, pnezd, hendek
from: a898e508
---

TakeoffCraft mat atë që është vizatuar në një fletë. Puna me dheun ka nevojë për një sipërfaqe terreni, prandaj ndahet me CivilCraft, i cili ndërton sipërfaqe nga pikat, i nivelon ato dhe llogarit gërmimin, mbushjen dhe transportin.

## Gërmim i thjeshtë këtu

Për një themel të gërmuar në një thellësi të vetme, mjafton një artikull sipërfaqeje me një **thellësi**: vëllimi është sipërfaqe × thellësi. [Paketa e tregtarit të përgjithshëm](topic:trade-packs) ka një artikull gërmimi në masë (vëllimi në vend, vëllimi i lirshëm dhe ngarkesat e kamionëve) dhe një artikull hendeku për shërbimet (gërmim, shtrim dhe mbushje e kthyer, sipas gjatësisë dhe thellësisë).

## Kotat e pikave për CivilCraft

1. Cakto shkallën e fletës së terrenit.
2. Bëj një artikull **Numërim**, për shembull "Kota ekzistuese", dhe kliko çdo kotë pike në fletë.
3. Përzgjidh një shenjë dhe shkruaj {{ui:Lartësia}} te paneli Shenja e zgjedhur: `102.5`, `102'-6"` ose `31.24 m`. Kotat negative dhe zero janë të pranueshme.
4. Hap menynë {{ui:Eksporto}} dhe zgjidh {{ui:Kotat e pikave}}. Merr një skedar pikash (`.csv`) me Point, Northing, Easting, Elevation dhe Description, një rresht për çdo pikë të shënuar të fletës së hapur.
5. Hape atë skedar në CivilCraft (shih [Importo pikat](app:civilcraft/import-points)). Ai ndërton sipërfaqen nga pikat ([Ndërto një sipërfaqe](app:civilcraft/build-surface)); prej aty krahason sipërfaqet dhe jep gërmimin dhe mbushjen ([Vëllimet](app:civilcraft/volumes)).

Koordinatat veri dhe lindje janë koordinatat e vetë fletës, të matura në këmbë nga këndi i faqes sipas shkallës së saj: distancat dhe vëllimet midis pikave janë të sakta, por ato nuk janë koordinatat e topografisë së vendit tënd. Zhvendosi në koordinatat e vendit në CivilCraft kur të duhet.

:::note
Pikat nga fletë të ndryshme nuk ndajnë koordinata, prandaj eksporti merr vetëm fletën e hapur. Kotat ruhen me llogaritjen dhe kalojnë me kopjo dhe ngjit.
:::

## Gërmim dhe mbushje nga CivilCraft

Puna me dheun e CivilCraft kthehet si dy artikuj që mund t'i çmosh:

1. Në CivilCraft, nivelo platformat dhe korridoret, pastaj zgjidh {{ui:Dërgo te TakeoffCraft}} nën **Punë dheu** ([Vëllimet e punës me dheun](app:civilcraft/volumes)). Ai ruan një skedar sasish (`.quantities.json`).
2. Në TakeoffCraft, hape me {{ui:Hap llogaritjen}}, ose lëshoje mbi aplikacion. Llogaritja jote mbetet e hapur: skedari shton **Punë dheu: gërmim** dhe **Punë dheu: mbushje** si [sasi të tipizuara](topic:create-items#typed-quantities-no-drawing) në jard kub (CY) për projekt në këmbë, ose metra kub (m³) për projekt në metra. Është një hap: {{key:Mod+Z}} e kthen mbrapsht.
3. Riemërto ato, vendos humbjen, tarifat dhe montimet sipas dëshirës.

Kur ndryshon projekti, dërgo përsëri nga CivilCraft dhe hap skedarin e ri: të njëjtat dy artikuj marrin sasitë e reja. Emrat, tarifat, humbja dhe montimet mbeten ashtu si i ke caktuar. Nëse njësia e projektit ka ndryshuar, shiriti i gjendjes e thotë këtë: kontrollo tarifat. Një skedar nga një projekt tjetër i CivilCraft shton dy artikujt e vet.

Sasitë janë vëllime në vend, siç i ka matur CivilCraft (metoda e rrjetës): pa tkurrje apo fryrje. Shtoji si humbje, ose me një formulë si `Q * 1.25` për vëllimin e lirshëm. Redaktuesi i artikullit tregon nga erdhi çdo njëra dhe kur; kolona e shënimeve të preventivit e thotë edhe atë.

:::note
Skedari i sasive është JSON i thjeshtë (`"format": "cadcraft-quantities"`), prandaj edhe një skript ose program tjetër mund të shkruajë një të tillë: një emër aplikacioni, një projekt, dhe artikuj me një kyç, një emër, një njësi dhe një sasi.
:::
