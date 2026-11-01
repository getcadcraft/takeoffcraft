---
title: Datoteke koje TakeoffCraft otvara i čuva
summary: PDF-ovi na ulazu, datoteka projekta predmera, tabele i PDF-ovi sa oznakama na izlazu - šta sadrži svaka, gde ide i šta se menja na mreži, van mreže i između pregledača.
keywords: datoteke, formati, pdf, takeoff.json, datoteka projekta, xlsx, csv, pdf sa oznakama, preuzimanje, sačuvaj, otvori, van mreže
from: 1bf9be65
---

## Šta otvara

| Datoteka | Kako | Napomene |
|---|---|---|
| PDF (`.pdf`) | {{ui:Otvori planove}}, {{key:Mod+O}} ili prevucite na stranicu | Više odjednom. Svaka stranica postaje list. |
| Projekat predmera (`.takeoff.json`) | {{ui:Otvori predmer}} ili prevucite na stranicu | Vaše stavke, razmere i oznake. Možete ga prevući zajedno sa njegovim PDF-ovima. |

Ostale datoteke prevučene na stranicu se preskaču, a statusna traka kaže koje su.

- **PDF-ovi zaštićeni lozinkom** se ne otvaraju: „(ime) je zaštićen lozinkom. Otvorite nezaštićenu kopiju.“
- **Isti PDF dvaput** se otvara jednom: „(ime) je već otvoren.“ TakeoffCraft prepoznaje datoteke po sadržaju, a ne po imenu.
- **Skenirani PDF-ovi** se otvaraju i mere kao i svi ostali; TakeoffCraft ne treba tekst iz PDF-a.
- **Veliki skupovi planova**: svaki PDF se u celosti čita pri otvaranju (da bi se izračunao njegov otisak), pa vrlo velika datoteka potraje. Sličice se crtaju jedna po jedna dok pomerate listu.

## Šta čuva

Svako čuvanje je preuzimanje. Ništa se ne upisuje nazad u vaše PDF-ove.

| Izaberete | Dobijate | Šta je u njoj |
|---|---|---|
| {{ui:Sačuvaj predmer}} | `(ime).takeoff.json` | Stavke, sklopovi, cene, razmere listova i svaka oznaka, vezane za svaki PDF prema njegovom sadržaju. Nema stranica PDF-a. |
| {{ui:XLSX}} | `(ime).xlsx` | Četiri radna lista: Predračun (sa živim formulama), Po listu, Oznake, Razmere. |
| {{ui:CSV}} | `(ime).csv` | Predračun kao obične vrednosti, jedan red po stavci i po komponenti. |
| {{ui:PDF sa oznakama}} | `(ime PDF-a) (takeoff).pdf` | Kopija svakog otvorenog PDF-a koji ima oznake, sa predmerom nacrtanim na njegovim stranicama i legendom. Jedna datoteka po PDF-u. |

Ime se uzima iz prvog PDF-a koji ste otvorili u ovom predmeru. Još nema polja za preimenovanje: preimenujte preuzetu datoteku ako želite drugo ime.

Pogledajte [Izvoz predračuna i PDF-a sa oznakama](topic:export-estimate) i [Kolone izvoza](topic:export-columns).

## Gde idu preuzimanja

Pregledač ih čuva tamo gde čuva svako preuzimanje, obično u fascikli Preuzimanja. Nađite je u {{pick:mac=Finder|windows=File Explorer|linux=upravljaču datotekama}}. Ako je pregledač podešen da pita gde da čuva svaku datoteku, on će pitati.

:::chromium
{{ui:PDF sa oznakama}} sa više PDF-ova sa oznakama preuzima više datoteka odjednom. Chrome i Edge mogu jednom pitati da li ovaj sajt sme da preuzima više datoteka. Izaberite Dozvoli.
:::

:::safari
Safari čuva u fasciklu Preuzimanja, osim ako ste u Safari podešavanjima, u delu Opšte, promenili lokaciju preuzimanja.
:::

## Zašto su projektna datoteka i PDF-ovi odvojeni

Datoteka `.takeoff.json` sadrži samo vaš predmer. PDF-ove ponovo pronalazi po njihovom sadržaju (otisku svake datoteke), pa:

