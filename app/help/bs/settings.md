---
title: Postavke TakeoffCraft-a
summary: Prikaži inče na 1/16, 1/8 ili 1/4, počni nove stavke s postotkom otpada, izaberi gdje počinje klizač Auto brojanja, hvataj za linije crteža ili za 45° bez držanja Shift-a, postavi koliko široka vrata Popuna prostorije zatvara, i izaberi indikator ugla 3D pogleda.
keywords: postavke, preferencije, opcije, preciznost, razlomci, inči, zaokruživanje, otpad, zadani otpad, auto brojanje, prag, podudaranje, klizač, hvatanje, 45, ugao, shift, kocka pogleda, ikona osa, indikator ugla, 3d
from: bca3f0ed
---

Otvori {{ui:Postavke}} preko zupčanika u traci aplikacije ili pritiskom na {{key:Mod+,}}. Prva kartica, {{ui:TakeoffCraft}}, sadrži postavke koje pripadaju ovoj aplikaciji; {{ui:Opšte}} sadrži one koje dijele sve CadCraft aplikacije (tema, paneli, traka s alatima). Postavke TakeoffCraft-a postoje samo u aplikaciji: mijenjaš ih ovdje, a ovaj preglednik ih pamti. {{ui:Vrati postavke TakeoffCraft-a}} ih vraća na početne vrijednosti.

## Stope i inči

Prikaži dužine zaokružene na najbliži **1/16"** (početna), **1/8"** ili **1/4"**. Ovo mijenja kako se dužine čitaju na listu, u panelima, u količinama i u statusnoj traci.

Zaokružuje se samo prikaz. Količine, troškovi i izvozi računaju se iz tačnih dužina, a izvozi uvijek prikazuju 1/16".

## Otpad za početak

Postotak otpada s kojim počinje svaka nova stavka: 0% (početna), 2%, 3%, 5%, 7.5%, 10%, 15% ili 20%. I dalje možeš upisati drugi otpad za svaku stavku, u uređivaču stavke ili direktno u tabeli količina. Stavke koje već imaš zadržavaju svoj otpad.

## Auto brojanje: gdje počinje klizač podudaranja

Gdje se klizač {{ui:Podudaranje}} nalazi kad se završi pretraga [Auto brojanja](topic:auto-count), od 50% do 95%; 75% je početna vrijednost. Niža vrijednost nudi više sličnih rezultata za odbacivanje; viša nudi manje. Klizač i dalje možeš pomjerati tokom svakog pregleda.

## Hvatanje za vlastite linije crteža

Uključeno je na početku. Dok mjeriš ili kalibriraš, tačka blizu linije PDF-a skače na njen kraj, sredinu, sjecište ili najbližu tačku na njoj. {{key:F3}} i {{ui:Hvatanje}} u statusnoj traci takođe ga uključuju i isključuju. Više: [Hvatanje za linije crteža](topic:snap-to-the-drawing).

## Popuna prostorije: koliko širok otvor zatvara

{{ui:Popuna prostorije zatvara otvore do}} postavlja koliko širok otvor vrata ili prolaz alat {{ui:Prostorija}} smatra zatvorenim: od 3'-0" do 8'-0", a na početku 4'-0". Šire od tvojih najširih vrata dozvoljava prostoriji da zađe u sljedeću; uže od vrata ostavlja prostoriju otvorenom. Pogledaj [Popuni prostoriju jednim klikom](topic:measure-areas#fill-a-room-with-one-click).

## Hvatanje za 45° bez držanja Shift-a

Isključeno na početku. Kad je uključeno, linije, obrisi, izrezi i prevučeni uglovi idu pod 0°, 45°, 90° ili 135° od posljednje tačke bez držanja {{key:Shift}}; drži {{key:Shift}} da klikneš pod bilo kojim uglom. Statusna traka tada kaže "Hvata na 45°; Shift oslobađa ugao". Tačka koju klikneš na krivini luka i krugovi se nikad ne hvataju; kraj luka se hvata.

## Veličina oznake brojanja

Koliko su velike tačke brojanja: {{ui:Vrlo mala}}, {{ui:Mala}}, {{ui:Srednja}} (početna: veličina kakvu su tačke uvijek imale) ili {{ui:Velika}}. Veličina se održava na ekranu pri svakom uvećanju, a označeni PDF crta svaku tačku iste veličine na papiru, bez obzira na veličinu lista, pa PDF na 100% izgleda kao ekran. Više: [Brojanje ručno](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Indikator ugla

Samo za [3D pregled za provjeru](topic:check-in-3d): {{ui:Kocka pogleda}} (početna: kocka u gornjem desnom uglu koju klikneš, prevlačiš i okrećeš), {{ui:Ikona osa}} (mali X, Y, Z oznaka u donjem desnom uglu) ili {{ui:Ništa}}. Mijenja se odmah i čuva se u ovom pregledniku. Ravni list nikad ne prikazuje nijedan.

## Alat putanje: najveći razmak koji spaja

{{ui:Alat putanje: najveći razmak za spajanje}} je koliko mogu biti udaljeni krajevi dvije linije, a da se i dalje računaju kao jedna putanja, u tačkama PDF-a (od 0.05 do 60; 1.5 na početku). Linije crteža često staju malo prije jedna druge. Veći razmak više spaja; manji drži linije odvojenim. {{key:[}} i {{key:]}} ga mijenjaju dok biraš, a ovo polje prati. Pogledaj [Odabir linija](topic:pick-the-lines).
