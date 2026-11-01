---
title: Ekran programa TakeoffCraft
summary: Obilazak prozora po nazivima na ekranu - traka sa alatkama, lista listova, list, panel Stavke, tabela Količine i statusna traka.
keywords: ekran, raspored, rasporedi, traka, pregledač projekta, kutija sa alatima, informativni okvir, traka sa alatkama, paneli, lista listova, panel stavki, količine, statusna traka, obilazak, sučelje
from: ab1115e0
---

TakeoffCraft ispunjava prozor pregledača ispod gornje trake aplikacije CadCraft. Od vrha ka dnu i sleva udesno:

| Deo | Gde | Čemu služi |
|---|---|---|
| Gornja traka aplikacije | Samo na vrhu | Naziv aplikacije, verzija, {{ui:O programu TakeoffCraft}}, {{ui:Pomoć}} ({{key:F1}}), {{ui:Sačuvaj za rad van mreže}}, {{ui:Podešavanja}} ({{key:Mod+,}}), dugme {{ui:Ceo ekran}} i prekidač teme {{ui:Paper}} / {{ui:Model}}. |
| Traka sa alatkama | Ispod gornje trake | Sve naredbe, po grupama: {{ui:Datoteka}}, {{ui:Izvezi}}, {{ui:Razmera}}, {{ui:Predmer}}, {{ui:Uredi}}, {{ui:Pogled}}. |
| Listovi | Levo | Svaka stranica svakog otvorenog PDF-a, sa sličicom, njenom razmerom i brojem oznaka. |
| List | Sredina | Otvorena stranica. Merite ovde. |
| Stavke | Desno | Stavke vašeg predmera, podešavanja izabrane stavke i izabrana oznaka. |
| Količine | Dole | Količine i troškovi po stavci ili po listu, i ukupan iznos posla. |
| Statusna traka | Samo na dnu | Merenje uživo, poruke, savet o 45° i zumiranje. |

## Traka sa alatkama

Zadržite pokazivač na bilo kom dugmetu da vidite šta radi i kog je tastera.

| Grupa | Dugmad |
|---|---|
| {{ui:Datoteka}} | {{ui:Novi}} (prazan predmer), {{ui:Otvori PDF-ove}} ({{key:Mod+O}}), {{ui:Otvori predmer}} (projekat `.takeoff.json`), {{ui:Sačuvaj predmer}} ({{key:Mod+S}}) |
| {{ui:Izvezi}} | Jedan meni: {{ui:XLSX}}, {{ui:CSV}}, {{ui:PDF sa oznakama}} |
| {{ui:Razmera}} | {{ui:Kalibriši}} ({{key:K}}), {{ui:Proveri}} ({{key:D}}) i lista {{ui:Unapred podešeno}} |
| {{ui:Predmer}} | {{ui:Izaberi}} ({{key:V}}), {{ui:Linijski}} ({{key:L}}), {{ui:Površina}} ({{key:A}}), {{ui:Krug}} ({{key:O}}), {{ui:Luk}} ({{key:R}}, prekidač uključeno/isključeno), {{ui:Odbitak}} ({{key:E}}, prekidač uključeno/isključeno), {{ui:Izrez}} ({{key:X}}), {{ui:Prebroj}} ({{key:C}}), {{ui:Automatsko brojanje}} ({{key:S}}) |
| {{ui:Uredi}} | {{ui:Opozovi}} ({{key:Mod+Z}}), {{ui:Ponovi}} ({{key:Mod+Y}}), {{ui:Kopiraj}} ({{key:Mod+C}}), {{ui:Nalepi}} ({{key:Mod+V}}), i {{ui:Više}}: {{ui:Iseci}}, {{ui:Kopiraj}}, {{ui:Nalepi}}, {{ui:Nalepi na mestu}}, {{ui:Dupliraj}}, {{ui:Izbriši}}, {{ui:Izaberi sve}}, {{ui:Poništi izbor}} |
| {{ui:Pogled}} | {{ui:Uklopi stranicu}} ({{key:F}}), {{ui:Uklopi širinu}} ({{key:W}}) |

