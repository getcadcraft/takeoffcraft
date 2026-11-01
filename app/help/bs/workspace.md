---
title: Ekran programa TakeoffCraft
summary: Obilazak prozora po nazivima na ekranu – traka s alatima, lista listova, list, panel stavki, tabela količina i statusna traka.
keywords: ekran, raspored, traka, pregled projekta, okvir s alatima, info okvir, traka s alatima, lista listova, panel stavki, količine, statusna traka, obilazak, sučelje, paneli
from: ab1115e0
---

TakeoffCraft ispunjava prozor preglednika ispod gornje trake aplikacije CadCraft. Odozgo nadolje i slijeva nadesno:

| Dio | Gdje | Čemu služi |
|---|---|---|
| Gornja traka | Samo na vrhu | Naziv aplikacije, verzija, {{ui:About TakeoffCraft}}, {{ui:Help}} ({{key:F1}}), {{ui:Save for offline}}, {{ui:Settings}} ({{key:Mod+,}}), dugme {{ui:Full screen}} i prekidač teme {{ui:Paper}} / {{ui:Model}}. |
| Traka s alatima | Ispod gornje trake | Svaka naredba, u grupama: {{ui:File}}, {{ui:Export}}, {{ui:Scale}}, {{ui:Takeoff}}, {{ui:Edit}}, {{ui:View}}. |
| Listovi | Lijevo | Svaka stranica svakog otvorenog PDF-a, sa sličicom, razmjerom i brojem oznaka. |
| List | Sredina | Otvorena stranica. Mjerite ovdje. |
| Stavke | Desno | Stavke predmjera, postavke odabrane stavke i odabrana oznaka. |
| Količine | Dolje | Količine i troškovi po stavci ili po listu, i ukupan iznos posla. |
| Statusna traka | Na samom dnu | Mjerenje uživo, poruke, savjet za 45° i zumiranje. |

## Traka s alatima

Zadržite pokazivač na bilo kojem dugmetu da vidite šta radi i koju tipku ima.

| Grupa | Dugmad |
|---|---|
| {{ui:File}} | {{ui:New}} (prazan predmjer), {{ui:Open PDFs}} ({{key:Mod+O}}), {{ui:Open takeoff}} (projekat `.takeoff.json`), {{ui:Save takeoff}} ({{key:Mod+S}}) |
| {{ui:Export}} | Jedan meni: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Marked PDF}} |
| {{ui:Scale}} | {{ui:Calibrate}} ({{key:K}}), {{ui:Check}} ({{key:D}}) i lista {{ui:Preset}} |
| {{ui:Takeoff}} | {{ui:Select}} ({{key:V}}), {{ui:Linear}} ({{key:L}}), {{ui:Area}} ({{key:A}}), {{ui:Circle}} ({{key:O}}), {{ui:Arc}} ({{key:R}}, prekidač uključeno/isključeno), {{ui:Deduct}} ({{key:E}}, prekidač uključeno/isključeno), {{ui:Cut-out}} ({{key:X}}), {{ui:Count}} ({{key:C}}), {{ui:Auto count}} ({{key:S}}) |
| {{ui:Edit}} | {{ui:Undo}} ({{key:Mod+Z}}), {{ui:Redo}} ({{key:Mod+Y}}), {{ui:Copy}} ({{key:Mod+C}}), {{ui:Paste}} ({{key:Mod+V}}) i {{ui:More}}: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}}, {{ui:Select none}} |
| {{ui:View}} | {{ui:Fit page}} ({{key:F}}), {{ui:Fit width}} ({{key:W}}) |

Alat koji koristite prikazan je pritisnut. Dugmad {{ui:Arc}} i {{ui:Deduct}} ostaju pritisnuta dok su uključena.

## Listovi (lijevo)

- **Pretraži listove** filtrira listu po nazivu lista, nazivu datoteke ili oznaci stranice.
- Svaki list prikazuje sličicu (crta se pri pomjeranju), naziv i ili razmjeru ili **Nema razmjere**.
- Desna strana svakog reda pokazuje koliko oznaka lista ima. Dok je stavka istaknuta, umjesto toga pokazuje koliko oznaka te stavke ima na listu.
- Kliknite list da ga otvorite. {{key:PageDown}} i {{key:PageUp}} prelaze na sljedeći i prethodni list na listi.
- Kad predmjer obuhvata PDF-ove koji nisu otvoreni, napomena ispod liste ih navodi. Pogledajte [Spašavanje i ponovno otvaranje predmjera](topic:save-and-reopen).

Nazivi listova dolaze iz PDF-a: oznaka stranice, na primjer `A-101`, postaje naziv lista. Stranica bez oznake dobija naziv po svojoj datoteci i broju stranice, poput "Plans, page 3". Kad je otvoreno više PDF-ova, označeni listovi prikazuju i naziv datoteke.

## List (sredina)

- Traka ispod lista prikazuje naziv lista i njegovu razmjeru, ili „Još nema razmjere: odaberite unaprijed zadanu ili kalibrišite“. Njena dugmad: {{ui:MarkupCraft}} (kad ta aplikacija može preuzeti PDF; pogledajte [Pokretanje predmjera i otvaranje skupa planova](topic:open-plan-set)), {{ui:Compare}} (starija verzija lista preko ovog: [Uporedba revidiranog lista](topic:compare-revisions)), „(n) za provjeru“ (označene oznake, kad ih ima) i {{ui:3D}} ([3D pregled provjere](topic:check-in-3d)).
- Prije nego što se otvori ijedan PDF, sredina prikazuje kratak vodič u pet koraka.
- Točkić miša zumira na mjestu pokazivača. Prevucite za pomjeranje prikaza. Pogledajte [Tastatura i miš](topic:keyboard).
- Dok koristite {{ui:Auto count}}, na vrhu lista se pojavljuje traka sa svojim kontrolama.

