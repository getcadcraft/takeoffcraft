---
title: Izmantot TakeoffCraft ar AI asistentu
summary: Ļaujiet savam AI asistentam vai skriptam nolasīt apjomu aprēķina daudzumus un tāmi, pievienot vienumus un atzīmes, skaitīt un mērīt DWG vai DXF failā un eksportēt: atļaujas, savienojums caur CadCraft Studio un aktivitātes žurnāls.
keywords: ai, asistents, aģents, mcp, model context protocol, skripts, automatizācija, daudzumi, tāme, atļaujas, atvienot, aktivitāte
from: 7fa62ec6
---

## Ko jūs uzzināsiet

Kā ļaut AI asistentam (vai skriptam, ko esat uzrakstījis) strādāt ar TakeoffCraft un kā izlemt, ko tas drīkst mainīt.

TakeoffCraft **nav savas AI** un neko nenosūta nekur. Asistentu nodrošināt jūs: jebkuru programmu, kas runā Model Context Protocol (MCP) valodā. TakeoffCraft tam tikai dod rīkus, un izvēlaties jūs.

## Ieslēgt

1. Atveriet {{ui:Iestatījumi}} (zobrata ikona lietotnes joslā vai {{key:Mod+,}}) un dodieties uz cilni {{ui:TakeoffCraft}}.
2. Sadaļā {{ui:Asistenti}} atzīmējiet **Ļaut AI asistentiem un skriptiem izmantot TakeoffCraft**. Līdz tam tas ir izslēgts.
3. Izvēlieties, ko tas drīkst: **Lasīt** sākumā ir atzīmēts; atzīmējiet **Rediģēt**, **Saglabāt** vai **Eksportēt** tikai tad, kad tie ir vajadzīgi.

Rīki, kas nav iekļauti jūsu atzīmētajās atļaujās, asistentam netiek piedāvāti, un, ja tas tomēr pieprasa kādu no tiem, TakeoffCraft to noraida un ieraksta aktivitāšu žurnālā. Ja izslēdzat slēdzi, uzreiz beidzas visi savienojumi; {{ui:Atiestatīt TakeoffCraft iestatījumus}} to izslēdz arī.

## Savienot asistentu

Asistenti savienojas caur **CadCraft Studio** jūsu datorā: Studio palaiž nelielu serveri, ko var sasniegt tikai šis dators, un to aizsargā marķieris, ko Studio izveido katrreiz, kad tas sākas. Studio izvēlieties {{ui:Savienot asistentu}} un nokopējiet adresi un marķieri savā asistentā (Studio parāda precīzus iestatījumus, ko ielīmēt). Nekad nedalieties ar marķieri.

:::note
Pārlūka cilne nevar atvērt savienojumu asistentam: pārlūka lietotnēs slēdzim nav nekādas ietekmes, kamēr neizmantojat CadCraft Studio savā datorā.
:::

## Jūs paliekat vadītājs

- **Katra izmaiņa ir viens atsaukšanas solis**, ar nosaukumu, kas norāda asistentu (piemēram, "Asistents: …"). {{key:Mod+Z}} atsauc asistenta pēdējo izmaiņu kopumā.
- **Jūs zināt, kad savienojums ir aktīvs.** Lietotnes joslas poga nosauc asistentu, kamēr tas ir savienots; noklikšķiniet uz tās, lai redzētu, ko tas drīkst, vai lai to **atvienotu**.
- **Aktivitāte.** {{ui:Iestatījumi}} › {{ui:TakeoffCraft}} › {{ui:Asistenti}} › {{ui:Aktivitāte}} uzskaita katru izsaukumu: kad, kurš rīks, izpildīts vai noraidīts. {{ui:Saglabāt žurnālu}} saglabā kopiju.

## Ko asistents var pieprasīt

