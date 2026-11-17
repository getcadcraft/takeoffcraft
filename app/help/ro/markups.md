---
title: Note, nori și evidențieri
summary: Marcați întrebările și modificările de pe foi cu note, nori de revizie și evidențieri, urmăriți fiecare ca deschisă, cu răspuns sau închisă, și trimiteți-le în PDF-ul marcat.
keywords: adnotare, adnotări, notă, comentariu, întrebare, rfi, nor, nor de revizie, evidențiere, stare, deschisă, cu răspuns, închisă, revizuire, lista adnotărilor
from: 2b395c13
---

Adnotările sunt pentru ceea ce trebuie să țineți minte sau să întrebați în timpul antemăsurătorii: „confirmați tipul de bază”, un nor de revizie în jurul unui perete modificat, o notă evidențiată pe plan. Stau pe foaie cu o stare, sunt listate într-un singur loc și se tipăresc în PDF-ul marcat. Ele **nu sunt niciodată numărate**: nicio cantitate, niciun cost.

## Adăugare

Deschideți {{ui:Markup}} din bara de deasupra foii și alegeți:

| Adnotare | Cum |
|---|---|
| {{ui:Note}} | Faceți clic unde trebuie să fie, scrieți nota și alegeți {{ui:Add}}. Apare ca un ac rotund, cu prima linie alături. |
| {{ui:Cloud}} | Faceți clic pe un colț, apoi pe colțul opus, și scrieți o notă (sau lăsați-o goală). Un nor de revizie cu creste înconjoară caseta. |
| {{ui:Highlight}} | Faceți clic pe două colțuri: o casetă galbenă transparentă, cu o notă dacă doriți. |

{{key:Esc}} după primul colț anulează. Instrumentul rămâne activ pentru următoarea; {{key:V}} revine la {{ui:Select}}.

## Stare și editare

Faceți clic pe o adnotare cu {{ui:Select}} pentru a o selecta. Panoul din dreapta afișează **Adnotare**: tipul și foaia sa, **Stare** — Deschisă, Cu răspuns sau Închisă — și textul său, pe care îl puteți modifica. {{key:Delete}} (sau {{ui:Delete}}) o elimină; {{key:Mod+Z}} o readuce.

Acul unei note este portocaliu cât timp este deschis, albastru după ce a primit răspuns și gri când este închis; un nor închis devine gri.

## Lista

**Adnotări** din panoul din dreapta listează fiecare adnotare a antemăsurătorii, cu starea sa, și spune câte sunt încă deschise. Bifați **Doar deschise** pentru a vedea ce mai trebuie rezolvat. Faceți clic pe un rând pentru a merge la foaia sa și a o selecta.

## Distribuire

- {{ui:Marked PDF}} le desenează pe pagini: evidențieri, nori și ace, fiecare cu o casetă care arată starea cu majuscule (DESCHISĂ, CU RĂSPUNS, ÎNCHISĂ) și textul său. O pagină cu adnotări, dar fără marcaje de antemăsurătoare, este inclusă și ea.
- {{ui:XLSX}} adaugă o foaie de calcul **Adnotări**: foaia, tipul, starea și textul, câte un rând pentru fiecare.
- Sunt salvate în `.takeoff.json` și într-un [PDF cu antemăsurătoarea în interior](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
