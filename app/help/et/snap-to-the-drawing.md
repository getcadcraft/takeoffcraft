---
title: Haakumine joonise joontele
summary: Punktid hüppavad mõõtmise või kalibreerimise ajal PDF-i enda joonestikule: otspunktidesse, keskpunktidesse, ristumiskohtadesse või suvalisse kohta joonel, markeriga, mis näitab, mis punkt see on.
keywords: haakumine, osnap, objekti haakumine, otspunkt, keskpunkt, ristumine, lähim, vektor, joonestik, jooned, täpne, täpselt, F3, magnet, nurk
from: 41d29e9b
---

Enamik plaanikomplekte on vektor-PDF-id: nende seinad ja servad on tõelised jooned, mitte pikslid. Mõõtmise ajal haakab TakeoffCraft sinu klõpsud nendele joontele, nii et joon algab täpselt seina nurgast ja kalibreerimine loeb joonistaja joonistatud mõõtu, mitte pikslit, mida tabasid.

Haakumine on alguses sisse lülitatud. Lülita see sisse ja välja oleku­ribal oleva {{ui:Haakumine}} või klahviga {{key:F3}}; seade jääb sellesse brauserisse alles (seda leiad ka [Sätted](topic:settings) alt).

## Millele haakub

Kui kursor jõuab joonest umbes 10 ekraanipikslini, näitab marker, kuhu klõps maandub, koos oma nimega:

| Marker | Nimi | Asukoht |
|---|---|---|
| Ruut | **Otspunkt** | Joone lõpp või nurk, kus jooned kohtuvad. Kõverjoone kaks otsa loetakse, punktid selle peal mitte. |
| Kolmnurk | **Keskpunkt** | Sirge joone keskpunkt. |
| Rist | **Ristumispunkt** | Kohad, kus kaks joont ristuvad või üks lõpeb teisel. |
| Liivakell | **Joonel** | Joone lähim punkt, kui ükski ots, keskpunkt ega ristumine pole lähedal. |

Lähim otspunkt, keskpunkt või ristumispunkt võidab. Alles siis, kui ükski neist pole lähedal, läheb punkt joonele endale. Suumi sisse, et valida lähestikku asetsevate punktide vahel: 10 pikslit on ekraanipikslid, nii et suuremal suumil katavad need plaanist vähem.

## Kus see töötab

Haakumine töötab režiimides {{ui:Lineaarne}}, {{ui:Pindala}}, {{ui:Ring}}, {{ui:Väljalõige}}, {{ui:Kalibreeri}} ja {{ui:Kontrolli}}, ning kui lohistad valitud märgi nurka. Samuti asetab see kaarepunkte. {{ui:Loe}}, {{ui:Automaatne loendus}} ja kleepimine haakumist ei kasuta.

Haakunud punkt võidab klahvi {{key:Shift}} 45° haakumise ees: et joonistada joontest eemale 45° nurga all, lülita enne haakumine välja klahviga {{key:F3}}.

:::tip
Kalibreeri haakumine sisselülitatuna. Klõpsa tuntud mõõtejoone või seina kahe otsa lähedal: mõlemad punktid maanduvad täpselt joonisele ja mõõtkava tuleb täpne (olekuriba nimetab siis eelseadet, millele see vastab).
:::

## Lehed, millele haakuda ei saa

- **Skannitud lehed** on pildid ilma joonteta, millele haakuda. Olekuriba ütleb: „Sellel lehel pole jooni, millele haakuda (skannitud leht on pilt).“ ja punktid lähevad sinna, kuhu klõpsad.
- **Väga suured joonised**: haakumine loeb lehe kohta kuni 400 000 joonelõiku. Kui lehel on neid rohkem, teatab see sellest ja haakub ainult esimestele.
- **Tekst** ei haakuma, kui PDF ei joonista tähti joontena (mõned plotterid teevad seda).

Lehe jooned loetakse esimesel avamisel taustal; suur leht võib enne markerite ilmumist võtta sekundi.
