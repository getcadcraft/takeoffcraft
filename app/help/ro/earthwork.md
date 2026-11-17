---
title: Terasamente și cote de nivel
summary: Marcați cotele de nivel pe un plan de amplasament, transmiteți-le către CivilCraft pentru suprafață și debleu și rambleu, și calculați aici cantități simple de săpătură.
keywords: terasamente, săpătură, debleu, rambleu, debleu și rambleu, sistematizare verticală, cotă de nivel, cote, topo, suprafață, triangulație, civilcraft, puncte, pnezd, tranșee
from: a898e508
---

TakeoffCraft măsoară ceea ce este desenat pe o foaie. Terasamentele au nevoie de o suprafață a terenului, deci sunt comune cu CivilCraft, care construiește suprafețe din puncte, le nivelează și calculează debleul, rambleul și transportul.

## Săpătură simplă aici

Pentru o amprentă săpată la o singură adâncime, este suficient un articol de arie cu o **adâncime**: volumul este aria × adâncimea. [Pachetul de meserii pentru antreprenorul general](topic:trade-packs) are un articol de săpătură în masă (volum în masiv, volum afânat și încărcături de camion) și un articol de tranșee pentru utilități (săpătură, pat și umplere după lungime și adâncime).

## Cote de nivel pentru CivilCraft

1. Setați scara planului de amplasament.
2. Creați un articol **Numărare**, de exemplu "Cotă teren existent", și faceți clic pe fiecare cotă de nivel de pe foaie.
3. Selectați un marcaj și scrieți {{ui:Cotă}} lui în panoul Marcaj selectat: `102.5`, `102'-6"` sau `31.24 m`. Cotele negative și cele zero sunt acceptate.
4. Deschideți meniul {{ui:Export}} și alegeți {{ui:Cote de nivel}}. Primiți un fișier de puncte (`.csv`) cu Point, Northing, Easting, Elevation și Description, câte un rând pentru fiecare punct marcat de pe foaia deschisă.
5. Deschideți fișierul în CivilCraft (vezi [Importarea punctelor](app:civilcraft/import-points)). Acesta construiește suprafața din puncte ([Construirea unei suprafețe](app:civilcraft/build-surface)); de acolo compară suprafețele și calculează debleul și rambleul ([Volume](app:civilcraft/volumes)).

Northing și Easting sunt coordonatele proprii ale foii, în ft, măsurate din colțul paginii la scara ei: distanțele și volumele dintre puncte sunt corecte, dar nu sunt coordonatele topografice ale amplasamentului. Mutați-le pe coordonatele amplasamentului în CivilCraft atunci când este necesar.

:::note
Punctele de pe foi diferite nu au aceleași coordonate, deci exportul ia doar foaia deschisă. Cotele de nivel sunt salvate cu antemăsurătoarea și sunt transmise prin copiere și lipire.
:::

## Debleu și rambleu din CivilCraft

Terasamentele din CivilCraft revin ca două articole pe care le puteți deviza:

1. În CivilCraft, nivelați platformele și coridoarele, apoi alegeți {{ui:Trimitere către TakeoffCraft}} sub **Terasamente** ([Volume de terasamente](app:civilcraft/volumes)). Se salvează un fișier de cantități (`.quantities.json`).
2. În TakeoffCraft, deschideți-l cu {{ui:Deschidere antemăsurătoare}} sau trageți-l în aplicație. Antemăsurătoarea rămâne deschisă: fișierul adaugă **Earthwork: cut** și **Earthwork: fill** ca [cantități tipizate](topic:create-items#typed-quantities-no-drawing), în yarzi cubi (CY) pentru un proiect în ft sau în metri cubi (m³) pentru un proiect în metri. Este un singur pas: {{key:Mod+Z}} îl anulează.
3. Redenumiți-le, setați pierderile, tarifele și articolele compuse după dorință.

Când proiectul se modifică, trimiteți din nou din CivilCraft și deschideți fișierul nou: aceleași două articole primesc noile cantități. Denumirile, tarifele, pierderile și articolele compuse rămân cum le-ați setat. Dacă unitatea proiectului s-a schimbat, bara de stare o spune: verificați tarifele. Un fișier de la alt proiect CivilCraft adaugă propriile sale două articole.

Cantitățile sunt volume în masiv, așa cum le-a măsurat CivilCraft (metoda grilei): fără contracție sau umflare. Adăugați-le ca pierderi sau cu o formulă precum `Q * 1.25` pentru volum afânat. Editorul de articol arată de unde provine fiecare și când; coloana de note a devizului o spune și ea.

:::note
Fișierul de cantități este JSON simplu (`"format": "cadcraft-quantities"`), deci un script sau alt program poate scrie unul: un nume de aplicație, un proiect și articole cu o cheie, un nume, o unitate și o cantitate.
:::
