---
title: Merenje linijskih deonica
summary: Uzmite zidove, cevovode, obrade i druge dužine kao deonice, sa pravim segmentima, lukovima i hvatanjem na 45 stepeni pomoću Shift.
keywords: linijski, dužina, deonica, polilinija, zidovi, lf, linearne stope, luk, kriva, 45 stepeni, ortogonalno, hvatanje, segmenti, polidužina, odbitak, otvor, vrata, razmak, unos, upisan, koordinate, rastojanje, direktno rastojanje, polarno
from: c669deff
---

Linijska stavka meri dužinu. Svaka deonica je lanac tačaka: pravi segmenti, i lukovi gde uključite režim luka. Stavka može imati koliko god deonica na koliko god listova.

Pre početka: list treba da ima razmeru ([Postavljanje razmere](topic:set-the-scale)), i potrebna vam je linijska stavka ([Pravljenje stavki predmera](topic:create-items)).

Na vektorskom PDF-u, vaši klikovi se hvataju za sopstvene linije crteža: krajeve, sredine i preseke ([Hvatanje za linije crteža](topic:snap-to-the-drawing); {{key:F3}} ga isključuje).

## Crtanje deonice

1. Kliknite linijsku stavku pod {{ui:Stavke}}.
2. Izaberite {{ui:Linijski}} na traci alata ili pritisnite {{key:L}}.
3. Kliknite početak deonice.
4. Kliknite svaki ugao duž nje.
   Statusna traka prikazuje „Dužina“ (deonica do sada, do pokazivača) i „segment“ (segment koji crtate), u stopama i inčima.
5. Završite deonicu: dvaput kliknite poslednju tačku, pritisnite {{key:Enter}} ili desno kliknite.
   Deonica se crta bojom stavke i postaje izabrana oznaka. Dužina stavke u listi {{ui:Stavke}} i tabeli {{ui:Količine}} raste.

Alatka ostaje na {{ui:Linijski}}, pa možete odmah početi sledeću deonicu. Pritisnite {{key:Esc}} da se vratite na {{ui:Izaberi}}.

Dok crtate:

- {{key:Backspace}} (ili {{key:Delete}}) uklanja poslednju tačku.
- {{key:Esc}} odbacuje nedovršenu deonicu.
- Prevlačenje pomera list, a točkić zumira, bez dodavanja tačaka.

:::mac
Na Mac tačpedu, desni klik je dvoprstni klik (uključite sekundarni klik u Sistemskim podešavanjima, pod Tačped). TakeoffCraft čita samo sekundarno dugme, pa se Control-klik može uzeti kao običan klik i dodati tačku. Dvoklik ili {{key:Enter}} uvek završavaju.
:::

