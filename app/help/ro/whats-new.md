---
title: Noutăți în versiunea 0.7
summary: Desenele DWG și DXF se deschid ca foi cu scara lor proprie, numărări și lungimi exacte din chiar desenul, oferta aleasă a unui subcontractant ca preț al pachetului, invitații de ofertare cu prețuri sigilate, instrumente pentru asistenți pentru desene și USD din vederea de verificare 3D.
keywords: noutăți, ce e nou, note de versiune, jurnal de modificări, modificări, 0.7, versiune, funcții noi, dwg, dxf, desen, aspecte, spațiu model, scara desenului, numărare din desen, numărare CAD, blocuri, blocuri dinamice, atribute, straturi, xref, desen extern, măsurare desen, polilinie, hașură, pdf marcat, ofertă aleasă, folosire ofertă, trimitere pentru ofertare, invitație de ofertare, oferte sigilate, deschidere oferte, ofertă întârziată, înregistrări subcontractanți, csv, asistent, mcp, usd, usdz, unități, liste de unități, compact, panouri, casete de dialog, portugheză
from: ad4f0df1
---

Iată ce s-a schimbat în TakeoffCraft 0.7, comparativ cu 0.6. Desenele se deschid acum așa cum sunt, fără trasare în PDF înainte, iar un pachet de ofertare poate fi trimis subcontractanților și primit înapoi cu prețuri.

## Noutăți

### Desene DWG și DXF

