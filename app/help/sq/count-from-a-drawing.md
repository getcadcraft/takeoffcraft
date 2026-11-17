---
title: Numëro nga një vizatim
summary: Numëro blloqe, objekte në një shtresë ose tekst direkt nga një DWG ose DXF: saktë, me blloqe të futura, variante blloqesh dinamike dhe grupe blloqesh (array) të trajtuara, në një hap zhbërjeje.
keywords: numëro nga vizatimi, numërim CAD, numërim blloqesh, numëro blloqe, futje, emri i bllokut, blloqe të futura, bllok dinamik, variant, minsert, grup, shtresë, lloj entiteti, rrathë, tekst, atribut, etiketë, shtresa të fshehura, numërim i saktë, si të, dyer, armatura
from: 5060e24e
---

{{ui:Numërimi CAD}} te shiriti i fletës (komanda **Count from the drawing** në stilet e tjera të menysë) numëron atë që thotë një DWG ose DXF se ka. Aty ku {{ui:Numërim automatik}} kërkon një figurë të simbolit dhe mund të humbasë një ose të gjejë një të rremë, ky numëron objektet: çdo futje e një blloku me emrin `DOOR-36` është një derë. Hap së pari vizatimin: [Hap një vizatim DWG ose DXF](topic:open-a-drawing).

## Numëro një bllok

1. Hap një fletë të vizatimit. {{ui:Numërimi CAD}} është te shiriti i fletës.
2. Zgjidhe. Dritarja liston blloqet me sa prej secilit ka. Kërko sipas emrit, pastaj zgjidh një.
3. Kontrollo rreshtin nën listë: "22 gjetur, 22 për t'u shtuar."
4. Te {{ui:Shto te}}, zgjidh një artikull numërimi, ose lëre {{ui:Një artikull i ri numërimi}} dhe jepi një emër.
5. Zgjidh butonin e shtimit, që e emërton numrin: {{ui:Shto 22 shenja}}. Shenjat shfaqen te pikat e futjes së bllokut, dhe sasia e artikullit është numërimi.

Është një hap zhbërjeje: {{key:Mod+Z}} heq shenjat (dhe një artikull të ri) bashkë. Vlerësimi, fletëllogaritësja dhe PDF-ja e shënuar e trajtojnë artikullin si çdo artikull tjetër numërimi.

### Çfarë numërohet

- **Çdo futje e emrit të bllokut**, pavarësisht nga shkalla dhe këndi i saj, në hapësirën e modelit ose në hapësirën e letrës. Emrat e blloqeve nuk varen nga shkronjat e mëdha/të vogla.
- **Grupe blloqesh** (MINSERT): çdo kopje në grup është një.
- **Blloqe të futura brenda blloqeve.** Një bllok i vendosur brenda një blloku tjetër numërohet në çdo thellësi. Lista thotë "6 brenda blloqeve të tjera"; hiq zgjedhjen e {{ui:Numërimi i blloqeve brenda blloqeve të tjera}} për të numëruar vetëm futjet e vendosura direkt në vizatim.
- **Blloqe dinamike.** Një bllok dinamik numërohet me emrin e vet, jo me kopjet anonime (`*U12`) që ruan skedari. Gjendjet e tij listohen veç ("Single 12, Double 4"): zgjidh një gjendje për të numëruar vetëm ato, ose {{ui:Çdo variant}}. Kur një skedar nuk thotë cilën gjendje shfaq një kopje, ato listohen si "(gjendja e panjohur)".
- **Filtri i shtresës.** Një bllok në disa shtresa: zgjidh një te {{ui:Në shtresën}}.

### Çfarë nuk numërohet

- **Shtresat e fshehura.** Një objekt në një shtresë që është e fikur ose e ngrirë në skedar (ose që e fshehe te {{ui:Shtresat}}) lihet jashtë, dhe rreshti thotë sa janë: "3 në shtresa të fshehura, lënë jashtë". Shëno {{ui:Numëroji edhe ato}} për t'i përfshirë.
- **Vizatimet e lidhura që nuk janë të hapura** nuk numërohen; dritarja e thotë këtë.
- **Objektet e vendosura saktë mbi një tjetër të të njëjtit lloj** numërohen si dy (janë dy objekte) dhe dritarja e thotë këtë: zakonisht është një gabim hartimi që vlen të shikohet.

## Ç'tregon kjo fletë, ose i gjithë vizatimi

- **Ç'tregon kjo fletë** numëron objektet që fleta shfaq: në një paraqitje, objektet e modelit brenda viewport-eve të saj (një shtresë e ngrirë në një viewport nuk numërohet atje) plus objektet e vetë paraqitjes.
- **I gjithë vizatimi, çdo objekt një herë** numëron hapësirën e modelit një herë, me shenjat te fleta Model, dhe nuk numëron përsëri atë që shfaqin disa paraqitje.

Numërimi i asaj që shfaq një paraqitje dhe numërimi i asaj që shfaq Modeli japin të njëjtin numër për të njëjtët objekte; mos i shto të dyja te një artikull.

## Numëro sërish numërimet

Numërimi i të njëjtit bllok sërish me të njëjtin artikull shton vetëm ato që janë të reja: "22 të numëruara tashmë." Çdo shenjë përfaqëson një objekt.

## Sipas shtresës dhe tipit

Te {{ui:Sipas shtresës dhe tipit}} zgjidh një shtresë dhe një lloj objekti (rrathë, polivijë, mbushje…): "të gjithë rrathët në E-LITE". Shëno {{ui:Numëro edhe objektet brenda blloqeve}} për të përfshirë ato brenda përkufizimeve të blloqeve, në çdo vend ku bllok futet.

## Sipas tekstit

Te {{ui:Sipas tekstit}} shkruaj tekstin, si `A3`, dhe thuaj nëse është saktësisht ai, përmban atë, ose e ka si fjalë të plotë. Objektet e tekstit, teksti me shumë udhëheqës dhe **vlerat e atributeve** të bllokut numërohen të gjitha (një atribut etikete `ITEM = A3` gjendet); zgjidh {{ui:Në atributin}} për të numëruar vetëm një atribut. Tekstet më të zakonshme listohen për t'u klikuar.

## Kur të përdorësh Numërimin automatik

Përdor {{ui:Numërim automatik}} për PDF-të dhe për simbole në një vizatim që nuk janë blloqe (të vizatuara të lira, ose të çmontuara). Të vizatuara si blloqe, numëroji këtu.
