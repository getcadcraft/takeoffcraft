---
title: Send en pakke for tilbud
summary: Send en tilbudspakke på e-post til underentreprenører, la dem skrive inn priser på en side som ikke krever konto, hold prisene forseglet til åpningstidspunktet, og hent dem inn i nivelleringsarket.
keywords: send for tilbud, invitasjon, tilbudsinvitasjon, tilbyder, underentreprenør, invitere, e-post, prisforespørsel, forseglede tilbud, tilbudsåpning, tilbudsdag, sent tilbud, forfallsdato, påminnelse, underentreprenørregister, forsikring, kvalifisering, csv, koble til, ark-PDF
from: fb314b2c
---

{{ui:Eksporter}} › {{ui:Tilbudspakker og nivellering…}} › {{ui:Send for tilbud…}} sender én pakke til de du velger. Nettstedet sender hver av dem en e-post med en lenke; de åpner en side, ser omfanget og skriver inn en pris for hver linje. Du ser prisene i nivelleringsarket, klare til å sammenlignes ([Tilbudspakker og tilbudsnivellering](topic:bid-leveling)).

:::note
Sending er **ikke åpen for alle ennå.** Mens funksjonen testes, fungerer den for kontoer som CadCraft-teamet har aktivert; hvis din ikke er det, sier dialogen det. Tilbyderens side fungerer for alle invitasjoner som er sendt.
:::

## Før du sender

- Du trenger en CadCraft-konto med en bekreftet e-postadresse. TakeoffCraft i nettleseren ber deg om å **Koble til**: en fane åpnes på getcadcraft.com, du trykker Koble til, og den fanen får en pålogging som varer i 30 dager, bare for tilbudspakker, til du lukker TakeoffCraft-fanen. Du kan fjerne den når som helst på sikkerhetssiden din. Et Studio-vindu kan ikke sende ennå.
- Gi hver post et CSI-nummer: en pakke er postene i én CSI-divisjon ([Opprett mengdeuttakposter](topic:create-items)).
- Sett målestokk på arkene som pakkens merker ligger på, slik at mengdene tilbyderne ser er målt.

## Send en pakke

1. Velg {{ui:Send for tilbud…}} under pakken.
2. Fyll inn tittel, prosjekt og en valgfri melding, og **forfallstidspunktet** i din egen tidssone.
3. La **Hold priser forseglet** være avkrysset for å skjule alle priser til **åpningstidspunktet** (ikke før forfallstidspunktet), eller fjern krysset for å se priser etter hvert som de kommer.
4. La boksen for ark være avkrysset for å sende en PDF av arkene som holder pakkens merker, med merkene tegnet inn. Dine priser er aldri med i det som sendes: bare postnavn, CSI-nummer, mengder, enheter og arknavn.
5. Skriv inn personene du vil invitere, én per linje, som `Navn <navn@firma.no>` eller bare adressen, eller kryss av personer fra underentreprenørregisteret ditt. Opptil 60 om gangen, 100 per pakke.
6. Velg {{ui:Send invitasjoner}}. Hver person får én enkel e-post med ditt navn og din e-postadresse, forfallstidspunktet og lenken; svar går til deg.

Dialogen forteller hvor mange som ble sendt, og navner alle som ble hoppet over: allerede invitert til denne pakken, bedt om å ikke få tilbudsinvitasjoner, ugyldig adresse, eller over en sendegrense.

## Det tilbyderen ser

En side på en lang, privat lenke, uten pålogging. Den viser hvem som inviterte dem, forfallstidspunktet, om prisene er forseglet, meldingen din og PDF-en med ark, og deretter hver linje med mengde. For hver linje skriver de inn en pris eller krysser av for **Ikke inkludert**, og kan legge til et notat. De kan legge til notater for hele pakken og opptil 3 filer (et tilbud, et omfangsbrev, et sertifikat). De kan lagre på nytt og endre prisene sine til åpningen, eller **avslå**, med en boks for å be CadCraft om ikke å sende dem tilbudsinvitasjoner igjen.

## Forseglede tilbud og åpningen

Før åpningstidspunktet ser **ingen** en pris, et notat eller en fil: verken du, i TakeoffCraft, eller på siden din for Tilbudspakker. Du ser hvem som ble invitert og om de har svart. Ved åpningstidspunktet vises alle tilbud med en gang. Et tilbud som lagres etter forfallstidspunktet, godtas og merkes **for sent**; nivelleringen tar det fortsatt med, og for sent er en merking, ikke en avgjørelse. Etter åpningen kan ikke en tilbyder endre en pris. Uten forsegling er et tilbud endelig når det har forfalt.

## Hent prisene

{{ui:Hent priser}} spør nettstedet og legger til hvert svar i pakken som et tilbud, merket **web**. TakeoffCraft spør også stille hver gang du åpner dialogen mens den er tilkoblet. Et tilbud der tilbyderen har lagret en ny versjon, oppdateres på stedet; et tilbud du har redigert, blir slik du etterlot det, til de sender en ny versjon. Hvert henting er ett trinn som {{key:Mod+Z}} angrer. Linjer som er utelatt, kommer med som omfanget tilbudet utelater, slik at nivelleringen fyller dem inn til din egen kostnad.

## På nettstedet

Kontoen din har to sider til når du kan sende. **Tilbudspakker** lister det du har sendt, hvem som har svart, de sene tilbudene og filene, og lar deg sende en påminnelse (en ny lenke; den gamle slutter å fungere), lukke, åpne igjen eller avbryte en pakke. **Underentreprenører** holder en oversikt for hvert firma: kontakter, fag, kvalifiseringssvar (års virksomhet, garantikapasitet, EMR, sikkerhetsrekord, fagforening eller åpen virksomhet, referanser), utløpsdatoer for lisens og forsikring, markert når de har passert eller er innen 30 dager, og deres tidligere tilbud. Importer og eksporter oversikten som CSV: én rad per kontakt, med kolonnene eksporten viser. Et firma du allerede har, oppdateres og blir aldri gjentatt.

## Hvem som ser hva, og hvor lenge

Tilbyderens priser, notater og filer går til deg og til CadCraft-teamet, som driver siden. De lagres i 24 måneder etter forfallsdatoen, filene i 180 dager; deretter slettes de. Tilbyderens e-postadresse er den du skrev inn; den brukes bare til å sende invitasjonen og eventuelle påminnelser for den. En adresse får høyst 3 invitasjoner per dag fra alle samlet, og du kan sende opptil 200 per dag.

## Ikke bygget ennå

Tilleggsdokumenter, tildelingsbrev, et godkjent omfangsark per tilbyder og automatiske påminnelser før en forsikring utløper, er ikke bygget. Se [Ikke bygget ennå](topic:not-built-yet).
