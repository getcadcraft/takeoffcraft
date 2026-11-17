---
title: Aducerea cantităților dintr-un fișier IFC 4.3
summary: Deschideți un fișier IFC 4.3 al unui drum, al unei căi ferate, al unui pod sau al lucrărilor de terasamente și obțineți o numărare pe clasă, cu lungimile, ariile și volumele declarate de fișier, ca cantități tipizate.
keywords: ifc, ifc4x3, ifc 4.3, drum, cale ferată, pod, îmbrăcăminte, bordură, strat, terasamente, reazem, infrastructură, cantități, bim, civil, cantități tipizate
from: 6b08c2c4
---

Un fișier IFC 4.3 poate conține drumuri, căi ferate, poduri, lucrări maritime și părțile din care sunt făcute: îmbrăcăminți, straturi, bordure, șine, terasamente, reazeme, piloți și altele. TakeoffCraft le citește și le transformă în cantități tipizate pe care le puteți prețui.

## Deschiderea fișierului

1. Alegeți {{ui:Open plans}} din grupul {{ui:File}} sau apăsați {{key:Mod+O}}.
2. Selectați fișierul IFC (îl puteți selecta împreună cu PDF-urile) sau trageți-l peste TakeoffCraft.

Se creează câte o cantitate tipizată pentru fiecare clasă și tip predefinit, de exemplu „Pavement (flexible): count”, iar, când fișierul le declară, și „length” în m, „area” în m² și „volume” în m³. Nota de la fiecare articol spune câte elemente au fost numărate și câte nu au declarat nicio cantitate. Deschiderea unui fișier mai nou cu același nume actualizează acele cantități, în loc să adauge altele.

## Ce nu face

- Citește seturile de cantități (IfcElementQuantity) pe care fișierul le conține. Nu măsoară formele 3D, așa că un element fără set de cantități este numărat, dar nu adaugă lungime, arie sau volum.
- Sunt citite doar clasele de infrastructură din IFC 4.3. Un fișier de clădire (pereți, uși, planșee) nu este transformat aici în cantități; un fișier care nu este IFC 4.3 o spune și nu aduce nimic.
- Unitățile sunt cele ale fișierului, convertite în metri.
