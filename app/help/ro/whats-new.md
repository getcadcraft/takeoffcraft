---
title: Noutăți în 0.9
summary: Citiți lungimile în metri, centimetri sau milimetri, arii metrice în m2 cu suprafața pereților, presetări de scară 1:75 și 1:150, unități de greutate și temperatură, Arc cu zece metode, precum și cursoare live, Urmărire și o listă de persoane.
keywords: noutăți, ce e nou, note de lansare, jurnal de modificări, 0.9, afișarea lungimilor ca, metri, centimetri, milimetri, metric, urmează global, unități, unități de afișare, m2, metri pătrați, suprafața peretelui, presetări de scară, 1:75, 1:150, greutate, kilograme, kg, tonă, ton, lb, temperatură, celsius, fahrenheit, arc, metode arc, arc în 3 puncte, rază, live, cursoare, urmărire, listă de persoane, clasă, indicii, aspect, 0.8, 0.8.1, versiune, funcții noi, numărare totală, legendă, legenda simbolurilor, întregul set, memorie a prețurilor, lucrări anterioare, ultima lucrare, preț tipic, furnizor, stoc, termen de livrare, comandă restantă, listă de comandă, lipsă, panou de probleme, asistent, limbi, dispozitive de intrare, rânduri ale barei de instrumente, dwg
from: 6182b998
---

Aceasta este lista modificărilor din TakeoffCraft 0.9, față de 0.8.1. Este o versiune mică pentru această aplicație: lungimile pot fi citite acum în metri, centimetri sau milimetri, ariile și scările urmează corect lucrările metrice, iar Arc are zece moduri de desenare. Sesiunile live arată și unde se află fiecare persoană.

## Noutăți

### Citirea lungimilor în metri, centimetri sau milimetri

- **Afișarea lungimilor ca.** {{ui:Setări}} › {{ui:TakeoffCraft}} are {{ui:Afișarea lungimilor ca}} cu {{ui:Urmează Global}}, {{ui:Picioare și inchi}}, m, cm și mm. {{ui:Urmează Global}} folosește unitatea metrică de lungime marcată cu steluță în {{ui:Setări}} › {{ui:Global}} › {{ui:Unități}}, iar picioare și inchi dacă niciuna nu este marcată. Schimbă cum se citesc lungimile pe foaie, în bara de stare și în panouri, inclusiv înălțimile, adâncimea, grosimea și nivelurile. Un număr simplu introdus într-un câmp de înălțime este citit în unitatea afișată.
- **Doar afișare.** Cantitățile, costurile și exporturile se calculează din lungimile exacte. Alegerea de 1/16, 1/8 și 1/4 inch apare doar pentru picioare și inchi. Vedeți [Afișarea lungimilor în metri](topic:show-lengths-in-meters).
- **Unități de greutate.** Un articol {{ui:Cantitate introdusă (fără desen)}} poate fi acum în lb, TON, kg sau t și poate fi prețuit pe unitate.
- **Temperatură.** Fiecare articol are un câmp opțional {{ui:Temperatură}} în editorul de articole, introdus în grade C sau F. {{ui:Afișare temperaturi ca}} din {{ui:Setări}} › {{ui:TakeoffCraft}} oferă {{ui:Urmează Global}}, °C sau °F.

### Suprafețe și scări pentru lucrări metrice

- **Suprafețe în m2 pe desen.** O arie măsurată cu un articol metric apare acum cu m2 pe eticheta desenului și în panoul de marcaje, la fel ca în tabel, în loc de SF. Regula: m2 când articolul este prețuit metric sau lungimile sunt afișate în m, cm sau mm, și SF în rest.
- **Suprafața peretelui.** Un articol liniar cu înălțime arată și suprafața peretelui (lungime ori înălțime) în lista Articolelor și ca rând de notă sub tabelul de cantități pe articol.
- **Presetări de scară 1:75 și 1:150.** Sunt în lista {{ui:Presetare}} din grupul {{ui:Scară}}, care are acum 32 de scări. Vedeți [Presetările de scară](topic:scale-presets).

### Arc cu zece metode

