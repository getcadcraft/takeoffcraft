---
title: Mēroga iestatīšana
summary: Piešķiriet katrai lapai mērogu ar iepriekš iestatījumu vai kalibrējot pēc zināma izmēra, pārbaudiet to un saprotiet, kāpēc lapas bez mēroga nav iekļautas kopsummās.
keywords: noteikt mērogu, nolasīt mērogu, mērogs no teksta, visas lapas, mērogs, kalibrēt, iepriekš iestatījums, pārbaudīt mērogu, pārbaudīt, zināms izmērs, bez mēroga, nav mēroga, attiecība, iestatīt mērogu
from: 8f0148e6
---

Katrai lapai ir savs mērogs. Jūs to iestatāt vai ļaujat TakeoffCraft to nolasīt no lapu teksta (zemāk), un pārbaudāt to. Kamēr lapai nav mēroga, {{ui:Lineārs}}, {{ui:Laukums}}, {{ui:Riņķis}} un {{ui:Izgriezums}} uz tās nemēra. {{ui:Skaitīt}} un {{ui:Automātiski skaitīt}} darbojas bez mēroga.

Lapu sarakstā katras lapas mērogs ir rādīts vai **Nav mēroga**. Josla zem atvērtās lapas parāda to pašu.

## Izmantot iepriekš iestatījumu (ja PDF ir drukāts pilnā izmērā)

1. Atveriet lapu.
2. Atveriet sarakstu {{ui:Iepriekš iestatīts}} grupā {{ui:Mērogs}}.
3. Izvēlieties zīmējumā norādīto mērogu, piemēram, `1/8" = 1'-0"` sadaļā Arhitektūras.
   Statusa joslā rādīts: "Šīs lapas mērogs: 1/8" = 1'-0"."
4. Pārbaudiet to (zemāk).

Iepriekš iestatījums pieņem, ka PDF ir tāds reālais papīra izmērs, kādam zīmējums veidots. Ja kāds PDF veidojis ar "pielāgot lapai", vai tas ir pusizmēra komplekts, iepriekš iestatījums ir nepareizs. Tā vietā kalibrējiet.

Pilns saraksts ir [Mērogu iepriekš iestatījumi](topic:scale-presets).

## Nolasīt mērogus no lapu teksta

Lielākā daļa zīmējumu norāda savu mērogu: `SCALE: 1/4" = 1'-0"` nosaukuma blokā, `1:100` zem skata. TakeoffCraft to var nolasīt un iestatīt katrai lapai uzreiz.

1. Atveriet sarakstu {{ui:Iepriekš iestatīts}} un izvēlieties {{ui:No lapu teksta…}} (augšā).
2. Saraksts rāda katru lapu: tās pašreizējo mērogu un to, ko saka tās teksts — **Norāda 1/4" = 1'-0"**, **Tekstā nav mēroga** vai **Norāda — nemērogot** (NTS).
3. Lapas bez mēroga, kas norāda kādu, ir atzīmētas. Atzīmējiet vai noņemiet atzīmi jebkurai, pēc tam izvēlieties {{ui:Iestatīt atzīmētos mērogus}}. Viens {{key:Mod+Z}} atsauc visus.
4. Pārbaudiet vienu izmēru katrā lapā ar {{ui:Pārbaudīt}} (zemāk): iepriekš iestatījums ir pareizs tikai tad, ja PDF ir drukāts pilnā izmērā.

Tas nolasa arhitektūras (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), inženierijas (`1" = 20'`) un metriskos (`1:50`) apzīmējumus, kas atbilst [iepriekš iestatījumam](topic:scale-presets). Ja lapa norāda vairāk nekā vienu mērogu (plāns ar palielinātām detaļām), tiek izvēlēts tas, ko tā norāda visbiežāk, un tas, kas rakstīts pēc vārda SCALE, skaitās divkārt; pārējie tiek rādīti sarkani, lai jūs tos pārbaudītu. Skenētai lapai teksta nav: iestatiet tās mērogu ar roku.

## Kalibrēt pēc zināma izmēra

Izmantojiet to, ja nav uzticama drukāta mēroga, komplekts ir mainīts izmērā, vai lapa ir atzīmēta "nemērogot", bet tajā ir izmēri.

