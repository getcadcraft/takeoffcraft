---
title: Izdevumi, revīzijas un rasējumu izmaiņu žurnāls
summary: Uzturiet vienu izdevumu vēsturi kopā ar arhitekta modeli: ielasiet izdevumus, reģistrējiet objekta norādījumus, darbnīcas rasējumus un saistītos modeļus pret izdevumu un lasiet rasējumu izmaiņu žurnālu.
keywords: izdevums, revīzija, revīzijas, izmaiņu žurnāls, rasējumu izmaiņu žurnāls, rasējumu reģistrs, objekta norādījums, darbnīcas rasējums, saistītais modelis, iepirkums, būvniecība, izdevumu vēsture, daudzumu specifikācija, apjomu aprēķins
from: 8d8f6e68
---

## Ko jūs darīsiet

Strādājiet ar to pašu izdevumu vēsturi, kas ir pārējai komandai. Redziet, kuras lapas tika izsūtītas kurā revīzijā, un pierakstiet, kas notiek objektā, pie izdevuma, kuram tas pieder.

## Soļi

1. Atveriet **Izdevumi un revīzijas**.
2. Izvēlieties **Nolasīt izdevumu vēsturi** un izvēlieties `.issues.json` failu, kas saglabāts no BimCraft vai citas lietotnes. Tā izdevumi un ieraksti tiek pievienoti jūsu vēsturei. Nekas netiek aizstāts.
3. Izvēlieties **Pievienot ierakstu** objekta norādījumam, darbnīcas rasējumam, atzīmju kopai, saistītajam modelim vai piezīmei. Izvēlieties izdevumu, pret kuru tas attiecas, un tā statusu. Izvēlētais fails tiek ierakstīts pēc tā nosaukuma, izmēra un SHA-256; fails paliek tur, kur atrodas.
4. **Rasējumu izmaiņu žurnāls** rāda vienu rindu katrai lapai un vienu kolonnu katram izdevumam. Revīzija iekavās ir izdota atkārtoti bez izmaiņām.
5. **Lejupielādēt izmaiņu žurnālu (CSV)** saglabā izdevumus, lapu tabulu un ierakstus. **Saglabāt izdevumu vēsturi** ieraksta failu, ko lasa citas lietotnes.

## Noderīga informācija

- **Reģistrēt izdevumu** izdod jūsu izmērītās lapas, piemēram, ar daudzumu specifikāciju. **Izmaiņas kopš** tad parāda, kuras lapas tika izmērītas atkārtoti pēc šī izdevuma.
- Vēsture tiek saglabāta apjomu aprēķina failā. Katra izmaiņa ir viens solis **atsaukšanai**.
- Vienas un tās pašas faila nolasīšana divreiz neko nepievieno divreiz. Ja divās kopijās ir viens un tas pats ieraksts, tiek paturēts jaunākais.
