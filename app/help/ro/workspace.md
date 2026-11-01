---
title: Ecranul TakeoffCraft
summary: O descriere a ferestrei după numele de pe ecran - bara de instrumente, lista foilor, foaia, panoul Articole, tabelul Cantități și bara de stare.
keywords: ecran, aspect, aspecte, panglică, browserul proiectului, casetă de instrumente, casetă de informații, bară de instrumente, panouri, listă de foi, panou articole, cantități, bară de stare, tur, interfață
from: ab1115e0
---

TakeoffCraft umple fereastra browserului sub bara de aplicație CadCraft. De sus în jos și de la stânga la dreapta:

| Parte | Unde | Pentru ce este |
|---|---|---|
| Bara de aplicație | Foarte sus | Numele aplicației, versiunea, {{ui:Despre TakeoffCraft}}, {{ui:Ajutor}} ({{key:F1}}), {{ui:Salvare pentru offline}}, {{ui:Setări}} ({{key:Mod+,}}), butonul {{ui:Ecran complet}} și comutatorul de temă {{ui:Hârtie}} / {{ui:Model}}. |
| Bara de instrumente | Sub bara de aplicație | Fiecare comandă, pe grupe: {{ui:Fișier}}, {{ui:Export}}, {{ui:Scară}}, {{ui:Antemăsurătoare}}, {{ui:Editare}}, {{ui:Vizualizare}}. |
| Foi | Stânga | Fiecare pagină a fiecărui PDF deschis, cu miniatură, scara și numărul de marcaje. |
| Foaia | Mijloc | Pagina deschisă. Măsurați aici. |
| Articole | Dreapta | Articolele antemăsurătorii, setările articolului selectat și marcajul selectat. |
| Cantități | Jos | Cantități și costuri pe articol sau pe foaie, și totalul lucrării. |
| Bara de stare | Foarte jos | Măsurătoarea în timp real, mesaje, indiciul de 45° și zoomul. |

## Bara de instrumente

Treceți cu mouse-ul peste orice buton ca să vedeți ce face și care este tasta sa.

| Grup | Butoane |
|---|---|
| {{ui:Fișier}} | {{ui:Nou}} (antemăsurătoare goală), {{ui:Deschidere PDF-uri}} ({{key:Mod+O}}), {{ui:Deschidere antemăsurătoare}} (un proiect `.takeoff.json`), {{ui:Salvare antemăsurătoare}} ({{key:Mod+S}}) |
| {{ui:Export}} | Un singur meniu: {{ui:XLSX}}, {{ui:CSV}}, {{ui:PDF marcat}} |
| {{ui:Scară}} | {{ui:Calibrare}} ({{key:K}}), {{ui:Verificare}} ({{key:D}}) și lista {{ui:Presetare}} |
| {{ui:Antemăsurătoare}} | {{ui:Selectare}} ({{key:V}}), {{ui:Liniar}} ({{key:L}}), {{ui:Arie}} ({{key:A}}), {{ui:Cerc}} ({{key:O}}), {{ui:Arc}} ({{key:R}}, un comutator pornit/oprit), {{ui:Scădere}} ({{key:E}}, un comutator pornit/oprit), {{ui:Decupaj}} ({{key:X}}), {{ui:Numărare}} ({{key:C}}), {{ui:Numărare automată}} ({{key:S}}) |
| {{ui:Editare}} | {{ui:Anulare}} ({{key:Mod+Z}}), {{ui:Refacere}} ({{key:Mod+Y}}), {{ui:Copiere}} ({{key:Mod+C}}), {{ui:Lipire}} ({{key:Mod+V}}) și {{ui:Mai multe}}: {{ui:Decupare}}, {{ui:Copiere}}, {{ui:Lipire}}, {{ui:Lipire în aceeași poziție}}, {{ui:Duplicare}}, {{ui:Ștergere}}, {{ui:Selectare totală}}, {{ui:Anularea selecției}} |
| {{ui:Vizualizare}} | {{ui:Potrivire pagină}} ({{key:F}}), {{ui:Potrivire lățime}} ({{key:W}}) |

