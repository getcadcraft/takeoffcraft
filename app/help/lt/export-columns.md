---
title: Eksporto stulpeliai
summary: Kiekvienas XLSX eksporto ir CSV darbalapis bei stulpelis, su formulėmis, kurias turi Sąmatos darbalapis.
keywords: eksportas, stulpeliai, xlsx, csv, darbalapis, sąmatos lapas, pagal lapą, žymos, masteliai, formulės, laukai
from: fed07851
---

## Sąmata (XLSX darbalapis ir CSV)

Viena eilutė kiekvienam elementui, po jos – eilutė kiekvienam jo sudėties komponentui (įtraukta). Tada tuščia eilutė ir bendra darbo suma.

| Stulpelis | Turinys | XLSX faile |
|---|---|---|
| A Elementas | Elemento pavadinimas (paryškintas) arba komponento pavadinimas (įtrauktas) | Tekstas |
| B Tipas | Linijinis, Plotas, Skaičius arba Komponentas | Tekstas |
| C Vienetas | LF, m, SF, SY, m², EA arba komponento vienetas | Tekstas |
| D Kiekis | Išmatuota bendra suma arba formulės rezultatas | Skaičius |
| E Atliekos % | Atliekos | Procentas (0.10 = 10%) |
| F Kiekis su atliekomis | Kiekis × (1 + atliekos) | Formulė `D*(1+E)` |
| G Medžiagos už vienetą | Medžiagų norma | Skaičius |
| H Darbas už vienetą | Darbo norma | Skaičius |
| I Medžiagos | Išvestinė medžiagų suma | Formulė `ROUND(F*G,2)` |
| J Darbas | Išvestinė darbo suma | Formulė `ROUND(F*H,2)` |
| K Iš viso | Medžiagos + darbas | Formulė `I+J` |
| L Pastabos | Naudota formulė, formulės klaida, žymos lapuose be mastelio, sienos plotas, perimetras | Tekstas |

Bendros sumos eilutė: `SUM` stulpelių I, J ir K per visas aukščiau esančias eilutes; Pastabose rašoma „Neišsamu: žr. pastabas aukščiau“, kai kas nors buvo praleista.

Eilutė su formulės klaida neturi kiekio ar sumų; jos pastaboje nurodoma klaida. Antraštės eilutė užšaldyta.

CSV faile tie patys stulpeliai pateikiami kaip paprastos reikšmės, Atliekos % yra procentų skaičius (10 reiškia 10%), o pinigai pateikiami doleriais su dviem skaitmenimis po skyriklio. Tekstas, kurį skaičiuoklė galėtų palaikyti formule (prasideda `=`, `+`, `-` ar `@`), gauna pradžioje `'`, kad liktų tekstu.

## Pagal lapą (tik XLSX)

| Stulpelis | Turinys |
|---|---|
| Lapas | Lapo pavadinimas (su PDF pavadinimu, kai jis neatidarytas) |
| Elementas | Elemento pavadinimas |
| Kiekis | To elemento kiekis tame lape jo vienetais |
| Vienetas | Elemento vienetas |
| Žymos | Žymų skaičius |

## Žymos (tik XLSX)

Viena eilutė kiekvienai žymai.

| Stulpelis | Turinys |
|---|---|
| Lapas | Lapo pavadinimas |
| Elementas | Elemento pavadinimas |
| Tipas | Linijinis, Plotas arba Skaičius |
| Kiekis | Ilgis, grynasis plotas arba 1 |
| Vienetas | LF arba m; SF, SY arba m²; EA |
| Detalės | Linijiniai: atkarpų ilgiai, atimti pažymėti „(atimti)“, ir „atimama (ilgis) iš nubrėžtų (ilgis)“. Plotai: bendras ir išpjovų plotai, kai yra išpjovų, ir perimetras. „Lape nėra mastelio“ – žymoms be mastelio. |
| Pasiūlymo plotas | Tik kai kiekių skaičiavime yra pasiūlymo plotų: žymos plotas arba „Nėra pasiūlymo ploto“ |

## Pagal pasiūlymo plotą (tik XLSX, kai kiekių skaičiavime yra pasiūlymo plotų)

| Stulpelis | Turinys |
|---|---|
| Pasiūlymo plotas | Srities pavadinimas arba „Nėra pasiūlymo ploto“ |
| Elementas | Elementas arba po juo įtrauktas komponentas |
| Vienetas | Elemento ar komponento vienetas |
| Kiekis | Išmatuota toje srityje (komponentai: formulė pagal srities sumas) |
| Kiekis su atliekomis | Kiekis × (1 + atliekos) |
| Medžiagos, Darbas, Iš viso | Išvestinės sumos iki cento, kaip Sąmatoje |
| Pastabos | Formulė, klaidos ir žymos be mastelio, kaip Sąmatoje |

Kiekviena sritis baigiasi eilute „(pavadinimas) tarpinė suma“, kurios kainos yra `SUM` formulės per jos eilutes; paskutinėje eilutėje **Visos pasiūlymo sritys** sudedamos tarpinės sumos. Tada **Žymos** darbalapyje atsiranda septintas stulpelis **Pasiūlymo plotas**.

## Masteliai (tik XLSX)

Viena eilutė kiekvienam lapui, kuris turi mastelį ar žymas.

| Stulpelis | Turinys |
|---|---|
| Lapas | Lapo pavadinimas |
| Mastelis | Parinkties pavadinimas, kalibruotas mastelis arba „Nėra mastelio“ |
| Kaip | „Parinktis“ arba „Kalibruota pagal (atstumą, kurį įvedėte)“ |
| Pėdos vienam PDF vienetui | Tikslus mastelio koeficientas, kurį naudoja TakeoffCraft |

## Failų pavadinimai

- `(name).xlsx` ir `(name).csv`, kur pavadinimas paimamas iš pirmojo PDF, atidaryto kiekių skaičiavime.
- CSV yra UTF-8 su baito žymekliu ir Windows eilučių pabaigomis, kurias skaito skaičiuoklių programos visose platformose.
