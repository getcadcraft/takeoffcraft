---
title: Anbudspaket och anbudsjämförelse
summary: Dela upp kalkylen i paket efter bransch, skicka varje pakets omfattning till underentreprenörer, jämför de anbud som kommer tillbaka på samma omfattning och använd det valda anbudet som paketets pris.
keywords: anbudsjämförelse, jämförelse, anbudspaket, underentreprenör, underentreprenadanbud, omfattning, utfyllnad, bransch, csi-division, jämför anbud, lägsta anbud, anbudstabell, anbudsgivare, tilldelning, valt anbud, använd ett anbud, underentreprenadpris
from: 856b3088
---

En generalentreprenör skickar varje branschs omfattning till underentreprenörer och jämför det som kommer tillbaka. TakeoffCraft gör båda från mätningen: öppna {{ui:Exportera}} › {{ui:Anbudspaket och jämförelse…}}.

## Paket

Det finns ett paket för varje CSI-division som dina poster använder (de två första siffrorna i en posts {{ui:CSI-nummer}}, se [Skapa mätningsposter](topic:create-items)). Poster utan nummer får ett eget paket. Varje paket visar sina poster, hur många blad deras märken ligger på, och vår egen kostnad för det (material och arbete före påslag, från grundanbudet).

Välj {{ui:Omfattnings-CSV}} för att hämta det du skickar till en underentreprenör: varje post med dess CSI-nummer, mängd, enhet och de blad den ligger på. Den har inga priser. För materialleverantörer har arbetsbokens offertförfrågan delförteckningen (se [Exportera kalkylen](topic:export-estimate)).

## Ange anbuden

1. I den tomma raden under paketet skriver du anbudsgivarens namn och anbudsbeloppet, och väljer {{ui:Lägg till anbudet}}.
2. Om ett anbud utelämnar en del av omfattningen, öppnar du dess lista {{ui:Utelämnat}} och bockar i de posterna.
3. För att rätta ett namn eller ett belopp skriver du över det i tabellen; knappen × tar bort ett anbud.

Varje ändring är ett steg som {{key:Mod+Z}} tar tillbaka, och anbuden sparas tillsammans med mätningen.

## Hur anbuden jämförs

Anbud täcker sällan samma omfattning. Jämförelsen fyller i varje utelämnad post med en **utfyllnad** till vårt eget pris för den, så att varje anbud jämförs på hela paketet:

**Jämförd = anbudet + utfyllnaderna**

Det lägsta jämförda anbudet markeras **Lägst**; vid lika belopp gäller det som angavs först. **Mot vår kostnad** är det jämförda anbudet minus vår egen kostnad för paketet: negativt betyder under den. Ett anbud som ser lägst ut kan förlora när den saknade omfattningen räknas in.

Arbetsboken får ett kalkylblad **Anbudsjämförelse** med varje paket som har anbud: vår kalkyl, varje anbud, dess utfyllnader, den jämförda totalen och skillnaden, som levande formler, och vad varje anbud utelämnar.

## Använd ett anbud som paketets pris

Välj {{ui:Använd}} på ett anbud, så blir det priset för hela paketet i din kalkyl: paketets egen prissättning (posterna, deras tilläggsvillkor och sammansättningsdelar) faller ur jobbets summa, posterna står kvar som mängder med dina egna priser som referens, och en rad, **Valt anbud**, bär anbudets belopp. Poster som anbudet utelämnar står kvar till din egen kostnad, vilket jämförelsen redan räknat som utfyllnad. Välj ett annat anbud, eller välj samma igen för att ta tillbaka det; varje val är ett steg som {{key:Mod+Z}} ångrar.

I anbudssammanställningen är underentreprenadanbuden en rad inom kostnaden: Overhead, vinst och borgen läggs till ovanpå dem som på alla andra kostnader; försäljningsmoms (endast på material) och lönebikostnad (på arbete) gör inte det. Arbetsbokens kalkylblad har det valda anbudet som en egen rad, och påslagsblocket lägger till det, med levande formler. Materiallistan utelämnar en tilldelad pakets material, eftersom underentreprenören levererar det.

En post i ett alternativs anbudsområde räknas inte om: alternativ och delsummor för anbudsområden använder fortfarande dina egna priser.

## Anbud som kommer tillbaka via e-post

Du behöver inte skriva in anbuden. {{ui:Skicka för anbud…}} under ett paket mailar varje underentreprenör en länk till en sida där de skriver ett pris för varje rad; {{ui:Hämta priser}} hämtar det de skickat till den här tabellen. Se [Skicka ett paket för anbud](topic:bid-invitations).

:::note
Att skriva in ett anbud för hand fungerar fortfarande, och ett handskrivet anbud och ett från webbplatsen står sida vid sida. Anbud som kommit tillbaka från webbplatsen markeras **webb** (eller **webb, försenat** om de kom efter förfallotiden). Deras pris ändras bara när anbudsgivaren skickar en ny version, så dina egna ändringar i det står kvar tills dess.
:::
