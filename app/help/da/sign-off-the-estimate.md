---
title: Manglende priser og godkendelse af kalkulationen
summary: Se hvilke linjer i kalkulationen der har en mængde og ingen pris, godkend kalkulationen under dit navn, så filen registrerer hvem, hvornår og hvilken total, og klik på et tal for at vælge de markeringer det stammer fra.
keywords: kalkulation, godkend, godkendt, godkendelse, manglende pris, ingen pris, upriset, pris, total, mængdemåler, dokumentation, kontrol, markeringer, vælg markeringer, tal, spor
from: 9acf71ef
---

## Hvad du gør

Kontrollér at hver linje i kalkulationen har en pris, og sæt derefter dit navn på den. Mængdeudtrækfilen registrerer hvem der godkendte, hvornår og for hvilken total.

## Linjer uden pris

I **Mængder › Pr. post** har en linje der har en mængde og ingen materiale- eller lønpris, **ingen pris**, og linjen over tabellen siger hvor mange der er. Sådan en linje lægger intet til totalen. En post uden egen pris markeres ikke, når en af dens komponenter er prissat: en kalkulationsenhed prissættes gennem sine dele. Den eksporterede kalkulation skriver **Ingen pris** i kolonnen Noter for hver sådan linje og tæller dem.

## Godkend kalkulationen

1. Klik på **Godkend kalkulationen** over mængdetabellen.
2. Dialogen angiver den total du godkender og lister linjerne uden pris. Skriv dit navn og, hvis du vil, din rolle.
3. Klik på **Godkend**. Linjen siger nu »Godkendt af … den …« med totalen. Gem mængdeudtrækket for at beholde det i filen.

Godkendelsen hører til de tal du godkendte. Enhver senere ændring af en mængde, en pris eller en linje fjerner den, og TakeoffCraft siger til dig. Fortryd genskaber den kalkulation du godkendte, og dens godkendelse med den. Omdøbning af en linje er ikke en ændring af et tal. **Fjern godkendelsen** tager den væk.

En mængdeudtrækfil der blev redigeret uden for TakeoffCraft efter den blev godkendt, åbnes uden godkendelsen, med en note der siger det. Den eksporterede kalkulation (CSV og XLSX) nævner godkendelsen under totalerne.

Kun en person godkender. En AI-assistent kan læse om kalkulationen er godkendt, og hvilke priser der mangler; den har ingen måde at godkende på.

## Klik på et tal for at se hvor det kommer fra

Klik på en mængde eller et beløb på en linje for at vælge de markeringer, den blev målt ud fra. Når de ligger på et andet ark, åbnes det ark. Klik på et tal i linjen **Jobtotal** for at vælge hver markering på arket. En indtastet mængde har ingen markeringer.

## Godt at vide

- Godkendelsen registrerer et navn som det er skrevet. Det er en registrering i filen, ikke en elektronisk underskrift.
- Når tilbudspakker er tildelt underleverandører eller alternativer i mængdeudtrækket, er den godkendte total grundtilbuddet vist som **Jobtotal**.
