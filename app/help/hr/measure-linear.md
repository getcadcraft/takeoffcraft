---
title: Mjerenje linearnih dionica
summary: Uzmite zidove, cjevovode, obloge i druge duljine kao dionice, s ravnim segmentima, lukovima i hvatanjem pod 45 stupnjeva uz Shift.
keywords: linearno, duljina, dionica, polilinija, zidovi, lf, linearne stope, luk, krivulja, 45 stupnjeva, ortogonalno, hvatanje, segmenti, duljina polilinije, odbitak, otvor, vrata, razmak, upis, upisan, koordinate, udaljenost, izravna udaljenost, polarno
from: c669deff
---

Linearna stavka mjeri duljinu. Svaka dionica je lanac točaka: ravni segmenti i lukovi kad uključite način luka. Stavka može imati bilo koliko dionica na bilo kojem broju listova.

Prije početka: list treba mjerilo ([Postavljanje mjerila](topic:set-the-scale)), a potrebna vam je linearna stavka ([Stvaranje stavki predmjera](topic:create-items)).

Na vektorskom PDF-u vaši klikovi se hvataju na linije samog crteža: krajeve, polovišta i sjecišta ([Hvatanje na linije crteža](topic:snap-to-the-drawing); {{key:F3}} ga isključuje).

## Nacrtajte dionicu

1. Kliknite linearnu stavku pod {{ui:Stavke}}.
2. Odaberite {{ui:Linearno}} na traci alata ili pritisnite {{key:L}}.
3. Kliknite početak dionice.
4. Kliknite svaki kut duž nje.
   Statusna traka prikazuje „Duljina“ (dionica do pokazivača) i „segment“ (segment koji crtate), u stopama i inčima.
5. Završite dionicu: dvaput kliknite zadnju točku, pritisnite {{key:Enter}} ili desno kliknite.
   Dionica se crta bojom stavke i postaje odabrana oznaka. Duljina stavke na popisu {{ui:Stavke}} i u tablici {{ui:Količine}} se povećava.

Alat ostaje na {{ui:Linearno}}, pa možete odmah započeti sljedeću dionicu. Pritisnite {{key:Esc}} za povratak na {{ui:Odaberi}}.

Dok crtate:

- {{key:Backspace}} (ili {{key:Delete}}) uklanja zadnju točku.
- {{key:Esc}} odbacuje nedovršenu dionicu.
- Povlačenje pomiče list, a kotačić zumira, bez dodavanja točaka.

:::mac
Na Mac trackpadu desni klik je klik dvama prstima (uključite sekundarni klik u Postavkama sustava, pod Trackpad). TakeoffCraft čita samo sekundarnu tipku, pa se Control-klik može uzeti kao običan klik i dodati točku. Dvostruki klik ili {{key:Enter}} uvijek završavaju.
:::

