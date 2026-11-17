---
title: Pasiūlymo suvestinė ir pasiūlymas
summary: Pridėkite darbo sąnaudų priedus, pardavimo mokestį, bendrąsias išlaidas, pelną ir garantiją prie sąmatos, surašykite įtraukimus ir išimtis bei atsisiųskite pasiūlymo PDF siuntimui.
keywords: pasiūlymas, darbo sąnaudų priedai, priedai, darbo užmokestis, išmokos, komercinis pasiūlymas, kaina, bendrosios išlaidos, pelnas, antkainis, marža, pardavimo mokestis, garantija, įtraukimai, išimtys, sąlygos, parašas, klientas
from: 3208a561
---

Sąmata įkainoja tai, ką išmatavote. **Pasiūlymo suvestinė** paverčia ją kaina: prideda pardavimo mokestį, bendrąsias išlaidas, pelną ir garantiją, ir sukuria **pasiūlymo PDF** su jūsų įtraukimais ir išimtimis.

Atidarykite iš {{ui:Export}} › {{ui:Bid summary & proposal…}}. Viskas jame išsaugoma kartu su kiekių skaičiavimu, o kiekvieną pakeitimą galima atšaukti.

## Antkainiai

Įveskite procentą bet kuriame iš penkių (kitus palikite 0). Jie skaičiuojami tokia tvarka, kiekvienas nuo to, kas virš jo:

| Eilutė | Skaičiuojama kaip |
|---|---|
| Medžiaga, darbas | Sąmatos sumos (bazinė kaina, kai kiekių skaičiavime yra [alternatyvos](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Darbo sąnaudų priedas | Priedo % × darbas: darbo užmokesčio mokesčiai, draudimas ir išmokos jūsų brigadų atlyginimams. |
| **Savikaina** | Medžiaga + darbas + darbo sąnaudų priedas. |
| Pardavimo mokestis nuo medžiagos | Mokesčio % × medžiaga. |
| Bendrosios išlaidos | Bendrųjų išlaidų % × (savikaina + mokestis). |
| Pelnas | Pelno % × (savikaina + mokestis + bendrosios išlaidos). |
| Garantija | Garantijos % × viskas, kas aukščiau. |
| **Pasiūlymas** | Visų eilučių suma. |

Kiekviena eilutė suapvalinama iki cento. Darbaknygėje tos pačios eilutės rodomos po lapo Estimate bendra suma su gyvomis formulėmis. Suvestinė atsinaujina jums rašant: {{key:Enter}} patvirtina procentą. Kiekviena alternatyva rodoma su tais pačiais antkainiais nuo savo savikainos, todėl savininkas mato, ką iš tikrųjų pakeičia jos įtraukimas ar išbraukimas.

## Pasiūlymas

Įrašykite, ką turi sakyti pasiūlymas:

- **Project** (kiekių skaičiavimo pavadinimas, jei tuščia), **To** (klientas) ir **From** (jūsų įmonė).
- **Inclusions** ir **Exclusions**: po vieną eilutėje; pradžioje brūkšnys ar taškas yra leistini.
- **Terms**: laisvas tekstas, pavyzdžiui „Galioja 30 dienų.“
- **List the items and quantities**: aprašas pozicija po pozicijos su kiekiais, be kainų. Išjunkite, jei pasiūlymas yra fiksuota suma.

Pasirinkite {{ui:Proposal PDF}}. PDF (`<takeoff> - proposal.pdf`) turi datą, kainų bloką su kiekvienu antkainiu ir pasiūlymo suma, alternatyvas, aprašą, įtraukimus ir išimtis, sąlygas bei eilutes pasirašymui ir datai. Jei kai kurių kiekių nepavyko išmatuoti (lapas be mastelio), tai nurodoma po kaina.

## Eksporte

Kai kiekių skaičiavimas turi pasiūlymo suvestinę, CSV baigiasi ja, o darbaknygėje atsiranda lapas **Bid summary** su kiekviena eilute, jos procentu ir suma. Žr. [Eksportuoti sąmatą](topic:export-estimate).
