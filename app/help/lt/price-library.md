---
title: Kainų biblioteka
summary: Laikykite savo pozicijas, įkainius ir surinkimus bibliotekoje, importuokite ją iš CSV ar ankstesnės sąmatos, pridėkite pozicijas iš jos į bet kurį kiekių skaičiavimą ir atnaujinkite jo kainas.
keywords: biblioteka, sričių paketai, kainų sąrašas, kainų knyga, kainų duomenų bazė, importuoti csv, įkainiai, surinkimai, pakartotinis naudojimas, pavyzdinės pozicijos, atnaujinti kainas, perkainoti
from: 37356c68
---

**Kainų biblioteka** laiko pozicijas, kurias naudojate darbas po darbo: jų tipą, vienetą, aukštį, atliekas, medžiagos ir darbo įkainius bei surinkimą. Ji laikoma šioje naršyklėje, atskirai nuo bet kurio kiekių skaičiavimo, todėl ją gali naudoti kiekvienas čia atidarytas kiekių skaičiavimas.

Atidarykite ją su {{ui:Biblioteka}} viršuje {{ui:Pozicijos}} skydelio.

## Pripildyti biblioteką

- {{ui:Importuoti CSV…}} nuskaito skaičiuoklės failą, įrašytą kaip CSV (žr. stulpelius žemiau). Pozicijos, kurių pavadinimas ir tipas jau yra bibliotekoje, pakeičiamos; likusios pridedamos. Eilutės, kurių nepavyksta perskaityti, praleidžiamos, ir nurodoma, kurios bei kodėl.
- {{ui:Pridėti šio kiekių skaičiavimo pozicijas}} nukopijuoja į biblioteką kiekvieną atidaryto kiekių skaičiavimo poziciją su jos įkainiais ir surinkimu (be jos žymų).
- Sąmatos CSV, kurį TakeoffCraft eksportuoja ([Eksportuoti sąmatą](topic:export-estimate)), importuojamas toks, koks yra: paskutinio darbo kainos pradeda kitą.

- {{ui:Sričių paketai…}} prideda nemokamus surinkimus tam tikrai sričiai, pavyzdžiui, gipso plokštėms, elektrai ar betonui, be kainų. Žr. [Sričių paketai](topic:trade-packs).

{{ui:Eksportuoti CSV}} įrašo biblioteką kaip CSV, kad išsaugotumėte kopiją, redaguotumėte skaičiuoklėje ar perduotumėte kolegai. {{ui:Valyti}} ją ištuština (spustelėkite du kartus).

:::note
Biblioteka laikoma šios naršyklės saugykloje. Kita naršyklė, kitas kompiuteris ar privatus langas turi savo (arba jokios). Eksportuokite ją, kad perkeltumėte.
:::

## Naudoti kiekių skaičiavime

- Pažymėkite pozicijas (įveskite į {{ui:Ieškoti bibliotekoje}}, kad susiaurintumėte sąrašą) ir pasirinkite {{ui:Pridėti į kiekių skaičiavimą}}. Jos pridedamos kartu su savo surinkimais vienu veiksmu, kurį {{key:Mod+Z}} atšaukia. Pavadinimas, jau esantis kiekių skaičiavime, gauna numerį, pavyzdžiui `Kilimas (2)`.
- {{ui:Atnaujinti kainas}} suteikia kiekių skaičiavimo pozicijoms bibliotekos atliekas ir įkainius, visoms pozicijoms, kurių pavadinimas ir tipas sutampa su bibliotekos pozicija, ir tą patį surinkimo komponentams su tuo pačiu pavadinimu. Aukščiai, vienetai ir formulės lieka tokie patys. Vienas {{key:Mod+Z}} grąžina visas senas kainas.

## CSV stulpeliai

Pirmoji eilutė įvardija stulpelius bet kokia tvarka; kiti stulpeliai ignoruojami.

| Stulpelis | Kas į jį įrašoma |
|---|---|
| Item (arba Name) | Pozicijos pavadinimas. Privalomas. |
| Type | Linear, Area arba Count (LF, SF ir EA taip pat veikia). Jei tuščias, tipą nulemia vienetas. |
| Unit | LF arba m; SF, SY arba m²; EA. Tuščias: įprastas tipo vienetas. |
| Waste % | `10` arba `10%`. |
| Material per unit, Labor per unit | Įkainiai, pavyzdžiui `2.10` arba `$1,250`. |
| Height (or Depth) | `9'-0"`, `9` arba `2.7` metriniams vienetams. |
| Component, Formula | Eilutė su Component pavadinimu (arba tipu `Component`) yra virš jos esančios pozicijos surinkimo dalis. Jos Unit, Waste ir įkainiai yra jos pačios; jos Formula naudoja pozicijos raides, žr. [Surinkimai ir formulės](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Kableliai, kabliataškiai arba tabuliacijos ženklai tarp stulpelių veikia visi.
