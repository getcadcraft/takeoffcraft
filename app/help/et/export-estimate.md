---
title: Ekspordi eelarve ja märgitud PDF
summary: Laadi eelarve alla XLSX-töövihikuna dünaamiliste valemitega või CSV-na ning koopiad oma PDF-idest koos joonistatud koguste arvestusega.
keywords: ettepanek, pakkumuse kokkuvõte, eksport, xlsx, tabel, töövihik, csv, märgitud pdf, prindi koguste arvestus, aruanne, jaga, saada, selgitus
from: 334f89c7
---

Eksport on allalaadimised. Need tehakse sinu arvutis koguste arvestusest ja avatud PDF-idest; midagi ei saadeta kuhugi.

## Eelarve tabelarvutusena (XLSX)

1. Ava tööriistariba menüü {{ui:Eksport}} ja vali {{ui:XLSX}}.
   Sinu brauser laadib alla `(name).xlsx`. Olekuriba ütleb „Eksporditud (name).xlsx (eelarve dünaamiliste valemitega, lehtede kaupa, märgiste ja mõõtkavadega).“ ning lisab hoiatuse, kui eelarve on mittetäielik.
2. Ava see oma tabelarvutusprogrammis.

Töövihikus on neli töölehte ja allpool toodud aruanded, kui need kehtivad:

| Tööleht | Mida see sisaldab |
|---|---|
| Eelarve | Rida iga kirje ja komponendi kohta: kogus, kadu, kogus koos kaduga, hinnad, materjal, tööjõud, kokku, märkused. Kogusumma allservas. |
| Lehtede kaupa | Iga kirje kogus igal lehel koos märgiste arvuga. |
| Märgised | Iga märgis: leht, kirje, tüüp, kogus ja üksikasjad (lõikude pikkused, brutto- ja väljalõikepindalad, ümbermõõt). |
| Mõõtkavad | Iga leht, millel on mõõtkava või märgised: tema mõõtkava, kuidas see seati (eelhäälestus või kalibreeritud millisel kaugusel) ja jalgu PDF-ühiku kohta. |
| Koguste arvestuse kokkuvõte | Iga kirje kogus, CSI-number, märgised ja lehed ilma hindadeta. |
| Materjalinimekiri | Iga koostedetail kokku liidetud üle kogu koguste arvestuse (sama detail mitme kirje juures on üks rida), koos kaduga ja materjalikuluga, ning kirjed, mis seda kasutavad. |
| Pakkumise päring | Materjalinimekiri tarnijale saatmiseks: kogused koos kaduga, tühi ühikuhinna veerg ning summad ja kogusumma, mis täituvad hindade sisestamisel. |
| Jaotiste kaupa | Materjal, tööjõud ja kokku CSI MasterFormati jaotiste kaupa, kui kirjetel on {{ui:CSI number}}. |

Koos [pakkumuse kokkuvõttega](topic:bid-summary) lõpeb ka eelarve tööleht oma lisandustega (tööjõukoormus, käibemaks, üldkulud, kasum, garantii ja pakkumus) dünaamiliste valemitena.

Eelarve tööleht säilitab **dünaamilised valemid**: kogus koos kaduga, ümardatud materjali- ja tööjõusummad, iga rea kogusumma ning kogusumma. Tabelarvutusprogrammid arvutavad need uuesti, nii et hinna või kaduprotsendi võid muuta tabelarvutuses ja summad järgivad. TakeoffCraftis arvutatud arvud on samuti lahtrites salvestatud ja ühtivad senti täpselt.

Märkuste veerg loetleb iga komponendi valemi, valemivead, märgised lehtedel ilma mõõtkavata, seinapinna ja ümbermõõdu. Kui midagi on jäetud välja, ütleb kogusummarida „Mittetäielik: vaata ülal olevaid märkusi“.

Töövihik on kontrollitud LibreOffice Calcis, mis arvutas selle uuesti samadeks summadeks. Excelis ei ole seda veel avatud. Veerupõhised üksikasjad on lehel [Ekspordi veerud](topic:export-columns).

