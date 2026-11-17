---
title: Exportarea devizului și a unui PDF marcat
summary: Descărcați devizul ca registru XLSX cu formule active sau ca CSV, precum și copii ale PDF-urilor cu antemăsurătoarea desenată pe ele.
keywords: ofertă, sumar de ofertă, export, xlsx, foaie de calcul, registru de lucru, csv, pdf marcat, tipărire antemăsurătoare, raport, distribuire, trimitere, legendă
from: 334f89c7
---

Exporturile sunt descărcări. Sunt făcute pe calculator din antemăsurătoare și din PDF-urile deschise; nimic nu este trimis nicăieri.

## Devizul ca foaie de calcul (XLSX)

1. Deschideți meniul {{ui:Export}} din bara de instrumente și alegeți {{ui:XLSX}}.
   Browserul descarcă `(name).xlsx`. Bara de stare afișează "Exportat (name).xlsx (deviz cu formule active, pe foi, marcaje, scări)." și adaugă un avertisment când devizul este incomplet.
2. Deschideți fișierul în programul de calcul tabelar.

Registrul de lucru are patru foi de calcul și rapoartele de mai jos, când se aplică:

| Foaie | Ce conține |
|---|---|
| Deviz | Un rând pentru fiecare articol și componentă: cantitate, pierderi, cantitate cu pierderi, tarife, material, manoperă, total, note. Totalul lucrării la final. |
| Pe foaie | Cantitatea fiecărui articol pe fiecare foaie, cu numărul de marcaje. |
| Marcaje | Fiecare marcaj: foaie, articol, tip, cantitate și detalii (lungimile segmentelor, suprafețele brute și decupate, perimetrul). |
| Scări | Fiecare foaie care are o scară sau marcaje: scara sa, cum a fost stabilită (presetare sau calibrată pe ce distanță) și picioare pe unitatea PDF. |
| Sumar antemăsurătoare | Cantitatea fiecărui articol, numărul CSI, marcajele și foile, fără prețuri. |
| Listă de materiale | Fiecare piesă a ansamblurilor, adunată pe toată antemăsurătoarea (aceeași piesă folosită de mai multe articole este o singură linie), cu pierderi și costul materialului, și articolele care o folosesc. |
| Cerere de ofertă | Lista de materiale de trimis unui furnizor: cantități cu pierderi, o coloană goală pentru prețul unitar, iar extinderile și totalul se completează pe măsură ce prețurile sunt introduse. |
| Pe diviziune | Material, manoperă și total pe diviziuni CSI MasterFormat, când articolele au un {{ui:Număr CSI}}. |

Cu un [sumar de ofertă](topic:bid-summary), foaia Deviz se încheie și cu adaosurile sale (manopera, taxa pe vânzări, cheltuielile generale, profitul, garanția și oferta), ca formule active.

Foaia Deviz păstrează **formule active**: cantitatea cu pierderi, sumele rotunjite pentru material și manoperă, totalul fiecărui rând și totalul lucrării. Programele de calcul tabelar le recalculează, deci puteți schimba un tarif sau pierderile în foaia de calcul, iar totalurile urmează. Cifrele calculate de TakeoffCraft sunt stocate și în celule și se potrivesc până la ban.

Coloana de note listează formula fiecărei componente, erorile de formulă, marcajele pe foi fără scară, aria peretelui și perimetrul. Când ceva lipsește, rândul totalului lucrării spune "Incomplet: vezi notele de mai sus".

Registrul a fost verificat în LibreOffice Calc, care l-a recalculat la aceleași totaluri. Nu a fost încă deschis în Excel. Detaliile coloană cu coloană sunt în [Coloanele exportului](topic:export-columns).

## Devizul ca CSV

Deschideți meniul {{ui:Export}} și alegeți {{ui:CSV}}. Primiți `(name).csv`: aceleași rânduri și coloane ca foaia Deviz, ca valori simple (fără formule), și totalul lucrării. Folosiți-l pentru a-l lipi într-un alt sistem de devize sau de contabilitate.

CSV-ul conține doar devizul; pentru cantități pe foi și lista de marcaje, folosiți XLSX. {{ui:Listă de materiale}} din același meniu salvează doar lista de materiale ca CSV, pentru comandă.

## Devizul în Google Sheets

Deasupra tabelului Cantități, **Copiere pentru Google Sheets** pune devizul în clipboard ca text separat prin tabulatoare, cu aceleași linii ca CSV-ul. Într-o foaie Google, faceți clic pe celula A1 și lipiți. TakeoffCraft nu se conectează la Google și nu trimite nimic acolo.

## Tarife lipsă și aprobarea devizului

Un rând cu cantitate și fără tarif are **Fără tarif** în Note, iar exportul le numără în totaluri. Când devizul a fost aprobat, exportul indică cine l-a aprobat, când și pentru ce total. Vezi [Tarife lipsă și aprobarea devizului](topic:sign-off-the-estimate).

## PDF marcat

1. Deschideți PDF-urile ale căror marcaje doriți să fie desenate.
2. Deschideți meniul {{ui:Export}} și alegeți {{ui:PDF marcat}}.
   Apare "Se scrie PDF-ul marcat…", apoi browserul descarcă un fișier pentru fiecare PDF marcat, numit `(PDF name) (takeoff).pdf`.

În copie:

- traseele sunt desenate ca linii în culoarea articolului lor,
- ariile sunt umplute ușor cu un contur plin, iar decupajele rămân deschise,
- numărările sunt puncte,
- fiecare pagină cu marcaje primește o legendă mică în colțul din stânga jos: culoarea, numele și cantitatea fiecărui articol de pe acea pagină.

PDF-urile originale nu sunt modificate.

Note:

- Sunt scrise doar PDF-urile deschise. Marcajele de pe PDF-urile neschise rămân în totaluri, dar nu sunt desenate; deschideți întâi acele PDF-uri.
- Numele din legendă folosesc un font PDF standard. Literele pe care nu le poate afișa sunt tipărite ca "?".
- Un PDF criptat nu poate fi copiat cu marcaje: "Acest PDF este protejat cu parolă sau criptat, deci nu se poate scrie o copie marcată. Antemăsurătoarea în sine este în regulă; exportați foaia de calcul în schimb."
- Prima {{ui:PDF marcat}} dintr-o filă încarcă modulul de scriere PDF. Offline, este disponibil doar dacă bara aplicației afișează {{ui:Pregătit pentru offline}}; vezi [Lucrul offline](common:offline).

:::chromium
Cu mai multe PDF-uri marcate, Chrome și Edge pot cere o dată permisiunea ca acest site să descarce mai multe fișiere. Alegeți Permite, altfel primiți doar primul fișier.
:::

## Nimic de exportat?

- {{ui:XLSX}} și {{ui:CSV}} au nevoie de cel puțin un articol: "Nimic de exportat încă: creați un articol și măsurați-l."
- {{ui:PDF marcat}} are nevoie de marcaje pe un PDF deschis: "Nu există încă marcaje pe PDF-urile deschise."

## Salvați și antemăsurătoarea

Un export este un raport. Pentru a continua lucrul la antemăsurătoare mai târziu, alegeți și {{ui:Salvare antemăsurătoare}}: vezi [Salvarea și redeschiderea unei antemăsurători](topic:save-and-reopen).

Pentru a adăuga cheltuieli generale, profit, taxe și garanție și pentru a trimite o propunere, vezi [Sumar de ofertă și propunere](topic:bid-summary).
