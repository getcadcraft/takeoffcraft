---
title: Darba sākšana ar TakeoffCraft
summary: Ko dara TakeoffCraft, kur tas darbojas un jūsu pirmais izmērītais un novērtētais vienums no PDF plānu komplekta.
keywords: sākums, pirmais apjomu aprēķins, ātrais sākums, ievads, tāme, kvantitatīvais apjomu aprēķins, plānu komplekts, pdf
from: 3b9da1fb
---

TakeoffCraft mēra plānu komplektus, PDF un DWG vai DXF rasējumus un pārvērš mērījumus tāmē ar cenām. Jūs atverat failus (rasējumu var uzskaitīt tieši pēc tā blokiem: skatiet [DWG vai DXF rasējuma atvēršana](topic:open-a-drawing)), katrai lapai piešķirat mērogu (rasējumam tas ir jau iebūvēts), veidojat **vienumus** (sienas veids, grīdas apdare, armatūra) un noklikšķiniet uz lapām, lai tās nomērītu. Daudzumi, izmaksas un darba kopsumma atjaunojas, kamēr strādājat. Tāmi varat eksportēt kā tabulu un PDF kopiju ar uzzīmētu apjomu aprēķinu.

Ja esat veicis apjomu aprēķinu citās programmās, nākamais izlasiet [Pāreja no citām apjomu aprēķina programmām](topic:coming-from). Dažas lietas šeit darbojas citādi.

## Kur tas darbojas

TakeoffCraft darbojas jūsu tīmekļa pārlūkā. Atveriet TakeoffCraft, un ekrāns uzreiz ir gatavs; nekas nav jāinstalē.

- **Jūsu PDF paliek jūsu datorā.** Tos atver pārlūks, un tie nekad netiek augšupielādēti. Saglabāšana ir lejupielāde.
- Tas darbojas jaunākajās versijās Chrome, Edge, Firefox un Safari. Skatiet [Pārlūki un datori](common:browsers).
- Tas darbojas bez interneta savienojuma, kad lietotnes joslā esat izvēlējies {{ui:Save for offline}} un parādās {{ui:Offline ready}}. Skatiet [Darbs bezsaistē](common:offline).
- Saglabāšana mākonī vēl nav pieejama. Darbvirsmas lietotnei TakeoffCraft ir pieejams CadCraft Studio sastāvā kopā ar pārējām septiņām lietotnēm.

## Jūsu pirmais apjomu aprēķins desmit soļos

Šajā pārskatā tiek nomērīts viens sienas veids un noteikta tā cena. Tas aizņem dažas minūtes ar jebkuru jūsu plānu.

1. Rīkjoslas grupā {{ui:File}} izvēlieties {{ui:Open plans}} (vai nospiediet {{key:Mod+O}}), izvēlieties vienu vai vairākus PDF un izvēlieties Atvērt. PDF varat arī nomest jebkurā lapas vietā.
   Lapas parādās pa kreisi, un pirmā lapa atveras vidū.
2. Atrodiet lapas drukāto mērogu tās titulblokā vai zem rasējuma nosaukuma.
3. Atveriet sarakstu {{ui:Preset}} grupā {{ui:Scale}} un izvēlieties šo mērogu, piemēram, `1/4" = 1'-0"`.
   Lapas apakšējā joslā tagad rakstīts "Mērogs 1/4" = 1'-0"".
4. Izvēlieties {{ui:Check}} (vai nospiediet {{key:D}}) un noklikšķiniet uz abiem izmēra galiem, kas attēloti rasējumā.
   Rādījumam statusa joslas apakšējā kreisajā stūrī jāsakrīt ar drukāto izmēru. Ja nesakrīt, skatiet [Mēroga iestatīšana](topic:set-the-scale).
5. Labajā panelī {{ui:Items}} izvēlieties {{ui:New item}}, ierakstiet nosaukumu, piemēram, `Interior wall type A`, atstājiet tipu {{ui:Linear (length)}} un izvēlieties {{ui:Add}}.
6. Rīkjoslā izvēlieties {{ui:Linear}} (vai nospiediet {{key:L}}).
7. Noklikšķiniet uz sienas sākuma, pēc tam uz katra stūra gar to. Lai pabeigtu posmu, veiciet dubultklikšķi, nospiediet {{key:Enter}} vai noklikšķiniet ar peles labo pogu.
   Posms tiek uzzīmēts vienuma krāsā, un tā garums parādās blakus vienumam.
8. Vienuma redaktorā zem {{ui:Items}} ierakstiet `9'-0"` laukā {{ui:Height}}, `0.85` laukā Materiāls $/LF un `1.20` laukā Darbs $/LF.
   Tabulā {{ui:Quantities}} apakšā redzams garums, aprēķinātās materiāla un darba izmaksas un {{ui:Job total}}.
9. Izvēlieties {{ui:Save takeoff}} (vai nospiediet {{key:Mod+S}}).
   Pārlūks lejupielādē failu `.takeoff.json`. Tajā ir jūsu vienumi, mērogi un atzīmes, un tas atkal tiek atvērts kopā ar tiem pašiem PDF.
10. Rīkjoslā atveriet izvēlni {{ui:Export}} un izvēlieties {{ui:XLSX}}, lai lejupielādētu tāmi kā tabulu.

:::tip
Nospiediet {{key:Esc}}, lai pārtrauktu jebkuru darbību un atgrieztos pie rīka {{ui:Select}}. {{key:Mod+Z}} atsauc jebkuru izmaiņu.
:::

## Ko lasīt tālāk

- [TakeoffCraft ekrāns](topic:workspace) nosauc katru loga daļu.
- [Apjomu aprēķina sākšana un plānu komplekta atvēršana](topic:open-plan-set) aptver vairākus PDF un lapu sarakstu.
- [Apjomu aprēķina vienumu izveide](topic:create-items) izskaidro tipus, mērvienības, atkritumus un likmes.
- [Mezgli un formulas](topic:assemblies) pārvērš vienu mērījumu sienu statņos, ģipškartona loksnēs un citos.
- [Tastatūra un pele](topic:keyboard) uzskaita katru taustiņu.
