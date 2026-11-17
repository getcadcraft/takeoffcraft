---
title: "Ava DWG- või DXF-joonis"
summary: "Ava joonisefail lehtedena (mudeliruum ja iga paigutus), alusta joonise antud mõõtkavaga, näita või peida selle kihid ja too sisse lingitud joonised."
keywords: dwg, dxf, cad, joonis, ava joonis, paigutused, mudeliruum, paberiruum, lehed, ühikud, insunits, vaateakna mõõtkava, xref, lingitud joonis, kihid, külmutatud, ilma pdf-ita, plotimine, plotimata
from: d8c3f504
---

TakeoffCraft avab DWG- või DXF-joonise nagu PDF-i: seda ei pea enne PDF-iks plotima. Loendamine joonisest endast on täpne, sest joonis teab, mis iga objekt on. Vt [Loenda joonisest](topic:count-from-a-drawing).

## Joonise avamine

1. Vali rühmas {{ui:Fail}} {{ui:Ava plaanid}} või vajuta {{key:Mod+O}}.
2. Vali DWG- või DXF-fail. Võid valida mitu, ka PDF-idega koos.
3. Vali Ava.

Võid joonisefaile ka TakeoffCraftile lohistada nagu PDF-e. Midagi ei laadita üles: brauser loeb faili sinu arvutist.

TakeoffCraft loeb DWG-d AutoCAD 2000-st kuni 2018-ni ja ASCII DXF-i versioonist R12 kuni 2018-ni. Binaarset DXF-i ei võeta vastu (salvesta see ASCII-na või DWG-na) ning ei võeta vastu ka faili, mis ei ole kumbki; sellest öeldakse, miks. Kahjustatud fail avatakse sellest, mis loeti, ja teade ütleb seda; selle loenduse tulemus võib olla puudulik.

## Lehed

- **Mudel** on joonise mudeliruum.
- **Iga paigutus** (paberiruumi sakk) on leht, mille nimi tuleb sakist, sakid järjekorras. Paigutus näitab mudelit oma vaateakende kaudu, nagu see plotitakse.

Suumimine, nihutamine, kinnitumine joonise enda joontele, märgid, märkmed, {{ui:Kalibreeri}} ja muu töötavad nagu PDF-il. Joonise lehed salvestatakse koguste arvestusse faili nime ja sisu sõrmejälje järgi, nagu PDF-il: ava sama fail uuesti ja märgid on jälle lehtedel.

## Mõõtkava

Leht alustab mõõtkavaga, mille joonis annab:

- **Paigutus** võtab oma suurima vaateakna mõõtkava. Mõõtkava nagu 1/2" = 1'-0" nimetatakse eelseadena, mis see on; muu näidatakse kui „Joonise vaateaknast: 1" = 2.5'“. Kui paigutusel on vaateaknad teiste mõõtkavadega, määrab suurim lehe mõõtkava; teisi kontrolli {{ui:Kontrolli}} abil.
- **Mudel** võtab joonise ühikud (tollid, millimeetrid, jalad…) mõõtkavaks: „Joonise ühikud (tollid)“.
- **Joonis ilma ühikuteta** (joonis ei ütle kunagi, kas ühik on toll või millimeeter) ei oma mõõtkava: leht ütleb „Mõõtkava puudub“ ja mõõtmine sellel keelatakse, nagu PDF-il ilma mõõtkavata. Loendamine mõõtkava ei vaja. Anna see {{ui:Kalibreeri}} abil.

{{ui:Kalibreeri}}, {{ui:Kontrolli}} ja {{ui:Eelseade}} loend muudavad mõõtkava igal ajal ning on joonise omast tähtsamad. Mudelil on eelseadete loend välja lülitatud, sest sellel pole paberi suurust.

## Kihid

{{ui:Kihid}} lehe ribal loetleb joonise kihid ja iga kihi objektide arvu sel lehel. Kihid, mille fail välja lülitas või külmutas, algavad peidetuna. Kihi peitmiseks eemalda linnuke; peidetud kihi nähtavaks tegemiseks märgi see. Leht joonistub uuesti ning peidetu jäetakse loendustest ja objektidest, mida pakutakse {{ui:Mõõda joonist}} jaoks, välja, kui ei palu peidetud kihte ka arvestada. {{ui:Näita kõiki}} näitab iga kihti; {{ui:Tagasi faili kihtide juurde}} võtab sinu muudatused tagasi. Kihivalikud kuuluvad sellele seansile, mitte koguste arvestuse failile.

## Lingitud joonised (xref)

Joonis, mis lingib teisi jooniseid, näitab neid seal, kuhu need on sisestatud. TakeoffCraft leiab lingitud joonise **avatud failide** hulgast failinime järgi: ava põhijoonis ja lingitud joonis koos (või üks teise järel). Kuni siis ütleb olekuriba, mitut lingitud joonist ei leitud, mida need joonistavad, on puudu ja loendused seda ütlevad.

## Piirangud

- Objekte, mida TakeoffCraft ei suuda lugeda ega paigutada (proksiobjektid, tundmatud klassid), näidatakse loenduse aknas tüübi järgi; neid ei jäeta kunagi sõnagi kaotamata välja.
- Väga suuri jooniseid joonistatakse osaliselt ja loendused peatuvad piiri juures, sellest öeldakse. Selle asemel ava joonise PDF-plott.
- Joonis joonistatakse mustalt ja oma värvides, valgele paberile tumedamaks tehtult. Plotimisstiilitabeleid ja pliiatsite määramisi ei rakendata.
