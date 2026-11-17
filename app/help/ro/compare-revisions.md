---
title: Compararea unei foi revizuite și mutarea antemăsurătorii
summary: Suprapuneți foaia veche peste revizuire, aliniați-le, vedeți ce s-a schimbat și mutați antemăsurătoarea pe foaia nouă, cu marcajele de verificat semnalate.
keywords: revizuire, revizuit, comparare, suprapunere, vechi, nou, modificări, addendum, buletin tehnic, reemitere, mutare antemăsurătoare, transfer, reportare, aliniere, semnalat, verificare
from: 3a1d9fe0
---

Când o foaie este reemisă, nu trebuie să o măsurați din nou. Deschideți PDF-ul vechi și pe cel nou, comparați cele două foi și mutați antemăsurătoarea. TakeoffCraft semnalează fiecare marcaj unde desenul s-a schimbat, ca să verificați acelea și să le păstrați pe celelalte.

## Comparare

1. Deschideți ambele PDF-uri: setul vechi și cel revizuit ({{ui:Deschidere planuri}}; pot fi într-un singur fișier sau în mai multe).
2. Afișați foaia **nouă**.
3. Alegeți {{ui:Comparare}} pe bara foii, sub desen.
4. Alegeți foaia veche din listă. TakeoffCraft sugerează foaia cu același număr din celălalt PDF, sau aceeași pagină. Alegeți **Comparare**.

Desenul vechi se suprapune acum peste cel nou, în roșu. Acolo unde cele două coincid, liniile roșii stau peste cele negre; acolo unde diferă, vedeți doar linii roșii (eliminate) și doar linii negre (adăugate). O bară din partea de jos a foii conține pașii de mai jos; {{key:Esc}} sau {{ui:Închidere}} încheie comparația.

## Aliniere

Foile reemise sunt adesea tipărite puțin decalat: mutate pe pagină sau la o dimensiune ușor diferită. Dacă desenul roșu nu se așază peste cel negru, alegeți **Aliniere după două puncte** și faceți clic de patru ori:

1. un punct de pe desenul vechi (roșu), cum ar fi centrul unui stâlp sau un colț de clădire,
2. același punct de pe desenul nou (negru),
3. un al doilea punct de pe desenul roșu, departe de primul,
4. același punct de pe desenul negru.

Desenul roșu se mută, se rotește și se scalează peste cel negru. Bara de stare arată cu cât este mai mare desenul nou („size × 1.000” când este la fel). Măriți pentru alegerea punctelor: cu cât faceți clic mai precis, cu atât potrivirea este mai bună.

## Găsirea modificărilor

Alegeți **Găsire modificări**. TakeoffCraft compară liniile celor două desene: liniile doar pe foaia veche devin roșii, cele doar pe foaia nouă devin albastre, iar bara de stare le numără. Liniile mutate cu un fir de păr (o retrasare) nu se numără ca modificări.

De asemenea, verifică fiecare marcaj de pe foaia veche și numără pe cele care se află acolo unde desenul s-a schimbat:

- un traseu sau o arie, când desenul s-a schimbat la unul dintre capetele sau colțurile sale, sau de-a lungul a cel puțin o șesime din lungime;
- o numărare, când ceva s-a schimbat chiar lângă ea.

## Mutarea antemăsurătorii

Alegeți **Mutare antemăsurătoare aici**. Fiecare marcaj de pe foaia veche se mută pe cea nouă, prin aliniere, într-un singur pas de anulare. Cele de lângă o modificare sunt semnalate: sunt desenate cu un halou portocaliu, iar bara foii afișează „(n) de verificat”.

Dacă foaia nouă nu avea scară, primește scara celei vechi (ajustată când desenele au trebuit scalate pentru aliniere). Dacă avea deja o altă scară, TakeoffCraft întreabă mai întâi: marcajele mutate se măsoară la scara foii noi.

## Verificarea marcajelor semnalate

1. Alegeți „(n) de verificat” pe bara foii. Se mărește la următorul marcaj semnalat și îl selectează; panoul lui spune de ce este semnalat.
2. Corectați marcajul dacă desenul s-a schimbat sub el (trageți colțurile, adăugați sau ștergeți marcaje, sau scoateți-l din nou).
3. Alegeți **Verificat** în panoul lui. Semnalul dispare, iar numărul de pe bara foii scade.

Semnalele se salvează împreună cu antemăsurătoarea, așa că le puteți verifica mai târziu.

:::note
Comparația funcționează pe PDF-uri vectoriale și pe scanări deopotrivă, pentru că compară ce este desenat. O scanare strâmbă sau întinsă se poate alinia doar aproximativ cu două puncte; verificați atunci mai multe marcaje cu ochiul.
:::