- Cât timp {{ui:Arc}} este activ (buton din bara de instrumente sau {{key:R}}), în bara foii apare o casetă {{ui:Metodă arc}} cu: 3 puncte; Început, Centru, Sfârșit; Început, Centru, Unghi; Început, Centru, Lungime; Început, Sfârșit, Unghi; Început, Sfârșit, Direcție; Început, Sfârșit, Rază; Centru, Început, Sfârșit; Centru, Început, Unghi; Centru, Început, Lungime. Unghiul, lungimea, raza și direcția pot fi indicate cu clic sau introduse. Funcționează la tronsoane liniare, arii și decupaje. Fișierele salvate înainte de 0.9 se deschid la fel. Vedeți [Desenarea arcelor cu zece metode](topic:draw-arcs-ten-methods).

### Lucrul împreună

- **Vedeți cursoarele celorlalți.** Într-o sesiune Live, indicatorul fiecărei persoane apare pe foaie cu numele și culoarea ei, cu o casetă punctată în jurul marcajelor pe care le-a selectat. Persoanele de pe altă foaie sunt listate cu numele foii respective. Vedeți [Lucrul live cu alții](topic:work-live).
- **Urmărirea unei persoane și lista de persoane.** Butonul {{ui:Persoane}} dintr-o sesiune Live listează fiecare persoană cu unealta pe care o folosește, foaia pe care se află și momentul ultimei modificări. {{ui:Urmărire}} mută vizualizarea odată cu a lor, iar gazda poate folosi {{ui:Cereți tuturor să mă urmărească}}. Vedeți [Urmărirea unui coleg într-o sesiune Live](topic:follow-a-teammate).

## În fiecare aplicație

- **Indicii și indiciul de pornire.** Textul care apare la trecerea cursorului este un indiciu Bootstrap, iar indiciul de pornire poate fi închis.
- **Benzi de file cu derulare.** Banda de file a unui panou care nu încape derulează în loc să fie tăiată.
- **Titluri de file.** Fila din browser afișează `<document> - TakeoffCraft | CadCraft`.
- **Aranjament.** Lista de aranjamente din {{ui:Setări}} este o listă derulantă care arată aranjamentul ales.
- **Limba.** Limba aleasă ajunge acum și la cuvintele pe care pagina le tipărește singură, precum Nou, Deschidere și Salvare. Limbile în afara englezei sunt ciorne automate până când un vorbitor nativ le-a citit.

## Limitări reale

- Afișarea lungimilor, unitățile de greutate și temperatură și presetările noi au fost verificate prin teste și pe pagină. Nu a fost verificat manual fiecare panou la fiecare unitate.
- Lista de persoane nu a fost verificată manual cu o clasă reală de profesor și elevi.
- Limbile în afara englezei sunt ciorne automate.
- Programele de instalare pentru Windows nu sunt semnate digital (Mai multe informații, apoi Rulare oricum). Imaginea de disc pentru macOS nu este notarizată (clic dreapta, apoi Deschis).

## Mai devreme: 0.8 și 0.8.1

Aceasta este lista modificărilor din TakeoffCraft 0.8 (lansată pe 2026-11-01) și 0.8.1 (2026-11-02), față de 0.7. O legendă de simboluri poate fi acum numărată pe tot setul dintr-o dată, o antemăsurătoare nouă poate porni de la prețurile lucrărilor anterioare, iar antemăsurătoarea poate fi verificată față de stocul unui furnizor. 0.8.1 este o versiune de remediere.

### Noutăți

**Numărarea tuturor din set**

- **Încadrați legenda o dată.** {{ui:Numărare totală}} din bara de instrumente citește o legendă de simboluri: trageți un chenar în jurul simbolurilor și al numelor scrise alături. Fiecare simbol este listat cu imaginea și numele său, iar numele devine numele articolului. Debifați ce nu doriți, apoi alegeți {{ui:Numărare pe N foi}}. O bară arată foaia căutată, {{ui:Anulare}} oprește rularea, iar pagina rămâne utilizabilă.
- **Toate foile într-o singură rulare.** Fiecare simbol este numărat pe fiecare foaie deschisă. O foaie desenată la altă scară este căutată la acea scară, iar simbolurile sunt găsite rotite în orice unghi drept. Simbolurile legendei nu sunt numărate pe propria ei foaie.
- **Revizuire înainte de adăugare.** Fiecare total are un link pe foaie („E-103: 4”) care duce la foaia respectivă. Faceți clic pe un chenar al unei găsiri ca să îl lăsați afară, și din nou ca să îl aduceți înapoi. Nivelul de potrivire (50% până la 100%) doar filtrează ce s-a găsit; nimic nu este căutat din nou.
- **Un singur pas de anulare.** {{ui:Adăugare N marcaje}} face un articol de numărare pentru fiecare simbol, cu un marcaj pe fiecare găsire. Un nume care este deja un articol de numărare propriu este refolosit. {{key:Ctrl+Z}} ia înapoi toate articolele și marcajele. Ce acceptați alimentează și {{ui:Învățat}}.
- **Simboluri în orice unghi.** Bifați {{ui:Simboluri sub orice unghi}} înainte de numărare ca să găsiți și simboluri rotite cu un unghi care nu este drept. Căutarea rotește fiecare simbol la fiecare 15 grade, iar un simbol care nu este rotund poate dura de până la șase ori mai mult.
- **Ce este.** Potrivire simplă a simbolurilor pe foile proprii, fără model antrenat, iar nimic nu părăsește calculatorul. Pe un set inventat de 200 de foi, a durat 9.4 secunde de la un capăt la altul în Chrome, pe un desktop rapid; seturile reale de planuri vor fi mai lente. Vedeți [Numărarea tuturor din set](topic:count-everything).