- **Deschiderea unui desen ca foi.** {{ui:Deschidere planuri}} din grupul {{ui:Fișier}} ({{key:Mod+O}}, sau prin tragerea fișierelor) acceptă desene DWG și DXF alături de PDF-uri. Spațiul model și fiecare aspect devin foi în lista {{ui:Foi}}, iar o antemăsurătoare poate acoperi desene și PDF-uri împreună. Nimic nu se încarcă. Vezi [Deschiderea unui desen DWG sau DXF](topic:open-a-drawing).
- **Scara vine din desen.** Un aspect pornește la scara celei mai mari ferestre de vizualizare (viewport), numită ca presetare dacă există una, de exemplu 1/2" = 1'-0". {{ui:Model}} pornește în unitățile desenului. Un desen care nu are unități afișează „Nicio scară” până îl calibrați. {{ui:Calibrare}}, {{ui:Verificare}} și {{ui:Presetare}} au în continuare prioritate. Vezi [Scara](topic:open-a-drawing#the-scale).
- **Straturi și referințe externe.** {{ui:Straturi}} din bara foii arată sau ascunde straturile desenului. Straturile oprite sau înghețate în fișier pornesc ascunse și nu se numără decât dacă alegeți altfel. Un desen de referință extern (Xref) deschis lângă desenul gazdă se desenează și se numără acolo unde este inserat; până atunci, bara de stare spune ce lipsește. Vezi [Straturi](topic:open-a-drawing#layers).
- **PDF-ul marcat pornește de la un desen.** {{ui:Export}} › {{ui:PDF marcat}} desenează întâi ca PDF foile marcate ale unui desen, astfel că fișierul de ieșire arată marcajele și legenda fără niciun pas de trasare. Se desenează în negru sau în culorile desenului, fără tabele de stiluri de trasare. Vezi [PDF marcat](topic:export-estimate#a-marked-pdf).

### Numărări și lungimi exacte dintr-un desen

- **Numărați ce arată desenul.** {{ui:Numărare CAD}} din bara foii numără un bloc după nume (inclusiv blocurile imbricate, stările blocurilor dinamice și matricele de blocuri), tot ce are același tip pe un strat sau o valoare de text ori de atribut. Numără ce arată foaia sau întregul desen o singură dată. Adăugarea marcajelor este un singur pas de anulare, iar numărarea din nou adaugă doar ce este nou. {{ui:Numărare automată}} rămâne pentru PDF-uri și pentru simboluri care nu sunt blocuri. Vezi [Numărarea dintr-un desen](topic:count-from-a-drawing).
- **Măsurați din liniile desenului.** {{ui:Măsurare desen}} ia liniile, arcele, polyliniile, cercurile, hașurile și solidele pe care le indicați sau le selectați cu o fereastră, ca marcaje ale unui articol liniar sau de suprafață. Arcele, bombările și găurile unei hașuri ies exacte; elipsele și splinele se măsoară în coarde fine, iar bara o spune. Vezi [Măsurarea dintr-un desen](topic:measure-from-a-drawing).

### Oferte

- **Folosiți oferta unui subcontractant ca preț al pachetului.** În {{ui:Export}} › {{ui:Pachete de ofertă și nivelare…}}, alegeți {{ui:Folosire}} la o ofertă. Articolele pachetului rămân ca cantități, o linie **Ofertă aleasă** poartă prețul, articolele pe care oferta nu le include rămân la costul propriu, iar cheltuielile generale, profitul și garanția se aplică la ea. Schimbarea ofertelor este un singur pas de anulare; registrul de lucru și rezumatul ofertelor o poartă. Vezi [Folosirea unei oferte ca preț al pachetului](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Trimiteți un pachet la oferte.** {{ui:Trimitere pentru ofertare…}} sub un pachet trimite fiecărui subcontractant prin e-mail un link către o pagină care nu cere cont: văd domeniul lucrării și foile ca PDF, scriu un preț pe fiecare linie sau o marchează ca neinclusă, adaugă note și până la trei fișiere, sau refuză. {{ui:Preluare prețuri}} aduce în foaia de nivelare ce a sosit, marcat **web**. Trimiterea este disponibilă doar conturilor activate de echipa CadCraft pe durata testării (vezi mai jos). Vezi [Trimiterea unui pachet la oferte](topic:bid-invitations).
- **Sigilate până la deschidere.** Prețurile pot rămâne sigilate până la o oră de deschidere pe care o stabiliți: până atunci nu le vede nimeni, nici măcar utilizatorul. La deschidere, toate ofertele apar deodată, iar o ofertă trimisă după termenul limită este marcată ca întârziată. Vezi [Oferte sigilate și deschiderea](topic:bid-invitations#sealed-bids-and-the-opening).
- **Fișe de subcontractanți.** Contul de pe getcadcraft.com păstrează pentru fiecare firmă persoanele de contact, specialitățile, răspunsurile de calificare și datele asigurării și licenței (marcate când au trecut sau expiră în 30 de zile), împreună cu ofertele anterioare. Le importați și exportați ca CSV și le alegeți când trimiteți un pachet. Vezi [Pe site](topic:bid-invitations#on-the-website).

### Asistenți AI

- **Asistenții pot adăuga la antemăsurătoare.** Cu {{ui:Editare}} bifat, propriul asistent poate adăuga articole (`items_add`) și măsura trasee, arii și numărări pe o foaie (`marks_add`; lungimi și arii doar pe o foaie cu scară), fiecare apel fiind un singur pas de anulare.
- **Instrumente pentru asistenți pentru desene.** Pe un DWG sau DXF deschis, un asistent poate lista foile și ce se poate număra, număra exact, adăuga marcajele de numărare și măsura din geometria desenului. Fără TakeoffCraft deschis, serverul MCP CadCraft deschide un desen ca o antemăsurătoare nouă și o salvează, iar `cadcraft count` numără din linia de comandă. Vezi [Ce poate cere un asistent](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **Vederea de verificare 3D ca USD.** {{ui:Pachet USD (.usdz)}} lângă {{ui:GLB}} în vederea de verificare 3D scrie fiecare perete, planșeu, placă, stâlp de numărare și traseu ca obiect separat, numit după articolul său și purtând cantitatea sa, în metri. Un asistent o poate exporta și el (`usd_export`). Vezi [Exportul vederii 3D de verificare ca USD](topic:usd).

## În toate aplicațiile

- **Unități.** {{ui:Setări}} › {{ui:General}} › {{ui:Unități}} are câte o listă pentru lungime, arie, volum, unghi și pantă, cu dimensiunile exacte pe care le dau definițiile unităților (piciorul topografic american este o unitate separată). Dezactivați unitățile pe care nu le folosiți și ies din liste; marcați una cu steluță și lucrul nou începe în ea. Un fișier își păstrează întotdeauna propria unitate. În TakeoffCraft, listele {{ui:UM}} ale unui articol urmează comutatoarele, un articol nou începe în unitatea de lungime sau arie marcată cu steluță, pătratele de acoperiș (SQ), acrii și hectarele sunt unități noi de arie, iar o casetă de lungime acceptă semnul oricărei unități, de exemplu `3 yd`. Vezi [Unități, valori tastate și listele de unități](common:unit-lists).
- **Un aspect mai dens și panouri care se ascund.** {{ui:Setări}} › {{ui:General}} › {{ui:Densitatea aspectului}} › {{ui:Compactă}} încape mai mult pe ecran (ecranele tactile și telefoanele păstrează butoanele mari). Fiecare panou lateral are o bară de titlu subțire: trageți-o pentru a ancora sau detașa panoul, lăsați-l pe bara altui panou ca să partajați un cadru sub formă de file, fixați-l ca să alunece spre margine sau ascundeți-l și aduceți-l înapoi de la margine. Vezi [Aranjarea panourilor](common:arrange-panels#make-the-layout-denser).
- **Casetele de dialog se mută.** Trageți o casetă de dialog după bara de titlu ca să nu stea în calea desenului; revine acolo de unde ați lăsat-o. Faceți dublu clic pe bara de titlu ca s-o centrați din nou. Vezi [Mutarea unei casete de dialog](common:arrange-panels#move-a-dialog).
- **Rețete pentru asistenți AI.** Zece cereri lucrate pentru asistentul propriu (curățarea unui desen, trasarea unui set, verificarea desenelor, întrebări către un model, totalizarea unei antemăsurători, încercarea unei variante de piesă…), fiecare cu uneltele pe care le apelează și permisiunile de care are nevoie, și fiecare reluată de testele noastre. Aplicațiile nu conțin AI. Vezi [Rețete pentru asistenți AI](common:assistants-recipes).
- **Limbi.** **Português (Portugal)** este nou în {{ui:Setări}} › {{ui:General}} › {{ui:Limbă}}. Ea, împreună cu **Português (Brasil)**, **Español (México)** și **Bahasa Indonesia**, are acum toate cuvintele aplicațiilor, ca ciorne nerevizuite încă de un vorbitor nativ. Subiectele de ajutor sunt în engleză.
- **CadCraft Studio** spune de ce a eșuat verificarea actualizărilor (niciun fișier pentru sistem încă, lipsă de rețea, semnătură greșită) în loc să afișeze doar „Gata”, și nu mai readuce un card Noutăți pe care l-ați închis până apare o versiune mai nouă.

## Nu este încă în această versiune

- **0.7 nu este semnată digital.** Semnarea și pachetul Microsoft Store au trecut la 0.8, deoarece validarea certificatului nu a venit încă. Verificați SHA-256 de lângă fiecare fișier pe getcadcraft.com/download. Pe Windows, dacă SmartScreen oprește programul de instalare, alegeți {{ui:Mai multe informații}}, apoi {{ui:Rulează oricum}}. Pe Mac, prima dată, faceți clic dreapta pe CadCraft Studio și alegeți {{ui:Deschidere}}. CadCraft Studio nu este încă într-un magazin de aplicații, iar nu există încă o versiune pentru iPad sau iPhone.
- Listele de unghi și pantă din {{ui:Unități}} sunt salvate, dar niciun câmp nu le citește încă.
- **Invitațiile de ofertare sunt oprite pentru majoritatea conturilor.** Cât timp funcția este testată, e-mailurile către ofertanții din afară pleacă doar din conturile activate de echipa CadCraft. Paginile ofertanților funcționează pentru fiecare invitație deja trimisă. Ceilalți: descărcați {{ui:CSV domeniu}}, trimiteți-l singuri prin e-mail și introduceți ofertele manual.
- O fereastră CadCraft Studio nu poate trimite încă invitații de ofertare: spune să folosiți TakeoffCraft în browser. Deschiderea unei antemăsurători cu cereri trimise, nivelarea și alegerea unei oferte funcționează în Studio.
- Adendele, scrisorile de adjudecare, o foaie de domeniu pe care fiecare ofertant o semnează și reamintirile automate înainte ca o dată de asigurare să expire nu sunt create. O ofertă aleasă nu reprețuiește zona de ofertare a unei variante.
- Desene: tabelele de stiluri de trasare și fișierele CTB nu se aplică, un DXF binar este refuzat (salvați-l ca DXF ASCII sau DWG), desenele de referință externe se găsesc doar printre fișierele deschise, după numele fișierului, iar suprapunerile PDF, imaginile și obiectele OLE dintr-un desen nu se desenează și nu se numără. Numărările și scările au fost verificate pe desene de probă, nu încă pe desene dintr-o lucrare reală, deschise în programul care le-a creat.
- Un asistent poate adăuga articole și marcaje, dar nu poate muta, modifica sau șterge marcajele care există deja.

Restul se află în [Încă nerealizat](topic:not-built-yet).
