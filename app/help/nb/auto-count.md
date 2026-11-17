---
title: Autotell et symbol
summary: Tegn en boks rundt ett symbol, la TakeoffCraft finne de andre på dette arket eller på alle åpne ark, gå gjennom treffene med glidebryteren, og legg dem til i ett trinn.
keywords: vilkårlig vinkel, rotert, vridd, annen målestokk, ulik målestokk, autotelling, automatisk telling, symbolsøk, finn symboler, mønster, mal, treff, gjenkjenn, telleverktøy
from: fa68a6c1
---

{{ui:Autotelling}} finner hver kopi av et symbol etter at du har tegnet en boks rundt ett. Deretter går du gjennom treffene på arket og legger til de du godtar som telle-markeringer. Det er en hjelp, ikke en garanti: gå alltid gjennom treffene før du legger dem til.

## Finn symbolene

1. Lag eller klikk på en telle-post under {{ui:Poster}}.
2. Åpne et ark der symbolet finnes.
3. Velg {{ui:Autotelling}} i verktøylinjen, eller trykk {{key:S}}.
   Et felt vises øverst på arket: «Dra en boks rundt ett symbol på dette arket.»
4. For å søke i alle åpne ark, ikke bare dette, kryss av for {{ui:Søk i alle åpne ark}}.
5. Zoom inn slik at symbolet er lett å se, og dra deretter en boks tett rundt én kopi av det. Ta med hele symbolet; tomt papir rundt det blir kuttet bort.
   Feltet viser «Søker …» med en fremdriftslinje og en {{ui:Avbryt}}-knapp. Siden forblir responsiv: du kan zoome, panorere og bytte mellom ark. Velger du et annet verktøy, eller trykker {{key:Esc}}, avbrytes søket.
6. Når det er ferdig, vises treffene på arket som bokser i postens farge, og feltet viser et sammendrag, for eksempel «22 treff, 19 å legge til (3 allerede talt). Klikk på en boks for å avvise eller gjenopprette den.»

I {{ui:Autotelling}} tegner du en boks når du drar på arket, i stedet for å panorere. For å panorere holder du nede {{key:Space}} og drar, eller drar med midtknappen.

## Gå gjennom treffene

- **Klikk på en boks** for å avvise den. En avvist boks er stiplet og gjennomstreket. Klikk igjen for å gjenopprette den.
- **Flytt glidebryteren for {{ui:Treff}}** (50 % til 95 %, startet på 75 %). Høyere viser bare nære treff; lavere viser løsere. Glidebryteren filtrerer bare det som er funnet; den søker ikke på nytt.
- **Allerede talt**: treff på et sted som allerede har en telle-markering for denne posten, starter som avvist, slik at du ikke teller noe to ganger.
- **Andre ark**: når du søkte i alle åpne ark, bytter du mellom ark med arkelisten eller {{key:PageDown}} og går gjennom hvert enkelt. Sammendraget sier hvor mange ark som har treff.

## Legg dem til

Velg {{ui:Legg til}}. Knappen sier hvor mange, for eksempel «Legg til 19 markeringer».
Telle-markeringene legges til i midten av hver godkjent boks: «La til 19 telle-markeringer i «Dobbel stikkontakt». Ctrl+Z fjerner dem alle.»

Hele satsen er ett trinn i angrehistorikken, så ett {{key:Mod+Z}} fjerner den.

Vil du forkaste gjennomgangen uten å legge til noe, velg {{ui:Forkast}} eller trykk {{key:Esc}}. Velger du et annet verktøy, forkastes den også.

## Hva den finner, og hva den bommer på

TakeoffCraft sammenligner tegningen, som piksler, med symbolet du tegnet boksen rundt.

- Den finner symbolet når det er snudd 0°, 90°, 180° og 270°. Kryss av for {{ui:Hvilken som helst vinkel (tregere)}} i autotellingsfeltet før du tegner boksen, for å finne det i alle vinkler også: den prøver hver 15° og finjusterer deretter hvert treff til en grad og en halv grad. Det tar omtrent seks ganger så lang tid. Den finner ikke et speilvendt symbol (med mindre symbolet ser likt ut speilvendt).
- Med {{ui:Søk i alle åpne ark}} avkrysset søkes et ark i en annen målestokk i den størrelsen symbolet har der: et armatur tegnet i riktig målestokk på en 1/8" plan er halvparten så stort som på en 1/4" plan, og blir fortsatt funnet. Et slikt ark søkes også i boksens egen størrelse, for merkelapper og symboler som er skrevet ut i én størrelse på alle ark. Dette krever en målestokk på begge ark; et ark uten målestokk søkes bare i boksens størrelse.
- Svært like symboler kan treffe hverandre: en dobbel og en firedobbel stikkontakt, eller to armaturmerkelapper som bare skiller seg med én bokstav. Øk glidebryteren til bare de riktige er igjen, og avvis resten for hånd.
- Et symbol som krysses av andre linjer, skravur eller tekst, scorer lavere og kan trenge en lavere innstilling på glidebryteren.
- Svært små bokser avvises: «Boksen er for liten. Tegn den rundt hele symbolet.» En tom boks avvises også: «Boksen er nesten tom. Tegn den rundt et symbol.»
- Et ark som ville blitt svært stort i størrelsen som trengs for dette symbolet, hoppes over, og sammendraget sier «1 ark var for stort til å søke i ved denne symbolstørrelsen.» Tegn en boks rundt et større symbol, eller tell det arket for hånd.

Finnes ingenting, sier statuslinjen: «Ingen treff. Senk glidebryteren for treff, eller tegn boksen tettere rundt symbolet.»

## Hastighet og nettlesere

Søket kjører i en bakgrunnsprosess, så siden forblir responsiv, og du kan avbryte når som helst. Hvert ark tegnes først i arbeidsstørrelse på selve siden, noe som kan gjøre at et svært stort ark pauser et øyeblikk. Det kjører i nyeste Chrome, Edge, Firefox og Safari. Søk i mange ark tar lengre tid; fremdriftslinjen går ark for ark. Frakoblet fungerer autotelling når app-linjen viser {{ui:Klar frakoblet}}: {{ui:Lagre for frakoblet bruk}} beholder også bakgrunnsprosessen. Se [Arbeid frakoblet](common:offline).
