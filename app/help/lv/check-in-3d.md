---
title: Apjomu aprēķina pārbaude 3D
summary: Skatiet atvērtās lapas sienas, pārsegus un skaitīšanas, kas stāv uz zīmējuma, griezieties ap tiem un noklikšķiniet uz viena, lai atlasītu tā atzīmi.
keywords: png, attēls, bilde, ekrānuzņēmums, sakraut, stāvi, līmeņi, fasāde, glb, gltf, eksportēt 3D, sienas biezums, pamata augstums, atvere, durvju augšmala, 3d, trīs d, pārbaude, skats, sienas, sienas augstums, pārsegs, dziļums, tilpums, griezt apkārt, modelis, atlase, izometrija, perspektīva
from: fb16b4f7
---

3D skats ir pārbaude, nevis otrs zīmējums: tas novieto lapas apjomu aprēķinu uz pašas lapas ekrānā, lai trūkstoša siena, dubultots pārsegs vai nejauša skaitīšana būtu redzama uzreiz.

Pirms sākat: lapai nepieciešams mērogs ([Mēroga iestatīšana](topic:set-the-scale)). Augstumiem un dziļumiem nepieciešamas reālas pēdas, tāpēc lapā bez mēroga {{ui:3D}} to pasaka un paliek plakanajā lapā.

## Atvērt 3D skatu

1. Parādiet lapu, ko vēlaties pārbaudīt.
2. Izvēlieties {{ui:3D}} joslā, kur rādās lapas nosaukums un mērogs, vai nospiediet {{key:3}}.
   Pirmoreiz 3D skats ielādējas kādu brīdi. Lapa tiek uzzīmēta uz zemes, un apjomu aprēķins uz tās stāv katra vienuma krāsā.
3. Lai atgrieztos, izvēlieties {{ui:3D}} vēlreiz, {{ui:Back to the sheet}} vai nospiediet {{key:3}}. Zīmēšanas rīka izvēle (Lineārs, Laukums, Skaits un citi) arī atgriež, jo atzīmes tiek zīmētas plakanajā lapā.

3D skats rāda lapu ekrānā; mainiet lapu lapu sarakstā vai ar {{key:PageDown}} un {{key:PageUp}}, un 3D skats seko. Lai redzētu vairākus stāvus vienlaikus, sakrāmējiet tos (zemāk).

## Ko jūs redzat

| Atzīme | 3D |
|---|---|
| Lineāra līnija, vienumam ar augstumu | Siena ar šo augstumu gar līniju. Izliektas līnijas seko līknei. |
| Lineāra līnija, vienumam bez augstuma | Līnija uz lapas. Iestatiet vienumam augstumu sadaļā **Vienums**, lai to paceltu. |
| Laukums, vienumam ar dziļumu | Pārsegs ar šo dziļumu, ar atvērtiem izgriezumiem. |
| Laukums, vienumam bez dziļuma | Plāna 2" plāksne, lai tā būtu redzama. |
| Skaitīšana | Neliels stabs katrā skaitītajā punktā. |

Augstums ir lineāra vienuma lauks {{ui:Height}}, un dziļums ir laukuma vienuma lauks {{ui:Depth}} sadaļā **Vienums** (skatiet [Apjomu aprēķina vienumu izveide](topic:create-items)). Mainiet to, un 3D skats uzreiz atjaunojas. Piezīme zem lapas nosaukuma saka, ko lapa satur, piemēram, "Šī lapa 3D: 2 sienas, 1 pārsegs, 3 skaitīšanas", un cik līniju vai laukumu nav augstuma vai dziļuma. Klikšķi iet cauri tai uz skatu.

Skaitļi 3D skatā nemainās: sienas laukums ir tās precīzais garums reizināts ar augstumu, un pārseguma tilpums ir tā neto laukums (kontūra mīnus izgriezumi, līknes precīzas) reizināts ar dziļumu. Līknes uz ekrāna tiek zīmētas tikai kā īsi taisni posmi.

## Griezties apkārt

| Darbība | Ko tā dara |
|---|---|
| Vilkt, vai vilkt ar vidējo pogu | Griezt apkārt apjomu aprēķinam. |
| {{key:Shift}} + vilkt, vai vilkt ar labo pogu | Panoramēt. |
| Peles ritenītis | Tuvināt un tālināt pie rādītāja. |
| Divu pirkstu vilkšana uz skārienpaliktņa | Griezt apkārt ({{key:Shift}} panoramē). Savilkšana tuvina. |
| {{ui:Iso}}, {{ui:Top}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}}, {{ui:Right}}, {{ui:Bottom}} | Standarta skati, ierāmēti uz apjomu aprēķina. 3D skats atveras {{ui:Iso}}. |
| {{ui:Perspective}} | Perspektīva ieslēgta vai izslēgta (paralēla, kad izslēgta). |
| {{ui:Zoom extents}} vai {{key:F}} | Visa lapa. |
| {{ui:Sheet}} | Parādīt vai paslēpt zīmējumu uz zemes. |
| Skata kubs augšā pa labi | Noklikšķiniet uz sejas, malas vai stūra, lai skatītos no turienes; velciet to, lai grieztu; velciet tā kompasa gredzenu, lai pagrieztu; mājiņas poga atgriež uz {{ui:Iso}}. |

