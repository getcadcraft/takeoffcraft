---
title: Pachete de ofertă și nivelarea ofertelor
summary: Împărțiți devizul în pachete pe meserii, trimiteți domeniul fiecărui pachet subcontractanților, comparați ofertele care revin pentru același domeniu și folosiți oferta aleasă ca preț al pachetului.
keywords: nivelarea ofertelor, nivelare, pachet de ofertă, subcontractant, ofertă de subcontractant, domeniu, completare, meserie, diviziune CSI, comparare oferte, ofertă cea mai mică, tabel de oferte, ofertant, atribuire, oferta aleasă, folosire ofertă, preț de subcontract
from: 856b3088
---

Un antreprenor general trimite domeniul fiecărei meserii subcontractanților și compară ce revine. TakeoffCraft face ambele din extragere: deschideți {{ui:Export}} › {{ui:Pachete de ofertă și nivelare…}}.

## Pachete

Există un pachet pentru fiecare diviziune CSI pe care o folosesc articolele (primele două cifre ale {{ui:Număr CSI}} unui articol, vezi [Crearea articolelor de extragere](topic:create-items)). Articolele fără număr fac un pachet separat. Fiecare pachet arată articolele sale, pe câte foi se află marcajele lor și costul nostru propriu (material și manoperă înainte de adaosuri, din {{ui:Ofertă de bază}}).

Alegeți {{ui:CSV domeniu}} ca să descărcați ce trimiteți unui subcontractant: fiecare articol cu numărul CSI, cantitatea, unitatea și foile pe care se află. Nu are prețuri. Pentru furnizorii de materiale, cererea de ofertă din registrul de lucru are lista pieselor (vezi [Exportul devizului](topic:export-estimate)).

## Introducerea ofertelor

1. În rândul gol de sub pachet, scrieți numele ofertantului și suma ofertei, apoi alegeți {{ui:Adăugare ofertă}}.
2. Dacă o ofertă lasă afară o parte din domeniu, deschideți lista {{ui:Lăsat deoparte}} și bifați acele articole.
3. Pentru a corecta un nume sau o sumă, scrieți peste ea în tabel; butonul × elimină o ofertă.

Fiecare modificare este un pas pe care {{key:Mod+Z}} îl anulează, iar ofertele sunt salvate împreună cu extragerea.

## Cum sunt nivelate ofertele

Ofertele rareori acoperă același domeniu. Nivelarea completează fiecare articol lăsat afară cu o **completare** la costul nostru propriu, astfel încât fiecare ofertă să fie comparată pe întregul pachet:

**Nivelată = oferta + completările**

Cea mai mică ofertă nivelată este marcată **Cea mai mică**; la egalitate, cea introdusă prima. **Față de costul nostru** este oferta nivelată minus costul nostru propriu al pachetului: negativ înseamnă sub acesta. O ofertă care pare cea mai mică poate pierde odată ce se numără domeniul lipsă.

Registrul de lucru primește o foaie **Nivelarea ofertelor** cu fiecare pachet care are oferte: estimarea noastră, fiecare ofertă, completările ei, totalul nivelat și diferența, ca formule vii, și ce a lăsat afară fiecare ofertă.

## Folosirea unei oferte ca preț al pachetului

Alegeți {{ui:Folosire}} pe o ofertă și aceasta devine prețul întregului pachet în deviz: prețul propriu al pachetului (articolele, condițiile secundare și piesele de articol compus) iese din totalul lucrării, articolele rămân ca cantități cu ratele proprii, ca referință, iar un rând, **Oferta aleasă**, poartă suma ofertei. Articolele lăsate afară de ofertă rămân la costul propriu, ceea ce nivelarea deja a numărat ca completare. Alegeți altă ofertă sau aceeași din nou ca s-o retrageți; fiecare este un pas pe care {{key:Mod+Z}} îl anulează.

În sinteza ofertei, ofertele subcontractanților sunt un rând în interiorul costului: cheltuielile generale, profitul și garanția se adaugă peste ele ca peste orice cost; taxa pe vânzări (doar pe material) și sarcinile pe manoperă (pe manoperă) nu. Foaia Deviz din registrul de lucru poartă oferta aleasă ca rând propriu, iar blocul adaosurilor o adaugă, cu formule vii. Lista de materiale lasă afară materialul unui pachet atribuit, pentru că subcontractantul îl furnizează.

O parte a pachetului dintr-o zonă de ofertare care este variantă nu este prețuită din nou: variantele și subtotalurile pe zone folosesc tot prețurile proprii.

## Oferte care vin prin e-mail

Nu trebuie să scrieți ofertele de mână. {{ui:Trimitere pentru ofertare…}} sub un pachet trimite fiecărui subcontractant un link la o pagină unde scrie un preț pentru fiecare rând; {{ui:Preluare prețuri}} aduce în acest tabel ce au trimis. Vezi [Trimiterea unui pachet pentru oferte](topic:bid-invitations).

:::note
Introducerea unei oferte de mână funcționează în continuare, iar o ofertă scrisă de mână și una de pe site stau alăturate. Ofertele venite de pe site sunt marcate **web** (sau **web, târzie** dacă au sosit după termenul limită); prețul lor se schimbă doar când ofertantul trimite o versiune nouă, astfel încât modificările proprii rămân până atunci.
:::
