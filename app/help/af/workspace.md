---
title: Die TakeoffCraft-skerm
summary: 'n Toer deur die venster volgens skermnaam - die nutsbalk, die bladlys, die blad, die Items-paneel, die Hoeveelhede-tabel en die statusbalk.
keywords: skerm, uitleg, uitlegte, lint, projekbladeerder, gereedskapkas, inligtingskassie, nutsbalk, paneel, bladlys, items-paneel, hoeveelhede, statusbalk, toer, koppelvlak
from: ab1115e0
---

TakeoffCraft vul die blaaiervenster onder die CadCraft-programbalk. Van bo na onder en links na regs:

| Deel | Waar | Waarvoor dit is |
|---|---|---|
| Programbalk | Heel bo | Die programnaam, die weergawe, {{ui:Oor TakeoffCraft}}, {{ui:Hulp}} ({{key:F1}}), {{ui:Stoor vir vanlyn}}, {{ui:Instellings}} ({{key:Mod+,}}), die {{ui:Volskerm}}-knoppie en die {{ui:Papier}} / {{ui:Model}}-temaskakelaar. |
| Nutsbalk | Onder die programbalk | Elke opdrag, in groepe: {{ui:Lêer}}, {{ui:Uitvoer}}, {{ui:Skaal}}, {{ui:Hoeveelheidsopname}}, {{ui:Wysig}}, {{ui:Aansig}}. |
| Blaaie | Links | Elke bladsy van elke oop PDF, met 'n miniatuur, sy skaal en sy merketelling. |
| Die blad | Middel | Die oop bladsy. Jy meet hier. |
| Items | Regs | Jou hoeveelheidsopname-items, die gekose item se instellings, en die gekose merk. |
| Hoeveelhede | Onder | Hoeveelhede en koste per item of per blad, en die projektotaal. |
| Statusbalk | Heel onder | Die lewendige meting, boodskappe, die 45°-wenk en die zoem. |

## Die nutsbalk

Hou die muis oor enige knoppie om te sien wat dit doen en wat die sleutel is.

| Groep | Knoppies |
|---|---|
| {{ui:Lêer}} | {{ui:Nuut}} (leë hoeveelheidsopname), {{ui:Maak PDF's oop}} ({{key:Mod+O}}), {{ui:Maak hoeveelheidsopname oop}} ('n `.takeoff.json`-projek), {{ui:Stoor hoeveelheidsopname}} ({{key:Mod+S}}) |
| {{ui:Uitvoer}} | Een kieslys: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Gemerkte PDF}} |
| {{ui:Skaal}} | {{ui:Kalibreer}} ({{key:K}}), {{ui:Kontroleer}} ({{key:D}}), en die {{ui:Voorinstelling}}-lys |
| {{ui:Hoeveelheidsopname}} | {{ui:Kies}} ({{key:V}}), {{ui:Lineêr}} ({{key:L}}), {{ui:Oppervlakte}} ({{key:A}}), {{ui:Sirkel}} ({{key:O}}), {{ui:Boog}} ({{key:R}}, 'n aan/af-skakelaar), {{ui:Aftrek}} ({{key:E}}, 'n aan/af-skakelaar), {{ui:Uitsnyding}} ({{key:X}}), {{ui:Tel}} ({{key:C}}), {{ui:Outo-tel}} ({{key:S}}) |
| {{ui:Wysig}} | {{ui:Ontdoen}} ({{key:Mod+Z}}), {{ui:Herdoen}} ({{key:Mod+Y}}), {{ui:Kopieer}} ({{key:Mod+C}}), {{ui:Plak}} ({{key:Mod+V}}), en {{ui:Meer}}: {{ui:Knip}}, {{ui:Kopieer}}, {{ui:Plak}}, {{ui:Plak op dieselfde plek}}, {{ui:Dupliseer}}, {{ui:Skrap}}, {{ui:Kies alles}}, {{ui:Kies niks}} |
| {{ui:Aansig}} | {{ui:Pas bladsy}} ({{key:F}}), {{ui:Pas breedte}} ({{key:W}}) |

