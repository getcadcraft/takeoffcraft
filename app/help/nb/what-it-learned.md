---
title: Hva TakeoffCraft har lært av mengdeuttakene dine
summary: TakeoffCraft beholder symbolene du bekreftet med Autotelling, betingelsessettene dine, de sammensatte postene du bruker mest og mønstrene du gjentar på hver side, alt i mengdeuttakets egen fil. Se dem, bruk dem, slett dem.
keywords: lære, lært, læring, assistent, huske, symboler, maler, som forrige jobb, forrige jobb, betingelsessett, betingelser, gjenbruk, sammensatte poster, mest brukt, forslag, gjenta på hver side, hver side, tegningshode, mønster, tøm alt, glemme, personvern
from: 54d99e99
---

TakeoffCraft blir raskere jo flere mengdeuttak du gjør med det. Det lærer **bare av det du godtar**:

- symbolene du tegnet en boks rundt med [Autotelling](topic:auto-count), og deretter la til,
- betingelsessettene du lagrer,
- sammensatte poster du bruker (én gang per jobb),
- mønstrene av markeringer du gjentar på hver side.

Det er enkel matching på dine egne ark, det samme søket som Autotelling kjører. Det er ikke en trent modell. Alt det lærer lagres **i dette mengdeuttakets fil** (`.takeoff.json`), og ingenting sendes noe sted. For å ta det med til neste jobb, bruk [Som forrige jobb](topic:what-it-learned#same-as-last-job).

Velg {{ui:Learned}} på verktøylinjen (lyspæren, ved siden av {{ui:Auto count}}) for å se alt.

## Symboler

Når du tegner en boks rundt et symbol med {{ui:Auto count}} og velger {{ui:Add}}, beholdes symbolet du tegnet rundt, med treffgraden du godtok.

- I {{ui:Learned}} velger du {{ui:Find on this sheet}} eller {{ui:Find on every sheet}}. Den vanlige gjennomgangen for Autotelling åpnes: klikk på en boks for å utelate den, flytt glidebryteren, og legg dem så til. Ingenting legges til før du gjør det.
- Når du åpner et ark som ennå ikke har noen av et lært symbol, viser en linje øverst {{ui:Find …}} for det. {{ui:Not now}} skjuler den for det arket.
- Hvis mengdeuttaket ikke har en post med det navnet, legger tillegg av markeringene også til posten (ett angretrinn).
- Å legge til symbolet for samme post igjen teller mot den posten som allerede kjennes; et symbol som ser annerledes ut, beholdes som et andre.
- Som Autotelling finner den symbolet i rette vinkler og på ark med en annen målestokk.

## Betingelsessett

Et sett beholder et mengdeuttaks betingelser (poster med enheter, enhetspriser, svinn og sammensatte poster), uten markeringer.

1. I {{ui:Learned}} velger du {{ui:Save this takeoff's conditions as a set…}} og gir det et navn. Et sett med samme navn erstattes.
2. I et mengdeuttak som har settet, legger {{ui:Add}} inn betingelsene det ikke har fra før. Betingelser med samme navn og type røres ikke. Det er ett angretrinn.

## Som forrige jobb

Filen fra forrige jobb holder det den lærte. For å starte en ny jobb fra den:

1. Åpne de nye tegningene, og velg {{ui:Learned}} › {{ui:Same as last job…}}.
2. Velg `.takeoff.json`-filen fra forrige jobb.
3. Kryss av for hva som skal hentes inn: betingelsene (bare dem dette mengdeuttaket ikke har), og det som er lært (symboler, sett, sammensatte poster, mønstre). Velg så {{ui:Bring them in}}.

Betingelsene lagres også som et sett oppkalt etter den jobben. Markeringene og mengdene blir i sin egen fil. Det hele er ett angretrinn.

## Sammensatte poster du bruker mest

En post som har en sammensatt post, regnes som brukt én gang per jobb når den har en mengde og du lagrer mengdeuttaket. En jobb er settet av plantegninger den tas av, så å lagre det samme mengdeuttaket igjen teller ikke to ganger. Listen under {{ui:Assemblies you use most}} setter dem du bruker mest først. Den utelater dem dette mengdeuttaket allerede har. {{ui:Add}} legger den inn slik du sist brukte den, med alle delene.

## Gjenta på hver side

For markeringer som er like på hver side i et sett, som en tellings for tegningshode eller en vanlig detalj:

1. Velg markeringene på ett ark ([Velg markeringene](topic:copy-paste#select-the-marks)).
2. I {{ui:Learned}} velger du {{ui:Repeat the selected marks on every page…}}, gir mønsteret et navn og bekrefter.

Markeringene legges på alle andre åpne sider **av samme størrelse**, på samme sted, i ett angretrinn. Lengder og arealer legges bare på sider med samme målestokk; tellinger legges på alle sider av den størrelsen. En side som allerede har dem, hoppes over. Mønsteret beholdes, så sider du åpner senere får tilbudet i linjen, eller du kan bruke {{ui:Repeat on every page}} i listen.

## Se det, slett det

Alt som er lært, listes i {{ui:Learned}}. Søppelbøtta sletter ett ting. {{ui:Clear all}} sletter alt som er lært, og lar postene og markeringene dine være. Begge kan angres helt til du lukker mengdeuttaket, og begge lagres med mengdeuttaket.

For å slutte å lære i ett mengdeuttak, fjern avkryssingen for {{ui:Learn from this takeoff}}. Ingenting nytt læres, og det som er listet, blir stående til du sletter det.

## Greit å vite

- Eldre versjoner av TakeoffCraft åpner en fil med lærte ting normalt. De ignorerer den delen, og fjerner den hvis de lagrer filen igjen.
- Et lært symbol er et lite bilde av det du tegnet rundt, lagret i filen (noen kilobyte hver).
- Lærte symboler søkes etter på samme måte som Autotelling søker, så de samme begrensningene gjelder: [Autotelling av et symbol](topic:auto-count).
