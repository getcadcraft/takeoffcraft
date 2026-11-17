---
title: Probleme, revizii și jurnalul modificărilor desenului
summary: Păstrați un singur istoric al problemelor împreună cu modelul arhitectului: citiți problemele, înregistrați instrucțiunile de șantier, desenele de execuție și modelele legate față de o problemă și consultați jurnalul modificărilor desenului.
keywords: problemă, revizie, revizii, jurnal de modificări, jurnal al modificărilor desenului, registru de desene, instrucțiune de șantier, desen de execuție, model legat, licitație, execuție, istoric al problemelor, listă de cantități, antemăsurătoare
from: 8d8f6e68
---

## Ce veți face

Lucrați cu același istoric al problemelor ca restul echipei. Vedeți ce foi au fost emise la ce revizie și țineți evidența a ceea ce se întâmplă pe șantier față de problema căreia îi aparține.

## Pași

1. Deschideți **Probleme și revizii**.
2. Alegeți **Citire istoric de probleme** și selectați fișierul `.issues.json` salvat din BimCraft sau dintr-o altă aplicație. Problemele și înregistrările sale sunt adăugate la cele existente. Nimic nu este înlocuit.
3. Alegeți **Adăugare înregistrare** pentru o instrucțiune de șantier, un desen de execuție, un set de adnotări, un model legat sau o notă. Selectați problema de care ține și starea sa. Un fișier ales este înregistrat după nume, dimensiune și SHA-256; fișierul rămâne unde se află.
4. **Jurnalul modificărilor desenului** afișează un rând pentru fiecare foaie și o coloană pentru fiecare problemă. O revizie între paranteze a fost emisă din nou fără modificări.
5. **Descărcare jurnal de modificări (CSV)** salvează problemele, tabelul foilor și înregistrările. **Salvare istoric de probleme** scrie un fișier pe care îl citesc celelalte aplicații.

## Util de știut

- **Înregistrare problemă** emite foile măsurate, de exemplu cu o listă de cantități. **Modificări de la** indică apoi ce foi au fost măsurate din nou după acea problemă.
- Istoricul este salvat în fișierul de antemăsurătoare. Fiecare modificare se poate anula dintr-o singură operațiune.
- Citirea aceluiași fișier de două ori nu adaugă nimic în plus. Când două copii conțin aceeași înregistrare, se păstrează cea mai nouă.
