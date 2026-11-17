---
title: Tastatura i miš
summary: Svaki taster, radnja mišem, tačpedom i dodirom u TakeoffCraft-u, grupisano, sa razlikama među platformama.
keywords: tasteri, prečice, tasteri za prečice, tastatura, miš, tačped, dodir, pomeri pogled, zumiraj, točkić, desni klik, dvoklik, space, shift, kopiraj, nalepi, iseci, dupliraj, izaberi sve
from: 6f2c441d
---

Slova rade kada je pokazivač bilo gde na stranici i ne kucate u polju. Dok je dijalog otvoren, važe njegovi tasteri. Slova rade sa ili bez {{key:Shift}}.

## Alatke

| Taster | Alatka |
|---|---|
| {{key:V}} | {{ui:Izaberi}} |
| {{key:L}} | {{ui:Linijski}} |
| {{key:A}} | {{ui:Površina}} |
| {{key:O}} | {{ui:Krug}} |
| {{key:B}} | {{ui:Prostorija}} (popunjava prostoriju jednim klikom) |
| {{key:R}} | {{ui:Luk}} uključen ili isključen (u Linijskom, Površini i Izrezu) |
| {{key:E}} | {{ui:Odbitak}} uključen ili isključen: sledeće deonice niza se crtaju, ali se ne broje |
| Cifra, `@` ili `#` dok crtate | Otvara polje {{ui:Unos}}: unesite dužinu ili koordinate, {{key:Enter}} postavlja tačku ([Merenje linijskih deonica](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Izrez}} (prvo izaberite površinu) |
| {{key:C}} | {{ui:Prebroj}} |
| {{key:S}} | {{ui:Automatsko brojanje}} |
| {{key:K}} | {{ui:Kalibriši}} |
| {{key:D}} | {{ui:Proveri}} razmeru |

## Dok crtate

| Taster ili radnja | Šta radi |
|---|---|
| Klik | Postavlja tačku (tačka, uz {{ui:Prebroj}}). |
| {{key:P}} | Putanja: izaberite celu povezanu putanju linije PDF-a ili obris oko klika ([Biranje linija PDF-a](topic:pick-the-lines)). |
| {{key:F3}} | Hvatanje za linije crteža uključeno ili isključeno ([Hvatanje za linije crteža](topic:snap-to-the-drawing)). |
| {{key:Shift}} držan dok klikćete | Hvata deonicu na 0°, 45°, 90° ili 135° u odnosu na poslednju tačku. Ne važi za tačke luka ni krugove. |
| Dvoklik | Završava niz, ili zatvara površinu ili izrez. |
| {{key:Enter}} | Završava niz, ili zatvara površinu ili izrez. |
| Desni klik (bez pomeranja) | Završava niz, ili zatvara površinu ili izrez. |
| Klik na prvu tačku | Zatvara površinu ili izrez (od treće tačke). |
| {{key:Backspace}} ili {{key:Delete}} | Uklanja poslednju tačku (prvo tačku luka na čekanju). |
| {{key:Esc}} | Odbacuje tačku luka na čekanju; zatim poništava nedovršenu oznaku; zatim vraća na {{ui:Izaberi}}. |

## Biranje i uređivanje

| Taster ili radnja | Šta radi |
|---|---|
| Klik na oznaku (alatka Izaberi) | Bira je i postavlja njenu stavku kao tekuću. |
| {{key:Shift}} + klik na oznaku | Dodaje je u izbor ili je uklanja iz njega. |
| {{key:Mod+A}} | Izaberi sve oznake na otvorenom listu. |
| Prevlačenje ugaone ručice | Pomera tu tačku ({{key:Shift}} hvata na 45°). Radi kada je izabrana jedna oznaka. |
| {{key:Delete}} ili {{key:Backspace}} | Briše izabrane oznake (kada ne crtate). |
| {{key:Esc}} | Ne bira ništa: briše izbor i liniju provere. |
| {{key:Mod+Z}} | Opozovi. |
| {{key:Mod+Y}} ili {{key:Mod+Shift+Z}} | Ponovi. |

## Kopiranje i lepljenje

