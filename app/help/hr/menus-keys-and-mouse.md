---
title: Izbornici, tipke i miš
summary: Odaberite stil izbornika koji odgovara načinu na koji već radite, dodijelite bilo kojoj naredbi vlastitu tipku, premjestite naredbe među izbornicima i odredite što rade kotačić i tipke miša.
keywords: stil izbornika, izbornici, traka izbornika, vrpca, kartice vrpce, traka alata, prečaci tipkovnice, tipke, prilagodi, preraspodijeli tipke, miš, kotačić, obrni, smjer zumiranja, srednja tipka, desna tipka, pomicanje, izvoz, uvoz, prebacivanje, poznato, stol za predmjer, uvjeti
from: f01f0d6d
---

Naredbe programa TakeoffCraft jednake su bez obzira na to kako do njih dođete. **Stil izbornika** samo određuje gdje se nalaze na zaslonu, kako se zovu i koje ih tipke pokreću. Odaberite ga u {{ui:Postavke}} ({{key:Mod+,}}) › {{ui:TakeoffCraft}} › {{ui:Izbornici, tipke i miš}}; promjena je odmah, a ovaj preglednik je pamti.

## Tri stila

| Stil | Što dobivate |
|---|---|
| {{ui:TakeoffCraft}} | Vlastita traka alata programa TakeoffCraft: {{ui:Datoteka}}, {{ui:Izvoz}}, {{ui:Mjerilo}}, {{ui:Predmjer}}, {{ui:Uređivanje}} i {{ui:Pogled}}, s jednoslovnim tipkama alata. Polazište. |
| {{ui:Stol za predmjer}} | Traka izbornika ({{ui:Datoteka}}, {{ui:Uređivanje}}, {{ui:Pogled}}, {{ui:Mjerilo}}, {{ui:Predmjer}}, {{ui:Stavke}}, {{ui:Markup}}, {{ui:Izvoz}}) iznad jednog reda alata za predmjer, kako ih na zaslonu slažu programi za predmjer. Stavke se na redu zovu uvjeti. Iste tipke, plus {{key:N}} za novu stavku. Unaprijed postavljena mjerila prebacuju se na traku lista, uz mjerilo lista. |
| {{ui:Vrpca predmjera}} | Kartice vrpce nazvane prema poslu: {{ui:Predmjer}} (mjeri, oblikuje, mjerilo, iz crteža, uvjeti), {{ui:Uređivanje}}, {{ui:Pogled}}, {{ui:Markup}} i {{ui:Predračun}} (radna knjiga, označeni PDF-ovi, ponuda), s izbornikom {{ui:Datoteka}} i brzim redom za otvaranje, spremanje, poništavanje i ponavljanje. Alati koje koristite cijeli dan su veliki, a njihovi susjedi mali i složeni u slojeve. Iste tipke; unaprijed postavljena mjerila prebacuju se na traku lista. |

Sva tri stila zadržavaju tipke programa TakeoffCraft: {{key:V}} odabir, {{key:L}} linearno, {{key:A}} površina, {{key:O}} kružnica, {{key:B}} prostorija, {{key:P}} putanja (odabir linija PDF-a), {{key:X}} otvor, {{key:C}} brojanje, {{key:S}} autobrojanje, {{key:K}} kalibriranje, {{key:D}} provjera, {{key:R}} način luka, {{key:E}} način odbitka, {{key:F}} i {{key:W}} za prilagodbu, {{key:3}} 3D pregled provjere, {{key:F3}} hvatanje, te {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}.

Alati trake lista (bilješke, oblaci, isticanja, usporedba, 3D) čekaju dok nije otvoren PDF; ako ih odaberete prije toga, statusna linija to kaže.

:::tip
Tipka koja pripada rasporedu programa TakeoffCraft, ali ju vaš stil dodjeljuje drugoj naredbi, ne radi ništa, a statusna linija kaže kamo je naredba otišla („U Mojim tipkama, {{ui:Broji}} je Ctrl+Alt+C“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strelice uvijek zadržavaju svoje značenje. Dok crtate dionicu ili obris, lijepite ili pregledavate autobrojanje, slova i brojevi upisane duljine ostaju uz crtež.
:::

## Prilagodite po svojoj mjeri

1. Odaberite stil koji je najbliži onome što želite, zatim kliknite {{ui:Prilagodi…}}.
2. Na {{ui:Tipke i izbornici}} pronađite naredbu (okvir za pretragu pomaže). {{ui:Dodaj tipku}} i pritisnite tipku, ili dvije tipke zaredom za dvoslovnu tipku. Kliknite tipku da je uklonite.
3. S trakom izbornika, {{ui:Gdje se nalazi}} premješta naredbu u drugi izbornik ili u {{ui:Samo tipke}}.
4. Na {{ui:Miš}} postavite kotačić i tipke koje pomiču list.
5. Dajte mu naziv i kliknite {{ui:Spremi}}.

Spremanjem ugrađenog stila stvara se vaša kopija („Moj stol za predmjer“); ugrađeni se nikad ne mijenja. Tipka dodijeljena dvjema naredbama prikazuje se crveno i mora se ispraviti prije spremanja.

## Miš

- **Kotačić miša**: {{ui:Pomicanje prema gore približava}} (početak) ili {{ui:Pomicanje prema gore udaljava}}, i koliko brzo. Stiskanje prstima na trackpadu uvijek zumira u smjeru kretanja prstiju.
- **Pomicanje lista pomoću**: srednje tipke, desne tipke ili obje. Povlačenje lijevom tipkom po praznom papiru i {{key:Space}} uz povlačenje uvijek pomiču prikaz; desni klik bez povlačenja uvijek završava dionicu ili obris.
- **Povlačenje u 3D pregledima**: {{ui:Zasebno za svaki prikaz}} zadržava gumbe 3D pregleda provjere (lijevi i srednji orbitiraju, desni pomiče). Ili postavite srednju i desnu tipku na orbitiranje, pomicanje, zumiranje ili ništa; {{key:Shift}} uz tipku mijenja orbitiranje i pomicanje. Lijeva tipka uvijek orbitira i odabire.

## Ponesite sa sobom

{{ui:Izvoz}} sprema stil u uporabi kao malu datoteku `.ccinput.json`; {{ui:Uvezi…}} dodaje jednu, s drugog računala ili od kolege. Uvezena datoteka može pokazivati samo na naredbe programa TakeoffCraft: sve ostalo u njoj se izostavlja i broji u statusnoj liniji. {{ui:Izbriši ovaj stil}} uklanja jedan od vaših.

:::note
Ove postavke ostaju u ovom pregledniku. {{ui:Koristi ovaj stil u svakoj aplikaciji}} ispod kartica stila čini da se svaka aplikacija otvara u odgovarajućem stilu (vlastita traka alata, traka izbornika ili vrpca), uz promjene koje ste napravili u svakoj aplikaciji. TakeoffCraft nema stil s naredbenim redkom: kad je odabran za svaku aplikaciju, TakeoffCraft zadržava vlastitu traku alata.

{{ui:Vrpca predmjera}} ujedno je vrpca rasporeda {{ui:Vrpca i preglednik projekta}} ({{ui:Postavke}} › {{ui:Globalne}} › {{ui:Raspored}}): pogledajte [Zaslon programa TakeoffCraft](topic:workspace).
:::

Povezano: [Tipkovnica i miš](topic:keyboard) · [Postavke programa TakeoffCraft](topic:settings) · [Prijelaz s drugih programa za predmjer](topic:coming-from)
