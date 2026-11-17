---
title: Sümboli automaatne loendamine
summary: Märgi üks sümbol kastiga, lase TakeoffCraftil leida teised sellel lehel või kõigil avatud lehtedel, vaata vasteid üle liuguriga ja lisa need ühe sammuga.
keywords: suvaline nurk, pööratud, teine mõõtkava, erinev mõõtkava, automaatne loendus, automaatne loendamine, sümbolite otsing, leia sümbolid, muster, mall, vaste, tuvasta, loendamise tööriist
from: fa68a6c1
---

{{ui:Automaatne loendus}} leiab iga sümboli koopia pärast seda, kui oled ühe kasti ümber tõmmanud. Seejärel vaatad lehel vasteid üle ja lisad need, mille aktsepteerid, loendusmärkidena. See on abivahend, mitte garantii: enne lisamist vaata alati üle.

## Leia sümbolid

1. Tee või klõpsa kirje all {{ui:Kirjed}} loendamiskirjet.
2. Ava leht, kus sümbol esineb.
3. Vali tööriistaribal {{ui:Automaatne loendus}} või vajuta {{key:S}}.
   Lehe ülaossa ilmub riba: „Tõmba kast ümber ühe sümboli sellel lehel.“
4. Kui soovid otsida kõigilt avatud lehtedelt, mitte ainult sellelt, märgi linnukesega {{ui:Otsi kõigilt avatud lehtedelt}}.
5. Suumi sisse, et sümbol oleks hästi nähtav, ja tõmba kast tihedalt ühe selle koopia ümber. Kaasa kogu sümbol; selle ümber olev tühi paber lõigatakse ära.
   Riba näitab teksti „Otsin…“, edenemisriba ja nuppu {{ui:Loobu}}. Leht jääb reageerivaks: võid suumida, nihutada ja liikuda lehtede vahel. Teise tööriista valimine või {{key:Esc}} tühistab otsingu.
6. Kui otsing on lõppenud, ilmuvad vasted lehele kastidena kirje värvis ja riba näitab kokkuvõtet, näiteks „22 vastet, 19 lisada (3 on juba loetud). Vaste kastiga tagasilükkamiseks või taastamiseks klõpsa sellel.“

Tööriistas {{ui:Automaatne loendus}} lohistamine lehel joonistab kasti, mitte ei nihuta lehte. Lehe nihutamiseks hoia all {{key:Space}} ja lohista või lohista keskmise nupuga.

## Vaata vasted üle

- **Klõpsa kastil**, et see tagasi lükata. Tagasilükatud kast on katkendjoonega ja läbi kriipsutatud. Klõpsa uuesti, et see taastada.
- **Liiguta liugurit {{ui:Vaste}}** (50% kuni 95%, algab 75%-lt). Kõrgem näitab ainult täpseid vasteid; madalam näitab lõdvemaid. Liugur ainult filtreerib leitut; see ei otsi uuesti.
- **Juba loendatud**: vasted kohas, kus sellel kirjel on juba loendusmärk, algavad tagasilükatuna, nii et midagi ei loeta kaks korda.
- **Muud lehed**: kui otsisid kõigilt avatud lehtedelt, liigu lehtede vahel lehtede loendi või {{key:PageDown}} abil ja vaata iga leht üle. Kokkuvõttes on öeldud, mitmel lehel on vasteid.

## Lisa need

Vali {{ui:Lisa}}. Nupul on öeldud, mitu, näiteks „Lisa 19 märki“.
Loendusmärgid lisatakse iga aktsepteeritud kasti keskele: „Lisati 19 loendusmärki kirjele „Kahekordne pistikupesa“. Ctrl+Z eemaldab need kõik.“

Kogu partii on üks tagasivõtmise samm, nii et üks {{key:Mod+Z}} eemaldab selle.

Et läbivaatamine ilma lisamata lõpetada, vali {{ui:Heida kõrvale}} või vajuta {{key:Esc}}. Teise tööriista valimine heidab selle samuti kõrvale.

## Mida see leiab ja mida ei leia

TakeoffCraft võrdleb joonist piksliti kaupa sinu kastiga märgitud sümboliga.

- See leiab sümboli, mis on pööratud 0°, 90°, 180° ja 270°. Et leida see ka igas nurgas, märgi linnukesega {{ui:Suvalise nurga all (aeglasem)}} automaatse loendamise ribal enne kasti joonistamist: see proovib iga 15° järel ja täpsustab iga leidu kraadi ja poole täpsuseni. See võtab umbes kuus korda kauem. Peegelpildis sümbolit see ei leia (välja arvatud juhul, kui sümbol peegelpildis näeb samasugune välja).
- Kui on märgitud {{ui:Otsi kõigilt avatud lehtedelt}}, otsitakse teise mõõtkavaga lehel sümbolit selle suuruses, mis sellel lehel on: joonisel mõõtkavas 1/8" plaanil oleva armatuuri suurus on pool selle suurusest 1/4" plaanil, ja see leitakse ikka. Sellist lehte otsitakse ka kasti enda suuruses, et leida sildid ja sümbolid, mis on igal lehel trükitud ühes suuruses. See eeldab mõõtkava mõlemal lehel; leht ilma mõõtkavata otsitakse ainult kasti suuruses.
- Väga sarnased sümbolid võivad üksteist vastena näidata: kahekordne ja nelikordne pistikupesa või kaks armatuurisilti, mis erinevad ühe tähe poolest. Tõsta liugurit, kuni alles jäävad ainult õiged, ja heida ülejäänud käsitsi kõrvale.
- Sümbol, mida läbivad teised jooned, kriihitus või tekst, saab madalama skoori ja võib vajada madalamat liuguri seadet.
- Väga väikesed kastid lükatakse tagasi: „Kast on liiga väike. Joonista see kogu sümboli ümber.“ Tühi kast lükatakse samuti tagasi: „Kast on peaaegu tühi. Joonista see sümboli ümber.“
- Leht, mis oleks selle sümboli jaoks vajaliku suurusega väga suur, jäetakse vahele ja kokkuvõttes on öeldud „1 leht oli selle sümboli suuruses otsimiseks liiga suur.“ Märgi suurem sümbol või loenda see leht käsitsi.

Kui midagi ei leita, ütleb olekuriba: „Vasteid pole. Langeta vaste liugurit või märgi sümbol täpsemalt ümber.“

## Kiirus ja brauserid

Otsing käib taustatöötajas, nii et leht jääb reageerivaks ja võid igal ajal tühistada. Iga leht joonistatakse esmalt töösuuruses lehel endal, mistõttu väga suur leht võib hetkeks peatuda. See töötab praegustes brauserites Chrome, Edge, Firefox ja Safari. Mitme lehe otsimine võtab kauem; edenemisriba liigub leht-lehelt. Võrguühenduseta töötab automaatne loendus siis, kui rakenduse riba näitab {{ui:Valmis ka võrguta}}: {{ui:Salvesta võrguks}} hoiab töötaja alles ka. Vaata [Töötamine võrguta](common:offline).
