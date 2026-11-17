---
title: Numëro automatikisht një simbol
summary: Kutizo një simbol, lëre TakeoffCraft t'i gjejë të tjerët në këtë fletë ose në çdo fletë të hapur, shqyrto përputhjet me rrëshqitësin dhe shtoji të gjitha në një hap.
keywords: çdo kënd, i rrotulluar, i kthyer, shkallë tjetër, shkallë e ndryshme, numërim automatik, kërkim simbolesh, gjej simbole, model, shabllon, përputhje, zbulo, mjet numërimi
from: fa68a6c1
---

{{ui:Numërim automatik}} gjen çdo kopje të një simboli pasi kutizoni një. Pastaj shqyrtoni përputhjet në fletë dhe shtoni ato që pranoni si shenja numërimi. Është një ndihmës, jo garanci: shqyrtoni gjithmonë para se të shtoni.

## Gjej simbolet

1. Krijo ose kliko një artikull numërimi nën {{ui:Artikujt}}.
2. Hap një fletë ku shfaqet simboli.
3. Zgjidh {{ui:Numërim automatik}} në shiritin e veglave, ose shtyp {{key:S}}.
   Një shirit shfaqet në krye të fletës: "Tërhiq një kuti rreth një simboli në këtë fletë."
4. Për të kërkuar në çdo fletë të hapur, jo vetëm në këtë, shëno {{ui:Kërko në të gjitha fletët e hapura}}.
5. Zmadho që simboli të duket qartë, pastaj tërhiq një kuti ngushtë rreth një kopjeje të tij. Përfshi simbolin e plotë; letra boshe rreth tij priten.
   Shiriti shfaq "Duke kërkuar…" me një shirit progresi dhe një buton {{ui:Anulo}}. Faqja mbetet e përgjegjshme: mund të zmadhosh, të lëvizësh dhe të kalosh midis fletëve. Zgjedhja e një mjeti tjetër, ose {{key:Esc}}, e anulon kërkimin.
6. Kur mbaron, përputhjet shfaqen në fletë si kuti me ngjyrën e artikullit, dhe shiriti shfaq një përmbledhje si "22 përputhje, 19 për t'u shtuar (3 tashmë të numëruara). Kliko një kuti për ta refuzuar ose rikthyer."

Në {{ui:Numërim automatik}}, tërheqja në fletë vizaton një kuti në vend që të lëvizë. Për të lëvizur, mbaj {{key:Space}} dhe tërhiq, ose tërhiq me butonin e mesit.

## Shqyrto përputhjet

- **Kliko një kuti** për ta refuzuar. Një kuti e refuzuar është me vija të ndërprera dhe e kryqëzuar. Kliko përsëri për ta rikthyer.
- **Lëviz rrëshqitësin {{ui:Përputhja}}** (50% deri 95%, fillon në 75%). Vlera më e lartë shfaq vetëm përputhje të afërta; më e ulët shfaq ato më të lirshmet. Rrëshqitësi vetëm filtron atë që u gjet; nuk kërkon përsëri.
- **Tashmë e numëruar**: përputhjet në një vend që ka tashmë një shenjë numërimi të këtij artikulli fillojnë të refuzuara, që të mos numëroni asgjë dy herë.
- **Fletë të tjera**: kur keni kërkuar në të gjitha fletët e hapura, lëvizni midis fletëve me listën e fletëve ose me {{key:PageDown}}, dhe shqyrtoni secilën. Përmbledhja tregon sa fletë kanë përputhje.

## Shtoji ato

Zgjidh {{ui:Shto}}. Butoni tregon sa janë, për shembull "Shto 19 shenja".
Shenjat e numërimit shtohen në qendër të çdo kutie të pranuar: "U shtuan 19 shenja numërimi te "Prizë dyfishe". Ctrl+Z i heq të gjitha."

E gjithë grupi është një hap anulimi, pra një {{key:Mod+Z}} i heq të gjitha.

Për ta hequr shqyrtimin pa shtuar asgjë, zgjidh {{ui:Hidh}} ose shtyp {{key:Esc}}. Zgjedhja e një mjeti tjetër e hedh gjithashtu.

## Çfarë gjen, dhe çfarë humbet

TakeoffCraft krahason vizatimin, si piksel, me simbolin që ke kutizuar.

- Gjen simbolin të rrotulluar 0°, 90°, 180° dhe 270°. Shëno {{ui:Çdo kënd (më ngadalë)}} në shiritin e numërimit automatik përpara se të vizatosh kutinë, për ta gjetur edhe në çdo kënd: provon çdo 15°, pastaj rregullon çdo gjetje deri në gradën dhe gjysmën. Kjo zgjat rreth gjashtë herë më shumë. Nuk gjen një simbol të pasqyruar (përveç nëse simboli duket i njëjtë edhe i pasqyruar).
- Me {{ui:Kërko në të gjitha fletët e hapura}} të shënuar, një fletë në shkallë tjetër kërkohet në madhësinë që ka simboli aty: një element i vizatuar në shkallë në një plan 1/8" është gjysma e madhësisë së tij në një plan 1/4", dhe prapëseprapë gjendet. Një fletë e tillë kërkohet gjithashtu në madhësinë e vetë kutisë, për etiketa dhe simbole të printuara në një madhësi në çdo fletë. Kjo kërkon një shkallë në të dy fletët; një fletë pa shkallë kërkohet vetëm në madhësinë e kutisë.
- Simbolet shumë të ngjashëm mund të përputhen me njëri-tjetrin: një prizë dyfishe dhe një prizë katërfishe, ose dy etiketa elementësh që ndryshojnë me një shkronjë. Ngri rrëshqitësin derisa të mbeten vetëm ato të sakta, dhe refuzo të tjerat me dorë.
- Një simbol i kaluar nga linja të tjera, shtrihe ose tekst merr pikë më të ulëta dhe mund të kërkojë një vlerë më të ulët të rrëshqitësit.
- Kutitë shumë të vogla refuzohen: "Kjo kuti është shumë e vogël. Vizato rreth simbolit të plotë." Edhe një kuti bosh refuzohet: "Kjo kuti është pothuajse bosh. Vizato rreth një simboli."
- Një fletë që do të ishte shumë e madhe për madhësinë e nevojshme të këtij simboli anashkalohet, dhe përmbledhja thotë "1 fletë ishte shumë e madhe për t'u kërkuar me këtë madhësi simboli." Kutizo një simbol më të madh, ose numëro atë fletë me dorë.

Nëse nuk gjendet asgjë, shiriti i statusit thotë: "Nuk ka përputhje. Ul rrëshqitësin e përputhjes, ose kutizo simbolin më ngushtë."

## Shpejtësia dhe shfletuesit

Kërkimi punon në një punëtor në sfond, kështu faqja mbetet e përgjegjshme dhe mund ta anulosh në çdo kohë. Çdo fletë vizatohet së pari në madhësinë e punës në vetë faqen, gjë që mund të shkaktojë një pauzë të shkurtër për një fletë shumë të madhe. Funksionon në Chrome, Edge, Firefox dhe Safari të përditësuara. Kërkimi i shumë fletëve zgjat më shumë; shiriti i progresit lëviz fletë pas fletës. Jashtë linje, numërimi automatik funksionon kur shiriti i aplikacionit shfaq {{ui:Gati jashtë linje}}: {{ui:Ruaje për jashtë linje}} e mban edhe punëtorin. Shih [Puna jashtë linje](common:offline).
