---
title: Zaslon TakeoffCrafta
summary: Obilazak prozora po imenima na zaslonu - alatna traka, popis listova, list, ploča Stavke, tablica Količine i statusna traka.
keywords: zaslon, raspored, rasporedi, vrpca, preglednik projekta, alatnica, info okvir, alatna traka, ploče, popis listova, ploča stavki, količine, statusna traka, obilazak, sučelje
from: ab1115e0
---

TakeoffCraft ispunjava prozor preglednika ispod trake aplikacije CadCraft. Odozgo prema dolje i slijeva nadesno:

| Dio | Gdje | Čemu služi |
|---|---|---|
| Traka aplikacije | Na samom vrhu | Ime aplikacije, verzija, {{ui:O aplikaciji TakeoffCraft}}, {{ui:Pomoć}} ({{key:F1}}), {{ui:Spremi za offline}}, {{ui:Postavke}} ({{key:Mod+,}}), gumb {{ui:Cijeli zaslon}} i prekidač teme {{ui:Papir}} / {{ui:Model}}. |
| Alatna traka | Ispod trake aplikacije | Svaka naredba, u grupama: {{ui:Datoteka}}, {{ui:Izvezi}}, {{ui:Mjerilo}}, {{ui:Predmjer}}, {{ui:Uređivanje}}, {{ui:Pogled}}. |
| Listovi | Lijevo | Svaka stranica svakog otvorenog PDF-a, sa sličicom, mjerilom i brojem oznaka. |
| List | Sredina | Otvorena stranica. Ovdje mjerite. |
| Stavke | Desno | Vaše stavke predmjera, postavke odabrane stavke i odabrana oznaka. |
| Količine | Dolje | Količine i troškovi po stavci ili po listu te ukupni iznos posla. |
| Statusna traka | Na samom dnu | Živo mjerenje, poruke, savjet o 45° i zumiranje. |

## Alatna traka

Zadržite pokazivač iznad bilo kojeg gumba da vidite što radi i njegovu tipku.

| Grupa | Gumbi |
|---|---|
| {{ui:Datoteka}} | {{ui:Novo}} (prazan predmjer), {{ui:Otvori nacrte}} ({{key:Mod+O}}), {{ui:Otvori predmjer}} (projekt `.takeoff.json`), {{ui:Spremi predmjer}} ({{key:Mod+S}}) |
| {{ui:Izvezi}} | Jedan izbornik: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Označeni PDF}} |
| {{ui:Mjerilo}} | {{ui:Kalibriraj}} ({{key:K}}), {{ui:Provjeri}} ({{key:D}}) i popis {{ui:Predložak}} |
| {{ui:Predmjer}} | {{ui:Odaberi}} ({{key:V}}), {{ui:Linearno}} ({{key:L}}), {{ui:Površina}} ({{key:A}}), {{ui:Kružnica}} ({{key:O}}), {{ui:Luk}} ({{key:R}}, prekidač uključeno/isključeno), {{ui:Odbitak}} ({{key:E}}, prekidač uključeno/isključeno), {{ui:Otvor}} ({{key:X}}), {{ui:Broji}} ({{key:C}}), {{ui:Autobrojanje}} ({{key:S}}) |
| {{ui:Uređivanje}} | {{ui:Poništi}} ({{key:Mod+Z}}), {{ui:Ponovi}} ({{key:Mod+Y}}), {{ui:Kopiraj}} ({{key:Mod+C}}), {{ui:Zalijepi}} ({{key:Mod+V}}) i {{ui:Više}}: {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Zalijepi na isto mjesto}}, {{ui:Dupliciraj}}, {{ui:Izbriši}}, {{ui:Odaberi sve}}, {{ui:Poništi odabir}} |
| {{ui:Pogled}} | {{ui:Prilagodi stranicu}} ({{key:F}}), {{ui:Prilagodi širinu}} ({{key:W}}) |

