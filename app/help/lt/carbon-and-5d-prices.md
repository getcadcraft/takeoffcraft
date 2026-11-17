---
title: Įkūnytoji anglis ir 5D kainų lentelė
summary: Anglis sudeda kiekių skaičiavimo įkūnytąją anglį pagal kiekvienos pozicijos kiekį ir atvirą koeficientų lentelę, o kiekių skaičiavimo normas siunčia į BimCraft kaip kainų lentelę 5D sąnaudoms.
keywords: anglis, įkūnytoji anglis, kgCO2e, CO2, koeficientai, A1-A3, transportas, atliekos, 5D, kainų lentelė, kaina, BimCraft, EPD
from: f4bff3b8
---

{{ui:Carbon}} įrankių juostoje sudeda išmatuoto kiekio įkūnytąją anglį ir paverčia jūsų normas kainų lentele, kurią gali naudoti statinio modelis. Tai įvertinimas, ne vertinimas.

## Įkūnytoji anglis

Kiekvienos pozicijos kiekis su atliekomis dauginamas iš koeficientų lentelės eilutės. Eilutė parenkama pagal pozicijos pavadinimo žodžius („betono plokštė“ randa eilutę su raktiniu žodžiu concrete). Lentelė ta pati atvira lentelė, kurią naudoja BimCraft, todėl čia įkeltas failas veikia ir ten. **Programos pateiktos eilutės yra pradinės reikšmės: bendros, nepatikrintos ir ne iš jokios duomenų bazės.** Dialogas tai nurodo šalia skaičių; prieš pasikliaudami skaičiumi, pakeiskite jas savo šaltiniu.

1. Pasirinkite {{ui:Carbon}}. Įskaičiuotos pozicijos išvardytos su kilogramais CO2e; bendra suma yra viršuje.
2. Pažymėkite {{ui:A4 transport}} arba {{ui:A5 site waste}}, kad įskaičiuotumėte ir tuos etapus, eilutėms, kurios tam pateikia reikšmę. Gaminio etapas visada įskaičiuojamas.
3. Norėdami naudoti kitą eilutę pozicijai arba jokios, naudokite sąrašą jos eilutėje.
4. {{ui:Factors from a file…}} įkelia koeficientų lentelę (JSON arba CSV), sudarytą iš jūsų šaltinio; jos eilutės pakeičia pradines eilutes su tuo pačiu id. {{ui:Factors (JSON)}} įrašo jūsų.

Koeficientas yra vienam metrui, kvadratiniam metrui, kubiniam metrui, vienetui ar kilogramui. Eilutė, išmatuota pėdomis ar kvadratinėmis pėdomis, konvertuojama. Kilogramų koeficientui reikalingas tūris (kubiniai jardai ar metrai) ir eilutės tankis. Pozicija, kurios koeficientui reikia kiekio, kurio ji nemato, išvardijama po {{ui:Left out}} su priežastimi ir niekada neįvertinama spėjimu. Bėgamoji suma būsenos juostoje rodo tą patį skaičių.

Jūsų koeficientų eilutės, jūsų pasirinkimai ir įskaičiuoti etapai išsaugomi kiekių skaičiavimo faile.

## Kainų lentelė 5D sąnaudoms

{{ui:5D prices (JSON)}} ir {{ui:5D prices (CSV)}} įrašo kiekių skaičiavimo normas kaip kainų lentelę: viena eilutė kiekvienai įkainotai pozicijai su jos medžiagos ir darbo norma vienetui bei atliekomis. Įkelkite ją BimCraft sąnaudų skydelyje (Embodied carbon and 5D cost), kad statinio modelio užduotys būtų įkainotos tomis pačiomis normomis, kurios sudarė pasiūlymą. Pozicijos, išmatuotos vienetu, kurio lentelė neturi, ir pozicijos be normos, praleidžiamos.

## Su jūsų asistentu

Jei skiltyje {{ui:Settings}} leidžiate asistentus, jie gali perskaityti anglį (carbon_check). Koeficientų įkėlimą atliekate patys.

## Verta žinoti

Niekur nieko nesiunčiama. Skaičiai yra tiek geri, kiek geri įkelti koeficientai.
