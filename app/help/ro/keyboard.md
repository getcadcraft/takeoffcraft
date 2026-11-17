---
title: Tastatură și mouse
summary: Fiecare acțiune cu tastele, mouse-ul, touchpadul și atingerea din TakeoffCraft, grupată, cu diferențele dintre platforme.
keywords: taste, scurtături, taste rapide, tastatură, mouse, touchpad, atingere, deplasare, zoom, rotiță, clic dreapta, dublu clic, spațiu, shift, copiere, lipire, decupare, duplicare, selectare totală
from: 6f2c441d
---

Tastele cu litere funcționează când indicatorul se află oriunde pe pagină și nu scrieți într-un câmp. Cât timp este deschisă o casetă de dialog, tastele ei proprii se aplică. Literele funcționează cu sau fără {{key:Shift}}.

## Instrumente

| Tastă | Instrument |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:L}} | {{ui:Linear}} |
| {{key:A}} | {{ui:Area}} |
| {{key:O}} | {{ui:Circle}} |
| {{key:B}} | {{ui:Room}} (umple o încăpere dintr-un clic) |
| {{key:R}} | {{ui:Arc}} activat sau dezactivat (în Liniar, Arie și Decupaj) |
| {{key:E}} | {{ui:Deduct}} activat sau dezactivat: următoarele segmente ale unui tronson sunt desenate, dar nu sunt numărate |
| O cifră, `@` sau `#` în timpul desenării | Deschide caseta {{ui:Type}}: tastați o lungime sau coordonate, {{key:Enter}} plasează punctul ([Măsurarea tronsoanelor liniare](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Cut-out}} (selectați mai întâi o arie) |
| {{key:C}} | {{ui:Count}} |
| {{key:S}} | {{ui:Auto count}} |
| {{key:K}} | {{ui:Calibrate}} |
| {{key:D}} | {{ui:Check}} scara |

## În timpul desenării

| Tastă sau acțiune | Ce face |
|---|---|
| Clic | Plasează un punct (un punct, cu {{ui:Count}}). |
| {{key:P}} | Traseu: alegeți întregul traseu conectat al unei linii PDF sau conturul din jurul unui clic ([Alegerea liniilor PDF](topic:pick-the-lines)). |
| {{key:F3}} | Agățarea de liniile desenului activată sau dezactivată ([Agățarea de liniile desenului](topic:snap-to-the-drawing)). |
| {{key:Shift}} ținut la clic | Agață segmentul la 0°, 45°, 90° sau 135° față de ultimul punct. Nu pentru punctele de arc sau cercuri. |
| Dublu clic | Încheie un tronson sau închide o arie ori un decupaj. |
| {{key:Enter}} | Încheie un tronson sau închide o arie ori un decupaj. |
| Clic dreapta (fără deplasare) | Încheie un tronson sau închide o arie ori un decupaj. |
| Clic pe primul punct | Închide o arie sau un decupaj (de la al treilea punct). |
| {{key:Backspace}} sau {{key:Delete}} | Elimină ultimul punct (mai întâi punctul de arc în așteptare). |
| {{key:Esc}} | Renunță la punctul de arc în așteptare; apoi anulează marcajul neterminat; apoi revine la {{ui:Select}}. |

## Selectare și editare

| Tastă sau acțiune | Ce face |
|---|---|
| Clic pe un marcaj (instrumentul {{ui:Select}}) | Îl selectează și face articolul său curent. |
| {{key:Shift}} + clic pe un marcaj | Îl adaugă la selecție sau îl scoate din ea. |
| {{key:Mod+A}} | Selectează fiecare marcaj de pe foaia deschisă. |
| Trageți un mâner de colț | Mută acel punct ({{key:Shift}} agață la 45°). Funcționează când este selectat un singur marcaj. |
| {{key:Delete}} sau {{key:Backspace}} | Șterge marcajele selectate (când nu desenați). |
| {{key:Esc}} | Nu selectează nimic: șterge selecția și linia de verificare. |
| {{key:Mod+Z}} | Anulare. |
| {{key:Mod+Y}} sau {{key:Mod+Shift+Z}} | Refacere. |

