---
title: Citirea cantităților și a devizului
summary: Folosiți tabelul Cantități pe articole și pe foi, totalul lucrării, evidențierea și avertismentul Incomplet.
keywords: cantități, totaluri, pe articole, pe foi, total lucrare, deviz, rezumat, raport, evidențiere, incomplet, costuri
from: 069d41f1
---

Tabelul {{ui:Cantități}} din partea de jos a ferestrei este devizul în timp real. Se modifică imediat ce se desenează, se șterge, se rescalează sau se modifică un preț unitar. Cantitățile nu se stochează niciodată; sunt măsurate din nou din marcaje de fiecare dată, astfel încât nu pot rămâne depășite.

## Pe articole

Alegeți {{ui:Pe articole}} (implicit). Fiecare articol are un rând, iar fiecare componentă a ansamblului are câte un rând sub el.

| Coloană | Înțeles |
|---|---|
| Articol | Denumire, cu culoarea articolului. „+(n) fără scară” înseamnă că unele marcaje se află pe foi fără scară. |
| Cantitate | Totalul măsurat în unitatea articolului (componente: rezultatul formulei). |
| Unitate | LF, m, SF, SY, m², EA sau unitatea componentei. |
| Pierderi % | Introdus aici sau în editorul articolului. |
| Cu pierderi | Cantitate × (1 + pierderi). |
| Materiale/unitate, Manoperă/unitate | Prețuri unitare; pot fi introduse și direct aici. |
| Materiale, Manoperă | Cu pierderi × preț unitar, rotunjite la cent. |
| Total | Materiale + manoperă. |

Ultimul rând, **Total lucrare**, adună coloanele Materiale, Manoperă și Total. Același total apare în dreapta antetului tabelului.

Introduceți o valoare într-o celulă de pierderi sau de preț și apăsați {{key:Enter}} sau faceți clic în altă parte pentru a o aplica. O valoare pe care TakeoffCraft nu o poate citi este încadrată cu roșu, iar bara de stare explică motivul, de exemplu „Introduceți o sumă, de exemplu 12.50.”

Faceți clic pe rândul unui articol pentru a evidenția marcajele sale pe toate foile și pentru a trece la o foaie care le conține (același lucru ca un clic pe articol sub {{ui:Articole}}).

## Pe foi

Alegeți {{ui:Pe foi}} pentru a vedea cantitatea fiecărui articol pe fiecare foaie, împreună cu numărul de marcaje. Faceți clic pe un rând pentru a deschide foaia cu articolul evidențiat. Folosiți această vedere pentru a verifica dacă toate foile au fost extrase sau pentru a împărți cantitățile pe etaj sau pe zonă de lucru.

## Pe zone

Dacă antemăsurătoarea are zone de ofertă, {{ui:Pe zone}} listează articolele fiecărei zone și un subtotal. Vezi [Zone de ofertă](topic:bid-areas).

## Avertismentul Incomplet

Când ceva nu este inclus în totaluri, antetul afișează un avertisment, de exemplu:

„Incomplet: 1 eroare de formulă, 6 marcaje pe foi fără scară (neincluse în totaluri)”

- **Erori de formulă**: formula unei componente a unui ansamblu nu poate fi calculată. Rândul ei afișează „Eroare de formulă: …”. Vezi [Ansambluri și formule](topic:assemblies#when-a-formula-is-wrong).
- **Marcaje pe foi fără scară**: atribuiți scară acelor foi. Vezi [Setare scară](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Aceleași note apar și în tabelul exportat, astfel încât un deviz incomplet nu pare niciodată complet.

## Evidențierea unui articol

Faceți clic pe un articol sub {{ui:Articole}} sau în tabel. Marcajele sale rămân la intensitate maximă pe fiecare foaie, iar restul se estompează. Lista foilor afișează „(n) evidențiate” pe fiecare foaie cu marcajele sale. Faceți din nou clic pe articol pentru a opri evidențierea.

## Totaluri ale articolelor în panoul lateral

Fiecare articol din lista {{ui:Articole}} afișează și cantitatea sa. Blocul **Măsurat** din editorul articolului arată valorile folosite de formulele sale: lungime, tronsoane și suprafața peretelui; arie, perimetru și numărul de zone; sau numărare.

## Marcaje pe PDF-uri care nu sunt deschise

O antemăsurătoare poate include marcaje de pe PDF-uri pe care nu le-ați deschis de data aceasta. Acestea se includ în continuare în toate totalurile; lista foilor denumește aceste PDF-uri. Vezi [Salvarea și redeschiderea unei antemăsurători](topic:save-and-reopen).

## Mai mult spațiu

Butonul cu săgeată din dreapta antetului {{ui:Cantități}} ascunde tabelul, pentru ca foaia să aibă mai mult spațiu. Apăsați-l din nou pentru a readuce tabelul.
