---
title: Failai, kuriuos TakeoffCraft atidaro ir įrašo
summary: PDF failai įeina, kiekių skaičiavimo projekto failas, skaičiuoklės ir pažymėti PDF išeina – ką kiekvienas turi, kur patenka ir kas keičiasi prisijungus, neprisijungus ir skirtingose naršyklėse.
keywords: failai, formatai, pdf, takeoff.json, projekto failas, xlsx, csv, pažymėtas pdf, atsisiuntimas, įrašymas, atidarymas, neprisijungus
from: 1bf9be65
---

## Ką atidaro

| Failas | Kaip | Pastabos |
|---|---|---|
| PDF (`.pdf`) | {{ui:Atidaryti planus}}, {{key:Mod+O}} arba nuvilkti į puslapį | Keli iš karto. Kiekvienas puslapis tampa lapu. |
| Kiekių skaičiavimo projektas (`.takeoff.json`) | {{ui:Atidaryti kiekius}} arba nuvilkti į puslapį | Jūsų pozicijos, mastelių ir žymės. Galite jį nuvilkti kartu su jo PDF. |

Kiti failai, nuvilkti į puslapį, praleidžiami, o būsenos juosta nurodo, kurie tai yra.

- **PDF su slaptažodžiu** neatidaromi: „Apsaugota slaptažodžiu: (name). Atidarykite neapsaugotą kopiją.“
- **Tas pats PDF du kartus** atidaromas vieną kartą: „Jau atidaryta: (name).“ TakeoffCraft failus atpažįsta pagal turinį, o ne pagal pavadinimus.
- **Skenuoti PDF** atidaromi ir matuojami kaip bet kurie kiti; TakeoffCraft nereikia teksto PDF faile.
- **Dideli planų rinkiniai**: kiekvienas PDF atidarant nuskaitomas visas (kad jį būtų galima atpažinti pagal turinį), todėl labai didelis failas atsidaro šiek tiek ilgiau. Miniatiūros piešiamos po vieną, kai slenkate.

## Ką įrašo

Kiekvienas įrašymas yra atsisiuntimas. Į jūsų PDF niekas neįrašoma atgal.

| Jūs pasirenkate | Gaunate | Kas jame yra |
|---|---|---|
| {{ui:Įrašyti kiekius}} | `(name).takeoff.json` | Pozicijos, surinkimai, įkainiai, kiekvieno lapo mastelis ir kiekviena žymė, susieta su kiekvienu PDF pagal jo turinį. Jokių PDF puslapių. |
| {{ui:XLSX}} | `(name).xlsx` | Keturi darbalapiai: Sąmata (su gyvomis formulėmis), Pagal lapą, Žymės, Masteliai. |
| {{ui:CSV}} | `(name).csv` | Sąmata kaip paprastos reikšmės, po vieną eilutę kiekvienai pozicijai ir komponentui. |
| {{ui:Pažymėtas PDF}} | `(PDF name) (takeoff).pdf` | Kiekvieno atidaryto PDF, kuriame yra žymių, kopija su kiekių skaičiavimu, nubrėžtu ant puslapių, ir legenda. Vienas failas kiekvienam PDF. |

Failo pavadinimas paimamas iš pirmojo PDF, kurį atidarėte šiame kiekių skaičiavime. Pavadinimo keitimo lauko dar nėra: jei norite kitokio pavadinimo, pervardykite atsisiųstą failą.

Žr. [Eksportuoti sąmatą ir pažymėtą PDF](topic:export-estimate) ir [Eksporto stulpeliai](topic:export-columns).

## Kur patenka atsisiuntimai

Naršyklė juos įrašo ten, kur įrašo visus atsisiuntimus, paprastai aplanke Atsisiuntimai. Rasti jį galite programoje {{pick:mac=Finder|windows=Failų naršyklė|linux=jūsų failų tvarkyklė}}. Jei naršyklė nustatyta klausti, kur įrašyti kiekvieną failą, ji paklaus.

:::chromium
{{ui:Pažymėtas PDF}} su keliais pažymėtais PDF atsisiunčia kelis failus iš karto. Chrome ir Edge gali kartą paklausti, ar šiai svetainei leidžiama atsisiųsti kelis failus. Pasirinkite „Leisti“.
:::

:::safari
Safari įrašo į aplanką Atsisiuntimai, nebent pakeitėte atsisiuntimų vietą Safari nustatymuose, skirtuke Bendra.
:::

## Kodėl kiekių skaičiavimo projekto failas ir PDF yra atskiri

Failas `.takeoff.json` talpina tik jūsų kiekių skaičiavimą. Jis susiranda savo PDF pagal turinį (kiekvieno failo atspaudą), todėl:

