---
title: Utgaver, revisjoner og endringslogg for tegninger
summary: Hold én utgavehistorikk sammen med arkitektens modell: les inn utgavene, før byggeplassinstrukser, verkstedtegninger og koblede modeller mot en utgave, og les endringsloggen for tegninger.
keywords: utgave, revisjon, revisjoner, endringslogg, endringslogg for tegninger, tegningsregister, byggeplassinstruks, verkstedtegning, koblet modell, anbud, bygging, utgavehistorikk, mengdebeskrivelse, mengdeuttak
from: 8d8f6e68
---

## Hva du skal gjøre

Arbeid fra samme utgavehistorikk som resten av teamet. Se hvilke ark som gikk ut ved hvilken revisjon, og før det som skjer på byggeplassen mot utgaven det hører til.

## Trinn

1. Åpne **Utgaver og revisjoner**.
2. Velg **Les en utgavehistorikk** og velg filen `.issues.json` som er lagret fra BimCraft eller en annen app. Utgavene og postene i den legges til i din. Ingenting erstattes.
3. Velg **Legg til en post** for en byggeplassinstruks, en verkstedtegning, et sett med markeringer, en koblet modell eller et notat. Velg utgaven det gjelder og statusen. En fil du velger registreres med navn, størrelse og SHA-256; filen blir liggende der den er.
4. **Endringslogg for tegninger** viser én rad for hvert ark og én kolonne for hver utgave. En revisjon i parentes ble utstedt på nytt uendret.
5. **Last ned endringsloggen (CSV)** lagrer utgavene, arktabellen og postene. **Lagre utgavehistorikken** skriver en fil som de andre appene kan lese.

## Greit å vite

- **Registrer en utgave** utsteder de målte arkene dine, for eksempel med en mengdebeskrivelse. **Endringer siden** viser deretter hvilke ark som er målt på nytt etter den utgaven.
- Historikken lagres i mengdeuttaksfilen. Hver endring kan angres i ett trinn.
- Å lese samme fil to ganger legger ikke til noe to ganger. Når to kopier har samme post, beholdes den nyeste.
