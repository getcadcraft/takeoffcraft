---
title: Pokretanje novog predmera
summary: Obrišite sve i počnite prazan predmer bez ponovnog učitavanja stranice, i prvo sačuvajte svoj rad.
keywords: novi, novi predmer, obriši, resetuj, počni ispočetka, prazan, zatvori PDF-ove, sledeći posao
from: 16d392a4
---

{{ui:Novi}} zatvara svaki PDF i počinje prazan predmer na istoj stranici.

1. Sačuvajte tekući predmer ako ga želite zadržati: {{ui:Sačuvaj predmer}} ili {{key:Mod+S}}.
2. Izaberite {{ui:Novi}} u grupi {{ui:Datoteka}}.
3. Ako postoje nesačuvane izmene, TakeoffCraft pita **Nesačuvan predmer**: izaberite {{ui:Prvo sačuvaj predmer}} (preuzima projekat, pa briše), {{ui:Odbaci izmene}} ili {{ui:Otkaži}}.
   Prozor se vraća u prazno stanje: nema PDF-ova, stavki, oznaka ni razmera. Statusna traka kaže „Novi predmer. Otvorite PDF-ove da počnete.“

Šta se briše:

- svaki otvoreni PDF, njegovi listovi i sličice,
- stavke, sklopovi, oznake i razmere,
- zumiranje i položaj svakog lista,
- istorija opoziva (ne možete opozvati {{ui:Novi}}),
- režim luka, i svaka pretraga ili pregled automatskog brojanja.

Vaši fajlovi na disku se ne diraju. Da ponovo uzmete stari predmer, otvorite njegov `.takeoff.json` i PDF-ove: pogledajte [Čuvanje i ponovno otvaranje predmera](topic:save-and-reopen).

:::note
Svaki novi predmer počinje bez stavki. Da prenesete stavke, prvo ih kopirajte: {{ui:Kopiraj stavku}} pod {{ui:Stavke}} (ili kopirajte oznake, koje nose svoje stavke), pa {{ui:Nalepi}} u novom predmeru. Pogledajte [Kopiranje, lepljenje i dupliranje oznaka](topic:copy-paste). Za stavke koje koristite na svakom poslu, držite ih u svojoj [biblioteci cena](topic:price-library) i dodajte ih odatle, ili dodajte [paket delova](topic:trade-packs).
:::
