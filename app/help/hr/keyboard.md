---
title: Tipkovnica i miš
summary: Svaka tipka, miš, trackpad i radnja dodirom u TakeoffCraftu, grupirano, s razlikama među platformama.
keywords: tipke, prečaci, tipkovnički prečaci, tipkovnica, miš, trackpad, dodir, pomicanje, zumiranje, kotačić, desni klik, dvostruki klik, razmaknica, shift, kopiraj, zalijepi, izreži, dupliciraj, odaberi sve
from: 6f2c441d
---

Tipke slova rade kad je pokazivač bilo gdje na stranici i ne upisujete u polje. Dok je dijaloški okvir otvoren, primjenjuju se njegove vlastite tipke. Slova rade s {{key:Shift}} ili bez njega.

## Alati

| Tipka | Alat |
|---|---|
| {{key:V}} | {{ui:Odaberi}} |
| {{key:L}} | {{ui:Linearno}} |
| {{key:A}} | {{ui:Površina}} |
| {{key:O}} | {{ui:Kružnica}} |
| {{key:B}} | {{ui:Prostorija}} (ispuni prostoriju jednim klikom) |
| {{key:R}} | {{ui:Luk}} uključeno ili isključeno (u alatima Linearno, Površina i Otvor) |
| {{key:E}} | {{ui:Odbitak}} uključeno ili isključeno: sljedeći segmenti dionice crtaju se, ali se ne broje |
| Znamenka, `@` ili `#` tijekom crtanja | Otvara okvir {{ui:Upis}}: upišite duljinu ili koordinate, {{key:Enter}} postavlja točku ([Mjerenje linearnih dionica](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Otvor}} (prvo odaberite površinu) |
| {{key:C}} | {{ui:Broji}} |
| {{key:S}} | {{ui:Autobrojanje}} |
| {{key:K}} | {{ui:Kalibriraj}} |
| {{key:D}} | {{ui:Provjeri}} mjerilo |

## Tijekom crtanja

| Tipka ili radnja | Što radi |
|---|---|
| Klik | Postavlja točku (točku, uz {{ui:Broji}}). |
| {{key:P}} | Putanja: odaberite cijelu povezanu putanju linije PDF-a ili obris oko klika ([Odabir linija PDF-a](topic:pick-the-lines)). |
| {{key:F3}} | Hvatanje na linije crteža uključeno ili isključeno ([Hvatanje na linije crteža](topic:snap-to-the-drawing)). |
| {{key:Shift}} držan dok kliknete | Hvata segment na 0°, 45°, 90° ili 135° od zadnje točke. Ne vrijedi za točke luka ni za kružnice. |
| Dvostruki klik | Završava dionicu ili zatvara površinu ili otvor. |
| {{key:Enter}} | Završava dionicu ili zatvara površinu ili otvor. |
| Desni klik (bez pomicanja) | Završava dionicu ili zatvara površinu ili otvor. |
| Klik na prvu točku | Zatvara površinu ili otvor (od treće točke). |
| {{key:Backspace}} ili {{key:Delete}} | Uklanja zadnju točku (prvo točku luka na čekanju). |
| {{key:Esc}} | Odbacuje točku luka na čekanju; zatim poništava nedovršenu oznaku; zatim se vraća na {{ui:Odaberi}}. |

## Odabir i uređivanje

| Tipka ili radnja | Što radi |
|---|---|
| Klik na oznaku (alat {{ui:Odaberi}}) | Odabire je i čini njezinu stavku aktivnom. |
| {{key:Shift}} + klik na oznaku | Dodaje je u odabir ili je uklanja iz njega. |
| {{key:Mod+A}} | Odabire sve oznake na otvorenom listu. |
| Povucite ručku kuta | Pomiče tu točku ({{key:Shift}} hvata na 45°). Radi kad je odabrana jedna oznaka. |
| {{key:Delete}} ili {{key:Backspace}} | Briše odabrane oznake (kad ne crtate). |
| {{key:Esc}} | Poništava odabir: briše odabir i crtu provjere. |
| {{key:Mod+Z}} | Poništi. |
| {{key:Mod+Y}} ili {{key:Mod+Shift+Z}} | Ponovi. |

