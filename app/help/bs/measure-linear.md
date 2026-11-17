---
title: Mjerenje linijskih dionica
summary: Izmjerite zidove, cijevi, lajsne i druge dužine kao dionice, sa pravim segmentima, lukovima i hvatanjem na 45 stepeni pomoću Shift-a.
keywords: linijski, dužina, dionica, polilinija, zidovi, lf, linearne stope, luk, kriva, 45 stepeni, ortogonalno, hvatanje, segmenti, polylength, odbitak, otvor, vrata, razmak, unos, upisano, koordinate, udaljenost, direktna udaljenost, polarno
from: c669deff
---

Linijska stavka mjeri dužinu. Svaka dionica je lanac tačaka: pravi segmenti i lukovi tamo gdje uključite režim luka. Stavka može imati bilo koji broj dionica na bilo kojem broju listova.

Prije početka: list treba razmjeru ([Postavi razmjeru](topic:set-the-scale)), a potrebna vam je linijska stavka ([Kreiranje stavki predmjera](topic:create-items)).

Na vektorskom PDF-u, vaši klikovi se hvataju za linije samog crteža: krajeve, sredine i presjeke ([Hvatanje za linije crteža](topic:snap-to-the-drawing); {{key:F3}} ga isključuje).

## Crtanje dionice

1. Kliknite linijsku stavku ispod {{ui:Stavke}}.
2. Odaberite {{ui:Linijski}} na traci alata, ili pritisnite {{key:L}}.
3. Kliknite početak dionice.
4. Kliknite svaki ugao duž nje.
   Statusna traka prikazuje „Dužina“ (dionica do sada, do pokazivača) i „segment“ (segment koji crtate), u stopama i inčima.
5. Završite dionicu: dvaput kliknite posljednju tačku, pritisnite {{key:Enter}} ili kliknite desnim dugmetom.
   Dionica se crta bojom stavke i postaje odabrana oznaka. Dužina stavke na spisku {{ui:Stavke}} i u tabeli {{ui:Količine}} se povećava.

Alat ostaje na {{ui:Linijski}}, pa možete odmah početi sljedeću dionicu. Pritisnite {{key:Esc}} da se vratite na {{ui:Odaberi}}.

Dok crtate:

- {{key:Backspace}} (ili {{key:Delete}}) uklanja posljednju tačku.
- {{key:Esc}} odbacuje nedovršenu dionicu.
- Prevlačenje pomjera list, a točkić zumira, bez dodavanja tačaka.

:::mac
Na Mac tačpadu, desni klik je klik sa dva prsta (uključite sekundarni klik u Postavkama sistema, pod Tačpad). TakeoffCraft čita samo sekundarno dugme, pa Control-klik može biti shvaćen kao običan klik i dodati tačku. Dvostruki klik ili {{key:Enter}} uvijek završavaju.
:::

