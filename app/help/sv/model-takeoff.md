---
title: Gör mängdavtagning från en byggnadsmodell
summary: Öppna arkitektens IFC-modell, se den i 3D, välj väggar, golv, dörrar och övrigt efter typ, material, lager eller storlek, och för över deras antal, längder, areor och volymer till mängdavtagningen. En nyare kopia av modellen uppdaterar samma mängder.
keywords: modell, modellmängdavtagning, 3d-vy, klicka på en del, hitta raden, material, lager, väggskikt, gipsskiva, isolering, dörrstorlekar, fönsterstorlekar, öppningsförteckning, csv, 3d, bim, ifc, rvt, byggnadsmodell, mängder, väggar, golv, dörrar, fönster, pelare, rum, efter typ, efter nivå, uppdatering, nyare modell, projekteringsskede
from: 8c4c12c9
---

Du behöver inte vänta på nästa ritningsset. När arkitekten skickar byggnadsmodellen öppnar du den här och tar mängderna direkt från den. Modellen läses på din dator; ingenting skickas någonstans.

## Steg

1. Välj {{ui:Model}} i verktygsfältet och välj modellens `.ifc`-fil, eller öppna den med {{ui:Open plans}} som vilken annan fil som helst.
2. {{ui:Model takeoff}} öppnas med en rad per kategori och typ: väggar efter väggtyp, golv efter golvtyp, dörrar efter dörrtyp, och så vidare. Varje rad visar sitt antal och vad kategorin mäts i.
3. Ställ in {{ui:Group by}} på {{ui:Category}} för en snabb summa, eller på {{ui:Category, type and level}} för att dela upp varje typ per våningsplan.
4. Avmarkera de rader du inte vill ha. {{ui:Find}} smalnar av listan. Att avmarkera en rad döljer också dess delar i 3D-bilden.
5. Ge modellen ett {{ui:Model name}} som du behåller under hela jobbet, till exempel projektets namn.
6. Välj {{ui:Add to the takeoff}}. Varje mängd blir en typad mängd i postlistan. Namnge den, prissätt den och koppla kalkylsammansättningar precis som för andra poster.

## Se modellen i 3D

{{ui:Show the model in 3D}} ritar modellen ovanför tabellen, med en färg för varje rad (färgrutan bredvid radens namn). Dra för att vrida den, håll ned {{key:Shift}} och dra för att flytta den, använd hjulet för att zooma, och välj {{ui:Fit}} eller {{ui:Reset}} för att komma tillbaka.

- **Klicka på en del** i bilden så väljs dess rad i tabellen, med alla delar i raden belysta och resten blekt. Klicka på samma del igen och, om den ligger i flera rader (en vägg i sina skikt), väljs nästa rad.
- **Klicka på en rad** i tabellen för att belysa dess delar. Klicka igen, eller klicka på tomt utrymme i bilden, för att rensa.
- Rum ritas inte, eftersom ett rums volym skulle dölja byggnaden.
- En mycket stor modell behåller bara en låda för vissa delar så att den ryms i minnet; panelen säger hur många. Siffrorna ändras inte.

Om den här datorn inte kan rita 3D fungerar tabellen som tidigare.

## Gruppera efter material, lager eller storlek

{{ui:Group by}} har tre fler val:

- {{ui:Category and material}}: en vägg, ett golv eller ett tak byggt av skikt ger varje skiktets material en egen rad, så att gipsskiva, reglar och isolering kan prissättas var för sig. En del av byggnaden med ett material får den materialets rad, och en del utan material hamnar i en rad som heter "Inget material angivet".
- {{ui:Category and layer}}: samma sak, med skiktets tjocklek i raden ("Isolering, 100 mm").
- {{ui:Category, type and door or window size}}: dörrar och fönster delas upp efter bredd och höjd (till exempel 3'-0" × 6'-8" eller 914 × 2,032 mm).

För ett skikt är arean väggens egen yta (eller golvets eller takets planarea eller ytarea) och volymen är den arean gånger skiktets tjocklek. Radens notering säger hur många tal som kom från ett skikt. Skikten i en vägg adderas till den volym modellen anger för den.

## Spara raderna eller öppningarna som CSV

{{ui:Save rows as CSV}} sparar de rader du har markerat, med enheterna i varje rubrik, för ett kalkylblad. {{ui:Save openings schedule as CSV}} (bara när modellen har dörrar eller fönster) sparar varje dörr och fönster efter typ, nivå och storlek med sitt antal.

## Vad som mäts

| Kategori | Mängder |
|---|---|
| Väggar | antal, längd, väggarea (en sida, öppningar borträknade), volym |
| Golv, bjälklag, undertak och andra beklädnader | antal, planarea, volym |
| Tak | antal, planarea, takyta, volym |
| Grunder | antal, planarea, volym |
| Pelare, balkar och stänger | antal, längd längs elementet, volym |
| Räcken, rör, kanaler och kabeldragningar | antal, längd |
| Trappor | antal, volym |
| Rum | antal, golvarea, volym |
| Dörrar, fönster och allt annat | antal |

Där modellens författare angett en mängd i filen används det talet. Annars mäts talet från elementets form. Varje mängd har en notering som säger vilket, och hur många element som gav ett tal.

:::note
En väggs längd mätt från dess form går från ände till ände, så två väggar som överlappar i ett hörn räknar båda med hörnet. En volym kräver en sluten form: ett element vars form inte är sluten räknas men ger ingen volym. Ett krökt eller hörnformat väggelement mäts som hälften av alla dess stående ytor, och dess notering säger det.
:::

## När en nyare modell kommer

Öppna den nyare filen och skriv samma {{ui:Model name}}. Innan du lägger till något säger panelen hur många mängder som är nya, hur många som ändrats och från vad till vad, och vilka mängder från den tidigare kopian som inte längre finns i modellen. Välj {{ui:Add to the takeoff}}: de ändrade mängderna får sina nya tal, och dina namn, priser, spill och kalkylsammansättningar står kvar. Mängder som är borta från modellen behåller sina gamla tal; ta bort dem själv om konstruktionen tagit bort dem.

Typ- och nivånamn är hur en mängd känns igen. Om arkitekten byter namn på en väggtyp kommer den som en ny mängd, och den gamla listas som borttagen.

## Filer som läses

IFC-filer (IFC2x3, IFC4 och IFC4.3). En IFC-fil med vägar, järnvägar eller broar hämtar fortfarande in sina infrastrukturmängder direkt, som tidigare.

TakeoffCraft läser inte `.rvt`-filer i den här versionen. Om arkitekten arbetar i Revit, be om en IFC-export av modellen (Arkiv, Exportera, IFC) och öppna den.

En modell kan föra in upp till 500 mängder åt gången. Om det finns fler, avmarkera rader eller gruppera efter kategori.