**Memoria prețurilor din lucrările proprii**

- **TakeoffCraft își reține prețurile.** Când salvați o antemăsurătoare, fiecare articol prețuit folosit este reținut după nume și tip: prețul materialului, al manoperei, pierderea și unitatea. Ultimele 12 lucrări sunt păstrate pentru fiecare nume. Este păstrat pe acest calculator, lângă Biblioteca de prețuri, niciodată în fișierul antemăsurătorii, iar nimic nu este trimis nicăieri.
- **Începeți o antemăsurătoare nouă din el.** {{ui:Prețuri}} din bara de instrumente arată, pentru fiecare articol, prețurile ultimei lucrări, prețurile tipice și intervalul. {{ui:Folosire ultimul}} sau {{ui:Folosire tipic}} prețuiește un articol, iar „Prețuire N articole neprețuite din memorie” umple fiecare articol care nu are încă preț. Fiecare folosire este un singur pas de anulare.
- **Lucrările anterioare.** {{ui:Învățare dintr-o antemăsurătoare anterioară…}} reține articolele prețuite ale unei antemăsurători salvate (.json).
- **Vedeți, schimbați, uitați.** {{ui:Tot ce este memorat}} listează fiecare nume; butonul coș uită unul, iar {{ui:Golire toate prețurile}} uită tot. Debifați {{ui:Memorează prețurile mele când salvez o antemăsurătoare}} ca să opriți. Un preț pe bucată nu este niciodată pus pe un articol pe picior. Vedeți [Memoria prețurilor din lucrările anterioare](topic:price-memory).

**Stocul furnizorului și termenele de livrare**

- **Verificare față de lista unui furnizor.** {{ui:Aprovizionare}} din bara de instrumente primește lista de stoc a unui furnizor ({{ui:Adăugare fișier de furnizor…}}), un CSV sau o foaie de calcul, și verifică ce are nevoie antemăsurătoarea, cu pierderi, față de ea. Se păstrează până la cinci fișiere. Nimic nu este trimis și nimic nu întreabă un furnizor: fișierul este adus de utilizator.
- **Ce spune.** Articolele scurte apar primele: „Lipsă 120 EA”, „Termen de livrare 21 zile”, „În comandă restantă”, „Unitate diferită”, „Fără cifră de stoc” sau „În stoc”. {{ui:Cea mai lungă așteptare dorită (zile)}} pornește de la 14.
- **Listă de comandă.** {{ui:Listă de comandă (CSV)}} descarcă articolele în lipsă, cu cantitatea lipsă, furnizorul și termenul de livrare.
- **Prețuri în Bibliotecă.** Dacă fișierul are prețuri, {{ui:Prețuri în Bibliotecă}} setează prețul materialului fiecărui element de bibliotecă cu același nume și aceeași unitate. Reprețuiți din Bibliotecă ca să le aduceți în antemăsurătoare.
- **În panoul Probleme.** O lipsă este un avertisment, iar o așteptare lungă este o notă, sub „Stocul furnizorului”. Puteți accepta una cu un motiv, iar motivul este salvat în antemăsurătoare. Vedeți [Verificarea stocului furnizorului și a termenelor de livrare](topic:supplier-stock).

**Asistenți AI**