:::touch
Na ekranu osjetljivom na dodir, dodirnite da postavite tačke, prevucite jednim prstom za pomjeranje i štipnite sa dva za zumiranje. Završite dugim pritiskom, dvostrukim dodirom ili sa {{ui:Završi}} u traci ispod lista ({{ui:Straga}} vraća posljednju tačku). Pogledajte [Rješavanje problema](topic:troubleshooting#touch-screens).
:::

## Prave linije u koracima od 45°

Držite {{key:Shift}} dok postavljate tačku. Segment od posljednje tačke hvata se na najbliži pravac od 0°, 45°, 90° ili 135°, zadržavajući dužinu koju ste prevukli duž njega. Statusna traka vas podsjeća: „Shift hvata na 45°“.

U režimu luka važi za mjesto gdje luk završava: tetiva luka ide u koracima od 45° od mjesta gdje počinje. Tačka koju kliknete na krivoj nikad se ne hvata.

## Lukovi i zakrivljeni zidovi

1. Dok crtate dionicu, postavite tačku gdje kriva počinje.
2. Uključite režim luka: odaberite {{ui:Luk}} na traci alata ili pritisnite {{key:R}}. Dugme ostaje pritisnuto.
3. Kliknite bilo koju tačku na krivoj, negdje duž njene sredine.
   Statusna traka dodaje „(luk: kliknite gdje završava)“, a pregled se savija kroz vašu tačku.
4. Kliknite mjesto gdje kriva završava.
   Luk se dodaje. Njegova dužina je tačna dužina luka, a ne niz kratkih tetiva.
5. Kliknite drugu tačku na sljedećoj krivoj i njen kraj da nastavite crtati lukove, ili pritisnite {{key:R}} ponovo da se vratite na prave segmente.

{{key:Backspace}} ili {{key:Esc}} prvo odbacuju tačku na krivoj koja čeka; pritisnite ponovo da uklonite tačke kao i obično.

## Unos dužina i koordinata

Nakon prve tačke možete upisati gdje ide sljedeća umjesto da kliknete. Upišite cifru, `@` ili `#`: u statusnoj traci otvara se okvir {{ui:Unos}} sa onim što ste upisali. Pritisnite {{key:Enter}} da postavite tačku; okvir ostaje otvoren za sljedeću.

| Unos | Sljedeća tačka ide |
|---|---|
| `12'6"` | 12'-6" od posljednje tačke, prema pokazivaču (pokažite pravac, pa upišite dužinu) |
| `12'6"<45` | 12'-6" pod 45°, brojano suprotno od kazaljke na satu od desne strane ekrana (`<90` je gore, `<-90` dolje) |
| `@6',-4'` | 6' desno i 4' dolje od posljednje tačke |
| `6',4'` (ili `#6',4'`) | 6' desno i 4' gore od prve tačke ove dionice |

Dužine se upisuju kao i svuda u aplikaciji TakeoffCraft ([Formati unosa](topic:entry-formats)): `12'-6 1/2"`, `12.5` (stope), `30"`, `3.2 m`. „Desno“ i „gore“ su kako vidite list, i kada je PDF stranica okrenuta.

{{key:Enter}} u praznom okviru završava dionicu, kao {{key:Enter}} na listu; {{key:Esc}} zatvara okvir i ostavlja dionicu da se nastavi. Upisane tačke prolaze kroz ista pravila kao klikovi: odbici, lukovi i zatvaranje površine svi rade. Isti okvir radi u {{ui:Površina}} i {{ui:Izrez}}; nakon centra kruga uzima poluprečnik.

## Odbitak dijela dionice

Dionica zida koja prolazi kroz vrata ili izlog može se nacrtati pravo kroz i i dalje broji samo zid: segmenti preko otvora su **odbici**. Crtaju se isprekidano i tanko i ne broje se.

Dok crtate:

1. Postavite tačku gdje otvor počinje.
2. Odaberite {{ui:Odbitak}} na traci alata ili pritisnite {{key:E}}. Dugme ostaje pritisnuto, a statusna traka kaže da su sljedeći segmenti odbici.
3. Kliknite mjesto gdje otvor završava. Segment se crta isprekidano; „Dužina“ u statusnoj traci ga izostavlja.
4. Pritisnite {{key:E}} ponovo i nastavite duž zida.

Nakon crtanja: odaberite dionicu. Ispod **Odabrana oznaka**, svaki segment ima okvir {{ui:Odbitak}}: označite ga da odbijete taj segment, odznačite da ga ponovo brojite. Svaka promjena je jedan korak poništavanja.

Dionica uvijek zadržava bar jedan segment koji se broji. Panel tada prikazuje **Odbici** (odbijena dužina) i **Nacrtano** (cijela dionica); **Dužina**, količina stavke, površina zida i troškovi svi koriste dužinu bez odbitaka. 3D prikaz provjere ostavlja prazninu u zidu, označeni PDF crta odbitke isprekidano, a izvezeni list **Oznake** ih navodi.

Pomjeranje ugla zadržava odbitke. Dodavanje ili uklanjanje tačaka (ponovnim crtanjem dionice) počinje bez njih.

## Pregled detalja dionice

Odaberite {{ui:Odaberi}} ({{key:V}}) i kliknite dionicu. **Odabrana oznaka** desno prikazuje:

- stavku kojoj pripada (odaberite drugu linijsku stavku na spisku da premjestite dionicu tamo),
- list,
- **Dužinu** u stopama i inčima i u LF,
- broj **Segmenata**, i **Površinu zida** kada stavka ima visinu,
- dužinu svakog segmenta, uz „(luk)“ nakon lukova, i njegov okvir {{ui:Odbitak}}.

Na listu je svaki segment odabrane dionice označen svojom dužinom.

## Ispravka dionice

- **Pomjerite tačku**: odaberite dionicu, zatim prevucite jednu od njenih kvadratnih ručica uglova. Držite {{key:Shift}} da pomjereni segment hvata u koracima od 45°. Luk zadržava svoje ispupčenje.
- **Savijte luk**: odabrana dionica prikazuje okruglu ručicu u sredini svakog luka. Prevucite je: luk prolazi kroz mjesto gdje otpustite, pa se više, manje ili na drugu stranu izbočuje. Prevučena na pravu liniju između svojih krajeva, postaje pravi segment. {{key:Mod+Z}} to poništava („Savij luk“).
- **Izbrišite dionicu**: odaberite je i pritisnite {{key:Delete}}, odaberite {{ui:Izbriši}} u meniju {{ui:Više}} na traci alata, ili {{ui:Izbriši oznaku}} na panelu.
- **Poništi**: {{key:Mod+Z}}; ponovi sa {{key:Mod+Y}}.

Još ne možete umetnuti tačku u sredinu dionice. Izbrišite dionicu i ponovo je nacrtajte.

## Površina zida

Dajte linijskoj stavci {{ui:Visina}} (na primjer `9'-0"`). Tada prijavljuje **Površinu zida (A)** = dužina × visina, u SF (ili m² za metričku stavku), a površina zida ide u kolonu bilješki izvoza tabele. Koristite je u sklopovima za obloge, boju ili izolaciju: pogledajte [Sklopovi i formule](topic:assemblies).
