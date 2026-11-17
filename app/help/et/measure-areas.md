---
title: Mõõda pindu väljalõigetega
summary: Joonista põrandad, laed ja plaadid, lõika neist välja augud, lisa kaarjad servad, ringid ja ümmargused väljalõiked ning loe pindala ja ümbermõõtu.
keywords: ruumi täitmine, pindtäitmine, värvihink, klõps ruumi sees, automaatne pindala, tagasiarvestus, back-out, tugi, šaht, mahaarvamine mitmest kirjest, pindala, hulknurk, kontuur, ruutjalg, sf, väljalõige, auk, mahaarvata, ring, ümar, kaar, ümbermõõt, põrand, lagi, plaat
from: 34648db7
---

Pindalakirje mõõdab suletud pindala. Igast kontuurist saab välja lõigata auke (šaht, tugi, lillekast) ja selle servad võivad olla sirged või kaarjad.

Enne alustamist: lehel peab olema mõõtkava ([Määra mõõtkava](topic:set-the-scale)) ja sul peab olema pindalakirje ([Loo koguste kirjed](topic:create-items)).

## Joonista pinna kontuur

1. Klõpsa pindalakirjel jaotises {{ui:Kirjed}}.
2. Vali tööriistaribal {{ui:Pindala}} või vajuta {{key:A}}.
3. Klõpsa ruumi või plaadi iga nurka järjest. Hoia {{key:Shift}} all 0°, 45° ja 90° servade jaoks.
   Kolmandast punktist alates täitub kontuur ja olekuriba näitab „Pindala“ ja „ümbermõõt“. Esimese punkti ümber ilmub väike ring.
4. Sulge kontuur: klõpsa esimesel punktil (selle rõnga sees), vajuta {{key:Enter}}, topeltklõpsa või parem-klõpsa.
   Pind täitub kergelt kirje värviga, on märgistatud ruutjalgades ja saab valitud märgiseks.

{{key:Backspace}} eemaldab viimase nurga; {{key:Esc}} viskab kontuuri minema.

Kontuur, mis ristub iseendaga, lükatakse tagasi: „Kontuur ristub iseendaga, seega oleks pindala vale. Joonista see uuesti ilma ristumata.“ Joonista kaheksakujuline kuju kahe pindalana.

## Kaarjad servad

Kontuuri joonistades lülita sisse kaarerežiim ({{ui:Kaar}} või {{key:R}}). Pärast nurka klõpsa kõveral olevale punktile, seejärel kohale, kus kõver lõpeb. Kontuuri sulgemiseks kõveraga tee viimane klõps esimesel punktil. Pindala ja ümbermõõt kasutavad täpset kõverat. Sirgete servade jaoks vajuta uuesti {{key:R}}. Kõvera muutmiseks hiljem vali pindala ja lohista kaare keskel olevat ümmargust käepidet. Vaata [Mõõda lineaarseid jadasid](topic:measure-linear#arcs-and-curved-walls).

## Ring

1. Pindalakirjega vali {{ui:Ring}} või vajuta {{key:O}}.
2. Klõpsa keskpunkti.
3. Klõpsa mis tahes punktile servas.
   Liigutades näitab olekuriba raadiust ja pindala. Ring lisatakse pindalamärgisena täpse pindala ja ümbermõõduga.

## Täida ruum ühe klõpsuga

Kui ruumid on joonistatud suletud seintena, võtab {{ui:Ruum}} ({{key:B}}) põranda ühe klõpsuga:

1. Vali pindalakirje (näiteks põrandaviimistlus) ja määra lehele mõõtkava.
2. Vali {{ui:Ruum}} grupis {{ui:Koguste arvestus}} või vajuta {{key:B}}.
3. Klõpsa ruumi sees, vabal põrandal (mitte joonel ega sildil).

TakeoffCraft loeb lehe jooni, leiab klõpsu ümber oleva ruumi ja joonistab selle mööda seinte sisemisi külgi praeguse kirje pinnana. Ukseavad kuni **4'-0"** käsitletakse suletuna, nii et kontuur läheb sirgelt üle ukseava; **Sätted › TakeoffCraft › Ruumi täitmine sulgeb avad kuni** muudab seda laiust (3'-0" kuni 8'-0"). Ruumi nimed, mööbel ja inventar ruumi sees ei tee auke.

See keeldub ja ütleb põhjuse, kui:

- klõps on joonel („Klõps on joonel“);
- ruum ei ole suletud: avaus on laiem kui seade ja lubab kontuuril joosta lehe servani. Tõsta seadet või joonista see ruum käsitsi {{ui:Pindala}} abil;
- ruum on pisike (sümbol, mitte ruum).

Kui uks on laiem kui seade, jookseb täitmine järgmisse ruumi ja joonistab mõlemad koos: võta tagasi ({{key:Mod+Z}}), tõsta seadet ja klõpsa uuesti. Kontrolli kontuuri nagu iga pinda: paranda, lohistades selle nurki. Skannitud leht töötab samamoodi, kuid selle jooned peavad olema piisavalt tumedad; hele hall joonistus ei pruugi täitmist peatada.

## Lõika pinnast auk välja

