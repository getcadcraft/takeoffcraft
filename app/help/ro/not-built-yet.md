---
title: Ce nu este încă realizat
summary: Funcții de antemăsurătoare pe care versiunea actuală nu le are și ce se poate face în schimb, astăzi.
keywords: limite, lipsă, încă nu, plan de dezvoltare, planificat, soluție alternativă, pe tronson, cloud, desktop
from: 94ff90d0
---

TakeoffCraft este în dezvoltare. Această listă cuprinde ce nu face versiunea actuală și cum se poate realiza totuși lucrarea.

## Măsurare

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Inserarea unui punct în mijlocul unui tronson sau al unui contur | Ștergeți marcajul și desenați-l din nou. |
| Selectarea prin casetă (fereastră) | {{key:Shift}} + clic pe fiecare marcaj, sau {{key:Mod+A}} pentru toate marcajele de pe foaie. Consultați [Copiere, lipire și duplicare de marcaje](topic:copy-paste). |
| Rotirea, oglindirea sau rescalarea unei copii lipite | Lipiți pe o foaie, la aceeași scară și în aceeași orientare; desenați restul manual. |
| Citirea unei scări de pe o foaie scanată sau de pe o bară grafică de scară | Alegeți presetarea sau calibrați pe lungimea barei. |
| Mai mult de o scară pe foaie (zone de detaliu, planuri mărite) | Măsurați partea la scara foii și luați cantitățile detaliului pe foaia lui mărită, dacă setul are una. |

## Articole și prețuri

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Formule de ansamblu care folosesc alte tipuri de marcaje ale unui articol (ușile unei camere, în formulele etajului lor) | Formulele folosesc totalurile tipului principal; prețuiți celelalte tipuri pe rânduri proprii. |
| Formule de ansamblu calculate tronson cu tronson | Formulele folosesc totalurile articolului; folosiți `N` pentru extrele pe tronson. |
| Formule care folosesc cantitățile altui articol | Repetați măsurarea în acel articol sau calculați în exportul pe foaie de calcul. |
| Echipe pe componentele ansamblului sau o zi de lucru diferită de 8 ore | Atribuiți echipa articolului; citiți zilele-echipă pentru o altă durată a zilei ca ore-echipă ÷ durata zilei. |
| Adnotări altele decât notele, norii și evidențierile (săgeți, cote, ștampile) sau răspunsuri la o notă | Scrieți-le în textul notei și schimbați-i starea pe măsură ce se rezolvă. |
| O bibliotecă de prețuri comună unei echipe sau păstrată în contul propriu | Biblioteca se păstrează în acest browser: exportați-o ca CSV și importați-o pe celălalt computer. |
| Pachete pe meserii verificate de estimatori practicieni | Fiecare pachet este un punct de plecare: verificați ipotezele în raport cu lucrarea și cu produsele folosite, înainte de a prețui cu el. Consultați [Pachete pe meserii](topic:trade-packs). |
| Prețuri în pachetele pe meserii | Pachetele aduc doar ansambluri: stabiliți propriile tarife sau importați lista de prețuri ca CSV. |
| Redenumirea antemăsurătorii | Numele provine din primul PDF; redenumiți fișierele descărcate. |
| Denumirea manuală a foilor | Foile sunt denumite după etichetele de pagină din PDF; căutați după numele fișierului și al paginii. |

## Desene (DWG și DXF)

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Tabele de stiluri de trasare, atribuiri de stilouri și fișiere CTB pe foile desenului | Un desen este afișat în negru, sau în culorile sale întunecate pentru hârtie; grosimile liniilor vin din desen. |
| Deschiderea unui DXF binar sau a unui DWG mai vechi decât AutoCAD 2000 | Salvați-l ca DXF ASCII sau ca DWG mai nou. |
| Găsirea unui desen legat (xref) după dosarul în care se află | Deschideți și fișierul desenului legat, împreună cu cel gazdă: va fi găsit după numele fișierului între fișierele deschise. |
| Măsurarea polilinilor 3D, a plaselor, a solidelor și a regiunilor | Numărați-le după strat și tip, sau măsurați vederea în plan cu instrumentele Liniar și Arie. |
| Text dintr-un PDF marcat provenit dintr-un desen în scripturi non-latine | Caracterele pe care Helvetica nu le are se tipăresc ca „?” în PDF-ul marcat; desenul de pe ecran nu este afectat. |
| Predarea unui desen către altă aplicație din bara de foi | Deschideți același fișier în acea aplicație. |
| Un desen care conține antemăsurătoarea în interior, cum face {{ui:PDF with the takeoff inside}} pentru PDF-uri | {{ui:Save takeoff}}: fișierul `.takeoff.json` se redeschide pe același desen, găsit după conținut. |
| Desenarea sau numărarea fundalurilor PDF, a imaginilor și a obiectelor OLE plasate într-un desen | Imaginile apar doar ca un cadru. Deschideți chiar fundalul PDF ca foaie. |