:::touch
Na zaslonu osjetljivom na dodir dodirnite za postavljanje točaka, povucite jednim prstom za pomicanje i stisnite dvama prstima za zumiranje. Završite dugim pritiskom, dvostrukim dodirom ili {{ui:Završi}} u traci ispod lista ({{ui:Straga}} vraća zadnju točku). Pogledajte [Rješavanje problema](topic:troubleshooting#touch-screens).
:::

## Ravne linije u koracima od 45°

Držite {{key:Shift}} dok postavljate točku. Segment od zadnje točke hvata se na najbliži smjer 0°, 45°, 90° ili 135°, zadržavajući duljinu koju ste povukli. Statusna traka podsjeća: „Shift hvata na 45°“.

U načinu luka to vrijedi za kraj luka: tetiva luka ide u koracima od 45° od mjesta gdje počinje. Točka koju kliknete na krivulji nikad se ne hvata.

## Lukovi i zakrivljeni zidovi

1. Dok crtate dionicu, postavite točku na kojoj krivulja počinje.
2. Uključite način luka: odaberite {{ui:Luk}} na traci alata ili pritisnite {{key:R}}. Gumb ostaje pritisnut.
3. Kliknite bilo koju točku na krivulji, negdje u sredini.
   Statusna traka dodaje „(luk: kliknite gdje završava)“, a pregled se savija kroz vašu točku.
4. Kliknite mjesto gdje krivulja završava.
   Luk je dodan. Njegova duljina je točna duljina luka, a ne niz kratkih tetiva.
5. Kliknite sljedeću točku na sljedećoj krivulji i njezin kraj da nastavite crtati lukove, ili ponovno pritisnite {{key:R}} za povratak na ravne segmente.

{{key:Backspace}} ili {{key:Esc}} prvo odbacuju točku na krivulji na čekanju; pritisnite ponovno za uklanjanje točaka kao obično.

## Upis duljina i koordinata

Nakon prve točke možete upisati gdje ide sljedeća, umjesto da kliknete. Upišite znamenku, `@` ili `#`: u statusnoj traci otvara se okvir {{ui:Upis}} s onim što ste upisali. Pritisnite {{key:Enter}} za postavljanje točke; okvir ostaje otvoren za sljedeću.

| Upis | Sljedeća točka ide |
|---|---|
| `12'6"` | 12'-6" od zadnje točke, prema pokazivaču (pokažite smjer, pa upišite duljinu) |
| `12'6"<45` | 12'-6" pod 45°, brojano suprotno kazaljci na satu od desne strane zaslona (`<90` je gore, `<-90` dolje) |
| `@6',-4'` | 6' desno i 4' dolje od zadnje točke |
| `6',4'` (ili `#6',4'`) | 6' desno i 4' gore od prve točke ove dionice |

Duljine se upisuju kao i u ostatku programa TakeoffCraft ([Formati unosa](topic:entry-formats)): `12'-6 1/2"`, `12.5` (stope), `30"`, `3.2 m`. „Desno“ i „gore“ su kako vidite list, i kad je stranica PDF-a okrenuta.

{{key:Enter}} na praznom okviru završava dionicu, kao i {{key:Enter}} na listu; {{key:Esc}} zatvara okvir i dionica se nastavlja. Upisane točke prolaze ista pravila kao i klikovi: odbici, lukovi i zatvaranje površine rade. Isti okvir radi i u {{ui:Površina}} i u {{ui:Otvor}}; nakon središta kružnice uzima polumjer.

## Odbitak dijela dionice

Dionica zida koja prolazi pored vrata ili izloga može se nacrtati ravno kroz otvor, a brojati se samo zid: segmenti preko otvora su **odbici**. Crtaju se isprekidano i tanko te se ne broje.

Dok crtate:

1. Postavite točku na mjestu gdje otvor počinje.
2. Odaberite {{ui:Odbitak}} na traci alata ili pritisnite {{key:E}}. Gumb ostaje pritisnut, a statusna traka kaže da su sljedeći segmenti odbici.
3. Kliknite mjesto gdje otvor završava. Segment se crta isprekidano; „Duljina“ u statusnoj traci ga izostavlja.
4. Pritisnite {{key:E}} ponovno i nastavite duž zida.

Nakon crtanja: odaberite dionicu. Pod **Odabrana oznaka**, svaki segment ima okvir {{ui:Odbitak}}: označite ga da odbijete taj segment, odnosno odznačite da ga ponovno brojite. Svaka promjena je jedan korak poništavanja.

Dionica uvijek zadržava barem jedan segment koji se broji. Ploča tada prikazuje **Odbici** (odbijena duljina) i **Nacrtano** (cijela dionica); **Duljina**, količina stavke, površina zida i troškovi koriste duljinu bez odbitaka. 3D pregled provjere ostavlja prazninu u zidu, označeni PDF crta odbitke isprekidano, a izvezeni list **Oznake** ih navodi.

Pomicanje kuta čuva odbitke. Dodavanje ili uklanjanje točaka (ponovnim crtanjem dionice) počinje bez njih.

## Pogledajte pojedinosti dionice

Odaberite {{ui:Odaberi}} ({{key:V}}) i kliknite dionicu. **Odabrana oznaka** s desne strane prikazuje:

- stavku kojoj pripada (drugu linearnu stavku s popisa odaberite da dionicu premjestite tamo),
- list,
- **Duljinu** u stopama i inčima te u LF,
- broj **Segmenata**, i **Površinu zida** kad stavka ima visinu,
- duljinu svakog segmenta, uz „(luk)“ nakon lukova, i njegov okvir {{ui:Odbitak}}.

Na listu je svaki segment odabrane dionice označen svojom duljinom.

## Popravak dionice

- **Pomaknite točku**: odaberite dionicu, zatim povucite jednu od njezinih kvadratnih ručki kuta. Držite {{key:Shift}} da se pomaknuti segment hvata na korake od 45°. Luk zadržava svoje savijanje.
- **Savijte luk**: odabrana dionica prikazuje okruglu ručku u sredini svakog luka. Povucite je: luk prolazi kroz mjesto gdje ispustite miš, pa se više ili manje savija ili savija na drugu stranu. Povučen na ravnu liniju između svojih krajeva postaje ravni segment. {{key:Mod+Z}} to poništava („Savijanje luka“).
- **Izbrišite dionicu**: odaberite je i pritisnite {{key:Delete}}, odaberite {{ui:Delete}} u izborniku {{ui:Više}} na traci alata ili {{ui:Izbriši oznaku}} na ploči.
- **Poništi**: {{key:Mod+Z}}; ponovi s {{key:Mod+Y}}.

Točku u sredinu dionice još ne možete umetnuti. Izbrišite dionicu i ponovno je nacrtajte.

## Površina zida

Dajte linearnoj stavki {{ui:Visina}} (npr. `9'-0"`). Tada prikazuje **Površinu zida (A)** = duljina × visina, u SF (ili m² za metričku stavku), a površina zida ide u stupac bilješki izvezene tablice. Koristite je u sklopovima za ploče, boju ili izolaciju: pogledajte [Sklopovi i formule](topic:assemblies).
