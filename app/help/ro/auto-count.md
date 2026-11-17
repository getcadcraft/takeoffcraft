---
title: Numărare automată a unui simbol
summary: Încadrați un simbol într-o casetă, lăsați TakeoffCraft să găsească celelalte pe această foaie sau pe toate foile deschise, verificați potrivirile cu glisorul și adăugați-le dintr-o singură dată.
keywords: orice unghi, rotit, întors, altă scară, scară diferită, numărare automată, numărare automatizată, căutare simboluri, găsire simboluri, model, șablon, potrivire, detectare, instrument de numărare
from: fa68a6c1
---

{{ui:Numărare automată}} găsește fiecare copie a unui simbol după ce încadrați unul. Apoi verificați potrivirile de pe foaie și adăugați cele acceptate ca marcaje de numărare. Este un ajutor, nu o garanție: verificați întotdeauna înainte de a adăuga.

## Găsirea simbolurilor

1. Creați sau selectați un articol de numărare din {{ui:Articole}}.
2. Deschideți o foaie pe care apare simbolul.
3. Alegeți {{ui:Numărare automată}} din bara de instrumente sau apăsați {{key:S}}.
   Apare o bară în partea de sus a foii: „Trageți o casetă în jurul unui simbol de pe această foaie.”
4. Pentru a căuta pe toate foile deschise, nu doar pe aceasta, bifați {{ui:Căutare în toate foile deschise}}.
5. Măriți zoom-ul până când simbolul se vede ușor, apoi trageți o casetă strânsă în jurul unei copii a lui. Includeți întregul simbol; spațiul alb din jur este eliminat.
   Bara afișează „Se caută…” cu o bară de progres și un buton {{ui:Anulare}}. Pagina rămâne receptivă: puteți face zoom, pan și puteți trece între foi. Alegerea altui instrument sau {{key:Esc}} anulează căutarea.
6. Când se termină, potrivirile apar pe foaie ca casete în culoarea articolului, iar bara afișează un rezumat, de exemplu „22 potriviri, 19 de adăugat (3 deja numărate). Faceți clic pe o casetă pentru a o respinge sau a o restabili.”

În {{ui:Numărare automată}}, tragerea pe foaie desenează o casetă în loc să deplaseze vizualizarea. Pentru a deplasa vizualizarea, țineți apăsat {{key:Space}} și trageți, sau trageți cu butonul din mijloc.

## Verificarea potrivirilor

- **Faceți clic pe o casetă** pentru a o respinge. O casetă respinsă este punctată și tăiată. Faceți clic din nou pentru a o restabili.
- **Mutați glisorul {{ui:Potrivire}}** (de la 50% la 95%, pornind de la 75%). Valoarea mai mare arată doar potrivirile apropiate; valoarea mai mică arată potriviri mai relaxate. Glisorul doar filtrează ce a fost găsit; nu caută din nou.
- **Deja numărate**: potrivirile de pe un loc care are deja un marcaj de numărare al acestui articol încep respinse, ca să nu numărați nimic de două ori.
- **Alte foi**: când ați căutat pe toate foile deschise, treceți de la o foaie la alta cu lista de foi sau cu {{key:PageDown}} și verificați fiecare. Rezumatul spune câte foi au potriviri.

## Adăugarea lor

Alegeți {{ui:Adăugare}}. Butonul arată câte sunt, de exemplu „Adăugare 19 marcaje”.
Marcajele de numărare sunt adăugate în centrul fiecărei casete acceptate: „Au fost adăugate 19 marcaje de numărare la ‚Priză dublă’. Ctrl+Z le elimină pe toate.”

Întregul lot este un singur pas de anulare, deci o {{key:Mod+Z}} le elimină pe toate.

Pentru a renunța la verificare fără a adăuga nimic, alegeți {{ui:Renunțare}} sau apăsați {{key:Esc}}. Alegerea altui instrument renunță și ea.

## Ce găsește și ce ratează

TakeoffCraft compară desenul, ca pixeli, cu simbolul pe care l-ați încadrat.

- Găsește simbolul rotit la 0°, 90°, 180° și 270°. Bifați {{ui:Orice unghi (mai lent)}} pe bara de numărare automată înainte de a trasa caseta, pentru a-l găsi și la orice unghi: încearcă la fiecare 15°, apoi ajustează fiecare găsire până la un grad și jumătate. Durează de aproximativ șase ori mai mult. Nu găsește un simbol oglindit (cu excepția cazului în care simbolul arată la fel oglindit).
- Cu {{ui:Căutare în toate foile deschise}} bifat, o foaie la altă scară este căutată la dimensiunea pe care o are simbolul acolo: un corp de iluminat desenat la scară pe un plan la 1/8" are jumătate din dimensiunea de pe un plan la 1/4" și este totuși găsit. O astfel de foaie este căutată și la dimensiunea casetei, pentru etichete și simboluri tipărite la o singură dimensiune pe fiecare foaie. Acest lucru necesită o scară pe ambele foi; o foaie fără scară este căutată doar la dimensiunea casetei.
- Simbolurile foarte asemănătoare se pot potrivi între ele: o priză dublă și una cvadruplă, sau două etichete de corpuri care diferă printr-o literă. Ridicați glisorul până rămân doar cele corecte și respingeți restul manual.
- Un simbol traversat de alte linii, hașuri sau text are un scor mai mic și poate avea nevoie de o setare mai joasă a glisorului.
- Casetele foarte mici sunt refuzate: „Această casetă este prea mică. Trageți-o în jurul întregului simbol.” O casetă goală este refuzată și ea: „Această casetă este aproape goală. Trageți-o în jurul unui simbol.”
- O foaie care ar fi foarte mare la dimensiunea necesară pentru acest simbol este omisă, iar rezumatul spune „1 foaie a fost prea mare pentru a fi căutată la această dimensiune a simbolului.” Încadrați un simbol mai mare sau numărați manual foaia respectivă.

Dacă nu se găsește nimic, bara de stare afișează „Nicio potrivire. Coborâți glisorul de potrivire sau încadrați simbolul mai strâns.”

## Viteză și browsere

Căutarea rulează într-un proces de fundal, deci pagina rămâne receptivă și puteți anula oricând. Fiecare foaie este mai întâi desenată la dimensiunea de lucru pe pagina în sine, ceea ce poate face ca o foaie foarte mare să se blocheze o clipă. Funcționează în versiunile actuale ale Chrome, Edge, Firefox și Safari. Căutarea pe multe foi durează mai mult; bara de progres avansează foaie cu foaie. Offline, numărarea automată funcționează când bara aplicației afișează {{ui:Pregătit pentru offline}}: {{ui:Salvare pentru offline}} păstrează și procesul de fundal. Vezi [Lucru offline](common:offline).
