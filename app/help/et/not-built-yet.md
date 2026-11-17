---
title: "Mida veel ei ole valmis"
summary: "Koguste arvestuse võimalused, mida selles versioonis pole, ja mida praegu selle asemel teha."
keywords: piirangud, puudub, veel mitte, plaanis, kavandatud, lahendus, korraga, pilv, töölaud
from: 94ff90d0
---

TakeoffCraft on arendamisel. See loend näitab, mida praegune versioon ei tee, ja kuidas töö ikkagi valmis saada.

## Mõõtmine

| Veel valmis pole | Praegu selle asemel |
|---|---|
| Punkti lisamine joone või kontuuri keskele | Kustuta märk ja joonista uuesti. |
| Kastiga (aknaga) valimine | {{key:Shift}} + klõpsa iga märgi peale või {{key:Mod+A}} kõigi lehe märkide jaoks. Vt [Kopeeri, kleebi ja dubleeri märgid](topic:copy-paste). |
| Kleebitud koopia pööramine, peegeldamine või mõõtkava muutmine | Kleebi leht samas mõõtkavas ja samas suunas; ülejäänu joonista käsitsi. |
| Mõõtkava lugemine skaneeritud lehelt või graafilisest mõõtkavajoonest | Vali eelseade või kalibreeri joone pikkuse järgi. |
| Lehel on rohkem kui üks mõõtkava (detailalad, suurendatud plaanid) | Mõõda osa lehe mõõtkavas ja arvesta detail eraldi suurendatud lehel, kui komplektis on see olemas. |

## Kirjed ja hinnastamine

| Veel valmis pole | Praegu selle asemel |
|---|---|
| Koostevalemid, mis kasutavad kirje teisi märgitüüpe (ruumikirje uksed selle korruse valemites) | Valemid kasutavad põhitüübi summasid; hinnasta teised märgitüübid eraldi ridadel. |
| Koostevalemid, mis arvutatakse jooksu kaupa | Valemid kasutavad kirje summasid; jooksupõhiste lisade jaoks kasuta `N`. |
| Valemid, mis kasutavad teise kirje koguseid | Korda mõõtmist selles kirjes või arvuta tabelarvutuse eksportis. |
| Meeskonnad koosteosadel või tööpäev, mis ei ole 8 tundi | Määra meeskond kirjele; teistsuguse päeva pikkuse korral arvuta meeskonnapäevad jagatuna meeskonnatundides ÷ sinu päev. |
| Märkmed, pilved ja esiletõstud erinevad märgistused (nooled, mõõtmed, templid) või vastused märkmele | Kirjuta see märkme tekstiks ja muuda selle olekut, kui asi on lahendatud. |
| Tiimi ühine hinnateek või konto juures hoitav teek | Teek hoitakse selles brauseris: ekspordi see CSV-na ja impordi teises arvutis. |
| Tööpakettide läbivaatamine kogenud hindajate poolt | Iga pakett on algmall: kontrolli selle eeldusi oma töö ja toodete järgi enne hinnastamist. Vt [Tööpaketid](topic:trade-packs). |
| Hinnad tööpakettides | Paketid toovad ainult koosted: sea enda määrad või impordi oma hinnakiri CSV-na. |
| Koguste arvestuse ümbernimetamine | Nimi tuleb esimesest PDF-ist; nimeta allalaaditud failid ümber. |
| Lehtede käsitsi nimetamine | Lehed nimetatakse PDF-i lehesiltide järgi; otsi faili nime ja lehe numbri järgi. |

## Joonised (DWG ja DXF)

| Veel valmis pole | Praegu selle asemel |
|---|---|
| Plotimisstiilitabelid, pliiatsite määramised ja CTB-failid joonise lehtedel | Joonis on joonistatud mustalt või värvides, mis on paberi jaoks tumedamaks tehtud; joone paksus tuleb joonisest. |
| Binaarse DXF-i või AutoCAD 2000-st vanema DWG avamine | Salvesta see ASCII DXF-ina või uuema DWG-na. |
| Lingitud joonise (xref) leidmine kausta järgi, kus see asub | Ava ka lingitud joonise fail koos põhijoonisega: see leitakse avatud failide hulgast failinime järgi. |
| 3D-polüjoonte, võrkude, tahkete kehade ja piirkondade mõõtmine | Loenda need kihi ja tüübi järgi või mõõda plaanvaadet joonte ja pindala tööriistadega. |
| Tekst märgitud PDF-is joonisest, mis on ladinakeelne väliste skriptide asemel | Tähed, millel Helvetical glüüfi pole, prinditakse märgitud PDF-is kujul „?“; ekraanil olev joonis ei muutu. |
| Joonise üleandmine teisele rakendusele lehe ribalt | Ava sama fail selles rakenduses. |
| Joonis, mis kannab koguste arvestust endas (nagu PDF-idel {{ui:PDF koos koguste arvestusega}}) | {{ui:Salvesta koguste arvestus}}: `.takeoff.json` avaneb samal joonisel, mis leitakse sisu järgi. |
| PDF-alusjoonised, pildid ja OLE-objektid, mis on joonisesse paigutatud | Pildid näidatakse ainult raamina. Ava alusjoonis PDF-ina eraldi lehena. |

