---
title: Auto-tæl et symbol
summary: Tegn en boks om ét symbol, lad TakeoffCraft finde de andre på dette ark eller på alle åbne ark, gennemgå matchene med skyderen, og tilføj dem i ét trin.
keywords: enhver vinkel, roteret, drejet, anden målestok, anden skala, auto-tælling, automatisk tælling, symbolsøgning, find symboler, mønster, skabelon, match, registrér, tælleværktøj
from: fa68a6c1
---

{{ui:Auto-tælling}} finder alle kopier af et symbol, når du har tegnet en boks om ét. Derefter gennemgår du matchene på arket og tilføjer dem, du accepterer, som tællemærker. Det er en hjælp, ikke en garanti: gennemgå altid, før du tilføjer.

## Find symbolerne

1. Opret eller klik på en tællepost under {{ui:Poster}}.
2. Åbn et ark, hvor symbolet optræder.
3. Vælg {{ui:Auto-tælling}} på værktøjslinjen, eller tryk {{key:S}}.
   En linje vises øverst på arket: "Træk en boks om ét symbol på dette ark."
4. For at søge i alle åbne ark, ikke kun i dette, sæt flueben i {{ui:Søg i alle åbne ark}}.
5. Zoom ind, så symbolet er let at se, og træk derefter en boks tæt om ét eksemplar af det. Medtag hele symbolet; tomt papir omkring det beskæres.
   Linjen viser "Søger…" med en statuslinje og knappen {{ui:Annuller}}. Siden forbliver responsiv: du kan zoome, panorere og skifte mellem ark. Hvis du vælger et andet værktøj eller trykker {{key:Esc}}, annulleres søgningen.
6. Når den er færdig, vises matchene på arket som bokse i postens farve, og linjen viser en oversigt, for eksempel "22 match, 19 at tilføje (3 allerede talt). Klik på en boks for at afvise eller gendanne den."

I {{ui:Auto-tælling}} tegner træk på arket en boks i stedet for at panorere. For at panorere skal du holde {{key:Space}} nede og trække, eller trække med midterknappen.

## Gennemgå matchene

- **Klik på en boks** for at afvise den. En afvist boks er stiplet og overstreget. Klik igen for at gendanne den.
- **Flyt skyderen {{ui:Match}}** (50 % til 95 %, startende ved 75 %). En højere værdi viser kun tætte match; en lavere viser løsere. Skyderen filtrerer kun det, der er fundet; den søger ikke igen.
- **Allerede talt**: match på et sted, der allerede har et tællemærke for denne post, starter afvist, så du ikke tæller noget to gange.
- **Andre ark**: når du har søgt i alle åbne ark, skifter du mellem ark med arklisten eller {{key:PageDown}} og gennemgår hvert enkelt. Oversigten siger, hvor mange ark der har match.

## Tilføj dem

Vælg {{ui:Tilføj}}. Knappen viser, hvor mange, for eksempel "Tilføj 19 tællemærker".
Tællemærkerne tilføjes i midten af hver accepteret boks: "Tilføjede 19 tællemærker til "Duplex receptacle". Ctrl+Z fjerner dem alle."

Hele pakken er ét fortrydelsestrin, så ét {{key:Mod+Z}} fjerner den.

For at lukke gennemgangen uden at tilføje noget, vælg {{ui:Kassér}} eller tryk {{key:Esc}}. Hvis du vælger et andet værktøj, kasseres gennemgangen også.

## Hvad det finder, og hvad det overser

TakeoffCraft sammenligner tegningen, som pixels, med det symbol du har markeret.

- Det finder symbolet drejet 0°, 90°, 180° og 270°. Sæt flueben i {{ui:Enhver vinkel (langsommere)}} på auto-tællingslinjen, før du tegner boksen, for også at finde det i enhver vinkel: den prøver hver 15° og finjusterer derefter hvert fund til en halv grad. Det tager cirka seks gange så lang tid. Den finder ikke et spejlvendt symbol (medmindre symbolet ser ens ud spejlvendt).
- Med {{ui:Søg i alle åbne ark}} sat af søges et ark i en anden målestok i den størrelse, symbolet har der: et armatur tegnet i målestok på en 1/8"-plan er halvt så stort som på en 1/4"-plan, og det findes stadig. Et sådant ark søges også i boksens egen størrelse, til mærker og symboler trykt i én størrelse på alle ark. Dette kræver en målestok på begge ark; et ark uden målestok søges kun i boksens størrelse.
- Meget ens symboler kan matche hinanden: en dupleks- og en quad-stikkontakt, eller to armaturmærker, der kun adskiller sig med ét bogstav. Hæv skyderen, indtil kun de rigtige er tilbage, og afvis resten manuelt.
- Et symbol, der krydses af andre linjer, skraveringer eller tekst, scorer lavere og kan kræve en lavere skyderindstilling.
- Meget små bokse afvises: "Den boks er for lille. Tegn den om hele symbolet." En tom boks afvises også: "Den boks er næsten tom. Tegn den om et symbol."
- Et ark, der ville være meget stort i den størrelse, som dette symbol kræver, springes over, og oversigten siger "1 ark var for stort til at søge i denne symbolstørrelse." Markér et større symbol, eller tæl det ark manuelt.

Hvis intet findes, siger statuslinjen: "Ingen match. Sænk match-skyderen, eller tegn boksen tættere om symbolet."

## Hastighed og browsere

Søgningen kører i en baggrundsproces, så siden forbliver responsiv, og du kan annullere når som helst. Hvert ark tegnes først i arbejdsstørrelse på selve siden, hvilket kan få et meget stort ark til at pause et øjeblik. Det kører i aktuelle versioner af Chrome, Edge, Firefox og Safari. Søgning i mange ark tager længere tid; statuslinjen flytter sig ark for ark. Offline virker auto-tælling, når appbjælken viser {{ui:Klar offline}}: {{ui:Gem til offline brug}} beholder også baggrundsprocessen. Se [Arbejde offline](common:offline).