- Preimenovanje ili premeštanje PDF-a nije važno.
- PDF koji je promenjen ili ponovo sačuvan u drugom programu računa se kao druga datoteka, čak i uz isto ime.
- Oznake na PDF-ovima koji nisu otvoreni i dalje ulaze u ukupne zbirove.

Pogledajte [Čuvanje i ponovno otvaranje predmera](topic:save-and-reopen).

## Na mreži i van mreže

Vaši PDF-ovi i predmeri nikad ne napuštaju vaš računar, bilo na mreži bilo van nje. Veza je važna samo za učitavanje samog programa TakeoffCraft.

Da biste radili bez veze, prvo sačuvajte aplikaciju dok ste na mreži:

1. Izaberite {{ui:Sačuvaj za rad van mreže}} u gornjoj traci aplikacije na vrhu.
   Dugme broji „Čuva se 12 od 40“ dok čuva.
2. Sačekajte {{ui:Spremno za rad van mreže}}.

Čuvanje programa TakeoffCraft zadržava u pregledaču aplikaciju, ovu pomoć, čitač PDF-a, pisac PDF-a koji koristi {{ui:PDF sa oznakama}} i radnika za {{ui:Automatsko brojanje}}, oko 6 MB. Kada piše {{ui:Spremno za rad van mreže}}, sve radi van mreže: otvaranje PDF-ova, merenje, {{ui:Automatsko brojanje}}, {{ui:Sačuvaj predmer}}, {{ui:XLSX}}, {{ui:CSV}} i {{ui:PDF sa oznakama}}.

| Dugme kaže | Značenje |
|---|---|
| {{ui:Sačuvaj za rad van mreže}} | Još nije sačuvano u ovom pregledaču. Izaberite ga da sačuvate. |
| Čuva se (n) od (m) | Čuva se sada. |
| {{ui:Spremno za rad van mreže}} | Sačuvano. Izaberite ga za {{ui:Sačuvaj ponovo (preuzmi najnoviju verziju)}} ili {{ui:Ukloni kopiju za rad van mreže}}. |
| {{ui:Nije moguće sačuvati}} | Neke datoteke nisu preuzete. Proverite vezu i izaberite ga ponovo. |
| {{ui:Rad van mreže nije dostupan}} | Ovaj prozor pregledača ne može da čuva kopiju za rad van mreže (privatni prozori i neki upravljani računari to blokiraju). |

Više, uključujući koliko sačuvana kopija traje u svakom pregledaču: [Rad van mreže](common:offline).

:::offline
Niste na mreži. Ako gornja traka aplikacije prikazuje {{ui:Spremno za rad van mreže}}, sve radi. Ako ne, delovi koje TakeoffCraft još nije učitao u ovoj kartici (pisac PDF-a za {{ui:PDF sa oznakama}}, radnik za {{ui:Automatsko brojanje}}) sada se ne mogu učitati, pa se {{ui:PDF sa oznakama}} zaustavlja uz poruku „PDF sa oznakama nije mogao da se napiše“. Vaš predmer je u svakom slučaju bezbedan: {{ui:Sačuvaj predmer}}, {{ui:XLSX}} i {{ui:CSV}} ne traže vezu. Ne osvežavajte karticu dok ponovo ne budete na mreži.
:::

:::online
Na mreži ste. Pre posete gradilištu ili puta izaberite {{ui:Sačuvaj za rad van mreže}} i sačekajte {{ui:Spremno za rad van mreže}}.
:::

## Tabele

XLSX zadržava žive formule, pa program za tabele ponovo računa predračun kada otvori datoteku i ostaje tačan kada tamo promenite cenu ili otpad. Radna sveska je proverena u LibreOffice Calc, koji je ponovo izračunao svaki zbir na isti cent. U Excel-u još nije otvorena.

CSV je obični tekst sa oznakom redosleda bajtova (BOM), pa programi za tabele pravilno čitaju znakove kao što je m².

## Računar i oblak

:::desktop
Od 0.5, desktop aplikacija je CadCraft Studio: TakeoffCraft i ostalih sedam aplikacija u jednoj instalaciji. Nema posebnog instalatera za TakeoffCraft.
:::

Čuvanje u oblaku još nije dostupno. Držite datoteke `.takeoff.json` uz PDF-ove posla i pravite njihove rezervne kopije kao i sve druge datoteke. Pogledajte [Gde idu vaše datoteke](common:your-files).