Instrumentul folosit apare apăsat. Butoanele {{ui:Arc}} și {{ui:Scădere}} rămân apăsate cât timp sunt pornite.

## Foi (stânga)

- **Căutare foi** filtrează lista după numele foii, numele fișierului sau eticheta paginii.
- Fiecare foaie afișează o miniatură (desenată pe măsură ce derulați), numele ei și fie scara, fie **Nicio scară**.
- Partea dreaptă a fiecărui rând arată câte marcaje are foaia. Cât timp un articol este evidențiat, arată în schimb câte marcaje ale acelui articol sunt pe foaie.
- Faceți clic pe o foaie ca s-o deschideți. {{key:PageDown}} și {{key:PageUp}} trec la foaia următoare și la cea anterioară din listă.
- Când o antemăsurătoare acoperă PDF-uri care nu sunt deschise, o notă de sub listă le numește. Vezi [Salvarea și redeschiderea unei antemăsurători](topic:save-and-reopen).

Numele foilor vin din PDF: o etichetă de pagină, precum `A-101`, devine numele foii. O pagină fără etichetă se numește după fișierul său și numărul paginii, ca „Planuri, pagina 3”. Când sunt deschise mai multe PDF-uri, foile etichetate arată și numele fișierului.

## Foaia (mijloc)

- Bara de sub foaie arată numele foii și scara ei, sau „Nicio scară încă: alegeți o presetare sau calibrați”. Butoanele ei: {{ui:MarkupCraft}} (când aplicația poate primi PDF-ul; vezi [Începerea unei antemăsurători și deschiderea unui set de planuri](topic:open-plan-set)), {{ui:Comparare}} (o versiune mai veche a foii peste aceasta: [Compararea unei foi revizuite](topic:compare-revisions)), „(n) de verificat” (marcaje semnalate, când există) și {{ui:3D}} (vederea de verificare [3D](topic:check-in-3d)).
- Înainte să fie deschis un PDF, mijlocul afișează un ghid scurt în cinci pași.
- Rotița mouse-ului face zoom la indicator. Trageți pentru a deplasa. Vezi [Tastatura și mouse-ul](topic:keyboard).
- Cât timp folosiți {{ui:Numărare automată}}, deasupra foii apare o bară cu comenzile sale.

## Articole (dreapta)

În partea de sus, lista {{ui:Zonă de ofertare}}: clădirea, etajul sau etapa în care intră marcajele noi ([Zonele de ofertare](topic:bid-areas)).

- {{ui:Articol nou}} deschide un formular mic: un nume, un tip ({{ui:Liniar (lungime)}}, {{ui:Arie}} sau {{ui:Numărare}}) și {{ui:Adăugare}}.
- Lista arată culoarea fiecărui articol, pictograma tipului, numele și cantitatea. Faceți clic pe un articol ca să desenați cu el și să evidențiați marcajele lui pe fiecare foaie. Faceți clic din nou ca să opriți evidențierea.
- Sub listă, **Articol: (nume)** este editorul de articole: nume, tip, culoare, unitate, înălțime sau adâncime, pierderi, tarife de material și de manoperă, valorile măsurate și {{ui:Articol compus}}. Vezi [Crearea articolelor de antemăsurătoare](topic:create-items).
- **Marcaj selectat** apare când selectați un marcaj: din ce articol face parte, foaia lui, măsurătorile și butoane precum {{ui:Adăugare decupaj}} și {{ui:Ștergere marcaj}}. Cu mai multe marcaje selectate devine **Marcaje selectate**: câte din fiecare articol, plus {{ui:Copiere}}, {{ui:Duplicare}}, {{ui:Decupare}} și {{ui:Ștergere marcaje}}.
- Editorul de articole se încheie cu {{ui:Copiere articol}} și {{ui:Duplicare articol}}: un articol cu articolul său compus și costurile, fără marcaje. Vezi [Copierea, lipirea și duplicarea marcajelor](topic:copy-paste).

