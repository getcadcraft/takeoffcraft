---
title: Extragerea cantităților dintr-un model al clădirii
summary: Deschideți modelul IFC al arhitectului, vedeți-l în 3D, alegeți pereții, planșeele, ușile și restul după tip, material, strat sau dimensiune și aduceți numărul, lungimile, suprafețele și volumele lor în extragerea de cantități. O copie mai nouă a modelului actualizează aceleași cantități.
keywords: model, extragere de cantități din model, vedere 3D, faceți clic pe o piesă, găsiți rândul, material, strat, straturi de perete, gips-carton, izolație, dimensiuni uși, dimensiuni ferestre, tabel goluri, csv, 3D, BIM, IFC, RVT, model al clădirii, cantități, pereți, planșee, uși, ferestre, stâlpi, încăperi, după tip, după nivel, actualizare, model mai nou, dezvoltarea proiectului
from: 8c4c12c9
---

Nu trebuie să așteptați următorul set de planșe. Când arhitectul trimite modelul clădirii, deschideți-l aici și luați cantitățile direct din el. Modelul este citit pe acest calculator; nimic nu este trimis nicăieri.

## Pași

1. Alegeți {{ui:Model}} din bara de instrumente și selectați fișierul `.ifc` al modelului sau deschideți-l cu {{ui:Open plans}}, ca orice alt fișier.
2. {{ui:Model takeoff}} se deschide cu câte un rând pentru fiecare categorie și tip: pereți după tipul de perete, planșee după tipul de planșeu, uși după tipul de ușă și așa mai departe. Fiecare rând arată numărul și unitatea în care se măsoară categoria.
3. Setați {{ui:Group by}} la {{ui:Category}} pentru un total rapid sau la {{ui:Category, type and level}} pentru a împărți fiecare tip pe etaj.
4. Debifați rândurile pe care nu le doriți. {{ui:Find}} restrânge lista. Debifarea unui rând ascunde și piesele lui din imaginea 3D.
5. Dați modelului un {{ui:Model name}} pe care îl veți păstra pentru toată lucrarea, de exemplu numele proiectului.
6. Alegeți {{ui:Add to the takeoff}}. Fiecare cantitate devine o cantitate tipizată în lista de articole. Denumiți-o, prețuiți-o și atașați-i ansambluri ca la orice alt articol.

## Vedeți modelul în 3D

{{ui:Show the model in 3D}} desenează modelul deasupra tabelului, cu câte o culoare pentru fiecare rând (pătrățelul colorat de lângă numele rândului). Trageți pentru a-l roti, țineți {{key:Shift}} și trageți pentru a-l muta, folosiți rotița pentru zoom și alegeți {{ui:Fit}} sau {{ui:Reset}} pentru a reveni.

- **Click a part.** Faceți clic pe o piesă din imagine și rândul ei este selectat în tabel, cu toate piesele rândului luminate și restul estompate. Faceți clic din nou pe aceeași piesă și, dacă ea se află în mai multe rânduri (un perete din straturile sale), este selectat rândul următor.
- **Click a row.** Faceți clic pe un rând din tabel pentru a-i lumina piesele. Faceți clic din nou sau pe spațiul gol din imagine pentru a le dezactiva.
- Încăperile nu sunt desenate, pentru că volumul unei încăperi ar ascunde clădirea.
- Un model foarte mare păstrează doar o casetă simplă pentru unele piese, ca să încapă în memorie; panoul spune câte. Numerele nu se modifică.

Dacă acest calculator nu poate desena 3D, tabelul funcționează ca înainte.

## Gruparea după material, strat sau dimensiune

{{ui:Group by}} are trei alegeri în plus:

