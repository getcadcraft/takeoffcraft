---
title: Mezgli un formulas
summary: Pievienojiet vienumam komponentes un ļaujiet formulām pārvērst tā garumu, laukumu vai skaitu stienīšos, plātnēs, dēļu loksnēs, betonā un stiprinājumos, ar izstrādātu sienas piemēru.
keywords: mezgls, komponentes, formula, stienīši, sausā apdare, loksnes, plātnes, betons, kubikjardi, stiprinājumi, recepte, tipisks, vienuma daļas
from: 12891a21
---

Vienuma **mezgls** ir komponenšu saraksts, katrai ir sava daudzuma formula un sava atkritumu un likmju vērtība. Formula izmanto vienuma izmērītās kopsummas, tāpēc viens sienas apjoma aprēķins dod stienīšus, plātnes un dēļus uzreiz, un tie atjaunojas, kamēr mērāt.

## Mainīgie, ko varat izmantot

| Vienuma tips | Mainīgie |
|---|---|
| Lineārs | `L` garums, `H` augstums, `A` sienas laukums (L × H), `N` līniju skaits |
| Laukums | `A` laukums, `P` perimetrs (kontūra + izgriezumi), `H` dziļums vai biezums, `N` laukumu skaits |
| Skaits | `N` skaits |

Vērtības ir vienuma pašās mērvienībās: pēdas un kvadrātpēdas LF un SF vienumiem, metri un kvadrātmetri vienumiem m un m². SY vienumam `A` ir kvadrātjardos, bet `P` un `H` paliek pēdās.

Formulās izmantojiet `+ - * /` (vai × ÷), iekavas, skaitļus un funkcijas `ceil`, `floor`, `round`, `min`, `max` un `abs`. Pilni noteikumi ir sadaļā [Formulu valoda](topic:formulas).

## Izstrādāts piemērs: iekšējā siena

Pieņemsim, ka esat izmērījis **Iekšējā siena tips A** kā lineāru vienumu: 4 līnijas, kopā 120 LF, ar {{ui:Height}} iestatītu uz `9'-0"`. Tā izmērītās vērtības ir L = 120, N = 4, A = 1,080 (SF sienas, viena puse).

1. Atlasiet vienumu zem {{ui:Items}}.
2. Sadaļā {{ui:Assembly}} izvēlieties {{ui:Add component}}.
   Parādās komponente ar nosaukumu "Komponente", un zem tās — formulas `L` rezultāts.
3. Laukā {{ui:Name}} ierakstiet `Stienīši ik 16 collas`, bet laukā {{ui:Unit}} — `EA`.
4. Laukā {{ui:Quantity formula}} ierakstiet `ceil(L * 12 / 16) + N`.
   Rezultāts atjaunojas, kamēr rakstāt: "= 94 EA". Tas ir viens stienītis ik 16 collas gar 120 pēdām (90) plus viens papildu, lai noslēgtu katru no 4 līnijām.
5. Vēlreiz izvēlieties {{ui:Add component}} plātnēm: nosaukums `Plātnes augšā un apakšā`, mērvienība `LF`, formula `L * 2`. Rezultāts: 240 LF.
6. Pievienojiet dēļus: nosaukums `Ģipškartona plāksne 4x8, abās pusēs`, mērvienība `loksnes`, formula `ceil(A * 2 / 32)`. Rezultāts: 68 loksnes (2,160 SF dēļu ÷ 32 SF vienā loksnē = 67.5, noapaļots uz augšu).
7. Aizpildiet katras komponentes {{ui:Waste %}}, {{ui:Material $}} un {{ui:Labor $}}.
   Katrai komponentei zem vienuma {{ui:Quantities}} ir sava rindiņa, cenota kā vienums, un {{ui:Job total}} to iekļauj.

Ja sienas izmaksas ir pilnībā komponentēs, atstājiet paša vienuma materiāla un darba likmes 0, citādi tās tiks skaitītas divreiz.

:::tip
Atkritumi tiek piemēroti pēc formulas un netiek noapaļoti: 68 loksnes ar 10% atkritumiem ir 74.8 loksnes. Lai pasūtītu veselas loksnes, ievietojiet atkritumus formulā, piemēram, `ceil(A * 2 / 32 * 1.1)`, un komponentes atkritumus atstājiet 0.
:::

## Citas formulas

| Kas | Vienums | Formula |
|---|---|---|
| Stienīši ik 24 collas | Lineārs | `ceil(L / 2) + N` |
| Siltumizolācijas paneļi, SF | Lineārs ar augstumu | `A` |
| Krāsa, abās pusēs, galoni pa 350 SF | Lineārs ar augstumu | `ceil(A * 2 / 350)` |
| Flīžu kastes pa 15 SF, +10% | Laukums | `ceil(A * 1.1 / 15)` |
| Grīdlīste vai malu apdare, LF | Laukums | `P` |
| Betons, kubikjardi | Laukums ar dziļumu | `A * H / 27` |
| Betons, noapaļots uz augšu līdz ceturtdaļjardam | Laukums ar dziļumu | `ceil(A * H / 27 * 4) / 4` |
| Eņģes, trīs uz durvīm | Skaits | `N * 3` |
| Vismaz viena kaste, viena uz 12 | Skaits | `max(1, ceil(N / 12))` |

## Kad formula ir nepareiza

Rindiņa zem formulas kļūst par kļūdas ziņojumu, piemēram, `"X" šeit nav izmērīta vērtība. Izmantojiet L, H, A, N.` vai `Trūkst ")".` Komponentei tad nav summu, tās rindā sadaļā {{ui:Quantities}} tiek rādīts "Formulas kļūda: …", un galvenē ir "Nepilnīgs: 1 formulas kļūda (netiek ieskaitīts kopsummās)". Labojiet formulu, un kopsummas atjaunojas.

Formula, kas dalās ar nulli, arī ir kļūda ("Formula dalās ar nulli."), piemēram, `A / H` vienumam bez dziļuma.

## Ierobežojumi

- Formulas darbojas ar vienuma **kopsummām**, nevis pa līnijām. `ceil(L * 12 / 16) + N` pievieno vienu stienīti katrai līnijai; noapaļošana pa katru līniju vēl nav pieejama.
- Formula var izmantot tikai sava vienuma mainīgos, nevis cita vienuma.
- Līdz 50 komponentēm vienam vienumam, līdz 500 rakstzīmēm vienai formulai.

## Noņemt komponenti

Zem tās izvēlieties {{ui:Remove component}}. To var atsaukt ar {{key:Mod+Z}}.
