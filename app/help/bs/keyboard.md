---
title: Tastatura i miš
summary: Svaka tipka, miš, tačpad i radnja dodirom u aplikaciji TakeoffCraft, grupisano, sa razlikama među platformama.
keywords: tipke, prečice, tastatura, miš, tačpad, dodir, pomjeranje pogleda, zumiranje, točkić, desni klik, dvostruki klik, razmaknica, shift, kopiraj, zalijepi, izreži, dupliciraj, odaberi sve
from: 6f2c441d
---

Tipke sa slovima rade kada je pokazivač bilo gdje na stranici i ne kucate u polju. Dok je dijalog otvoren, važe njegove tipke. Slova rade sa {{key:Shift}} ili bez njega.

## Alati

| Tipka | Alat |
|---|---|
| {{key:V}} | {{ui:Odaberi}} |
| {{key:L}} | {{ui:Linijski}} |
| {{key:A}} | {{ui:Površina}} |
| {{key:O}} | {{ui:Krug}} |
| {{key:B}} | {{ui:Prostorija}} (popuni prostoriju jednim klikom) |
| {{key:R}} | {{ui:Luk}} uključen ili isključen (u Linijskom, Površini i Izrezu) |
| {{key:E}} | {{ui:Odbitak}} uključen ili isključen: sljedeći segmenti dionice se crtaju, ali se ne broje |
| Cifra, `@` ili `#` dok crtate | Otvorite okvir {{ui:Unos}}: unesite dužinu ili koordinate, {{key:Enter}} postavlja tačku ([Mjerenje linijskih dionica](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Izrez}} (prvo odaberite površinu) |
| {{key:C}} | {{ui:Brojanje}} |
| {{key:S}} | {{ui:Auto brojanje}} |
| {{key:K}} | {{ui:Kalibriraj}} |
| {{key:D}} | {{ui:Provjeri}} razmjeru |

## Dok crtate

| Tipka ili radnja | Šta radi |
|---|---|
| Klik | Postavlja tačku (tačku, uz Brojanje). |
| {{key:P}} | Putanja: odaberite cijelu povezanu putanju linije PDF-a ili obris oko klika ([Odabir linija PDF-a](topic:pick-the-lines)). |
| {{key:F3}} | Hvatanje za linije crteža uključeno ili isključeno ([Hvatanje za linije crteža](topic:snap-to-the-drawing)). |
| {{key:Shift}} držan pri kliku | Hvata segment na 0°, 45°, 90° ili 135° u odnosu na posljednju tačku. Ne važi za tačke luka ni krugove. |
| Dvostruki klik | Završava dionicu ili zatvara površinu ili izrez. |
| {{key:Enter}} | Završava dionicu ili zatvara površinu ili izrez. |
| Desni klik (bez pomjeranja) | Završava dionicu ili zatvara površinu ili izrez. |
| Klik na prvu tačku | Zatvara površinu ili izrez (od treće tačke). |
| {{key:Backspace}} ili {{key:Delete}} | Uklanja posljednju tačku (prvo tačku luka koja čeka). |
| {{key:Esc}} | Odbacuje tačku luka koja čeka; zatim poništava nedovršenu oznaku; zatim se vraća na {{ui:Odaberi}}. |

## Odabir i uređivanje

| Tipka ili radnja | Šta radi |
|---|---|
| Klik na oznaku (alat Odaberi) | Odabire je i čini njenu stavku aktivnom. |
| {{key:Shift}} + klik na oznaku | Dodaje je u izbor ili je uklanja iz njega. |
| {{key:Mod+A}} | Odabire sve oznake na otvorenom listu. |
| Prevucite ručicu ugla | Premješta tu tačku ({{key:Shift}} hvata na 45°). Radi kada je odabrana jedna oznaka. |
| {{key:Delete}} ili {{key:Backspace}} | Briše odabrane oznake (kada ne crtate). |
| {{key:Esc}} | Ne odabire ništa: briše izbor i liniju provjere. |
| {{key:Mod+Z}} | Poništi. |
| {{key:Mod+Y}} ili {{key:Mod+Shift+Z}} | Ponovi. |

## Kopiranje i lijepljenje

