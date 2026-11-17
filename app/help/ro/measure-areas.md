---
title: Măsurarea ariilor cu decupaje
summary: Conturați podele, tavane și plăci, decupați goluri din ele, adăugați margini curbe, cercuri și decupaje rotunde și citiți aria și perimetrul.
keywords: umplere încăpere, umplere, clic în interiorul unei încăperi, arie automată, deducere, coloană, gol de instalații, deducere din mai multe articole, arie, poligon, contur, picioare pătrate, sf, decupaj, gaură, scădere, cerc, rotund, arc, perimetru, podea, tavan, placă
from: 34648db7
---

Un articol de arie măsoară aria închisă. Fiecare contur poate avea goluri decupate din el (un gol de instalații, o coloană, o jardinieră), iar marginile sale pot fi drepte sau curbe.

Înainte de a începe: foaia are nevoie de o scară ([Setarea scării](topic:set-the-scale)), iar dvs. aveți nevoie de un articol de arie ([Crearea articolelor de antemăsurătoare](topic:create-items)).

## Conturarea unei arii

1. Faceți clic pe articolul de arie de sub {{ui:Items}}.
2. Alegeți {{ui:Area}} din bara de instrumente sau apăsați {{key:A}}.
3. Faceți clic pe fiecare colț al încăperii sau al plăcii, pe rând. Țineți {{key:Shift}} pentru margini la 0°, 45° și 90°.
   De la al treilea punct încolo, conturul se umple, iar bara de stare arată „Arie” și „perimetru”. Un cerc mic apare în jurul primului punct.
4. Închideți conturul: faceți clic pe primul punct (în interiorul inelului său), apăsați {{key:Enter}}, faceți dublu clic sau clic dreapta.
   Aria este umplută ușor cu culoarea articolului, este etichetată cu picioarele pătrate și devine marcajul selectat.

{{key:Backspace}} elimină ultimul colț; {{key:Esc}} aruncă conturul.

Un contur care se intersectează singur este refuzat: „Conturul se intersectează, deci aria ar fi greșită. Desenați-l din nou, fără intersecții.” Desenați o formă în opt ca două arii.

## Margini curbe

În timpul conturării, activați modul arc ({{ui:Arc}} sau {{key:R}}). După un colț, faceți clic pe un punct de-a lungul curbei, apoi unde se termină curba. Pentru a închide conturul cu o curbă, faceți ultimul clic pe primul punct. Aria și perimetrul folosesc curba exactă. Apăsați din nou {{key:R}} pentru margini drepte. Pentru a modifica ulterior o curbă, selectați aria și trageți mânerul rotund din mijlocul arcului. Vezi [Măsurarea tronsoanelor liniare](topic:measure-linear#arcs-and-curved-walls).

## Un cerc

1. Cu un articol de arie, alegeți {{ui:Circle}} sau apăsați {{key:O}}.
2. Faceți clic pe centru.
3. Faceți clic pe orice punct de pe margine.
   În timp ce mutați, bara de stare arată raza și aria. Cercul este adăugat ca marcaj de arie, cu aria și perimetrul exacte.

## Umplerea unei încăperi dintr-un clic

Când încăperile sunt desenate ca pereți închiși, {{ui:Room}} ({{key:B}}) scoate o podea dintr-un singur clic:

1. Alegeți un articol de arie (de exemplu un finisaj de podea) și dați foii scara sa.
2. Alegeți {{ui:Room}} din grupul {{ui:Takeoff}}, sau apăsați {{key:B}}.
3. Faceți clic în interiorul unei încăperi, pe podeaua liberă (nu pe o linie sau o etichetă).

TakeoffCraft citește liniile foii, găsește spațiul din jurul clicului și conturează spațiul de-a lungul fețelor interioare ale pereților, ca arie a articolului curent. Deschiderile de uși de până la **4'-0"** sunt considerate închise, astfel încât conturul trece drept peste ușă; **Setări › TakeoffCraft › Umplere încăpere închide deschiderile până la** modifică această lățime (de la 3'-0" la 8'-0"). Numele încăperilor, mobilierul și corpurile fixe din încăpere nu fac goluri.

Refuză, spunând de ce, când:

- clicul este pe o linie („Acesta este pe o linie”);
- spațiul nu este închis: o deschidere mai largă decât setarea lasă spațiul să iasă până la marginea foii. Măriți setarea sau conturați încăperea manual cu {{ui:Area}};
- spațiul este minuscul (un simbol, nu o încăpere).

Când o ușă este mai largă decât setarea, umplerea intră în următoarea încăpere și conturează ambele împreună: anulați ({{key:Mod+Z}}), măriți setarea și faceți clic din nou. Verificați conturul ca orice arie: trageți colțurile pentru a-l corecta. O foaie scanată funcționează la fel, dar liniile sale trebuie să fie suficient de închise; liniile gri deschis s-ar putea să nu oprească umplerea.

## Decuparea unui gol dintr-o arie

