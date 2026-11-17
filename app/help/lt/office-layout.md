---
title: "Biuro maketas: grupavimas, tarpinės sumos, pavadinimas ir antraštės pagal jūsų numatytąsias politikas"
summary: Įjunkite priedą Numatytosios politikos, ir sąmata, kiekiai pagal lapus, eksportai bei tai, ką skaito asistentas, bus išdėstyti pagal jūsų biuro žiniaraščio maketą – tą patį, kurį naudoja BimCraft žiniaraščiai.
keywords: biuro standartas, biuro maketas, numatytosios politikos, priedas, žiniaraščio maketas, grupuoti pagal tipą, grupuoti pagal lapą, tarpinė suma, sumos, pavadinimas, antraštės, didžiosios raidės, sąmatos maketas, eksporto maketas, parametrai
from: cfd2f30a
---

## Ką darysite

Priverskite TakeoffCraft išdėstyti lenteles taip, kaip jūsų biuras jas išduoda, nenustatydami to kiekviename kiekių skaičiavime. Maketas nustatomas vieną kartą, skiltyje **Numatytosios politikos**, ir galioja visoms šio kompiuterio programoms: ką nustatote BimCraft ar CadCraft, tą naudoja TakeoffCraft, ir atvirkščiai.

## Žingsniai

1. Atidarykite **Parametrai › Priedai** ir įjunkite **Numatytosios politikos**. Iki tol jis išjungtas; kai jis išjungtas arba nieko nenustatyta, TakeoffCraft veikia kaip anksčiau.
2. Atidarykite **Parametrai › Bendra › Numatytosios politikos** ir raskite **Žiniaraščio maketas (biuro standartas)**:

| Politika | Ką ji daro TakeoffCraft |
|---|---|
| Grupuoti žiniaraščius pagal | **Tipas** grupuoja sąmatą pagal pozicijos tipą (Linijinis, Plotas, Skaičius, Tipizuotas kiekis). **Lygis** grupuoja kiekius pagal lapą. **Patalpa** ir **Be grupavimo** palieka abu neįgrupuotus |
| Žiniaraščių sumos | **Tarpinė suma po kiekviena grupe ir bendra suma** prideda tarpinę sumą po kiekviena grupe. Bendra darbo suma visada lieka |
| Žiniaraščio pavadinimas | Eilutė virš lentelės, pavyzdžiui `{schedule}: biuro maketas` |
| Stulpelių antraštės | Kaip parašyta, DIDŽIOSIOMIS RAIDĖMIS arba Su Didžiosiomis Raidėmis |

3. Uždarykite Parametrus. Lentelės iškart atsinaujina.

## Kas taiko maketą

- **Kiekiai › Pagal poziciją** ir **Pagal lapą**: grupių antraštės, tarpinė suma po kiekviena grupe, pavadinimas ir antraščių rašmenų atvejis. Eilutė po pavadinimu nurodo, kokias dalis nustatė jūsų biuro standartas. Eilutės lieka tos pačios: vis dar įrašote įkainius ir atliekas jose ir spustelėjate skaičius, kad pažymėtumėte jų žymas. Komponentas ar antroji sąlyga lieka po savo pozicija.
- **Eksportuota sąmata** (CSV ir XLSX): tos pačios grupės ir tarpinės sumos. Darbaknygėje tarpinė suma yra `SUBTOTAL` formulė virš savo grupės, ir bendra suma taip pat yra formulė, todėl nieko nesuskaičiuojama dukart.
- **Ką skaito asistentas**: `takeoff_estimate` ir `takeoff_quantities` (pagal lapą) prideda `layout` bloką su grupėmis, eilutėmis ir tarpinėmis sumomis bei nurodo, kokias dalis nustatė biuras.

## Kas išlaiko savo

- **Kiekiai › Pagal sritį** nurodo savo grupavimą (pagal pasiūlymo sritį) ir jį išlaiko.
- **Bendra darbo suma**, pasiūlymo santraukos priedai ir alternatyvos nėra grupuojami iš naujo.
- Grupavimas, kuriam lentelėje nėra stulpelio, paliekamas: sąmatoje nėra lygio, o kiekiuose pagal lapus nėra tipo.

## Verta žinoti

- Politikos laikomos šioje naršyklėje visoms CadCraft programoms ir keliauja su Numatytųjų politikų failu (**Įrašyti į failą** / **Įkelti iš failo** toje pačioje vietoje), todėl biuras gali dalytis vienu failu.
- Sąmata, eksportuota kaip CSV su grupėmis, skirta skaitymui. Kad sąmatą vėl įkeltumėte kaip kainų biblioteką, eksportuokite ją be jokio grupavimo.
- BimCraft turi to paties standarto dalį: žiniaraščius, paruošimus ir eksportus. TakeoffCraft kol kas neturi savo politikų, todėl Parametrų skiltyje **Parametrai › TakeoffCraft** Numatytųjų politikų skilties nėra.