1. Atveriet lapu un tuviniet zināmu garu izmēru, piemēram, režģa līniju attālumu vai kopējo ēkas izmēru. Jo garāks, jo precīzāk.
2. Izvēlieties {{ui:Kalibrēt}} grupā {{ui:Mērogs}} vai nospiediet {{key:K}}.
3. Noklikšķiniet uz viena izmēra gala. Katram galam tuviniet precizitātes dēļ; starp klikšķiem varat tuvināt un pārvietoties.
4. Noklikšķiniet uz otra gala. Turiet {{key:Shift}}, lai līnija paliktu 0°, 45° vai 90°.
   Atveras dialogs **Kalibrēt šo lapu**.
5. Ievadiet reālo attālumu laukā **Reālais attālums**, piemēram, `24'-6 1/2"`, `24.5` (decimālās pēdas), `30"` vai `7.5 m`. Skatiet [Garuma, likmes un procentu ievade](topic:entry-formats).
6. Izvēlieties {{ui:Iestatīt mērogu}}.
   Statusa joslā mērogs rādīts kā "1" = (n)'", un, ja tas atrodas 0.5% robežās no iepriekš iestatījuma, norādīts, kurš tas ir, piemēram, "kas atbilst 1/4" = 1'-0" (izvēlieties šo iepriekš iestatījumu precīzam mērogam)".
   TakeoffCraft atgriežas pie rīka {{ui:Atlasīt}}.

Ja kalibrēšana atbilst iepriekš iestatījumam, šī iepriekš iestatījuma izvēle dod precīzu mērogu, nevis mērogu, kas atkarīgs no tā, kur noklikšķinājāt.

## Pārbaudīt mērogu

Vienmēr pārbaudiet jaunu mērogu uz otra izmēra.

1. Izvēlieties {{ui:Pārbaudīt}} grupā {{ui:Mērogs}} vai nospiediet {{key:D}}.
2. Noklikšķiniet uz abiem zīmējumā norādīta izmēra galiem.
   Statusa joslā rādīts "Pārbaude: 12'-6"" ar tādu pašu garumu decimālās pēdās un metros, un pārbaudes līnija paliek lapā kopā ar savu garumu.
3. Salīdziniet to ar norādīto izmēru. Ja tas nesakrīt, kalibrējiet uz garāka izmēra.

Nospiediet {{key:Esc}}, lai notīrītu pārbaudes līniju.

## Mainīt mērogu

Izvēlieties citu iepriekš iestatījumu vai kalibrējiet vēlreiz. Ja lapai jau ir mērījumi, TakeoffCraft jautā **Mainīt šīs lapas mērogu?** un norāda, cik mērījumi tiks izmērīti no jauna. Izvēlieties {{ui:Mainīt mērogu}}. Katrs posms un laukums lapā tiek izmērīts no jauna jaunajā mērogā. To var atsaukt ar {{key:Mod+Z}}.

## Kāpēc lapas bez mēroga netiek skaitītas kā nulle

Atzīmei lapā bez mēroga nav reāla garuma vai laukuma. TakeoffCraft to nekad neskaita kā nulli, jo tas klusi padarītu jūsu tāmi pārāk zemu. Tā vietā tā:

- izslēdz šīs atzīmes no kopsummām,
- rāda "+(n) bez mēroga" blakus vienumam {{ui:Daudzumi}},
- rāda "Nepilnīgs: (n) atzīmes lapās bez mēroga (nav iekļautas kopsummās)" tabulas galvenē,
- ieraksta skaitu eksportētās izklājlapas piezīmju kolonnā.

Tas var notikt, kad atverat projektu, kura mērogi nekad nav iestatīti. Iestatiet lapai mērogu, un atzīmes tiek skaitītas uzreiz. Skaitīšanas atzīmes vienmēr tiek skaitītas; tām nav vajadzīgs mērogs.

## Padomi

- Iestatiet mērogu katrai lapai, ko mērīsiet, pirms sākat. Pārlūkojiet lapu sarakstu un meklējiet **Nav mēroga**, lai atrastu atlikušās (meklēšanas lauks skata lapu nosaukumus, nevis mērogus).
- Detaļām un palielinātiem plāniem tajā pašā lapā bieži ir cits mērogs. TakeoffCraft katrai lapai ir viens mērogs; skatiet [Kas vēl nav izveidots](topic:not-built-yet).
- Metriskie zīmējumi: izvēlieties metrisku iepriekš iestatījumu, piemēram, `1:100`, vai kalibrējiet ar metrisku attālumu, piemēram, `6000 mm`.
