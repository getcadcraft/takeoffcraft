---
title: Velg linjene i PDF-en
summary: Klikk på en linje i en vektor-PDF for å måle hele den sammenhengende banen, eller klikk inni en lukket kontur for arealet, med gapstoleransen vist og én angring per segment.
keywords: bane, velg, linjeverk, linjer, sammenhengende, hel strekning, spor, kontur, omkrets, gap, toleranse, bro, segmenter, fane, vektor, areal fra linjer, p
from: c22526ae
---

På en vektor-PDF er veggene og kantene ekte linjer. {{ui:Bane}} ({{key:P}}) tar dem slik de er tegnet: ett klikk på en linje måler alt som er koblet til den, ende til ende, så du må ikke spore en vegg ved å klikke på hjørnene. Arket må ha en målestokk. En skannet side har ingen linjer å velge; bruk [Lineær](topic:measure-linear) eller [Areal](topic:measure-areas) der.

## Velg en bane eller en kontur

1. Velg {{ui:Bane}}. Linjen under pekeren markeres, med de andre banene den kunne vært tegnet som tynt.
2. Klikk på en linje: hele den sammenhengende banen velges. Linjen under verktøylinjen viser segmentene, lengden, gapstoleransen og hvor mange gap som ble overbygget. En bane som kommer tilbake til startpunktet er lukket, og rapporterer også omkretsen.
3. Eller klikk inni en lukket kontur, bort fra alle linjer: konturen rundt det punktet velges som et areal. Den minste kommer først; {{key:Tab}} prøver neste større.
4. Trykk {{key:Enter}} (eller høyreklikk, eller dobbeltklikk) for å legge til merkene. En valgt bane blir et merke i en **lineær** post, en kontur et merke i en **areal**-post: den aktive posten hvis den har den typen, ellers den nyeste av den typen. Uten noen åpnes skjemaet for ny post, og ingenting legges til før du trykker {{key:Enter}} igjen. Alt som er valgt, legges til i ett angringstrinn.

## Gapstoleransen

Tegnere etterlater små hull der linjer skal møtes. To linjer går sammen når endene deres er nærmere enn **gapstoleransen**. Den starter på 1,5 punkt på arket (vist i fot og tommer ved arkets målestokk), og en stiplet ring så bred følger pekeren og sitter på hver ende av banen under den. Hvert gap som ble overbygget, ringes oransje på en valgt bane, og linjen teller dem.

{{key:]}} gjør toleransen bredere, {{key:[}} smalere. En valgt bane sammenkobles på nytt med en gang ved den nye toleransen. I et knutepunkt fortsetter banen rett frem, den veien som bøyer minst, og forlater grenen.

## Taster

| Tast eller handling | Hva den gjør |
|---|---|
| Klikk | Velg banen under pekeren, eller konturen rundt den. |
| {{key:Shift}} + klikk | Legg til en annen bane eller kontur i det som er valgt. |
| {{key:Tab}} | Prøv neste bane under pekeren, eller neste større kontur. |
| {{key:Backspace}} eller {{key:Mod+Z}} | Fjern det siste segmentet fra den sist valgte banen, ett segment om gangen. En bane uten segmenter igjen forsvinner. Uten noe valgt er {{key:Mod+Z}} den vanlige angringen. |
| {{key:[}} og {{key:]}} | Smalere og bredere gapstoleranse. |
| {{key:Enter}} | Legg til merkene. |
| {{key:Esc}} | Fjern det som er valgt. |

## Greit å vite

- En kurve i tegningen er en kjede av korte rette stykker, så lengden er litt under den sanne buelengden. For en nøyaktig bue, mål tegningens egen fil ([Mål fra en tegning](topic:measure-from-a-drawing)).
- Et overbygget gap regnes som et rett hopp over det, så omkretsen til en lukket kontur inkluderer det.
- Bare streker og fyll i sidens egne baner er linjer. Tekst tegnet som bokstaver, og bilder, er det ikke.
