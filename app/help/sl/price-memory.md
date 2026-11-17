---
title: Spomin cen iz preteklih del
summary: TakeoffCraft si zapomni enotne cene, ki ste jih uporabili v preteklih predizmerah, samo v tem računalniku, da lahko nova predizmera začne pri tem, kar ste nazadnje plačali. Oglejte si, uporabite, pozabite.
keywords: spomin cen, cene, zapomni si cene, zadnje delo, običajna cena, mediana, enotne cene, neocenjeno, ponovno določi cene, uči se iz preteklih predizmer, pozabi, knjižnica
from: 7279f1a1
---

{{ui:Cene}} na orodni vrstici (znak za dolar) odpre, kaj si TakeoffCraft zapomni o cenah, ki ste jih uporabili. Je preprost seznam: za vsako ime postavke enotne cene iz vaših zadnjih del. Shranjen je v tem brskalniku (v Studiu v svojem lastnem spletnem pogledu) poleg knjižnice cen, nikoli znotraj datoteke predizmere, in nič se ne pošlje nikamor. Ni naučen model.

## Kaj se zapomni

Ko shranite predizmero, se vsaka postavka, ki ima ceno in je v uporabi (ima oznako ali vneseno količino, večjo od nič), zapomni pod svojim imenom in vrsto: enotna cena za material, enotna cena za delo, odpadek in enota. Delo so datoteke načrtov, iz katerih je bila predizmera narejena, zato ponovno shranjevanje iste predizmere zamenja njene lastne cene in ne doda novega dela. Za vsako ime se hrani zadnjih 12 del.

Da začnete s svojimi starejšimi deli, izberite {{ui:Uči se iz preteklih predizmer…}} in izberite shranjeno predizmero (.json). Njene ocenjene, uporabljene postavke se zapomnijo na enak način.

Imena se ujemajo, kadar se ujemajo njihove besede, ne glede na velike in male črke ali ločila („2x4 Stud, 8 ft“ in „2x4 stud 8 FT“ sta enaka). Enake besede za drugo vrsto postavke (linearna postavka in postavka štetja) pa nista ista cena.

## Uporabite v novi predizmeri

1. Ustvarite postavke nove predizmere.
2. Izberite {{ui:Cene}}. Pod {{ui:Te predizmere}} vidite vsako postavko, ki ima zapomnjeno ceno, kaj imate nanjo zdaj, enotne cene zadnjega dela, običajne enotne cene (sredina zapomnjenih del) in razpon.
3. Izberite {{ui:Uporabi zadnje}} ali {{ui:Uporabi običajne}} pri eni postavki ali {{ui:Določi cene za N neocenjenih postavk iz spomina}}, da zapolnite vsako postavko brez cene z zadnjega dela.

Vsaka uporaba je en korak: {{key:Ctrl+Z}} jo razveljavi. Postavka, ki ima le podobno ime (eno ime je vsebovano v drugem), to pove, gumbi pa uporabijo enotne cene podobnega imena. Cena, zapomnjena na kos, se nikoli ne da postavki na čevelj: pogovorno okno pove, da se enote razlikujejo, in jo pusti pri miru.

## Poglejte, spremenite, pozabite

{{ui:Vse zapomnjeno}} našteje vsako ime z njegovimi enotnimi cenami in številom del. Gumb za koš pozabi eno ime; {{ui:Počisti vse cene}} jih pozabi vse. Izklopite {{ui:Zapomni si moje cene, ko shranim predizmere}}, da prenehate zapomnjevati; kar je že shranjeno, ostane, dokler tega ne pozabite. Vaše predizmere in knjižnica cen se nikoli ne spremenijo.

## Z vašim pomočnikom

Če v nastavitvah dovolite pomočnike, lahko preberejo, kaj je zapomnjeno za postavke predizmere (prices_list), in določijo cene postavkam iz tega (prices_apply, ki lahko najprej prikaže predogled). To je isti seznam kot v pogovornem oknu.