Alat koji koristite prikazan je kao pritisnut. Dugmad {{ui:Luk}} i {{ui:Odbitak}} ostaju pritisnuta dok su uključena.

## Listovi (levo)

- **Pretraga listova** filtrira listu po nazivu lista, nazivu datoteke ili oznaci stranice.
- Svaki list prikazuje sličicu (crta se dok skrolujete), njegov naziv i ili njegovu razmeru ili **Nema razmere**.
- Desna strana svakog reda pokazuje koliko oznaka ima list. Dok je stavka istaknuta, prikazuje koliko oznaka te stavke ima na listu.
- Kliknite list da ga otvorite. {{key:PageDown}} i {{key:PageUp}} prelaze na sledeći i prethodni list na listi.
- Kada predmer obuhvata PDF-ove koji nisu otvoreni, beleška ispod liste ih navodi. Pogledajte [Čuvanje i ponovno otvaranje predmera](topic:save-and-reopen).

Nazivi listova dolaze iz PDF-a: oznaka stranice kao što je `A-101` postaje naziv lista. Stranica bez oznake dobija naziv po svojoj datoteci i broju stranice, kao „Planovi, stranica 3“. Kada je otvoreno više PDF-ova, listovi sa oznakama takođe prikazuju naziv datoteke.

## List (sredina)

- Traka ispod lista prikazuje naziv lista i njegovu razmeru, ili „Još nema razmere: izaberite unapred podešenu ili kalibrišite“. Njena dugmad su: {{ui:MarkupCraft}} (kada ta aplikacija može da primi PDF; pogledajte [Pokretanje predmera i otvaranje skupa planova](topic:open-plan-set)), {{ui:Uporedi}} (starija verzija lista preko ovog: [Uporedite izmenjeni list](topic:compare-revisions)), „(n) za proveru“ (označene oznake, kada ih ima) i {{ui:3D}} (pogled [3D provere](topic:check-in-3d)).
- Dok nijedan PDF nije otvoren, sredina prikazuje kratak vodič u pet koraka.
- Točkić miša zumira na mestu pokazivača. Prevucite da biste pomerali pogled. Pogledajte [Tastatura i miš](topic:keyboard).
- Dok koristite {{ui:Automatsko brojanje}}, na vrhu lista se pojavljuje traka sa njenim kontrolama.

## Stavke (desno)

Na vrhu je lista {{ui:Oblast ponude}}: zgrada, sprat ili faza u koju idu nove oznake ([Oblasti ponude](topic:bid-areas)).

- {{ui:Nova stavka}} otvara mali obrazac: ime, tip ({{ui:Linijski (dužina)}}, {{ui:Površina}} ili {{ui:Prebroj}}) i {{ui:Dodaj}}.
- Lista prikazuje boju svake stavke, ikonu tipa, ime i količinu. Kliknite stavku da crtate njome i da istaknete njene oznake na svakom listu. Kliknite je ponovo da prestanete s isticanjem.
- Ispod liste, **Stavka: (ime)** je uređivač stavke: ime, tip, boja, jedinica, visina ili dubina, otpad, cene materijala i rada, izmerene vrednosti i {{ui:Sklop}}. Pogledajte [Pravljenje stavki predmera](topic:create-items).
- **Izabrana oznaka** se pojavljuje kada izaberete oznaku: kojoj stavki pripada, njen list, njena merenja i dugmad kao što su {{ui:Dodaj izrez}} i {{ui:Obriši oznaku}}. Kada je izabrano više oznaka, postaje **Izabrane oznake**: koliko čega ima po stavci, i {{ui:Kopiraj}}, {{ui:Dupliraj}}, {{ui:Iseci}} i {{ui:Obriši oznake}}.
- Uređivač stavke se završava sa {{ui:Kopiraj stavku}} i {{ui:Dupliraj stavku}}: stavka sa svojim sklopom i troškovima, bez oznaka. Pogledajte [Kopiranje, lepljenje i dupliranje oznaka](topic:copy-paste).

