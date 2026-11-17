---
title: Zone de ofertare
summary: Marcați pe clădiri, etaje sau etape, extrageți cantitățile câte o zonă odată și citiți cantitățile și costurile pentru fiecare zonă.
keywords: variantă în plus, variantă în minus, ofertă de bază, variante, zonă de ofertare, zonă, clădire, etaj, nivel, etapă, sector, variantă, defalcare, împărțire, etaj tipic, subtotal, pe zone
from: 64f3d41c
---

O zonă de ofertare este o parte a lucrării pe care o prețuiți separat: o clădire, un etaj, o etapă, o aripă. Fiecare marcaj poate fi într-o zonă de ofertare. Cantitățile și devizul pot fi citite apoi pentru fiecare zonă, cu un subtotal pentru fiecare, în timp ce totalul lucrării rămâne suma tuturor.

## Crearea unei zone de ofertare

1. În partea de sus a panoului {{ui:Articole}}, deschideți lista {{ui:Zonă de ofertare}}.
2. Alegeți **Zonă de ofertare nouă…**, scrieți un nume, de exemplu „Clădirea A” sau „Nivelul 2”, și alegeți **Creează**.
   Noua zonă devine cea curentă. Bara de stare spune „Marcajele noi merg în (nume). Marcajele din alte zone de ofertare sunt estompate.”

## Extragerea într-o zonă

Cât timp o zonă de ofertare este aleasă în listă, fiecare marcaj nou intră în ea: tronsoane, suprafețe, cercuri, numărări, marcajele adăugate de {{ui:Numărare automată}} și ce lipiți. Marcajele din alte zone și cele din nicio zonă sunt estompate pe foaie, ca să vedeți ce aparține unde.

Alegeți **Nicio zonă de ofertare** în listă pentru a extrage fără zonă; atunci nimic nu este estompat.

:::tip
Etaje tipice: extrageți Nivelul 2, selectați-i marcajele ({{key:Mod+A}} pe foaie), copiați-le, alegeți Nivelul 3 în listă și lipiți. Copiile intră în Nivelul 3. Când etajele sunt identice și nu aveți nevoie să fie separate, un [grup tipic](topic:typical-groups) numără în schimb un etaj de mai multe ori.
:::

## Mutarea marcajelor într-o altă zonă

Selectați un marcaj sau mai multe ({{key:Shift}} + clic, sau {{key:Mod+A}}). Sub **Marcaj selectat** (sau **Marcaje selectate**), alegeți zona din câmpul {{ui:Zonă de ofertare}}. Bara de stare spune „3 marcaje mutate la Nivelul 2.” Este un singur pas de anulare.

## Redenumire, reordonare sau ștergere

Alegeți **Gestionare zone de ofertare…** în listă. Scrieți peste un nume ca să-l redenumiți, folosiți săgețile pentru a schimba ordinea (tabelele și registrul de lucru o urmează) sau ștergeți una cu coșul. Ștergerea unei zone păstrează marcajele: acestea rămân apoi în nicio zonă. {{key:Mod+Z}} anulează fiecare modificare.

## Citirea cantităților pe zone

În tabelul {{ui:Cantități}}, alegeți {{ui:Pe zone}} (apare după ce extragerea are o zonă de ofertare). Fiecare zonă listează articolele pe care le conține, cu cantitatea, unitatea și totalul lor, apoi un rând de subtotal. Marcajele din nicio zonă vin ultimele, ca **Nicio zonă de ofertare**. Faceți clic pe un rând de articol ca să evidențiați articolul și să faceți zona aceea cea curentă.

Articolele compuse se calculează pentru fiecare zonă din totalurile proprii ale zonei. O formulă care rotunjește în sus, cum este `ceil(L / 4)`, poate da atunci puțin mai mult pe zone decât pentru lucrarea întreagă, cum s-ar întâmpla la o ofertă prețuită zonă cu zonă.

## Variante: ofertă de bază plus adăugări și scăderi

O zonă de ofertare poate fi o **variantă**: lucrare pe care proprietarul o poate adăuga la ofertă sau o poate scoate din ea. În **Gestionare zone de ofertare…**, fiecare zonă are o listă lângă nume:

| Opțiune | Ce face |
|---|---|
| {{ui:Ofertă de bază}} | În ofertă, ca de obicei. |
| {{ui:Variantă în plus}} | Prețuită separat și **lăsată în afara ofertei de bază**: o modernizare a covorului, o copertină suplimentară. |
| {{ui:Variantă în minus}} | În ofertă de bază, și oferită ca scădere: „ștergeți copertina”. |

Extrageți lucrarea unei variante în zona ei de ofertare, ca pe orice altă zonă. Odată ce extragerea are o variantă:

- Antetul tabelului {{ui:Cantități}} spune **Ofertă de bază** în loc de {{ui:Total lucrare}}: întreaga extragere fără variantele în plus.
- {{ui:Pe zone}} se termină cu oferta de bază și câte un rând pentru fiecare variantă: **+$300.00** pentru o adăugare, **−$1,050.00** pentru o scădere.
- O variantă prețuiește doar articolele care au marcaje în ea, cu articolele lor compuse, astfel încât o piesă a unui alt articol să nu se strecoare înăuntru.

În exporturi, CSV-ul se termină cu oferta de bază și variantele, iar registrul de lucru primește o foaie de calcul **Variante**: oferta de bază, articolele fiecărei variante și modificarea ei, plus oferta de bază cu toate variantele în plus scoase.

## În export

{{ui:XLSX}} adaugă o foaie de calcul **Pe zone de ofertare**: articolele și componentele fiecărei zone, cu cantitatea, cantitatea cu pierderi, material, manoperă și total, un subtotal pe zonă (o formulă `SUM`) și **Toate zonele de ofertare** la sfârșit. Foaia **Marcaje** primește o coloană **Zonă de ofertare**. O extragere fără zone de ofertare se exportă ca înainte. Vezi [Coloanele exportului](topic:export-columns).

Zonele de ofertare sunt salvate în fișierul proiectului, împreună cu marcajele.