1. Vali {{ui:Vali}} ({{key:V}}) ja klõpsa pinda. Sellel on nurkades ruudukujulised käepidemed.
2. Vali tööriistaribal {{ui:Väljalõige}} (või vajuta {{key:X}}) või jaotises **Valitud märgis** {{ui:Lisa väljalõige}}.
3. Klõpsa augu nurki pinna sees. Kaarerežiim töötab siin samuti.
4. Sulge see nagu pind: klõpsa esimesel punktil, vajuta {{key:Enter}}, topeltklõpsa või parem-klõpsa.
   Auk jääb täitmata ja olekuriba ütleb „Väljalõige lisatud. Joonista järgmine või vajuta Esc.“
5. Joonista samasse pinda rohkem auke või vajuta {{key:Esc}}.

Ümara augu jaoks vali jaotises **Valitud märgis** {{ui:Lisa ümar väljalõige}}, klõpsa selle keskpunkti ja seejärel punkti servas.

Väljalõige peab asuma täielikult pinna sees ega tohi kattuda teise väljalõikega. Vastasel juhul TakeoffCraft keeldub: „Väljalõige peab asuma pinna sees täielikult.“ või „Väljalõiked ei saa üksteisega kattuda.“

Viimase augu eemaldamiseks vali {{ui:Eemalda viimane väljalõige}}.

## Tagasiarvestus: tugid, šahtid ja avad, mis arvestatakse mitme kirje pealt maha

Väljalõige kuulub ühele pindalamärgisele. **Tagasiarvestus** joonistatakse üks kord ja see arvestatakse maha igast pinnast, mida see katab, valitud kirjete jaoks: joonista tugid üks kord ja need arvestatakse maha põrandaviimistlusest, laest ja plaadist koos.

1. Tee nende jaoks pindalakirje, näiteks „Tugid“.
2. Selle kirje seadetes märgi **Tagasiarvestus: selle märgised võtavad oma pinna teiste kirjete pealt maha**. Ilmub sinu teiste pindalakirjete loend, kõik märgitud: eemalda märgistus nende puhul, mida tagasiarvestused ei tohi puudutada (näiteks seinte värv).
3. Mõõda tugesid {{ui:Pindala}} või {{ui:Ring}} abil nagu tavaliselt. Igaüks joonistatakse katkendjoonena.

Iga märgitud kirje pindalamärgis samal lehel kaotab osa, mida tagasiarvestus katab: kogu tagasiarvestuse, kui see asub sees; ainult kattuva osa, kui see ületab serva; ja väljalõike sees ei kaota midagi. Valitud pinna paneel näitab **Tagasiarvestus** ja alles jäänud pinda. Kirje kogus, koostevalemid, maksumused, 3D-kontrollvaade ja eksport kasutavad alles jäänud pinda; eelarve märkmed ütlevad, kui palju tagasiarvestused maha võtsid. Tagasiarvestuse kirje ise arvestab oma pinda (jäta maksumused nulli, kui seda ei hinnastata).

Tagasiarvestus peab olema **kumer**: ristkülik, ring või iga kontuur ilma sissepoole suunatud nurgata. TakeoffCraft ei luba joonistada teistsugust; joonista L-kujuline šaht kahe tagasiarvestusena. Tagasiarvestustel ei saa olla väljalõikeid, ja kaks üksteist katvat tagasiarvestust arvestatakse mõlemad.

Ümbermõõt (`P`) ei muutu: tagasiarvestused võtavad maha ainult pindala.

## Loe pinda

Vali pind. **Valitud märgis** näitab:

| Rida | Tähendus |
|---|---|
| Area | Netopindala: kontuur miinus väljalõiked. See on see, mida kirje arvestab. |
| Outline | Bruttopindala kontuuri sees (näidatakse, kui on väljalõikeid). |
| Cut-outs | Mitu auku ja nende kogupindala. |
| Perimeter | Kontuuri servade pikkus **pluss** iga väljalõike servad („koos väljalõigetega“). |

Ümbermõõt sisaldab väljalõigete servi tahtlikult, näiteks servavormide või aluse jaoks, mis jookseb ka augu ümber. Kui vajad ainult välist serva, hoia augud sellest kirjest väljas või mõõda välisserv lineaarse jadana.

Kirje {{ui:Ühik}} määrab, kuidas kogusumma esitatakse: SF, SY või m². Paneel **Valitud märgis** ja olekuriba näitavad alati ruutjalgu.

## Paranda pind

- **Teisalda nurk**: vali pind ja lohista nurgakäepidet (aukudel on samuti käepidemed). Kui uus kuju ristuks iseendaga või lükkaks augu välja, pannakse nurk tagasi: „Punkt pandi tagasi.“
- **Teisalda teise kirjesse**: vali teine pindalakirje jaotises **Valitud märgis** all olevast loendist **Kirje**.
- **Kustuta**: {{key:Delete}}, {{ui:Kustuta}} tööriistariba menüüst {{ui:Veel}} või {{ui:Kustuta märgis}}.

## Sügavus mahtude jaoks

Anna pindalakirjele {{ui:Sügavus}} (näiteks `0'-4"` plaadi jaoks) ja kasuta koostekomponendis valemit `A * H / 27`, et saada kuupjardid. Vaata [Koosted ja valemid](topic:assemblies).
