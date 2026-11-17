---
title: Formulių kalba
summary: Sudėties kiekių formulių taisyklės – kintamieji, operatoriai, funkcijos, suapvalinimas ir kiekviena klaidos žinutė.
keywords: formulė, išraiška, sintaksė, funkcijos, ceil, floor, round, min, max, abs, kintamieji, operatoriai, skaičiavimas
from: 4da14575
---

Sudėties komponentų kiekį nustato formulė. Formulė yra nedidelė aritmetinė išraiška, sudaryta iš išmatuotų elemento verčių. Pavyzdžių žr. [Sudėtys ir formulės](topic:assemblies).

## Kintamieji

| Elemento tipas | Kintamasis | Reikšmė |
|---|---|---|
| Linijinis | `L` | Bendras ilgis |
| Linijinis | `H` | Elemento aukštis |
| Linijinis | `A` | Sienos plotas, L × H, atėmus angas ruožų, kurie jas turi (kiekių skaičiavimas iš BimCraft). Kai tame kiekių skaičiavime nurodomas matavimo metodas, `A` matuojamas pagal jį: angos, ne didesnės už mažiausią metodo dydį, lieka, o tai, ką metodas atima sienų susijungimo vietose, neįskaičiuojama. Pastaba po elementu nurodo metodą |
| Linijinis | `N` | Ruožų skaičius |
| Plotas | `A` | Bendras grynasis plotas (kontūrai, atėmus išpjovas) |
| Plotas | `P` | Bendras perimetras, įskaitant išpjovų kraštus |
| Plotas | `H` | Elemento gylis arba storis |
| Plotas | `N` | Plotų skaičius |
| Skaičius | `N` | Skaičius |

- Kintamieji yra elemento vienetais: žr. [Vienetai](topic:units).
- Didžiosios ir mažosios raidės yra vienodos: `l` yra `L`.
- Veikia tik paties elemento tipo kintamieji. `P` linijiniam elementui duoda: `"P" čia nėra išmatuota reikšmė. Naudokite L, H, A, N.`
- Tuščias aukštis ar gylis yra 0.

## Operatoriai

| Rašykite | Reikšmė |
|---|---|
| `+` | Sudėti |
| `-` arba `−` | Atimti arba neigiama reikšmė |
| `*` arba `×` | Dauginti |
| `/` arba `÷` | Dalyti |
| `( )` | Grupuoti |

Daugyba ir dalyba atliekama prieš sudėtį ir atimtį: `L * 2 + 4` yra (L × 2) + 4. Kai abejojate, naudokite skliaustus.

Skaičiai gali turėti dešimtainę dalį (`1.333`, `.5`) ir laipsnį (`1e3` = 1000). Tarpai ignoruojami.

## Funkcijos

| Funkcija | Rezultatas | Pavyzdys |
|---|---|---|
| `ceil(x)` | Suapvalinti į viršų iki sveikojo skaičiaus | `ceil(67.5)` = 68 |
| `floor(x)` | Suapvalinti į apačią iki sveikojo skaičiaus | `floor(67.5)` = 67 |
| `round(x)` | Suapvalinti iki artimiausio sveikojo skaičiaus, pusės – nuo nulio | `round(2.5)` = 3 |
| `round(x, d)` | Suapvalinti iki d skaitmenų po skyriklio (nuo 0 iki 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Mažiausia reikšmė | `min(N, 10)` |
| `max(a, b, …)` | Didžiausia reikšmė | `max(1, ceil(N / 12))` |
| `abs(x)` | Reikšmė be ženklo | `abs(-3)` = 3 |

`ceil` ir `floor` ignoruoja menkus kompiuterio apvalinimo triukšmus, todėl reikšmė, kuri turi būti lygiai 1, niekada nesuapvalinama iki 2.

## Klaidos

Formulė, kurios negalima perskaityti ar apskaičiuoti, rodo savo klaidą po lauku, o komponentas neįskaičiuojamas į sumas (antraštėje {{ui:Kiekiai}} rašoma „Neišsamu“). Žinutės:

| Žinutė | Ištaisymas |
|---|---|
| Įveskite formulę, pavyzdžiui L arba ceil(L / 1.333) + 1. | Formulė tuščia. |
| „X“ čia nėra išmatuota reikšmė. Naudokite … | Naudokite vieną iš nurodytų kintamųjų. |
| „X“ čia nėra funkcija. Naudokite ceil, floor, round, min, max, abs. | Naudokite vieną iš tų funkcijų. |
| „#“ formulėje neleidžiama. | Pašalinkite tą simbolį (vienetai, `%`, `$` ir `=` neleidžiami). |
| Trūksta „)“. / Yra „)“ be „(“. | Subalansuokite skliaustus. |
| Prieš „)“ trūksta reikšmės. | Pavyzdžiui `max(1, )`: įrašykite reikšmę. |
| Formulė baigiasi per anksti. | Pavyzdžiui `L *`: užbaikite ją. |
| Netikėta „…“. Ar trūksta operatoriaus? | Dvi reikšmės šalia, pavyzdžiui `2L`: rašykite `2 * L`. |
| ceil() priima 1 reikšmę. | Funkcijai duokite teisingą reikšmių skaičių. |
| round(x, digits) reikia sveikų skaitmenų nuo 0 iki 10. | Naudokite sveiką dešimtainių skaitmenų skaičių. |
| Formulė dalija iš nulio. | Dažniausiai H yra 0: nustatykite elemento aukštį ar gylį. |
| Formulė neduoda skaičiaus. | Rezultatas per didelis, kad būtų skaičius. |
| Ši formulė per ilga (ne daugiau kaip 500 simbolių). | Sutrumpinkite ją. |

## Saugi pagal konstrukciją

Formulė gali atlikti tik aritmetiką su aukščiau nurodytais kintamaisiais ir funkcijomis. Ji negali vykdyti kodo ar skaityti bet ko kito, todėl formulė projekto faile, kurį kas nors jums atsiunčia, yra nekenksminga.
