---
title: Trecere de la alt software de antemăsurători
summary: Cum se mapează obișnuințele programelor dedicate de antemăsurători și ale uneltelor de adnotare PDF în TakeoffCraft și diferențele care creează confuzii.
keywords: trecere, migrare, condiții, piese, instrumente de măsurare, listă de adnotări, legătură cantitate, obișnuințe de antemăsurare, diferențe, comparare
from: 12004ce5
---

Dacă ați făcut antemăsurători în PlanSwift sau cu instrumentele de măsurare din Bluebeam Revu, cea mai mare parte din TakeoffCraft vă va părea familiară: un set de planuri, o scară pentru fiecare foaie, lucruri pe care le măsurați și un total cu prețuri. Modul în care se îmbină piesele este diferit în unele locuri, iar acestea sunt descrise mai jos.

Dacă cunoașteți PlanSwift sau On-Screen Takeoff, alegeți stilul de meniu {{ui:Birou de antemăsurători}} din {{ui:Setări}} › {{ui:TakeoffCraft}} › {{ui:Meniuri, taste și mouse}}: o bară de meniu cu Fișier, {{ui:Editare}}, Vizualizare, {{ui:Scară}}, Antemăsurătoare, {{ui:Articole}}, {{ui:Adnotare}} și {{ui:Export}}, peste un rând de instrumente de antemăsurare, cu presetările de scară pe bara foii. Vezi [Meniuri, taste și mouse](topic:menus-keys-and-mouse).

## Obișnuințe puse în corespondență

| Obișnuință | În TakeoffCraft |
|---|---|
| Deschiderea unei lucrări sau a unui proiect care stochează planurile (PlanSwift) | Deschideți PDF-urile și fișierul de proiect `.takeoff.json` unul lângă altul. Proiectul stochează doar antemăsurătoarea; fișierele PDF rămân fișiere separate. |
| O listă de adnotări cu note, nori și evidențieri (Bluebeam) | {{ui:Adnotare}} pe bara foii: note, nori și evidențieri cu o stare (Deschisă, Cu răspuns, Închisă), listate sub **Adnotări** și desenate în {{ui:PDF marcat}}. Vezi [Note, nori și evidențieri](topic:markups). |
| Măsurători salvate ca adnotări în PDF (Bluebeam) | Antemăsurătoarea se află în fișierul `.takeoff.json`. {{ui:PDF marcat}} scrie o copie cu antemăsurătoarea desenată, pentru partajare; {{ui:PDF cu antemăsurătoarea în interior}} scrie o copie care transportă antemăsurătoarea, pentru redeschidere în TakeoffCraft. |
| Articole de antemăsurare (PlanSwift), instrumente de măsurare personalizate salvate în Tool Chest (Bluebeam) | **Articole** sub {{ui:Articole}}: nume, tip, culoare, unitate, înălțime sau adâncime, pierderi, tarife. |
| Piese și ansambluri cu formule (PlanSwift) | {{ui:Articol compus}} al articolului: componente cu o formulă care folosește `L H A N P`. |
| Stabilirea scării paginii sau calibrarea (ambele) | Lista {{ui:Presetare}} sau {{ui:Calibrare}} din grupul {{ui:Scară}}, pe fiecare foaie. {{ui:Verificare}} măsoară o dimensiune cunoscută. |
| Aplicarea unei scări pe un interval de pagini | Încă nu: setați fiecare foaie. |
| Viewport-uri cu scări diferite pe o foaie (Bluebeam) | Încă nu: o scară pe foaie. |
| Instrumentele de lungime polilinie și de arie (Bluebeam), antemăsurarea liniară și pe arie (PlanSwift) | {{ui:Liniar}} ({{key:L}}) și {{ui:Arie}} ({{key:A}}). |
| Ținerea apăsată a lui Shift pentru linii drepte | {{key:Shift}} se fixează la pași de 45°, aceeași idee. |
| Fixarea de liniile desenului | Activă implicit: capete, mijloace, intersecții și cel mai apropiat punct de pe o linie, cu {{key:F3}} pentru dezactivare, ca în programele CAD. |
| Instrumentul de numărare (ambele) | {{ui:Numărare}} ({{key:C}}). |
| Căutare vizuală a simbolurilor (Bluebeam) | {{ui:Numărare automată}} ({{key:S}}): încadrați un simbol, verificați, adăugați. |
| Decupaje sau scăderi din arii | {{ui:Decupaj}} ({{key:X}}) pe o arie selectată, și decupaje rotunde. |
| Scăderi pe traseele liniare | Trasați traseul drept și apăsați {{key:E}} ({{ui:Scădere}}) pentru deschidere. Vezi [Măsurarea traseelor liniare](topic:measure-linear). |
| Segmente de arc într-o polilinie | {{ui:Arc}} ({{key:R}}): faceți clic pe un punct de pe curbă, apoi pe capătul ei. |
| Lista Adnotări cu coloane de cantități (Bluebeam) | Tabelul {{ui:Cantități}}, {{ui:Pe articole}} sau {{ui:Pe foi}}. |
| Grila de estimare cu prețuri (PlanSwift) | Același tabel: pierderi, material și manoperă pe unitate, totaluri extinse, {{ui:Total lucrare}}. |
| Exportul în Excel | {{ui:XLSX}} cu formule active, sau {{ui:CSV}}. |
| Escape pentru oprirea unui instrument | {{key:Esc}} anulează și revine la {{ui:Selectare}}. |
| Clic dreapta pentru a finaliza | Clic dreapta finalizează aici un traseu sau închide o arie. Nu există meniu contextual la clic dreapta. |

