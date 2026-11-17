---
title: Send en pakke til tilbud
summary: Mail en tilbudspakke til underentreprenører, lad dem skrive priser på en side, der ikke kræver konto, hold priserne forseglet indtil åbningstidspunktet, og hent dem ind i udjævningsarket.
keywords: send til tilbud, invitation, tilbudsinvitation, tilbudsgiver, underentreprenør, invitér, mail, prisforespørgsel, forseglede tilbud, tilbudsåbning, tilbudsdag, sent tilbud, forfaldsdato, påmindelse, underentreprenørregistrering, forsikring, kvalifikation, csv, forbind, ark-PDF
from: fb314b2c
---

{{ui:Eksportér}} › {{ui:Tilbudspakker og udjævning…}} › {{ui:Send til tilbud…}} sender én pakke til de personer, du vælger. Hjemmesiden mailer hver af dem et link; de åbner en side, ser omfanget og skriver en pris for hver linje. Du ser priserne i udjævningsarket, klar til sammenligning ([Tilbudspakker og tilbudsudjævning](topic:bid-leveling)).

:::note
Afsendelse er **endnu ikke åben for alle.** Mens funktionen testes, virker den for konti, som CadCraft-teamet har aktiveret; hvis din ikke er det, siger dialogen det. Tilbudsgiverens side virker for alle invitationer, der er sendt.
:::

## Før du sender

- Du skal have en CadCraft-konto med en bekræftet mailadresse. TakeoffCraft i browseren beder dig om at **Forbind**: en fane åbnes på getcadcraft.com, du trykker Forbind, og fanen får et login, der virker i 30 dage, kun til tilbudspakker, indtil du lukker TakeoffCraft-fanen. Du kan fjerne det når som helst på din sikkerhedsside. Et Studio-vindue kan ikke sende endnu.
- Giv hver post et CSI-nummer: en pakke er posterne i én CSI-division ([Opret poster](topic:create-items)).
- Angiv målestok for de ark, pakkens markeringer ligger på, så de mængder, tilbudsgiverne ser, er målt.

## Send en pakke

1. Vælg {{ui:Send til tilbud…}} under pakken.
2. Udfyld titel, projekt og en valgfri besked, samt **forfaldstidspunktet** i din egen tidszone.
3. Lad **Hold priserne forseglet** være markeret for at skjule alle priser indtil **åbningstidspunktet** (ikke før forfaldstidspunktet), eller fravælg det for at se priser, efterhånden som de kommer ind.
4. Lad feltet for ark være markeret for at sende en PDF af de ark, der har pakkens markeringer, med markeringerne tegnet ind. Dine priser er aldrig med i det, der sendes: kun postnavne, CSI-numre, mængder, enheder og arknavne.
5. Skriv de personer, der skal inviteres, én pr. linje, som `Navn <navn@firma.dk>` eller blot adressen, eller markér personer fra dine underentreprenørregistreringer. Op til 60 ad gangen, 100 pr. pakke.
6. Vælg {{ui:Send invitationer}}. Hver person får en almindelig mail med dit navn og din mailadresse, forfaldstidspunktet og linket; svar går til dig.

Dialogen fortæller, hvor mange der blev sendt, og nævner dem, der blev sprunget over: allerede inviteret til denne pakke, bedt om ikke at modtage tilbudsinvitationer, ugyldig adresse eller over en afsendelsesgrænse.

## Hvad tilbudsgiveren ser

En side på et langt privat link uden login. Den viser, hvem der inviterede dem, forfaldstidspunktet, om priserne er forseglet, din besked og PDF'en med ark, derefter hver linje med dens mængde. For hver linje skriver de en pris eller markerer **Ikke inkluderet** og kan tilføje en note. De tilføjer noter til hele pakken og op til 3 filer (et tilbud, et omfangsbrev, et certifikat). De kan gemme igen og ændre deres priser indtil åbningen, eller **afslå** med en boks til at bede CadCraft om ikke at sende dem tilbudsinvitationer igen.

## Forseglede tilbud og åbningen

Før åbningstidspunktet ser **ingen** en pris, en note eller en fil: hverken du, i TakeoffCraft eller på din side Tilbudspakker. Du ser, hvem der blev inviteret, og om de har svaret. Ved åbningstidspunktet vises alle tilbud på én gang. Et tilbud, der gemmes efter forfaldstidspunktet, accepteres og markeres **for sent**; udjævningen lister det stadig, og at være for sent er en markering, ikke en afgørelse. Efter åbningen kan en tilbudsgiver ikke ændre en pris. Uden forsegling er et tilbud endeligt, når det er forfaldent.

## Hent priserne

{{ui:Hent priser}} spørger hjemmesiden og tilføjer hvert svar til pakken som et tilbud markeret **web**. TakeoffCraft spørger også stille hver gang, du åbner dialogen, mens den er forbundet. Et tilbud, hvis tilbudsgiver har gemt en ny version, opdateres på stedet; et tilbud, du har redigeret, bliver som du efterlod det, indtil de sender en ny version. Hver hentning er ét trin, som {{key:Mod+Z}} fortryder. Linjer, der er udeladt, kommer med som det omfang, tilbuddet udelader, så udjævningen udfylder dem til din egen omkostning.

## På hjemmesiden

Din konto har to ekstra sider, når du kan sende. **Tilbudspakker** lister det, du har sendt, hvem der svarede, de sene tilbud og filerne, og lader dig sende en påmindelse (et nyt link; det gamle holder op med at virke), lukke, genåbne eller annullere en pakke. **Underentreprenører** gemmer en registrering for hvert firma: kontakter, fag, kvalifikationssvar (års erfaring, garantikapacitet, EMR, sikkerhedsrekord, fagforening eller ikke-fagforeningsvirksomhed, referencer), udløbsdatoer for licens og forsikring, markeret når de er overskredet eller inden for 30 dage, og deres tidligere tilbud. Importér og eksportér registreringerne som CSV: én række pr. kontakt, med de kolonner eksporten viser; et firma, du allerede har, opdateres og gentages aldrig.

## Hvem ser hvad, og hvor længe

Tilbudsgiverens priser, noter og filer går til dig og til CadCraft-teamet, som driver siden. De gemmes i 24 måneder efter forfaldsdatoen, filerne i 180 dage; derefter slettes de. Tilbudsgiverens mailadresse er den, du har indtastet; den bruges kun til at sende invitationen og eventuelle påmindelser for den. En adresse får højst 3 invitationer pr. dag fra alle samlet, og du kan sende op til 200 pr. dag.

## Ikke lavet endnu

Rettelsesblade, tildelingsbreve, en underskrevet omfangsliste pr. tilbudsgiver og automatiske påmindelser, inden en forsikring udløber, er ikke lavet endnu. Se [Ikke lavet endnu](topic:not-built-yet).