Die gereedskap wat jy gebruik, word ingedruk gewys. Die {{ui:Boog}}- en {{ui:Aftrek}}-knoppies bly ingedruk solank hulle aan is.

## Blaaie (links)

- **Soek blaaie** filtreer die lys volgens bladnaam, lêernaam of bladsy-etiket.
- Elke blad wys 'n miniatuur (wat geteken word terwyl jy rol), sy naam, en óf sy skaal óf **Geen skaal**.
- Die regterkant van elke ry wys hoeveel merke die blad het. Terwyl 'n item uitgelig is, wys dit hoeveel van daardie item se merke op die blad is.
- Klik op 'n blad om dit oop te maak. {{key:PageDown}} en {{key:PageUp}} beweeg na die volgende en vorige blad in die lys.
- Wanneer 'n hoeveelheidsopname PDF's dek wat nie oop is nie, noem 'n nota onder die lys hulle. Sien [Stoor en heropen 'n hoeveelheidsopname](topic:save-and-reopen).

Bladname kom uit die PDF: 'n bladsy-etiket soos `A-101` word die bladnaam. 'n Bladsy sonder etiket kry die naam van sy lêer en sy bladsynommer, soos "Planne, bladsy 3". Met verskeie PDF's oop wys etiketblaaie ook die lêernaam.

## Die blad (middel)

- Die balk onder die blad wys die bladnaam en sy skaal, of "Nog geen skaal nie: kies 'n voorinstelling of kalibreer". Die knoppies daarop is {{ui:MarkupCraft}} (wanneer daardie program die PDF kan neem; sien [Begin 'n hoeveelheidsopname en maak 'n planstel oop](topic:open-plan-set)), {{ui:Vergelyk}} ('n ouer weergawe van die blad oor hierdie een; sien [Vergelyk 'n hersiene blad](topic:compare-revisions)), "(n) om te kontroleer" (gemerkte merke, wanneer daar is), en {{ui:3D}} (die [3D-kontrole-aansig](topic:check-in-3d)).
- Voordat enige PDF oop is, wys die middel 'n kort vyfstap-gids.
- Die muiswiel zoem by die aanwyser. Sleep om te skuif. Sien [Sleutelbord en muis](topic:keyboard).
- Terwyl jy {{ui:Outo-tel}} gebruik, verskyn 'n balk met sy kontroles bo-op die blad.

## Items (regs)

Bo-aan die {{ui:Tenderarea}}-lys: die gebou, vloer of fase waarin nuwe merke gaan ([Tenderareas](topic:bid-areas)).

- {{ui:Nuwe item}} maak 'n klein vorm oop: 'n naam, 'n tipe ({{ui:Lineêr (lengte)}}, {{ui:Oppervlakte}} of {{ui:Tel}}) en {{ui:Voeg by}}.
- Die lys wys elke item se kleur, tipe-ikoon, naam en hoeveelheid. Klik op 'n item om daarmee te teken en sy merke op elke blad uit te lig. Klik weer om uitlig te stop.
- Onder die lys is **Item: (naam)** die item-redigeerder: naam, tipe, kleur, eenheid, hoogte of diepte, afval, materiaal- en arbeidstariewe, die gemete waardes, en die {{ui:Samestelling}}. Sien [Skep hoeveelheidsopname-items](topic:create-items).
- **Gekose merk** verskyn wanneer jy 'n merk kies: watter item dit behoort, sy blad, sy metings, en knoppies soos {{ui:Voeg ’n uitsnit by}} en {{ui:Skrap merk}}. Met verskeie merke gekies word dit **Gekose merke**: hoeveel van elke item, en {{ui:Kopieer}}, {{ui:Dupliseer}}, {{ui:Knip}} en {{ui:Skrap merke}}.
- Die item-redigeerder eindig met {{ui:Kopieer item}} en {{ui:Dupliseer item}}: 'n item met sy samestelling en koste, sonder merke. Sien [Kopieer, plak en dupliseer merke](topic:copy-paste).

