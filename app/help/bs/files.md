---
title: Datoteke koje TakeoffCraft otvara i spašava
summary: PDF-ovi na ulazu, datoteka predmjera, tabele i označeni PDF-ovi na izlazu – šta svaka sadrži, gdje ide i šta se mijenja na mreži, van mreže i između preglednika.
keywords: datoteke, formati, pdf, takeoff.json, datoteka projekta, xlsx, csv, označeni pdf, preuzimanje, spasi, otvori, van mreže
from: 1bf9be65
---

## Šta se otvara

| Datoteka | Kako | Napomene |
|---|---|---|
| PDF (`.pdf`) | {{ui:Open plans}}, {{key:Mod+O}} ili prevuci na stranicu | Više odjednom. Svaka stranica postaje list. |
| Projekat predmjera (`.takeoff.json`) | {{ui:Open takeoff}} ili prevuci na stranicu | Vaše stavke, razmjere i oznake. Možete ga prevući zajedno s njegovim PDF-ovima. |

Ostale datoteke prevučene na stranicu se preskaču, a statusna traka ih navodi.

- **PDF-ovi zaštićeni lozinkom** se ne otvaraju: „(name) je zaštićen lozinkom. Otvorite kopiju bez zaštite.“
- **Isti PDF dva puta** otvara se samo jednom: „(name) je već otvoren.“ TakeoffCraft prepoznaje datoteke po sadržaju, a ne po nazivu.
- **Skenirani PDF-ovi** otvaraju se i mjere kao i svi ostali; TakeoffCraft ne treba tekst u PDF-u.
- **Veliki skupovi planova**: svaki PDF se pri otvaranju čita u cjelini (radi otiska), pa veoma velika datoteka potraje malo. Sličice se crtaju jedna po jedna dok pomjerate prikaz.

## Šta se spašava

Svako spašavanje je preuzimanje. Ništa se ne upisuje natrag u vaše PDF-ove.

| Vi birate | Dobijate | Šta sadrži |
|---|---|---|
| {{ui:Save takeoff}} | `(name).takeoff.json` | Stavke, sklopove, stope, razmjere listova i svaku oznaku, vezanu za svaki PDF prema njegovom sadržaju. Bez stranica PDF-a. |
| {{ui:XLSX}} | `(name).xlsx` | Četiri radna lista: Predračun (sa živim formulama), Po listu, Oznake, Razmjere. |
| {{ui:CSV}} | `(name).csv` | Predračun kao obične vrijednosti, jedan red po stavci i komponenti. |
| {{ui:Marked PDF}} | `(PDF name) (takeoff).pdf` | Kopija svakog otvorenog PDF-a koji ima oznake, sa predmjerom nacrtanim na stranicama i legendom. Jedna datoteka po PDF-u. |

Naziv se uzima iz prvog PDF-a koji ste otvorili u ovom predmjeru. Polje za promjenu naziva još ne postoji: preimenujte preuzetu datoteku ako želite drugi naziv.

Pogledajte [Izvoz predračuna i označenog PDF-a](topic:export-estimate) i [Kolone izvoza](topic:export-columns).

## Gdje idu preuzimanja

Vaš preglednik ih sprema tamo gdje sprema svako preuzimanje, obično u fasciklu za preuzimanja (Downloads). Pronađite je u {{pick:mac=Finder|windows=Istraživaču datoteka|linux=vašem upravitelju datoteka}}. Ako je preglednik podešen da pita gdje da spasi svaku datoteku, pitaće.

:::chromium
{{ui:Marked PDF}} s više označenih PDF-ova preuzima više datoteka odjednom. Chrome i Edge mogu jednom pitati sme li ova stranica preuzeti više datoteka. Odaberite Dozvoli.
:::

:::safari
Safari sprema u Downloads, osim ako niste promijenili lokaciju preuzimanja u Safari postavkama, pod Opšte.
:::

## Zašto su datoteka projekta i PDF-ovi odvojeni

Datoteka `.takeoff.json` sadrži samo vaš predmjer. PDF-ove ponovo pronalazi po njihovom sadržaju (otisku svake datoteke), pa:

