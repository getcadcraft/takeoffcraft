---
title: Kujtesa e çmimeve nga punët e kaluara
summary: TakeoffCraft mban mend normat që ke përdorur në llogaritjet e kaluara, vetëm në këtë kompjuter, që një llogaritje e re të nisë nga ajo që paguan herën e fundit. Shiko, përdor, harro.
keywords: kujtesa e çmimeve, çmimet, mbaj mend çmimet, punë e fundit, punët e kaluara, çmim tipik, mesatare, norma, pa çmim, rivlerëso, mëso nga një llogaritje e kaluar, harro, bibliotekë
from: 7279f1a1
---

{{ui:Çmimet}} në shiritin e veglave (shenja e dollarit) hap atë që TakeoffCraft mban mend për çmimet që ke përdorur. Është një listë e thjeshtë: për çdo emër artikulli, normat nga punët e tua të fundit. Mbahet në këtë shfletues (në Studio, në pamjen e vet web), pranë **Bibliotekës së çmimeve**, kurrë brenda një skedari llogaritjeje, dhe asgjë nuk dërgohet askund. Nuk është një model i trajnuar.

## Çfarë mbahet mend

Kur ruan një llogaritje, çdo artikull që ka një çmim dhe është i përdorur (ka një shenjë, ose një sasi të shkruar mbi zero) mbahet mend sipas emrit dhe llojit të tij: norma e materialit, norma e punës, humbja dhe njësia. Një punë janë planimetritë nga të cilat merret; ruajtja e të njëjtës llogaritje përsëri zëvendëson çmimet e veta, në vend që të shtojë një punë tjetër. Mbahen 12 punët e fundit për çdo emër.

Për të nisur me punën tënde të mëparshme, zgjidh {{ui:Mëso nga një llogaritje e kaluar…}} dhe zgjidh një llogaritje të ruajtur (.json). Artikujt e saj me çmim dhe të përdorur mbahen mend në të njëjtën mënyrë.

Emrat përputhen kur fjalët e tyre përputhen, pavarësisht nga shkronjat ose shenjat e pikësimit ("Kollonë 2x4, 8 ft" dhe "kollonë 2x4 8 FT" janë e njëjta gjë). Të njëjtat fjalë për një lloj tjetër artikulli (një artikull linear dhe një artikull numërimi) nuk kanë të njëjtin çmim.

## Përdore në një llogaritje të re

1. Krijo artikujt e llogaritjes së re.
2. Zgjidh {{ui:Çmimet}}. Nën {{ui:Kjo llogaritje}} sheh çdo artikull që ka një çmim të mbajtur mend: çfarë ke tani mbi të, normat e punës së fundit, normat tipike (mesi i punëve të mbajtura mend) dhe intervalin.
3. Zgjidh {{ui:Përdor të fundit}} ose {{ui:Përdor tipiken}} te një artikull, ose {{ui:Vendos çmim për N artikuj pa çmim nga kujtesa}} për të plotësuar çdo artikull që s'ka çmim akoma, nga punët e fundit.

Çdo përdorim është një hap i vetëm: {{key:Ctrl+Z}} e kthen mbrapsht. Një artikull që ka vetëm një emër të ngjashëm (një emër brenda tjetrit) e thotë këtë, dhe butonat përdorin normat e emrit të ngjashëm. Një çmim i mbajtur mend për copë nuk vendoset kurrë te një artikull për këmbë: dialogu thotë se njësitë ndryshojnë dhe e lë atë të pa prekur.

## Shiko, ndrysho, harro

{{ui:Gjithçka e mbajtur mend}} liston çdo emër me normat dhe numrin e punëve. Butoni me kosh harron një emër; {{ui:Pastro të gjitha çmimet}} i harron të gjitha. Fik {{ui:Mbaj mend çmimet e mia kur ruaj një llogaritje}} për të ndaluar mbajtjen; ajo që është tashmë aty mbetet deri sa ta harrosh. Llogaritjet e tua dhe Biblioteka e çmimeve nuk preken kurrë.

## Me asistentin tënd

Nëse lejon asistentët te Cilësimet, ata mund të lexojnë atë që mbahet mend për artikujt e llogaritjes (prices_list) dhe të vendosin çmime nga ajo (prices_apply, që mund ta shikojë paraprakisht). Është e njëjta listë si dialogu.
