---
title: Deschiderea unui desen DWG sau DXF
summary: Deschideți un fișier de desen ca foi (spațiul model și fiecare aranjare în pagină), porniți de la scara dată de desen, afișați sau ascundeți straturile și aduceți desene legate.
keywords: dwg, dxf, cad, desen, deschidere desen, aranjări, spațiu model, spațiu hârtie, foi, unități, insunits, scară fereastră de vizualizare, xref, desen legat, straturi, înghețat, fără pdf, trasare, fără trasare
from: d8c3f504
---

TakeoffCraft deschide un desen DWG sau DXF la fel cum deschide un PDF: nu trebuie să îl trasați mai întâi în PDF. Numărarea direct din desen este exactă, pentru că desenul știe ce este fiecare obiect. Consultați [Numărarea dintr-un desen](topic:count-from-a-drawing).

## Deschiderea desenului

1. Alegeți {{ui:Open plans}} din grupul {{ui:File}} sau apăsați {{key:Mod+O}}.
2. Selectați fișierul DWG sau DXF. Puteți selecta mai multe și PDF-uri împreună cu ele.
3. Alegeți Deschidere.

Puteți trage și fișiere de desen peste TakeoffCraft, ca pe PDF-uri. Nimic nu este încărcat: browserul citește fișierul de pe computer.

TakeoffCraft citește DWG din AutoCAD 2000 până la 2018 și DXF ASCII din R12 până la 2018. Refuză un DXF binar (salvați-l ca ASCII sau ca DWG) și un fișier care nu este niciunul dintre acestea și spune de ce. Un fișier deteriorat se deschide cu ce s-a putut citi, iar un mesaj o spune; numărătorile pot fi incomplete.

## Foi

- **Model** este spațiul model al desenului.
- **Fiecare aranjare** (fila spațiului hârtie) este o foaie, numită după fila ei, în ordinea filelor. O aranjare arată modelul prin ferestrele sale de vizualizare, așa cum se trasează.

Zoom, pan, agățarea de liniile proprii ale desenului, marcajele, notele, {{ui:Calibrate}} și restul funcționează ca pe un PDF. Foile unui desen sunt salvate în antemăsurătoare după numele fișierului și o amprentă a conținutului, ca un PDF: deschideți din nou același fișier și marcajele sunt pe foile sale.

## Scara

O foaie începe cu scara dată de desen:

- **O aranjare** ia scara celei mai mari ferestre de vizualizare. O scară precum 1/2" = 1'-0" este numită după presetarea ei; orice altă scară se arată ca „Din fereastra de vizualizare a desenului: 1" = 2.5'”. Dacă o aranjare are ferestre la alte scări, cea mai mare stabilește scara foii: verificați celelalte cu {{ui:Check}}.
- **Model** ia unitățile desenului (inch, milimetri, picioare…) ca scară: „Unități de desen (inch)”.
- **Un desen fără unități** (desenul nu spune niciodată dacă o unitate este un inch sau un milimetru) nu are scară: foaia spune „No scale”, iar măsurarea pe ea este refuzată, ca pe un PDF fără scară. Numărarea nu are nevoie de scară. Dați-i una cu {{ui:Calibrate}}.

{{ui:Calibrate}}, {{ui:Check}} și lista {{ui:Preset}} schimbă oricând o scară și au prioritate față de cea a desenului. Lista de presetări este dezactivată pe Model, care nu are dimensiune de hârtie.

## Straturi

{{ui:Layers}} din bara foii listează straturile desenului, cu câte obiecte are fiecare pe această foaie. Straturile pe care fișierul le-a oprit sau înghețat încep ascunse. Debifați un strat pentru a-l ascunde sau bifați unul ascuns pentru a-l afișa: foaia se redesenează, iar ce este ascuns este lăsat din numărători și din obiectele oferite pentru {{ui:Measure drawing}}, cu excepția cazului în care cereți să fie numărate și straturile ascunse. {{ui:Show all}} afișează toate straturile; {{ui:Back to the file's layers}} anulează modificările făcute. Alegerile de straturi țin de această sesiune, nu de fișierul antemăsurătorii.

## Desene legate (xref)

Un desen care leagă alte desene le arată acolo unde sunt inserate. TakeoffCraft găsește un desen legat între **fișierele deschise**, după numele fișierului: deschideți desenul-gazdă și desenul legat împreună (sau unul după altul). Până atunci, bara de stare spune câte desene legate nu au fost găsite, iar ce desenau lipsește, iar numărătorile o spun.

## Limite

- Obiectele pe care TakeoffCraft nu le poate citi sau plasa (obiecte proxy, clase necunoscute) sunt listate în fereastra de numărare pe tip; nu sunt niciodată eliminate fără să fie anunțate.
- Desenele foarte mari sunt desenate parțial, iar numărările se opresc la o limită, spunând asta. În loc de acestea, deschideți o trasare PDF a desenului.
- Un desen este desenat în negru și în propriile culori, întunecate pentru hârtia albă. Tabelele de stiluri de trasare și atribuirile de stilouri nu sunt aplicate.
