---
title: Koosted ja valemid
summary: Lisa kirjele komponente ja lase valemitel muuta selle pikkus, pindala või arv vahepostideks, plaatideks, lehtedeks, betooniks ja kinnitusvahenditeks, koos töötatud seinanäitega.
keywords: koost, komponendid, valem, vahepostid, kipsplaat, lehed, plaadid, betoon, kuupjardid, kinnitusvahendid, retsept, tüüpiline, kirje osad
from: 12891a21
---

Kirje **koost** on komponentide loend, millest igaühel on oma koguse valem ning oma jäätmete ja hindade määrad. Valem kasutab kirje mõõdetud kogusummasid, nii et ühe seina koguste arvestusest saad korraga vahepostid, plaadid ja kipsplaadid ning need uuenevad mõõtmise käigus.

## Kasutatavad muutujad

| Kirje tüüp | Muutujad |
|---|---|
| Joon | `L` pikkus, `H` kõrgus, `A` seina pindala (L × H), `N` lõikude arv |
| Pindala | `A` pindala, `P` ümbermõõt (kontuur + väljalõiked), `H` sügavus või paksus, `N` alade arv |
| Loend | `N` loendus |

Väärtused on kirje enda ühikutes: jalad ja ruutjalad LF- ja SF-kirjetel, meetrid ja ruutmeetrid m- ja m²-kirjetel. SY-kirje puhul on `A` ruutjardides, `P` ja `H` aga jalgades.

Valemites kasutatakse `+ - * /` (või × ÷), sulge, arve ning funktsioone `ceil`, `floor`, `round`, `min`, `max` ja `abs`. Täielikud reeglid on lehel [Valemite keel](topic:formulas).

## Töötatud näide: siseseina

Oletame, et oled joonelise kirjena arvestanud **Siseseina tüüp A**: 4 lõiku kokku 120 LF, {{ui:Kõrgus}} on seatud väärtusele `9'-0"`. Selle mõõdetud väärtused on L = 120, N = 4, A = 1,080 (SF seina, üks pool).

1. Vali kirje jaotises {{ui:Kirjed}}.
2. Valikus {{ui:Koost}} vali {{ui:Lisa komponent}}.
   Ilmub komponent nimega „Komponent“, mille all on valem `L` ja selle tulemus.
3. Kirjuta väljale {{ui:Nimi}} `Studs 16 in o.c.` ja väljale {{ui:Ühik}} `EA`.
4. Väljale {{ui:Koguse valem}} kirjuta `ceil(L * 12 / 16) + N`.
   Tulemus uueneb kirjutamise ajal: „= 94 EA“. See on üks vahepost iga 16 tolli järel 120 jala peale (90), pluss üks lisaks iga 4 lõigu sulgemiseks.
5. Plaatide jaoks vali uuesti {{ui:Lisa komponent}}: nimi `Plates, top and bottom`, ühik `LF`, valem `L * 2`. Tulemus: 240 LF.
6. Lisa kipsplaat: nimi `Gypsum board 4x8, both sides`, ühik `sheets`, valem `ceil(A * 2 / 32)`. Tulemus: 68 lehte (2,160 SF plaati ÷ 32 SF lehe kohta = 67.5, ümardatud üles).
7. Täida iga komponendi väljad {{ui:Jäätmed %}}, {{ui:Materjal $}} ja {{ui:Tööjõud $}}.
   Iga komponent saab kirje all oma rea jaotises {{ui:Kogused}}, hinnastatud nagu kirje, ja {{ui:Töö kogusumma}} hõlmab seda.

Kui seina maksumus on kõik komponentides, jäta kirje enda materjali- ja tööjõumäärad nulli, muidu arvestatakse seda kaks korda.

:::tip
Jäätmed rakendatakse pärast valemit ega ümardata: 68 lehte 10% jäätmetega on 74.8 lehte. Et tellida terveid lehti, pane jäätmed valemisse, näiteks `ceil(A * 2 / 32 * 1.1)`, ja jäta komponendi jäätmed nulli.
:::

## Veel valemeid

| Mis | Kirje | Valem |
|---|---|---|
| Vahepostid 24 tolli keskelt keskele | Joon | `ceil(L / 2) + N` |
| Isolatsioonitekid, SF | Joon kõrgusega | `A` |
| Värv, mõlemad pooled, gallonit 350 SF kohta | Joon kõrgusega | `ceil(A * 2 / 350)` |
| Plaadipakid 15 SF kohta, 10% lisa | Pindala | `ceil(A * 1.1 / 15)` |
| Põrandaliist või servapiire, LF | Pindala | `P` |
| Betoon, kuupjardid | Pindala sügavusega | `A * H / 27` |
| Betoon ümardatud üles veerandjardini | Pindala sügavusega | `ceil(A * H / 27 * 4) / 4` |
| Hinged, kolm ukse kohta | Loend | `N * 3` |
| Vähemalt üks pakk, üks iga 12 kohta | Loend | `max(1, ceil(N / 12))` |

## Kui valem on vale

Valemi all olev rida muutub veateateks, näiteks `"X" is not a measured value here. Use L, H, A, N.` või `A ")" is missing.` Komponendil siis koguseid ei ole, selle rida jaotises {{ui:Kogused}} näitab „Valemi viga: …“ ja päis ütleb „Puudulik: 1 valemi viga (ei ole kogusummas)“. Parandades valemi, kogusummad uuenevad.

Viga on ka jagamine nulliga („The formula divides by zero.“), näiteks `A / H` kirjel, millel pole sügavust.

## Piirangud

- Valemid töötavad kirje **kogusummade** järgi, mitte lõikude kaupa. `ceil(L * 12 / 16) + N` lisab ühe vahepostituse lõigu kohta; lõikude kaupa ümardamist veel ei ole.
- Valem saab kasutada ainult oma kirje muutujaid, mitte teise kirje omi.
- Kirjel võib olla kuni 50 komponenti ja valem võib olla kuni 500 tähemärki pikk.

## Komponendi eemaldamine

Vali selle all {{ui:Eemalda komponent}}. Seda saab tagasi võtta klahviga {{key:Mod+Z}}.
