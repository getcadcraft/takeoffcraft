---
title: Numărare dintr-un desen
summary: Numărați blocuri, obiecte de pe un strat sau text direct dintr-un DWG sau DXF: exact, cu blocuri imbricate, variante de blocuri dinamice și matrice de blocuri tratate, într-un singur pas de anulare.
keywords: numărare din desen, numărare CAD, numărare bloc, numărare blocuri, inserare, nume de bloc, blocuri imbricate, bloc dinamic, variantă, MINSERT, matrice, strat, tip de entitate, cercuri, text, atribut, etichetă, straturi ascunse, numărare exactă, cum se face, uși, corpuri
from: 5060e24e
---

{{ui:Numărare CAD}} din bara foii (comanda **Numărare din desen** în celelalte stiluri de meniu) numără ceea ce spune un DWG sau DXF că există. Acolo unde {{ui:Numărare automată}} caută o imagine a unui simbol și poate rata unul sau găsi unul fals, aceasta numără obiectele: fiecare inserare a unui bloc numit `DOOR-36` este o ușă. Deschideți întâi desenul: [Deschiderea unui desen DWG sau DXF](topic:open-a-drawing).

## Numărarea unui bloc

1. Deschideți o foaie a desenului. {{ui:Numărare CAD}} se află pe bara foii.
2. Alegeți-l. Fereastra listează blocurile, cu câte există din fiecare. Căutați după nume, apoi alegeți unul.
3. Verificați rândul de sub listă: „22 găsite, 22 de adăugat.”
4. Sub {{ui:Adăugare la}}, alegeți un articol de numărare sau lăsați {{ui:Un articol de numărare nou}} și dați-i un nume.
5. Alegeți butonul de adăugare, care indică numărul: {{ui:Adăugare 22 de marcaje}}. Marcajele apar în punctele de inserare ale blocului, iar cantitatea articolului este numărul.

Este un singur pas de anulare: {{key:Mod+Z}} ia marcajele (și un articol nou) împreună. Estimarea, foaia de calcul și PDF-ul marcat tratează articolul ca pe orice alt articol de numărare.

### Ce se numără

- **Fiecare inserare a numelui blocului**, oricare ar fi scara și unghiul ei, în spațiul model sau în spațiul hârtie. Numele blocurilor nu țin cont de majuscule.
- **Matrice de blocuri** (MINSERT): fiecare copie din matrice este una.
- **Blocuri imbricate.** Un bloc plasat în interiorul altui bloc se numără la fiecare adâncime. Lista spune „6 în interiorul altor blocuri”; debifați {{ui:Numără și blocurile din interiorul altor blocuri}} ca să numărați doar inserările plasate direct în desen.
- **Blocuri dinamice.** Un bloc dinamic se numără sub propriul nume, nu sub copiile anonime (`*U12`) pe care le păstrează fișierul. Stările sale sunt listate separat („Single 12, Double 4”): alegeți o stare ca să numărați doar pe acelea, sau {{ui:Toate variantele}}. Când un fișier nu spune ce stare arată o copie, acelea sunt listate ca „(stare necunoscută)”.
- **Filtrul de strat.** Un bloc pe mai multe straturi: alegeți unul sub {{ui:Pe stratul}}.

### Ce nu se numără

- **Straturi ascunse.** Un obiect de pe un strat care este oprit sau înghețat în fișier (sau pe care l-ați ascuns în {{ui:Straturi}}) este lăsat deoparte, iar rândul spune câte: „3 de pe straturi ascunse lăsate deoparte”. Bifați {{ui:Numără și acestea}} pentru a le include.
- **Desenele legate care nu sunt deschise** nu se numără; fereastra o spune.
- **Obiectele suprapuse exact peste un alt obiect de același fel** sunt numărate ca două (sunt două obiecte), iar fereastra o spune: de obicei este o greșeală de desenare care merită o privire.

## Ce arată această foaie, sau întregul desen

- **Ce arată această foaie** numără obiectele pe care le arată foaia: pe un layout, obiectele modelului din ferestrele sale de vizualizare (un strat înghețat într-o fereastră nu se numără acolo), plus cele ale layout-ului însuși.
- **Întregul desen, fiecare obiect o singură dată** numără spațiul model o dată, cu marcajele pe foaia Model, și nu numără ce mai multe layout-uri arată din nou.

Numărarea a ceea ce arată un layout și numărarea a ceea ce arată Model dau același număr pentru aceleași obiecte; nu adunați pe amândouă într-un singur articol.

## Numărarea din nou

Numărarea din nou a aceluiași bloc cu același articol adaugă doar ce este nou: „22 deja numărate.” Fiecare marcaj reprezintă un obiect.

## Pe strat și tip

La {{ui:Pe strat și tip}} alegeți un strat și un tip de obiect (cercuri, polilinii, hașuri…): „toate cercurile pe E-LITE”. Bifați {{ui:Numără și obiectele din interiorul blocurilor}} ca să includeți și cele din definițiile de blocuri, la fiecare loc unde blocul este inserat.

## Pe text

La {{ui:Pe text}} scrieți textul, cum ar fi `A3`, și spuneți dacă trebuie să fie exact acela, dacă îl conține sau dacă îl are ca întreg cuvânt. Obiectele text, textul liniilor de indicație multiple și **valorile atributelor** blocurilor se numără toate (un atribut de etichetă `ITEM = A3` este găsit); alegeți {{ui:În atribut}} ca să numărați un singur atribut. Cele mai frecvente texte sunt listate ca să faceți clic pe ele.

## Când să folosiți în schimb Numărare automată

Folosiți {{ui:Numărare automată}} pentru PDF-uri și pentru simbolurile dintr-un desen care nu sunt blocuri (desenate libere sau descompuse). Desenate ca blocuri, numărați-le aici.