| Taster | Šta radi |
|---|---|
| {{key:Mod+C}} | Kopira izabrane oznake, zajedno sa njihovim stavkama. |
| {{key:Mod+X}} | Iseca: kopira izabrane oznake, pa ih briše. |
| {{key:Mod+V}} | Nalepljuje: kopija prati pokazivač; kliknite gde treba da ide. |
| {{key:Mod+Shift+V}} | Nalepljuje na istom mestu: isto mesto na otvorenom listu. |
| {{key:Mod+D}} | Dupliraj izabrane oznake: kopija prati pokazivač; kliknite gde treba da ide. |
| {{key:Esc}} | Ništa ne ostavlja: otkazuje nalepljivanje ili dupliranje koje je na pokazivaču. |

Sama slova i dalje biraju alatke ({{key:C}} je {{ui:Prebroj}}, {{key:D}} je {{ui:Proveri}}, {{key:X}} je {{ui:Izrez}}, {{key:V}} je {{ui:Izaberi}}, {{key:A}} je {{ui:Površina}}); samo {{key:Mod}} uz njih kopira i nalepljuje. U polju za tekst ovi tasteri kopiraju i lepe tekst kao obično. Pogledajte [Kopiranje, lepljenje i dupliranje oznaka](topic:copy-paste).

:::warning
{{key:Backspace}} briše izabranu oznaku kada ne crtate. Ako se to desi slučajno, {{key:Mod+Z}} je vraća.
:::

## Datoteke

| Taster | Šta radi |
|---|---|
| {{key:Mod+O}} | {{ui:Otvori planove}} |
| {{key:Mod+S}} | {{ui:Sačuvaj predmer}} |

Ova dva rade i dok kucate u polju.

## Prikaz i listovi

| Taster ili radnja | Šta radi |
|---|---|
| Točkić miša | Zumira unutra i spolja na pokazivaču. |
| Prevlačenje (levo, srednje ili desno dugme) | Pomera pogled. U {{ui:Automatsko brojanje}} prevlačenje levim dugmetom crta okvir za pretragu. |
| {{key:Space}} držan + prevlačenje | Pomera pogled, u bilo kojoj alatki. |
| {{key:F}} | {{ui:Uklopi stranicu}} |
| {{key:W}} | {{ui:Uklopi širinu}} |
| {{key:Plus}} ili {{key:=}} | Zumira unutra na sredini prikaza. |
| {{key:Minus}} | Zumira spolja na sredini prikaza. |
| {{key:PageDown}} / {{key:PageUp}} | Sledeći ili prethodni list u spisku listova. |
| {{key:Ctrl+Shift+F}} | Ciklično menja režime celog ekrana (Control na svakoj platformi, i na Mac-u). |
| {{key:F1}} | Otvara ili zatvara ovu pomoć, panel sa strane. |
| {{key:3}} | 3D provera lista, uključena ili isključena. |

## 3D prikaz

| Taster ili radnja | Šta radi |
|---|---|
| Prevlačenje, ili prevlačenje srednjim dugmetom | Rotira pogled. |
| {{key:Shift}} + prevlačenje, ili prevlačenje desnim dugmetom | Pomera pogled. |
| Točkić miša | Zumira na pokazivaču. Na tačpedu, dvoprstni prevlak rotira, a stiskanje zumira. |
| Klik | Bira oznaku ispod pokazivača ({{key:Shift}} + klik dodaje ili uklanja). |
| {{key:F}} ili {{key:W}} | Zumira na sve. |
| {{key:3}} | Nazad na ravan list. |

Pogledajte [Proverite predmer u 3D](topic:check-in-3d).

## Automatsko brojanje

| Taster ili radnja | Šta radi |
|---|---|
| Prevlačenje okvira | Okvirom obuhvata simbol za pretragu (pokreće pretragu). |
| Klik na okvir podudaranja | Odbacuje ga ili vraća. |
| {{key:Esc}} | Otkazuje pokrenutu pretragu ili odbacuje pregled. |

## Pomoć