:::touch
Na ekranu osetljivom na dodir, dodirnite da postavite tačke, prevucite jednim prstom da pomerate i stisnite dvama da uvećate. Završite dugim pritiskom, dvostrukim dodirom ili sa {{ui:Završi}} u traci ispod lista ({{ui:Iza}} vraća poslednju tačku). Pogledajte [Rešavanje problema](topic:troubleshooting#touch-screens).
:::

## Prave linije u koracima od 45°

Držite {{key:Shift}} dok postavljate tačku. Segment od poslednje tačke se hvata za najbliži pravac 0°, 45°, 90° ili 135°, zadržavajući dužinu koju ste prevukli. Statusna traka podseća: „Shift hvata na 45°“.

U režimu luka to se primenjuje na mesto gde luk završava: tetiva luka ide u koracima od 45° od mesta gde počinje. Tačka koju kliknete na krivoj se nikad ne hvata.

## Lukovi i krivi zidovi

1. Dok crtate deonicu, postavite tačku gde kriva počinje.
2. Uključite režim luka: izaberite {{ui:Luk}} na traci alata ili pritisnite {{key:R}}. Dugme ostaje pritisnuto.
3. Kliknite bilo koju tačku na krivoj, negde na sredini.
   Statusna traka dodaje „(luk: kliknite gde završava)“, a pregled se savija kroz vašu tačku.
4. Kliknite mesto gde kriva završava.
   Luk je dodat. Njegova dužina je tačna dužina luka, a ne niz kratkih tetiva.
5. Kliknite drugu tačku na sledećoj krivoj i njen kraj da nastavite crtanje lukova, ili pritisnite {{key:R}} ponovo da se vratite na prave segmente.

{{key:Backspace}} ili {{key:Esc}} prvo odbacuju tačku na krivoj na čekanju; pritisnite ponovo da uklonite tačke kao obično.

## Unos dužina i koordinata

Posle prve tačke možete ukucati gde ide sledeća umesto da kliknete. Ukucajte cifru, `@` ili `#`: otvara se polje {{ui:Unos}} u statusnoj traci sa onim što ste ukucali. Pritisnite {{key:Enter}} da postavite tačku; polje ostaje otvoreno za sledeću.

| Unos | Sledeća tačka ide |
|---|---|
| `12'6"` | 12'-6" od poslednje tačke, ka pokazivaču (pokažite pravac, pa ukucajte dužinu) |
| `12'6"<45` | 12'-6" pod 45°, brojano suprotno kazaljci na satu od desne strane ekrana (`<90` je gore, `<-90` dole) |
| `@6',-4'` | 6' desno i 4' dole od poslednje tačke |
| `6',4'` (ili `#6',4'`) | 6' desno i 4' gore od prve tačke ove deonice |

Dužine se unose kao i svuda u TakeoffCraft-u ([Formati unosa](topic:entry-formats)): `12'-6 1/2"`, `12.5` (stope), `30"`, `3.2 m`. „Desno“ i „gore“ su kako vidite list, i kada je PDF strana okrenuta.

{{key:Enter}} na praznom polju završava deonicu, kao {{key:Enter}} na listu; {{key:Esc}} zatvara polje i ostavlja deonicu u toku. Unete tačke prolaze ista pravila kao klikovi: odbici, lukovi i zatvaranje površine rade svi. Isto polje radi u {{ui:Površina}} i {{ui:Izrez}}; posle centra kruga uzima poluprečnik.

## Odbijanje dela deonice

Zidna deonica koja prolazi pored vrata ili izloga može se nacrtati pravo kroz, a da se broji samo zid: segmenti preko otvora su **odbici**. Crtaju se isprekidano i tanko, i ne broje se.

Dok crtate:

1. Postavite tačku gde otvor počinje.
2. Izaberite {{ui:Odbitak}} na traci alata ili pritisnite {{key:E}}. Dugme ostaje pritisnuto, a statusna traka kaže da su sledeći segmenti odbici.
3. Kliknite gde otvor završava. Segment se crta isprekidano; „Dužina“ u statusnoj traci ga izostavlja.
4. Pritisnite {{key:E}} ponovo i nastavite duž zida.

Posle crtanja: izaberite deonicu. Pod **Izabrana oznaka**, svaki segment ima polje {{ui:Odbitak}}: štiklirajte ga da odbijete taj segment, odštiklirajte ga da se opet broji. Svaka promena je jedan korak opoziva.

Deonica uvek zadržava bar jedan segment koji se broji. Panel tada prikazuje **Odbici** (odbijena dužina) i **Nacrtano** (cela deonica); **Dužina**, količina stavke, površina zida i troškovi svi koriste dužinu bez odbitaka. 3D provera ostavlja prazninu u zidu, označeni PDF crta odbitke isprekidano, a izvezeni list **Oznake** ih navodi.

Pomeranje ugla čuva odbitke. Dodavanje ili uklanjanje tačaka (crtanjem deonice ponovo) počinje bez njih.

## Pogledajte detalje deonice

Izaberite {{ui:Izaberi}} ({{key:V}}) i kliknite deonicu. **Izabrana oznaka** desno prikazuje:

- stavku kojoj pripada (izaberite drugu linijsku stavku u listi da premestite deonicu tamo),
- list,
- **Dužinu** u stopama i inčima i u LF,
- broj **Segmenata**, i **Površinu zida** kada stavka ima visinu,
- dužinu svakog segmenta, uz „(luk)“ posle lukova, i njegovo polje {{ui:Odbitak}}.

Na listu je svaki segment izabrane deonice označen svojom dužinom.

## Ispravka deonice

- **Pomeranje tačke**: izaberite deonicu, pa prevucite jednu od njenih kvadratnih ugaonih ručica. Držite {{key:Shift}} da hvatate pomereni segment na korake od 45°. Luk zadržava svoje ispupčenje.
- **Savijanje luka**: izabrana deonica pokazuje okrugle ručice na sredini svakog luka. Prevucite je: luk prolazi kroz mesto gde pustite, pa se više ili manje izbočava, ili ide na drugu stranu. Prevučen na pravu liniju između svojih krajeva, postaje prav segment. {{key:Mod+Z}} to opoziva („Savijanje luka“).
- **Brisanje deonice**: izaberite je i pritisnite {{key:Delete}}, izaberite {{ui:Izbriši}} u meniju {{ui:Više}} trake alata, ili {{ui:Obriši oznaku}} u panelu.
- **Opoziv**: {{key:Mod+Z}}; ponovo sa {{key:Mod+Y}}.

Još ne možete umetnuti tačku u sredinu deonice. Obrišite deonicu i nacrtajte je ponovo.

## Površina zida

Dajte linijskoj stavci {{ui:Visina}} (na primer `9'-0"`). Tada prijavljuje **Površinu zida (A)** = dužina × visina, u SF (ili m² za metričku stavku), a površina zida ide u kolonu napomena izvoza tabele. Koristite je u sklopovima za daske, farbu ili izolaciju: pogledajte [Sklopovi i formule](topic:assemblies).