## Kopiranje i lijepljenje

| Tipka | Što radi |
|---|---|
| {{key:Mod+C}} | Kopira odabrane oznake, sa stavkama. |
| {{key:Mod+X}} | Izrezuje: kopira odabrane oznake, zatim ih briše. |
| {{key:Mod+V}} | Zalijepi: kopija prati pokazivač; kliknite gdje ide. |
| {{key:Mod+Shift+V}} | Zalijepi na isto mjesto: isto mjesto na otvorenom listu. |
| {{key:Mod+D}} | Dupliciraj odabrane oznake: kopija prati pokazivač; kliknite gdje ide. |
| {{key:Esc}} | Ne ostavlja ništa: odustaje od lijepljenja ili dupliciranja koje je na pokazivaču. |

Same slova i dalje biraju alate ({{key:C}} je {{ui:Broji}}, {{key:D}} je {{ui:Provjeri}}, {{key:X}} je {{ui:Otvor}}, {{key:V}} je {{ui:Odaberi}}, {{key:A}} je {{ui:Površina}}); tek {{key:Mod}} uz njih kopira i lijepi. U polju za tekst ove tipke kopiraju i lijepe tekst kao i obično. Pogledajte [Kopiranje, lijepljenje i dupliciranje oznaka](topic:copy-paste).

:::warning
{{key:Backspace}} briše odabranu oznaku kad ne crtate. Ako se to dogodi slučajno, {{key:Mod+Z}} je vraća.
:::

## Datoteke

| Tipka | Što radi |
|---|---|
| {{key:Mod+O}} | {{ui:Otvori nacrte}} |
| {{key:Mod+S}} | {{ui:Spremi predmjer}} |

Ove dvije tipke rade i dok upisujete u polje.

## Prikaz i listovi

| Tipka ili radnja | Što radi |
|---|---|
| Kotačić miša | Zumira prema unutra i van na pokazivaču. |
| Povlačenje (lijevom, srednjom ili desnom tipkom) | Pomicanje prikaza. U {{ui:Autobrojanje}} povlačenje lijevom tipkom crta okvir za pretragu. |
| {{key:Space}} držan + povlačenje | Pomicanje prikaza, u bilo kojem alatu. |
| {{key:F}} | {{ui:Prilagodi stranicu}} |
| {{key:W}} | {{ui:Prilagodi širinu}} |
| {{key:Plus}} ili {{key:=}} | Zumira prema unutra u sredini prikaza. |
| {{key:Minus}} | Zumira van u sredini prikaza. |
| {{key:PageDown}} / {{key:PageUp}} | Sljedeći ili prethodni list u popisu listova. |
| {{key:Ctrl+Shift+F}} | Mijenja načine cijelog zaslona (Control na svim platformama, pa i na Macu). |
| {{key:F1}} | Otvara ili zatvara ovu pomoć, bočnu ploču. |
| {{key:3}} | 3D pregled provjere lista, uključeno ili isključeno. |

## Prikaz 3D

| Tipka ili radnja | Što radi |
|---|---|
| Povlačenje ili povlačenje srednjom tipkom | Orbitiranje. |
| {{key:Shift}} + povlačenje ili povlačenje desnom tipkom | Pomicanje prikaza. |
| Kotačić miša | Zumiranje na pokazivaču. Na trackpadu dvoprsni pomak orbitira, a stiskanje prstima zumira. |
| Klik | Odabire oznaku ispod pokazivača ({{key:Shift}} + klik dodaje ili uklanja). |
| {{key:F}} ili {{key:W}} | Zumiraj opseg. |
| {{key:3}} | Natrag na ravni list. |

Pogledajte [Provjera predmjera u 3D](topic:check-in-3d).

## Autobrojanje

| Tipka ili radnja | Što radi |
|---|---|
| Povucite okvir | Obuhvaća simbol za pretragu (pokreće pretragu). |
| Klik na okvir podudaranja | Odbacuje ga ili vraća. |
| {{key:Esc}} | Odustaje od pokrenute pretrage ili odbacuje pregled. |

## Pomoć

