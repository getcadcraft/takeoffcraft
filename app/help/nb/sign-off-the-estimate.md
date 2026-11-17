---
title: Manglende priser og signering av kalkylen
summary: Se hvilke linjer i kalkylen som har en mengde og ingen pris, signer kalkylen med navnet ditt slik at filen registrerer hvem, når og hvilken totalsum, og klikk på et tall for å velge markeringene det kommer fra.
keywords: kalkyle, signering, signert, godkjenne, godkjenning, manglende pris, ingen pris, upriset, pris, totalsum, mengdeingeniør, registrering, revisjon, velg markeringer, tall, spore
from: 9acf71ef
---

## Hva du skal gjøre

Kontroller at hver linje i kalkylen er priset, og sett så navnet ditt under den. Mengdeuttaksfilen registrerer hvem som signerte, når, og for hvilken totalsum.

## Linjer uten pris

I **Mengder › Etter post** har en linje som har en mengde men ingen materiale- eller arbeidspris, **Ingen pris**, og linjen over tabellen sier hvor mange det er. En slik linje legger ingenting til totalen. En post uten egen pris blir ikke flagget når en av komponentene er priset: en sammensatt post prises gjennom delene sine. Den eksporterte kalkylen skriver **Ingen pris** i merknadskolonnen for hver slik linje og teller dem.

## Signer kalkylen

1. Klikk **Signer kalkylen** over mengdetabellen.
2. Dialogen oppgir totalsummen du signerer og lister linjene uten pris. Skriv inn navnet ditt og, hvis du vil, rollen din.
3. Klikk **Signer**. Linjen leser nå «Signert av … den …» med totalsummen. Lagre mengdeuttaket for å beholde det i filen.

Signeringen gjelder tallene du signerte. Enhver senere endring av en mengde, en pris eller en linje fjerner den, og TakeoffCraft sier fra. Angre henter tilbake kalkylen du signerte, og signeringen med den. Å gi nytt navn til en linje er ikke en endring av et tall. **Fjern signeringen** tar den bort.

En mengdeuttaksfil som ble redigert utenfor TakeoffCraft etter at den ble signert, åpnes uten signeringen, med en merknad om det. Den eksporterte kalkylen (CSV og XLSX) nevner signeringen under totalsummene.

Bare en person kan signere. En KI-assistent kan lese om kalkylen er signert og hvilke priser som mangler; den har ingen måte å signere på.

## Klikk på et tall for å se hvor det kommer fra

Klikk på en mengde eller et beløp på en linje for å velge markeringene det ble målt fra. Når de ligger på et annet ark, åpnes det arket. Klikk på et tall på linjen **Sum for jobben** for å velge alle markeringene på arket. En skrevet mengde har ingen markeringer.

## Godt å vite

- Signeringen registrerer et navn slik det er skrevet inn. Det er en post i filen, ikke en elektronisk signatur.
- Når tilbudspakker er tildelt underleverandører, eller alternativer er med i mengdeuttaket, er totalsummen som signeres grunntilbudet vist som **Sum for jobben**.