## Hoeveelhede (onder)

- {{ui:Per item}} lys elke item en sy samestellingskomponente met hoeveelheid, afval, tariewe en uitgebreide koste. Jy kan afval en tariewe direk in die tabel tik.
- {{ui:Per blad}} lys elke item se hoeveelheid op elke blad.
- 'n Waarskuwing wat met **Onvolledig:** begin, verskyn wanneer iets uit die totale gelaat is.
- {{ui:Projektotaal}} is regs van die kopstuk.
- Die pyltjieknop heel regs verberg of wys die tabel om die blad meer ruimte te gee.

Sien [Lees hoeveelhede en die beraming](topic:read-quantities).

## Statusbalk (onder)

Van links na regs: die lewendige meting terwyl jy teken (lengte, oppervlakte, radius of 'n kontrole-uitslag), die {{ui:Tipe}}-kassie terwyl jy 'n lengte tik, boodskappe van TakeoffCraft, die herinnering "Shift vang by 45°" (of "Vang by 45°; Shift maak die hoek vry" wanneer dit aan is in [Instellings](topic:settings)), die {{ui:Vasvang}}-knoppie (vasvang aan die tekening se lyne, aan wanneer dit uitgelig is; {{key:F3}}), en die zoem-persentasie.

:::tip
Lees die statusbalk wanneer iets nie gebeur nie. TakeoffCraft verduidelik daar waarom dit 'n klik geweier het, byvoorbeeld "Hierdie blad het nog geen skaal nie".
:::

## Ander uitlegte

Alles hierbo is die {{ui:CadCraft klassiek}}-uitleg, die begin. {{ui:Instellings}} ({{key:Mod+,}}) › {{ui:Globaal}} › {{ui:Uitleg}} bied twee meer aan; dieselfde gereedskap en sleutels werk in al drie, en as jy {{ui:CadCraft klassiek}} weer kies, keer elke beheer terug na waar dit was.

| Uitleg | In TakeoffCraft |
|---|---|
| {{ui:Lint en projekbladeerder}} | Die {{ui:Hoeveelheidsopname-lint}} oor die bo ([Kieslyste, sleutels en muis](topic:menus-keys-and-mouse)), 'n balk vir die lopende gereedskap, 'n oortjie vir elke blad wat jy oopmaak ('n tekening se Model en uitlegte is ook blaaie), met die skaalvoorinstellings en {{ui:Pas bladsy}} onder die blad. Die linkerpaneel hou {{ui:Eienskappe}} (die gekose item, nota of merk) bo die {{ui:Hoeveelheidsopname-blaaier}}: {{ui:Blaaie}} (klik een om dit in 'n oortjie oop te maak), {{ui:Voorwaardes}} (klik een om daarmee te teken) en {{ui:Beraming}} (elke item se totaal en die projektotaal); die miniatuurs is sy tweede oortjie. |
| {{ui:Gereedskapkas en inligtingskassie}} | Die nutsbalk oor die blad, 'n inligtingskassie met die {{ui:Tenderarea}}, die lopende gereedskap of die keuse, en die bladbalk, 'n kolom van die hoeveelheidsopname-gereedskap links, 'n oortjie vir elke blad, en {{ui:Vasvang}} en die zoem onder die blad. |

Terwyl die [3D-kontrole-aansig](topic:check-in-3d) oop is, skuif die bladoortjies en die balk onder die blad opsy; maak die 3D-aansig toe om weer te meet. Op 'n foon loop die foonuitleg altyd.

## Volskerm en temas

Die {{ui:Volskerm}}-knoppie in die programbalk, of {{key:Ctrl+Shift+F}} (Control op elke platform, ook op 'n Mac), wissel deur normaal, volskerm, en volskerm met die balke versteek. Met die balke versteek, skuif die aanwyser na die boonste rand om hulle weer te wys.

{{ui:Papier}} is die ligte tema en {{ui:Model}} die donker een. In {{ui:Model}} word die tekening omgekeer (ligte lyne op donker), net op die skerm; uitvoere word nooit verander nie.
