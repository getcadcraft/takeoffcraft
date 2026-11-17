---
title: Zemes darbi un augstuma atzīmes
summary: Atzīmējiet augstuma atzīmes situācijas plānā, nododiet tās CivilCraft virsmas, izrakuma un uzbēruma aprēķinam un šeit iegūstiet vienkāršus izrakšanas daudzumus.
keywords: zemes darbi, izrakšana, izrakums, uzbērums, izrakums un uzbērums, vertikālā plānošana, augstuma atzīme, augstuma atzīmes, topo, virsma, triangulācija, civilcraft, punkti, pnezd, tranšeja
from: a898e508
---

TakeoffCraft mēra to, kas ir uzzīmēts lapā. Zemes darbiem nepieciešama zemes virsma, tāpēc tie ir kopīgi ar CivilCraft, kas veido virsmas no punktiem, veido tām vertikālo plānojumu un aprēķina izrakumu, uzbērumu un izvešanu.

## Vienkārša izrakšana šeit

Vienam dziļumam izrakta pamatne pietiek ar laukuma vienumu ar **dziļumu**: tilpums ir laukums × dziļums. Vispārējā darbuzņēmēja [darbu komplektā](topic:trade-packs) ir lielapjoma izrakuma vienums (blīvais tilpums, irdenais tilpums un kravas automašīnu reisi) un komunikāciju tranšejas vienums (izrakšana, pamatne un aizbēršana pēc garuma un dziļuma).

## Augstuma atzīmes CivilCraft vajadzībām

1. Iestatiet situācijas lapas mērogu.
2. Izveidojiet vienumu **Skaits**, piemēram, "Esošais reljefs", un noklikšķiniet katru augstuma atzīmi lapā.
3. Atlasiet atzīmi un ierakstiet tās {{ui:Elevation}} panelī Atlasītā atzīme: `102.5`, `102'-6"` vai `31.24 m`. Negatīvas un nulles augstuma atzīmes ir pieļaujamas.
4. Atveriet izvēlni {{ui:Export}} un izvēlieties {{ui:Spot elevations}}. Jūs iegūsiet punktu failu (`.csv`) ar kolonnām Point, Northing, Easting, Elevation un Description: vienu rindu katram atzīmētajam punktam atvērtajā lapā.
5. Atveriet šo failu CivilCraft (skatiet [Punktu importēšana](app:civilcraft/import-points)). Tas no punktiem izveido virsmu ([Virsmas izveide](app:civilcraft/build-surface)); tālāk tajā var salīdzināt virsmas un iegūt izrakumu un uzbērumu ([Tilpumi](app:civilcraft/volumes)).

Northing un Easting ir lapas pašas koordinātas pēdās, mērītas no lapas stūra pēc tās mēroga: attālumi un tilpumi starp punktiem ir pareizi, bet tās nav jūsu objekta uzmērījuma koordinātas. Kad nepieciešams, pārvietojiet tās uz objekta koordinātām CivilCraft.

:::note
Punkti no dažādām lapām nedalās koordinātās, tāpēc eksportā tiek ņemta tikai atvērtā lapa. Augstuma atzīmes tiek saglabātas kopā ar apjomu aprēķinu un tiek pārnestas, kopējot un ielīmējot.
:::

## Izrakums un uzbērums no CivilCraft

CivilCraft zemes darbu rezultāti atgriežas kā divi vienumi, kurus var cenot:

1. CivilCraft sagatavojiet laukumus un koridorus, tad izvēlieties {{ui:Send to TakeoffCraft}} sadaļā **Zemes darbi** ([Zemes darbu tilpumi](app:civilcraft/volumes)). Tiek saglabāts daudzumu fails (`.quantities.json`).
2. TakeoffCraft atveriet to ar {{ui:Open takeoff}} vai nometiet failu lietotnē. Jūsu apjomu aprēķins paliek atvērts: fails pievieno **Earthwork: cut** un **Earthwork: fill** kā [tipizētus daudzumus](topic:create-items#typed-quantities-no-drawing) kubikjardos (CY) pēdu projektam vai kubikmetros (m³) metru projektam. Tas ir viens solis: {{key:Mod+Z}} to atsauc.
3. Pārdēvējiet tos un iestatiet zudumus, likmes un mezglus pēc vēlēšanās.

Kad projekts mainās, no CivilCraft nosūtiet vēlreiz un atveriet jauno failu: tie paši divi vienumi saņem jaunos daudzumus. To nosaukumi, likmes, zudumi un mezgli paliek tādi, kādus esat iestatījis. Ja projekta mērvienība ir mainījusies, statusa joslā par to tiek paziņots: pārbaudiet likmes. Fails no cita CivilCraft projekta pievieno savus divus vienumus.

Daudzumi ir blīvie tilpumi, kā tos izmērījis CivilCraft (režģa metode): bez sarukuma vai pieauguma. Pievienojiet tos kā zudumus vai ar formulu, piemēram, `Q * 1.25`, irdenajam tilpumam. Vienumu redaktorā redzams, no kurienes un kad katrs no tiem nācis; tāmes piezīmju kolonnā tas ir norādīts arī.

:::note
Daudzumu fails ir vienkāršs JSON (`"format": "cadcraft-quantities"`), tāpēc skripts vai cita programma arī var to uzrakstīt: lietotnes nosaukums, projekts un vienumi ar atslēgu, nosaukumu, mērvienību un daudzumu.
:::
