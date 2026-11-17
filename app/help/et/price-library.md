---
title: "Hinnateek"
summary: "Hoia oma kirjeid, määrasid ja koosteid teegis, impordi see CSV-st või varasemast hinnangust, lisa kirjeid sellest mis tahes koguste arvestusse ja uuenda koguste arvestuse hindu sellest."
keywords: teek, tööpaketid, hinnakiri, hinnaraamat, kulude andmebaas, impordi csv, määrad, koosted, taaskasutus, malli kirjed, uuenda hindu, hinnasta uuesti
from: 37356c68
---

**Hinnateek** hoiab kirjeid, mida kasutad töö järel tööd: nende tüüp, ühik, kõrgus, kadu, materjali- ja tööhinnad ning nende koost. See hoitakse selles brauseris eraldi igast koguste arvestusest, nii et iga siin avatud koguste arvestus saab seda kasutada.

Ava see nupuga {{ui:Teek}} rubriigi {{ui:Kirjed}} paneeli ülaosas.

## Teegi täitmine

- {{ui:Impordi CSV…}} loeb tabelarvutuse, mis on salvestatud CSV-na (vt allpool veerge). Kirjed, mille nimi ja tüüp on juba teegis, asendatakse; ülejäänud lisatakse. Loetamatud read jäetakse vahele ja öeldakse, millised ja miks.
- {{ui:Lisa selle koguste arvestuse kirjed}} kopeerib iga avatud koguste arvestuse kirje teeki koos hindade ja koostega (mitte märkidega).
- TakeoffCraft'i hinnangu CSV ([Ekspordi hinnang](topic:export-estimate)) impordib nii, nagu ta on: eelmise töö hinnad annavad järgmise töö alguse.

- {{ui:Tööpaketid…}} lisab tasuta koosted ühele erialale, nagu krohvimine, elekter või betoon, ilma hindadeta. Vt [Tööpaketid](topic:trade-packs).

{{ui:Ekspordi CSV}} salvestab teegi CSV-na: koopia hoidmiseks, tabelarvutuses muutmiseks või kolleegile andmiseks. {{ui:Tühjenda}} tühjendab selle (klõpsa kaks korda).

:::note
Teek elab selle brauseri salvestuses. Teine brauser, teine arvuti või privaatne aken on oma (või pole üldse). Ekspordi teek, et seda teisaldada.
:::

## Kasutamine koguste arvestuses

- Märgi kirjed (kirjuta {{ui:Otsi teegist}}, et loendit kitsendada) ja vali {{ui:Lisa koguste arvestusse}}. Need lisatakse koos koostega ühe sammuna, mille {{key:Mod+Z}} tagasi võtab. Nimi, mis on koguste arvestuses juba olemas, saab numbri, näiteks `Vaip (2)`.
- {{ui:Uuenda hindu}} annab koguste arvestuse kirjetele teegi kadu ja määrad iga kirje kohta, mille nimi ja tüüp klapivad teegi kirjega, ning sama nimega koosteosade kohta. Kõrgused, ühikud ja valemid jäävad samaks. Üks {{key:Mod+Z}} paneb kõik vanad hinnad tagasi.

## CSV-veerud

Esimene rida nimetab veerud, mis tahes järjekorras; muud veerud ignoreeritakse.

| Veerg | Mis sinna läheb |
|---|---|
| Item (või Name) | Kirje nimi. Kohustuslik. |
| Type | Linear, Area või Count (LF, SF ja EA töötavad samuti). Tühjana otsustab ühik. |
| Unit | LF või m; SF, SY või m²; EA. Tühi: tüübi tavaline ühik. |
| Waste % | `10` või `10%`. |
| Material per unit, Labor per unit | Määrad nagu `2.10` või `$1,250`. |
| Height (või Depth) | `9'-0"`, `9` või meetriühikute korral `2.7`. |
| Component, Formula | Rida koos Component nimega (või tüübiga `Component`) on selle kirje koosti osa, mille all see on. Selle Unit, Waste ja määrad on tema omad; tema Formula kasutab kirje tähti, vt [Koosted ja valemid](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Komad, semikoolonid või tabelaatorid veergude vahel töötavad kõik.
