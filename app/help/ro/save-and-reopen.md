---
title: Salvarea și redeschiderea unei antemăsurători
summary: Salvați antemăsurătoarea ca proiect .takeoff.json, redeschideți-o cu aceleași PDF-uri și aflați ce se întâmplă când un PDF lipsește sau s-a modificat.
keywords: antemăsurătoare în PDF, încorporare, atașament, salvare, deschidere, redeschidere, proiect, takeoff.json, reluare, continuare, PDF revizuit, PDF modificat, PDF lipsă, copie de rezervă, salvare automată, recuperare, prăbușire
from: bd5080a6
---

O antemăsurătoare se salvează ca un fișier mic de proiect, `(name).takeoff.json`. Conține articolele, ansamblurile, prețurile, scara fiecărei foi și fiecare marcaj. **Nu** conține PDF-urile; acestea sunt găsite din nou după conținutul lor.

## Salvare

1. Alegeți {{ui:Salvare antemăsurătoare}} din grupul {{ui:Fișier}}, sau apăsați {{key:Mod+S}}.
   Browserul descarcă `(name).takeoff.json`. Bara de stare afișează „Fișierul (name).takeoff.json salvat. Se redeschide peste aceleași PDF-uri (sunt potrivite după conținut).”
2. Mutați fișierul lângă PDF-urile lucrării, astfel încât cele două să rămână împreună.

Fiecare salvare descarcă un fișier nou. Browserul poate denumi al doilea `(name) (1).takeoff.json`; păstrați cel mai nou.

Numele provine de la primul PDF deschis în această antemăsurătoare.

:::note
Salvarea antemăsurătorii este încă singurul mod de a păstra o antemăsurătoare ca fișier. În timpul lucrului, TakeoffCraft păstrează și o copie de recuperare în acest browser (vezi mai jos), iar salvarea în cloud nu este încă disponibilă. Dacă încercați să închideți fila cu modificări nesalvate, browserul întreabă dacă doriți să plecați.
:::

## Păstrarea antemăsurătorii în interiorul PDF-ului

{{ui:Export}} › {{ui:PDF cu antemăsurătoarea în interior}} descarcă o copie a fiecărui PDF deschis, denumită precum `Plans (with takeoff).pdf`, care conține întreaga antemăsurătoare ca atașament: articole, marcaje, scări, zone de ofertă, tot ce conține `.takeoff.json`. Paginile sale nu sunt modificate, deci arată și se tipăresc ca originalul, iar alte cititoare PDF afișează antemăsurătoarea printre atașamente.

Deschideți acest PDF în TakeoffCraft (oricum deschideți PDF-urile) și aplicația întreabă **Acest PDF are o antemăsurătoare în interior**: alegeți {{ui:Deschidere antemăsurătoare}} pentru a o recupera sau {{ui:Doar PDF-ul}} pentru a deschide doar desenul. Copia ține locul PDF-ului din care a fost făcută, deci un `.takeoff.json` salvat din oricare dintre ele se deschide pe ambele.

Dacă există mai multe PDF-uri, fiecare copie conține întreaga antemăsurătoare; deschideți-le împreună. Salvarea din nou dintr-o copie înlocuiește antemăsurătoarea din ea, nu adaugă una a doua. Fișierul `.takeoff.json` rămâne fișierul de păstrat: este mic și este cel scris de salvarea automată și de aplicația desktop.

## Dacă fila sau browserul se oprește

La câteva secunde după fiecare modificare, TakeoffCraft păstrează o copie a antemăsurătorii în spațiul de stocare al acestui browser, împreună cu PDF-urile sale, dacă însumează 64 MB sau mai puțin. Nimic nu se încarcă. Când salvați antemăsurătoarea, începeți una nouă sau deschideți alt proiect, copia se șterge.

Dacă fila se blochează, browserul sau calculatorul se oprește, ori plecați cu modificări nesalvate, la următoarea deschidere a TakeoffCraft apare întrebarea **Recuperarea lucrării?** și antemăsurătoarea este listată după nume. Alegeți **Recuperare** pentru a o recupera: articolele, marcajele și scările revin, iar PDF-urile se deschid din nou dacă au fost păstrate. Bara de stare afișează „(name) recuperat. Nu este încă salvat într-un fișier: Salvare antemăsurătoare îl păstrează.” Când PDF-urile au fost prea mari pentru a fi păstrate, deschideți-le din nou; marcajele apar pe foile lor. Mai multe: [Recuperarea lucrării](common:recover).

## Redeschidere

1. Deschideți TakeoffCraft.
2. Trageți fișierul `.takeoff.json` și PDF-urile sale împreună pe pagină. Sau alegeți {{ui:Deschidere planuri}} pentru PDF-uri și {{ui:Deschidere antemăsurătoare}} pentru proiect, în orice ordine.
   Bara de stare afișează „(name) deschis: 12 articole, 340 marcaje.” Fiecare foaie își recapătă scara, iar marcajele apar pe foi.

Ordinea PDF-urilor nu contează, la fel nu contează nici numele fișierelor sau dosarele lor. TakeoffCraft recunoaște fiecare PDF după o amprentă a conținutului său.

Dacă deschideți un proiect cât timp antemăsurătoarea curentă are modificări nesalvate, TakeoffCraft întreabă mai întâi: **Anulare**, **Renunțare la modificări** sau **Salvare antemăsurătoare mai întâi**. Deschiderea unui proiect înlocuiește articolele și marcajele curente; PDF-urile deja deschise rămân deschise.

## Când lipsește un PDF

Dacă deschideți proiectul fără toate PDF-urile sale, bara de stare adaugă „Deschideți PDF-urile sale pentru a vedea marcajele (listate sub Foi).” Sub lista foilor, o notă spune:

„Această antemăsurătoare acoperă și PDF-uri care nu sunt deschise. Cantitățile lor sunt numărate; deschideți-le pentru a vedea și a edita marcajele:”

urmat de numele fișierelor și dimensiunile lor. Marcajele lor se includ în continuare în toate totalurile și exporturile, cu scările la care au fost măsurate. Deschideți acele PDF-uri pentru a vedea și edita marcajele.

## Când un PDF s-a modificat

Un PDF revizuit sau doar salvat din nou de alt program are alt conținut, deci este un **fișier diferit** pentru TakeoffCraft, chiar dacă are același nume. În nota de sub lista foilor, un astfel de fișier apare cu mesajul „un fișier cu acest nume este deschis, dar conținutul său diferă”.

- Marcajele rămân atașate versiunii vechi. Ele continuă să fie numărate, la pozițiile și scările vechi.
- PDF-ul revizuit se deschide ca foi noi, fără scară și fără marcaje.

Pentru a muta antemăsurătoarea pe revizie, deschideți ambele PDF-uri și folosiți {{ui:Comparare}} pe foaia nouă: [Compararea unei foi revizuite și mutarea antemăsurătorii](topic:compare-revisions).

## Un fișier deteriorat sau străin

TakeoffCraft verifică fiecare fișier de proiect înainte de a-l folosi. Mesaje care pot apărea:

- „(file) nu este un proiect TakeoffCraft (nu este JSON valid).”
- „Acesta nu este un fișier de proiect TakeoffCraft.”
- „Acest proiect a fost salvat de o versiune mai nouă de TakeoffCraft. Deschideți-l acolo.”
- „3 marcaje au fost deteriorate și lăsate deoparte.” (restul se deschide)

## Istoricul anulărilor

Istoricul anulărilor începe de la zero la deschiderea unui proiect. Salvarea nu îl șterge.
