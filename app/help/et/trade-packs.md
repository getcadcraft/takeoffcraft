---
title: Tööpaketid
summary: Lisa ühe ala tasuta koosteid oma hinnateeki, eemalda need ühe sammuga ja jaga oma teeki paketina.
keywords: tööpakett, pakett, koosted, mallid, algustarvikud, elekter, kipsplaat, karkass, värvimine, betoon, põrandakatted, müüritis, katusetööd, fassaad, puusepatöö, torutööd, hvac, soojustus, aiandus, terrass, üldtöövõtja, csi, masterformat, cc0, lisa, eemalda, jaga
from: d3c036be
---

**Tööpakett** on komplekt valmis kirjeid ühe ala jaoks: igaühel on oma ühik, kõrgus või sügavus, jäätmed ja **koost** ehk osad ja valemid, mis muudavad mõõdetud lõigu, pindala või loenduse materjalideks. Kipsseina jaoks tuleb näiteks kaasa profiil, vardad, plaadid, kruvid, teip ja spaatlimass.

Paketid lisatakse sinu [hinnateegile](topic:price-library) ja sealt lisad nende kirjed mis tahes koguste arvestusse.

## Paketi lisamine

1. Ava {{ui:Teek}} kirjete paneeli ülaosas, seejärel {{ui:Tööpaketid…}}.
2. Vali {{ui:Ühikud}}: inglise (LF, SF), meetriline (m, m²) või mõlemad. Iga koost tuleb mõlemas süsteemis.
3. Vali paketi kõrvalt {{ui:Lisa}}.

Paketi kirjed ilmuvad teeki, märgituna paketi nimega. Et neid kasutada, märgi need teegis ära ja vali {{ui:Lisa koguste arvestusse}}.

:::note
**Pakett ei too hindu.** Tema kirjed näitavad teegis „Määra oma hind“. Hinnad on sinu: sisesta need teeki või kirjeredaktorisse või impordi oma hinnakiri CSV-na ja kasuta {{ui:Uuenda hindu}}.
:::

Kui sul on teegis juba sama nime ja liigi kirje, jätab pakett sinu oma nagu on. Paketi uuesti lisamine asendab selle omad kirjed uue versiooniga.

## Paketi eemaldamine

Aknas {{ui:Tööpaketid…}} vali lisatud paketi kõrvalt {{ui:Eemalda}} ja siis veel kord kinnituseks. Kõik sellest pärit kirjed lahkuvad teegist ühe sammuga. Koguste arvestusse juba lisatud kirjed jäävad sinna alles.

## Mis paketis on

Vali paketi all {{ui:Allikad ja üksikasjad}}, et näha, mille järgi iga koost kirjutati: ehitusnormid, standardid ja tööstusalade liitude paigaldusjuhendid. Teegis hoia kursorit kirje kohal, et lugeda selle allikaid ja eeldusi, näiteks tugede vahet või värvi katvust. Kontrolli neid oma tööga ja toodete andmelehtedega ning muuda valemeid seal, kus need erinevad (vt [Koosted ja valemid](topic:assemblies)).

Iga pakett on märgitud **Algus: hinnangu koostaja pole veel üle vaadanud**, kuni töötavad hinnangu koostajad on selle läbi vaadanud.

Iga kirje kannab ka oma CSI MasterFormat numbrit, näiteks `09 21 16`.

## Jaga oma teek paketina

{{ui:Ekspordi paketina…}} teegis salvestab selle paketifailina (`.ccpack.json`), mille saab kõik lisada {{ui:Ava paketifail…}} abil. Vaikimisi jätab see välja kirjed, mis tulid sinu lisatud pakettidest, ja ei kanna hindu kaasa. Märgi {{ui:Lisa minu hinnad näidishindadena}}, et saata ka oma hinnad: need lähevad välja piirkonna ja kuupäevaga märgituna ning iga paketti lisav inimene valib, kas neid kasutada.

Pakettfailid on lihtsad andmed, mitte programmid. TakeoffCraft kontrollib iga osa enne kasutamist ja jätab välja kõik, mida ei oska lugeda.
