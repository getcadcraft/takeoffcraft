---
title: Verificarea stocului furnizorului și a termenelor de livrare
summary: Adăugați lista de stoc a unui furnizor (CSV sau tabel) și TakeoffCraft verifică față de ea ce are nevoie antemăsurătoarea, cu pierderi: suficient în stoc și cât durează așteptarea. Lipsurile și așteptările lungi apar în panoul Probleme.
keywords: furnizor, stoc, în stoc, termen de livrare, disponibilitate, lipsă, comandă restantă, listă de comandă, csv, sku, vânzător, materiale, aprovizionare, probleme
from: f11160fb
---

{{ui:Aprovizionare}} din bara de instrumente (pictograma cu camion) verifică ce are nevoie antemăsurătoarea față de lista de stoc a unui furnizor. Rândurile furnizorului care contează sunt păstrate în propriul fișier al antemăsurătorii. Nimic nu este trimis nicăieri și nimic nu întreabă un furnizor: aduceți fișierul.

## Fișierul

Un fișier CSV cu un rând de antet. Are nevoie de o coloană cu nume sau SKU și de o coloană cu stoc sau termen de livrare. Aceste antete sunt recunoscute (în orice ordine, indiferent de majuscule): Item, Name, Description sau Product; SKU, Part sau Item #; In stock, On hand, Available sau Quantity; Lead time sau Delivery days; Unit sau UOM; Price sau Cost; Supplier sau Vendor.

- Stocul poate fi un număr (1,200), „In stock” sau „Out of stock”.
- Termenul de livrare poate fi „5 days”, „2 weeks”, „2-3 weeks” (se folosește cel mai lung), „3 months”, „same day” sau „backorder”. Un număr simplu este în unitatea antetului (zile, dacă antetul nu spune weeks sau months).
- Fișierele Excel nu sunt citite: salvați mai întâi tabelul ca CSV.

## Verificați antemăsurătoarea

1. Alegeți {{ui:Aprovizionare}}, apoi {{ui:Adăugare fișier de furnizor…}} și selectați CSV-ul. Adăugați mai multe: până la cinci fișiere, cu 2.000 de rânduri păstrate în total, cele care se potrivesc cu articolele dvs. primele.
2. Fiecare articol, a doua condiție și fiecare piesă de ansamblu cu o cantitate este asociată unui rând după nume sau după SKU din nume. Un nume asemănător (unul în interiorul celuilalt) este folosit când nu există unul exact, iar aplicația spune acest lucru.
3. Sub {{ui:Ce are nevoie antemăsurătoarea}}, cele scurte apar primele: „Lipsesc 120 EA”, „Termen de livrare 21 de zile”, „Comandă restantă”, „Unitate diferită”, „Nicio cifră de stoc” sau „În stoc”. Necesarul include pierderile. O unitate a furnizorului care nu este cea a devizului (o tonă față de un picior) este raportată și nu este niciodată comparată. Fiecare rând are {{ui:Selectare articol}}, care duce la articol.
4. Setați {{ui:Cea mai lungă așteptare dorită (zile)}} (implicit 14). Un articol care nu este în stoc și așteaptă mai mult decât atât este marcat, iar rezumatul numește cea mai lungă așteptare care contează.
5. {{ui:Listă de comandă (CSV)}} descarcă articolele scurte cu cantitatea lipsă, furnizorul și termenul de livrare. {{ui:Omitere}} scoate un necesar din verificare (este un pas care poate fi anulat).

## Fișiere tabel și Biblioteca de prețuri

Lista unui furnizor poate fi un registru de lucru Excel (.xlsx), la fel ca un CSV: se citește prima foaie, cu aceleași nume de coloane. Formulele nu sunt executate niciodată; se citește valoarea pe care o conține fișierul.

Odată ce un fișier cu prețuri a fost adăugat, {{ui:Prețuri în Bibliotecă}} din casetă setează prețul de material al fiecărei intrări din [Bibliotecă](topic:price-library) pe care fișierul o prețuiește: același nume și o unitate identică (sau nespecificată). Manopera, pierderile, înălțimea și ansamblurile rămân neschimbate, iar nota intrării spune din ce fișier provine prețul. O intrare în metri nu este prețuită dintr-o listă în picioare, iar una fără nume corespunzător este lăsată în pace; linia de stare spune câte au fost omise din cauza unității. Recalculați prețurile din Bibliotecă pentru a aduce prețurile noi în această antemăsurătoare.

## În panoul Probleme

O lipsă este un avertisment, iar o așteptare lungă este o notă, în panoul comun {{ui:Probleme}} („Stoc furnizor”), alături de toate celelalte verificări. Puteți accepta una cu un motiv, iar acceptarea se salvează în antemăsurătoare.

## Cu asistentul dvs.

Dacă permiteți asistenți în {{ui:Setări}}, aceștia pot citi verificarea (supply_check). Adăugarea unui fișier de furnizor este rezervată dvs.

## De reținut

Cifrele de stoc sunt doar atât de actuale cât este fișierul adăugat. Adăugați fișierul din nou pentru a-l reîmprospăta: un fișier cu același nume îl înlocuiește pe cel anterior.