| Taster | Šta radi |
|---|---|
| {{key:F1}} | Otvara ili zatvara panel pomoći (takođe dugme {{ui:Pomoć}} u traci aplikacije). Radi u svakoj alatki, čak i dok kucate u polju. |
| {{key:Esc}} | Zatvara panel pomoći. U njegovom polju za pretragu, prvi Esc briše pretragu. Dok je panel otvoren, Esc pritisnut posle klika na list najpre zatvara panel; pritisnite ga ponovo da biste otkazali u TakeoffCraft-u. |

:::mac
Na mnogim Mac tastaturama gornji red kontroliše svetlinu i zvuk. Pritisnite fn sa F1 ili uključite „Koristi tastere F1, F2 itd. kao standardne funkcijske tastere“ u Sistemskim podešavanjima, pod Tastatura.
:::

## Dijalozi i polja

| Taster | Šta radi |
|---|---|
| {{key:Enter}} | U polju: primenjuje vrednost. U dijalogu za kalibraciju: {{ui:Postavi razmeru}}. |
| {{key:Esc}} | Zatvara dijalog (kao {{ui:Otkaži}}); zatvara obrazac {{ui:Nova stavka}}. |
| {{key:Tab}} | Prelazi na sledeće polje. |

## Napomene za platforme

:::mac
- {{key:Mod}} je taster Command: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Ceo ekran je izuzetak: Control+Shift+F.
- Desni klik je dvoprstni klik na tačpedu, kada je sekundarni klik uključen u Sistemskim podešavanjima, pod Tačped. TakeoffCraft čita samo sekundarno dugme; Control-klik može da se računa kao običan klik i doda tačku.
- Dvoprstno skrolovanje na tačpedu uvećava list (ne pomera ga). Za pomeranje pritisnite i prevucite, ili držite Space i prevucite.
- Page Up i Page Down su fn sa strelicama gore i dole na tastaturama bez njih.
- Backspace je taster označen sa „delete“.
:::

:::windows
- {{key:Mod}} je Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Na tačpedu laptopa, dvoprstno skrolovanje uvećava list. Za pomeranje pritisnite i prevucite.
:::

:::linux
- {{key:Mod}} je Ctrl. Neka radna okruženja koriste sopstvene prečice Ctrl+Alt ili Super; TakeoffCraft ne koristi nijednu od njih.
- Na tačpedu, dvoprstno skrolovanje uvećava list. Za pomeranje pritisnite i prevucite.
:::

:::touch
TakeoffCraft dodir čita kao jedan pokazivač:

- Dodir postavlja tačku, bira oznaku ili dodaje tačku brojanja.
- Prevlačenje jednim prstom pomera list (u {{ui:Automatsko brojanje}} crta okvir za pretragu).
- Stiskanje za uvećanje još nije podržano. Koristite {{ui:Uklopi stranicu}} i {{ui:Uklopi širinu}}, ili {{key:Plus}} i {{key:Minus}} na tastaturi.
- Da zatvorite površinu, dodirnite njenu prvu tačku. Da završite niz, dvaput dodirnite tamo gde vaš pregledač pretvara dvostruki dodir u dvoklik, ili pritisnite {{key:Enter}} na tastaturi.
- Nema očitavanja dužine uživo dok ne dodirnete, jer nema lebdenja.

Za predmer danas, tastatura i miš ili tačped su bolji izbor.
:::

## Prečice koje pregledač zadržava

Pregledači zadržavaju neke prečice za sebe, i stranica ih ne može koristiti: zatvaranje kartice ({{key:Mod+W}}), nova kartica ili prozor ({{key:Mod+T}}, {{key:Mod+N}}) i zumiranje pregledača ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Zato TakeoffCraft uvećava list točkićem i samim tasterima {{key:Plus}} i {{key:Minus}}. Ako greškom pritisnete {{key:Mod+Plus}}, cela stranica se uveliča; {{key:Mod+0}} je vraća. Pogledajte [Tasteri, miševi i tačpedi](common:keys).

## Gde je Premesti

Nema komande Premesti: izaberite tačku brojanja i prevucite je, ili izaberite površinu ili liniju i prevucite njene ugaone ručice.
