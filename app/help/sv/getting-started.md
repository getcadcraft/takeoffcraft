---
title: Komma igång med TakeoffCraft
summary: Vad TakeoffCraft gör, var det körs och din första uppmätta och prissatta post från en PDF-ritningsuppsättning.
keywords: start, första mängdavtagningen, snabbstart, introduktion, kalkyl, mängdavtagning, ritningsuppsättning, pdf
from: 3b9da1fb
---

TakeoffCraft mäter ritningsuppsättningar, PDF-filer och DWG- eller DXF-ritningar, och gör måtten till en prissatt kalkyl. Du öppnar filerna (en ritning räknas direkt från sina block: se [Öppna en DWG- eller DXF-ritning](topic:open-a-drawing)), ger varje blad en skala (en ritning har sin egen), skapar **poster** (en väggtyp, en golvbeklädnad, en armatur) och klickar på bladen för att ta av dem. Mängder, kostnader och jobbets summa uppdateras allt eftersom. Du kan exportera kalkylen som ett kalkylblad och en kopia av PDF-filerna med din mängdavtagning inritad.

Om du har gjort mängdavtagning i andra program, läs [Om du kommer från annan mängdavtagningsprogramvara](topic:coming-from) härnäst. Vissa saker fungerar annorlunda här.

## Var det körs

TakeoffCraft körs i din webbläsare. Öppna TakeoffCraft så är skärmen redo direkt; det finns inget att installera.

- **Dina PDF-filer stannar på din dator.** De öppnas av webbläsaren och laddas aldrig upp. Att spara är en nedladdning.
- Det fungerar i aktuella versioner av Chrome, Edge, Firefox och Safari. Se [Webbläsare och datorer](common:browsers).
- Det fungerar utan internetanslutning när du har valt {{ui:Spara för offline}} i appfältet och det står {{ui:Redo för offline}}. Se [Arbeta offline](common:offline).
- Molnsparande finns inte ännu. Som skrivbordsapp ingår TakeoffCraft i CadCraft Studio, tillsammans med de andra sju apparna.

## Din första mängdavtagning i tio steg

Den här genomgången mäter en väggtyp och prissätter den. Det tar några minuter på vilken ritning du har.

1. Välj {{ui:Öppna ritningar}} i gruppen {{ui:Fil}} i verktygsfältet (eller tryck på {{key:Mod+O}}), välj en eller flera PDF-filer och välj Öppna. Du kan också släppa PDF-filerna var som helst på sidan.
   Bladen visas till vänster och det första bladet öppnas i mitten.
2. Hitta bladets tryckta skala i dess ritningshuvud eller under en ritningstitel.
3. Öppna listan {{ui:Förval}} i gruppen {{ui:Skala}} och välj den skalan, till exempel `1/4" = 1'-0"`.
   Fältet längst ned på bladet säger nu ”Skala 1/4" = 1'-0"”.
4. Välj {{ui:Kontrollera}} (eller tryck på {{key:D}}) och klicka på de två ändarna av ett mått som är tryckt på ritningen.
   Avläsningen i statusfältet längst ned till vänster ska stämma med det tryckta måttet. Om den inte gör det, se [Ange skalan](topic:set-the-scale).
5. I panelen {{ui:Poster}} till höger väljer du {{ui:Ny post}}, skriver ett namn som `Innervägg typ A`, låter typen vara {{ui:Linjär (längd)}} och väljer {{ui:Lägg till}}.
6. Välj {{ui:Linjär}} i verktygsfältet (eller tryck på {{key:L}}).
7. Klicka på början av en vägg och sedan på varje hörn längs den. Dubbelklicka, tryck på {{key:Enter}} eller högerklicka för att avsluta sträckan.
   Sträckan ritas i postens färg och dess längd visas bredvid posten.
8. I postredigeraren under {{ui:Poster}} skriver du `9'-0"` i {{ui:Höjd}}, `0.85` i {{ui:Material $/LF}} och `1.20` i {{ui:Arbete $/LF}}.
   Tabellen {{ui:Mängder}} längst ned visar längden, utökat material och arbete samt {{ui:Jobbets summa}}.
9. Välj {{ui:Spara avtagning}} (eller tryck på {{key:Mod+S}}).
   Webbläsaren laddar ner en `.takeoff.json`-fil. Den innehåller dina poster, skalor och markeringar, och öppnas igen ovanpå samma PDF-filer.
10. Öppna menyn {{ui:Exportera}} i verktygsfältet och välj {{ui:XLSX}} för att ladda ner kalkylen som ett kalkylblad.

:::tip
Tryck på {{key:Esc}} för att avbryta det du gör och gå tillbaka till verktyget {{ui:Markera}}. {{key:Mod+Z}} ångrar vilken ändring som helst.
:::

## Vad du läser härnäst

- [TakeoffCraft-skärmen](topic:workspace) namnger varje del av fönstret.
- [Starta en mängdavtagning och öppna en ritningsuppsättning](topic:open-plan-set) behandlar flera PDF-filer och bladlistan.
- [Skapa poster för mängdavtagning](topic:create-items) förklarar typer, enheter, spill och priser.
- [Sammansättningar och formler](topic:assemblies) gör ett mått till reglar, skivor och mer.
- [Tangentbord och mus](topic:keyboard) listar varje tangent.
