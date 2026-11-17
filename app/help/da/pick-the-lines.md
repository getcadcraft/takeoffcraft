---
title: Vælg PDF'ens linjer
summary: Klik på en linje i en vektor-PDF for at måle hele dens sammenhængende forløb, eller klik inde i en lukket kontur for dens areal, med hultolerancen vist og ét fortryd pr. segment.
keywords: sti, vælg, linjeføring, linjer, sammenhængende, hele forløb, spor, kontur, omkreds, hul, tolerance, bro, segmenter, fane, vektor, areal fra linjer, p
from: c22526ae
---

På en vektor-PDF er vægge og kanter rigtige linjer. {{ui:Sti}} ({{key:P}}) tager dem, som de er tegnet: ét klik på en linje måler alt, der er forbundet til den, fra ende til ende, så du ikke skal spore en væg ved at klikke på dens hjørner. Arket skal have en målestok. En skannet side har ingen linjer at vælge; brug [Lineær](topic:measure-linear) eller [Areal](topic:measure-areas) der.

## Vælg en sti eller en kontur

1. Vælg {{ui:Sti}}. Linjen under markøren tegnes op, og de andre stier, den kunne være, tegnes tyndt.
2. Klik på en linje: hele det sammenhængende forløb vælges. Linjen under værktøjslinjen viser dets segmenter, længde, hultolerancen og hvor mange huller, der blev overbrygget. En sti, der vender tilbage til sit startpunkt, er lukket og angiver også sin omkreds.
3. Eller klik inde i en lukket kontur, væk fra alle linjer: konturen omkring det punkt vælges som et areal. Den mindste kommer først; {{key:Tab}} prøver den næste største.
4. Tryk på {{key:Enter}} (eller højreklik, eller dobbeltklik) for at tilføje markeringerne. En valgt sti bliver til en markering af en **lineær** post, en kontur til en markering af en **areal**-post: den aktive post, hvis den har den type, ellers den nyeste af den type. Uden nogen åbnes formularen for ny post, og intet tilføjes, før du trykker {{key:Enter}} igen. Alt, der er valgt, tilføjes i ét fortryd-trin.

## Hultolerancen

Tegnere efterlader små huller, hvor linjer skulle mødes. To linjer forbindes, når deres ender er tættere end **hultolerancen**. Den starter på 1.5 punkt på arket (vist i fod og tommer ved arkets målestok), og en stiplet ring i den bredde følger markøren og sidder på hver ende af stien under den. Hvert hul, der blev overbrygget, markeres med en orange ring på en valgt sti, og linjen tæller dem.

{{key:]}} gør tolerancen bredere, {{key:[}} smallere. En valgt sti forbindes straks igen ved den nye tolerance. Ved et forgreningspunkt fortsætter stien lige ud, på den måde der bøjer mindst, og forlader grenen.

## Taster

| Tast eller handling | Hvad den gør |
|---|---|
| Klik | Vælg stien under markøren, eller konturen omkring den. |
| {{key:Shift}} + klik | Tilføj en anden sti eller kontur til det valgte. |
| {{key:Tab}} | Prøv den næste sti under markøren, eller den næste største kontur. |
| {{key:Backspace}} eller {{key:Mod+Z}} | Fjern det sidste segment fra den sidst valgte sti, ét segment ad gangen. En sti uden segmenter tilbage fjernes. Uden noget valgt er {{key:Mod+Z}} den almindelige fortryd. |
| {{key:[}} og {{key:]}} | Smallere og bredere hultolerance. |
| {{key:Enter}} | Tilføj markeringerne. |
| {{key:Esc}} | Ryd det valgte. |

## Godt at vide

- En kurve i tegningen er en kæde af korte rette stykker, så dens længde er en hårfin smule kortere end den sande bue. For en nøjagtig bue, mål ud fra tegningens egen fil ([Mål ud fra en tegning](topic:measure-from-a-drawing)).
- Et overbrygget hul tæller som et lige spring hen over det, så en lukket konturs omkreds inkluderer det.
- Kun streger og udfyldninger i sidens egne stier er linjer. Tekst tegnet som bogstaver, og billeder, er det ikke.
