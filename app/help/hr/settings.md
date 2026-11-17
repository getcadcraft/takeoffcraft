---
title: Postavke TakeoffCraft
summary: Prikažite palce do 1/16, 1/8 ili 1/4, započnite nove stavke s postotkom gubitka, odaberite gdje počinje klizač Autobrojanja, hvatanje na linije crteža ili na 45° bez držanja Shift, postavite širinu vrata koja Ispuna prostorije zatvara i odaberite indikator kuta 3D pogleda.
keywords: postavke, preferencije, mogućnosti, preciznost, razlomci, palci, zaokruživanje, gubitak, zadani gubitak, autobrojanje, prag, podudaranje, klizač, hvatanje, 45, kut, shift, ViewCube, ikona osi, indikator kuta, 3d
from: bca3f0ed
---

Otvorite {{ui:Postavke}} zupčanikom u traci aplikacije ili pritiskom na {{key:Mod+,}}. Prva kartica, {{ui:TakeoffCraft}}, sadrži postavke koje pripadaju ovoj aplikaciji; {{ui:Općenito}} sadrži one koje dijele sve CadCraft aplikacije (tema, ploče, alatna traka). Postavke TakeoffCraft postoje samo u aplikaciji: mijenjate ih ovdje, a ovaj preglednik ih pamti. **Vrati zadane postavke TakeoffCraft** ih vraća na početne vrijednosti.

## Stope i palci

Prikažite duljine na najbliži **1/16"** (početno), **1/8"** ili **1/4"**. To mijenja kako se duljine čitaju na listu, u pločama, u količinama i na statusnoj traci.

Samo prikaz se zaokružuje. Količine, cijene i izvozi računaju se iz točnih duljina, a izvozi uvijek prikazuju 1/16".

## Početni gubitak

Postotak gubitka s kojim svaka nova stavka počinje: 0% (početno), 2%, 3%, 5%, 7.5%, 10%, 15% ili 20%. I dalje možete upisati drugi gubitak za svaku stavku, u uređivaču stavke ili izravno u tablici količina. Stavke koje već imate zadržavaju svoj gubitak.

## Autobrojanje: gdje počinje klizač podudaranja

Gdje se klizač {{ui:Podudaranje}} nalazi kada završi pretraga [Autobrojanja](topic:auto-count), od 50% do 95%; 75% je početno. Niža vrijednost nudi više sličnih za odbacivanje; viša nudi manje. Klizač i dalje možete pomicati tijekom svakog pregleda.

## Hvatanje na linije crteža

Uključeno na početku. Dok mjerite ili kalibrirate, točka blizu linije PDF-a skače na njezin kraj, polovište, presjek ili najbližu točku na njoj. {{key:F3}} i {{ui:Hvatanje}} na statusnoj traci također ga uključuju i isključuju. Više: [Hvatanje na linije crteža](topic:snap-to-the-drawing).

## Ispuna prostorije: koliko širok otvor zatvara

{{ui:Ispuna prostorije zatvara otvore do}} postavlja koliko širok otvor vrata ili razmak alat {{ui:Prostorija}} smatra zatvorenim: od 3'-0" do 8'-0", početno 4'-0". Preširoko dopušta da se prostorija proteže u sljedeću; preuski otvor ostavlja prostoriju otvorenom. Vidi [Ispunite prostoriju jednim klikom](topic:measure-areas#fill-a-room-with-one-click).

## Hvatanje na 45° bez držanja Shift

Isključeno na početku. Kada je uključeno, dionice, obrisi, izrezi i povučeni kutovi idu pod 0°, 45°, 90° ili 135° od zadnje točke bez držanja {{key:Shift}}; držite {{key:Shift}} da kliknete pod bilo kojim kutom. Statusna traka tada kaže „Hvata na 45°; Shift oslobađa kut“. Točka koju kliknete na zakrivljenoj liniji luka i kružnice nikad se ne hvata; hvata se kraj luka.

## Veličina oznake brojanja

Koliko su velike točkice brojanja: {{ui:Vrlo mala}}, {{ui:Mala}}, {{ui:Srednja}} (početno: veličina kakvu su točkice uvijek imale) ili {{ui:Velika}}. Veličina se održava na ekranu pri svakom uvećanju, a označeni PDF crta svaku točkicu jednake veličine na papiru, bez obzira na veličinu lista, pa PDF pri 100% izgleda kao ekran. Više: [Brojanje ručno](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Indikator kuta

Samo za [3D provjeru pogleda](topic:check-in-3d): {{ui:ViewCube}} (početno: kocka gore desno za klik, povlačenje i okretanje), {{ui:Ikona osi}} (mala oznaka X, Y, Z dolje desno) ili {{ui:Nema}}. Mijenja se odmah i pamti se u ovom pregledniku. Ravni list nikad ne prikazuje nijedan.

## Alat za putanju: najveći razmak za spajanje

{{ui:Alat za putanju: najveći razmak za spajanje}} je koliko daleko dva kraja linije mogu biti, a da se i dalje računaju kao jedna putanja, u PDF točkama (0.05 do 60; 1.5 na početku). Linije crteža često staju malo prije jedna druge. Veći broj više spaja; manji drži linije odvojenima. {{key:[}} i {{key:]}} mijenjaju ga dok birate, a ovo polje prati promjenu. Vidi [Odabir linija](topic:pick-the-lines).
