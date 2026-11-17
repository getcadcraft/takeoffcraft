---
title: Koguste arvestuse kontrollimine 3D-s
summary: Vaata avatud lehe seinu, plaate ja loendusi joonisel püsti, keeruta neid ümber ja klõpsa ühele, et valida selle märk.
keywords: png, pilt, ekraanipilt, virn, korrused, tasandid, kõrgus, glb, gltf, ekspordi 3d, seina paksus, põhikõrgus, ava, ukse pealis, 3d, kontroll, vaade, seinad, seina kõrgus, plaat, sügavus, maht, orbiit, mudel, valimine, isomeetriline, perspektiiv
from: fb16b4f7
---

3D-vaade on kontroll, mitte teine joonis: see asetab lehe koguste arvestuse ekraanil lehe enda peale, nii et puuduv sein, topeltplaat või eksinud loendus paistab kohe silma.

Enne alustamist peab lehel olema mõõtkava ([Mõõtkava seadmine](topic:set-the-scale)). Kõrgused ja sügavused vajavad tegelikke jalgu, nii et lehel ilma mõõtkavata {{ui:3D}} ütleb seda ja jääb tasasele lehele.

## 3D-vaate avamine

1. Näita lehte, mida soovid kontrollida.
2. Vali riba pealt, mis näitab lehe nime ja mõõtkava, {{ui:3D}}, või vajuta {{key:3}}.
   Esimesel korral 3D-vaade laeb hetke. Leht joonistatakse maapinnale ja koguste arvestus seisab sellel iga kirje värvis.
3. Tagasi minemiseks vali {{ui:3D}} uuesti, {{ui:Tagasi lehele}} või vajuta {{key:3}}. Joonistustööriista valimine (Joon, Ala, Loendus jne) viib samuti tagasi, sest märgid joonistatakse tasasele lehele.

3D-vaade näitab ekraanil lehte. Lehti vaheta lehtede loendis või klahvidega {{key:PageDown}} ja {{key:PageUp}}, ning 3D-vaade järgib. Et näha mitut korrust korraga, virnasta need (allpool).

## Mida näed

| Märk | 3D-s |
|---|---|
| Joonelõik, kirje kõrgusega | Sein sellel kõrgusel lõigu kaupa. Kõverad lõigud järgivad kõverat. |
| Joonelõik, kirje ilma kõrguseta | Joon lehel. Anna kirjele kõrgus jaotises **Kirje**, et see püsti tõsta. |
| Ala, kirje sügavusega | Plaat sellel sügavusel, väljalõigetega avatud. |
| Ala, kirje ilma sügavuseta | Õhuke 2" plaat, et see ikka paistaks. |
| Loendus | Väike postike igas loendatud punktis. |

Kõrguse väli on joonkirje väli {{ui:Kõrgus}} ja sügavuse väli ala-kirje väli {{ui:Sügavus}}, jaotises **Kirje** (vaata [Loo koguste arvestuse kirjed](topic:create-items)). Muuda seda, ja 3D-vaade uueneb kohe. Lehe nime all olev märkus ütleb, mida leht sisaldab, näiteks „See leht 3D-s: 2 seina, 1 plaat, 3 loendust“, ja mitu lõiku või ala on ilma kõrguse või sügavuseta. Klõpsud läbivad märkuse vaatesse.

Arvud 3D-s ei muutu: seina pindala on täpne pikkus korrutatud kõrgusega ja plaadi maht on netopindala (kontuur miinus väljalõiked, kõverad täpselt) korrutatud sügavusega. Kõverad joonistatakse ekraanil ainult lühikeste sirgete tükkidena.

## Ringi vaatamine

| Tegevus | Mida see teeb |
|---|---|
| Lohista või lohista keskmise nupuga | Keeruta arvestuse ümber. |
| {{key:Shift}} + lohista või lohista parema nupuga | Nihuta. |
| Hiireratas | Suumi sisse ja välja kursori kohal. |
| Kahe sõrmega pühkimine puuteplatvormil | Keeruta ({{key:Shift}} nihutab). Näpitsaga suumid. |
| {{ui:Iso}}, {{ui:Ülemine}}, {{ui:Esi}}, {{ui:Tagumine}}, {{ui:Vasak}}, {{ui:Parem}}, {{ui:Alumine}} | Standardvaated, kadreeritud arvestuse järgi. 3D-vaade avaneb vaates {{ui:Iso}}. |
| {{ui:Perspektiiv}} | Perspektiiv sisse või välja (kui väljas, on vaade paralleelne). |
| {{ui:Suumi ulatusele}} või {{key:F}} | Kogu leht. |
| {{ui:Leht}} | Näita või peida joonis maapinnal. |
| Vaatekuup paremal üleval | Klõpsa tahul, servale või nurgale, et vaadata sealt. Lohista seda keerutamiseks, lohista selle kompassi rõngast pööramiseks. Majanupp viib tagasi vaatesse {{ui:Iso}}. |

