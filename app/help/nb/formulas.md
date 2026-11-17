---
title: Formelspråk
summary: Reglene for mengdeformler i sammensatte poster – variabler, operatorer, funksjoner, avrunding og alle feilmeldinger.
keywords: formel, uttrykk, syntaks, funksjoner, ceil, floor, round, min, max, abs, variabler, operatorer, beregning
from: 4da14575
---

Komponenter i sammensatte poster får mengden sin fra en formel. En formel er et lite aritmetisk uttrykk over postens målte verdier. Se [Sammensatte poster og formler](topic:assemblies) for eksempler.

## Variabler

| Postype | Variabel | Betydning |
|---|---|---|
| Lineær | `L` | Total lengde |
| Lineær | `H` | Postens høyde |
| Lineær | `A` | Veggareal, L × H, minus åpningene i strekninger som har dem (et uttak fra BimCraft). Når uttaket angir en målemetode, måles `A` etter den: åpninger ikke større enn metodens minste størrelse tas med, og det metoden trekker fra der vegger møtes, utelates. Merknaden under posten angir metoden |
| Lineær | `N` | Antall strekninger |
| Areal | `A` | Samlet netto areal (konturer minus utsparinger) |
| Areal | `P` | Samlet omkrets, inkludert kanter på utsparinger |
| Areal | `H` | Postens dybde eller tykkelse |
| Areal | `N` | Antall arealer |
| Tell | `N` | Antallet |

- Variabler er i postens enheter: se [Enheter](topic:units).
- Store og små bokstaver er det samme: `l` er `L`.
- Bare variablene for postens egen type fungerer. `P` på en lineær post gir `"P" er ikke en målt verdi her. Bruk L, H, A, N.`
- En tom høyde eller dybde er 0.

## Operatorer

| Skriv | Betydning |
|---|---|
| `+` | Addere |
| `-` eller `−` | Subtrahere, eller en negativ verdi |
| `*` eller `×` | Multiplisere |
| `/` eller `÷` | Dividere |
| `( )` | Gruppere |

Multiplikasjon og divisjon utføres før addisjon og subtraksjon: `L * 2 + 4` er (L × 2) + 4. Bruk parenteser når det er tvil.

Tall kan ha desimaler (`1.333`, `.5`) og eksponenter (`1e3` = 1000). Mellomrom ignoreres.

## Funksjoner

| Funksjon | Resultat | Eksempel |
|---|---|---|
| `ceil(x)` | Rund opp til et heltall | `ceil(67.5)` = 68 |
| `floor(x)` | Rund ned til et heltall | `floor(67.5)` = 67 |
| `round(x)` | Rund til nærmeste heltall, halvparten bort fra null | `round(2.5)` = 3 |
| `round(x, d)` | Rund til d desimaler (0 til 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Den minste verdien | `min(N, 10)` |
| `max(a, b, …)` | Den største verdien | `max(1, ceil(N / 12))` |
| `abs(x)` | Verdien uten fortegn | `abs(-3)` = 3 |

`ceil` og `floor` ignorerer små avrundingsfeil fra datamaskinen, så en verdi som skal være nøyaktig 1, aldri rundes opp til 2.

## Feil

En formel som ikke kan leses eller regnes ut, viser feilen under feltet, og komponenten utelates fra summene (overskriften {{ui:Quantities}} sier «Ufullstendig»). Meldinger:

| Melding | Løsning |
|---|---|
| Skriv inn en formel, for eksempel L eller ceil(L / 1.333) + 1. | Formelen er tom. |
| "X" er ikke en målt verdi her. Bruk … | Bruk en av de oppførte variablene. |
| "X" er ikke en funksjon her. Bruk ceil, floor, round, min, max, abs. | Bruk en av disse funksjonene. |
| "#" er ikke tillatt i en formel. | Fjern tegnet (enheter, `%`, `$` og `=` er ikke tillatt). |
| Det mangler en ")". / Det er en ")" uten "(". | Balanser parentesene. |
| Det mangler en verdi før ")". | Noe som `max(1, )`: fyll inn verdien. |
| Formelen slutter for tidlig. | Noe som `L *`: fullfør den. |
| Uventet "…". Mangler en operator? | To verdier ved siden av hverandre, som `2L`: skriv `2 * L`. |
| ceil() tar 1 verdi. | Gi funksjonen riktig antall verdier. |
| round(x, digits) trenger hele desimaltall fra 0 til 10. | Bruk et helt tall med desimaler. |
| Formelen deler på null. | Vanligvis er H 0: angi postens høyde eller dybde. |
| Formelen gir ikke et tall. | Resultatet er for stort til å være et tall. |
| Formelen er for lang (høyst 500 tegn). | Forkort den. |

## Trygg i utgangspunktet

En formel kan bare regne med variablene og funksjonene over. Den kan ikke kjøre kode eller lese noe annet, så en formel i en prosjektfil fra andre er harmløs.
