---
title: Saknade priser och signering av kalkylen
summary: Se vilka rader i kalkylen som har en mängd men inget pris, signera kalkylen under ditt namn så att filen registrerar vem, när och vilken summa, och klicka på en siffra för att markera de markeringar den kommer från.
keywords: kalkyl, signering, signera, signerad, godkänna, godkännande, saknat pris, inget pris, oprissatt, pris, summa, kvantitetsingenjör, protokoll, granskning, markera markeringar, siffra, spåra
from: 9acf71ef
---

## Vad du ska göra

Kontrollera att varje rad i kalkylen är prissatt, och skriv sedan ditt namn under den. Avtagningsfilen registrerar vem som signerade, när, och för vilken summa.

## Rader utan pris

Under **Mängder › Per post** har en rad som har en mängd men inget material- eller arbetspris **inget pris**, och fältet ovanför tabellen säger hur många det finns. En sådan rad tillför ingenting till summan. En post utan eget pris flaggas inte när en av dess komponenter är prissatt: en kalkylsammansättning prissätts via sina delar. Den exporterade kalkylen skriver **Inget pris** i kolumnen Anteckningar för varje sådan rad och räknar dem.

## Signera kalkylen

1. Klicka på **Signera kalkylen** ovanför tabellen Mängder.
2. Dialogrutan anger summan du signerar och listar raderna utan pris. Skriv ditt namn och, om du vill, din roll.
3. Klicka på **Signera**. Fältet säger nu "Signerad av … den …" med summan. Spara avtagningen för att behålla signeringen i filen.

Signeringen gäller de siffror du signerade. Varje senare ändring av en mängd, ett pris eller en rad rensar den, och TakeoffCraft säger till. Ångra återställer kalkylen du signerade, och dess signering med den. Att byta namn på en rad är inte en ändring av en siffra. **Ta bort signeringen** tar bort den.

En avtagningsfil som redigerats utanför TakeoffCraft efter att den signerats öppnas utan signeringen, med en anteckning om det. Den exporterade kalkylen (CSV och XLSX) anger signeringen under summorna.

Bara en person kan signera. En AI-assistent kan läsa om kalkylen är signerad och vilka priser som saknas; den kan inte signera.

## Klicka på en siffra för att se var den kommer ifrån

Klicka på en mängd eller ett belopp på en rad för att markera de markeringar den mättes från. När de är på ett annat blad öppnas det bladet. Klicka på en siffra på raden **Jobbsumma** för att markera varje markering på bladet. En inskriven mängd har inga markeringar.

## Bra att veta

- Signeringen registrerar ett namn så som det skrivits in. Det är en post i filen, inte en elektronisk signatur.
- Med budpaket tilldelade underentreprenörer eller alternativ i avtagningen är summan som signeras grundanbudet, som visas som **Jobbsumma**.