Stūrī rāda skata kubu, nelielu X, Y, Z asu ikonu vai neko: izvēlieties {{ui:Settings}} cilnē TakeoffCraft, sadaļā **Stūra rādītājs** ([TakeoffCraft iestatījumi](topic:settings)). Plakanajai lapai stūra rādītāja nav.

:::touch
Viens pirksts griež apkārt; divi pirksti savelk, lai tuvinātu, un pārvieto, lai panoramētu. Pieskāriens atlasa.
:::

## Sienas ar biezumu, pamatni un atverēm

Lineārs vienums ar augstumu parādās kā plāna josla. Lai to redzētu kā īstu sienu, piešķiriet vienumam formu sadaļā **3D skatā** tā iestatījumos:

- **Sienas biezums** (8", 0.2 m): siena kļūst par cietu ķermeni, centrētu uz līnijas, ko zīmējāt, ar salāgotiem stūriem.
- **Pamata augstums**: siena sākas tik tālu virs grīdas (sofīts, augšējā skapju rinda). Laukuma vienumiem arī ir šis lauks: griesti ar 9'-0".
- **Atveres augšmala**: atskaitīts segments (durvis, [Atskaitīt daļu no līnijas](topic:measure-linear#deduct-a-part-of-a-run)) saglabā sienu virs šī augstuma, tāpēc durvis izskatās kā durvis. Bez tā atskaitīts segments atstāj spraugu līdz augšai.

Tie veido tikai 3D skatu: daudzumi (garums, sienas laukums, izmaksas) paliek tādi, kādi bija.

## Sakraut stāvus

1. Atveriet visu stāvu PDF.
2. 3D skatā izvēlieties {{ui:Levels…}} un ierakstiet katra stāva augstumu, piemēram, `0` pirmajam stāvam un `12'` nākamajam. Tukšs lauks atstāj lapu ārpusē.
3. Izvēlieties {{ui:Stack}}. Katra lapa ar līmeni rāda savu apjomu savā augstumā; ekrānā redzamā lapa atrodas zem sava stāva, pārējās ir iezīmētas ar kontūru. Piezīme saka, cik stāvi ir sakrauti.

Lapas saskaņojas pēc to vietas uz papīra, tāpēc tas darbojas stāvu plāniem, kas izdrukāti vienādi (tāds pats lapas izmērs un pozīcija). Lapa ar līmeni, bet bez mēroga, tiek izlaista, un piezīme to saka. Izvēlieties {{ui:Stack}} vēlreiz, lai redzētu vienu lapu vienlaikus. Līmeņi tiek saglabāti kopā ar apjomu aprēķinu.

## Saglabāt 3D skatu kā attēlu

Izvēlieties {{ui:PNG}} 3D joslā, lai iegūtu attēlu, kāds skats ir ekrānā (`… 3D.png`); {{key:Shift}} + klikšķis uz {{ui:PNG}} padara to divreiz lielāku (`… 3D@2x.png`), drukai.

## Saglabāt 3D skatu kā modeli

Izvēlieties {{ui:GLB}} 3D joslā. Jūs saņemat `.glb` failu (glTF, binārs) ar to, ko skats rāda — ekrānā redzamo stāvu vai visus sakrautos stāvus — ko atver citas 3D programmas: viens objekts katrai atzīmei, nosaukts pēc tās vienuma, vienuma krāsā, metros ar Y uz augšu. Pati lapa un kontūras tajā nav.

## Atlasīt atzīmi no 3D

Noklikšķiniet uz sienas, pārseguma, plāksnes vai staba. Tās atzīme kļūst par **Atlasīto atzīmi**, tieši tāpat kā, ja to būtu noklikšķinājis uz lapas: tā parādās sadaļā **Atlasītā atzīme**, tās vienums kļūst pašreizējais, un statusa josla dod tās garumu un augstumu vai laukumu, dziļumu un kubikjardus. {{key:Shift}} + klikšķis pievieno atzīmes atlasei vai izņem tās. {{key:Delete}} dzēš atlasītās atzīmes, un {{key:Mod+Z}} tās atjauno; {{key:Esc}} neatlasa nevienu. Atpakaļ lapā tās pašas atzīmes paliek atlasītas.

:::tip
Zīmējums seko motīvam: režīmā Modelis lapa uz zemes kļūst tumša kā plakanais skats.
:::
