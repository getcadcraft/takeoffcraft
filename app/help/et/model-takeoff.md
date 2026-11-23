---
title: Koguste arvestus ehitusmudelist
summary: Ava arhitekti IFC-mudel, vaata seda 3D-vaates, vali seinad, põrandad, uksed ja muu tüübi, materjali, kihi või mõõdu järgi ning too nende arvud, pikkused, pindalad ja mahud koguste arvestusse. Mudeli uuem koopia uuendab samu koguseid.
keywords: mudel, mudeli koguste arvestus, 3D-vaade, kliki detailil, leia rida, materjal, kiht, seina kihid, kipsplaat, soojustus, ukse mõõdud, akna mõõdud, uste ja akende loend, csv, 3d, bim, ifc, rvt, ehitusmudel, kogused, seinad, põrandad, uksed, aknad, postid, ruumid, tüübi järgi, korruse järgi, uuendus, uuem mudel, põhiprojekt
from: 8c4c12c9
---

Sa ei pea ootama järgmist joonisekomplekti. Kui arhitekt saadab ehitusmudeli, ava see siin ja võta kogused otse sellest. Mudel loetakse sinu arvutis; midagi ei saadeta kuhugi.

## Sammud

1. Vali tööriistaribal {{ui:Mudel}} ja vali mudeli `.ifc`-fail või ava see nagu iga teise faili {{ui:Ava plaanid}} abil.
2. {{ui:Mudeli koguste arvestus}} avaneb nii, et igas kategooria ja tüübi kohta on üks rida: seinad seina tüübi järgi, põrandad põranda tüübi järgi, uksed ukse tüübi järgi jne. Iga rida näitab oma arvu ja seda, mille järgi kategooriat mõõdetakse.
3. Määra {{ui:Grupeeri}} väärtuseks {{ui:Kategooria}} kiireks kogusummaks või {{ui:Kategooria, tüüp ja tasand}}, et jaotada iga tüüp korruste kaupa.
4. Eemalda märkeruut ridadelt, mida ei soovi. {{ui:Otsi}} kitsendab loendit. Rea märkeruudu eemaldamine peidab ka selle osad 3D-pildilt.
5. Anna mudelile {{ui:Mudeli nimi}}, mida hoiad kogu töö jooksul, näiteks projekti nimi.
6. Vali {{ui:Lisa koguste arvestusse}}. Iga kogus muutub tüübiga kvantiks kirjete loendis. Nimeta, hinnasta ja lisa koostud nagu iga muu kirje.

## Mudeli vaatamine 3D-s

{{ui:Näita mudelit 3D-vaates}} joonistab mudeli tabeli kohale, igal real oma värv (rea nime kõrval olev värvikuubik). Lohista, et pöörata, hoia all {{key:Shift}} ja lohista, et liigutada, kasuta ratast suumimiseks ning vali {{ui:Mahuta}} või {{ui:Lähtesta}}, et tagasi tulla.

- **Kliki detailil** pildil ja selle rida valitakse tabelis, kõik selle rea osad on valgustatud ning ülejäänud kahvatud. Kliki sama detaili uuesti ja kui see kuulub mitmesse ritta (sein oma kihtidega), valitakse järgmine rida.
- **Kliki reale** tabelis, et selle osad valgustada. Kliki uuesti või kliki pildil tühjale alale, et valgustus eemaldada.
- Ruume ei joonistata, sest ruumi maht kataks hoone.
- Väga suur mudel jätab mõne detaili puhul alles ainult kasti, et see mahuks mällu; paneel ütleb, mitu. Arvud ei muutu.

Kui see arvuti ei suuda 3D-d joonistada, toimib tabel nagu varem.

## Rühmita materjali, kihi või mõõdu järgi

{{ui:Grupeeri}} valikus on veel kolm võimalust:

