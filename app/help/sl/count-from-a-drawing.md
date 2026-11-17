---
title: Štetje iz risbe
summary: Štejte bloke, objekte na sloju ali besedilo neposredno iz DWG ali DXF: natančno, z gnezdenimi bloki, obravnavanimi variantami dinamičnih blokov in nizi blokov, v enem koraku razveljavitve.
keywords: štetje iz risbe, štetje CAD, štetje blokov, šteti bloke, vstavek, ime bloka, gnezdeni bloki, dinamični blok, varianta, minsert, niz, sloj, vrsta entitete, krogi, besedilo, atribut, oznaka, skriti sloji, natančno štetje, kako, vrata, armature
from: 5060e24e
---

{{ui:CAD count}} na vrstici lista (ukaz **Count from the drawing** v drugih slogih menija) prešteje tisto, kar DWG ali DXF pravi, da je tam. Kjer {{ui:Auto count}} išče sliko simbola in lahko kakšnega zgreši ali najde lažnega, to šteje objekte: vsak vstavek bloka z imenom `DOOR-36` je ena vrata. Najprej odprite risbo: [Odpiranje risbe DWG ali DXF](topic:open-a-drawing).

## Štetje bloka

1. Odprite list risbe. {{ui:CAD count}} je na vrstici lista.
2. Izberite ga. Okno našteje bloke s številom vsakega. Iščite po imenu in nato izberite enega.
3. Preverite vrstico pod seznamom: „22 najdenih, 22 za dodajanje.“
4. Pod {{ui:Add to}} izberite postavko štetja ali pustite {{ui:A new count item}} in ji dajte ime.
5. Izberite gumb za dodajanje, ki navaja število: {{ui:Add 22 marks}}. Oznake se pojavijo na vstavnih točkah bloka, količina postavke pa je štetje.

To je en korak razveljavitve: {{key:Mod+Z}} odstrani oznake in novo postavko skupaj. Ocena, preglednica in označeni PDF obravnavajo postavko kot vsako drugo postavko štetja.

### Kaj se šteje

- **Vsak vstavek imena bloka**, ne glede na merilo in kot, v prostoru modela ali papirnem prostoru. Imena blokov ne razlikujejo velikih in malih črk.
- **Nizi blokov** (MINSERT): vsaka kopija v nizu je ena.
- **Gnezdeni bloki.** Blok, postavljen znotraj drugega bloka, se šteje na vsaki globini. Seznam piše „6 znotraj drugih blokov“; odkljukajte {{ui:Count blocks inside other blocks too}}, da štejete samo vstavke, postavljene neposredno v risbo.
- **Dinamični bloki.** Dinamični blok se šteje pod svojim imenom, ne pod anonimnimi kopijami (`*U12`), ki jih datoteka hrani. Njena stanja so navedena ločeno („Single 12, Double 4“): izberite stanje, da štejete samo ta, ali {{ui:Every variant}}. Kadar datoteka ne pove, katero stanje prikazuje kopija, so te navedene kot „(stanje ni znano)“.
- **Filter sloja.** Blok na več slojih: izberite enega pod {{ui:On layer}}.

### Kaj se ne šteje

- **Skriti sloji.** Objekt na sloju, ki je v datoteki izklopljen ali zamrznjen (ali ste ga skrili v {{ui:Layers}}), se izpusti, vrstica pa pove, koliko: „3 na skritih slojih izpuščenih“. Odkljukajte {{ui:Count them too}}, da jih vključite.
- **Povezane risbe, ki niso odprte,** se ne štejejo; okno to pove.
- **Objekti, natanko zloženi na drug objekt iste vrste,** se štejejo kot dva (sta res dva objekta), okno pa to pove: običajno gre za napako pri risanju, ki je vredna pregleda.

## Kar prikazuje ta list ali celotna risba

- **Kar prikazuje ta list** šteje objekte, ki jih list prikazuje: na postavitvi modelske objekte znotraj njenih poglednih oken (sloj, zamrznjen v poglednem oknu, tam ni štet), plus lastne objekte postavitve.
- **Celotna risba, vsak objekt enkrat** šteje prostor modela enkrat, z oznakami na listu Model, in ne šteje tistega, kar več postavitev prikazuje znova.

Štetje tistega, kar prikazuje postavitev, in štetje tistega, kar prikazuje Model, dasta isto število za iste objekte; ne seštevajte obojega v eno postavko.

## Ponovno štetje

Ponovno štetje istega bloka z isto postavko doda samo novo: „22 že prešteto.“ Vsaka oznaka predstavlja en objekt.

## Po sloju in vrsti

Na {{ui:By layer and type}} izberite sloj in vrsto objekta (krogi, polilinije, šrafure …): „vsi krogi na E-LITE“. Odkljukajte {{ui:Also count objects inside blocks}}, da vključite tiste znotraj definicij blokov, na vsakem mestu, kjer je blok vstavljen.

## Po besedilu

Na {{ui:By text}} vnesite besedilo, na primer `A3`, in povejte, ali je natanko tako, ga vsebuje ali ga ima kot celo besedo. Štejejo se besedilni objekti, večvrstično besedilo v večkratni vodilki in **vrednosti atributov** blokov (oznakni atribut `ITEM = A3` se najde); izberite {{ui:In attribute}}, da štejete samo en atribut. Najpogostejša besedila so navedena za klik.

## Kdaj raje uporabiti Samodejno štetje

Uporabite {{ui:Auto count}} za PDF-je in za simbole v risbi, ki niso bloki (narisani posamično ali razstavljeni). Če so narisani kot bloki, jih štejte tukaj.
