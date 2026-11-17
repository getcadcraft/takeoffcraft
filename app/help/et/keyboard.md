---
title: Klaviatuur ja hiir
summary: Iga klahv, hiire-, puuteplaadi- ja puuteekraani toiming TakeoffCraftis, rühmitatult, platvormide erinevustega.
keywords: klahvid, otseteed, kiirklahvid, klaviatuur, hiir, puuteplaat, puuteekraan, nihuta, suumi, ratas, parem-klõps, topeltklõps, tühik, shift, kopeeri, lõika, kleebi, dubleeri, vali kõik
from: 6f2c441d
---

Tähtklahvid töötavad, kui kursor on kogu lehel ja sa ei sisesta väljale. Kui dialoog on avatud, rakenduvad selle enda klahvid. Tähed töötavad koos {{key:Shift}}-iga või ilma.

## Tööriistad

| Klahv | Tööriist |
|---|---|
| {{key:V}} | {{ui:Vali}} |
| {{key:L}} | {{ui:Lineaarne}} |
| {{key:A}} | {{ui:Pindala}} |
| {{key:O}} | {{ui:Ring}} |
| {{key:B}} | {{ui:Ruum}} (täida ruum ühe klõpsuga) |
| {{key:R}} | {{ui:Kaar}} sisse või välja (joone-, pindala- ja väljalõike tööriistas) |
| {{key:E}} | {{ui:Mahaarvata}} sisse või välja: jada järgmised lõigud joonistatakse, aga neid ei arvestata |
| Number, `@` või `#` joonistamise ajal | Ava {{ui:Sisesta}} kast: sisesta pikkus või koordinaadid, {{key:Enter}} paigutab punkti ([Mõõda lineaarseid jadasid](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Väljalõige}} (vali enne ala) |
| {{key:C}} | {{ui:Loe}} |
| {{key:S}} | {{ui:Automaatne loendus}} |
| {{key:K}} | {{ui:Kalibreeri}} |
| {{key:D}} | {{ui:Kontrolli}} mõõtkava |

## Joonistamise ajal

| Klahv või toiming | Mida see teeb |
|---|---|
| Klõps | Paigutab punkti (täpi, koos Loe-ga). |
| {{key:P}} | Tee: vali PDF-joone terve ühendatud tee või klõpsu ümbritsev kontuur ([Vali PDF-i jooned](topic:pick-the-lines)). |
| {{key:F3}} | Kinnitamine joonise joontele sisse või välja ([Kinnitu joonise joontele](topic:snap-to-the-drawing)). |
| {{key:Shift}} hoides klõpsates | Kinnitab lõigu 0°, 45°, 90° või 135° nurga alla viimasest punktist. Ei kehti kaare punktidele ega ringidele. |
| Topeltklõps | Lõpetab jada või sulgeb ala või väljalõike. |
| {{key:Enter}} | Lõpetab jada või sulgeb ala või väljalõike. |
| Parem-klõps (ilma liigutamata) | Lõpetab jada või sulgeb ala või väljalõike. |
| Klõps esimesel punktil | Sulgeb ala või väljalõike (alates kolmandast punktist). |
| {{key:Backspace}} või {{key:Delete}} | Eemaldab viimase punkti (kõigepealt ootel oleva kaarepunkti). |
| {{key:Esc}} | Eemaldab ootel oleva kaarepunkti; seejärel tühistab pooleli märgise; seejärel läheb tagasi {{ui:Vali}} tööriista juurde. |

## Valimine ja muutmine

| Klahv või toiming | Mida see teeb |
|---|---|
| Klõps märgisel (Vali tööriist) | Valib selle ja muudab selle kirje praeguseks. |
| {{key:Shift}} + klõps märgisel | Lisab valikule või eemaldab sealt. |
| {{key:Mod+A}} | Valib kõik märgised avatud lehel. |
| Lohista nurgakäepidet | Teisaldab selle punkti ({{key:Shift}} kinnitab 45°-sammudega). Töötab, kui on valitud üks märgis. |
| {{key:Delete}} või {{key:Backspace}} | Kustutab valitud märgised (kui sa ei joonista). |
| {{key:Esc}} | Ära vali midagi: tühistab valiku ja kontrolljoone. |
| {{key:Mod+Z}} | Võta tagasi. |
| {{key:Mod+Y}} või {{key:Mod+Shift+Z}} | Tee uuesti. |

