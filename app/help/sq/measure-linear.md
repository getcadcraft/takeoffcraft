---
title: Mat vijat lineare
summary: Merr muret, tubacionet, prerjet dhe gjatësi të tjera si vija, me segmente të drejta, harqe dhe kapjen e 45 gradëve me Shift.
keywords: lineare, gjatësi, vijë, polivijë, mure, lf, këmbë lineare, hark, kurbë, 45 gradë, ortogonal, kapje, segmente, gjatësia e polivijës, zbritje, hapje, derë, boshllëk, shkruaj, të shkruara, koordinata, distancë, distancë e drejtpërdrejtë, polare
from: c669deff
---

Një artikull linear mat gjatësinë. Çdo vijë është një zinxhir pikash: segmente të drejta, dhe harqe kur ndez mënyrën e harkut. Një artikull mund të ketë çfarëdo numri vijash në çfarëdo numri fletësh.

Para se të fillosh: fleta duhet të ketë një shkallë ([Vendos shkallën](topic:set-the-scale)) dhe duhet të kesh një artikull linear ([Krijo artikujt e llogaritjes](topic:create-items)).

Në një PDF vektorial, klikimet e tua kapen te vijat e vetë vizatimit: skajet, mesi dhe kryqëzimet ([Kapja te vijat e vizatimit](topic:snap-to-the-drawing); {{key:F3}} e fik).

## Vizato një vijë

1. Kliko artikullin linear nën {{ui:Artikujt}}.
2. Zgjidh {{ui:Lineare}} në shirit, ose shtyp {{key:L}}.
3. Kliko fillimin e vijës.
4. Kliko çdo kënd përgjatë saj.
   Shiriti i statusit shfaq "Gjatësi" (vija deri tani, deri te treguesi) dhe "segment" (segmenti që po vizaton), në këmbë dhe inç.
5. Përfundo vijën: bëj klikim të dyfishtë te pika e fundit, shtyp {{key:Enter}}, ose klikim të djathtë.
   Vija vizatohet me ngjyrën e artikullit dhe bëhet shenja e zgjedhur. Gjatësia e artikullit në listën {{ui:Artikujt}} dhe tabelën {{ui:Sasitë}} rritet.

Vegla mbetet te {{ui:Lineare}}, kështu mund të fillosh menjëherë vijën tjetër. Shtyp {{key:Esc}} për t'u kthyer te {{ui:Përzgjidh}}.

Gjatë vizatimit:

- {{key:Backspace}} (ose {{key:Delete}}) heq pikën e fundit.
- {{key:Esc}} e hedh vijën e pa përfunduar.
- Tërheqja lëviz fletën dhe rrota zmadhon, pa shtuar pika.

:::mac
Në trackpad-in e Mac, klikimi i djathtë është një klikim me dy gishta (ndize klikimin dytësor te Cilësimet e sistemit, nën Trackpad). TakeoffCraft lexon vetëm butonin dytësor, kështu një klikim me Control mund të merret si klikim i thjeshtë dhe të shtojë një pikë. Klikimi i dyfishtë ose {{key:Enter}} përfundojnë gjithmonë.
:::

