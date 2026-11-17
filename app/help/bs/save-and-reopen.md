---
title: Spasi i ponovo otvori predmjer
summary: Spasi predmjer kao projektnu datoteku .takeoff.json, ponovo ga otvori uz iste PDF-ove, i šta se dešava kad PDF nedostaje ili je promijenjen.
keywords: predmjer u PDF-u, ugradi, prilog, spasi, otvori, ponovo otvori, projekat, takeoff.json, nastavi, nastavak, revidirani PDF, promijenjeni PDF, nedostajući PDF, rezervna kopija, automatsko spašavanje, oporavi, pad
from: bd5080a6
---

Predmjer se spašava kao mala projektna datoteka, `(name).takeoff.json`. Sadrži tvoje stavke, sklopove, cijene, razmjeru svakog lista i svaku oznaku. **Ne** sadrži PDF-ove; pronalazi ih ponovo prema njihovom sadržaju.

## Spasi

1. Odaberi {{ui:Spasi predmjer}} u grupi {{ui:Datoteka}}, ili pritisni {{key:Mod+S}}.
   Tvoj preglednik preuzima `(name).takeoff.json`. Statusna traka kaže "Spašeno (name).takeoff.json. Ponovo se otvara preko istih PDF-ova (poklapaju se prema sadržaju)."
2. Premjesti datoteku pored PDF-ova posla, da ostanu zajedno.

Svako spašavanje preuzima novu datoteku. Tvoj preglednik može drugu nazvati `(name) (1).takeoff.json`; zadrži najnoviju.

Naziv dolazi od prvog PDF-a koji si otvorio u ovom predmjeru.

:::note
Spasi predmjer je i dalje jedini način da predmjer čuvaš kao datoteku. Dok radiš, TakeoffCraft takođe čuva rezervnu kopiju u ovom pregledniku (pogledaj dolje), a čuvanje u oblaku još nije dostupno. Ako pokušaš zatvoriti karticu s nespašenim promjenama, preglednik pita želiš li otići.
:::

## Čuvaj predmjer unutar PDF-a

{{ui:Izvoz}} › {{ui:PDF sa predmjerom unutra}} preuzima kopiju svakog otvorenog PDF-a, nazvanu `Plans (with takeoff).pdf`, koja nosi cijeli predmjer kao prilog: stavke, oznake, razmjere, ponuđačke površine, sve što sadrži `.takeoff.json`. Stranice su netaknute, pa izgledaju i štampaju se kao original, a drugi PDF čitači prikazuju predmjer među svojim prilozima.

Otvori taj PDF u TakeoffCraft-u (kako god otvaraš PDF-ove) i on pita **Ovaj PDF ima predmjer unutra**: odaberi {{ui:Otvori predmjer}} da ga vratiš, ili {{ui:Samo PDF}} da otvoriš samo nacrt. Kopija predstavlja PDF iz kojeg je napravljena, pa se `.takeoff.json` spašen iz bilo koje od njih otvara na obje.

Uz više PDF-ova, svaka kopija nosi cijeli predmjer; otvori ih zajedno. Ponovno spašavanje iz kopije zamjenjuje predmjer unutra, ne dodaje drugi. `.takeoff.json` je i dalje datoteka koju treba čuvati: mala je, i to je ono što automatsko spašavanje i desktop aplikacija pišu.

## Ako se kartica ili preglednik zaustavi

Nekoliko sekundi nakon svake promjene, TakeoffCraft čuva kopiju predmjera u vlastitom prostoru za pohranu ovog preglednika, zajedno s PDF-ovima kad ukupno iznose 64 MB ili manje. Ništa se ne otprema. Kad spasiš predmjer, započneš novi ili otvoriš drugi projekat, kopija nestaje.

Ako se kartica sruši, preglednik ili računar se zaustavi, ili izađeš s nespašenim promjenama, sljedeći put kad otvoriš TakeoffCraft pita **Oporaviti tvoj rad?** i navodi predmjer po nazivu. Odaberi **Oporavi** da ga vratiš: stavke, oznake i razmjere se vraćaju, a PDF-ovi se ponovo otvaraju ako su sačuvani. Statusna traka kaže "Oporavljeno (name). Još nije spašeno u datoteku: Spasi predmjer ga čuva." Kad PDF-ovi bili preveliki da bi se sačuvali, otvori ih ponovo; oznake se pojavljuju na njihovim listovima. Više: [Oporavi svoj rad](common:recover).

## Ponovno otvaranje

1. Otvori TakeoffCraft.
2. Prevuci datoteku `.takeoff.json` i njene PDF-ove na stranicu zajedno. Ili odaberi {{ui:Otvori planove}} za PDF-ove i {{ui:Otvori predmjer}} za projekat, bilo kojim redom.
   Statusna traka kaže "Otvoreno (name): 12 stavki, 340 oznaka." Svaki list dobija svoju razmjeru nazad, a oznake se pojavljuju na listovima.

Redoslijed PDF-ova nije važan, kao ni njihovi nazivi ili fascikle. TakeoffCraft prepoznaje svaki PDF po otisku njegovog sadržaja.

Ako otvoriš projekat dok trenutni predmjer ima nespašene promjene, TakeoffCraft prvo pita: **Otkaži**, **Odbaci promjene** ili **Prvo spasi predmjer**. Otvaranje projekta zamjenjuje trenutne stavke i oznake; PDF-ovi koji su već otvoreni ostaju otvoreni.

## Kad PDF nedostaje

Ako otvoriš projekat bez svih njegovih PDF-ova, statusna traka dodaje "Otvori njegove PDF-ove da vidiš oznake (navedene pod Listovi)." Ispod spiska listova, napomena kaže:

"Ovaj predmjer obuhvata i PDF-ove koji nisu otvoreni. Njihove količine se računaju; otvori ih da vidiš i uređuješ njihove oznake:"

praćeno nazivima datoteka i veličinama. Njihove oznake i dalje ulaze u svaki zbir i izvoz, s razmjerama na kojima su izmjerene. Otvori te PDF-ove da vidiš i uređuješ oznake.

## Kad je PDF promijenjen

PDF koji je revidiran, ili samo ponovo spašen drugim programom, ima drugačiji sadržaj, pa je za TakeoffCraft **drugačija datoteka**, čak i s istim nazivom. U napomeni ispod spiska listova, takva datoteka kaže "datoteka s ovim nazivom je otvorena, ali se sadržaj razlikuje".

- Oznake ostaju vezane za staru verziju. I dalje se računaju, na starim pozicijama i razmjerama.
- Revidirani PDF se otvara kao novi listovi bez razmjere i bez oznaka.

Da prebaciš predmjer na reviziju, otvori oba PDF-a i koristi {{ui:Uporedi}} na novom listu: [Uporedi revidirani list i prebaci predmjer](topic:compare-revisions).

## Oštećena ili tuđa datoteka

TakeoffCraft provjerava svaku projektnu datoteku prije upotrebe. Poruke koje možeš vidjeti:

- "(file) nije TakeoffCraft projekat (nije valjan JSON)."
- "Ovo nije TakeoffCraft projektna datoteka."
- "Ovaj projekat je spašen novijim TakeoffCraft-om. Otvori ga tamo."
- "3 oznake su oštećene i izostavljene." (ostalo se otvara)

## Historija poništavanja

Historija poništavanja počinje ispočetka kad otvoriš projekat. Spašavanje je ne briše.
