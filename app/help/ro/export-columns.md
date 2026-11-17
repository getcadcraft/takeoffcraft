---
title: Coloanele exportului
summary: Fiecare foaie și coloană a exportului XLSX și a exportului CSV, cu formulele pe care le conține foaia Deviz.
keywords: export, coloane, xlsx, csv, foaie de calcul, foaie deviz, pe foaie, marcaje, scări, formule, câmpuri
from: fed07851
---

## Deviz (foaie XLSX și CSV)

Un rând pentru fiecare articol, urmat de un rând pentru fiecare componentă a ansamblului său (indentată). Apoi un rând gol și totalul lucrării.

| Coloană | Conținut | În XLSX |
|---|---|---|
| A Articol | Numele articolului (îngroșat) sau al componentei (indentat) | Text |
| B Tip | Liniar, Arie, Numărare sau Componentă | Text |
| C UM | LF, m, SF, SY, m², EA sau unitatea componentei | Text |
| D Cantitate | Total măsurat sau rezultatul formulei | Număr |
| E Pierderi % | Pierderile | Procent (0.10 = 10%) |
| F Cant. cu pierderi | Cantitate × (1 + pierderi) | Formula `D*(1+E)` |
| G Material pe unitate | Tariful de material | Număr |
| H Manoperă pe unitate | Tariful de manoperă | Număr |
| I Material | Materialul extins | Formula `ROUND(F*G,2)` |
| J Manoperă | Manopera extinsă | Formula `ROUND(F*H,2)` |
| K Total | Material + manoperă | Formula `I+J` |
| L Note | Formula folosită, eroarea de formulă, marcajele pe foi fără scară, aria peretelui, perimetrul | Text |

Rândul totalului lucrării: `SUM` al coloanelor I, J și K peste toate rândurile de mai sus, iar în Note "Incomplet: vezi notele de mai sus" când ceva a fost lăsat afară.

Un rând cu eroare de formulă nu are cantitate sau sume; nota lui indică eroarea. Rândul de antet este înghețat.

În CSV, aceleași coloane conțin valori simple, Pierderi % este un număr de procente (10 pentru 10%), iar banii sunt în dolari cu două zecimale. Textul pe care un program de calcul tabelar l-ar putea lua drept formulă (care începe cu `=`, `+`, `-` sau `@`) primește un `'` în față, ca să rămână text.

## Pe foaie (doar XLSX)

| Coloană | Conținut |
|---|---|
| Foaie | Numele foii (cu numele PDF-ului când nu este deschis) |
| Articol | Numele articolului |
| Cantitate | Cantitatea acelui articol pe foaia respectivă, în unitatea sa |
| UM | Unitatea articolului |
| Marcaje | Numărul de marcaje |

## Marcaje (doar XLSX)

Un rând pentru fiecare marcaj.

| Coloană | Conținut |
|---|---|
| Foaie | Numele foii |
| Articol | Numele articolului |
| Tip | Liniar, Arie sau Numărare |
| Cantitate | Lungime, arie netă sau 1 |
| UM | LF sau m; SF, SY sau m²; EA |
| Detaliu | Liniar: lungimile segmentelor, segmentele scăzute marcate "(deducere)", și "deduceri (lungime) din (lungime) desenate". Arie: suprafețele brute și cele decupate când există decupaje, și perimetrul. "Foaia nu are scară" pentru marcajele fără scară. |
| Zona de ofertă | Doar când antemăsurătoarea are zone de ofertă: aria marcajului sau "Fără zonă de ofertă" |

## După zona de ofertă (doar XLSX, când antemăsurătoarea are zone de ofertă)

| Coloană | Conținut |
|---|---|
| Zona de ofertă | Numele zonei sau "Fără zonă de ofertă" |
| Articol | Articolul sau o componentă indentată sub el |
| UM | Unitatea articolului sau a componentei |
| Cantitate | Măsurată în zona respectivă (componente: formula pe totalurile zonei) |
| Cant. cu pierderi | Cantitate × (1 + pierderi) |
| Material, Manoperă, Total | Extinse la nivel de ban, ca în Deviz |
| Note | Formula, erorile și marcajele fără scară, ca în Deviz |

Fiecare zonă se încheie cu un rând "subtotal (nume)" ale cărui costuri sunt formule `SUM` peste rândurile sale; ultimul rând, **Toate zonele de ofertă**, adună subtotalurile. Foaia **Marcaje** are atunci o a șaptea coloană, **Zona de ofertă**.

## Scări (doar XLSX)

Un rând pentru fiecare foaie care are o scară sau marcaje.

| Coloană | Conținut |
|---|---|
| Foaie | Numele foii |
| Scară | Numele presetării, scara calibrată sau "Fără scară" |
| Cum | „Presetare” sau „Calibrată pe distanța introdusă” |
| Picioare pe unitatea PDF | Factorul exact de scară folosit de TakeoffCraft |

## Nume de fișiere

- `(name).xlsx` și `(name).csv`, unde numele provine de la primul PDF deschis în antemăsurătoare.
- CSV-ul este UTF-8 cu marcaj de ordine a octeților (BOM) și sfârșituri de linie Windows, pe care le citesc programele de calcul tabelar pe toate platformele.
