---
title: Pakettide jaotus ja pakkumiste võrdlus
summary: Jaga hinnang paketiks ala järgi, saada iga paketi ulatus alltöövõtjatele, võrdle samal ulatusel tagasi tulevaid pakkumisi ja kasuta valitud pakkumist paketi hinnana.
keywords: pakkumiste võrdlus, võrdlemine, pakett, alltöövõtja, alltöövõtu pakkumine, ulatus, täide, ala, csi jaotis, madalaim pakkumine, pakkumiste tabel, pakkuja, hange, valitud pakkumine, kasuta pakkumist, alltöövõtu hind
from: 856b3088
---

Üldtöövõtja saadab iga ala ulatuse alltöövõtjatele ja võrdleb tagasi tulevaid pakkumisi. TakeoffCraft teeb mõlemat arvestusest: ava {{ui:Eksport}} › {{ui:Pakettide jaotus ja võrdlus…}}.

## Paketid

Igale CSI jaotisele, mida sinu kirjed kasutavad, vastab üks pakett (kirje {{ui:CSI number}} esimesed kaks numbrit, vaata [Loo koguste arvestuse kirjed](topic:create-items)). Kirjed ilma numbrita moodustavad oma paketi. Iga pakett näitab oma kirjeid, seda, mitmel lehel on nende märgid, ja meie enda maksumust (materjal ja tööjõud enne lisandeid, põhipakkumisest).

Vali {{ui:Ulatuse CSV}}, et laadida alla see, mida saata alltöövõtjale: iga kirje koos CSI numbri, koguse, ühiku ja lehtedega, millel see on. Hindu seal pole. Materjalitarnijatele on töövihiku pakkumispäringus osade loend (vaata [Hinnangu eksportimine](topic:export-estimate)).

## Pakkumiste sisestamine

1. Paketi all olevas tühjas reas kirjuta pakkuja nimi ja pakkumise summa ning vali {{ui:Lisa pakkumine}}.
2. Kui pakkumine jätab osa ulatusest välja, ava selle {{ui:Välja jäetud}} loend ja märgi need kirjed.
3. Nime või summa parandamiseks kirjuta tabelis üle. × nupp eemaldab pakkumise.

Iga muudatus on üks samm, mille {{key:Mod+Z}} tagasi võtab, ja pakkumised salvestatakse koos arvestusega.

## Kuidas pakkumised võrdsustatakse

Pakkumised katavad harva sama ulatust. Võrdsustamine täidab iga väljajäetud kirje **täitega** meie enda maksumusega, nii et iga pakkumine võrdleb kogu paketti:

**Võrdsustatud = pakkumine + täited**

Madalaim võrdsustatud pakkumine on märgitud **Madal**; võrdsuse korral on see, mis sisestati esimesena. **Meie maksumuse suhtes** on võrdsustatud pakkumine miinus meie enda paketi maksumus: negatiivne tähendab, et jääb alla. Pakkumine, mis näib madalaim, võib kaotada, kui selle puuduv ulatus arvesse võetakse.

Töövihikus on leht **Pakkumiste võrdlus** iga paketiga, millel on pakkumisi: meie hinnang, iga pakkumine, selle täited, võrdsustatud kogusumma ja erinevus elavate valemitena, ning see, mida iga pakkumine välja jättis.

## Pakkumise kasutamine paketi hinnana

Vali pakkumise juures {{ui:Kasuta}} ja see saab kogu paketi hinnaks sinu hinnangus. Paketi enda hinnastus (kirjed, nende teise tingimused ja koostude osad) kukub välja töö kogusummast. Kirjed jäävad kogustena viiteks koos sinu enda määradega ning üks rida, **Valitud pakkumine**, kannab pakkumise summat. Kirjed, mida pakkumine välja jätab, jäävad sinu enda maksumusele, mida võrdsustamine juba täitena arvestas. Vali teine pakkumine või vali sama uuesti, et see tagasi võtta. Igaüks on üks samm, mille {{key:Mod+Z}} tagasi võtab.

Alltöövõtu pakkumised on hinnangus kulu ühe reana. Üldkulud, kasum ja tagatis lisatakse neile peale nagu igale teisele kulule. Käibemaks (ainult materjalile) ja tööjõu koormus (tööjõule) neile ei lisandu. Töövihiku lehel Hinnang on valitud pakkumine omal real ja lisandite plokk lisab selle valemitega. Materjalinimekirjas ei ole valitud paketi materjali, sest alltöövõtja tarnib selle.

Paketti, mis on alternatiivi pakkumuse alas, ei hinnata uuesti: alternatiivid ja pakkumuse ala vahesummad kasutavad ikka sinu enda hindu.

## Pakkumised, mis tulevad e-kirjaga

Pakkumisi ei pea käsitsi sisestama. {{ui:Saada pakkumiseks…}} paketi all saadab alltöövõtjatele lingi lehele, kus nad sisestavad hinna iga rea kohta. {{ui:Too hinnad}} toob need sellesse tabelisse. Vaata [Paketi saatmine pakkumiseks](topic:bid-invitations).

:::note
Pakkumise sisestamine käsitsi töötab endiselt, ja käsitsi sisestatud pakkumine ning lehelt tulnud asuvad kõrvuti. Lehelt tulnud pakkumised on märgitud **veeb** (või **veeb, hiljaks**, kui need saabusid pärast tähtaega). Nende hind muutub ainult siis, kui pakkuja saadab uue versiooni, nii et sinu enda muudatused jäävad sellele kuni selle ajani.
:::