Alat koji koristite prikazan je pritisnut. Gumbi {{ui:Luk}} i {{ui:Odbitak}} ostaju pritisnuti dok su uključeni.

## Listovi (lijevo)

- **Traži listove** filtrira popis po imenu lista, imenu datoteke ili oznaci stranice.
- Svaki list prikazuje sličicu (crta se dok pomičete), svoje ime i ili svoje mjerilo ili **Bez mjerila**.
- Desna strana svakog retka prikazuje koliko oznaka list ima. Dok je stavka istaknuta, umjesto toga prikazuje koliko je oznaka te stavke na listu.
- Kliknite list da ga otvorite. {{key:PageDown}} i {{key:PageUp}} prelaze na sljedeći i prethodni list u popisu.
- Kad predmjer obuhvaća PDF-ove koji nisu otvoreni, napomena ispod popisa ih imenuje. Pogledajte [Spremite i ponovno otvorite predmjer](topic:save-and-reopen).

Imena listova dolaze iz PDF-a: oznaka stranice poput `A-101` postaje ime lista. Stranica bez oznake dobiva ime po svojoj datoteci i broju stranice, poput „Plans, page 3“. Kad je otvoreno više PDF-ova, označeni listovi prikazuju i ime datoteke.

## List (sredina)

- Traka ispod lista prikazuje ime lista i njegovo mjerilo ili „Još nema mjerila: odaberite predložak ili kalibrirajte“. Njezini gumbi: {{ui:MarkupCraft}} (kad ta aplikacija može preuzeti PDF; pogledajte [Započnite predmjer i otvorite komplet nacrta](topic:open-plan-set)), {{ui:Usporedi}} (starija verzija lista preko ovoga: [Usporedite revidirani list](topic:compare-revisions)), „(n) za provjeru“ (označene oznake, kad ih ima) i {{ui:3D}} ([3D prikaz za provjeru](topic:check-in-3d)).
- Prije nego što je otvoren ijedan PDF, sredina prikazuje kratak vodič u pet koraka.
- Kotačić zumira na pokazivaču. Povucite za pomicanje. Pogledajte [Tipkovnica i miš](topic:keyboard).
- Dok koristite {{ui:Autobrojanje}}, na vrhu lista pojavljuje se traka s njegovim kontrolama.

## Stavke (desno)

Na vrhu, popis {{ui:Područje ponude}}: zgrada, kat ili faza u koju idu nove oznake ([Područja ponude](topic:bid-areas)).

- {{ui:Nova stavka}} otvara mali obrazac: naziv, tip ({{ui:Linearno (duljina)}}, {{ui:Površina}} ili {{ui:Broj}}) i {{ui:Dodaj}}.
- Popis prikazuje boju svake stavke, ikonu tipa, naziv i količinu. Kliknite stavku da crtate njome i istaknete njezine oznake na svakom listu. Ponovno je kliknite da prestanete isticati.
- Ispod popisa **Stavka: (naziv)** je uređivač stavke: naziv, tip, boja, jedinica, visina ili dubina, gubitak, cijene materijala i rada, izmjerene vrijednosti i {{ui:Sklop}}. Pogledajte [Izradite stavke predmjera](topic:create-items).
- **Odabrana oznaka** pojavljuje se kad odaberete oznaku: kojoj stavci pripada, njezin list, njezine mjere i gumbi poput {{ui:Dodaj otvor}} i {{ui:Izbriši oznaku}}. S nekoliko odabranih oznaka postaje **Odabrane oznake**: koliko ih je od svake stavke te {{ui:Kopiraj}}, {{ui:Dupliciraj}}, {{ui:Izreži}} i {{ui:Izbriši oznake}}.
- Uređivač stavke završava s {{ui:Kopiraj stavku}} i {{ui:Dupliciraj stavku}}: stavka sa svojim sklopom i troškovima, bez oznaka. Pogledajte [Kopiranje, lijepljenje i dupliciranje oznaka](topic:copy-paste).

