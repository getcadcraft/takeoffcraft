---
title: Noutăți în 0.9 (versiune anterioară)
summary: Citiți lungimile în metri, centimetri sau milimetri, suprafețe metrice în m2 cu suprafața peretelui, presetări de scară 1:75 și 1:150, unități de greutate și temperatură, Arc cu zece metode, precum și cursoare live, urmărire și o listă de persoane.
keywords: noutăți 0.9, versiune anterioară, noutăți, ce este nou, note de lansare, jurnal de modificări, 0.9, afișarea lungimilor ca, metri, centimetri, milimetri, metric, urmează global, unități, unități de afișare, m2, metri pătrați, suprafața peretelui, presetări de scară, 1:75, 1:150, greutate, kilograme, kg, tonă metrică, ton, lb, temperatură, celsius, fahrenheit, arc, metode arc, arc în 3 puncte, rază, live, cursoare, urmărire, listă de persoane, clasă, tooltip-uri, aranjare în pagină, noutăți, ce este nou, note de lansare, jurnal de modificări, modificări, 0.8, 0.8.1, versiune, funcții noi, numărare totală, legendă, legendă de simboluri, tot setul, memoria prețurilor, lucrări anterioare, ultima lucrare, preț tipic, furnizor, stoc, termen de livrare, restanță, listă de comandă, lipsă, panoul probleme, asistent, limbi, dispozitive de intrare, rânduri ale barei de instrumente, DWG
from: f4322ba2
---

Iată ce s-a schimbat în TakeoffCraft 0.9, comparativ cu 0.8.1. Este o versiune mică pentru această aplicație: lungimile pot fi citite acum în metri, centimetri sau milimetri, suprafețele și scările urmează corect lucrul metric, iar Arc are zece moduri de desenare. Sesiunile live arată și cine unde se află.

## Noutăți

### Citirea lungimilor în metri, centimetri sau milimetri

