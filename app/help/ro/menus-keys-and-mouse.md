---
title: Meniuri, taste și mouse
summary: Alegeți un stil de meniu care se potrivește cu felul în care lucrați deja, dați oricărei comenzi propria tastă, mutați comenzile între meniuri și stabiliți ce fac rotița și butoanele mouse-ului.
keywords: stil de meniu, meniuri, bară de meniu, panglică, file ale panglicii, bară de instrumente, scurtături, taste rapide, taste, personalizare, remapare, redefinire, mouse, rotiță, inversare, direcția zoom-ului, buton din mijloc, buton dreapta, deplasare, export, import, comutare, familiar, birou de antemăsurători, condiții
from: f01f0d6d
---

Comenzile TakeoffCraft sunt aceleași, oricum ați ajunge la ele. Un **stil de meniu** decide doar unde stau pe ecran, cum se numesc acolo și ce taste le rulează. Alegeți-l în {{ui:Settings}} ({{key:Mod+,}}) › {{ui:TakeoffCraft}} › {{ui:Menus, keys and mouse}}; schimbarea este imediată, iar acest browser o reține.

## Cele trei stiluri

| Stil | Ce obțineți |
|---|---|
| {{ui:TakeoffCraft}} | Bara de instrumente proprie a TakeoffCraft: {{ui:File}}, {{ui:Export}}, {{ui:Scale}}, {{ui:Takeoff}}, {{ui:Edit}} și {{ui:View}}, cu tastele de instrument dintr-o literă. Punctul de plecare. |
| {{ui:Takeoff desk}} | O bară de meniu ({{ui:File}}, {{ui:Edit}}, {{ui:View}}, {{ui:Scale}}, {{ui:Takeoff}}, {{ui:Items}}, {{ui:Markup}}, {{ui:Export}}) peste un rând de instrumente de antemăsurătoare, așa cum își așază programele de antemăsurătoare pe ecran. Pe rând, articolele se numesc condiții. Aceleași taste, plus {{key:N}} pentru un articol nou. Presetările de scară se mută în bara foii, lângă scara foii. |
| {{ui:Takeoff ribbon}} | File ale panglicii numite după lucrare: {{ui:Takeoff}} (măsurare, forme, scară, din desen, condiții), {{ui:Edit}}, {{ui:View}}, {{ui:Markup}} și {{ui:Estimate}} (registrul de calcul, PDF-urile marcate, oferta), cu un meniu {{ui:File}} și un rând rapid pentru deschidere, salvare, anulare și refacere. Instrumentele folosite toată ziua sunt mari, vecinii lor sunt mici și așezați unul peste altul. Aceleași taste; presetările de scară se mută în bara foii. |

Toate cele trei stiluri păstrează tastele TakeoffCraft: {{key:V}} selectare, {{key:L}} liniar, {{key:A}} arie, {{key:O}} cerc, {{key:B}} încăpere, {{key:P}} traseu (alegeți liniile PDF-ului), {{key:X}} decupaj, {{key:C}} numărare, {{key:S}} numărare automată, {{key:K}} calibrare, {{key:D}} verificare, {{key:R}} modul arc, {{key:E}} modul scădere, {{key:F}} și {{key:W}} pentru potrivire, {{key:3}} vizualizarea 3D de verificare, {{key:F3}} agățare, și {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}.

Instrumentele din bara foii (note, nori, evidențieri, Compare, 3D) așteaptă până când este deschis un PDF; dacă sunt alese mai devreme, linia de stare o spune.

:::tip
O tastă care aparține layout-ului propriu al TakeoffCraft, dar căreia stilul dvs. i-a dat altă comandă, nu face nimic, iar linia de stare spune unde a ajuns comanda sa („În Tastele mele, Numărare este Ctrl+Alt+C”). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} și săgețile păstrează mereu sensul lor. Cât timp desenați un tronson sau un contur, lipiți sau revizuiți o numărare automată, literele și cifrele unei lungimi tastate rămân în seama desenului.
:::

## Adaptarea stilului

1. Alegeți stilul cel mai apropiat de ce doriți, apoi faceți clic pe {{ui:Customize…}}.
2. La {{ui:Keys and menus}}, găsiți o comandă (caseta de căutare ajută). Faceți clic pe {{ui:Add a key}} și apăsați tasta, sau două taste una după alta pentru o tastă din două litere. Faceți clic pe o tastă pentru a o elimina.
3. Cu bara de meniu, {{ui:Where it sits}} mută comanda în alt meniu sau la {{ui:Keys only}}.
4. La {{ui:Mouse}}, setați rotița și butoanele care deplasează foaia.
5. Dați-i un nume și faceți clic pe {{ui:Save}}.

Salvarea unui stil integrat creează propria copie („Biroul meu de antemăsurători”); cel integrat nu se schimbă niciodată. O tastă atribuită la două comenzi apare în roșu și trebuie reparată înainte de salvare.

## Mouse

- **Rotița mouse-ului**: {{ui:Scroll up zooms in}} (punctul de plecare) sau {{ui:Scroll up zooms out}}, și cât de repede. Un ciupit pe touchpad mărește mereu în direcția în care se mișcă degetele.
- **Deplasarea foii cu**: butonul din mijloc, butonul din dreapta sau ambele. Un clic stâng pe hârtia goală și {{key:Space}} cu o tragere deplasează întotdeauna; un clic dreapta fără tragere încheie întotdeauna un tronson sau un contur.
- **Tragerea în vizualizările 3D**: {{ui:Each view's own}} păstrează butoanele vizualizării 3D de verificare (stânga și mijlocul orbitează, dreapta deplasează). Sau setați butoanele din mijloc și din dreapta pe orbitare, deplasare, zoom sau nimic; {{key:Shift}} cu butonul schimbă orbitarea cu deplasarea. Butonul stâng orbitează și alege întotdeauna.

## Transportarea stilurilor

{{ui:Export}} salvează stilul în uz ca un fișier mic `.ccinput.json`; {{ui:Import…}} adaugă unul, de pe alt calculator sau de la un coleg. Un fișier importat poate indica doar comenzile proprii ale TakeoffCraft: orice altceva din el este lăsat afară și numărat în linia de stare. {{ui:Delete this style}} elimină unul dintre stilurile proprii.

:::note
Aceste setări rămân în acest browser. {{ui:Use this style in every app}} de sub cardurile de stil face ca fiecare aplicație să se deschidă în stilul corespunzător (propria bară de instrumente, o bară de meniu sau o panglică), cu modificările făcute în fiecare aplicație. TakeoffCraft nu are un stil cu linie de comandă: când unul este ales pentru fiecare aplicație, TakeoffCraft păstrează propria bară de instrumente.

{{ui:Takeoff ribbon}} este și panglica aspectului {{ui:Ribbon and project browser}} ({{ui:Settings}} › {{ui:Global}} › {{ui:Layout}}): vezi [Ecranul TakeoffCraft](topic:workspace).
:::

Vezi și: [Taste și mouse](topic:keyboard) · [Setările TakeoffCraft](topic:settings) · [Venire de la alt software de antemăsurători](topic:coming-from)
