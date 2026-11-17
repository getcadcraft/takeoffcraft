---
title: Ühikud
summary: Ühikud, milles kirje saab aruandeid esitada, ühikud, mida selle valemi muutujad kasutavad, ja see, kuidas inglise ja meetermõõdustik segunevad.
keywords: ühikud, lf, sf, sy, sq, ruutjardid, katuseruudud, aakrid, hektarid, meetrid, ruutmeetrid, ea, tükk, meetriline, inglise, teisendus, vaikeühik
from: b7bf0528
---

## Kirje ühikud

| Kirje tüüp | Ühik | Nimi |
|---|---|---|
| Lineaarne | LF | lineaarjalad (vaikimisi) |
| Lineaarne | m | meetrid |
| Pindala | SF | ruutjalad (vaikimisi) |
| Pindala | SY | ruutjardid |
| Pindala | SQ | katuseruudud (100 ruutjalga) |
| Pindala | ac | aakrid |
| Pindala | m² | ruutmeetrid |
| Pindala | ha | hektarid |
| Loend | EA | tükk |

Muuda seda {{ui:Ühik}} abil kirjeredaktoris igal ajal, isegi pärast mõõtmist; kogus teisendatakse kohe.

{{ui:Ühik}} loend näitab ühikuid, mis on sisse lülitatud jaotises {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Ühikud}}, ja alati kirje enda ühikut. Uus kirje algab selles tärniga märgitud pikkuse- või pindalaühikuga, kui see on kirje ühik; muidu LF või SF. Vt [Ühikud, sisestatud väärtused ja ühikuloendid](common:unit-lists).

## Valemi muutujate ühikud

| Kirje ühik | L, P, H | A |
|---|---|---|
| LF | jalad | ruutjalad (seina pindala) |
| m | meetrid | ruutmeetrid (seina pindala) |
| SF | jalad | ruutjalad |
| SY | jalad | ruutjardid |
| SQ | jalad | katuseruudud |
| ac | jalad | aakrid |
| m² | meetrid | ruutmeetrid |
| ha | meetrid | hektarid |

SY kirjete puhul on `A` ruutjardides, kuid `P` ja `H` jäävad jalgadesse. SY kirje maht on `A * 9 * H / 27` kuupjardi; plaatide puhul on SF kasutamine lihtsam.

## Kus ühikud on fikseeritud

Mõned näidud kasutavad alati jalgu:

- olekuriba elav näit joonistamise ajal (jalad-tollid, SF),
- **Valitud märk** (jalad-tollid, LF ja SF),
- kontrolli tulemus (jalad-tollid, kümnendjalad ja meetrid),
- lõikude pikkused ja ümbermõõdud tabelarvutuse lehel Märgid (jalad-tollid).

Kirje kogusummad, tabel {{ui:Kogused}}, valemid ja hinnangu tööleht kasutavad kirje enda ühikut.

## Mõõtkavad ja ühikud on eraldi

Lehe mõõtkava ütleb, kui suur joonis on; kirje ühik ütleb, kuidas seda aruandes esitada. Meetrilist joonist mõõtkavas `1:100` võib mõõta LF-des ja inglise joonist m²-des. Kalibreerimine aktsepteerib mis tahes ühikut: `24'-6"`, `7.5 m`, `7500 mm`.

## Täpsus

TakeoffCraft mõõdab täpselt klõpsatud punktide järgi, sealhulgas tõeliste kaarepikkuste ja pindaladega, ega ümarda koguseid. Kuvamine ümardab pikkused 1/16 tollini ja kümnendarvud kahe kohani. Raha ümardatakse ainult laiendatud summades, sendini.
