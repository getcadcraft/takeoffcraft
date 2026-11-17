---
title: Măsurarea din desen
summary: Luați lungimi și arii din liniile, arcele, polilinii și hașurile desenului însuși, alegându-le, cu arce și goluri exacte, în loc să trasați prin clicuri.
keywords: măsurare desen, geometrie, polilinie, arc, cerc, hașură, bulge, lungime exactă, arie exactă, alegere, fereastră, trasare, din CAD, liniar, arie
from: fd734246
---

{{ui:Measure drawing}} din bara foii unui DWG sau DXF ia obiectele desenului drept marcaje, astfel încât nu le mai trasați prin clicuri. Lungimea unei polilinii, lungimea unui arc, aria unui cerc și aria unei hașuri cu golurile sale ies exacte, din aceeași aritmetică folosită de antemăsurătoare pentru fiecare marcaj.

## Luarea obiectelor ca articol liniar sau de arie

1. Creați sau faceți clic pe un articol **liniar** sau de **arie** de sub {{ui:Items}}. Foaia are nevoie de o scară.
2. Alegeți {{ui:Measure drawing}}.
3. Faceți clic pe obiectele de pe foaie pentru a le alege, sau trageți o fereastră în jurul lor: tot ce se află complet în interior este ales. {{key:Shift}} adaugă o fereastră la ce este deja ales; faceți din nou clic pe un obiect ales pentru a-l scoate. Bara arată totalul: „6 tronsoane: 108'-9 1/8" în total”.
4. Alegeți butonul de adăugare, care numără obiectele și numește articolul, de exemplu {{ui:Add 6 to Edge}} (sau apăsați {{key:Enter}}). Fiecare obiect devine un marcaj al articolului, într-un singur pas de anulare. {{key:Esc}} golește ce ați ales.

## Ce primește fiecare tip de articol

- Un articol **liniar** primește linii, arce, polilinii, cercuri și splinuri după lungime. O formă închisă se numără după perimetru. O hașură este lăsată deoparte: are o arie, nu o lungime, iar bara o spune.
- Un articol de **arie** primește forme închise: polilinii închise, cercuri, solide 2D și hașuri cu golurile lor. Tronsoanele deschise sunt lăsate deoparte, iar bara o spune.

## Exact și aproape exact

Liniile, arcele (orice bulge), polilinii cu bulge și cercurile sunt exacte: lungimile și ariile folosesc raza și unghiul de deschidere ale arcului, nu o imagine a acestuia. Elipsele, splinurile și hașurile al căror contur este format din muchii sunt măsurate în coarde de un grad sau mai fine, ceea ce înseamnă o eroare sub o sutime de procent pentru elipse și sub o zecime pentru restul; bara spune câte din ce ați ales sunt curbe de acest fel.

## De unde ia din ce

- **Model**: obiecte din spațiul model. **Aranjarea în pagină (Layout)**: propriile sale linii și obiectele din model aflate într-o fereastră de vizualizare (viewport), scalate prin ea. Un obiect care trece peste marginea unei ferestre de vizualizare nu este oferit (s-ar trasa tăiat); un obiect pe care îl arată două ferestre este luat o singură dată.
- Doar straturile pe care le arată foaia. Blocurile sunt numărate, nu măsurate: vezi [Numărarea din desen](topic:count-from-a-drawing). Polilinii 3D, plase, solide și regiuni nu sunt oferite.
