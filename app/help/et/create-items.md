---
title: Loo koguste arvestuse kirjed
summary: Loo joon-, pindala- ja loendamiskirjeid ning sea nende ühik, kõrgus või sügavus, jäätmed ning materjali- ja tööjõuhinnad.
keywords: meeskond, tootlikkuse määr, meeskonna suurus, palk, tunnid, inimtunnid, meeskonnatunnid, meeskonnapäevad, tööjõutunnid, kirje, uus kirje, tingimus, mitme tingimusega, mõõda ka, mitu tüüpi, ruum, joon, pindala, loendamine, ühik, kõrgus, sügavus, jäätmed, materjal, tööjõud, hinnang, värv, maksumus
from: 7fa5effc
---

Üks **kirje** on asi, mida mõõdad ja hindad: seinatüüp, põrandakate, lagi, uks, valgusti. Iga joonistatud märk kuulub kirjesse. Teised programmid nimetavad neid tingimusteks.

Igal kirjel on tüüp (ja see võib võtta ka teistsuguseid märke, vaata [Üks kirje, mitu liiki märke](topic:create-items#one-item-several-kinds-of-marks)):

| Tüüp | Joonistad | See annab aruande | Ühikud |
|---|---|---|---|
| Lineaarne | Ühendatud punktide jadad | Pikkus, jadade arv ja seinapindala, kui sellel on kõrgus | LF või m |
| Pindala | Suletud kontuurid väljalõigetega | Pindala, ümbermõõt, alade arv | SF, SY, SQ, ac, ha või m² |
| Loendamine | Üks klõps asja kohta | Mitu | EA |
| Sisestatud kogus | Mitte midagi: sisestad koguse | Sinu sisestatud arv (või CivilCraftist toodud) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha või m² |

## Sisestatud kogused (joonist pole)

Mõned hinnangu asjad ei ole kunagi joonistatud: mobiliseerimine, load, reserv, ühe summaga allhange või pinnase väljakaevamine ja täitmine, mille CivilCraft arvutas. Tee need **sisestatud kogusteks**:

1. Vali {{ui:Uus kirje}}, sisesta nimi, vali {{ui:Sisestatud kogus (joonist pole)}} ja vali {{ui:Lisa}}.
2. Kirjeredaktoris vali {{ui:Ühik}} (LS ühe summa puhul) ja sisesta {{ui:Kogus}}: `1`, `2.5` või `1,250`.
3. Sea jäätmed ja hinnad nagu ükskõik millisel muul kirjel. Koosti valemid kasutavad `Q`-d, mis on kogus, näiteks `ceil(Q / 12)` veokoormat.

Sisestatud kogus ei võta märke ja ei muuda hinnangut kunagi poolikuks. Kui koguste arvestusel on pakkumuse alad, on redaktoris ka {{ui:Pakkumuse ala}}: kogus loetakse siis selles alas, selle alternatiivides ja kogusummades, täpselt nagu seal oleks märk. Teistest rakendustest toodud kogustes öeldakse, kust need pärinevad, vaata [Pinnasetööd ja punktkõrgused](topic:earthwork#cut-and-fill-from-civilcraft).

## Tee kirje

1. Paremal paneelil {{ui:Kirjed}} vali {{ui:Uus kirje}}.
2. Sisesta nimi, näiteks `Siseseina tüüp A` või `Vaipplaat`.
3. Vali tüüp: {{ui:Lineaarne (pikkus)}}, {{ui:Pindala}} või {{ui:Loe}}.
4. Vali {{ui:Lisa}} (või vajuta {{key:Enter}}).
   Kirje ilmub loendisse oma värviga, saab kirjeks, millega joonistad, ja selle redaktor avaneb loendi all. Olekuriba ütleb, millist tööriista järgmisena valida.

Vajuta vormis {{key:Esc}}, et see sulgeda ilma kirjet lisamata.

:::tip
Kui valid esmalt mõõtmistööriista, kasutab TakeoffCraft viimast õiget tüüpi kirjet või avab vormi {{ui:Uus kirje}} juba valitud tüübiga.
:::

## Vali kirje, millega joonistad

Klõpsa loendis kirjel. See saab kirjeks, kuhu uued märgid lähevad, ja selle märgid tõstetakse esile igal lehel, teised kirjed muutuvad hämaraks. Kui avatud lehel pole selle märke, hüppab TakeoffCraft lehele, millel on. Klõpsa kirjel uuesti, et esiletõstmine lõpetada; see jääb siiski kirjeks, millega joonistad.

Märgi klõpsamine tööriistaga {{ui:Vali}} muudab ka selle märgi kirje praeguseks kirjeks.

## Sea kirje

Kirje redaktoril (**Kirje: (nimi)**) on need väljad. Iga väli salvestatakse, kui lahkud väljalt või vajutad {{key:Enter}}, ja iga muudatuse saab tagasi võtta.

| Väli | Mida see teeb |
|---|---|
| {{ui:Nimi}} | Näidatakse loendis, tabelites ja eksportides. |
| {{ui:Sisesta}} | Lineaarne, Pindala või Loendamine. See lukustub, kui kirjel on märke („Märkidega kirje säilitab oma tüübi“). |
| {{ui:Värv}} | Selle märkide värv ekraanil ja märgitud PDF-is. |
| {{ui:Ühik}} | Millises ühikus kogus on aruandes: LF või m lineaarse puhul; SF, SY, SQ, ac, ha või m² pindala puhul; EA loendamise puhul. |
| {{ui:Mõõdetakse ka}} | Muud liiki märgid, mida kirje võtab, igaühel oma ühik. Vaata allpool. |
| {{ui:Kõrgus}} (lineaarne) | Seina kõrgus. Kirje annab siis ka seinapindala (pikkus × kõrgus). Joonte, mis pärinevad BimCraft-mudelist, uksed ja aknad on kaasas: need võetakse välja üks kord ning kirje näitab brutopindala, avasid ja netopindala. Projektist BimCraft, mis valis mõõtmismeetodi, mõõdetakse siin samuti selle meetodiga (märkuses on meetod koos allikaga ja öeldud, et see pole koguseekspert kontrollinud); meetodit ei saa TakeoffCraftis muuta. Seinatüübi tellised või plokid ja mört tulevad kahe komponendina: tellitavad ühikud ja mördi maht. |
| {{ui:Sügavus}} (pindala) | Sügavus või paksus, mida kasutatakse koostevalemites (näiteks betoonimaht). |
| {{ui:Jäätmed %}} | Lisatakse kogusele enne hindamist: 10 tähendab kogus × 1,10. |
| Materjal $/LF | Materjali maksumus ühiku kohta. Silt järgib ühikut: $/SF, $/EA jne. |
| Tööjõud $/LF | Tööjõu maksumus ühiku kohta. |
| {{ui:CSI number}} | Tema CSI MasterFormati number, näiteks `09 21 16` (või ainult jaotis, `09`). Töövihiku leht By division grupeerib kulud selle järgi. Kirjetel [tööpakettidest](topic:trade-packs) on see juba olemas. |

Kõrgus ja sügavus võtavad jalgu ja tolle (`9'-0"`, `8' 6"`) või kümnendjalgu (`9`) inglise ühikute puhul ning meetreid (`2.7`, `2700 mm`) meetriliste ühikute puhul. Hinnad võtavad summasid nagu `12.50` või `$1,250`, kuni nelja kümnendkohani. Vaata [Pikkuse, hinna ja protsendi sisestamine](topic:entry-formats).

Väljade all näitab **Mõõdetud** kogusid, mida kirje valemid saavad kasutada, koos nende tähtedega: lineaarse puhul Pikkus (L), Jadad (N), Seinapindala (A); pindala puhul Pindala (A), Ümbermõõt (P), Alad (N); loendamise puhul Arv (N).

## Üks kirje, mitu liiki märke

Mõnda asja mõõdetakse rohkem kui ühel viisil: ruumil on põrand (pindala), sein piki seinu (pikkus) ja uksed (loendamine). Selle asemel, et teha kolm kirjet, tee üks:

1. Tee kirje selle põhitüübiga, näiteks pindala kirje `Ruum 101`.
2. Kirje redaktoris jaotises {{ui:Mõõdetakse ka}} märgi linnukestega {{ui:Lineaarne}}, {{ui:Loe}} või mõlemad. Igaühe kõrval on oma ühik.
3. Joonista mis tahes tööriistaga, mille liik kirje võtab: kui `Ruum 101` on praegune, joonistab {{ui:Pindala}} selle põranda, {{ui:Lineaarne}} sokli ja {{ui:Loe}} uksed. TakeoffCraft ei küsi teist kirjet.

Kirjete loend näitab iga koguse (`50.00 SF + 2 EA`). Koguste tabelis on kirje rida põhikogusega ja iga muu liik saab oma rea selle all, näiteks **Ruum 101 (loendamine)**, oma jäätmete ning materjali- ja tööjõuhindadega. Eksport, lehe kaupa tabel ja märgitud PDF-i legend loetlevad need samamoodi.

Põhitüübi väljad jäävad põhitüübi omadeks: kõrgus või sügavus, kalle, mahaarvamised ja 3D-kuju kehtivad ainult selle märkide kohta. Teisele kirjele joonistatud põhjajoon mõõdetakse lihtsalt mööda plaani ja kuvatakse 3D-s tasasena. Koosti valemid kasutavad põhitüübi summasid.

Liigi võib maha märkida ainult siis, kui kirjel pole selle liigi märke; kustuta need või teisalda need enne teisele kirjele jaotises **Valitud märk**. Märgid võivad liikuda igale kirjele, mis võtab nende liigi.

Edasi on {{ui:Koost}}: komponendid nagu talad või laudis, igaühel oma valem ja hinnad. Vaata [Koosted ja valemid](topic:assemblies).

Lõpus: {{ui:Liiguta üles}} ja {{ui:Liiguta alla}} muudavad kirje kohta loendis ja eksportides, ning {{ui:Kustuta kirje}} eemaldab selle koos kõigi märkidega (pärast küsimist; saad selle tagasi võtta).

Pindala kirjetel on ka **Kalle** (katuse tasapinnad, mõõdetud kaldel: [Katused ja kalded](topic:roofs-and-slopes)) ja **Mahaarvamine** (nende märgid tulevad maha teiste kirjete aladest: [Pindalade mõõtmine](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Lineaarsetel kirjetel on **Kalle** (Tase, Viisnurk, Nurgasarik või org) ja viisnurkade ning nurgasariku puhul **Kalle**.

## Hinnad tabelis

Saad sisestada {{ui:Jäätmed %}}, materjali- ja tööjõuhinnad ka otse tabelisse {{ui:Kogused}} allservas ({{ui:Kirje järgi}}). See on sama seade kui redaktoris.

## Kuidas hindamine toimib

Iga kirje ja iga koostekomponendi kohta:

1. **Jäätmetega** = kogus × (1 + jäätmed %).
2. **Materjal** = jäätmetega × materjal ühiku kohta, ümardatud sendini.
3. **Tööjõud** = jäätmetega × tööjõud ühiku kohta, ümardatud sendini.
4. **Kokku** = materjal + tööjõud.

{{ui:Töö kogusumma}} liidab kokku iga kirje ja iga komponendi. Kirjel võivad olla oma hinnad ja samal ajal koost; loetakse mõlemad, seega jäta kirje hinnad 0-ks, kui komponendid kannavad kulu.

## Tööjõud meeskondade kaupa

Selle asemel, et sisestada tööjõu hind ühiku kohta, saab kirje tööjõud tulla meeskonnalt: kui palju ta tunnis teeb, mitu inimest on ja mida igaüks teenib. Kirjeredaktoris jaotises {{ui:Tööjõud meeskondade kaupa}} märgi linnukesega {{ui:Arvesta tööjõud meeskonna järgi}} ja täida:

| Väli | Näide |
|---|---|
| {{ui:Tootlikkus}} | `20` LF tunnis (kirje ühikus) kogu meeskonna kohta |
| {{ui:Meeskonna suurus}} | `2` inimest |
| {{ui:Palk $/tund igaühele}} | `45` |

TakeoffCraft arvutab jäätmetega kogusest:

- **meeskonnatunnid** = kogus ÷ tootlikkus (110 LF ÷ 20 = 5.5),
- **tööjõutunnid** = meeskonnatunnid × meeskonna suurus (11),
- **meeskonnapäevad** = meeskonnatunnid ÷ 8 (0.69),
- **tööjõud** = tööjõutunnid × palk ($495.00).

Redaktor näitab tulemust ja hinda, milleks see tuleb ($4.50/LF). Kirje oma tööjõu hind on siis ainult lugemiseks, redaktoris ja tabelis. Tabeli {{ui:Kogused}} päis lisab töö tööjõutunnid ja meeskonnapäevad. Eksport märgib iga meeskonna tunnid ning töövihikus on tööjõu lahter valem meeskonna põhjal (`ROUND(F2/20*2*45,2)`). Tühjenda märkeruut, et naasta ühiku kohta hinna juurde.

## Meetermõõdustiku kirjed

Vali ühikuks m (lineaarne) või m² (pindala). Kogused, kõrgused ja valemite väärtused on siis meetrites. Lehe mõõtkava võib olla mis tahes eelseadistus või kalibreerimine; ühikud ja mõõtkavad on sõltumatud.

## Järgmine

- [Lineaarsete joonte mõõtmine](topic:measure-linear)
- [Pindalade mõõtmine väljalõigetega](topic:measure-areas)
- [Käsitsi loendamine](topic:count-by-hand)
