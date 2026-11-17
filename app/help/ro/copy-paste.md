---
title: Copierea, lipirea și duplicarea marcajelor
summary: Copiați marcajele împreună cu articolele lor, lipiți-le acolo unde faceți clic sau în același loc pe altă foaie, duplicați, decupați, ștergeți și selectați totul, fiecare cu un pas de anulare.
keywords: copiere, lipire, decupare, duplicare, lipire în aceeași poziție, clipboard, selectare totală, anularea selecției, mai multe marcaje, etaj tipic, repetare, același plan, altă foaie, copiere articol, duplicare articol
from: e20e9024
---

Grupul {{ui:Editare}} al barei de instrumente conține {{ui:Anulare}}, {{ui:Refacere}}, {{ui:Copiere}} și {{ui:Lipire}}. Meniul {{ui:Mai multe}} are restul, fiecare cu tasta sa: {{ui:Decupare}}, {{ui:Copiere}}, {{ui:Lipire}}, {{ui:Lipire în aceeași poziție}}, {{ui:Duplicare}}, {{ui:Ștergere}}, {{ui:Selectare totală}} și {{ui:Anularea selecției}}. Fiecare dintre ele este un singur pas care se anulează cu {{key:Mod+Z}}.

## Selectarea marcajelor

1. Alegeți {{ui:Selectare}} ({{key:V}}) și faceți clic pe un marcaj.
2. Țineți {{key:Shift}} și faceți clic pe alte marcaje ca să le adăugați. {{key:Shift}} + clic pe un marcaj selectat îl scoate din nou.
3. Sau apăsați {{key:Mod+A}} ({{ui:Selectare totală}}) ca să luați fiecare marcaj de pe foaia deschisă.

Cu mai multe marcaje selectate, panoul din dreapta afișează **Marcaje selectate**: câte din fiecare articol, cu {{ui:Copiere}}, {{ui:Duplicare}}, {{ui:Decupare}} și {{ui:Ștergere marcaje}}. Mânerele de colț apar doar când este selectat un singur marcaj. {{key:Esc}} ({{ui:Anularea selecției}}) golește selecția.

## Copiere și lipire acolo unde faceți clic

1. Selectați marcajele și apăsați {{key:Mod+C}} ({{ui:Copiere}}). Marcajele se copiază împreună cu articolele lor, inclusiv cu ansamblul, pierderile și costurile fiecărui articol.
2. Mergeți la foaia pe care le doriți (poate fi aceeași foaie).
3. Apăsați {{key:Mod+V}} ({{ui:Lipire}}). O copie punctată urmărește cursorul.
4. Faceți clic acolo unde trebuie. Mijlocul marcajelor copiate ajunge la cursor.

{{key:Esc}} anulează și nu adaugă nimic. Marcajele lipite rămân selectate după aceea, deci {{key:Delete}} sau {{key:Mod+Z}} le îndepărtează din nou.

În aceeași antemăsurătoare, marcajele lipite merg pe **aceleași articole**, deci cantitățile lor se adaugă la acelea. Într-o altă antemăsurătoare (altă filă sau după {{ui:Nou}}), se folosește un articol cu același nume și tip; altfel articolul se adaugă cu ansamblul său. Dacă numele este deja luat de un articol de alt tip, articolul adăugat se numește „(nume) (copie)”.

Marcajele lipite merg în zona de ofertare aleasă în partea de sus a panoului {{ui:Articole}} (sau în niciuna). Vezi [Zonele de ofertare](topic:bid-areas).

## Lipire în aceeași poziție

{{key:Mod+Shift+V}} ({{ui:Lipire în aceeași poziție}}) pune copia exact în același loc pe foaia deschisă, după poziția sa pe pagină. Folosiți-o pentru un etaj tipic: antemăsurați nivelul 2, copiați, deschideți nivelul 3, lipiți în aceeași poziție.

Lipirea în aceeași poziție are nevoie de o foaie de **aceeași dimensiune** cu cea din care ați copiat. Pe o foaie de altă dimensiune, TakeoffCraft spune asta și nu lipește nimic; folosiți în schimb {{ui:Lipire}} și faceți clic. Pe foaia din care ați copiat, copia ajunge peste originale.

## Scara trebuie să coincidă

Lungimile și ariile depind de scara foii. Un traseu care măsoară 10' la 1/4" = 1'-0" ar măsura 20' pe o foaie la 1/8" = 1'-0". Așadar TakeoffCraft lipește traseele și ariile doar pe o foaie cu **aceeași scară** ca foaia din care au venit și spune clar când nu este cazul:

- Foaia deschisă nu are încă scară: dați-i una mai întâi ([Stabilirea scării](topic:set-the-scale)), apoi lipiți.
- Foaia deschisă are altă scară: mesajul numește ambele scări. Lipiți pe o foaie la aceeași scară.
- Numărările nu au nevoie de scară: numărările copiate se lipesc oriunde.

## Duplicare

{{key:Mod+D}} ({{ui:Duplicare}}) copiază marcajele selectate și pune copia direct la cursor; faceți clic acolo unde trebuie. Nimic nu se adaugă până nu faceți clic, iar {{key:Esc}} nu lasă nimic. Duplicarea nu schimbă ce lipește {{ui:Lipire}}.

## Decupare și ștergere

- {{key:Mod+X}} ({{ui:Decupare}}) copiază marcajele selectate și apoi le șterge. Lipiți-le acolo unde trebuie sau anulați decuparea.
- {{key:Delete}} sau {{key:Backspace}} ({{ui:Ștergere}}) șterg marcajele selectate fără a le copia.

## Copierea unui articol

Editorul de articole (sub **Articole**) se termină cu:

- {{ui:Copiere articol}}: copiază articolul cu ansamblul, pierderile și costurile sale, fără marcaje. {{ui:Lipire}} adaugă apoi o copie a lui în această antemăsurătoare sau în alta.
- {{ui:Duplicare articol}}: adaugă imediat o copie, numită „(nume) (copie)”.

:::tip
Copia rămâne pe acest calculator: este păstrată în această filă și în spațiul de stocare al browserului, așa că o altă filă TakeoffCraft o poate lipi. Nimic nu se încarcă, iar clipboard-ul sistemului nu este folosit, deci nu puteți lipi marcaje în alte programe.
:::

:::note
O copie provine dintr-o foaie pe rând. Marcajele se lipesc așa cum sunt: nu există încă rotire sau oglindire a unei copii.
:::
