---
title: Ručno brojanje
summary: Kliknite svaka vrata, uređaj ili instalaciju da ih prebrojite, provjerite brojanje i ispravite pogreške.
keywords: brojanje, svaki, ea, instalacije, vrata, uređaji, simboli, zbrajanje, brojanje klikom, ručno brojanje
from: 594f2980
---

Stavka za brojanje broji stvari: vrata, svjetiljke, utičnice, sanitarne instalacije. Svaki klik na listu dodaje jednu oznaku za brojanje. Brojanje ne treba mjerilo.

## Brojanje

1. Napravite ili kliknite stavku za brojanje pod {{ui:Stavke}} (vrsta {{ui:Broji}}).
2. Odaberite {{ui:Broji}} na alatnoj traci ili pritisnite {{key:C}}.
3. Kliknite svaki na listu.
   Svaki klik stavlja točku u boji stavke, a brojanje stavke povećava se za jedan.
4. Pređite na sljedeći list ({{key:PageDown}}) i nastavite brojati. Alat ostaje na {{ui:Broji}}.
5. Pritisnite {{key:Esc}} kad završite. TakeoffCraft se vraća na {{ui:Odaberi}}.

I dalje povlačenjem pomičete prikaz, a kotačićem zumirate dok brojite, pa se možete kretati po listu bez dodavanja točaka.

:::tip
Kliknite stavku za brojanje da istaknete njezine točke na svakom listu. Popis listova tada pokazuje koliko ih je na svakom listu, što pomaže pronaći listove koje još niste prebrojili.
:::

## Ispravak brojanja

- **Uklanjanje točke**: odaberite {{ui:Odaberi}} ({{key:V}}), kliknite točku i pritisnite {{key:Delete}} ili odaberite {{ui:Izbriši oznaku}}. Ili pritisnite {{key:Mod+Z}} odmah nakon pogrešnog klika.
- **Pomicanje točke**: odaberite je, pa je povucite.
- **Brojano pod pogrešnom stavkom**: odaberite točku i u popisu **Stavka** pod **Odabrana oznaka** odaberite ispravnu stavku za brojanje.

## Veličina točke, na zaslonu i u PDF-u

Točke zadržavaju jednu veličinu na zaslonu bez obzira koliko zumirali. Da je promijenite, otvorite {{ui:Postavke}}, karticu TakeoffCraft, i odaberite **Veličina oznake brojanja**: Vrlo mala, Mala, Srednja (zadano) ili Velika.

Izvoz u PDF ({{ui:Izvoz}} › označeni PDF) crta svaku točku na papiru jednake veličine, bez obzira na veličinu lista: preglednik koji prikazuje PDF na 100 % prikazuje točke jednako velike kao na zaslonu. Ako bi se točke na listu i dalje dodirivale, izvoz smanjuje točke tog lista da se svaka može pročitati.

## Mnogo jednakih simbola

Za simbol koji se na listu ponavlja mnogo puta, probajte [Autobrojanje](topic:auto-count): označite jedan, pregledajte što je pronašao i dodajte ih sve u jednom koraku.

## Korištenje brojanja u formulama

Količina stavke za brojanje je **N**. Komponente sklopa je mogu koristiti, primjerice šarke `N * 3` za vrata. Pogledajte [Sklopovi i formule](topic:assemblies).
