---
title: Predizmera količin iz modela stavbe
summary: Odprite arhitektov model IFC, si oglejte model v 3D, izberite zidove, plošče, vrata in ostalo po tipu, materialu, sloju ali velikosti ter prenesite njihova števila, dolžine, površine in prostornine v predizmero. Novejša kopija modela posodobi iste količine.
keywords: model, predizmera iz modela, pogled 3D, kliknite del, poiščite vrstico, material, sloj, plasti zidu, mavčna plošča, izolacija, velikosti vrat, velikosti oken, popis vrat in oken, csv, 3d, bim, ifc, rvt, model stavbe, količine, zidovi, plošče, vrata, okna, stebri, prostori, po tipu, po nivoju, posodobitev, novejši model, idejna zasnova
from: 8c4c12c9
---

Ne vam ni treba čakati na naslednji komplet risb. Ko arhitekt pošlje model stavbe, ga tukaj odprite in količine vzemite neposredno iz njega. Model se bere na vašem računalniku; nikamor se ne pošilja.

## Koraki

1. Izberite {{ui:Model}} na orodni vrstici in izberite datoteko modela `.ifc`, ali ga odprite z {{ui:Open plans}} kot vsako drugo datoteko.
2. {{ui:Model takeoff}} se odpre z eno vrstico za vsako kategorijo in tip: zidovi po tipu zidu, plošče po tipu plošče, vrata po tipu vrat itd. Vsaka vrstica prikazuje število in v čem se ta kategorija meri.
3. Nastavite {{ui:Group by}} na {{ui:Category}} za hitro skupno vsoto ali na {{ui:Category, type and level}}, da vsak tip razdelite po nivojih.
4. Odznačite vrstice, ki jih ne želite. {{ui:Find}} zoži seznam. Odznačitev vrstice skrije tudi njene dele na sliki 3D.
5. Modelu dajte {{ui:Model name}}, ki ga boste obdržali za celo delo, na primer ime projekta.
6. Izberite {{ui:Add to the takeoff}}. Vsaka količina postane vnesena količina na seznamu postavk. Poimenujte jo, cenite jo in pripnite sestave kot katero koli drugo postavko.

## Ogled modela v 3D

{{ui:Show the model in 3D}} nariše model nad tabelo, z eno barvo za vsako vrstico (barvni kvadratek ob imenu vrstice). Povlecite, da ga zavrtite, pridržite {{key:Shift}} in povlecite, da ga premaknete, s kolescem povečate ali pomanjšate, z {{ui:Fit}} ali {{ui:Reset}} pa se vrnete nazaj.

- **Kliknite del** na sliki in njegova vrstica se izbere v tabeli, vsi deli te vrstice so osvetljeni, ostali pa bledi. Ponovni klik na isti del, in če je v več vrsticah (zid v svojih plasteh), se izbere naslednja vrstica.
- **Kliknite vrstico** v tabeli, da osvetlite njene dele. Ponovni klik ali klik na prazen prostor na sliki izbor počisti.
- Prostori niso narisani, ker bi prostornina prostora zakrila stavbo.
- Zelo velik model za nekatere dele hrani samo okvir, da se prilega v pomnilnik; podokno pove, koliko jih je. Števila se ne spremenijo.

Če ta računalnik ne more risati v 3D, tabela deluje kot prej.

## Združevanje po materialu, sloju ali velikosti

{{ui:Group by}} ima še tri izbire:

- {{ui:Category and material}}: zid, plošča ali streha iz plasti dobi za material vsake plasti svojo vrstico, tako da se mavčne plošče, letve in izolacija lahko cenijo posebej. Del stavbe z enim materialom dobi vrstico tega materiala, del brez materiala pa ostane v vrstici z imenom „Brez materiala“.
- {{ui:Category and layer}}: enako, v vrstici pa je debelina sloja („Izolacija, 100 mm“).
- {{ui:Category, type and door or window size}}: vrata in okna so razdeljena po širini in višini (na primer 3'-0" × 6'-8" ali 914 × 2,032 mm).

Pri sloju je površina sama površina stene (ali tlorisna površina oziroma površina plošče ali strehe), prostornina pa je ta površina krat debelina sloja. Opomba vrstice pove, koliko števil je prišlo iz sloja. Plasti ene stene skupaj dajo prostornino, ki jo model navaja zanjo.

## Shranjevanje vrstic ali popisa odprtin kot CSV

{{ui:Save rows as CSV}} shrani označene vrstice z enotami v vsaki glavi za preglednico. {{ui:Save openings schedule as CSV}} (samo če model vsebuje vrata ali okna) shrani vsa vrata in okna po tipu, nivoju in velikosti s številom.

## Kaj se meri

| Kategorija | Količine |
|---|---|
| Zidovi | število, dolžina, površina stene (ena stran, odprtine odštete), prostornina |
| Tla, plošče, stropi in druge obloge | število, tlorisna površina, prostornina |
| Strehe | število, tlorisna površina, površina strehe, prostornina |
| Temeljne stope | število, tlorisna površina, prostornina |
| Stebri, nosilci in drugi elementi | število, dolžina vzdolž elementa, prostornina |
| Ograje, cevi, zračni kanali in kabelske trase | število, dolžina |
| Stopnišča | število, prostornina |
| Prostori | število, tlorisna površina, prostornina |
| Vrata, okna in vse ostalo | število |

Kjer je avtor modela količino navedel v datoteki, se uporabi to število. Sicer se število izmeri iz oblike elementa. Vsaka količina ima opombo, ki pove, kateri način je bil uporabljen in koliko elementov je dalo število.

:::note
Dolžina zidu, izmerjena iz oblike, teče od konca do konca, zato oba zidova, ki se na vogalu prekrivata, vključujeta vogal. Prostornina zahteva zaprto obliko: element, katerega oblika ni zaprta, se šteje, vendar ne da prostornine. Ukriven ali kotni zidni element se meri kot polovica vseh njegovih navpičnih ploskev, in njegova opomba to pove.
:::

## Ko pride novejši model

Odprite novejšo datoteko in vpišite isto {{ui:Model name}}. Preden kaj dodate, podokno pove, koliko količin je novih, koliko se jih je spremenilo in iz česa v kaj, ter katere količine iz prejšnje kopije ni več v modelu. Izberite {{ui:Add to the takeoff}}: spremenjene količine dobijo nova števila, vaša imena, cene, odpadek in sestavi pa ostanejo. Količine, ki jih v modelu ni več, obdržijo stara števila; če jih je načrt opustil, jih odstranite sami.

Imena tipov in nivojev so način, kako se količina prepozna. Če arhitekt preimenuje tip zidu, pride kot nova količina, stara pa je navedena kot manjkajoča.

## Datoteke, ki se berejo

Datoteke IFC (IFC2x3, IFC4 in IFC4.3). Datoteka IFC s cestami, progami ali mostovi še vedno neposredno prinese svoje količine infrastrukture, kot prej.

TakeoffCraft v tej izdaji ne bere datotek `.rvt`. Če arhitekt dela v Revitu, ga prosite za izvoz modela v IFC (File, Export, IFC) in odprite tega.

Ena datoteka modela lahko naenkrat prinese do 500 količin. Če jih je več, odznačite vrstice ali združite po kategoriji.
