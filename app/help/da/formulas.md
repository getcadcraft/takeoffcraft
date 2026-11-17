---
title: Formelsprog
summary: Reglerne for mængdeformler til kalkulationsenheder - variable, operatorer, funktioner, afrunding og alle fejlmeddelelser.
keywords: formel, udtryk, syntaks, funktioner, ceil, floor, round, min, max, abs, variable, operatorer, beregning
from: 4da14575
---

Komponenter i kalkulationsenheder får deres mængde fra en formel. En formel er et lille regneudtryk over postens målte værdier. Se [Kalkulationsenheder og formler](topic:assemblies) for gennemregnede eksempler.

## Variable

| Posttype | Variabel | Betydning |
|---|---|---|
| Lineær | `L` | Total længde |
| Lineær | `H` | Postens højde |
| Lineær | `A` | Vægareal, L × H, minus åbninger i de strækninger, der har dem (et mængdeudtræk fra BimCraft). Når mængdeudtrækket angiver en målemetode, måles `A` efter den: åbninger, der ikke er større end metodens mindste størrelse, medregnes, og det metoden fratrækker, hvor vægge mødes, udelades. Noten under posten angiver metoden |
| Lineær | `N` | Antal strækninger |
| Areal | `A` | Samlet nettoareal (konturer minus udsparinger) |
| Areal | `P` | Samlet omkreds, inklusive kanter på udsparinger |
| Areal | `H` | Postens dybde eller tykkelse |
| Areal | `N` | Antal arealer |
| Tæl | `N` | Antallet |

- Variable er i postens enheder: se [Enheder](topic:units).
- Store og små bogstaver er ens: `l` er `L`.
- Kun variablerne for postens egen type virker. `P` på en lineær post giver `"P" er ikke en målt værdi her. Brug L, H, A, N.`
- En tom højde eller dybde er 0.

## Operatorer

| Skriv | Betydning |
|---|---|
| `+` | Læg sammen |
| `-` eller `−` | Træk fra, eller en negativ værdi |
| `*` eller `×` | Gang |
| `/` eller `÷` | Divider |
| `( )` | Grupper |

Gang og division går før addition og subtraktion: `L * 2 + 4` er (L × 2) + 4. Brug parenteser, når du er i tvivl.

Tal kan have decimaler (`1.333`, `.5`) og eksponenter (`1e3` = 1000). Mellemrum ignoreres.

## Funktioner

| Funktion | Resultat | Eksempel |
|---|---|---|
| `ceil(x)` | Rund op til et helt tal | `ceil(67.5)` = 68 |
| `floor(x)` | Rund ned til et helt tal | `floor(67.5)` = 67 |
| `round(x)` | Rund til nærmeste hele tal, halve væk fra nul | `round(2.5)` = 3 |
| `round(x, d)` | Rund til d decimaler (0 til 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Den mindste værdi | `min(N, 10)` |
| `max(a, b, …)` | Den største værdi | `max(1, ceil(N / 12))` |
| `abs(x)` | Værdien uden fortegn | `abs(-3)` = 3 |

`ceil` og `floor` ignorerer små afrundingsfejl i computeren, så en værdi, der skal være præcis 1, aldrig afrundes op til 2.

## Fejl

En formel, der ikke kan læses eller beregnes, viser sin fejl under feltet, og komponenten udelades af totalerne ({{ui:Mængder}}-overskriften siger "Ufuldstændig"). Meddelelser:

| Meddelelse | Løsning |
|---|---|
| Angiv en formel, f.eks. L eller ceil(L / 1.333) + 1. | Formlen er tom. |
| "X" er ikke en målt værdi her. Brug … | Brug en af de anførte variable. |
| "X" er ikke en funktion her. Brug ceil, floor, round, min, max, abs. | Brug en af disse funktioner. |
| "#" er ikke tilladt i en formel. | Fjern tegnet (enheder, `%`, `$` og `=` er ikke tilladt). |
| Der mangler en ")". / Der er en ")" uden sin "(". | Balancér parenteserne. |
| Der mangler en værdi før ")". | F.eks. `max(1, )`: udfyld værdien. |
| Formlen slutter for tidligt. | F.eks. `L *`: afslut den. |
| Uventet "…". Mangler en operator? | To værdier ved siden af hinanden, f.eks. `2L`: skriv `2 * L`. |
| ceil() tager 1 værdi. | Giv funktionen det rigtige antal værdier. |
| round(x, digits) kræver hele cifre fra 0 til 10. | Brug et helt antal decimaler. |
| Formlen dividerer med nul. | Typisk er H 0: angiv postens højde eller dybde. |
| Formlen giver ikke et tal. | Resultatet er for stort til at være et tal. |
| Den formel er for lang (højst 500 tegn). | Forkort den. |

## Sikker by design

En formel kan kun regne med de variable og funktioner ovenfor. Den kan ikke køre kode eller læse noget andet, så en formel i en projektfil, nogen sender dig, er harmløs.