| Rīks | Atļauja | Ko tas dara |
|---|---|---|
| `app_info`, `sheets_list` | Lasīt | Atvērto apjomu aprēķinu, tā PDF failus un lapas, katras lapas mērogu un atzīmes |
| `items_list` | Lasīt | Vienumus ar to mērvienībām, likmēm un mezglu formulām |
| `takeoff_quantities` | Lasīt | Daudzumus pa vienumiem vai pa lapām; atzīmes lapās bez mēroga tiek uzskaitītas, nekad neskaitītas kā nulle |
| `takeoff_estimate` | Lasīt | Cenoto tāmi, kā to aprēķina TakeoffCraft, ar kopsummām |
| `takeoff_export` | Eksportēt | TakeoffCraft pašu CSV vai XLSX eksportu |
| `items_add` | Rediģēt | Pievieno vienumus ar to mērvienībām, likmēm un atkritumiem |
| `marks_add` | Rediģēt | Mēra posmus, laukumus un skaitus lapā. Garumus un laukumus tikai lapā ar mērogu, nekad lapā bez mēroga |
| `cad_sheets`, `cad_catalog`, `cad_count` | Lasīt | DWG vai DXF failā, ko esat atvēris: tā lapas un to mērogus, to, ko var skaitīt (blokus, slāņus un tipus, tekstus), un precīzus skaitus, tādus, kādus veido {{ui:CAD skaitīšana}} ([Skaitīt no rasējuma](topic:count-from-a-drawing)) |
| `cad_count_add` | Rediģēt | Skaita rasējumā un katram atrastajam objektam pievieno skaita atzīmi vienā solī; atkārtota skaitīšana pievieno tikai jauno |
| `cad_measure` | Rediģēt | Mēra lineāru vai laukuma vienumu pēc paša rasējuma līnijām, lokiem, polilīnijām un šrafējumiem, kā to dara {{ui:Izmērīt rasējumu}} ([Izmērīt no rasējuma](topic:measure-from-a-drawing)); tikai lapā ar mērogu |
| `usd_export` | Eksportēt | Mērogotas lapas izmērītos posmus, laukumus un skaitus kā 3D pārbaudes modeli USD formātā (`.usdz`, `.usda` vai `.usdc`), kā to raksta {{ui:USD pakotne (.usdz)}} 3D pārbaudes skatā ([Eksportēt 3D pārbaudes skatu kā USD](topic:usd)) |

Ar ieslēgtu **Rediģēt** asistents pievieno vienumus un atzīmes (katrs izsaukums ir viens atsaukšanas solis); jau esošās atzīmes tas nevar pārvietot, mainīt vai dzēst.

Tos pašus daudzumus un tāmi var iegūt arī bez TakeoffCraft atvēršanas: CadCraft MCP serveris atver `.takeoff.json` failu mapē, ko norādāt (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), un `cadcraft info Job.takeoff.json` tos izdrukā komandrindā. Tas arī atver DWG vai DXF kā jaunu apjomu aprēķinu tā lapās (mērogotas no rasējuma, kā to dara TakeoffCraft), skaita un mēra tajā ar tiem pašiem `cad_*` rīkiem, pievieno vienumus un saglabā apjomu aprēķinu (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` skaita no komandrindas.

## Ja kaut kas nedarbojas

- **Asistents neredz TakeoffCraft rīkus:** pārbaudiet, vai slēdzis ir ieslēgts šajā logā un vai logs ir atvērts Studio.
- **"needs the export permission":** atzīmējiet **Eksportēt** sadaļā {{ui:Asistenti}} un pēc tam jautājiet vēlreiz.
- **Kļūdas "401" vai "token":** marķieris ir mainījies (Studio tika restartēts vai {{ui:Jauns marķieris}}). Ielīmējiet jauno marķieri asistenta iestatījumos.

## Skatīt arī

- [Receptes AI asistentiem](common:assistants-recipes): darba piemēri, katrs ar rīkiem, ko tas izsauc.