:::touch
Në ekran me prekje, prek për të vendosur pika, tërhiq me një gisht për të lëvizur dhe shtrëngo me dy për të zmadhuar. Përfundo me një prekje të gjatë, një prekje të dyfishtë, ose me {{ui:Përfundo}} në shiritin nën fletë ({{ui:Prapa}} e kthen pikën e fundit mbrapsht). Shih [Zgjidhja e problemeve](topic:troubleshooting#touch-screens).
:::

## Vija të drejta me hapa 45°

Mbaj {{key:Shift}} gjatë vendosjes së një pike. Segmenti nga pika e fundit kapet në drejtimin 0°, 45°, 90° ose 135° më të afërt, duke mbajtur gjatësinë që tërhoqe përgjatë tij. Shiriti i statusit të kujton: "Shift kap në 45°".

Në mënyrën e harkut ky zbatohet te fundi i harkut: korda e harkut shkon në hapa 45° nga pika ku nis. Pika që klikon mbi kurbë nuk kapet kurrë.

## Harqet dhe muret e lakuara

1. Gjatë vizatimit të një vije, vendos pikën ku fillon kurba.
2. Ndiz mënyrën e harkut: zgjidh {{ui:Hark}} në shirit ose shtyp {{key:R}}. Butoni mbetet i shtypur.
3. Kliko çdo pikë mbi kurbë, diku përgjatë mesit të saj.
   Shiriti i statusit shton "(hark: kliko ku mbaron)" dhe paraparja përkulet përmes pikës tënde.
4. Kliko ku mbaron kurba.
   Harku shtohet. Gjatësia e tij është gjatësia e saktë e harkut, jo një varg korde të shkurtra.
5. Kliko një pikë tjetër në kurbën e radhës dhe fundin e saj për të vazhduar të vizatosh harqe, ose shtyp {{key:R}} përsëri për t'u kthyer te segmentet e drejta.

{{key:Backspace}} ose {{key:Esc}} heqin fillimisht pikën në pritje mbi kurbë; shtype përsëri për të hequr pika si zakonisht.

## Shkruaj gjatësi dhe koordinata

Pas pikës së parë, mund të shkruash ku shkon pika tjetër në vend që ta klikosh. Shkruaj një shifër, `@` ose `#`: hapet një kuti {{ui:Shkruaj}} në shiritin e statusit me atë që shkrove. Shtyp {{key:Enter}} për të vendosur pikën; kutia mbetet e hapur për tjetrën.

| Shkruaj | Pika tjetër shkon |
|---|---|
| `12'6"` | 12'-6" nga pika e fundit, drejt treguesit (tregoje drejtimin, pastaj shkruaj gjatësinë) |
| `12'6"<45` | 12'-6" në 45°, numëruar në drejtim kundër akrepave të orës, nga e djathta e ekranit (`<90` është lart, `<-90` poshtë) |
| `@6',-4'` | 6' djathtas dhe 4' poshtë nga pika e fundit |
| `6',4'` (ose `#6',4'`) | 6' djathtas dhe 4' lart nga pika e parë e kësaj vije |

Gjatësitë shkruhen si kudo në TakeoffCraft ([Formatet e hyrjes](topic:entry-formats)): `12'-6 1/2"`, `12.5` (këmbë), `30"`, `3.2 m`. "Djathtas" dhe "lart" janë siç i sheh fletën, edhe kur faqja PDF është e rrotulluar.

{{key:Enter}} në një kuti bosh përfundon vijën, si {{key:Enter}} në fletë; {{key:Esc}} e mbyll kutinë dhe e mban vijën të vazhdojë. Pikat e shkruara kalojnë nëpër të njëjtat rregulla si klikimet: zbritjet, harqet dhe mbyllja e një sipërfaqeje funksionojnë të gjitha. E njëjta kuti punon në {{ui:Sipërfaqe}} dhe {{ui:Prerje}}; pas qendrës së një rrethi merr rrezen.

## Zbrit një pjesë të vijës

Një vijë muri që kalon një derë ose një vitrinë mund të vizatohet drejt dhe të numërojë vetëm murin: segmentet nëpër hapje janë **zbritje**. Vizatohen me vija të ndërprera dhe të holla, dhe nuk numërohen.

Gjatë vizatimit:

1. Vendos pikën ku fillon hapja.
2. Zgjidh {{ui:Zbrit}} në shirit ose shtyp {{key:E}}. Butoni mbetet i shtypur dhe shiriti i statusit thotë se segmentet e radhës janë zbritje.
3. Kliko ku mbaron hapja. Segmenti vizatohet me vija të ndërprera; "Gjatësia" në shiritin e statusit e lë jashtë.
4. Shtyp {{key:E}} përsëri dhe vazhdo përgjatë murit.

Pas vizatimit: zgjidh vijën. Nën **Shenja e zgjedhur**, çdo segment ka një kuti {{ui:Zbrit}}: shëno për ta zbritur atë segment, hiqe shënimin për ta numëruar përsëri. Çdo ndryshim është një hap zhbërjeje.

Një vijë ruan gjithmonë të paktën një segment që numërohet. Paneli atëherë shfaq **Zbritjet** (gjatësia e zbritur) dhe **Të vizatuara** (e gjithë vija); **Gjatësia**, sasia e artikullit, sipërfaqja e murit dhe kostot përdorin gjatësinë pa zbritjet. Pamja 3D e kontrollit lë një boshllëk në mur, PDF-i i shënuar vizaton zbritjet me vija të ndërprera, dhe fleta e eksportuar **Shenjat** i liston ato.

Lëvizja e një cepi ruan zbritjet. Shtimi ose heqja e pikave (duke vizatuar përsëri vijën) fillon pa to.

## Shiko detajet e një vije

Zgjidh {{ui:Përzgjidh}} ({{key:V}}) dhe kliko vijën. **Shenja e zgjedhur** në të djathtë shfaq:

- artikullin ku bën pjesë (zgjidh një artikull tjetër linear në listë për ta zhvendosur vijën atje),
- fletën,
- **Gjatësinë** në këmbë dhe inç dhe në LF,
- numrin e **Segmenteve**, dhe **Sipërfaqen e murit** kur artikulli ka lartësi,
- gjatësinë e çdo segmenti, me "(hark)" pas harqeve, dhe kutinë e tij {{ui:Zbrit}}.

Në fletë, çdo segment i vijës së zgjedhur etiketohet me gjatësinë e tij.

## Rregullo një vijë

- **Lëviz një pikë**: zgjidh vijën, pastaj tërhiq një nga dorezat katrore të cepave. Mbaj {{key:Shift}} për ta kapur segmentin e lëvizur në hapa 45°. Një hark ruan përkuljen e tij.
- **Përkul një hark**: një vijë e zgjedhur shfaq një dorezë rrethore në mes të çdo harku. Tërhiqe: harku kalon nga pika ku e lëshon, kështu përkulet më shumë, më pak, ose në drejtim tjetër. Nëse e tërheq mbi vijën e drejtë mes skajeve të tij, bëhet segment i drejtë. {{key:Mod+Z}} e zhbën ("Përkul harkun").
- **Fshi një vijë**: zgjidhe dhe shtyp {{key:Delete}}, zgjidh {{ui:Fshi}} në menunë {{ui:Më shumë}} të shiritit, ose {{ui:Fshi shenjën}} në panel.
- **Zhbëj**: {{key:Mod+Z}}; ribëj me {{key:Mod+Y}}.

Ende nuk mund të shtosh një pikë në mes të një vije. Fshije vijën dhe vizatoje përsëri.

## Sipërfaqja e murit

Jep artikullit linear një {{ui:Lartësia}} (për shembull `9'-0"`). Atëherë raporton **Sipërfaqen e murit (A)** = gjatësi × lartësi, në SF (ose m² për një artikull metrik), dhe sipërfaqja e murit shkon në kolonën e shënimeve të eksportit të fletës së punës. Përdore në montime për dërrasa, bojë ose izolim: shih [Montimet dhe formulat](topic:assemblies).
