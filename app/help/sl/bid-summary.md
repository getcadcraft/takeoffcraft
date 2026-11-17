---
title: Povzetek ponudbe in predlog
summary: Dodajte dodatne stroške dela, davek na promet, splošne stroške, dobiček in jamstvo k oceni, napišite vključitve in izključitve ter prenesite PDF predloga za pošiljanje.
keywords: ponudba, dodatni stroški dela, obremenitev, plače, predlog, ponudba, splošni stroški, dobiček, dodatek, marža, davek na promet, jamstvo, vključitve, izključitve, pogoji, podpis, naročnik, cena
from: 3208a561
---

Ocena cenuje to, kar ste predizmerili. **Povzetek ponudbe** jo spremeni v ceno: doda davek na promet, splošne stroške, dobiček in jamstvo ter naredi **PDF predloga** z vašimi vključitvami in izključitvami.

Odprite ga iz {{ui:Izvoz}} › {{ui:Povzetek ponudbe in predlog…}}. Vse v njem je shranjeno skupaj s predizmero, vsako spremembo pa lahko razveljavite.

## Dodatki

Vpišite odstotek v katerega koli od petih (ostale pustite na 0). Izračunajo se v tem vrstnem redu, vsak na tistem nad njim:

| Vrstica | Izračunano kot |
|---|---|
| Material, delo | Skupne vrednosti ocene (osnovna ponudba, če ima predizmera [alternative](topic:bid-areas#alternatives-base-bid-plus-adds-and-deducts)). |
| Dodatni stroški dela | Odstotek dodatnih stroškov × delo: davki na plače, zavarovanje in ugodnosti za plače vaših ekip. |
| **Strošek** | Material + delo + dodatni stroški dela. |
| Davek na promet na material | Odstotek davka × material. |
| Splošni stroški | Odstotek splošnih stroškov × (strošek + davek). |
| Dobiček | Odstotek dobička × (strošek + davek + splošni stroški). |
| Jamstvo | Odstotek jamstva × vse zgoraj. |
| **Ponudba** | Vsota vrstic. |

Vsaka vrstica je zaokrožena na cent. Delovni zvezek kaže iste vrstice pod skupnim zneskom lista Ocena z živimi formulami. Povzetek se posodablja, medtem ko tipkate: {{key:Enter}} potrdi odstotek. Vsaka alternativa je prikazana z enakimi dodatki na lastnem strošku, tako da naročnik vidi, kaj se z njo res spremeni.

## Predlog

Vpišite, kaj naj predlog pove:

- **Projekt** (ime predizmere, če je prazno), **Za** (naročnik) in **Od** (vaše podjetje).
- **Vključitve** in **Izključitve**: ena na vrstico; vodilna pomišljaj ali alineja je v redu.
- **Pogoji**: prosto besedilo, na primer „Veljavno 30 dni.“
- **Navedi postavke in količine**: obseg, postavka za postavko, z količinami in brez cen. Odznačite za predlog po paušalu.

Izberite {{ui:PDF predloga}}. PDF (`<takeoff> - proposal.pdf`) ima datum, cenovni blok z vsakim dodatkom in ponudbo, alternative, obseg, vključitve in izključitve, pogoje ter vrstice za podpis in datum. Če nekaterih količin ni bilo mogoče izmeriti (list brez merila), to pove pod ceno.

## V izvozih

Ko ima predizmera povzetek ponudbe, se CSV konča z njim, delovni zvezek pa dobi list **Povzetek ponudbe** z vsako vrstico, njenim odstotkom in zneskom. Glejte [Izvoz ocene](topic:export-estimate).
