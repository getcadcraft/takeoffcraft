---
title: Hyrja e gjatësisë, tarifës dhe përqindjes
summary: Çfarë mund të shkruash për distancat, lartësitë, tarifat e parave dhe përqindjet e humbjes, me shembuj dhe mesazhet për hyrjet që TakeoffCraft nuk i lexon dot.
keywords: hyrje, format, këmbë inç, thyesa, këmbë decimale, metrik, metra, milimetra, tarifë, para, dollarë, përqindje, humbje, shkrim
from: 215bbf4d
---

## Gjatësitë

Përdoret nga **Distanca reale** te {{ui:Kalibro}}, dhe nga {{ui:Lartësia}} dhe {{ui:Thellësia}} te redaktuesi i artikullit.

| Shkruan | Do të thotë |
|---|---|
| `24'-0"` | 24 këmbë |
| `24'-6 1/2"` | 24 këmbë 6½ inç |
| `12' 6 1/2"` | 12 këmbë 6½ inç (hapësirë në vend të vizës) |
| `12'-6-1/2"` | 12 këmbë 6½ inç (vija midis pjesëve) |
| `24'` | 24 këmbë |
| `30"` | 30 inç |
| `6 1/2"` | 6½ inç |
| `3/4"` | ¾ inç |
| `24 ft 6 in` | 24 këmbë 6 inç (edhe `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 në njësinë e parazgjedhur (shih më poshtë) |
| `24.5'` | 24.5 këmbë |
| `7.5 m` | 7.5 metra |
| `750 cm` | 750 centimetra |
| `7500 mm` | 7,500 milimetra |

- Një numër i thjeshtë është në **këmbë** për kalibrim dhe për artikuj në LF, SF ose SY, dhe në **metra** për artikuj në m ose m².
- Thonjëzat e kthyera dhe shenjat e thyerjes nga përpunuesit e tekstit (′ ″ ’ ”) veprojnë si `'` dhe `"`. Dy apostrofa `''` numërohen si `"`.
- Presjet injorohen: `1,200 mm` është 1200 mm.
- Thyesat kërkojnë numra të plotë në të dyja anët: `6 1/2"` punon, `6.5 1/2"` nuk punon.
- Distancat zero dhe negative refuzohen.

Mesazhet:

- "Shkruaj një distancë, si 24'-0" ose 7.5 m." (fusha është bosh)
- "Shkruaj një distancë më të madhe se zero."
- "Përdor këmbë dhe inç (24'-6 1/2"), këmbë decimale, m, cm ose mm." (njësi e panjohur)
- "Kjo distancë nuk u lexua. Provo 24'-6 1/2" ose 24.5."

Për të pastruar lartësinë ose thellësinë e një artikulli, zbraze fushën.

### Llogaritja

Çdo fushë gjatësie, si dhe kutia e shkrimit gjatë vizatimit, pranon edhe një llogaritje me `+`, `-`, `*`, `/` dhe kllapa:
`4+7/16` (4.4375 në njësinë e parazgjedhur), `12'6" + 3/4"`, `(24'-0")/3` (8 këmbë), `2*450mm`.

- Një vizë e shkruar brenda një gjatësie është ende pjesë e saj: `24'-6"` është 24 këmbë 6 inç dhe `6-1/2` është 6½. Vendos hapësira rreth vijës për ta zbritur: `24' - 6"` është 23'-6".
- Një numër i thjeshtë shumëzon ose pjesëton një gjatësi si numër; i shtuar te një gjatësi, është në njësinë e parazgjedhur.
- `abs`, `round`, `ceil` dhe `floor` funksionojnë gjithashtu. Një llogaritje që nuk lexohet refuzohet, me vendin ku ka gabuar.

## Si shfaqen gjatësitë

Gjatësitë shfaqen si këmbë, inç dhe të gjashtëmbëdhjetat: `12'-6 1/2"`, `0'-0 3/4"`. Vlerat rrumbullakosen në 1/16 inç më të afërt për shfaqje; vetë sasitë nuk rrumbullakosen. Vlerat decimale shfaqen me dy decimale dhe ndarës për mijëshat, si `1,234.50 LF`.

## Tarifat (materiali dhe puna për njësi)

| Shkruan | Do të thotë |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (deri në katër decimale; të tjerat rrumbullakosen) |
| (bosh) | $0 |

Mesazh: "Shkruaj një shumë si 12.50." ose "Kjo shumë është shumë e madhe." Tarifat negative nuk pranohen.

Shumat e zgjeruara (materiali, puna, totalet) llogariten deri në cent: sasia me humbje × tarifa, e rrumbullakosur nga zero, saktësisht si `ROUND(x, 2)` të një fletëllogaritjeje.

## Përqindja e humbjes

| Shkruan | Do të thotë |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (bosh) | 0% |

Deri në dy decimale, nga 0% në 1000%. Mesazhet: "Shkruaj një përqindje, si 10 ose 7.5." ose "Humbja mbi 1000% nuk lejohet."

## Emrat dhe njësitë

- Emrat e artikujve dhe të përbërësve: deri në 200 karaktere.
- {{ui:Njësia}} i një përbërësi: çdo tekst deri në 20 karaktere, si `EA`, `sheets`, `CY`, `gal`. Është vetëm etiketë; TakeoffCraft nuk e konverton.

## Formulat

Formulat e montimeve kanë rregullat e veta: shih [Gjuha e formulave](topic:formulas).