## Cantități (jos)

- {{ui:Pe articole}} listează fiecare articol și componentele sale de articol compus, cu cantitatea, pierderea, tarifele și costurile extinse. Puteți scrie pierderea și tarifele direct în tabel.
- {{ui:Pe foi}} listează cantitatea fiecărui articol pe fiecare foaie.
- Un avertisment care începe cu **Incomplet:** apare când ceva lipsește din totaluri.
- {{ui:Total lucrare}} este în dreapta antetului.
- Butonul săgeată din dreapta ascunde sau arată tabelul, ca foaia să aibă mai mult spațiu.

Vezi [Citirea cantităților și a devizului](topic:read-quantities).

## Bara de stare (jos)

De la stânga la dreapta: măsurătoarea în timp real cât desenați (lungime, arie, rază sau rezultatul unei verificări), caseta {{ui:Introducere}} cât tastați o lungime, mesajele TakeoffCraft, reamintirea „Shift agață la 45°” (sau „Agață la 45°; Shift eliberează unghiul” când este activă în [Setări](topic:settings)), butonul {{ui:Agățare}} (agățare de liniile desenului, pornit când este evidențiat; {{key:F3}}), și procentul de zoom.

:::tip
Citiți bara de stare când ceva nu se întâmplă. TakeoffCraft explică acolo de ce a refuzat un clic, de exemplu „Această foaie nu are încă scară”.
:::

## Alte aspecte

Tot ce este mai sus este aspectul {{ui:CadCraft clasic}}, cel de pornire. {{ui:Setări}} ({{key:Mod+,}}) › {{ui:Global}} › {{ui:Aspect}} oferă încă două; aceleași instrumente și taste funcționează în toate trei, iar alegerea din nou a {{ui:CadCraft clasic}} readuce fiecare control unde era.

| Aspect | În TakeoffCraft |
|---|---|
| {{ui:Panglică și browserul proiectului}} | {{ui:Panglică de antemăsurătoare}} ([Meniuri, taste și mouse](topic:menus-keys-and-mouse)) de-a lungul sus, o bară pentru instrumentul activ, o filă pentru fiecare foaie deschisă (Modelul și aspectele unui desen sunt și ele foi), cu presetările de scară și {{ui:Potrivire pagină}} sub foaie. Panoul din stânga cuprinde {{ui:Proprietăți}} (articolul, nota sau marcajul selectat) deasupra {{ui:Navigator de antemăsurătoare}}: {{ui:Foi}} (faceți clic pe una ca s-o deschideți într-o filă), {{ui:Condiții}} (faceți clic pe una ca să desenați cu ea) și {{ui:Deviz}} (totalul fiecărui articol și totalul lucrării); miniaturile sunt a doua sa filă. |
| {{ui:Casetă de instrumente și casetă de informații}} | Bara de instrumente peste foaie, o casetă de informații cu {{ui:Zonă de ofertare}}, instrumentul activ sau selecția și bara foii, o coloană cu instrumentele de antemăsurătoare în stânga, o filă pentru fiecare foaie, iar {{ui:Agățare}} și zoomul sub foaie. |

Cât timp este deschisă [vederea de verificare 3D](topic:check-in-3d), filele foilor și bara de sub foaie se retrag; închideți vederea 3D ca să măsurați din nou. Pe telefon rulează mereu aspectul pentru telefon.

## Ecran complet și teme

Butonul {{ui:Ecran complet}} din bara de aplicație sau {{key:Ctrl+Shift+F}} (Ctrl pe toate platformele, inclusiv pe Mac) trece prin modul normal, ecran complet și ecran complet cu barele ascunse. Cu barele ascunse, mutați indicatorul la marginea de sus ca să le afișați din nou.

{{ui:Hârtie}} este tema deschisă, iar {{ui:Model}} cea închisă. În {{ui:Model}}, desenul se afișează inversat (linii deschise pe fond închis) doar pe ecran; exporturile nu se schimbă niciodată.
