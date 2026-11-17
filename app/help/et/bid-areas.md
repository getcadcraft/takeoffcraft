---
title: Pakkumuse alad
summary: Märgi jooned hoone, korruse või faasi järgi, arvesta kogus iga ala kaupa ja loe iga ala kogused ja kulud.
keywords: lisa alternatiiv, mahaarvamise alternatiiv, põhipakkumine, alternatiivid, pakkumuse ala, ala, hoone, korrus, tasand, faas, tsoon, alternatiiv, jaotus, jagamine, tüüpiline korrus, vahesumma, alade järgi
from: 64f3d41c
---

Pakkumuse ala on töö osa, mida hindad eraldi: hoone, korrus, faas, tiib. Iga märk võib kuuluda ühte pakkumuse alasse. Koguseid ja hinnangut saab siis lugeda iga ala kohta, igale alale on vahesumma, samas kui töö kogusumma jääb kõigi summaks.

## Pakkumuse ala tegemine

1. Jaotise {{ui:Kirjed}} ülaosas ava loend {{ui:Pakkumuse ala}}.
2. Vali **Uus pakkumuse ala…**, kirjuta nimi, näiteks „Hoone A“ või „2. korrus“, ja vali **Tee see**.
   Uus ala muutub praeguseks. Olekuriba ütleb: „Uued märgid lähevad alasse (nimi). Teiste pakkumuse alade märgid on hämardatud.“

## Arvestamine alasse

Kui loendis on pakkumuse ala valitud, läheb iga uus märk sinna: jooned, alad, ringid, loendused, {{ui:Automaatne loendus}} lisatud märgid ja see, mida kleebid. Teiste pakkumuse alade märgid ning ühelegi alale mittekuuluvad märgid on joonisel hämardatud, et näeksid, mis kuhu kuulub.

Vali **Pakkumuse ala puudub**, et arvestada ilma alata; siis ühtegi märki ei hämardata.

:::tip
Tüüpilised korrused: arvesta 2. korrus, vali selle märgid ({{key:Mod+A}} joonisel), kopeeri need, vali loendist „3. korrus“ ja kleebi. Koopiad lähevad 3. korrusele. Kui korrused on ühesugused ja neid pole vaja eraldi hoida, loeb [tüüpiline grupp](topic:typical-groups) ühte korrust mitu korda.
:::

## Märkide teise alasse viimine

Vali üks märk või mitu ({{key:Shift}} + klõps või {{key:Mod+A}}). Jaotises **Valitud märk** (või **Valitud märgid**) vali väljal {{ui:Pakkumuse ala}} ala. Olekuriba ütleb: „3 märki viidi alasse 2. korrus.“ See on üks tagasivõtmise samm.

## Ümbernimetamine, ümberjärjestamine või kustutamine

Vali loendis **Halda pakkumuse alasid…**. Nime muutmiseks kirjuta üle, järjekorra muutmiseks kasuta nooli (tabelid ja töövihik järgivad seda) või kustuta üks prügikasti abil. Pakkumuse ala kustutamine säilitab selle märgid: need ei kuulu siis ühtegi pakkumuse alasse. {{key:Mod+Z}} võtab iga muudatuse tagasi.

## Kogused alade kaupa

Tabelis {{ui:Kogused}} vali {{ui:Alade järgi}} (see ilmub, kui arvestusel on pakkumuse ala). Iga ala loetleb sellel olevad kirjed koos koguse, ühiku ja kogusummaga, seejärel vahesumma rea. Ühelegi alale mittekuuluvad märgid tulevad viimasena, nimega **Pakkumuse ala puudub**. Kliki kirje rida, et kirje esile tõsta ja see ala praeguseks muuta.

Koostud arvutatakse iga ala kohta selle ala enda kogusummadest. Valem, mis ümardab üles, näiteks `ceil(L / 4)`, võib seetõttu alade kokku anda natuke rohkem kui kogu töö kohta, nagu juhtub pakkumisel, mis on hinnatud ala kaupa.

## Alternatiivid: põhipakkumine ning lisad ja mahaarvamised

Pakkumuse ala võib olla **alternatiiv**: töö, mida omanik võib pakkumusele lisada või sellest välja jätta. Jaotises **Halda pakkumuse alasid…** on igal alal nime kõrval loend:

| Valik | Mida see teeb |
|---|---|
| {{ui:Põhipakkumine}} | Pakkumuses nagu tavaliselt. |
| {{ui:Lisa alternatiiv}} | Hinnatakse eraldi ja **jäetakse põhipakkumisest välja**: vaiba uuendus, lisakatus. |
| {{ui:Lahuta alternatiiv}} | On põhipakkumises ja pakutakse mahaarvamisena: „kustuta katus“. |

Arvesta alternatiivi töö selle pakkumuse alasse nagu iga teise ala. Kui arvestusel on alternatiiv:

- Tabeli {{ui:Kogused}} päis ütleb kogusumma asemel **Põhipakkumine**: kogu arvestus ilma lisa-alternatiivideta.
- {{ui:Alade järgi}} lõpeb põhipakkumise ja ühe reaga iga alternatiivi kohta: **+$300.00** lisa puhul, **−$1,050.00** mahaarvamise puhul.
- Alternatiiv hinnastab ainult neid kirjeid, millel on selles märgid, koos nende koostega, nii et teise kirje koosti osa ei lisandu.

Eksportides lõpeb CSV põhipakkumise ja alternatiividega ning töövihikus on leht **Alternatiivid**: põhipakkumine, iga alternatiivi kirjed ja selle muutus ning põhipakkumine ilma kõigi lisa-alternatiivideta.

## Eksportis

{{ui:XLSX}} lisab lehe **Pakkumuse ala järgi**: iga ala kirjed ja komponendid koos kogusega, kogusega koos jäätmetega, materjali, tööjõu ja kogusummaga, iga ala vahesumma (`SUM` valem) ja lõpus **Kõik pakkumuse alad**. Lehel **Märgid** on veerg **Pakkumuse ala**. Arvestus ilma pakkumuse aladeta ekspordib nagu varem. Vaata [Ekspordi veerud](topic:export-columns).

Pakkumuse alad salvestatakse projektifailis koos märkidega.
