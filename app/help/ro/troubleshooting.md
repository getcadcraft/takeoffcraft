---
title: Depanare
summary: Simptome, cauze și remedieri pentru mesajele și surprizele pe care le puteți întâlni în TakeoffCraft, citate așa cum le afișează aplicația.
keywords: probleme, erori, nu funcționează, remediere, ajutor, refuzat, nu măsoară, fără scară, marcaje lipsă, export eșuat, offline, tactil
from: cd319c9b
---

TakeoffCraft explică majoritatea refuzurilor în bara de stare din partea de jos a ferestrei. Găsiți mesajul de mai jos.

## Deschiderea fișierelor

| Mesaj sau simptom | Cauză | Remediere |
|---|---|---|
| Cititorul PDF nu a putut fi încărcat. Reîncărcați pagina pentru a încerca din nou. | Cititorul PDF al aplicației nu s-a încărcat, de obicei pentru că sunteți offline și aplicația nu a fost salvată pentru utilizare offline. | Reconectați-vă și reîncărcați. Apoi alegeți {{ui:Salvare pentru offline}} și așteptați {{ui:Pregătit pentru offline}}; vezi [Lucrul offline](common:offline). |
| (nume) este protejat cu parolă. Deschideți o copie neprotejată. | PDF-ul cere o parolă pentru a fi deschis. | Cereți o copie neprotejată sau eliminați parola într-un program PDF de încredere. |
| (nume) nu a putut fi citit ca PDF (…) | Fișierul este deteriorat sau nu este într-adevăr un PDF. | Descărcați-l din nou sau salvați-l din nou din programul care l-a creat. |
| (nume) este deja deschis. | Același PDF (același conținut) este deschis. | Nu este nimic de făcut. |
| TakeoffCraft deschide fișiere PDF și proiecte .takeoff.json. Omise: … | Celelalte tipuri de fișiere au fost eliminate. | Convertiți mai întâi desenele în PDF. |
| Nu se întâmplă nimic când trag fișiere | Fișierele au fost lăsate în afara ferestrei browserului sau browserul a deschis PDF-ul într-o filă nouă. | Trageți pe pagina TakeoffCraft; cadrul „Trageți PDF-uri sau un .takeoff.json” arată când va funcționa. |
| Deschiderea unui set mare durează | Fiecare PDF este citit integral pentru a-i obține amprenta. | Așteptați să dispară mesajul „Se deschide (nume)…”. Miniaturile se completează pe măsură ce derulați. |

## Măsurarea