## Kopeerimine ja kleepimine

| Klahv | Mida see teeb |
|---|---|
| {{key:Mod+C}} | Kopeerib valitud märgised koos nende kirjetega. |
| {{key:Mod+X}} | Lõika: kopeerib valitud märgised ja kustutab need. |
| {{key:Mod+V}} | Kleebi: koopia järgib kursorit; klõpsa, kuhu see läheb. |
| {{key:Mod+Shift+V}} | Kleebi samale kohale: sama koht avatud lehel. |
| {{key:Mod+D}} | Dubleeri valitud märgised: koopia järgib kursorit; klõpsa, kuhu see läheb. |
| {{key:Esc}} | Ära pane midagi maha: tühista kleepimine või dubleerimine, mis on kursoril. |

Tähed üksi valivad endiselt tööriistu ({{key:C}} on {{ui:Loe}}, {{key:D}} on {{ui:Kontrolli}}, {{key:X}} on {{ui:Väljalõige}}, {{key:V}} on {{ui:Vali}}, {{key:A}} on {{ui:Pindala}}); ainult {{key:Mod}} koos nendega kopeerib ja kleebib. Tekstiväljal kopeerivad ja kleebivad need klahvid teksti tavapäraselt. Vaata [Kopeeri, kleebi ja dubleeri märgised](topic:copy-paste).

:::warning
{{key:Backspace}} kustutab valitud märgise, kui sa ei joonista. Kui see juhtub kogemata, toob {{key:Mod+Z}} selle tagasi.
:::

## Failid

| Klahv | Mida see teeb |
|---|---|
| {{key:Mod+O}} | {{ui:Ava plaanid}} |
| {{key:Mod+S}} | {{ui:Salvesta koguste arvestus}} |

Need kaks töötavad ka siis, kui sisestad väljale.

## Vaade ja lehed

| Klahv või toiming | Mida see teeb |
|---|---|
| Hiireratas | Suumib sisse ja välja kursori kohal. |
| Lohista (vasak, keskmine või parem nupp) | Nihuta vaadet. {{ui:Automaatne loendus}} režiimis joonistab vasak lohistamine hoopis otsingukasti. |
| {{key:Space}} hoides + lohista | Nihuta vaadet, mis tahes tööriistaga. |
| {{key:F}} | {{ui:Sobita leht}} |
| {{key:W}} | {{ui:Sobita laius}} |
| {{key:Plus}} või {{key:=}} | Suumi sisse vaate keskel. |
| {{key:Minus}} | Suumi välja vaate keskel. |
| {{key:PageDown}} / {{key:PageUp}} | Järgmine või eelmine leht lehtede loendis. |
| {{key:Ctrl+Shift+F}} | Vaheta täisekraani režiime (Control kõigil platvormidel, ka Macil). |
| {{key:F1}} | Ava või sulge see abi, külgpaneel. |
| {{key:3}} | Lehe 3D-kontrollvaade sisse või välja. |

## 3D-vaade

| Klahv või toiming | Mida see teeb |
|---|---|
| Lohista või lohista keskmise nupuga | Pööra. |
| {{key:Shift}} + lohista või lohista parema nupuga | Nihuta vaadet. |
| Hiireratas | Suumi kursori kohal. Puuteplaadil pöörab kahe sõrmega libistus vaadet ja näpistamine suumib. |
| Klõps | Valib kursori all oleva märgise ({{key:Shift}} + klõps lisab või eemaldab). |
| {{key:F}} või {{key:W}} | Suumi ulatusele. |
| {{key:3}} | Tagasi lamedale lehele. |

Vaata [Kontrolli koguste arvestust 3D-s](topic:check-in-3d).

## Automaatne loendus

| Klahv või toiming | Mida see teeb |
|---|---|
| Lohista kast | Ümbritse sümbol, mida otsida (käivitab otsingu). |
| Klõps vastete kastil | Lükka tagasi või taasta. |
| {{key:Esc}} | Tühista käimasolev otsing või loobu ülevaatusest. |

## Abi

