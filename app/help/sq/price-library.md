---
title: Biblioteka e çmimeve
summary: Mbaj artikujt, normat dhe montimet e tua në një bibliotekë, importoje nga një CSV ose një vlerësim të kaluar, shto artikuj nga ajo në çdo llogaritje, dhe përditëso çmimet e një llogaritjeje nga ajo.
keywords: bibliotekë, paketa tregtare, listë çmimesh, libër çmimesh, bazë kostosh, importo csv, norma, montime, ripërdor, artikuj shabllon, përditëso çmimet, rivlerëso
from: 37356c68
---

**Biblioteka e çmimeve** mban artikujt që përdor punë pas pune: llojin, njësinë, lartësinë, humbjen, normat e materialit dhe të punës, dhe montimin e tyre. Mbahet në këtë shfletues, veçmas nga çdo llogaritje, kështu që çdo llogaritje që hap këtu mund ta përdorë.

Hap me {{ui:Bibliotekë}} në krye të panelit {{ui:Artikujt}}.

## Mbush bibliotekën

- {{ui:Importo CSV…}} lexon një fletëllogaritëse të ruajtur si CSV (shih kolonat më poshtë). Artikujt, emri dhe lloji i të cilëve janë tashmë në bibliotekë zëvendësohen; të tjerët shtohen. Rreshtat që nuk mund t'i lexojë kapërcehen, dhe thotë cilët dhe pse.
- {{ui:Shto artikujt e kësaj llogaritjeje}} kopjon çdo artikull të llogaritjes së hapur në bibliotekë, me normat dhe montimin e tij (jo shenjat).
- CSV e vlerësimit që TakeoffCraft eksporton ([Eksporto vlerësimin](topic:export-estimate)) importohet ashtu si është: çmimet e punës së fundit mbjellin atë të radhës.

- {{ui:Paketat tregtare…}} shton montime falas për një tregti, si gips-karton, elektrike ose beton, pa çmime. Shih [Paketat tregtare](topic:trade-packs).

{{ui:Eksporto CSV}} ruan bibliotekën si CSV, për të mbajtur një kopje, për ta ndryshuar në një fletëllogaritëse ose për t'ia dhënë një kolegu. {{ui:Pastro}} e boshatis (kliko dy herë).

:::note
Biblioteka jeton në hapësirën e ruajtjes të këtij shfletuesi. Një shfletues tjetër, një kompjuter tjetër ose një dritare private ka të vetën (ose asnjë). Eksportoje për ta zhvendosur.
:::

## Përdore në një llogaritje

- Shëno artikujt (shkruaj te {{ui:Kërko në bibliotekë}} për ta ngushtuar listën) dhe zgjidh {{ui:Shto te llogaritja}}. Shtohen me montimet e tyre në një hap të vetëm, që {{key:Mod+Z}} e merr mbrapsht. Një emër që tashmë është në llogaritje merr një numër, si `Qilim (2)`.
- {{ui:Përditëso çmimet}} u jep artikujve të llogaritjes humbjen dhe normat e bibliotekës, për çdo artikull emri dhe lloji i të cilit përputhen me një artikull të bibliotekës, dhe të njëjtën gjë për përbërësit e montimit me të njëjtin emër. Lartësitë, njësitë dhe formulat mbeten ashtu si janë. Një {{key:Mod+Z}} i kthen të gjitha çmimet e vjetra.

## Kolonat e CSV

Rreshti i parë emërton kolonat, në çfarëdo rendi; kolonat e tjera injorohen. Emrat e kolonave mbeten si janë, sepse importuesi i lexon ato.

| Kolona | Çfarë vendoset në të |
|---|---|
| Item (ose Name) | Emri i artikullit. E detyrueshme. |
| Type | Linear, Area ose Count (LF, SF dhe EA funksionojnë gjithashtu). Bosh, njësia vendos. |
| Unit | LF ose m; SF, SY ose m²; EA. Bosh: njësia e zakonshme e llojit. |
| Waste % | `10` ose `10%`. |
| Material per unit, Labor per unit | Norma si `2.10` ose `$1,250`. |
| Height (ose Depth) | `9'-0"`, `9`, ose `2.7` për njësi metrike. |
| Component, Formula | Një rresht me një emër Component (ose me Type `Component`) është pjesë e montimit të artikullit mbi të. Njësia, humbja dhe normat e tij janë të veta; formula e tij përdor shkronjat e artikullit, shih [Montimet dhe formulat](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Presje, pikëpresje ose tab ndërmjet kolonave funksionojnë të gjitha.
