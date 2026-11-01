---
title: Datoteke koje TakeoffCraft otvara i sprema
summary: PDF-ovi unutra, datoteka projekta predmjera, proračunske tablice i označeni PDF-ovi van - što svaka sadrži, kamo ide i što se mijenja online, offline i među preglednicima.
keywords: datoteke, formati, pdf, takeoff.json, datoteka projekta, xlsx, csv, označeni pdf, preuzimanje, spremanje, otvaranje, offline
from: 1bf9be65
---

## Što otvara

| Datoteka | Kako | Napomene |
|---|---|---|
| PDF (`.pdf`) | {{ui:Otvori nacrte}}, {{key:Mod+O}} ili ispuštanje na stranicu | Može više odjednom. Svaka stranica postaje list. |
| Projekt predmjera (`.takeoff.json`) | {{ui:Otvori predmjer}} ili ispuštanje na stranicu | Vaše stavke, mjerila i oznake. Možete ga ispustiti zajedno s njegovim PDF-ovima. |

Druge datoteke ispuštene na stranicu se preskaču, a statusna traka ih imenuje.

- **PDF-ovi zaštićeni lozinkom** se ne otvaraju: „(ime) je zaštićena lozinkom. Otvorite nezaštićenu kopiju.“
- **Isti PDF dvaput** otvara se jednom: „(ime) je već otvorena.“ TakeoffCraft prepoznaje datoteke po sadržaju, a ne po imenu.
- **Skenirani PDF-ovi** otvaraju se i mjere kao svi drugi; TakeoffCraftu ne treba tekst u PDF-u.
- **Veliki kompleti nacrta**: svaki PDF čita se u cijelosti pri otvaranju (da bi mu se uzeo otisak), pa vrlo velika datoteka traje trenutak. Sličice se crtaju jedna po jedna dok pomičete.

## Što sprema

Svako spremanje je preuzimanje. Ništa se ne zapisuje natrag u vaše PDF-ove.

| Što odaberete | Što dobijete | Što je unutra |
|---|---|---|
| {{ui:Spremi predmjer}} | `(ime).takeoff.json` | Stavke, sklopovi, cijene, mjerila listova i svaka oznaka, vezani uz svaki PDF prema njegovu sadržaju. Bez stranica PDF-a. |
| {{ui:XLSX}} | `(ime).xlsx` | Četiri radna lista: Procjena (sa živim formulama), Po listu, Oznake, Mjerila. |
| {{ui:CSV}} | `(ime).csv` | Procjena kao obične vrijednosti, jedan redak po stavci i komponenti. |
| {{ui:Označeni PDF}} | `(ime PDF-a) (takeoff).pdf` | Kopija svakog otvorenog PDF-a koji ima oznake, s predmjerom ucrtanim na stranice i legendom. Jedna datoteka po PDF-u. |

Ime se uzima od prvog PDF-a koji ste otvorili u ovom predmjeru. Još nema okvira za preimenovanje: preimenujte preuzetu datoteku ako želite drugo ime.

Pogledajte [Izvezite procjenu i označeni PDF](topic:export-estimate) i [Stupci izvoza](topic:export-columns).

## Kamo idu preuzimanja

Vaš preglednik ih sprema ondje gdje sprema svako preuzimanje, obično u mapu Preuzimanja. Pronađite je u {{pick:mac=Finderu|windows=Istraživaču datoteka|linux=upravitelju datoteka}}. Ako je preglednik postavljen da pita gdje spremiti svaku datoteku, pita.

:::chromium
{{ui:Označeni PDF}} s više označenih PDF-ova preuzima više datoteka odjednom. Chrome i Edge mogu jednom pitati smije li ova stranica preuzimati više datoteka. Odaberite Dopusti.
:::

:::safari
Safari sprema u Preuzimanja osim ako niste promijenili lokaciju preuzimanja u postavkama Safarija, pod Općenito.
:::

## Zašto su datoteka projekta i PDF-ovi odvojeni

Datoteka `.takeoff.json` sadrži samo vaš predmjer. Svoje PDF-ove ponovno pronalazi po njihovu sadržaju (otisak svake datoteke), pa:

