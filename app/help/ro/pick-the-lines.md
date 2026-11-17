---
title: Alegerea liniilor PDF-ului
summary: Faceți clic pe o linie a unui PDF vectorial pentru a măsura tot traseul conectat, sau faceți clic în interiorul unui contur închis pentru aria lui, cu toleranța de goluri afișată și câte o anulare pe segment.
keywords: traseu, alegere, linii, tronsoane conectate, tot tronsonul, urmărire, contur, perimetru, gol, toleranță, punte, segmente, tab, vectorial, arie din linii, p
from: c22526ae
---

Pe un PDF vectorial, pereții și muchiile sunt linii reale. {{ui:Path}} ({{key:P}}) le ia așa cum sunt desenate: un clic pe o linie măsoară tot ce este unit de ea, de la un capăt la altul, astfel încât nu trebuie să urmăriți un perete făcând clic pe colțurile lui. Foaia are nevoie de o scară. O pagină scanată nu are linii de ales; folosiți acolo [Liniar](topic:measure-linear) sau [Arie](topic:measure-areas).

## Alegerea unui traseu sau a unui contur

1. Alegeți {{ui:Path}}. Linia de sub cursor este conturată, iar celelalte trasee pe care ar putea fi desenată sunt conturate subțire.
2. Faceți clic pe o linie: tot traseul conectat este ales. Bara de sub bara de instrumente indică segmentele sale, lungimea, toleranța de goluri și câte goluri au fost punțite. Un traseu care revine la început este închis și raportează și perimetrul său.
3. Sau faceți clic în interiorul unui contur închis, departe de orice linie: conturul din jurul acelui punct este ales ca arie. Cel mai mic vine primul; {{key:Tab}} încearcă următorul mai mare.
4. Apăsați {{key:Enter}} (sau faceți clic dreapta, ori dublu clic) pentru a adăuga marcajele. Un traseu ales devine un marcaj al unui articol **liniar**, iar un contur devine un marcaj al unui articol de tip **arie**: articolul activ, dacă are acel tip, altfel cel mai nou de acel tip. Fără niciunul, se deschide formularul pentru articol nou și nimic nu este adăugat până nu apăsați din nou {{key:Enter}}. Tot ce a fost ales este adăugat dintr-un singur pas de anulare.

## Toleranța de goluri

Desenatorii lasă mici găuri acolo unde liniile ar trebui să se întâlnească. Două linii se unesc când capetele lor sunt mai apropiate decât **toleranța de goluri**. Ea pornește de la 1.5 puncte pe foaie (afișată în picioare și inch la scara foii), iar un inel punctat de această lățime urmărește cursorul și stă pe fiecare capăt al traseului de sub el. Fiecare gol punțit este încercuit cu portocaliu pe un traseu ales, iar bara le numără.

{{key:]}} face toleranța mai largă, {{key:[}} mai mică. Un traseu ales este unit din nou imediat la noua toleranță. La o joncțiune, traseul continuă drept, pe varianta care ocolește cel mai puțin, și părăsește ramura.

## Taste

| Tasta sau acțiunea | Ce face |
|---|---|
| Clic | Alege traseul de sub cursor sau conturul din jurul lui. |
| {{key:Shift}} + clic | Adaugă un alt traseu sau un alt contur la ce este ales. |
| {{key:Tab}} | Încearcă următorul traseu de sub cursor sau următorul contur mai mare. |
| {{key:Backspace}} sau {{key:Mod+Z}} | Scoate ultimul segment de pe ultimul traseu ales, câte un segment pe rând. Un traseu fără segmente rămase dispare. Fără nimic ales, {{key:Mod+Z}} este anularea obișnuită. |
| {{key:[}} și {{key:]}} | Toleranță de goluri mai îngustă și, respectiv, mai largă. |
| {{key:Enter}} | Adaugă marcajele. |
| {{key:Esc}} | Golește ce este ales. |

## De reținut

- O curbă din desen este un lanț de piese drepte scurte, deci lungimea ei este puțin sub arcul real. Pentru un arc exact, măsurați din fișierul desenului ([Măsurarea dintr-un desen](topic:measure-from-a-drawing)).
- Un gol punțit este socotit ca o săritură dreaptă peste el, deci perimetrul unui contur închis îl include.
- Doar traseele și umpleriile din căile paginii sunt linii. Textul desenat ca litere și imaginile nu sunt.