- **Show lengths as.** {{ui:Settings}} › {{ui:TakeoffCraft}} are {{ui:Show lengths as}} cu {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm și mm. {{ui:Follow Global}} folosește unitatea metrică de lungime marcată cu steluță în {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}, iar dacă nu este marcată nicio unitate, folosește picioare și inchi. Schimbă modul în care se citesc lungimile pe foaie, în bara de stare și în panouri, inclusiv înălțimile, adâncimea, grosimea și nivelurile. Un număr simplu introdus într-un câmp de înălțime este citit în unitatea afișată.
- **Display only.** Cantitățile, costurile și exporturile sunt calculate din lungimile exacte. Alegerea 1/16, 1/8 și 1/4 inch apare doar pentru picioare și inchi. Vezi [Afișarea lungimilor în metri](topic:show-lengths-in-meters).
- **Weight units.** Un articol {{ui:Typed quantity (no drawing)}} poate fi acum în lb, TON, kg sau t și poate fi prețuit pe unitate.
- **Temperature.** Fiecare articol are un câmp opțional {{ui:Temperature}} în editorul de articole, introdus în grade C sau F. {{ui:Show temperatures as}} din {{ui:Settings}} › {{ui:TakeoffCraft}} oferă {{ui:Follow Global}}, °C sau °F.

### Suprafețe și scări pentru lucrări metrice

- **Areas in m2 on the drawing.** O suprafață măsurată cu un articol metric apare acum cu m2 pe eticheta de pe desen și în panoul de marcaje, precum și în tabel, în loc de SF. Regula: m2 când articolul este prețuit metric sau lungimile sunt afișate în m, cm sau mm, iar SF în celelalte cazuri.
- **Wall area.** Un articol liniar cu înălțime arată acum și suprafața peretelui (lungime înmulțită cu înălțime) în lista de articole și ca rând de notă sub tabelul cantităților pe articole.
- **Scale presets 1:75 and 1:150.** Sunt în lista {{ui:Preset}} din grupul {{ui:Scale}}, care are acum 32 de scări. Vezi [Presetări de scară](topic:scale-presets).

### Arc cu zece metode

- Cât timp {{ui:Arc}} este activ (butonul din bara de instrumente sau {{key:R}}), în bara foii apare o casetă {{ui:Arc method}} cu: 3 puncte; Început, Centru, Capăt; Început, Centru, Unghi; Început, Centru, Lungime; Început, Capăt, Unghi; Început, Capăt, Direcție; Început, Capăt, Rază; Centru, Început, Capăt; Centru, Început, Unghi; și Centru, Început, Lungime. Unghiul, lungimea, raza și direcția pot fi indicate cu clic sau introduse de la tastatură. Funcționează la șiruri liniare, suprafețe și decupaje. Fișierele salvate înainte de 0.9 se deschid la fel. Vezi [Desenarea arcelor cu zece metode](topic:draw-arcs-ten-methods).

### Lucrul împreună

- **See each other's cursors.** Într-o sesiune Live, indicatorul fiecărei persoane apare pe foaie cu numele și culoarea ei, iar marcajele selectate sunt înconjurate de o casetă punctată. Persoanele aflate pe altă foaie sunt listate cu numele acelei foi. Vezi [Lucrul live cu alții](topic:work-live).
- **Follow a person, and the people list.** Butonul {{ui:People}} dintr-o sesiune Live listează fiecare persoană, cu instrumentul folosit, foaia pe care se află și momentul ultimei modificări. {{ui:Follow}} mută vizualizarea dvs. odată cu a lor, iar gazda poate folosi {{ui:Ask everyone to follow me}}. Vezi [Urmărirea unui coleg într-o sesiune Live](topic:follow-a-teammate).

## În fiecare aplicație

- **Tooltips and the start tip.** Textul afișat la trecerea cursorului este un tooltip Bootstrap, iar sfatul de pornire poate fi închis.
- **Scrolling tab strips.** Banda de file a unui panou care nu încape se derulează în loc să fie tăiată.
- **Tab titles.** Fila browserului arată `<document> - TakeoffCraft | CadCraft`.
- **Layout.** Lista de aranjamente în pagină din {{ui:Settings}} este o listă derulantă care arată aranjamentul ales.
- **Language.** Limba aleasă ajunge acum și la cuvintele pe care pagina le afișează singură, precum Nou, Deschidere și Salvare. Limbile în afară de engleză sunt ciorne automate până când un vorbitor nativ le-a citit.

## Limite cunoscute

- Afișarea lungimilor, unitățile de greutate și temperatură și presetările noi au fost verificate prin teste și în pagină. Nu fiecare panou la fiecare unitate a fost verificat manual.
- Lista de persoane nu a fost verificată manual cu o clasă reală de profesor și elevi.
- Limbile în afară de engleză sunt ciorne automate.
- Programele de instalare pentru Windows nu sunt semnate digital (Informații suplimentare, apoi Rulați oricum). Imaginea de disc pentru macOS nu este notarizată (clic dreapta, apoi Deschide).

## Mai devreme: 0.8 și 0.8.1

Iată ce s-a schimbat în TakeoffCraft 0.8 (lansată la 2026-11-01) și 0.8.1 (2026-11-02), comparativ cu 0.7. Legenda de simboluri poate fi acum numărată în tot setul dintr-o dată, o antemăsurătoare nouă poate porni de la prețurile lucrărilor anterioare, iar antemăsurătoarea poate fi verificată față de stocul unui furnizor. 0.8.1 este o versiune de corecturi.

### Noutăți

**Numărare totală în set**

- **Box the legend once.** {{ui:Count everything}} din bara de instrumente citește o legendă de simboluri: trageți o casetă în jurul simbolurilor și al numelor scrise lângă ele. Fiecare simbol este listat cu imaginea și numele său, iar numele devine numele articolului. Debifați ce nu doriți, apoi alegeți {{ui:Count on N sheets}}. O bară arată foaia care este căutată, {{ui:Cancel}} oprește rularea, iar pagina rămâne utilizabilă.
- **Every sheet in one run.** Fiecare simbol este numărat pe fiecare foaie deschisă. O foaie desenată la altă scară este căutată la acea scară, iar simbolurile sunt găsite rotite cu orice unghi drept. Simbolurile legendei în sine nu sunt numărate pe foaia ei.
- **Review before anything is added.** Fiecare total are un link pe foaie ("E-103: 4") care duce la foaia respectivă. Faceți clic pe o casetă dintr-o găsire pentru a o exclude și din nou pentru a o reintroduce. Nivelul de potrivire (de la 50% la 100%) doar filtrează ce a fost găsit; nimic nu este căutat din nou.
- **One undo step.** {{ui:Add N marks}} creează câte un articol de numărare pentru fiecare simbol, cu un marcaj pe fiecare găsire. Un nume care este deja un articol de numărare existent este refolosit. {{key:Ctrl+Z}} anulează toate articolele și marcajele. Ce acceptați alimentează și {{ui:Learned}}.
- **Symbols at any angle.** Bifați {{ui:Symbols at any angle}} înainte de numărare pentru a găsi și simbolurile rotite cu un unghi care nu este drept. Căutarea rotește atunci fiecare simbol la fiecare 15 grade, iar un simbol care nu este rotund poate dura de până la șase ori mai mult.
- **What it is.** Potrivire simplă a simbolurilor pe foile proprii, fără model antrenat, și nimic nu părăsește calculatorul. Pe un set inventat de 200 de foi a durat 9.4 secunde de la început până la sfârșit în Chrome, pe un desktop rapid; seturile reale de planuri vor fi mai lente. Vezi [Numărare totală în set](topic:count-everything).

**Memoria prețurilor din lucrările proprii**

- **TakeoffCraft remembers your rates.** La salvarea unei antemăsurători, fiecare articol prețuit folosit este memorat după nume și tip: tarif de material, tarif de manoperă, pierderi și unitate. Ultimele 12 lucrări sunt păstrate pentru fiecare nume. Memoria este păstrată pe acest calculator, lângă Biblioteca de prețuri, niciodată în fișierul antemăsurătorii, iar nimic nu este trimis nicăieri.
- **Start a new takeoff from it.** {{ui:Prices}} din bara de instrumente arată, pentru fiecare articol, tarifele ultimei lucrări, tarifele tipice și intervalul. {{ui:Use last}} sau {{ui:Use typical}} prețuiește un articol, iar {{ui:Price N unpriced items from memory}} completează fiecare articol care nu are încă preț. Fiecare utilizare este un singur pas de anulare.
- **Older work.** {{ui:Learn from a past takeoff…}} memorează articolele prețuite ale unei antemăsurători salvate (.json).
- **See it, change it, forget it.** {{ui:Everything remembered}} listează fiecare nume; butonul cu coș de gunoi uită unul, iar {{ui:Clear all prices}} uită toate. Dezactivați {{ui:Remember my prices when I save a takeoff}} pentru a opri memorarea. Un preț pe bucată nu este niciodată pus pe un articol pe picior. Vezi [Memoria prețurilor din lucrările anterioare](topic:price-memory).

**Stocul furnizorului și termenele de livrare**

- **Check against a supplier's list.** {{ui:Supply}} din bara de instrumente preia lista de stoc a unui furnizor ({{ui:Add a supplier file…}}), un CSV sau o foaie de calcul, și verifică față de aceasta ce are nevoie antemăsurătoarea, inclusiv pierderile. Până la cinci fișiere sunt păstrate. Nu se trimite nimic și nimeni nu întreabă un furnizor: aduceți fișierul.
- **What it says.** Articolele în lipsă apar primele, cu texte precum "Lipsă 120 EA", "Termen de livrare 21 zile", "În restanță", "Unitate diferită", "Lipsește cifra de stoc" sau "În stoc". {{ui:Longest wait wanted (days)}} pornește de la 14.
- **Order list.** {{ui:Order list (CSV)}} descarcă articolele în lipsă, cu cantitatea lipsă, furnizorul și termenul de livrare.
- **Prices into the Library.** Dacă fișierul are prețuri, {{ui:Prices into the Library}} setează prețul de material al fiecărui element din Bibliotecă cu același nume și aceeași unitate. Reprețuiți din Bibliotecă pentru a le aduce în antemăsurătoare.
- **In the Problems panel.** În panoul Probleme, o lipsă este un avertisment, iar un termen lung de așteptare este o notă, sub „Stoc furnizor”. Puteți accepta una cu un motiv, iar motivul este salvat în antemăsurătoare. Vezi [Verificarea stocului furnizorului și a termenelor de livrare](topic:supplier-stock).

**Asistenți AI**

- **Tools for all three.** Cu asistenții permiși în {{ui:Settings}}, un asistent poate citi o legendă (`legend_open`), rula numărarea (`legend_count_start`, apoi `legend_count_status` și `legend_count_result`) și o poate adăuga (`legend_count_add`, care poate previzualiza întâi). Poate citi prețurile memorate (`prices_list`) și prețui articole din ele (`prices_apply`, care poate previzualiza întâi) și poate citi verificarea stocului furnizorului (`supply_check`). Adăugarea unui fișier de furnizor rămâne o acțiune manuală. Vezi [Utilizarea TakeoffCraft cu asistenți AI](topic:use-with-ai-assistants).

**În fiecare aplicație**

- **Languages.** Cincizeci și patru de limbi în total; zece sunt noi (lituaniana, letona, bosniaca, marathi, telugu, albaneza, afrikaans, filipineza, swahili și uzbeka). Limbile în afară de engleză sunt ciorne automate până când un vorbitor nativ le-a citit.
- **Input devices.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} stabilește ce fac un touchpad, butoanele laterale ale mouse-ului, un creion, un mouse 3D, un controler de joc sau un controler MIDI, pentru toate aplicațiile sau pentru una singură. Vezi [Utilizarea touchpad-ului, a mouse-ului 3D sau a controlerului](common:input-devices).
- **Toolbar rows.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} oferă {{ui:Wrap}} (la pornire), {{ui:2 rows}} și {{ui:1 row}}; grupurile care nu încap se derulează lateral. Vezi [Aranjarea panourilor](common:arrange-panels).
- **Problems panel.** Panoul comun de avertismente și note include acum verificarea stocului furnizorului de mai sus, alături de celelalte verificări.
- **Add-ons.** Suplimentele urmează lista din cont. Vezi [Suplimente și lista din cont](common:addons-basics).
- **Connect your AI.** CadCraft Studio este centrul: conectați asistentul o singură dată pentru toate cele opt aplicații. Studio nu are AI propriu.

