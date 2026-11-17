---
title: Numărare manuală
summary: Faceți clic pe fiecare ușă, corp de iluminat sau dispozitiv ca să-l numărați, verificați numărările și corectați greșelile.
keywords: numărare, fiecare, EA, corpuri, uși, dispozitive, simboluri, numărătoare, numărare prin clic, numărare manuală
from: 594f2980
---

Un articol de numărare numără lucruri: uși, corpuri de iluminat, prize, obiecte sanitare. Fiecare clic pe foaie adaugă un marcaj de numărare. Numărarea nu are nevoie de scară.

## Numărare

1. Creați sau faceți clic pe un articol de numărare sub {{ui:Articole}} (tip {{ui:Numărare}}).
2. Alegeți {{ui:Numărare}} din bara de instrumente sau apăsați {{key:C}}.
3. Faceți clic pe fiecare pe foaie.
   Fiecare clic pune un punct în culoarea articolului, iar numărul articolului crește cu unu.
4. Treceți la foaia următoare ({{key:PageDown}}) și continuați numărarea. Instrumentul rămâne pe {{ui:Numărare}}.
5. Apăsați {{key:Esc}} când ați terminat. TakeoffCraft revine la {{ui:Selectare}}.

Trăgerea deplasează în continuare planul, iar rotița mărește sau micșorează în timp ce numărați, astfel că vă puteți mișca pe foaie fără a adăuga puncte.

:::tip
Faceți clic pe articolul de numărare ca să evidențiați punctele sale pe fiecare foaie. Lista foilor arată apoi câte puncte sunt pe fiecare foaie, ceea ce ajută la găsirea foilor pe care nu le-ați numărat încă.
:::

## Corectarea unei numărări

- **Ștergerea unui punct**: alegeți {{ui:Selectare}} ({{key:V}}), faceți clic pe punct și apăsați {{key:Delete}} sau alegeți {{ui:Ștergere marcaj}}. Sau apăsați {{key:Mod+Z}} imediat după un clic greșit.
- **Mutarea unui punct**: selectați-l, apoi trageți-l.
- **Numărat la articolul greșit**: selectați punctul și alegeți articolul corect din lista **Articol** de sub **Marcaj selectat**.

## Dimensiunea punctelor, pe ecran și în PDF

Punctele păstrează aceeași dimensiune pe ecran, oricât ați mări. Ca să o schimbați, deschideți {{ui:Setări}}, fila TakeoffCraft, și alegeți **Dimensiune marcaj numărare**: Foarte mică, Mică, Medie (implicit) sau Mare.

Exportul PDF ({{ui:Export}} › PDF-ul marcat) desenează fiecare punct la aceeași dimensiune pe hârtie, indiferent de dimensiunea foii: un vizualizator care afișează PDF-ul la 100% arată punctele la fel de mari ca pe ecran. Acolo unde punctele de pe o foaie s-ar atinge în continuare, exportul face punctele foii respective mai mici, pentru ca fiecare să poată fi citit.

## Simboluri identice, multe

Pentru un simbol care se repetă de multe ori pe o foaie, încercați [Numărare automată](topic:auto-count): încadrați unul, verificați ce găsește și adăugați-le pe toate dintr-o dată.

## Folosirea numărărilor în formule

Cantitatea unui articol de numărare este **N**. Componentele ansamblului o pot folosi, de exemplu balamale `N * 3` pentru uși. Vezi [Ansambluri și formule](topic:assemblies).
