---
title: Pag-type ng haba, rate at porsyento
summary: Ano ang maaari mong i-type para sa mga distansya, taas, rate ng pera at porsyento ng waste, kasama ang mga halimbawa at mga mensahe para sa input na hindi mabasa ng TakeoffCraft.
keywords: input, format, feet inches, fractions, decimal feet, metric, meters, millimeters, rate, pera, dollars, porsyento, waste, pag-type
from: 215bbf4d
---

## Haba

Ginagamit ito ng **Totoong distansya** sa {{ui:Calibrate}}, at ng {{ui:Height}} at {{ui:Depth}} sa item editor.

| Ang i-type mo | Ibig sabihin |
|---|---|
| `24'-0"` | 24 feet |
| `24'-6 1/2"` | 24 feet 6½ inches |
| `12' 6 1/2"` | 12 feet 6½ inches (espasyo sa halip na dash) |
| `12'-6-1/2"` | 12 feet 6½ inches (mga dash sa pagitan ng mga bahagi) |
| `24'` | 24 feet |
| `30"` | 30 inches |
| `6 1/2"` | 6½ inches |
| `3/4"` | ¾ inch |
| `24 ft 6 in` | 24 feet 6 inches (gumagana rin ang `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 sa default unit (tingnan sa ibaba) |
| `24.5'` | 24.5 feet |
| `7.5 m` | 7.5 metro |
| `750 cm` | 750 sentimetro |
| `7500 mm` | 7,500 milimetro |

- Ang plain na numero ay nasa **feet** para sa calibration at para sa mga item sa LF, SF o SY, at nasa **meters** para sa mga item sa m o m².
- Gumagana ang curly quotes at ang prime marks mula sa word processor (′ ″ ’ ”) gaya ng `'` at `"`. Ang dalawang apostrophe `''` ay binibilang bilang `"`.
- Hindi pinapansin ang comma: ang `1,200 mm` ay 1200 mm.
- Kailangan ng buong numero sa magkabilang panig ang fraction: gumagana ang `6 1/2"`, hindi ang `6.5 1/2"`.
- Tinatanggihan ang zero at negatibong distansya.

Mga mensahe:

- "I-type ang distansya, gaya ng 24'-0" o 7.5 m." (walang laman ang field)
- "I-type ang distansyang mas malaki sa zero."
- "Gamitin ang feet at inches (24'-6 1/2"), decimal feet, m, cm o mm." (hindi kilalang unit)
- "Hindi mabasa ang distansyang iyon. Subukan ang 24'-6 1/2" o 24.5."

Para burahin ang taas o lalim ng item, i-clear ang field.

### Aritmetika

Ang bawat length field, at ang type-in box habang gumuguhit, ay tumatanggap din ng kalkulasyon gamit ang `+`, `-`, `*`, `/` at bracket:
`4+7/16` (4.4375 sa default unit), `12'6" + 3/4"`, `(24'-0")/3` (8 feet), `2*450mm`.

- Ang dash na isinulat sa haba ay bahagi pa rin nito: ang `24'-6"` ay 24 feet 6 inches at ang `6-1/2` ay 6½. Maglagay ng espasyo sa paligid ng dash para mag-subtract: ang `24' - 6"` ay 23'-6".
- Ang plain na numero ay nagmu-multiply o naghahati ng haba bilang numero; kapag idinagdag sa haba, nasa default unit ito.
- Gumagana rin ang `abs`, `round`, `ceil` at `floor`. Tinatanggihan ang kalkulasyong hindi mabasa, kasama kung saan ito nagkamali.

## Paano ipinapakita ang mga haba

Ipinapakita ang mga haba bilang feet, inches at sixteenths: `12'-6 1/2"`, `0'-0 3/4"`. Nire-round ang mga value sa pinakamalapit na 1/16 inch para sa display; hindi nire-round ang mismong quantity. Ipinapakita ang decimal values na may dalawang decimal at thousands separator, gaya ng `1,234.50 LF`.

## Rate (material at labor kada unit)

| Ang i-type mo | Ibig sabihin |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (hanggang apat na decimal; nire-round ang mas marami) |
| (walang laman) | $0 |

Mensahe: "I-type ang halaga gaya ng 12.50." o "Masyadong malaki ang halagang iyon." Hindi tinatanggap ang negatibong rate.

Ang mga extended amount (material, labor, totals) ay kinukuwenta hanggang sentimo: quantity with waste × rate, nire-round nang half away from zero, eksaktong gaya ng `ROUND(x, 2)` ng spreadsheet.

## Porsyento ng waste

| Ang i-type mo | Ibig sabihin |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (walang laman) | 0% |

Hanggang dalawang decimal, mula 0% hanggang 1000%. Mga mensahe: "I-type ang porsyento gaya ng 10 o 7.5." o "Hindi pinapayagan ang waste na higit sa 1000%."

## Mga pangalan at unit

- Pangalan ng item at component: hanggang 200 character.
- {{ui:Unit}} ng component: anumang text hanggang 20 character, gaya ng `EA`, `sheets`, `CY`, `gal`. Label lamang ito; hindi ito kino-convert ng TakeoffCraft.

## Mga formula

May sariling patakaran ang assembly formula: tingnan ang [Wika ng formula](topic:formulas).
