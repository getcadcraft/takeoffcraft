---
title: Početak novog predmjera
summary: Obrišite sve i započnite prazan predmjer bez ponovnog učitavanja stranice, a prije toga sačuvajte svoj rad.
keywords: novi, novi predmjer, obriši, resetuj, počni ispočetka, prazno, zatvori PDF-ove, sljedeći posao
from: 16d392a4
---

{{ui:Novi}} zatvara sve PDF-ove i počinje prazan predmjer na istoj stranici.

1. Spasite trenutni predmjer ako ga želite zadržati: {{ui:Spasi predmjer}} ili {{key:Mod+S}}.
2. Odaberite {{ui:Novi}} u grupi {{ui:Datoteka}}.
3. Ako postoje nesačuvane promjene, TakeoffCraft pita **Nesačuvan predmjer**: odaberite {{ui:Prvo spasi predmjer}} (preuzima projekat, zatim briše), {{ui:Odbaci promjene}} ili {{ui:Otkaži}}.
   Ekran se vraća u prazno stanje: nema PDF-ova, stavki, oznaka ni razmjera. Statusna traka kaže „Novi predmjer. Otvorite PDF-ove da započnete.“

Šta se briše:

- svaki otvoreni PDF, njegovi listovi i sličice,
- stavke, sklopovi, oznake i razmjere,
- zumiranje i položaj svakog lista,
- historija poništavanja ({{ui:Novi}} se ne može poništiti),
- režim luka i svaka pretraga ili pregled auto brojanja.

Vaše datoteke na disku se ne diraju. Da ponovo preuzmete stari predmjer, otvorite njegov `.takeoff.json` i PDF-ove: pogledajte [Čuvanje i ponovno otvaranje predmjera](topic:save-and-reopen).

:::note
Svaki novi predmjer počinje bez stavki. Da prenesete stavke, prvo ih kopirajte: {{ui:Kopiraj stavku}} pod Stavke (ili kopirajte oznake, koje nose svoje stavke), zatim {{ui:Zalijepi}} u novom predmjeru. Pogledajte [Kopiranje, lijepljenje i dupliciranje oznaka](topic:copy-paste). Za stavke koje koristite na svakom poslu, držite ih u svojoj [biblioteci cijena](topic:price-library) i dodajte ih odatle, ili dodajte [paket radova](topic:trade-packs).
:::