### Corectat în 0.8.1

- **DWG classes section.** Secțiunea de clase a unui fișier DWG era citită ca un tip greșit. Este corectată în TakeoffCraft și în alte patru aplicații.
- **Studio can change language while it runs.** Înainte, Studio și edițiile sale împachetate erau doar în engleză. Nu a fost testat pe toate platformele în versiunea desktop; spuneți-ne dacă limba nu se schimbă.

### Încă nu este în această versiune

- **Not code-signed.** Windows poate afișa un avertisment, iar pe Mac faceți clic dreapta și alegeți {{ui:Open}} prima dată. Versiunile din magazine (Microsoft Store, Google Play, App Store) sunt suspendate, iar versiunea pentru iPad și iPhone nu a fost refăcută pentru 0.8.1.
- **Studio updates.** Programul de instalare pentru Windows și pachetele Linux verifică o dată pe zi și cer confirmare înainte. Arhiva portabilă zip doar vă anunță, iar macOS și APK nu se actualizează singure. Imaginea .dmg pentru macOS din 0.8 urmează lansarea.
- **Connect your AI.** Conectarea dintr-un clic în Studio, conectorul găzduit pentru AI în browser, propria cheie API în Studio și un pachet MCP publicat nu sunt promise în această versiune.
- **Count everything.** Are nevoie de simboluri desenate la fel ca în legendă, iar un simbol cu un perete sau cu o linie lungă care trece prin el poate fi ratat. Simbolurile oglindite nu sunt găsite, iar o foaie fără scară, desenată la altă dimensiune, este căutată la dimensiunea din legendă. Verificați găsirile de pe prima foaie înainte de a avea încredere în restul.
- **Supplier stock.** Cifrele de stoc sunt la fel de actuale ca fișierul pe care îl adăugați. Verificarea nu întreabă niciodată un furnizor.
- **Languages.** Bara de aplicație în tamilă depășește spațiul disponibil.

Restul este în [Încă nerealizat](topic:not-built-yet). Pentru versiunea dinaintea acesteia, consultați [Noutăți în 0.7](topic:whats-new-0-7).
