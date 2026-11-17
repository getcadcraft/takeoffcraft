---
title: "Kontorlayoutet: grupperinger, delsummer, titel og overskrifter fra dine standardpolitikker"
summary: Slå tilføjelsen Standardpolitikker til, så kalkulationen, mængderne pr. ark, eksporterne og det en assistent læser, får kontorets listelayout, det samme som BimCraft's lister bruger.
keywords: kontorstandard, kontorlayout, standardpolitikker, tilføjelse, listelayout, gruppér efter type, gruppér efter ark, delsum, summer, titel, overskrifter, versaler, layout for kalkulation, layout for eksport, indstillinger
from: cfd2f30a
---

## Hvad du gør

Lad TakeoffCraft opsætte sine tabeller, som dit kontor udsender dem, uden at sætte det op i hvert mængdeudtræk. Layoutet angives én gang, under Standardpolitikker, og gælder for alle apps på denne computer: det du angiver i BimCraft eller CadCraft, er det TakeoffCraft bruger, og omvendt.

## Trin

1. Åbn **Indstillinger › Add-ons** og slå **Standardpolitikker** til. Den er slået fra, indtil du gør det; når den er slået fra, eller intet er angivet, er TakeoffCraft præcis, som den var.
2. Åbn **Indstillinger › Global › Standardpolitikker**, og find **Listelayout (kontorstandarden)**:

| Politik | Det den gør i TakeoffCraft |
|---|---|
| Gruppér lister efter | **Type** grupperer kalkulationen efter posttype (Lineær, Areal, Antal, Typet mængde). **Niveau** grupperer mængderne pr. ark efter deres ark. **Rum** og **Ingen gruppering** lader begge stå ugrupperet |
| Summer i lister | **En delsum under hver gruppe og en total** lægger en delsum under hver gruppe. Jobtotalen forbliver altid |
| Listens titel | En linje over tabellen, for eksempel `{schedule}: kontorlayout` |
| Kolonneoverskrifter | Som skrevet, I STORE BOGSTAVER eller Med store begyndelsesbogstaver |

3. Luk Indstillinger. Tabellerne følger med det samme.

## Hvad der tager layoutet

- **Mængder › Efter post** og **Efter ark**: gruppeoverskrifter, en delsum under hver gruppe, titlen og overskriftsskrivningen. En linje under titlen siger, hvilke dele din kontorstandard angav. Rækkerne er de samme rækker: du skriver stadig satser og spild i dem, og klikker på tal for at vælge deres markeringer. En komponent eller en anden betingelse bliver under sin post.
- **Den eksporterede kalkulation** (CSV og XLSX): de samme grupper og delsummer. I regnearket er en delsum en `SUBTOTAL`-formel over sin gruppe, og jobtotalen er også en, så intet tælles to gange.
- **Det en assistent læser**: `takeoff_estimate` og `takeoff_quantities` (pr. ark) tilføjer en `layout`-blok med grupperne, rækkerne og delsummerne, og angiver hvilke dele kontoret har sat.

## Hvad der beholder sit eget

- **Mængder › Efter areal** angiver sin egen gruppering (efter tilbudsområde) og beholder den.
- **Jobtotalen**, markeringerne i tilbudsoversigten og de alternative tilbud grupperes ikke om.
- En gruppering, som tabellen ikke har en kolonne til, udelades: kalkulationen har intet niveau, og mængderne pr. ark har ingen type.

## Godt at vide

- Politikkerne gemmes i denne browser for alle CadCraft-apps og følger med i standardpolitikfilen (**Gem til fil** / **Indlæs fra fil** samme sted), så et kontor kan dele én fil.
- En kalkulation eksporteret som CSV med grupper i er beregnet til at læse. For at hente en kalkulation tilbage som prisbibliotek eksporteres den uden gruppering.
- BimCraft's side af samme standard: lister, opsætninger og eksporter. TakeoffCraft har endnu ingen egne politikker, så der er intet afsnit Standardpolitikker under Indstillinger › TakeoffCraft.