| Tipka | Šta radi |
|---|---|
| {{key:Mod+C}} | Kopira odabrane oznake, sa njihovim stavkama. |
| {{key:Mod+X}} | Izreže: kopira odabrane oznake, zatim ih briše. |
| {{key:Mod+V}} | Zalijepi: kopija prati pokazivač; kliknite gdje treba da ide. |
| {{key:Mod+Shift+V}} | Zalijepi na mjestu: isto mjesto na otvorenom listu. |
| {{key:Mod+D}} | Dupliraj odabrane oznake: kopija prati pokazivač; kliknite gdje treba da ide. |
| {{key:Esc}} | Ne postavlja ništa: poništava lijepljenje ili duplikat koji je na pokazivaču. |

Slova sama po sebi i dalje biraju alate ({{key:C}} je {{ui:Brojanje}}, {{key:D}} je {{ui:Provjeri}}, {{key:X}} je {{ui:Izrez}}, {{key:V}} je {{ui:Odaberi}}, {{key:A}} je {{ui:Površina}}); samo {{key:Mod}} uz njih kopira i lijepi. U tekstualnom polju ove tipke kopiraju i lijepe tekst kao obično. Pogledajte [Kopiranje, lijepljenje i dupliciranje oznaka](topic:copy-paste).

:::warning
{{key:Backspace}} briše odabranu oznaku kada ne crtate. Ako se to desi slučajno, {{key:Mod+Z}} je vraća.
:::

## Datoteke

| Tipka | Šta radi |
|---|---|
| {{key:Mod+O}} | {{ui:Otvori planove}} |
| {{key:Mod+S}} | {{ui:Spasi predmjer}} |

Ove dvije rade i dok kucate u polju.

## Prikaz i listovi

| Tipka ili radnja | Šta radi |
|---|---|
| Točkić miša | Zumira unutra i van na mjestu pokazivača. |
| Prevlačenje (lijevim, srednjim ili desnim dugmetom) | Pomjera pogled. U {{ui:Auto brojanje}} prevlačenje lijevim dugmetom umjesto toga crta okvir za pretragu. |
| {{key:Space}} držan + prevlačenje | Pomjera pogled, u bilo kojem alatu. |
| {{key:F}} | {{ui:Cijela stranica}} |
| {{key:W}} | {{ui:Širina}} |
| {{key:Plus}} ili {{key:=}} | Zumira unutra na sredini prikaza. |
| {{key:Minus}} | Zumira van na sredini prikaza. |
| {{key:PageDown}} / {{key:PageUp}} | Sljedeći ili prethodni list na spisku listova. |
| {{key:Ctrl+Shift+F}} | Prebacuje načine rada preko cijelog ekrana (Control na svim platformama, također na Mac-u). |
| {{key:F1}} | Otvara ili zatvara ovu pomoć, panel sa strane. |
| {{key:3}} | 3D prikaz provjere lista, uključen ili isključen. |

## 3D prikaz

| Tipka ili radnja | Šta radi |
|---|---|
| Prevlačenje, ili prevlačenje srednjim dugmetom | Kruži oko objekta. |
| {{key:Shift}} + prevlačenje, ili prevlačenje desnim dugmetom | Pomjera pogled. |
| Točkić miša | Zumira na mjestu pokazivača. Na tačpadu, prevlačenje sa dva prsta kruži, a štipanje zumira. |
| Klik | Odabire oznaku ispod pokazivača ({{key:Shift}} + klik dodaje ili uklanja). |
| {{key:F}} ili {{key:W}} | Zumira na cijeli sadržaj. |
| {{key:3}} | Vraća na ravan list. |

Pogledajte [Provjera predmjera u 3D](topic:check-in-3d).

## Auto brojanje

| Tipka ili radnja | Šta radi |
|---|---|
| Prevucite okvir | Uokviruje simbol za pretragu (pokreće pretragu). |
| Klik na okvir podudaranja | Odbacuje ga ili vraća. |
| {{key:Esc}} | Otkazuje pokrenutu pretragu ili odbacuje pregled. |

## Pomoć