| Tipka | Što radi |
|---|---|
| {{key:F1}} | Otvara ili zatvara ploču pomoći (također gumb {{ui:Pomoć}} u traci aplikacije). Radi u svim alatima, čak i dok upisujete u polje. |
| {{key:Esc}} | Zatvara ploču pomoći. U njezinu okviru za pretragu prvi Esc briše pretragu. Dok je ploča otvorena, Esc pritisnut nakon klika na list najprije zatvara ploču; pritisnite ga ponovno da odustanete u TakeoffCraftu. |

:::mac
Na mnogim Mac tipkovnicama gornji red upravlja svjetlinom i zvukom. Pritisnite fn s F1 ili uključite „Koristi tipke F1, F2 itd. kao standardne funkcijske tipke“ u Postavkama sustava, pod Tipkovnica.
:::

## Dijalozi i polja

| Tipka | Što radi |
|---|---|
| {{key:Enter}} | U polju: primjenjuje vrijednost. U dijaloškom okviru za kalibraciju: {{ui:Postavi mjerilo}}. |
| {{key:Esc}} | Zatvara dijaloški okvir (kao {{ui:Odustani}}); zatvara obrazac {{ui:Nova stavka}}. |
| {{key:Tab}} | Prelazi na sljedeće polje. |

## Napomene o platformi

:::mac
- {{key:Mod}} je tipka Command: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Cijeli zaslon je iznimka: Control+Shift+F.
- Desni klik je klik dvama prstima na trackpadu, kad je sekundarni klik uključen u Postavkama sustava, pod Trackpad. TakeoffCraft čita samo sekundarnu tipku; Control-klik može se uzeti kao običan klik i dodati točku.
- Pomicanje dvama prstima na trackpadu zumira list (ne pomiče ga). Za pomicanje pritisnite i povucite ili držite {{key:Space}} i povucite.
- Page Up i Page Down su fn sa strelicama gore i dolje na tipkovnicama bez njih.
- Backspace je tipka označena oznakom delete.
:::

:::windows
- {{key:Mod}} je Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Na prijenosnom trackpadu dvoprsni pomak zumira list. Za pomicanje pritisnite i povucite.
:::

:::linux
- {{key:Mod}} je Ctrl. Neke radne površine imaju vlastite prečace Ctrl+Alt ili Super; TakeoffCraft ne koristi nijedan od njih.
- Na touchpadu dvoprsni pomak zumira list. Za pomicanje pritisnite i povucite.
:::

:::touch
TakeoffCraft čita dodir kao jedan pokazivač:

- Dodir postavlja točku, odabire oznaku ili dodaje točku brojanja.
- Povlačenje jednim prstom pomiče list (u {{ui:Autobrojanje}} crta okvir za pretragu).
- Stiskanje prstima za zumiranje još nije podržano. Koristite {{ui:Prilagodi stranicu}} i {{ui:Prilagodi širinu}} ili {{key:Plus}} i {{key:Minus}} na tipkovnici.
- Za zatvaranje površine dodirnite njezinu prvu točku. Za završetak dionice dvaput dodirnite tamo gdje preglednik dvostruki dodir pretvara u dvostruki klik, ili pritisnite {{key:Enter}} na tipkovnici.
- Nema očitanja duljine uživo dok ne dodirnete, jer nema lebdenja pokazivača.

Za predmjer danas je bolji način tipkovnica i miš ili trackpad.
:::

## Tipke koje preglednik zadržava

Preglednici zadržavaju neke prečace za sebe i stranica ih ne može koristiti: zatvaranje kartice ({{key:Mod+W}}), nova kartica ili prozor ({{key:Mod+T}}, {{key:Mod+N}}) i zumiranje preglednika ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Zato TakeoffCraft zumira list kotačićem te običnim tipkama {{key:Plus}} i {{key:Minus}}. Ako slučajno pritisnete {{key:Mod+Plus}}, cijela stranica se povećava; {{key:Mod+0}} je vraća. Pogledajte [Tipke, miševi i trackpadi](common:keys).

## Gdje je naredba Pomakni

Naredba Pomakni ne postoji: odaberite točku brojanja i povucite je, ili odaberite površinu ili liniju i povucite njezine ručke kuta.