| Mesaj sau simptom | Cauză | Remediere |
|---|---|---|
| Deschideți mai întâi un PDF. | Nu este deschisă nicio foaie. | Deschideți un PDF. |
| Această foaie nu are încă scară, deci nu poate fi măsurată. Alegeți o presetare de scară sau calibrați mai întâi (numărările funcționează fără). | Uneltele liniar, arie, cerc și decupaj au nevoie de o scară. | [Stabiliți scara](topic:set-the-scale). |
| Creați mai întâi un articol liniar (numiți-l sub Articole), apoi dați clic pe foaie. | Nu există niciun articol de acel tip. | Completați formularul {{ui:Articol nou}} care s-a deschis și alegeți {{ui:Adăugare}}. |
| Alegeți mai întâi un articol de măsurat (panoul Articole). | Articolul curent a fost șters. | Dați clic pe un articol sub {{ui:Articole}}. |
| Un traseu are nevoie de cel puțin două puncte. | Ați terminat după un singur clic. | Dați clic în cel puțin două puncte. |
| O suprafață are nevoie de cel puțin trei puncte. | Prea puține colțuri. | Dați clic în cel puțin trei colțuri. |
| Conturul se intersectează cu el însuși, deci suprafața sa ar fi greșită. Desenați-l din nou fără să se intersecteze. | O formă în opt. | Desenați-o ca două suprafețe sau parcurgeți marginea în ordine. |
| Acele puncte nu includ nicio suprafață. | Toate punctele sunt pe o singură linie. | Dați clic pe colțuri care delimitează un spațiu. |
| Selectați mai întâi un marcaj de suprafață (unealta Selectare), apoi alegeți Decupaj și desenați golul în interiorul lui. | Decupajul are nevoie de o suprafață selectată. | Apăsați {{key:V}}, dați clic pe suprafață, apoi {{key:X}}. |
| Un decupaj trebuie să fie complet în interiorul suprafeței. | Golul intersectează sau iese din contur. | Desenați golul în interiorul suprafeței. |
| Decupajele nu se pot suprapune între ele. | Două goluri se suprapun. | Desenați un gol în jurul amândurora sau păstrați-le separate. |
| … Punctul a fost pus la loc. | Un colț tras ar face conturul să se intersecteze sau ar împinge un gol în afara lui. | Trageți într-un loc care păstrează forma validă. |
| Dați clic pe un punct de pe marginea cercului, departe de centru. | Al doilea clic a fost prea aproape de centru. | Dați clic mai departe. |
| Clicurile mută foaia în loc să adauge puncte | Cursorul s-a mișcat mai mult de câțiva pixeli cât butonul era apăsat; aceasta contează ca tragere. | Dați clic fără să mișcați, mai ales pe un touchpad. |
| Shift nu fixează | Plasați un punct pe un arc sau desenați un cerc. | Agățarea la 45° se aplică doar segmentelor drepte. |
| Punctele sar pe o linie apropiată | Agățarea pe liniile desenului este pornită. | Măriți pentru a da clic între linii sau apăsați {{key:F3}} pentru a dezactiva agățarea. |
| Nu apare niciun marcaj de agățare | Agățarea este oprită, foaia este scanată sau unealta nu fixează (Numărare, Numărare automată, lipire). | Apăsați {{key:F3}}; pe o scanare nu există linii la care să se fixeze. |
| Lungimea este greșită | Scara este greșită (adesea un PDF redimensionat cu o presetare). | Folosiți {{ui:Verificare}} pe o cotă cunoscută, apoi {{ui:Calibrare}}. |

## Scara

| Mesaj sau simptom | Cauză | Remediere |
|---|---|---|
| Alegeți două puncte mai depărtate. | Punctele de calibrare sunt aproape unul peste altul. | Calibrați pe o cotă mai lungă. |
| Un mesaj în caseta de calibrare, precum „Distanța nu a putut fi citită” | Distanța este scrisă într-o formă pe care TakeoffCraft nu o poate citi. | Vezi [Introducerea lungimii, a ratei și a procentului](topic:entry-formats). |
| Această foaie nu are încă scară, deci nu este nimic de verificat. Calibrați-o sau alegeți o presetare. | {{ui:Verificare}} pe o foaie fără scară. | Stabiliți mai întâi o scară. |
| Lista {{ui:Presetare}} este estompată | Nu este deschisă nicio foaie. | Deschideți un PDF. |

## Cantități și formule

