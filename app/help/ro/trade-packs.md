---
title: Pachete pe meserii
summary: Adăugați ansambluri gratuite pentru o meserie în biblioteca dvs. de prețuri, eliminați-le dintr-un singur pas și distribuiți propria bibliotecă ca pachet.
keywords: pachet pe meserie, pachet, ansambluri, șabloane, articole de pornire, electric, gips-carton, structură, vopsitorie, beton, pardoseli, zidărie, acoperiș, placaj exterior, tâmplărie, instalații sanitare, hvac, izolație, amenajări peisagistice, terase, antreprenor general, csi, masterformat, cc0, adăugare, eliminare, distribuire
from: d3c036be
---

Un **pachet pe meserie** este un set de articole gata făcute pentru o meserie: fiecare cu unitatea sa, cu înălțimea sau adâncimea sa, cu pierderile sale și cu **ansamblul** său, piesele și formulele care transformă un traseu, o suprafață sau o numărare măsurată în materiale. De exemplu, un perete din gips-carton aduce profilele sale, montanții, plăcile, șuruburile, banda și chitul.

Pachetele sunt adăugate în [biblioteca dvs. de prețuri](topic:price-library), iar de acolo adăugați articolele lor în orice antemăsurătoare.

## Adăugarea unui pachet

1. Deschideți {{ui:Bibliotecă}} din partea de sus a panoului {{ui:Articole}}, apoi {{ui:Pachete pe meserii…}}.
2. Alegeți {{ui:Unități}}: imperial (LF, SF), metric (m, m²) sau ambele. Fiecare ansamblu vine în ambele sisteme.
3. Alegeți {{ui:Adăugare}} lângă un pachet.

Articolele pachetului apar în bibliotecă, etichetate cu numele pachetului. Pentru a le folosi, bifați-le în bibliotecă și alegeți {{ui:Adăugare la antemăsurătoare}}.

:::note
**Un pachet nu aduce prețuri.** Articolele sale afișează „Setați tariful” în bibliotecă. Tarifele sunt ale dvs.: scrieți-le în bibliotecă sau în editorul de articole ori importați lista de prețuri ca CSV și folosiți {{ui:Actualizare prețuri}}.
:::

Dacă aveți deja un articol cu același nume și același tip în bibliotecă, pachetul lasă al dvs. neschimbat. Adăugarea din nou a unui pachet își înlocuiește propriile articole cu noua versiune.

## Eliminarea unui pachet

În {{ui:Pachete pe meserii…}}, alegeți {{ui:Eliminare}} lângă un pachet adăugat de dvs., apoi încă o dată pentru confirmare. Fiecare articol venit din el iese din bibliotecă dintr-un singur pas. Articolele pe care le-ați adăugat deja într-o antemăsurătoare rămân în acea antemăsurătoare.

## Ce conține un pachet

Alegeți {{ui:Surse și detalii}} sub un pachet pentru a vedea din ce a fost scris fiecare ansamblu: coduri de construcție, standarde și ghiduri de montaj ale asociațiilor de meserie. În bibliotecă, țineți cursorul peste un articol pentru a citi sursele și ipotezele sale, precum distanța dintre montanți sau randamentul de aplicare al unei vopsele. Verificați-le față de lucrarea și fișele tehnice ale produselor dvs. și schimbați formulele acolo unde diferă (vezi [Ansambluri și formule](topic:assemblies)).

Fiecare pachet este marcat **Pornire: neverificat încă de un estimator** până când estimatorii practicanți l-au verificat.

Fiecare articol poartă și numărul său CSI MasterFormat, precum `09 21 16`.

## Distribuiți biblioteca dvs. ca pachet

{{ui:Export ca pachet…}} din bibliotecă salvează un fișier de pachet (`.ccpack.json`) pe care oricine îl poate adăuga cu {{ui:Deschidere fișier de pachet…}}. Implicit lasă deoparte articolele venite din pachetele adăugate de dvs. și nu conține tarife. Bifați {{ui:Include tarifele mele ca tarife exemplu}} pentru a trimite și tarifele dvs.: ele pleacă etichetate cu regiunea și data pe care le indicați, iar cel care adaugă pachetul alege dacă le folosește.

Fișierele de pachet sunt date simple, niciodată programe. TakeoffCraft verifică fiecare parte a unui fișier înainte de a-l folosi și lasă deoparte orice nu poate citi.