| Tipka | Šta radi |
|---|---|
| {{key:F1}} | Otvara ili zatvara panel pomoći (također dugme {{ui:Pomoć}} u traci aplikacije). Radi u svakom alatu, čak i dok kucate u polju. |
| {{key:Esc}} | Zatvara panel pomoći. U njegovom polju za pretragu, prvi Esc briše pretragu. Dok je panel otvoren, Esc pritisnut nakon klika na list prvo zatvara panel; pritisnite ga ponovo da otkažete u aplikaciji TakeoffCraft. |

:::mac
Na mnogim Mac tastaturama gornji red kontroliše svjetlinu i zvuk. Pritisnite fn sa F1, ili uključite „Use F1, F2, etc. keys as standard function keys“ u Postavkama sistema, pod Tastatura.
:::

## Dijalozi i polja

| Tipka | Šta radi |
|---|---|
| {{key:Enter}} | U polju: primjenjuje vrijednost. U dijalogu za kalibraciju: {{ui:Postavi razmjeru}}. |
| {{key:Esc}} | Zatvara dijalog (kao {{ui:Otkaži}}); zatvara obrazac {{ui:Nova stavka}}. |
| {{key:Tab}} | Prelazi na sljedeće polje. |

## Napomene o platformama

:::mac
- {{key:Mod}} je tipka Command: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Cijeli ekran je izuzetak: Control+Shift+F.
- Desni klik je klik sa dva prsta na tačpadu, kada je sekundarni klik uključen u Postavkama sistema, pod Tačpad. TakeoffCraft čita samo sekundarno dugme; Control-klik može se računati kao običan klik i dodati tačku.
- Pomicanje sa dva prsta na tačpadu zumira list (ne pomjera ga). Za pomjeranje pogleda pritisnite i prevucite, ili držite razmaknicu i prevucite.
- Page Up i Page Down su fn sa strelicama gore i dolje na tastaturama bez njih.
- Backspace je tipka označena natpisom Delete.
:::

:::windows
- {{key:Mod}} je Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Na tačpadu laptopa, pomicanje sa dva prsta zumira list. Za pomjeranje pogleda pritisnite i prevucite.
:::

:::linux
- {{key:Mod}} je Ctrl. Neka radna okruženja koriste sopstvene prečice Ctrl+Alt ili Super; TakeoffCraft ne koristi nijednu od njih.
- Na tačpadu, pomicanje sa dva prsta zumira list. Za pomjeranje pogleda pritisnite i prevucite.
:::

:::touch
TakeoffCraft dodir čita kao jedan pokazivač:

- Dodir postavlja tačku, odabire oznaku ili dodaje tačku brojanja.
- Prevlačenje jednim prstom pomjera list (u {{ui:Auto brojanje}} crta okvir za pretragu).
- Zumiranje štipanjem još nije podržano. Koristite {{ui:Cijela stranica}} i {{ui:Širina}}, ili {{key:Plus}} i {{key:Minus}} na tastaturi.
- Za zatvaranje površine dodirnite njenu prvu tačku. Za završetak dionice dvaput dodirnite tamo gdje pregledač dvostruki dodir pretvara u dvostruki klik, ili pritisnite {{key:Enter}} na tastaturi.
- Nema prikaza dužine uživo dok ne dodirnete, jer nema lebdenja pokazivača.

Tastatura i miš ili tačpad su danas bolji način za predmjer.
:::

## Tipke koje pregledač zadržava

Pregledači zadržavaju neke prečice za sebe, pa ih stranica ne može koristiti: zatvaranje kartice ({{key:Mod+W}}), nova kartica ili prozor ({{key:Mod+T}}, {{key:Mod+N}}) i zumiranje pregledača ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Zato TakeoffCraft zumira list točkićem i samim tipkama {{key:Plus}} i {{key:Minus}}. Ako greškom pritisnete {{key:Mod+Plus}}, cijela stranica se uvećava; {{key:Mod+0}} je vraća. Pogledajte [Tipke, miševi i tačpadovi](common:keys).

## Gdje je Premjesti

Ne postoji naredba Premjesti: odaberite tačku brojanja i prevucite je, ili odaberite površinu ili liniju i prevucite njene ručice uglova.