## Diferențe care creează confuzie

**Antemăsurătoarea nu se află în PDF.** Nimic din ce faceți nu modifică PDF-urile. Salvați fișierul `.takeoff.json` și păstrați-l împreună cu desenele. Dacă trimiteți cuiva PDF-ul marcat, nu trimiteți și o antemăsurătoare editabilă: trimiteți fișierul de proiect și PDF-urile originale sau un [PDF cu antemăsurătoarea în interior](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDF-urile se potrivesc după conținut, nu după nume.** O foaie revizuită salvată peste vechiul nume de fișier este, pentru TakeoffCraft, un fișier nou, fără scară și fără marcaje. Marcajele vechi rămân pe versiunea veche și continuă să numere. Vezi [Salvarea și redeschiderea unei antemăsurători](topic:save-and-reopen#when-a-pdf-has-changed).

**Marcajele fără scară sunt lăsate deoparte, nu numărate ca zero.** Dacă o foaie nu are scară, traseele și ariile ei nu se numără, iar tabelul afișează „Incomplet”. În multe programe ați vedea doar 0. Vezi [Stabilirea scării](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Nu există estimarea dimensiunii paginii.** Presetările presupun că PDF-ul este tipărit la dimensiune reală. Un PDF la jumătate de mărime sau „potrivit la pagină” are nevoie de {{ui:Calibrare}}. Folosiți întotdeauna {{ui:Verificare}}.

**Un articol, un tip principal, mai multe dacă cereți.** Un articol este liniar, de arie sau de numărare, iar tipul lui se blochează odată ce are marcaje. O condiție care dă și o arie, și perimetrul ei este un articol de arie: perimetrul ei este variabila `P`. Un perete cu lungime și arie este un articol liniar cu o înălțime. Pentru un articol cu mai multe condiții, cum ar fi o cameră cu pardoseală, o bază și uși, bifați celelalte tipuri sub **{{ui:Măsoară și}}**: fiecare se prețuiește pe un rând propriu. Vezi [Un articol, mai multe tipuri de marcaje](topic:create-items#one-item-several-kinds-of-marks).

**Formulele se aplică pe totaluri.** Formulele ansamblului folosesc totalurile articolului pe toate foile, nu fiecare traseu separat. `N` (numărul de trasee sau de arii) există pentru extrasele pe traseu, cum ar fi un montant suplimentar pentru fiecare perete.

**Perimetrul include decupajele.** `P` al unei arii adaugă marginile golurilor ei. Vezi [Măsurarea ariilor cu decupaje](topic:measure-areas#read-the-area).

**Tragerea deplasează planul.** Tragerea cu butonul stâng pe foaie deplasează planul, în fiecare instrument, cu excepția {{ui:Numărare automată}}. Nu trebuie să comutați niciodată la un instrument de deplasare. Rotița mărește sau micșorează; nu derulează.

**O copie de recuperare, nu un cloud.** TakeoffCraft păstrează o copie a lucrării în acest browser și o oferă înapoi după o blocare ([Dacă fila sau browserul se oprește](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), dar antemăsurătoarea trebuie salvată: {{key:Mod+S}}. Salvarea în cloud nu este disponibilă încă.

**Totul se află în browser.** Nu este nimic de instalat, iar planurile nu sunt încărcate niciodată. Pentru o aplicație desktop, TakeoffCraft vine în CadCraft Studio, împreună cu celelalte șapte aplicații.

## Încă nu este aici

Regiunile de scară pe foaie nu sunt încă realizate. Vezi [Ce nu este încă realizat](topic:not-built-yet) pentru lista completă și pentru ce de făcut în loc.