- {{ui:Kategooria ja materjal}}: kihtidest koosnev sein, põrand või katus annab iga kihi materjalile oma rea, nii et kipsplaat, vahepostid ja soojustus saab hinnastada eraldi. Hoone osa, millel on üks materjal, saab selle materjali rea ning osa, millel materjali ei ole, jääb reale nimega „Materjal määramata“.
- {{ui:Kategooria ja kiht}}: sama, kuid rea sees on kihi paksus („Soojustus, 100 mm“).
- {{ui:Kategooria, tüüp ja ukse või akna mõõt}}: uksed ja aknad jaotatakse laiuse ja kõrguse järgi (näiteks 3'-0" × 6'-8" või 914 × 2,032 mm).

Kihi puhul on pindala seina enda külg (või põranda või katuse plaanipindala või pind) ning maht on see pindala korda kihi paksus. Rea märkus ütleb, mitu arvu tuli kihist. Ühe seina kihid liituvad mahuks, mille mudel selle seina kohta märgib.

## Salvesta read või avad CSV-na

{{ui:Salvesta read CSV-na}} salvestab märgitud read koos ühikutega iga pealkirja juures tabelarvutuse jaoks. {{ui:Salvesta uste- ja aknaloend CSV-na}} (ainult siis, kui mudelis on uksi või aknaid) salvestab iga ukse ja akna tüübi, korruse ja mõõdu järgi koos arvuga.

## Mida mõõdetakse

| Kategooria | Kogused |
|---|---|
| Seinad | arv, pikkus, seinapindala (üks külg, avad välja arvatud), maht |
| Põrandad, plaadid, laed ja muud katted | arv, plaanipindala, maht |
| Katused | arv, plaanipindala, katuse pind, maht |
| Vundamendid | arv, plaanipindala, maht |
| Postid, talad ja liikmed | arv, pikkus mööda liiget, maht |
| Piirded, torud, õhukanalid ja kaabliliinid | arv, pikkus |
| Trepid | arv, maht |
| Ruumid | arv, põrandapindala, maht |
| Uksed, aknad ja kõik muu | arv |

Kui mudeli autor on koguse failis välja toonud, kasutatakse seda numbrit. Muidu mõõdetakse arv elemendi kujust. Iga kogus säilitab märkme, mis ütleb, kumb see on ja mitme elemendi järgi number saadi.

:::note
Seina pikkus, mõõdetud kujust, kulgeb ots-otsa, nii et kaks nurgas kokku jooksvat seina mõlemad sisaldavad nurka. Maht nõuab suletud kuju: element, mille kuju ei ole suletud, loetakse, kuid sellel ei ole mahtu. Kõver või nurgaline seinaelement mõõdetakse kõigi tema püstpindade poolena ning märkus ütleb seda.
:::

## Kui saabub uuem mudel

Ava uuem fail ja sisesta sama {{ui:Mudeli nimi}}. Enne midagi lisamist ütleb paneel, mitu kogust on uut, mitu on muutunud ja mis väärtusest mis väärtuseks, ning millised kogused varasemast koopiast ei ole enam mudelis. Vali {{ui:Lisa koguste arvestusse}}: muutunud kogused võtavad uued arvud, sinu nimed, hinnad, jäätmed ja koostud jäävad alles. Kogused, mis mudelist on kadunud, säilitavad oma vanad arvud; eemalda need ise, kui projekt need välja jättis.

Tüübi ja korruse nimed on see, mille järgi kogus tuntakse ära. Kui arhitekt nimetab seina tüübi ümber, saabub see uue kogusena ning vana loetakse kadunuks.

## Loetavad failid

IFC-failid (IFC2x3, IFC4 ja IFC4.3). IFC-fail, mis sisaldab teid, raudteid või sildu, toob ikka veel nende taristu kogused otse sisse, nagu varem.

TakeoffCraft ei loe selles versioonis `.rvt`-faile. Kui arhitekt töötab Revitiga, palu IFC-eksport mudelist (Fail, Ekspordi, IFC) ja ava see.

Üks mudel võib sisse tuua kuni 500 kogust korraga. Kui neid on rohkem, eemalda märkeruudud ridadelt või rühmita kategooria järgi.