## Količine (dolje)

- {{ui:Po stavci}} navodi svaku stavku i komponente njezina sklopa s količinom, gubitkom, cijenama i proširenim troškovima. Gubitak i cijene možete upisati izravno u tablicu.
- {{ui:Po listu}} navodi količinu svake stavke na svakom listu.
- Upozorenje koje počinje s **Nepotpuno:** pojavljuje se kad je nešto izostavljeno iz zbrojeva.
- {{ui:Ukupno za posao}} je desno u zaglavlju.
- Gumb sa strelicom skroz desno sakriva ili prikazuje tablicu da list dobije više prostora.

Pogledajte [Čitajte količine i procjenu](topic:read-quantities).

## Statusna traka (dolje)

Slijeva nadesno: živo mjerenje dok crtate (duljina, površina, radijus ili rezultat provjere), okvir {{ui:Upis}} dok upisujete duljinu, poruke TakeoffCrafta, podsjetnik „Shift hvata na 45°“ (ili „Hvata na 45°; Shift oslobađa kut“ kad je to uključeno u [Postavkama](topic:settings)), gumb {{ui:Hvatanje}} (hvatanje za linije crteža, uključeno kad je istaknut; {{key:F3}}) i postotak zumiranja.

:::tip
Pročitajte statusnu traku kad se nešto ne dogodi. TakeoffCraft ondje objašnjava zašto je odbio klik, na primjer „Ovaj list još nema mjerilo“.
:::

## Drugi rasporedi

Sve gore je raspored {{ui:CadCraft klasik}}, početni. {{ui:Postavke}} ({{key:Mod+,}}) › {{ui:Globalne}} › {{ui:Raspored}} nudi još dva; iste alate i tipke imaju sva tri, a ponovni odabir {{ui:CadCraft klasik}} vraća svaku kontrolu na staro mjesto.

| Raspored | U TakeoffCraftu |
|---|---|
| {{ui:Vrpca i preglednik projekta}} | {{ui:Vrpca predmjera}} preko vrha ([Izbornici, tipke i miš](topic:menus-keys-and-mouse)), traka za alat koji radi, kartica za svaki list koji otvorite (Model i layouti crteža također su listovi) s predlošcima mjerila i {{ui:Prilagodi stranicu}} ispod lista. Lijeva ploča drži {{ui:Svojstva}} (odabrana stavka, bilješka ili oznaka) iznad {{ui:Preglednik predmjera}}: {{ui:Listovi}} (kliknite jedan da ga otvorite u kartici), {{ui:Uvjeti}} (kliknite jedan da crtate njime) i {{ui:Procjena}} (ukupno svake stavke i ukupno za posao); sličice su njegova druga kartica. |
| {{ui:Alatnica i info okvir}} | Alatna traka iznad lista, info okvir s {{ui:Područje ponude}}, alatom koji radi ili odabirom i trakom lista, stupac alata predmjera lijevo, kartica za svaki list te {{ui:Hvatanje}} i zumiranje ispod lista. |

Dok je [3D prikaz za provjeru](topic:check-in-3d) otvoren, kartice listova i traka ispod lista se sklanjaju; zatvorite 3D prikaz da ponovno mjerite. Na telefonu uvijek radi raspored za telefon.

## Cijeli zaslon i teme

Gumb {{ui:Cijeli zaslon}} u traci aplikacije ili {{key:Ctrl+Shift+F}} (Control na svakoj platformi, i na Macu) prolazi kroz uobičajeni način, cijeli zaslon i cijeli zaslon sa skrivenim trakama. Sa skrivenim trakama pomaknite pokazivač na gornji rub da se ponovno prikažu.

{{ui:Papir}} je svijetla tema, a {{ui:Model}} tamna. U temi {{ui:Model}} crtež je na zaslonu prikazan invertirano (svijetle linije na tamnom) samo na zaslonu; izvozi se nikada ne mijenjaju.
