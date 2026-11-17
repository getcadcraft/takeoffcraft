---
title: Carbon încorporat și un tabel de prețuri 5D
summary: Carbon adună carbonul încorporat al extragerii din cantitatea fiecărui articol și dintr-un tabel deschis de factori, iar trimite ratele extragerii către BimCraft ca tabel de prețuri pentru costuri 5D.
keywords: carbon, carbon încorporat, kgCO2e, co2, factori, a1-a3, transport, pierderi, 5d, tabel de prețuri, cost, bimcraft, epd
from: f4bff3b8
---

{{ui:Carbon}} din bara de instrumente adună carbonul încorporat din ce ați măsurat și transformă ratele dvs. într-un tabel de prețuri pe care îl poate folosi modelul clădirii. Este o estimare, nu o evaluare.

## Carbon încorporat

Cantitatea fiecărui articol, cu pierderile sale, se înmulțește cu un rând din tabelul de factori. Un rând se potrivește după cuvintele numelui articolului („concrete slab” găsește un rând cu cuvântul cheie concrete). Tabelul este același tabel deschis pe care îl folosește BimCraft, deci un fișier încărcat aici funcționează și acolo. **Rândurile care vin cu programul sunt valori de start: generice, nevalidate și nu provin din nicio bază de date.** Caseta de dialog o spune lângă cifre; înlocuiți-le cu propria sursă înainte de a vă baza pe un număr.

1. Alegeți {{ui:Carbon}}. Elementele numărate sunt listate cu kilogramele lor de CO2e; totalul este deasupra.
2. Bifați {{ui:A4 transport}} sau {{ui:A5 deșeuri de șantier}} ca să numărați și aceste etape, pentru rândurile care dau o cifră pentru ele. Etapa de produs este întotdeauna numărată.
3. Pentru a folosi alt rând pentru un articol, sau niciunul, folosiți lista de pe rândul lui.
4. {{ui:Factori dintr-un fișier…}} încarcă un tabel de factori (JSON sau CSV) făcut din propria sursă; rândurile lui înlocuiesc rândurile de start cu același id. {{ui:Factori (JSON)}} salvează pe ale dvs.

Un factor este pe metru, metru pătrat, metru cub, articol sau kilogram. O linie măsurată în picioare sau picioare pătrate se convertește. Un factor pe kilogram cere un volum (cubic yards sau metri) și densitatea rândului. Un articol a cărui cantitate necesită o mărime pe care nu o măsoară apare sub {{ui:Lăsat deoparte}}, cu motivul, fără să fie ghicit. Totalul curent din bara de stare arată aceeași cifră.

Rândurile proprii de factori, alegerile și etapele numărate sunt salvate în fișierul extragerii.

## Un tabel de prețuri pentru costuri 5D

{{ui:Prețuri 5D (JSON)}} și {{ui:Prețuri 5D (CSV)}} salvează ratele extragerii ca tabel de prețuri: câte un rând pentru fiecare articol prețuit, cu rata lui de material și de manoperă pe unitate și pierderea. Încărcați-l în panoul de costuri al BimCraft (Carbon încorporat și costuri 5D) ca să prețuiți sarcinile modelului clădirii cu aceleași rate care au făcut oferta. Articolele măsurate într-o unitate pe care tabelul nu o are, și articolele fără rată, sunt lăsate afară.

## Cu asistentul

Dacă permiteți asistenți în {{ui:Setări}}, aceștia pot citi carbonul (carbon_check). Încărcarea factorilor rămâne în sarcina utilizatorului.

## De reținut

Nimic nu este trimis nicăieri. Cifrele valorează atât cât valorează factorii încărcați.
