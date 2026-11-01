---
title: Primii pași cu TakeoffCraft
summary: Ce face TakeoffCraft, unde rulează și primul articol măsurat și prețuit dintr-un set de planuri PDF.
keywords: început, prima antemăsurătoare, pornire rapidă, introducere, deviz, antemăsurătoare cantitativă, set de planuri, pdf
from: 3b9da1fb
---

TakeoffCraft măsoară seturi de planuri, fișiere PDF și desene DWG sau DXF, și transformă măsurătorile într-un deviz prețuit. Deschideți fișierele (un desen își numără cantitățile direct din blocurile sale: vezi [Deschiderea unui desen DWG sau DXF](topic:open-a-drawing)), dați fiecărei foi o scară (un desen o aduce pe a sa), creați **articole** (un tip de perete, o finisaj de pardoseală, un obiect fix) și faceți clic pe foi ca să le măsurați. Cantitățile, costurile și totalul lucrării se actualizează pe parcurs. Puteți exporta devizul ca foaie de calcul și o copie a PDF-urilor cu antemăsurătoarea desenată pe ele.

Dacă ați făcut antemăsurători în alte programe, citiți mai întâi [Venind de la alt software de antemăsurători](topic:coming-from). Unele lucruri funcționează altfel aici.

## Unde rulează

TakeoffCraft rulează în browserul web. Deschideți TakeoffCraft și ecranul este gata imediat; nu este nimic de instalat.

- **PDF-urile rămân pe computer.** Sunt deschise de browser și nu sunt încărcate niciodată. Salvarea este o descărcare.
- Funcționează în versiunile actuale ale Chrome, Edge, Firefox și Safari. Vezi [Browsere și computere](common:browsers).
- Funcționează fără conexiune la internet, după ce alegeți {{ui:Salvare pentru offline}} în bara de aplicație și apare {{ui:Pregătit pentru offline}}. Vezi [Lucrul offline](common:offline).
- Salvarea în cloud nu este disponibilă încă. Pentru aplicația desktop, TakeoffCraft vine în CadCraft Studio, împreună cu celelalte șapte aplicații.

## Prima antemăsurătoare în zece pași

Acest ghid măsoară un tip de perete și îl prețuiește. Durează câteva minute pe orice plan aveți.

1. Alegeți {{ui:Deschidere planuri}} din grupul {{ui:Fișier}} al barei de instrumente (sau apăsați {{key:Mod+O}}), selectați unul sau mai multe PDF-uri și alegeți Deschidere. Puteți trage PDF-urile și oriunde pe pagină.
   Foile apar în stânga, iar prima foaie se deschide în mijloc.
2. Găsiți scara tipărită a foii în cartușul ei sau sub titlul desenului.
3. Deschideți lista {{ui:Presetare}} din grupul {{ui:Scară}} și alegeți scara respectivă, de exemplu `1/4" = 1'-0"`.
   Bara de jos a foii afișează acum „Scară 1/4" = 1'-0"”.
4. Alegeți {{ui:Verificare}} (sau apăsați {{key:D}}) și faceți clic pe cele două capete ale unei cote tipărite pe desen.
   Valoarea din bara de stare, din stânga jos, trebuie să corespundă cotei tipărite. Dacă nu, vezi [Stabilirea scării](topic:set-the-scale).
5. În panoul {{ui:Articole}} din dreapta, alegeți {{ui:Articol nou}}, scrieți un nume precum `Interior wall type A`, lăsați tipul pe {{ui:Liniar (lungime)}} și alegeți {{ui:Adăugare}}.
6. Alegeți {{ui:Liniar}} din bara de instrumente (sau apăsați {{key:L}}).
7. Faceți clic la începutul unui perete, apoi la fiecare colț de-a lungul lui. Faceți dublu clic, apăsați {{key:Enter}} sau faceți clic dreapta pentru a încheia traseul.
   Traseul se desenează în culoarea articolului, iar lungimea lui apare lângă articol.
8. În editorul de articole de sub {{ui:Articole}}, scrieți `9'-0"` în {{ui:Înălțime}}, `0.85` în {{ui:Materiale $/LF}} și `1.20` în {{ui:Manoperă $/LF}}.
   Tabelul {{ui:Cantități}} de jos arată lungimea, valoarea materialelor și a manoperei, precum și {{ui:Total lucrare}}.
9. Alegeți {{ui:Salvare antemăsurătoare}} (sau apăsați {{key:Mod+S}}).
   Browserul descarcă un fișier `.takeoff.json`. Conține articolele, scările și marcajele și se redeschide cu aceleași PDF-uri.
10. Deschideți meniul {{ui:Export}} din bara de instrumente și alegeți {{ui:XLSX}} pentru a descărca devizul ca foaie de calcul.

:::tip
Apăsați {{key:Esc}} pentru a opri ce faceți și a reveni la instrumentul {{ui:Selectare}}. {{key:Mod+Z}} anulează orice modificare.
:::

## Ce urmează să citiți

- [Ecranul TakeoffCraft](topic:workspace) numește fiecare parte a ferestrei.
- [Începeți o antemăsurătoare și deschideți un set de planuri](topic:open-plan-set) acoperă mai multe PDF-uri și lista foilor.
- [Creați articole de antemăsurătoare](topic:create-items) explică tipurile, unitățile, pierderile și tarifele.
- [Articolele compuse și formulele](topic:assemblies) transformă o măsurătoare în montanți, plăci de board și altele.
- [Tastatura și mouse-ul](topic:keyboard) enumeră fiecare tastă.
