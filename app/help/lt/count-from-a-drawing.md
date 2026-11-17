---
title: Skaičiuoti iš brėžinio
summary: Skaičiuokite blokus, objektus sluoksnyje arba tekstą tiesiai iš DWG ar DXF: tiksliai, su įdėtaisiais blokais, dinaminių blokų variantais ir blokų masyvais, viename anuliavimo žingsnyje.
keywords: skaičiuoti iš brėžinio, CAD skaičiavimas, blokų skaičiavimas, skaičiuoti blokus, įterpimas, blokų pavadinimas, įdėtieji blokai, dinaminis blokas, variantas, MINSERT, masyvas, sluoksnis, objekto tipas, apskritimai, tekstas, atributas, žymė, paslėpti sluoksniai, tikslus skaičius, kaip, durys, įrenginiai
from: 5060e24e
---

{{ui:Brėžinio skaičiavimas}} lapo juostoje (komanda **Skaičiuoti iš brėžinio** kituose meniu stiliuose) suskaičiuoja tai, ką DWG arba DXF nurodo esant. Ten, kur {{ui:Automatinis skaičiavimas}} ieško simbolio paveikslėlio ir gali kažko praleisti arba rasti klaidingą, šis įrankis skaičiuoja objektus: kiekvienas bloko `DOOR-36` įterpimas yra viena durys. Pirmiausia atverkite brėžinį: [Atverti DWG arba DXF brėžinį](topic:open-a-drawing).

## Skaičiuoti bloką

1. Atverkite brėžinio lapą. {{ui:Brėžinio skaičiavimas}} yra lapo juostoje.
2. Pasirinkite jį. Lange išvardyti blokai ir kiek kiekvieno yra. Ieškokite pagal pavadinimą, tada pasirinkite vieną.
3. Pažiūrėkite eilutę po sąrašu: „22 rasta, 22 pridėti.“
4. Skiltyje {{ui:Pridėti prie}} pasirinkite skaičiavimo poziciją arba palikite {{ui:Naujo skaičiavimo elemento}} ir jam suteikite pavadinimą.
5. Pasirinkite pridėjimo mygtuką, kuriame nurodytas skaičius: {{ui:Pridėti 22 žymas}}. Žymos atsiranda ties bloko įterpimo taškais, o pozicijos kiekis yra skaičius.

Tai vienas anuliavimo žingsnis: {{key:Mod+Z}} pašalina žymas (ir naują poziciją) kartu. Sąmata, skaičiuoklė ir pažymėtas PDF su pozicija elgiasi kaip su bet kuria kita skaičiavimo pozicija.

### Kas skaičiuojama

- **Kiekvienas bloko pavadinimo įterpimas**, nepriklausomai nuo mastelio ir kampo, modelio erdvėje arba popieriaus erdvėje. Blokų pavadinimai nepriklauso nuo didžiųjų ir mažųjų raidžių.
- **Blokų masyvai** (MINSERT): kiekviena masyvo kopija yra viena.
- **Įdėtieji blokai.** Bloką, įdėtą į kitą bloką, skaičiuojama kiekviename gylyje. Sąraše rašoma „6 kituose blokuose“; nuimkite {{ui:Skaičiuoti blokus kitų blokų viduje}}, kad būtų skaičiuojami tik įterpimai, padėti tiesiai brėžinyje.
- **Dinaminiai blokai.** Dinaminis blokas skaičiuojamas pagal savo pavadinimą, o ne pagal anonimines kopijas (`*U12`), kurias failas saugo. Jo būsenos išvardytos atskirai („Vienas 12, Dvigubas 4“): pasirinkite vieną būseną, kad būtų skaičiuojamos tik jos, arba {{ui:Visi variantai}}. Kai faile nenurodyta, kokią būseną rodo kopija, jos išvardijamos kaip „(būsena nežinoma)“.
- **Sluoksnio filtras.** Blokas keliuose sluoksniuose: pasirinkite vieną skiltyje {{ui:Sluoksnyje}}.

### Ko neskaičiuojama

- **Paslėpti sluoksniai.** Objektas sluoksnyje, kuris faile išjungtas arba užšaldytas (arba kurį paslėpėte {{ui:Sluoksniai}} skiltyje), praleidžiamas, o eilutėje nurodoma, kiek: „3 paslėpti sluoksniai praleisti“. Pažymėkite {{ui:Skaičiuoti ir juos}}, kad įtrauktumėte.
- **Susieti brėžiniai, kurie neatverti**, neskaičiuojami; lange tai nurodoma.
- **Objektai, sudėti tiksliai ant kito tokio pat tipo objekto**, skaičiuojami kaip du (nes tai du objektai), ir langas apie tai praneša: dažniausiai tai braižymo klaida, verta pažiūrėti.

## Ką rodo šis lapas, ar visas brėžinys

- **Ką rodo šis lapas** skaičiuoja objektus, kuriuos rodo lapas: maketo atveju – modelio objektus jo vaizdo languose (sluoksnis, užšaldytas vaizdo lange, ten neskaičiuojamas), plius paties maketo objektus.
- **Visas brėžinys, kiekvienas objektas vieną kartą** skaičiuoja modelio erdvę vieną kartą, su žymomis lape „Modelis“, ir neskaičiuoja to, ką keli maketai rodo dar kartą.

Skaičiuojant tai, ką rodo maketas, ir tai, ką rodo Modelis, tiems patiems objektams gaunamas tas pats skaičius; nedėkite abiejų į vieną poziciją.

## Skaičiuoti dar kartą

Tą patį bloką skaičiuojant dar kartą su ta pačia pozicija pridedama tik tai, kas nauja: „22 jau suskaičiuota.“ Kiekviena žyma atitinka vieną objektą.

## Pagal sluoksnį ir tipą

Pasirinkite {{ui:Pagal sluoksnį ir tipą}}, pasirinkite sluoksnį ir objekto tipą (apskritimai, polilinijos, brūkšniuotės…): „visi apskritimai sluoksnyje E-LITE“. Pažymėkite {{ui:Skaičiuoti ir objektus blokų viduje}}, kad būtų įtraukti ir tie, kurie yra blokų apibrėžimuose, kiekvienoje vietoje, kur blokas įterptas.

## Pagal tekstą

Pasirinkite {{ui:Pagal tekstą}} ir įveskite tekstą, pavyzdžiui `A3`, bei nurodykite, ar jis turi būti tikslus, ar tik jį turėti, ar būti atskiru žodžiu. Tekstiniai objektai, daugialypės nuorodos tekstas ir blokų **atributų reikšmės** visi skaičiuojami (žymos atributas `ITEM = A3` randamas); pasirinkite {{ui:Atribute}}, kad skaičiuotumėte tik vieną atributą. Dažniausi tekstai išvardijami spustelėjimui.

## Kada naudoti Automatinis skaičiavimas

Naudokite {{ui:Automatinis skaičiavimas}} PDF failams ir simboliams brėžinyje, kurie nėra blokai (nubraižyti laisvai arba išskaidyti). Jei nubraižyti kaip blokai, skaičiuokite čia.