## Numărare automată

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Găsirea simbolurilor pe o foaie fără scară desenată la altă mărime | Stabiliți scara foii sau căutați cu o casetă desenată pe ea. |
| Găsirea simbolurilor oglindite | Numărați-le manual, sau căutați din nou cu o casetă în jurul unuia oglindit. |

## Fișiere și partajare

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Un singur PDF care arată marcajele și conține antemăsurătoarea | {{ui:Marked PDF}} pentru ca alții să vadă marcajele; {{ui:PDF with the takeoff inside}} pentru redeschidere în TakeoffCraft. |
| Un CSV cu cantitățile pe foaie sau cu marcajele | Folosiți {{ui:XLSX}}: foile de lucru By sheet și Marks le conțin. |
| Salvare în cloud | Încă nu este disponibilă. Salvați fișierele de proiect pe computer și faceți copii de rezervă. |
| O aplicație desktop separată TakeoffCraft | Din versiunea 0.5, aplicația desktop este CadCraft Studio, cu toate cele opt aplicații într-o singură instalare. TakeoffCraft rulează și în browser. |

## Ecran și intrare

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Meniul la clic dreapta (sau la apăsare lungă) | Folosiți bara de instrumente, panourile și tastele. O apăsare lungă încheie un tronson sau un contur. |
| Rotirea vizualizării | Paginile rotite deja în PDF apar drepte. |

## Vedere 3D

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Desenarea sau editarea marcajelor în 3D | Reveniți la foaie ({{key:3}}) pentru a desena; selectarea și ștergerea funcționează și în 3D. |
| Alinierea etajelor suprapuse, trasate în locuri diferite pe pagini | Suprapuneți etaje trasate la fel; verificați celelalte câte o foaie. |
| Numărarea stâlpilor dimensionați ca obiectul numărat | Fiecare stâlp de pe o foaie are aceeași dimensiune; marchează unde este o numărare, nu ce anume este. |

## Oferte

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Adendele la un pachet deja trimis, scrisorile de atribuire, o foaie de domeniu semnată de fiecare ofertant | Trimiteți un pachet nou și scrieți singur atribuirea. [Trimiterea unui pachet pentru oferte](topic:bid-invitations) acoperă ce este realizat. |
| Trimiterea invitațiilor de ofertă din orice cont: cât timp este testată, trimiterea de e-mailuri către ofertanți externi este oprită, cu excepția conturilor activate de echipa CadCraft | Descărcați {{ui:Scope CSV}}, trimiteți-l prin e-mail și introduceți ofertele. |
| Trimiterea pachetelor de oferte dintr-o fereastră Studio | Trimiteți din TakeoffCraft în browser. |
| Recalcularea prețurilor zonei de ofertă a unei variante cu o ofertă aleasă | Variantele și subtotalurile zonelor de ofertă folosesc prețurile proprii; ajustați varianta manual. |
| Reamintiri automate înainte de expirarea datei asigurării sau a licenței unui subantreprenor | Data este semnalată pe pagina Subantreprenori odată ce a trecut sau urmează în 30 de zile; verificați-o când invitați. |

## Panouri

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Mutarea tabelului {{ui:Quantities}} | Se mută doar panourile {{ui:Sheets}} și {{ui:Items}}. Consultați [Aranjarea panourilor](common:arrange-panels). |

## Tabele de calcul

Registrul XLSX a fost verificat în LibreOffice Calc, care a recalculat fiecare total până la același bănuț față de TakeoffCraft. Nu a fost deschis încă în Excel. Dacă un program de tabele arată ceva neașteptat, exportul CSV conține același deviz ca valori simple.
