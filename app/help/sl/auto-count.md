---
title: Samodejno štetje simbola
summary: Z okvirjem označite en simbol, naj TakeoffCraft poišče ostale na tem listu ali na vseh odprtih listih, ujemanja pregledate z drsnikom in jih dodate v enem koraku.
keywords: poljuben kot, zasukano, drugo merilo, drugačno merilo, samodejno štetje, samodejno iskanje, iskanje simbolov, najdi simbole, vzorec, predloga, ujemanje, zaznaj, orodje za štetje
from: fa68a6c1
---

{{ui:Samodejno štetje}} poišče vsak izvod simbola, potem ko z okvirjem označite enega. Nato na listu pregledate ujemanja in kot oznake štetja dodate tiste, ki jih sprejmete. Je pomočnik, ne zagotovilo: vedno pregledajte, preden dodate.

## Iskanje simbolov

1. Ustvarite ali kliknite postavko štetja pod {{ui:Postavke}}.
2. Odprite list, na katerem je simbol.
3. Na orodni vrstici izberite {{ui:Samodejno štetje}} ali pritisnite {{key:S}}.
   Na vrhu lista se prikaže vrstica: „Z okvirjem označite en simbol na tem listu.“
4. Če želite iskati po vseh odprtih listih, ne samo po tem, obkljukajte {{ui:Išči po vseh odprtih listih}}.
5. Povečajte pogled, da je simbol dobro viden, nato potegnite okvir tesno okoli enega njegovega izvoda. Vključite celoten simbol; prazen papir okoli njega se odreže.
   Vrstica prikaže „Iskanje…“ z vrstico napredka in gumb {{ui:Prekliči}}. Stran ostaja odzivna: lahko povečujete, premikate pogled in preklapljate med listi. Izbira drugega orodja ali {{key:Esc}} iskanje prekliče.
6. Ko je končano, se ujemanja prikažejo na listu kot okvirji v barvi postavke, vrstica pa prikaže povzetek, na primer „22 ujemanj, 19 za dodajanje (3 že prešteti). Kliknite okvir, da ga zavrnete ali obnovite.“

V {{ui:Samodejno štetje}} s potegom po listu narišete okvir, namesto da bi premikali pogled. Za premikanje držite {{key:Space}} in vlecite ali vlecite s srednjim gumbom miške.

## Pregled ujemanj

- **Kliknite okvir**, da ga zavrnete. Zavrnjen okvir je črtkan in prečrtan. Ponovno kliknite nanj, da ga obnovite.
- **Premaknite drsnik {{ui:Ujemanje}}** (od 50 % do 95 %, začetna vrednost 75 %). Višja vrednost prikaže samo natančna ujemanja; nižja prikaže bolj ohlapna. Drsnik le filtrira najdeno; ne išče znova.
- **Že šteto**: ujemanja na mestu, ki že ima oznako štetja te postavke, so na začetku zavrnjena, da ničesar ne štejete dvakrat.
- **Drugi listi**: če ste iskali po vseh odprtih listih, preklapljajte med listi s seznamom listov ali s {{key:PageDown}} in pregledajte vsakega. Povzetek pove, koliko listov ima ujemanja.

## Dodajanje

Izberite {{ui:Dodaj}}. Na gumbu je zapisano število, na primer „Dodaj 19 oznak“.
Oznake štetja se dodajo v središče vsakega sprejetega okvirja: „Dodanih oznak štetja: 19 za postavko „Dvojna vtičnica“. Ctrl+Z jih odstrani vse.“

Celotna serija je en korak razveljavitve, zato ena {{key:Mod+Z}} odstrani vse.

Če želite pregled opustiti brez dodajanja, izberite {{ui:Zavrzi}} ali pritisnite {{key:Esc}}. Izbira drugega orodja ga prav tako zavrže.

## Kaj najde in kaj zgreši

TakeoffCraft primerja risbo po slikovnih pikah z označenim simbolom.

- Najde simbol, zasukan za 0°, 90°, 180° in 270°. Če ga želite najti tudi pod poljubnim kotom, pred risanjem okvirja v vrstici samodejnega štetja obkljukajte {{ui:Poljuben kot (počasneje)}}: preizkusi na vsakih 15°, nato vsako najdbo natančneje določi na stopinjo in pol. To traja približno šestkrat dlje. Zrcaljenega simbola ne najde (razen če je simbol videti enako tudi zrcaljen).
- Če je obkljukano {{ui:Išči po vseh odprtih listih}}, se list z drugim merilom išče pri velikosti, ki jo ima simbol tam: armatura, narisana v merilu na tlorisu 1/8", je na tlorisu 1/4" dvakrat večja in jo najde. Tak list se išče tudi pri lastni velikosti okvirja, za oznake in simbole, natisnjene v eni velikosti na vseh listih. To zahteva merilo na obeh listih; list brez merila se išče samo pri velikosti okvirja.
- Zelo podobni simboli se lahko ujemajo med seboj: dvojna in štiriradna vtičnica ali dve oznaki armatur, ki se razlikujeta za eno črko. Povečajte drsnik, dokler ne ostanejo samo pravi, preostale pa ročno zavrnite.
- Simbol, ki ga sekajo druge črte, šrafura ali besedilo, dobi nižjo oceno in morda potrebuje nižjo nastavitev drsnika.
- Zelo majhni okvirji se zavrnejo: „Okvir je premajhen. Narišite ga okoli celotnega simbola.“ Prazen okvir se prav tako zavrne: „Okvir je skoraj prazen. Narišite ga okoli simbola.“
- List, ki bi bil pri velikosti, potrebni za ta simbol, zelo velik, se preskoči, povzetek pa pove: „1 list je bil prevelik za iskanje pri tej velikosti simbola.“ Označite večji simbol ali ta list preštejte ročno.

Če ničesar ne najde, vrstica stanja pokaže: „Ni ujemanj. Znižajte drsnik ujemanja ali simbol z okvirjem označite bolj tesno.“

## Hitrost in brskalniki

Iskanje teče v ozadnem delovnem procesu, zato stran ostaja odzivna in lahko kadar koli prekličete. Vsak list se najprej v delovni velikosti nariše na sami strani, zato lahko zelo velik list za trenutek obstane. Deluje v trenutnih brskalnikih Chrome, Edge, Firefox in Safari. Iskanje po mnogih listih traja dlje; vrstica napredka se premika list za listom. Brez povezave samodejno štetje deluje, ko vrstica aplikacije prikaže {{ui:Pripravljeno za delo brez povezave}}: {{ui:Shrani za delo brez povezave}} shrani tudi ozadnji delovni proces. Glejte [Delo brez povezave](common:offline).
