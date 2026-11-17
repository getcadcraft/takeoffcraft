---
title: Spremanje i ponovno otvaranje predmjera
summary: Spremite predmjer kao projektnu datoteku .takeoff.json, ponovno ga otvorite s istim PDF-ovima i saznajte što se događa kada PDF nedostaje ili je promijenjen.
keywords: predmjer u PDF-u, ugradnja, privitak, spremi, otvori, ponovno otvori, projekt, takeoff.json, nastavi, nastavak, revidirani PDF, promijenjeni PDF, nedostajući PDF, sigurnosna kopija, automatsko spremanje, oporavak, rušenje
from: bd5080a6
---

Predmjer se sprema kao mala projektna datoteka, `(name).takeoff.json`. Sadrži vaše stavke, sklopove, cijene, mjerilo svakog lista i svaku oznaku. **Ne** sadrži PDF-ove; pronalazi ih ponovno prema njihovom sadržaju.

## Spremanje

1. Odaberite {{ui:Spremi predmjer}} u grupi {{ui:Datoteka}}, ili pritisnite {{key:Mod+S}}.
   Vaš preglednik preuzima `(name).takeoff.json`. Statusna traka kaže „Spremljeno: (name).takeoff.json. Ponovno se otvara na istim PDF-ovima (podudaraju se prema sadržaju).“
2. Premjestite datoteku uz PDF-ove posla, da ostanu zajedno.

Svako spremanje preuzima novu datoteku. Vaš preglednik može drugu nazvati `(name) (1).takeoff.json`; zadržite najnoviju.

Naziv dolazi od prvog PDF-a koji ste otvorili u ovom predmjeru.

:::note
{{ui:Spremi predmjer}} i dalje je jedini način da predmjer čuvate kao datoteku. Dok radite, TakeoffCraft također čuva kopiju za oporavak u ovom pregledniku (vidi dolje), a spremanje u oblak još nije dostupno. Ako pokušate zatvoriti karticu s nespremljenim promjenama, preglednik pita želite li otići.
:::

## Čuvanje predmjera unutar PDF-a

{{ui:Izvoz}} › {{ui:PDF s predmjerom unutra}} preuzima kopiju svakog otvorenog PDF-a, nazvanu poput `Plans (with takeoff).pdf`, koja nosi cijeli predmjer kao privitak: stavke, oznake, mjerila, područja ponude, sve što sadrži `.takeoff.json`. Stranice su netaknute, pa izgleda i ispisuje se kao izvornik, a drugi čitači PDF-a navode predmjer među svojim privicima.

Otvorite taj PDF u TakeoffCraftu (bilo kako otvarate PDF-ove) i on pita **Ovaj PDF ima ugrađen predmjer**: odaberite {{ui:Otvori predmjer}} da ga vratite, ili {{ui:Samo PDF}} da otvorite samo crtež. Kopija predstavlja PDF iz kojeg je nastala, pa se `.takeoff.json` spremljen iz bilo koje od njih otvara na obje.

S više PDF-ova svaka kopija nosi cijeli predmjer; otvorite ih zajedno. Ponovno spremanje iz kopije zamjenjuje predmjer unutar nje, ne dodaje drugi. `.takeoff.json` je i dalje datoteka koju treba čuvati: mala je, i to je ono što automatsko spremanje i desktop aplikacija zapisuju.

## Ako se kartica ili preglednik zaustavi

Nekoliko sekundi nakon svake promjene TakeoffCraft čuva kopiju predmjera u vlastitoj pohrani ovog preglednika, zajedno s njegovim PDF-ovima ako zajedno ne prelaze 64 MB. Ništa se ne učitava. Kada spremite predmjer, započnete novi ili otvorite drugi projekt, kopija se briše.

Ako se kartica sruši, preglednik ili računalo se zaustavi, ili odete s nespremljenim promjenama, sljedeći put kada otvorite TakeoffCraft pita **Oporaviti vaš rad?** i navodi predmjer po nazivu. Odaberite **Oporavi** da ga vratite: stavke, oznake i mjerila se vraćaju, a njegovi PDF-ovi ponovno se otvaraju ako su bili sačuvani. Statusna traka kaže „Oporavljeno: (name). Još nije spremljeno u datoteku; Spremi predmjer to čuva.“ Ako su PDF-ovi bili preveliki da bi se sačuvali, otvorite ih ponovno; oznake se pojavljuju na njihovim listovima. Više: [Oporavite svoj rad](common:recover).

## Ponovno otvaranje

1. Otvorite TakeoffCraft.
2. Povucite i ispustite datoteku `.takeoff.json` i njezine PDF-ove zajedno na stranicu. Ili odaberite {{ui:Otvori nacrte}} za PDF-ove i {{ui:Otvori predmjer}} za projekt, bilo kojim redom.
   Statusna traka kaže „Otvoreno (name): 12 stavki, 340 oznaka.“ Svaki list dobiva natrag svoje mjerilo, a oznake se pojavljuju na njihovim listovima.

Redoslijed PDF-ova nije važan, kao ni njihovi nazivi datoteka ili mape. TakeoffCraft prepoznaje svaki PDF po otisku njegova sadržaja.

Ako otvorite projekt dok trenutni predmjer ima nespremljene promjene, TakeoffCraft prvo pita: **Odustani**, **Odbaci promjene** ili **Prvo spremi predmjer**. Otvaranje projekta zamjenjuje trenutne stavke i oznake; PDF-ovi koji su već otvoreni ostaju otvoreni.

## Kada PDF nedostaje

Ako otvorite projekt bez svih njegovih PDF-ova, statusna traka dodaje „Otvorite njegove PDF-ove da vidite oznake (navedeno na popisu listova).“ Ispod popisa listova stoji napomena:

„Ovaj predmjer obuhvaća i PDF-ove koji nisu otvoreni. Njihove količine se broje; otvorite ih da vidite i uredite njihove oznake:“

nakon čega slijede nazivi datoteka i veličine. Njihove oznake i dalje se računaju u svim ukupnim iznosima i izvozima, s mjerilima kojima su izmjerene. Otvorite te PDF-ove da vidite i uredite oznake.

## Kada se PDF promijenio

PDF koji je revidiran ili ga je drugi program upravo ponovno spremio ima drugačiji sadržaj, pa je za TakeoffCraft **drugačija datoteka**, čak i s istim nazivom. U napomeni ispod popisa listova takva datoteka kaže „datoteka s ovim nazivom je otvorena, ali se sadržaj razlikuje“.

- Oznake ostaju vezane uz staru verziju. I dalje se broje, na svojim starim položajima i mjerilima.
- Revidirani PDF otvara se kao novi listovi bez mjerila i bez oznaka.

Da predmjer prebacite na reviziju, otvorite oba PDF-a i na novom listu upotrijebite {{ui:Usporedi}}: [Usporedite revidirani list i prenesite predmjer](topic:compare-revisions).

## Oštećena ili tuđa datoteka

TakeoffCraft provjerava svaku projektnu datoteku prije korištenja. Poruke koje možete vidjeti:

- „(file) nije projekt TakeoffCraft (nije valjani JSON).“
- „Ovo nije projektna datoteka TakeoffCraft.“
- „Ovaj projekt spremljen je novijom verzijom TakeoffCraft. Otvorite ga tamo.“
- „3 oznake su oštećene i izostavljene.“ (ostatak se otvara)

## Povijest poništavanja

Povijest poništavanja kreće ispočetka kada otvorite projekt. Spremanje je ne briše.
