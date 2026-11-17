---
title: "Kontorikorraldus: rühmitamine, vahesummad, pealkiri ja pealkirjad vaikimisi reeglitest"
summary: "Lülita sisse lisandmoodul Vaikimisi reeglid ja hinnang, kogused lehtede kaupa, eksport ning see, mida assistent loeb, võtavad sinu kontori loendi paigutuse, sama mis BimCrafti loendid."
keywords: kontori standard, kontorikorraldus, vaikimisi reeglid, lisandmoodul, loendi paigutus, rühmita tüübi järgi, rühmita lehe järgi, vahesumma, kogusummad, pealkiri, pealkirjad, suurtähed, hinnangu paigutus, ekspordi paigutus, sätted
from: cfd2f30a
---

## Mida teed

Pane TakeoffCraft koostama tabeleid nii, nagu sinu kontor need välja annab, ilma et seadistaksid seda igas koguste arvestuses eraldi. Paigutus seatakse üks kord, vaikimisi reeglites, ja see kehtib kõigis selles arvutis olevates rakendustes: mis on BimCraftis või CadCraftis seatud, seda kasutab TakeoffCraft ja vastupidi.

## Sammud

1. Ava **Sätted › Lisandmoodulid** ja lülita sisse **Vaikimisi reeglid**. See on alguses väljas; kui see on väljas või midagi pole seatud, on TakeoffCraft täpselt endine.
2. Ava **Sätted › Üldine › Vaikimisi reeglid** ja leia **Loendi paigutus (kontori standard)**:

| Reegel | Mida see TakeoffCraftis teeb |
|---|---|
| Rühmita loendid järgi | **Tüüp** rühmitab hinnangu kirjetüübi järgi (Lineaarne, Pindala, Loendus, Tüübitud kogus). **Tasand** rühmitab kogused lehtede kaupa nende lehe järgi. **Ruum** ja **Rühmitamata** ei rühmita kumbagi |
| Kogusummad loendites | **Vahesumma iga rühma all ja kogusumma** lisab vahesumma iga rühma alla. Objekti kogusumma jääb alati |
| Loendi pealkiri | Rida tabeli kohal, näiteks `{schedule}: office layout` |
| Veergude pealkirjad | Nagu kirjutatud, SUURTÄHTEDES või Esitähtedega |

3. Sulge Sätted. Tabelid järgivad kohe.

## Mis paigutust järgib

- **Kogused › Kirje järgi** ja **Lehe järgi**: rühmapealkirjad, vahesumma iga rühma all, pealkiri ja pealkirjade kirjastiil. Pealkirja all olev rida ütleb, millised osad kontori standard määras. Read on samad read: määrasid ja kadu sisestad neisse ikka sina ning arvudele klõpsates valid nende märgid. Komponent või teine tingimus jääb oma kirje alla.
- **Eksporditud hinnang** (CSV ja XLSX): samad rühmad ja vahesummad. Töövihikus on vahesumma `SUBTOTAL`-valem oma rühma üle ja objekti kogusumma on samuti valem, nii et midagi ei loeta kaks korda.
- **Mida assistent loeb**: `takeoff_estimate` ja `takeoff_quantities` (lehe kaupa) lisavad ploki `layout`, mis sisaldab rühmi, ridu ja vahesummasid, ning ütlevad, millised osad kontor seadis.

## Mis jääb omaks

- **Kogused › Ala järgi** määrab oma rühmituse (pakkumisala järgi) ja jätab selle alles.
- **Objekti kogusumma**, pakkumise kokkuvõtte lisad ja alternatiivid ei rühmitata uuesti.
- Rühmitamine, millele tabelis veergu pole, jäetakse välja: hinnangul pole tasandit, lehe kaupa kogustel pole tüüpi.

## Hea teada

- Reeglid hoitakse selles brauseris kõigi CadCraft-rakenduste jaoks ja need liiguvad Vaikimisi reeglite failis (**Salvesta faili** / **Lae failist** samas kohas), nii et kontor jagab ühte faili.
- Rühmitustega CSV-na eksporditud hinnang on mõeldud lugemiseks. Et tuua hinnang tagasi hinnateegina, ekspordi see ilma rühmitamata.
- BimCrafti pool samast standardist: loendid, seadistused ja eksportid. TakeoffCraftil endal reegleid veel pole, seega Sätted › TakeoffCraft all pole Vaikimisi reeglite jaotist.
