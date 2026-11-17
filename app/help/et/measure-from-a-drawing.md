---
title: Mõõda joonisest
summary: Võta pikkused ja pindalad joonise enda joontest, kaartest, polüjoontest ja viirutustest, valides need, täpsete kaarte ja aukudega, selle asemel et jälgida klõpsudega.
keywords: mõõda joonist, geomeetria, polüjoon, kaar, ring, viirutus, kõverus, täpne pikkus, täpne pindala, vali, aken, jälgi, CAD-ist, lineaarne, pindala
from: fd734246
---

{{ui:Mõõda joonist}} DWG- või DXF-lehe ribal võtab joonise enda objektid märgisteks, nii et neid ei pea klõpsudega jälgima. Polüjoone pikkus, kaare pikkus, ringi pindala ja viirutuse pindala koos aukudega tulevad täpsed välja, kasutades koguste arvestuse arvutusi, mida see igas märgises kasutab.

## Võta objektid lineaarse või pindala kirjena

1. Tee või klõpsa **lineaarne** või **pindala** kirje jaotises {{ui:Kirjed}}. Lehel peab olema mõõtkava.
2. Vali {{ui:Mõõda joonist}}.
3. Klõpsa lehel objektidel, et neid valida, või lohista ümber nende aken: kõik, mis on täielikult sees, valitakse. {{key:Shift}} lisab akna valikule; klõpsa valitud objektil uuesti, et see välja võtta. Riba näitab kogusummat: „6 jada: 108'-9 1/8" kokku.“
4. Vali lisamisnupp, mis nimetab arvu ja kirje, näiteks {{ui:Lisa 6 kirjele Edge}} (või vajuta {{key:Enter}}). Iga objekt muutub kirje ühe märgiseks, ühe tagasivõtu sammuga. {{key:Esc}} tühjendab valitu.

## Mida iga kirje liik võtab

- **Lineaarne** kirje võtab jooned, kaared, polüjooned, ringid ja splainid pikkuse järgi. Suletud kuju loetakse ümbermõõdu järgi. Viirutus jäetakse välja: sellel on pindala, mitte pikkus, ja riba ütleb seda.
- **Pindala** kirje võtab suletud kujud: suletud polüjooned, ringid, 2D-tahked kehad ja viirutused koos aukudega. Avatud jooksud jäetakse välja ja riba ütleb seda.

## Täpne ja peaaegu täpne

Jooned, kaared (iga kõverusega), kõveratega polüjooned ja ringid on täpsed: pikkused ja pindalad kasutavad kaare raadiust ja nurka, mitte selle pilti. Ellipsid, splainid ja viirutused, mille piir koosneb servadest, mõõdetakse üheastmeliste või peenemate kõõlude järgi; see on ellipside puhul sajandik protsenti ja ülejäänute puhul kümnendik protsenti täpsuses. Riba ütleb, mitu valitud objekti on sellist liiki kõverad.

## Mida ja kust see võtab

- **Mudel**: objektid mudeliruumis. **Paigutus**: selle enda jooned ja vaateakna sees olevad mudeli objektid, mis on selle kaudu skaleeritud. Objekt, mis ületab vaateakna serva, ei ole pakutud (see prinditakse lõigatuna); objekt, mida kaks vaateaknat mõlemad näitavad, võetakse üks kord.
- Ainult kihid, mida leht näitab. Plokke ei mõõdeta, vaid loetakse: vaata [Loe joonisest](topic:count-from-a-drawing). 3D-polüjooned, võrgud, tahked kehad ja piirkonnad ei ole pakutud.
