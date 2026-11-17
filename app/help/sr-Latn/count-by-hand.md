---
title: Prebrojte ručno
summary: Kliknite svaka vrata, armaturu ili uređaj da ga prebrojite, proverite brojanja i ispravite greške.
keywords: brojanje, svaki, ea, armature, vrata, uređaji, simboli, zbrajanje, brojanje klikom, ručno brojanje
from: 594f2980
---

Stavka brojanja broji stvari: vrata, svetiljke, utičnice, vodovodne armature. Svaki klik na listu dodaje jednu oznaku brojanja. Brojanje ne traži razmeru.

## Brojanje

1. Napravite ili kliknite stavku brojanja pod {{ui:Stavke}} (tip {{ui:Prebroj}}).
2. Izaberite {{ui:Prebroj}} na traci alata ili pritisnite {{key:C}}.
3. Kliknite svaki na listu.
   Svaki klik stavlja tačku u boji stavke, a brojanje stavke se povećava za jedan.
4. Idite na sledeći list ({{key:PageDown}}) i nastavite da brojite. Alat ostaje na {{ui:Prebroj}}.
5. Pritisnite {{key:Esc}} kada završite. TakeoffCraft se vraća na {{ui:Izaberi}}.

Prevlačenje i dalje pomera pogled, a točkić zumira dok brojite, pa se možete kretati po listu bez dodavanja tačaka.

:::tip
Kliknite stavku brojanja da istaknete njene tačke na svim listovima. Spisak listova tada pokazuje koliko ih je na svakom, što pomaže da nađete listove koje još niste prebrojali.
:::

## Ispravite brojanje

- **Uklonite tačku**: izaberite {{ui:Izaberi}} ({{key:V}}), kliknite tačku i pritisnite {{key:Delete}} ili izaberite {{ui:Obriši oznaku}}. Ili pritisnite {{key:Mod+Z}} odmah posle pogrešnog klika.
- **Pomerite tačku**: izaberite je, pa je prevucite.
- **Prebrojano pod pogrešnom stavkom**: izaberite tačku i izaberite pravu stavku brojanja u listi **Stavka** pod **Izabrana oznaka**.

## Veličina tačke, na ekranu i u PDF-u

Tačke zadržavaju istu veličinu na ekranu bez obzira koliko zumirate. Da je promenite, otvorite {{ui:Podešavanja}}, tab TakeoffCraft, i izaberite **Veličina oznake brojanja**: Ekstra mala, Mala, Srednja (podrazumevana) ili Velika.

Izvoz u PDF ({{ui:Izvezi}} › PDF sa oznakama) crta svaku tačku iste veličine na papiru, bez obzira na veličinu lista: pregledač koji prikazuje PDF na 100% prikazuje tačke onoliko velike koliko su na ekranu. Ako bi se tačke na listu inače dodirivale, izvoz za taj list smanjuje tačke da bi svaka mogla da se pročita.

## Mnogo identičnih simbola

Za simbol koji se ponavlja mnogo puta na listu, probajte [Automatsko brojanje](topic:auto-count): obuhvatite jedan, pregledajte šta nalazi i dodajte sve u jednom koraku.

## Korišćenje brojanja u formulama

Količina stavke brojanja je **N**. Komponente sklopa je mogu koristiti, na primer šarke `N * 3` za vrata. Pogledajte [Sklopovi i formule](topic:assemblies).