| Mesaj sau simptom | Cauză | Remediere |
|---|---|---|
| Incomplet: … (nu intră în totaluri) | O eroare de formulă sau marcaje pe foi fără scară. | Vezi [Citirea cantităților și a devizului](topic:read-quantities#the-incomplete-warning). |
| +(n) nescalate lângă un articol | Unele dintre marcajele sale sunt pe foi fără scară. | Dați acelor foi o scară. |
| Eroare de formulă: … | Formula nu poate fi calculată. | Vezi [Limbajul formulelor](topic:formulas#errors). |
| Acest articol are marcaje, deci tipul său nu poate fi schimbat. | Tipul este blocat odată ce există marcaje. | Creați un articol nou de celălalt tip și redesenați marcajele cu el. |
| Un articol are nevoie de un nume. | Câmpul de nume a fost golit. | Scrieți un nume. |
| Scrieți o sumă precum 12.50. / Scrieți un procent precum 10 sau 7.5. | Un tarif sau o pierdere nu au putut fi citite. | Vezi [Introducerea lungimii, a ratei și a procentului](topic:entry-formats). |
| Un total pare dublat | Articolul are propriile tarife și componente care poartă același cost. | Puneți tarifele proprii ale articolului la 0 când componentele poartă costul. |
| Marcajele acestui articol sunt pe PDF-uri care nu sunt deschise. | Ați dat clic pe un articol ale cărui marcaje sunt toate pe PDF-uri pe care nu le-ați deschis. | Deschideți acele PDF-uri; numele lor sunt listate sub {{ui:Foi}}. |

## Numărare automată

| Mesaj sau simptom | Cauză | Remediere |
|---|---|---|
| Caseta este prea mică. Trageți-o în jurul întregului simbol. | Caseta este minusculă. | Măriți și încadrați tot simbolul. |
| Caseta este aproape goală. Trageți-o în jurul unui simbol. | Caseta conține doar hârtie. | Încadrați simbolul propriu-zis. |
| Nicio potrivire. Coborâți glisorul {{ui:Potrivire}} sau încadrați simbolul mai strâns. | Nimic nu a obținut un scor suficient de mare. | Încadrați simbolul mai strâns sau trageți glisorul {{ui:Potrivire}} mai jos. |
| Prea multe potriviri, inclusiv simboluri greșite | Simboluri asemănătoare au scoruri apropiate de cel real. | Ridicați glisorul {{ui:Potrivire}} și dați clic pe casetele greșite pentru a le respinge. |
| Potriviri lipsă pe alte foi | Acele foi desenează simbolul la altă dimensiune sau la un unghi care nu este un pas de 90°. | Căutați pe acele foi cu o casetă desenată acolo sau numărați manual. |
| (n) foi au fost prea mari pentru a fi căutate la această dimensiune a simbolului. | Foaia ar fi prea mare la dimensiunea de lucru. | Încadrați un simbol mai mare sau numărați acea foaie manual. |
| Căutarea a eșuat: … | Căutarea din fundal s-a oprit. | Încercați din nou; reîncărcați pagina dacă se repetă (salvați mai întâi). Offline, funcționează doar după ce bara aplicației arată {{ui:Pregătit pentru offline}}. |
| Tragerea desenează o casetă în loc să mute foaia | Așa funcționează {{ui:Numărare automată}}. | Țineți apăsat {{key:Space}} și trageți sau trageți cu butonul din mijloc. |

## Salvarea și exportul

| Mesaj sau simptom | Cauză | Remediere |
|---|---|---|
| Nimic de exportat încă: creați un articol și măsurați-l. | Nu există articole. | Creați mai întâi un articol. |
| Nu există încă marcaje pe PDF-urile deschise. | {{ui:PDF marcat}} nu are ce să deseneze pe PDF-urile deschise. | Deschideți PDF-urile care au marcaje. |
| Acest PDF este protejat cu parolă sau criptat, deci o copie marcată nu poate fi scrisă. … | PDF-ul este criptat. | Exportați {{ui:XLSX}} în schimb sau folosiți o copie necriptată a PDF-ului (atunci are nevoie de propria antemăsurătoare, pentru că este alt fișier). |
| PDF-ul marcat nu a putut fi scris: … | Adesea: offline, iar aplicația nu a fost salvată pentru utilizare offline, deci lipsește scriitorul PDF. | Conectați-vă la internet și alegeți din nou {{ui:PDF marcat}}. Pentru a evita asta, alegeți {{ui:Salvare pentru offline}} și așteptați {{ui:Pregătit pentru offline}}. |
| Un singur PDF marcat descărcat | Browserul a blocat mai multe descărcări simultan. | Permiteți descărcări multiple pentru acest site și exportați din nou. |
| (fișier) nu este un proiect TakeoffCraft (nu este JSON valid). / Acesta nu este un fișier de proiect TakeoffCraft. | Fișier greșit sau deteriorat. | Alegeți fișierul `.takeoff.json`. |
| Acest proiect a fost salvat de o versiune mai nouă de TakeoffCraft. Deschideți-l acolo. | Fișierul provine dintr-o versiune mai nouă. | Deschideți-l în versiunea mai nouă. |
| (n) marcaje au fost deteriorate și lăsate deoparte. | O parte din fișier a fost deteriorată sau editată manual. | Restul s-a deschis. Desenați din nou marcajele lipsă sau deschideți o copie mai veche. |
| Marcaje lipsă după redeschidere | PDF-urile nu sunt deschise sau unul dintre ele s-a schimbat. | Vezi [Salvarea și redeschiderea unei antemăsurători](topic:save-and-reopen#when-a-pdf-has-changed). |
| Browserul întreabă „Părăsiți site-ul?” | Există modificări nesalvate. | Rămâneți și salvați cu {{key:Mod+S}}. |

## Taste și mouse

| Simptom | Cauză | Remediere |
|---|---|---|
| Tastele cu litere nu fac nimic | Cursorul este într-un câmp (căutare, editorul de articole, tabel). | Dați clic pe foaie sau apăsați {{key:Tab}} pentru a ieși din câmp. |
| Rotița mărește în loc să deruleze | Rotița mărește mereu foaia. | Trageți pentru a muta foaia. |
| Întreaga pagină a devenit mai mare sau mai mică | Zoomul browserului ({{key:Mod+Plus}} sau {{key:Mod+Minus}}). | Apăsați {{key:Mod+0}}. Măriți foaia cu rotița sau cu {{key:Plus}} și {{key:Minus}} simple. |
| Un marcaj a dispărut când am apăsat Backspace | Backspace șterge marcajul selectat când nu desenați. | {{key:Mod+Z}} îl readuce. |
| Clicul dreapta nu termină pe Mac | Control-clicul ajunge ca un clic normal. | Folosiți un clic cu două degete, cu clic secundar activat, sau apăsați {{key:Enter}}. |

## Ecrane tactile

Pe un ecran tactil:

- **Atingerea** plasează un punct (sau selectează un marcaj cu {{ui:Selectare}}). Tragerea cu un deget mută foaia.
- **Două degete** ciupesc pentru zoom în jurul punctului dintre ele și mută când se deplasează împreună. Așezarea unui al doilea deget anulează ce a început primul, deci un ciupit nu lasă niciodată un punct.
- **Încheiați** un traseu sau un contur printr-o **apăsare lungă** (clicul din dreapta), printr-o **atingere dublă** sau cu {{ui:Încheiere}} din bara de jos a foii. Aceeași bară are {{ui:Spate}} (ia înapoi ultimul punct) și {{ui:Anulare}}. Suprafețele se închid și atingând primul punct.
- Degetele au ținte mai mari: punctele se fixează, se închid și se aleg de la o distanță mai mare, iar mânerele de colț sunt mai mari.

Introducerea lungimilor necesită o tastatură; tastatura de pe ecran funcționează când caseta {{ui:Introducere}} este activă.

Pe o tabletă, o tastatură și un mouse sau un touchpad fac măsurarea mult mai ușoară.

## Lucrul offline

| Buton sau simptom | Cauză | Remediere |
|---|---|---|
| {{ui:Nu s-a putut salva}} | Unele fișiere ale aplicației nu s-au descărcat la salvarea pentru utilizare offline. | Verificați conexiunea și alegeți din nou butonul. |
| {{ui:Modul offline nu este disponibil}} | Ferestrele private și unele calculatoare administrate blochează copiile offline. | Folosiți o fereastră normală sau alt browser. |
| „Se salvează…” nu începe niciodată | Sunteți offline; salvarea are nevoie de conexiune. | Salvați când sunteți online. |
| Aplicația este veche după o actualizare | Copia offline este dintr-o zi anterioară. | Online, alegeți {{ui:Pregătit pentru offline}}, apoi {{ui:Salvare din nou (obținere a celei mai noi versiuni)}}. |
| Vreți spațiul înapoi | Copia offline are circa 6 MB. | Alegeți {{ui:Pregătit pentru offline}}, apoi {{ui:Eliminare a copiei offline}}. |

Vezi [Lucrul offline](common:offline).

## Încă blocat

Reîncărcați pagina dacă aplicația nu mai răspunde. Antemăsurătoarea dvs. se pierde la reîncărcare dacă nu ați salvat, deci salvați mai întâi cu {{key:Mod+S}} dacă puteți. Pentru întrebări despre browsere vezi [Browsere și calculatoare](common:browsers).
