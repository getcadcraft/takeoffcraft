---
title: Setări TakeoffCraft
summary: Afișați inch-ii până la 1/16, 1/8 sau 1/4, începeți articolele noi cu un procent de pierderi, alegeți de unde pornește glisorul Numărare automată, agățați de liniile desenului sau la 45° fără a ține Shift, stabiliți cât de lată este o ușă pe care o închide Umplerea încăperii și alegeți indicatorul de colț al vederii 3D.
keywords: setări, preferințe, opțiuni, precizie, fracții, inch, rotunjire, pierderi, pierdere implicită, numărare automată, prag, potrivire, glisor, agățare, 45, unghi, shift, view cube, pictogramă de axe, indicator de colț, 3d
from: bca3f0ed
---

Deschideți {{ui:Setări}} cu roata dințată din bara aplicației sau cu {{key:Mod+,}}. Prima filă, {{ui:TakeoffCraft}}, conține setările specifice acestei aplicații; {{ui:General}} conține cele comune tuturor aplicațiilor CadCraft (temă, panouri, bară de instrumente). Setările aplicației TakeoffCraft există doar în aplicație: se modifică aici, iar acest browser le reține. {{ui:Resetare setări TakeoffCraft}} le readuce la valorile inițiale.

## Picioare și inchi

Afișați lungimile până la cel mai apropiat **1/16"** (implicit), **1/8"** sau **1/4"**. Aceasta modifică modul în care se citesc lungimile pe foaie, în panouri, în cantități și în bara de stare.

Se rotunjește doar afișarea. Cantitățile, costurile și exporturile se calculează din lungimile exacte, iar exporturile afișează întotdeauna 1/16".

## Pierderi implicite

Procentul de pierderi cu care începe fiecare articol nou: 0% (implicit), 2%, 3%, 5%, 7.5%, 10%, 15% sau 20%. Se poate introduce oricând altă valoare de pierderi pentru fiecare articol, în editorul articolului sau direct în tabelul de cantități. Articolele existente își păstrează pierderile proprii.

## Numărare automată: de unde pornește glisorul de potrivire

Poziția glisorului {{ui:Potrivire}} la finalul unei căutări [Numărare automată](topic:auto-count), între 50% și 95%; 75% este valoarea implicită. Valorile mai mici oferă mai multe elemente similare de respins; cele mai mari oferă mai puține. Glisorul poate fi mutat și în timpul fiecărei revizuiri.

## Agățarea de liniile proprii ale desenului

Activată implicit. În timpul măsurării sau calibrării, un punct aflat aproape de o linie a PDF-ului sare la capătul ei, la mijlocul ei, la o intersecție sau la cel mai apropiat punct de pe ea. {{key:F3}} și {{ui:Agățare}} din bara de stare o activează și o dezactivează. Mai multe: [Agățarea de liniile desenului](topic:snap-to-the-drawing).

## Umplerea încăperii: cât de lat este golul pe care îl închide

{{ui:Umplerea încăperii închide goluri de până la}} stabilește cât de lat trebuie să fie un gol de ușă sau un interval pentru ca instrumentul {{ui:Încăpere}} să îl considere închis: între 3'-0" și 8'-0", implicit 4'-0". Dacă valoarea este mai mare decât cea mai lată ușă, o încăpere poate trece în următoarea; dacă este mai mică decât o ușă, încăperea rămâne deschisă. Vezi [Umplerea unei încăperi dintr-un clic](topic:measure-areas#fill-a-room-with-one-click).

## Agățare la 45° fără a ține Shift

Dezactivată implicit. Când este activă, tronsoanele, conturele, decupajele și colțurile trase merg la 0°, 45°, 90° sau 135° față de ultimul punct, fără a ține {{key:Shift}}; țineți {{key:Shift}} pentru a da clic la orice unghi. Bara de stare afișează atunci „Se agață la 45°; Shift eliberează unghiul”. Punctul pe care dați clic pe curba unui arc și cercurile nu se agață niciodată; capătul unui arc, da.

## Dimensiunea marcajului de numărare

Cât de mari sunt punctele de numărare: {{ui:Foarte mic}}, {{ui:Mic}}, {{ui:Mediu}} (implicit: dimensiunea pe care o aveau întotdeauna punctele) sau {{ui:Mare}}. Dimensiunea se păstrează pe ecran la orice zoom, iar PDF-ul marcat desenează fiecare punct la aceeași dimensiune pe hârtie, indiferent de dimensiunea foii, astfel încât PDF-ul la 100% arată ca ecranul. Mai multe: [Numărarea manuală](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Indicatorul de colț

Doar pentru [vederea de verificare 3D](topic:check-in-3d): {{ui:ViewCube}} (implicit: un cub în dreapta sus, pe care se poate da clic, trage și roti), {{ui:Pictogramă de axe}} (un mic marcaj X, Y, Z în dreapta jos) sau {{ui:Niciunul}}. Se schimbă imediat și se păstrează în acest browser. Foaia plană nu afișează niciodată unul.

## Instrumentul de traseu: cel mai mare interval de unire

{{ui:Instrumentul de traseu: cel mai mare interval de unire}} este distanța maximă dintre două capete de linie pentru a fi considerate un singur traseu, în puncte PDF (între 0.05 și 60; implicit 1.5). Liniile unui desen se opresc adesea puțin înainte de a se întâlni. Valorile mai mari unesc mai mult; cele mai mici țin liniile separate. {{key:[}} și {{key:]}} o modifică în timpul alegerii, iar acest câmp urmează. Vezi [Alegerea liniilor](topic:pick-the-lines).
