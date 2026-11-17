---
title: Piedāvājuma kopsavilkums un priekšlikums
summary: Pievienojiet darba slogu, pārdošanas nodokli, virsizdevumus, peļņu un galvojumu tāmei, uzrakstiet iekļautos un neiekļautos darbus un lejupielādējiet priekšlikuma PDF nosūtīšanai.
keywords: piedāvājums, darba slogs, slogs, algas, priekšlikums, virsizdevumi, peļņa, uzcenojums, rentabilitāte, pārdošanas nodoklis, galvojums, iekļautie darbi, neiekļautie darbi, noteikumi, paraksts, klients, cena
from: 3208a561
---

Tāme nosaka to, ko esat izmērījis. **Piedāvājuma kopsavilkums** pārvērš to cenā: tas pieskaita pārdošanas nodokli, virsizdevumus, peļņu un galvojumu, un izveido **priekšlikuma PDF** ar jūsu iekļautajiem un neiekļautajiem darbiem.

Atveriet to no {{ui:Export}} › {{ui:Bid summary & proposal…}}. Viss tajā tiek saglabāts kopā ar apjomu aprēķinu, un katru izmaiņu var atsaukt.

## Uzcenojumi

Ierakstiet procentu katrā no pieciem (pārējos atstājiet 0). Tie tiek aprēķināti šādā secībā, katrs no tā, kas ir augstāk:

| Rinda | Aprēķināts kā |
|---|---|
| Materiāls, Darbs | Tāmes kopsummas (bāzes piedāvājums, ja apjomu aprēķinam ir [alternatīvas](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Darba slogs | Slogs % × darbs: algas nodokļi, apdrošināšana un pabalsti jūsu brigāžu algām. |
| **Izmaksas** | Materiāls + darbs + darba slogs. |
| Pārdošanas nodoklis no materiāla | Nodokļa % × materiāls. |
| Virsizdevumi | Virsizdevumu % × (izmaksas + nodoklis). |
| Peļņa | Peļņas % × (izmaksas + nodoklis + virsizdevumi). |
| Galvojums | Galvojuma % × viss iepriekš minētais. |
| **Piedāvājums** | Rindu summa. |

Katra rinda tiek noapaļota līdz centam. Darbgrāmatā tās pašas rindas ir rādītas zem tāmes lapas kopsummas ar dzīvām formulām. Kopsavilkums atjaunojas, kamēr rakstāt: {{key:Enter}} pieņem procentu. Katra alternatīva ir parādīta ar tiem pašiem uzcenojumiem uz savām izmaksām, lai īpašnieks redz, ko tās izņemšana patiesībā maina.

## Priekšlikums

Aizpildiet, ko priekšlikumam jāsaka:

- **Projekts** (apjomu aprēķina nosaukums, ja tukšs), **Kam** (klients) un **No** (jūsu uzņēmums).
- **Iekļautie darbi** un **Neiekļautie darbi**: pa vienai rindai; sākumā domuzīme vai punkts ir pieņemams.
- **Noteikumi**: brīvs teksts, piemēram, "Derīgs 30 dienas."
- **Uzskaitīt vienumus un daudzumus**: apjoms, vienumu pa vienam, ar daudzumiem un bez cenām. Noņemiet atzīmi priekšlikumam ar vienu kopsummu.

Izvēlieties {{ui:Proposal PDF}}. PDF (`<takeoff> - proposal.pdf`) satur datumu, cenu bloku ar katru uzcenojumu un piedāvājumu, alternatīvas, apjomu, iekļautos un neiekļautos darbus, noteikumus un rindas parakstīšanai un datuma ierakstīšanai. Ja daži daudzumi nav varējuši tikt izmērīti (lapa bez mēroga), tas tiek norādīts zem cenas.

## Eksportos

Kad apjomu aprēķinam ir piedāvājuma kopsavilkums, CSV beidzas ar to, un darbgrāmatā ir lapa **Piedāvājuma kopsavilkums** ar katru rindu, tās procentu un summu. Skatiet [Tāmes eksportēšana](topic:export-estimate).
