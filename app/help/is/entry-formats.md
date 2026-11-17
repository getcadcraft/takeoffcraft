---
title: Innsláttur lengda, verðs og prósentu
summary: Það sem þú getur slegið inn fyrir vegalengdir, hæðir, einingarverð og úrgangsprósentur, með dæmum og skilaboðum fyrir inntak sem TakeoffCraft getur ekki lesið.
keywords: innsláttur, snið, fet og tommur, brot, aukafet, metrakerfi, metrar, millimetrar, verð, peningar, dollarar, prósenta, úrgangur, innslag
from: 215bbf4d
---

## Lengdir

Notað af **Raunfjarlægð** í {{ui:Kvarða}}, og af {{ui:Hæð}} og {{ui:Dýpt}} í liðaritlinum.

| Þú skrifar | Þetta þýðir |
|---|---|
| `24'-0"` | 24 fet |
| `24'-6 1/2"` | 24 fet 6½ tomma |
| `12' 6 1/2"` | 12 fet 6½ tomma (bil í stað bandstriks) |
| `12'-6-1/2"` | 12 fet 6½ tomma (bandstrik á milli hluta) |
| `24'` | 24 fet |
| `30"` | 30 tommur |
| `6 1/2"` | 6½ tomma |
| `3/4"` | ¾ tomma |
| `24 ft 6 in` | 24 fet 6 tommur (einnig `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 í sjálfgefinni einingu (sjá að neðan) |
| `24.5'` | 24.5 fet |
| `7.5 m` | 7.5 metrar |
| `750 cm` | 750 sentímetrar |
| `7500 mm` | 7,500 millimetrar |

- Tala án einingar er í **fetum** fyrir kvörðun og fyrir liði í LF, SF eða SY, og í **metrum** fyrir liði í m eða m².
- Gæsalappir og prímmerki úr ritvinnsluforritum (′ ″ ’ ”) virka eins og `'` og `"`. Tvær apóstrófur `''` teljast sem `"`.
- Kommur eru hunsaðar: `1,200 mm` er 1200 mm.
- Brot þurfa heilar tölur báðum megin: `6 1/2"` virkar, `6.5 1/2"` virkar ekki.
- Núll og neikvæðar vegalengdir eru ekki teknar gildar.

Skilaboð:

- „Skrifaðu vegalengd, til dæmis 24'-0" eða 7.5 m.“ (reiturinn er tómur)
- „Skrifaðu vegalengd sem er stærri en núll.“
- „Notaðu fet og tommur (24'-6 1/2"), aukafet, m, cm eða mm.“ (óþekkt eining)
- „Ekki tókst að lesa þessa vegalengd. Prófaðu 24'-6 1/2" eða 24.5.“

Til að eyða hæð eða dýpt liðar skaltu tæma reitinn.

### Reikningur

Sérhver lengdarreitur, og innsláttarreiturinn meðan þú teiknar, tekur líka við reikningi með `+`, `-`, `*`, `/` og sviga:
`4+7/16` (4.4375 í sjálfgefinni einingu), `12'6" + 3/4"`, `(24'-0")/3` (8 fet), `2*450mm`.

- Bandstrik sem er skrifað inn í lengd er enn hluti af henni: `24'-6"` er 24 fet 6 tommur og `6-1/2` er 6½. Settu bil í kringum bandstrik til að draga frá: `24' - 6"` er 23'-6".
- Venjuleg tala margfaldar eða deilir lengd sem tölu; bætt við lengd er hún í sjálfgefinni einingu.
- `abs`, `round`, `ceil` og `floor` virka líka. Reikningur sem ekki er hægt að lesa er hafnaður, með því hvar villan varð.

## Hvernig lengdir birtast

Lengdir birtast sem fet, tommur og sextándu: `12'-6 1/2"`, `0'-0 3/4"`. Gildi eru ávalin að næstu 1/16 tommu fyrir birtingu; magntölurnar sjálfar eru ekki ávalaðar. Aukastafa gildi birtast með tveimur aukastöfum og þúsundaskiljum, til dæmis `1,234.50 LF`.

## Verð (efni og vinna á einingu)

| Þú skrifar | Þetta þýðir |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (allt að fjórum aukastöfum; fleiri eru ávalaðir) |
| (tómt) | $0 |

Skilaboð: „Skrifaðu upphæð, til dæmis 12.50.“ eða „Þessi upphæð er of há.“ Neikvæð verð eru ekki tekin gild.

Heildarupphæðir (efni, vinna, samtölur) eru reiknaðar að sentinu: magn með úrgangi × verð, ávalað með miðgildi frá núlli, nákvæmlega eins og `ROUND(x, 2)` í töflureikni.

## Úrgangsprósenta

| Þú skrifar | Þetta þýðir |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (tómt) | 0% |

Allt að tveimur aukastöfum, frá 0% til 1000%. Skilaboð: „Skrifaðu prósentu, til dæmis 10 eða 7.5.“ eða „Úrgangur yfir 1000% er ekki leyfður.“

## Heiti og einingar

- Heiti liða og íhluta: allt að 200 stafir.
- {{ui:Eining}} íhlutar: hvaða texti sem er allt að 20 stafir, til dæmis `EA`, `sheets`, `CY`, `gal`. Hún er aðeins merki; TakeoffCraft breytir ekki einingunni.

## Formúlur

Samsetningarformúlur hafa sínar eigin reglur: sjá [Formúlumál](topic:formulas).
