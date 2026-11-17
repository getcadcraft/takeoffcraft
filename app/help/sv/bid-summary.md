---
title: Anbudssammanställning och offert
summary: Lägg till lönebikostnad, försäljningsmoms, overhead, vinst och borgen i kalkylen, skriv inkluderat och exkluderat, och ladda ner en offert-PDF att skicka.
keywords: anbud, lönebikostnad, bikostnad, lönekostnad, offert, overhead, vinst, påslag, marginal, försäljningsmoms, borgen, ingår, ingår inte, villkor, signatur, beställare, pris
from: 3208a561
---

Kalkylen prissätter det du mätt upp. **Anbudssammanställningen** gör den till ett pris: den lägger till försäljningsmoms, overhead, vinst och borgen, och skapar en **offert-PDF** med dina inkluderade och exkluderade poster.

Öppna den från {{ui:Exportera}} › {{ui:Anbudssammanställning och offert…}}. Allt i den sparas tillsammans med mätningen, och varje ändring kan ångras.

## Påslagen

Skriv en procentsats i var och en av de fem (lämna de andra på 0). De räknas ut i den här ordningen, var och en på det som ligger ovanför:

| Rad | Beräknas som |
|---|---|
| Material, Arbete | Kalkylens summor (grundanbudet när mätningen har [alternativ](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Lönebikostnad | Lönebikostnad % × arbete: arbetsgivaravgifter, försäkringar och förmåner på dina arbetslags löner. |
| **Kostnad** | Material + arbete + lönebikostnad. |
| Försäljningsmoms på material | Moms % × material. |
| Overhead | Overhead % × (kostnad + moms). |
| Vinst | Vinst % × (kostnad + moms + overhead). |
| Borgen | Borgen % × allt ovanför. |
| **Anbud** | Summan av raderna. |

Varje rad avrundas till närmaste öre. Arbetsboken visar samma rader under kalkylbladets totalsumma, med levande formler. Sammanställningen uppdateras medan du skriver: {{key:Enter}} bekräftar en procentsats. Varje alternativ visas med samma påslag på sin egen kostnad, så att ägaren ser vad det verkligen ändrar.

## Offerten

Fyll i vad offerten ska säga:

- **Projekt** (mätningens namn när det är tomt), **Till** (beställaren) och **Från** (ditt företag).
- **Ingår** och **Ingår inte**: en per rad; ett inledande streck eller en punkt går bra.
- **Villkor**: fri text, till exempel ”Gäller i 30 dagar.”
- **Lista poster och mängder**: omfattningen, post för post, med mängder och utan priser. Avbocka för ett fast pris.

Välj {{ui:Offert-PDF}}. PDF-filen (`<takeoff> - proposal.pdf`) har datumet, prisblocket med varje påslag och anbudet, alternativen, omfattningen, ingår och ingår inte, villkoren, samt rader att signera och datera på. Om vissa mängder inte kunde mätas (ett blad utan skala) står det under priset.

## I exporterna

När mätningen har en anbudssammanställning slutar CSV-filen med den, och arbetsboken får ett kalkylblad **Anbudssammanställning** med varje rad, dess procent och dess belopp. Se [Exportera kalkylen](topic:export-estimate).
