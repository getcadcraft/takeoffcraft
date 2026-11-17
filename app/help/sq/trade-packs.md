---
title: Paketat tregtare
summary: Shtoni montime falas për një tregti te biblioteka juaj e çmimeve, hiqini në një hap dhe ndajeni bibliotekën tuaj si paketë.
keywords: paketë tregtare, paketë, montime, shabllone, artikuj fillestarë, elektrik, gips, skelet, lyerje, beton, dysheme, murature, çati, veshje, marangoz, hidraulik, HVAC, izolim, peizazh, tarracë, kontraktor i përgjithshëm, csi, masterformat, cc0, shto, hiq, ndaj
from: d3c036be
---

Një **paketë tregtare** është një grup artikujsh të gatshëm për një tregti: secili me njësinë e vet, lartësinë ose thellësinë, humbjen dhe **montimin** e vet, pjesët dhe formulat që e kthejnë një segment, sipërfaqe ose numërim të matur në materiale. Një ndarje gipsi, për shembull, sjell shinat, profilet, pllakat, vidat, shiritin dhe masën.

Paketat shtohen te [biblioteka juaj e çmimeve](topic:price-library), dhe prej aty i shtoni artikujt e tyre te çdo llogaritje.

## Shtoni një paketë

1. Hapni {{ui:Bibliotekë}} në krye të panelit {{ui:Artikujt}}, pastaj {{ui:Paketat tregtare…}}.
2. Zgjidhni {{ui:Njësitë}}: imperiale (LF, SF), metrike (m, m²) ose të dyja. Çdo montim vjen në të dy sistemet.
3. Zgjidhni {{ui:Shto}} pranë një pakete.

Artikujt e paketës shfaqen në bibliotekë, të etiketuar me emrin e paketës. Për t'i përdorur, shënoni ata në bibliotekë dhe zgjidhni {{ui:Shto te llogaritja}}.

:::note
**Një paketë nuk sjell çmime.** Artikujt e saj shfaqin "vendos normën tuaj" në bibliotekë. Normat janë tuajat: shkruajini në bibliotekë ose në redaktuesin e artikullit, ose importoni listën tuaj të çmimeve si CSV dhe përdorni {{ui:Përditëso çmimet}}.
:::

Nëse keni tashmë një artikull me të njëjtin emër dhe lloj në bibliotekën tuaj, paketa e lë atë tuajin si është. Shtimi përsëri i një pakete zëvendëson artikujt e saj me versionin e ri.

## Hiqni një paketë

Te {{ui:Paketat tregtare…}}, zgjidhni {{ui:Hiq}} pranë një pakete që keni shtuar, pastaj edhe një herë për ta konfirmuar. Çdo artikull që vjen prej saj del nga biblioteka në një hap. Artikujt që i keni shtuar tashmë te një llogaritje mbeten në atë llogaritje.

## Çfarë ka në një paketë

Zgjidhni {{ui:Burimet dhe detajet}} nën një paketë për të parë nga çfarë u shkrua çdo montim: kodet e ndërtimit, standardet dhe udhëzuesit e instalimit të shoqatave tregtare. Në bibliotekë, qëndroni me treguesin mbi një artikull për të lexuar burimet dhe supozimet e tij, si distanca e profileve ose shpejtësia e shtrirjes së një boje. Kontrolloni ato me punën tuaj dhe fletët e të dhënave të produkteve tuaja, dhe ndryshoni formulat aty ku ndryshojnë (shih [Montimet dhe formulat](topic:assemblies)).

Çdo paketë shënohet **Fillestare: nuk është rishikuar ende nga një vlerësues** derisa vlerësuesit e punës ta kenë rishikuar.

Çdo artikull mban gjithashtu numrin e vet CSI MasterFormat, si `09 21 16`.

## Ndajeni bibliotekën tuaj si paketë

{{ui:Eksporto si paketë…}} në bibliotekë e ruan atë si skedar paketë (`.ccpack.json`) që çdokush mund ta shtojë me {{ui:Hap një skedar paketë…}}. Si parazgjedhje heq artikujt që vijnë nga paketat që keni shtuar, dhe nuk mban asnjë normë. Shënoni {{ui:Përfshi normat e mia si norma mostre}} për t'i dërguar edhe normat tuaja: ato dalin të etiketuara me rajonin dhe datën që jepni, dhe kush e shton paketën zgjedh nëse i përdor.

Skedarët e paketave janë të dhëna të thjeshta, jo programe. TakeoffCraft kontrollon çdo pjesë të një skedari para se ta përdorë dhe heq çdo gjë që nuk mund ta lexojë.