- **Unelte pentru toate trei.** Cu asistenții permiși în {{ui:Setări}}, un asistent poate citi o legendă (`legend_open`), rula numărarea (`legend_count_start`, apoi `legend_count_status` și `legend_count_result`) și o poate adăuga (`legend_count_add`, care poate previzualiza înainte). Poate citi prețurile memorate (`prices_list`) și prețui articole din ele (`prices_apply`, care poate previzualiza înainte) și poate citi verificarea stocului (`supply_check`). Adăugarea unui fișier de furnizor rămâne în sarcina utilizatorului. Vedeți [Utilizarea TakeoffCraft cu un asistent AI](topic:use-with-ai-assistants).

**În fiecare aplicație**

- **Limbi.** 54 de limbi în total; zece sunt noi (lituaniană, letonă, bosniacă, marathi, telugu, albaneză, afrikaans, filipineză, swahili și uzbeacă). Limbile în afara englezei sunt ciorne automate până când un vorbitor nativ le-a citit.
- **Dispozitive de intrare.** {{ui:Setări}} › {{ui:Global}} › {{ui:Dispozitive de intrare}} stabilește ce face un trackpad, butoanele laterale ale mouse-ului, un creion, un mouse 3D, un controler de joc sau un controler MIDI, pentru toate aplicațiile sau pentru una singură. Vedeți [Utilizarea unui trackpad, a unui mouse 3D sau a unui controler](common:input-devices).
- **Rânduri ale barei de instrumente.** {{ui:Setări}} › {{ui:General}} › {{ui:Rânduri ale barei de instrumente}} oferă {{ui:Încadrare}} (la pornire), {{ui:2 rânduri}} și {{ui:1 rând}}; grupurile care nu încap derulează lateral. Vedeți [Aranjarea panourilor](common:arrange-panels).
- **Panoul Probleme.** Panoul comun de avertismente și note include acum verificarea stocului furnizorului de mai sus, alături de celelalte verificări.
- **Suplimente.** Suplimentele urmează lista de suplimente din contul propriu. Vedeți [Suplimente și lista din cont](common:addons-basics).
- **Conectarea AI-ului.** CadCraft Studio este centrul: conectați asistentul o dată, pentru toate cele opt aplicații. Studio nu are AI propriu.

### Remediat în 0.8.1

- **Secțiunea de clase a unui DWG.** Secțiunea de clase a unui fișier DWG era citită ca tip greșit. Este remediat în TakeoffCraft și în alte patru aplicații.
- **Studio poate schimba limba cât timp rulează.** Înainte, Studio și edițiile sale împachetate erau doar în engleză. Nu a fost testat în versiunea desktop pe fiecare platformă; spuneți-ne dacă limba nu se schimbă.

### Nu este încă în această versiune

- **Nu este semnată digital.** Windows poate avertiza, iar pe Mac faceți clic dreapta și alegeți {{ui:Deschis}} prima dată. Versiunile pentru magazine (Microsoft Store, Google Play, App Store) sunt suspendate, iar versiunea pentru iPad și iPhone nu a fost reconstruită pentru 0.8.1.
- **Actualizările Studio.** Programul de instalare pentru Windows și pachetele pentru Linux verifică o dată pe zi și întreabă înainte. Arhiva portabilă doar anunță, iar macOS și APK nu se actualizează singure. Fișierul .dmg pentru macOS 0.8 urmează lansarea.
- **Conectarea AI-ului.** Conectarea dintr-un singur clic în Studio, conectorul găzduit pentru AI în browser, propria cheie API în Studio și un pachet MCP publicat nu sunt promise în această versiune.
- **Numărarea tuturor.** Are nevoie de simboluri desenate la fel ca în legendă, iar un simbol cu un perete sau o linie lungă care trece prin el poate fi ratat. Simbolurile oglindite nu sunt găsite, iar o foaie fără scară, desenată la altă dimensiune, este căutată la dimensiunea legendei. Verificați găsirile de pe prima foaie înainte să aveți încredere în restul.
- **Stocul furnizorului.** Cifrele de stoc sunt doar la fel de actuale ca fișierul pe care îl adăugați. Verificarea nu cere niciodată nimic unui furnizor.
- **Limbi.** Bara aplicației în tamilă depășește spațiul.

Restul se găsește în [Încă nerealizat](topic:not-built-yet). Pentru versiunea anterioară, vedeți [Noutăți în 0.7](topic:whats-new-0-7).
