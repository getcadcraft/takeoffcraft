---
title: Tilbudspakker og tilbudsnivellering
summary: Del kalkylen inn i pakker etter fag, send omfanget for hver pakke til underentreprenører, sammenlign tilbudene som kommer inn på samme omfang, og bruk det valgte tilbudet som pakkens pris.
keywords: tilbudsnivellering, nivellering, tilbudspakke, underentreprenør, underentreprenørtilbud, omfang, utfylling, fag, csi-divisjon, sammenlign tilbud, lavest tilbud, tilbudsoversikt, tilbyder, tildeling, valgt tilbud, bruk et tilbud, underentreprenørpris
from: 856b3088
---

En hovedentreprenør sender hvert fags omfang til underentreprenører og sammenligner det som kommer tilbake. TakeoffCraft gjør begge deler fra mengdeuttaket: åpne {{ui:Eksporter}} › {{ui:Tilbudspakker og nivellering…}}.

## Pakker

Det finnes én pakke for hver CSI-divisjon postene dine bruker (de to første sifrene i en posts {{ui:CSI-nummer}}, se [Opprett mengdeuttakposter](topic:create-items)). Poster uten nummer får en egen pakke. Hver pakke viser sine poster, hvor mange ark merkene ligger på, og vår egen kostnad for den (materiell og arbeid før påslag, fra grunntilbudet).

Velg {{ui:Omfang som CSV}} for å laste ned det du sender til en underentreprenør: hver post med CSI-nummer, mengde, enhet og arkene den ligger på. Den har ingen priser. For materialleverandører har arbeidsbokens tilbudsforespørsel delelisten (se [Eksporter kalkylen](topic:export-estimate)).

## Legg inn tilbudene

1. I den tomme raden under pakken skriver du tilbyderens navn og tilbudsbeløpet, og velger {{ui:Legg til tilbudet}}.
2. Hvis et tilbud utelater en del av omfanget, åpner du listen {{ui:Utelatt}} og krysser av for disse postene.
3. For å rette et navn eller et beløp skriver du over det i tabellen. ×-knappen fjerner et tilbud.

Hver endring er ett trinn som {{key:Mod+Z}} angrer, og tilbudene lagres sammen med mengdeuttaket.

## Slik nivelleres tilbudene

Tilbud dekker sjelden samme omfang. Nivellering fyller hver utelatt post med en **utfylling** til vår egen kostnad, slik at hvert tilbud sammenlignes på hele pakken:

**Nivellert = tilbudet + utfyllingene**

Det laveste nivellerte tilbudet merkes **Lavest**; ved likhet gjelder det som ble lagt inn først. **Mot vår kostnad** er nivellert tilbud minus vår egen kostnad for pakken: negativt betyr under den. Et tilbud som ser lavest ut, kan tape når det manglende omfanget er regnet med.

Arbeidsboken får et regneark **Tilbudsnivellering** med hver pakke som har tilbud: vårt anslag, hvert tilbud, dets utfyllinger, den nivellerte summen og differansen, som levende formler, og hva hvert tilbud utelot.

## Bruk et tilbud som pakkens pris

Velg {{ui:Bruk}} på et tilbud, så blir det prisen for hele pakken i kalkylen din. Pakkens egen prising (postene, de andre betingelsene og de sammensatte delene) tas ut av jobbsummen, postene står igjen som mengder med dine egne satser som referanse, og én linje, **Valgt tilbud**, bærer tilbudets beløp. Poster tilbudet utelater, forblir til din egen kostnad, det som nivellering allerede regnet som utfylling. Velg et annet tilbud, eller velg samme igjen for å ta det tilbake; hvert er ett trinn som {{key:Mod+Z}} angrer.

I tilbudssammendraget er underentreprenørtilbudene én linje innenfor kostnaden: overhead, fortjeneste og kausjon legges oppå dem som på alle andre kostnader; merverdiavgift (bare på materiell) og lønnsbelastning (på arbeid) gjør ikke det. Arbeidsbokens ark Kalkyle har det valgte tilbudet som egen rad, og påslagsblokken legger det til, med levende formler. Materiallisten utelater en tildelt pakkes materiell, fordi underentreprenøren leverer det.

En pakke innenfor et alternativs tilbudsområde blir ikke prisfastsatt på nytt: alternativer og delsummer for tilbudsområder bruker fortsatt dine egne priser.

## Tilbud som kommer tilbake på e-post

Du trenger ikke skrive inn tilbudene for hånd. {{ui:Send for tilbud…}} under en pakke sender hver underentreprenør en lenke til en side der de skriver inn en pris for hver linje; {{ui:Hent priser}} henter det de sendte inn i denne tabellen. Se [Send en pakke for tilbud](topic:bid-invitations).

:::note
Å skrive inn et tilbud for hånd fungerer fortsatt, og et tilbud skrevet for hånd og et fra nettstedet står side om side. Tilbud som kom tilbake fra nettstedet, merkes **web** (eller **web, for sent** når de kom etter forfallstidspunktet). Prisen deres endres bare når tilbyderen sender en ny versjon, så dine egne endringer i det står til da.
:::