Nurgas on kas vaatekuup, väike X, Y, Z teljeikoon või midagi ei ole. Vali {{ui:Sätted}}, vahekaardil TakeoffCraft'i sätted, jaotises **Nurga näidik** ([TakeoffCraft'i sätted](topic:settings)). Tasasel lehel nurga näidikut ei ole.

:::touch
Üks sõrm keeratab; kaks sõrme näpistavad suumimiseks ja liiguvad nihutamiseks. Puudutus valib.
:::

## Seinad paksuse, aluse ja avadega

Joonelõik kõrgusega on õhuke riba. Et see näiks tõelise seinana, anna kirjele kuju jaotises **3D-s** oma seadetes:

- **Seina paksus** (8", 0.2 m): sein muutub tahkeks, joone keskel, nurkades lõigatud.
- **Põhikõrgus**: sein algab nii kaugel põrandast (näiteks lagi või ülemine kapiread). Ka aladel on see: lagi kõrgusel 9'-0".
- **Ava pealis**: mahaarvatud lõik (uks, [Lõigu osa mahaarvamine](topic:measure-linear#deduct-a-part-of-a-run)) hoiab seina selle kõrgusest kõrgemal, nii et uks paistab uksena. Ilma selleta jätab mahaarvatud lõik lõhe kuni ülemise servani.

Need ainult kujundavad 3D-vaadet. Kogused (pikkus, seinapindala, kulud) jäävad samaks.

## Korruste virnastamine

1. Ava kõigi korruste PDF-id.
2. 3D-vaates vali {{ui:Tasandid…}} ja kirjuta iga korruse kõrgus, näiteks `0` maapinna korrusele ja `12'` järgmisele. Tühi jätab lehe välja.
3. Vali {{ui:Kihista}}. Iga leht, millel on tasand, näitab oma arvestust oma kõrgusel. Ekraanil oleva lehe arvestus seisab oma korruse peal, teised on ääristatud. Märkus ütleb, mitu korrust on virnastatud.

Lehed joonduvad oma koha järgi lehel, nii et see töötab korrusplaanidel, mis on joonistatud samamoodi (sama lehe suurus ja asend). Leht, millel on tasand, aga mõõtkava ei ole, jäetakse välja ja märkus ütleb seda. Ühe lehe kaupa virnastamiseks vali {{ui:Kihista}} uuesti. Tasandid salvestatakse koos arvestusega.

## 3D-vaate salvestamine pildina

Vali 3D-ribal {{ui:PNG}}, et saada pilt vaatest sellisena, nagu see ekraanil on (`… 3D.png`). {{key:Shift}} + klõps {{ui:PNG}} peal teeb pildi kaks korda suuremaks (`… 3D@2x.png`), trükiks.

## 3D-vaate salvestamine mudelina

Vali 3D-ribal {{ui:GLB}}. Saad `.glb` faili (glTF, binaarne) sellest, mida vaade näitab: ekraanil olev korrus või kõik virnastatud korrused. Seda avavad teised 3D-programmid: üks objekt iga märgi kohta, nimetatud kirje järgi, kirje värvis, meetrites ja Y suunas üles. Lehte ennast ega ääriseid selles ei ole.

## Märgi valimine 3D-st

Klõpsa seinal, plaadil, paneelil või postil. Selle märk muutub valitud märgiks, täpselt nagu oleksid klõpsanud lehel: see ilmub jaotisse **Valitud märk**, selle kirje muutub praeguseks, ja olekuriba annab pikkuse ja kõrguse või pindala, sügavuse ja kuupjardid. {{key:Shift}} + klõps lisab märgid valikusse või eemaldab need. {{key:Delete}} kustutab valitud märgid ja {{key:Mod+Z}} toob need tagasi; {{key:Esc}} ei vali ühtegi. Tagasi lehel jäävad samad märgid valituks.

:::tip
Joonis järgib teemat: režiimis Mudel läheb maapinnal olev leht tumedaks nagu tasane vaade.
:::
