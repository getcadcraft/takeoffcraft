---
title: Meniji, tipke i miš
summary: Izaberite stil menija koji odgovara načinu na koji već radite, dodijelite bilo kojoj naredbi svoju tipku, premjestite naredbe između menija i podesite šta rade točkić i dugmad miša.
keywords: stil menija, meniji, traka menija, traka, kartice trake, alatna traka, prečice, tipke, prilagodi, ponovno dodijeli, miš, točkić, obrni, smjer zumiranja, srednje dugme, desno dugme, pomjeranje pogleda, izvoz, uvoz, prebacivanje, poznato, radni sto za predmjer, uvjeti
from: f01f0d6d
---

Naredbe aplikacije TakeoffCraft su iste bez obzira kojim putem do njih dođete. **Stil menija** samo određuje gdje se naredbe nalaze na ekranu, kako se tamo zovu i koje tipke ih pokreću. Odaberite ga u {{ui:Postavke}} ({{key:Mod+,}}) › {{ui:TakeoffCraft}} › {{ui:Meniji, tipke i miš}}; promjena je odmah vidljiva, a ovaj pregledač to pamti.

## Tri stila

| Stil | Šta dobijate |
|---|---|
| {{ui:TakeoffCraft}} | Sopstvena alatna traka aplikacije TakeoffCraft: Datoteka, Izvoz, Razmjera, Predmjer, Uređivanje i Pogled, sa jednoslovnim tipkama alata. Početni. |
| {{ui:Radni sto za predmjer}} | Traka menija ({{ui:Datoteka}}, {{ui:Uređivanje}}, {{ui:Pogled}}, {{ui:Razmjera}}, {{ui:Predmjer}}, {{ui:Stavke}}, {{ui:Označavanje}}, {{ui:Izvoz}}) iznad jednog reda alata za predmjer, kako programi za predmjer na ekranu raspoređuju svoje. Stavke se na tom redu zovu uvjeti. Iste tipke, plus {{key:N}} za novu stavku. Predlošci razmjere premještaju se na traku lista, pored razmjere lista. |
| {{ui:Traka predmjera}} | Kartice trake nazvane po poslu: {{ui:Predmjer}} (mjerenje, oblik, razmjera, iz crteža, uvjeti), {{ui:Uređivanje}}, {{ui:Pogled}}, {{ui:Označavanje}} i {{ui:Predračun}} (radna sveska, označeni PDF-ovi, ponuda), sa menijem {{ui:Datoteka}} i brzim redom sa dugmadima za otvori, spasi, poništi i ponovi. Alati koje koristite cijeli dan su veliki, a njihovi susjedi mali i poredani jedan preko drugog. Iste tipke; predlošci razmjere premještaju se na traku lista. |

Sva tri stila zadržavaju tipke aplikacije TakeoffCraft: {{key:V}} odabir, {{key:L}} linijski, {{key:A}} površina, {{key:O}} krug, {{key:B}} prostorija, {{key:P}} putanja (odabir linija PDF-a), {{key:X}} izrez, {{key:C}} brojanje, {{key:S}} auto brojanje, {{key:K}} kalibracija, {{key:D}} provjera, {{key:R}} režim luka, {{key:E}} režim odbitka, {{key:F}} i {{key:W}} za uklapanje, {{key:3}} 3D prikaz provjere, {{key:F3}} hvatanje, i {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}.

Alati trake lista (bilješke, oblaci, isticanja, Uporedi, 3D) čekaju dok nije otvoren PDF; ako ih odaberete prije toga, statusna linija to kaže.

:::tip
Tipka koja pripada rasporedu aplikacije TakeoffCraft, ali ju je vaš stil dodijelio drugoj naredbi, ne radi ništa, a statusna linija kaže gdje je otišla njena naredba („U Mojim tipkama, Brojanje je Ctrl+Alt+C“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strelice uvijek zadržavaju svoje značenje. Dok crtate dionicu ili obris, lijepite ili pregledate auto brojanje, slova i brojevi upisane dužine ostaju uz crtež.
:::

## Prilagodite po svom

1. Odaberite stil koji je najbliži onome što želite, zatim kliknite {{ui:Prilagodi…}}.
2. Na {{ui:Tipke i meniji}} pronađite naredbu (pomaže polje za pretragu). {{ui:Dodaj ključ}} i pritisnite tipku, ili dvije tipke jednu za drugom za dvoslovnu tipku. Kliknite tipku da je uklonite.
3. Uz traku menija, {{ui:Gdje stoji}} premješta naredbu u drugi meni ili u {{ui:Samo tipke}}.
4. Na {{ui:Miš}} podesite točkić i dugmad koja pomjeraju list.
5. Dajte mu ime i kliknite {{ui:Sačuvaj}}.

Čuvanje ugrađenog stila pravi vašu kopiju („Moj radni sto za predmjer“); ugrađeni se nikad ne mijenja. Tipka dodijeljena dvjema naredbama prikazuje se crveno i mora se ispraviti prije snimanja.

## Miš

- **Točkić miša**: {{ui:Skrolanje prema gore zumira unutra}} (početno) ili {{ui:Skrolanje prema gore zumira van}}, i koliko brzo. Štipanje na tačpadu uvijek zumira onako kako se pomjeraju vaši prsti.
- **Pomjeranje lista**: srednjim dugmetom, desnim dugmetom ili oboje. Prevlačenje lijevim dugmetom po praznom papiru i {{key:Space}} sa prevlačenjem uvijek pomjeraju pogled; desni klik bez prevlačenja uvijek završava dionicu ili obris.
- **Prevlačenje u 3D prikazima**: {{ui:Svaki prikaz zasebno}} zadržava dugmad 3D prikaza provjere (lijevo i srednje kruži, desno pomjera). Ili postavite srednje i desno dugme na kruženje, pomjeranje, zumiranje ili ništa; {{key:Shift}} uz dugme mijenja mjesta kruženju i pomjeranju. Lijevo dugme uvijek kruži i bira.

## Ponesite ga sa sobom

{{ui:Izvoz}} čuva stil u upotrebi kao malu datoteku `.ccinput.json`; {{ui:Uvezi…}} dodaje jednu, sa drugog računara ili od kolege. Uvezena datoteka može pokazivati samo na naredbe aplikacije TakeoffCraft: sve drugo u njoj se izostavlja i broji u statusnoj liniji. {{ui:Izbriši ovaj stil}} uklanja jedan od vaših.

:::note
Ove postavke ostaju u ovom pregledaču. {{ui:Koristi ovaj stil u svakoj aplikaciji}} ispod kartica stilova čini da se svaka aplikacija otvara u odgovarajućem stilu (sopstvena alatna traka, traka menija ili traka kartica), sa promjenama koje ste napravili u svakoj aplikaciji. TakeoffCraft nema stil sa komandnom linijom: kada se jedan odabere za svaku aplikaciju, TakeoffCraft zadržava sopstvenu alatnu traku.

{{ui:Traka predmjera}} je također traka rasporeda {{ui:Traka i pregled projekta}} ({{ui:Postavke}} › {{ui:Globalno}} › {{ui:Raspored}}): pogledajte [Ekran aplikacije TakeoffCraft](topic:workspace).
:::

Povezano: [Tastatura i miš](topic:keyboard) · [Postavke aplikacije TakeoffCraft](topic:settings) · [Dolazak sa drugog softvera za predmjer](topic:coming-from)