## Eelarve CSV-na

Ava menüü {{ui:Eksport}} ja vali {{ui:CSV}}. Saad faili `(name).csv`: samad read ja veerud mis eelarve töölehel, lihtsate väärtustena (ilma valemiteta), ning kogusumma. Kasuta seda kleepimiseks teise eelarve- või raamatupidamissüsteemi.

CSV sisaldab ainult eelarvet; koguste lehtede kaupa ja märgiste loendi jaoks kasuta XLSX-i. {{ui:Materjalinimekiri}} samas menüüs salvestab ainult materjalinimekirja CSV-na tellimiseks.

## Eelarve Google Sheetsis

Koguste tabeli kohal paneb **Kopeeri Google Sheetsi jaoks** eelarve lõikelauale tabulaatoriga eraldatud tekstina, samade ridadega mis CSV. Google Sheetsis klõpsa lahtrit A1 ja kleebi. TakeoffCraft ei logi Google'i sisse ega saada sinna midagi.

## Puuduvad hinnad ja eelarve kinnitamine

Rida, millel on kogus, kuid hind puudub, ütleb oma märkustes **Ilma hinnata** ning eksport arvestab need kogusummade hulka. Kui eelarve on kinnitatud, nimetab eksport, kes kinnitas, millal ja mis summale. Vt [Puuduvad hinnad ja eelarve kinnitamine](topic:sign-off-the-estimate).

## Märgitud PDF

1. Ava PDF-id, mille märgised soovid joonistada.
2. Ava menüü {{ui:Eksport}} ja vali {{ui:Märgitud PDF}}.
   Kuvatakse „Kirjutan märgitud PDF-i…“, seejärel laadib brauser alla ühe faili iga märgitud PDF-i kohta nimega `(PDF name) (takeoff).pdf`.

Koopias:

- lõigud on joonistatud joontena oma kirje värvis,
- pindalad on kergelt täidetud tahke äärisega ning väljalõiked jäetud avatuks,
- loendused on punktid,
- igal märgistatud lehel on väike selgitus alanurgas: iga kirje värv, nimi ja kogus sellel lehel.

Sinu algsed PDF-id ei muutu.

Märkused:

- Kirjutatakse ainult avatud PDF-id. Märgised PDF-idel, mis ei ole avatud, jäävad kogusummadesse, kuid neid ei joonistata; ava need PDF-id enne.
- Selgituse nimed kasutavad standardset PDF-fonti. Kirjad, mida see ei suuda kuvada, prinditakse kui „?“.
- Krüpteeritud PDF-i ei saa märgistatud koopiana kopeerida: „See PDF on parooliga kaitstud või krüpteeritud, seega märgitud koopiat ei saa kirjutada. Koguste arvestus on korras; ekspordi selle asemel tabel.“
- Esimene {{ui:Märgitud PDF}} vahekaardil laadib PDF-kirjutaja. Võrguühenduseta on see olemas ainult siis, kui rakenduse riba näitab {{ui:Valmis ka võrguta}}; vt [Töötamine võrguühenduseta](common:offline).

:::chromium
Mitme märgitud PDF-i puhul võivad Chrome ja Edge üks kord küsida, kas see sait tohib mitut faili alla laadida. Vali Luba, muidu saad ainult esimese faili.
:::

## Midagi eksportida?

- {{ui:XLSX}} ja {{ui:CSV}} vajavad vähemalt ühte kirjet: „Eksportida pole veel midagi: tee kirje ja mõõda see.“
- {{ui:Märgitud PDF}} vajab märgiseid avatud PDF-idel: „Avatud PDF-idel pole veel märgiseid.“

## Salvesta ka koguste arvestus

Eksport on aruanne. Et koguste arvestusega hiljem jätkata, vali ka {{ui:Salvesta koguste arvestus}}: vt [Koguste arvestuse salvestamine ja uuesti avamine](topic:save-and-reopen).

Üldkulude, kasumi, maksu ja garantii lisamiseks ning pakkumuse saatmiseks vt [Pakkumuse kokkuvõte ja ettepanek](topic:bid-summary).