- {{ui:Category and material}}: un perete, planșeu sau acoperiș format din straturi primește pentru materialul fiecărui strat un rând propriu, astfel încât gips-cartonul, montanții și izolația pot fi prețuite separat. O piesă a clădirii cu un singur material primește rândul acelui material, iar una fără material rămâne într-un rând numit „Fără material denumit”.
- {{ui:Category and layer}}: la fel, cu grosimea stratului în rând („Izolație, 100 mm”).
- {{ui:Category, type and door or window size}}: ușile și ferestrele sunt împărțite după lățime și înălțime (de exemplu 3'-0" × 6'-8" sau 914 × 2,032 mm).

Pentru un strat, suprafața este fața proprie a peretelui (sau suprafața în plan ori suprafața planșeului sau a acoperișului), iar volumul este această suprafață înmulțită cu grosimea stratului. Nota rândului spune câte numere au venit dintr-un strat. Straturile unui perete se adună până la volumul pe care modelul îl declară pentru el.

## Salvarea rândurilor sau a golurilor ca CSV

{{ui:Save rows as CSV}} salvează rândurile bifate, cu unitățile în fiecare antet, pentru o foaie de calcul. {{ui:Save openings schedule as CSV}} (doar când modelul are uși sau ferestre) salvează fiecare ușă și fereastră după tip, nivel și dimensiune, cu numărul lor.

## Ce se măsoară

| Categorie | Cantități |
|---|---|
| Pereți | număr, lungime, suprafața peretelui (o față, golurile scăzute), volum |
| Planșee, plăci, tavane și alte acoperiri | număr, suprafață în plan, volum |
| Acoperișuri | număr, suprafață în plan, suprafața acoperișului, volum |
| Tălpi de fundare | număr, suprafață în plan, volum |
| Stâlpi, grinzi și bare | număr, lungime de-a lungul barei, volum |
| Balustrade, conducte, canale de aer și trasee de cablu | număr, lungime |
| Scări | număr, volum |
| Încăperi | număr, suprafața podelei, volum |
| Uși, ferestre și restul | număr |

Acolo unde autorul modelului a declarat o cantitate în fișier, se folosește acel număr. În caz contrar, numărul este măsurat din forma elementului. Fiecare cantitate păstrează o notă care spune care dintre acestea a fost folosită și câte elemente au dat un număr.

:::note
Lungimea unui perete măsurată din formă merge de la un capăt la celălalt, astfel că doi pereți care se suprapun într-un colț includ amândoi colțul. Un volum necesită o formă închisă: un element a cărui formă nu este închisă este numărat, dar nu dă volum. Un element de perete curb sau cu colțuri este măsurat ca jumătate din toate fețele sale verticale, iar nota lui spune asta.
:::

## Când sosește un model mai nou

Deschideți fișierul mai nou și scrieți același {{ui:Model name}}. Înainte de a adăuga ceva, panoul arată câte cantități sunt noi, câte s-au schimbat și de la ce valoare la ce valoare și ce cantități din copia anterioară nu mai există în model. Alegeți {{ui:Add to the takeoff}}: cantitățile modificate primesc noile numere, iar numele, tarifele, pierderile și ansamblurile rămân neschimbate. Cantitățile care au dispărut din model își păstrează vechile numere; eliminați-le manual dacă proiectul le-a scos.

Numele tipului și al nivelului sunt modul în care o cantitate este recunoscută. Dacă arhitectul redenumește un tip de perete, acesta apare ca o cantitate nouă, iar cea veche este listată ca dispărută.

## Fișierele citite

Fișiere IFC (IFC2x3, IFC4 și IFC4.3). Un fișier IFC cu drumuri, căi ferate sau poduri aduce în continuare direct cantitățile sale de infrastructură, ca înainte.

TakeoffCraft nu citește fișiere `.rvt` în această versiune. Dacă arhitectul lucrează în Revit, cereți-i un export IFC al modelului (File, Export, IFC) și deschideți acel fișier.

Un model poate aduce până la 500 de cantități deodată. Dacă sunt mai multe, debifați rânduri sau grupați după categorie.
