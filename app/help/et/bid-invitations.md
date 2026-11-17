---
title: Paketi saatmine pakkumiseks
summary: Saada pakkumispakett alltöövõtjatele e-kirjaga, lase neil sisestada hinnad lehele, mis ei vaja kontot, hoia hinnad suletuna avamisajani ja too need võrdlustabelisse.
keywords: saada pakkumiseks, kutse, pakkumiskutse, pakkuja, alltöövõtja, kutsuma, e-kiri, hinnapäring, suletud pakkumised, pakkumiste avamine, pakkumispäev, hiline pakkumine, tähtaeg, meeldetuletus, alltöövõtja andmed, kindlustus, kvalifikatsioon, csv, ühendamine, lehtede pdf
from: fb314b2c
---

{{ui:Eksport}} › {{ui:Pakettide jaotus ja võrdlus…}} › {{ui:Saada pakkumiseks…}} saadab ühe paketi valitud inimestele. Veebileht saadab igaühele lingi; nad avavad lehe, näevad ulatust ja sisestavad hinna iga rea kohta. Hinnad näed võrdlustabelis, valmis võrdlemiseks ([Pakettide jaotus ja pakkumiste võrdlus](topic:bid-leveling)).

:::note
Saatmine **ei ole veel kõigile avatud.** Funktsiooni testimise ajal töötab see kontodele, mille CadCraft'i meeskond on lubanud. Kui sinu oma ei ole, ütleb dialoog seda. Pakkuja leht töötab iga saadetud kutse puhul.
:::

## Enne saatmist

- Vajad CadCraft'i kontot kinnitatud e-posti aadressiga. Brauseris palub TakeoffCraft sul **Ühenda**: avaneb vahekaart getcadcraft.com lehel, vajutad Ühenda ja see vahekaart saab sisselogimise, mis kehtib 30 päeva ja ainult pakettide pakkumiste jaoks, kuni sulged TakeoffCraft'i vahekaardi. Selle saad igal ajal eemaldada oma turvalehel. Studio aken ei saa veel saata.
- Anna igale kirjele CSI number: pakett on ühe CSI jaotise kirjed ([Loo koguste arvestuse kirjed](topic:create-items)).
- Mõõtkavasta lehed, millel paketi märgid on, et pakkujatele nähtavad kogused oleksid mõõdetud.

## Paketi saatmine

1. Vali paketi all {{ui:Saada pakkumiseks…}}.
2. Täida pealkiri, projekt ja valikuline sõnum ning **tähtaeg** oma ajavööndis.
3. Jäta **Hoia hinnad suletuna** märgituks, et peita kõik hinnad kuni **avamisajani** (mitte enne tähtaega), või eemalda märge, et hinnad oleksid nähtavad nende saabudes.
4. Jäta lehtede kast märgituks, et saata PDF lehtedest, millel on paketi märgid, koos joonistatud märkidega. Sinu hinnad ei lähe kunagi saadetavasse: ainult kirjete nimed, CSI numbrid, kogused, ühikud ja lehtede nimed.
5. Kirjuta kutsutavad inimesed, üks rea kohta, kujul `Nimi <nimi@firma.com>` või ainult aadress, või märgi inimesi alltöövõtjate andmetest. Korraga kuni 60, paketi kohta 100.
6. Vali {{ui:Saada kutsed}}. Igaüks saab ühe lihtsa e-kirja sinu nime ja e-posti aadressiga, tähtaja ja lingiga; vastused lähevad sulle.

Dialoog ütleb, mitu kutset saadeti, ja nimetab need, kes jäeti vahele: juba sellele paketile kutsutud, palunud pakkumiskutseid mitte saada, vale aadress või ületatud saatmispiirang.

## Mida pakkuja näeb

Pikk privaatne link, sisselogimist pole. Leht näitab, kes kutsus, tähtaega, kas hinnad on suletud, sinu sõnumit ja lehtede PDF-i ning seejärel iga rida koos kogusega. Iga rea jaoks sisestavad nad hinna või märgivad **Ei sisaldu** ning võivad lisada märkuse. Märkmeid saab lisada kogu paketi kohta ja kuni 3 faili (pakkumine, ulatuse kiri, sertifikaat). Nad saavad salvestada uuesti ja muuta hindu kuni avamiseni või **keelduda**, märkides kasti, et CadCraft ei saadaks neile enam pakkumiskutseid.

## Suletud pakkumised ja avamine

Enne avamisaega ei näe **mitte keegi** hinda, märkust ega faili: mitte sina, mitte TakeoffCraft'is, mitte lehel Pakettide pakkumised. Näed, kes kutsuti ja kes on vastanud. Avamisajal kuvatakse kõik pakkumised korraga. Pärast tähtaega salvestatud pakkumine võetakse vastu ja märgitakse **hiljaks**; võrdlustabel loetleb selle ikka, ja hiljasus on märge, mitte otsus. Pärast avamist ei saa pakkuja hinda muuta. Ilma sulgemiseta on pakkumine lõplik, kui tähtaeg on möödas.

## Hindade toomine

{{ui:Too hinnad}} küsib veebilehelt ja lisab iga vastuse paketti pakkumisena, märgitud **veeb**. TakeoffCraft küsib seda ka vaikselt iga kord, kui avad dialoogi, kui see on ühendatud. Pakkumine, mille pakkuja on salvestanud uue versiooni, uuendatakse kohapeal. Pakkumine, mida sina muutsid, jääb nii nagu jätsid, kuni pakkuja saadab uue versiooni. Iga toomine on üks samm, mille {{key:Mod+Z}} tagasi võtab. Välja jäetud read tulevad üle ulatusena, mida pakkumine välja jätab, nii et võrdlus täidab need sinu enda kuluga.

## Veebilehel

Kui saad saata, on sul kaks lehte lisaks. **Pakkumispaketid** loetleb saadetud paketid, kes on vastanud, hilinenud pakkumised ja failid. Sealt saad saata meeldetuletuse (uus link; vana lakkab töötamast), paketi sulgeda, uuesti avada või tühistada. **Alltöövõtjad** hoiab iga ettevõtte kohta kirjet: kontaktid, tööalad, kvalifikatsioonivastused (tegutsemisaastad, tagatisvõime, EMR, ohutusnäitaja, ametiühing või avatud tööliit, referentsid), litsentside ja kindlustuste aegumiskuupäevad (märgitud, kui need on möödas või jäävad 30 päeva sisse) ja nende varasemad pakkumised. Kirjeid saab importida ja eksportida CSV-na: üks rida kontakti kohta, eksportimisel näidatud veergudega. Ettevõte, mis sul juba on, uuendatakse, mitte ei korrata.

## Kes mida näeb ja kui kaua

Pakkuja hinnad, märkmed ja failid lähevad sulle ja CadCraft'i meeskonnale, kes lehte haldab. Neid hoitakse 24 kuud pärast tähtaega, faile 180 päeva; seejärel need kustutatakse. Pakkuja e-posti aadress on see, mille sisestasid, ja seda kasutatakse ainult kutse ja selle meeldetuletuse saatmiseks. Ühele aadressile saab kõigilt kokku kuni 3 kutset päevas ja sina saad saata kuni 200 päevas.

## Pole veel valmis

Lisad, hankeotsuse kirjad, igale pakkujale allkirjastatud ulatuse leht ja automaatsed meeldetuletused enne kindlustuse aegumist pole veel valmis. Vaata [Pole veel valmis](topic:not-built-yet).
