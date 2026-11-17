---
title: Emner, revisioner og tegningens ændringslog
summary: Hold én emnehistorik sammen med arkitektens model: læs emnerne ind, registrér byggepladsinstrukser, værkstedstegninger og tilknyttede modeller mod et emne, og læs tegningens ændringslog.
keywords: emne, revision, revisioner, ændringslog, tegningens ændringslog, tegningsregister, byggepladsinstruks, værkstedstegning, tilknyttet model, udbud, konstruktion, emnehistorik, tilbudsliste, mængdeudtræk
from: 8d8f6e68
---

## Hvad du skal gøre

Arbejd ud fra den samme emnehistorik som resten af teamet. Se hvilke ark der er udsendt i hvilken revision, og registrér det, der sker på byggepladsen, mod det emne det hører til.

## Trin

1. Åbn **Emner og revisioner**.
2. Vælg **Læs en emnehistorik** og vælg filen `.issues.json`, der er gemt fra BimCraft eller en anden app. Dens emner og registreringer tilføjes til dine. Intet erstattes.
3. Vælg **Tilføj en registrering** for en byggepladsinstruks, en værkstedstegning, et markeringssæt, en tilknyttet model eller en note. Vælg det emne den hører til, og dens status. En fil du vælger registreres med navn, størrelse og SHA-256; filen bliver, hvor den er.
4. **Tegningens ændringslog** viser én række for hvert ark og én kolonne for hvert emne. En revision i parentes er udsendt igen uden ændringer.
5. **Hent ændringsloggen (CSV)** gemmer emnerne, arktabellen og registreringerne. **Gem emnehistorikken** skriver en fil, som de andre apps læser.

## Godt at vide

- **Registrér et emne** udsteder dine opmålte ark, fx med en tilbudsliste. **Ændringer siden** viser så, hvilke ark der er opmålt igen efter det emne.
- Historikken gemmes i mængdeudtrækfilen. Hver ændring kan fortrydes i ét trin.
- Læser du den samme fil to gange, tilføjes intet to gange. Når to kopier indeholder samme registrering, beholdes den nyeste.
