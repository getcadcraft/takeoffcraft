---
title: Sačuvaj i ponovo otvori predmer
summary: Sačuvajte predmer kao projektnu datoteku .takeoff.json, ponovo ga otvorite sa istim PDF-ovima i pogledajte šta se dešava kada PDF nedostaje ili je promenjen.
keywords: predmer u PDF-u, ugradi, prilog, sačuvaj, otvori, ponovo otvori, projekat, takeoff.json, nastavi, nastavak, revidiran PDF, promenjen PDF, nedostaje PDF, rezerva, automatsko čuvanje, oporavak, pad
from: bd5080a6
---

Predmer se čuva kao mala projektna datoteka, `(naziv).takeoff.json`. Sadrži vaše stavke, sklopove, cene, razmeru svakog lista i svaku oznaku. **Ne** sadrži PDF-ove; pronalazi ih ponovo po njihovom sadržaju.

## Čuvanje

1. Izaberite {{ui:Sačuvaj predmer}} u grupi {{ui:Datoteka}}, ili pritisnite {{key:Mod+S}}.
   Vaš pregledač preuzima `(naziv).takeoff.json`. Statusna traka kaže „Sačuvano (naziv).takeoff.json. Otvara se ponovo preko istih PDF-ova (uparuju se po sadržaju).”
2. Premestite datoteku pored PDF-ova posla, da ostanu zajedno.

Svako čuvanje preuzima novu datoteku. Pregledač može drugu nazvati `(naziv) (1).takeoff.json`; zadržite najnoviju.

Naziv dolazi od prvog PDF-a koji ste otvorili u ovom predmeru.

:::note
{{ui:Sačuvaj predmer}} je i dalje jedini način da predmer čuvate kao datoteku. Dok radite, TakeoffCraft takođe čuva rezervnu kopiju za oporavak u ovom pregledaču (pogledajte ispod), a čuvanje u oblaku još nije dostupno. Ako pokušate da zatvorite karticu sa nesačuvanim izmenama, pregledač pita da li želite da odete.
:::

## Zadržite predmer unutar PDF-a

{{ui:Izvezi}} › {{ui:PDF sa predmerom unutra}} preuzima kopiju svakog otvorenog PDF-a, nazvanu kao `Planovi (sa predmerom).pdf`, koja nosi ceo predmer kao prilog: stavke, oznake, razmere, oblasti ponude, sve što sadrži `.takeoff.json`. Stranice su netaknute, pa izgleda i štampa se kao original, a drugi čitači PDF-a navode predmer među svojim prilozima.

Otvorite taj PDF u TakeoffCraft-u (na bilo koji način otvaranja PDF-ova) i on pita **Ovaj PDF ima predmer unutra**: izaberite {{ui:Otvori predmer}} da ga vratite, ili {{ui:Samo PDF}} da otvorite samo crtež. Kopija predstavlja PDF iz kojeg je napravljena, pa se `.takeoff.json` sačuvan iz bilo koje od njih otvara na obe.

Sa više PDF-ova, svaka kopija nosi ceo predmer; otvorite ih zajedno. Ponovno čuvanje iz kopije zamenjuje predmer unutra, ne dodaje drugi. `.takeoff.json` je i dalje datoteka koju treba čuvati: mala je i to je ono što pišu automatsko čuvanje i desktop aplikacija.

## Ako se kartica ili pregledač zaustavi

Nekoliko sekundi posle svake promene TakeoffCraft čuva kopiju predmera u sopstvenom skladištu ovog pregledača, zajedno sa njegovim PDF-ovima kada zajedno ne prelaze 64 MB. Ništa se ne otprema. Kada sačuvate predmer, započnete novi ili otvorite drugi projekat, kopija nestaje.

Ako kartica pukne, pregledač ili računar se zaustavi, ili napustite sa nesačuvanim izmenama, sledeći put kada otvorite TakeoffCraft pita **Oporaviti vaš rad?** i navodi predmer po nazivu. Izaberite **Oporavi** da ga dobijete nazad: stavke, oznake i razmere se vraćaju, a njegovi PDF-ovi se ponovo otvaraju ako su sačuvani. Statusna traka kaže „Oporavljeno (naziv). Još nije sačuvano u datoteku: Sačuvaj predmer ga čuva.” Kada su PDF-ovi bili preveliki da bi se sačuvali, otvorite ih ponovo; oznake se pojavljuju na njihovim listovima. Više: [Oporavak rada](common:recover).

## Ponovno otvaranje

1. Otvorite TakeoffCraft.
2. Prevucite `.takeoff.json` datoteku i njegove PDF-ove zajedno na stranicu. Ili izaberite {{ui:Otvori planove}} za PDF-ove i {{ui:Otvori predmer}} za projekat, bilo kojim redom.
   Statusna traka kaže „Otvoreno (naziv): 12 stavki, 340 oznaka.” Svaki list dobija svoju razmeru nazad, a oznake se pojavljuju na njihovim listovima.

Redosled PDF-ova nije bitan, kao ni njihovi nazivi ili fascikle. TakeoffCraft prepoznaje svaki PDF po otisku sadržaja.

Ako otvorite projekat dok trenutni predmer ima nesačuvane izmene, TakeoffCraft prvo pita: **Otkaži**, **Odbaci izmene** ili **Prvo sačuvaj predmer**. Otvaranje projekta zamenjuje trenutne stavke i oznake; PDF-ovi koji su već otvoreni ostaju otvoreni.

## Kada PDF nedostaje

Ako otvorite projekat bez svih njegovih PDF-ova, statusna traka dodaje „Otvorite njegove PDF-ove da vidite oznake (navedeno pod spiskom listova).” Ispod spiska listova napomena kaže:

„Ovaj predmer obuhvata i PDF-ove koji nisu otvoreni. Njihove količine se računaju; otvorite ih da vidite i izmenite njihove oznake:”

za kojom slede nazivi datoteka i veličine. Njihove oznake i dalje se računaju u svim zbirovima i izvozima, sa razmerama pri kojima su izmerene. Otvorite te PDF-ove da vidite i izmenite oznake.

## Kada se PDF promenio

PDF koji je revidiran, ili koji je drugi program samo ponovo sačuvao, ima drugačiji sadržaj, pa je za TakeoffCraft **druga datoteka**, čak i sa istim nazivom. U napomeni ispod spiska listova, takva datoteka kaže „datoteka sa ovim nazivom je otvorena, ali se sadržaj razlikuje”.

- Oznake ostaju vezane za staru verziju. Nastavljaju da se računaju, na svojim starim pozicijama i razmerama.
- Revidirani PDF se otvara kao novi listovi bez razmere i bez oznaka.

Da prebacite predmer na reviziju, otvorite oba PDF-a i upotrebite {{ui:Uporedi}} na novom listu: [Uporedite revidirani list i prebacite predmer](topic:compare-revisions).

## Oštećena ili tuđa datoteka

TakeoffCraft proverava svaku projektnu datoteku pre upotrebe. Poruke koje možete videti:

- „(datoteka) nije TakeoffCraft projekat (nije ispravan JSON).”
- „Ovo nije TakeoffCraft projektna datoteka.”
- „Ovaj projekat je sačuvao noviji TakeoffCraft. Otvorite ga tamo.”
- „3 oznake su oštećene i izostavljene.” (ostatak se otvara)

## Istorija opozivanja

Istorija opozivanja počinje ispočetka kada otvorite projekat. Čuvanje je ne briše.
