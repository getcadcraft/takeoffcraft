---
title: Surinkimai ir formulės
summary: Pridėkite komponentus prie pozicijos ir leiskite formulėms paversti jos ilgį, plotą ar kiekį į stovus, plokštes, gipso lakštus, betoną ir apkaustus, su sienos pavyzdžiu.
keywords: surinkimas, komponentai, formulė, stovai, gipso plokštė, lakštai, plokštės, betonas, kubiniai jardai, apkaustai, receptas, įprasta, pozicijos dalys
from: 12891a21
---

Pozicijos **surinkimas** yra komponentų sąrašas, kiekvienas su kiekio formule ir savo atliekų bei kainų normomis. Formulė naudoja išmatuotas pozicijos sumas, todėl vienas sienos matavimas iš karto duoda stovus, plokštes ir lentas, ir jie atsinaujina, kai matuojate.

## Kintamieji, kuriuos galite naudoti

| Pozicijos tipas | Kintamieji |
|---|---|
| Linijinė | `L` ilgis, `H` aukštis, `A` sienos plotas (L × H), `N` ruožų skaičius |
| Plotas | `A` plotas, `P` perimetras (kontūras + išpjovos), `H` gylis ar storis, `N` plotų skaičius |
| Skaičius | `N` skaičius |

Reikšmės pateikiamos pozicijos vienetais: pėdomis ir kvadratinėmis pėdomis LF ir SF pozicijoms, metrais ir kvadratiniais metrais m ir m² pozicijoms. SY pozicijai `A` yra kvadratiniais jardais, o `P` ir `H` lieka pėdomis.

Formulėse naudojami `+ - * /` (arba × ÷), skliaustai, skaičiai ir funkcijos `ceil`, `floor`, `round`, `min`, `max` ir `abs`. Visos taisyklės aprašytos [Formulių kalba](topic:formulas).

## Darbo pavyzdys: vidinė siena

Tarkime, kad išmatavote **Vidinė siena, tipas A** kaip linijinę poziciją: 4 ruožai, iš viso 120 LF, o {{ui:Height}} nustatytas į `9'-0"`. Jos **Išmatuotos** reikšmės: L = 120, N = 4, A = 1,080 (SF sienos, vienas paviršius).

1. Pasirinkite poziciją skiltyje {{ui:Pozicijos}}.
2. Skiltyje {{ui:Surinkimas}} pasirinkite {{ui:Pridėti komponentą}}.
   Atsiranda komponentas pavadinimu „Komponentas“, su formule `L` ir jos rezultatu žemiau.
3. Įveskite `Studs 16 in o.c.` laukelyje {{ui:Pavadinimas}} ir `EA` laukelyje {{ui:Vienetas}}.
4. Laukelyje {{ui:Kiekio formulė}} įveskite `ceil(L * 12 / 16) + N`.
   Rezultatas atsinaujina jums rašant: „= 94 EA“. Tai vienas stovas kas 16 colių išilgai 120 pėdų (90), plius vienas papildomas, kad uždarytumėte kiekvieną iš 4 ruožų.
5. Dar kartą pasirinkite {{ui:Pridėti komponentą}} plokštėms: pavadinimas `Plates, top and bottom`, vienetas `LF`, formulė `L * 2`. Rezultatas: 240 LF.
6. Pridėkite lentas: pavadinimas `Gypsum board 4x8, both sides`, vienetas `sheets`, formulė `ceil(A * 2 / 32)`. Rezultatas: 68 lakštai (2,160 SF lentų ÷ 32 SF viename lakšte = 67.5, suapvalinta į viršų).
7. Įveskite kiekvieno komponento {{ui:Waste %}}, {{ui:Material $}} ir {{ui:Labor $}}.
   Kiekvienas komponentas gauna savo eilutę po pozicija lentelėje {{ui:Quantities}}, įkainotą kaip pozicija, ir {{ui:Job total}} jį įtraukia.

Jei sienos kaina visa yra komponentuose, palikite pačios pozicijos medžiagos ir darbo normas 0, kitaip ji bus paskaičiuota du kartus.

:::tip
Atliekos taikomos po formulės ir nėra apvalinamos: 68 lakštai su 10 % atliekų yra 74.8 lakšto. Norėdami užsakyti sveikus lakštus, įdėkite atliekas į formulę, pavyzdžiui `ceil(A * 2 / 32 * 1.1)`, ir komponento atliekas palikite 0.
:::

## Daugiau formulių

| Ką | Pozicija | Formulė |
|---|---|---|
| Stovai kas 24 colius ašies atstumu | Linijinė | `ceil(L / 2) + N` |
| Izoliacijos ritiniai, SF | Linijinė su aukščiu | `A` |
| Dažai, abi pusės, galonais po 350 SF | Linijinė su aukščiu | `ceil(A * 2 / 350)` |
| Plytelių dėžės po 15 SF, 10 % papildomai | Plotas | `ceil(A * 1.1 / 15)` |
| Pagrindo ar krašto apdaila, LF | Plotas | `P` |
| Betonas, kubiniai jardai | Plotas su gyliu | `A * H / 27` |
| Betonas, suapvalintas į ketvirtadalį jardo | Plotas su gyliu | `ceil(A * H / 27 * 4) / 4` |
| Vyriai, trys vienoms durims | Skaičius | `N * 3` |
| Bent viena dėžė, po vieną kas 12 | Skaičius | `max(1, ceil(N / 12))` |

## Kai formulė klaidinga

Eilutė po formule virsta klaidos pranešimu, pavyzdžiui `"X" čia nėra išmatuota reikšmė. Naudokite L, H, A, N.` arba `Trūksta ")" skliausto.` Tuomet komponentas neturi kiekių, jo eilutėje {{ui:Quantities}} rodoma „Formulės klaida: …“, o antraštėje rašoma „Nebaigta: 1 formulės klaida (neįskaičiuota į sumas)“. Ištaisykite formulę, ir sumos atsinaujins.

Formulė, dalijanti iš nulio, taip pat yra klaida („Formulė dalija iš nulio.“), pavyzdžiui `A / H` pozicijai be gylio.

## Apribojimai

- Formulės veikia su pozicijos **sumomis**, o ne ruožas po ruožo. `ceil(L * 12 / 16) + N` prideda po vieną stovą kiekvienam ruožui; apvalinimo pagal ruožus kol kas nėra.
- Formulė gali naudoti tik savo pozicijos kintamuosius, ne kitos pozicijos.
- Iki 50 komponentų vienai pozicijai, iki 500 ženklų vienai formulei.

## Komponento pašalinimas

Pasirinkite {{ui:Remove component}} po juo. Galite jį anuliuoti su {{key:Mod+Z}}.
