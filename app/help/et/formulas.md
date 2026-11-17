---
title: Valemikeel
summary: Koostekoguse valemite reeglid - muutujad, tehted, funktsioonid, ümardamine ja iga veateade.
keywords: valem, avaldis, süntaks, funktsioonid, ceil, floor, round, min, max, abs, muutujad, tehted, arvutus
from: 4da14575
---

Koostekomponendid saavad oma koguse valemist. Valem on väike aritmeetiline avaldis kirje mõõdetud väärtuste üle. Töödeldud näidete jaoks vt [Koosted ja valemid](topic:assemblies).

## Muutujad

| Kirje tüüp | Muutuja | Tähendus |
|---|---|---|
| Lineaarne | `L` | Kogupikkus |
| Lineaarne | `H` | Kirje kõrgus |
| Lineaarne | `A` | Seinapind, L × H, millest on maha arvestatud nende joonte avad, millel need on (koguste arvestus BimCraftist). Kui koguste arvestus nimetab mõõtmismeetodi, mõõdetakse `A` selle järgi: avad, mis ei ületa meetodi väikseimat suurust, jäävad arvesse ning see, mida meetod seinte ristumisel arvestab, jäetakse välja. Kirje all olev märkus nimetab meetodi |
| Lineaarne | `N` | Joonte arv |
| Pindala | `A` | Kogu netopind (ääriskontuurid miinus väljalõiked) |
| Pindala | `P` | Kogu ümbermõõt, kaasa arvatud väljalõigete servad |
| Pindala | `H` | Kirje sügavus või paksus |
| Pindala | `N` | Alade arv |
| Loendus | `N` | Loendus |

- Muutujad on kirje ühikutes: vt [Ühikud](topic:units).
- Suur- ja väiketäht on samad: `l` on `L`.
- Töötavad ainult kirje enda tüübi muutujad. `P` lineaarsel kirjel annab: „"P" ei ole siin mõõdetud väärtus. Kasuta L, H, A, N.“
- Tühi kõrgus või sügavus on 0.

## Tehted

| Kirjuta | Tähendus |
|---|---|
| `+` | Liida |
| `-` või `−` | Lahuta või negatiivne väärtus |
| `*` või `×` | Korruta |
| `/` või `÷` | Jaga |
| `( )` | Rühmita |

Korrutamine ja jagamine tulevad enne liitmist ja lahutamist: `L * 2 + 4` on (L × 2) + 4. Kahtluse korral kasuta sulge.

Arvudel võivad olla kümnendkohad (`1.333`, `.5`) ja astmed (`1e3` = 1000). Tühikud ignoreeritakse.

## Funktsioonid

| Funktsioon | Tulemus | Näide |
|---|---|---|
| `ceil(x)` | Ümarda üles täisarvuni | `ceil(67.5)` = 68 |
| `floor(x)` | Ümarda alla täisarvuni | `floor(67.5)` = 67 |
| `round(x)` | Ümarda lähima täisarvuni, pooled eemale nullist | `round(2.5)` = 3 |
| `round(x, d)` | Ümarda d kümnendkohani (0 kuni 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Väikseim väärtus | `min(N, 10)` |
| `max(a, b, …)` | Suurim väärtus | `max(1, ceil(N / 12))` |
| `abs(x)` | Väärtus ilma märgita | `abs(-3)` = 3 |

`ceil` ja `floor` ignoreerivad arvuti väikesi ümardusvigu, nii et väärtus, mis peaks olema täpselt 1, ei ümardu kunagi 2-ni.

## Vead

Valem, mida ei saa lugeda ega arvutada, kuvab oma vea välja all ning komponent jäetakse kogusummadest välja ({{ui:Kogused}} päis ütleb „Mittetäielik“). Sõnumid:

| Sõnum | Parandus |
|---|---|
| Sisesta valem, näiteks L või ceil(L / 1.333) + 1. | Valem on tühi. |
| „X“ ei ole siin mõõdetud väärtus. Kasuta … | Kasuta ühte loetletud muutujat. |
| „X“ ei ole siin funktsioon. Kasuta ceil, floor, round, min, max, abs. | Kasuta ühte neist funktsioonidest. |
| „#“ ei ole valemis lubatud. | Eemalda see märk (ühikud, `%`, `$` ja `=` ei ole lubatud). |
| „)“ on puudu. / On „)“ ilma vastava „(“-ta. | Tasakaalusta sulud. |
| Enne „)“ puudub väärtus. | Näiteks `max(1, )`: lisa väärtus. |
| Valem lõpeb liiga vara. | Näiteks `L *`: lõpeta see. |
| Ootamatu „…“. Kas tehe puudub? | Kaks väärtust kõrvuti, näiteks `2L`: kirjuta `2 * L`. |
| ceil() võtab 1 väärtuse. | Anna funktsioonile õige arv väärtusi. |
| round(x, digits) vajab täisarvulisi kümnendkohti 0 kuni 10. | Kasuta täisarvu kümnendkohtade arvuna. |
| Valem jagab nulliga. | Tavaliselt on H 0: määra kirje kõrgus või sügavus. |
| Valem ei anna arvu. | Tulemus on liiga suur, et olla arv. |
| Valem on liiga pikk (kuni 500 tähemärki). | Lühenda seda. |

## Turvaline oma olemuselt

Valem saab teha ainult aritmeetikat ülal loetletud muutujate ja funktsioonidega. See ei saa käivitada koodi ega lugeda midagi muud, seega on valem projektifailis, mille keegi sulle saadab, ohutu.
