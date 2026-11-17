---
title: Nastavitve TakeoffCraft
summary: Prikaz palcev na 1/16, 1/8 ali 1/4, začetni odpadek pri novih postavkah, začetek drsnika samodejnega štetja, lovljenje na črte risbe ali na 45° brez držanja Shift, širina vrat, ki jih zapolnitev prostora zapre, in kazalnik vogala pogleda v 3D.
keywords: nastavitve, možnosti, natančnost, ulomki, palci, zaokroževanje, odpadek, privzeti odpadek, samodejno štetje, prag, ujemanje, drsnik, lovljenje, 45, kot, shift, kocka pogleda, ikona osi, kazalnik vogala, 3d
from: bca3f0ed
---

Odprite {{ui:Nastavitve}} z zobnikom v vrstici aplikacije ali s {{key:Mod+,}}. Prvi zavihek, {{ui:TakeoffCraft}}, vsebuje nastavitve, ki pripadajo tej aplikaciji; {{ui:Splošno}} vsebuje tiste, ki jih delijo vse aplikacije CadCraft (tema, podokna, orodna vrstica). Nastavitve TakeoffCraft obstajajo samo v aplikaciji: spremenite jih tukaj, brskalnik pa si jih zapomni. {{ui:Ponastavi nastavitve TakeoffCraft}} jih vrne na začetne vrednosti.

## Čevlji in palci

Dolžine prikažite na najbližji **1/16"** (začetna vrednost), **1/8"** ali **1/4"**. To spremeni, kako so dolžine prikazane na listu, v ploščah, v količinah in v vrstici stanja.

Zaokrožen je samo prikaz. Količine, stroški in izvozi se izračunajo iz natančnih dolžin, izvozi pa vedno prikažejo 1/16".

## Odpadek za začetek

Odstotek odpadka, s katerim se začne vsaka nova postavka: 0 % (začetna vrednost), 2 %, 3 %, 5 %, 7.5 %, 10 %, 15 % ali 20 %. Za vsako postavko lahko še vedno vpišete drug odpadek v urejevalniku postavke ali neposredno v tabeli količin. Postavke, ki jih že imate, ohranijo svoj odpadek.

## Samodejno štetje: začetek drsnika ujemanja

Kje je drsnik {{ui:Ujemanje}} ob koncu iskanja [Samodejno štetje](topic:auto-count), od 50 % do 95 %; začetna vrednost je 75 %. Nižja vrednost ponudi več podobnih primerkov, ki jih lahko zavrnete; višja jih ponudi manj. Drsnik lahko med vsakim pregledom še vedno premaknete.

## Lovljenje na lastne črte risbe

Na začetku je vklopljeno. Med merjenjem ali kalibracijo se točka blizu črte PDF-ja premakne na njen konec, sredino, križišče ali najbližjo točko nanjo. {{key:F3}} in {{ui:Lovljenje}} v vrstici stanja ju tudi vklopita in izklopita. Več: [Lovljenje na lastne črte risbe](topic:snap-to-the-drawing).

## Zapolnitev prostora: kako široko odprtino zapre

{{ui:Zapolnitev prostora zapre odprtine do}} določa, kako široko vhodno odprtino ali režo orodje {{ui:Prostor}} obravnava kot zaprto: od 3'-0" do 8'-0", na začetku 4'-0". Širše od vaših najširših vrat pusti, da prostor sega v naslednjega; ožje od vrat pusti prostor odprt. Glejte [Zapolnitev prostora z enim klikom](topic:measure-areas#fill-a-room-with-one-click).

## Lovljenje na 45° brez držanja tipke Shift

Na začetku je izklopljeno. Ko je vklopljeno, odseki, obrisi, odprtine in vlečeni vogali gredo pod 0°, 45°, 90° ali 135° od zadnje točke brez držanja {{key:Shift}}; držite {{key:Shift}}, da kliknete pod poljubnim kotom. Vrstica stanja nato prikaže „Lovi na 45°; Shift sprosti kot“. Točka, ki jo kliknete na krivulji loka, in krožnice se nikoli ne lovijo; lovi se konec loka.

## Velikost pik štetja

Kako velike so pike štetja: {{ui:Zelo majhna}}, {{ui:Majhna}}, {{ui:Srednja}} (začetna vrednost: velikost, ki so jo pike vedno imele) ali {{ui:Velika}}. Velikost ostane na zaslonu pri vsaki povečavi, označeni PDF pa vsako piko nariše v isti velikosti na papirju, ne glede na velikost lista, tako da je PDF pri 100 % videti kot zaslon. Več: [Štetje ročno](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Kazalnik vogala

Samo za [pogled za preverjanje v 3D](topic:check-in-3d): {{ui:Kocka pogleda}} (začetna vrednost: kocka zgoraj desno, ki jo kliknete, povlečete in zasukate), {{ui:Ikona osi}} (majhna oznaka X, Y, Z spodaj desno) ali {{ui:Brez}}. Sprememba začne veljati takoj in se shrani v tem brskalniku. Ravni list nikoli ne prikaže nobenega.

## Orodje za pot: največja vrzel za povezavo

{{ui:Orodje za pot: največja vrzel za povezavo}} je, kako narazen sta lahko dva konca črt, pa še štejeta kot ena pot, v točkah PDF (od 0.05 do 60; na začetku 1.5). Črte risbe se pogosto ustavijo malenkost narazen. Večja vrednost več povezuje; manjša pusti črte ločene. {{key:[}} in {{key:]}} jo spremenita med izbiranjem, to polje pa ji sledi. Glejte [Izbira črt](topic:pick-the-lines).