| Klahv | Mida see teeb |
|---|---|
| {{key:F1}} | Ava või sulge abipaneel (ja rakenduse ribal {{ui:Abi}} nupp). See töötab igas tööriistas, isegi kui sisestad väljale. |
| {{key:Esc}} | Sulge abipaneel. Selle otsingukastis tühjendab esimene Esc otsingu. Kui paneel on avatud, sulgeb Esc pärast lehe klõpsamist kõigepealt paneeli; vajuta uuesti, et TakeoffCraftis tühistada. |

:::mac
Paljudel Maci klaviatuuridel juhivad ülemine rida heledust ja heli. Vajuta fn-klahvi koos F1-ga või lülita sisse valik „Kasuta F1, F2 jt klahve standardsete funktsiooniklahvidena“ jaotises Süsteemiseaded › Klaviatuur.
:::

## Dialoogid ja väljad

| Klahv | Mida see teeb |
|---|---|
| {{key:Enter}} | Väljal: rakenda väärtus. Kalibreerimisdialoogis: {{ui:Määra mõõtkava}}. |
| {{key:Esc}} | Sulge dialoog (nagu {{ui:Loobu}}); sulge {{ui:Uus kirje}} vorm. |
| {{key:Tab}} | Liigu järgmisele väljale. |

## Platvormi märkused

:::mac
- {{key:Mod}} on Command-klahv: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Täisekraan on erand: Control+Shift+F.
- Parem-klõps on puuteplaadil kahe sõrmega klõps, kui sekundaarne klõps on sisse lülitatud jaotises Süsteemiseaded › Puuteplaat. TakeoffCraft loeb ainult sekundaarnuppu; Control-klõps võib loeda tavaliseks klõpsuks ja lisada punkti.
- Kahe sõrmega kerimine puuteplaadil suumib lehte (ei keri seda). Nihutamiseks vajuta ja lohista või hoia {{key:Space}} all ja lohista.
- Page Up ja Page Down on fn koos üles- ja allanooltega klaviatuuridel, millel neid pole.
- Backspace on klahv, millel on silt delete.
:::

:::windows
- {{key:Mod}} on Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Sülearvuti puuteplaadil suumib kahe sõrmega kerimine lehte. Nihutamiseks vajuta ja lohista.
:::

:::linux
- {{key:Mod}} on Ctrl. Mõned töölauad kasutavad oma Ctrl+Alt- või Super-otseteid; TakeoffCraft ei kasuta neist ühtegi.
- Puuteplaadil suumib kahe sõrmega kerimine lehte. Nihutamiseks vajuta ja lohista.
:::

:::touch
TakeoffCraft loeb puudutust ühe osutajana:

- Puudutus paigutab punkti, valib märgise või lisab loenduspunkti.
- Ühe sõrmega lohistamine nihutab lehte ({{ui:Automaatne loendus}} režiimis joonistab see otsingukasti).
- Kahe sõrmega näpistamisega suumimine ei ole veel toetatud. Kasuta {{ui:Sobita leht}} ja {{ui:Sobita laius}} või klaviatuuril {{key:Plus}} ja {{key:Minus}}.
- Ala sulgemiseks puuduta selle esimest punkti. Jada lõpetamiseks topeltpuuduta seal, kus sinu brauser muudab topeltpuudutuse topeltklõpsuks, või vajuta klaviatuuril {{key:Enter}}.
- Pikkuse näit ei ilmu enne puudutamist, sest hõljumist ei ole.

Koguste arvestuseks on praegu parem klaviatuur ja hiir või puuteplaat.
:::

## Klahvid, mida brauser hoiab enda jaoks

Brauserid hoiavad mõned otseteed enda jaoks ega lase lehel neid kasutada: vahelehe sulgemine ({{key:Mod+W}}), uus vaheleht või aken ({{key:Mod+T}}, {{key:Mod+N}}) ja brauseri suumimine ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Seepärast suumib TakeoffCraft lehte ratta ning paljaste {{key:Plus}}- ja {{key:Minus}}-klahvidega. Kui vajutad {{key:Mod+Plus}} kogemata, kasvab kogu leht; {{key:Mod+0}} paneb selle tagasi. Vaata [Klahvid, hiired ja puuteplaadid](common:keys).

## Kus asub Teisalda

Teisalda käsku ei ole: vali loenduspunkt ja lohista see, või vali ala või joon ja lohista selle nurgakäepidemeid.
