---
title: Inntasting av lengde, sats og prosent
summary: Hva som kan skrives inn for avstander, høyder, pengesatser og svinnprosenter, med eksempler og meldinger for verdier TakeoffCraft ikke kan lese.
keywords: inndata, format, fot og tommer, brøker, desimalfot, metrisk, meter, millimeter, sats, penger, dollar, prosent, svinn, skriving
from: 215bbf4d
---

## Lengder

Brukes av **Reell avstand** i {{ui:Calibrate}}, og av {{ui:Height}} og {{ui:Depth}} i postredigeringen.

| Skriv inn | Betyr |
|---|---|
| `24'-0"` | 24 fot |
| `24'-6 1/2"` | 24 fot 6½ tommer |
| `12' 6 1/2"` | 12 fot 6½ tommer (mellomrom i stedet for strek) |
| `12'-6-1/2"` | 12 fot 6½ tommer (streker mellom delene) |
| `24'` | 24 fot |
| `30"` | 30 tommer |
| `6 1/2"` | 6½ tommer |
| `3/4"` | ¾ tomme |
| `24 ft 6 in` | 24 fot 6 tommer (også `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 i standardenheten (se nedenfor) |
| `24.5'` | 24.5 fot |
| `7.5 m` | 7.5 meter |
| `750 cm` | 750 centimeter |
| `7500 mm` | 7,500 millimeter |

- For kalibrering og for poster i LF, SF eller SY er et tall uten enhet i **fot**, og for poster i m eller m² er det i **meter**.
- Typografiske anførselstegn og primtegn fra tekstbehandlere (′ ″ ’ ”) fungerer som `'` og `"`. To apostrofer `''` teller som `"`.
- Komma ignoreres: `1,200 mm` er 1200 mm.
- Brøker må ha hele tall på begge sider: `6 1/2"` fungerer, `6.5 1/2"` gjør ikke det.
- Null og negative avstander avvises.

Meldinger:

- «Skriv inn en avstand, for eksempel 24'-0" eller 7.5 m.» (feltet er tomt)
- «Skriv inn en avstand større enn null.»
- «Bruk fot og tommer (24'-6 1/2"), desimalfot, m, cm eller mm.» (ukjent enhet)
- «Avstanden kunne ikke leses. Prøv 24'-6 1/2" eller 24.5.»

For å fjerne en posts høyde eller dybde, tøm feltet.

### Regning

Alle lengdefelt, og skrivefeltet under tegning, tar også imot en beregning med `+`, `-`, `*`, `/` og parenteser:
`4+7/16` (4.4375 i standardenheten), `12'6" + 3/4"`, `(24'-0")/3` (8 fot), `2*450mm`.

- En strek skrevet inn i en lengde er fortsatt en del av den: `24'-6"` er 24 fot 6 tommer, og `6-1/2` er 6½. Sett mellomrom rundt en strek for å trekke fra: `24' - 6"` er 23'-6".
- Et tall uten enhet multipliserer eller deler en lengde som et tall; legges det til en lengde, er det i standardenheten.
- `abs`, `round`, `ceil` og `floor` virker også. En beregning som ikke kan leses, avvises, med angivelse av hvor det gikk galt.

## Slik vises lengder

Lengder vises som fot, tommer og sekstendedeler: `12'-6 1/2"`, `0'-0 3/4"`. Verdier avrundes til nærmeste 1/16 tomme i visningen; mengdene selv avrundes ikke. Desimalverdier vises med to desimaler og tusenskiller, for eksempel `1,234.50 LF`.

## Satser (materiell og arbeid per enhet)

| Skriv inn | Betyr |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (opptil fire desimaler; flere avrundes) |
| (tom) | $0 |

Melding: «Skriv inn et beløp, for eksempel 12.50.» eller «Beløpet er for stort.» Negative satser godtas ikke.

Utvidede beløp (materiell, arbeid, summer) regnes ut til øre: mengde med svinn × sats, avrundet halvt bort fra null, akkurat som `ROUND(x, 2)` i et regneark.

## Svinnprosent

| Skriv inn | Betyr |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (tom) | 0% |

Opptil to desimaler, fra 0% til 1000%. Meldinger: «Skriv inn en prosentandel, for eksempel 10 eller 7.5.» eller «Svinn over 1000% er ikke tillatt.»

## Navn og enheter

- Navn på poster og komponenter: opptil 200 tegn.
- En komponents {{ui:Unit}}: fri tekst opptil 20 tegn, for eksempel `EA`, `sheets`, `CY`, `gal`. Den er bare en etikett; TakeoffCraft gjør ingen omregning.

## Formler

Formler i sammensatte poster har egne regler: se [Formelspråk](topic:formulas).
