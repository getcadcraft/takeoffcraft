---
title: Pakkumise kokkuvõte ja pakkumine
summary: Lisa hinnangule tööjõu koormus, käibemaks, üldkulud, kasum ja tagatis, kirjuta kaasatud ja välja jäetud tööd ning laadi alla pakkumise PDF saatmiseks.
keywords: pakkumine, tööjõu koormus, koormus, palk, pakkumisdokument, üldkulud, kasum, lisand, marginaal, käibemaks, tagatis, kaasatud, välja jäetud, tingimused, allkiri, klient, hind
from: 3208a561
---

Hinnang hindab, mida võtsid arvesse. **Pakkumise kokkuvõte** teeb sellest hinna: lisab käibemaksu, üldkulud, kasumi ja tagatise ning koostab **pakkumise PDF-i** koos kaasatud ja välja jäetud töödega.

Ava see valikust {{ui:Eksport}} › {{ui:Pakkumise kokkuvõte ja pakkumine…}}. Kõik selles on salvestatud koos arvestusega ja iga muudatust saab tagasi võtta.

## Lisandid

Sisesta protsent mis tahes viiest (ülejäänud jäta 0-le). Need arvutatakse selles järjekorras, igaüks selle põhjal, mis on eespool:

| Rida | Arvutatakse kui |
|---|---|
| Materjal, tööjõud | Hinnangu kogusummad (põhipakkumine, kui arvestusel on [alternatiivid](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Tööjõu koormus | Koormuse % × tööjõud: palgamaksud, kindlustus ja hüved sinu meeskondade palgale. |
| **Maksumus** | Materjal + tööjõud + tööjõu koormus. |
| Käibemaks materjalile | Maksu % × materjal. |
| Üldkulud | Üldkulude % × (maksumus + maks). |
| Kasum | Kasumi % × (maksumus + maks + üldkulud). |
| Tagatis | Tagatise % × kõik eespool. |
| **Hind** | Ridade summa. |

Iga rida ümardatakse sendini. Töövihik näitab samu ridu lehe Hinnang kogusumma all valemitega. Kokkuvõte uueneb sisestamise ajal: {{key:Enter}} kinnitab protsendi. Iga alternatiiv kuvatakse samade lisanditega oma maksumusel, nii et omanik näeb, mida selle võtmine tegelikult muudab.

## Pakkumisdokument

Täida, mida pakkumisdokument peaks ütlema:

- **Projekt** (arvestuse nimi, kui tühi), **Kellele** (klient) ja **Kellelt** (sinu ettevõte).
- **Kaasatud** ja **Välja jäetud**: üks rida kohta; rea ees olev kriips või punkt on lubatud.
- **Tingimused**: vaba tekst, näiteks „Kehtib 30 päeva.“
- **Loetle kirjed ja kogused**: ulatus kirje kaupa koos kogustega, ilma hindadeta. Eemalda märge, kui tahad ühesummalist pakkumist.

Vali {{ui:Pakkumise PDF}}. PDF (`<takeoff> - proposal.pdf`) sisaldab kuupäeva, hinnaplokki iga lisandi ja hinnaga, alternatiive, ulatust, kaasatud ja välja jäetud töid, tingimusi ning jooni allkirja ja kuupäeva jaoks. Kui mõnda kogust ei saanud mõõta (leht ilma mõõtkavata), ütleb see seda hinna all.

## Eksportides

Kui arvestusel on pakkumise kokkuvõte, lõpeb CSV sellega ja töövihikus on leht **Pakkumise kokkuvõte**, kus on iga rida, selle protsent ja summa. Vaata [Hinnangu eksportimine](topic:export-estimate).