1. Alegeți {{ui:Select}} ({{key:V}}) și faceți clic pe arie. Apar mânere pătrate în colțuri.
2. Alegeți {{ui:Cut-out}} din bara de instrumente (sau apăsați {{key:X}}), ori {{ui:Add a cut-out}} sub **Marcaj selectat**.
3. Faceți clic pe colțurile golului, în interiorul ariei. Modul arc funcționează și aici.
4. Închideți-l ca pe o arie: faceți clic pe primul punct, apăsați {{key:Enter}}, faceți dublu clic sau clic dreapta.
   Golul rămâne neumplut, iar bara de stare spune: „Decupaj adăugat. Desenați altul sau apăsați Esc.”
5. Desenați mai multe goluri în aceeași arie sau apăsați {{key:Esc}}.

Pentru un gol rotund, alegeți {{ui:Add a round cut-out}} sub **Marcaj selectat**, faceți clic pe centru, apoi pe un punct de margine.

Un decupaj trebuie să fie complet în interiorul ariei și să nu se suprapună cu alt decupaj. Altfel, TakeoffCraft îl refuză: „Un decupaj trebuie să fie complet în interiorul ariei.” sau „Decupajele nu se pot suprapune între ele.”

Pentru a scoate ultimul gol, alegeți {{ui:Remove last cut-out}}.

## Deduceri: coloane, goluri de instalații și goluri scoase din mai multe articole

Un decupaj aparține unui singur marcaj de arie. O **deducere** este desenată o singură dată și scade din fiecare arie cu care se suprapune, pentru articolele alese. Desenați coloanele o singură dată, iar ele se scad din finisajul de podea, din tavan și din placă deodată.

1. Creați un articol de arie pentru ele, de exemplu „Coloane”.
2. În setările articolului, bifați **Deducere: marcajele sale își scot aria din celelalte articole**. Apare o listă cu celelalte articole de arie, toate bifate: debifați-le pe cele pe care deducerile nu trebuie să le atingă (de exemplu vopseaua de pe pereți).
3. Antemăsurați coloanele cu {{ui:Area}} sau {{ui:Circle}}, ca de obicei. Fiecare este desenată punctat.

Fiecare marcaj de arie al unui articol bifat, de pe aceeași foaie, pierde partea acoperită de o deducere: întreaga deducere când se află în interior, doar porțiunea suprapusă când trece peste margine și nimic în interiorul unui decupaj. Panoul ariei selectate arată **Deduceri** și aria rămasă. Cantitatea articolului, formulele de ansamblu, costurile, vizualizarea 3D de verificare și exportul folosesc aria rămasă; notele devizului arată cât au scos deducerile. Articolul de deducere își numără propria arie (lăsați costurile la zero dacă nu îl evaluați).

O deducere trebuie să fie **convexă**: un dreptunghi, un cerc sau orice contur fără colț spre interior. TakeoffCraft refuză să o deseneze pe cea care nu este; desenați un gol în formă de L ca două deduceri. Deducerile nu pot avea decupaje, iar două deduceri care se suprapun între ele se numără amândouă.

Perimetrul (`P`) nu se modifică: deducerile scot doar arie.

## Citirea ariei

Selectați aria. **Marcaj selectat** arată:

| Linie | Înțeles |
|---|---|
| Arie | Aria netă: contur minus decupaje. Aceasta este ceea ce numără articolul. |
| Contur | Aria brută din interiorul conturului (afișată când există decupaje). |
| Decupaje | Câte goluri există și aria lor totală. |
| Perimetru | Lungimea conturului, **plus** marginile fiecărui decupaj („cu decupaje”). |

Perimetrul include intenționat marginile decupajelor, pentru lucruri precum cofrajele de margine sau plintele care trec și în jurul unui gol. Dacă aveți nevoie doar de marginea exterioară, țineți golurile în afara acelui articol sau măsurați marginea exterioară ca tronson liniar.

{{ui:Unit}} articolului decide cum este raportat totalul: SF, SY sau m². Panoul **Marcaj selectat** și bara de stare arată întotdeauna picioare pătrate.

## Remedierea unei arii

- **Mutarea unui colț**: selectați aria și trageți un mâner de colț (golurile au și ele mânere). Dacă noua formă s-ar intersecta singură sau ar împinge un gol în afara ei, colțul este pus înapoi: „Punctul a fost pus înapoi.”
- **Mutarea la alt articol**: alegeți alt articol de arie din lista **Articol** de sub **Marcaj selectat**.
- **Ștergere**: {{key:Delete}}, {{ui:Delete}} din meniul {{ui:More}} al barei de instrumente sau {{ui:Delete mark}}.

## Adâncime pentru volume

Dați articolului de arie o {{ui:Depth}} (de exemplu `0'-4"` pentru o placă) și folosiți `A * H / 27` într-o componentă de ansamblu pentru a obține yarzi cubi. Vezi [Ansambluri și formule](topic:assemblies).
