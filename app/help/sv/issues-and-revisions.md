---
title: Ärenden, revisioner och ändringslogg
summary: Håll en gemensam ärendehistorik med arkitektens modell: läs in ärenden, registrera platsinstruktioner, verkstadsritningar och länkade modeller mot ett ärende och läs ritningens ändringslogg.
keywords: ärende, revision, revisioner, ändringslogg, ritningens ändringslogg, ritningsregister, platsinstruktion, verkstadsritning, länkad modell, anbud, byggnation, ärendehistorik, mängdförteckning, mängdavtagning
from: 8d8f6e68
---

## Vad du gör

Arbeta från samma ärendehistorik som resten av teamet. Se vilka blad som gick ut i vilken revision och håll det som händer på plats kopplat till det ärende det hör till.

## Steg

1. Öppna **Ärenden och revisioner**.
2. Välj **Läs in en ärendehistorik** och välj filen `.issues.json` som sparats från BimCraft eller en annan app. Dess ärenden och poster läggs till i dina. Inget ersätts.
3. Välj **Lägg till en post** för en platsinstruktion, en verkstadsritning, en markeringsuppsättning, en länkad modell eller en anteckning. Välj det ärende den gäller och dess status. En fil du väljer registreras med namn, storlek och SHA-256; filen ligger kvar där den är.
4. **Ritningens ändringslogg** visar en rad för varje blad och en kolumn för varje ärende. En revision inom hakparentes utfärdades igen utan ändring.
5. **Ladda ner ändringsloggen (CSV)** sparar ärendena, bladtabellen och posterna. **Spara ärendehistoriken** skriver en fil som de andra apparna läser.

## Bra att veta

- **Registrera ett ärende** utfärdar dina uppmätta blad, till exempel med en mängdförteckning. **Ändringar sedan** visar sedan vilka blad som mättes om efter det ärendet.
- Historiken sparas i avtagningsfilen. Varje ändring är ett steg att ångra.
- Att läsa in samma fil två gånger lägger inte till något två gånger. När två kopior innehåller samma post behålls den nyare.
