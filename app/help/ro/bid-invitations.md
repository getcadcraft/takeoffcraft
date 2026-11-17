---
title: Trimiterea unui pachet pentru oferte
summary: Trimiteți prin e-mail un pachet de ofertare subcontractanților, lăsați-i să scrie prețuri pe o pagină care nu cere cont, păstrați prețurile sigilate până la ora deschiderii și aduceți-le în foaia de nivelare.
keywords: trimitere pentru ofertare, invitație, invitație de ofertare, ofertant, subcontractant, invitare, e-mail, cerere de preț, oferte sigilate, deschiderea ofertelor, ziua ofertelor, ofertă târzie, termen limită, memento, evidența subcontractanților, asigurare, calificare, csv, conectare, foi PDF
from: fb314b2c
---

{{ui:Export}} › {{ui:Pachete de ofertă și nivelare…}} › {{ui:Trimitere pentru ofertare…}} trimite un pachet către persoanele pe care le alegeți. Site-ul trimite fiecăruia un e-mail cu un link; ei deschid o pagină, văd domeniul și scriu un preț pentru fiecare rând. Vedeți prețurile în foaia de nivelare, gata de comparat ([Pachete de ofertă și nivelarea ofertelor](topic:bid-leveling)).

:::note
**Trimiterea nu este deschisă încă tuturor.** În timp ce funcția este testată, funcționează pentru conturile pe care echipa CadCraft le-a activat; dacă al dvs. nu este, caseta de dialog o spune. Pagina ofertantului funcționează pentru fiecare invitație trimisă.
:::

## Înainte de trimitere

- Aveți nevoie de un cont CadCraft cu o adresă de e-mail verificată. TakeoffCraft în browser vă cere să **vă conectați**: se deschide o filă pe getcadcraft.com, apăsați Conectare, iar acea filă primește o autentificare valabilă 30 de zile, doar pentru pachetele de ofertare, până închideți fila TakeoffCraft. O puteți elimina oricând din pagina de securitate. O fereastră Studio nu poate trimite încă.
- Dați fiecărui articol un număr CSI: un pachet este articolele unei diviziuni CSI ([Crearea articolelor de extragere](topic:create-items)).
- Scalați foile pe care se află marcajele pachetului, ca cantitățile pe care le văd ofertanții să fie măsurate.

## Trimiterea unui pachet

1. Alegeți {{ui:Trimitere pentru ofertare…}} sub pachet.
2. Completați titlul, proiectul și un mesaj opțional, precum și **termenul limită** în fusul orar local.
3. Lăsați bifată opțiunea **Păstrare prețuri sigilate** ca să ascundeți fiecare preț până la **ora deschiderii** (nu înainte de termenul limită), sau debifați-o ca să vedeți prețurile pe măsură ce sosesc.
4. Lăsați bifată caseta foilor ca să trimiteți un PDF cu foile care conțin marcajele pachetului, cu marcajele desenate. Prețurile proprii nu intră niciodată în ce se trimite: doar denumirile articolelor, numerele CSI, cantitățile, unitățile și numele foilor.
5. Scrieți persoanele de invitat, câte una pe rând, ca `Name <name@company.com>` sau doar adresa, sau bifați persoane din evidența subcontractanților. Până la 60 o dată, 100 pe pachet.
6. Alegeți {{ui:Trimitere invitații}}. Fiecare persoană primește un singur e-mail simplu, cu numele și adresa de e-mail ale expeditorului, termenul limită și linkul; răspunsurile merg către expeditor.

Caseta de dialog spune câte invitații au fost trimise și numește pe oricine a fost sărit: deja invitat la acest pachet, rugat să nu mai primească invitații de ofertare, adresă nevalidă sau peste o limită de trimitere.

## Ce vede ofertantul

O pagină la un link privat lung, fără autentificare. Arată cine l-a invitat, termenul limită, dacă prețurile sunt sigilate, mesajul expeditorului și PDF-ul cu foi, apoi fiecare rând cu cantitatea lui. Pentru fiecare rând scrie un preț sau bifează **Nu este inclus** și poate adăuga o notă; adaugă note pentru tot pachetul și până la 3 fișiere (o ofertă, o scrisoare de domeniu, un certificat). Poate salva din nou și își poate schimba prețurile până la deschidere sau poate **refuza**, cu o căsuță prin care cere ca CadCraft să nu-i mai trimită invitații de ofertare.

## Oferte sigilate și deschiderea

Înainte de ora deschiderii, **nimeni** nu vede un preț, o notă sau un fișier: nici expeditorul, nici în TakeoffCraft, nici pe pagina Pachete de ofertare. Vedeți cine a fost invitat și dacă a răspuns. La ora deschiderii, fiecare ofertă apare deodată. O ofertă salvată după termenul limită este acceptată și marcată **târzie**; nivelarea o listează în continuare, iar întârzierea este doar un marcaj, nu o decizie. După deschidere, un ofertant nu mai poate schimba un preț. Fără sigilare, o ofertă este finală odată ce a trecut termenul.

## Obținerea prețurilor

{{ui:Preluare prețuri}} întreabă site-ul și adaugă fiecare răspuns în pachet ca ofertă, marcată **web**. TakeoffCraft întreabă și discret de fiecare dată când deschideți caseta, cât timp este conectat. O ofertă al cărei ofertant a salvat o versiune nouă este actualizată pe loc; o ofertă pe care ați editat-o rămâne cum ați lăsat-o până când ofertantul trimite o versiune nouă. Fiecare preluare este un pas pe care {{key:Mod+Z}} îl anulează. Rândurile lăsate afară vin ca domeniu exclus de ofertă, astfel încât nivelarea le completează cu costul propriu.

## Pe site

Contul dvs. are două pagini în plus, odată ce puteți trimite: **Pachete de ofertare** listează ce ați trimis, cine a răspuns, ofertele târzii și fișierele și permite trimiterea unui memento (un link nou; cel vechi nu mai funcționează), închiderea, redeschiderea sau anularea unui pachet; **Subcontractanți** păstrează o evidență pentru fiecare companie: contacte, meserii, răspunsuri de calificare (ani de activitate, capacitate de garantare, EMR, record de siguranță, sindicat sau atelier deschis, referințe), date de expirare a licenței și asigurării, marcate după ce trec sau în următoarele 30 de zile, și ofertele anterioare. Importați și exportați evidențele ca CSV: câte un rând pentru fiecare contact, cu coloanele din export; o companie deja existentă se actualizează, nu se repetă.

## Cine vede ce și cât timp

Prețurile, notele și fișierele ofertanților merg către expeditor și către echipa CadCraft, care administrează pagina. Sunt păstrate 24 de luni după termenul limită, fișierele 180 de zile; apoi sunt șterse. Adresa de e-mail a ofertantului este cea pe care ați introdus-o; este folosită doar pentru a trimite invitația și mementourile ei. O adresă primește cel mult 3 invitații pe zi de la toți la un loc, iar pe zi se pot trimite până la 200.

## Încă nerealizat

Addenda, scrisorile de atribuire, o foaie de domeniu semnată pentru fiecare ofertant și mementourile automate înainte ca o asigurare să expire nu sunt realizate încă. Vezi [Încă nerealizat](topic:not-built-yet).
