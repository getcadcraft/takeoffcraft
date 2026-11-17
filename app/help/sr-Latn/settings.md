---
title: Podešavanja TakeoffCraft-a
summary: Prikažite inče do 1/16, 1/8 ili 1/4, započnite nove stavke sa procentom otpada, izaberite gde počinje klizač Automatskog brojanja, hvatajte za linije crteža ili za 45° bez držanja Shift-a, podesite širinu vrata koju Popunjavanje prostorije zatvara i izaberite indikator ugla 3D pogleda.
keywords: podešavanja, postavke, opcije, preciznost, razlomci, inči, zaokruživanje, otpad, podrazumevani otpad, automatsko brojanje, prag, podudaranje, klizač, hvatanje, 45, ugao, shift, kocka pogleda, ikona osa, indikator ugla, 3d
from: bca3f0ed
---

Otvorite {{ui:Podešavanja}} preko zupčanika u traci aplikacije ili {{key:Mod+,}}. Prva kartica, {{ui:TakeoffCraft}}, sadrži podešavanja koja pripadaju ovoj aplikaciji; {{ui:Opšte}} sadrži ona koja dele sve CadCraft aplikacije (tema, paneli, traka sa alatima). Podešavanja TakeoffCraft-a postoje samo u aplikaciji: menjate ih ovde, a ovaj pregledač ih pamti. {{ui:Vrati TakeoffCraft podešavanja}} ih vraća na početne vrednosti.

## Stope i inči

Prikažite dužine zaokružene na najbliži **1/16"** (početno), **1/8"** ili **1/4"**. Ovo menja kako se dužine čitaju na listu, u panelima, u količinama i u statusnoj traci.

Zaokružuje se samo prikaz. Količine, cene i izvozi se računaju iz tačnih dužina, a izvozi uvek prikazuju 1/16".

## Otpad za početak

Procenat otpada sa kojim svaka nova stavka započinje: 0% (početno), 2%, 3%, 5%, 7.5%, 10%, 15% ili 20%. I dalje možete ukucati drugi otpad za svaku stavku, u uređivaču stavke ili direktno u tabeli količina. Stavke koje već imate zadržavaju svoj otpad.

## Automatsko brojanje: gde počinje klizač podudaranja

Gde se klizač {{ui:Podudaranje}} nalazi kada se pretraga [Automatskog brojanja](topic:auto-count) završi, od 50% do 95%; 75% je početno. Niže nudi više sličnih objekata koje odbacujete; više nudi manje. Klizač i dalje možete pomerati tokom svakog pregleda.

## Hvatanje za linije crteža

Uključeno na početku. Dok merite ili kalibrišete, tačka blizu linije PDF-a skače na njen kraj, sredinu, presek ili najbližu tačku na njoj. {{key:F3}} i {{ui:Hvatanje}} u statusnoj traci takođe ga uključuju i isključuju. Više: [Hvatanje za linije crteža](topic:snap-to-the-drawing).

## Popunjavanje prostorije: koliko širok otvor zatvara

{{ui:Popunjavanje prostorije zatvara otvore do}} postavlja koliko širok otvor vrata ili procep alat {{ui:Prostorija}} smatra zatvorenim: od 3'-0" do 8'-0", 4'-0" na početku. Šire od vaših najširih vrata pušta prostoriju u sledeću; uže od vrata ostavlja prostoriju otvorenu. Pogledajte [Popunite prostoriju jednim klikom](topic:measure-areas#fill-a-room-with-one-click).

## Hvatanje za 45° bez držanja Shift-a

Isključeno na početku. Kada je uključeno, deonice, konture, izrezi i prevučeni uglovi idu pod 0°, 45°, 90° ili 135° od poslednje tačke bez držanja {{key:Shift}}; držite {{key:Shift}} da kliknete pod bilo kojim uglom. Statusna traka tada kaže „Hvata na 45°; Shift oslobađa ugao”. Tačka koju kliknete na krivini luka i krugovi se nikad ne hvataju; kraj luka se hvata.

## Veličina oznake brojanja

Koliko su velike tačke brojanja: {{ui:Veoma mala}}, {{ui:Mala}}, {{ui:Srednja}} (početno: veličina kakvu su tačke uvek imale) ili {{ui:Velika}}. Veličina ostaje na ekranu pri svakom uvećanju, a označeni PDF crta svaku tačku iste veličine na papiru, bez obzira na veličinu lista, pa PDF na 100% izgleda kao ekran. Više: [Brojanje ručno](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Indikator ugla

Samo za [3D proveru](topic:check-in-3d): {{ui:Kocka pogleda}} (početno: kocka u gornjem desnom uglu za klik, prevlačenje i okretanje), {{ui:Ikona osa}} (mali X, Y, Z znak u donjem desnom uglu) ili {{ui:Ništa}}. Menja se odmah i čuva se u ovom pregledaču. Ravan list nikada ne prikazuje nijedan.

## Alat putanje: najveći razmak koji spaja

{{ui:Alat putanje: najveći razmak za spajanje}} je koliko daleko mogu biti dva kraja linije, a da se još računaju kao jedna putanja, u tačkama PDF-a (0.05 do 60; 1.5 na početku). Linije crteža često staju malo ispred jedna druge. Veći razmak spaja više; manji drži linije odvojenim. {{key:[}} i {{key:]}} ih menjaju dok birate, a ovo polje prati. Pogledajte [Birajte linije](topic:pick-the-lines).
