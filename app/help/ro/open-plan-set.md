---
title: Pornirea unei antemăsurători și deschiderea unui set de planuri
summary: Deschideți unul sau mai multe PDF-uri ca set de planuri, orientați-vă printre foi și navigați între ele.
keywords: deschidere, set de planuri, mai multe pdf-uri, fișiere multiple, foi, desene, etichete de pagină, listă de foi, navigare, trage, predare, deschidere în altă aplicație, marcaje
from: ed434468
---

Un set de planuri este adesea format din mai multe PDF-uri: arhitectură, structură, instalații. TakeoffCraft le deschide una lângă alta, ca o singură listă de foi, iar o singură antemăsurătoare poate acoperi toate.

## Deschiderea PDF-urilor

1. Alegeți {{ui:Open plans}} din grupul {{ui:File}} sau apăsați {{key:Mod+O}}. (Celelalte stiluri de meniu o numesc {{ui:Open PDFs…}}.)
2. În caseta de dialog a fișierelor, selectați fiecare PDF al setului. Țineți apăsat {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} pentru a alege mai multe sau {{key:Shift}} pentru un interval.
3. Alegeți Deschidere.
   Un mesaj „Se deschide (nume)…” apare cât timp este citit fiecare fișier. Apoi fiecare pagină apare sub {{ui:Sheets}}, iar prima pagină a primului PDF nou se deschide.

Puteți trage PDF-urile din {{pick:mac=Finder|windows=File Explorer|linux=managerul de fișiere}} și le puteți plasa oriunde pe TakeoffCraft. Un cadru „Plasați PDF-uri, desene DWG sau DXF ori un .takeoff.json” apare cât timp trageți.

Pentru a adăuga mai multe PDF-uri mai târziu, procedați la fel. PDF-urile deja deschise sunt sărite.

Pagina de start listează și PDF-urile și antemăsurătorile deschise recent, în browserele care permit unei pagini să redeschidă un fișier (Chrome și Edge). Faceți clic pe unul pentru a-l deschide; browserul poate cere mai întâi permisiunea. Consultați [Fișierele](common:your-files).

:::note
Nimic nu este încărcat. Browserul citește PDF-urile de pe computer, iar acestea dispar din TakeoffCraft când închideți fila sau alegeți {{ui:New}}.
:::

## Desene alături de PDF-uri

{{ui:Open plans}} acceptă și desene DWG și DXF, singure sau împreună cu PDF-urile: spațiul model și aranjările fiecărui desen devin foi în aceeași listă. Consultați [Deschiderea unui desen DWG sau DXF](topic:open-a-drawing), apoi [Numărarea dintr-un desen](topic:count-from-a-drawing).

## Un PDF predat de la altă aplicație

O altă aplicație din familie vă poate preda PDF-ul pe care îl are deschis: deschide TakeoffCraft într-o filă nouă, iar PDF-ul se deschide acolo ca și cum l-ați fi tras peste aplicație. Bara de stare spune „Deschis (nume), predat de la (aplicație). Fișierul original este neschimbat.” Nimic nu este încărcat; fișierul trece prin spațiul de stocare al acestui browser și dispare din el odată deschis.

Dacă bara de stare spune că PDF-ul „nu a sosit”, fila a așteptat prea mult sau PDF-ul era deja deschis într-o altă filă: deschideți-l cu {{ui:Open plans}}.

În sens invers, când MarkupCraft rulează acolo unde lucrați și poate primi un fișier, bara de foi de sub desen are un buton {{ui:MarkupCraft}}: el deschide PDF-ul foii de pe ecran în MarkupCraft, într-o filă nouă, pentru a fi revizuit și adnotat.

## Găsirea unei foi

- Derulați lista {{ui:Sheets}} din stânga și faceți clic pe o foaie.
- Scrieți în **Căutare foi**, din capul listei, pentru a filtra după numărul foii, numele fișierului sau eticheta paginii. Numărătoarea de lângă {{ui:Sheets}} arată „3 din 40” cât timp un filtru este activ.
- Apăsați {{key:PageDown}} pentru foaia următoare și {{key:PageUp}} pentru cea anterioară. Ele urmează lista așa cum este filtrată.

:::mac
Pe o tastatură de Mac fără tastele Page Up și Page Down, apăsați fn împreună cu săgeata sus sau jos.
:::

## Cum sunt denumite foile

- O pagină căreia PDF-ul îi dă o etichetă, precum `A-101`, este denumită după această etichetă.
- O pagină fără etichetă (sau cu o etichetă care este doar numărul paginii) este denumită „(nume fișier), pagina (n)”.
- Cu mai multe PDF-uri deschise, foile etichetate poartă și numele fișierului: „A-101 — Architectural”.

Numele foilor nu pot fi scrise manual încă.

## Orientarea pe foaie

- Rotiți rotița mouse-ului pentru zoom la cursor.
- Trageți cu butonul stâng sau cel din mijloc pentru pan. Cu {{ui:Auto count}}, sau când porniți de la colțul unui marcaj, țineți {{key:Space}} apăsat cât trageți, sau trageți cu butonul din mijloc.
- Apăsați {{key:F}} sau alegeți {{ui:Fit page}} pentru a vedea toată foaia; {{key:W}} sau {{ui:Fit width}} potrivește lățimea ei.
- Apăsați {{key:Plus}} sau {{key:=}} pentru zoom mai mare și {{key:Minus}} pentru zoom mai mic, în jurul centrului vizualizării.

Fiecare foaie își reține propriul zoom și poziție cât timp rămâne deschisă.

## Mai departe

Înainte de a putea măsura o foaie, aceasta are nevoie de o scară: [Stabilirea scării](topic:set-the-scale).