## Količine (dole)

- {{ui:Po stavci}} navodi svaku stavku i njene komponente sklopa sa količinom, otpadom, cenama i proširenim troškovima. Otpad i cene možete upisati direktno u tabelu.
- {{ui:Po listu}} navodi količinu svake stavke na svakom listu.
- Upozorenje koje počinje sa **Nepotpuno:** se pojavljuje kada je nešto izostavljeno iz zbirova.
- {{ui:Ukupno za posao}} je s desne strane zaglavlja.
- Dugme sa strelicom na krajnjoj desnoj strani sakriva ili prikazuje tabelu da bi list dobio više prostora.

Pogledajte [Čitanje količina i predračuna](topic:read-quantities).

## Statusna traka (dole)

Sleva udesno: merenje uživo dok crtate (dužina, površina, poluprečnik ili rezultat provere), polje {{ui:Unos}} dok kucate dužinu, poruke TakeoffCraft-a, podsetnik „Shift hvata na 45°“ (ili „Hvata na 45°; Shift oslobađa ugao“ kada je to uključeno u [Podešavanjima](topic:settings)), dugme {{ui:Hvatanje}} (hvatanje za linije crteža, uključeno kada je istaknuto; {{key:F3}}) i procenat zumiranja.

:::tip
Pročitajte statusnu traku kada nešto ne radi. TakeoffCraft tamo objašnjava zašto je odbio klik, na primer „Ovaj list još nema razmeru“.
:::

## Drugi rasporedi

Sve gore navedeno je raspored {{ui:CadCraft klasični}}, polazni. {{ui:Podešavanja}} ({{key:Mod+,}}) › {{ui:Globalno}} › {{ui:Raspored}} nudi još dva; isti alati i tasteri rade u sva tri, a ponovni izbor {{ui:CadCraft klasični}} vraća svaku kontrolu na staro mesto.

| Raspored | U programu TakeoffCraft |
|---|---|
| {{ui:Traka i pregledač projekta}} | {{ui:Traka predmera}} preko vrha ([Meniji, tasteri i miš](topic:menus-keys-and-mouse)), traka za alat koji radi, kartica za svaki otvoreni list (Model i rasporedi crteža su takođe listovi), sa unapred podešenim razmerama i {{ui:Uklopi stranicu}} ispod lista. Levi panel sadrži {{ui:Svojstva}} (izabrana stavka, beleška ili oznaka) iznad {{ui:Pregledač predmera}}: {{ui:Listovi}} (kliknite jedan da ga otvorite na kartici), {{ui:Uslovi}} (kliknite jedan da crtate njime) i {{ui:Predračun}} (ukupno svake stavke i ukupan iznos posla); sličice su njegova druga kartica. |
| {{ui:Kutija sa alatima i informativni okvir}} | Traka sa alatkama preko lista, informativni okvir sa {{ui:Oblast ponude}}, alatom koji radi ili izborom i trakom lista, kolona alata za predmer sleva, kartica za svaki list, i {{ui:Hvatanje}} i zumiranje ispod lista. |

Dok je [3D provera](topic:check-in-3d) otvorena, kartice listova i traka ispod lista se povlače u stranu; zatvorite 3D prikaz da biste ponovo merili. Na telefonu uvek radi raspored za telefon.

## Ceo ekran i teme

Dugme {{ui:Ceo ekran}} u gornjoj traci aplikacije, ili {{key:Ctrl+Shift+F}} (Ctrl na svim platformama, takođe na Mac-u), prolazi kroz normalan prikaz, ceo ekran i ceo ekran sa skrivenim trakama. Kada su trake skrivene, pomerite pokazivač do gornje ivice da ih ponovo prikažete.

{{ui:Paper}} je svetla tema, a {{ui:Model}} tamna. U {{ui:Model}} temi crtež je prikazan obrnuto (svetle linije na tamnoj podlozi) samo na ekranu; izvozi se nikad ne menjaju.
