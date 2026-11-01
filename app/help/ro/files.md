---
title: Fișierele pe care TakeoffCraft le deschide și le salvează
summary: PDF-uri la intrare, un fișier de proiect de antemăsurătoare, foi de calcul și PDF-uri marcate la ieșire - ce conține fiecare, unde ajunge și ce se schimbă online, offline și între browsere.
keywords: fișiere, formate, pdf, takeoff.json, fișier de proiect, xlsx, csv, pdf marcat, descărcare, salvare, deschidere, offline
from: 1bf9be65
---

## Ce deschide

| Fișier | Cum | Observații |
|---|---|---|
| PDF (`.pdf`) | {{ui:Deschidere planuri}}, {{key:Mod+O}}, sau prin tragere pe pagină | Mai multe deodată. Fiecare pagină devine o foaie. |
| Proiect de antemăsurătoare (`.takeoff.json`) | {{ui:Deschidere antemăsurătoare}}, sau prin tragere pe pagină | Articolele, scările și marcajele. Poate fi tras împreună cu PDF-urile sale. |

Celelalte fișiere trase pe pagină sunt ignorate, iar bara de stare le numește.

- **PDF-urile protejate cu parolă** nu se deschid: „(nume) este protejat cu parolă. Deschideți o copie neprotejată.”
- **Același PDF de două ori** se deschide o singură dată: „(nume) este deja deschis.” TakeoffCraft recunoaște fișierele după conținut, nu după nume.
- **PDF-urile scanate** se deschid și se măsoară ca oricare altele; TakeoffCraft nu are nevoie de textul din PDF.
- **Seturi mari de planuri**: fiecare PDF este citit integral la deschidere (pentru amprentă), așa că un fișier foarte mare durează puțin. Miniaturile se desenează pe rând, pe măsură ce derulați.

## Ce salvează

Fiecare salvare este o descărcare. Nimic nu este scris înapoi în PDF-uri.

| Alegeți | Primiți | Ce conține |
|---|---|---|
| {{ui:Salvare antemăsurătoare}} | `(name).takeoff.json` | Articole, articole compuse, prețuri unitare, scările foilor și fiecare marcaj, legate de fiecare PDF prin conținutul său. Fără pagini PDF. |
| {{ui:XLSX}} | `(name).xlsx` | Patru foi de lucru: Deviz (cu formule active), Pe foi, Marcaje, Scări. |
| {{ui:CSV}} | `(name).csv` | Devizul, cu valori simple, un rând pentru fiecare articol și component. |
| {{ui:PDF marcat}} | `(numele PDF) (takeoff).pdf` | O copie a fiecărui PDF deschis care are marcaje, cu antemăsurătoarea desenată pe pagini și o legendă. Un fișier pentru fiecare PDF. |

Numele este luat de la primul PDF deschis în această antemăsurătoare. Încă nu există un câmp de redenumire: redenumiți fișierul descărcat dacă doriți alt nume.

Vezi [Exportul devizului și al unui PDF marcat](topic:export-estimate) și [Coloanele exportului](topic:export-columns).

## Unde ajung descărcările

Browserul le salvează acolo unde salvează orice descărcare, de obicei în dosarul Descărcări. Îl găsiți în {{pick:mac=Finder|windows=Explorator de fișiere|linux=managerul de fișiere}}. Dacă browserul este setat să întrebe unde se salvează fiecare fișier, va întreba.

:::chromium
{{ui:PDF marcat}} cu mai multe PDF-uri marcate descarcă mai multe fișiere deodată. Chrome și Edge pot întreba o dată dacă acest site poate descărca mai multe fișiere. Alegeți Permite.
:::

:::safari
Safari salvează în Descărcări, dacă nu ați schimbat locul descărcărilor în Setările Safari, la secțiunea General.
:::

## De ce fișierul de proiect și PDF-urile sunt separate

Fișierul `.takeoff.json` conține doar antemăsurătoarea. Își regăsește PDF-urile după conținut (o amprentă a fiecărui fișier), astfel că:

