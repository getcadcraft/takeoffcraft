---
title: Sill sasi nga një skedar IFC 4.3
summary: Hap një skedar IFC 4.3 të një rrugë, hekurudhe, ure ose punimesh tokësore dhe merr një numërim për çdo klasë, me gjatësitë, sipërfaqet dhe vëllimet që thotë skedari, si sasi të tipizuara.
keywords: ifc, ifc4x3, ifc 4.3, rrugë, hekurudhë, urë, shtrim rrugor, bordurë, shtresë, punime tokësore, mbështetëse, infrastrukturë, sasi, bim, civil, sasi të tipizuara
from: 6b08c2c4
---

Një skedar IFC 4.3 mund të mbajë rrugë, hekurudha, ura, punime detare dhe pjesët që i përbëjnë: shtrime rrugore, shtresa, bordura, shina, punime tokësore, mbështetëse, pilota e të tjera. TakeoffCraft i lexon ato dhe i kthen në sasi të tipizuara që mund t'i vlerësosh.

## Hap skedarin

1. Zgjidh {{ui:Hap planimetritë}} te grupi {{ui:Skedari}}, ose shtyp {{key:Mod+O}}.
2. Zgjidh skedarin IFC (mund ta zgjedhësh bashkë me PDF-të), ose lësho atë mbi TakeoffCraft.

Një sasi e tipizuar krijohet për çdo klasë dhe lloj të parapërcaktuar, p.sh. "Shtrim rrugor (fleksibël): numërim", dhe, kur skedari i thotë ato, "gjatësi" në m, "sipërfaqe" në m² dhe "vëllim" në m³. Shënimi te çdo artikull thotë sa elemente u numëruan dhe sa nuk deklaruan sasi. Hapja e një skedari më të ri me të njëjtin emër përditëson ato sasi, në vend që të shtojë të reja.

## Çfarë nuk bën

- Lexon grupet e sasive (IfcElementQuantity) që mban skedari. Nuk mat format 3D, prandaj një element pa grup sasish numërohet, por nuk shton gjatësi, sipërfaqe ose vëllim.
- Lexohen vetëm klasat e infrastrukturës të IFC 4.3. Një skedar ndërtese (muret, dyert, pllakat) nuk kthehet këtu në sasi; një skedar që nuk është IFC 4.3 e thotë këtë dhe nuk sjell asgjë.
- Njësitë janë ato të vetë skedarit, të kthyera në metra.