## Copiere și lipire

| Tastă | Ce face |
|---|---|
| {{key:Mod+C}} | Copiază marcajele selectate, împreună cu articolele lor. |
| {{key:Mod+X}} | Decupare: copiază marcajele selectate, apoi le șterge. |
| {{key:Mod+V}} | Lipire: copia urmează indicatorul; faceți clic unde trebuie să fie. |
| {{key:Mod+Shift+V}} | Lipire în aceeași poziție: același loc de pe foaia deschisă. |
| {{key:Mod+D}} | Duplicare a marcajelor selectate: copia urmează indicatorul; faceți clic unde trebuie să fie. |
| {{key:Esc}} | Nu lăsați nimic: anulează o lipire sau o duplicare aflată pe indicator. |

Literele singure aleg în continuare instrumente ({{key:C}} este {{ui:Count}}, {{key:D}} este {{ui:Check}}, {{key:X}} este {{ui:Cut-out}}, {{key:V}} este {{ui:Select}}, {{key:A}} este {{ui:Area}}); doar {{key:Mod}} împreună cu acestea copiază și lipește. Într-un câmp de text, aceste taste copiază și lipesc textul ca de obicei. Vezi [Copierea, lipirea și duplicarea marcajelor](topic:copy-paste).

:::warning
{{key:Backspace}} șterge marcajul selectat când nu desenați. Dacă se întâmplă din greșeală, {{key:Mod+Z}} îl readuce.
:::

## Fișiere

| Tastă | Ce face |
|---|---|
| {{key:Mod+O}} | {{ui:Open plans}} |
| {{key:Mod+S}} | {{ui:Save takeoff}} |

Aceste două funcționează chiar și când scrieți într-un câmp.

## Vizualizare și foi

| Tastă sau acțiune | Ce face |
|---|---|
| Rotița mouse-ului | Mărește și micșorează la indicator. |
| Trageți (butonul stâng, din mijloc sau din dreapta) | Deplasare. În {{ui:Auto count}}, o tragere cu butonul stâng desenează în schimb caseta de căutare. |
| {{key:Space}} ținut + tragere | Deplasare, în orice instrument. |
| {{key:F}} | {{ui:Fit page}} |
| {{key:W}} | {{ui:Fit width}} |
| {{key:Plus}} sau {{key:=}} | Mărire în mijlocul vizualizării. |
| {{key:Minus}} | Micșorare în mijlocul vizualizării. |
| {{key:PageDown}} / {{key:PageUp}} | Foaia următoare sau anterioară din lista foilor. |
| {{key:Ctrl+Shift+F}} | Trece prin modurile de ecran complet (Ctrl pe toate platformele, și pe Mac). |
| {{key:F1}} | Deschide sau închide acest ajutor, un panou lateral. |
| {{key:3}} | Vizualizarea 3D de verificare a foii, activată sau dezactivată. |

## Vizualizarea 3D

| Tastă sau acțiune | Ce face |
|---|---|
| Trageți, sau trageți cu butonul din mijloc | Orbitare. |
| {{key:Shift}} + tragere, sau tragere cu butonul din dreapta | Deplasare. |
| Rotița mouse-ului | Mărire la indicator. Pe touchpad, un gest cu două degete orbitează, iar un ciupit mărește. |
| Clic | Selectează marcajul de sub indicator ({{key:Shift}} + clic adaugă sau scoate). |
| {{key:F}} sau {{key:W}} | Zoom extinderi. |
| {{key:3}} | Revine la foaia plană. |

Vezi [Verificarea antemăsurătorii în 3D](topic:check-in-3d).

## Numărare automată

| Tastă sau acțiune | Ce face |
|---|---|
| Trageți o casetă | Încadrează simbolul de căutat (pornește căutarea). |
| Clic pe o casetă de potrivire | O respinge sau o restabilește. |
| {{key:Esc}} | Anulează o căutare în desfășurare sau renunță la revizuire. |

## Ajutor

