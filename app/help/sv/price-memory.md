---
title: Prisminne från dina tidigare projekt
summary: TakeoffCraft kommer ihåg de á-priser du använde i tidigare mängdavtagningar, bara på den här datorn, så att en ny mängdavtagning kan börja med vad du betalade senast. Se det, använd det, glöm det.
keywords: prisminne, priser, kom ihåg priser, senaste jobbet, tidigare jobb, typiskt pris, median, á-priser, oprissatta, räkna om, lär från en tidigare mängdavtagning, glöm, bibliotek
from: 7279f1a1
---

{{ui:Priser}} i verktygsfältet (dollartecknet) öppnar det TakeoffCraft kommer ihåg om de priser du använt. Det är en enkel lista: för varje postnamn, á-priserna från dina senaste jobb. Den sparas i den här webbläsaren (i Studio, i sin egen webbvy) bredvid prisbiblioteket, aldrig i en mängdavtagningsfil, och inget skickas någonstans. Det är ingen tränad modell.

## Vad som sparas

När du sparar en mängdavtagning kommer varje post som har ett pris och används (den har ett märke, eller en inskriven mängd över noll) ihåg under sitt namn och typ: materialets á-pris, arbetets á-pris, spill och enhet. Ett jobb är de ritningsfiler det tas av, så om du sparar samma mängdavtagning igen ersätts dess egna priser i stället för att ett nytt jobb läggs till. De senaste 12 jobben behålls för varje namn.

För att börja med ditt äldre arbete, välj {{ui:Lär från en tidigare mängdavtagning…}} och välj en sparad mängdavtagning (.json). Dess prissatta, använda poster kommer ihåg på samma sätt.

Namn matchar när deras ord matchar, oavsett versaler eller skiljetecken (”2x4 Stud, 8 ft” och ”2x4 stud 8 FT” är samma). Samma ord för en annan typ av post (en linjär post och en räkningspost) är inte samma pris.

## Använd det i en ny mängdavtagning

1. Skapa posterna i den nya mängdavtagningen.
2. Välj {{ui:Priser}}. Under {{ui:Den här mängdavtagningen}} ser du varje post som har ett ihågkommet pris, vad du har på den nu, senaste jobbets á-priser, de typiska á-priserna (mitten av de ihågkomna jobben) och spannet.
3. Välj {{ui:Använd senaste}} eller {{ui:Använd typiskt}} på en post, eller Prissätt N oprissatta poster från minnet för att fylla varje post som ännu inte har något pris med senaste jobbets pris.

Varje användning är ett steg: {{key:Ctrl+Z}} tar tillbaka den. En post som bara har ett liknande namn (ett namn inuti ett annat) anges, och knapparna använder det liknande namnets á-priser. Ett pris som ihågkommits per styck används aldrig på en post per fot: dialogrutan säger att enheterna skiljer sig och lämnar den orörd.

## Se det, ändra det, glöm det

{{ui:Allt som är ihågkommet}} listar varje namn med dess priser och antalet jobb. Papperskorgsknappen glömmer ett namn; {{ui:Rensa alla priser}} glömmer dem alla. Stäng av {{ui:Kom ihåg mina priser när jag sparar en mängdavtagning}} för att sluta komma ihåg; det som redan finns kvar tills du glömmer det. Dina mängdavtagningar och prisbiblioteket berörs aldrig.

## Med din assistent

Om du tillåter assistenter i Inställningar kan de läsa vad som ihågkommits för mängdavtagningens poster (prices_list) och prissätta poster från det (prices_apply, som kan förhandsgranskas först). Det är samma lista som i dialogrutan.