- PDF pervadinimas ar perkėlimas nieko nekeičia.
- PDF, kurį pakeitė ar iš naujo įrašė kita programa, laikomas kitu failu, net jei pavadinimas tas pats.
- Žymės PDF, kurie nėra atidaryti, vis tiek skaičiuojamos į sumas.

Žr. [Įrašyti ir vėl atidaryti kiekių skaičiavimą](topic:save-and-reopen).

## Prisijungus ir neprisijungus

Jūsų PDF ir kiekių skaičiavimai niekada nepalieka jūsų kompiuterio nei prisijungus, nei neprisijungus. Ryšys reikalingas tik pačiai TakeoffCraft įkelti.

Norėdami dirbti be ryšio, pirmiausia išsaugokite programą, kol esate prisijungę:

1. Viršutinėje programos juostoje pasirinkite {{ui:Įrašyti neprisijungus}}.
   Mygtukas skaičiuoja: „Įrašoma 12 iš 40“, kol įrašo.
2. Palaukite, kol atsiras {{ui:Paruošta neprisijungus}}.

Įrašant TakeoffCraft naršyklėje išsaugoma programa, šis žinynas, PDF skaitytuvas, PDF rašytuvas, naudojamas {{ui:Pažymėtas PDF}}, ir automatinio skaičiavimo darbinis procesas – apie 6 MB. Kai atsiranda {{ui:Paruošta neprisijungus}}, veikia viskas be ryšio: PDF atidarymas, matavimas, {{ui:Automatinis skaičiavimas}}, {{ui:Įrašyti kiekius}}, {{ui:XLSX}}, {{ui:CSV}} ir {{ui:Pažymėtas PDF}}.

| Mygtukas rodo | Reiškia |
|---|---|
| {{ui:Įrašyti neprisijungus}} | Dar neįrašyta šioje naršyklėje. Pasirinkite, kad įrašytumėte. |
| Įrašoma (n) iš (m) | Įrašoma dabar. |
| {{ui:Paruošta neprisijungus}} | Įrašyta. Pasirinkite, kad galėtumėte {{ui:Įrašyti dar kartą (gauti naujausią versiją)}} arba {{ui:Pašalinti kopiją neprisijungus}}. |
| {{ui:Nepavyko įrašyti}} | Kai kurie failai neatsisiuntė. Patikrinkite ryšį ir pasirinkite dar kartą. |
| {{ui:Naudojimas neprisijungus negalimas}} | Šis naršyklės langas negali saugoti kopijos neprisijungus (privatūs langai ir kai kurie valdomi kompiuteriai tai blokuoja). |

Daugiau, įskaitant tai, kiek laiko išsaugota kopija išlieka kiekvienoje naršyklėje: [Darbas neprisijungus](common:offline).

:::offline
Esate neprisijungę. Jei viršutinėje juostoje rodoma {{ui:Paruošta neprisijungus}}, viskas veikia. Jei ne, dalys, kurių šis skirtukas dar nebuvo įkėlęs (PDF rašytuvas, skirtas {{ui:Pažymėtas PDF}}, automatinio skaičiavimo darbinis procesas), dabar įkelti negali, ir {{ui:Pažymėtas PDF}} sustoja su pranešimu „Pažymėto PDF nepavyko įrašyti“. Jūsų kiekių skaičiavimas abiem atvejais saugus: {{ui:Įrašyti kiekius}}, {{ui:XLSX}} ir {{ui:CSV}} ryšio nereikia. Kol vėl neprisijungsite, neperkraukite skirtuko.
:::

:::online
Esate prisijungę. Prieš apsilankymą objekte ar skrydį pasirinkite {{ui:Įrašyti neprisijungus}} ir palaukite, kol atsiras {{ui:Paruošta neprisijungus}}.
:::

## Skaičiuoklės

XLSX išlaiko gyvas formules, todėl skaičiuoklės programa, atidarydama failą, perskaičiuoja sąmatą ir ją išlaiko teisingą, kai ten pakeičiate įkainį ar atliekų koeficientą. Darbo knyga patikrinta LibreOffice Calc, kur kiekviena suma perskaičiuota iki to paties cento. Excel dar neatidaryta.

CSV yra paprastos reikšmės su baitų eiliškumo žymeklių, todėl skaičiuoklių programos teisingai nuskaito simbolius, pavyzdžiui, m².

## Darbalaukis ir debesis

:::desktop
Nuo 0.5 darbalaukio programa yra CadCraft Studio: TakeoffCraft ir kitos septynios programos viename diegime. Atskiro TakeoffCraft diegimo nėra.
:::

Debesies įrašymas dar nepasiekiamas. Laikykite savo `.takeoff.json` failus kartu su objekto PDF ir kurkite jų atsargines kopijas kaip ir bet kurio kito failo. Žr. [Kur keliauja jūsų failai](common:your-files).
