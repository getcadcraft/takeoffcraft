---
title: Koguste ja eelarve lugemine
summary: Kasuta tabelit Kogused kirje järgi ja lehe järgi, objekti kogusummat, esiletõstmist ja hoiatust Puudulik.
keywords: kogused, kogusummad, kirje järgi, lehe järgi, objekti kogusumma, eelarve, kokkuvõte, aruanne, esiletõstmine, puudulik, maksumused
from: 069d41f1
---

Akna all olev tabel {{ui:Kogused}} on sinu elav eelarve. See muutub kohe, kui joonistad, kustutad, muudad mõõtkava või määra. Koguseid ei salvestata; need mõõdetakse märkidest iga kord uuesti, seega need ei saa aegunud olla.

## Kirje järgi

Vali {{ui:Kirje järgi}} (vaikimisi). Igal kirjel on oma rida ja selle koostu komponentidel on rida selle all.

| Veerg | Tähendus |
|---|---|
| Kirje | Nimi koos kirje värviga. „+(n) mõõtkavata“ tähendab, et osa märke on lehtedel ilma mõõtkavata. |
| Kogus | Mõõdetud kogusumma kirje ühikus (komponendid: valemi tulemus). |
| Ühik | LF, m, SF, SY, m², EA või komponendi ühik. |
| Kadu % | Sisestatud siin või kirje redaktoris. |
| Koos kaoga | Kogus × (1 + kadu). |
| Materjal/ühik, Tööjõud/ühik | Määrad; neid saab siia sisestada. |
| Materjal, Tööjõud | Koos kaoga × määr, ümardatud sendini. |
| Kokku | Materjal + tööjõud. |

Viimane rida, **Objekti kogusumma**, liidab veerud materjal, tööjõud ja kokku. Sama kogusumma on näha tabeli päise paremal pool.

Sisesta kao- või määraveergu lahtrisse ja rakenda see klahviga {{key:Enter}} või klõpsa mujale. Väärtus, mida TakeoffCraft ei suuda lugeda, on punase joonega ääristatud ja olekuriba ütleb põhjuse, näiteks „Sisesta summa kujul 12.50.“

Kirje rea klõpsamine tõstab esile selle märgid igal lehel ja viib lehele, kus need on (sama mis klõpsamine jaotises {{ui:Kirjed}}).

## Lehe järgi

Vali {{ui:Lehe järgi}}, et näha iga kirje kogust igal lehel koos märkide arvuga. Rea klõpsamine avab selle lehe kirje esiletõstetuna. Kasuta seda, et kontrollida, kas iga leht on mõõdetud, või jagada kogused korruse või töö ala järgi.

## Alade järgi

Kui koguste arvestusel on pakkumuse alad, loetleb {{ui:Alade järgi}} iga ala kirjed ja vahesumma. Vt [Pakkumuse alad](topic:bid-areas).

## Hoiatus „Puudulik“

Kui kogusummast midagi välja jääb, näitab päis hoiatust, näiteks:

„Puudulik: 1 valemiviga, 6 märki lehtedel ilma mõõtkavata (kogusummas ei ole)“

- **Valemiviad**: koostu komponendi valemit ei saa arvutada. Selle rida ütleb „Valemi viga: …“. Vt [Koostud ja valemid](topic:assemblies#when-a-formula-is-wrong).
- **Märgid lehtedel ilma mõõtkavata**: määra nendele lehtedele mõõtkava. Vt [Mõõtkava määramine](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Samad märkused lähevad ka eksporditud tabelisse, nii et puudulik eelarve ei paista kunagi täielikuna.

## Kirje esiletõstmine

Klõpsa kirjel jaotises {{ui:Kirjed}} või tabelis. Selle märgid jäävad igal lehel täisvärvi ning ülejäänud tuhmuvad. Lehtede loendis näidatakse igal märke sisaldaval lehel „(n) esile tõstetud“. Esiletõstmise lõpetamiseks klõpsa kirjel uuesti.

## Kirjete kogusummad külgpaneelis

Igal kirjel jaotises {{ui:Kirjed}} on näidatud ka selle kogus. Kirje redaktori plokk **Mõõdetud** näitab väärtusi, mida valemid kasutavad: pikkus, lõigud ja seinapindala; pindala, ümbermõõt ja alade arv; või loendus.

## Märgid PDF-idel, mis ei ole avatud

Koguste arvestuses võivad olla märgid PDF-idel, mida sa sel korral ei ole avanud. Need loevad ikka iga kogusumma sisse; lehtede loend nimetab need PDF-id. Vt [Koguste arvestuse salvestamine ja uuesti avamine](topic:save-and-reopen).

## Rohkem ruumi

Noolenupp {{ui:Kogused}} päise paremal pool peidab tabeli, et lehele jääks rohkem ruumi. Tabeli tagasi toomiseks vali nupp uuesti.
