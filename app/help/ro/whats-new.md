---
title: Noutăți în 0.8 și 0.8.1
summary: Numărați o legendă completă de simboluri pe toate foile deschise dintr-o singură rulare, prețuiți articolele după tarifele lucrărilor anterioare, verificați antemăsurătoarea față de stocul și termenele de livrare ale unui furnizor și noi instrumente pentru asistenți pentru toate trei, plus modificările comune din 0.8 și remedierea 0.8.1 pentru fișierele DWG.
keywords: noutăți, ce este nou, note de lansare, jurnal de modificări, modificări, 0.8, 0.8.1, versiune, funcții noi, numărare totală, legendă, legendă de simboluri, set întreg, memorie a prețurilor, lucrări anterioare, ultima lucrare, preț tipic, furnizor, stoc, termen de livrare, restanță, listă de comandă, lipsă, panoul probleme, asistent, limbi, dispozitive de intrare, rânduri ale barei de instrumente, dwg
from: a04adef6
---

Iată ce s-a schimbat în TakeoffCraft 0.8 (lansat la 2026-11-01) și 0.8.1 (2026-11-02), comparativ cu 0.7. O legendă de simboluri poate fi acum numărată pe întregul set dintr-o dată, o antemăsurătoare nouă poate porni de la prețurile lucrărilor tale anterioare, iar antemăsurătoarea poate fi verificată față de stocul și termenele de livrare ale unui furnizor. 0.8.1 este o versiune de remediere.

## Noutăți

### Numărare totală în set

- **Încadrați legenda o singură dată.** {{ui:Count everything}} din bara de instrumente citește o legendă de simboluri: trageți un dreptunghi în jurul simbolurilor și al numelor tipărite lângă ele. Fiecare simbol este listat cu imaginea și numele său, iar numele devine numele articolului. Debifați ce nu doriți, apoi alegeți {{ui:Count on N sheets}}. O bară arată foaia care este căutată, {{ui:Cancel}} oprește rularea, iar pagina rămâne utilizabilă.
- **Toate foile dintr-o singură rulare.** Fiecare simbol este numărat pe fiecare foaie deschisă. O foaie desenată la altă scară este căutată la acea scară, iar simbolurile sunt găsite rotite în orice unghi drept. Simbolurile proprii ale legendei nu sunt numărate pe foaia ei.
- **Verificare înainte de adăugare.** Fiecare total are un link pe foaie („E-103: 4”) care duce la acea foaie. Faceți clic pe o casetă dintr-o găsire pentru a o exclude și din nou pentru a o readuce. Nivelul de potrivire (50% până la 100%) doar filtrează ce a fost găsit; nimic nu se caută din nou.
- **Un singur pas de anulare.** {{ui:Add N marks}} creează câte un articol de numărare pentru fiecare simbol, cu un marcaj pe fiecare găsire. Un nume care este deja un articol de numărare al tău este refolosit. {{key:Ctrl+Z}} anulează toate articolele și marcajele. Ce acceptați alimentează și {{ui:Learned}}.
- **Simboluri sub orice unghi.** Bifați {{ui:Symbols at any angle}} înainte de numărare pentru a găsi și simboluri rotite cu un unghi care nu este drept. Căutarea rotește apoi fiecare simbol din 15 în 15 grade, iar un simbol care nu este rotund poate dura de până la de șase ori mai mult.
- **Ce este.** Potrivire simplă a simbolurilor pe foile proprii, fără model antrenat, și nimic nu părăsește calculatorul. Pe un set inventat de 200 de foi, a durat 9.4 secunde de la un capăt la altul în Chrome, pe un desktop rapid; seturile reale de planuri vor fi mai lente. Vezi [Numărare totală în set](topic:count-everything).

### Memoria prețurilor din lucrările proprii

- **TakeoffCraft își amintește tarifele tale.** Când salvați o antemăsurătoare, fiecare articol prețuit care este folosit este reținut după nume și tip: tariful materialului, tariful manoperei, pierderea și unitatea. Ultimele 12 lucrări sunt păstrate pentru fiecare nume. Ele sunt păstrate pe acest calculator, lângă Biblioteca de prețuri, niciodată în interiorul unui fișier de antemăsurătoare, iar nimic nu este trimis nicăieri.
- **Porniți o antemăsurătoare nouă din ele.** {{ui:Prices}} din bara de instrumente arată, pentru fiecare articol, tarifele ultimei lucrări, tarifele tipice și intervalul. {{ui:Use last}} sau {{ui:Use typical}} prețuiește un singur articol, iar {{ui:Price N unpriced items from memory}} completează fiecare articol care nu are încă preț. Fiecare utilizare este un pas de anulare.
- **Lucrări mai vechi.** {{ui:Learn from a past takeoff…}} reține articolele prețuite ale unei antemăsurători salvate (.json).
- **Vezi, schimbă, uită.** {{ui:Everything remembered}} listează fiecare nume; butonul de coș de gunoi uită unul, iar {{ui:Clear all prices}} uită toate. Dezactivați {{ui:Remember my prices when I save a takeoff}} pentru a opri. Un preț pe bucată nu se pune niciodată pe un articol pe ft. Vezi [Memoria prețurilor din lucrările anterioare](topic:price-memory).

### Stocul furnizorului și termenele de livrare

