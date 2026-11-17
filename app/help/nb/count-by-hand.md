---
title: Tell for hånd
summary: Klikk på hver dør, armatur eller enhet for å telle den, kontroller tellingene, og rett feil.
keywords: tell, hver, ea, armaturer, dører, enheter, symboler, strektelling, klikktelling, manuell telling
from: 594f2980
---

En tellepost teller ting: dører, lysarmaturer, uttak, sanitærutstyr. Hvert klikk på arket legger til ett tellemerke. Telling trenger ingen målestokk.

## Tell

1. Lag eller klikk en tellepost under {{ui:Poster}} (type {{ui:Tell}}).
2. Velg {{ui:Tell}} på verktøylinjen, eller trykk {{key:C}}.
3. Klikk på hver enkelt på arket.
   Hvert klikk setter en prikk i postens farge, og postens antall går opp med én.
4. Gå til neste ark ({{key:PageDown}}) og fortsett å telle. Verktøyet blir på {{ui:Tell}}.
5. Trykk {{key:Esc}} når du er ferdig. TakeoffCraft går tilbake til {{ui:Velg}}.

Dra panorerer fortsatt, og hjulet zoomer mens du teller, så du kan bevege deg rundt på arket uten å legge til prikker.

:::tip
Klikk på tellepost for å markere prikkene på alle ark. Arkelisten viser da hvor mange det er på hvert ark, noe som hjelper deg å finne arkene du ikke har talt ennå.
:::

## Rett en telling

- **Fjern en prikk**: velg {{ui:Velg}} ({{key:V}}), klikk på prikken, og trykk {{key:Delete}} eller velg {{ui:Slett markering}}. Eller trykk {{key:Mod+Z}} rett etter et feilklikk.
- **Flytt en prikk**: velg den, og dra den.
- **Talt under feil post**: velg prikken og velg riktig tellepost i listen **Post** under **Valgt merke**.

## Prikkstørrelse, på skjermen og i PDF-en

Prikkene beholder én størrelse på skjermen uansett hvor mye du zoomer. For å endre den, åpne {{ui:Innstillinger}}, fanen TakeoffCraft, og velg **Størrelse på tellemarkør**: Ekstra liten, Liten, Middels (standard) eller Stor.

PDF-eksporten ({{ui:Eksporter}} › {{ui:Markert PDF}}) tegner hver prikk i samme størrelse på papiret, uansett arkstørrelse: en leser som viser PDF-en til 100 % ser prikkene like store som på skjermen. Der prikkene på et ark ellers ville røre hverandre, gjør eksporten prikkene på det arket mindre, slik at hver kan leses.

## Mange identiske symboler

For et symbol som gjentas mange ganger på et ark, prøv [Autotelling](topic:auto-count): merk ett, gjennomgå hva den finner, og legg dem alle til i ett trinn.

## Bruk tellinger i formler

En tellepost sin mengde er **N**. Sammenstillingskomponenter kan bruke den, for eksempel hengsler `N * 3` for dører. Se [Sammenstillinger og formler](topic:assemblies).
