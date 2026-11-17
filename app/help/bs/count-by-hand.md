---
title: Brojanje ručno
summary: Kliknite svaka vrata, armaturu ili uređaj da ga prebrojite, provjerite brojanja i ispravite greške.
keywords: brojanje, svaki, ea, armature, vrata, uređaji, simboli, zbrajanje, brojanje klikom, ručno brojanje
from: 594f2980
---

Stavka brojanja broji stvari: vrata, svjetiljke, utičnice, sanitarne armature. Svaki klik na list dodaje jednu oznaku brojanja. Brojanje ne treba razmjeru.

## Brojanje

1. Napravite ili kliknite stavku brojanja pod {{ui:Stavke}} (tip {{ui:Brojanje}}).
2. Odaberite {{ui:Brojanje}} na traci alata ili pritisnite {{key:C}}.
3. Kliknite svaku na listu.
   Svaki klik stavlja tačku u boji stavke, a brojka stavke se povećava za jedan.
4. Pređite na sljedeći list ({{key:PageDown}}) i nastavite brojati. Alat ostaje na {{ui:Brojanje}}.
5. Pritisnite {{key:Esc}} kad završite. TakeoffCraft se vraća na {{ui:Odaberi}}.

Prevlačenje i dalje pomjera pogled, a točkić zumira dok brojite, pa se možete kretati po listu bez dodavanja tačaka.

:::tip
Kliknite stavku brojanja da istaknete njene tačke na svakom listu. Lista listova tada pokazuje koliko ih ima na svakom listu, što pomaže da nađete listove koje još niste prebrojali.
:::

## Ispravite brojanje

- **Uklonite tačku**: odaberite {{ui:Odaberi}} ({{key:V}}), kliknite tačku i pritisnite {{key:Delete}} ili odaberite {{ui:Izbriši oznaku}}. Ili pritisnite {{key:Mod+Z}} odmah nakon pogrešnog klika.
- **Pomjerite tačku**: odaberite je, pa je prevucite.
- **Prebrojano pod pogrešnom stavkom**: odaberite tačku i izaberite ispravnu stavku brojanja na listi **Stavka** pod **Odabrana oznaka**.

## Veličina tačke, na ekranu i u PDF-u

Tačke zadržavaju istu veličinu na ekranu koliko god zumirali. Da je promijenite, otvorite {{ui:Postavke}}, tab TakeoffCraft, i odaberite **Veličina oznake brojanja**: Vrlo mala, Mala, Srednja (podrazumijevano) ili Velika.

Izvoz u PDF ({{ui:Izvoz}} › označeni PDF) crta svaku tačku iste veličine na papiru, bez obzira na veličinu lista: preglednik koji prikazuje PDF na 100% prikazuje tačke onoliko velike koliko su na ekranu. Ako bi se tačke na listu i dalje dodirivale, izvoz pravi tačke na tom listu manjim da bi se svaka mogla pročitati.

## Mnogo jednakih simbola

Za simbol koji se ponavlja mnogo puta na listu, probajte [Auto brojanje](topic:auto-count): obuhvatite jedan, pregledajte šta je pronašao i dodajte sve odjednom.

## Korištenje brojanja u formulama

Količina stavke brojanja je **N**. Komponente sklopa je mogu koristiti, na primjer šarke `N * 3` za vrata. Vidi [Sklopovi i formule](topic:assemblies).
