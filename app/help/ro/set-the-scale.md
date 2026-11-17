---
title: Setarea scării
summary: Atribuiți fiecărei foi o scară cu o presetare sau prin calibrare pe o dimensiune cunoscută, verificați-o și aflați de ce foile fără scară sunt excluse din totaluri.
keywords: detectare scară, citire scară, scară din text, toate foile, scară, calibrare, presetare, verificare scară, verificare, dimensiune cunoscută, fără scară, raport, setare scară
from: 8f0148e6
---

Fiecare foaie are propria scară. Scara se stabilește manual sau poate fi citită de TakeoffCraft din textul foilor (mai jos), iar apoi se verifică. Până când o foaie are scară, {{ui:Liniar}}, {{ui:Arie}}, {{ui:Cerc}} și {{ui:Decupaj}} refuză să măsoare pe ea. {{ui:Numărare}} și {{ui:Numărare automată}} funcționează fără scară.

Lista foilor arată scara fiecărei foi sau **Fără scară**. Bara de sub foaia deschisă spune același lucru.

## Folosirea unei presetări (când PDF-ul este imprimat la mărime reală)

1. Deschideți foaia.
2. Deschideți lista {{ui:Presetare}} din grupul {{ui:Scară}}.
3. Alegeți scara tipărită pe desen, de exemplu `1/8" = 1'-0"` la Arhitecturală.
   Bara de stare afișează „Scara pentru această foaie: 1/8" = 1'-0".”
4. Verificați-o (mai jos).

O presetare presupune că PDF-ul are dimensiunea reală de hârtie pentru care a fost făcut desenul. Dacă PDF-ul a fost făcut cu „potrivire la pagină” sau este un set la jumătate din mărime, presetarea este greșită. Calibrați în schimb.

Lista completă se află în [Presetări de scară](topic:scale-presets).

## Citirea scărilor din textul foilor

Majoritatea desenelor își indică scara: `SCALE: 1/4" = 1'-0"` în cartuș, `1:100` sub o vedere. TakeoffCraft le poate citi și poate stabili toate foile odată.

1. Deschideți lista {{ui:Presetare}} și alegeți {{ui:Din textul foilor…}} (în partea de sus).
2. Lista arată fiecare foaie: scara sa actuală și ce spune textul ei — **Indică 1/4" = 1'-0"**, **Fără scară în text** sau **Indică „nu la scară”** (NTS).
3. Foile fără scară care indică una sunt bifate. Bifați sau debifați oricare, apoi alegeți {{ui:Setare scări bifate}}. Un {{key:Mod+Z}} le anulează pe toate.
4. Verificați o dimensiune pe fiecare foaie cu {{ui:Verificare}} (mai jos): o presetare este corectă doar când PDF-ul este imprimat la mărime reală.

Citește notațiile arhitecturale (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), inginerești (`1" = 20'`) și metrice (`1:50`) care corespund unei [presetări](topic:scale-presets). Când o foaie indică mai multe scări (un plan cu detalii mărite), o alege pe cea indicată cel mai des, iar cea scrisă după cuvântul SCALE contează dublu; celelalte sunt afișate cu roșu, pentru verificare. O foaie scanată nu are text: stabiliți scara manual.

## Calibrarea pe o dimensiune cunoscută

Folosiți această metodă când nu există o scară tipărită în care aveți încredere, setul a fost redimensionat sau foaia indică „nu la scară”, dar are cote.

1. Deschideți foaia și măriți o dimensiune lungă cunoscută, cum ar fi distanța dintre axe sau dimensiunea de ansamblu a clădirii. Cu cât este mai lungă, cu atât este mai precisă.
2. Alegeți {{ui:Calibrare}} din grupul {{ui:Scară}}, sau apăsați {{key:K}}.
3. Faceți clic pe un capăt al cotei. Măriți la fiecare capăt pentru precizie; puteți face zoom și pan între clicuri.
4. Faceți clic pe celălalt capăt. Țineți apăsat {{key:Shift}} pentru a păstra linia la 0°, 45° sau 90°.
   Se deschide caseta de dialog **Calibrarea acestei foi**.
5. Introduceți distanța reală în câmpul **Distanța reală**, de exemplu `24'-6 1/2"`, `24.5` (picioare zecimale), `30"` sau `7.5 m`. Vezi [Introducerea lungimii, prețului și procentului](topic:entry-formats).
6. Alegeți {{ui:Setare scară}}.
   Bara de stare afișează scara ca „1" = (n)'”, iar când se află în limita de 0.5% față de o presetare, indică care, de exemplu „ceea ce corespunde cu 1/4" = 1'-0" (alegeți acea presetare pentru o scară exactă)”.
   TakeoffCraft revine la instrumentul {{ui:Selectare}}.

Când calibrarea corespunde unei presetări, alegerea acelei presetări dă o scară exactă, în loc de una care depinde de locul unde ați făcut clic.

## Verificarea scării

Verificați întotdeauna o scară nouă pe o a doua dimensiune.

1. Alegeți {{ui:Verificare}} din grupul {{ui:Scară}}, sau apăsați {{key:D}}.
2. Faceți clic pe ambele capete ale unei dimensiuni tipărite pe desen.
   Bara de stare afișează „Verificare: 12'-6"” cu aceeași lungime în picioare zecimale și în metri, iar linia de verificare rămâne pe foaie cu lungimea sa.
3. Comparați-o cu dimensiunea tipărită. Dacă nu se potrivește, calibrați pe o dimensiune mai lungă.

Apăsați {{key:Esc}} pentru a șterge linia de verificare.

## Schimbarea scării

Alegeți o altă presetare sau calibrați din nou. Dacă foaia are deja măsurători, TakeoffCraft întreabă **Schimbați scara acestei foi?** și arată câte măsurători vor fi refăcute. Alegeți {{ui:Schimbare scară}}. Fiecare tronson și fiecare zonă de pe foaie este remăsurat la noua scară. O puteți anula cu {{key:Mod+Z}}.

## De ce foile fără scară nu sunt numărate ca zero

Un marcaj pe o foaie fără scară nu are lungime sau arie reală. TakeoffCraft nu îl numără niciodată ca zero, ceea ce ar face devizul discret prea mic. În schimb, aplicația:

- lasă acele marcaje din totaluri,
- afișează „+(n) fără scară” lângă articol în {{ui:Cantități}},
- afișează „Incomplet: (n) marcaje pe foi fără scară (neincluse în totaluri)” în antetul tabelului,
- scrie numărul în coloana de note a exportului în tabel.

Acest lucru poate apărea când deschideți un proiect ale cărui scări nu au fost niciodată stabilite. Dați foii o scară și marcajele sunt numărate imediat. Marcajele de numărare sunt întotdeauna numărate; nu au nevoie de scară.

## Sfaturi

- Stabiliți scara pe fiecare foaie pe care o veți măsura înainte de a începe. Căutați în lista foilor **Fără scară** pentru a găsi cele rămase (caseta de căutare se uită la numele foilor, nu la scări).
- Detaliile și planurile mărite de pe aceeași foaie folosesc adesea altă scară. TakeoffCraft are o scară pe foaie; vezi [Ce este încă nerealizat](topic:not-built-yet).
- Desene metrice: alegeți o presetare metrică, cum ar fi `1:100`, sau calibrați cu o distanță metrică, de exemplu `6000 mm`.