| Tastă | Ce face |
|---|---|
| {{key:F1}} | Deschide sau închide panoul de ajutor (la fel ca butonul {{ui:Help}} din bara aplicației). Funcționează în orice instrument, chiar și când scrieți într-un câmp. |
| {{key:Esc}} | Închide panoul de ajutor. În caseta lui de căutare, primul {{key:Esc}} șterge căutarea. Cât timp panoul este deschis, un {{key:Esc}} apăsat după un clic pe foaie închide mai întâi panoul; apăsați din nou pentru a anula în TakeoffCraft. |

:::mac
Pe multe tastaturi Mac, rândul de sus controlează luminozitatea și sunetul. Apăsați fn împreună cu F1 sau activați „Use F1, F2, etc. keys as standard function keys” în Setări sistem, la Tastatură.
:::

## Dialoguri și câmpuri

| Tastă | Ce face |
|---|---|
| {{key:Enter}} | Într-un câmp: aplică valoarea. În caseta de calibrare: {{ui:Set the scale}}. |
| {{key:Esc}} | Închide o casetă de dialog (ca {{ui:Cancel}}); închide formularul {{ui:New item}}. |
| {{key:Tab}} | Trece la câmpul următor. |

## Note pe platforme

:::mac
- {{key:Mod}} este tasta Command: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Ecranul complet face excepție: {{key:Ctrl+Shift+F}}.
- Clicul dreapta este un clic cu două degete pe touchpad, după ce clicul secundar este activat în Setări sistem, la Trackpad. TakeoffCraft citește doar butonul secundar; un clic cu {{key:Ctrl}} poate fi socotit clic simplu și poate adăuga un punct.
- Derularea cu două degete pe touchpad mărește foaia (nu o derulează). Pentru deplasare, apăsați și trageți, sau țineți {{key:Space}} și trageți.
- Page Up și Page Down sunt fn cu săgețile sus și jos, la tastaturile care nu le au.
- {{key:Backspace}} este tasta etichetată delete.
:::

:::windows
- {{key:Mod}} este Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Pe touchpadul unui laptop, derularea cu două degete mărește foaia. Pentru deplasare, apăsați și trageți.
:::

:::linux
- {{key:Mod}} este Ctrl. Unele desktopuri au scurtături proprii cu Ctrl+Alt sau Super; TakeoffCraft nu folosește niciuna dintre ele.
- Pe touchpad, derularea cu două degete mărește foaia. Pentru deplasare, apăsați și trageți.
:::

:::touch
TakeoffCraft citește atingerea ca pe un singur indicator:

- Atingerea plasează un punct, selectează un marcaj sau adaugă un punct de numărare.
- Tragerea cu un deget deplasează foaia (în {{ui:Auto count}} desenează caseta de căutare).
- Mărirea prin ciupire nu este încă acceptată. Folosiți {{ui:Fit page}} și {{ui:Fit width}}, sau {{key:Plus}} și {{key:Minus}} de la tastatură.
- Pentru a închide o arie, atingeți primul ei punct. Pentru a încheia un tronson, atingeți de două ori acolo unde browserul transformă o dublă atingere într-un dublu clic, sau apăsați {{key:Enter}} de la tastatură.
- Nu există afișare a lungimii în timp real până la atingere, pentru că nu există indicator la plutire.

Tastatura și mouse-ul sau touchpadul sunt, deocamdată, modul mai bun de a face antemăsurători.
:::

## Taste pe care le păstrează browserul

Browserele păstrează unele scurtături pentru ele, iar o pagină nu le poate folosi: închiderea filei ({{key:Mod+W}}), filă sau fereastră nouă ({{key:Mod+T}}, {{key:Mod+N}}) și zoom-ul browserului ({{key:Mod+Plus}}, {{key:Mod+Minus}}). De aceea TakeoffCraft mărește foaia cu rotița și cu tastele simple {{key:Plus}} și {{key:Minus}}. Dacă apăsați din greșeală {{key:Mod+Plus}}, întreaga pagină crește; {{key:Mod+0}} o readuce. Vezi [Taste, mouse și touchpad](common:keys).

## Unde se află Mutarea

Nu există comanda Mutare: selectați un punct de numărare și trageți-l, sau selectați o arie ori o linie și trageți mânerele de colț.