- Preimenovanje ili premještanje PDF-a nije bitno.
- PDF koji je izmijenjen ili ponovo spašen u drugom programu računa se kao drugačija datoteka, čak i uz isti naziv.
- Oznake na PDF-ovima koji nisu otvoreni i dalje ulaze u ukupne iznose.

Pogledajte [Spašavanje i ponovno otvaranje predmjera](topic:save-and-reopen).

## Na mreži i van mreže

Vaši PDF-ovi i predmjeri nikad ne napuštaju vaš računar, bilo na mreži ili van nje. Veza je važna samo za učitavanje samog programa TakeoffCraft.

Da biste radili bez veze, prvo spasite aplikaciju dok ste na mreži:

1. Odaberite {{ui:Save for offline}} u gornjoj traci aplikacije.
   Dugme broji naviše, „Spašavanje 12 od 40“, dok spašava.
2. Sačekajte da se pojavi {{ui:Offline ready}}.

Spašavanjem programa TakeoffCraft u pregledniku se čuvaju aplikacija, ova pomoć, čitač PDF-a, pisač PDF-a koji koristi {{ui:Marked PDF}} i radnik za automatsko brojanje, oko 6 MB. Kad piše {{ui:Offline ready}}, sve radi van mreže: otvaranje PDF-ova, mjerenje, {{ui:Auto count}}, {{ui:Save takeoff}}, {{ui:XLSX}}, {{ui:CSV}} i {{ui:Marked PDF}}.

| Dugme glasi | Značenje |
|---|---|
| {{ui:Save for offline}} | Još nije spašeno u ovom pregledniku. Odaberite da spasite. |
| Spašavanje (n) od (m) | Spašava se sada. |
| {{ui:Offline ready}} | Spašeno. Odaberite za {{ui:Save again (get the newest version)}} ili {{ui:Remove the offline copy}}. |
| {{ui:Could not save}} | Neke datoteke nisu preuzete. Provjerite vezu i odaberite ponovo. |
| {{ui:Offline not available}} | Ovaj prozor preglednika ne može čuvati kopiju za rad van mreže (privatni prozori i neki upravljani računari to blokiraju). |

Više, uključujući koliko dugo spašena kopija traje u svakom pregledniku: [Rad van mreže](common:offline).

:::offline
Niste na mreži. Ako gornja traka prikazuje {{ui:Offline ready}}, sve radi. Ako ne prikazuje, dijelovi koje TakeoffCraft još nije učitao u ovoj kartici (pisač PDF-a za {{ui:Marked PDF}} i radnik za automatsko brojanje) sada se ne mogu učitati, a {{ui:Marked PDF}} staje uz poruku „Označeni PDF nije mogao biti zapisan“. Vaš predmjer je u svakom slučaju siguran: {{ui:Save takeoff}}, {{ui:XLSX}} i {{ui:CSV}} ne trebaju vezu. Nemojte ponovo učitavati karticu dok ne budete opet na mreži.
:::

:::online
Na mreži ste. Prije posjete gradilištu ili putovanja odaberite {{ui:Save for offline}} i sačekajte {{ui:Offline ready}}.
:::

## Tabele

XLSX zadržava žive formule, pa program za tabele ponovo računa predračun pri otvaranju datoteke i održava ga tačnim kad tamo promijenite stopu ili otpad. Radna knjiga je provjerena u LibreOffice Calc, koji je ponovo izračunao svaki iznos do istog feninga. Još nije otvorena u Excelu.

CSV sadrži obične vrijednosti s oznakom redoslijeda bajtova (BOM), pa programi za tabele ispravno čitaju znakove kao što je m².

## Desktop i oblak

:::desktop
Od verzije 0.5 desktop aplikacija je CadCraft Studio: TakeoffCraft i ostalih sedam aplikacija u jednoj instalaciji. Nema zasebnog instalera za TakeoffCraft.
:::

Spašavanje u oblaku još nije dostupno. Čuvajte datoteke `.takeoff.json` uz PDF-ove posla i pravite im rezervne kopije kao i kod svake druge datoteke. Pogledajte [Gdje idu vaše datoteke](common:your-files).
