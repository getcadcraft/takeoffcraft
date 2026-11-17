---
title: Acoperișuri și pante
summary: Atribuiți unei zone panta pentru a măsura suprafața acoperișului din plan și măsurați muchiile de fronton, coamele de șold și văile de-a lungul pantei lor.
keywords: acoperiș, pantă, înclinare, factor de înclinare, ridicare, orizontală, 6:12, muchie de fronton, coamă de șold, vale, fronton, învelitoare, suprafață, suprafață înclinată, lungime reală, arie în plan
from: 38225b60
---

Planul unui acoperiș arată fiecare față a acoperișului întinsă, văzută de sus. Acoperișul propriu-zis este mai mare: o față la 6:12 are cu aproximativ 12% mai multă suprafață decât proiecția ei în plan, iar muchiile înclinate sunt mai lungi decât par. Dați articolului panta sa, iar TakeoffCraft măsoară de-a lungul pantei.

## Introducerea unei pante

Panta este ridicarea la 12 unități de orizontală, așa cum apare în simbolurile de pantă de pe planul acoperișului. Introduceți-o ca `6:12`, `6/12` sau doar `6`; funcționează și alte valori (`4:10` înseamnă 4.8:12). Un unghi se introduce cu semnul gradului: `26.57°`. Valoarea goală sau `0` înseamnă plat.

## Suprafețe de acoperiș

1. Creați un articol de tip zonă pentru învelitoare sau deschideți-l pe cel existent.
2. În setările sale, introduceți **Panta**, de exemplu `6:12`.
3. Conturați fiecare față a acoperișului pe plan cu {{ui:Arie}}, ca de obicei.

Fiecare față se calculează ca aria din plan înmulțită cu factorul de înclinare: √(1 + (ridicare ÷ 12)²), adică 1.118 la 6:12 și 1.414 la 12:12. Selectați o față pentru a vedea **Aria** (pe pantă), **Aria în plan** și **Factorul de înclinare**.

Fețe cu altă pantă: selectați fața și introduceți propria **Pantă** în panoul ei. Lăsați-o goală pentru a folosi panta articolului. Vederea de verificare 3D, ansamblurile (`A` este suprafața înclinată), costurile și exportul folosesc toate suprafața înclinată. Scăderile dintr-o față înclinată, precum ferestrele de acoperiș, se aplică la aceeași pantă.

Perimetrul (`P`) rămâne perimetrul din plan. Măsurați streșinile, muchiile de fronton, coamele de șold și văile ca tronsoane (mai jos).

## Muchii de fronton, coame de șold și vale

1. Creați un articol liniar, de exemplu „Muchie de fronton” sau „Coame de șold”.
2. Setați **Înclinarea** la **Muchie de fronton** (o muchie înclinată, ca la un fronton) sau la **Coamă de șold sau vale** (linia în care se întâlnesc două fețe) și introduceți **Panta** fețelor acoperișului.
3. Desenați tronsoanele pe plan cu {{ui:Liniar}}.

O muchie de fronton se calculează ca lungimea din plan înmulțită cu factorul de înclinare. O coamă de șold sau o vală trece pe plan la 45° între două fețe de aceeași pantă, deci lungimea sa reală este lungimea din plan înmulțită cu √(1 + (ridicare ÷ 12)² ÷ 2): 1.061 la 6:12, 1.225 la 12:12.

Un tronson poate combina ambele tipuri. Selectați-l: fiecare segment din panoul său are o listă de înclinări — **Al articolului** (setarea articolului), **Nivel**, **Muchie de fronton** sau **Coamă de șold sau vale** — și lungimea sa de-a lungul pantei. **Panta** proprie a tronsonului din panou înlocuiește panta articolului pentru toate segmentele sale. Panoul afișează și **Lungimea în plan**, iar etichetele de pe foaie arată lungimile de-a lungul pantei.

Scăderile funcționează în continuare: un segment scăzut nu se numără, indiferent dacă este înclinat sau nu.

:::note
Coamele de șold și văile presupun că ambele fețe au aceeași pantă. Pentru fețe cu pante diferite, măsurați coama de șold după lungimea sa reală în altă parte sau desenați-o ca muchie de fronton cu o pantă echivalentă.
:::
