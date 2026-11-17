---
title: Athugasemdir, ský og áherslur
summary: Merktu spurningar og breytingar á blöðunum með athugasemdum, endurskoðunarskýjum og áherslum, fylgstu með hverri sem opinni, svaraðri eða lokaðri og sendu þær í merktu PDF-skránni.
keywords: merking, merkingar, athugasemd, athugasemdir, spurning, rfi, ský, endurskoðunarský, áhersla, staða, opin, svarað, lokuð, yfirferð, listi merkinga
from: 2b395c13
---

Merkingar eru fyrir það sem þú þarft að muna eða spyrja um meðan þú magntekur: „staðfesta gerð undirstöðu“, endurskoðunarský utan um breytta vegg, áherslumerkta athugasemd á teikningunni. Þær sitja á blaðinu með stöðu, eru skráðar á einum stað og prentast í merktu PDF-skránni. Þær eru **aldrei taldar**: hvorki magn né kostnaður.

## Bæta við

Opnaðu {{ui:Merking}} á stikunni fyrir ofan blaðið og veldu:

| Merking | Hvernig |
|---|---|
| {{ui:Athugasemd}} | Smelltu þar sem hún á að vera, skrifaðu athugasemdina og veldu {{ui:Bæta við}}. Hún birtist sem hringlaga nál með fyrstu línu sinni við hliðina. |
| {{ui:Ský}} | Smelltu á eitt horn, síðan það gagnstæða, og skrifaðu athugasemd (eða skildu hana eftir auða). Bylgjulaga endurskoðunarský fer utan um kassann. |
| {{ui:Áherslulitur}} | Smelltu á tvö horn: gegnsær gulur kassi, með athugasemd ef þú vilt. |

{{key:Esc}} eftir fyrsta horn hættir við. Verkfærið helst virkt fyrir þá næstu; {{key:V}} fer aftur í {{ui:Velja}}.

## Staða og breytingar

Smelltu á merkingu með {{ui:Velja}} til að velja hana. Hægri spjaldið sýnir **Merking**: tegund hennar og blað, **Staða** hennar — Opin, Svarað eða Lokuð — og texta hennar, sem þú getur breytt. {{key:Delete}} (eða {{ui:Eyða}}) fjarlægir hana; {{key:Mod+Z}} færir hana aftur.

Nál athugasemdar er appelsínugul meðan hún er opin, blá þegar henni hefur verið svarað og grá þegar hún er lokuð; lokað ský verður grátt.

## Listinn

**Merkingar** í hægra spjaldinu lista allar merkingar magntökunnar með stöðu sinni og segja hversu margar eru enn opnar. Hakaðu við **Aðeins opnar** til að sjá það sem eftir er að ljúka. Smelltu á línu til að fara á blaðið hennar og velja hana.

## Deildu þeim

- {{ui:Merkt PDF}} teiknar þær á síðunum: áherslur, ský og nálar, hver með kassa sem gefur stöðu hennar með hástöfum (OPIN, SVARAÐ, LOKUÐ) og textann sinn. Síða með merkingum en engum magntökumerkjum er einnig tekin með.
- {{ui:XLSX}} bætir við vinnublaðinu **Merkingar**: blað, tegund, stöðu og texta, ein röð fyrir hverja.
- Þær eru vistaðar í `.takeoff.json` og í [PDF-skrá með magntökunni inni](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