## Automaatne loendus

| Veel valmis pole | Praegu selle asemel |
|---|---|
| Sümbolite leidmine lehel, kus mõõtkava on joonistatud teises suuruses | Anna lehele selle mõõtkava või otsi seda kastiga, mis sinna joonistatakse. |
| Peegeldatud sümbolite leidmine | Loenda need käsitsi või otsi uuesti kastiga, mis on peegeldatud sümboli ümber. |

## Failid ja jagamine

| Veel valmis pole | Praegu selle asemel |
|---|---|
| Üks PDF, mis näitab nii märke kui kannab koguste arvestust | {{ui:Märgitud PDF}} inimestele märkide vaatamiseks; {{ui:PDF koos koguste arvestusega}} TakeoffCraftis uuesti avamiseks. |
| Koguste CSV lehtede või märkide kaupa | Kasuta {{ui:XLSX}}-i: selle lehed Lehe järgi ja Märgid sisaldavad neid. |
| Pilvesalvestus | Pole veel saadaval. Salvesta projektifailid oma arvutisse ja tee neist varukoopiad. |
| Eraldi TakeoffCraft töölauarakendus | Versioonist 0.5 on töölauarakendus CadCraft Studio, kus on kõik kaheksa rakendust ühes paigalduses. TakeoffCraft töötab ka brauseris. |

## Ekraan ja sisend

| Veel valmis pole | Praegu selle asemel |
|---|---|
| Parema hiireklõpsu (või pika vajutuse) menüü | Kasuta tööriistariba, paneele ja klahve. Pikk vajutus lõpetab jooksu või kontuuri. |
| Vaate pööramine | PDF-is pööratud lehed kuvatakse juba õigesti püsti. |

## 3D-vaade

| Veel valmis pole | Praegu selle asemel |
|---|---|
| Märkide joonistamine või muutmine 3D-vaates | Mine tagasi lehele ({{key:3}}), et joonistada; valimine ja kustutamine töötavad 3D-vaates. |
| Korruste joondamine, mis on lehtedel joonistatud erinevatesse kohtadesse | Virna korrused, mis on joonistatud ühtemoodi; kontrolli teisi ükshaaval, lehe kaupa. |
| Postidega loendamine, mille suurus on sama mis loendataval objektil | Kõik postid lehel on ühesugused; need märgivad, kus loendus on, mitte seda, mis see on. |

## Pakkumised

| Veel valmis pole | Praegu selle asemel |
|---|---|
| Lisad juba saadetud paketile, edumääramiskirjad ja ulatuse leht, mille iga pakkuja alla kirjutab | Saada uus pakett ja kirjuta edumääramine ise. [Saada pakett pakkumiseks](topic:bid-invitations) kirjeldab, mis on valmis. |
| Pakkumiskutsete saatmine suvalisest kontost: testimise ajal on välistele pakkujatele kirjad välja lülitatud, välja arvatud kontod, mille CadCraft meeskond on lubanud | Laadi alla {{ui:Ulatuse CSV}}, saada see ise e-kirjaga ja sisesta pakkumised käsitsi. |
| Pakettide saatmine Studio aknast | Saada TakeoffCraftist brauseris. |
| Alternatiivi pakkumisala ümberhinnastamine valitud pakkumisega | Alternatiivid ja pakkumisalade vahesummad kasutavad sinu hindu; kohanda alternatiivi käsitsi. |
| Automaatsed meeldetuletused enne alltöövõtja kindlustuse või litsentsi kehtivusaja lõppu | Kuupäev märgitakse lehel Alltöövõtjad, kui see on möödas või jääb 30 päeva sisse; kontrolli seda kutse saatmisel. |

## Paneelid

| Veel valmis pole | Praegu selle asemel |
|---|---|
| {{ui:Kogused}} tabeli liigutamine | Liigutada saab ainult paneele {{ui:Lehed}} ja {{ui:Kirjed}}. Vt [Paneelide paigutamine](common:arrange-panels). |

## Tabelarvutused

XLSX-töövihik on kontrollitud LibreOffice Calc-is, mis arvutas iga summa uuesti täpselt samas sendis kui TakeoffCraft. Excelis pole seda veel avatud. Kui tabelarvutusprogramm näitab midagi ootamatut, sisaldab CSV-eksport sama hinnangut lihtsate väärtustena.