- Redenumirea sau mutarea unui PDF nu contează.
- Un PDF modificat sau salvat din nou de alt program este considerat alt fișier, chiar dacă are același nume.
- Marcajele de pe PDF-urile care nu sunt deschise se numără în totaluri.

Vezi [Salvarea și redeschiderea unei antemăsurători](topic:save-and-reopen).

## Online și offline

PDF-urile și antemăsurătorile nu părăsesc niciodată computerul, online sau offline. Conexiunea contează doar pentru încărcarea în sine a TakeoffCraft.

Pentru lucru fără conexiune, salvați mai întâi aplicația, cât timp sunteți online:

1. Alegeți {{ui:Salvare pentru offline}} din bara de aplicație de sus.
   Butonul numără în sus, „Se salvează 12 din 40”, cât timp salvează.
2. Așteptați până apare {{ui:Pregătit pentru offline}}.

Salvarea TakeoffCraft păstrează în browser aplicația, acest ajutor, cititorul PDF, scriitorul PDF folosit de {{ui:PDF marcat}} și procesul de numărare automată, cam 6 MB. Odată ce apare {{ui:Pregătit pentru offline}}, totul funcționează offline: deschiderea PDF-urilor, măsurarea, {{ui:Numărare automată}}, {{ui:Salvare antemăsurătoare}}, {{ui:XLSX}}, {{ui:CSV}} și {{ui:PDF marcat}}.

| Butonul afișează | Înseamnă |
|---|---|
| {{ui:Salvare pentru offline}} | Nesalvat încă în acest browser. Alegeți-l pentru a salva. |
| Se salvează (n) din (m) | Se salvează acum. |
| {{ui:Pregătit pentru offline}} | Salvat. Alegeți-l pentru {{ui:Salvare din nou (obținere a celei mai noi versiuni)}} sau {{ui:Eliminare a copiei offline}}. |
| {{ui:Nu s-a putut salva}} | Unele fișiere nu s-au descărcat. Verificați conexiunea și alegeți-l din nou. |
| {{ui:Modul offline nu este disponibil}} | Această fereastră a browserului nu poate păstra o copie offline (ferestrele private și unele computere administrate o blochează). |

Mai multe, inclusiv cât timp rămâne o copie salvată în fiecare browser: [Lucrul offline](common:offline).

:::offline
Sunteți offline. Dacă bara de aplicație afișează {{ui:Pregătit pentru offline}}, totul funcționează. Dacă nu, părțile pe care TakeoffCraft nu le-a încărcat încă în această filă a browserului (scriitorul PDF pentru {{ui:PDF marcat}}, procesul de numărare automată) nu se pot încărca acum, iar {{ui:PDF marcat}} se oprește cu „PDF-ul marcat nu a putut fi scris”. Antemăsurătoarea este în siguranță oricum: {{ui:Salvare antemăsurătoare}}, {{ui:XLSX}} și {{ui:CSV}} nu au nevoie de conexiune. Nu reîncărcați fila până nu reveniți online.
:::

:::online
Sunteți online. Înainte de o vizită pe șantier sau de un zbor, alegeți {{ui:Salvare pentru offline}} și așteptați {{ui:Pregătit pentru offline}}.
:::

## Foi de calcul

XLSX păstrează formulele active, așa că programul de calcul tabelar recalculează devizul la deschiderea fișierului și îl păstrează corect când modificați acolo un preț unitar sau o pierdere. Registrul de lucru a fost verificat în LibreOffice Calc, care a recalculat fiecare total până la același cent. Nu a fost deschis încă în Excel.

CSV conține valori simple, cu marcă de ordine a octeților, așa că programele de calcul tabelar citesc corect caractere precum m².

## Desktop și cloud

:::desktop
Din versiunea 0.5, aplicația desktop este CadCraft Studio: TakeoffCraft și celelalte șapte aplicații, într-o singură instalare. Nu există un program de instalare separat pentru TakeoffCraft.
:::

Salvarea în cloud nu este disponibilă încă. Păstrați fișierele `.takeoff.json` alături de PDF-urile lucrării și faceți-le copii de siguranță ca orice alt fișier. Vezi [Unde ajung fișierele dumneavoastră](common:your-files).