## Stavke (desno)

Na vrhu je lista {{ui:Bid area}}: zgrada, sprat ili faza u koju idu nove oznake ([Ponudne cjeline](topic:bid-areas)).

- {{ui:New item}} otvara mali obrazac: naziv, tip ({{ui:Linear (length)}}, {{ui:Area}} ili {{ui:Count}}) i {{ui:Add}}.
- Lista prikazuje boju, ikonu tipa, naziv i količinu svake stavke. Kliknite stavku da crtate njome i istaknete njene oznake na svakom listu. Kliknite je ponovo da prestane isticanje.
- Ispod liste, **Stavka: (naziv)** je uređivač stavke: naziv, tip, boja, jedinica, visina ili dubina, otpad, stope materijala i rada, izmjerene vrijednosti i {{ui:Assembly}}. Pogledajte [Kreiranje stavki predmjera](topic:create-items).
- **Odabrana oznaka** se pojavljuje kad odaberete oznaku: kojoj stavki pripada, njen list, njena mjerenja i dugmad poput {{ui:Add a cut-out}} i {{ui:Delete mark}}. Kad je odabrano više oznaka, postaje **Odabrane oznake**: koliko je čega po stavci, i {{ui:Copy}}, {{ui:Duplicate}}, {{ui:Cut}} i {{ui:Delete marks}}.
- Uređivač stavke završava s {{ui:Copy item}} i {{ui:Duplicate item}}: stavka sa svojim sklopom i troškovima, bez oznaka. Pogledajte [Kopiranje, lijepljenje i dupliciranje oznaka](topic:copy-paste).

## Količine (dolje)

- {{ui:By item}} navodi svaku stavku i komponente njenog sklopa s količinom, otpadom, stopama i ukupnim troškovima. Otpad i stope možete upisati direktno u tabelu.
- {{ui:By sheet}} navodi količinu svake stavke na svakom listu.
- Upozorenje koje počinje s **Nepotpuno:** pojavljuje se kad nešto nije uračunato u zbirove.
- {{ui:Job total}} je s desne strane zaglavlja.
- Dugme sa strelicom na krajnjoj desnoj strani skriva ili prikazuje tabelu da list dobije više prostora.

Pogledajte [Čitanje količina i predračuna](topic:read-quantities).

## Statusna traka (dolje)

Slijeva nadesno: mjerenje uživo dok crtate (dužina, površina, poluprečnik ili rezultat provjere), polje {{ui:Type}} dok ukucavate dužinu, poruke iz TakeoffCraft-a, podsjetnik „Shift hvata na 45°“ (ili „Hvata na 45°; Shift oslobađa ugao“ kad je to uključeno u [Postavkama](topic:settings)), dugme {{ui:Snap}} (hvatanje za linije crteža, uključeno kad je istaknuto; {{key:F3}}), i procenat zumiranja.

:::tip
Pročitajte statusnu traku kad nešto ne uspije. TakeoffCraft tamo objašnjava zašto je odbio klik, na primjer „Ovaj list još nema razmjeru“.
:::

## Ostali rasporedi

Sve gore navedeno je raspored {{ui:CadCraft classic}}, početni. {{ui:Settings}} ({{key:Mod+,}}) › {{ui:Global}} › {{ui:Layout}} nudi još dva; isti alati i tipke rade u sva tri, a ponovni izbor {{ui:CadCraft classic}} vraća svaku kontrolu na mjesto gdje je bila.

| Raspored | U TakeoffCraft-u |
|---|---|
| {{ui:Ribbon and project browser}} | {{ui:Takeoff ribbon}} preko vrha ([Meniji, tipke i miš](topic:menus-keys-and-mouse)), traka za aktivni alat, kartica za svaki otvoreni list (Model i rasporedi crteža su takođe listovi) sa unaprijed zadanim razmjerama i {{ui:Fit page}} ispod lista. Lijevi panel sadrži {{ui:Properties}} (odabrana stavka, napomena ili oznaka) iznad {{ui:Takeoff browser}}: {{ui:Sheets}} (kliknite jedan da ga otvorite u kartici), {{ui:Conditions}} (kliknite jedan da crtate njime) i {{ui:Estimate}} (ukupno svake stavke i ukupan iznos posla); sličice su njegova druga kartica. |
| {{ui:Toolbox and info box}} | Traka s alatima iznad lista, info okvir s {{ui:Bid area}}, aktivnim alatom ili odabirom i trakom lista, kolona alata za predmjer lijevo, kartica za svaki list, i {{ui:Snap}} i zumiranje ispod lista. |

Dok je otvoren [3D pregled provjere](topic:check-in-3d), kartice listova i traka ispod lista se sklanjaju; zatvorite 3D pregled da ponovo mjerite. Na telefonu uvijek radi raspored za telefon.

## Puni ekran i teme

Dugme {{ui:Full screen}} u gornjoj traci ili {{key:Ctrl+Shift+F}} (Control na svim platformama, takođe na Macu) prebacuje redom između normalnog, punog ekrana i punog ekrana sa sakrivenim trakama. Kad su trake sakrivene, pomjerite pokazivač do gornje ivice da ih ponovo prikažete.

{{ui:Paper}} je svijetla tema, a {{ui:Model}} tamna. U {{ui:Model}} crtež je prikazan obrnuto (svijetle linije na tamnom) samo na ekranu; izvozi se nikad ne mijenjaju.
