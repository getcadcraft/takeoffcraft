---
title: Garuma, likmes un procentu ievade
summary: Ko var ierakstīt attālumiem, augstumiem, naudas likmēm un zudumu procentiem, ar piemēriem un ziņojumiem par ievadi, ko TakeoffCraft nevar nolasīt.
keywords: ievade, formāts, pēdas, collas, daļas, decimālpēdas, metriskā, metri, milimetri, likme, nauda, dolāri, procents, zudumi, rakstīšana
from: 215bbf4d
---

## Garumi

Izmanto **Reālais attālums** sadaļā {{ui:Calibrate}} un {{ui:Height}} un {{ui:Depth}} vienuma redaktorā.

| Ierakstāt | Nozīmē |
|---|---|
| `24'-0"` | 24 pēdas |
| `24'-6 1/2"` | 24 pēdas 6½ collas |
| `12' 6 1/2"` | 12 pēdas 6½ collas (atstarpe domuzīmes vietā) |
| `12'-6-1/2"` | 12 pēdas 6½ collas (domuzīmes starp daļām) |
| `24'` | 24 pēdas |
| `30"` | 30 collas |
| `6 1/2"` | 6½ collas |
| `3/4"` | ¾ collas |
| `24 ft 6 in` | 24 pēdas 6 collas (arī `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 noklusējuma mērvienībā (skatiet zemāk) |
| `24.5'` | 24.5 pēdas |
| `7.5 m` | 7.5 metri |
| `750 cm` | 750 centimetri |
| `7500 mm` | 7,500 milimetri |

- Vienkāršs skaitlis kalibrēšanai un vienumiem LF, SF vai SY ir **pēdās**, bet vienumiem m vai m² ir **metros**.
- Līkās pēdiņas un vārdu apstrādes programmu pirmās zīmes (′ ″ ’ ”) darbojas kā `'` un `"`. Divas apostrofa zīmes `''` tiek uzskatītas par `"`.
- Komati tiek ignorēti: `1,200 mm` ir 1200 mm.
- Daļām nepieciešami veseli skaitļi abās pusēs: `6 1/2"` darbojas, `6.5 1/2"` nedarbojas.
- Nulles un negatīvi attālumi netiek pieņemti.

Ziņojumi:

- "Ievadiet attālumu, piemēram, 24'-0" vai 7.5 m." (lauks ir tukšs)
- "Ievadiet attālumu, kas ir lielāks par nulli."
- "Izmantojiet pēdas un collas (24'-6 1/2"), decimālpēdas, m, cm vai mm." (nezināma mērvienība)
- "Šo attālumu nevarēja nolasīt. Mēģiniet 24'-6 1/2" vai 24.5."

Lai notīrītu vienuma augstumu vai dziļumu, iztukšojiet lauku.

### Aritmētika

Katrs garuma lauks, kā arī ierakstīšanas lodziņš zīmēšanas laikā pieņem arī aprēķinu ar `+`, `-`, `*`, `/` un iekavām:
`4+7/16` (4.4375 noklusējuma mērvienībā), `12'6" + 3/4"`, `(24'-0")/3` (8 pēdas), `2*450mm`.

- Domuzīme, kas ierakstīta garumā, joprojām ir tā daļa: `24'-6"` ir 24 pēdas 6 collas un `6-1/2` ir 6½. Lai atņemtu, ap domuzīmi jāliek atstarpes: `24' - 6"` ir 23'-6".
- Vienkāršs skaitlis reizina vai dala garumu kā skaitli; pieskaitīts garumam, tas tiek uzskatīts noklusējuma mērvienībā.
- Darbojas arī `abs`, `round`, `ceil` un `floor`. Aprēķins, ko nevar nolasīt, tiek noraidīts, un tiek norādīts, kur radusies kļūda.

## Kā garumi tiek rādīti

Garumi tiek rādīti pēdās, collās un sešpadsmitdaļās: `12'-6 1/2"`, `0'-0 3/4"`. Vērtības attēlošanai tiek noapaļotas līdz tuvākajai 1/16 collai; paši daudzumi netiek noapaļoti. Decimālvērtības tiek rādītas ar diviem cipariem aiz komata un tūkstošu atdalītājiem, piemēram, `1,234.50 LF`.

## Likmes (materiāla un darba izmaksas par vienību)

| Ierakstāt | Nozīmē |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (līdz četrām decimāldaļām; vairāk tiek noapaļoti) |
| (tukšs) | $0 |

Ziņojums: "Ievadiet summu, piemēram, 12.50." vai "Šī summa ir pārāk liela." Negatīvas likmes netiek pieņemtas.

Izvērstās summas (materiāls, darbs, kopsummas) tiek aprēķinātas līdz centam: daudzums ar zudumiem × likme, noapaļots, pusi tālāk no nulles, tieši kā izklājlapas `ROUND(x, 2)`.

## Zudumu procenti

| Ierakstāt | Nozīmē |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (tukšs) | 0% |

Līdz diviem decimāldaļām, no 0% līdz 1000%. Ziņojumi: "Ievadiet procentu, piemēram, 10 vai 7.5." vai "Zudumi virs 1000% nav atļauti."

## Nosaukumi un mērvienības

- Vienumu un komponentu nosaukumi: līdz 200 rakstzīmēm.
- Komponenta {{ui:Unit}}: jebkurš teksts līdz 20 rakstzīmēm, piemēram, `EA`, `sheets`, `CY`, `gal`. Tā ir tikai etiķete; TakeoffCraft to nepārvērš.

## Formulas

Mezglu formulām ir savi noteikumi: skatiet [Formulu valoda](topic:formulas).
