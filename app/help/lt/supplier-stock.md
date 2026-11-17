---
title: Tikrinti tiekėjo atsargas ir pristatymo terminus
summary: Pridėkite tiekėjo atsargų sąrašą (CSV ar skaičiuoklės failą), o TakeoffCraft patikrina, ko reikia kiekių skaičiavimui, įskaitant atliekas: ar pakanka sandėlyje ir kiek tenka laukti. Trūkumai ir ilgi laukimai rodomi Problemų skydelyje.
keywords: tiekėjas, atsargos, yra sandėlyje, pristatymo laikas, prieinamumas, trūkumas, užsakyta iš naujo, užsakymų sąrašas, csv, sku, pardavėjas, medžiagos, tiekimas, problemos
from: f11160fb
---

{{ui:Tiekimas}} įrankių juostoje (sunkvežimis) patikrina, ko reikia jūsų kiekių skaičiavimui, pagal tiekėjo atsargų sąrašą. Svarbios tiekėjo eilutės saugomos paties kiekių skaičiavimo faile. Niekas niekur nesiunčiama ir niekas nesikreipia į tiekėją: failą pateikiate jūs.

## Failas

CSV failas su antraštės eilute. Reikia pavadinimo ar SKU stulpelio ir atsargų ar pristatymo laiko stulpelio. Atpažįstamos šios antraštės (bet kokia tvarka ir bet kokia raidžių dydžio forma): Item, Name, Description arba Product; SKU, Part arba Item #; In stock, On hand, Available arba Quantity; Lead time arba Delivery days; Unit arba UOM; Price arba Cost; Supplier arba Vendor.

- Atsargos gali būti skaičius (1,200), „In stock“ arba „Out of stock“.
- Pristatymo laikas gali būti „5 days“, „2 weeks“, „2-3 weeks“ (naudojamas ilgesnis), „3 months“, „same day“ arba „backorder“. Paprastas skaičius yra antraštės vienete (dienomis, nebent antraštėje nurodytos savaitės ar mėnesiai).
- Excel failai nenuskaitomi: pirmiausia įrašykite lapą kaip CSV.

## Patikrinkite kiekių skaičiavimą

1. Pasirinkite {{ui:Tiekimas}}, tada {{ui:Pridėti tiekėjo failą…}} ir pasirinkite CSV. Galite pridėti daugiau nei vieną: iki penkių failų, iš viso išsaugoma 2,000 eilučių, pirmiausia tos, kurios atitinka jūsų pozicijas.
2. Kiekvieną poziciją, antrąją sąlygą ir surinkimo dalį su kiekiu suderina su eilute pagal pavadinimą arba pagal SKU pavadinime. Panašus pavadinimas (vienas įeina į kitą) naudojamas, kai tikslaus nėra, ir apie tai pranešama.
3. Skiltyje {{ui:Ko reikia kiekių skaičiavimui}} pirmiausia rodomos trūkstamos: „Trūksta 120 EA“, „Pristatymo laikas 21 diena“, „Laukiama papildymo“, „Vienetas skiriasi“, „Nėra atsargų duomenų“ arba „Yra sandėlyje“. Poreikis įskaito atliekas. Tiekėjo vienetas, kuris nesutampa su sąmatos vienetu (pvz., tona prieš pėdą), pranešamas ir niekada nelyginamas. Kiekviena eilutė turi {{ui:Pasirinkti poziciją}}, kuris peršoka į poziciją.
4. Nustatykite {{ui:Ilgiausias norimas laukimas (dienos)}} (numatyta 14). Pozicija, kurios nėra sandėlyje ir kurios laukimas ilgesnis, pažymima, o santraukoje nurodomas svarbiausias ilgiausias laukimas.
5. {{ui:Užsakymų sąrašas (CSV)}} atsisiunčia trūkstamas pozicijas su trūkstamu kiekiu, tiekėju ir pristatymo laiku. {{ui:Neįtraukti}} pašalina poreikį iš patikrinimo (tai yra anuliavimo žingsnis).

## Skaičiuoklių failai ir kainų biblioteka

Tiekėjo sąrašas gali būti Excel darbaknygė (.xlsx), kaip ir CSV: skaitomas pirmas lapas su tais pačiais stulpelių pavadinimais. Formulės niekada neskaičiuojamos; skaitoma tai, ką failas jau saugo.

Kai pridėtas failas su kainomis, dialogo lange {{ui:Kainos į biblioteką}} nustato kiekvieno [bibliotekos](topic:price-library) įrašo medžiagos kainą, kurią failas nurodo: tas pats pavadinimas ir tas pats vienetas (arba nenurodytas). Darbo sąnaudos, atliekos, aukštis ir surinkimai lieka tokie, kokie buvo, o įrašo pastaboje nurodoma, iš kurio failo kaina paimta. Įrašas metrais nekainuojamas pagal sąrašą pėdomis, o įrašas be atitinkamo pavadinimo paliekamas nepakeistas; būsenos eilutėje nurodoma, kiek praleista dėl vieneto. Perkainokite iš bibliotekos, kad naujos kainos patektų į šį kiekių skaičiavimą.

## Problemų skydelyje

Trūkumas yra įspėjimas, o ilgas laukimas – pastaba, bendrame Problemų skydelyje („Tiekėjo atsargos“), kartu su visais kitais patikrinimais. Galite patvirtinti vieną su priežastimi, ir patvirtinimas išsaugomas kiekių skaičiavimo faile.

## Su jūsų asistentu

Jei Parametrai leidžiate asistentus, jie gali peržiūrėti patikrinimą (supply_check). Tiekėjo failo pridėjimas lieka jūsų pačių reikalas.

## Verta žinoti

Atsargų duomenys yra tiek šviežesni, kiek šviežias jūsų pridėtas failas. Norėdami jį atnaujinti, pridėkite failą iš naujo: failas tuo pačiu pavadinimu pakeičia ankstesnį.
