---
title: Sinteza ofertei și propunerea
summary: Adăugați sarcinile pe manoperă, taxa pe vânzări, cheltuielile generale, profitul și garanția la deviz, scrieți incluziunile și excluziunile și descărcați un PDF de propunere de trimis.
keywords: ofertă, sarcini pe manoperă, sarcini, salarii, propunere, ofertă de preț, cheltuieli generale, profit, adaos, marjă, taxă pe vânzări, garanție, incluziuni, excluziuni, termeni, semnătură, client, preț
from: 3208a561
---

Devizul prețuiește ce ați extras. **Sinteza ofertei** o transformă în preț: adaugă taxa pe vânzări, cheltuielile generale, profitul și garanția și face un **PDF de propunere** cu incluziunile și excluziunile proprii.

Deschideți-o din {{ui:Export}} › {{ui:Sinteza ofertei și propunere…}}. Tot ce este în ea este salvat împreună cu extragerea, iar fiecare modificare poate fi anulată.

## Adaosurile

Scrieți un procent în oricare dintre cele cinci (lăsați celelalte la 0). Se calculează în această ordine, fiecare pe ce este deasupra lui:

| Rând | Calculat ca |
|---|---|
| Material, Manoperă | Totalurile devizului (oferta de bază când extragerea are [variante](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Sarcini pe manoperă | Procent sarcini × manoperă: contribuții pe salarii, asigurări și beneficii pentru salariile echipelor. |
| **Cost** | Material + manoperă + sarcini pe manoperă. |
| Taxă pe vânzări pe material | Procent taxă × material. |
| Cheltuieli generale | Procent cheltuieli generale × (cost + taxă). |
| Profit | Procent profit × (cost + taxă + cheltuieli generale). |
| Garanție | Procent garanție × tot ce este mai sus. |
| **Ofertă** | Suma rândurilor. |

Fiecare rând este rotunjit la ban. Registrul de lucru arată aceleași rânduri sub totalul foii Deviz, cu formule vii. Sinteza se actualizează pe măsură ce scrieți: {{key:Enter}} acceptă un procent. Fiecare variantă este arătată cu aceleași adaosuri pe propriul cost, astfel încât proprietarul să vadă ce schimbă cu adevărat.

## Propunerea

Completați ce trebuie să spună propunerea:

- **Proiect** (numele extragerii când este gol), **Către** (clientul) și **De la** (compania proprie).
- **Incluziuni** și **Excluziuni**: câte una pe rând; o liniuță sau un punct la început este în regulă.
- **Termeni**: text liber, de exemplu „Valabil 30 de zile.”
- **Lista articolelor și cantităților**: domeniul, articol cu articol, cu cantități și fără prețuri. Debifați pentru o propunere forfetară.

Alegeți {{ui:PDF propunere}}. PDF-ul (`<takeoff> - proposal.pdf`) are data, blocul de prețuri cu fiecare adaos și oferta, variantele, domeniul, incluziunile și excluziunile, termenii și liniile de semnătură și dată. Dacă unele cantități nu au putut fi măsurate (o foaie fără scară), o spune sub preț.

## În exporturi

Odată ce extragerea are o sinteză a ofertei, CSV-ul se termină cu ea, iar registrul de lucru primește o foaie **Sinteza ofertei**, cu fiecare rând, procentul și suma lui. Vezi [Exportul devizului](topic:export-estimate).
