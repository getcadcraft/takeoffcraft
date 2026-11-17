---
title: Voer die raming en 'n gemerkte PDF uit
summary: Laai die raming af as 'n XLSX-werkboek met lewende formules of as CSV, en kopieë van jou PDF's met die hoeveelheidsopname getekend.
keywords: voorstel, tenderopsomming, uitvoer, xlsx, sigblad, werkboek, csv, gemerkte pdf, druk hoeveelheidsopname, verslag, deel, stuur, legenda
from: 334f89c7
---

Uitvoere is aflaaie. Hulle word op jou rekenaar gemaak uit die hoeveelheidsopname en die oop PDF's; niks word iewers gestuur nie.

## Die raming as 'n sigblad (XLSX)

1. Maak die {{ui:Uitvoer}}-kieslys in die werkbalk oop en kies {{ui:XLSX}}.
   Jou blaaier laai `(name).xlsx` af. Die statusbalk sê "Uitgevoer (name).xlsx (raming met lewende formules, per blad, merke, skale)." en voeg 'n waarskuwing by wanneer die raming onvolledig is.
2. Maak dit oop in jou sigbladprogram.

Die werkboek het vier werkblaaie, en die verslae hieronder wanneer hulle van toepassing is:

| Werkblad | Wat dit bevat |
|---|---|
| Beraming | 'n Ry per item en per komponent: hoeveelheid, afval, hoeveelheid met afval, tariewe, materiaal, arbeid, totaal, notas. Die projektotaal onderaan. |
| Per blad | Elke item se hoeveelheid op elke blad, met die aantal merke. |
| Merke | Elke merk: blad, item, tipe, hoeveelheid, en detail (segmentlengtes, bruto- en uitsneeoppervlaktes, omtrek). |
| Skale | Elke blad wat 'n skaal of merke het: sy skaal, hoe dit gestel is (voorinstelling, of gekalibreer op watter afstand), en voet per PDF-eenheid. |
| Hoeveelheidsopname-opsomming | Elke item se hoeveelheid, CSI-nommer, merke en blaaie, sonder pryse. |
| Materiaallys | Elke samestellingsonderdeel bymekaargetel oor die hoeveelheidsopname (dieselfde onderdeel wat deur verskeie items gebruik word, is een reël), met afval en materiaalkoste, en die items wat dit gebruik. |
| Kwotasieversoek | Die materiaallys om aan 'n verskaffer te stuur: hoeveelhede met afval, 'n leë eenheidsprys-kolom, en uitbreidings en 'n totaal wat invul soos pryse getik word. |
| Per afdeling | Materiaal, arbeid en totaal volgens CSI MasterFormat-afdeling, wanneer items 'n {{ui:CSI-nommer}} het. |

Met 'n [tenderopsomming](topic:bid-summary) sluit die Beraming-werkblad ook af met sy opmarkerings (arbeidslas, verkoopsbelasting, oorhead, wins, borg en die tender), as lewende formules.

Die Beraming-werkblad hou **lewende formules**: hoeveelheid met afval, die afgeronde materiaal- en arbeidsbedrae, elke ry se totaal en die projektotaal. Sigbladprogramme herbereken hulle, so jy kan 'n tarief of afval in die sigblad verander en die totale volg. Die getalle wat TakeoffCraft bereken het, word ook in die selle gestoor en stem tot die sent ooreen.

Die Notas-kolom lys elke komponent se formule, formulefoute, merke op blaaie sonder skaal, muuroppervlakte en omtrek. Wanneer iets weggelaat word, sê die projektotaalry "Onvolledig: sien die notas hierbo".

Die werkboek is in LibreOffice Calc nagegaan, wat dit herbereken het na dieselfde totale. Dit is nog nie in Excel oopgemaak nie. Kolom-vir-kolom besonderhede is in [Uitvoerkolomme](topic:export-columns).

## Die raming as CSV