- Preimenovanje ili premještanje PDF-a nije važno.
- PDF koji je promijenio ili ponovno spremio drugi program računa se kao druga datoteka, čak i s istim imenom.
- Oznake na PDF-ovima koji nisu otvoreni i dalje se računaju u zbrojevima.

Pogledajte [Spremite i ponovno otvorite predmjer](topic:save-and-reopen).

## Online i offline

Vaši PDF-ovi i predmjeri nikada ne napuštaju vaše računalo, online ili offline. Veza je važna samo za učitavanje samog TakeoffCrafta.

Za rad bez veze prvo spremite aplikaciju, dok ste online:

1. Odaberite {{ui:Spremi za offline}} u traci aplikacije pri vrhu.
   Gumb broji, „Spremanje 12 od 40“, dok sprema.
2. Pričekajte {{ui:Spremno za offline}}.

Spremanje TakeoffCrafta čuva u vašem pregledniku aplikaciju, ovu pomoć, PDF čitač, PDF pisač koji koristi {{ui:Označeni PDF}} i radnika za autobrojanje, oko 6 MB. Kad piše {{ui:Spremno za offline}}, sve radi offline: otvaranje PDF-ova, mjerenje, {{ui:Autobrojanje}}, {{ui:Spremi predmjer}}, {{ui:XLSX}}, {{ui:CSV}} i {{ui:Označeni PDF}}.

| Gumb piše | Značenje |
|---|---|
| {{ui:Spremi za offline}} | Još nije spremljeno u ovom pregledniku. Odaberite ga za spremanje. |
| Spremanje (n) od (m) | Sprema se. |
| {{ui:Spremno za offline}} | Spremljeno. Odaberite ga za {{ui:Spremi ponovno (preuzmi najnoviju verziju)}} ili {{ui:Ukloni offline kopiju}}. |
| {{ui:Spremanje nije uspjelo}} | Neke datoteke nisu preuzete. Provjerite vezu i ponovno ga odaberite. |
| {{ui:Offline nije dostupan}} | Ovaj prozor preglednika ne može čuvati offline kopiju (privatni prozori i neka upravljana računala to blokiraju). |

Više, uključujući koliko dugo spremljena kopija traje u svakom pregledniku: [Rad offline](common:offline).

:::offline
Offline ste. Ako traka aplikacije prikazuje {{ui:Spremno za offline}}, sve radi. Ako ne, dijelovi koje TakeoffCraft još nije učitao u ovoj kartici (PDF pisač za {{ui:Označeni PDF}}, radnik za autobrojanje) sada se ne mogu učitati, a {{ui:Označeni PDF}} staje s porukom „Označeni PDF nije bilo moguće napisati“. Vaš predmjer je siguran u oba slučaja: {{ui:Spremi predmjer}}, {{ui:XLSX}} i {{ui:CSV}} ne trebaju vezu. Ne osvježavajte karticu dok se ponovno ne spojite.
:::

:::online
Online ste. Prije posjeta gradilištu ili leta odaberite {{ui:Spremi za offline}} i pričekajte {{ui:Spremno za offline}}.
:::

## Proračunske tablice

XLSX zadržava žive formule, pa proračunska tablica ponovno izračunava procjenu kad otvori datoteku i drži je točnom kad ondje promijenite cijenu ili gubitak. Radna knjiga provjerena je u programu LibreOffice Calc, koji je ponovno izračunao svaki zbroj na isti cent. U Excelu još nije otvorena.

CSV su obične vrijednosti s oznakom redoslijeda bajtova, pa proračunske tablice ispravno čitaju znakove poput m².

## Desktop i oblak

:::desktop
Od 0.5 desktop aplikacija je CadCraft Studio: TakeoffCraft i ostalih sedam aplikacija u jednoj instalaciji. Nema zasebnog instalacijskog programa za TakeoffCraft.
:::

Spremanje u oblak još nije dostupno. Čuvajte svoje datoteke `.takeoff.json` uz PDF-ove posla i izrađujte sigurnosne kopije kao i za svaku drugu datoteku. Pogledajte [Kamo idu vaše datoteke](common:your-files).
