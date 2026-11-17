---
title: Meniji, tasteri i miš
summary: Izaberite stil menija koji odgovara načinu na koji već radite, dajte bilo kojoj komandi sopstveni taster, premeštajte komande između menija i podesite šta rade točkić i dugmad miša.
keywords: stil menija, meniji, traka menija, traka, kartice trake, traka alata, prečice, tasteri, prilagodi, preslikaj, ponovo dodeli, miš, točkić, obrni, smer zumiranja, srednje dugme, desno dugme, pomeri pogled, izvezi, uvezi, prebacivanje, poznato, radni sto za predmer, uslovi
from: f01f0d6d
---

Komande TakeoffCraft-a su iste kako god do njih dođete. **Stil menija** samo određuje gde stoje na ekranu, kako se zovu tamo i koje ih tastere pokreću. Izaberite ga u {{ui:Podešavanja}} ({{key:Mod+,}}) › {{ui:TakeoffCraft}} › {{ui:Meniji, tasteri i miš}}; promena je odmah, a ovaj pregledač je pamti.

## Tri stila

| Stil | Šta dobijate |
|---|---|
| {{ui:TakeoffCraft}} | Sopstvena traka alata TakeoffCraft-a: Datoteka, Izvezi, Razmera, Predmer, Uredi i Pogled, sa tasterima alatki od jednog slova. Početak. |
| {{ui:Radni sto za predmer}} | Traka menija ({{ui:Datoteka}}, {{ui:Uredi}}, {{ui:Pogled}}, {{ui:Razmera}}, {{ui:Predmer}}, {{ui:Stavke}}, {{ui:Označavanje}}, {{ui:Izvezi}}) nad jednim redom alatki za predmer, onako kako programi za predmer na ekranu raspoređuju svoje. Stavke se na tom redu zovu uslovi. Isti tasteri, plus {{key:N}} za novu stavku. Predlošci razmere prelaze na traku lista, uz razmeru lista. |
| {{ui:Traka predmera}} | Kartice trake nazvane po poslu: {{ui:Predmer}} (merenje, oblici, razmera, sa crteža, uslovi), {{ui:Uredi}}, {{ui:Pogled}}, {{ui:Označavanje}} i {{ui:Predračun}} (radna sveska, označeni PDF-ovi, ponuda), sa menijem {{ui:Datoteka}} i brzim redom za otvaranje, čuvanje, opoziv i ponovo. Alatke koje koristite ceo dan su velike, a njihovi susedi mali i složeni. Isti tasteri; predlošci razmere prelaze na traku lista. |

Sva tri stila zadržavaju TakeoffCraft-ove tastere: {{key:V}} izbor, {{key:L}} linijski, {{key:A}} površina, {{key:O}} krug, {{key:B}} prostorija, {{key:P}} putanja (biranje linija PDF-a), {{key:X}} izrez, {{key:C}} prebroj, {{key:S}} automatsko brojanje, {{key:K}} kalibriši, {{key:D}} proveri, {{key:R}} režim luka, {{key:E}} režim odbitka, {{key:F}} i {{key:W}} za uklapanje, {{key:3}} 3D provera, {{key:F3}} hvatanje, i {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}.

Alatke trake lista (beleške, oblaci, isticanja, Uporedi, 3D) čekaju dok se ne otvori PDF; ako ih izaberete ranije, statusna linija to kaže.

:::tip
Taster koji pripada TakeoffCraft-ovom sopstvenom rasporedu, a vaš stil ga dodeljuje drugoj komandi, ne radi ništa, a statusna linija kaže gde je otišla njegova komanda („U Mojim tasterima, Prebroj je Ctrl+Alt+C“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strelice uvek zadržavaju svoje značenje. Dok crtate deonicu ili obris, lepite ili pregledate automatsko brojanje, slova i brojevi unete dužine ostaju kod crteža.
:::

## Prilagodite

1. Izaberite stil koji je najbliži onome što želite, pa kliknite {{ui:Prilagodi…}}.
2. Na {{ui:Tasteri i meniji}} pronađite komandu (polje za pretragu pomaže). Kliknite {{ui:Dodaj taster}} i pritisnite taster, ili dva tastera zaredom za dvoslovni taster. Kliknite taster da ga skinete.
3. Uz traku menija, {{ui:Gde se nalazi}} premešta komandu u drugi meni, ili na {{ui:Samo tasteri}}.
4. Na {{ui:Miš}} podesite točkić i dugmad koja pomeraju list.
5. Dajte mu ime i kliknite {{ui:Sačuvaj}}.

Čuvanje ugrađenog stila pravi vašu kopiju („Moj radni sto za predmer“); ugrađeni se nikad ne menja. Taster dodeljen dvema komandama prikazuje se crveno i mora se popraviti pre čuvanja.

## Miš

- **Točkić miša**: {{ui:Skrolovanje nagore uvećava}} (početak) ili {{ui:Skrolovanje nagore smanjuje}}, i koliko brzo. Stiskanje na tačpedu uvek uvećava u smeru kojim se pomeraju prsti.
- **Pomeranje lista**: srednjim dugmetom, desnim dugmetom, ili oba. Prevlačenje levom praznim papirom i {{key:Space}} uz prevlačenje uvek pomeraju; desni klik bez prevlačenja uvek završava deonicu ili obris.
- **Prevlačenje u 3D prikazima**: {{ui:Svaki pogled zasebno}} zadržava dugmad 3D provere (levo i srednje rotira, desno pomera). Ili podesite srednje i desno dugme da rotiraju, pomeraju, zumiraju ili ništa; {{key:Shift}} uz dugme menja rotiranje i pomeranje. Levo dugme uvek rotira i bira.

## Ponesite ih sa sobom

{{ui:Izvezi}} čuva stil u upotrebi kao mali `.ccinput.json` fajl; {{ui:Uvezi…}} dodaje jedan, sa drugog računara ili od kolege. Uvezeni fajl može da pokazuje samo na TakeoffCraft-ove sopstvene komande: sve drugo se u njemu izostavlja i broji u statusnoj liniji. {{ui:Izbriši ovaj stil}} uklanja jedan vaš.

:::note
Ova podešavanja ostaju u ovom pregledaču. {{ui:Koristi ovaj stil u svakoj aplikaciji}} ispod kartica stila čini da se svaka aplikacija otvara u odgovarajućem stilu (sopstvena traka alata, traka menija ili traka), sa izmenama koje ste napravili u svakoj. TakeoffCraft nema stil sa komandnom linijom: kada se jedan izabere za svaku aplikaciju, TakeoffCraft zadržava sopstvenu traku alata.

{{ui:Traka predmera}} je takođe traka rasporeda {{ui:Traka i pregledač projekta}} ({{ui:Podešavanja}} › {{ui:Globalno}} › {{ui:Raspored}}): pogledajte [Ekran TakeoffCraft-a](topic:workspace).
:::

Povezano: [Tasteri i miš](topic:keyboard) · [Podešavanja TakeoffCraft-a](topic:settings) · [Prelazak sa drugog softvera za predmer](topic:coming-from)