Maak die {{ui:Uitvoer}}-kieslys oop en kies {{ui:CSV}}. Jy kry `(name).csv`: dieselfde rye en kolomme as die Beraming-werkblad, as gewone waardes (geen formules nie), en die projektotaal. Gebruik dit om in 'n ander raming- of rekeningkundige stelsel te plak.

Die CSV bevat slegs die raming; vir hoeveelhede per blad en die merklys, gebruik XLSX. {{ui:Materiaallys}} in dieselfde kieslys stoor die materiaallys alleen as CSV, vir bestelling.

## Die raming in Google Sheets

Bo die Hoeveelhede-tabel plaas **Kopieer vir Google Sheets** die raming op jou knipbord as tab-geskeide teks, met dieselfde lyne as die CSV. In 'n Google Sheet klik sel A1 en plak. TakeoffCraft meld nie by Google aan nie en stuur niks daarheen nie.

## Ontbrekende tariewe en goedkeuring

'n Reël met 'n hoeveelheid en geen tarief sê **Geen tarief** in sy Notas, en die uitvoer tel hulle onder die totale. Wanneer die raming goedgekeur is, noem die uitvoer wie geteken het, wanneer en vir watter totaal. Sien [Ontbrekende tariewe en goedkeuring van die raming](topic:sign-off-the-estimate).

## 'n Gemerkte PDF

1. Maak die PDF's oop waarvan jy die merke wil laat teken.
2. Maak die {{ui:Uitvoer}}-kieslys oop en kies {{ui:Gemerkte PDF}}.
   "Skryf die gemerkte PDF…" wys, dan laai jou blaaier een lêer per gemerkte PDF af, genoem `(PDF name) (takeoff).pdf`.

In die kopie:

- lope word as lyne in hul item se kleur geteken,
- areas word lig gevul met 'n soliede buitelyn, en uitsnedes word oop gelaat,
- tellings is kolletjies,
- elke bladsy met merke kry 'n klein legenda in sy onderste linkerhoek: elke item se kleur, naam en hoeveelheid op daardie bladsy.

Jou oorspronklike PDF's word nie verander nie.

Notas:

- Slegs PDF's wat oop is, word geskryf. Merke op PDF's wat nie oop is nie, bly in die totale maar word nie geteken nie; maak daardie PDF's eers oop.
- Name in die legenda gebruik 'n standaard PDF-lettertipe. Letters wat dit nie kan wys nie, druk as "?".
- 'n Versleutelde PDF kan nie met merke gekopieer word nie: "Hierdie PDF is met 'n wagwoord beskerm of versleutel, so 'n gemerkte kopie kan nie geskryf word nie. Die hoeveelheidsopname self is in orde; voer eerder die sigblad uit."
- Die eerste {{ui:Gemerkte PDF}} in 'n oortjie laai die PDF-skrywer. Vanlyn is hy slegs beskikbaar as die appbalk {{ui:Vanlyn gereed}} wys; sien [Werk vanlyn](common:offline).

:::chromium
Met verskeie gemerkte PDF's mag Chrome en Edge een keer vra of hierdie webwerf veelvuldige lêers mag aflaai. Kies Toelaat, anders kry jy net die eerste lêer.
:::

## Niks om uit te voer nie?

- {{ui:XLSX}} en {{ui:CSV}} benodig ten minste een item: "Niks om uit te voer nie: maak 'n item en meet dit op."
- {{ui:Gemerkte PDF}} benodig merke op 'n oop PDF: "Nog geen merke op die oop PDF's nie."

## Stoor ook die hoeveelheidsopname

'n Uitvoer is 'n verslag. Om later aan die hoeveelheidsopname te bly werk, kies ook {{ui:Stoor hoeveelheidsopname}}: sien [Stoor en heropen 'n hoeveelheidsopname](topic:save-and-reopen).

Om oorhead, wins, belasting en borg by te voeg en 'n voorstel te stuur, sien [Tenderopsomming en voorstel](topic:bid-summary).