- **Verificare față de lista furnizorului.** {{ui:Supply}} din bara de instrumente preia lista de stoc a unui furnizor ({{ui:Add a supplier file…}}), un CSV sau o foaie de calcul, și verifică față de aceasta ce necesită antemăsurătoarea, cu pierderi. Sunt păstrate până la cinci fișiere. Nu se trimite nimic și nu se întreabă niciun furnizor: fișierul se adaugă de către utilizator.
- **Ce spune.** Articolele scurte apar primele: „Lipsă 120 EA”, „Termen de livrare 21 zile”, „Comandă în așteptare”, „Unitate diferită”, „Fără cifră de stoc” sau „În stoc”. {{ui:Longest wait wanted (days)}} pornește de la 14.
- **Lista de comandă.** {{ui:Order list (CSV)}} descarcă articolele scurte, cu cantitatea lipsă, furnizorul și termenul de livrare.
- **Prețuri în Bibliotecă.** Dacă fișierul are prețuri, {{ui:Prices into the Library}} setează prețul materialului fiecărei intrări din Bibliotecă cu același nume și aceeași unitate. Reprețuiți din Bibliotecă pentru a le aduce în antemăsurătoare.
- **În panoul Probleme.** O lipsă este un avertisment, iar un termen lung de așteptare este o notă, sub „Stoc furnizor”. Puteți accepta una cu un motiv, iar motivul se salvează în antemăsurătoare. Vezi [Verificarea stocului furnizorului și a termenelor de livrare](topic:supplier-stock).

### Asistenți AI

- **Instrumente pentru toate cele trei.** Cu asistenții permiși în {{ui:Settings}}, un asistent poate citi o legendă (`legend_open`), poate rula numărarea (`legend_count_start`, apoi `legend_count_status` și `legend_count_result`) și o poate adăuga (`legend_count_add`, care poate previzualiza mai întâi). Poate citi prețurile memorate (`prices_list`) și prețui articole din ele (`prices_apply`, care poate previzualiza mai întâi) și poate citi verificarea stocului (`supply_check`). Adăugarea unui fișier de furnizor rămâne în sarcina utilizatorului. Vezi [Folosirea TakeoffCraft cu asistenți AI](topic:use-with-ai-assistants).

### În fiecare aplicație

- **Limbi.** Cincizeci și patru de limbi în total; zece sunt noi (lituaniană, letonă, bosniacă, marathi, telugu, albaneză, afrikaans, filipineză, swahili și uzbecă). Limbile altele decât engleza sunt ciorne automate până când un vorbitor nativ le-a citit.
- **Dispozitive de intrare.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} stabilește ce face un trackpad, butoanele laterale ale unui mouse, un creion, un mouse 3D, un controler de joc sau un controler MIDI, pentru toate aplicațiile sau pentru una singură. Vezi [Folosirea trackpad-ului, a mouse-ului 3D sau a controlerului](common:input-devices).
- **Rânduri ale barei de instrumente.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} oferă {{ui:Wrap}} (la început), {{ui:2 rows}} și {{ui:1 row}}; grupurile care nu încap se derulează lateral. Vezi [Aranjarea panourilor](common:arrange-panels).
- **Panoul Probleme.** Panoul comun de avertismente și note include acum verificarea stocului furnizorului de mai sus, alături de celelalte verificări.
- **Suplimente.** Suplimentele urmează lista de suplimente a contului tău. Vezi [Suplimente și lista contului](common:addons-basics).
- **Conectați-vă asistentul AI.** CadCraft Studio este centrul: conectați asistentul o dată pentru toate cele opt aplicații. Studio nu are AI propriu.

## Corectate în 0.8.1

- **Secțiunea de clase DWG.** Secțiunea de clase a unui fișier DWG era citită ca tip greșit. Este corectată în TakeoffCraft și în alte patru aplicații.
- **Studio poate schimba limba cât rulează.** Înainte, Studio și edițiile sale împachetate erau doar în engleză. Nu s-a testat încă pe fiecare platformă în versiunea desktop; spuneți-ne dacă limba nu se schimbă.

## Încă nerealizat în această versiune

- **Fără semnătură de cod.** Windows poate avertiza, iar pe Mac faceți clic dreapta și alegeți {{ui:Open}} prima dată. Versiunile pentru magazine (Microsoft Store, Google Play, App Store) sunt suspendate, iar versiunea pentru iPad și iPhone nu a fost reconstruită pentru 0.8.1.
- **Actualizări Studio.** Programul de instalare pentru Windows și pachetele Linux verifică o dată pe zi și întreabă mai întâi. Arhiva portabilă zip doar anunță, iar macOS și APK nu se actualizează singure. Fișierul .dmg pentru macOS 0.8 urmează lansarea.
- **Conectați-vă AI-ul.** Conectarea dintr-un clic în Studio, conectorul găzduit pentru AI în browser, propria cheie API din Studio și un pachet MCP publicat nu sunt promise în această versiune.
- **Numărare totală.** Are nevoie de simboluri desenate la fel ca în legendă, iar un simbol cu un perete sau o linie lungă care trece prin el poate fi ratat. Simbolurile oglindite nu sunt găsite, iar o foaie fără scară, desenată la altă dimensiune, este căutată la dimensiunea legendei. Verificați găsirile de pe prima foaie înainte de a avea încredere în restul.
- **Stocul furnizorului.** Cifrele de stoc sunt doar la fel de actuale ca fișierul pe care îl adăugați. Verificarea nu întreabă niciodată un furnizor.
- **Limbi.** Bara aplicației în tamilă depășește spațiul disponibil.

Restul este în [Încă nerealizat](topic:not-built-yet). Pentru versiunea dinaintea acesteia, vezi [Noutăți în 0.7](topic:whats-new-0-7).
